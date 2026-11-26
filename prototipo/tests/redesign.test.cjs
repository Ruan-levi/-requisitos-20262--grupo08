const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const base = path.resolve(__dirname, '..');
const js = fs.readFileSync(path.join(base, 'experience.js'), 'utf8');
const html = fs.readFileSync(path.join(base, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(base, 'redesign.css'), 'utf8');
const app = fs.readFileSync(path.join(base, 'app.js'), 'utf8');

test('redesign mantém JavaScript válido e estilos conectados', () => {
  assert.doesNotThrow(() => new Function(js));
  assert.match(html, /href="\.\/redesign\.css"/);
  assert.match(css, /\.xp-journey-panel/);
  assert.match(css, /\.xp-destination-card/);
  assert.match(css, /@media\s*\(max-width:670px\)/);
});
test('rotas internas cobrem processo, destinos e páginas específicas', () => {
  for(const route of ['processo','destinos']) {
    assert.ok(js.includes("case '"+route+"'"),route);
    assert.ok(html.includes('href="#/'+route+'"'), 'menu: '+route);
  }
  for (const id of ['porto','salamanca','cuyo']) assert.ok(js.includes("id:'"+id+"'"));
});
test('destinos têm vínculo de referência e portal próprio com caminhos específicos', () => {
  const urls=[
    'https://www.up.pt/portal/en/study/mobility/study-at-uporto/',
    'https://international.up.pt/international_mobility_application',
    'https://internacional.usal.es/movilidad-in/',
    'https://internacional.usal.es/estudiantes-in/',
    'https://www.uncuyo.edu.ar/relacionesinternacionales/estudiantes/estudiantes-de-intercambio-en-mendoza',
    'https://www.uncuyo.edu.ar/international-students',
    'https://educationusa.state.gov/your-5-steps-us-study'
  ];
  for(const url of urls) assert.ok(js.includes(url),'ausente: '+url);
  assert.match(js,/externalWhitelist/);
  assert.match(js,/rel="noopener noreferrer"/);
});
test('recursos não prometem vagas ou inscrições e diferenciam EducationUSA', () => {
  assert.match(js,/convênio não significa vaga|convênio não garante|não comprova vaga|não substitui a seleção/i);
  assert.match(js,/não equivale a convênio|não é uma universidade conveniada/i);
  assert.match(js,/não envie documentos pessoais/i);
  assert.match(js,/Aceitação formal|aceitação formal/i);
});
test('novos menus possuem traduções PT-BR e inglês', () => {
  for(const key of ['navProcess','navDestinations']) {
    assert.ok(app.includes(key+': \''));
  }
  assert.match(app,/navDestinations: 'Host portals'/);
});
test('README oferece link real do Figma sem fingir backend', () => {
  const readme=fs.readFileSync(path.join(base, '../README.md'),'utf8');
  assert.match(readme,/https:\/\/www\.figma\.com\/design\/wINNQ9DbvhYKjjxyRV2lYc/);
  assert.match(readme,/não introduzem backend|não possui login|não possui login, API ou banco|não possui login, API/i);
});
