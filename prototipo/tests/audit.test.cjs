const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const base = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(base, 'index.html'), 'utf8');
const js = fs.readFileSync(path.join(base, 'experience.js'), 'utf8');

test('navegação interna tem pontos de entrada reais para os fluxos da apresentação', () => {
  for(const fragment of ['#/programas','#/universidades','#/orientacoes','#/documentos','#/contatos']){
    assert.ok(html.includes('href="' + fragment + '"'), 'sem link: ' + fragment);
  }
});
test('contatos divulgados são os canais institucionais centrais da DRI', () => {
  assert.match(js, /mailto:dri@unifor\.br/);
  assert.match(js, /tel:\+558534773834/);
});
test('o título acompanha o contexto da página interna', () => {
  for(const name of ['programas','universidades','documentos','docentes','internacionais','orientacoes','planejar','contatos']){
    assert.ok(js.includes(name + ":'"), 'chave de título ausente: ' + name);
  }
});
test('universidades e fluxos documentais não se apresentam como vagas disponíveis', () => {
  assert.match(js,/disponibilidade atual não confirmada/);
  assert.match(js,/não é catálogo completo/);
  assert.match(js,/não representa inscrição/);
});
test('sem envio de dados ou inscrição no protótipo estático', () => {
  assert.ok(!/\bfetch\s*\(/.test(js));
  assert.ok(!/new XMLHttpRequest\(/.test(js));
  assert.match(js,/noEnroll/);
});
