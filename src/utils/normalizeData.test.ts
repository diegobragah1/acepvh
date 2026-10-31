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

test('normalizeAppData validates all 49 lessons in public/data/app_data.json with zero invalid fields', () => {
  const jsonPath = path.resolve(process.cwd(), 'public/data/app_data.json');
  const raw = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const normalized = normalizeAppData(raw);

  assert.equal(normalized.lessons.length, 49);
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

test('Legislacao lessons are categorized into the exact 7 topics (leg_1 to leg_7) requested by the user', () => {
  const jsonPath = path.resolve(process.cwd(), 'public/data/app_data.json');
  const raw = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const normalized = normalizeAppData(raw);

  const legLessons = normalized.lessons.filter(l => l.cat === 'leg');
  assert.equal(legLessons.length, 7, 'Must have exactly 7 Legislação lessons');

  for (let i = 0; i < 7; i++) {
    assert.equal(legLessons[i].id, `leg_${i + 1}`);
  }

  const byId = Object.fromEntries(legLessons.map(l => [l.id, l]));

  assert.equal(byId['leg_1'].title, '1. Lei Orgânica do Município de Porto Velho/RO e atualizações');
  assert.equal(byId['leg_1'].blocks.length, 6);

  assert.equal(
    byId['leg_2'].title,
    '2. Regime Jurídico dos Servidores Públicos Municipais de Porto Velho/RO (Lei Municipal nº 385/2010 e atualizações)'
  );
  assert.equal(byId['leg_2'].blocks.length, 6);

  assert.equal(
    byId['leg_3'].title,
    '3. Plano de Carreira, Cargos e Remuneração dos Profissionais da Saúde da Rede Pública Municipal de Saúde do Município Porto Velho-RO (Lei Municipal nº 390/2010 e Lei Municipal nº 391/2010, e atualizações)'
  );
  assert.equal(byId['leg_3'].blocks.length, 5);

  assert.equal(
    byId['leg_4'].title,
    '4. Conhecimento da Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência)'
  );
  assert.equal(byId['leg_4'].blocks.length, 4);
  assert.ok(byId['leg_4'].blocks[0].title.includes('Estatuto da Pessoa com Deficiência'));

  assert.ok(
    byId['leg_5'].title.includes(
      '5. Constituição da República Federativa do Brasil - Noções de Direito Constitucional: Constituição Brasileira: Título I - Dos Princípios Fundamentais. Título II - Dos Direitos e Garantias Fundamentais: do art. 5º ao art. 13. Título III - Da Organização do Estado: Capítulo IV - Dos Municípios - art. 29, 29-A, 30, 31 e Capítulo VII - Da Administração Pública – art. 37, 38 e 39'
    )
  );
  assert.equal(byId['leg_5'].blocks.length, 6);

  assert.equal(byId['leg_6'].title, '6. Lei de Licitações e Pregão (Lei Federal nº 14.133/2021)');
  assert.equal(byId['leg_6'].blocks.length, 7);

  assert.equal(
    byId['leg_7'].title,
    '7. Legislações Federal (Lei Federal nº 12.527/2011), Estadual e Municipal (se houver) de Acesso à Informação'
  );
  assert.equal(byId['leg_7'].blocks.length, 4);
});

test('Conhecimentos Gerais e Atualidades lessons are categorized into the exact 6 topics (atu_1 to atu_6) requested by the user', () => {
  const jsonPath = path.resolve(process.cwd(), 'public/data/app_data.json');
  const raw = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const normalized = normalizeAppData(raw);

  const atuLessons = normalized.lessons.filter(l => l.cat === 'atu');
  assert.equal(atuLessons.length, 6, 'Must have exactly 6 Conhecimentos Gerais e Atualidades lessons');

  for (let i = 0; i < 6; i++) {
    assert.equal(atuLessons[i].id, `atu_${i + 1}`);
  }

  const byId = Object.fromEntries(atuLessons.map(l => [l.id, l]));

  // 1 - Cultura Geral: Fatos Políticos econômicos e sociais do Município, do Estado, do Brasil e do mundo ocorridos nos últimos 05 (cinco) anos, divulgados na mídia nacional e internacional.
  assert.equal(
    byId['atu_1'].title,
    '1. Cultura Geral: Fatos Políticos econômicos e sociais do Município, do Estado, do Brasil e do mundo ocorridos nos últimos 05 (cinco) anos, divulgados na mídia nacional e internacional'
  );
  assert.equal(byId['atu_1'].blocks.length, 3);

  // 2 - Humanidades: movimentos artísticos, culturais e sociais do Município, do Estado, do Brasil e do mundo.
  assert.equal(
    byId['atu_2'].title,
    '2. Humanidades: movimentos artísticos, culturais e sociais do Município, do Estado, do Brasil e do mundo'
  );
  assert.equal(byId['atu_2'].blocks.length, 3);

  // 3 - Conhecimentos Gerais e Atualidades: aspectos geográficos, históricos, físicos, econômicos, sociais, políticos e estatísticos do Município, do Estado, do Brasil e do mundo.
  assert.equal(
    byId['atu_3'].title,
    '3. Conhecimentos Gerais e Atualidades: aspectos geográficos, históricos, físicos, econômicos, sociais, políticos e estatísticos do Município, do Estado, do Brasil e do mundo'
  );
  assert.equal(byId['atu_3'].blocks.length, 4);

  // 4 - Noções de cidadania. Símbolos nacionais, estaduais e municipais.
  assert.equal(
    byId['atu_4'].title,
    '4. Noções de cidadania. Símbolos nacionais, estaduais e municipais'
  );
  assert.equal(byId['atu_4'].blocks.length, 3);

  // 5 - Atualidades nos assuntos relacionados com economia, ecologia, história, política, meio ambiente, justiça, segurança pública, saúde, cultura, educação, religião, qualidade de vida, esportes, turismo, georreferenciamento, inovações tecnológicas e científicas do Município, do Estado, do Brasil e do mundo.
  assert.equal(
    byId['atu_5'].title,
    '5. Atualidades nos assuntos relacionados com economia, ecologia, história, política, meio ambiente, justiça, segurança pública, saúde, cultura, educação, religião, qualidade de vida, esportes, turismo, georreferenciamento, inovações tecnológicas e científicas do Município, do Estado, do Brasil e do mundo'
  );
  assert.equal(byId['atu_5'].blocks.length, 3);

  // 6 - Questões da realidade, econômica, cultural, história, geográfica e socioambiental do Município, do Estado, do Brasil e do mundo.
  assert.equal(
    byId['atu_6'].title,
    '6. Questões da realidade, econômica, cultural, história, geográfica e socioambiental do Município, do Estado, do Brasil e do mundo'
  );
  assert.equal(byId['atu_6'].blocks.length, 3);
});

test('Raciocinio Logico lessons are categorized into the exact 8 topics (rlm_1 to rlm_8) requested by the user', () => {
  const jsonPath = path.resolve(process.cwd(), 'public/data/app_data.json');
  const raw = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const normalized = normalizeAppData(raw);

  const rlmLessons = normalized.lessons.filter(l => l.cat === 'rlm');
  assert.equal(rlmLessons.length, 8, 'Must have exactly 8 Raciocínio Lógico lessons');

  for (let i = 0; i < 8; i++) {
    assert.equal(rlmLessons[i].id, `rlm_${i + 1}`);
  }

  const byId = Object.fromEntries(rlmLessons.map(l => [l.id, l]));

  assert.equal(
    byId['rlm_1'].title,
    '1. Conjuntos numéricos: naturais, inteiros, racionais e reais. Operações de adição, subtração, multiplicação, divisão, potenciação e radiciação; números decimais; valor absoluto; propriedades no conjunto dos números naturais; decomposição de um número natural em fatores primos; múltiplos e divisores; máximo divisor comum e mínimo múltiplo comum'
  );
  assert.equal(byId['rlm_1'].blocks.length, 3);

  assert.equal(
    byId['rlm_2'].title,
    '2. Razões e proporções: grandezas direta e inversamente proporcionais; regra de três simples e composta. Porcentagem'
  );
  assert.equal(byId['rlm_2'].blocks.length, 5);

  assert.equal(
    byId['rlm_3'].title,
    '3. Grandezas e medidas: quantidade, tempo, comprimento, capacidade e massa'
  );
  assert.equal(byId['rlm_3'].blocks.length, 5);

  assert.equal(
    byId['rlm_4'].title,
    '4. Equações do 1º grau, sistemas de equações do 1º grau e função do 1º grau: resolução de problemas. Média aritmética simples e ponderada'
  );
  assert.equal(byId['rlm_4'].blocks.length, 4);

  assert.equal(
    byId['rlm_5'].title,
    '5. Noções de lógica matemática: proposições simples e compostas; conectivos lógicos; tabelas-verdade; negação de proposições; equivalências e implicações lógicas; quantificadores'
  );
  assert.equal(byId['rlm_5'].blocks.length, 6);

  assert.equal(
    byId['rlm_6'].title,
    '6. Argumentação lógica: premissas e conclusões; inferências; análise e validade de argumentos. Diagramas lógicos. Linguagem dos conjuntos: notação e representação; elementos e relação de pertinência; igualdade de conjuntos; relação de inclusão e subconjuntos; conjunto unitário, conjunto vazio, conjunto universo e conjunto das partes; conjuntos finitos e infinitos; operações com conjuntos - união, interseção, diferença e complementar. Sequências lógicas com números, letras, palavras e figuras. Problemas de associação lógica e de verdades e mentiras'
  );
  assert.equal(byId['rlm_6'].blocks.length, 5);

  assert.equal(
    byId['rlm_7'].title,
    '7. Análise combinatória: princípio fundamental da contagem, arranjos, permutações e combinações'
  );
  assert.equal(byId['rlm_7'].blocks.length, 4);

  assert.equal(
    byId['rlm_8'].title,
    '8. Probabilidade: conceitos básicos e cálculo de probabilidades em espaços amostrais finitos. Resolução de problemas envolvendo raciocínio lógico e sequencial'
  );
  assert.equal(byId['rlm_8'].blocks.length, 4);
});

test('Lingua Portuguesa lessons are categorized into the exact 18 topics (por_1 to por_18) requested by the user', () => {
  const jsonPath = path.resolve(process.cwd(), 'public/data/app_data.json');
  const raw = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const normalized = normalizeAppData(raw);

  const porLessons = normalized.lessons.filter(l => l.cat === 'por');
  assert.equal(porLessons.length, 18, 'Must have exactly 18 Língua Portuguesa lessons');

  for (let i = 0; i < 18; i++) {
    assert.equal(porLessons[i].id, `por_${i + 1}`);
  }

  const byId = Object.fromEntries(porLessons.map(l => [l.id, l]));

  assert.equal(byId['por_1'].title, '1. Compreensão e interpretação de textos');
  assert.equal(byId['por_2'].title, '2. Gêneros e tipos de texto');
  assert.equal(byId['por_3'].title, '3. Significação das palavras');
  assert.equal(byId['por_4'].title, '4. Figuras de Sintaxe');
  assert.equal(byId['por_5'].title, '5. Figuras de Linguagem');
  assert.equal(byId['por_6'].title, '6. Articulação textual: operadores sequenciais, expressões referenciais');
  assert.equal(byId['por_7'].title, '7. Coesão e coerência textual');
  assert.equal(
    byId['por_8'].title,
    '8. Identificação, definição, classificação, flexão e emprego das classes de palavras; formação de palavras'
  );
  assert.equal(
    byId['por_9'].title,
    '9. Verbos: flexão, conjugação, vozes, correlação entre tempos e modos verbais'
  );
  assert.equal(byId['por_10'].title, '10. Concordância verbal e nominal');
  assert.equal(byId['por_11'].title, '11. Regência verbal e nominal');
  assert.equal(byId['por_12'].title, '12. Crase');
  assert.equal(byId['por_13'].title, '13. Colocação pronominal');
  assert.equal(
    byId['por_14'].title,
    '14. Estrutura da oração e do período: aspectos sintáticos e semânticos'
  );
  assert.equal(byId['por_15'].title, '15. Acentuação gráfica');
  assert.equal(byId['por_16'].title, '16. Ortografia');
  assert.equal(byId['por_17'].title, '17. Pontuação');
  assert.equal(byId['por_18'].title, '18. Variação linguística');

  porLessons.forEach(l => {
    assert.ok(l.blocks.length >= 2, `Lesson ${l.id} must have at least 2 blocks`);
  });
});






