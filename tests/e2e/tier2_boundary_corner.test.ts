/**
 * tests/e2e/tier2_boundary_corner.test.ts
 * Tier 2: Boundary Value Analysis (BVA) & Corner Cases
 * Covers strict 4-option A-D format without 'letra E', positional stability of questionIdentity,
 * cryptographic SHA-256 integrity, KaTeX math bounds, and formal source URL verification.
 * Total: 25 exhaustive test cases.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { questionIdentity } from '../../src/utils/questionIdentity';
import { normalizeAppData } from '../../src/utils/normalizeData';
import { renderMathInHtml, protectMath } from '../../src/utils/math';
import { renderMarkdownToHtml } from '../../src/utils/markdown';
import type { AppData, Lesson, Question } from '../../src/types';

const ROOT = process.cwd();

function sha256(input: string | Buffer): string {
  return crypto.createHash('sha256').update(input).digest('hex');
}

function computeCanonicalLessonHash(lesson: Lesson): string {
  const canonical = JSON.stringify({
    id: lesson.id,
    num: lesson.num,
    cat: lesson.cat,
    catName: lesson.catName,
    weight: lesson.weight,
    title: lesson.title,
    editalRef: lesson.editalRef,
    blocks: lesson.blocks,
    mindMap: lesson.mindMap,
  });
  return sha256(canonical);
}

const rawAppData: AppData = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'data/app_data.json'), 'utf8')
);
const normalizedData: AppData = normalizeAppData(rawAppData);

describe('Tier 2: Boundary Value Analysis & Corner Cases (BVA)', () => {
  describe('Área 1: Padrão Estrito de 4 Alternativas A-D sem "Letra E"', () => {
    it('T2-BC1-01: Exatamente 4 opções (A, B, C, D) em 100% das questões do banco (>= 746 questões)', () => {
      let count = 0;
      for (const lesson of normalizedData.lessons) {
        for (const block of lesson.blocks) {
          for (const q of block.questions || []) {
            assert.equal(
              q.options.length,
              4,
              `Questão em ${lesson.id} ("${q.q.slice(0, 40)}...") não possui exatamente 4 opções (${q.options.length})`
            );
            count++;
          }
        }
      }
      assert.ok(count >= 746, `Total de questões aferidas (${count}) inferior ao piso de 746`);
    });

    it('T2-BC1-02: Gabarito (ans) como número inteiro no intervalo estrito de 0 a 3', () => {
      let count = 0;
      for (const lesson of normalizedData.lessons) {
        for (const block of lesson.blocks) {
          for (const q of block.questions || []) {
            assert.ok(
              Number.isInteger(q.ans),
              `Gabarito não é inteiro em ${lesson.id}: ${q.ans}`
            );
            assert.ok(
              q.ans >= 0 && q.ans <= 3,
              `Gabarito fora do intervalo [0, 3] em ${lesson.id}: ${q.ans}`
            );
            count++;
          }
        }
      }
      assert.ok(count >= 746);
    });

    it('T2-BC1-03: Ausência absoluta de menções à "Letra E" ou "Erro da E" em enunciados, opções e comentários', () => {
      const forbiddenRegex = /\b(alternativa\s+e\b|opção\s+e\b|erro\s+da\s+e\b|justificativa\s+da\s+e\b|gabarito\s+(?:é\s+a\s+|na\s+)?letra\s+e\b|(?:marcar|assinalar)\s+a\s+letra\s+e\b|letra\s+e\s+(?:está|é|como|correta|incorreta|falsa|verdadeira))\b/i;
      let violations = 0;
      const violatedQuestions: string[] = [];

      for (const lesson of normalizedData.lessons) {
        for (const block of lesson.blocks) {
          for (const q of block.questions || []) {
            const combinedText = [q.q, ...q.options, q.comment].join(' ');
            if (forbiddenRegex.test(combinedText)) {
              violations++;
              violatedQuestions.push(`${lesson.id}: ${q.q.slice(0, 40)}`);
            }
          }
        }
      }

      assert.equal(
        violations,
        0,
        `Encontradas referências à quinta alternativa ("letra E"): ${violatedQuestions.join('; ')}`
      );
    });

    it('T2-BC1-04: Ausência de opções vazias ou puramente em branco', () => {
      for (const lesson of normalizedData.lessons) {
        for (const block of lesson.blocks) {
          for (const q of block.questions || []) {
            q.options.forEach((opt, optIdx) => {
              assert.ok(
                typeof opt === 'string' && opt.trim().length > 0,
                `Opção índice ${optIdx} vazia em questão de ${lesson.id}`
              );
            });
          }
        }
      }
    });

    it('T2-BC1-05: Unicidade das 4 alternativas dentro da mesma questão (zero distratores idênticos)', () => {
      for (const lesson of normalizedData.lessons) {
        for (const block of lesson.blocks) {
          for (const q of block.questions || []) {
            const trimmedOptions = q.options.map((o) => o.trim());
            const unique = new Set(trimmedOptions);
            assert.equal(
              unique.size,
              4,
              `Alternativas duplicadas na questão de ${lesson.id}: "${q.q.slice(0, 40)}..."`
            );
          }
        }
      }
    });
  });

  describe('Área 2: Estabilidade Posicional de IDs de Questão (questionIdentity.ts)', () => {
    it('T2-BC2-01: Estabilidade das chaves posicionais das 534 questões base entre raw e normalized', () => {
      let baseQuestionsCount = 0;
      rawAppData.lessons.forEach((rawL, lIdx) => {
        const normL = normalizedData.lessons[lIdx];
        rawL.blocks.forEach((rawB, bIdx) => {
          (rawB.questions || []).forEach((rawQ, qIdx) => {
            const rawKey = questionIdentity(`${rawL.id}_b${bIdx}_q${qIdx}`, rawQ);
            const normQ = normL.blocks[bIdx].questions![qIdx];
            const normKey = questionIdentity(`${normL.id}_b${bIdx}_q${qIdx}`, normQ);
            assert.equal(rawKey, normKey, `Chave posicional divergente na lição ${rawL.id}`);
            baseQuestionsCount++;
          });
        });
      });
      assert.equal(baseQuestionsCount, 534, 'Devem existir exatamente 534 questões base preservadas');
    });

    it('T2-BC2-02: Alocação exclusiva de questões de aprofundamento no bloco final de cada aula', () => {
      normalizedData.lessons.forEach((normL, lIdx) => {
        const rawL = rawAppData.lessons[lIdx];
        assert.equal(normL.blocks.length, rawL.blocks.length + 1);
        const lastBlock = normL.blocks[normL.blocks.length - 1];
        assert.ok(
          lastBlock.title.startsWith('Aprofundamento aplicado'),
          `Bloco final de ${normL.id} deve ser de aprofundamento`
        );
        assert.ok(
          (lastBlock.questions?.length || 0) >= 2,
          `Bloco de aprofundamento de ${normL.id} deve ter no mínimo 2 questões`
        );
      });
    });

    it('T2-BC2-03: Comportamento determinístico da função questionIdentity com e sem revision', () => {
      assert.equal(questionIdentity('esp_1_b0_q0'), 'esp_1_b0_q0');
      assert.equal(questionIdentity('esp_1_b0_q0', {}), 'esp_1_b0_q0');
      assert.equal(questionIdentity('esp_1_b0_q0', { revision: undefined }), 'esp_1_b0_q0');
      assert.equal(
        questionIdentity('esp_1_b0_q0', { revision: '20261101' }),
        'esp_1_b0_q0_r20261101'
      );
    });

    it('T2-BC2-04: Proteção contra reaproveitamento de respostas legadas sob revisão', () => {
      const mockStorage: Record<string, number> = {
        rlm_8_b0_q0: 0,
        rlm_8_b0_q1: 2,
      };

      const revisedQuestion: Question = {
        q: 'Pergunta revisada',
        options: ['A', 'B', 'C', 'D'],
        ans: 1,
        revision: '20261031',
      };
      const unrevisedQuestion: Question = {
        q: 'Pergunta estável',
        options: ['A', 'B', 'C', 'D'],
        ans: 2,
      };

      const revisedKey = questionIdentity('rlm_8_b0_q0', revisedQuestion);
      const unrevisedKey = questionIdentity('rlm_8_b0_q1', unrevisedQuestion);

      assert.equal(revisedKey, 'rlm_8_b0_q0_r20261031');
      assert.equal(mockStorage[revisedKey], undefined, 'Resposta legada não deve ser lida para questão revisada');
      assert.equal(mockStorage[unrevisedKey], 2, 'Resposta da questão não revisada permanece acessível');
    });

    it('T2-BC2-05: Unicidade global de todas as 746 chaves do banco de simulado', () => {
      const allSimuladoKeys = new Set<string>();
      for (const lesson of normalizedData.lessons) {
        for (const [bIdx, block] of lesson.blocks.entries()) {
          for (const [qIdx, q] of (block.questions || []).entries()) {
            const base = `${lesson.id}_${bIdx}_${qIdx}`;
            const key = questionIdentity(base, q);
            assert.ok(!allSimuladoKeys.has(key), `Chave duplicada encontrada no simulado: ${key}`);
            allSimuladoKeys.add(key);
          }
        }
      }
      assert.ok(
        allSimuladoKeys.size >= 746,
        `O banco de simulado deve conter no mínimo 746 chaves distintas (encontradas ${allSimuladoKeys.size})`
      );
    });
  });

  describe('Área 3: Integridade Criptográfica SHA-256 das 49 Aulas', () => {
    it('T2-BC3-01: Paridade SHA-256 entre arquivos modulares data/lessons/${id}.json e data/app_data.json', () => {
      for (const rawLesson of rawAppData.lessons) {
        const modularPath = path.join(ROOT, 'data/lessons', `${rawLesson.id}.json`);
        assert.ok(fs.existsSync(modularPath), `Arquivo modular ausente: ${modularPath}`);
        const modularLesson: Lesson = JSON.parse(fs.readFileSync(modularPath, 'utf8'));

        const hashRaw = computeCanonicalLessonHash(rawLesson);
        const hashMod = computeCanonicalLessonHash(modularLesson);
        assert.equal(hashRaw, hashMod, `Divergência SHA-256 na aula ${rawLesson.id}`);
      }
    });

    it('T2-BC3-02: Coincidência dos hashes registrados em data/aulas.json com o cálculo em runtime', () => {
      const aulasIndex = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/aulas.json'), 'utf8'));
      assert.equal(aulasIndex.length, 49, 'data/aulas.json deve listar 49 aulas');

      rawAppData.lessons.forEach((rawLesson, idx) => {
        const storedHash = aulasIndex[idx].contentHash;
        const calculatedHash = computeCanonicalLessonHash(rawLesson);
        assert.equal(
          storedHash,
          calculatedHash,
          `Hash divergente em data/aulas.json para a aula ${rawLesson.id}`
        );
      });
    });

    it('T2-BC3-03: Paridade criptográfica byte-a-byte entre data/lessons/ e public/data/lessons/', () => {
      for (const rawLesson of rawAppData.lessons) {
        const p1 = path.join(ROOT, 'data/lessons', `${rawLesson.id}.json`);
        const p2 = path.join(ROOT, 'public/data/lessons', `${rawLesson.id}.json`);
        const h1 = sha256(fs.readFileSync(p1));
        const h2 = sha256(fs.readFileSync(p2));
        assert.equal(h1, h2, `Discrepância criptográfica no espelho de ${rawLesson.id}.json`);
      }
    });

    it('T2-BC3-04: Integridade do wrapper JavaScript data/app_data.js vs data/app_data.json', () => {
      const jsText = fs.readFileSync(path.join(ROOT, 'data/app_data.js'), 'utf8');
      const jsonStr = jsText.replace(/^window\.APP_DATA\s*=\s*/, '').replace(/;\s*$/, '');
      const dataFromJs = JSON.parse(jsonStr);
      assert.deepEqual(dataFromJs, rawAppData, 'data/app_data.js não reflete fielmente data/app_data.json');
    });

    it('T2-BC3-05: Sensibilidade a adulteração (Tamper Detection altera hash determinístico)', () => {
      const originalLesson = rawAppData.lessons[0];
      const originalHash = computeCanonicalLessonHash(originalLesson);

      const tamperedLesson: Lesson = JSON.parse(JSON.stringify(originalLesson));
      tamperedLesson.title += ' [Adulteração detectada]';
      const tamperedHash = computeCanonicalLessonHash(tamperedLesson);

      assert.notEqual(
        originalHash,
        tamperedHash,
        'O algoritmo SHA-256 deve ser sensível a mutações no título ou conteúdo'
      );
    });
  });

  describe('Área 4: Renderização KaTeX e Fórmulas Matemáticas', () => {
    it('T2-BC4-01: Zero ocorrências de "data-math-error" em todo o acervo enriquecido', () => {
      let mathErrors = 0;
      for (const lesson of normalizedData.lessons) {
        for (const block of lesson.blocks) {
          const contents = [
            block.modoA || '',
            block.modoB || '',
            ...(block.questions || []).flatMap((q) => [q.q, ...q.options, q.comment]),
            ...(block.flashcards || []).flatMap((f) => [f.f, f.b]),
          ];
          for (const text of contents) {
            if (text && text.includes('$')) {
              const rendered = renderMathInHtml(text);
              if (rendered.includes('data-math-error')) {
                mathErrors++;
              }
            }
          }
        }
      }
      assert.equal(mathErrors, 0, `Foram detectados ${mathErrors} erros de renderização KaTeX`);
    });

    it('T2-BC4-02: Imunidade a colisões com valores monetários em Reais (R$)', () => {
      const input = '<p>O piso salarial é R$ 3.242,00 e o acréscimo é $x = 2$ reais.</p>';
      const output = renderMathInHtml(input);
      assert.ok(output.includes('R$ 3.242,00'), 'Valor em reais corrompido');
      assert.ok(output.includes('<math') || output.includes('class="katex"'), 'Fórmula matemática não renderizada');
      assert.ok(!output.includes('data-math-error'), 'Erro indevido de KaTeX gerado em valor monetário');
    });

    it('T2-BC4-03: Suporte a fórmulas com barras de valor absoluto em tabelas Markdown', () => {
      const markdownTable = '| Operação | Fórmula |\n| --- | --- |\n| Módulo | $|x| = 5$ |\n| Divisão | $\\frac{1}{2}$ |';
      const renderedHtml = renderMarkdownToHtml(markdownTable);
      assert.ok(renderedHtml.includes('<table'), 'Tabela Markdown não foi criada');
      assert.ok(renderedHtml.includes('<td'), 'Células da tabela não foram criadas');
      assert.ok(!renderedHtml.includes('data-math-error'), 'Erro de fórmula em tabela');
    });

    it('T2-BC4-04: Proteção de expressões matemáticas contra injeção de marcadores HTML', () => {
      const sample = '<p>Dose recomendada: $x = \\frac{1}{2}$ no intervalo de 30 dias.</p>';
      const protectedResult = protectMath(sample);
      assert.ok(protectedResult.text.includes('ACEFORMULA'), 'Token de proteção não foi inserido');
      const restored = protectedResult.restore(protectedResult.text);
      assert.ok(restored.includes('<math') || restored.includes('class="katex"'), 'Fórmula não restaurada');
      assert.ok(!restored.includes('<math <mark'), 'Injeção inadequada de tags dentro de MathML');
    });

    it('T2-BC4-05: Quota de densidade de fórmulas no módulo RLM (> 200 fórmulas ativas)', () => {
      const rlmLessons = normalizedData.lessons.filter((l) => l.cat === 'rlm');
      let formulaCount = 0;
      for (const lesson of rlmLessons) {
        for (const block of lesson.blocks) {
          const text = [block.modoA || '', block.modoB || ''].join(' ');
          const rendered = renderMathInHtml(text);
          const matches = rendered.match(/<math\b/g) || rendered.match(/class="katex"/g) || [];
          formulaCount += matches.length;
        }
      }
      assert.ok(
        formulaCount > 200,
        `Densidade insuficiente de fórmulas em RLM (${formulaCount} encontradas, esperado > 200)`
      );
    });
  });

  describe('Área 5: Validação Formal das 126 URLs de Fontes', () => {
    it('T2-BC5-01: Contagem exata de 126 fontes numeradas sequencialmente de 1 a 126', () => {
      const sources = rawAppData.sources || [];
      assert.equal(sources.length, 126, 'Catálogo de fontes deve conter 126 itens');
      const nums = new Set(sources.map((s) => s.num));
      for (let i = 1; i <= 126; i++) {
        assert.ok(nums.has(i), `Fonte #${i} ausente na sequência contínua 1..126`);
      }
    });

    it('T2-BC5-02: Conformidade formal RFC 3986 e protocolo http/https em todas as 126 URLs', () => {
      const sources = rawAppData.sources || [];
      sources.forEach((s) => {
        assert.doesNotThrow(() => {
          const parsed = new URL(s.url);
          assert.ok(
            parsed.protocol === 'http:' || parsed.protocol === 'https:',
            `Protocolo inválido na fonte #${s.num}: ${parsed.protocol}`
          );
        }, `URL malformada na fonte #${s.num}: ${s.url}`);
      });
    });

    it('T2-BC5-03: Unicidade absoluta de URLs no catálogo canônico (zero duplicatas de endpoint)', () => {
      const sources = rawAppData.sources || [];
      const urls = sources.map((s) => s.url.trim());
      const uniqueUrls = new Set(urls);
      assert.equal(
        uniqueUrls.size,
        126,
        `Existem URLs duplicadas no catálogo de fontes (${uniqueUrls.size} únicas de 126)`
      );
    });

    it('T2-BC5-04: Prevalência de domínios públicos oficiais e institucionais autorizados', () => {
      const allowedSuffixes = [
        'gov.br',
        'leg.br',
        'fiocruz.br',
        'academia.org.br',
        'aulete.com.br',
        'impa.br',
        'scielo.br',
        'ufmg.br',
        'drive.google.com',
        'openstax.org',
        'libretexts.org',
        'navy.mil',
        'ibgpconcursos.com.br',
      ];
      const sources = rawAppData.sources || [];
      const nonMatches: string[] = [];
      sources.forEach((s) => {
        const host = new URL(s.url).hostname;
        const valid = allowedSuffixes.some((suffix) => host.endsWith(suffix));
        if (!valid) nonMatches.push(`#${s.num}: ${host}`);
      });
      assert.deepEqual(
        nonMatches,
        [],
        `Fontes possuem domínios não homologados: ${nonMatches.join(', ')}`
      );
    });

    it('T2-BC5-05: Rastreabilidade reversa integral (nenhuma aula referencia fonte inexistente)', () => {
      const sourceMap = new Map((rawAppData.sources || []).map((s) => [s.num, s]));
      for (const lesson of normalizedData.lessons) {
        const refs = Array.isArray(lesson.sources) ? lesson.sources : lesson.sources?.value || [];
        for (const refNum of refs) {
          const found = sourceMap.get(refNum);
          assert.ok(
            found,
            `Aula ${lesson.id} faz remissão à fonte #${refNum} que não existe no catálogo`
          );
          assert.ok(
            Boolean(found.url && found.url.length > 10),
            `Fonte #${refNum} referenciada em ${lesson.id} possui URL vazia`
          );
        }
      }
    });
  });
});
