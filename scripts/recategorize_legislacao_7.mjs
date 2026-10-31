import fs from 'node:fs';
import path from 'node:path';

const jsonFiles = [
  path.resolve(process.cwd(), 'public/data/app_data.json'),
  path.resolve(process.cwd(), 'data/app_data.json'),
];

const jsFiles = [
  path.resolve(process.cwd(), 'public/data/app_data.js'),
  path.resolve(process.cwd(), 'data/app_data.js'),
];

function renumberBlocks(blocks, lessonNum) {
  return blocks.map((b, idx) => {
    const cleanTitle = (b.title || '').replace(/^Bloco\s+\d+\.\d+\s*—\s*/i, '');
    return {
      ...b,
      title: `Bloco ${lessonNum}.${idx + 1} — ${cleanTitle}`,
    };
  });
}

// Keep a clean backup before recategorizing Legislação so the script is 100% idempotent
const backupPath = path.resolve(process.cwd(), 'scripts/backup_before_recategorize_leg_7.json');
const primaryJsonPath = jsonFiles[0];

if (!fs.existsSync(backupPath)) {
  fs.copyFileSync(primaryJsonPath, backupPath);
  console.log('Created backup at:', backupPath);
}

const rawData = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
const byId = Object.fromEntries(rawData.lessons.map(l => [l.id, l]));

const oldLeg1 = byId['leg_1'];
const oldLeg2 = byId['leg_2'];
const oldLeg3 = byId['leg_3'];
const oldLeg4 = byId['leg_4'];
const oldLeg5 = byId['leg_5'];
const oldLeg6 = byId['leg_6'];
const oldLeg7 = byId['leg_7'];

// 1 - Lei Orgânica do Município de Porto Velho/RO e atualizações.
const newLeg1 = {
  ...oldLeg1,
  id: 'leg_1',
  cat: 'leg',
  catName: 'Legislação Municipal, Constitucional e Administrativa',
  weight: '10 Questões • Peso 2 (20 pts)',
  title: '1. Lei Orgânica do Município de Porto Velho/RO e atualizações',
  editalRef: '1 - Lei Orgânica do Município de Porto Velho/RO e atualizações.',
  auditBadge: 'LEGISLAÇÃO ITEM 1 — LEI ORGÂNICA DE PORTO VELHO (LOM-PVH) INTEGRAL',
  blocks: renumberBlocks(oldLeg1.blocks, 1),
};

// 2 - Regime Jurídico dos Servidores Públicos Municipais de Porto Velho/RO (Lei Municipal nº 385/2010 e atualizações).
const newLeg2 = {
  ...oldLeg2,
  id: 'leg_2',
  cat: 'leg',
  catName: 'Legislação Municipal, Constitucional e Administrativa',
  weight: '10 Questões • Peso 2 (20 pts)',
  title: '2. Regime Jurídico dos Servidores Públicos Municipais de Porto Velho/RO (Lei Municipal nº 385/2010 e atualizações)',
  editalRef: '2 - Regime Jurídico dos Servidores Públicos Municipais de Porto Velho/RO (Lei Municipal nº 385/2010 e atualizações).',
  auditBadge: 'LEGISLAÇÃO ITEM 2 — LC MUNICIPAL Nº 385/2010 INTEGRAL (ARTS. 1º A 237)',
  blocks: renumberBlocks(oldLeg2.blocks, 2),
};

// 3 - Plano de Carreira, Cargos e Remuneração dos Profissionais da Saúde da Rede Pública Municipal de Saúde do Município Porto Velho-RO (Lei Municipal nº 390/2010 e Lei Municipal nº 391/2010, e atualizações).
const newLeg3 = {
  ...oldLeg3,
  id: 'leg_3',
  cat: 'leg',
  catName: 'Legislação Municipal, Constitucional e Administrativa',
  weight: '10 Questões • Peso 2 (20 pts)',
  title: '3. Plano de Carreira, Cargos e Remuneração dos Profissionais da Saúde da Rede Pública Municipal de Saúde do Município Porto Velho-RO (Lei Municipal nº 390/2010 e Lei Municipal nº 391/2010, e atualizações)',
  editalRef: '3 - Plano de Carreira, Cargos e Remuneração dos Profissionais da Saúde da Rede Pública Municipal de Saúde do Município Porto Velho-RO (Lei Municipal nº 390/2010 e Lei Municipal nº 391/2010, e atualizações).',
  auditBadge: 'LEGISLAÇÃO ITEM 3 — PLANOS DE CARREIRA DA SAÚDE E ACE (LEIS 390/2010 E 391/2010)',
  blocks: renumberBlocks(oldLeg3.blocks, 3),
};

// 4 - Conhecimento da Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência).
const newLeg4 = {
  ...oldLeg5,
  id: 'leg_4',
  cat: 'leg',
  catName: 'Legislação Municipal, Constitucional e Administrativa',
  weight: '10 Questões • Peso 2 (20 pts)',
  title: '4. Conhecimento da Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência)',
  editalRef: '4 - Conhecimento da Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência — Lei Federal nº 13.146/2015).',
  auditBadge: 'LEGISLAÇÃO ITEM 4 — ESTATUTO DA PESSOA COM DEFICIÊNCIA (LEI 13.146/2015 INTEGRAL)',
  sources: [41, 86, 91],
  mindMap: {
    centralTitle: '4. Lei Brasileira de Inclusão da Pessoa com Deficiência — Estatuto da Pessoa com Deficiência (Lei Federal nº 13.146/2015)',
    mnemonic: 'Avaliação Biopsicossocial (Multiprofissional e Interdisciplinar) • Atendimento Prioritário • Direito à Saúde no SUS (Arts. 18 a 26) • Capacidade Civil Plena (Regra) vs. Curatela (Apenas Atos Patrimoniais/Negociais) • Tomada de Decisão Apoiada (2 Apoiadores)',
    deadlinesAndNumbers: [
      { value: 'Art. 2º, § 1º (Biopsicossocial)', label: 'Avaliação da deficiência por equipe multiprofissional e interdisciplinar (impedimentos + fatores socioambientais)' },
      { value: 'Arts. 18 a 26 (Saúde no SUS)', label: 'Atenção integral à saúde da PcD no SUS, diagnóstico precoce, órteses/próteses, atendimento domiciliar e acompanhante' },
      { value: '10% (Frotas) / 2% (Vagas)', label: 'Reserva de 10% dos veículos de táxi acessíveis e 2% das vagas em estacionamentos públicos (mínimo 1 vaga)' },
      { value: '2 Pessoas Idôneas', label: 'Tomada de Decisão Apoiada: a PcD elege pelo menos 2 pessoas idôneas de sua confiança perante o juiz (Art. 1.783-A CC)' },
    ],
    branches: [
      {
        title: '1. Disposições Preliminares, Avaliação Biopsicossocial e Igualdade (Arts. 1º a 9º)',
        icon: '♿',
        color: 'teal',
        nodes: [
          {
            label: 'Conceito Legal de PcD e Avaliação Biopsicossocial (Art. 2º)',
            detail:
              'Pessoa que tem impedimento de longo prazo de natureza física, mental, intelectual ou sensorial, o qual, em interação com uma ou mais barreiras, pode obstruir sua participação plena e efetiva na sociedade. A avaliação é biopsicossocial (multiprofissional e interdisciplinar).',
            badge: 'Art. 2º Lei 13.146/15',
          },
          {
            label: 'Atendimento Prioritário e Discriminação por Recusa de Adaptação (Arts. 4º a 9º)',
            detail:
              'A recusa de adaptações razoáveis e de fornecimento de tecnologias assistivas constitui discriminação em razão da deficiência (Art. 4º, § 1º). O atendimento prioritário estende-se ao acompanhante ou atendente pessoal (exceto em fila de restituição de IR e socorro de emergência médica, que segue critério de gravidade).',
            badge: 'Prioridade Legal',
          },
        ],
      },
      {
        title: '2. Direitos Fundamentais: Vida, Saúde no SUS (Arts. 18–26), Educação e Trabalho (Arts. 10 a 52)',
        icon: '🏥',
        color: 'emerald',
        nodes: [
          {
            label: 'Direito à Saúde no SUS e Vedação de Cobrança Diferenciada (Arts. 18 a 26)',
            detail:
              'Atenção integral pelo SUS com diagnóstico e intervenção precoces, reabilitação, órteses/próteses, atenção domiciliar e direito a acompanhante em internação ou observação. É vedada aos planos privados de saúde a cobrança de valores diferenciados em razão da deficiência (Art. 23).',
            badge: 'Saúde Arts. 18–26',
          },
          {
            label: 'Educação Inclusiva (Vedação de Taxa Extra) e Cotas no Trabalho (Art. 93 Lei 8.213)',
            detail:
              'Escolas privadas são proibidas de cobrar valores adicionais por aluno com deficiência (Art. 28, § 1º). Empresas com 100 ou mais empregados devem reservar de 2% a 5% das vagas para PcD.',
            badge: 'Educação e Trabalho',
          },
        ],
      },
      {
        title: '3. Acessibilidade, Barreiras (6 Tipos), Desenho Universal e Tecnologia Assistiva (Arts. 53 a 78)',
        icon: '🛤️',
        color: 'amber',
        nodes: [
          {
            label: 'Os 6 Tipos de Barreiras (Art. 3º, IV)',
            detail:
              '1. Urbanísticas (vias e espaços públicos); 2. Arquitetônicas (edifícios públicos e privados); 3. Nos transportes; 4. Nas comunicações e na informação; 5. Atitudinais (preconceitos e comportamentos); 6. Tecnológicas.',
            badge: 'Art. 3º, IV LBI',
          },
          {
            label: 'Desenho Universal vs. Adaptação Razoável (Art. 3º, II e VI)',
            detail:
              'Desenho universal é a concepção de produtos e ambientes para serem usados por todas as pessoas, sem necessidade de adaptação (regra geral, Art. 55). Adaptação razoável é o ajuste individualizado quando o desenho universal não suprir a necessidade específica.',
            badge: 'Acessibilidade',
          },
        ],
      },
      {
        title: '4. Capacidade Civil Plena, Curatela, Tomada de Decisão Apoiada e Crimes (Arts. 79 a 127)',
        icon: '⚖️',
        color: 'indigo',
        nodes: [
          {
            label: 'Capacidade Civil Plena (Art. 84) e Limites da Curatela (Art. 85)',
            detail:
              'A deficiência NÃO afeta a plena capacidade civil da pessoa (inclusive para casar, exercer direitos sexuais/reprodutivos e ser curador/tutor — Art. 6º). A curatela é medida extraordinária e afeta TANTO SOMENTE os atos relacionados aos direitos de natureza patrimonial e negocial (Art. 85).',
            badge: 'Arts. 6º, 84 e 85',
          },
          {
            label: 'Crimes na LBI (Arts. 88 a 91): Discriminação, Abandono e Apropriação de Cartão',
            detail:
              'Praticar, induzir ou incitar discriminação de PcD: reclusão de 1 a 3 anos e multa (aumentada se por internet — Art. 88). Reter sem autorização cartão magnético/benefício da PcD: detenção de 6 meses a 2 anos e multa (Art. 89).',
            badge: 'Crimes Arts. 88–91',
          },
        ],
      },
    ],
  },
  blocks: renumberBlocks(
    [
      oldLeg5.blocks[1], // Estatuto da Pessoa com Deficiência — Lei Federal nº 13.146/2015 (LBI)
      oldLeg5.blocks[2], // Desenvolvimento Integral Passo a Passo e Estudos de Caso (LBI — Lei 13.146/2015)
      oldLeg5.blocks[4], // Texto Integral da Lei Federal nº 13.146/2015 (Parte 1: Arts. 1º a 52)
      oldLeg5.blocks[5], // Texto Integral da Lei Federal nº 13.146/2015 (Parte 2: Arts. 53 a 127)
    ],
    4
  ),
};

// 5 - Constituição da República Federativa do Brasil - Noções de Direito Constitucional: Constituição Brasileira: Título I - Dos Princípios Fundamentais. Título II - Dos Direitos e Garantias Fundamentais: do art. 5º ao art. 13. Título III - Da Organização do Estado: Capítulo IV - Dos Municípios - art. 29, 29-A, 30, 31 e Capítulo VII - Da Administração Pública – art. 37, 38 e 39.
const newLeg5 = {
  ...oldLeg4,
  id: 'leg_5',
  cat: 'leg',
  catName: 'Legislação Municipal, Constitucional e Administrativa',
  weight: '10 Questões • Peso 2 (20 pts)',
  title: '5. Constituição da República Federativa do Brasil - Noções de Direito Constitucional: Constituição Brasileira: Título I - Dos Princípios Fundamentais. Título II - Dos Direitos e Garantias Fundamentais: do art. 5º ao art. 13. Título III - Da Organização do Estado: Capítulo IV - Dos Municípios - art. 29, 29-A, 30, 31 e Capítulo VII - Da Administração Pública – art. 37, 38 e 39',
  editalRef: '5 - Constituição da República Federativa do Brasil - Noções de Direito Constitucional: Constituição Brasileira: Título I - Dos Princípios Fundamentais. Título II - Dos Direitos e Garantias Fundamentais: do art. 5º ao art. 13. Título III - Da Organização do Estado: Capítulo IV - Dos Municípios - art. 29, 29-A, 30, 31 e Capítulo VII - Da Administração Pública – art. 37, 38 e 39.',
  auditBadge: 'LEGISLAÇÃO ITEM 5 — DIREITO CONSTITUCIONAL COMPLETO (ARTS. 1º–4º, 5º–13, 29–31 E 37–39)',
  sources: [42, 43, 44, 45, 46, 47, 48, 49, 50, 86, 91],
  mindMap: {
    centralTitle: '5. CF/88 — Noções de Direito Constitucional: Título I (Arts. 1º–4º), Título II (Arts. 5º–13), Municípios (Arts. 29, 29-A, 30, 31) e Administração Pública (Arts. 37, 38 e 39)',
    mnemonic: 'Fundamentos: SO-CI-DI-VA-PLU (Art. 1º) • Objetivos: CON-GA-ERRA-PRO (Art. 3º) • Direitos e Remédios: HC, HD, MS, MI, AP (Art. 5º), Sociais (Arts. 6º–11), Nacionalidade (Arts. 12–13) • Municípios (Arts. 29–31) • Administração: L-I-M-P-E e Acumulação de 2 Cargos de Saúde (Arts. 37–39)',
    deadlinesAndNumbers: [
      { value: 'Arts. 1º a 4º (Título I)', label: 'Fundamentos (SO-CI-DI-VA-PLU), Objetivos (CON-GA-ERRA-PRO) e Princípios das Relações Internacionais' },
      { value: 'Arts. 5º a 13 (Título II)', label: 'Direitos Individuais e Coletivos (Art. 5º), Direitos Sociais (Arts. 6º–11) e Nacionalidade/Símbolos (Arts. 12–13)' },
      { value: 'Arts. 29, 29-A, 30 e 31', label: 'Municípios: Lei Orgânica (2 turnos, intervalo 10 dias, 2/3), Vereadores (9 a 55), Competências e Fiscalização (2/3 p/ afastar parecer TCE)' },
      { value: 'Arts. 37, 38 e 39', label: 'Princípios LIMPE, Concurso (até 2+2 anos), Acumulação remunerada (Art. 37, XVI "c": 2 de saúde / ACE), Mandato Eletivo (Art. 38) e Regime (Art. 39)' },
    ],
    branches: [
      ...oldLeg4.mindMap.branches,
      oldLeg5.mindMap.branches[0], // Municípios na CF/88 (Arts. 29–31)
      oldLeg5.mindMap.branches[1], // Administração Pública e Servidores (Arts. 37–41)
    ],
  },
  blocks: renumberBlocks(
    [
      oldLeg4.blocks[0], // Princípios Fundamentais (Arts. 1º a 4º da CF/88)
      oldLeg4.blocks[1], // Direitos e Deveres Individuais e Coletivos (Art. 5º), Remédios e Direitos Sociais/Nacionalidade (Arts. 6º a 13)
      oldLeg5.blocks[0], // Organização dos Municípios (Arts. 29, 29-A, 30 e 31) e Administração Pública (Arts. 37, 38 e 39 da CF/88)
      oldLeg4.blocks[2], // Desenvolvimento Integral Passo a Passo e Estudos de Caso (Direito Constitucional na CF/88: Arts. 1º–4º, 5º–13, 29–31 e 37–39)
      oldLeg4.blocks[3], // Texto Constitucional Integral Consolidado (Parte 1): Título I (Arts. 1º a 4º) e Título II (do Art. 5º ao Art. 13 Completos + Arts. 14 a 17)
      oldLeg5.blocks[3], // Texto Constitucional Integral Consolidado (Parte 2): Dos Municípios (Arts. 29, 29-A, 30 e 31) e Da Administração Pública (Arts. 37, 38 e 39)
    ],
    5
  ),
};

// 6 - Lei de Licitações e Pregão (Lei Federal nº 14.133/2021).
const newLeg6 = {
  ...oldLeg6,
  id: 'leg_6',
  cat: 'leg',
  catName: 'Legislação Municipal, Constitucional e Administrativa',
  weight: '10 Questões • Peso 2 (20 pts)',
  title: '6. Lei de Licitações e Pregão (Lei Federal nº 14.133/2021)',
  editalRef: '6 - Lei de Licitações e Pregão (Lei Federal nº 14.133/2021).',
  auditBadge: 'LEGISLAÇÃO ITEM 6 — LEI FEDERAL Nº 14.133/2021 E PREGÃO (ARTS. 1º A 194 INTEGRAIS)',
  blocks: renumberBlocks(oldLeg6.blocks, 6),
};

// 7 - Legislações Federal (Lei Federal nº 12.527/2011), Estadual e Municipal (se houver) de Acesso à Informação)
const newLeg7 = {
  ...oldLeg7,
  id: 'leg_7',
  cat: 'leg',
  catName: 'Legislação Municipal, Constitucional e Administrativa',
  weight: '10 Questões • Peso 2 (20 pts)',
  title: '7. Legislações Federal (Lei Federal nº 12.527/2011), Estadual e Municipal (se houver) de Acesso à Informação',
  editalRef: '7 - Legislações Federal (Lei Federal nº 12.527/2011), Estadual e Municipal (se houver) de Acesso à Informação.',
  auditBadge: 'LEGISLAÇÃO ITEM 7 — LEI DE ACESSO À INFORMAÇÃO FEDERAL (12.527/11), ESTADUAL (RO) E MUNICIPAL (PVH)',
  blocks: renumberBlocks(oldLeg7.blocks, 7),
};

const categorizedLegLessons = [
  newLeg1,
  newLeg2,
  newLeg3,
  newLeg4,
  newLeg5,
  newLeg6,
  newLeg7,
];

for (const l of categorizedLegLessons) {
  l.questionsCount = l.blocks.reduce((sum, b) => sum + (b.questions?.length || 0), 0);
  l.flashcardsCount = l.blocks.reduce((sum, b) => sum + (b.flashcards?.length || 0), 0);
}

const espLessons = rawData.lessons.filter(l => l.cat === 'esp');
const otherLessons = rawData.lessons.filter(l => l.cat !== 'esp' && l.cat !== 'leg');

const all32Lessons = [...espLessons, ...categorizedLegLessons, ...otherLessons];
rawData.lessons = all32Lessons;

if (Array.isArray(rawData.aulasIndex)) {
  rawData.aulasIndex = all32Lessons.map((l, idx) => ({
    id: l.id,
    num: idx + 1,
    slug: `${String(idx + 1).padStart(2, '0')}-${l.id}`,
    cat: l.cat,
    materia: l.catName,
    weight: l.weight,
    titulo: l.title,
    editalRef: l.editalRef,
    auditBadge: l.auditBadge,
    sources: l.sources,
    blocksCount: (l.blocks || []).length,
    questionsCount: l.questionsCount,
    flashcardsCount: l.flashcardsCount,
  }));
}

for (const jf of jsonFiles) {
  if (fs.existsSync(path.dirname(jf))) {
    fs.writeFileSync(jf, JSON.stringify(rawData, null, 2), 'utf8');
    console.log('Wrote JSON:', jf);
  }
}

for (const jsf of jsFiles) {
  if (fs.existsSync(path.dirname(jsf))) {
    const jsContent = `window.APP_DATA = ${JSON.stringify(rawData)};\nwindow.LOCAL_APP_DATA = window.APP_DATA;\n`;
    fs.writeFileSync(jsf, jsContent, 'utf8');
    console.log('Wrote JS:', jsf);
  }
}

console.log('Summary of 7 Categorized Legislação Lessons (leg_1..leg_7):');
categorizedLegLessons.forEach(l => {
  console.log(`  ${l.id}: ${l.title} (${l.blocks.length} blocos, ${l.questionsCount} Q, ${l.flashcardsCount} FC)`);
});
