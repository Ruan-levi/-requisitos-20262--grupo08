const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const base=path.resolve(__dirname,'..');
const source=name=>fs.readFileSync(path.join(base,name),'utf8');
test('marca internacionaliza. junto à Unifor nas três páginas',()=>{
 for(const file of ['index.html','conta.html','publicacoes.html']){
  const html=source(file);
  assert.match(html,/institution-brand__logo/);
  assert.match(html,/internacionaliza<span/);
  assert.match(html,/Unifor%20logo\.svg/);
 }
 assert.match(source('index.html'),/Protótipo acadêmico independente/);
});
test('modo claro/escuro e idiomas PT, EN, ES aparecem no cabeçalho e na área de contas',()=>{
 for(const page of ['index.html','conta.html','publicacoes.html']){
  const html=source(page);
  for(const x of ['data-portal-theme','data-portal-language','value="pt"','value="en"','value="es"','portal-settings.js','theme.css'])assert.ok(html.includes(x),page+': '+x);
 }
 for(const phrase of ['data-theme="dark"','.portal-workspace','.site-head','.xp-sidenav','.panel','.locale-field'])assert.ok(source('theme.css').includes(phrase));
});
test('preferências persistentes são isoladas de autenticação e não salvam tokens',()=>{
 const code=source('portal-settings.js');
 const storage=new Map();
 const rootElement={dataset:{},style:{},setAttribute(name,value){this[name]=value;}};
 const glyph={textContent:''};
 const button={dataset:{},attributes:{},querySelector(){return glyph;},setAttribute(k,v){this.attributes[k]=v;},addEventListener(n,cb){this['on'+n]=cb;}};
 const select={dataset:{},value:'',attributes:{},setAttribute(k,v){this.attributes[k]=v;},addEventListener(n,cb){this['on'+n]=cb;}};
 const anchor={textContent:''};
 const doc={readyState:'complete',documentElement:rootElement,querySelectorAll(sel){
  if(sel==='[data-portal-theme]')return [button];
  if(sel==='[data-portal-language]')return [select];
  if(sel==='[data-portal-account]')return [anchor];
  return [];
 }};
 const events=[];
 const window={document:doc,matchMedia:()=>({matches:false}),localStorage:{
  getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},
  dispatchEvent:e=>events.push(e)
 };
 class CustomEvent{constructor(type,args){this.type=type;this.detail=args.detail;}}
 vm.runInNewContext(code,{window,CustomEvent});
 const prefs=window.PortalPreferences;
 assert.equal(prefs.theme,'light');assert.equal(prefs.language,'pt');
 button.onclick();assert.equal(prefs.theme,'dark');assert.equal(rootElement.dataset.theme,'dark');
 assert.equal(storage.get('internacionaliza.preferences.theme'),'dark');
 select.value='es';select.onchange();assert.equal(prefs.language,'es');
 assert.equal(select.value,'es');assert.equal(rootElement.lang,'es');
 assert.equal(anchor.textContent,'Entrar / Registrarse');
 assert.ok(events.some(e=>e.type==='portal:theme'));
 assert.ok(events.some(e=>e.type==='portal:language'));
 assert.equal(prefs.setLanguage('invalid'),false);
 assert.equal([...storage.keys()].filter(x=>/password|token|session|secret/i.test(x)).length,0);
});
test('espanhol existe nas traduções do app e do painel interno sem remover idiomas anteriores',()=>{
 const app=source('app.js'),xp=source('experience.js');
 assert.doesNotThrow(()=>new Function(app));
 assert.doesNotThrow(()=>new Function(xp));
 assert.match(app,/translations\.es\s*=/);
 assert.match(xp,/i18n\.es\s*=/);
 assert.match(app,/portal:language/);
 assert.match(xp,/portal:language/);
 assert.match(app,/traducción|español|espanhol|El mundo está/);
 assert.match(xp,/Mi recorrido/);
 assert.match(source('account-locale.js'),/Tres caminos, un mismo portal/);
});
test('interface nova preserva autenticação e os avisos de Nhost não configurado',()=>{
 const account=source('conta.html');
 const cfg=source('auth-config.js');
 for(const id of ['loginForm','registerForm','loginRole','registerRole','authUnavailable','adminSection','authDashboard'])assert.ok(account.includes('id="'+id+'"'),id);
 assert.match(cfg,/subdomain: ""/);assert.match(cfg,/region: ""/);
 assert.ok(source('index.html').includes('src="./experience.js"'));
 assert.ok(source('index.html').includes('href="./conta.html"'));
});
