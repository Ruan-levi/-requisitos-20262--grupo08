const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const project = path.resolve(__dirname, '../..');
const read = (f) => fs.readFileSync(path.join(project, f), 'utf8');

const srs = read('Requisitos/Especificacao/06-SRS-IEEE830-P2.md');
const matrix = read('Requisitos/Especificacao/07-matriz-consistencia-P2.md');
const gallery = read('prototipo/wireframes/index.html');
const summary = read('GestaoConfiguracao/06-plano-entrega-P2.md');
const pumlNames = ['01-casos-de-uso','02-componentes','03-implantacao'];

test('P2: SRS no modelo IEEE 830 com as seções obrigatórias', () => {
  for (const title of ['## 1. Introdução','## 2. Descrição geral','## 3. Requisitos específicos','## 4. Casos de uso detalhados']) {
    assert.ok(srs.includes(title), 'Seção não encontrada: '+title);
  }
  assert.match(srs,/IEEE 830/);
});
test('P2: todos os 14 RF e 9 RNF da M1 estão detalhados e rastreados', () => {
  for (let i=1;i<=14;i++) {
    const id='RF'+String(i).padStart(2,'0');
    assert.ok(srs.includes('| '+id+' |'), 'SRS sem '+id);
    assert.ok(matrix.includes('| '+id+' |'), 'Matriz sem '+id);
  }
  for(let i=1;i<=9;i++) {
    const id='RNF'+String(i).padStart(2,'0');
    assert.ok(srs.includes('| '+id+' |'), 'SRS sem '+id);
    assert.ok(matrix.includes('| '+id+' |'), 'Matriz sem '+id);
  }
});
test('P2: casos de uso têm identificação e seções de fluxo', () => {
  for(let i=1;i<=9;i++){
    const id='UC'+String(i).padStart(2,'0');
    const segment=srs.split('### '+id+' — ')[1];
    assert.ok(segment, 'UC ausente: '+id);
    for(const field of ['**Ator(es):**','**Pré-condição:**','**Fluxo principal:**','**Alternativa/exceção:**','**Pós-condição:**']) assert.ok(segment.includes(field),id+' falta '+field);
  }
});
test('P2: UML atualizada mantém PlantUML e visual vetorial de cada diagrama', () => {
  for (const name of pumlNames) {
    const puml=read('diagrams/'+name+'-P2.puml');
    const svg=read('diagrams/'+name+'-P2.svg');
    assert.ok(puml.includes('@startuml')&&puml.includes('@enduml'));
    assert.ok(svg.startsWith('<svg')&&svg.trimEnd().endsWith('</svg>'));
    assert.ok(svg.includes('<title'), 'SVG sem título: '+name);
  }
});
test('P2: galeria traz 14 wireframes e labels de escopo', () => {
  const dir=path.join(project,'prototipo/wireframes');
  const files=fs.readdirSync(dir).filter(f=>f.endsWith('.svg'));
  assert.equal(files.length,14,'Esperados 14 wireframes');
  for(const f of files) {
    const svg=read('prototipo/wireframes/'+f);
    assert.match(svg,/xmlns="http:\/\/www.w3.org\/2000\/svg"/);
    assert.match(svg,/<title id="title">/);
    assert.ok(svg.trimEnd().endsWith('</svg>'));
    assert.ok(gallery.includes('./'+f), 'Galeria não exibe '+f);
  }
  assert.ok(gallery.includes('NÃO') || gallery.includes('não implementado'));
});
test('P2: plano contém sprint, critérios de nota e links AVA', () => {
  for (const item of ['03/11 a 23/11/2026','IEEE 830','0,5','1,0','https://ruan-levi.github.io/','https://github.com/']) assert.ok(summary.includes(item),item);
});
test('P2: SRS não confunde protótipo com backend e inscrição', () => {
  assert.match(srs,/não estão implementados/i);
  assert.match(srs,/não realizará inscrições/i);
  assert.match(matrix,/Não implementado/);
});
