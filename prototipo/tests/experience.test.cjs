const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const js = fs.readFileSync(path.join(root, 'experience.js'), 'utf8');
const css = fs.readFileSync(path.join(root, 'experience.css'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

test('camada interna tem JavaScript sintaticamente válido', () => {
  assert.doesNotThrow(() => new vm.Script(js));
});
test('página inicia a experiência sem remover o portal anterior', () => {
  assert.match(html, /id="portalApp"/);
  assert.match(html, /src="\.\/app\.js"/);
  assert.match(html, /src="\.\/experience\.js"/);
  assert.match(html, /href="\.\/experience\.css"/);
  assert.match(css, /\.xp-workspace/);
  assert.match(css, /@media\s*\(max-width:\s*560px\)/);
});
test('fluxos principais são endereçáveis por links internos', () => {
  for (const route of ['painel','programas','universidades','documentos','docentes','internacionais','orientacoes','planejar','contatos']) {
    assert.ok(js.includes("['"+route+"'"), 'rota ausente: '+route);
  }
  for (const route of ['#/universidades','#/programas/intercambio','#/documentos','#/contatos']) {
    assert.ok(html.includes('href="'+route+'"'), 'atalho ausente: '+route);
  }
});
test('existe catálogo de modalidades e instituições, sem alegações de vagas em tempo real', () => {
  for(const id of ['intercambio','dupla-titulacao','buddy','educationusa','freemover']) {
    assert.ok(js.includes("id: '"+id+"'"), 'modalidade ausente: '+id);
  }
  for(const name of ['Universidad de Salamanca','Universidad Nacional de Cuyo','Universidade do Porto']) {
    assert.ok(js.includes(name), 'instituição ausente: '+name);
  }
  assert.match(js,/disponibilidade atual não confirmada/i);
  assert.match(js,/não é catálogo completo/i);
});
test('checklists permanecem locais e não solicitam dados pessoais', () => {
  assert.match(js,/const completed = new Set\(\)/);
  assert.match(js,/data-check/);
  assert.ok(!/\bfetch\s*\(/.test(js));
  assert.ok(!/XMLHttpRequest/.test(js));
});
test('programas incluem fontes institucionais e navegação contextual', () => {
  assert.match(js,/https:\/\/unifor\.br\/dri\/aluno/);
  assert.match(js,/https:\/\/unifor\.br\/dri\/convenios/);
  assert.match(js,/https:\/\/unifor\.br\/iro\/faculty-support/);
  assert.match(js,/safeUrl\(url\)/);
  assert.match(js,/href="#\/programas\//);
});
test('experiência oferece português e inglês', () => {
  assert.match(js,/const i18n = \{/);
  assert.match(js,/en: \{/);
  assert.match(js,/pt: \{/);
  assert.match(js,/localeButton/);
});