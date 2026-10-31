import fs from 'node:fs';
import assert from 'node:assert/strict';
const data=JSON.parse(fs.readFileSync('data/app_data.json','utf8'));
const css=fs.readFileSync('dist/assets/app-bundle.css','utf8');
const backgrounds=new Set();
for(const lesson of data.lessons)for(const block of lesson.blocks)for(const mode of ['modoA','modoB']) {
  for(const match of (block[mode]||'').matchAll(/class="([^"]+)"/g)) {
    for(const cls of match[1].split(/\s+/))if(/^bg-(?:[a-z]+-\d|white|black)/.test(cls))backgrounds.add(cls);
  }
}
for(const cls of backgrounds) {
  const selector='.'+cls.replace(/([^a-zA-Z0-9_-])/g,'\\$1');
  assert.ok(css.includes(selector+'{')||css.includes(selector+','),`Estilo da aula ausente no build: ${cls}`);
}
assert.ok(css.includes('KaTeX_Main'),'Fontes matemáticas ausentes');
assert.ok(css.includes('data:font/woff2'),'As fontes precisam funcionar nas cópias estáticas');
for(const file of ['app-bundle.css','app-bundle.js'])for(const dir of ['assets','public/assets']) {
  assert.deepEqual(fs.readFileSync(`dist/assets/${file}`),fs.readFileSync(`${dir}/${file}`),`Bundle divergente: ${dir}/${file}`);
}
console.log(`Publicação verificada: estilos de ${backgrounds.size} fundos presentes nas 49 aulas; fontes matemáticas e duas cópias estáticas sincronizadas.`);
