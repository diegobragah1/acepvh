/**
 * tests/e2e/tier4_real_world_scenarios.test.ts
 * Tier 4: Real-World Scenarios & Workload Simulation
 * Covers the Official Exam Simulation (Anexo III 50 questions, weight 2.0, 50% passing cutoff,
 * seed determinism, draft persistence & sanitization) and full end-to-end headless browser
 * validation via CDP on Desktop (1280x800) and Mobile (320x640) with 0 console errors.
 */

import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  buildOfficialExamSet,
  scoreExamQuestions,
  seededPick,
  loadOfficialExamDraft,
  OFFICIAL_DRAFT_STORAGE_KEY,
  type FlatQuestion,
} from '../../src/utils/simulado';
import { normalizeAppData } from '../../src/utils/normalizeData';
import { questionIdentity } from '../../src/utils/questionIdentity';
import { startStaticServer, type StaticServerHandle } from './helpers/static_server';
import { CdpBrowser, sleep } from './helpers/cdp_browser';
import type { AppData } from '../../src/types';

const ROOT = process.cwd();

const rawAppData: AppData = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'data/app_data.json'), 'utf8')
);
const normalizedData: AppData = normalizeAppData(rawAppData);

// Flatten all questions from the normalized production dataset
const realPool: FlatQuestion[] = [];
normalizedData.lessons.forEach((l) => {
  (l.blocks || []).forEach((b, bIdx) => {
    (b.questions || []).forEach((q, qIdx) => {
      realPool.push({
        qid: questionIdentity(`${l.id}_${bIdx}_${qIdx}`, q),
        lessonQid: questionIdentity(`${l.id}_b${bIdx}_q${qIdx}`, q),
        lessonId: l.id,
        lessonNum: l.num,
        lessonTitle: l.title,
        cat: l.cat,
        catName: l.catName,
        blockTitle: b.title,
        q: q.q,
        options: q.options || [],
        ans: q.ans,
        comment: q.comment || '',
        difficulty: q.difficulty,
        questionType: q.questionType,
        sourceRef: q.sourceRef,
      });
    });
  });
});

describe('Tier 4: Real-World Scenarios & Workload Simulation', () => {
  describe('Cenário 1: Simulado Oficial do Concurso (Anexo III Edital nº 25/2026)', () => {
    it('T4-01: Alocação rigorosa de 50 questões com cotas oficiais (15 esp, 10 por, 10 rlm, 10 leg, 5 atu)', () => {
      assert.ok(realPool.length >= 746, `Pool de questões insuficiente: ${realPool.length}`);
      const exam = buildOfficialExamSet(realPool, 42);

      assert.equal(exam.length, 50, 'A prova oficial deve conter exatamente 50 questões');

      const uniqueQids = new Set(exam.map((q) => q.qid));
      assert.equal(uniqueQids.size, 50, 'Todas as 50 questões devem possuir identificadores únicos');

      const byCat = exam.reduce<Record<string, number>>((acc, q) => {
        acc[q.cat] = (acc[q.cat] || 0) + 1;
        return acc;
      }, {});

      assert.deepEqual(byCat, {
        esp: 15,
        por: 10,
        rlm: 10,
        leg: 10,
        atu: 5,
      });
    });

    it('T4-02: Determinismo e reprodutibilidade do simulado a partir da semente (seed)', () => {
      const examA = buildOfficialExamSet(realPool, 999);
      const examB = buildOfficialExamSet(realPool, 999);
      const examC = buildOfficialExamSet(realPool, 888);

      // Mesma semente gera exatamente as mesmas questões na mesma ordem
      assert.deepEqual(
        examA.map((q) => q.qid),
        examB.map((q) => q.qid)
      );

      // Sementes diferentes geram cadernos distintos
      assert.notDeepEqual(
        examA.map((q) => q.qid),
        examC.map((q) => q.qid)
      );
    });

    it('T4-03: Cálculo exato de pontuação com peso 2,0 e nota máxima 100,0', () => {
      const exam = buildOfficialExamSet(realPool, 100);

      // 1. Simular gabarito perfeito (50 acertos)
      const perfectAnswers: Record<string, number> = {};
      exam.forEach((q) => {
        perfectAnswers[q.qid] = q.ans;
      });

      const perfectScore = scoreExamQuestions(exam, perfectAnswers);
      assert.equal(perfectScore.answered, 50);
      assert.equal(perfectScore.correct, 50);
      assert.equal(perfectScore.points, 100);
      assert.equal(perfectScore.pct, 100);
      assert.equal(perfectScore.approved, true);

      // 2. Simular 35 acertos (70,0 pontos)
      const partialAnswers: Record<string, number> = {};
      exam.forEach((q, idx) => {
        partialAnswers[q.qid] = idx < 35 ? q.ans : (q.ans + 1) % 4;
      });

      const partialScore = scoreExamQuestions(exam, partialAnswers);
      assert.equal(partialScore.answered, 50);
      assert.equal(partialScore.correct, 35);
      assert.equal(partialScore.points, 70);
      assert.equal(partialScore.pct, 70);
      assert.equal(partialScore.approved, true);
    });

    it('T4-04: Borda de corte e aprovação do Edital (limite estrito de 50 pontos)', () => {
      const exam = buildOfficialExamSet(realPool, 200);

      // 0 acertos -> 0 pts, Reprovado
      const zeroAnswers: Record<string, number> = {};
      const scoreZero = scoreExamQuestions(exam, zeroAnswers);
      assert.equal(scoreZero.points, 0);
      assert.equal(scoreZero.approved, false);

      // 24 acertos -> 48 pts (48%), Reprovado (Borda inferior)
      const answers24: Record<string, number> = {};
      exam.forEach((q, idx) => {
        answers24[q.qid] = idx < 24 ? q.ans : (q.ans + 1) % 4;
      });
      const score24 = scoreExamQuestions(exam, answers24);
      assert.equal(score24.correct, 24);
      assert.equal(score24.points, 48);
      assert.equal(score24.pct, 48);
      assert.equal(score24.approved, false, '24 acertos (48 pts) deve ser REPROVADO');

      // 25 acertos -> 50 pts (50%), Aprovado no Limite Exato
      const answers25: Record<string, number> = {};
      exam.forEach((q, idx) => {
        answers25[q.qid] = idx < 25 ? q.ans : (q.ans + 1) % 4;
      });
      const score25 = scoreExamQuestions(exam, answers25);
      assert.equal(score25.correct, 25);
      assert.equal(score25.points, 50);
      assert.equal(score25.pct, 50);
      assert.equal(score25.approved, true, '25 acertos (50 pts) deve ser APROVADO');

      // 26 acertos -> 52 pts (52%), Aprovado
      const answers26: Record<string, number> = {};
      exam.forEach((q, idx) => {
        answers26[q.qid] = idx < 26 ? q.ans : (q.ans + 1) % 4;
      });
      const score26 = scoreExamQuestions(exam, answers26);
      assert.equal(score26.correct, 26);
      assert.equal(score26.points, 52);
      assert.equal(score26.approved, true);
    });

    it('T4-05: Discriminação de desempenho por matéria (byCat)', () => {
      const exam = buildOfficialExamSet(realPool, 300);

      // Responder apenas 10 de esp e 5 de por corretamente
      const answers: Record<string, number> = {};
      let espCount = 0;
      let porCount = 0;

      exam.forEach((q) => {
        if (q.cat === 'esp' && espCount < 10) {
          answers[q.qid] = q.ans;
          espCount++;
        } else if (q.cat === 'por' && porCount < 5) {
          answers[q.qid] = q.ans;
          porCount++;
        } else {
          answers[q.qid] = (q.ans + 1) % 4; // Errada
        }
      });

      const score = scoreExamQuestions(exam, answers);
      assert.equal(score.byCat.esp.total, 15);
      assert.equal(score.byCat.esp.hits, 10);

      assert.equal(score.byCat.por.total, 10);
      assert.equal(score.byCat.por.hits, 5);

      assert.equal(score.byCat.rlm.total, 10);
      assert.equal(score.byCat.rlm.hits, 0);

      assert.equal(score.byCat.leg.total, 10);
      assert.equal(score.byCat.leg.hits, 0);

      assert.equal(score.byCat.atu.total, 5);
      assert.equal(score.byCat.atu.hits, 0);
    });

    it('T4-06: Persistência de rascunho e sanitização de dados no localStorage', () => {
      const mockStorage = new Map<string, string>();
      const originalWindow = (globalThis as any).window;

      (globalThis as any).window = {
        localStorage: {
          getItem: (key: string) => mockStorage.get(key) ?? null,
          setItem: (key: string, val: string) => mockStorage.set(key, val),
          removeItem: (key: string) => mockStorage.delete(key),
        },
      };

      try {
        // 1. Rascunho válido
        const draftPayload = {
          seed: 42,
          answers: { q1: 0, q2: 3, q3: 2 },
          submitted: false,
          recorded: false,
          blindMode: true,
          elapsed: 1500,
        };
        mockStorage.set(OFFICIAL_DRAFT_STORAGE_KEY, JSON.stringify(draftPayload));

        const loadedDraft = loadOfficialExamDraft();
        assert.equal(loadedDraft.seed, 42);
        assert.equal(loadedDraft.answers.q1, 0);
        assert.equal(loadedDraft.answers.q2, 3);
        assert.equal(loadedDraft.elapsed, 1500);

        // 2. Rascunho corrompido com opções fora de 0..3 (deve sanitizar para {})
        const corruptedPayload = {
          seed: 99,
          answers: { q1: 4, q2: -1 }, // 4 e -1 são inválidos
          submitted: false,
          recorded: false,
          blindMode: false,
          elapsed: 200,
        };
        mockStorage.set(OFFICIAL_DRAFT_STORAGE_KEY, JSON.stringify(corruptedPayload));

        const sanitizedDraft = loadOfficialExamDraft();
        assert.equal(sanitizedDraft.seed, 99);
        assert.deepEqual(sanitizedDraft.answers, {}, 'Respostas corrompidas devem ser descartadas');
      } finally {
        if (originalWindow !== undefined) {
          (globalThis as any).window = originalWindow;
        } else {
          delete (globalThis as any).window;
        }
      }
    });
  });

  describe('Cenário 2: Validação E2E no Google Chrome Headless via CDP', () => {
    let serverHandle: StaticServerHandle | null = null;
    let browser: CdpBrowser | null = null;

    before(async () => {
      serverHandle = await startStaticServer('dist');
      browser = await CdpBrowser.launch();
    });

    after(async () => {
      if (browser) {
        await browser.close();
      }
      if (serverHandle) {
        await serverHandle.close();
      }
    });

    it('T4-07: Navegação Desktop (1280x800) pelas 7 abas com renderização de conteúdo e zero erros de console', async () => {
      assert.ok(browser, 'Instância do CDP Browser não inicializada');
      assert.ok(serverHandle, 'Servidor estático não inicializado');

      browser.clearErrors();
      await browser.setViewport({
        width: 1280,
        height: 800,
        mobile: false,
        deviceScaleFactor: 1,
      });

      // Navegar para o app
      await browser.navigate(serverHandle.url);

      // Aguardar renderização inicial das 7 abas
      let ready = false;
      for (let attempt = 0; attempt < 60; attempt++) {
        await sleep(200);
        const check = await browser.evaluate<{ hasNav: boolean; buttonCount: number; mainLength: number }>(`
          (() => {
            const nav = document.querySelector('nav[aria-label="Menu principal da plataforma"]');
            const buttons = nav ? nav.querySelectorAll('button') : [];
            const main = document.querySelector('main');
            return {
              hasNav: Boolean(nav),
              buttonCount: buttons.length,
              mainLength: main ? (main.innerText || '').trim().length : 0,
            };
          })()
        `);
        if (check && check.hasNav && check.buttonCount === 7 && check.mainLength > 500) {
          ready = true;
          break;
        }
      }
      assert.ok(ready, 'Aplicação falhou ao renderizar as 7 abas no layout Desktop');

      // Clicar sequencialmente nas 7 abas
      for (let tabIdx = 0; tabIdx < 7; tabIdx++) {
        const clickResult = await browser.evaluate<{ error?: string; label?: string }>(`
          (() => {
            const buttons = Array.from(document.querySelectorAll('nav[aria-label="Menu principal da plataforma"] button'));
            if (buttons.length <= ${tabIdx}) return { error: 'Botão ${tabIdx} não encontrado' };
            const btn = buttons[${tabIdx}];
            btn.click();
            return { label: btn.textContent.trim() };
          })()
        `);
        assert.ok(!clickResult.error, clickResult.error);

        await sleep(400);

        const mainContent = await browser.evaluate<{ hasMain: boolean; textLength: number }>(`
          (() => {
            const main = document.querySelector('main');
            const text = main ? (main.innerText || main.textContent || '').trim() : '';
            return {
              hasMain: Boolean(main),
              textLength: text.length,
            };
          })()
        `);

        assert.ok(mainContent.hasMain, `Elemento <main> ausente na aba ${tabIdx} (${clickResult.label})`);
        assert.ok(
          mainContent.textLength >= 500,
          `Conteúdo da aba ${tabIdx} (${clickResult.label}) insuficiente (${mainContent.textLength} chars < 500)`
        );
      }

      // Validar zero erros no console e zero exceções
      const errors = browser.getErrors();
      assert.equal(
        errors.consoleErrors.length,
        0,
        `Console errors detectados no Desktop: ${errors.consoleErrors.join('; ')}`
      );
      assert.equal(
        errors.uncaughtExceptions.length,
        0,
        `Exceções não tratadas no Desktop: ${errors.uncaughtExceptions.join('; ')}`
      );
    });

    it('T4-08: Navegação Mobile (320x640) pelas 7 abas com renderização compacta e zero erros de console', async () => {
      assert.ok(browser, 'Instância do CDP Browser não inicializada');
      assert.ok(serverHandle, 'Servidor estático não inicializado');

      browser.clearErrors();
      await browser.setViewport({
        width: 320,
        height: 640,
        mobile: true,
        deviceScaleFactor: 2,
      });

      // Navegar para o app
      await browser.navigate(serverHandle.url);
      await sleep(400);

      // Clicar sequencialmente nas 7 abas no layout compacto
      for (let tabIdx = 0; tabIdx < 7; tabIdx++) {
        const clickResult = await browser.evaluate<{ error?: string; label?: string }>(`
          (() => {
            const buttons = Array.from(document.querySelectorAll('nav[aria-label="Menu principal da plataforma"] button'));
            if (buttons.length <= ${tabIdx}) return { error: 'Botão ${tabIdx} não encontrado' };
            const btn = buttons[${tabIdx}];
            btn.click();
            return { label: btn.textContent.trim() };
          })()
        `);
        assert.ok(!clickResult.error, clickResult.error);

        await sleep(400);

        const mainContent = await browser.evaluate<{ hasMain: boolean; textLength: number }>(`
          (() => {
            const main = document.querySelector('main');
            const text = main ? (main.innerText || main.textContent || '').trim() : '';
            return {
              hasMain: Boolean(main),
              textLength: text.length,
            };
          })()
        `);

        assert.ok(mainContent.hasMain, `Elemento <main> ausente na aba Mobile ${tabIdx} (${clickResult.label})`);
        assert.ok(
          mainContent.textLength >= 500,
          `Conteúdo da aba Mobile ${tabIdx} (${clickResult.label}) insuficiente (${mainContent.textLength} chars < 500)`
        );
      }

      // Validar zero erros no console e zero exceções
      const errors = browser.getErrors();
      assert.equal(
        errors.consoleErrors.length,
        0,
        `Console errors detectados no Mobile: ${errors.consoleErrors.join('; ')}`
      );
      assert.equal(
        errors.uncaughtExceptions.length,
        0,
        `Exceções não tratadas no Mobile: ${errors.uncaughtExceptions.join('; ')}`
      );
    });
  });
});
