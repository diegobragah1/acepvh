import fs from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeAppData } from './normalizeData';

const raw = JSON.parse(fs.readFileSync('data/app_data.json', 'utf8'));

test('constitutional update reaches primary theory, summary, map and related card', () => {
  const app = normalizeAppData(raw);
  const cf = app.lessons.find((l) => l.id === 'esp_1')!;
  assert.ok(cf.blocks[0].modoA?.includes('§ 4º-B'));
  assert.ok(cf.blocks[0].modoB?.includes('quatro diretrizes'));
  assert.match(JSON.stringify(cf.mindMap), /IV — atuação obrigatória/);
  const card = app.lessons.find((l) => l.id === 'esp_4')!.blocks[3].flashcards![2];
  assert.match(card.front || '', /quatro diretrizes/);
  assert.match(card.back || '', /IV — atuação obrigatória/);
});

test('PNAB primary source is actually in the lesson and is labelled with its publication version', () => {
  const text = raw.lessons.find((l: any) => l.id === 'esp_5').blocks[1].modoA;
  assert.ok(text.includes('PORTARIA Nº 2.436, DE 21 DE SETEMBRO DE 2017'));
  assert.ok(text.includes('ANEXO'));
  assert.ok(text.includes('não uma consolidação'));
  const meta = JSON.parse(fs.readFileSync('docs/IMPORTACAO_PNAB.json', 'utf8'));
  assert.ok(meta.paragraphs > 600);
});

test('legacy sources now link to current SAPL texts, and EC 140 has an explicit primary source', () => {
  const url = (n: number) => raw.sources.find((s: any) => s.num === n).url;
  assert.equal(url(92), 'https://sapl.portovelho.ro.leg.br/ta/1639/text');
  assert.equal(url(93), 'https://sapl.portovelho.ro.leg.br/ta/2/text');
  assert.equal(url(99), 'https://legis.senado.leg.br/norma/44187742/publicacao/44190103');
});

test('LAI primary theory uses the municipal LAI decree and includes the 2026 state amendment', () => {
  const l = raw.lessons.find((l: any) => l.id === 'leg_7');
  const prose = l.blocks[1].modoA_markdown;
  assert.match(prose, /14\.565/);
  assert.match(prose, /6\.385/);
  assert.ok(prose.includes('Prefeito'));
  assert.ok(prose.includes('Comissão Mista'));
  assert.ok(prose.includes('art. 30'));
  assert.ok(l.blocks[3].modoA.includes('Lei de Rondônia 6.385/2026'));
  assert.match(l.blocks[3].title, /14\.565\/2017/);
});

test('all 49 lessons are free of orphan "Erro da E" comments, legacy Aula 18-31 headers, and mismatched flashcard lessonTitles', () => {
  const app = normalizeAppData(raw);
  assert.equal(app.lessons.length, 49);
  let totalQuestions = 0;
  for (const lesson of app.lessons) {
    for (const block of lesson.blocks) {
      assert.doesNotMatch(block.modoA || '', /Aula (18|19|20|21|22|23|24|25|26|27|28|29|30|31)\s*[—:-]/);
      for (const q of block.questions || []) {
        totalQuestions++;
        assert.doesNotMatch(q.comment || '', /Erro da E:|na letra E|a letra E traz/i, `Orphan E comment in ${lesson.id}`);
        assert.equal(q.options.length, 4);
        assert.ok(q.ans >= 0 && q.ans < 4);
      }
      for (const fc of block.flashcards || []) {
        if (fc.lessonTitle) {
          assert.equal(fc.lessonTitle, lesson.title, `Mismatched flashcard lessonTitle in ${lesson.id}`);
        }
      }
    }
  }
  assert.ok(totalQuestions >= 630, `Expected at least 630 questions across 49 lessons, got ${totalQuestions}`);
});

test('conceptual corrections in por_3..17, rlm_1..6, esp_2/4/7, and atu_3/4/6 are present in normalized lessons', () => {
  const app = normalizeAppData(raw);
  const byId = (id: string) => app.lessons.find((l) => l.id === id)!;

  // por_4: zeugma as special/particular case of elipse
  assert.match(byId('por_4').blocks[0].modoA || '', /Tipo especial de elipse/i);
  // por_8: fixed comment on question 3 of block 0 (no orphan planalto/propusermos)
  assert.doesNotMatch(byId('por_8').blocks[0].questions![2].comment || '', /planalto|propusermos/i);
  // por_15: ca-í-ram explained as hiato, not ditongo
  assert.match(JSON.stringify(byId('por_15').blocks), /regra do hiato/i);
  // por_16: hyphen exceptions (coorganizar e reeleição) and S/Z, X/CH, G/J explicitly covered
  assert.match(JSON.stringify(byId('por_16').blocks), /coorganizar e reeleição/);
  assert.match(JSON.stringify(byId('por_16').blocks), /Relações Som-Grafema/);
  // por_17: non-metalinguistic distractor in deepening supplement
  const por17Supp = byId('por_17').blocks.at(-1)!;
  assert.doesNotMatch(JSON.stringify(por17Supp.questions), /sem motivo sintático/);
  // rlm_5: block 5 deduplicated and covers suficiente vs necessária
  assert.match(byId('rlm_5').blocks[5].title, /Condição Suficiente vs\. Necessária/);
  // esp_4: block 4 covers Art. 15 vs Arts. 16-19
  assert.match(byId('esp_4').blocks[4].title, /Atribuições Comuns \(Art\. 15\)/);
  // atu_3 & atu_4: distinction between 16 códigos de lotação do Edital and distritos administrativos
  assert.match(JSON.stringify(byId('atu_3').blocks), /Distritos Administrativos vs\. Localidades do Quadro de Vagas/);
});
