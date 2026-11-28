/* Interface de contas do Portal de Internacionalização.
   Usar apenas com um projeto Nhost próprio; sem simular autenticação offline. */
(function(){
  "use strict";
  const $=id=>document.getElementById(id);
  const client=window.PortalNhost.createClient(window.PORTAL_NHOST_CONFIG||{});
  let identity=null;
  let favoriteIds=new Set();
  let editorialCache=[];
  let lastMessage='';
  const ui=text=>window.PortalAccountLocale?.t(text)||text;
  const selects=$("favoriteDestination");
  const labels=new Map([...selects.options].map(opt=>[opt.value,opt.textContent]));
  function visible(element,show){element.hidden=!show;}
  function message(text,error=false){
    const box=$("authStatus");
    lastMessage=text;
    box.textContent=ui(text);
    box.classList.toggle("error",error);
    visible(box,!!text);
  }
  function busy(form,value){
    [...form.querySelectorAll("button,input,select,textarea")].forEach(input=>{input.disabled=value;});
  }
  function switchTab(which){
    const login=which==="login";
    visible($("loginPanel"),login);
    visible($("registerPanel"),!login);
    document.querySelectorAll("[data-tab]").forEach(button=>{
      const selected=button.dataset.tab===which;
      button.classList.toggle("selected",selected);
      button.setAttribute("aria-selected",String(selected));
    });
    message("");
  }
  document.querySelectorAll("[data-tab]").forEach(b=>b.addEventListener("click",()=>switchTab(b.dataset.tab)));
  function roleText(role){return ui(role==="docente"?"Professor / docente":role==="administrador"?"Administrador / gestor":"Aluno");}
  $("registerRole").addEventListener("change",event=>{
    const role=event.target.value;
    $("roleHelp").textContent=ui(role==="administrador"?
      "O cadastro solicita acesso de gestor. Somente uma autorização no banco habilitará as funções administrativas.":
      role==="docente"?"Área acadêmica para docentes, pesquisa e interesses pessoais. O perfil é autodeclarado.":"Área do estudante, com favoritos e checklist sincronizados.");
  });
  function renderFavorites(){
    const ul=$("favoritesList");ul.replaceChildren();
    if(!favoriteIds.size){
      const li=document.createElement("li");
      li.textContent=ui("Nenhuma universidade salva ainda.");
      ul.append(li);return;
    }
    for(const id of [...favoriteIds].sort()){
      const li=document.createElement("li");
      const a=document.createElement("a");
      a.href="./#/destinos/"+encodeURIComponent(id);
      a.textContent=[...selects.options].find(option=>option.value===id)?.textContent||labels.get(id)||id;
      const remove=document.createElement("button");
      remove.type="button";remove.textContent=ui("Remover");
      remove.addEventListener("click",async()=>{
        remove.disabled=true;
        try{await client.saveFavorite(id,false);favoriteIds.delete(id);renderFavorites();}
        catch(e){message(e.message,true);remove.disabled=false;}
      });
      li.append(a,remove);ul.append(li);
    }
  }
  async function refreshFavorites(){
    favoriteIds=new Set(await client.favorites());
    renderFavorites();
  }
  async function refreshProgress(){
    const list=await client.progress();
    const set=new Map(list.map(row=>[row.check_key,row.completed]));
    document.querySelectorAll("[data-check]").forEach(input=>{input.checked=!!set.get(input.dataset.check);});
  }
  function renderEditorialList(items){
    editorialCache=items;
    const box=$("editorialList");box.replaceChildren();
    const h=document.createElement("h3");h.textContent=ui("Conteúdos registrados");box.append(h);
    if(!items.length){const p=document.createElement("p");p.textContent=ui("Nenhum conteúdo editorial registrado.");box.append(p);return;}
    for(const item of items){
      const div=document.createElement("article");div.className="editor-item";
      const title=document.createElement("strong");title.textContent=item.title;
      const status=document.createElement("small");status.textContent=ui("Status:")+" "+item.status;
      const body=document.createElement("p");body.textContent=item.body;
      const source=document.createElement("a");source.textContent="Fonte oficial ↗";source.href=item.source_url;source.target="_blank";source.rel="noopener noreferrer";
      div.append(title,status,body,source);
      const buttons=document.createElement("div");
      for(const [value,label] of [["rascunho","Rascunho"],["revisao","Enviar à revisão"],["publicado","Publicar"]]){
        if(value===item.status)continue;
        const button=document.createElement("button");button.className="secondary";button.type="button";button.textContent=ui(label);
        button.addEventListener("click",async()=>{
          button.disabled=true;
          try{await client.updateEditorial(item.id,value);await refreshEditorial();message("Situação editorial atualizada.");}
          catch(e){message(e.message,true);button.disabled=false;}
        });
        buttons.append(button);
      }
      div.append(buttons);box.append(div);
    }
  }
  async function refreshEditorial(){renderEditorialList(await client.editorial());}
  async function showIdentity(account){
    identity=account;
    visible($("authGuest"),false);visible($("authDashboard"),true);
    $("accountGreeting").textContent=ui("Olá,")+" "+account.name+"!";
    $("accountDetails").textContent=ui("Perfil:")+" "+roleText(account.role)+(account.isAdmin?" · "+ui("Gestor autorizado"):"");
    visible($("teacherSection"),account.role==="docente");
    visible($("adminPending"),account.requestedRole==="administrador"&&!account.isAdmin);
    visible($("adminSection"),account.isAdmin);
    try{
      await Promise.all([refreshFavorites(),refreshProgress(),...(account.isAdmin?[refreshEditorial()]:[])]);
    }catch(e){message("Sua conta foi autenticada, mas há dados indisponíveis: "+e.message,true);}
  }
  $("loginForm").addEventListener("submit",async event=>{
    event.preventDefault();const form=event.currentTarget;
    busy(form,true);message("");
    try{
      const account=await client.login({email:$("loginEmail").value,password:$("loginPassword").value});
      const requested=$("loginRole").value;
      const allowed=requested==="administrador"?account.isAdmin:requested===account.role;
      if(!allowed){
        await client.logout();throw new Error(requested==="administrador"?
          "Esta conta ainda não recebeu autorização de gestor. Entre com seu perfil comum.":
          "O perfil escolhido não corresponde à sua conta. Selecione a opção correta.");
      }
      $("loginPassword").value="";
      await showIdentity(account);message("Autenticação concluída.");
    }catch(e){message(e.message,true);}
    finally{busy(form,false);}
  });
  $("registerForm").addEventListener("submit",async event=>{
    event.preventDefault();const form=event.currentTarget;
    if($("registerPassword").value!==$("registerConfirm").value){message("As senhas não coincidem.",true);return;}
    busy(form,true);message("");
    try{
      const result=await client.register({
        name:$("registerName").value,email:$("registerEmail").value,
        password:$("registerPassword").value,role:$("registerRole").value
      });
      form.reset();
      $("registerPassword").value="";$("registerConfirm").value="";
      if(client.session?.accessToken){await showIdentity(await client.loadIdentity());}
      message(result.needsVerification?
        "Cadastro solicitado. Verifique seu e-mail e confirme a conta antes de entrar. A aprovação de gestor é separada.":
        "Cadastro registrado. O acesso de gestor, caso solicitado, depende de aprovação no banco.");
    }catch(e){message(e.message,true);}
    finally{busy(form,false);}
  });
  $("logoutButton").addEventListener("click",async()=>{
    await client.logout();identity=null;
    visible($("authGuest"),true);visible($("authDashboard"),false);
    switchTab("login");message("Você saiu da conta.");
  });
  $("addFavorite").addEventListener("click",async()=>{
    const id=selects.value;
    if(favoriteIds.has(id)){message("Esta universidade já está na sua lista.");return;}
    const button=$("addFavorite");button.disabled=true;
    try{await client.saveFavorite(id,true);favoriteIds.add(id);renderFavorites();message("Universidade salva na sua conta.");}
    catch(e){message(e.message,true);}
    finally{button.disabled=false;}
  });
  $("checklist").addEventListener("change",async event=>{
    const input=event.target;if(!input.matches("[data-check]"))return;
    input.disabled=true;
    try{await client.saveProgress(input.dataset.check,input.checked);message("Checklist atualizado.");}
    catch(e){input.checked=!input.checked;message(e.message,true);}
    finally{input.disabled=false;}
  });
  $("editorialForm").addEventListener("submit",async event=>{
    event.preventDefault();if(!identity?.isAdmin){message("Acesso administrativo não autorizado.",true);return;}
    const form=event.currentTarget;busy(form,true);
    try{
      await client.createEditorial({
        title:$("editorialTitle").value,body:$("editorialBody").value,
        sourceUrl:$("editorialSource").value,status:$("editorialStatus").value
      });
      form.reset();await refreshEditorial();message("Conteúdo registrado no banco. Publicações só são visíveis quando aprovadas.");
    }catch(e){message(e.message,true);}
    finally{busy(form,false);}
  });
  async function start(){
    if(!client.configured){
      visible($("authUnavailable"),true);
      document.querySelectorAll("#authGuest input,#authGuest select,#authGuest button[data-auth-action]").forEach(el=>el.disabled=true);
      return;
    }
    try{const current=await client.restore();if(current)await showIdentity(current);}
    catch(e){message("Não foi possível restaurar a sessão: "+e.message,true);}
  }
  window.addEventListener('portal:language',()=>{
    $("registerRole").dispatchEvent(new Event('change'));
    if(identity){
      $("accountGreeting").textContent=ui("Olá,")+" "+identity.name+"!";
      $("accountDetails").textContent=ui("Perfil:")+" "+roleText(identity.role)+(identity.isAdmin?" · "+ui("Gestor autorizado"):"");
      renderFavorites();
      if(identity.isAdmin)renderEditorialList(editorialCache);
    }
    if(lastMessage && !$("authStatus").hidden)$("authStatus").textContent=ui(lastMessage);
  });
  start();
})();
