const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');

const root=path.resolve(__dirname,'..');
const css=fs.readFileSync(path.join(root,'theme.css'),'utf8');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');

test('cabeçalho utiliza largura independente da coluna de 1200px do conteúdo',()=>{
  assert.match(css,/Correção do cabeçalho — vídeo de 28\/11\/2026/);
  assert.match(css,/\.site-header\s*>\s*\.container\.site-header__inner\s*\{/);
  assert.match(css,/width:min\(calc\(100% - 40px\),1860px\)/);
  assert.match(css,/grid-template-columns:minmax\(280px,320px\) minmax\(0,1fr\) max-content/);
  assert.match(css,/align-items:center/);
});

test('notebooks usam menu expansível sem colidir com login e preferências',()=>{
  assert.match(css,/@media\s*\(max-width:1800px\)/);
  assert.match(css,/\.site-header\s+\.main-nav\{display:none\}/);
  assert.match(css,/\.site-header\s+\.main-nav\.is-open\{display:flex\}/);
  assert.match(css,/\.site-header\s+\.mobile-menu-toggle\{display:grid/);
  assert.match(css,/\.site-header\s+\.main-nav,\.site-header\s+\.main-nav\.is-open\s*\{[\s\S]*?position:absolute/);
  assert.match(html,/id="menu-principal"/);
  assert.match(html,/id="menuButton" aria-expanded="false"/);
  assert.match(html,/class="account-entry"/);
  assert.match(html,/data-portal-language/);
  assert.match(html,/data-portal-theme/);
});

test('menor altura da barra e menos espaço acima do conteúdo',()=>{
  assert.match(css,/\.top-strip,\.top-strip__inner\{min-height:30px\}/);
  assert.match(css,/\.site-header\{height:auto!important;min-height:76px\}/);
  assert.match(css,/\.portal-workspace\{padding-top:18px\}/);
  assert.match(css,/\.xp-breadcrumb\{margin-bottom:14px\}/);
});

test('acessibilidade, telas menores e modo escuro mantêm menu utilizável',()=>{
  assert.match(css,/@media\s*\(max-width:1024px\)/);
  assert.match(css,/@media\s*\(max-width:430px\)/);
  assert.match(css,/html\.font-large \.site-header \.main-nav\.is-open\{display:flex\}/);
  assert.match(css,/html\[data-theme="dark"\] \.site-header \.main-nav/);
  assert.match(html,/class="mobile-account-link"/);
});
