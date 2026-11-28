(function(){
"use strict";
const root=document.getElementById("publicList");
const ui=text=>window.PortalAccountLocale?.t(text)||text;
const config=window.PORTAL_NHOST_CONFIG||{};
const valid=/^[a-z0-9-]{3,64}$/.test(config.subdomain||"")&&/^[a-z0-9-]{3,40}$/.test(config.region||"");
function info(text){root.replaceChildren();const box=document.createElement("div");box.className="panel";const p=document.createElement("p");p.textContent=text;box.append(p);root.append(box);}
async function load(){
if(!valid){info(ui("Os comunicados aguardam a configuração do banco Nhost do projeto. As demais páginas públicas continuam acessíveis."));return;}
try{
const res=await fetch("https://"+config.subdomain+".graphql."+config.region+".nhost.run/v1",{
method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({query:"query PublishedEditorial { portal_editorial_entries(order_by:{created_at:desc},limit:30) { id title body source_url created_at } }"})
});
const data=await res.json();
if(!res.ok||data.errors?.length)throw Error(data.errors?.[0]?.message||"Não foi possível obter publicações.");
const entries=data.data?.portal_editorial_entries||[];
root.replaceChildren();
if(!entries.length){info(ui("Nenhum comunicado foi publicado ainda."));return;}
for(const item of entries){
const article=document.createElement("article");article.className="panel role-section";
const title=document.createElement("h2");title.textContent=item.title;
const desc=document.createElement("p");desc.textContent=item.body;
const source=document.createElement("a");
source.textContent=ui("Consultar fonte oficial ↗");
if(/^https:\/\//i.test(item.source_url||"")){source.href=item.source_url;source.target="_blank";source.rel="noopener noreferrer";}
else{source.removeAttribute("href");source.textContent=ui("Fonte não disponível");}
article.append(title,desc,source);root.append(article);
}
}catch(e){info(ui("Publicações indisponíveis no momento.")+" "+e.message);}
}
window.addEventListener('portal:language',load);
load();
})();