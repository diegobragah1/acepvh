import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  normalizeAppData,
  normalizeMindMapBranch,
  normalizeFlashcard,
  toSafeString,
} from './normalizeData';

test('toSafeString converts { wrong, right } trap objects into readable string', () => {
  const res = toSafeString({
    wrong: 'Afirmativa errada',
    right: 'Afirmativa correta',
  });
  assert.equal(
    res,
    '❌ Mito/Pegadinha: "Afirmativa errada" — ✅ CORRETO: Afirmativa correta'
  );
});

test('normalizeMindMapBranch converts legacy items array into structured nodes and maps fa- icons and purple color', () => {
  const branch = normalizeMindMapBranch(
    {
      title: '4. Leishmanioses (LTA vs. LV)',
      icon: 'fa-dog',
      color: 'purple',
      items: [
        'LV (Calazar): Leishmania infantum chagasi',
        'Reservatório urbano da LV: Cão doméstico',
      ],
    },
    3
  );

  assert.equal(branch.icon, '🐕');
  assert.equal(branch.color, 'violet');
  assert.equal(Array.isArray(branch.nodes), true);
  assert.equal(branch.nodes.length, 2);
  assert.equal(branch.nodes[0].label, 'LV (Calazar)');
  assert.equal(branch.nodes[0].detail, 'Leishmania infantum chagasi');
});

test('normalizeFlashcard ensures front and back are always strings even when given an object', () => {
  const fc = normalizeFlashcard({
    f: 'Pergunta de revisão',
    b: { wrong: 'Mito', right: 'Verdade' },
  });
  assert.equal(typeof fc.f, 'string');
  assert.equal(typeof fc.front, 'string');
  assert.equal(typeof fc.b, 'string');
  assert.equal(typeof fc.back, 'string');
  assert.ok(fc.b?.includes('Mito'));
  assert.ok(fc.b?.includes('Verdade'));
});

test('normalizeAppData validates all 32 lessons in public/data/app_data.json with zero invalid fields', () => {
  const jsonPath = path.resolve(process.cwd(), 'public/data/app_data.json');
  const raw = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const normalized = normalizeAppData(raw);

  assert.equal(normalized.lessons.length, 32);
  assert.equal(normalized.cargos.length, 16);
  assert.equal(normalized.sources.length, 94);
  assert.equal(normalized.endemics.length, 14);
  assert.equal(normalized.schedule.length, 12);
  assert.equal(normalized.auditMatrix.length, 20);

  normalized.lessons.forEach((l, idx) => {
    assert.equal(typeof l.id, 'string', `Lesson ${idx} id must be string`);
    assert.equal(typeof l.title, 'string', `Lesson ${idx} title must be string`);
    assert.ok(l.mindMap, `Lesson ${idx} (${l.id}) must have mindMap`);
    assert.ok(Array.isArray(l.mindMap.branches), `Lesson ${idx} branches must be array`);
    assert.ok(l.mindMap.branches.length >= 4, `Lesson ${idx} must have at least 4 branches`);

    l.mindMap.branches.forEach((br, bIdx) => {
      assert.equal(typeof br.title, 'string');
      assert.equal(typeof br.icon, 'string');
      assert.ok(!br.icon.startsWith('fa-'), `Lesson ${idx} branch ${bIdx} icon should not be raw fa-`);
      assert.ok(Array.isArray(br.nodes), `Lesson ${idx} branch ${bIdx} nodes must be array`);
      assert.ok(br.nodes.length > 0, `Lesson ${idx} branch ${bIdx} nodes must not be empty`);
      br.nodes.forEach((n, nIdx) => {
        assert.equal(typeof n.label, 'string', `Lesson ${idx} br ${bIdx} node ${nIdx} label must be string`);
        assert.equal(typeof n.detail, 'string', `Lesson ${idx} br ${bIdx} node ${nIdx} detail must be string`);
      });
    });

    l.blocks.forEach((b, bIdx) => {
      assert.equal(typeof b.title, 'string');
      (b.questions || []).forEach((q, qIdx) => {
        assert.equal(typeof q.q, 'string');
        assert.equal(typeof q.comment, 'string');
        assert.ok(Array.isArray(q.options));
        q.options.forEach(opt => assert.equal(typeof opt, 'string'));
      });
      (b.flashcards || []).forEach((fc, fIdx) => {
        assert.equal(typeof fc.f, 'string', `Lesson ${idx} b ${bIdx} fc ${fIdx} f must be string`);
        assert.equal(typeof fc.b, 'string', `Lesson ${idx} b ${bIdx} fc ${fIdx} b must be string`);
        assert.equal(typeof fc.front, 'string', `Lesson ${idx} b ${bIdx} fc ${fIdx} front must be string`);
        assert.equal(typeof fc.back, 'string', `Lesson ${idx} b ${bIdx} fc ${fIdx} back must be string`);
      });
    });
  });
});

test('Conhecimentos Especificos lessons are categorized into the exact 10 topics (esp_1 to esp_10) requested by the user', () => {
  const jsonPath = path.resolve(process.cwd(), 'public/data/app_data.json');
  const raw = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const normalized = normalizeAppData(raw);

  const espLessons = normalized.lessons.filter(l => l.cat === 'esp');
  assert.equal(espLessons.length, 10, 'Must have exactly 10 Conhecimentos Específicos lessons');

  // Verify the first 10 lessons in normalized.lessons are esp_1 through esp_10 in exact order
  for (let i = 0; i < 10; i++) {
    assert.equal(normalized.lessons[i].id, `esp_${i + 1}`);
  }

  const byId = Object.fromEntries(espLessons.map(l => [l.id, l]));

  // 1 - Constituição da República Federativa do Brasil (com as Emendas Constitucionais): Art. 196 a 200.
  assert.ok(byId['esp_1'].title.includes('1. Constituição da República Federativa do Brasil (com as Emendas Constitucionais): Art. 196 a 200'));
  assert.ok(byId['esp_1'].blocks.length >= 3);

  // 2 - Legislações Federais de Saúde Pública: Lei Federal nº 8.080/1990. Portaria Federal nº 2.436/2017. Lei Federal nº 8.142/1990.
  assert.ok(byId['esp_2'].title.includes('2. Legislações Federais de Saúde Pública: Lei Federal nº 8.080/1990. Portaria Federal nº 2.436/2017. Lei Federal nº 8.142/1990'));
  assert.ok(byId['esp_2'].blocks.length >= 6);

  // 3 - Lei Federal nº 11.350/2006. Lei Federal nº 13.708/2018. Lei Federal nº 13.595/2018.
  assert.ok(byId['esp_3'].title.includes('3. Lei Federal nº 11.350/2006. Lei Federal nº 13.708/2018. Lei Federal nº 13.595/2018'));
  assert.ok(byId['esp_3'].blocks[0].title.includes('Lei Federal nº 13.708/2018'));
  assert.ok(byId['esp_3'].blocks.length >= 4);

  // 4 - Sistema Único de Saúde – SUS: princípios fundamentais, diretrizes, atribuições e competências das esferas governamentais do SUS. Promoção e proteção da saúde.
  assert.ok(byId['esp_4'].title.includes('4. Sistema Único de Saúde – SUS: princípios fundamentais, diretrizes, atribuições e competências das esferas governamentais do SUS. Promoção e proteção da saúde'));
  assert.ok(byId['esp_4'].blocks.length >= 5);

  // 5 - Política Nacional de Atenção Básica.
  assert.equal(byId['esp_5'].title, '5. Política Nacional de Atenção Básica');
  assert.ok(byId['esp_5'].blocks.length >= 4);

  // 6 - História e Evolução da Profissão de ACE.
  assert.equal(byId['esp_6'].title, '6. História e Evolução da Profissão de ACE');
  assert.ok(byId['esp_6'].blocks.length >= 3);

  // 7 - Atribuições do Agente de Combate a Endemias.
  assert.equal(byId['esp_7'].title, '7. Atribuições do Agente de Combate a Endemias');
  assert.ok(byId['esp_7'].blocks.length >= 6);

  // 8 - Vigilância em Saúde.
  assert.equal(byId['esp_8'].title, '8. Vigilância em Saúde');
  assert.ok(byId['esp_8'].blocks.length >= 4);

  // 9 - Conhecimentos Básicos: Raiva, Esquistossomose, Doença de Chagas, Dengue, Febre Amarela, Febre Maculosa, Influenza, Chikungunya, Zika Vírus, Leptospirose, Leishmaniose: Tegumentar e Visceral e Malária, COVID-19.
  assert.ok(byId['esp_9'].title.includes('9. Conhecimentos Básicos: Raiva, Esquistossomose, Doença de Chagas, Dengue, Febre Amarela, Febre Maculosa, Influenza, Chikungunya, Zika Vírus, Leptospirose, Leishmaniose: Tegumentar e Visceral e Malária, COVID-19'));
  assert.equal(byId['esp_9'].blocks.length, 12);

  // 10 - Doenças contagiosas: agente etiológico, reservatório, hospedeiro, de modo de transmissão, sintomas e medidas de controle.
  assert.equal(
    byId['esp_10'].title,
    '10. Doenças contagiosas: agente etiológico, reservatório, hospedeiro, de modo de transmissão, sintomas e medidas de controle'
  );
  assert.ok(byId['esp_10'].blocks.length >= 3);
});


