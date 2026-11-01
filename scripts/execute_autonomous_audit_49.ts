import fs from 'node:fs';
import crypto from 'node:crypto';
import { renderMarkdownToHtml } from '../src/utils/markdown';
import { correctEditorialClaims } from '../src/utils/editorialCorrections';
import { CURRICULUM_REVIEW } from '../src/data/curriculumReview';
import { ALL_PAUTA_ITEMS } from '../src/data/pautaEspecificaMap';
import { applyEvidenceOverlay, validationErrors } from '../src/utils/auditEvidence';

const data = JSON.parse(fs.readFileSync('data/app_data.json', 'utf8'));
const getLesson = (id: string) => {
  const l = data.lessons.find((x: any) => x.id === id);
  if (!l) throw new Error(`Lesson not found: ${id}`);
  return l;
};

function appendBlockContent(block: any, marker: string, md: string, summaryAddition?: string) {
  const html = renderMarkdownToHtml(md);
  block.modoA = (block.modoA || '').split(marker)[0] + marker + html;
  if (block.modoA_markdown) {
    block.modoA_markdown = block.modoA_markdown.split(marker)[0] + marker + '\n' + md;
  } else {
    block.modoA_markdown = md;
  }
  if (summaryAddition) {
    const sumHtml = renderMarkdownToHtml(summaryAddition);
    block.modoB = (block.modoB || '').split(marker)[0] + marker + sumHtml;
    if (block.modoB_markdown) {
      block.modoB_markdown = block.modoB_markdown.split(marker)[0] + marker + '\n' + summaryAddition;
    }
  }
}

function addQuestionOnce(block: any, auditId: string, q: string, options: string[], ans: number, comment: string) {
  if (!block.questions) block.questions = [];
  const existingIdx = block.questions.findIndex((item: any) => item.auditId === auditId);
  const entry = { auditId, q, options, ans, comment };
  if (existingIdx >= 0) {
    block.questions[existingIdx] = entry;
  } else {
    block.questions.push(entry);
  }
}

function addFlashcardOnce(block: any, lessonTitle: string, front: string, back: string) {
  if (!block.flashcards) block.flashcards = [];
  if (!block.flashcards.some((c: any) => (c.front || c.f) === front)) {
    block.flashcards.push({ f: front, b: back, front, back, lessonTitle });
  }
}

// 1. Clean all orphan "Erro da E" / "letra E" comments across all 49 lessons
for (const l of data.lessons) {
  for (const b of l.blocks) {
    for (const q of b.questions || []) {
      if (typeof q.comment === 'string') {
        q.comment = q.comment
          .replace(/\s*Erro da E:[^.]*\./gi, '')
          .replace(/;\s*e na letra E[^.]*\./gi, '.')
          .replace(/;\s*e a letra E traz[^.]*\./gi, '.')
          .replace(/\s*Não há alternativa E nesta questão\./gi, '');
      }
      // Standardize unauthenticated exam labels to explicit study question labels
      if (typeof q.q === 'string') {
        q.q = q.q
          .replace(/^\((?:Padrão )?IBGP\s*[—-]\s*([^)]+)\)/i, '(Questão de estudo — $1)')
          .replace(/^\((?:IBGP|CEBRASPE|SELECON|CESGRANRIO|VUNESP)[^)]*\)/i, '(Questão de estudo — origem não autenticada)');
      }
    }
    for (const fc of b.flashcards || []) {
      fc.lessonTitle = l.title;
    }
  }
}

// Fix por_8 block[0] question[2] orphan comment (planalto / propusermos)
{
  const por8 = getLesson('por_8');
  const q2 = por8.blocks[0].questions[2];
  q2.comment =
    "Gabarito: B. Na análise morfológica escolar adotada na questão, 'entardecer' apresenta anexação simultânea de prefixo e sufixo à base nominal (tarde), e no futuro do subjuntivo os verbos manter (derivado de ter) e ver flexionam-se como 'se o agente mantiver' e 'vir'. A alternativa A erra a forma 'intervir' (o futuro do subjuntivo de intervir segue vir: 'intervier'); a alternativa C inverte os processos e emprega 'vier' (futuro do subjuntivo de vir) no lugar de 'vir' (futuro do subjuntivo de ver); a alternativa D classifica incorretamente 'o combate' (derivação regressiva/deverbal) como composição e emprega 'interviram' no futuro do subjuntivo.";
}

// 2. Replace legacy "Aula 18..31" headers and cross-references across all 49 lessons
const legacyHeaderReplacements: [RegExp, string][] = [
  [/Aula 18\s*[—:-]\s*[^<\n*]+/g, 'Estudo dirigido de Língua Portuguesa'],
  [/Aula 18:\*\*\s*18\.[^<\n]+/g, 'Tópico do Edital:** Significação, Ortografia e Acentuação'],
  [/Aula 19\s*[—:-]\s*[^<\n*]+/g, 'Estudo dirigido de Articulação, Coesão e Coerência Textual'],
  [/Aula 19:\*\*\s*19\.[^<\n]+/g, 'Tópico do Edital:** Articulação, Coesão e Coerência Textual'],
  [/Aula 20\s*[—:-]\s*[^<\n*]+/g, 'Estudo dirigido de Classes, Formação de Palavras e Verbos'],
  [/Aula 20:\*\*\s*20\.[^<\n]+/g, 'Tópico do Edital:** Classes, Formação de Palavras e Verbos'],
  [/Aula 21\s*[—:-]\s*[^<\n*]+/g, 'Estudo dirigido de Sintaxe e Concordância'],
  [/Aula 21:\*\*\s*21\.[^<\n]+/g, 'Tópico do Edital:** Sintaxe da Oração, do Período e Concordância'],
  [/Aula 22\s*[—:-]\s*[^<\n*]+/g, 'Estudo dirigido de Regência, Crase e Pontuação'],
  [/Aula 22:\*\*\s*22\.[^<\n]+/g, 'Tópico do Edital:** Regência, Crase e Pontuação'],
  [/Aula 23\s*[—:-]\s*[^<\n*]+/g, 'Estudo dirigido de Lógica Proposicional I'],
  [/Aula 23:\*\*\s*23\.[^<\n]+/g, 'Tópico do Edital:** Proposições, Conectivos e Tabelas-Verdade'],
  [/Aula 24\s*[—:-]\s*[^<\n*]+/g, 'Estudo dirigido de Lógica Proposicional II e Argumentação'],
  [/Aula 24:\*\*\s*24\.[^<\n]+/g, 'Tópico do Edital:** Negações, Equivalências, Quantificadores e Argumentação'],
  [/Aula 25\s*[—:-]\s*[^<\n*]+/g, 'Estudo dirigido de Conjuntos, Operações, MMC/MDC e Médias'],
  [/Aula 25:\*\*\s*25\.[^<\n]+/g, 'Tópico do Edital:** Conjuntos Numéricos, Operações, MMC e MDC'],
  [/Aula 26\s*[—:-]\s*[^<\n*]+/g, 'Estudo dirigido de Razões, Proporções, Regra de Três e Porcentagem'],
  [/Aula 26:\*\*\s*26\.[^<\n]+/g, 'Tópico do Edital:** Razões, Proporções, Regra de Três e Porcentagem'],
  [/Aula 27\s*[—:-]\s*[^<\n*]+/g, 'Estudo dirigido de Análise Combinatória, Sequências e Probabilidade'],
  [/Aula 27:\*\*\s*27\.[^<\n]+/g, 'Tópico do Edital:** Análise Combinatória: PFC, Arranjos, Permutações e Combinações'],
  [/Aula 28\s*[—:-]\s*[^<\n*]+/g, 'Estudo dirigido de Grandezas, Medidas e Geometria'],
  [/Aula 28:\*\*\s*28\.[^<\n]+/g, 'Tópico do Edital:** Grandezas e Medidas'],
  [/Aula 29\s*[—:-]\s*[^<\n*]+/g, 'Estudo dirigido de Geografia, Demografia, Distritos e Símbolos'],
  [/Aula 29:\*\*\s*29\.[^<\n]+/g, 'Tópico do Edital:** Aspectos Geográficos, Demográficos e Símbolos'],
  [/Aula 30\s*[—:-]\s*[^<\n*]+/g, 'Estudo dirigido de História, Cultura e Atualidades'],
  [/Aula 30:\*\*\s*30\.[^<\n]+/g, 'Tópico do Edital:** Aspectos Históricos, Culturais e Atualidades'],
  [/Aula 31\s*[—:-]\s*[^<\n*]+/g, 'Estudo dirigido de Geotecnologias, Meio Ambiente e Atualidades'],
  [/Aula 31:\*\*\s*31\.[^<\n]+/g, 'Tópico do Edital:** Atualidades, Georreferenciamento e Realidade Socioambiental'],
  [/\bAula (?:1[89]|2[0-9]|3[0-9])\b/g, 'esta aula'],
  [/\bport_5\b/g, 'por_14'],
  [/\bport_6\b/g, 'por_17'],
  [/\bport_1\b/g, 'por_1'],
  [/\bport_2\b/g, 'por_3'],
  [/\bport_3\b/g, 'por_6'],
  [/\bport_4\b/g, 'por_8'],
];

function cleanLegacyStrings(v: any): any {
  if (typeof v === 'string') {
    let s = correctEditorialClaims(v);
    for (const [re, rep] of legacyHeaderReplacements) {
      s = s.replace(re, rep);
    }
    return s;
  }
  if (Array.isArray(v)) return v.map(cleanLegacyStrings);
  if (v && typeof v === 'object') {
    return Object.fromEntries(Object.entries(v).map(([k, val]) => [k, cleanLegacyStrings(val)]));
  }
  return v;
}

for (let i = 0; i < data.lessons.length; i++) {
  data.lessons[i] = cleanLegacyStrings(data.lessons[i]);
}

// 3. Detailed Pedagogical & Conceptual Corrections in Língua Portuguesa (por_1..por_18)

// --- por_3: Significação das palavras ---
{
  const l = getLesson('por_3');
  for (const b of l.blocks) {
    for (const k of ['modoA', 'modoB', 'modoA_markdown', 'modoB_markdown']) {
      if (typeof b[k] === 'string') {
        b[k] = b[k]
          .split('Dicionário, literal, objetivo, real')
          .join('Sentido base/referencial na construção, sem transposição figurada')
          .split('12 Pares de Parônimos/Homônimos Campeões da IBGP')
          .join('8 Pares e Grupos Essenciais de Parônimos e Homônimos');
      }
    }
  }
  l.blocks[1].title = 'Bloco 3.2 — Quadro Analítico de Parônimos, Homônimos, Hiperonímia e Polissemia em Contexto';
  if (l.mindMap?.branches?.[1]?.nodes?.[0]) {
    l.mindMap.branches[1].nodes[0].detail =
      'Denotação: sentido base/referencial no enunciado. Conotação: transposição figurada dependente do contexto (dicionários também registram acepções figuradas).';
  }
  const q2 = l.blocks[0].questions[2];
  q2.q =
    '(Questão de estudo — Semântica e Figuras) Diante do risco ___ de temporal, a equipe decidiu ___ (confirmar como válidos) os dados já conferidos na ___ extraordinária; o supervisor vistoriou o setor norte, e os agentes, o setor sul. Assinale a alternativa que preenche corretamente as lacunas e identifica a figura de sintaxe na parte final:';
  q2.comment =
    'Gabarito: B. Iminente significa prestes a ocorrer; ratificar significa confirmar/validar os dados já conferidos (enquanto retificar significaria corrigir erros); sessão indica a reunião extraordinária; e na segunda oração ocorre zeugma pela omissão do verbo vistoriar já expresso anteriormente.';
  q2.revision = '20261101-por3-ratificar';

  const mdPor3 = `
### Critérios Lexicográficos: Polissemia, Homonímia, Hiperonímia e Substituição Contextual
1. **Denotação e Conotação além do atalho do dicionário**: Verbetes lexicográficos registram tanto acepções literais quanto extensões figuradas cristalizadas. Por isso, a distinção entre **denotação** (uso em sentido base, referencial e direto) e **conotação** (transposição figurada construída pelas pistas do texto) deve ser decidida pelo **funcionamento da palavra no enunciado**, e não pela simples presença ou ausência no dicionário.
2. **Polissemia vs. Homonímia**:
   - **Polissemia**: uma única palavra apresenta múltiplos sentidos ligados por uma relação semântica/histórica reconhecível (ex.: *cabeça* do corpo humano, *cabeça* do prego, *cabeça* da equipe; *rede* de dormir, *rede* elétrica, *rede* municipal de saúde). Nos dicionários, aparece em uma única entrada com várias acepções numeradas.
   - **Homonímia**: vocábulos de origens distintas convergem na grafia e/ou na pronúncia sem vínculo semântico sincrônico (ex.: *são* [sadio], *são* [forma de Santo] e *são* [verbo ser]; *manga* [fruta] e *manga* [parte da camisa]).
3. **Mandado vs. Mandato e Iminente vs. Eminente**:
   - **Mandado**: ordem escrita expedida por autoridade judicial ou administrativa (*mandado de segurança*, *mandado de intimação*).
   - **Mandato**: período de representação política/institucional (*mandato eletivo de quatro anos*) ou contrato de procuração em que alguém recebe poderes para agir em nome de outrem.
   - **Iminente**: aquilo que está prestes a acontecer (*chuva iminente*). **Eminente**: elevado, notável, ilustre (*pesquisador eminente*), sem confundir iminência com ocorrência já imediata.
4. **Substituição Sinonímica e Eixos de Antonímia**: Não existem sinônimos absolutos válidos em qualquer frase. Ao substituir *eficaz* por *eficiente*, *severo* por *rigoroso* ou *ratificar* por *homologar*, avalie: (a) manutenção do sentido referencial; (b) grau de intensidade; (c) adequação ao registro formal/informal; e (d) regência exigida pela nova palavra.`;

  appendBlockContent(
    l.blocks[1],
    '<!-- AUDITORIA:POR3 -->',
    mdPor3,
    '- Denotação vs. conotação decide-se pelo contexto, não apenas por estar no dicionário.\n- Polissemia: uma palavra com múltiplas acepções aparentadas; homonímia: palavras distintas com mesma forma/som.\n- Mandado: ordem judicial/administrativa; mandato: representação ou procuração.'
  );
  addQuestionOnce(
    l.blocks[1],
    'por_3-autoral-1',
    '(Autoral — Polissemia vs. Homonímia) Compare os enunciados: I. "A rede de atenção básica articulou os postos do bairro." / II. "O morador recolheu a rede da varanda antes da chuva." / III. "O servidor está são e retomou o expediente na capela de São José." Assinale a análise semântica correta:',
    [
      'Em I e II, "rede" exemplifica homonímia perfeita por não haver relação entre os sentidos; em III, "são" é paronímia.',
      'Em I e II, "rede" exemplifica polissemia (extensão da ideia de malha interligada); em III, "são" (sadio) e "São" (santo) exemplificam homonímia.',
      'Nos três enunciados ocorre apenas antonímia contextual entre termos técnicos e coloquiais.',
      'Em I e II ocorre paronímia gráfica, pois o sentido figurado altera a classe gramatical de "rede".',
    ],
    1,
    'Gabarito: B. Em I e II, "rede" preserva o núcleo semântico de conjunto entrelaçado/interligado, caracterizando polissemia; já em III, "são" (do latim sanus, sadio) e "São" (forma apocopada de santo) têm origens e significados distintos com identidade formal, caracterizando homonímia.'
  );
  addQuestionOnce(
    l.blocks[1],
    'por_3-autoral-2',
    '(Autoral — Substituição Sinonímica Contextual) Na frase "O parecer técnico apontou caráter provisório na medida adotada pela coordenação", a substituição de "provisório" preserva a correção e a coerência formal se for feita por:',
    [
      'definitivo, pois ambos indicam deliberação administrativa.',
      'temporário, pois mantém o sentido de vigência limitada no tempo.',
      'iminente, pois todo ato provisório está prestes a ser revogado.',
      'incipiente, pois significa aquilo que já foi integralmente concluído.',
    ],
    1,
    'Gabarito: B. "Temporário" preserva o sentido contextual de duração limitada ("provisório"). A inverte o sentido (antônimo); C confunde provisório com iminente (prestes a ocorrer); D confunde provisório com incipiente (que está no começo).'
  );
  addFlashcardOnce(
    l.blocks[1],
    l.title,
    'Por que o critério "denotação está no dicionário e conotação não está" é insuficiente?',
    'Porque os dicionários também registram acepções figuradas e metafóricas consagradas pelo uso; a distinção depende da função literal ou figurada no contexto do enunciado.'
  );
}

// --- por_4: Figuras de Sintaxe ---
{
  const l = getLesson('por_4');
  const mdPor4 = `
### Aprofundamento: Zeugma sem Vírgula, Anacoluto vs. Topicalização e Registro na Silepse
1. **Elipse e Zeugma**: A **elipse** é o gênero amplo (omissão de termo recuperável pelo contexto ou pela desinência verbal, como em *Visitamos o setor norte*, com sujeito *nós* elíptico). A **zeugma** é a espécie em que o termo omitido **já foi expresso anteriormente no enunciado** (*A equipe inspecionou as caixas; o supervisor, as calhas*). Embora a vírgula frequentemente marque o lugar do verbo suprimido, pode haver zeugma sem vírgula quando a estrutura sintática não exigir pausa (*Na primeira rua havia três terrenos baldios e na segunda apenas um* = *havia apenas um*).
2. **Anacoluto vs. Topicalização com Retomada**:
   - **Anacoluto**: o termo inicial fica **sintaticamente solto**, sem função na oração que se segue, porque houve mudança no planejamento da frase (*Esses lotes abandonados, é fundamental que a limpeza ocorra antes das chuvas* — *esses lotes abandonados* não é sujeito nem complemento de nenhum verbo).
   - **Topicalização / Objeto Pleonástico**: quando o termo deslocado é retomado por pronome oblíquo (*Esses lotes abandonados, a equipe já os vistoriou*), há função sintática retomada pelo pronome *os*.
3. **Silepse e Adequação de Registro**: Na silepse (de gênero, número ou pessoa), a concordância faz-se com a ideia subjacente (*Os moradores estamos atentos*). Em textos literários, crônicas e discursos persuasivos, produz efeito de inclusão ou expressividade; já na redação oficial estrita (ofícios, relatórios técnicos), prefere-se a concordância gramatical explícita.`;

  appendBlockContent(
    l.blocks[1],
    '<!-- AUDITORIA:POR4 -->',
    mdPor4,
    '- Zeugma é subtipo de elipse (termo já expresso antes) e não depende exclusivamente de vírgula.\n- Anacoluto deixa o tópico inicial sem função sintática; não confundir com objeto pleonástico.\n- Hipérbato inverte a ordem direta; assíndeto omite conectivos; polissíndeto repete conectivos.'
  );
  addQuestionOnce(
    l.blocks[1],
    'por_4-autoral-1',
    '(Autoral — Anacoluto vs. Hipérbato e Polissíndeto) Analise os períodos: I. "Aquelas caixas-d\'água antigas do pátio, convém que a manutenção seja feita ainda hoje." / II. "Dos laudos laboratoriais dependia o encerramento do caso." Assinale a alternativa que classifica corretamente os mecanismos sintáticos de I e II:',
    [
      'Em I ocorre anacoluto (termo inicial anunciado sem função sintática na oração seguinte); em II ocorre hipérbato (inversão da ordem direta).',
      'Em I ocorre zeugma verbal marcada por vírgula; em II ocorre silepse de número.',
      'Em I ocorre polissíndeto coordenativo; em II ocorre pleonasmo vicioso.',
      'Em ambos os períodos ocorre assíndeto por ausência de preposição.',
    ],
    0,
    'Gabarito: A. Em I, o sintagma inicial "Aquelas caixas-d\'água antigas do pátio" fica solto sintaticamente após a quebra da estrutura ("convém que..."), configurando anacoluto. Em II, há inversão da ordem direta ("O encerramento do caso dependia dos laudos laboratoriais"), configurando hipérbato.'
  );
  addQuestionOnce(
    l.blocks[1],
    'por_4-autoral-2',
    '(Autoral — Assíndeto, Polissíndeto e Pleonasmo) Compare: I. "Chegou ao imóvel, abriu o portão, conferiu o quintal, registrou o boletim." / II. "Trabalha, e pesquisa, e orienta, e revisa cada quarteirão." Assinale a classificação correta:',
    [
      'I apresenta assíndeto (coordenação sem conjunção explícita, conferindo ritmo rápido); II apresenta polissíndeto (repetição enfática da conjunção).',
      'I apresenta polissíndeto; II apresenta elipse pronominal viciosa.',
      'I apresenta anacoluto; II apresenta silepse de pessoa.',
      'Ambos exemplificam pleonasmo vicioso condenado em qualquer gênero textual.',
    ],
    0,
    'Gabarito: A. Em I, as orações coordenadas sucedem-se sem conjunção (assíndeto); em II, a conjunção "e" é repetida intencionalmente antes de cada elemento coordenado (polissíndeto) para intensificar a continuidade das ações.'
  );
}

// --- por_5: Figuras de Linguagem ---
{
  const l = getLesson('por_5');
  l.blocks[0].flashcards[0].front = l.blocks[0].flashcards[0].f = 'Qual é a diferença entre Antítese e Paradoxo (Oxímoro)?';
  l.blocks[0].flashcards[0].back = l.blocks[0].flashcards[0].b =
    'Antítese aproxima termos de sentidos opostos mantendo cada um em seu domínio ("luz e sombra"). Paradoxo articula ideias aparentemente inconciliáveis na superfície para expressar um sentido profundo ("ferida que dói e não se sente"); quando condensado num único sintagma ("silêncio eloquente"), chama-se também oxímoro.';
  if (l.mindMap?.branches?.[0]?.nodes?.[0]) {
    l.mindMap.branches[0].nodes[0].detail =
      'Metáfora: aproximação implícita de domínios por semelhança. Comparação (símile): aproximação explícita por conectivo comparativo (atenção: nem todo "como" é comparativo; pode ser causal ou conformativo).';
  }
  const mdPor5 = `
### Distinções Críticas: Metáfora vs. Comparação, Paradoxo vs. Oxímoro e Prosopopeia vs. Metonímia
1. **Como nem sempre introduz comparação**: A **comparação (símile)** exige relação de semelhança entre dois termos mediada por conectivo comparativo (*como, tal qual, assim como*). Se a frase diz *"Como choveu forte, a vistoria foi adiada"*, o *como* é conjunção **causal** (= porque), sem figura de linguagem. Se diz *"Conforme o manual, como orientou a coordenação..."*, é **conformativo**.
2. **Paradoxo e Oxímoro**: O **paradoxo** não "destrói a lógica do texto"; ele constrói uma contradição aparente na superfície literal que se resolve na interpretação figurada ou poética. O **oxímoro** é a manifestação concentrada do paradoxo num mesmo sintagma nominal (*"obscura clareza"*, *"silêncio ensurdecedor"*).
3. **Prosopopeia (Personificação) vs. Metonímia de Lugar pelos Habitantes**: Em *"A cidade despertou preocupada com a enchente"*, pode haver **metonímia** (*a cidade* = *os moradores da cidade*) combinada a traço expressivo. Já em *"O vento sussurrava segredos às árvores"*, atribui-se ação estritamente humana/animada a ser inanimado (**prosopopeia**).
4. **Catacrese e Sinestesia**: Na **catacrese**, usa-se termo figurado cristalizado na língua por falta de vocábulo específico (*braço da cadeira, dente de alho, asa da xícara, embarcar no ônibus*). Na **sinestesia**, fundem-se sensações de órgãos dos sentidos diferentes (*voz doce e áspera* = audição + paladar + tato).`;

  appendBlockContent(
    l.blocks[1],
    '<!-- AUDITORIA:POR5 -->',
    mdPor5,
    '- Comparação exige relação de semelhança + conectivo; diferenciar de "como" causal/conformativo.\n- Catacrese: metáfora cristalizada por ausência de termo próprio (asa da xícara).\n- Sinestesia: cruzamento de sentidos sensoriais distintos.\n- Eufemismo suaviza; hipérbole intensifica por exagero.'
  );
  addQuestionOnce(
    l.blocks[1],
    'por_5-autoral-1',
    '(Autoral — Catacrese, Sinestesia e Eufemismo) Analise os enunciados: I. "Foi preciso consertar o pé da mesa e a asa da xícara antes do atendimento." / II. "Ouviu-se um grito áspero e gelado no corredor." / III. "O servidor faltou com a verdade durante a sindicância." As figuras presentes em I, II e III são, respectivamente:',
    [
      'Catacrese, sinestesia e eufemismo.',
      'Metonímia, hipérbole e ironia.',
      'Comparação, aliteração e paradoxo.',
      'Prosopopeia, catacrese e antítese.',
    ],
    0,
    'Gabarito: A. Em I, "pé da mesa" e "asa da xícara" são usos cristalizados por ausência de nome específico (catacrese); em II, cruzam-se audição ("grito") e tato/temperatura ("áspero e gelado"), configurando sinestesia; em III, "faltou com a verdade" suaviza a ideia de "mentiu" (eufemismo).'
  );
  addQuestionOnce(
    l.blocks[1],
    'por_5-autoral-2',
    '(Autoral — Comparação vs. "Como" Causal/Conformativo) Em qual das alternativas abaixo a palavra "como" introduz efetivamente uma figura de comparação (símile)?',
    [
      'Como o laboratório fechou mais cedo, as amostras seguiram para a central estadual.',
      'O agente conferiu todas as planilhas como determinava o protocolo municipal.',
      'A notícia espalhou-se pelo bairro como faísca em palha seca.',
      'Como ninguém apresentou recurso no prazo legal, o processo foi arquivado.',
    ],
    2,
    'Gabarito: C. Em C, "como" estabelece relação explícita de semelhança entre a velocidade da notícia e a propagação da faísca (comparação/símile). Em A e D, "como" é conjunção subordinativa causal (= já que); em B, é conjunção conformativa (= conforme).'
  );
}

// --- por_6: Articulação textual ---
{
  const l = getLesson('por_6');
  if (l.mindMap) {
    l.mindMap.centralSubtitle = 'Operadores argumentativos, referenciação (anáfora/catáfora) e as 9 classes adverbiais (NGB)';
    if (l.mindMap.deadlinesAndNumbers?.[1]) {
      l.mindMap.deadlinesAndNumbers[1].value = '9 Tipos';
      l.mindMap.deadlinesAndNumbers[1].label = 'Orações Subordinadas Adverbiais na NGB';
    }
  }
  const mdPor6 = `
### Escopo dos Operadores Argumentativos, Pressupostos e Pronomes Relativos
1. **Pressuposto Linguístico vs. Fato Empírico**: Verbos aspectuais (*parar de, continuar, voltar a, passar a*), adjetivos avaliativos e advérbios (*já, ainda*) projetam **pressupostos no interior do enunciado**. Quando um texto diz *"O setor voltou a registrar casos"*, o pressuposto linguístico é que havia registrado casos antes; isso descreve o compromisso semântico da frase, sem dispensar comprovação documental caso se avalie a veracidade externa do dado.
2. **Direção Referencial de *Este, Esse, Aquele***:
   - Na sequência do texto (**espaço discursivo**): **esse/isso** costuma retomar o que já foi enunciado (**anáfora**); **este/isto** costuma anunciar o que será dito a seguir (**catáfora**).
   - Na retomada de **dois termos já citados** (ambos anafóricos): **aquele** retoma o termo mencionado em primeiro lugar (mais distante) e **este** retoma o último termo mencionado (mais próximo).
3. **Ajuste Sintático entre Conjunções e Locuções Prepositivas**: *Embora* e *conquanto* são conjunções concessivas que exigem verbo no **subjuntivo** (*Embora a chuva tenha atrasado a rota...*). Já *apesar de* e *a despeito de* são locuções prepositivas que pedem **substantivo** ou **verbo no infinitivo** (*Apesar de a chuva ter atrasado a rota...*).`;

  appendBlockContent(
    l.blocks[2],
    '<!-- AUDITORIA:POR6 -->',
    mdPor6,
    '- Em dois antecedentes já citados, "aquele" retoma o primeiro e "este" retoma o último (ambos em função anafórica).\n- "Embora/conquanto" pedem subjuntivo; "apesar de/a despeito de" pedem substantivo ou infinitivo.'
  );
  addQuestionOnce(
    l.blocks[2],
    'por_6-autoral-1',
    '(Autoral — Operadores Escalares e Orientação Argumentativa) Compare os enunciados: I. "Apenas três equipes concluíram o levantamento no prazo." / II. "Três equipes já concluíram o levantamento, e até o setor mais distante foi mapeado." Assinale a análise correta sobre os operadores:',
    [
      'Em I, "apenas" orienta para a insuficiência/restrição do número; em II, "já" e "até" orientam positivamente para o avanço além do esperado.',
      'Em I e II, os operadores são meramente ornamentais e sua retirada mantém idêntica a orientação argumentativa.',
      'Em I, "apenas" indica causa; em II, "até" indica oposição adversativa equivalente a "porém".',
      'Em II, a palavra "até" funciona como preposição de limite espacial, sem valor argumentativo.',
    ],
    0,
    'Gabarito: A. Embora a quantidade numérica ("três equipes") seja a mesma, em I o focalizador restritivo "apenas" orienta para "pouco/insuficiente", enquanto em II "já" e o operador escalar inclusivo "até" orientam para um balanço favorável.'
  );
  addQuestionOnce(
    l.blocks[2],
    'por_6-autoral-2',
    '(Autoral — Reescrita e Ajuste Sintático de Conectores) Assinale a alternativa em que a reescrita de "Conquanto o cronograma estivesse apertado, a equipe revisou todos os formulários" mantém o sentido concessivo e a correção gramatical:',
    [
      'Apesar de o cronograma estar apertado, a equipe revisou todos os formulários.',
      'Porquanto o cronograma estivesse apertado, a equipe revisou todos os formulários.',
      'À medida que o cronograma estava apertado, a equipe revisou todos os formulários.',
      'Conquanto o cronograma estava apertado, a equipe revisou todos os formulários.',
    ],
    0,
    'Gabarito: A. "Apesar de" preserva o valor concessivo e exige o ajuste do verbo para o infinitivo ("estar"), sem contrair a preposição "de" com o artigo do sujeito ("o cronograma"). B troca concessão por causa/explicação ("porquanto"); C troca por proporção; D emprega indicativo após "conquanto".'
  );
}

// --- por_7: Coesão e coerência textual ---
{
  const l = getLesson('por_7');
  const mdPor7 = `
### Dêixis (Enunciação) vs. Anáfora e Catáfora (Endófora)
1. **Referência Endofórica (dentro do texto)**: ocorre quando o termo aponta para outro elemento expresso no próprio texto — seja retomando um antecedente (**anáfora**: *"O relatório ficou pronto; **ele** será enviado hoje"*) ou antecipando um consequente (**catáfora**: *"O objetivo é **este**: zerar as pendências"*).
2. **Referência Exofórica / Dêixis (situação comunicativa)**: ocorre quando pronomes e advérbios (*eu, tu, aqui, agora, hoje, ontem, amanhã*) dependem diretamente das coordenadas de quem fala (**locutor**), com quem fala (**interlocutor**), onde fala (**espaço**) e quando fala (**tempo da enunciação**). Exemplo: num bilhete sem data dizendo *"Volto amanhã"*, o advérbio *amanhã* é um **dêitico temporal** cuja interpretação exige saber o dia em que o bilhete foi escrito.
3. **Coerência e as 4 Metarregras de Charolles**:
   - **Repetição (continuidade temática)**: retomada de referentes por pronomes, hiperônimos, sinônimos ou elipse.
   - **Progressão**: acréscimo de informações novas (rema) ao tema, evitando circularidade ou tautologia.
   - **Não-contradição**: compatibilidade lógica e semântica entre as afirmações explícitas e implícitas do texto.
   - **Relação**: articulação pertinente entre os fatos e conceitos no mundo textual representado.`;

  appendBlockContent(
    l.blocks[2],
    '<!-- AUDITORIA:POR7 -->',
    mdPor7,
    '- Anáfora (retoma) e catáfora (antecipa) apontam para elementos dentro do texto (endófora).\n- Dêixis aponta para a situação de enunciação (eu/tu, aqui, agora/hoje).\n- As 4 metarregras de Charolles exigem repetição com progressão, não-contradição e relação.'
  );
  addQuestionOnce(
    l.blocks[2],
    'por_7-autoral-1',
    '(Autoral — Dêixis vs. Anáfora e Catáfora) Em uma placa afixada sem data na porta de uma repartição lê-se: "Hoje não haverá atendimento aqui; retornaremos amanhã." A dificuldade de interpretar "hoje", "aqui" e "amanhã" fora da situação concreta decorre do fato de esses termos funcionarem como:',
    [
      'elementos dêiticos (exofóricos), cuja referência depende do tempo e do espaço da enunciação.',
      'conjunções coordenativas conclusivas que exigem sujeito posposto.',
      'hiperônimos lexicais que retomam substantivos já citados no parágrafo anterior.',
      'orações subordinadas adjetivas restritivas sem antecedente expresso.',
    ],
    0,
    'Gabarito: A. "Hoje", "aqui" e "amanhã" são dêiticos temporais e espaciais: seu referente concreto depende das coordenadas da situação de enunciação (quando e onde o aviso foi produzido/lido).'
  );
  addQuestionOnce(
    l.blocks[2],
    'por_7-autoral-2',
    '(Autoral — Cadeia Referencial e Progressão Textual) Leia: "O municípios de Rondônia enfrentam desafios logísticos na estação chuvosa. Essa realidade exige planejamento prévio das equipes." O sintagma "Essa realidade" realiza coesão por meio de:',
    [
      'encapsulamento anafórico (expressão nominal que resume e rotula a ideia da oração anterior, fazendo o texto progredir).',
      'catáfora puramente fonética sem relação com o período anterior.',
      'elipse do verbo principal da segunda oração.',
      'dêixis de primeira pessoa do singular.',
    ],
    0,
    'Gabarito: A. "Essa realidade" retoma e sintetiza toda a proposição anterior (encapsulamento anafórico), garantindo simultaneamente continuidade (repetição) e avanço informacional (progressão).'
  );
}

// --- por_8: Classes de palavras e formação de palavras ---
{
  const l = getLesson('por_8');
  for (const b of l.blocks) {
    for (const k of ['modoA', 'modoB', 'modoA_markdown', 'modoB_markdown']) {
      if (typeof b[k] === 'string') {
        b[k] = b[k]
          .split('não existe "noitecer"')
          .join('a análise escolar examina a adjunção solidária de prefixo e sufixo à base nominal (embora dicionários ortográficos como o VERO registrem a variante "noitecer")')
          .split('não existe *noitecer*')
          .join('a tradição escolar classifica como parassíntese pela estrutura [a + noite + ecer], embora o VERO/Hunspell registre "noitecer"')
          .split('não existe "tardecer" nem "entard"')
          .join('a estrutura verbal forma-se pela adjunção solidária do esquema [en- + tarde + -ecer]');
      }
    }
    for (const q of b.questions || []) {
      if (typeof q.comment === 'string') {
        q.comment = q.comment.replace(
          /pois não existe 'noitecer'[^.)]*/gi,
          'pelo padrão morfológico escolar [a- + noite + -ecer] (observando-se que listas ortográficas como o VERO registram a forma noitecer)'
        );
      }
    }
  }
  const mdPor8 = `
### Estudo Sistemático: Artigo, Numeral, Interjeição e Plural dos Substantivos Compostos
1. **Artigo (Definido *o, a, os, as* e Indefinido *um, uma, uns, umas*)**:
   - Determina o substantivo, indicando se o referente já é conhecido/determinado no discurso (*"**O** relatório foi entregue"*) ou se é introduzido pela primeira vez/indeterminado (*"Encontrou **um** foco no terreno"*).
   - **Substantivação (Derivação Imprópria)**: o artigo converte palavras de qualquer classe em substantivo (*"O **não** foi documentado"*; *"Um **olhar** atento"*).
   - Distinção entre **um** artigo indefinido (*"Visitou **um** galpão abandonado"*, oposição definido/indefinido) e **um** numeral cardinal (*"Visitou apenas **um** galpão, e não dois"*, quantidade exata).
2. **Numeral (Cardinal, Ordinal, Multiplicativo e Fracionário)**:
   - **Cardinais**: quantidade básica (*um, dois, cem, mil*). *Ambos/ambas* funciona como numeral dual (= os dois).
   - **Ordinais**: posição em série (*primeiro, décimo, quinquagésimo, centésimo*).
   - **Multiplicativos**: proporção múltipla (*dobro, दुप्लो/duplo, triplo*).
   - **Fracionários**: divisão proporcional (*meio/metade, terço, dois quintos*).
3. **Interjeição e Locução Interjetiva**: palavras ou expressões invariáveis que exprimem estados emotivos, apelos ou reações imediatas situadas no contexto comunicativo (*Atenção!, Cuidado!, Oxalá!, Ufa!, Quem dera!*).
4. **Plural dos Substantivos Compostos (Regras Estruturais)**:
   - **Variam os dois elementos**: ` + '`substantivo + substantivo`' + ` (*couve-flor → couves-flores*), ` + '`substantivo + adjetivo`' + ` (*amor-perfeito → amores-perfeitos*), ` + '`adjetivo + substantivo`' + ` (*boa-fé → boas-fés*), ` + '`numeral + substantivo`' + ` (*segunda-feira → segundas-feiras*).
   - **Varia apenas o primeiro elemento**: quando ligados por preposição expressa (*pôr do sol → pores do sol*; *água-de-colônia → águas-de-colônia*) ou quando o segundo substantivo limita o primeiro indicando finalidade/semelhança (*peixe-boi → peixes-boi* ou *peixes-bois*; *navio-escola → navios-escola*).
   - **Varia apenas o segundo elemento**: ` + '`verbo + substantivo`' + ` (*guarda-chuva → guarda-chuvas*; *caça-níquel → caça-níqueis*), ` + '`palavra invariável + palavra variável`' + ` (*abaixo-assinado → abaixo-assinados*; *alto-falante → alto-falantes*; *recém-nascido → recém-nascidos*) e palavras repetidas/onomatopaicas (*reco-reco → reco-recos*).
   - **Ficam invariáveis**: ` + '`verbo + advérbio`' + ` (*o bota-fora → os bota-fora*) e ` + '`verbo + verbo oposto`' + ` (*o leva-e-traz → os leva-e-traz*).`;

  appendBlockContent(
    l.blocks[2],
    '<!-- AUDITORIA:POR8 -->',
    mdPor8,
    '- Artigo: determina o nome e substantiva qualquer classe; diferenciar "um" artigo de "um" numeral.\n- Composto verbo+substantivo (guarda-chuvas) e advérbio+adjetivo (abaixo-assinados): varia só o 2º elemento.\n- Composto com preposição (pores do sol): varia só o 1º elemento.'
  );
  addQuestionOnce(
    l.blocks[2],
    'por_8-autoral-1',
    '(Autoral — Plural dos Substantivos Compostos) Assinale a alternativa em que todos os substantivos compostos estão flexionados no plural de acordo com a norma-padrão:',
    [
      'guarda-chuvas, segundas-feiras, abaixo-assinados, pores do sol.',
      'guardas-chuvas, segunda-feiras, abaixos-assinados, pôr do sóis.',
      'guarda-chuvas, segunda-feiras, abaixo-assinados, pores dos sóis.',
      'guardas-chuva, segundas-feira, abaixos-assinado, pores do sol.',
    ],
    0,
    'Gabarito: A. Em "guarda-chuvas" (verbo + substantivo) e "abaixo-assinados" (advérbio + particípio/adjetivo), varia apenas o segundo elemento; em "segundas-feiras" (numeral + substantivo), variam ambos; em "pores do sol" (elementos ligados por preposição), varia apenas o primeiro.'
  );
  addQuestionOnce(
    l.blocks[2],
    'por_8-autoral-2',
    '(Autoral — Artigo, Numeral, Derivação Imprópria e Interjeição) No período "Atenção! Um simples olhar da supervisora evitou que um erro se repetisse nos dois turnos", os termos "Atenção!", o primeiro "Um", "olhar" e o segundo "um" (em oposição a "dois turnos") classificam-se, respectivamente, como:',
    [
      'interjeição de apelo, artigo indefinido, substantivo (por derivação imprópria) e numeral cardinal.',
      'substantivo abstrato, numeral cardinal, verbo transitivo e artigo definido.',
      'advérbio de modo, pronome indefinido, verbo no infinitivo e preposição.',
      'interjeição, numeral ordinal, adjetivo uniforme e pronome demonstrativo.',
    ],
    0,
    'Gabarito: A. "Atenção!" exprime apelo/advertência (interjeição); em "Um simples olhar", "olhar" foi substantivado pelo artigo indefinido "Um" (derivação imprópria); já em "um erro... nos dois turnos", o contraste quantitativo explícito com "dois" evidencia o valor de numeral cardinal.'
  );
}

// --- por_9: Verbos ---
{
  const l = getLesson('por_9');
  if (l.mindMap?.branches?.[0]?.nodes?.[0]) {
    l.mindMap.branches[0].nodes[0].detail =
      'Indicativo (apresenta o evento como certo/factual no discurso), Subjuntivo (hipótese, possibilidade, condição ou desejo) e Imperativo (ordem, instrução, pedido ou conselho).';
  }
  const mdPor9 = `
### Formação do Imperativo, Formas Nominais, Verbos Defectivos e Abundantes
1. **Formação do Imperativo (Afirmativo e Negativo)**:
   - **Imperativo Negativo**: todas as pessoas vêm integralmente do **Presente do Subjuntivo** sem alteração (*Não fales tu, não fale você, não falemos nós, não faleis vós, não falem vocês*).
   - **Imperativo Afirmativo**: *tu* e *vós* vêm do **Presente do Indicativo sem o -S final** (*tu falas → fala tu*; *vós falais → falai vós*; exceção: *ser → sê tu, sede vós*). As demais pessoas (*você, nós, vocês*) vêm do **Presente do Subjuntivo** (*fale você, falemos nós, falem vocês*). Não misture tratamento de *tu* com forma de *você* no mesmo período formal.
2. **Verbos Defectivos (*Precaver, Reaver, Abolir*)**:
   - **Precaver-se**: não é derivado de *ver* nem de *vir*. É verbo defectivo da 2ª conjugação: no Presente do Indicativo só possui *nós precavemos* e *vós precaveis* (portanto, não possui Presente do Subjuntivo nem Imperativo Negativo). No Pretérito Perfeito e tempos derivados é regular (*eu me precavi, se eu me precavesse, quando eu me precaver*).
   - **Reaver**: segue a conjugação de *haver*, mas **apenas nas formas em que *haver* conserva a letra V** (*nós reavemos, vós reaveis, eu reouve, se eu reouvesse, quando eu reouver*).
3. **Formas Nominais e Verbos Abundantes**:
   - **Infinitivo** (pessoal/impessoal), **Gerúndio** (*-ndo*, processo em curso) e **Particípio** (*-ado/-ido* regular ou formas irregulares).
   - Nos **verbos abundantes** (*aceitar, entregar, enxugar, expressar, expulsar, imprimir, prender, suspender*), usa-se o **particípio regular (*-ado/-ido*)** com os auxiliares **ter e haver** na voz ativa (*tinha aceitado, havia entregado, tinha imprimido*) e o **particípio irregular (curto)** com **ser e estar** na voz passiva ou estado (*foi aceito, está entregue, foi impresso*).`;

  appendBlockContent(
    l.blocks[0],
    '<!-- AUDITORIA:POR9 -->',
    mdPor9,
    '- Imperativo afirmativo: tu/vós vêm do Presente do Indicativo sem -S; você/nós/vocês vêm do Presente do Subjuntivo.\n- Precaver não deriva de ver: no presente do indicativo só tem "nós precavemos, vós precaveis"; no pretérito é regular (precavi, precavesse).\n- Verbos abundantes: ter/haver + particípio regular (-ado/-ido); ser/estar + particípio irregular.'
  );
  addQuestionOnce(
    l.blocks[0],
    'por_9-autoral-1',
    '(Autoral — Imperativo, Verbos Defectivos e Abundantes) Assinale a alternativa inteiramente correta segundo a norma-padrão quanto à flexão verbal:',
    [
      'Quando a equipe reouver os equipamentos que tinham sido entregues à oficina, retomará o cronograma.',
      'Se o servidor se precavir contra acidentes e ter impresso os mapas, concluirá a rota.',
      'Quando nós reavermos os formulários que haviam sido entregados, arquivaremos o processo.',
      'Não conferes tu os dados sem antes verificar se a coordenação já tinha aceito o prazo.',
    ],
    0,
    'Gabarito: A. "Reouver" é o futuro do subjuntivo de reaver (segue haver: houver → reouver), e com a locução passiva "tinham sido" emprega-se o particípio irregular "entregues". B erra "precavir" (o correto é "precaver", 2ª conjugação) e "ter impresso" (com ter/haver usa-se "imprimido"); C erra "reavermos" (correto: "reouvermos"); D usa presente do indicativo no imperativo negativo de tu (correto: "Não confiras tu") e "tinha aceito" (no padrão estrito prefere-se "tinha aceitado").'
  );
  addQuestionOnce(
    l.blocks[1],
    'por_9-autoral-2',
    '(Autoral — Passiva Sintética no Singular e no Plural) Compare as construções: I. "Divulgou-se o resultado preliminar do levantamento." / II. "Divulgaram-se os resultados preliminares do levantamento." Assinale a análise correta:',
    [
      'Ambas estão na voz passiva sintética, pois o verbo transitivo direto concorda com o sujeito paciente no singular em I ("o resultado") e no plural em II ("os resultados").',
      'Apenas II é voz passiva sintética, pois o pronome apassivador exige obrigatoriamente verbo no plural.',
      'Em I ocorre índice de indeterminação do sujeito; em II ocorre voz reflexiva recíproca.',
      'Ambas estão na voz ativa com sujeito indeterminado.',
    ],
    0,
    'Gabarito: A. Na voz passiva sintética (VTD + pronome apassivador "se"), o verbo concorda em número e pessoa com o sujeito paciente: singular em I ("O resultado preliminar foi divulgado") e plural em II ("Os resultados preliminares foram divulgados").'
  );
}

// --- por_10: Concordância verbal e nominal ---
{
  const l = getLesson('por_10');
  if (l.mindMap) {
    l.mindMap.mnemonic = 'HAVER (existir) e FAZER (tempo) são impessoais (singular); EXISTIR é pessoal (concorda no singular ou no plural com o sujeito)';
  }
  for (const b of l.blocks) {
    for (const k of ['modoA', 'modoB', 'modoA_markdown', 'modoB_markdown']) {
      if (typeof b[k] === 'string') {
        b[k] = b[k]
          .split('Existir tem sujeito e vai para o plural')
          .join('Existir tem sujeito e concorda com ele no singular ou no plural')
          .split('Variam em gênero e número (concordam com o substantivo): <em>anexo, incluso, mesmo (em pessoa), próprio, quite, obrigado, leso</em>')
          .join('Concordam com o substantivo: <em>anexo, incluso, mesmo (em pessoa), próprio, obrigado, leso</em> (em gênero e número) e <em>quite / quites</em> (em número)');
      }
    }
  }
  const mdPor10 = `
### Casos Especiais: Sujeito Composto Posposto, Porcentagens, Partitivos, Horas e Adjetivo com Vários Substantivos
1. **Sujeito Composto Anteposto vs. Posposto**:
   - **Anteposto ao verbo**: leva o verbo ao plural (*"O supervisor e o agente conferiram o mapa"*), salvo se os núcleos forem sinônimos em gradação ou resumidos por *tudo, nada, ninguém* (*"Croqui, mapa, planilha, tudo foi conferido"*).
   - **Posposto ao verbo**: admite tanto a **concordância lógica no plural** (*"Compareceram o supervisor e os agentes"*) quanto a **concordância atrativa com o núcleo mais próximo** (*"Compareceu o supervisor e os agentes"*).
2. **Expressões Partitivas e Porcentagens**:
   - **Partitivos** (*a maioria de, grande parte de, metade de + nome plural*): o verbo pode ficar no **singular** (concordando com o núcleo partitivo) ou ir ao **plural** (concordando com o especificador plural): *"A maioria dos moradores colaborou / colaboraram"*.
   - **Porcentagens**: sem especificador, concorda com o número (*"1% faltou"*, *"25% compareceram"*). Com especificador (*"1% dos imóveis..."*, *"25% da área..."*), admite concordância com o número ou com o especificador; porém, se o percentual vier determinado por artigo/pronome anteposto (*"**Os** 25% da equipe **compareceram**"*), o determinante fixa a concordância com o numeral plural.
3. **Verbos *Ser, Dar, Bater e Soar* nas Horas, Datas e Distâncias**:
   - **Ser** (impessoal em horas, datas e distâncias): concorda com o numeral do predicativo (*"É uma hora"*, *"São duas horas"*, *"Da base ao distrito são doze quilômetros"*, *"Hoje são 15 de março"* ou *"Hoje é dia 15 de março"*).
   - **Dar, Bater e Soar**: se não houver a palavra *relógio/sino* como sujeito, concordam com o número de horas (*"Deram dez horas no relógio da praça"*); se *o relógio* for o sujeito, ficam no singular (*"O relógio deu dez horas"*).
4. **Adjetivo com Dois ou Mais Substantivos de Gêneros Diferentes**:
   - **Adjetivo anteposto (adjunto adnominal)**: concorda, em regra, com o substantivo **mais próximo** (*"Escolheu **ótimo** local e época"* / *"Escolheu **ótima** época e local"*).
   - **Adjetivo posposto (adjunto adnominal)**: admite concordar com o **mais próximo** (*"Visitou galpão e sala **arejada**"* ) ou ir para o **masculino plural** (*"Visitou galpão e sala **arejados**"*). Se funcionar como **predicativo**, vai obrigatoriamente para o plural (*"O galpão e a sala estavam **arejados**"*).
5. **Paradigma de *Quite / Quites***: *quite* é adjetivo uniforme quanto ao gênero, mas **varia em número** (*"A servidora está **quite** com a obrigação"* / *"As servidoras estão **quites** com as obrigações"*).`;

  appendBlockContent(
    l.blocks[2],
    '<!-- AUDITORIA:POR10 -->',
    mdPor10,
    '- Sujeito composto posposto admite plural ou concordância com o núcleo mais próximo.\n- Adjetivo posposto a substantivos de gêneros distintos: masculino plural ou mais próximo; anteposto: mais próximo.\n- Quite varia em número (ele/ela está quite; eles/elas estão quites).\n- Horas: "Deram dez horas no relógio" vs. "O relógio deu dez horas".'
  );
  addQuestionOnce(
    l.blocks[2],
    'por_10-autoral-1',
    '(Autoral — Porcentagens, Horas e Paradigma de "Quite") Assinale a alternativa em que a concordância verbal e nominal respeita integralmente a norma-padrão:',
    [
      'Já deram oito horas no relógio da unidade, os servidores estão quites com o treinamento e 1% dos relatórios apresentou rasura.',
      'Já deu oito horas no relógio da unidade, as servidoras estão quitesas com o treinamento e 1% dos relatórios apresentaram-se anexo.',
      'Já deram oito horas o relógio da unidade, os servidores estão quite com o treinamento e devem haver soluções.',
      'São uma hora da tarde, a equipe está quites com o cronograma e houveram reuniões.',
    ],
    0,
    'Gabarito: A. Em "deram oito horas no relógio", "oito horas" é sujeito (já que "no relógio" está preposicionado); "quites" concorda em número com "os servidores"; e em "1% dos relatórios apresentou (ou apresentaram)", o singular concorda regularmente com o numeral 1%.'
  );
  addQuestionOnce(
    l.blocks[2],
    'por_10-autoral-2',
    '(Autoral — Adjetivo Anteposto/Posposto e Sujeito Composto Posposto) Analise as construções: I. "Encontrou-se no arquivo ___ documentação e relatório." / II. "No turno da manhã ___ o coordenador e os supervisores." Assinale a alternativa que preenche corretamente as lacunas:',
    [
      'antiga — compareceu (ou compareceram)',
      'antigos — compareceram apenas',
      'antigo — houveram',
      'antigas — existiu',
    ],
    0,
    'Gabarito: A. Em I, o adjetivo anteposto na função de adjunto adnominal concorda com o núcleo mais próximo ("antiga documentação e relatório"). Em II, com o sujeito composto posposto ao verbo ("o coordenador e os supervisores"), a norma-padrão admite tanto a concordância atrativa no singular ("compareceu") quanto a lógica no plural ("compareceram").'
  );
}

// --- por_11: Regência verbal e nominal ---
{
  const l = getLesson('por_11');
  l.blocks[1].flashcards[2].front = l.blocks[1].flashcards[2].f =
    'Por que não há crase em "O servidor obedeceu a normas técnicas"?';
  l.blocks[1].flashcards[2].back = l.blocks[1].flashcards[2].b =
    'O verbo obedecer é transitivo indireto e exige a preposição "a", mas o substantivo plural "normas" foi empregado em sentido genérico, sem artigo definido "as". Havendo apenas a preposição "a" diante de palavra no plural, não ocorre fusão (crase).';
  const mdPor11 = `
### Quadro Sistemático de Regência Nominal e Distinções de Regência Verbal
1. **Regência Nominal (Substantivos, Adjetivos e Advérbios + Preposição)**:
   - **Acessível** *a*; **Acostumado** *a / com*; **Afável** *com / para com*; **Alheio** *a*; **Ansioso** *por / para / de*; **Apto** *a / para*; **Aversão** *a / por*; **Benéfico** *a*; **Capacidade** *de / para*; **Compatível** *com*; **Contemporâneo** *a / de*; **Contíguo** *a*; **Desfavorável** *a*; **Escasso** *de*; **Fiel** *a*; **Grato** *a*; **Hábil** *em*; **Imune** *a / de*; **Incompatível** *com*; **Indeciso** *em*; **Inerente** *a*; **Leal** *a*; **Necessário** *a*; **Nocivo** *a*; **Obediência** *a*; **Paralelo** *a*; **Passível** *de*; **Preferência** *a / por*; **Propenso** *a*; **Próximo** *a / de*; **Respeito** *a / com / por / para com*; **Sensível** *a*; **Sito** *em*; **Suspeito** *de*.
   - **Proibição de Complemento Único para Regências Diferentes**: Se dois nomes ou verbos exigem preposições distintas, não devem compartilhar o mesmo complemento sem ajuste (*"O agente declarou obediência **às** normas e zelo **por elas**"* — e não *"obediência e zelo às normas"*, pois tem-se *zelo por*).
2. **Pronomes Relativos + Preposição (*Onde, Aonde, De onde, Por onde*)**:
   - A escolha não depende apenas da ideia vaga de "movimento", mas da **preposição exigida pelo verbo ou nome da oração subordinada**:
     - *Morar / residir / estar **em*** → **onde / em que** (*"O bairro **onde** trabalhamos"*).
     - *Ir / chegar / retornar **a*** → **aonde / a que** (*"O distrito **aonde** a equipe retornou"*).
     - *Sair / provir / voltar **de*** → **de onde** (*"A localidade **de onde** provieram as amostras"*, mesmo havendo deslocamento!).
     - *Passar / transitar **por*** → **por onde** (*"A trilha **por onde** passaram"*).`;

  appendBlockContent(
    l.blocks[2],
    '<!-- AUDITORIA:POR11 -->',
    mdPor11,
    '- Regência nominal exige conferir a preposição específica do nome (inerente a, passível de, compatível com, aversão a/por).\n- Relativos de lugar dependem da preposição pedida pelo verbo: em → onde; a → aonde; de → de onde; por → por onde.'
  );
  addQuestionOnce(
    l.blocks[2],
    'por_11-autoral-1',
    '(Autoral — Regência Nominal em Contexto) Assinale a alternativa em que a regência nominal está inteiramente de acordo com a norma-padrão:',
    [
      'A medida adotada é compatível com o protocolo, inerente às atribuições do cargo e benéfica à população.',
      'A medida adotada é compatível ao protocolo, inerente com as atribuições do cargo e benéfica pela população.',
      'O servidor mostrou-se alheio com as normas, passível à punição e apto em coordenar a equipe.',
      'O procedimento é imune contra falhas, contíguo de terrenos baldios e acessível por todos.',
    ],
    0,
    'Gabarito: A. "Compatível" rege "com"; "inerente" rege "a" (inerente a + as = às); e "benéfica" rege "a" (benéfica a + a = à). Em B, C e D há troca indevida das preposições exigidas por "compatível com", "alheio a", "passível de", "apto a/para", "contíguo a" e "acessível a".'
  );
  addQuestionOnce(
    l.blocks[2],
    'por_11-autoral-2',
    '(Autoral — Regência com Relativos: Onde, Aonde, De onde) Assinale a alternativa que preenche corretamente as lacunas de: "O posto central ___ provieram os insumos, o distrito ___ a equipe se dirigiu pela manhã e a sala ___ permanecem arquivados os mapas passaram por vistoria."',
    [
      'de onde — aonde — onde',
      'aonde — onde — de onde',
      'onde — de onde — aonde',
      'aonde — aonde — onde',
    ],
    0,
    'Gabarito: A. Quem provém, provém DE algum lugar ("de onde provieram"); quem se dirige, dirige-se A algum lugar ("aonde a equipe se dirigiu"); e quem permanece arquivado, permanece EM algum lugar ("onde permanecem").'
  );
}

// --- por_12: Crase ---
{
  const l = getLesson('por_12');
  const mdPor12 = `
### Condições Estruturais da Crase: Pronomes Possessivos, Demonstrativos e Paralelismo
1. **Pronomes Possessivos Femininos (*minha, tua, sua, nossa, vossa*)**:
   - **Possessivo Adjetivo no Singular** (acompanhando substantivo feminino expresso): a crase é **facultativa**, porque o artigo definido antes do possessivo adjetivo é facultativo (*"Refiro-me **a** sua equipe"* = apenas preposição / *"Refiro-me **à** sua equipe"* = preposição + artigo).
   - **Possessivo Adjetivo no Plural**: se usado *"a suas equipes"* (sem artigo), não há crase; se usado *"às suas equipes"* (com artigo plural *"as"*), a crase é **obrigatória**.
   - **Possessivo Substantivo** (quando substitui um substantivo já citado, sem nome expresso depois): o artigo é obrigatório, tornando a crase **obrigatória** (*"Não me refiro à equipe do setor norte, mas **à sua**"*).
2. **Demonstrativos *Aquele, Aquela, Aquilo***: A crase ocorre pela fusão da preposição **a** com a vogal inicial **a-** do demonstrativo, independentemente do gênero do substantivo que o acompanha (*"Entregou o laudo **àquele** supervisor"*).
3. **Topônimos e as palavras *Casa* e *Terra***:
   - *Casa* (no sentido de próprio lar/domicílio, sem especificador) e *terra* (no sentido de solo firme em oposição a bordo) não admitem artigo: *"Voltou **a** casa cedo"*, *"Os tripulantes desceram **a** terra"*. Quando especificadas, recebem artigo e crase: *"Voltou **à** casa dos pais"*, *"Retornou **à** terra natal"*.`;

  appendBlockContent(
    l.blocks[1],
    '<!-- AUDITORIA:POR12 -->',
    mdPor12,
    '- Possessivo adjetivo feminino singular (a/à sua equipe): crase facultativa; possessivo substantivo (à sua): crase obrigatória.\n- Diante de plural: "a normas" (só preposição, sem crase) vs. "às normas" (preposição + artigo, crase obrigatória).'
  );
  addQuestionOnce(
    l.blocks[1],
    'por_12-autoral-1',
    '(Autoral — Possessivos Adjetivos vs. Substantivos e Plural) Compare: I. "Dirigiu o pedido ___ sua coordenadora." / II. "Não me refiro à meta do mês passado, mas ___ nossa." / III. "O relatório fez menção ___ diretrizes técnicas." O emprego do acento grave é, respectivamente:',
    [
      'facultativo em I (a/à), obrigatório em II (à) e proibido em III caso se empregue apenas "a" (ou obrigatório caso se empregue "às").',
      'obrigatório nos três casos, independentemente da presença de artigo.',
      'proibido em I e II por haver pronome possessivo, e facultativo no plural sem "s" em III.',
      'facultativo nos três casos.',
    ],
    0,
    'Gabarito: A. Em I, "sua" é pronome possessivo adjetivo feminino singular (acompanha "coordenadora"), tornando facultativo o artigo e a crase ("a sua" ou "à sua"); em II, "nossa" é pronome possessivo substantivo (retoma "meta" elidida), exigindo o artigo ("à nossa"); em III, diante de plural, ou se usa apenas a preposição "a" sem crase, ou "às" com crase obrigatória.'
  );
  addQuestionOnce(
    l.blocks[1],
    'por_12-autoral-2',
    '(Autoral — Paralelismo e Uso de "Casa/Terra") Assinale a alternativa em que o emprego do sinal indicativo de crase está integralmente correto:',
    [
      'O agente retornou a casa após o expediente de segunda a sexta-feira, mas no sábado foi à casa da avó.',
      'O agente retornou à casa após o expediente de segunda à sexta-feira, mas no sábado foi a casa da avó.',
      'O atendimento funcionará de 8h às 12h para orientar à todos os moradores.',
      'A equipe ficou frente à frente com o problema e reportou-o à Vossa Senhoria.',
    ],
    0,
    'Gabarito: A. "Casa" sem especificador (próprio lar) não recebe artigo ("retornou a casa"); "de segunda a sexta-feira" mantém paralelismo sem artigo; e "à casa da avó" recebe crase porque "casa" está especificada. Em C falta paralelismo ("das 8h às 12h" ou "de 8h a 12h") e "todos" é masculino; em D há palavras repetidas ("frente a frente") e pronome de tratamento ("a Vossa Senhoria").'
  );
}

// --- por_13: Colocação pronominal ---
{
  const l = getLesson('por_13');
  if (l.mindMap?.branches?.[2]?.nodes?.[0]) {
    l.mindMap.branches[2].nodes[0].detail =
      'Pausa/vírgula delimita o alcance de palavras anteriores; avaliar a estrutura da oração seguinte e se há sujeito ou fator de próclise próprio.';
  }
  l.blocks[0].flashcards[1].back = l.blocks[0].flashcards[1].b =
    'No início do período formal, sem palavra atrativa, emprega-se a mesóclise ("Realizar-se-á a vistoria"). Se houver palavra atrativa ("Não se realizará") ou sujeito expresso anteposto na prosa contemporânea ("A vistoria se realizará"), admite-se a próclise; a ênclise ao futuro simples é rejeitada pela norma-padrão.';
  l.blocks[2].flashcards[0].back = l.blocks[2].flashcards[0].b =
    'A restrição recai sobre a ênclise às formas simples do Futuro do Presente e do Futuro do Pretérito do Indicativo (e ao particípio). Nas locuções com infinitivo ou gerúndio, o pronome pode pospor-se à forma nominal.';

  const mdPor13 = `
### Síntese das Posições nas Locuções Verbais e no Infinitivo Preposicionado
1. **Auxiliar + Infinitivo ou Gerúndio**:
   - Sem fator de próclise antes da locução: *"Quero **explicar-lhe**"* / *"Quero-**lhe** explicar"* / *"Quero **lhe** explicar"*.
   - Com palavra atrativa antes do auxiliar (*não, nunca, já, que*): o pronome antecede o auxiliar (**próclise ao auxiliar**: *"Não **lhe** quero explicar"*) ou pospõe-se ao verbo principal (**ênclise ao infinitivo/gerúndio**: *"Não quero **explicar-lhe**"*). No português brasileiro culto, ocorre também a posição medial sem hífen.
2. **Auxiliar + Particípio**:
   - O particípio **jamais admite ênclise**. Portanto, o pronome coloca-se proclítico ou enclítico ao verbo auxiliar (conforme haja ou não palavra atrativa): *"O documento **havia-se** extraviado"* / *"Não **se** havia extraviado"* (nunca *"havia extraviado-se"*).
3. **Preposição *Para* + Infinitivo**: mesmo precedido de *não*, o infinitivo regido pela preposição *para* admite tanto a próclise quanto a ênclise (*"Para não **o** incomodar"* ou *"Para não **incomodá-lo**"*).`;

  appendBlockContent(
    l.blocks[2],
    '<!-- AUDITORIA:POR13 -->',
    mdPor13,
    '- Particípio nunca recebe ênclise: posicionar o pronome junto ao auxiliar.\n- Com "para + não + infinitivo", tanto próclise quanto ênclise são abonadas pela norma-padrão.'
  );
  addQuestionOnce(
    l.blocks[2],
    'por_13-autoral-1',
    '(Autoral — Locuções Verbais com Infinitivo e Particípio) Assinale a alternativa em que a colocação pronominal na locução verbal respeita integralmente a norma-padrão:',
    [
      'Os relatórios não tinham sido entregues a tempo, mas a equipe já os havia conferido.',
      'Os relatórios tinham extraviado-se durante o transporte para a regional.',
      'Nunca haviam avisado-nos sobre a mudança do horário da reunião.',
      'A coordenação tinha orientado-lhes sobre o preenchimento das fichas.',
    ],
    0,
    'Gabarito: A. Diante do advérbio "já", o pronome oblíquo "os" posiciona-se proclítico ao verbo auxiliar "havia" ("já os havia conferido"). Nas alternativas B, C e D houve ênclise ao particípio ("extraviado-se", "avisado-nos", "orientado-lhes"), construção rejeitada pela norma-padrão.'
  );
  addQuestionOnce(
    l.blocks[2],
    'por_13-autoral-2',
    '(Autoral — Alcance da Atração e Infinitivo Preposicionado) Analise as frases: I. "Passado o período chuvoso, iniciaram-se os mutirões de limpeza." / II. "A supervisora revisou o texto para não o comprometer (ou: para não comprometê-lo)." Sobre a colocação pronominal em I e II:',
    [
      'Ambas estão corretas: em I, a oração reduzida anteposta isolada por vírgula não exerce atração sobre o verbo principal; em II, o infinitivo regido por "para" admite próclise ou ênclise mesmo com "não".',
      'Ambas estão incorretas, pois qualquer palavra antes do verbo obriga à próclise e o advérbio "não" proíbe "comprometê-lo".',
      'Apenas I está correta, pois o infinitivo jamais admite ênclise.',
      'Apenas II está correta, pois em I deveria ocorrer mesóclise ("iniciar-se-iam").',
    ],
    0,
    'Gabarito: A. Em I, após a pausa da oração reduzida anteposta ("Passado o período chuvoso,"), emprega-se regularmente a ênclise ("iniciaram-se"). Em II, com "para + não + infinitivo", os manuais normativos abonam tanto "para não o comprometer" quanto "para não comprometê-lo".'
  );
}

// --- por_14: Estrutura da oração e do período ---
{
  const l = getLesson('por_14');
  for (const b of l.blocks) {
    for (const k of ['modoA', 'modoB', 'modoA_markdown', 'modoB_markdown']) {
      if (typeof b[k] === 'string') {
        b[k] = b[k]
          .split('Se ligar a adjetivo ou advérbio, é SEMPRE complemento nominal')
          .join('Se o termo preposicionado completar o sentido exigido por adjetivo ou advérbio, é complemento nominal (distinguir de modificadores/adjuntos adverbiais)')
          .split('concordam no plural com seu sujeito')
          .join('concordam no singular ou no plural com seu sujeito');
      }
    }
  }
  const mdPor14 = `
### Termos da Oração (Sujeito, Predicado, Complementos e Acessórios) e Orações Reduzidas
1. **Classificação Completa do Sujeito**:
   - **Simples**: um único núcleo (*"A **equipe** chegou"*).
   - **Composto**: dois ou mais núcleos (*"O **supervisor** e a **agente** chegaram"*).
   - **Desinencial (Oculto / Elíptico)**: não expresso na oração, mas determinado pela desinência verbal ou pelo contexto imediato (*"**Inspecionamos** os quarteirões"* → sujeito *nós*).
   - **Indeterminado**: (a) verbo na 3ª pessoa do plural sem referente anterior (*"**Bateram** à porta"*); ou (b) verbo na 3ª pessoa do singular (VI, VTI ou VL) + índice de indeterminação do sujeito **se** (*"**Precisa-se** de voluntários"*).
   - **Oração sem Sujeito (Verbo Impessoal)**: *haver* no sentido de existir/ocorrer, *fazer/haver* indicando tempo decorrido e verbos de fenômenos meteorológicos em sentido literal (*"**Havia** muitos processos"*, *"**Choveu** ontem"*).
2. **Os 3 Tipos de Predicado**:
   - **Predicado Verbal**: núcleo é um verbo significativo (VTD, VTI, VTDI ou VI), sem predicativo (*"O agente **vistoriou** o imóvel"*).
   - **Predicado Nominal**: verbo de ligação (*ser, estar, permanecer, ficar, continuar, parecer, tornar-se*) + **predicativo do sujeito** como núcleo (*"O imóvel **permaneceu limpo**"*).
   - **Predicado Verbo-Nominal**: possui dois núcleos — um verbo significativo (ação/processo) + um predicativo (do sujeito ou do objeto): *"Os agentes **retornaram cansados**"* (verbo intransitivo *retornaram* + predicativo do sujeito *cansados*); *"A comissão **julgou procedente** o recurso"* (VTD *julgou* + predicativo do objeto *procedente*).
3. **Aposto vs. Vocativo**:
   - **Aposto**: termo nominal que explica, especifica, resume ou enumera outro nome (*"Porto Velho, **capital de Rondônia**, possui área territorial extensa"*; *"A meta da semana — **visitar cem imóveis** — foi cumprida"*: aposto oracional).
   - **Vocativo**: termo independente que interpela/chama o interlocutor, sempre isolado por pontuação (*"**Moradores**, mantenham os reservatórios vedados"*).
4. **Orações Subordinadas Reduzidas (Infinitivo, Gerúndio e Particípio)**:
   - Não são introduzidas por conjunção/pronome relativo e apresentam o verbo numa das formas nominais. Para classificá-las, desenvolva-as com conectivo: *"É fundamental **conferir os dados**"* (= *que se confiram os dados* → Subordinada Substantiva Subjetiva Reduzida de Infinitivo); *"Terminada a reunião, saíram"* (= *Quando terminou a reunião* → Subordinada Adverbial Temporal Reduzida de Particípio).`;

  appendBlockContent(
    l.blocks[2],
    '<!-- AUDITORIA:POR14 -->',
    mdPor14,
    '- Predicado verbal (núcleo: verbo significativo), nominal (VL + predicativo do sujeito) e verbo-nominal (verbo significativo + predicativo).\n- Orações reduzidas (infinitivo, gerúndio, particípio): desenvolver com conectivo para identificar a função substantiva, adjetiva ou adverbial.'
  );
  addQuestionOnce(
    l.blocks[2],
    'por_14-autoral-1',
    '(Autoral — Tipos de Predicado e Função do Predicativo) Compare os períodos: I. "Os servidores permaneciam atentos durante a instrução." / II. "Os servidores concluíram atentos a vistoria do setor." / III. "A comissão considerou válido o formulário." Os predicados de I, II e III classificam-se, respectivamente, como:',
    [
      'nominal (com predicativo do sujeito), verbo-nominal (com predicativo do sujeito) e verbo-nominal (com predicativo do objeto).',
      'verbal, nominal e verbal.',
      'verbo-nominal, verbal e nominal.',
      'nominal nos três períodos, pois todos contêm adjetivos.',
    ],
    0,
    'Gabarito: A. Em I, "permaneciam" é verbo de ligação e "atentos" é predicativo do sujeito (predicado nominal). Em II, "concluíram" é verbo significativo (VTD) e "atentos" caracteriza o sujeito no momento da ação (predicado verbo-nominal com predicativo do sujeito). Em III, "considerou" é VTD e "válido" é predicativo do objeto "o formulário" (predicado verbo-nominal).'
  );
  addQuestionOnce(
    l.blocks[2],
    'por_14-autoral-2',
    '(Autoral — Orações Reduzidas e Complemento Nominal vs. Adjunto Adnominal) No período "Concluída a leitura do relatório pelo supervisor, ficou evidente a necessidade de revisão dos anexos", assinale a análise sintática correta:',
    [
      '"Concluída a leitura..." é oração subordinada adverbial temporal reduzida de particípio; "do relatório" e "de revisão" são complementos nominais.',
      '"Concluída a leitura..." é oração coordenada sindética conclusiva; "do relatório" é sujeito paciente.',
      '"de revisão" é adjunto adnominal restritivo, pois "necessidade" é verbo transitivo indireto.',
      '"pelo supervisor" é vocativo isolado por vírgula.',
    ],
    0,
    'Gabarito: A. "Concluída a leitura..." equivale a "Quando foi concluída a leitura..." (adverbial temporal reduzida de particípio). Tanto "do relatório" (alvo da leitura) quanto "de revisão" (complemento exigido pelo substantivo abstrato "necessidade") exercem função de complemento nominal.'
  );
}

// --- por_15: Acentuação gráfica ---
{
  const l = getLesson('por_15');
  const mdPor15 = `
### Acentuação de Formas Verbais com Pronomes Enclíticos, Monossílabos e Ditongos
1. **Formas Verbais com Pronomes Oblíquos (*-lo, -la, -los, -las*)**:
   - Na análise de acentuação de formas como *encontrá-lo, mantê-lo, compô-lo, distribuí-lo*, **desconsidera-se o pronome enclítico** e aplica-se a regra diretamente à forma verbal resultante:
     - *encontra-* → oxítona terminada em **-a** (*encontrá-lo*);
     - *mante-* → oxítona terminada em **-e** (*mantê-lo*);
     - *compo-* → oxítona terminada em **-o** (*compô-lo*) ou monossílabo tônico (*pô-lo, fá-lo, dá-lo*);
     - *distribui-* → o **i** forma hiato sozinho na sílaba (*dis-tri-bu-í-lo*), recebendo acento pela regra do hiato (enquanto *partir + o = parti-lo*, oxítona em *-i*, não leva acento).
2. **Paroxítonas Terminadas em Ditongo Crescente (*Proparoxítonas Aparentes*)**:
   - Vocábulos como *história, município, vigilância, série, água, mágoa* são classificados tradicionalmente como **paroxítonas terminadas em ditongo crescente**, admitindo também, segundo o Acordo Ortográfico (Base XI), a leitura como **proparoxítonas aparentes/eventuais**. Em ambas as interpretações, o acento gráfico é obrigatório e decorre da mesma base ortográfica.
3. **Ditongos Abertos (*éi, ói, éu*)**:
   - Perderam o acento apenas nas **palavras paroxítonas** (*ideia, assembleia, boia, heroico, paranoia*).
   - Continuam acentuados nas **oxítonas** e nos **monossílabos tônicos** (*herói, heróis, anéis, papéis, chapéu, céu, véu, dói*).`;

  appendBlockContent(
    l.blocks[1],
    '<!-- AUDITORIA:POR15 -->',
    mdPor15,
    '- Formas verbais com -lo/-la: analisar a forma verbal antes do hífen (encontrá-lo = oxítona em -a; distribuí-lo = hiato; parti-lo = oxítona em -i sem acento).\n- Ditongos abertos éi/ói perderam acento apenas nas paroxítonas; mantêm-se nas oxítonas e monossílabos.'
  );
  addQuestionOnce(
    l.blocks[1],
    'por_15-autoral-1',
    '(Autoral — Formas Enclíticas e Regras Distintas) Assinale a alternativa em que as três formas verbais pronominalizadas são acentuadas por regras distintas entre si (monossílabo tônico, oxítona e hiato, respectivamente):',
    [
      'pô-lo, encontrá-lo, substituí-lo.',
      'fá-lo, dá-lo, vê-lo.',
      'analisá-lo, recebê-lo, conferi-lo.',
      'distribuí-lo, instruí-lo, atraí-lo.',
    ],
    0,
    'Gabarito: A. Em "pô-lo", "pô-" é monossílabo tônico terminado em -o; em "encontrá-lo", "encontrá-" é oxítona terminada em -a; e em "substituí-lo", o "-í-" é a segunda vogal tônica de um hiato (subs-ti-tu-í-lo). Em C, "conferi-lo" sequer tem acento.'
  );
  addQuestionOnce(
    l.blocks[1],
    'por_15-autoral-2',
    '(Autoral — Paroxítonas, Oxítonas e Acentos Diferenciais) Assinale a alternativa em que todas as palavras estão grafadas de acordo com o Acordo Ortográfico vigente:',
    [
      'Os fiscais vêm conferir o formulário para pôr em prática a ideia discutida na assembleia.',
      'Os fiscais vêem conferir o formulário para por em prática a idéia discutida na assembléia.',
      'O agente pôde concluir ontem o relatório, mas hoje não pôde permanecer após o vôo.',
      'Eles mantém o estoque de insumos no pólo regional para heroicamente distribuí-los.',
    ],
    0,
    'Gabarito: A. "Vêm" (3ª pessoa do plural de vir) recebe circunflexo diferencial de número; "pôr" (verbo) recebe circunflexo diferencial em relação à preposição "por"; e "ideia" e "assembleia" não levam acento (ditongo aberto "ei" em paroxítona). B acentua vêem/idéia/assembléia; C usa "pôde" no presente e acentua "vôo"; D erra "mantém" no plural (correto: "mantêm") e acentua "pólo".'
  );
}

// --- por_16: Ortografia ---
{
  const l = getLesson('por_16');
  l.blocks[0].modoB = (l.blocks[0].modoB || '').replace(
    '<em>micro-ondas, anti-inflamatório, contra-ataque, inter-regional</em>',
    '<em>micro-ondas, anti-inflamatório, contra-ataque</em> (e consoantes iguais: <em>inter-regional, sub-bibliotecário</em>)'
  );
  if (l.mindMap?.deadlinesAndNumbers?.[2]) {
    l.mindMap.deadlinesAndNumbers[2].value = 'ÉI / ÓI';
    l.mindMap.deadlinesAndNumbers[2].label = 'Sem acento nas paroxítonas (ideia, heroico)';
  }
  if (l.mindMap?.branches?.[3]?.nodes?.[1]) {
    l.mindMap.branches[3].nodes[1] = {
      label: 'Iminente vs. Eminente',
      detail: 'Iminente = prestes a acontecer; Eminente = ilustre, elevado, notável.',
      badge: 'PARÔNIMOS',
    };
  }
  const mdPor16 = `
### Relações Som-Grafema (S/Z, X/CH, G/J, Ç/SS) e Convenções de Maiúsculas/Minúsculas
1. **Emprego de S e Z**:
   - Grafam-se com **S**: sufixos formadores de adjetivos pátrios/origem (**-ês, -esa**: *português, rondoniense*), sufixos **-oso/-osa** (*perigoso, chuvoso*), formas dos verbos **pôr e querer** (*pus, pusera, quis, quisesse*) e verbos derivados de nomes que já possuem **S** no radical (*análise → analisar*; *pesquisa → pesquisar*; *paralisia → paralisar*).
   - Grafam-se com **Z**: sufixos **-ez / -eza** formadores de substantivos abstratos derivados de adjetivos (*limpo → limpeza*; *rígido → rigidez*; *sensato → sensatez*) e verbos terminados em **-izar** cuja palavra primitiva **não possui S** no radical (*atual → atualizar*; *higiênico → higienizar*; *concreto → concretizar*).
2. **Emprego de X e CH**:
   - Grafam-se com **X**: normalmente após ditongo (*caixa, peixe, frouxo* — exceção: *recauchutar*), após a sílaba inicial **en-** (*enxada, enchente* é com **ch** porque deriva de *cheio*: *en + cheio → encher/enchente*; *enxergar, enxame, enxaqueca*) e após a sílaba inicial **me-** (*mexer, mexilhão* — exceção: *mecha*).
3. **Emprego de G e J**:
   - Grafam-se com **G**: substantivos terminados em **-agem, -igem, -ugem** (*viagem [substantivo], vertigem, ferrugem* — exceção: *pajem, lambujem*). Atenção: *viajem* com **J** é forma do Presente do Subjuntivo do verbo *viajar* (*"Espero que eles viajem em segurança"*).`;

  appendBlockContent(
    l.blocks[1],
    '<!-- AUDITORIA:POR16 -->',
    mdPor16,
    '- Sufixos -ez/-eza (de adjetivos: limpeza, rigidez) e -izar sem S no radical (atualizar, higienizar) usam Z; analisar e pesquisar mantêm o S do radical.\n- "A viagem" (substantivo) grafa-se com G; "que eles viajem" (verbo no subjuntivo) grafa-se com J.'
  );
  addQuestionOnce(
    l.blocks[1],
    'por_16-autoral-1',
    '(Autoral — Grafia de S/Z, G/J e X/CH) Assinale a alternativa em que todas as palavras estão grafadas corretamente segundo a ortografia oficial:',
    [
      'Ao analisar a pesquisa, a equipe recomendou higienizar o reservatório antes da enchente e antes que os técnicos viajem.',
      'Ao analizar a pesquiza, a equipe recomendou higienisar o reservatório antes da enxente e antes que os técnicos viagem.',
      'A paralização do sistema impediu a concretisação da viagem dos agentes que quizeram participar.',
      'A limpeza das caixas exigiu que eles puzessem o equipamento próximo à mexa de iluminação.',
    ],
    0,
    'Gabarito: A. "Analisar" e "pesquisa" mantêm o S do radical; "higienizar" recebe -izar com Z (radical sem S); "enchente" grafa-se com CH por derivar de "cheio"; e "viajem" (forma verbal no subjuntivo) grafa-se com J. Em B, C e D há erros em analizar/pesquiza/higienisar/enxente/viagem(verbo), paralização/concretisação/quizeram e puzessem/mexa.'
  );
  addQuestionOnce(
    l.blocks[1],
    'por_16-autoral-2',
    '(Autoral — Hífen com Prefixos e Consoantes) Assinale a alternativa que apresenta a justificativa ortográfica correta para o emprego ou ausência de hífen nos vocábulos "inter-regional", "sub-base", "coobrigação" e "anti-higiênico":',
    [
      'Em "inter-regional" e "sub-base" usa-se hífen porque o prefixo termina na mesma consoante com que se inicia o segundo elemento; em "coobrigação" o prefixo co- aglutina-se mesmo diante de o-; e em "anti-higiênico" usa-se hífen diante de h-.',
      'Todos os quatro vocábulos deveriam ser grafados com hífen pela regra geral das vogais idênticas.',
      'Em "inter-regional" ocorre encontro de duas vogais iguais; em "coobrigação" houve erro gráfico por ausência de hífen.',
      'O prefixo "sub-" jamais admite hífen no Acordo Ortográfico de 1990.',
    ],
    0,
    'Gabarito: A. Segundo a Base XVI do Acordo Ortográfico, prefixos terminados em -r ou -b levam hífen diante de palavra iniciada pela mesma consoante (inter-regional, sub-base) ou por h-; o prefixo "co-" aglutina-se em geral mesmo diante de "o" (coobrigação, coordenar, cooperar).'
  );
}

// --- por_17: Pontuação ---
{
  const l = getLesson('por_17');
  if (l.mindMap?.branches?.[1]?.nodes?.[1]) {
    l.mindMap.branches[1].nodes[1].detail =
      'Adjunto adverbial deslocado: quando longo ou para evitar ambiguidade, destaca-se por vírgula; se curto e sem risco de ambiguidade, a vírgula é facultativa.';
  }
  if (l.mindMap?.branches?.[2]?.nodes?.[1]) {
    l.mindMap.branches[2].nodes[1].label = 'Orações Explicativas vs. Adversativas';
    l.mindMap.branches[2].nodes[1].detail =
      'Adjetivas explicativas isolam-se por vírgulas (ou travessões/parênteses); conjunções adversativas (mas, porém, contudo) são antecedidas de vírgula (e, quando deslocadas no interior da oração, vêm entre vírgulas).';
  }
  addQuestionOnce(
    l.blocks[1],
    'por_17-autoral-1',
    '(Autoral — Ponto e Vírgula, Dois-Pontos e Conectivo Deslocado) Assinale a alternativa em que a pontuação do período está inteiramente de acordo com a norma-padrão:',
    [
      'Participaram da reunião três setores: a coordenação de campo, responsável pelas rotas; a equipe de laboratório, encarregada das lâminas; e o núcleo de estatística, que consolidou os dados.',
      'Participaram da reunião: três setores, a coordenação de campo; responsável pelas rotas, a equipe de laboratório e o núcleo de estatística.',
      'Os dados foram conferidos; porém não havia divergências: entre os lotes examinados.',
      'A equipe, concluiu o levantamento pela manhã; e entregou: os mapas à tarde.',
    ],
    0,
    'Gabarito: A. Os dois-pontos anunciam a enumeração explicativa dos "três setores", e o ponto e vírgula separa com clareza os itens enumerados que já contêm vírgulas internas (apostos explicativos).'
  );
  addQuestionOnce(
    l.blocks[1],
    'por_17-autoral-2',
    '(Autoral — Aspas, Interrogação Indireta e Intercalações) Assinale a alternativa cuja pontuação está correta e cuja justificativa descreve adequadamente o efeito dos sinais empregados:',
    [
      'Em: O coordenador perguntou se o termo "foco" havia sido empregado em sentido técnico —, a frase encerra-se com ponto final por ser interrogativa indireta, e as aspas destacam uma palavra tomada metalinguisticamente.',
      'Em: O coordenador perguntou, se o termo "foco" havia sido empregado? —, a vírgula é obrigatória entre o verbo e a oração substantiva objetiva direta.',
      'Em: Os agentes — durante a manhã, conferiram os registros —, o travessão único substitui o ponto final.',
      'As aspas têm como única função na língua portuguesa indicar ironia do autor.',
    ],
    0,
    'Gabarito: A. A pergunta indireta ("perguntou se...") tem entonação declarativa e encerra-se com ponto final; as aspas assinalam o uso metalinguístico do vocábulo "foco" mencionado como termo em análise.'
  );
}

// 4. Detailed Pedagogical & Conceptual Corrections in Raciocínio Lógico (rlm_1..rlm_8)

// --- rlm_1: Conjuntos numéricos, operações, decimais, módulo, primos, MDC e MMC ---
{
  const l = getLesson('rlm_1');
  const mdRlm1 = String.raw`
### Precisões Conceituais: Primalidade de 0 e 1, Dízimas Periódicas e Domínio de Raízes
1. **Primalidade de $0$, $1$ e $2$**:
   - Um número natural $p > 1$ é **primo** quando possui **exatamente dois divisores naturais distintos**: $1$ e o próprio $p$.
   - O número **$1$ não é primo nem composto** (possui apenas um divisor natural: o próprio $1$). O número **$0$ não é primo** (possui infinitos divisores não nulos, pois $0 \div k = 0$ para todo $k \neq 0$).
   - O número **$2$ é o menor número primo e o único primo par**.
2. **Fração Geratriz de Dízimas Periódicas (Racionais $\mathbb{Q}$)**:
   - **Dízima Periódica Simples**: o período começa logo após a vírgula. O numerador é o período e o denominador tem tantos noves quantos forem os algarismos do período: $0,454545\dots = \frac{45}{99} = \frac{5}{11}$.
   - **Dízima Periódica Composta**: há um antiperíodo (parte não periódica) após a vírgula antes do período. Regra algébrica: em $x = 0,2777\dots$, fazemos $100x - 10x = 27,777\dots - 2,777\dots \Rightarrow 90x = 25 \Rightarrow x = \frac{25}{90} = \frac{5}{18}$ (numerador: número até o fim do 1º período menos o antiperíodo; denominador: tantos 9 quantos os algarismos do período seguidos de tantos 0 quantos os do antiperíodo).
3. **Restrições de Domínio em $\mathbb{R}$ e Valor Absoluto**:
   - Não existe divisão por zero ($\frac{a}{0}$ é indefinido; $0^0$ é indeterminação).
   - Em $\mathbb{R}$, raízes de índice par ($\sqrt{x}, \sqrt[4]{x}$) exigem radicando não negativo ($x \ge 0$), e vale a identidade $\sqrt{x^2} = |x|$.`;

  appendBlockContent(
    l.blocks[2],
    '<!-- AUDITORIA:RLM1 -->',
    mdRlm1,
    '- 1 não é primo nem composto; 2 é o único primo par.\n- Dízima composta (ex.: 0,2777...): subtrair antiperíodo e dividir por 9 seguidos de 0 (25/90 = 5/18).\n- Identidade fundamental: MMC(a,b) × MDC(a,b) = a × b.'
  );
  addQuestionOnce(
    l.blocks[2],
    'rlm_1-autoral-1',
    '(Autoral — Dízima Periódica Composta e Primalidade) Seja a dízima periódica composta $x = 0,1666\\dots$ escrita na forma de fração irredutível $\\frac{a}{b}$. A respeito dos números naturais $a$ e $b$, é correto afirmar que:',
    [
      '$a = 1$ (que não é primo nem composto) e $b = 6$ (que possui 4 divisores naturais: 1, 2, 3 e 6).',
      '$a = 1$ (que é o menor número primo) e $b = 6$ (que é primo par).',
      '$a = 16$ e $b = 99$, sendo $\\text{MDC}(a,b) = 3$.',
      '$a = 15$ e $b = 90$, fração já irredutível cuja soma dos termos é 105.',
    ],
    0,
    'Gabarito: A. Para $x = 0,1666\\dots$, temos $100x - 10x = 16,666\\dots - 1,666\\dots \\Rightarrow 90x = 15 \\Rightarrow x = \\frac{15}{90} = \\frac{1}{6}$. Na forma irredutível, $a = 1$ (que possui apenas um divisor natural, não sendo primo nem composto) e $b = 6$ (composto, com $6 = 2^1 \\cdot 3^1 \\Rightarrow (1+1)(1+1) = 4$ divisores naturais).'
  );
  addQuestionOnce(
    l.blocks[2],
    'rlm_1-autoral-2',
    '(Autoral — Relação entre MMC e MDC) Dois lotes de insumos têm quantidades inteiras positivas $A$ e $B$. Sabe-se que $\\text{MDC}(A, B) = 12$, $\\text{MMC}(A, B) = 180$ e $A = 36$. Qual é o valor de $B$ e a soma $A + B$?',
    [
      '$B = 60$ e $A + B = 96$.',
      '$B = 45$ e $A + B = 81$.',
      '$B = 72$ e $A + B = 108$.',
      '$B = 36$ e $A + B = 72$.',
    ],
    0,
    'Gabarito: A. Pela propriedade fundamental $\\text{MMC}(A,B) \\cdot \\text{MDC}(A,B) = A \\cdot B$, temos $180 \\cdot 12 = 36 \\cdot B \\Rightarrow 2160 = 36B \\Rightarrow B = 60$. Logo, $A + B = 36 + 60 = 96$ (conferência: $\\text{MDC}(36,60)=12$ e $\\text{MMC}(36,60)=180$).'
  );
}

// --- rlm_2: Razões, proporções, regra de três e porcentagem ---
{
  const l = getLesson('rlm_2');
  l.blocks[3].title =
    'Bloco 2.4 — Verificação de Condições de Proporcionalidade, Taxas Combinadas (Torneiras/Equipes) e Comparação de Bases Percentuais';
  const mdRlm2 = String.raw`
### Condições de Existência da Proporcionalidade e Mudança de Base Percentual
1. **Quando NÃO aplicar Regra de Três Direta**: Duas grandezas só são diretamente proporcionais quando a razão $\frac{y}{x} = k$ permanece constante. Se houver **taxa fixa inicial** ($y = ax + b$ com $b \neq 0$) ou relação quadrática/cúbica (como a área de um círculo em função do raio, $A = \pi r^2$), dobrar $x$ **não** dobra $y$.
2. **Mudança de Base na Porcentagem (Aumento vs. Redução de Retorno)**:
   - Se um valor sobe $25\%$ (multiplica por $1,25 = \frac{5}{4}$), para voltar ao valor original ele **não** deve cair $25\%$, mas sim dividir por $1,25$ (multiplicar por $\frac{4}{5} = 0,80$), o que corresponde a uma redução de **$20\%$ sobre o novo valor**.`;

  appendBlockContent(
    l.blocks[3],
    '<!-- AUDITORIA:RLM2 -->',
    mdRlm2,
    '- Dobrar o raio quadruplica a área (não é proporção linear direta).\n- Para anular um aumento de 25% (× 5/4), aplica-se desconto de 20% (× 4/5) sobre o novo valor.'
  );
  addQuestionOnce(
    l.blocks[3],
    'rlm_2-autoral-1',
    '(Autoral — Mudança de Base Percentual) O consumo mensal de combustível de uma frota aumentou $25\\%$ no período chuvoso em relação ao mês anterior. Para que, no mês seguinte, o consumo retorne exatamente ao patamar original (anterior ao aumento), a redução percentual sobre o consumo do período chuvoso deverá ser de:',
    [
      '$20\\%$.',
      '$25\\%$.',
      '$15\\%$.',
      '$12,5\\%$.',
    ],
    0,
    'Gabarito: A. Adotando base inicial $100$, após aumento de $25\\%$ o consumo passa a ser $125$. Para retornar de $125$ para $100$, a redução necessária é de $25$ unidades sobre a nova base de $125$: $\\frac{25}{125} = \\frac{1}{5} = 0,20 = 20\\%$.'
  );
}

// --- rlm_3: Grandezas e medidas ---
{
  const l = getLesson('rlm_3');
  const mdRlm3 = String.raw`
### Síntese das 5 Grandezas do Edital: Quantidade, Tempo, Comprimento, Capacidade e Massa
1. **Unidades de Quantidade (Contagem e Agrupamentos)**: dúzia ($12$), grosa ($12$ dúzias $= 144$), dezena ($10$), centena ($100$), milheiro ($1.000$) e resma ($500$ folhas, equivalente a $20$ mãos de $25$ folhas).
2. **Tempo (Sistema Sexagesimal)**: $1\text{ h} = 60\text{ min} = 3.600\text{ s}$. Na conversão de horas decimais para horas e minutos, multiplica-se apenas a **parte decimal** por $60$: $2,75\text{ h} = 2\text{ h} + (0,75 \times 60)\text{ min} = 2\text{ h } 45\text{ min}$.
3. **Ponte Volume–Capacidade–Massa (Água Pura)**:
   - $1\text{ m}^3 = 1.000\text{ dm}^3 = 1.000\text{ L}$;
   - $1\text{ dm}^3 = 1\text{ L} = 1.000\text{ mL} = 1.000\text{ cm}^3$;
   - $1\text{ t} = 1.000\text{ kg}$; $1\text{ kg} = 1.000\text{ g}$; $1\text{ g} = 1.000\text{ mg}$.
   - *(Nota técnica: fórmulas geométricas de reservatórios nesta aula são modelos matemáticos de cálculo de volume; na rotina de saúde pública, qualquer tratamento químico segue estritamente as notas técnicas oficiais do Ministério da Saúde).*`;

  appendBlockContent(
    l.blocks[0],
    '<!-- AUDITORIA:RLM3 -->',
    mdRlm3,
    '- Quantidade: dúzia = 12; grosa = 144; resma = 500.\n- Tempo decimal: multiplicar a parte fracionária por 60 (0,75 h = 45 min).\n- Volume e capacidade: 1 m³ = 1.000 L; 1 dm³ = 1 L; 1 cm³ = 1 mL.'
  );
}

// --- rlm_4: Equações, sistemas, função do 1º grau e médias ---
{
  const l = getLesson('rlm_4');
  const mdRlm4 = String.raw`
### Classificação de Sistemas Lineares $2\times 2$ e Condição da Função do 1º Grau
1. **Função Afim e Função do 1º Grau ($f(x) = ax + b$)**:
   - Exige coeficientes reais $a, b \in \mathbb{R}$ com **$a \neq 0$** para ser função polinomial do 1º grau (se $a = 0$, tem-se a função constante $f(x) = b$, cujo gráfico é uma reta horizontal paralela ao eixo $x$).
   - **Raiz ou zero da função**: valor de $x$ que anula $f(x)$, dado por $ax + b = 0 \Rightarrow x = -\frac{b}{a}$.
   - **Crescimento**: se $a > 0$, a função é estritamente crescente; se $a < 0$, é estritamente decrescente.
2. **Sistemas Lineares $2\times 2$**:
   - **SPD (Sistema Possível e Determinado)**: possui uma única solução $(x,y)$ (retas concorrentes).
   - **SPI (Sistema Possível e Indeterminado)**: equações equivalentes, possuindo infinitas soluções (retas coincidentes).
   - **SI (Sistema Impossível)**: equações contraditórias (ex.: $x + y = 5$ e $2x + 2y = 14$), não possuindo solução (retas paralelas distintas).`;

  appendBlockContent(
    l.blocks[0],
    '<!-- AUDITORIA:RLM4 -->',
    mdRlm4,
    '- Função do 1º grau f(x) = ax + b exige a ≠ 0; raiz x = -b/a.\n- Sistema 2×2 pode ser SPD (solução única), SPI (infinitas soluções) ou SI (nenhuma solução).'
  );
}

// --- rlm_5: Lógica proposicional (eliminar duplicação no bloco 5) ---
{
  const l = getLesson('rlm_5');
  const b5 = l.blocks[5];
  b5.title =
    'Bloco 5.6 — Escopo de Quantificadores, Condição Suficiente vs. Necessária, Disjunção Exclusiva e Negação de Proposições Encadeadas';
  const mdRlm5B5 = `### Aprofundamento Dirigido: Quantificadores, Condição Necessária/Suficiente e Proposições Encadeadas

#### 1. Condição Suficiente vs. Condição Necessária em $p \\rightarrow q$
Na condicional **"Se $p$, então $q$"** ($p \\rightarrow q$):
- O antecedente **$p$ é condição suficiente** para $q$ (basta que $p$ ocorra para garantir que $q$ ocorre).
- O consequente **$q$ é condição necessária** para $p$ (sem $q$, é impossível ter $p$, o que explica a contrapositiva $\\neg q \\rightarrow \\neg p$).
- **Equivalências de linguagens de prova**:
  - *"Todo $A$ é $B$"* $\\equiv$ *"Se é $A$, então é $B$"*;
  - *"Somente se $q$, ocorre $p$"* $\\equiv p \\rightarrow q$;
  - *"$p$ é condição necessária para $r$"* $\\equiv r \\rightarrow p$ (atenção à ordem!).

#### 2. Disjunção Inclusiva ($p \\lor q$) vs. Disjunção Exclusiva ($p \\underline{\\lor} q$)
- **"Ou $p$ ou $q$" (exclusiva, $p \\underline{\\lor} q$)**: é verdadeira quando **exatamente uma** das proposições é verdadeira ($V,F$ ou $F,V$) e falsa quando ambas têm o mesmo valor lógico ($V,V$ ou $F,F$).
- **Equivalência com a bicondicional**: $p \\underline{\\lor} q \\equiv \\neg(p \\leftrightarrow q)$. Portanto, a **negação** de *"Ou $p$ ou $q$"* é *"$p$ se e somente se $q$"* ($p \\leftrightarrow q$).

#### 3. Negação de Quantificadores e de Proposições Compostas com Quantificadores
- $\\neg(\\forall x, P(x)) \\equiv \\exists x, \\neg P(x)$ (*"Nem todo $x$ é $P$"* ou *"Existe pelo menos um $x$ que não é $P$"*).
- $\\neg(\\exists x, P(x)) \\equiv \\forall x, \\neg P(x)$ (*"Nenhum $x$ é $P$"*).
- Quando um quantificador integra uma proposição composta como $(\\forall x, P(x)) \\lor q$, aplica-se a Lei de De Morgan à estrutura externa e nega-se o quantificador interno:
  $$\\neg\\big((\\forall x, P(x)) \\lor q\\big) \\equiv (\\exists x, \\neg P(x)) \\land \\neg q$$`;

  b5.modoA_markdown = mdRlm5B5;
  b5.modoA = renderMarkdownToHtml(mdRlm5B5);
  b5.modoB_markdown =
    '- Em p → q: p é condição suficiente para q; q é condição necessária para p.\n- Disjunção exclusiva (p ⊻ q) equivale a ¬(p ↔ q); sua negação é p ↔ q.\n- Negação de (∀x P(x) ∨ q) é (∃x ¬P(x)) ∧ ¬q.';
  b5.modoB = renderMarkdownToHtml(b5.modoB_markdown);
}

// --- rlm_6: Sequências de figuras, palavras e validade formal vs. verdade ---
{
  const l = getLesson('rlm_6');
  const mdRlm6 = `
### Metodologia para Sequências de Figuras e Palavras e Validade vs. Verdade
1. **Sequências de Figuras (Padrões Geométricos e Visuais)**:
   - Ao analisar uma sequência de figuras, decomponha independentemente quatro atributos: **(a) número de lados ou elementos internos** (ex.: triângulo = 3, quadrado = 4, pentágono = 5, hexágono = 6); **(b) sentido e ângulo de rotação** (ex.: giro de $90^\\circ$ no sentido horário a cada passo); **(c) preenchimento/cor** (alternância branco/preto/hachurado); e **(d) simetria ou posição de um marcador**.
   - Se o padrão for cíclico de período $T$, a figura da posição $N$ coincide com a figura da posição correspondente ao **resto da divisão de $N$ por $T$** (quando o resto é $0$, corresponde ao último elemento do ciclo, posição $T$).
2. **Sequências de Palavras**:
   - Observe: **(a) número de letras ou de sílabas**; **(b) letra inicial/final** (ex.: última letra de uma palavra é a inicial da seguinte); **(c) quantidade de vogais e consoantes**; ou **(d) categoria semântica**.
3. **Validade Formal vs. Verdade Material das Premissas**:
   - Um argumento dedutivo é **válido** quando a conclusão decorre necessariamente das premissas assumidas, ainda que as premissas sejam hipotéticas ou fictícias.`;

  appendBlockContent(
    l.blocks[4],
    '<!-- AUDITORIA:RLM6 -->',
    mdRlm6,
    '- Sequências de figuras: analisar separadamente quantidade de lados/elementos, rotação (90°/180°), preenchimento e período do ciclo.\n- Argumento válido preserva a forma lógica das premissas para a conclusão, sem depender de comprovação empírica externa das premissas.'
  );
}

// 5. Detailed Pedagogical & Conceptual Corrections in Conhecimentos Específicos (esp_1..10), Legislação (leg_1..7) & Atualidades (atu_1..6)

// --- esp_2: Synthesis of Portaria 2.436/2017 inside esp_2 + cross-reference to esp_5 ---
{
  const l = getLesson('esp_2');
  const mdEsp2 = `
### Síntese Articulada da Portaria GM/MS nº 2.436/2017 (PNAB) no Item 2 do Edital
O Item 2 de Conhecimentos Específicos do Edital nº 25/2026 agrupa **Lei nº 8.080/1990, Portaria Federal nº 2.436/2017 (PNAB) e Lei nº 8.142/1990**. Além do texto integral original de 21/09/2017 disponibilizado na **Aula 5 (` + '`esp_5`' + `)**, confira os pontos normativos de conexão direta com as Leis Orgânicas da Saúde:
1. **3 Princípios e 9 Diretrizes da Atenção Básica (Anexo da Portaria 2.436/2017)**:
   - **Princípios**: Universalidade, Equidade e Integralidade.
   - **Diretrizes**: Regionalização e Hierarquização; Territorialização; População Adscrita; Cuidado Centrado na Pessoa; Resolutividade; Longitudinalidade do Cuidado; Coordenação do Cuidado; Ordenação da Rede; e Participação da Comunidade.
2. **Integração obrigatória entre Atenção Básica e Vigilância em Saúde**: A Portaria 2.436/2017 preconiza a unificação territorial e o trabalho conjunto entre **ACS e ACE**, com identificação de situações de risco ambiental/sanitário, educação em saúde e planejamento integrado das ações de campo.`;

  appendBlockContent(
    l.blocks[5],
    '<!-- AUDITORIA:ESP2 -->',
    mdEsp2,
    '- A Portaria 2.436/2017 (PNAB) estabelece 3 princípios (Universalidade, Equidade, Integralidade) e 9 diretrizes, com texto integral original na Aula esp_5.'
  );
}

// --- esp_4: Differentiate Block 4 (Atribuições Comuns Art. 15 vs. Competências Específicas Arts. 16-19) ---
{
  const l = getLesson('esp_4');
  const b4 = l.blocks[4];
  b4.title =
    'Bloco 4.5 — Distinção Estrutural entre Atribuições Comuns (Art. 15) e Competências Específicas (Arts. 16 a 19 da Lei 8.080/1990) e Prevenção Quaternária';
  const mdEsp4B4 = `### Matriz Comparativa: Atribuições Comuns (Art. 15) vs. Competências por Esfera (Arts. 16 a 19 da Lei nº 8.080/1990)

#### 1. Como distinguir Atribuições Comuns (Art. 15) das Competências Específicas (Arts. 16, 17, 18 e 19)
Na Lei nº 8.080/1990, o **Art. 15** enumera os deveres que União, Estados, Distrito Federal e Municípios exercem **conjuntamente** em seu âmbito administrativo (definição de mecanismos de controle, administração de recursos orçamentários no fundo de saúde, elaboração de normas técnicas, elaboração da proposta orçamentária do SUS, organização de recursos humanos e implementação do Sistema Nacional de Sangue, Componentes e Derivados).

Já os **Arts. 16 a 19** separam o verbo diretor de cada ente federativo:
| Esfera Governamental | Verbos-Chave Predominantes | Competências Exclusivas / Típicas na Lei 8.080/1990 |
| :--- | :--- | :--- |
| **Direção Nacional (União — Art. 16)** | **Formular, avaliar, normatizar em caráter nacional, vigiar portos/aeroportos/fronteiras** | Formular e avaliar políticas nacionais (alimentação, vigilância epidemiológica e sanitária); definir e coordenar os sistemas de **redes integradas de assistência de alta complexidade**, de **laboratórios de saúde pública** e de vigilância; executar vigilância sanitária de **portos, aeroportos e fronteiras** (pelo princípio da complementaridade, pode ser executada por Estados/DF/Municípios). |
| **Direção Estadual (Estados — Art. 17)** | **Promover a descentralização para os Municípios, coordenar a rede estadual e suplementar ações** | Promover a descentralização dos serviços e ações para os Municípios; acompanhar, controlar e avaliar as **redes hierarquizadas** do SUS; prestar apoio técnico e financeiro aos Municípios e executar **supletivamente** ações e serviços; coordenar, em caráter complementar, a execução das vigilâncias e gerenciar **hemocentros** e laboratórios públicos estaduais. |
| **Direção Municipal (Municípios — Art. 18)** | **Planejar, organizar, controlar, avaliar, gerir e EXECUTAR diretamente os serviços públicos de saúde** | **Executar** serviços de vigilância epidemiológica, vigilância sanitária, alimentação e nutrição, saneamento básico e saúde do trabalhador; dar execução, no âmbito municipal, à política de insumos e equipamentos; celebrar contratos e convênios com entidades prestadoras privadas, bem como controlar e avaliar sua execução; normatizar **complementarmente** as ações e serviços públicos de saúde em seu âmbito de atuação. |
| **Distrito Federal (Art. 19)** | **Acumular competências estaduais e municipais** | Competem ao Distrito Federal, simultaneamente, as atribuições reservadas aos Estados e aos Municípios. |

#### 2. Prevenção Quaternária ($P_4$) e Síntese dos 5 Níveis de Leavell & Clark
Além dos três níveis clássicos desdobrados em cinco fases por Leavell & Clark (1º Promoção da Saúde e 2º Proteção Específica na **Prevenção Primária**; 3º Diagnóstico/Tratamento Precoce e 4º Limitação do Dano na **Prevenção Secundária**; 5º Reabilitação na **Prevenção Terciária**), a saúde coletiva contemporânea incorpora a **Prevenção Quaternária** (proposta por Marc Jamoulle): identificar pacientes ou populações em risco de **sobremedicalização ou intervenções excessivas/desnecessárias**, protegendo-os de novas intervenções invasivas e sugerindo alternativas eticamente aceitáveis (*primum non nocere*).`;

  b4.modoA_markdown = mdEsp4B4;
  b4.modoA = renderMarkdownToHtml(mdEsp4B4);
  b4.modoB_markdown =
    '- Art. 15: atribuições comuns às quatro esferas.\n- Art. 16 (União): formular/normatizar nacionalmente, alta complexidade, rede de laboratórios, portos/aeroportos/fronteiras.\n- Art. 17 (Estados): descentralizar para municípios, coordenar rede hierarquizada, atuar supletivamente.\n- Art. 18 (Municípios): gerir e executar diretamente vigilâncias, atenção básica e contratos locais.\n- Prevenção Quaternária: evitar iatrogenia e sobremedicalização.';
  b4.modoB = renderMarkdownToHtml(b4.modoB_markdown);
}

// --- esp_7: Contrast Federal (Lei 11.350) vs. Municipal (Anexo II Retificado Edital 25/2026) ACE attributions ---
{
  const l = getLesson('esp_7');
  const mdEsp7 = `
### Confronto Direto: Atribuições Municipais no Anexo II do Edital nº 25/2026 vs. Lei Federal nº 11.350/2006
1. **As 8 Atribuições Municipais do Cargo de ACE no Edital SEMUSA Porto Velho (Anexo II Retificado, p. 4)**:
   - Executar atividades de vigilância, prevenção e controle de doenças e promoção da saúde, desenvolvidas em conformidade com as diretrizes do SUS e sob supervisão do gestor municipal;
   - Realizar vistoria de imóveis (residenciais, comerciais, terrenos baldios e pontos estratégicos) para identificação e eliminação de focos e criadouros de vetores;
   - Orientar a comunidade quanto às medidas de prevenção e controle de endemias e zoonoses;
   - Realizar pesquisa larvária em imóveis para levantamento de índices (como LIRAa/LIA) e captura de vetores;
   - Executar, quando indicado e sob orientação técnica, ações de controle mecânico, biológico ou químico de vetores e roedores, utilizando corretamente os Equipamentos de Proteção Individual (EPIs);
   - Preencher boletins de campo, fichas de visita, mapas de reconhecimento geográfico e alimentar sistemas de informação de vigilância;
   - Participar de ações educativas, mobilização social e mutirões intersetoriais junto às equipes de Atenção Básica (ACS/eSF);
   - Comunicar imediatamente à supervisão e à unidade de saúde a ocorrência de casos suspeitos de agravos de notificação compulsória ou situações de risco ambiental/sanitário.
2. **Distinção em Prova**: Na **Lei Federal nº 11.350/2006** (com a redação da Lei nº 13.595/2018), as atribuições do ACE dividem-se sistematicamente em **típicas** (art. 4º, § 1º), **assistidas por profissional de nível superior** (art. 4º, § 2º, incisos I a V) e **compartilhadas com o ACS** (art. 4º-A).`;

  appendBlockContent(
    l.blocks[0],
    '<!-- AUDITORIA:ESP7 -->',
    mdEsp7,
    '- Distinguir as 8 atribuições sintéticas do cargo no Anexo II do Edital SEMUSA 2026 da classificação tripartite federal (art. 4º, §§ 1º e 2º e art. 4º-A da Lei 11.350/2006).'
  );
}

// --- leg_7: Fix Block 3 title to name Decreto 14.565/2017 (LAI) ---
{
  const l = getLesson('leg_7');
  l.blocks[3].title =
    'Bloco 7.4 — Texto Integral da Lei Federal nº 12.527/2011 (Arts. 1º a 47) e Textos de Referência da Lei Estadual RO nº 3.166/2013 (com a Lei 6.385/2026) e do Decreto Municipal PVH nº 14.565/2017 (LAI)';
}

// --- atu_3 e atu_4: Harmonize District Distinctions (Quadro de Vagas do Edital vs. Divisão Territorial) ---
{
  for (const id of ['atu_3', 'atu_4', 'atu_6']) {
    const l = getLesson(id);
    const mdDistritos = `
### Nota Técnica de Precisão Territorial: Distritos Administrativos vs. Localidades do Quadro de Vagas do Edital ACE nº 25/2026
Para evitar qualquer divergência entre fontes geográficas e o quadro do concurso, distinga sempre dois recortes:
1. **No Edital nº 25/2026 — SEMUSA Porto Velho (Retificação nº 01)**: As **140 vagas totais de ACE** estão distribuídas em **16 códigos de lotação (` + '`340 a 356`' + `, sendo o código 340 para Porto Velho — Zona Urbana com 96 vagas e 15 códigos distritais/rurais com 44 vagas)**: Jaci-Paraná (341), União Bandeirantes (342), Extrema (343), Nova Califórnia (344), Vista Alegre do Abunã (345), Fortaleza do Abunã (346), Abunã (347), Mutum-Paraná (348), Rio Pardo (349), Bom Futuro (350), Nova Mutum (351), São Carlos (352), Nazaré (353), Calama (354) e Demarcação (356).
2. **Classificação Logística e Geográfica**:
   - **Eixo da BR-364 / Ponta do Abunã e Entorno Terrestre**: Jaci-Paraná, Mutum-Paraná, Nova Mutum, Abunã, Fortaleza do Abunã, Vista Alegre do Abunã, Extrema, Nova Califórnia, União Bandeirantes, Rio Pardo e Bom Futuro.
   - **Baixo Madeira (Acesso Predominantemente Fluvial)**: São Carlos, Nazaré, Calama e Demarcação.`;
    appendBlockContent(
      l.blocks[l.blocks.length - 1],
      '<!-- AUDITORIA:DISTRITOS -->',
      mdDistritos,
      '- O Edital ACE 25/2026 contempla 1 código urbano (340: 96 vagas) e 15 localidades distritais (341 a 356: 44 vagas), totalizando 140 vagas.'
    );
  }
}

// Update lesson questionsCount and flashcardsCount across all 49 lessons
for (const l of data.lessons) {
  l.questionsCount = l.blocks.reduce((acc: number, b: any) => acc + (b.questions?.length || 0), 0);
  l.flashcardsCount = l.blocks.reduce((acc: number, b: any) => acc + (b.flashcards?.length || 0), 0);
}

// Write updated data/app_data.json, public/data/app_data.json, data/app_data.js, public/data/app_data.js
const jsonOut = JSON.stringify(data, null, 2) + '\n';
for (const p of ['data/app_data.json', 'public/data/app_data.json']) {
  fs.writeFileSync(p, jsonOut);
}
const jsOut = `window.APP_DATA = ${jsonOut.trimEnd()};\nwindow.LOCAL_APP_DATA = window.APP_DATA;\n`;
for (const p of ['data/app_data.js', 'public/data/app_data.js']) {
  fs.writeFileSync(p, jsOut);
}

console.log('Successfully updated all 49 lessons in data/app_data.json and static copies.');
