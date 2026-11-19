const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const code = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

// Testa o catálogo sem executar a inicialização do navegador nem depender de npm.
const catalogCode = code.split("$('#heroSearchForm').addEventListener")[0];
const catalog = vm.runInNewContext(`${catalogCode}\n({guides, guideSources, courseSources, categories, translations})`);

test('cada orientação tem identidade, tema, público e texto bilíngue', () => {
  assert.equal(new Set(catalog.guides.map((item) => item.id)).size, catalog.guides.length);
  for (const guide of catalog.guides) {
    assert.ok(catalog.categories[guide.category], `Categoria inválida: ${guide.id}`);
    assert.ok(guide.audience.length > 0);
    for (const language of ['pt', 'en']) {
      assert.ok(guide.title[language]?.length > 8, `${guide.id}: título ${language}`);
      assert.ok(guide.summary[language]?.length > 20, `${guide.id}: resumo ${language}`);
      assert.ok(guide.steps[language]?.length >= 3, `${guide.id}: etapas ${language}`);
    }
  }
});

test('todas as orientações apontam a fontes específicas da Unifor', () => {
  const allowed = new Set(['unifor.br', 'www.unifor.br']);
  for (const guide of catalog.guides) {
    const source = catalog.guideSources[guide.id];
    assert.ok(source, `Sem fonte específica: ${guide.id}`);
    assert.ok(allowed.has(new URL(source.url).hostname), `Fonte externa inesperada: ${guide.id}`);
    assert.ok(source.pt && source.en, `Sem rótulo bilíngue: ${guide.id}`);
  }
});

test('o explorador de cursos usa documentos institucionais e indica ano', () => {
  assert.ok(catalog.courseSources.all);
  for (const [course, source] of Object.entries(catalog.courseSources)) {
    assert.ok(new URL(source.url).hostname === 'unifor.br', course);
    assert.ok(source.title.pt && source.title.en, course);
    if (course !== 'all') assert.ok(source.year >= 2024 && source.year <= 2026, course);
  }
});

test('nenhum rótulo de interface fica sem tradução português/inglês', () => {
  const keys = [...html.matchAll(/data-i18n="([^"]+)"/g)].map((match) => match[1]);
  for (const key of new Set(keys)) {
    assert.ok(typeof catalog.translations.pt[key] === 'string' || Array.isArray(catalog.translations.pt[key]), `PT: ${key}`);
    assert.ok(typeof catalog.translations.en[key] === 'string' || Array.isArray(catalog.translations.en[key]), `EN: ${key}`);
  }
});
