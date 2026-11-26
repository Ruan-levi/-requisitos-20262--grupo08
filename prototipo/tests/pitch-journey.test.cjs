const {test}=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
const path=require('node:path');
const src=fs.readFileSync(path.join(__dirname,'../experience.js'),'utf8');
function render(hash){
  const view={innerHTML:''},list={innerHTML:''};
  const root={
    hidden:true,innerHTML:'',
    addEventListener(){},
    querySelector(q){
      if(q==='#xpContent')return view;
      if(['#xpDestinationResults','#xpUniResults','#xpGuideResults'].includes(q))return list;
      return null;
    }
  };
  const main={children:[{hidden:false},root]};
  const noop={addEventListener(){}};
  const document={
    body:{classList:{toggle(){}}},
    getElementById(id){return id==='portalApp'?root:id==='conteudo'?main:id==='localeButton'?noop:null;},
    querySelector(){return null;},addEventListener(){}
  };
  const window={scrollTo(){},matchMedia(){return {matches:true}}};
  const context={document,window,location:{hash},addEventListener(){},URL,console};
  vm.runInNewContext(src,context,{timeout:1500});
  return {content:view.innerHTML,results:list.innerHTML,navigation:root.innerHTML};
}
test('página Salamanca apresenta passos específicos e links da universidade',()=>{
  const p=render('#/destinos/salamanca').content;
  for(const text of ['Universidad de Salamanca','Movilidad','Marco de Convenios','https://usal.es/','https://internacional.usal.es/movilidad-in/','https://internacional.usal.es/programas/marco-convenios/','https://estudiantesinternacionales.usal.es/','https://internacional.usal.es/contacto/','nomeação','coordenador'])assert.ok(p.includes(text),'ausente: '+text);
  assert.match(p,/semestre|modalidade/);
});
test('dupla titulação demonstra diferença, instituições, edital e requerimento',()=>{
  const p=render('#/programas/dupla-titulacao').content;
  for(const text of ['Requerimento 175','Instituto Politécnico de Bragança','Berlin School of Economics and Law','Deggendorf Institute of Technology','Secretaria Acadêmica','intercâmbio comum','edital'])assert.ok(p.includes(text),'ausente: '+text);
});
test('documentos explica intercâmbio, dupla titulação e fontes oficiais',()=>{
  const p=render('#/documentos').content;
  for(const text of ['checklist','INTERCÂMBIO ACADÊMICO','DUPLA TITULAÇÃO','Requerimento 175','Secretaria Acadêmica','Guia do Intercambista'])assert.ok(p.toLowerCase().includes(text.toLowerCase()),'ausente: '+text);
});
test('jornada e planejamento incluem todos os países em vez de somente três',()=>{
  const home=render('#/painel').content;
  const plan=render('#/planejar').content;
  assert.ok(home.includes('Do primeiro interesse à candidatura'));
  assert.ok(home.includes('16'));
  for(const country of ['Países Baixos','Alemanha','México','Canadá','Portugal','Espanha','Argentina'])assert.ok(plan.includes(country),'país não encontrado: '+country);
});
test('catálogo público exibe filtros, resultados e link do portal de cada instituição',()=>{
  const p=render('#/destinos');
  assert.ok(p.content.includes('xpDestinationCountry'));
  assert.ok(p.content.includes('xpDestinationField'));
  assert.ok(p.results.includes('16 instituições'));
  assert.ok(p.results.includes('Portal oficial da universidade'));
  assert.ok(p.results.includes('Universidad de Salamanca'));
});
test('contatos distinguem canais oficiais e mantêm aviso acadêmico',()=>{
  const p=render('#/contatos').content;
  for(const text of ['dri@unifor.br','international@unifor.br','https://unifor.br/dri/contatos','Protótipo acadêmico'])assert.ok(p.includes(text),text);
});
