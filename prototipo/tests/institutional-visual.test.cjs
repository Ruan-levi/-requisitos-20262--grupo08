const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=(f)=>fs.readFileSync(path.join(root,f),'utf8');
const home=read('index.html'),accounts=read('conta.html'),posts=read('publicacoes.html');
const primary=read('institutional.css'),auth=read('institutional-auth.css'),config=read('auth-config.js');
test('Identidade Unifor nas páginas do portal, conta e comunicados',()=>{
 for(const [name,html] of [['portal',home],['contas',accounts],['comunicados',posts]]){
  assert.match(html,/institution-brand__logo/,name);
  assert.match(html,/Unifor_logo\.svg/,name);
  assert.match(html,/Diretoria de Relações Internacionais/,name);
 }
 assert.match(home,/institutional\.css/);
 assert.match(accounts,/institutional-auth\.css/);
 assert.match(posts,/institutional-auth\.css/);
});
test('Paleta institucional correta e layout responsivo',()=>{
 for(const c of ['#004AF7','#132190','#87B7FE','#E4F2FE']){assert.ok(primary.includes(c));assert.ok(auth.includes(c));}
 for(const css of [primary,auth]){
  assert.match(css,/@media\(max-width:/);
  assert.match(css,/prefers-reduced-motion/);
 }
 assert.match(primary,/\.xp-sidenav/);
 assert.match(primary,/\.xp-hero/);
 assert.match(primary,/\.xp-destination-card/);
});
test('Imagem da vida acadêmica com alt e fonte pública referenciada',()=>{
 assert.match(home,/hero__photo-frame/);
 assert.match(home,/Estudantes caminhando pelo campus/);
 assert.match(home,/unifor\.br\/documents/);
 assert.match(home,/Central de Marca Unifor/);
 assert.match(accounts,/Estudantes no campus da Universidade de Fortaleza/);
 assert.match(posts,/Comunidade acadêmica da Universidade de Fortaleza/);
});
test('Identificação de protótipo não oficial permanece explícita',()=>{
 assert.match(home,/Demonstração · Grupo 08/);
 assert.match(home,/Protótipo acadêmico independente/);
 assert.match(accounts,/Projeto acadêmico não oficial/);
 assert.match(posts,/protótipo acadêmico independente e não oficial/i);
 assert.match(read('app.js'),/prototypeTop: 'Protótipo acadêmico independente · não oficial'/);
});
test('Login/cadastro e fluxos existentes continuam preservados',()=>{
 assert.match(home,/id="portalApp"/);
 assert.match(home,/id="heroSearchForm"/);
 assert.match(home,/href="#\/destinos"/);
 assert.match(home,/href="\.\/conta\.html"/);
 for(const id of ['authUnavailable','authGuest','authDashboard','loginForm','registerForm','teacherSection','adminSection','editorialForm'])assert.ok(accounts.includes('id="'+id+'"'),id);
 assert.match(config,/subdomain: ""/);
 assert.match(config,/region: ""/);
 assert.match(posts,/publicList/);
});
