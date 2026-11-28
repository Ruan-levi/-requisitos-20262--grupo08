/* Preferências compartilhadas: tema e idioma nas páginas públicas e de conta.
   O armazenamento contém somente escolhas visuais, nunca credenciais pessoais. */
(function(root){
  "use strict";
  const LANGUAGES=["pt","en","es"], THEMES=["light","dark"];
  const prefix="internacionaliza.preferences.";
  function read(key){
    try{return root.localStorage?.getItem(prefix+key)||null;}catch(_){return null;}
  }
  function save(key,value){
    try{root.localStorage?.setItem(prefix+key,value);}catch(_){}
  }
  const prefersDark=()=>{try{return !!root.matchMedia?.("(prefers-color-scheme: dark)")?.matches;}catch(_){return false;}};
  let language=LANGUAGES.includes(read("language"))?read("language"):"pt";
  let theme=THEMES.includes(read("theme"))?read("theme"):(prefersDark()?"dark":"light");
  const words={
    pt:{theme:"Alternar para modo escuro",themeDark:"Alternar para modo claro",language:"Idioma do portal",account:"Entrar / Cadastrar"},
    en:{theme:"Switch to dark mode",themeDark:"Switch to light mode",language:"Portal language",account:"Sign in / Register"},
    es:{theme:"Cambiar al modo oscuro",themeDark:"Cambiar al modo claro",language:"Idioma del portal",account:"Entrar / Registrarse"}
  };
  function paint(){
    const html=root.document?.documentElement;
    if(!html)return;
    html.dataset.theme=theme;
    html.style.colorScheme=theme;
    html.lang=language==="pt"?"pt-BR":language;
    root.document.querySelectorAll("[data-portal-theme]").forEach(button=>{
      const dark=theme==="dark";
      button.setAttribute("aria-label",dark?words[language].themeDark:words[language].theme);
      button.setAttribute("title",dark?words[language].themeDark:words[language].theme);
      button.setAttribute("aria-pressed",String(dark));
      const glyph=button.querySelector(".theme-glyph");
      if(glyph)glyph.textContent=dark?"☀":"☾";
    });
    root.document.querySelectorAll("[data-portal-language]").forEach(select=>{
      select.value=language;
      select.setAttribute("aria-label",words[language].language);
      select.setAttribute("title",words[language].language);
    });
    root.document.querySelectorAll("[data-portal-account]").forEach(a=>a.textContent=words[language].account);
  }
  function setTheme(next){
    if(!THEMES.includes(next)||next===theme)return false;
    theme=next;save("theme",theme);paint();
    root.dispatchEvent(new CustomEvent("portal:theme",{detail:{theme}}));return true;
  }
  function setLanguage(next){
    if(!LANGUAGES.includes(next)||next===language)return false;
    language=next;save("language",language);paint();
    root.dispatchEvent(new CustomEvent("portal:language",{detail:{language}}));return true;
  }
  function bind(){
    root.document.querySelectorAll("[data-portal-theme]").forEach(button=>{
      if(button.dataset.themeBound)return;
      button.dataset.themeBound="true";
      button.addEventListener("click",()=>setTheme(theme==="dark"?"light":"dark"));
    });
    root.document.querySelectorAll("[data-portal-language]").forEach(select=>{
      if(select.dataset.languageBound)return;
      select.dataset.languageBound="true";
      select.addEventListener("change",()=>setLanguage(select.value));
    });
    paint();
  }
  const api={get language(){return language;},get theme(){return theme;},setTheme,setLanguage,bind,availableLanguages:LANGUAGES};
  root.PortalPreferences=api;
  if(root.document?.readyState==="loading"){root.document.addEventListener("DOMContentLoaded",bind,{once:true});}
  else bind();
  root.document?.documentElement?.setAttribute("data-theme",theme);
  root.document?.documentElement?.setAttribute("lang",language==="pt"?"pt-BR":language);
})(typeof window!=="undefined"?window:globalThis);