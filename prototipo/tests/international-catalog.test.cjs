const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const app=fs.readFileSync(path.join(root,'experience.js'),'utf8');
const css=fs.readFileSync(path.join(root,'redesign.css'),'utf8');
const start='const destinationReferences2026 = ';
const end=';\n  verifiedDestinations.push(';
const p1=app.indexOf(start),p2=app.indexOf(end,p1);
if(p1<0 || p2<0)throw Error('Catálogo estruturado ausente');
const references=JSON.parse(app.slice(p1+start.length,p2));
const legacy=['porto','salamanca','cuyo'];
test('novas universidades: 13 registros distintos e 11 países no conjunto',()=>{
 assert.equal(references.length,13);
 const id=new Set([...references.map(x=>x.id),...legacy]);
 assert.equal(id.size,16);
 const countries=new Set([...references.map(x=>x.country),'Portugal','Espanha','Argentina']);
 assert.equal(countries.size,11);
});
test('cada universidade oferece fonte Unifor e dois portais oficiais específicos',()=>{
 const ids=new Set();
 for(const d of references){
  assert.ok(d.id&&d.name&&d.country&&d.flag&&d.city&&d.field&&d.focus&&d.detail);
  assert.ok(!ids.has(d.id)); ids.add(d.id);
  assert.ok(['geral','tecnologia','gestao'].includes(d.field));
  assert.match(d.origin,/^https:\/\/(?:www\.)?unifor\.br\/(web\/|dri\/)/);
  for(const key of ['process','extra']){
    const url=new URL(d[key]);
    assert.equal(url.protocol,'https:');
    assert.notEqual(url.hostname,'unifor.br');
    assert.notEqual(url.pathname,'/');
    assert.ok(!url.href.includes('google.com')&&!url.href.includes('example.com'));
  }
 }
});
test('catálogo é acessível por rotas e filtros reativos sem enviar dados',()=>{
 for(const id of ['xpDestinationQuery','xpDestinationCountry','xpDestinationField','xpDestinationResults','xpDestinationReset']){
  assert.ok(app.includes(id),'falta '+id);
 }
 assert.match(app,/case 'destinos':content=destinationsPage\(id\)/);
 assert.match(app,/if\(page==='destinos'&&!id\)paintDestinationResults\(\)/);
 assert.match(app,/destinationId:d.id/);
 assert.match(app,/concat\(verifiedDestinations.filter/);
 assert.match(css,/\.xp-destination-filters/);
 assert.match(css,/@media\(max-width:640px\)/);
});
test('origens históricas e candidaturas não são confundidas com vagas confirmadas',()=>{
 const concordia=references.find(x=>x.id==='concordia');
 assert.equal(concordia.historical,true);
 assert.match(app,/A instituição aparece em referências institucionais, mas nenhuma vaga/);
 assert.match(app,/A instituição aparece em referências institucionais/);
 assert.match(app,/externalWhitelist\.has\(url\)/);
 assert.match(app,/rel="noopener noreferrer"/);
});
test('todas as áreas têm rótulo e filtro limpável',()=>{
 for(const key of ['tecnologia','gestao','geral'])assert.ok(app.includes(key));
 assert.match(app,/destinationCountry='all';destinationField='all';destinationQuery='';activate\(\)/);
});
