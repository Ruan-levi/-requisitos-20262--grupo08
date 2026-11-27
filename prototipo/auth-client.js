/* Portal de Internacionalização — Nhost Auth REST e Hasura GraphQL.
   Sem admin secret no navegador. A aplicação requer backend Nhost configurado. */
(function(factory){
  const global=typeof window!=="undefined"?window:globalThis;
  const api=factory();
  global.PortalNhost=api;
  if(typeof module!=="undefined"&&module.exports)module.exports=api;
})(function(){
  "use strict";
  const ROLES=Object.freeze(["aluno","docente","administrador"]);
  function validConfig(config){
    return !!config&&/^[a-z0-9-]{3,64}$/.test(config.subdomain||"")&&/^[a-z0-9-]{3,40}$/.test(config.region||"");
  }
  function createClient(config={},options={}){
    const network=options.fetch||((...args)=>fetch(...args));
    const store=options.storage||(typeof sessionStorage!=="undefined"?sessionStorage:null);
    const key="portal08.nhost.session.v1";
    let session=null;
    const listeners=new Set();
    const base=validConfig(config)?{
      auth:"https://"+config.subdomain+".auth."+config.region+".nhost.run/v1",
      graphql:"https://"+config.subdomain+".graphql."+config.region+".nhost.run/v1"
    }:null;
    function onChange(fn){listeners.add(fn);return()=>listeners.delete(fn);}
    function notify(){for(const fn of listeners)try{fn(session);}catch(_e){}}
    function persist(value){
      session=value;
      if(store)try{if(value)store.setItem(key,JSON.stringify(value));else store.removeItem(key);}catch(_e){}
      notify();
    }
    function messageError(response,data){
      const detail=data?.message||data?.error||"Falha de comunicação com o servidor.";
      const err=new Error(typeof detail==="string"?detail:"Erro na solicitação.");
      err.status=response.status;
      return err;
    }
    async function request(url,body,token){
      if(!base)throw new Error("Nhost ainda não configurado. Informe o subdomínio e a região no arquivo auth-config.js.");
      const response=await network(url,{method:"POST",headers:{"content-type":"application/json",...(token?{"authorization":"Bearer "+token}:{})},body:JSON.stringify(body)});
      let data={};try{data=await response.json();}catch(_e){}
      if(!response.ok)throw messageError(response,data);
      return data;
    }
    async function gql(query,variables={}){
      if(!session?.accessToken)throw new Error("Faça login para consultar seus dados.");
      const data=await request(base.graphql,{query,variables},session.accessToken);
      if(data.errors?.length)throw new Error(data.errors.map(x=>x.message).join("; "));
      return data.data||{};
    }
    async function register({name,email,password,role}){
      if(!ROLES.includes(role))throw new Error("Tipo de cadastro inválido.");
      if(typeof name!=="string"||name.trim().length<2||name.trim().length>32)throw new Error("Informe um nome entre 2 e 32 caracteres.");
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email||""))throw new Error("Informe um e-mail válido.");
      if(typeof password!=="string"||password.length<10||password.length>50)throw new Error("A senha deve ter de 10 a 50 caracteres.");
      // Metadata é somente solicitação. Não concede privilégios Hasura.
      const body={email:email.trim().toLowerCase(),password,options:{displayName:name.trim(),metadata:{requested_role:role}}};
      const result=await request(base?.auth+"/signup/email-password",body);
      if(result.session?.accessToken){persist(result.session);await loadIdentity();}
      return {needsVerification:!result.session,roleRequested:role};
    }
    async function login({email,password}){
      if(!email||!password)throw new Error("Preencha e-mail e senha.");
      const result=await request(base?.auth+"/signin/email-password",{email:email.trim().toLowerCase(),password});
      if(!result.session?.accessToken)throw new Error("A autenticação requer verificação adicional ou não retornou uma sessão.");
      persist(result.session);
      try{return await loadIdentity();}catch(e){persist(null);throw e;}
    }
    async function restore(){
      if(!base)return null;
      let last=null;try{last=store&&JSON.parse(store.getItem(key)||"null");}catch(_e){}
      if(!last?.refreshToken)return null;
      try{
        const data=await request(base.auth+"/token",{refreshToken:last.refreshToken});
        if(!data.accessToken)throw new Error("Sessão inválida.");
        persist(data);
        return await loadIdentity();
      }catch(_e){persist(null);return null;}
    }
    async function loadIdentity(){
      const data=await gql("query AccountIdentity { portal_profiles(limit:1) { user_id display_name role requested_role } portal_admin_grants(limit:1) { user_id } }");
      const profile=data.portal_profiles?.[0];
      if(!profile)throw new Error("Perfil ainda não foi provisionado no Nhost. Confira migrations e permissões.");
      return {id:profile.user_id,name:profile.display_name,role:profile.role,requestedRole:profile.requested_role,isAdmin:!!data.portal_admin_grants?.length};
    }
    async function logout(){
      const last=session;persist(null);
      if(last?.refreshToken&&base)try{await request(base.auth+"/signout",{refreshToken:last.refreshToken},last.accessToken);}catch(_e){}
    }
    async function favorites(){
      const data=await gql("query SavedDestinations { portal_saved_destinations(order_by:{created_at:desc}) { destination_id } }");
      return (data.portal_saved_destinations||[]).map(x=>x.destination_id);
    }
    async function saveFavorite(destinationId,shouldSave){
      if(!/^[a-z0-9-]{2,50}$/.test(destinationId||""))throw new Error("Destino inválido.");
      return shouldSave?
        gql("mutation SaveDestination($destinationId:String!){insert_portal_saved_destinations_one(object:{destination_id:$destinationId}){destination_id}}",{destinationId}):
        gql("mutation DeleteDestination($destinationId:String!){delete_portal_saved_destinations(where:{destination_id:{_eq:$destinationId}}){affected_rows}}",{destinationId});
    }
    async function progress(){
      const data=await gql("query ChecklistProgress { portal_checklist_progress { check_key completed } }");
      return data.portal_checklist_progress||[];
    }
    async function saveProgress(key,completed){
      if(!/^[a-z0-9_:-]{2,70}$/.test(key||""))throw new Error("Etapa inválida.");
      return gql("mutation SaveProgress($key:String!,$done:Boolean!){insert_portal_checklist_progress_one(object:{check_key:$key,completed:$done},on_conflict:{constraint:portal_checklist_progress_pkey,update_columns:[completed]}){check_key completed}}",{key,done:!!completed});
    }
    async function editorial(){
      const data=await gql("query Editorial { portal_editorial_entries(order_by:{created_at:desc},limit:100) { id title body source_url status created_at } }");
      return data.portal_editorial_entries||[];
    }
    async function createEditorial({title,body,sourceUrl,status}){
      if(typeof title!=="string"||title.trim().length<5||title.trim().length>160)throw new Error("O título deve ter de 5 a 160 caracteres.");
      if(typeof body!=="string"||body.trim().length<12)throw new Error("O conteúdo está muito curto.");
      if(!/^https:\/\//i.test(sourceUrl||""))throw new Error("Informe uma URL de fonte oficial iniciada em https://.");
      if(!["rascunho","revisao","publicado"].includes(status))throw new Error("Status inválido.");
      return gql("mutation CreateEditorial($item:portal_editorial_entries_insert_input!){insert_portal_editorial_entries_one(object:$item){id title status}}",
        {item:{title:title.trim(),body:body.trim(),source_url:sourceUrl.trim(),status}});
    }
    async function updateEditorial(id,status){
      if(!/^[0-9a-f-]{36}$/i.test(id||""))throw new Error("Identificador editorial inválido.");
      if(!["rascunho","revisao","publicado"].includes(status))throw new Error("Status inválido.");
      return gql("mutation SetEditorialStatus($id:uuid!,$status:String!){update_portal_editorial_entries_by_pk(pk_columns:{id:$id},_set:{status:$status}){id status}}",{id,status});
    }
    return {configured:!!base,get session(){return session;},onChange,register,login,restore,loadIdentity,logout,favorites,saveFavorite,progress,saveProgress,editorial,createEditorial,updateEditorial};
  }
  return {createClient,validConfig,ROLES};
});