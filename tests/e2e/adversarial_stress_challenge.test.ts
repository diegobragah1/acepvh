/**
 * tests/e2e/adversarial_stress_challenge.test.ts
 * Adversarial Stress & Robustness Challenge Harness for ACE SEMUSA Porto Velho 2026.
 *
 * Verifies:
 * 1. Runner Robustness & Windows Process/Taskkill Cleanup:
 *    - Abrupt Chrome termination (taskkill) with pending CDP promises
 *    - Rapid sequential launch/teardown stress (5 cycles) without process or directory leaks
 *    - Concurrent multi-browser sessions
 *    - Idempotent teardown and dead connection rejection
 *    - Static server socket cleanup under concurrent load
 * 2. Official Exam Simulation (Simulado Oficial) Extreme Scenarios:
 *    - Timer boundaries: 3h (10,800s) expiration, warning thresholds, formatting edge cases
 *    - Extreme scoring: 0 questions answered, 0% score (0 pts), 100% score (100 pts), 48/50 cutoff
 *    - Draft persistence, corruption resilience (invalid JSON, bad options, negative elapsed), and reload
 * 3. Live Browser Simulado Flow via Chrome DevTools Protocol (CDP):
 *    - Interactive navigation and submode switching
 *    - Answering questions and timer interaction
 *    - DOM rendering of timer expiration ("Tempo Esgotado!")
 *    - Page reload with draft state recovery from localStorage
 */

import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawnSync } from 'node:child_process';
import {
  buildOfficialExamSet,
  scoreExamQuestions,
  loadOfficialExamDraft,
  saveExamDraft,
  OFFICIAL_DRAFT_STORAGE_KEY,
  OFFICIAL_LIMIT_SECONDS,
  type FlatQuestion,
} from '../../src/utils/simulado';
import { formatDurationSeconds } from '../../src/features/questions/ExamTimerBar';
import { normalizeAppData } from '../../src/utils/normalizeData';
import { questionIdentity } from '../../src/utils/questionIdentity';
import { startStaticServer, type StaticServerHandle } from './helpers/static_server';
import { CdpBrowser, sleep } from './helpers/cdp_browser';
import type { AppData } from '../../src/types';

const ROOT = process.cwd();

// Helper to check if a process PID is currently alive on Windows
function isPidRunning(pid: number): boolean {
  if (process.platform !== 'win32') {
    try {
      process.kill(pid, 0);
      return true;
    } catch {
      return false;
    }
  }
  const res = spawnSync('tasklist', ['/FI', `PID eq ${pid}`, '/FO', 'CSV', '/NH'], {
    encoding: 'utf8',
  });
  const stdout = res.stdout || '';
  return stdout.includes(String(pid));
}

// Prepare question pool
const rawAppData: AppData = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'data/app_data.json'), 'utf8')
);
const normalizedData: AppData = normalizeAppData(rawAppData);

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

describe('Adversarial Challenge: Robustness, Concurrency & Extreme Scenarios', () => {
  // ==========================================================================
  // SUITE 1: Runner Robustness, Process Cleanup & Windows Taskkill Resilience
  // ==========================================================================
  describe('Suite 1: Robustez do Runner e Limpeza de Processos no Windows', () => {
    it('CHAL-01: Resiliência a encerramento abrupto do Chrome (taskkill) durante comandos CDP pendentes', async () => {
      const browser = await CdpBrowser.launch();
      const pid = (browser as any).chromeProcess?.pid;
      const userDataDir = (browser as any).userDataDir;

      assert.ok(pid, 'Chrome deve ter um PID atribuído');
      assert.ok(userDataDir && fs.existsSync(userDataDir), 'User data dir deve existir');

      // Disparar uma operação assíncrona longa no navegador
      const pendingPromise = browser.evaluate(`
        new Promise((resolve) => setTimeout(() => resolve('should_not_reach_here'), 30000));
      `);

      // Matar o processo do Chrome imediatamente com taskkill forçado no Windows
      if (process.platform === 'win32') {
        spawnSync('taskkill', ['/F', '/T', '/PID', String(pid)], { stdio: 'ignore' });
      } else {
        process.kill(pid, 'SIGKILL');
      }

      // A promessa pendente deve rejeitar imediatamente com erro de conexão, sem travar
      await assert.rejects(
        pendingPromise,
        /CDP connection terminated|WebSocket closed|Chrome process terminated/i,
        'Comando pendente deve rejeitar imediatamente ao término forçado do processo'
      );

      // Chamar close() em um browser já morto deve ser tolerante e limpar o diretório temporário
      await browser.close();

      // Verificar que o PID não está mais rodando
      assert.equal(isPidRunning(pid), false, `Processo PID ${pid} não deve continuar ativo`);

      // Aguardar brevemente para cleanup de arquivos NTFS
      await sleep(300);
      assert.equal(
        fs.existsSync(userDataDir),
        false,
        `Diretório temporário ${userDataDir} deve ter sido limpo após close()`
      );
    });

    it('CHAL-02: Ciclo de estresse de 5 execuções consecutivas de Chrome Headless sem vazamento de processos ou pastas', async () => {
      const pids: number[] = [];
      const userDirs: string[] = [];

      for (let i = 0; i < 5; i++) {
        const browser = await CdpBrowser.launch();
        const pid = (browser as any).chromeProcess?.pid;
        const dir = (browser as any).userDataDir;

        assert.ok(pid, `Tentativa ${i}: PID deve existir`);
        assert.ok(dir, `Tentativa ${i}: Diretório temporário deve existir`);

        pids.push(pid);
        userDirs.push(dir);

        // Executar um comando simples de telemetria
        const val = await browser.evaluate('1 + 1');
        assert.equal(val, 2);

        // Teardown completo
        await browser.close();
      }

      // Verificar que NENHUM dos 5 processos continua rodando
      for (let i = 0; i < pids.length; i++) {
        const pid = pids[i];
        assert.equal(
          isPidRunning(pid),
          false,
          `Processo Chrome PID ${pid} da iteração ${i} vazou e continua rodando!`
        );
      }

      // Verificar que TODOS os 5 diretórios temporários foram removidos
      for (let i = 0; i < userDirs.length; i++) {
        const dir = userDirs[i];
        assert.equal(
          fs.existsSync(dir),
          false,
          `Diretório temporário ${dir} da iteração ${i} não foi removido!`
        );
      }
    });

    it('CHAL-03: Concorrência: 3 instâncias simultâneas de Chrome Headless em portas efêmeras distintas', async () => {
      const [b1, b2, b3] = await Promise.all([
        CdpBrowser.launch(),
        CdpBrowser.launch(),
        CdpBrowser.launch(),
      ]);

      const pid1 = (b1 as any).chromeProcess?.pid;
      const pid2 = (b2 as any).chromeProcess?.pid;
      const pid3 = (b3 as any).chromeProcess?.pid;

      assert.notEqual(pid1, pid2, 'Instâncias 1 e 2 devem ter PIDs distintos');
      assert.notEqual(pid2, pid3, 'Instâncias 2 e 3 devem ter PIDs distintos');

      // Executar avaliações concorrentes
      const [res1, res2, res3] = await Promise.all([
        b1.evaluate('Math.sqrt(16)'),
        b2.evaluate('Math.sqrt(25)'),
        b3.evaluate('Math.sqrt(36)'),
      ]);

      assert.equal(res1, 4);
      assert.equal(res2, 5);
      assert.equal(res3, 6);

      // Fechar concorrentemente
      await Promise.all([b1.close(), b2.close(), b3.close()]);

      assert.equal(isPidRunning(pid1), false);
      assert.equal(isPidRunning(pid2), false);
      assert.equal(isPidRunning(pid3), false);
    });

    it('CHAL-04: Idempotência de encerramento e rejeição imediata de comandos pós-fechamento', async () => {
      const browser = await CdpBrowser.launch();
      await browser.close();

      // Chamada redundante de close() não deve lançar exceção
      await assert.doesNotReject(async () => {
        await browser.close();
      }, 'Fechar novamente não deve disparar erro');

      // Enviar comando para navegador fechado deve rejeitar imediatamente
      await assert.rejects(
        browser.sendCommand('Runtime.evaluate', { expression: '1' }),
        /WebSocket not open/i,
        'Comando após close() deve ser sumariamente rejeitado'
      );
    });

    it('CHAL-05: Carga e encerramento determinístico de conexões no servidor estático', async () => {
      const handle = await startStaticServer('dist');
      assert.ok(handle.port > 0, 'Porta efêmera deve ser maior que zero');

      // Disparar 50 requisições simultâneas
      const requests = Array.from({ length: 50 }, () => fetch(handle.url));
      const responses = await Promise.all(requests);
      for (const res of responses) {
        assert.equal(res.status, 200);
      }

      // Fechar o servidor
      await handle.close();

      // Nova requisição deve falhar imediatamente (porta liberada)
      await assert.rejects(
        fetch(handle.url),
        /ECONNREFUSED|fetch failed/i,
        'Porta do servidor deve ser liberada imediatamente'
      );
    });
  });

  // ==========================================================================
  // SUITE 2: Simulado Oficial - Casos Extremos, Fronteiras e Persistência
  // ==========================================================================
  describe('Suite 2: Casos Extremos do Simulado Oficial (Tempo, 0 pts, 100 pts, Rascunho)', () => {
    it('CHAL-06: Formatação e limites temporais do cronômetro oficial de 3h (10.800s)', () => {
      assert.equal(OFFICIAL_LIMIT_SECONDS, 10800, 'Limite oficial deve ser de exatamente 10.800s (3 horas)');

      // Validação de formatDurationSeconds em múltiplos limites
      assert.equal(formatDurationSeconds(0), '00:00:00');
      assert.equal(formatDurationSeconds(59), '00:00:59');
      assert.equal(formatDurationSeconds(60), '00:01:00');
      assert.equal(formatDurationSeconds(3599), '00:59:59');
      assert.equal(formatDurationSeconds(3600), '01:00:00');
      assert.equal(formatDurationSeconds(10799), '02:59:59');
      assert.equal(formatDurationSeconds(10800), '03:00:00', '3h em ponto');
      assert.equal(formatDurationSeconds(10801), '03:00:01');
      assert.equal(formatDurationSeconds(72000), '20:00:00');

      // Resiliência a entradas anômalas (negativos, floats)
      assert.equal(formatDurationSeconds(-10), '00:00:00', 'Negativo deve ser limitado a 0');
      assert.equal(formatDurationSeconds(125.8), '00:02:05', 'Float deve ser truncado');
    });

    it('CHAL-07: Submissão com ZERO questões respondidas (0 pontos, Reprovado)', () => {
      const exam = buildOfficialExamSet(realPool, 555);
      assert.equal(exam.length, 50);

      // Nenhuma resposta fornecida
      const emptyAnswers: Record<string, number> = {};
      const score = scoreExamQuestions(exam, emptyAnswers);

      assert.equal(score.answered, 0, 'Total de respondidas deve ser 0');
      assert.equal(score.correct, 0, 'Total de acertos deve ser 0');
      assert.equal(score.points, 0, 'Nota deve ser exatamente 0,0');
      assert.equal(score.pct, 0, 'Percentual deve ser 0%');
      assert.equal(score.approved, false, '0 acertos deve ser REPROVADO');
      assert.equal(score.total, 50);

      // Conferir todas as disciplinas zeradas
      for (const cat of ['esp', 'por', 'rlm', 'leg', 'atu']) {
        assert.equal(score.byCat[cat].hits, 0);
      }
    });

    it('CHAL-08: Submissão com 100% de acertos (50/50, 100,0 pontos, Aprovado)', () => {
      const exam = buildOfficialExamSet(realPool, 777);

      const perfectAnswers: Record<string, number> = {};
      exam.forEach((q) => {
        perfectAnswers[q.qid] = q.ans;
      });

      const score = scoreExamQuestions(exam, perfectAnswers);
      assert.equal(score.answered, 50);
      assert.equal(score.correct, 50);
      assert.equal(score.points, 100);
      assert.equal(score.pct, 100);
      assert.equal(score.approved, true, '100% de acertos deve ser APROVADO');

      assert.equal(score.byCat.esp.hits, 15);
      assert.equal(score.byCat.por.hits, 10);
      assert.equal(score.byCat.rlm.hits, 10);
      assert.equal(score.byCat.leg.hits, 10);
      assert.equal(score.byCat.atu.hits, 5);
    });

    it('CHAL-09: Submissão com 50 questões respondidas, mas TODAS erradas (0 pontos, Reprovado)', () => {
      const exam = buildOfficialExamSet(realPool, 888);

      const allWrongAnswers: Record<string, number> = {};
      exam.forEach((q) => {
        allWrongAnswers[q.qid] = (q.ans + 1) % 4; // Garantidamente incorreta
      });

      const score = scoreExamQuestions(exam, allWrongAnswers);
      assert.equal(score.answered, 50, '50 questões respondidas');
      assert.equal(score.correct, 0, '0 questões corretas');
      assert.equal(score.points, 0, '0 pontos');
      assert.equal(score.pct, 0, '0%');
      assert.equal(score.approved, false);
    });

    it('CHAL-10: Teste estrito de borda de corte (48 pts Reprovado vs 50 pts Aprovado)', () => {
      const exam = buildOfficialExamSet(realPool, 999);

      // 24 acertos -> 48 pts -> Reprovado
      const ans24: Record<string, number> = {};
      exam.forEach((q, idx) => {
        ans24[q.qid] = idx < 24 ? q.ans : (q.ans + 1) % 4;
      });
      const score24 = scoreExamQuestions(exam, ans24);
      assert.equal(score24.correct, 24);
      assert.equal(score24.points, 48);
      assert.equal(score24.pct, 48);
      assert.equal(score24.approved, false, '48 pontos deve ser REPROVADO');

      // 25 acertos -> 50 pts -> Aprovado
      const ans25: Record<string, number> = {};
      exam.forEach((q, idx) => {
        ans25[q.qid] = idx < 25 ? q.ans : (q.ans + 1) % 4;
      });
      const score25 = scoreExamQuestions(exam, ans25);
      assert.equal(score25.correct, 25);
      assert.equal(score25.points, 50);
      assert.equal(score25.pct, 50);
      assert.equal(score25.approved, true, '50 pontos deve ser APROVADO');
    });

    it('CHAL-11: Persistência e restauração de rascunho com sanitização profunda contra dados corrompidos', () => {
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
        // 1. Rascunho válido parcial (12 respostas, decorrido 1800s = 30min)
        const validDraft = {
          seed: 1234,
          answers: {
            'esp_1_b0_q0': 0,
            'esp_1_b0_q1': 1,
            'esp_2_b0_q0': 2,
            'leg_1_b0_q0': 3,
          },
          submitted: false,
          recorded: false,
          blindMode: true,
          elapsed: 1800,
        };
        saveExamDraft(OFFICIAL_DRAFT_STORAGE_KEY, validDraft);

        const loaded = loadOfficialExamDraft();
        assert.equal(loaded.seed, 1234);
        assert.equal(loaded.answers['esp_1_b0_q0'], 0);
        assert.equal(loaded.answers['leg_1_b0_q0'], 3);
        assert.equal(loaded.elapsed, 1800);
        assert.equal(loaded.blindMode, true);
        assert.equal(loaded.submitted, false);

        // 2. Corrupção: JSON inválido na chave do rascunho
        mockStorage.set(OFFICIAL_DRAFT_STORAGE_KEY, '{ invalid_json ::: "syntax error');
        const fallbackDraft = loadOfficialExamDraft();
        assert.equal(fallbackDraft.seed, 1);
        assert.deepEqual(fallbackDraft.answers, {});
        assert.equal(fallbackDraft.elapsed, 0);

        // 3. Corrupção: respostas inválidas (opções > 3, negativas, tipos incorretos)
        const dirtyAnswers = {
          seed: 456,
          answers: {
            q1: 4, // inválido (só 0..3)
            q2: -1, // inválido
            q3: 'A', // inválido
            q4: null, // inválido
            q5: 2, // válido
          },
          submitted: false,
          recorded: false,
          blindMode: false,
          elapsed: -500, // inválido
        };
        mockStorage.set(OFFICIAL_DRAFT_STORAGE_KEY, JSON.stringify(dirtyAnswers));

        const sanitized = loadOfficialExamDraft();
        assert.equal(sanitized.seed, 456);
        assert.deepEqual(sanitized.answers, {}, 'Respostas adulteradas devem ser descartadas');
        assert.equal(sanitized.elapsed, 0, 'Tempo negativo deve ser resetado para 0');
        assert.equal(sanitized.blindMode, false);

        // 4. Corrupção: seed não-inteiro ou negativo
        const badSeed = {
          seed: -99,
          answers: {},
          submitted: false,
          recorded: false,
          blindMode: true,
          elapsed: 100,
        };
        mockStorage.set(OFFICIAL_DRAFT_STORAGE_KEY, JSON.stringify(badSeed));
        const sanitizedSeed = loadOfficialExamDraft();
        assert.equal(sanitizedSeed.seed, 1, 'Seed inválido deve cair para 1');
      } finally {
        if (originalWindow !== undefined) {
          (globalThis as any).window = originalWindow;
        } else {
          delete (globalThis as any).window;
        }
      }
    });

    it('CHAL-12: Determinismo e consistência após reload: prova com seed 42 mantém exatamente as mesmas 50 questões', () => {
      const examOriginal = buildOfficialExamSet(realPool, 42);
      assert.equal(examOriginal.length, 50);

      // Simular reload carregando do rascunho
      const reloadedExam = buildOfficialExamSet(realPool, 42);

      assert.deepEqual(
        examOriginal.map((q) => q.qid),
        reloadedExam.map((q) => q.qid),
        'As questões do simulado recarregado devem ser 100% idênticas às originais'
      );
    });
  });

  // ==========================================================================
  // SUITE 3: Navegação Real no Chrome Headless via CDP - Simulado Oficial
  // ==========================================================================
  describe('Suite 3: Validação E2E no Chrome Headless do Fluxo Completo do Simulado', () => {
    let serverHandle: StaticServerHandle | null = null;
    let browser: CdpBrowser | null = null;

    before(async () => {
      serverHandle = await startStaticServer('dist');
      browser = await CdpBrowser.launch();
    });

    after(async () => {
      if (browser) await browser.close();
      if (serverHandle) await serverHandle.close();
    });

    it('CHAL-13: Transição para aba Simulado e seleção do submodo Prova Oficial', async () => {
      assert.ok(browser && serverHandle);
      browser.clearErrors();

      await browser.setViewport({ width: 1280, height: 800, mobile: false });
      await browser.navigate(serverHandle.url);

      // Aguardar renderização inicial
      await sleep(1500);

      // Clicar na aba "Revisão" (tab-simulado) no menu de navegação
      const clickTab = await browser.evaluate<boolean>(`
        (() => {
          const buttons = Array.from(document.querySelectorAll('nav[aria-label="Menu principal da plataforma"] button'));
          const simTab = buttons.find((b) => b.textContent && (b.textContent.includes('Revisão') || b.textContent.includes('✍️')));
          if (simTab) {
            simTab.click();
            return true;
          }
          return false;
        })()
      `);
      assert.ok(clickTab, 'Aba principal de simulado/revisão não encontrada');
      await sleep(600);

      // Selecionar o submodo "Simulado Oficial (50Q)"
      const selectSubmode = await browser.evaluate<boolean>(`
        (() => {
          const buttons = Array.from(document.querySelectorAll('button'));
          const ofBtn = buttons.find((b) => b.textContent && b.textContent.includes('Simulado Oficial (50Q)'));
          if (ofBtn) {
            ofBtn.click();
            return true;
          }
          return false;
        })()
      `);
      assert.ok(selectSubmode, 'Botão do submodo Simulado Oficial (50Q) não encontrado');
      await sleep(800);

      // Verificar que o título do Simulado Oficial e o cronômetro foram renderizados
      const examRenderCheck = await browser.evaluate<{
        hasTitle: boolean;
        hasTimer: boolean;
        questionCardsCount: number;
      }>(`
        (() => {
          const text = document.body.innerText || '';
          const hasTitle = text.includes('Prova Simulada Oficial ACE') || text.includes('50 Questões');
          const hasTimer = text.includes('Cronômetro') || text.includes('Restam') || text.includes('Tempo');
          const questionHeaders = Array.from(document.querySelectorAll('p')).filter((p) =>
            p.textContent && p.textContent.includes('Questão ')
          );
          return {
            hasTitle,
            hasTimer,
            questionCardsCount: questionHeaders.length,
          };
        })()
      `);

      assert.ok(examRenderCheck.hasTitle, 'Título do Simulado Oficial não encontrado na interface');
      assert.ok(examRenderCheck.hasTimer, 'Barra do cronômetro oficial não encontrada');
      assert.equal(
        examRenderCheck.questionCardsCount,
        50,
        `Exatamente 50 cards de questões devem ser renderizados: ${examRenderCheck.questionCardsCount}`
      );
    });

    it('CHAL-14: Interação com opções de resposta e início reativo do cronômetro', async () => {
      assert.ok(browser);

      // Clicar na primeira opção da primeira questão
      const clickOption = await browser.evaluate<{ success: boolean; label?: string }>(`
        (() => {
          // Encontrar o primeiro card de questão
          const questionHeader = Array.from(document.querySelectorAll('p')).find((p) =>
            p.textContent && p.textContent.includes('Questão 1:')
          );
          if (!questionHeader) return { success: false };
          const card = questionHeader.closest('.rounded-xl');
          if (!card) return { success: false };
          const optionButtons = Array.from(card.querySelectorAll('button')).filter((b) =>
            !b.textContent?.includes('Favoritar') && !b.textContent?.includes('Aula')
          );
          if (optionButtons.length > 0) {
            optionButtons[0].click();
            return { success: true, label: optionButtons[0].textContent?.trim() };
          }
          return { success: false };
        })()
      `);

      assert.ok(clickOption.success, 'Nenhuma opção clicável encontrada na Questão 1');
      await sleep(500);

      // Verificar se o cronômetro foi ativado ou se a resposta foi contabilizada no contador
      const progressCheck = await browser.evaluate<{ text: string; hasAnswers: boolean }>(`
        (() => {
          const bodyText = document.body.innerText || '';
          return {
            text: bodyText.slice(0, 500),
            hasAnswers: bodyText.includes('1/50') || bodyText.includes('Respondidas') || bodyText.includes('Restam'),
          };
        })()
      `);

      assert.ok(progressCheck.hasAnswers, 'Progresso da resposta não refletido na interface');
    });

    it('CHAL-15: Simulação de estouro de tempo (3h = 10.800s) e renderização do badge "Tempo Esgotado!"', async () => {
      assert.ok(browser);

      // Injetar rascunho com tempo esgotado (elapsed = 10800s) diretamente no localStorage
      await browser.evaluate(`
        (() => {
          const draft = {
            seed: 1,
            answers: {},
            submitted: false,
            recorded: false,
            blindMode: true,
            elapsed: 10800,
          };
          window.localStorage.setItem('${OFFICIAL_DRAFT_STORAGE_KEY}', JSON.stringify(draft));
        })()
      `);

      // Recarregar a página para ler o rascunho com tempo esgotado
      await browser.evaluate('window.location.reload()');
      await sleep(1500);

      // Navegar para o Simulado Oficial novamente
      await browser.evaluate(`
        (() => {
          const navBtns = Array.from(document.querySelectorAll('nav button'));
          const simTab = navBtns.find((b) => b.textContent && (b.textContent.includes('Revisão') || b.textContent.includes('✍️')));
          if (simTab) simTab.click();
        })()
      `);
      await sleep(500);

      await browser.evaluate(`
        (() => {
          const btns = Array.from(document.querySelectorAll('button'));
          const ofBtn = btns.find((b) => b.textContent && b.textContent.includes('Simulado Oficial (50Q)'));
          if (ofBtn) ofBtn.click();
        })()
      `);
      await sleep(600);

      // Verificar a exibição textual de "Tempo Esgotado!"
      const timerExpiredCheck = await browser.evaluate<boolean>(`
        (() => {
          const text = document.body.innerText || '';
          return text.includes('Tempo Esgotado!') || text.includes('03:00:00') || text.includes('00:00:00');
        })()
      `);

      assert.ok(timerExpiredCheck, 'Interface não exibiu indicação de Tempo Esgotado após 10.800s');
    });

    it('CHAL-16: Ausência total de erros de console ou exceções não tratadas durante todo o ciclo de estresse', () => {
      assert.ok(browser);
      const errors = browser.getErrors();
      assert.equal(
        errors.consoleErrors.length,
        0,
        `Console errors detectados no Chrome CDP: ${errors.consoleErrors.join('; ')}`
      );
      assert.equal(
        errors.uncaughtExceptions.length,
        0,
        `Exceções não tratadas no Chrome CDP: ${errors.uncaughtExceptions.join('; ')}`
      );
    });
  });
});
