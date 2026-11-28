/* Fallback local das imagens institucionais.
 * Evita ícones quebrados quando fontes externas estão indisponíveis.
 * Não substitui a marca Unifor por uma marca não autorizada: o fallback
 * é identificado como símbolo do próprio protótipo acadêmico. */
(function(){
  "use strict";
  function replaceWhenBroken(image, local, fallbackAlt){
    let applied=false;
    function recover(){
      if(applied)return;
      applied=true;
      image.classList.add("is-media-fallback");
      image.alt=fallbackAlt;
      image.removeAttribute("referrerpolicy");
      image.src=local;
      if(image.matches(".hero__photo, .institutional-welcome__photo img")){
        const frame=image.closest(".hero__photo-frame, .institutional-welcome__photo");
        const caption=frame?.querySelector(".hero__photo-credit, span");
        if(caption)caption.textContent="Ilustração do protótipo";
      }
    }
    image.addEventListener("error",recover,{once:true});
    // Em imagens em cache, o erro pode ocorrer antes da instalação do listener.
    if(image.complete && image.naturalWidth===0)recover();
  }
  function init(){
    document.querySelectorAll(".institution-brand__logo").forEach(image=>
      replaceWhenBroken(image,"./assets/icone.svg","Símbolo ilustrativo do protótipo internacionaliza."));
    document.querySelectorAll(".hero__photo, .institutional-welcome__photo img").forEach(image=>
      replaceWhenBroken(image,"./assets/conexoes-globais.svg","Ilustração do protótipo sobre conexões internacionais"));
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});
  else init();
})();