import fs from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeAppData } from './normalizeData';

const raw=JSON.parse(fs.readFileSync('data/app_data.json','utf8'));
test('constitutional update reaches primary theory, summary, map and related card',()=>{
  const app=normalizeAppData(raw);
  const cf=app.lessons.find(l=>l.id==='esp_1')!;
  assert.ok(cf.blocks[0].modoA?.includes('§ 4º-B'));
  assert.ok(cf.blocks[0].modoB?.includes('quatro diretrizes'));
  assert.match(JSON.stringify(cf.mindMap),/IV — atuação obrigatória/);
  const card=app.lessons.find(l=>l.id==='esp_4')!.blocks[3].flashcards![2];
  assert.match(card.front||'',/quatro diretrizes/);
  assert.match(card.back||'',/IV — atuação obrigatória/);
});
test('PNAB primary source is actually in the lesson and is labelled with its publication version',()=>{
  const text=raw.lessons.find((l:any)=>l.id==='esp_5').blocks[1].modoA;
  assert.ok(text.includes('PORTARIA Nº 2.436, DE 21 DE SETEMBRO DE 2017'));
  assert.ok(text.includes('ANEXO'));
  assert.ok(text.includes('não uma consolidação'));
  const meta=JSON.parse(fs.readFileSync('docs/IMPORTACAO_PNAB.json','utf8'));
  assert.ok(meta.paragraphs>600);
});
test('legacy sources now link to current SAPL texts, and EC 140 has an explicit primary source',()=>{
  const url=(n:number)=>raw.sources.find((s:any)=>s.num===n).url;
  assert.equal(url(92),'https://sapl.portovelho.ro.leg.br/ta/1639/text');
  assert.equal(url(93),'https://sapl.portovelho.ro.leg.br/ta/2/text');
  assert.equal(url(99),'https://legis.senado.leg.br/norma/44187742/publicacao/44190103');
});
test('LAI primary theory uses the municipal LAI decree and includes the 2026 state amendment',()=>{
  const l=raw.lessons.find((l:any)=>l.id==='leg_7');
  const prose=l.blocks[1].modoA_markdown;
  assert.match(prose,/14\.565/);
  assert.match(prose,/6\.385/);
  assert.ok(prose.includes('Prefeito'));
  assert.ok(prose.includes('Comissão Mista'));
  assert.ok(prose.includes('art. 30'));
  assert.ok(l.blocks[3].modoA.includes('Lei de Rondônia 6.385/2026'));
});
