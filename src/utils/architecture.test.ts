import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  LIRAA_DEPOSIT_GROUPS,
  SYNANTHROPIC_RODENTS,
  CHEMICAL_PROTOCOLS,
  ACE_GLOSSARY_ITEMS,
} from '../data/endemiasReference';
import {
  buildVFChallenges,
  processDidacticHtml,
  matchesLessonBlockFilter,
  getNormalizedEnrichedLesson,
} from '../services/lessonService';
import type { AppData, Lesson } from '../types';

const ROOT = process.cwd();

describe('Structural Refactoring & Modular Data Integrity', () => {
  it('preserves 100% of the 49 lessons in modular data/lessons/<id>.json and data/manifest.json', () => {
    const appData: AppData = JSON.parse(
      fs.readFileSync(path.join(ROOT, 'data/app_data.json'), 'utf8')
    );
    const aulasIndex = JSON.parse(
      fs.readFileSync(path.join(ROOT, 'data/aulas.json'), 'utf8')
    );
    const materias = JSON.parse(
      fs.readFileSync(path.join(ROOT, 'data/materias.json'), 'utf8')
    );
    const manifest = JSON.parse(
      fs.readFileSync(path.join(ROOT, 'data/manifest.json'), 'utf8')
    );

    assert.equal(appData.lessons.length, 49);
    assert.equal(aulasIndex.length, 49);
    assert.equal(materias.length, 5);
    assert.equal(manifest.totals.lessons, 49);
    assert.equal(manifest.totals.endemics, 14);
    assert.equal(manifest.totals.sources, 126);

    const totalAulasFromMaterias = materias.reduce(
      (acc: number, m: { totalAulas: number }) => acc + m.totalAulas,
      0
    );
    assert.equal(totalAulasFromMaterias, 49);

    for (const lesson of appData.lessons) {
      const modularPath = path.join(ROOT, 'data/lessons', `${lesson.id}.json`);
      const publicModularPath = path.join(ROOT, 'public/data/lessons', `${lesson.id}.json`);
      assert.ok(fs.existsSync(modularPath), `Missing modular lesson ${modularPath}`);
      assert.ok(fs.existsSync(publicModularPath), `Missing public modular lesson ${publicModularPath}`);

      const modularLesson: Lesson = JSON.parse(fs.readFileSync(modularPath, 'utf8'));
      assert.equal(modularLesson.id, lesson.id);
      assert.equal(modularLesson.title, lesson.title);
      assert.equal(modularLesson.blocks.length, lesson.blocks.length);
    }
  });

  it('exports complete static domain reference data in src/data/endemiasReference.ts', () => {
    assert.equal(LIRAA_DEPOSIT_GROUPS.length, 7);
    assert.deepEqual(
      LIRAA_DEPOSIT_GROUPS.map((g) => g.grp),
      ['A1', 'A2', 'B', 'C', 'D1', 'D2', 'E']
    );
    assert.equal(SYNANTHROPIC_RODENTS.length, 3);
    assert.equal(CHEMICAL_PROTOCOLS.length, 4);
    assert.equal(ACE_GLOSSARY_ITEMS.length, 18);
  });

  it('memoizes normalized lessons and protects KaTeX/MathML in processDidacticHtml', () => {
    const appData: AppData = JSON.parse(
      fs.readFileSync(path.join(ROOT, 'data/app_data.json'), 'utf8')
    );
    const enriched1 = getNormalizedEnrichedLesson(appData.lessons[0], 0);
    const enriched2 = getNormalizedEnrichedLesson(appData.lessons[0], 0);
    assert.strictEqual(enriched1, enriched2);

    const vf = buildVFChallenges(enriched1);
    assert.ok(vf.length > 0);
    assert.ok(vf.every((item) => typeof item.isTrue === 'boolean' && item.statement.length > 15));

    const sampleHtml = '<p>De acordo com o Art. 198 da Lei nº 8.080/1990, o prazo é de 30 dias e a fórmula é $x = \\frac{10}{2}$.</p>';
    const processed = processDidacticHtml(sampleHtml, 'prazo', true, new Set(), 'esp_1_b0_A');
    assert.ok(processed.includes('data-cloze-id="esp_1_b0_A_c_1"'));
    assert.ok(processed.includes('<mark class="bg-yellow-300'));
    assert.ok(processed.includes('class="katex"'));

    assert.equal(matchesLessonBlockFilter(enriched1.blocks[0], 'ALL', ''), true);
    assert.equal(matchesLessonBlockFilter(enriched1.blocks[0], 'QUIZ', ''), true);
  });

  it('ensures GitHub Actions workflows install dependencies without requiring package-lock.json', () => {
    const deployYml = fs.readFileSync(path.join(ROOT, '.github/workflows/deploy.yml'), 'utf8');
    const checkYml = fs.readFileSync(path.join(ROOT, '.github/workflows/check.yml'), 'utf8');

    assert.ok(!deployYml.includes('npm ci'), 'deploy.yml should not use npm ci without package-lock.json');
    assert.ok(!checkYml.includes('npm ci'), 'check.yml should not use npm ci without package-lock.json');
    assert.ok(!checkYml.includes('cache: npm'), 'check.yml should not require npm lockfile cache');
  });

  it('configures compact Header with short mobile title, collapsible Edital info, and all 7 menu buttons visible without horizontal scrolling', () => {
    const headerSrc = fs.readFileSync(path.join(ROOT, 'src/components/Header.tsx'), 'utf8');

    assert.ok(headerSrc.includes('ACE — SEMUSA Porto Velho'), 'Mobile short title must be present');
    assert.ok(headerSrc.includes('ⓘ Edital'), 'Collapsible Edital button must be present');
    assert.ok(
      headerSrc.includes('Edital nº 25/2026 + Retif. nº 01 (IBGP)') &&
        headerSrc.includes('36 Vagas (27 AC + 2 PcD + 5 PN + 2 Indígenas)'),
      'Full Edital details must be preserved inside the expandable section'
    );
    for (const label of ['Painel', 'Conteúdo', 'Aulas', 'Revisão', 'Endemias', 'Cronograma', 'Fontes']) {
      assert.ok(headerSrc.includes(`shortLabel: '${label}'`), `Missing short menu label ${label}`);
    }
    assert.ok(!headerSrc.includes('overflow-x-auto'), 'Main navigation must not require horizontal scrolling');
  });
});
