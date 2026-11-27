const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const api=require('../auth-client.js');
function store(){const data=new Map();return{getItem:k=>data.get(k)||null,setItem:(k,v)=>data.set(k,v),removeItem:k=>data.delete(k)};}
function mockHttp(options={}){
  const calls=[];
  const fn=async(url,req)=>{
    const payload=JSON.parse(req.body);
    calls.push({url,headers:req.headers,payload});
    let result={};
    if(url.endsWith('/signup/email-password'))result={session:null};
    else if(url.endsWith('/signin/email-password'))result={session:{accessToken:'test-jwt',refreshToken:'test-uuid',user:{id:'user'}}};
    else if(url.endsWith('/token'))result={accessToken:'test-jwt-rotated',refreshToken:'test-uuid-rotated',user:{id:'user'}};
    else if(url.includes('.graphql.')){
      if(payload.query.includes('AccountIdentity'))result={data:{portal_profiles:[{user_id:'00000000-0000-0000-0000-000000000001',display_name:'Teste',role:options.role||'aluno',requested_role:options.requested||'administrador'}],portal_admin_grants:options.granted?[{user_id:'00000000-0000-0000-0000-000000000001'}]:[]}};
      else if(payload.query.includes('SavedDestinations'))result={data:{portal_saved_destinations:[]}};
      else if(payload.query.includes('ChecklistProgress'))result={data:{portal_checklist_progress:[]}};
      else result={data:{ok:true}};
    }
    return{ok:true,status:200,json:async()=>result};
  };return{calls,fn};
}
const config={subdomain:'portal-dev',region:'sa-east-1'};
test('conexão Nhost exige região e subdomínio válidos, sem fallback de autenticação falsa',()=>{
  assert.equal(api.validConfig(config),true);
  assert.equal(api.validConfig({subdomain:'',region:''}),false);
  assert.equal(api.validConfig({subdomain:'https://evil/',region:'sa-east-1'}),false);
  const client=api.createClient({},{fetch:async()=>{throw Error('não deve conectar')},storage:store()});
  assert.equal(client.configured,false);
});
test('três opções de cadastro: administrador vira apenas metadata de solicitação',async()=>{
  const m=mockHttp(),client=api.createClient(config,{fetch:m.fn,storage:store()});
  for(const role of ['aluno','docente','administrador']){
    const res=await client.register({name:'Usuário Teste',email:'teste@example.com',password:'SenhaMuitoForte!2026',role});
    assert.equal(res.needsVerification,true);
  }
  assert.equal(m.calls.length,3);
  for(let i=0;i<3;i++){
    const body=m.calls[i].payload;
    assert.equal(body.options.metadata.requested_role,['aluno','docente','administrador'][i]);
    assert.equal('defaultRole' in body.options,false);
    assert.equal('allowedRoles' in body.options,false);
    assert.equal(m.calls[i].url,'https://portal-dev.auth.sa-east-1.nhost.run/v1/signup/email-password');
  }
});
test('somente concessão no banco, nunca o cadastro, determina permissão de gestor',async()=>{
  const no=mockHttp({granted:false,requested:'administrador'});
  const c1=api.createClient(config,{fetch:no.fn,storage:store()});
  const u=await c1.login({email:'a@b.com',password:'pass'});
  assert.equal(u.requestedRole,'administrador');
  assert.equal(u.isAdmin,false);
  const yes=mockHttp({granted:true});
  const c2=api.createClient(config,{fetch:yes.fn,storage:store()});
  const admin=await c2.login({email:'a@b.com',password:'pass'});
  assert.equal(admin.isAdmin,true);
  assert.match(yes.calls[1].headers.authorization,/^Bearer /);
});
test('favoritos e checklist não enviam identificação de outro usuário',async()=>{
  const m=mockHttp(),client=api.createClient(config,{fetch:m.fn,storage:store()});
  await client.login({email:'a@b.com',password:'pass'});
  await client.saveFavorite('salamanca',true);
  await client.saveProgress('edital',true);
  const mutations=m.calls.filter(x=>x.url.includes('.graphql.')&&!x.payload.query.includes('AccountIdentity'));
  assert.equal(mutations.length,2);
  assert.ok(mutations.every(x=>x.headers.authorization==='Bearer test-jwt'));
  assert.ok(mutations.every(x=>!JSON.stringify(x.payload.variables).includes('user_id')));
  await assert.rejects(()=>client.saveFavorite('../../../admin',true),/Destino inválido/);
  await assert.rejects(()=>client.saveProgress('invalid field',true),/Etapa inválida/);
});
test('interface e scripts estão vinculados sem remover aplicação antiga',()=>{
  const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
  const account=fs.readFileSync(path.join(root,'conta.html'),'utf8');
  for(const s of ['href="./conta.html"','src="./app.js"','src="./experience.js"'])assert.ok(html.includes(s),s);
  for(const s of ['loginForm','registerForm','loginRole','registerRole','favoriteDestination','checklist','adminSection','authUnavailable','src="./auth-client.js"'])assert.ok(account.includes(s),s);
  const configSrc=fs.readFileSync(path.join(root,'auth-config.js'),'utf8');
  assert.match(configSrc,/subdomain: ""/);
  assert.match(configSrc,/region: ""/);
});
test('banco e Hasura bloqueiam autoaprovação administrativa e isolam dados por usuário',()=>{
  const sql=fs.readFileSync(path.join(root,'../nhost/migrations/0001_portal_identity.sql'),'utf8');
  const metadata=path.join(root,'../nhost/metadata/databases/default/tables');
  for(const table of ['portal_profiles','portal_admin_grants','portal_saved_destinations','portal_checklist_progress','portal_editorial_entries'])assert.ok(sql.includes('create table if not exists public.'+table),table);
  assert.match(sql,/requested='docente' then 'docente' else 'aluno'/);
  const grants=fs.readFileSync(path.join(metadata,'public_portal_admin_grants.yaml'),'utf8');
  assert.ok(!grants.includes('insert_permissions:'));
  for(const file of ['public_portal_profiles.yaml','public_portal_saved_destinations.yaml','public_portal_checklist_progress.yaml']){
    assert.match(fs.readFileSync(path.join(metadata,file),'utf8'),/X-Hasura-User-Id/);
  }
  const editorial=fs.readFileSync(path.join(metadata,'public_portal_editorial_entries.yaml'),'utf8');
  assert.match(editorial,/portal_admin_grants/);assert.match(editorial,/status: \{_eq: publicado\}/);
});
