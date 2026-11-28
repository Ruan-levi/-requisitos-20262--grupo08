const {test}=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
const path=require('node:path');
const src=fs.readFileSync(path.join(__dirname,'../experience.js'),'utf8');
function render(hash,language='es'){
  const view={innerHTML:''},results={innerHTML:''};
  const root={
    hidden:true,innerHTML:'',addEventListener(){},
    querySelector(selector){
      if(selector==='#xpContent')return view;
      if(selector==='#xpGuideResults')return results;
      return null;
    }
  };
  const main={children:[{hidden:false},root]};
  const document={
    body:{classList:{toggle(){}}},
    getElementById(id){return id==='portalApp'?root:id==='conteudo'?main:id==='localeButton'?{addEventListener(){}}:null;},
    querySelector(){return null;},
    addEventListener(){}
  };
  const guides=[{
    id:'intercambio',category:'mobilidade',
    title:{pt:'Intercâmbio acadêmico',en:'Academic exchange'},
    summary:{pt:'Entenda os passos antes de partir.',en:'Find out what to do before departure.'},
    steps:{pt:['Consulte as orientações da DRI.'],en:['Read DRI guidance.']}
  }];
  const categories={mobilidade:{pt:'Intercâmbio e mobilidade',en:'Exchange and mobility'}};
  const context={document,window:{scrollTo(){},matchMedia(){return{matches:true}}},location:{hash},
    addEventListener(){},URL,console,state:{language},guides,categories,guideSources:{}};
  assert.doesNotThrow(()=>vm.runInNewContext(src,context,{timeout:2000}));
  return {view:view.innerHTML,results:results.innerHTML};
}
test('catálogo de orientações em espanhol não exibe títulos ou categorias vazios',()=>{
  const page=render('#/orientacoes');
  assert.match(page.results,/Intercambio académico/);
  assert.match(page.results,/Intercambio y movilidad/);
  assert.doesNotMatch(page.results,/\bundefined\b/);
  assert.match(page.view,/Orientaciones/);
});
test('detalhe de orientação em espanhol não quebra quando só há textos PT/EN',()=>{
  const page=render('#/orientacoes/intercambio');
  assert.match(page.view,/Intercambio académico/);
  assert.match(page.view,/Consulte as orientações da DRI/);
  assert.match(page.view,/Intercambio y movilidad/);
  assert.doesNotMatch(page.view,/\bundefined\b/);
});
test('catálogo de orientações preserva páginas em português e inglês',()=>{
  const pt=render('#/orientacoes/intercambio','pt').view;
  const en=render('#/orientacoes/intercambio','en').view;
  assert.match(pt,/Intercâmbio acadêmico/);
  assert.match(en,/Academic exchange/);
  assert.match(en,/Read DRI guidance/);
});
