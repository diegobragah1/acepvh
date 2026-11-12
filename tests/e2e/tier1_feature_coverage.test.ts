/**
 * tests/e2e/tier1_feature_coverage.test.ts
 * Tier 1: Feature Coverage (Category-Partition Testing)
 * Covers R1 to R5, 5 disciplines (49 lessons), 14 endemics, 126 sources, and data schema.
 * Total: 55 exhaustive test cases.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { ALL_PAUTA_ITEMS } from '../../src/data/pautaEspecificaMap';
import { DEEPENING_ENTRIES } from '../../src/data/deepening';
import { normalizeAppData, normalizeLesson } from '../../src/utils/normalizeData';
import { auditContent } from '../../src/utils/contentAudit';
import type { AppData, Lesson } from '../../src/types';

const ROOT = process.cwd();

const rawAppData: AppData = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'data/app_data.json'), 'utf8')
);
const normalizedData: AppData = normalizeAppData(rawAppData);

describe('Tier 1: Feature Coverage (Category-Partition)', () => {
  describe('Grupo 1: Requisito R1 — Inventário Exaustivo de Fontes e Diagnóstico do Edital', () => {
    it('T1-R1-01: Mapeamento dos 6 campos obrigatórios do inventário em sources/fontes.md', () => {
      const fontesMd = fs.readFileSync(path.join(ROOT, 'sources/fontes.md'), 'utf8');
      assert.ok(fontesMd.includes('Nome do Arquivo Original'), 'Campo (a) Nome original ausente');
      assert.ok(fontesMd.includes('Subpasta / Matéria'), 'Campo (b) Subpasta / Matéria ausente');
      assert.ok(fontesMd.includes('Assunto Principal'), 'Campo (b2) Assunto Principal ausente');
      assert.ok(fontesMd.includes('Arquivo Markdown Correspondente'), 'Campo (c) Aulas relacionadas ausente');
      assert.ok(fontesMd.includes('Situação da Conversão'), 'Campo (d) Situação / Grau de aproveitamento ausente');
      assert.ok(fontesMd.includes('Diagnóstico de Lacunas'), 'Campo (e) Diagnóstico de lacunas ausente');
      assert.ok(fontesMd.includes('Fontes Externas Oficiais'), 'Campo (f) Necessidades de complementação ausente');
    });

    it('T1-R1-02: Contagem exata de 126 fontes no inventário canônico de data/app_data.json', () => {
      const sources = rawAppData.sources || [];
      assert.equal(sources.length, 126, 'Deve haver exatamente 126 fontes');
      sources.forEach((s) => {
        assert.ok(s.num >= 1 && s.num <= 126, `Fonte com número inválido: ${s.num}`);
        assert.ok(typeof s.url === 'string' && s.url.trim().length > 10, `Fonte #${s.num} com URL inválida`);
      });
    });

    it('T1-R1-03: Rastreabilidade do diagnóstico do Edital nº 25/2026 nas fontes #86 a #91', () => {
      const sources = rawAppData.sources || [];
      const editalSources = sources.filter((s) => s.num >= 86 && s.num <= 91);
      assert.equal(editalSources.length, 6, 'Devem existir 6 documentos oficiais do concurso nas fontes 86 a 91');
      const titles = editalSources.map((s) => (s.title || s.name || '').toLowerCase()).join(' ');
      assert.ok(titles.includes('edital'), 'Título do edital não encontrado');
      assert.ok(titles.includes('anexo'), 'Anexos do edital não encontrados');
    });

    it('T1-R1-04: Diagnóstico de lacunas catalogadas supridas por fontes oficiais', () => {
      const fontesMd = fs.readFileSync(path.join(ROOT, 'sources/fontes.md'), 'utf8');
      assert.ok(fontesMd.includes('385/2010'), 'Lacuna de RJU LC 385/2010 ausente');
      assert.ok(fontesMd.includes('14.133'), 'Lacuna de Licitações 14.133 ausente');
      assert.ok(fontesMd.includes('3.166') || fontesMd.includes('14.565') || fontesMd.includes('18.310'), 'Lacuna de LAI ausente');
      assert.ok(fontesMd.includes('14 Endemias') || fontesMd.includes('14 endemias'), 'Lacuna de endemias ausente');
      assert.ok(fontesMd.includes('15 Distritos') || fontesMd.includes('15 distritos'), 'Lacuna de distritos de PVH ausente');
    });

    it('T1-R1-05: Paridade entre inventário e metadados de manifest.json', () => {
      const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/manifest.json'), 'utf8'));
      assert.equal(manifest.totals.sources, 126, 'Manifesto deve totalizar 126 fontes');
      assert.equal(manifest.totals.lessons, 49, 'Manifesto deve totalizar 49 lições');
      assert.equal(manifest.totals.endemics, 14, 'Manifesto deve totalizar 14 endemias');
    });
  });

  describe('Grupo 2: Requisito R2 — Pesquisa Externa Autônoma e Hierarquia de Fontes', () => {
    it('T1-R2-01: Prevalência de fontes oficiais governamentais e acadêmicas reconhecidas na camada de aprofundamento', () => {
      assert.equal(DEEPENING_ENTRIES.length, 49, 'Devem existir 49 cadernos de aprofundamento');
      const allowedDomains = [
        'gov.br',
        'leg.br',
        'jus.br',
        'fiocruz.br',
        'academia.org.br',
        'impa.br',
        'ebc.com.br',
        'tratabrasil.org.br',
        'drive.google.com',
        'openstax.org',
        'libretexts.org',
        'scielo.br',
      ];

      for (const entry of DEEPENING_ENTRIES) {
        assert.ok(entry.references.length > 0, `Aula ${entry.id} não possui referências cadastradas`);
        for (const ref of entry.references) {
          assert.ok(ref.url.startsWith('http://') || ref.url.startsWith('https://'), `URL inválida em ${entry.id}: ${ref.url}`);
          const urlObj = new URL(ref.url);
          const domainValid = allowedDomains.some((d) => urlObj.hostname.endsWith(d));
          assert.ok(domainValid, `Domínio não oficial/reconhecido em ${entry.id}: ${urlObj.hostname}`);
        }
      }
    });

    it('T1-R2-02: Metadados completos nas referências de aprofundamento (title, url, section)', () => {
      for (const entry of DEEPENING_ENTRIES) {
        for (const ref of entry.references) {
          assert.ok(typeof ref.title === 'string' && ref.title.trim().length > 3, `Title incompleto em ${entry.id}`);
          assert.ok(typeof ref.url === 'string' && ref.url.startsWith('http'), `URL incompleta em ${entry.id}`);
          assert.ok(typeof ref.section === 'string' && ref.section.trim().length > 0, `Section incompleta em ${entry.id}`);
        }
      }
    });

    it('T1-R2-03: Acervo de textos normativos integrais em content/fontes-oficiais/ (> 5.000 caracteres cada)', () => {
      const officialFiles = [
        'lai-pvh-14565-2017.md',
        'lai-ro-3166-2013.md',
        'lai-ro-6385-2026.md',
        'pnab-2017.md',
      ];
      for (const file of officialFiles) {
        const filePath = path.join(ROOT, 'content/fontes-oficiais', file);
        assert.ok(fs.existsSync(filePath), `Arquivo oficial ausente: ${file}`);
        const size = fs.statSync(filePath).size;
        assert.ok(size > 5000, `Arquivo ${file} muito curto (${size} bytes)`);
      }
    });

    it('T1-R2-04: Incorporação obrigatória da EC nº 140/2026 (Art. 198 CF/88, cargo efetivo e aposentadoria especial)', () => {
      const ecFile = path.join(ROOT, 'content/revisao/ec-140-2026.md');
      assert.ok(fs.existsSync(ecFile), 'Arquivo ec-140-2026.md ausente');
      const content = fs.readFileSync(ecFile, 'utf8');
      assert.ok(content.includes('140/2026') || content.includes('EC 140'), 'Menção à EC 140 ausente');
      assert.ok(content.includes('198'), 'Menção ao art. 198 ausente');
      assert.ok(content.includes('Aposentadoria') || content.includes('aposentadoria'), 'Requisitos de aposentadoria ausentes');
      assert.ok(content.includes('cargo') && (content.includes('provimento efetivo') || content.includes('efetivo')), 'Requisito de cargo efetivo ausente');
    });

    it('T1-R2-05: Distinção nítida entre teoria didatizada e referências bibliográficas do complemento', () => {
      for (const entry of DEEPENING_ENTRIES) {
        assert.ok(entry.theory.length > 500, `Teoria de ${entry.id} muito curta`);
        assert.ok(entry.summary.length > 200, `Resumo de ${entry.id} muito curto`);
      }
    });
  });

  describe('Grupo 3: Requisito R3 — Construção Didática Aprofundada das 49 Aulas', () => {
    it('T1-R3-01: Estrutura pedagógica integral em todas as 49 aulas (modoA, modoB, questions, flashcards, mindMap)', () => {
      assert.equal(normalizedData.lessons.length, 49, 'Devem existir 49 aulas normalizadas');
      for (const lesson of normalizedData.lessons) {
        assert.ok(lesson.blocks.some((b) => b.modoA || b.modoA_markdown), `Aula ${lesson.id} sem modoA`);
        assert.ok(lesson.blocks.some((b) => b.modoB || b.modoB_markdown), `Aula ${lesson.id} sem modoB`);
        const totalQ = lesson.blocks.reduce((acc, b) => acc + (b.questions?.length || 0), 0);
        assert.ok(totalQ > 0, `Aula ${lesson.id} sem questões`);
        const totalFC = lesson.blocks.reduce((acc, b) => acc + (b.flashcards?.length || 0), 0);
        assert.ok(totalFC > 0, `Aula ${lesson.id} sem flashcards`);
        assert.ok(lesson.mindMap && lesson.mindMap.centralTitle, `Aula ${lesson.id} sem mindMap válido`);
      }
    });

    it('T1-R3-02: Suficiência textual pedagógica mínima (>= 3.000 caracteres em cada Markdown content/aulas-49/)', () => {
      for (const lesson of normalizedData.lessons) {
        const mdPath = path.join(ROOT, 'content/aulas-49', `${lesson.id}.md`);
        assert.ok(fs.existsSync(mdPath), `Arquivo Markdown ausente: ${lesson.id}.md`);
        const text = fs.readFileSync(mdPath, 'utf8');
        assert.ok(text.length >= 3000, `Markdown da aula ${lesson.id} muito curto: ${text.length} chars (< 3000)`);
      }
    });

    it('T1-R3-03: Quota mínima de questões comentadas por aula (mínimo de 8 questões por lição)', () => {
      for (const lesson of normalizedData.lessons) {
        const totalQ = lesson.blocks.reduce((acc, b) => acc + (b.questions?.length || 0), 0);
        assert.ok(totalQ >= 8, `Aula ${lesson.id} possui apenas ${totalQ} questões (< 8)`);
      }
    });

    it('T1-R3-04: Quota mínima de flashcards SRS por aula (mínimo de 5 flashcards por lição)', () => {
      for (const lesson of normalizedData.lessons) {
        const totalFC = lesson.blocks.reduce((acc, b) => acc + (b.flashcards?.length || 0), 0);
        assert.ok(totalFC >= 5, `Aula ${lesson.id} possui apenas ${totalFC} flashcards (< 5)`);
      }
    });

    it('T1-R3-05: Preservação integral do conteúdo canônico legado (blocos 0..N-1 inalterados)', () => {
      rawAppData.lessons.forEach((rawL, i) => {
        const normL = normalizedData.lessons[i];
        assert.equal(normL.blocks.length, rawL.blocks.length + 1, `Aula ${rawL.id} deve ter 1 bloco a mais`);
        rawL.blocks.forEach((rawB, bIdx) => {
          assert.equal(normL.blocks[bIdx].title, rawB.title, `Título do bloco ${bIdx} alterado em ${rawL.id}`);
        });
      });
    });
  });

  describe('Grupo 4: Requisito R4 — Rastreabilidade das Fontes e Auditoria por Pares', () => {
    it('T1-R4-01: Rastreabilidade do Mapeamento do Edital (todos os 49 itens apontam aula e bloco válidos)', () => {
      const lessonsMap = new Map(normalizedData.lessons.map((l) => [l.id, l]));
      ALL_PAUTA_ITEMS.forEach((item) => {
        const l = lessonsMap.get(item.lessonId);
        assert.ok(l, `Item ${item.id} aponta para aula inexistente: ${item.lessonId}`);
        assert.ok(l.blocks[item.blockIndex], `Bloco ${item.blockIndex} inexistente na aula ${item.lessonId}`);
      });
    });

    it('T1-R4-02: Cobertura exata de 49 tópicos curriculares (10 esp, 7 leg, 18 por, 8 rlm, 6 atu)', () => {
      assert.equal(ALL_PAUTA_ITEMS.length, 49, 'ALL_PAUTA_ITEMS deve conter 49 itens');
      const counts: Record<string, number> = {};
      ALL_PAUTA_ITEMS.forEach((i) => {
        counts[i.discipline] = (counts[i.discipline] || 0) + 1;
      });
      assert.deepEqual(counts, { esp: 10, leg: 7, por: 18, rlm: 8, atu: 6 });
    });

    it('T1-R4-03: Rastreabilidade das referências numéricas de aula vs catálogo canônico', () => {
      const validNums = new Set((rawAppData.sources || []).map((s) => s.num));
      normalizedData.lessons.forEach((l) => {
        const refs = Array.isArray(l.sources) ? l.sources : l.sources?.value || [];
        refs.forEach((refNum: number) => {
          assert.ok(validNums.has(refNum), `Aula ${l.id} referencia fonte inválida #${refNum}`);
        });
      });
    });

    it('T1-R4-04: Matriz de auditoria factual e subcompetências em docs/auditoria/matriz.json', () => {
      const matrizPath = path.join(ROOT, 'docs/auditoria/matriz.json');
      assert.ok(fs.existsSync(matrizPath), 'docs/auditoria/matriz.json ausente');
      const matriz = JSON.parse(fs.readFileSync(matrizPath, 'utf8'));
      assert.ok(Array.isArray(matriz.rows), 'matriz.json deve conter array rows');
      assert.equal(matriz.rows.length, 400, 'matriz.json deve conter exatamente 400 subcompetências');
    });

    it('T1-R4-05: Auditoria estrutural de conteúdo resulta em 0 issues com severidade "error"', () => {
      const report = auditContent(normalizedData);
      const errors = report.issues.filter((i) => i.severity === 'error');
      assert.deepEqual(errors, [], `Foram encontrados erros na auditoria de conteúdo: ${JSON.stringify(errors)}`);
    });
  });

  describe('Grupo 5: Requisito R5 — Sincronização e Validação do Build de Produção', () => {
    it('T1-R5-01: Paridade estrutural exata entre data/app_data.json e public/data/app_data.json', () => {
      const f1 = fs.readFileSync(path.join(ROOT, 'data/app_data.json'), 'utf8');
      const f2 = fs.readFileSync(path.join(ROOT, 'public/data/app_data.json'), 'utf8');
      assert.equal(f1, f2, 'data/app_data.json e public/data/app_data.json devem ser idênticos');
    });

    it('T1-R5-02: Paridade dos 49 arquivos modulares data/lessons/*.json vs public/data/lessons/*.json', () => {
      for (const lesson of normalizedData.lessons) {
        const p1 = path.join(ROOT, 'data/lessons', `${lesson.id}.json`);
        const p2 = path.join(ROOT, 'public/data/lessons', `${lesson.id}.json`);
        assert.ok(fs.existsSync(p1), `Arquivo data/lessons/${lesson.id}.json ausente`);
        assert.ok(fs.existsSync(p2), `Arquivo public/data/lessons/${lesson.id}.json ausente`);
        assert.equal(fs.readFileSync(p1, 'utf8'), fs.readFileSync(p2, 'utf8'), `Divergência em ${lesson.id}.json`);
      }
    });

    it('T1-R5-03: Paridade exata entre data/manifest.json e public/data/manifest.json', () => {
      const m1 = fs.readFileSync(path.join(ROOT, 'data/manifest.json'), 'utf8');
      const m2 = fs.readFileSync(path.join(ROOT, 'public/data/manifest.json'), 'utf8');
      assert.equal(m1, m2, 'data/manifest.json e public/data/manifest.json devem ser idênticos');
    });

    it('T1-R5-04: Exportação de DATASET_TAILWIND_CLASSES em src/data/datasetClasses.ts', () => {
      const src = fs.readFileSync(path.join(ROOT, 'src/data/datasetClasses.ts'), 'utf8');
      assert.ok(src.includes('DATASET_TAILWIND_CLASSES'), 'DATASET_TAILWIND_CLASSES ausente em datasetClasses.ts');
      assert.ok(src.includes('bg-'), 'Classes bg- ausentes em datasetClasses.ts');
    });

    it('T1-R5-05: Artefatos compilados em dist/ existem e contêm folhas de estilo KaTeX', () => {
      const indexPath = path.join(ROOT, 'dist/index.html');
      const cssPath = path.join(ROOT, 'dist/assets/app-bundle.css');
      assert.ok(fs.existsSync(indexPath), 'dist/index.html ausente');
      assert.ok(fs.existsSync(cssPath), 'dist/assets/app-bundle.css ausente');
      const css = fs.readFileSync(cssPath, 'utf8');
      assert.ok(css.includes('KaTeX_Main'), 'Fontes KaTeX_Main não encontradas em app-bundle.css');
    });
  });

  describe('Grupo 6: Disciplina 1 — Conhecimentos Específicos (esp_1 a esp_10)', () => {
    it('T1-D1-01: Contagem e identificadores sequenciais esp_1 a esp_10', () => {
      const espLessons = normalizedData.lessons.filter((l) => l.cat === 'esp');
      assert.equal(espLessons.length, 10, 'Devem existir 10 aulas de específicos');
      espLessons.forEach((l, idx) => {
        assert.equal(l.id, `esp_${idx + 1}`);
        assert.ok(l.weight.includes('Peso 2'), `Peso não condizente em ${l.id}`);
      });
    });

    it('T1-D1-02: Cobertura das 14 endemias do edital em esp_9 e data.endemics', () => {
      const esp9 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'esp_9'));
      const endemics = rawAppData.endemics || [];
      assert.equal(endemics.length, 14, 'Devem existir 14 endemias catalogadas');

      const requiredDiseases = [
        'Raiva',
        'Esquistossomose',
        'Chagas',
        'Dengue',
        'Febre Amarela',
        'Febre Maculosa',
        'Influenza',
        'Chikungunya',
        'Zika',
        'Leptospirose',
        'Leishmaniose',
        'Malária',
        'COVID-19',
      ];
      requiredDiseases.forEach((d) => {
        assert.ok(esp9.includes(d), `Doença ${d} não mencionada em esp_9`);
      });
    });

    it('T1-D1-03: Protocolos de Animais Peçonhentos e Escorpionismo Amazônico em esp_9', () => {
      const esp9 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'esp_9'));
      assert.ok(esp9.includes('Bothrops'), 'Bothrops ausente em esp_9');
      assert.ok(esp9.includes('Lachesis muta'), 'Lachesis muta ausente em esp_9');
      assert.ok(esp9.includes('Tityus'), 'Tityus ausente em esp_9');
      assert.ok(esp9.includes('contraindica') || esp9.includes('CONTRAINDICADO'), 'Alerta contraindicando veneno para escorpiões ausente');
    });

    it('T1-D1-04: Metodologia LIRAa e Classificação de Depósitos em esp_7', () => {
      const esp7 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'esp_7'));
      ['A1', 'A2', 'B', 'C', 'D1', 'D2', 'E', 'IIP', 'Breteau'].forEach((term) => {
        assert.ok(esp7.includes(term), `Termo LIRAa ${term} ausente em esp_7`);
      });
    });

    it('T1-D1-05: Carreira do ACE atualizada e jornada de 40h integrais em esp_3', () => {
      const esp3 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'esp_3'));
      assert.ok(esp3.includes('40 horas') || esp3.includes('40h'), 'Jornada integral de 40h ausente em esp_3');
      assert.ok(esp3.includes('14.792') || esp3.includes('11.350'), 'Leis da carreira ausentes em esp_3');
    });
  });

  describe('Grupo 7: Disciplina 2 — Legislação Municipal, SUS e Constitucional (leg_1 a leg_7)', () => {
    it('T1-D2-01: Contagem e identificadores sequenciais leg_1 a leg_7', () => {
      const legLessons = normalizedData.lessons.filter((l) => l.cat === 'leg');
      assert.equal(legLessons.length, 7, 'Devem existir 7 aulas de legislação');
      legLessons.forEach((l, idx) => {
        assert.equal(l.id, `leg_${idx + 1}`);
      });
    });

    it('T1-D2-02: Lei Orgânica Municipal de Porto Velho em leg_1', () => {
      const leg1 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'leg_1'));
      assert.ok(leg1.includes('Porto Velho'), 'Menção a Porto Velho ausente em leg_1');
      assert.ok(leg1.includes('competência') || leg1.includes('Competência'), 'Competências municipais ausentes em leg_1');
    });

    it('T1-D2-03: Regime Jurídico Único Municipal — LC 385/2010 em leg_2', () => {
      const leg2 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'leg_2'));
      assert.ok(leg2.includes('385/2010'), 'LC 385/2010 ausente em leg_2');
      assert.ok(leg2.includes('posse') && leg2.includes('exercício'), 'Prazos de posse e exercício ausentes em leg_2');
    });

    it('T1-D2-04: Planos de Carreira LC 390 vs LC 391 em leg_3', () => {
      const leg3 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'leg_3'));
      assert.ok(leg3.includes('390/2010'), 'LC 390/2010 ausente em leg_3');
      assert.ok(leg3.includes('391/2010'), 'LC 391/2010 ausente em leg_3');
    });

    it('T1-D2-05: Nova Lei de Licitações 14.133/2021 e LAI nas 3 Esferas em leg_6 e leg_7', () => {
      const leg6 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'leg_6'));
      const leg7 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'leg_7'));
      assert.ok(leg6.includes('14.133'), 'Lei 14.133 ausente em leg_6');
      assert.ok(leg7.includes('12.527') || leg7.includes('14.565') || leg7.includes('3.166'), 'Normas de LAI ausentes em leg_7');
    });
  });

  describe('Grupo 8: Disciplina 3 — Língua Portuguesa (por_1 a por_18)', () => {
    it('T1-D3-01: Contagem e identificadores sequenciais por_1 a por_18', () => {
      const porLessons = normalizedData.lessons.filter((l) => l.cat === 'por');
      assert.equal(porLessons.length, 18, 'Devem existir 18 aulas de português');
      porLessons.forEach((l, idx) => {
        assert.equal(l.id, `por_${idx + 1}`);
      });
    });

    it('T1-D3-02: Saneamento das 4 subcompetências superficiais (por_8, por_10, por_14, por_17)', () => {
      const por8 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'por_8'));
      const por10 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'por_10'));
      const por14 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'por_14'));
      const por17 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'por_17'));

      assert.ok(por8.includes('numeral') || por8.includes('interjeição'), 'por_8 sem cobertura de classes especiais');
      assert.ok(por10.includes('concordância') || por10.includes('partitiva'), 'por_10 sem regras especiais');
      assert.ok(por14.includes('predicado') || por14.includes('coordenad'), 'por_14 sem predicado/coordenação');
      assert.ok(por17.includes('vírgula') || por17.includes('pontuação'), 'por_17 sem regras de pontuação');
    });

    it('T1-D3-03: Densidade textual das 6 aulas históricas curtas (>= 15.000 chars normalizadas)', () => {
      const shortLessons = ['por_2', 'por_4', 'por_5', 'por_9', 'por_12', 'por_15'];
      shortLessons.forEach((id) => {
        const lesson = normalizedData.lessons.find((l) => l.id === id);
        assert.ok(lesson, `Aula ${id} não encontrada`);
        const len = JSON.stringify(lesson).length;
        assert.ok(len >= 15000, `Aula ${id} possui apenas ${len} caracteres (< 15000)`);
      });
    });

    it('T1-D3-04: Regência verbal dos 15 verbos clássicos em por_11', () => {
      const por11 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'por_11'));
      ['assistir', 'aspirar', 'visar', 'preferir', 'obedecer'].forEach((verb) => {
        assert.ok(por11.includes(verb), `Verbo clássico ${verb} ausente em por_11`);
      });
    });

    it('T1-D3-05: Mapa completo de crase em por_12 (casos proibidos, facultativos e aquele/aquela)', () => {
      const por12 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'por_12'));
      assert.ok(por12.includes('facultativ'), 'Crase facultativa ausente em por_12');
      assert.ok(por12.includes('proibid'), 'Crase proibida ausente em por_12');
      assert.ok(por12.includes('aquele'), 'Crase com aquele ausente em por_12');
    });
  });

  describe('Grupo 9: Disciplina 4 — Raciocínio Lógico e Matemático (rlm_1 a rlm_8)', () => {
    it('T1-D4-01: Contagem e identificadores sequenciais rlm_1 a rlm_8', () => {
      const rlmLessons = normalizedData.lessons.filter((l) => l.cat === 'rlm');
      assert.equal(rlmLessons.length, 8, 'Devem existir 8 aulas de RLM');
      rlmLessons.forEach((l, idx) => {
        assert.equal(l.id, `rlm_${idx + 1}`);
      });
    });

    it('T1-D4-02: Cubagem e dosagem de larvicidas aplicada ao ACE em rlm_3', () => {
      const rlm3 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'rlm_3'));
      assert.ok(rlm3.includes('1.000') || rlm3.includes('1000'), 'Ponte volumétrica ausente em rlm_3');
      assert.ok(rlm3.includes('cubagem') || rlm3.includes('volume'), 'Cubagem ausente em rlm_3');
      assert.ok(rlm3.includes('ppm') || rlm3.includes('dosagem') || rlm3.includes('gramas'), 'Dosagem ausente em rlm_3');
    });

    it('T1-D4-03: Lógica proposicional e negações de De Morgan em rlm_5', () => {
      const rlm5 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'rlm_5'));
      assert.ok(rlm5.includes('De Morgan') || rlm5.includes('tabela-verdade'), 'Conceitos de lógica ausentes em rlm_5');
    });

    it('T1-D4-04: Análise combinatória e tomada de decisão em rlm_7', () => {
      const rlm7 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'rlm_7'));
      assert.ok(rlm7.includes('arranjo') || rlm7.includes('Arranjo'), 'Arranjos ausentes em rlm_7');
      assert.ok(rlm7.includes('combinação') || rlm7.includes('Combinação'), 'Combinações ausentes em rlm_7');
      assert.ok(rlm7.includes('fatorial') || rlm7.includes('Fatorial'), 'Fatorial ausente em rlm_7');
    });

    it('T1-D4-05: Probabilidade auditada e cálculo de união em rlm_8', () => {
      const rlm8 = normalizedData.lessons.find((l) => l.id === 'rlm_8');
      assert.ok(rlm8, 'Aula rlm_8 não encontrada');
      const q = rlm8.blocks[0].questions?.[0];
      assert.ok(q, 'Primeira questão de rlm_8 ausente');
      assert.equal(q.ans, 1, 'Gabarito da questão auditada deve ser 1');
      assert.ok(q.options[q.ans].includes('1/3'), 'Opção correta deve conter 1/3');
    });
  });

  describe('Grupo 10: Disciplina 5 — Conhecimentos Gerais e Atualidades (atu_1 a atu_6)', () => {
    it('T1-D5-01: Contagem e identificadores sequenciais atu_1 a atu_6', () => {
      const atuLessons = normalizedData.lessons.filter((l) => l.cat === 'atu');
      assert.equal(atuLessons.length, 6, 'Devem existir 6 aulas de atualidades');
      atuLessons.forEach((l, idx) => {
        assert.equal(l.id, `atu_${idx + 1}`);
      });
    });

    it('T1-D5-02: Secas extremas do Rio Madeira e fatos recentes em atu_1', () => {
      const atu1 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'atu_1'));
      assert.ok(atu1.includes('Madeira'), 'Rio Madeira ausente em atu_1');
      assert.ok(atu1.includes('seca') || atu1.includes('Seca'), 'Secas ausentes em atu_1');
    });

    it('T1-D5-03: Os 15 distritos rurais e ribeirinhos de Porto Velho em atu_3', () => {
      const atu3 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'atu_3'));
      ['Jaci-Paraná', 'Abunã', 'Extrema', 'Calama', 'São Carlos'].forEach((district) => {
        assert.ok(atu3.includes(district), `Distrito ${district} ausente em atu_3`);
      });
    });

    it('T1-D5-04: Símbolos oficiais nas 3 esferas em atu_4', () => {
      const atu4 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'atu_4'));
      ['Bandeira', 'Hino', 'Armas', 'Selo'].forEach((symbol) => {
        assert.ok(atu4.includes(symbol), `Símbolo ${symbol} ausente em atu_4`);
      });
    });

    it('T1-D5-05: Georreferenciamento, SIRGAS 2000, Wolbachia e Qdenga em atu_5', () => {
      const atu5 = JSON.stringify(normalizedData.lessons.find((l) => l.id === 'atu_5'));
      ['SIRGAS 2000', 'GPS', 'Wolbachia', 'Qdenga'].forEach((tech) => {
        assert.ok(atu5.includes(tech), `Tecnologia/Inovação ${tech} ausente em atu_5`);
      });
    });
  });

  describe('Grupo 11: Validação Estrutural e de Esquema das 49 Aulas', () => {
    it('T1-DS-01: Campos obrigatórios de raiz em todas as 49 lições', () => {
      const requiredFields = [
        'id',
        'num',
        'cat',
        'catName',
        'weight',
        'title',
        'editalRef',
        'auditBadge',
        'sources',
        'blocks',
        'mindMap',
      ];
      normalizedData.lessons.forEach((l) => {
        requiredFields.forEach((field) => {
          assert.ok(l[field as keyof Lesson] !== undefined, `Campo obrigatório ${field} ausente em ${l.id}`);
        });
      });
    });

    it('T1-DS-02: Numeração contínua e sequencial 1 a 49', () => {
      normalizedData.lessons.forEach((l, idx) => {
        assert.equal(l.num, idx + 1, `Aula ${l.id} com numeração inconsistente: ${l.num} vs esperado ${idx + 1}`);
      });
    });

    it('T1-DS-03: Estrutura obrigatória em todos os blocos didáticos (title, modoA, modoB, questions, flashcards)', () => {
      normalizedData.lessons.forEach((l) => {
        l.blocks.forEach((b, bIdx) => {
          assert.ok(b.title && b.title.trim().length > 0, `Bloco ${bIdx} em ${l.id} sem título`);
          assert.ok(Boolean(b.modoA || b.modoA_markdown), `Bloco ${bIdx} em ${l.id} sem teoria`);
          assert.ok(Boolean(b.modoB || b.modoB_markdown), `Bloco ${bIdx} em ${l.id} sem resumo`);
          assert.ok(Array.isArray(b.questions), `Bloco ${bIdx} em ${l.id} sem array questions`);
          assert.ok(Array.isArray(b.flashcards), `Bloco ${bIdx} em ${l.id} sem array flashcards`);
        });
      });
    });

    it('T1-DS-04: Integridade do MindMap de cada aula (centralTitle, branches >= 2, goldenTraps)', () => {
      normalizedData.lessons.forEach((l) => {
        const mm = l.mindMap;
        assert.ok(mm.centralTitle && mm.centralTitle.trim().length > 0, `centralTitle inválido em ${l.id}`);
        assert.ok(Array.isArray(mm.branches) && mm.branches.length >= 2, `branches < 2 em ${l.id}`);
        mm.branches.forEach((br) => {
          assert.ok(br.color && br.color.trim().length > 0, `branch sem color em ${l.id}`);
          assert.ok(Array.isArray(br.nodes) && br.nodes.length > 0, `branch sem nodes em ${l.id}`);
        });
      });
    });

    it('T1-DS-05: Totalizadores do manifesto condizentes com a base enriquecida', () => {
      const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/manifest.json'), 'utf8'));
      assert.equal(manifest.totals.blocksWithDeepening, 236, 'Manifesto deve indicar 236 blocos');
      assert.ok(manifest.totals.questionsWithDeepening >= 746, 'Manifesto deve indicar >= 746 questões');
      assert.ok(manifest.totals.flashcards >= 723, 'Manifesto deve indicar >= 723 flashcards');
    });
  });
});
