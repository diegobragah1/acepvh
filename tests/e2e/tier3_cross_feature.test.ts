/**
 * tests/e2e/tier3_cross_feature.test.ts
 * Tier 3: Cross-Feature Combinations (Pairwise & Subsystem Integration)
 * Covers withDeepening append-only dual-layer, positional preservation of 534 base question IDs,
 * authorial questions and reference markdown conversion, atomic static mirroring (data vs public/data),
 * manifest consistency, Tailwind dynamic dataset classes, and the Question -> Progress -> SRS state flows.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  DEEPENING_ENTRIES,
  DEEPENING_PREFIX,
  deepeningBlock,
  withDeepening,
} from '../../src/data/deepening';
import { normalizeAppData, normalizeLesson } from '../../src/utils/normalizeData';
import { questionIdentity } from '../../src/utils/questionIdentity';
import { renderMarkdownToHtml } from '../../src/utils/markdown';
import { calculateQuestionPerformance } from '../../src/utils/progress';
import { getCanonicalFlashcardKey, scheduleFlashcardReview } from '../../src/utils/srs';
import { DATASET_TAILWIND_CLASSES } from '../../src/data/datasetClasses';
import type { AppData, Lesson } from '../../src/types';

const ROOT = process.cwd();

const rawAppData: AppData = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'data/app_data.json'), 'utf8')
);
const normalizedData: AppData = normalizeAppData(rawAppData);

describe('Tier 3: Cross-Feature Combinations (Pairwise & Integration)', () => {
  it('T3-01: withDeepening é append-only e idempotente em todas as 49 aulas', () => {
    for (const [idx, rawLesson] of rawAppData.lessons.entries()) {
      const before = normalizeLesson(rawLesson, idx);
      const after = withDeepening(before);

      // 1. Cada aula passa de N blocos para N+1 blocos
      assert.equal(
        after.blocks.length,
        before.blocks.length + 1,
        `Aula ${rawLesson.id} não recebeu exatamente 1 bloco a mais`
      );

      // 2. Os blocos 0 a N-1 permanecem 100% idênticos
      assert.deepEqual(
        after.blocks.slice(0, before.blocks.length),
        before.blocks,
        `Blocos originais modificados em ${rawLesson.id}`
      );

      // 3. O bloco N tem título iniciando por DEEPENING_PREFIX
      const newBlock = after.blocks[after.blocks.length - 1];
      assert.ok(
        newBlock.title.startsWith(DEEPENING_PREFIX),
        `Título do bloco de aprofundamento não possui o prefixo esperado em ${rawLesson.id}`
      );

      // 4. withDeepening é idempotente (não duplica blocos se reaplicado)
      const reApplied = withDeepening(after);
      assert.equal(
        reApplied.blocks.length,
        after.blocks.length,
        `Reaplicar withDeepening duplicou blocos em ${rawLesson.id}`
      );
      assert.deepEqual(reApplied, after, `Reaplicar withDeepening alterou dados em ${rawLesson.id}`);
    }
  });

  it('T3-02: Preservação absoluta das 534 chaves posicionais pré-existentes', () => {
    let baseKeysCount = 0;
    const baseKeysSet = new Set<string>();
    const deepeningKeysSet = new Set<string>();

    rawAppData.lessons.forEach((rawLesson, lIdx) => {
      const normLesson = normalizedData.lessons[lIdx];

      // Verificar blocos legados (0 até blocks.length - 2 na aula enriquecida)
      rawLesson.blocks.forEach((rawBlock, bIdx) => {
        (rawBlock.questions || []).forEach((rawQ, qIdx) => {
          const rawKey = questionIdentity(`${rawLesson.id}_b${bIdx}_q${qIdx}`, rawQ);
          const normQ = normLesson.blocks[bIdx].questions![qIdx];
          const normKey = questionIdentity(`${normLesson.id}_b${bIdx}_q${qIdx}`, normQ);

          assert.equal(rawKey, normKey, `Chave posicional corrompida em ${rawLesson.id}`);
          assert.ok(!baseKeysSet.has(rawKey), `Chave base duplicada: ${rawKey}`);
          baseKeysSet.add(rawKey);
          baseKeysCount++;
        });
      });

      // Coletar chaves do bloco autoral de aprofundamento (último bloco)
      const lastBlockIdx = normLesson.blocks.length - 1;
      const deepeningBlock = normLesson.blocks[lastBlockIdx];
      (deepeningBlock.questions || []).forEach((deepQ, qIdx) => {
        const deepKey = questionIdentity(`${normLesson.id}_b${lastBlockIdx}_q${qIdx}`, deepQ);
        assert.ok(!deepeningKeysSet.has(deepKey), `Chave deepening duplicada: ${deepKey}`);
        deepeningKeysSet.add(deepKey);
      });
    });

    assert.equal(baseKeysCount, 534, 'Devem existir 534 questões base preservadas');
    assert.ok(
      deepeningKeysSet.size >= 212,
      `Devem existir no mínimo 212 questões autorais no bloco final (encontradas ${deepeningKeysSet.size})`
    );

    // Nenhuma colisão entre chaves base e chaves do aprofundamento
    for (const deepKey of deepeningKeysSet) {
      assert.ok(!baseKeysSet.has(deepKey), `Colisão entre chave base e deepening: ${deepKey}`);
    }
  });

  it('T3-03: Contrato de questões autorais e links de fontes formatados em Markdown', () => {
    assert.equal(DEEPENING_ENTRIES.length, 49);

    for (const entry of DEEPENING_ENTRIES) {
      // 1. Todas as questões possuem exatamente 4 alternativas e gabarito válido
      for (const q of entry.questions) {
        assert.equal(q.options.length, 4, `Opções != 4 em ${entry.id}`);
        assert.equal(new Set(q.options).size, 4, `Opções repetidas em ${entry.id}`);
        assert.ok(Number.isInteger(q.ans) && q.ans >= 0 && q.ans < 4, `ans inválido em ${entry.id}`);
        assert.ok(typeof q.comment === 'string' && q.comment.trim().length > 0, `comment vazio em ${entry.id}`);
      }

      // 2. deepeningBlock normaliza prefixo [Autoral]
      const block = deepeningBlock(entry);
      for (const q of block.questions || []) {
        assert.ok(q.q.startsWith('[Autoral] '), `Prefixo [Autoral] ausente em ${entry.id}: "${q.q.slice(0, 30)}"`);
      }

      // 3. Conversão de Markdown para HTML renderiza âncoras para todas as referências
      assert.ok(entry.references.length > 0, `Aula ${entry.id} sem referências`);
      const renderedHtml = renderMarkdownToHtml(block.modoA_markdown!);
      assert.ok(
        renderedHtml.includes('Referências deste complemento') || renderedHtml.includes('referências'),
        `Seção de referências não encontrada no HTML gerado de ${entry.id}`
      );
      for (const ref of entry.references) {
        assert.ok(
          renderedHtml.includes(ref.url),
          `URL ${ref.url} ausente no HTML renderizado de ${entry.id}`
        );
      }
    }
  });

  it('T3-04: Paridade atômica do espelhamento estático entre data/ e public/data/', () => {
    // 1. app_data.json
    const appDataOriginal = fs.readFileSync(path.join(ROOT, 'data/app_data.json'), 'utf8');
    const appDataPublic = fs.readFileSync(path.join(ROOT, 'public/data/app_data.json'), 'utf8');
    assert.equal(appDataOriginal, appDataPublic, 'data/app_data.json diverge de public/data/app_data.json');

    // 2. app_data.js
    const appJsOriginal = fs.readFileSync(path.join(ROOT, 'data/app_data.js'), 'utf8');
    const appJsPublic = fs.readFileSync(path.join(ROOT, 'public/data/app_data.js'), 'utf8');
    assert.equal(appJsOriginal, appJsPublic, 'data/app_data.js diverge de public/data/app_data.js');

    // 3. manifest.json
    const manifestOriginal = fs.readFileSync(path.join(ROOT, 'data/manifest.json'), 'utf8');
    const manifestPublic = fs.readFileSync(path.join(ROOT, 'public/data/manifest.json'), 'utf8');
    assert.equal(manifestOriginal, manifestPublic, 'data/manifest.json diverge de public/data/manifest.json');

    // 4. As 49 aulas modulares
    for (const lesson of rawAppData.lessons) {
      const modOriginal = fs.readFileSync(path.join(ROOT, 'data/lessons', `${lesson.id}.json`), 'utf8');
      const modPublic = fs.readFileSync(path.join(ROOT, 'public/data/lessons', `${lesson.id}.json`), 'utf8');
      assert.equal(modOriginal, modPublic, `Divergência entre cópias modulares de ${lesson.id}.json`);
    }
  });

  it('T3-05: Coerência do manifesto e consolidação de matérias em data/materias.json', () => {
    const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/manifest.json'), 'utf8'));
    const materias = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/materias.json'), 'utf8'));

    assert.equal(manifest.totals.lessons, 49);
    assert.equal(manifest.totals.sources, 126);
    assert.equal(manifest.totals.endemics, 14);
    assert.equal(manifest.totals.blocksBase, 187);
    assert.ok(manifest.totals.blocksWithDeepening >= 236);
    assert.equal(manifest.totals.questionsBase, 534);
    assert.ok(manifest.totals.questionsWithDeepening >= 746);
    assert.ok(manifest.totals.flashcards >= 723);

    // Coerência interna entre manifest.totals e a soma das matérias
    const sumMateriasEnrichedQ = materias.reduce(
      (acc: number, m: any) => acc + (m.totalQuestoesComAprofundamento || 0),
      0
    );
    assert.equal(manifest.totals.questionsWithDeepening, sumMateriasEnrichedQ);

    assert.equal(materias.length, 5);
    const expectedCounts: Record<string, number> = {
      esp: 10,
      leg: 7,
      por: 18,
      rlm: 8,
      atu: 6,
    };

    let sumLessons = 0;
    for (const m of materias) {
      const count = m.aulasIds ? m.aulasIds.length : m.totalAulas;
      assert.equal(
        count,
        expectedCounts[m.id],
        `Matéria ${m.id} possui ${count} aulas (esperado ${expectedCounts[m.id]})`
      );
      sumLessons += count;
    }
    assert.equal(sumLessons, 49, 'A soma das aulas por matéria deve ser exatamente 49');
  });

  it('T3-06: Extração de classes Tailwind e conformidade com safelist do tema', () => {
    assert.ok(typeof DATASET_TAILWIND_CLASSES === 'string' && DATASET_TAILWIND_CLASSES.length > 500);
    const classList = DATASET_TAILWIND_CLASSES.split(' ');

    // Verificar que as principais classes de tema dinâmico estão preservadas
    const requiredColorPrefixes = ['bg-teal', 'bg-emerald', 'bg-amber', 'bg-rose', 'bg-indigo', 'bg-slate'];
    for (const prefix of requiredColorPrefixes) {
      const match = classList.some((c) => c.startsWith(prefix));
      assert.ok(match, `Safelist não contempla classes com prefixo ${prefix}`);
    }

    // Verificar que todas as classes dinâmicas em modoA e modoB das 49 aulas constam em DATASET_TAILWIND_CLASSES
    const datasetSet = new Set(classList);
    for (const lesson of rawAppData.lessons) {
      for (const block of lesson.blocks) {
        const text = `${block.modoA || ''} ${block.modoB || ''}`;
        const matches = text.matchAll(/class="([^"]+)"/g);
        for (const m of matches) {
          const classes = m[1].split(/\s+/).filter(Boolean);
          for (const c of classes) {
            // KaTeX e MathML geram classes internas separadas, verificar se classes Tailwind estão no dataset
            if (c.startsWith('bg-') || c.startsWith('border-') || c.startsWith('text-')) {
              assert.ok(
                datasetSet.has(c),
                `Classe de estilo "${c}" usada em ${lesson.id} não consta em DATASET_TAILWIND_CLASSES`
              );
            }
          }
        }
      }
    }
  });

  it('T3-07: Fluxo de Estado: Questões -> Progresso -> Performance por Matéria e Weak Lessons', () => {
    // Coletar questões de esp_1 e esp_2
    const getLessonQuestions = (l: Lesson) =>
      (l.blocks || []).flatMap((b, bIdx) =>
        (b.questions || []).map((q, qIdx) => ({ bIdx, qIdx, q }))
      );

    const esp1 = normalizedData.lessons.find((l) => l.id === 'esp_1')!;
    const esp2 = normalizedData.lessons.find((l) => l.id === 'esp_2')!;

    const esp1Qs = getLessonQuestions(esp1);
    const esp2Qs = getLessonQuestions(esp2);

    assert.ok(esp1Qs.length >= 2, 'esp_1 deve conter pelo menos 2 questões');
    assert.ok(esp2Qs.length >= 2, 'esp_2 deve conter pelo menos 2 questões');

    const simAnswers: Record<string, number> = {};
    const lessonAnswers: Record<string, number> = {};

    // esp_1: 1 acerto e 1 erro
    const { bIdx: b1, qIdx: qIdx1, q: q1 } = esp1Qs[0];
    const { bIdx: b2, qIdx: qIdx2, q: q2 } = esp1Qs[1];
    lessonAnswers[questionIdentity(`esp_1_b${b1}_q${qIdx1}`, q1)] = q1.ans;
    lessonAnswers[questionIdentity(`esp_1_b${b2}_q${qIdx2}`, q2)] = (q2.ans + 1) % 4;

    // esp_2: 2 erros (accuracy 0% -> deve virar weak lesson)
    const { bIdx: b3, qIdx: qIdx3, q: q3 } = esp2Qs[0];
    const { bIdx: b4, qIdx: qIdx4, q: q4 } = esp2Qs[1];
    lessonAnswers[questionIdentity(`esp_2_b${b3}_q${qIdx3}`, q3)] = (q3.ans + 1) % 4;
    lessonAnswers[questionIdentity(`esp_2_b${b4}_q${qIdx4}`, q4)] = (q4.ans + 1) % 4;

    const perf = calculateQuestionPerformance(normalizedData.lessons, simAnswers, lessonAnswers);

    assert.equal(perf.answered, 4, 'Total de respondidas deve ser 4');
    assert.equal(perf.correct, 1, 'Total de corretas deve ser 1');
    assert.equal(perf.wrong, 3, 'Total de erradas deve ser 3');
    assert.equal(perf.accuracyPct, 25, 'Percentual geral de acerto deve ser 25%');

    // Verificar que esp_2 entrou para a lista de lições fracas (acurácia < 65% com >= 2 respondidas)
    const weakEsp2 = perf.weakLessons.find((w) => w.lessonId === 'esp_2');
    assert.ok(weakEsp2, 'esp_2 deve constar na lista de weakLessons');
    assert.equal(weakEsp2.accuracyPct, 0);

    // esp_1 com 50% de acerto também entra em weakLessons (< 65%)
    const weakEsp1 = perf.weakLessons.find((w) => w.lessonId === 'esp_1');
    assert.ok(weakEsp1, 'esp_1 deve constar na lista de weakLessons com 50% de acerto');
    assert.equal(weakEsp1.accuracyPct, 50);
  });

  it('T3-08: Flashcards e Algoritmo SRS (Repetição Espaçada com ratings hard, good, known)', () => {
    // 1. Chave canônica unificada
    const fcKey = getCanonicalFlashcardKey('esp_1', 0, 2);
    assert.equal(fcKey, 'esp_1_b0_fc_2');

    const now = 1700000000000;

    // 2. Rating 'hard': redefine reps para 0 e agenda revisão para 10 minutos depois
    const entryHard = scheduleFlashcardReview(undefined, 'hard', now);
    assert.equal(entryHard.status, 'hard');
    assert.equal(entryHard.reps, 0);
    assert.equal(entryHard.intervalDays, 0);
    assert.equal(entryHard.dueAt, now + 10 * 60 * 1000);

    // 3. Rating 'good': primeira repetição define intervalo de 1 dia
    const entryGood1 = scheduleFlashcardReview(entryHard, 'good', now);
    assert.equal(entryGood1.status, 'good');
    assert.equal(entryGood1.reps, 1);
    assert.equal(entryGood1.intervalDays, 1);
    assert.equal(entryGood1.dueAt, now + 24 * 60 * 60 * 1000);

    // Segunda repetição consecutiva 'good' avança para 3 dias
    const entryGood2 = scheduleFlashcardReview(entryGood1, 'good', now);
    assert.equal(entryGood2.status, 'good');
    assert.equal(entryGood2.reps, 2);
    assert.equal(entryGood2.intervalDays, 3);

    // 4. Rating 'known': avança para intervalo maduro (7 ou 14 dias)
    const entryKnown = scheduleFlashcardReview(entryGood2, 'known', now);
    assert.equal(entryKnown.status, 'known');
    assert.equal(entryKnown.reps, 3);
    assert.ok(entryKnown.intervalDays >= 7, 'Intervalo conhecido deve ser >= 7 dias');
  });
});
