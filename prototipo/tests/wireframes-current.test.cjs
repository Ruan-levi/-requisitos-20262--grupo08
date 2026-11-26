const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const path=require('node:path');const root=path.resolve(__dirname,'..');const dir=path.join(root,'wireframes');const read=(p)=>fs.readFileSync(path.join(dir,p),'utf8');
test('wireframes 2026: todos os 25 SVG são editáveis e têm título/descrição',()=>{
  const files=fs.readdirSync(dir).filter(x=>/^\d\d-.*\.svg$/.test(x));
  assert.equal(files.length,25);
  for(const name of files){const s=read(name);assert.match(s,/^<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg"/);assert.match(s,/<title id="title">/);assert.match(s,/<desc id="desc">/);assert.ok(s.endsWith('</svg>'),name);}
});
test('galeria aponta para todas as telas e separa as propostas futuras',()=>{
  const s=read('index.html');const files=fs.readdirSync(dir).filter(x=>/^\d\d-.*\.svg$/.test(x));
  for(const f of files)assert.ok(s.includes('./'+f),'sem link '+f);
  assert.match(s,/25 wireframes atualizados/);assert.match(s,/data-filter=/);assert.match(s,/nenhum login, cadastro ou banco foi implementado/i);
});
test('novos fluxos aparecem nos wireframes sem prometer autenticação',()=>{
  const required={
    '15-portais-internacionais.svg':['16 instituições','11 países','Universidad de Salamanca'],
    '16-salamanca-detalhe.svg':['Movilidad IN','Marco de Convenios','Universidad de Salamanca'],
    '17-dupla-titulacao.svg':['Requerimento 175','HWR Berlin','Deggendorf'],
    '18-processo-intercambio.svg':['Candidatura e aceitação'],
    '19-documentos-modalidades.svg':['Dupla titulação','Intercâmbio acadêmico'],
    '20-docentes.svg':['Mobilidade docente'],
    '21-internacionais.svg':['Free Mover','Buddy Program'],
    '22-noticias.svg':['Buddy Program'],
    '23-noticia-detalhe.svg':['2027.1'],
    '24-destinos-mobile.svg':['16 instituições'],
    '25-painel.svg':['Programas','Universidades','Documentos']
  };
  for(const [file,terms] of Object.entries(required)){const s=read(file);for(const t of terms)assert.ok(s.includes(t),file+': '+t);}
  for(const name of ['10-login-editorial.svg','11-gestao-conteudo.svg','12-permissoes.svg','13-sinalizacao.svg'])assert.match(read(name),/PROPOSTA FUTURA|NÃO IMPLEMENTADO/);
});
