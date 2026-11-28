const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {runInNewContext}=require('node:vm');
const root=path.resolve(__dirname,'..');
const project=path.resolve(root,'..');
const file=p=>fs.readFileSync(path.resolve(root,p),'utf8');

test('documentação atual não apresenta autenticação Nhost como se estivesse funcionando',()=>{
  const tech=file('README.md');
  const main=fs.readFileSync(path.join(project,'README.md'),'utf8');
  assert.match(tech,/não possui login funcional|formulários bloqueados|serviço remoto pendente/i);
  assert.match(tech,/PT\/EN\/ES/);
  assert.match(tech,/não traduz automaticamente documentos oficiais/);
  assert.match(main,/Figma/);
  assert.match(main,/Nhost remoto/);
  assert.match(tech,/SRS IEEE 830 da P2/);
});
test('navegação mantém menu visível em notebooks e acessível em dispositivos estreitos',()=>{
  const css=file('theme.css'),html=file('index.html');
  assert.match(css,/@media\s*\(min-width:1025px\)\s*and\s*\(max-width:1370px\)/);
  assert.match(css,/@media\s*\(max-width:1024px\)/);
  assert.match(css,/\.site-header \.main-nav\.is-open/);
  assert.match(css,/\.main-nav\.is-open a\.mobile-account-link/);
  assert.match(html,/class="mobile-account-link" data-portal-account/);
  assert.match(html,/id="menuButton" aria-expanded="false"/);
});
test('imagens externas têm substitutos locais e alternativas descritivas',()=>{
  const fallback=file('media-fallback.js');
  assert.doesNotThrow(()=>new Function(fallback));
  for(const page of ['index.html','conta.html','publicacoes.html'])assert.match(file(page),/src="\.\/media-fallback\.js"/);
  assert.match(fallback,/assets\/icone\.svg/);
  assert.match(fallback,/assets\/conexoes-globais\.svg/);
  assert.match(fallback,/naturalWidth===0/);
  assert.match(file('theme.css'),/\.is-media-fallback/);
  assert.ok(fs.existsSync(path.join(root,'assets','icone.svg')));
  assert.ok(fs.existsSync(path.join(root,'assets','conexoes-globais.svg')));
});
test('sair da conta preserva a mensagem; trocar idioma atualiza textos dinâmicos',()=>{
  const ui=file('auth-ui.js'),dictionary=file('account-locale.js');
  assert.doesNotThrow(()=>new Function(ui));
  assert.doesNotThrow(()=>new Function(dictionary));
  assert.match(ui,/switchTab\("login"\);message\("Você saiu da conta\."\);/);
  assert.match(ui,/portal:language/);
  assert.match(ui,/PortalAccountLocale/);
  assert.match(ui,/renderFavorites\(\)/);
  assert.match(dictionary,/entries\.push/);
  assert.match(dictionary,/PortalAccountLocale=\{t,translate\}/);
  assert.match(dictionary,/No universities saved yet/);
});
test('origem e estrutura dos documentos históricos permanecem identificadas',()=>{
  const srs=fs.readFileSync(path.join(project,'Requisitos/Especificacao/06-SRS-IEEE830-P2.md'),'utf8');
  const ext=fs.readFileSync(path.join(project,'Requisitos/Especificacao/08-extensao-P3-cadastro-perfis.md'),'utf8');
  assert.match(srs,/UC01/);assert.match(srs,/UC09/);
  assert.match(ext,/UC10/);assert.match(ext,/UC16/);
  assert.match(ext,/não foi provisionado um projeto Nhost remoto/);
  assert.match(file('README.md'),/artefatos P1\/P2 são registros/);
});

test('imagem externa quebrada troca por SVG local sem confundir o crédito',()=>{
 const code=file('media-fallback.js');
 const caption={textContent:'Imagem de referência · Unifor'};
 function img(isPhoto){
  return{
   complete:true,naturalWidth:0,src:'https://external.example/missing.svg',alt:'Original',
   classList:{add(value){this[value]=true;}},
   addEventListener(){},removeAttribute(){},
   matches(){return isPhoto;},
   closest(){return {querySelector(){return caption;}};}
  };
 }
 const logo=img(false),photo=img(true);
 const document={readyState:'complete',querySelectorAll(sel){
  if(sel==='.institution-brand__logo')return [logo];
  if(sel==='.hero__photo, .institutional-welcome__photo img')return [photo];
  return [];
 }};
 assert.doesNotThrow(()=>runInNewContext(code,{document}));
 assert.equal(logo.src,'./assets/icone.svg');
 assert.equal(photo.src,'./assets/conexoes-globais.svg');
 assert.equal(caption.textContent,'Ilustração do protótipo');
 assert.equal(logo.alt,'Símbolo ilustrativo do protótipo internacionaliza.');
});
test('busca pública reconhece títulos de orientação e categorias em espanhol',()=>{
 const app=file('app.js');
 assert.match(app,/spanishCategories/);
 assert.match(app,/spanishGuideTitles\[guide.id\]/);
 assert.match(app,/const categoryLabel = id/);
 assert.match(app,/const searchable = \[guide.title.pt/);
});
