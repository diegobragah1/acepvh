import fs from 'node:fs';
import path from 'node:path';

const publicJsonPath = path.resolve(process.cwd(), 'public/data/app_data.json');
const rootJsonPath = path.resolve(process.cwd(), 'data/app_data.json');
const publicJsPath = path.resolve(process.cwd(), 'public/data/app_data.js');
const rootJsPath = path.resolve(process.cwd(), 'data/app_data.js');
const backupPath = path.resolve(process.cwd(), 'scripts/backup_before_recategorize_por_18.json');

if (!fs.existsSync(backupPath)) {
  fs.copyFileSync(publicJsonPath, backupPath);
  console.log('Created backup at:', backupPath);
}

const rawData = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
const oldLessons = rawData.lessons;

const byId = Object.fromEntries(oldLessons.map(l => [l.id, l]));
const clone = obj => JSON.parse(JSON.stringify(obj));

function makeBlock({ title, sourceRef, modoA, modoB, questions, flashcards }) {
  return { title, sourceRef, modoA, modoB, questions, flashcards };
}

function makeStandardMindMap(num, shortTitle, subtitle, b1, b2, b3, b4) {
  return {
    centralTitle: `${num}. ${shortTitle}`,
    centralSubtitle: subtitle,
    branches: [
      { title: b1.title, icon: b1.icon || '📘', color: 'teal', nodes: b1.nodes },
      { title: b2.title, icon: b2.icon || '⚖️', color: 'indigo', nodes: b2.nodes },
      { title: b3.title, icon: b3.icon || '🎯', color: 'amber', nodes: b3.nodes },
      { title: b4.title, icon: b4.icon || '✅', color: 'emerald', nodes: b4.nodes },
    ],
  };
}

// New blocks for each of the 18 Portuguese categories
const newBlock_POR1_CompreensaoInterpretacao = makeBlock({
  title: 'Bloco 1.3 — Matriz IBGP de Compreensão (Texto Explícito) vs. Interpretação (Inferência Implícita) e os 4 Distratores de Prova',
  sourceRef: 'Anexo IV — Língua Portuguesa (Item 1: Compreensão e interpretação de textos)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-teal-950/90 text-white border border-teal-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 1 de Língua Portuguesa</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Compreensão (No Texto) vs. Interpretação (Além do Texto)</h4>
    <p class="text-xs text-teal-100 mt-1">A banca IBGP diferencia rigorosamente os comandos de <strong>compreensão</strong> (localização de informação explícita/literal na superfície textual) dos comandos de <strong>interpretação</strong> (dedução lógica, pressupostos e subentendidos autorizados pelas pistas do texto).</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
      <div class="font-extrabold text-slate-900">1. Comandos de Compreensão vs. Interpretação</div>
      <p class="text-slate-700">• <strong>Compreensão (Explícito):</strong> "Segundo o texto...", "O autor afirma explicitamente que...", "De acordo com o 2º parágrafo...". A resposta é uma <strong>paráfrase fiel</strong> do trecho.<br>• <strong>Interpretação (Implícito):</strong> "Infere-se do texto...", "Depreende-se que...", "O texto permite concluir que...". Exige cruzar uma pista textual com uma dedução lógica necessária.</p>
    </div>
    <div class="p-3.5 rounded-xl bg-rose-50 border border-rose-200 space-y-1.5">
      <div class="font-extrabold text-rose-950">2. Os 4 Distratores (Erros) Clássicos da IBGP</div>
      <p class="text-slate-700">1) <strong>Extrapolação:</strong> vai além do que o texto autoriza (usa generalizações absolutas como "sempre", "jamais", "unicamente").<br>2) <strong>Redução/Restrição:</strong> toma um detalhe secundário como se fosse a tese central.<br>3) <strong>Contradição:</strong> afirma o oposto do texto.<br>4) <strong>Inversão de Causa e Consequência:</strong> troca o motivo pelo efeito.</p>
    </div>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Compreensão:</strong> Está escrito no texto ("Segundo o texto...").</li>
  <li><strong>Interpretação:</strong> Dedução lógica autorizada pelo texto ("Infere-se / Depreende-se...").</li>
  <li><strong>Cuidado com palavras absolutas nos distratores:</strong> "apenas", "exclusivamente", "nunca", "totalmente".</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Compreensão vs. Interpretação) Quando o enunciado de uma questão da banca IBGP utiliza o comando "Depreende-se corretamente da leitura do terceiro parágrafo que...", o examinador solicita que o candidato:',
      options: [
        'Transcreva literalmente uma frase explícita do terceiro parágrafo.',
        'Realize uma inferência lógica (interpretação) fundamentada nas pistas linguísticas do terceiro parágrafo.',
        'Apresente sua opinião pessoal sobre o tema, independentemente do posicionamento do autor.',
        'Identifique um erro gramatical cometido pelo autor no terceiro parágrafo.',
      ],
      ans: 1,
      comment: 'Verbos como "depreender-se", "inferir-se", "subentender-se" e "deduzir-se" exigem interpretação (leitura das entrelinhas ancorada nas pistas do texto), sem extrapolar.',
    },
    {
      q: '(IBGP — Pressuposto Linguístico) Na frase "O município de Porto Velho voltou a registrar queda nos casos de malária neste semestre", o uso da locução verbal "voltou a registrar" estabelece o pressuposto de que:',
      options: [
        'Nunca houve queda nos casos de malária anteriormente no município.',
        'Em algum momento anterior ao semestre atual, o município já havia registrado queda nos casos de malária.',
        'A malária foi totalmente erradicada da região amazônica.',
        'Os casos de malária aumentarão obrigatoriamente no próximo semestre.',
      ],
      ans: 1,
      comment: 'A locução "voltar a + infinitivo" funciona como marcador de pressuposto de repetição/retorno: só se "volta a registrar" algo que já havia ocorrido antes.',
    },
  ],
  flashcards: [
    { f: 'Qual a diferença entre Compreensão e Interpretação de texto?', b: 'Compreensão analisa o que está EXPLÍCITO na superfície do texto; Interpretação analisa o que está IMPLÍCITO (inferências, pressupostos e subentendidos).' },
    { f: 'O que é o distrator de Extrapolação em provas de interpretação?', b: 'É a alternativa que inventa fatos ou generaliza além dos limites autorizados pelo texto.' },
  ],
});

const newBlock_POR2_TipologiasGeneros = makeBlock({
  title: 'Bloco 2.1 — Tipologias Textuais (Narração, Descrição, Dissertação Expositiva/Argumentativa e Injunção) vs. Gêneros Textuais',
  sourceRef: 'Anexo IV — Língua Portuguesa (Item 2: Gêneros e tipos de texto)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-indigo-950/90 text-white border border-indigo-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 2 de Língua Portuguesa</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Diferença Definitiva entre Tipo Textual (5 Estruturas Fixas) e Gênero Textual (Infinitas Práticas Sociais)</h4>
    <p class="text-xs text-indigo-100 mt-1"><strong>Tipo Textual (Sequência Tipológica)</strong> é a estrutura linguística interna (são apenas 5: narrativo, descritivo, dissertativo-expositivo, dissertativo-argumentativo e injuntivo). <strong>Gênero Textual</strong> é o texto concreto que circula na sociedade (notícia, reportagem, crônica, editorial, bula, receita, edital, ofício, tirinha).</p>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left border-collapse text-xs border border-slate-300">
      <thead>
        <tr class="bg-slate-900 text-white">
          <th class="p-2.5 border border-slate-700">Tipo Textual (Estrutura)</th>
          <th class="p-2.5 border border-slate-700">Marcas Linguísticas Dominantes</th>
          <th class="p-2.5 border border-slate-700">Gêneros Textuais em que Predomina</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr class="bg-white">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">1. Narrativo</td>
          <td class="p-2.5 border border-slate-200">Enredo (situação inicial, conflito, clímax, desfecho), personagens, tempo, espaço e foco narrativo (1ª ou 3ª pessoa). Verbos de ação no <strong>pretérito perfeito</strong>.</td>
          <td class="p-2.5 border border-slate-200">Conto, crônica narrativa, fábula, romance, novela, notícia, relato pessoal.</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">2. Descritivo</td>
          <td class="p-2.5 border border-slate-200">Retrato verbal estático de ser, objeto ou cena. Predomínio de <strong>adjetivos</strong>, locuções adjetivas, verbos de ligação (ser, estar, parecer) e pretérito imperfeito.</td>
          <td class="p-2.5 border border-slate-200">Laudo de vistoria, cardápio, classificados, retrato falado, guia turístico.</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">3. Dissertativo-Expositivo</td>
          <td class="p-2.5 border border-slate-200">Apresenta conceitos, dados e informações de modo <strong>impessoal e neutro</strong> (sem tentar persuadir). Verbos no presente do indicativo.</td>
          <td class="p-2.5 border border-slate-200">Verbete de dicionário/enciclopédia, livro didático, notícia informativa, resumo acadêmico.</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">4. Dissertativo-Argumentativo</td>
          <td class="p-2.5 border border-slate-200">Defende uma <strong>tese (ponto de vista)</strong> por meio de argumentos e operadores argumentativos (portanto, todavia, visto que) para convencer o leitor.</td>
          <td class="p-2.5 border border-slate-200">Editorial, artigo de opinião, carta argumentativa, ensaio, resenha crítica, sermão.</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">5. Injuntivo (Instrucional)</td>
          <td class="p-2.5 border border-slate-200">Orienta, instrui ou ordena passo a passo como realizar uma ação. Predomínio de verbos no <strong>Imperativo</strong> ou Infinitivo impessoal.</td>
          <td class="p-2.5 border border-slate-200">Manual de campo do ACE, bula de remédio, receita culinária, edital de concurso, regulamento.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Tipo Textual (5):</strong> Narração, Descrição, Exposição, Argumentação e Injunção.</li>
  <li><strong>Gênero Textual (Infinitos):</strong> Crônica, Notícia, Reportagem, Editorial, Bula, Receita, Ofício.</li>
  <li><strong>Editorial vs. Notícia:</strong> Editorial é <strong>argumentativo</strong> (opinião do veículo sem assinatura individual); Notícia é <strong>expositiva/narrativa</strong> (relato impessoal de fato atual).</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Tipologia vs. Gênero Textual) Um cartaz da Secretaria Municipal de Saúde com os dizeres: "Tampe as caixas d\'água, limpe as calhas, coloque areia nos pratos de plantas e receba o Agente de Combate às Endemias!" apresenta predominância da sequência tipológica:',
      options: [
        'Narrativa, pois relata a história da dengue no município.',
        'Injuntiva (ou instrucional), marcada pelo emprego de verbos no modo imperativo para orientar o comportamento do cidadão.',
        'Descritiva, pois limita-se a caracterizar fisicamente o mosquito transmissor.',
        'Dissertativo-expositiva, pois não pretende influenciar a conduta do leitor.',
      ],
      ans: 1,
      comment: 'O uso de verbos no imperativo ("Tampe", "limpe", "coloque", "receba") orientando ações práticas caracteriza o tipo textual injuntivo (ou instrucional), muito comum no gênero campanha comunitária de saúde.',
    },
    {
      q: '(IBGP — Gêneros Jornalísticos) A principal diferença entre os gêneros textuais "Notícia" e "Editorial" reside no fato de que:',
      options: [
        'A notícia defende explicitamente a tese política do jornal, enquanto o editorial é estritamente imparcial.',
        'O editorial expressa o posicionamento institucional e opinativo do veículo de comunicação (predominância argumentativa), enquanto a notícia relata fatos de interesse público com objetividade e impessoalidade.',
        'O editorial é sempre escrito em versos líricos, enquanto a notícia é escrita em prosa.',
        'A notícia utiliza predominantemente verbos no imperativo, configurando um texto injuntivo.',
      ],
      ans: 1,
      comment: 'O editorial é um gênero jornalístico opinativo (dissertativo-argumentativo) que manifesta a opinião da empresa jornalística; já a notícia tem finalidade informativa e impessoal.',
    },
  ],
  flashcards: [
    { f: 'Qual a diferença entre Tipo Textual e Gênero Textual?', b: 'Tipo Textual é a estrutura teórica interna (5 tipos: narrativo, descritivo, expositivo, argumentativo, injuntivo). Gênero Textual é a realização concreta social (crônica, notícia, bula, edital).' },
    { f: 'Qual é a marca verbal clássica do texto Injuntivo?', b: 'O emprego de verbos no modo Imperativo (ou no Infinitivo) dando instruções, ordens ou conselhos.' },
  ],
});

const newBlock_POR3_SemanticaParonimos = makeBlock({
  title: 'Bloco 3.2 — Dicionário Definitivo de Parônimos, Homônimos, Hiperônimos e Polissemia Cobrados pela IBGP',
  sourceRef: 'Anexo IV — Língua Portuguesa (Item 3: Significação das palavras)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-teal-950/90 text-white border border-teal-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 3 de Língua Portuguesa — Semântica Lexical</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Os 12 Pares de Parônimos e Homônimos Mais Cobrados pela IBGP</h4>
    <p class="text-xs text-teal-100 mt-1">Memorize a tabela abaixo: a banca IBGP frequentemente troca um parônimo pelo outro em questões de reescrita e significação contextual.</p>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left border-collapse text-xs border border-slate-300">
      <thead>
        <tr class="bg-slate-900 text-white">
          <th class="p-2.5 border border-slate-700">Par Lexical</th>
          <th class="p-2.5 border border-slate-700">Significado Exato de Cada Termo</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">Ratificar vs. Retificar</td><td class="p-2.5 border border-slate-200"><strong>Ratificar</strong> = confirmar, validar | <strong>Retificar</strong> = corrigir, consertar (pense em "deixar reto").</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">Iminente vs. Eminente</td><td class="p-2.5 border border-slate-200"><strong>Iminente</strong> = prestes a acontecer (perigo iminente) | <strong>Eminente</strong> = ilustre, elevado, excelente.</td></tr>
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">Infringir vs. Infligir</td><td class="p-2.5 border border-slate-200"><strong>Infringir</strong> = violar, desrespeitar a lei (infração) | <strong>Infligir</strong> = aplicar pena, castigo ou derrota.</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">Mandado vs. Mandato</td><td class="p-2.5 border border-slate-200"><strong>Mandado</strong> = ordem judicial (mandado de segurança/busca) | <strong>Mandato</strong> = período de representação política/eleitoral.</td></tr>
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">Seção / Sessão / Cessão</td><td class="p-2.5 border border-slate-200"><strong>Seção</strong> = setor, repartição, divisão | <strong>Sessão</strong> = tempo de uma reunião/cinema | <strong>Cessão</strong> = ato de ceder/doar.</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">Discriminar vs. Descriminar</td><td class="p-2.5 border border-slate-200"><strong>Discriminar</strong> = diferenciar, distinguir, segregar | <strong>Descriminar</strong> = absolver, tirar a culpa/crime.</td></tr>
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">Auferir vs. Aferir</td><td class="p-2.5 border border-slate-200"><strong>Auferir</strong> = obter, colher lucro/vantagem | <strong>Aferir</strong> = medir, avaliar, conferir (aferir a pressão).</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">Flagrante vs. Fragrante</td><td class="p-2.5 border border-slate-200"><strong>Flagrante</strong> = evidente, no ato do delito | <strong>Fragrante</strong> = perfumado, cheiroso (fragrância).</td></tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Ratificar</strong> (confirmar) $\\ne$ <strong>Retificar</strong> (corrigir).</li>
  <li><strong>Iminente</strong> (imediato) $\\ne$ <strong>Eminente</strong> (ilustre).</li>
  <li><strong>Infringir</strong> (violar norma) $\\ne$ <strong>Infligir</strong> (aplicar pena).</li>
  <li><strong>Hiperônimo</strong> (sentido amplo: <em>Doença</em>) vs. <strong>Hipônimo</strong> (sentido específico: <em>Malária</em>).</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Significação das Palavras: Parônimos) Assinale a alternativa em que os vocábulos preenchem, correta e respectivamente, as lacunas da frase abaixo:\n"Diante do risco __________ de surto arboviral, o secretário decidiu __________ os dados incorretos do relatório anterior e __________ uma multa severa à empresa que __________ a norma sanitária."',
      options: [
        'eminente / ratificar / infringir / infligiu',
        'iminente / retificar / infligir / infringiu',
        'iminente / ratificar / infligir / infligiu',
        'eminente / retificar / infringir / infringiu',
      ],
      ans: 1,
      comment: 'Risco prestes a ocorrer = IMINENTE; corrigir dados incorretos = RETIFICAR; aplicar multa = INFLIGIR; violar a norma sanitária = INFRINGIU.',
    },
    {
      q: '(IBGP — Hiperonímia e Hiponímia) No trecho "O agente coletou exemplares de Aedes aegypti e encaminhou os insetos ao laboratório de entomologia", o vocábulo "insetos" retoma "Aedes aegypti" estabelecendo uma relação semântica de:',
      options: [
        'Antonímia.',
        'Paronímia.',
        'Hiperonímia (termo de sentido mais amplo/genérico).',
        'Homonímia homófona.',
      ],
      ans: 2,
      comment: '"Insetos" é um hiperônimo (classe mais abrangente) em relação ao hipônimo (termo específico) "Aedes aegypti".',
    },
  ],
  flashcards: [
    { f: 'Qual a diferença entre RATIFICAR e RETIFICAR?', b: 'Ratificar = confirmar/validar; Retificar = corrigir/consertar.' },
    { f: 'Qual a diferença entre INFRINGIR e INFLIGIR?', b: 'Infringir = violar uma lei/regra; Infligir = aplicar uma penalidade ou castigo.' },
    { f: 'Qual a diferença entre Hiperônimo e Hipônimo?', b: 'Hiperônimo é o termo geral/amplo (ex.: Arbovirose); Hipônimo é o termo específico (ex.: Dengue).' },
  ],
});

const newBlock_POR4_FigurasSintaxe = makeBlock({
  title: 'Bloco 4.1 — Guia Completo das Figuras de Sintaxe (ou Construção): Elipse, Zeugma, Hipérbato, Pleonasmo, Assíndeto, Polissíndeto, Anacoluto, Anáfora e Silepse',
  sourceRef: 'Anexo IV — Língua Portuguesa (Item 4: Figuras de Sintaxe)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-amber-950/90 text-white border border-amber-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 4 de Língua Portuguesa — Tópico Exclusivo do Edital</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">As 9 Figuras de Sintaxe (ou de Construção) Cobradas pela IBGP</h4>
    <p class="text-xs text-amber-100 mt-1">O Edital nº 25/2026 destaca <strong>Figuras de Sintaxe</strong> no Item 4 separadamente das Figuras de Linguagem (Item 5). Figuras de sintaxe ocorrem quando há alteração na estrutura gramatical padrão da oração (omissão, repetição, inversão ou concordância ideológica).</p>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left border-collapse text-xs border border-slate-300">
      <thead>
        <tr class="bg-slate-900 text-white">
          <th class="p-2.5 border border-slate-700">Figura de Sintaxe</th>
          <th class="p-2.5 border border-slate-700">Mecanismo Sintático</th>
          <th class="p-2.5 border border-slate-700">Exemplo Clássico de Prova</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">1. Elipse</td><td class="p-2.5 border border-slate-200">Omissão de um termo facilmente subentendido pelo contexto (que <strong>não</strong> foi citado antes).</td><td class="p-2.5 border border-slate-200">"Na varanda do imóvel, apenas dois vasos vazios." (omissão de <em>havia</em>).</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">2. Zeugma</td><td class="p-2.5 border border-slate-200">Tipo especial de elipse: omissão de um termo (geralmente verbo) <strong>já expresso anteriormente</strong> na frase (marcado por vírgula!).</td><td class="p-2.5 border border-slate-200">"A equipe A inspecionou o centro; a equipe B<strong>,</strong> os distritos." (vírgula substitui <em>inspecionou</em>).</td></tr>
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">3. Hipérbato (Inversão)</td><td class="p-2.5 border border-slate-200">Inversão da ordem direta da oração (Sujeito + Verbo + Complemento).</td><td class="p-2.5 border border-slate-200">"Ouviram do Ipiranga as margens plácidas de um povo heroico o brado retumbante."</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">4. Polissíndeto vs. Assíndeto</td><td class="p-2.5 border border-slate-200">• <strong>Polissíndeto:</strong> repetição enfática do conectivo (e, nem).<br>• <strong>Assíndeto:</strong> ausência de conectivos entre orações coordenadas (apenas vírgulas).</td><td class="p-2.5 border border-slate-200">• Polissíndeto: "Trabalha, <strong>e</strong> teima, <strong>e</strong> lima, <strong>e</strong> sofre, <strong>e</strong> sua!"<br>• Assíndeto: "Vim, vi, venci."</td></tr>
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">5. Anáfora</td><td class="p-2.5 border border-slate-200">Repetição intencional da mesma palavra ou expressão no <strong>início</strong> de versos ou períodos sucessivos.</td><td class="p-2.5 border border-slate-200">"<strong>Sem</strong> saneamento, <strong>sem</strong> prevenção, <strong>sem</strong> vigilância, não há saúde."</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">6. Pleonasmo</td><td class="p-2.5 border border-slate-200">Redundância expressiva (pleonasmo literário) ou objeto direto/indireto pleonástico.</td><td class="p-2.5 border border-slate-200">"O laudo sanitário, entreguei-<strong>o</strong> ao supervisor." / "Chovia uma triste chuva de resignação."</td></tr>
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">7. Anacoluto</td><td class="p-2.5 border border-slate-200">Quebra da estrutura sintática: um termo inicia a frase solto, sem função sintática na oração seguinte.</td><td class="p-2.5 border border-slate-200">"<strong>Esses terrenos baldios</strong>, é urgente que a prefeitura os limpe."</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">8. Silepse (Concordância Ideológica)</td><td class="p-2.5 border border-slate-200">A concordância é feita com a <strong>ideia</strong> subentendida, e não com a forma gramatical:<br>• <strong>De Gênero:</strong> "Vossa Excelência está preocupad<strong>o</strong>."<br>• <strong>De Número:</strong> "O povo de Porto Velho compareceu em massa; estavam animad<strong>os</strong>."<br>• <strong>De Pessoa:</strong> "Os rondonienses <strong>somos</strong> acolhedores." (3ª pl. $\\rightarrow$ 1ª pl.).</td><td class="p-2.5 border border-slate-200">"Todos os servidores da unidade <strong>estamos</strong> empenhados na campanha." (Silepse de pessoa).</td></tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Elipse vs. Zeugma:</strong> Na <strong>Zeugma</strong> o termo omitido já apareceu antes na frase; na <strong>Elipse</strong> não apareceu.</li>
  <li><strong>Silepse (Concordância Ideológica):</strong> De Gênero (V. Exa. está <em>cansado</em>), de Número (A multidão <em>gritaram</em>) e de Pessoa (Os brasileiros <em>somos</em>).</li>
  <li><strong>Polissíndeto:</strong> Repetição de conjunção ("e... e... e..."); <strong>Assíndeto:</strong> omissão de conjunção.</li>
  <li><strong>Anacoluto:</strong> Termo inicial "solto" sem função sintática devido a pausa/mudança de construção.</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Figuras de Sintaxe: Silepse) Na oração "Todos os agentes de combate às endemias deste distrito estamos comprometidos com a meta de bloqueio vetorial", verifica-se o emprego da figura de sintaxe denominada:',
      options: [
        'Silepse de pessoa, pois o sujeito de 3ª pessoa do plural ("os agentes") leva o verbo para a 1ª pessoa do plural ("estamos"), incluindo o emissor no grupo.',
        'Zeugma, pela omissão de verbo anteriormente expresso.',
        'Anacoluto, pela presença de termo órfão de função sintática.',
        'Hipérbato, pela inversão violenta dos termos da oração.',
      ],
      ans: 0,
      comment: 'Quando o sujeito está na 3ª pessoa do plural ("Os agentes") e o verbo concorda na 1ª pessoa do plural ("estamos") porque quem fala se inclui no grupo, ocorre Silepse de Pessoa.',
    },
    {
      q: '(IBGP — Figuras de Sintaxe: Zeugma) No período "No turno matutino, a equipe inspecionou os imóveis residenciais; no vespertino, os pontos estratégicos", a vírgula após "no vespertino" marca a ocorrência de:',
      options: ['Anacoluto.', 'Polissíndeto.', 'Zeugma (supressão do verbo "inspecionou" já enunciado na primeira oração).', 'Pleonasmo vicioso.'],
      ans: 2,
      comment: 'A omissão de um termo (o verbo "inspecionou") que já foi explicitamente mencionado na oração anterior denomina-se Zeugma.',
    },
  ],
  flashcards: [
    { f: 'Qual a diferença entre Elipse e Zeugma?', b: 'Elipse é a omissão de um termo não mencionado antes; Zeugma é a omissão de um termo JÁ expresso anteriormente no período.' },
    { f: 'Quais são os 3 tipos de Silepse (concordância ideológica)?', b: 'Silepse de Gênero (V. Sa. ficou satisfeito), Silepse de Número (A turma chegaram cedo) e Silepse de Pessoa (Os brasileiros somos resilientes).' },
    { f: 'O que é Anacoluto?', b: 'É a quebra na estrutura sintática da frase que deixa um termo inicial solto, sem função sintática.' },
  ],
});

const newBlock_POR5_FigurasLinguagem1 = makeBlock({
  title: 'Bloco 5.1 — Figuras de Linguagem (Semânticas e de Pensamento): Metáfora, Comparação, Metonímia, Catacrese, Sinestesia, Antítese, Paradoxo, Eufemismo, Ironia, Hipérbole e Prosopopeia',
  sourceRef: 'Anexo IV — Língua Portuguesa (Item 5: Figuras de Linguagem)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-teal-950/90 text-white border border-teal-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 5 de Língua Portuguesa — Figuras de Linguagem</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Quadro Comparativo Completo das Figuras de Palavras e de Pensamento</h4>
    <p class="text-xs text-teal-100 mt-1">Aprenda a distinguir imediatamente os pares que a banca IBGP coloca nas alternativas para confundir o candidato: <strong>Metáfora vs. Comparação</strong>, <strong>Metonímia vs. Catacrese</strong> e <strong>Antítese vs. Paradoxo</strong>.</p>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left border-collapse text-xs border border-slate-300">
      <thead>
        <tr class="bg-slate-900 text-white">
          <th class="p-2.5 border border-slate-700">Figura de Linguagem</th>
          <th class="p-2.5 border border-slate-700">Definição e Chave de Identificação</th>
          <th class="p-2.5 border border-slate-700">Exemplo Prático</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">1. Metáfora vs. Comparação (Símile)</td><td class="p-2.5 border border-slate-200">• <strong>Metáfora:</strong> comparação implícita <strong>SEM conectivo</strong> comparativo.<br>• <strong>Comparação:</strong> comparação explícita <strong>COM conectivo</strong> (como, tal qual, feito, igual a).</td><td class="p-2.5 border border-slate-200">• Metáfora: "A prevenção é um escudo."<br>• Comparação: "Ele trabalha <strong>como</strong> uma máquina."</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">2. Metonímia</td><td class="p-2.5 border border-slate-200">Substituição de um termo por outro com relação de contiguidade/proximidade (autor pela obra, continente pelo conteúdo, marca pelo produto, parte pelo todo).</td><td class="p-2.5 border border-slate-200">"Lemos Machado de Assis." / "Tomou dois copos de água." / "Não tinha um teto onde morar."</td></tr>
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">3. Catacrese</td><td class="p-2.5 border border-slate-200">Metáfora desgastada pelo uso cotidiano por falta de palavra específica no idioma.</td><td class="p-2.5 border border-slate-200">"Braço da cadeira", "dente de alho", "asa da xícara", "embarcar no avião".</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">4. Sinestesia</td><td class="p-2.5 border border-slate-200">Cruzamento/fusão de sensações de <strong>órgãos dos sentidos diferentes</strong> (visão, audição, tato, olfato, paladar).</td><td class="p-2.5 border border-slate-200">"Um <strong>doce</strong> (paladar) <strong>olhar</strong> (visão) <strong>frio</strong> (tato)." / "Voz áspera."</td></tr>
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">5. Antítese vs. Paradoxo (Oxímoro)</td><td class="p-2.5 border border-slate-200">• <strong>Antítese:</strong> aproximação de palavras de sentidos opostos, sem ferir a lógica.<br>• <strong>Paradoxo:</strong> fusão contraditória na mesma ideia que desafia a lógica racional.</td><td class="p-2.5 border border-slate-200">• Antítese: "Onde há <strong>luz</strong>, combate-se a <strong>escuridão</strong>."<br>• Paradoxo: "É ferida que <strong>dói e não se sente</strong>." / "Silêncio ensurdecedor."</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">6. Eufemismo vs. Hipérbole</td><td class="p-2.5 border border-slate-200">• <strong>Eufemismo:</strong> suavização de ideia desagradável/trágica.<br>• <strong>Hipérbole:</strong> exagero intencional.</td><td class="p-2.5 border border-slate-200">• Eufemismo: "Faltou com a verdade" / "Descansou em paz."<br>• Hipérbole: "Já expliquei isso <strong>um milhão de vezes</strong>!"</td></tr>
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">7. Prosopopeia (Personificação) e Ironia</td><td class="p-2.5 border border-slate-200">• <strong>Prosopopeia:</strong> atribuição de ações/sentimentos humanos a seres inanimados ou irracionais.<br>• <strong>Ironia:</strong> dizer o contrário do que se pensa com finalidade crítica/sarcástica.</td><td class="p-2.5 border border-slate-200">• Prosopopeia: "O rio Madeira chorava na seca."<br>• Ironia: "Que excelente vizinho: deixou dez pneus cheios de água no quintal!"</td></tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Metáfora</strong> (sem "como") vs. <strong>Comparação</strong> (com "como").</li>
  <li><strong>Antítese</strong> (oposição lógica: vida/morte) vs. <strong>Paradoxo</strong> (autocontradição: estar cego para ver).</li>
  <li><strong>Metonímia:</strong> Parte pelo todo, continente pelo conteúdo, autor pela obra.</li>
  <li><strong>Catacrese:</strong> Empréstimo por falta de nome próprio (pé da mesa, céu da boca).</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Figuras de Linguagem: Antítese vs. Paradoxo) Nos versos camonianos "Amor é fogo que arde sem se ver; / é ferida que dói e não se sente; / é um contentamento descontente", predomina a figura de linguagem denominada:',
      options: [
        'Catacrese, pelo uso de termos emprestados do corpo humano.',
        'Paradoxo (ou oxímoro), pois funde conceitos mutuamente excludentes que subvertem a lógica formal ("dói e não se sente", "contentamento descontente").',
        'Eufemismo, pela suavização da ideia de morte.',
        'Sinestesia, pela mistura de olfato e paladar.',
      ],
      ans: 1,
      comment: 'Quando ideias opostas se fundem gerando uma contradição lógica aparente ("ferida que dói e não se sente", "contentamento descontente"), temos o Paradoxo (ou Oxímoro).',
    },
    {
      q: '(IBGP — Metonímia) Na frase "Durante a caminhada sob o sol de Porto Velho, o agente bebeu duas garrafas inteiras na parada de hidratação", ocorre a figura de linguagem:',
      options: ['Metonímia (o continente "duas garrafas" pelo conteúdo "a água").', 'Hipérbole.', 'Prosopopeia.', 'Sinestesia.'],
      ans: 0,
      comment: 'Ninguém bebe o plástico da garrafa, e sim o líquido nela contido: trata-se de Metonímia do tipo continente pelo conteúdo.',
    },
  ],
  flashcards: [
    { f: 'Qual a diferença entre Antítese e Paradoxo?', b: 'Antítese apenas aproxima palavras opostas (dia e noite); Paradoxo funde ideias contraditórias que anulam a lógica formal ("silêncio ensurdecedor").' },
    { f: 'O que é Sinestesia?', b: 'É a associação de sensações percebidas por diferentes órgãos dos sentidos (ex.: "perfume doce e quente").' },
    { f: 'O que é Catacrese?', b: 'É uma metáfora cristalizada pelo uso cotidiano na falta de um termo específico (dente de alho, asa da xícara, embarcar no trem).' },
  ],
});

const newBlock_POR5_FigurasLinguagem2 = makeBlock({
  title: 'Bloco 5.2 — Figuras de Som (Aliteração, Assonância, Onomatopeia e Paronomásia), Gradação, Perífrase e Apóstrofe',
  sourceRef: 'Anexo IV — Língua Portuguesa (Item 5: Figuras de Linguagem)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-slate-900 text-white border border-slate-700">
    <h4 class="text-base font-extrabold">Figuras Sonoras (Harmonia) e Figuras Complementares de Pensamento</h4>
    <p class="text-xs text-slate-300 mt-1">Complete o domínio do Item 5 com as 4 figuras de harmonia sonora e as figuras de pensamento recorrentes em poemas e crônicas da IBGP.</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
      <div class="font-extrabold text-slate-900">1. Figuras de Som (Harmonia)</div>
      <p class="text-slate-700">• <strong>Aliteração:</strong> repetição de sons <strong>consonantais</strong> ("O <strong>r</strong>ato <strong>r</strong>oeu a <strong>r</strong>oupa do <strong>r</strong>ei de <strong>R</strong>oma").<br>• <strong>Assonância:</strong> repetição de sons <strong>vocálicos</strong> ("Sou <strong>a</strong>na, da c<strong>a</strong>ma, da c<strong>a</strong>na, ful<strong>a</strong>na, bac<strong>a</strong>na").<br>• <strong>Onomatopeia:</strong> imitação escrita de ruídos ou sons naturais ("zum-zum", "tique-taque", "atchim").<br>• <strong>Paronomásia:</strong> aproximação expressiva de palavras parônimas (sons parecidos: "Quem casa quer casa" / "Conhecer as manhas e as manhãs").</p>
    </div>
    <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 space-y-1.5">
      <div class="font-extrabold text-amber-950">2. Gradação (Clímax/Anticlímax), Perífrase e Apóstrofe</div>
      <p class="text-slate-700">• <strong>Gradação:</strong> sequência encadeada de ideias em ordem crescente (clímax) ou decrescente (anticlímax): "Um passo, um trote, uma corrida, um voo!"<br>• <strong>Perífrase (ou Antonomásia):</strong> substituição de um nome por um epíteto ou característica notória ("A Cidade das Três Caixas d'Água" = Porto Velho; "O Poeta dos Escravos" = Castro Alves).<br>• <strong>Apóstrofe:</strong> interpelação/invocação enfática (corresponde ao vocativo na sintaxe): "<strong>Ó Deus</strong>, onde estás que não respondes?"</p>
    </div>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Aliteração:</strong> Repetição de consoantes; <strong>Assonância:</strong> repetição de vogais.</li>
  <li><strong>Gradação:</strong> Sequência progressiva ascendente (clímax) ou descendente (anticlímax).</li>
  <li><strong>Perífrase / Antonomásia:</strong> Apelido consagrado de lugar ou pessoa.</li>
  <li><strong>Apóstrofe:</strong> Invocação direta (vocativo literário).</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Figuras Sonoras: Aliteração) No verso "Vozes veladas, veludosas vozes, / Volúpias dos violões, vozes veladas", de Cruz e Sousa, a repetição sistemática do fonema consonantal /v/ produz a figura de linguagem denominada:',
      options: ['Assonância.', 'Aliteração.', 'Catacrese.', 'Eufemismo.'],
      ans: 1,
      comment: 'A repetição intencional de fonemas consonantais (/v/) para produzir efeito rítmico-sonoro chama-se Aliteração.',
    },
    {
      q: '(IBGP — Gradação) Em "O foco começou como uma gota esquecida no quintal, virou poça, tornou-se criadouro, espalhou-se pelo quarteirão e tomou o bairro inteiro", observa-se uma sequência progressiva ascendente que caracteriza a:',
      options: ['Gradação (clímax).', 'Ironia.', 'Antítese.', 'Sinestesia.'],
      ans: 0,
      comment: 'O encadeamento de termos em ordem crescente de intensidade ou dimensão (gota → poça → criadouro → quarteirão → bairro) configura a Gradação ascendente (clímax).',
    },
  ],
  flashcards: [
    { f: 'Qual a diferença entre Aliteração e Assonância?', b: 'Aliteração repete sons CONSONANTAIS; Assonância repete sons VOCÁLICOS.' },
    { f: 'O que é Gradação?', b: 'É o encadeamento de palavras ou ideias em progressão crescente (clímax) ou decrescente (anticlímax).' },
  ],
});

const newBlock_POR6_OperadoresExpresssoesRef = makeBlock({
  title: 'Bloco 6.3 — Demonstrativos na Referenciação (Este, Esse, Aquele) e Tabela Completa dos Operadores Sequenciais',
  sourceRef: 'Anexo IV — Língua Portuguesa (Item 6: Articulação textual: operadores sequenciais, expressões referenciais)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-indigo-950/90 text-white border border-indigo-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 6 de Língua Portuguesa — Articulação Textual</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Expressões Referenciais (Este vs. Esse vs. Aquele) e Operadores Sequenciais</h4>
    <p class="text-xs text-indigo-100 mt-1">Domine a distinção entre <strong>ESSE</strong> (anafórico: retoma o que já foi dito), <strong>ESTE</strong> (catafórico: anuncia o que vai ser dito; ou retoma o termo mais próximo entre dois) e <strong>AQUELE</strong> (retoma o termo mais distante entre dois).</p>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left border-collapse text-xs border border-slate-300">
      <thead>
        <tr class="bg-slate-900 text-white">
          <th class="p-2.5 border border-slate-700">Pronome / Operador</th>
          <th class="p-2.5 border border-slate-700">Função Referencial ou Sequencial no Texto</th>
          <th class="p-2.5 border border-slate-700">Exemplo Aplicado</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">ESSE / ESSA / ISSO</td><td class="p-2.5 border border-slate-200"><strong>Anafórico (Passado do texto):</strong> retoma algo que <u>JÁ FOI</u> enunciado anteriormente.</td><td class="p-2.5 border border-slate-200">"A vacinação é gratuita. <strong>Essa</strong> medida salva vidas."</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">ESTE / ESTA / ISTO</td><td class="p-2.5 border border-slate-200"><strong>Catafórico (Futuro do texto):</strong> anuncia algo que <u>AINDA VAI SER</u> dito a seguir (geralmente antes de dois-pontos).</td><td class="p-2.5 border border-slate-200">"A meta da SEMUSA é <strong>esta</strong>: zerar os focos de dengue."</td></tr>
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">ESTE vs. AQUELE (Retomada Dupla)</td><td class="p-2.5 border border-slate-200">Quando há dois antecedentes: <strong>ESTE</strong> retoma o último (mais próximo) e <strong>AQUELE</strong> retoma o primeiro (mais distante).</td><td class="p-2.5 border border-slate-200">"A <u>malária</u> e a <u>dengue</u> são endêmicas; <strong>aquela</strong> (malária) é transmitida pelo <em>Anopheles</em>, e <strong>esta</strong> (dengue), pelo <em>Aedes</em>."</td></tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>ESSE / ISSO:</strong> Retoma o que já passou no texto (Anáfora).</li>
  <li><strong>ESTE / ISTO:</strong> Anuncia o que vem adiante no texto (Catáfora).</li>
  <li><strong>Retomada de 2 termos (A e B):</strong> <strong>Aquele</strong> = A (1º citado, mais longe); <strong>Este</strong> = B (último citado, mais perto).</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Expressões Referenciais: Este vs. Aquele) No período "O Agente Comunitário de Saúde (ACS) e o Agente de Combate às Endemias (ACE) atuam de forma integrada no território; aquele realiza o acompanhamento longitudinal das famílias cadastradas na UBS, ao passo que este executa o controle químico e biológico de vetores", os pronomes "aquele" e "este" referem-se, respectivamente, a:',
      options: [
        'ACE e ACS.',
        'ACS e ACE.',
        'Território e UBS.',
        'Controle químico e controle biológico.',
      ],
      ans: 1,
      comment: 'Em retomadas distributivas de dois termos antecedentes, "aquele" refere-se ao primeiro termo mencionado (ACS) e "este" refere-se ao último termo mencionado (ACE).',
    },
  ],
  flashcards: [
    { f: 'No interior do texto (coesão), quando usar ISSO e quando usar ISTO?', b: 'Usa-se ISSO para retomar algo já dito (anáfora) e ISTO para anunciar algo que ainda será dito (catáfora).' },
    { f: 'Ao retomar dois termos citados anteriormente ("Dengue e Malária"), a quem se referem AQUELE e ESTE?', b: 'AQUELE retoma o primeiro termo citado (mais distante: Dengue); ESTE retoma o último termo citado (mais próximo: Malária).' },
  ],
});

const newBlock_POR7_CoesaoCoerencia = makeBlock({
  title: 'Bloco 7.3 — Coerência Textual: As 4 Metarregras de Charolles (Repetição, Progressão, Não-Contradição e Relação) e Ambiguidade',
  sourceRef: 'Anexo IV — Língua Portuguesa (Item 7: Coesão e coerência textual)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-teal-950/90 text-white border border-teal-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 7 de Língua Portuguesa — Coesão e Coerência</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Coesão (Costura Gramatical) vs. Coerência (Harmonia Lógica de Sentido)</h4>
    <p class="text-xs text-teal-100 mt-1">Enquanto a <strong>coesão</strong> é a ligação visível na superfície do texto (pronomes, conjunções, preposições, sinônimos), a <strong>coerência</strong> é a unidade lógica e semântica subjacente do texto.</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
      <div class="font-extrabold text-slate-900">As 4 Metarregras da Coerência (Michel Charolles)</div>
      <p class="text-slate-700">1) <strong>Repetição (Continuidade temática):</strong> retomada do fio condutor.<br>2) <strong>Progressão:</strong> acréscimo constante de novas informações (evita a circularidade tautológica).<br>3) <strong>Não-Contradição:</strong> nenhuma afirmação pode invalidar logicamente outra no mesmo texto.<br>4) <strong>Relação (Articulação):</strong> os fatos precisam ter pertinência no mundo real ou discursivo.</p>
    </div>
    <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 space-y-1.5">
      <div class="font-extrabold text-amber-950">Ambiguidade pelo Pronome Possessivo "SEU/SUA"</div>
      <p class="text-slate-700">Na frase <em>"O supervisor encontrou o agente em <strong>sua</strong> sala"</em>, há ambiguidade (a sala é do supervisor ou do agente?). Para eliminar a ambiguidade, substitua por <strong>dele/dela</strong> ou reestruture a ordem dos termos.</p>
    </div>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Coesão:</strong> Mecanismos gramaticais e lexicais da superfície textual.</li>
  <li><strong>Coerência:</strong> Nexo lógico global (Repetição, Progressão, Não-Contradição e Relação).</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Coesão e Coerência Textual) Assinale a alternativa em que o período apresenta quebra de COERÊNCIA lógica e semântica devido ao emprego inadequado do conectivo:',
      options: [
        'Como choveu intensamente durante toda a semana, o nível do rio Madeira subiu rapidamente.',
        'Embora o morador tenha mantido o quintal rigorosamente limpo, não foram encontrados focos do mosquito.',
        'Os agentes realizaram o bloqueio costal porque houve confirmação laboratorial de casos na localidade.',
        'Caso os recipientes permaneçam destampados, a fêmea do Aedes aegypti poderá depositar seus ovos.',
      ],
      ans: 1,
      comment: 'O conectivo concessivo "Embora" exige ideias em oposição. Manter o quintal limpo e NÃO encontrar focos são ideias convergentes (causa e consequência esperada), e não opostas. O correto seria usar um conectivo causal ("Como / Visto que") ou consecutivo.',
    },
  ],
  flashcards: [
    { f: 'Qual a diferença entre Coesão e Coerência?', b: 'Coesão é a conexão gramatical na superfície do texto (conjunções, pronomes); Coerência é a harmonia lógica e de sentido global das ideias.' },
    { f: 'Quais são as 4 metarregras da coerência textual?', b: 'Repetição (continuidade), Progressão (novas informações), Não-contradição (lógica interna) e Relação (conexão entre os fatos).' },
  ],
});

const newBlock_POR8_ClassesFormacaoPalavras = makeBlock({
  title: 'Bloco 8.3 — As 10 Classes de Palavras (Variáveis vs. Invariáveis), Derivação Imprópria e Processos de Formação de Palavras',
  sourceRef: 'Anexo IV — Língua Portuguesa (Item 8: Identificação, definição, classificação, flexão e emprego das classes de palavras; formação de palavras)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-indigo-950/90 text-white border border-indigo-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 8 de Língua Portuguesa — Morfologia</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Mapa das 10 Classes Gramaticais e dos Processos de Formação de Palavras</h4>
    <p class="text-xs text-indigo-100 mt-1">Na prova da IBGP, a classe de uma palavra depende sempre do seu <strong>contexto morfossintático</strong> (ex.: "bastante" pode ser advérbio invariável ou pronome indefinido variável).</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
      <div class="font-extrabold text-slate-900">1. Classes Variáveis (6) vs. Invariáveis (4)</div>
      <p class="text-slate-700">• <strong>6 Variáveis (flexionam):</strong> Substantivo, Artigo, Adjetivo, Pronome, Numeral e Verbo.<br>• <strong>4 Invariáveis (NÃO flexionam):</strong> Advérbio, Preposição, Conjunção e Interjeição.<br>• <strong>Dica de Ouro (Adjetivo vs. Advérbio):</strong> O adjetivo modifica um <strong>substantivo</strong> e varia; o advérbio modifica um <strong>verbo, adjetivo ou outro advérbio</strong> e é invariável!</p>
    </div>
    <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 space-y-1.5">
      <div class="font-extrabold text-teal-950">2. Derivação Prefixal+Sufixal vs. Parassintética</div>
      <p class="text-slate-700">• <strong>Prefixal e Sufixal:</strong> se retirarmos o prefixo OU o sufixo, a palavra restante <strong>CONTINUA existindo</strong> no idioma (ex.: <em>infelizmente</em> $\\rightarrow$ <em>infeliz</em> existe e <em>felizmente</em> existe).<br>• <strong>Parassintética (Parassíntese):</strong> prefixo e sufixo entram simultaneamente; se tirar um deles, a palavra <strong>NÃO existe</strong> (ex.: <em>anoitecer</em> $\\rightarrow$ não existe <em>*anoite</em> nem <em>*noitecer</em>; <em>empobrecer</em>, <em>esclarecer</em>).</p>
    </div>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Parassíntese:</strong> Tire o prefixo; se a palavra que sobrou NÃO existir, é <strong>derivação parassintética</strong> (ex.: <em>entristecer, amanhecer, subterrâneo</em>).</li>
  <li><strong>Derivação Regressiva (Deverbal):</strong> Substantivo abstrato de ação formado pela redução do verbo (<em>combater $\\rightarrow$ o combate; atacar $\\rightarrow$ o ataque; pescar $\\rightarrow$ a pesca</em>).</li>
  <li><strong>Derivação Imprópria (Conversão):</strong> Mudança de classe gramatical sem alterar a forma (ex.: "O <strong>olhar</strong> do agente" $\\rightarrow$ verbo substantivado pelo artigo).</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Formação de Palavras: Parassíntese) Assinale a alternativa em que TODAS as palavras foram formadas pelo processo de derivação parassintética:',
      options: [
        'Infelizmente, deslealdade, recomeçar.',
        'Anoitecer, empobrecer, desalmado.',
        'Aguardente, planalto, passatempo.',
        'Combate, resgate, embarque.',
      ],
      ans: 1,
      comment: 'Em "anoitecer", "empobrecer" e "desalmado", a retirada isolada do prefixo ou do sufixo não produz palavra existente na língua (*anoite / *noitecer; *empobre / *pobrecer; *desalma / *almado), configurando derivação parassintética.',
    },
  ],
  flashcards: [
    { f: 'Como diferenciar Derivação Prefixal e Sufixal de Derivação Parassintética?', b: 'Retire o prefixo: se o que sobrar existir como palavra (ex.: infelizmente → felizmente), é Prefixal e Sufixal; se não existir (ex.: anoitecer → *noitecer), é Parassintética.' },
    { f: 'Quais são as 4 classes de palavras INVARIÁVEIS da Língua Portuguesa?', b: 'Advérbio, Preposição, Conjunção e Interjeição.' },
  ],
});

const newBlock_POR9_VerbosTemposModos = makeBlock({
  title: 'Bloco 9.1 — Verbos: Flexão, Conjugação de Irregulares (Intervir, Provir, Reaver, Precaver, Ver e Vir) e Correlação entre Tempos e Modos Verbais',
  sourceRef: 'Anexo IV — Língua Portuguesa (Item 9: Verbos: flexão, conjugação, vozes, correlação entre tempos e modos verbais)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-teal-950/90 text-white border border-teal-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 9 de Língua Portuguesa — Sistema Verbal</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Modos, Tempos, Correlação Verbal e Verbos Derivados de TER, VIR, PÔR e VER</h4>
    <p class="text-xs text-teal-100 mt-1">Os verbos <strong>intervir, convir e provir</strong> conjugam-se exatamente como o verbo <strong>VIR</strong>; os verbos <strong>manter, deter e conter</strong> conjugam-se como <strong>TER</strong>; e <strong>reaver</strong> conjuga-se como <strong>HAVER</strong> (mas apenas nas formas em que "haver" possui a letra <strong>V</strong>!).</p>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left border-collapse text-xs border border-slate-300">
      <thead>
        <tr class="bg-slate-900 text-white">
          <th class="p-2.5 border border-slate-700">Tópico Verbal</th>
          <th class="p-2.5 border border-slate-700">Regra de Ouro e Formas Corretas na Norma-Padrão</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">1. Modos e Tempos Verbais</td><td class="p-2.5 border border-slate-200">• <strong>Indicativo (Certeza/Fato):</strong> Presente, Pretérito Perfeito (fato concluído: <em>visitou</em>), Pretérito Imperfeito (ação habitual/contínua no passado: <em>visitava</em>), Pretérito Mais-que-perfeito (passado anterior a outro passado: <em>visitara = tinha visitado</em>), Futuro do Presente (<em>visitará</em>) e Futuro do Pretérito (condicional: <em>visitaria</em>).<br>• <strong>Subjuntivo (Hipótese/Dúvida/Desejo):</strong> Presente (<em>que ele visite</em>), Pretérito Imperfeito (<em>se ele visitasse</em>) e Futuro (<em>quando/se ele visitar</em>).<br>• <strong>Imperativo:</strong> Ordem, pedido ou instrução.</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">2. Correlação Verbal Clássica</td><td class="p-2.5 border border-slate-200">• <strong>Se + Futuro do Subjuntivo $\\leftrightarrow$ Futuro do Presente do Indicativo:</strong> "Se o agente <strong>intervier</strong> (fut. subj.), o foco <strong>será</strong> (fut. pres.) eliminado."<br>• <strong>Se + Pretérito Imperfeito do Subjuntivo $\\leftrightarrow$ Futuro do Pretérito do Indicativo:</strong> "Se o agente <strong>interviesse</strong> (imp. subj.), o foco <strong>seria</strong> (fut. pret.) eliminado."<br>• <strong>Presente do Indicativo $\\leftrightarrow$ Presente do Subjuntivo:</strong> "É fundamental que a equipe <strong>mantenha</strong> o cronograma."</td></tr>
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">3. Verbos Campeões de Pegadinha</td><td class="p-2.5 border border-slate-200">• <strong>INTERVIR (= VIR):</strong> Eu <em>intervim</em>, ele <strong>interveio</strong> (e NUNCA <em>*interviu</em>!), nós <em>interviemos</em>; se ele <strong>intervier</strong>.<br>• <strong>MANTER / DETER (= TER):</strong> Ele <strong>manteve</strong> / <strong>deteve</strong>; se ele <strong>mantiver</strong> / <strong>detiver</strong>.<br>• <strong>VER vs. VIR no Futuro do Subjuntivo:</strong> "Quando eu <strong>vir</strong> o relatório" (verbo VER) vs. "Quando eu <strong>vier</strong> ao posto" (verbo VIR).<br>• <strong>REAVER (= HAVER com V):</strong> Eu <em>reouve</em>, ele <strong>reouve</strong>, se eles <strong>reouverem</strong> (não existe <em>*reavejo</em>!).</td></tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Intervir = Vir:</strong> Ele <strong>interveio</strong> no passado; se ele <strong>intervier</strong> no futuro.</li>
  <li><strong>Pretérito Mais-que-perfeito (-ra átono):</strong> <em>aplicara = tinha aplicado</em> (ação passada anterior a outra ação passada).</li>
  <li><strong>Correlação obrigatória:</strong> <em>Se + -sse (Imperfeito do Subjuntivo) $\\rightarrow$ -ria (Futuro do Pretérito)</em>.</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Conjugação de Verbos Irregulares e Correlação Verbal) Assinale a alternativa em que a flexão e a correlação dos tempos e modos verbais estão em total conformidade com a norma-padrão:',
      options: [
        'Se o supervisor intervisse a tempo, a equipe reaveria os equipamentos extraviados.',
        'Caso a vigilância sanitária não intervier no imóvel abandonado, o foco proliferará.',
        'Se o poder público interviesse prontamente na área alagada, os moradores reaveriam a segurança sanitária.',
        'O coordenador interviu na reunião assim que viu os dados do LIRAa.',
      ],
      ans: 2,
      comment: 'O verbo "intervir" conjuga-se exatamente como "vir": no pretérito imperfeito do subjuntivo é "se ele interviesse" (correlacionado com o futuro do pretérito "reaveriam"). No pretérito perfeito do indicativo é "ele interveio" (não existe *interviu nem *intervisse).',
    },
    {
      q: '(IBGP — Valor Semântico dos Tempos Verbais) Na frase "Quando a equipe de bloqueio chegou ao quarteirão, o morador já eliminara os recipientes com água parada", a forma verbal "eliminara" está flexionada no:',
      options: [
        'Futuro do presente do indicativo, indicando ação posterior à chegada da equipe.',
        'Pretérito mais-que-perfeito simples do indicativo, expressando uma ação passada concluída antes de outra ação também passada ("chegou").',
        'Pretérito imperfeito do indicativo, indicando ação habitual.',
        'Futuro do subjuntivo, indicando hipótese futura.',
      ],
      ans: 1,
      comment: '"Eliminara" (equivalente ao composto "tinha eliminado") é o pretérito mais-que-perfeito do indicativo, que indica um fato passado anterior a outro fato passado ("chegou").',
    },
  ],
  flashcards: [
    { f: 'Qual é a forma correta do verbo INTERVIR na 3ª pessoa do singular do Pretérito Perfeito e do Futuro do Subjuntivo?', b: 'Pretérito Perfeito: "Ele INTERVEIO" (como "ele veio"). Futuro do Subjuntivo: "Se ele INTERVIER" (como "se ele vier").' },
    { f: 'Qual é a diferença entre "Quando ele VIR" e "Quando ele VIER"?', b: '"Quando ele VIR" é o futuro do subjuntivo do verbo VER (enxergar); "Quando ele VIER" é o futuro do subjuntivo do verbo VIR (deslocar-se).' },
    { f: 'Qual tempo verbal corresponde à desinência "-ra" átona (ex.: fizera, cantara, saíra)?', b: 'Pretérito mais-que-perfeito simples do indicativo (equivale a "tinha feito", "tinha cantado", "tinha saído").' },
  ],
});

const newBlock_POR9_VozesVerbais = makeBlock({
  title: 'Bloco 9.2 — As Vozes Verbais (Ativa, Passiva Analítica, Passiva Sintética e Reflexiva) e Transformação de Vozes na IBGP',
  sourceRef: 'Anexo IV — Língua Portuguesa (Item 9: Vozes verbais)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-indigo-950/90 text-white border border-indigo-700">
    <h4 class="text-base font-extrabold">Como Transformar Voz Ativa em Passiva Sem Errar o Tempo Verbal</h4>
    <p class="text-xs text-indigo-100 mt-1">Na conversão da <strong>Voz Ativa</strong> para a <strong>Voz Passiva Analítica</strong>, o <strong>Objeto Direto</strong> vira <strong>Sujeito Paciente</strong>, o <strong>Sujeito Agente</strong> vira <strong>Agente da Passiva</strong> (introduzido por <em>por/pelo</em>) e o verbo auxiliar <strong>SER</strong> assume <u>exatamente o mesmo tempo e modo</u> do verbo principal da ativa!</p>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left border-collapse text-xs border border-slate-300">
      <thead>
        <tr class="bg-slate-900 text-white">
          <th class="p-2.5 border border-slate-700">Voz Verbal</th>
          <th class="p-2.5 border border-slate-700">Estrutura Sintática</th>
          <th class="p-2.5 border border-slate-700">Exemplo Equivalente</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">1. Voz Ativa</td><td class="p-2.5 border border-slate-200">Sujeito Agente + VTD (ou VTDI) + Objeto Direto.</td><td class="p-2.5 border border-slate-200">"A SEMUSA <strong>eliminou</strong> os focos." (Pretérito Perfeito).</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">2. Voz Passiva Analítica</td><td class="p-2.5 border border-slate-200">Sujeito Paciente + <strong>Verbo SER + Particípio</strong> + Agente da Passiva.</td><td class="p-2.5 border border-slate-200">"Os focos <strong>foram eliminados</strong> pela SEMUSA." (Verbo <em>ser</em> no Pretérito Perfeito).</td></tr>
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">3. Voz Passiva Sintética (Pronominal)</td><td class="p-2.5 border border-slate-200">VTD (ou VTDI) + <strong>Partícula Apassivadora "SE"</strong> + Sujeito Paciente (concorda no plural!).</td><td class="p-2.5 border border-slate-200">"<strong>Eliminaram-se</strong> os focos." (= Os focos foram eliminados).</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">4. Voz Reflexiva / Recíproca</td><td class="p-2.5 border border-slate-200">O sujeito pratica e recebe a ação simultaneamente (ou mutuamente).</td><td class="p-2.5 border border-slate-200">"O agente <strong>protegeu-se</strong> com o EPI." / "Os colegas <strong>cumprimentaram-se</strong>."</td></tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Só admitem Voz Passiva verbos que possuem Objeto Direto (VTD ou VTDI)!</strong> Verbos intransitivos (VI), transitivos indiretos (VTI) e de ligação (VL) não passam para a voz passiva.</li>
  <li><strong>Voz Passiva Sintética:</strong> $VTD + SE + \\text{Sujeito Paciente}$ (o verbo concorda obrigatoriamente com o sujeito paciente: <em>Vistoriaram-se os terrenos</em>).</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Transposição de Vozes Verbais) Transpondo-se a oração na voz ativa "As equipes de endemias haviam inspecionado todos os terrenos baldios do bairro" para a voz passiva analítica, a forma verbal resultante será:',
      options: [
        'foram inspecionados.',
        'seriam inspecionados.',
        'haviam sido inspecionados.',
        'tinham inspecionado-se.',
      ],
      ans: 2,
      comment: 'Na locução ativa "haviam inspecionado" (pretérito mais-que-perfeito composto), o verbo principal está no particípio ("inspecionado") precedido por "haviam". Na passiva analítica, insere-se o verbo SER no mesmo tempo do verbo principal (particípio "sido"): "Todos os terrenos baldios do bairro haviam sido inspecionados pelas equipes de endemias".',
    },
  ],
  flashcards: [
    { f: 'Como funciona a concordância na Voz Passiva Sintética (VTD + SE)?', b: 'O verbo concorda obrigatoriamente com o Sujeito Paciente: "Notificaram-se dois novos casos" (= Dois novos casos foram notificados).' },
    { f: 'Quais tipos de verbos podem ser transpostos para a Voz Passiva?', b: 'Apenas os verbos transitivos diretos (VTD) e transitivos diretos e indiretos (VTDI), pois possuem Objeto Direto para se tornar Sujeito Paciente.' },
  ],
});

const newBlock_POR10_ConcordanciaCompleta = makeBlock({
  title: 'Bloco 10.3 — Quadro Sinóptico de Concordância Verbal (Impessoais, Partitivos, Porcentagens) e Concordância Nominal (Anexo, Mesmo, Meio, Bastante, É proibido)',
  sourceRef: 'Anexo IV — Língua Portuguesa (Item 10: Concordância verbal e nominal)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-teal-950/90 text-white border border-teal-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 10 de Língua Portuguesa — Concordância</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Os 8 Casos de Concordância Verbal e Nominal Que Sempre Caem na IBGP</h4>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
      <div class="font-extrabold text-slate-900">1. Concordância Verbal Especial</div>
      <p class="text-slate-700">• <strong>HAVER (sentido de existir/ocorrer ou tempo decorrido):</strong> impessoal, fica SEMPRE no singular (<em>Deve haver soluções / Havia muitos focos</em>). Atenção: <strong>EXISTIR</strong> tem sujeito e vai para o plural (<em>Devem existir soluções</em>).<br>• <strong>FAZER (tempo decorrido ou clima):</strong> sempre no singular (<em>Faz dois anos / Vai fazer três meses</em>).<br>• <strong>Partitivos ("A maioria dos agentes..."):</strong> singular (concorda com <em>maioria</em>) OU plural (concorda com <em>agentes</em>).<br>• <strong>Porcentagens:</strong> concorda com o número ou com o especificador (<em>1% dos imóveis apresentou/apresentaram foco</em>; se houver determinativo antes: <em>Os 20% da verba foram aplicados</em>).</p>
    </div>
    <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 space-y-1.5">
      <div class="font-extrabold text-amber-950">2. Concordância Nominal Especial</div>
      <p class="text-slate-700">• <strong>ANEXO / INCLUSO / OBRIGADO / QUITE / PRÓPRIO / MESMO (sentido de "em pessoa"):</strong> variam em gênero e número (<em>As planilhas seguem anexas; Elas mesmas preencheram</em>). Nota: <strong>"Em anexo"</strong> é invariável.<br>• <strong>MEIO:</strong> como advérbio ("um pouco") é invariável (<em>A porta estava meio aberta</em>); como numeral/adjetivo ("metade") varia (<em>Meia colher</em>).<br>• <strong>BASTANTE:</strong> se puder trocar por "muitos/muitas", varia (<em>Há bastantes motivos</em>); se significar "muito", é invariável (<em>Eles são bastante dedicados</em>).<br>• <strong>É PROIBIDO / É NECESSÁRIO / É BOM:</strong> sem determinante = masculino singular (<em>É proibido entrada</em>); com determinante = varia (<em>É proibida a entrada</em>).</p>
    </div>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Haver (existir) e Fazer (tempo):</strong> Sempre no 3º singular (inclusive o verbo auxiliar: <em>Deve haver</em>, <em>Vai fazer</em>).</li>
  <li><strong>Meio (um pouco):</strong> Invariável (<em>Ela ficou meio tonta</em>).</li>
  <li><strong>É proibido entrada</strong> (sem artigo) vs. <strong>É proibida a entrada</strong> (com artigo).</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Concordância Verbal e Nominal) Assinale a alternativa que obedece integralmente às normas de concordância verbal e nominal:',
      options: [
        'Haviam bastantes reclamações sobre terrenos baldios, por isso seguem anexo os autos de infração.',
        'Deve haver bastantes motivos para a interdição, conforme as fotografias que seguem anexas ao processo.',
        'Fazem seis meses que a portaria tornou proibido a permanência de pneus a céu aberto.',
        'As agentes mesmo conferiram a caixa d\'água que estava meia destampada.',
      ],
      ans: 1,
      comment: 'Em B: "Deve haver" fica no singular (haver = existir é impessoal e transmite a impessoalidade ao auxiliar "deve"); "bastantes motivos" (= muitos motivos, pronome indefinido variável); "as fotografias... seguem anexas" (adjetivo concorda no feminino plural).',
    },
  ],
  flashcards: [
    { f: 'Por que se escreve "Deve haver muitas dúvidas" (no singular) e "Devem existir muitas dúvidas" (no plural)?', b: 'Porque HAVER no sentido de existir é verbo impessoal (sem sujeito) e contamina o auxiliar; já EXISTIR é verbo pessoal e concorda com o sujeito "muitas dúvidas".' },
    { f: 'Quando a expressão "É proibido" varia para o feminino ("É proibida")?', b: 'Apenas quando o substantivo vier determinado por artigo ou pronome: "É proibida A entrada" (sem artigo fica invariável: "É proibido entrada").' },
  ],
});

const newBlock_POR11_RegenciaCompleta = makeBlock({
  title: 'Bloco 11.3 — Regência Verbal dos 12 Verbos Campeões da IBGP e Regência com Pronomes Relativos (Onde, Aonde, Cujo, Em que, A que)',
  sourceRef: 'Anexo IV — Língua Portuguesa (Item 11: Regência verbal e nominal)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-indigo-950/90 text-white border border-indigo-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 11 de Língua Portuguesa — Regência Verbal e Nominal</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Tabela de Regência Verbal e Emprego de Preposição antes de Pronome Relativo</h4>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left border-collapse text-xs border border-slate-300">
      <thead>
        <tr class="bg-slate-900 text-white">
          <th class="p-2.5 border border-slate-700">Verbo</th>
          <th class="p-2.5 border border-slate-700">Transitividade e Preposição Exigida na Norma-Padrão</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">1. ASSISTIR</td><td class="p-2.5 border border-slate-200">• <strong>Ver/presenciar:</strong> VTI (exige <strong>A</strong>, não aceita <em>lhe</em>): <em>Assistiu <strong>ao</strong> treinamento (assistiu <strong>a ele</strong>)</em>.<br>• <strong>Ajudar/socorrer:</strong> VTD ou VTI: <em>O médico assistiu <strong>o</strong> (ou <strong>ao</strong>) paciente</em>.<br>• <strong>Caber direito:</strong> VTI: <em>Esse direito assiste <strong>ao</strong> servidor</em>.</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">2. ASPIRAR e VISAR</td><td class="p-2.5 border border-slate-200">• <strong>Desejar/almejar (objetivo):</strong> VTI (exige <strong>A</strong>): <em>Aspira <strong>ao</strong> cargo / Visa <strong>ao</strong> bem comum</em>.<br>• <strong>Inalar (aspirar) / Mirar ou rubricar (visar):</strong> VTD (sem preposição): <em>Aspirou o pó / Visou o documento</em>.</td></tr>
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">3. IMPLICAR</td><td class="p-2.5 border border-slate-200">• <strong>Acarretar / gerar consequência:</strong> <strong>VTD (SEM a preposição "em"!)</strong>: <em>O descaso implica <strong>multa</strong> sanitária</em>.<br>• <strong>Ter implicância:</strong> VTI (com): <em>Implicava com o colega</em>.</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">4. PREFERIR</td><td class="p-2.5 border border-slate-200"><strong>VTDI (Prefere X <u>a</u> Y):</strong> NUNCA aceita "prefiro mais... do que"! Correto: <em>Prefiro atuar no campo <strong>a</strong> ficar no escritório</em>.</td></tr>
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">5. OBEDECER / DESOBEDECER</td><td class="p-2.5 border border-slate-200"><strong>VTI (exigem a preposição A):</strong> <em>Obedeceu <strong>ao</strong> protocolo e às normas da SEMUSA</em>.</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">6. ESQUECER / LEMBRAR</td><td class="p-2.5 border border-slate-200">• <strong>Sem pronome:</strong> VTD (<em>Esqueci o crachá</em>).<br>• <strong>Com pronome (pronominal):</strong> VTI com <strong>DE</strong> (<em>Esqueci-me <strong>do</strong> crachá</em>).</td></tr>
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">7. CHEGAR / IR vs. MORAR / RESIDIR</td><td class="p-2.5 border border-slate-200">• Chegar e Ir exigem <strong>A</strong> (<em>Chegou <strong>a</strong> Porto Velho / <strong>ao</strong> distrito</em>).<br>• Morar, Residir e Situar-se exigem <strong>EM</strong> (<em>Mora <strong>na</strong> Rua Sete de Setembro</em>).</td></tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Implicar (acarretar):</strong> É VTD (sem "em"!): <em>A recusa implica penalidade</em>.</li>
  <li><strong>Preferir:</strong> <em>Prefiro X <strong>a</strong> Y</em> (proibido usar "mais" ou "do que").</li>
  <li><strong>Regência com Pronome Relativo:</strong> Olhe o verbo depois do pronome! <em>"O manual <strong>a que</strong> obedecemos"</em> (obedecer A) | <em>"O cargo <strong>a que</strong> aspiramos"</em> (aspirar A).</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Regência Verbal e Pronome Relativo) Assinale a alternativa em que a regência verbal e o emprego do pronome relativo respeitam integralmente a norma-padrão:',
      options: [
        'O protocolo sanitário que os agentes devem obedecer implica em redução imediata dos criadouros.',
        'A capacitação técnica a que todos os agentes assistiram ontem visa ao aprimoramento das ações de campo.',
        'Os servidores preferem mais trabalhar no turno da manhã do que no turno da tarde.',
        'A equipe chegou no distrito ribeirinho às sete horas e lembrou dos equipamentos de proteção.',
      ],
      ans: 1,
      comment: 'Em B: "assistir" (ver/presenciar) exige preposição A ("a capacitação a que assistiram") e "visar" (ter por objetivo) exige preposição A ("visa ao aprimoramento"). Em A, obedecer exige "a" ("ao qual devem obedecer") e implicar (acarretar) não aceita "em".',
    },
  ],
  flashcards: [
    { f: 'Qual é a regência correta do verbo IMPLICAR no sentido de "acarretar / produzir como consequência"?', b: 'É Transitivo Direto (VTD), SEM a preposição "em": "O atraso implicará perda do prazo".' },
    { f: 'Como se constrói a regência padrão do verbo PREFERIR?', b: 'Prefere-se uma coisa A outra (sem "mais", sem "antes" e sem "do que"): "Prefiro prevenção a remédio".' },
  ],
});

const newBlock_POR12_CraseCompleta = makeBlock({
  title: 'Bloco 12.1 — Mapa Definitivo da Crase: Regra Geral, os 10 Casos Proibidos, os 3 Casos Facultativos e os Casos Obrigatórios',
  sourceRef: 'Anexo IV — Língua Portuguesa (Item 12: Crase)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-teal-950/90 text-white border border-teal-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 12 de Língua Portuguesa — Emprego da Crase</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Tudo o Que Você Precisa para Acertar 100% das Questões de Crase da IBGP</h4>
    <p class="text-xs text-teal-100 mt-1">Crase é a fusão da preposição <strong>a</strong> com o artigo feminino <strong>a(s)</strong> (ou com o <em>a</em> inicial de <em>aquele/aquela/aquilo</em>). <strong>Macete infalível:</strong> Troque a palavra feminina por uma <strong>masculina equivalente</strong>; se no masculino aparecer <strong>AO(S)</strong>, há crase no feminino!</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
    <div class="p-3.5 rounded-xl bg-rose-50 border border-rose-200 space-y-1.5">
      <div class="font-extrabold text-rose-950">🚫 1. Casos PROIBIDOS (Nunca use!)</div>
      <p class="text-slate-700">1) Antes de palavra <strong>masculina</strong> (<em>a pé, a cavalo, a prazo</em>).<br>2) Antes de <strong>verbo</strong> no infinitivo (<em>a partir de, começou a chover</em>).<br>3) Antes de <strong>artigo indefinido</strong> (<em>a uma hora</em>).<br>4) Antes de pronomes pessoais, de tratamento, indefinidos (<em>a ela, a Vossa Senhoria, a toda gente, a qualquer</em>).<br>5) Entre palavras repetidas (<em>gota a gota, frente a frente, dia a dia</em>).<br>6) <strong>"A" no singular + palavra no plural:</strong> crase nem a pau! (<em>Refiro-me a situações graves</em>).</p>
    </div>
    <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 space-y-1.5">
      <div class="font-extrabold text-amber-950">⚖️ 2. Os 3 Casos FACULTATIVOS</div>
      <p class="text-slate-700"><strong>Mnemônico: "ATÉ MARIA SUA amiga"</strong><br>1) Depois da preposição <strong>ATÉ</strong> + palavra feminina (<em>Fui até a / até à secretaria</em>).<br>2) Antes de <strong>nome próprio feminino</strong> no singular (<em>Entreguei a / à Maria</em>).<br>3) Antes de <strong>pronome possessivo adjetivo feminino</strong> no singular (<em>Refiro-me a sua / à sua equipe</em> — se estiver no plural com "s", <em>às suas</em>, é obrigatória!).</p>
    </div>
    <div class="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5">
      <div class="font-extrabold text-emerald-950">✅ 3. Casos OBRIGATÓRIOS</div>
      <p class="text-slate-700">1) <strong>Locuções adverbiais, prepositivas e conjuntivas femininas:</strong> <em>às vezes, à noite, à tarde, à vista, às pressas, à medida que, à proporção que, à espera de</em>.<br>2) <strong>Horas determinadas:</strong> <em>A prova começará às 14h45</em> (exceto após <em>para, desde, após, entre</em>).<br>3) Expressão <strong>"à moda de"</strong> subentendida (mesmo diante de masculino: <em>bife à milanesa, gol à Pelé</em>).</p>
    </div>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Teste do Masculino:</strong> <em>Vou à unidade $\\rightarrow$ Vou <strong>ao</strong> posto</em> (tem crase!).</li>
  <li><strong>Teste do "Vou a, volto DA":</strong> <em>Vou a Porto Velho, volto <strong>DE</strong> Porto Velho</em> (crase pra quê?); <em>Vou à Bahia, volto <strong>DA</strong> Bahia</em> (crase há!).</li>
  <li><strong>Singular antes de Plural:</strong> <em>"a" + plural = PROIBIDO crase</em>; <em>"às" + plural = OBRIGATÓRIO crase</em>.</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Emprego do Sinal Indicativo de Crase) Assinale a alternativa em que o emprego do acento grave indicativo de crase é OBRIGATÓRIO em todas as ocorrências:',
      options: [
        'O agente dirigiu-se àquela residência às nove horas da manhã, à procura de possíveis criadouros.',
        'A orientação foi repassada gota à gota à toda a população a partir de segunda-feira.',
        'Entregamos o boletim à coordenadora e retornamos à Porto Velho à pé.',
        'O curso refere-se à medidas preventivas aplicadas à qualquer imóvel urbano.',
      ],
      ans: 0,
      comment: 'Em A: "dirigiu-se àquela" (preposição a + pronome demonstrativo aquela), "às nove horas" (locução adverbial de hora exata) e "à procura de" (locução prepositiva de base feminina). Em B, C e D há casos proibidos (gota a gota, a toda, a Porto Velho, a pé, a medidas, a qualquer).',
    },
  ],
  flashcards: [
    { f: 'Quais são os 3 únicos casos em que a crase é FACULTATIVA?', b: '1) Após a preposição ATÉ; 2) Diante de nomes próprios femininos; 3) Diante de pronomes possessivos femininos no singular (minha, tua, sua, nossa, vossa).' },
    { f: 'Por que não há crase em "O agente orientou a respeito de visitas a residências fechadas"?', b: 'Porque "respeito" é palavra masculina e em "a residências" o "a" está no singular diante de palavra no plural (sem artigo definido).' },
  ],
});

const newBlock_POR13_ColocacaoPronominal = makeBlock({
  title: 'Bloco 13.3 — Colocação Pronominal Completa: As 6 Palavras Atrativas de Próclise (NRPISD), Mesóclise, Ênclise e Locuções Verbais',
  sourceRef: 'Anexo IV — Língua Portuguesa (Item 13: Colocação pronominal)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-indigo-950/90 text-white border border-indigo-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 13 de Língua Portuguesa — Topografia Pronominal</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Próclise (Antes), Mesóclise (No Meio) e Ênclise (Depois do Verbo)</h4>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
    <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 space-y-1.5">
      <div class="font-extrabold text-teal-950">1. Próclise Obrigatória (Fatores Atrativos)</div>
      <p class="text-slate-700">• <strong>Palavras Negativas:</strong> <em>não, nunca, jamais, ninguém, nada</em> (<em>Não <strong>se</strong> esqueça</em>).<br>• <strong>Advérbios (sem vírgula após eles!):</strong> <em>Aqui <strong>se</strong> trabalha</em> (se houver vírgula, usa-se ênclise: <em>Aqui, trabalha-<strong>se</strong></em>).<br>• <strong>Pronomes Relativos, Indefinidos e Interrogativos:</strong> <em>que, quem, onde, tudo, alguém, quanto</em>.<br>• <strong>Conjunções Subordinativas:</strong> <em>embora, quando, se, como, conforme</em>.<br>• <strong>Em + Gerúndio:</strong> <em>Em <strong>se</strong> tratando de saúde</em>.</p>
    </div>
    <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 space-y-1.5">
      <div class="font-extrabold text-amber-950">2. Mesóclise (Futuros sem Atrativo)</div>
      <p class="text-slate-700">Usada exclusivamente com verbos no <strong>Futuro do Presente</strong> ou <strong>Futuro do Pretérito</strong> quando <u>NÃO houver palavra atrativa</u> antes do verbo:<br>• <em>Realizar-<strong>se</strong>-á a conferência amanhã.</em><br>• <em>Far-<strong>se</strong>-ia nova vistoria se necessário.</em><br>(Atenção: se houver palavra atrativa, a próclise vence a mesóclise: <em>Não <strong>se</strong> realizará</em>).</p>
    </div>
    <div class="p-3.5 rounded-xl bg-rose-50 border border-rose-200 space-y-1.5">
      <div class="font-extrabold text-rose-950">3. As 3 Proibições Absolutas e Ênclise</div>
      <p class="text-slate-700">1) <strong>NUNCA inicie período com pronome oblíquo átono</strong> (<em>Me entregue</em> $\\rightarrow$ errado; correto: <em>Entregue-<strong>me</strong></em>).<br>2) <strong>NUNCA use ênclise no Futuro</strong> (<em>*realizará-se</em> é proibido).<br>3) <strong>NUNCA use ênclise no Particípio</strong> (<em>*tinha entregado-lhe</em> é proibido; correto: <em>tinha-lhe entregado</em>).</p>
    </div>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Ordem de Prioridade:</strong> 1º Proibição de início de frase (Ênclise/Mesóclise) $\\rightarrow$ 2º Palavra Atrativa (Próclise) $\\rightarrow$ 3º Futuro sem atrativo (Mesóclise).</li>
  <li><strong>Advérbio + Vírgula:</strong> A vírgula quebra a atração do advérbio! <em>Hoje <strong>se</strong> sabe</em> vs. <em>Hoje, sabe-<strong>se</strong></em>.</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Colocação Pronominal) Assinale a alternativa em que a colocação do pronome oblíquo átono obedece rigorosamente à norma-padrão da língua portuguesa:',
      options: [
        'Me informaram que os novos equipamentos chegarão amanhã.',
        'Quando encerrar-se o ciclo do LIRAa, divulgarão-se os índices por bairro.',
        'Nunca se devem negligenciar os depósitos de água ao nível do solo.',
        'A equipe havia deslocado-se rapidamente para o distrito de Jaci-Paraná.',
      ],
      ans: 2,
      comment: 'Em C, o advérbio negativo "Nunca" é palavra atrativa que exige próclise ("Nunca se devem..."). Em A, iniciou-se período com oblíquo; em B, "Quando" exige próclise ("Quando se encerrar") e futuro proíbe ênclise ("divulgar-se-ão"); em D, particípio proíbe ênclise ("havia-se deslocado").',
    },
  ],
  flashcards: [
    { f: 'Quais são as 3 proibições absolutas de colocação pronominal na norma-padrão?', b: '1) Nunca iniciar frase com pronome átono; 2) Nunca usar ênclise em verbos no Futuro; 3) Nunca usar ênclise em verbos no Particípio.' },
    { f: 'O que acontece quando há uma vírgula logo após um advérbio no início da oração (ex.: "Ontem, ...")?', b: 'A vírgula anula a força atrativa do advérbio, tornando obrigatória a ênclise ("Ontem, realizou-se a vistoria").' },
  ],
});

const newBlock_POR14_EstruturaOracaoPeriodo = makeBlock({
  title: 'Bloco 14.3 — Termos da Oração (Complemento Nominal vs. Adjunto Adnominal) e Período Composto por Coordenação e Subordinação',
  sourceRef: 'Anexo IV — Língua Portuguesa (Item 14: Estrutura da oração e do período: aspectos sintáticos e semânticos)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-teal-950/90 text-white border border-teal-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 14 de Língua Portuguesa — Sintaxe da Oração e do Período</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Análise Sintática Completa: Termos da Oração e Classificação das Orações Coordenadas e Subordinadas</h4>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
      <div class="font-extrabold text-slate-900">1. Adjunto Adnominal (AA) vs. Complemento Nominal (CN)</div>
      <p class="text-slate-700">Quando um termo preposicionado com <strong>DE</strong> acompanha um <strong>substantivo abstrato</strong>:<br>• <strong>Adjunto Adnominal (Agente / Posse):</strong> pratica a ação (<em>"A vistoria <strong>do agente</strong> foi rápida"</em> $\\rightarrow$ o agente vistoriou = AA).<br>• <strong>Complemento Nominal (Paciente / Alvo):</strong> sofre a ação ou completa adjetivo/advérbio (<em>"A vistoria <strong>do imóvel</strong> foi rápida"</em> $\\rightarrow$ o imóvel foi vistoriado = CN).</p>
    </div>
    <div class="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 space-y-1.5">
      <div class="font-extrabold text-indigo-950">2. Orações Subordinadas Adjetivas: Restritiva vs. Explicativa</div>
      <p class="text-slate-700">Introduzidas por pronome relativo (<em>que = o qual</em>):<br>• <strong>Restritiva (SEM vírgulas):</strong> limita/restringe o sentido a uma parte do grupo (<em>"Os moradores <strong>que limpam o quintal</strong> evitam a dengue"</em> $\\rightarrow$ apenas os que limpam).<br>• <strong>Explicativa (COM vírgulas):</strong> generaliza uma característica própria de todo o conjunto (<em>"O homem, <strong>que é mortal</strong>, precisa cuidar da saúde"</em>).</p>
    </div>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>AA vs. CN (Substantivo Abstrato):</strong> Agente = <strong>Adjunto Adnominal</strong>; Paciente = <strong>Complemento Nominal</strong>. Se ligar a adjetivo ou advérbio, é SEMPRE <strong>Complemento Nominal</strong>!</li>
  <li><strong>Adjetiva sem vírgula = Restritiva</strong> (parte); <strong>Adjetiva com vírgula = Explicativa</strong> (todo).</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Aspectos Sintáticos e Semânticos do Período) Compare os dois períodos abaixo:\nI. "Os reservatórios que estavam destampados receberam tratamento larvicida."\nII. "Os reservatórios, que estavam destampados, receberam tratamento larvicida."\nSobre o efeito sintático e semântico da pontuação nesses períodos, é CORRETO afirmar que:',
      options: [
        'Em I e II o sentido é exatamente idêntico, sendo o uso das vírgulas meramente estilístico.',
        'Em I, a oração adjetiva restritiva indica que apenas uma parte dos reservatórios (os que estavam destampados) recebeu tratamento; em II, a oração adjetiva explicativa indica que todos os reservatórios estavam destampados e todos receberam tratamento.',
        'Em I há erro gramatical por ausência de vírgulas obrigatórias antes do pronome relativo.',
        'Em II a oração destacada entre vírgulas classifica-se como subordinada substantiva objetiva direta.',
      ],
      ans: 1,
      comment: 'A retirada ou colocação de vírgulas em orações subordinadas adjetivas altera a classificação sintática (de restritiva para explicativa) e muda o sentido semântico do período (de subconjunto restrito para totalidade).',
    },
  ],
  flashcards: [
    { f: 'Como diferenciar Adjunto Adnominal de Complemento Nominal diante de um substantivo abstrato?', b: 'Se o termo preposicionado pratica a ação (sentido ativo/agente), é Adjunto Adnominal; se sofre a ação (sentido passivo/paciente), é Complemento Nominal.' },
    { f: 'Qual a diferença semântica entre Oração Adjetiva Restritiva (sem vírgula) e Explicativa (com vírgula)?', b: 'A Restritiva particulariza/restringe um subgrupo; a Explicativa generaliza uma informação válida para todos os elementos do termo antecedente.' },
  ],
});

const newBlock_POR15_AcentuacaoCompleta = makeBlock({
  title: 'Bloco 15.2 — Síntese das Regras de Acentuação Gráfica e Mudanças do Novo Acordo Ortográfico (Ditongos Abertos, Hiatos e Acentos Diferenciais)',
  sourceRef: 'Anexo IV — Língua Portuguesa (Item 15: Acentuação gráfica)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-amber-950/90 text-white border border-amber-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 15 de Língua Portuguesa — Acentuação Gráfica</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Tabela Completa de Acentuação Gráfica (Não Caia na Pegadinha da "Mesma Regra"!)</h4>
    <p class="text-xs text-amber-100 mt-1">A questão mais clássica da IBGP pede para assinalar as palavras acentuadas pela <strong>MESMA REGRA</strong>. Atenção máxima: uma paroxítona terminada em ditongo crescente (<em>histó-ria, sa-ú-de? Não! Sa-ú-de é hiato!</em>) tem regra diferente de uma proparoxítona (<em>mé-di-co</em>) e da regra do hiato (<em>sa-ú-de, pa-ís, ba-ú</em>)!</p>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left border-collapse text-xs border border-slate-300">
      <thead>
        <tr class="bg-slate-900 text-white">
          <th class="p-2.5 border border-slate-700">Regra de Acentuação</th>
          <th class="p-2.5 border border-slate-700">Critério Oficial</th>
          <th class="p-2.5 border border-slate-700">Exemplos e Pegadinhas do Acordo Ortográfico</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">1. Proparoxítonas</td><td class="p-2.5 border border-slate-200"><strong>TODAS</strong> são acentuadas (antepenúltima sílaba tônica).</td><td class="p-2.5 border border-slate-200"><em>Médico, lâmpada, público, trânsito, ínterim, rúbrica?</em> (Cuidado: o correto é <strong>ru-bri-ca</strong>, paroxítona sem acento!).</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">2. Oxítonas e Monossílabos Tônicos</td><td class="p-2.5 border border-slate-200">• <strong>Oxítonas:</strong> terminadas em <strong>A(s), E(s), O(s), EM, ENS</strong>.<br>• <strong>Monossílabos tônicos:</strong> terminados em <strong>A(s), E(s), O(s)</strong>.</td><td class="p-2.5 border border-slate-200">• Oxítonas: <em>Vatapá, café, cipó, armazém, parabéns</em>.<br>• Monossílabos: <em>Pá, pé, pó, mês, pôs</em>.</td></tr>
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">3. Paroxítonas (Regra Geral e Ditongo)</td><td class="p-2.5 border border-slate-200">Acentuam-se as terminadas em <strong>R, X, N, L, I(s), US, UM/UNS, Ã(s), ÃO(s), PS</strong> e <strong>DITONGO (oral)</strong>.</td><td class="p-2.5 border border-slate-200"><em>Caráter, tórax, hífen (mas <strong>hifens</strong> sem acento!), fácil, júri, vírus, álbum, órfã, órgão, bíceps, <strong>história, série, água, mágoa</strong></em>.</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">4. Regra Especial do Hiato (I e U)</td><td class="p-2.5 border border-slate-200">Acentuam-se o <strong>I</strong> e o <strong>U</strong> tônicos quando formam hiato com a vogal anterior, sozinhos na sílaba (ou com S), desde que não seguidos de NH.</td><td class="p-2.5 border border-slate-200"><em>Sa-<strong>ú</strong>-de, sa-<strong>í</strong>-da, pa-<strong>í</strong>s, ba-<strong>ú</strong>, ga-<strong>ú</strong>-cho</em>.<br><strong>Acordo Ortográfico:</strong> Caiu o acento de I e U após ditongo decrescente em paroxítonas (<em>feiura, baiuca</em>), mas manteve-se nas oxítonas (<em>Piauí, tuiuiú</em>).</td></tr>
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">5. Ditongos Abertos (ÉI, ÉU, ÓI) e Diferenciais</td><td class="p-2.5 border border-slate-200">• <strong>ÉI, ÉU, ÓI:</strong> só têm acento nas <strong>OXÍTONAS</strong> e <strong>MONOSSÍLABOS</strong> (<em>herói, chapéu, anéis, céu, dói</em>). Perderam o acento nas <strong>PAROXÍTONAS</strong> (<em>ideia, assembleia, heroico, jiboia, boia</em>).<br>• <strong>Diferenciais mantidos:</strong> <em>pôde</em> (passado) vs. <em>pode</em> (presente); <em>pôr</em> (verbo) vs. <em>por</em> (prep.); <em>tem/vem</em> (sing.) vs. <em>têm/vêm</em> (plural); <em>mantém/mantêm</em>.</td><td class="p-2.5 border border-slate-200">Caiu o acento de <em>vôo $\\rightarrow$ voo, lêem $\\rightarrow$ leem, crêem $\\rightarrow$ creem, dêem $\\rightarrow$ deem, pára $\\rightarrow$ para</em>.</td></tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Sa-ú-de, pa-ís, ra-í-zes:</strong> Regra do <strong>HIATO</strong> (não confunda com oxítona ou paroxítona comum!).</li>
  <li><strong>Histó-ria, vigilân-cia, espé-cie:</strong> Paroxítonas terminadas em <strong>ditongo crescente</strong>.</li>
  <li><strong>Ideia, heroico, assembleia, jiboia:</strong> Sem acento (ditongo aberto em paroxítona perdeu o acento!).</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Regras de Acentuação Gráfica) Assinale a alternativa em que TODAS as palavras são acentuadas exatamente pela mesma regra gramatical:',
      options: [
        'Saúde, período, vigilância.',
        'Sanitário, endêmico, público.',
        'País, baú, saída.',
        'Café, cipó, Piauí.',
      ],
      ans: 2,
      comment: 'Em C, "pa-ís", "ba-ú" e "sa-í-da" são todas acentuadas pela regra especial do HIATO (vogais tônicas I e U em hiato, sozinhas na sílaba ou com S). Em A: saúde (hiato), período (proparoxítona), vigilância (paroxítona terminada em ditongo). Em B: sanitário é paroxítona terminada em ditongo. Em D: Piauí é hiato.',
    },
  ],
  flashcards: [
    { f: 'Por que as palavras "ideia", "jiboia" e "heroico" não possuem mais acento agudo?', b: 'Porque, pelo Novo Acordo Ortográfico, os ditongos abertos ÉI e ÓI perderam o acento nas palavras PAROXÍTONAS (mantendo-se apenas nas oxítonas, como "herói" e "papéis").' },
    { f: 'Qual é a regra que justifica o acento nas palavras "saúde", "baú" e "egoísta"?', b: 'A regra do HIATO: acentuam-se o I e o U tônicos em hiato com a vogal anterior, sozinhos na sílaba ou acompanhados de S.' },
  ],
});

const newBlock_POR16_OrtografiaDificuldades = makeBlock({
  title: 'Bloco 16.2 — Dificuldades Ortográficas de Prova: Mal vs. Mau, Onde vs. Aonde, Mas vs. Mais, Há vs. A, Senão vs. Se não e Afim vs. A fim de',
  sourceRef: 'Anexo IV — Língua Portuguesa (Item 16: Ortografia)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-teal-950/90 text-white border border-teal-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 16 de Língua Portuguesa — Ortografia Oficial</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Tabela Prática de Expressões Ortográficas que Caem em Todas as Provas IBGP</h4>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left border-collapse text-xs border border-slate-300">
      <thead>
        <tr class="bg-slate-900 text-white">
          <th class="p-2.5 border border-slate-700">Expressão</th>
          <th class="p-2.5 border border-slate-700">Regra de Substituição Rápida</th>
          <th class="p-2.5 border border-slate-700">Exemplo Correto</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">MAL vs. MAU</td><td class="p-2.5 border border-slate-200">• <strong>MAL $\\leftrightarrow$ BEM</strong> (advérbio, substantivo ou conjunção temporal = "assim que").<br>• <strong>MAU $\\leftrightarrow$ BOM</strong> (adjetivo que qualifica substantivo).</td><td class="p-2.5 border border-slate-200">"Ele passou <strong>mal</strong> (bem) por causa do <strong>mau</strong> (bom) cheiro." / "<strong>Mal</strong> (assim que) chegou, choveu."</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">ONDE vs. AONDE</td><td class="p-2.5 border border-slate-200">• <strong>ONDE (= EM que lugar):</strong> verbos de permanência/estáticos (morar, estar, ficar).<br>• <strong>AONDE (= A que lugar):</strong> verbos de movimento que regem preposição <strong>A</strong> (ir, chegar, dirigir-se).</td><td class="p-2.5 border border-slate-200">"O bairro <strong>onde</strong> moro é tranquilo; <strong>aonde</strong> você vai agora?"</td></tr>
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">HÁ vs. A (Tempo/Distância)</td><td class="p-2.5 border border-slate-200">• <strong>HÁ (= faz / passado):</strong> tempo já decorrido.<br>• <strong>A (futuro ou distância):</strong> tempo futuro ("daqui a") ou distância espacial.</td><td class="p-2.5 border border-slate-200">"O posto foi inaugurado <strong>há</strong> dois anos, fica <strong>a</strong> cem metros daqui e fechará daqui <strong>a</strong> duas horas."</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">SENÃO vs. SE NÃO</td><td class="p-2.5 border border-slate-200">• <strong>SE NÃO (separado):</strong> equivale a <strong>"caso não"</strong> (condição).<br>• <strong>SENÃO (junto):</strong> equivale a "do contrário", "exceto/salvo", "mas sim" ou "defeito/falha".</td><td class="p-2.5 border border-slate-200">"Tampe a caixa, <strong>senão</strong> (do contrário) o mosquito prolifera." / "<strong>Se não</strong> (caso não) chover, iremos ao campo."</td></tr>
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">A FIM DE vs. AFIM</td><td class="p-2.5 border border-slate-200">• <strong>A FIM DE (separado):</strong> finalidade (= <strong>para</strong>).<br>• <strong>AFIM (junto):</strong> adjetivo que indica semelhança/afinidade (<em>ideias afins</em>).</td><td class="p-2.5 border border-slate-200">"Estudou <strong>a fim de</strong> (para) ser aprovado em cargos <strong>afins</strong> (semelhantes)."</td></tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Mal $\\leftrightarrow$ Bem</strong> | <strong>Mau $\\leftrightarrow$ Bom</strong>.</li>
  <li><strong>Há</strong> (passado = faz) vs. <strong>A</strong> (futuro = daqui a / distância).</li>
  <li><strong>Se não</strong> (= caso não) vs. <strong>Senão</strong> (= do contrário / exceto).</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Ortografia Oficial) Assinale a alternativa em que o preenchimento das lacunas obedece rigorosamente à ortografia oficial:\n"__________ seis meses a equipe atua no distrito __________ ficam as comunidades ribeirinhas, __________ orientar os moradores; __________ houver colaboração de todos, o índice de infestação subirá."',
      options: [
        'A / aonde / afim de / senão',
        'Há / onde / a fim de / se não',
        'Há / aonde / a fim de / senão',
        'A / onde / afim de / se não',
      ],
      ans: 1,
      comment: 'Tempo decorrido no passado = HÁ ("Há seis meses"); lugar estático com o verbo "ficam" = ONDE; finalidade (= para) = A FIM DE; condição negativa (= caso não) = SE NÃO.',
    },
  ],
  flashcards: [
    { f: 'Quando usar HÁ e quando usar A em expressões de tempo e distância?', b: 'Usa-se HÁ para tempo passado decorrido (= faz); usa-se A para tempo futuro ("daqui a pouco") ou distância física ("a dois quilômetros").' },
    { f: 'Qual a diferença entre ONDE e AONDE?', b: 'ONDE indica lugar fixo/permanência (em que); AONDE indica movimento/destino com verbos que exigem a preposição A (ir aonde, chegar aonde).' },
  ],
});

const newBlock_POR17_PontuacaoCompleta = makeBlock({
  title: 'Bloco 17.2 — As 4 Proibições Mortais da Vírgula (SVC), Casos Obrigatórios de Vírgula e Emprego de Ponto e Vírgula, Dois-Pontos e Travessão',
  sourceRef: 'Anexo IV — Língua Portuguesa (Item 17: Pontuação)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-indigo-950/90 text-white border border-indigo-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 17 de Língua Portuguesa — Pontuação</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Regra Áurea da Pontuação: A Ordem Direta SVC (Sujeito + Verbo + Complemento)</h4>
    <p class="text-xs text-indigo-100 mt-1">Mais de 90% das questões de pontuação da IBGP tentam colocar <strong>UMA única vírgula</strong> entre o <strong>Sujeito e o Verbo</strong> ou entre o <strong>Verbo e o Objeto</strong>. Isso é um erro sintático grave!</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
    <div class="p-3.5 rounded-xl bg-rose-50 border border-rose-200 space-y-1.5">
      <div class="font-extrabold text-rose-950">🚫 Quando a Vírgula é PROIBIDA</div>
      <p class="text-slate-700">1) Entre <strong>Sujeito e Verbo</strong> (mesmo que o sujeito seja imenso!).<br>2) Entre <strong>Verbo e Complemento</strong> (Objeto Direto ou Indireto).<br>3) Entre <strong>Nome e Adjunto Adnominal / Complemento Nominal</strong>.<br>4) Entre a oração principal e a <strong>Oração Subordinada Substantiva</strong> (salvo apositiva).</p>
    </div>
    <div class="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5">
      <div class="font-extrabold text-emerald-950">✅ Quando a Vírgula (ou Duplo Travessão) é OBRIGATÓRIA</div>
      <p class="text-slate-700">1) Isolar <strong>Vocativo</strong> (<em>"Morador, receba o agente!"</em>).<br>2) Isolar <strong>Aposto Explicativo</strong> (<em>"Porto Velho, capital de Rondônia, realiza o LIRAa."</em> — pode ser substituído por <strong>duplo travessão</strong> ou <strong>parênteses</strong>!).<br>3) Isolar <strong>Adjunto Adverbial Deslocado</strong> de longa extensão (3 ou mais palavras).<br>4) Antes de conjunções <strong>adversativas</strong> (<em>mas, porém, contudo, todavia</em>) e <strong>explicativas/conclusivas</strong>.<br>5) Separar <strong>Orações Subordinadas Adverbiais Antepostas</strong> à principal.</p>
    </div>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Proibição SVC:</strong> NUNCA separe Sujeito de Verbo nem Verbo de Complemento com uma única vírgula!</li>
  <li><strong>Duas vírgulas intercaladas $\\leftrightarrow$ Dois travessões $\\leftrightarrow$ Parênteses:</strong> Isolam aposto explicativo, oração adjetiva explicativa ou adjunto adverbial intercalado.</li>
  <li><strong>Dois-pontos (:):</strong> Introduzem aposto enumerativo/explicativo, citação direta ou esclarecimento.</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Pontuação: Emprego da Vírgula e do Travessão) No período "O Levantamento Rápido de Índices para Aedes aegypti (LIRAa), instrumento essencial da vigilância entomológica, permite mapear os bairros prioritários", as duas vírgulas que isolam o trecho "instrumento essencial da vigilância entomológica" foram empregadas para:',
      options: [
        'Separar o sujeito composto do predicado verbal.',
        'Isolar um aposto explicativo, podendo ser corretamente substituídas por um par de travessões ou por parênteses sem prejuízo gramatical ou semântico.',
        'Isolar um vocativo dirigido ao leitor do texto.',
        'Marcar a elipse do verbo principal da oração.',
      ],
      ans: 1,
      comment: 'O termo "instrumento essencial da vigilância entomológica" explica o substantivo antecedente ("LIRAa"), exercendo a função sintática de aposto explicativo, que deve vir isolado por vírgulas, travessões duplos ou parênteses.',
    },
  ],
  flashcards: [
    { f: 'Qual é a regra mais cobrada pela banca IBGP sobre o uso PROIBIDO da vírgula?', b: 'Nunca separar com uma única vírgula o Sujeito do Verbo, nem o Verbo de seus Complementos (Objeto Direto e Indireto).' },
    { f: 'Quais sinais de pontuação podem substituir o par de vírgulas que isola um aposto explicativo?', b: 'Um par de travessões (— ... —) ou um par de parênteses (( ... )).' },
  ],
});

const newBlock_POR18_VariacaoLinguistica = makeBlock({
  title: 'Bloco 18.2 — As 4 Dimensões da Variação Linguística (Diatópica, Diastrática, Diafásica e Diacrônica), Norma-Padrão vs. Norma Culta e Adequação',
  sourceRef: 'Anexo IV — Língua Portuguesa (Item 18: Variação linguística)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-teal-950/90 text-white border border-teal-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 18 de Língua Portuguesa — Variação Linguística</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Os 4 Tipos de Variação Linguística (Geográfica, Social, Situacional e Histórica)</h4>
    <p class="text-xs text-teal-100 mt-1">A Sociolinguística ensina que nenhuma língua é homogênea ou estática: a língua varia conforme o <strong>lugar</strong>, o <strong>grupo social</strong>, a <strong>situação comunicativa</strong> e a <strong>época histórica</strong>.</p>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left border-collapse text-xs border border-slate-300">
      <thead>
        <tr class="bg-slate-900 text-white">
          <th class="p-2.5 border border-slate-700">Tipo de Variação</th>
          <th class="p-2.5 border border-slate-700">Fator Determinante</th>
          <th class="p-2.5 border border-slate-700">Exemplo Clássico de Prova</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">1. Diatópica (Geográfica ou Regional)</td><td class="p-2.5 border border-slate-200">Diferenças de vocabulário e sotaque conforme a <strong>região/espaço geográfico</strong> (regionalismos).</td><td class="p-2.5 border border-slate-200"><em>Macaxeira / mandioca / aipim</em>; <em>jerimum / abóbora</em>; <em>carapanã / muriçoca / pernilongo</em> (em RO usa-se muito <em>carapanã</em>!).</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">2. Diastrática (Social ou Cultural)</td><td class="p-2.5 border border-slate-200">Diferenças associadas a <strong>grupos sociais</strong>, faixa etária, profissão (jargão técnico) ou grau de escolaridade (gírias e socioletons).</td><td class="p-2.5 border border-slate-200">Jargão médico/epidemiológico (<em>arbovirose, sorotipo, profilaxia</em>) vs. gíria juvenil.</td></tr>
        <tr class="bg-white"><td class="p-2.5 font-bold border border-slate-200">3. Diafásica (Situacional ou de Registro)</td><td class="p-2.5 border border-slate-200">O <strong>mesmo falante</strong> adapta seu grau de formalidade conforme o <strong>contexto/interlocutor</strong> (registro formal vs. informal/coloquial).</td><td class="p-2.5 border border-slate-200">Um ACE redige um ofício em norma-padrão formal ao Secretário, mas conversa em tom coloquial e acessível com o morador na visita domiciliar.</td></tr>
        <tr class="bg-slate-50"><td class="p-2.5 font-bold border border-slate-200">4. Diacrônica (Histórica ou Temporal)</td><td class="p-2.5 border border-slate-200">Evolução das palavras e construções ao longo do <strong>tempo histórico</strong> (arcaísmos vs. neologismos).</td><td class="p-2.5 border border-slate-200"><em>Vossa Mercê $\\rightarrow$ Vosmecê $\\rightarrow$ Você $\\rightarrow$ Cê</em>; <em>Pharmacia $\\rightarrow$ Farmácia</em>.</td></tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Diatópica (Topo = Lugar):</strong> Regionalismos (<em>carapanã / pernilongo</em>).</li>
  <li><strong>Diastrática (Estrato = Grupo Social):</strong> Gírias e jargões profissionais.</li>
  <li><strong>Diafásica (Fase/Situação):</strong> Formal vs. Informal (adequação ao ouvinte e ao ambiente).</li>
  <li><strong>Diacrônica (Crono = Tempo):</strong> Evolução histórica da língua (<em>Vossa Mercê $\\rightarrow$ Você</em>).</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Variação Linguística) Durante uma visita domiciliar em um distrito de Porto Velho, o Agente de Combate às Endemias explica ao morador: "Seu João, precisamos eliminar a água parada para não dar carapanã nem mosquito da dengue". Ao retornar à base, o mesmo agente registra no sistema oficial: "Realizada orientação em saúde quanto à eliminação de potenciais criadouros de culicídeos vetores". A mudança de linguagem realizada pelo mesmo falante para adequar-se aos diferentes interlocutores e contextos comunicativos exemplifica a variação:',
      options: [
        'Diacrônica (ou histórica).',
        'Diafásica (ou situacional/de registro).',
        'Ortográfica arcaica.',
        'Fonológica patológica.',
      ],
      ans: 1,
      comment: 'Quando um mesmo falante alterna entre o registro informal/acessível e o registro técnico/formal de acordo com a situação comunicativa e o interlocutor, ocorre a variação diafásica (situacional). Além disso, o uso do termo regional amazônico "carapanã" ilustra riqueza vocabular diatópica.',
    },
  ],
  flashcards: [
    { f: 'Como memorizar rapidamente os 4 nomes técnicos da Variação Linguística?', b: 'DiaTÓPICA = Topo/Lugar (regional); DiaSTRÁTICA = Estrato/Grupo social (jargão, gíria); DiaFÁSICA = Situação/Registro (formal vs. informal); DiaCRÔNICA = Crono/Tempo (histórica).' },
    { f: 'Na perspectiva linguística moderna cobrada em concursos, o registro coloquial é considerado um "erro" que deve ser banido?', b: 'Não! A linguística trabalha com o conceito de ADEQUAÇÃO: o registro formal é exigido em situações oficiais/escritas, e o registro coloquial é adequado em interações informais e familiares.' },
  ],
});

function renumberBlocks(blocks, lessonNum) {
  return blocks.map((b, idx) => {
    const cleanTitle = b.title.replace(/^Bloco\s+\d+\.\d+\s*—\s*/i, '');
    return {
      ...b,
      title: `Bloco ${lessonNum}.${idx + 1} — ${cleanTitle}`,
    };
  });
}

function finalizeLesson(lesson) {
  let qCount = 0;
  let fcCount = 0;
  lesson.blocks.forEach(b => {
    qCount += (b.questions || []).length;
    fcCount += (b.flashcards || []).length;
  });
  lesson.questionsCount = qCount;
  lesson.flashcardsCount = fcCount;
  return lesson;
}

const newPorLessons = [
  // 1 - Compreensão e interpretação de textos.
  finalizeLesson({
    id: 'por_1',
    cat: 'por',
    catName: 'Língua Portuguesa',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '1. Compreensão e interpretação de textos',
    editalRef: 'Item 1 de Língua Portuguesa — Compreensão e interpretação de textos.',
    mindMap: clone(byId['por_1'].mindMap),
    blocks: renumberBlocks([clone(byId['por_1'].blocks[0]), clone(byId['por_1'].blocks[1]), clone(newBlock_POR1_CompreensaoInterpretacao)], 1),
  }),

  // 2 - Gêneros e tipos de texto.
  finalizeLesson({
    id: 'por_2',
    cat: 'por',
    catName: 'Língua Portuguesa',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '2. Gêneros e tipos de texto',
    editalRef: 'Item 2 de Língua Portuguesa — Gêneros e tipos de texto.',
    mindMap: makeStandardMindMap(
      2,
      'Gêneros e Tipos de Texto',
      'Item 2 de Língua Portuguesa — As 5 Sequências Tipológicas vs. Gêneros Sociais',
      { title: '1. Narração e Descrição', icon: '📖', nodes: [{ label: 'Narrativo', detail: 'Enredo, personagens, tempo/espaço e fatos no passado' }, { label: 'Descritivo', detail: 'Retrato estático, adjetivos e verbos de ligação' }] },
      { title: '2. Exposição e Argumentação', icon: '⚖️', nodes: [{ label: 'Expositivo', detail: 'Informa e explica dados com neutralidade' }, { label: 'Argumentativo', detail: 'Defende tese com argumentos para persuadir' }] },
      { title: '3. Injunção (Instrucional)', icon: '📋', nodes: [{ label: 'Verbos no Imperativo', detail: 'Orientações, ordens, manuais, receitas e editais' }, { label: 'Campanhas de Saúde', detail: 'Cartazes educativos do ACE/SEMUSA' }] },
      { title: '4. Gêneros Textuais', icon: '📰', nodes: [{ label: 'Jornalísticos', detail: 'Notícia (expositiva) vs. Editorial/Artigo (opinativo)' }, { label: 'Literários e Oficiais', detail: 'Crônica, Conto, Tirinha, Ofício e Portaria' }] }
    ),
    blocks: renumberBlocks([clone(newBlock_POR2_TipologiasGeneros), clone(byId['por_1'].blocks[3])], 2),
  }),

  // 3 - Significação das palavras.
  finalizeLesson({
    id: 'por_3',
    cat: 'por',
    catName: 'Língua Portuguesa',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '3. Significação das palavras',
    editalRef: 'Item 3 de Língua Portuguesa — Significação das palavras.',
    mindMap: makeStandardMindMap(
      3,
      'Significação das Palavras',
      'Item 3 de Língua Portuguesa — Semântica Lexical, Parônimos, Homônimos e Polissemia',
      { title: '1. Sinonímia e Antonímia', icon: '🔄', nodes: [{ label: 'Sinônimos', detail: 'Sentidos equivalentes no contexto' }, { label: 'Antônimos', detail: 'Sentidos opostos (urbano ↔ rural)' }] },
      { title: '2. Homônimos e Parônimos', icon: '🔍', nodes: [{ label: 'Parônimos (Parecidos)', detail: 'Ratificar/Retificar, Iminente/Eminente, Infringir/Infligir' }, { label: 'Homônimos', detail: 'Seção/Sessão/Cessão, Conserto/Concerto' }] },
      { title: '3. Polissemia vs. Homonímia', icon: '🌳', nodes: [{ label: 'Polissemia', detail: 'Mesma palavra com múltiplos sentidos (cabeça, rede)' }, { label: 'Denotação vs. Conotação', detail: 'Sentido literal/dicionário vs. sentido figurado' }] },
      { title: '4. Hiperonímia e Hiponímia', icon: '🗂️', nodes: [{ label: 'Hiperônimo (Geral)', detail: 'Doença / Inseto / Município' }, { label: 'Hipônimo (Específico)', detail: 'Malária / Aedes aegypti / Porto Velho' }] }
    ),
    blocks: renumberBlocks([clone(byId['por_2'].blocks[1]), clone(newBlock_POR3_SemanticaParonimos)], 3),
  }),

  // 4 - Figuras de Sintaxe.
  finalizeLesson({
    id: 'por_4',
    cat: 'por',
    catName: 'Língua Portuguesa',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '4. Figuras de Sintaxe',
    editalRef: 'Item 4 de Língua Portuguesa — Figuras de Sintaxe.',
    mindMap: makeStandardMindMap(
      4,
      'Figuras de Sintaxe (Construção)',
      'Item 4 de Língua Portuguesa — Elipse, Zeugma, Silepse, Hipérbato, Anacoluto e Polissíndeto',
      { title: '1. Figuras por Omissão', icon: '✂️', nodes: [{ label: 'Elipse', detail: 'Omissão de termo subentendido não citado antes' }, { label: 'Zeugma', detail: 'Omissão de termo JÁ expresso antes (com vírgula)' }, { label: 'Assíndeto', detail: 'Omissão de conjunções coordenativas' }] },
      { title: '2. Figuras por Repetição', icon: '🔁', nodes: [{ label: 'Polissíndeto', detail: 'Repetição enfática de conjunção (e... e... e...)' }, { label: 'Anáfora', detail: 'Repetição de palavra no início de frases/versos' }, { label: 'Pleonasmo', detail: 'Redundância estilística ou objeto pleonástico' }] },
      { title: '3. Inversão e Ruptura', icon: '🔀', nodes: [{ label: 'Hipérbato', detail: 'Inversão da ordem direta Sujeito-Verbo-Complemento' }, { label: 'Anacoluto', detail: 'Termo inicial solto sem função sintática na oração' }] },
      { title: '4. Silepse (Ideológica)', icon: '🧠', nodes: [{ label: 'De Gênero', detail: 'Vossa Excelência ficou preocupado' }, { label: 'De Número e Pessoa', detail: 'A multidão gritaram / Os agentes estamos prontos' }] }
    ),
    blocks: renumberBlocks([clone(newBlock_POR4_FigurasSintaxe), clone(byId['por_2'].blocks[3])], 4),
  }),

  // 5 - Figuras de Linguagem.
  finalizeLesson({
    id: 'por_5',
    cat: 'por',
    catName: 'Língua Portuguesa',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '5. Figuras de Linguagem',
    editalRef: 'Item 5 de Língua Portuguesa — Figuras de Linguagem.',
    mindMap: makeStandardMindMap(
      5,
      'Figuras de Linguagem',
      'Item 5 de Língua Portuguesa — Figuras de Palavras, de Pensamento e de Som',
      { title: '1. Figuras de Palavras (Tropos)', icon: '🎭', nodes: [{ label: 'Metáfora vs. Comparação', detail: 'Sem conectivo vs. Com conectivo (como, tal qual)' }, { label: 'Metonímia e Catacrese', detail: 'Parte pelo todo / Continente pelo conteúdo; Asa da xícara' }, { label: 'Sinestesia', detail: 'Mistura de diferentes sentidos físicos' }] },
      { title: '2. Oposição e Pensamento', icon: '⚡', nodes: [{ label: 'Antítese vs. Paradoxo', detail: 'Palavras opostas vs. Contradição lógica fundida' }, { label: 'Ironia e Eufemismo', detail: 'Dizer o oposto sarcástico vs. Suavizar ideia dura' }] },
      { title: '3. Realce e Personificação', icon: '🌟', nodes: [{ label: 'Hipérbole', detail: 'Exagero intencional expressivo' }, { label: 'Prosopopeia e Gradação', detail: 'Humanização de inanimados; Sequência crescente/decrescente' }] },
      { title: '4. Figuras de Som (Harmonia)', icon: '🎵', nodes: [{ label: 'Aliteração', detail: 'Repetição de sons consonantais' }, { label: 'Assonância e Onomatopeia', detail: 'Repetição de vogais; Imitação de ruídos' }] }
    ),
    blocks: renumberBlocks([clone(newBlock_POR5_FigurasLinguagem1), clone(newBlock_POR5_FigurasLinguagem2)], 5),
  }),

  // 6 - Articulação textual: operadores sequenciais, expressões referenciais.
  finalizeLesson({
    id: 'por_6',
    cat: 'por',
    catName: 'Língua Portuguesa',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '6. Articulação textual: operadores sequenciais, expressões referenciais',
    editalRef: 'Item 6 de Língua Portuguesa — Articulação textual: operadores sequenciais, expressões referenciais.',
    mindMap: clone(byId['por_3'].mindMap),
    blocks: renumberBlocks([clone(byId['por_3'].blocks[1]), clone(byId['por_3'].blocks[2]), clone(newBlock_POR6_OperadoresExpresssoesRef)], 6),
  }),

  // 7 - Coesão e coerência textual.
  finalizeLesson({
    id: 'por_7',
    cat: 'por',
    catName: 'Língua Portuguesa',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '7. Coesão e coerência textual',
    editalRef: 'Item 7 de Língua Portuguesa — Coesão e coerência textual.',
    mindMap: makeStandardMindMap(
      7,
      'Coesão e Coerência Textual',
      'Item 7 de Língua Portuguesa — Coesão Referencial/Sequencial e as 4 Metarregras da Coerência',
      { title: '1. Coesão Referencial', icon: '🔗', nodes: [{ label: 'Anáfora (Retomada)', detail: 'Retoma termo anterior (pronomes, esse/isso)' }, { label: 'Catáfora (Antecipação)', detail: 'Anuncia termo posterior (este/isto)' }] },
      { title: '2. Coesão Lexical e por Elipse', icon: '🧩', nodes: [{ label: 'Substituição Lexical', detail: 'Sinônimos, hiperônimos, hipônimos e epítetos' }, { label: 'Coesão por Elipse', detail: 'Omissão estratégica que evita repetição viciosa' }] },
      { title: '3. Coesão Sequencial', icon: '➡️', nodes: [{ label: 'Conectivos Coordenativos', detail: 'Aditivos, adversativos, alternativos, conclusivos, explicativos' }, { label: 'Conectivos Subordinativos', detail: 'Causais, concessivos, condicionais, finais, temporais, proporcionais' }] },
      { title: '4. Coerência Textual', icon: '🧠', nodes: [{ label: '4 Metarregras (Charolles)', detail: 'Repetição, Progressão, Não-Contradição e Relação' }, { label: 'Ambiguidade', detail: 'Evitar duplo sentido no uso de "seu/sua" e "que"' }] }
    ),
    blocks: renumberBlocks([clone(byId['por_3'].blocks[0]), clone(byId['por_3'].blocks[3]), clone(newBlock_POR7_CoesaoCoerencia)], 7),
  }),

  // 8 - Identificação, definição, classificação, flexão e emprego das classes de palavras; formação de palavras.
  finalizeLesson({
    id: 'por_8',
    cat: 'por',
    catName: 'Língua Portuguesa',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '8. Identificação, definição, classificação, flexão e emprego das classes de palavras; formação de palavras',
    editalRef: 'Item 8 de Língua Portuguesa — Identificação, definição, classificação, flexão e emprego das classes de palavras; formação de palavras.',
    mindMap: clone(byId['por_4'].mindMap),
    blocks: renumberBlocks([clone(byId['por_4'].blocks[1]), clone(byId['por_4'].blocks[2]), clone(newBlock_POR8_ClassesFormacaoPalavras)], 8),
  }),

  // 9 - Verbos: flexão, conjugação, vozes, correlação entre tempos e modos verbais.
  finalizeLesson({
    id: 'por_9',
    cat: 'por',
    catName: 'Língua Portuguesa',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '9. Verbos: flexão, conjugação, vozes, correlação entre tempos e modos verbais',
    editalRef: 'Item 9 de Língua Portuguesa — Verbos: flexão, conjugação, vozes, correlação entre tempos e modos verbais.',
    mindMap: makeStandardMindMap(
      9,
      'Verbos: Flexão, Conjugação, Vozes e Correlação',
      'Item 9 de Língua Portuguesa — Tempos, Modos, Irregulares e Vozes Verbais',
      { title: '1. Modos e Tempos Verbais', icon: '⏱️', nodes: [{ label: 'Indicativo (Fato)', detail: 'Presente, Perfeito, Imperfeito (-va/-ia), Mais-que-perfeito (-ra)' }, { label: 'Subjuntivo (Hipótese)', detail: 'Presente (que), Imperfeito (se -sse), Futuro (quando/se)' }] },
      { title: '2. Conjugação de Irregulares', icon: '⚠️', nodes: [{ label: 'Intervir / Provir (= Vir)', detail: 'Ele interveio (passado); se ele intervier (futuro)' }, { label: 'Manter (= Ter) e Reaver', detail: 'Se ele mantiver; eles reouveram' }] },
      { title: '3. Correlação Verbal', icon: '🔗', nodes: [{ label: 'Condição Real', detail: 'Se + Futuro do Subjuntivo → Futuro do Presente' }, { label: 'Condição Hipotética', detail: 'Se + Imperfeito do Subjuntivo (-sse) → Futuro do Pretérito (-ria)' }] },
      { title: '4. As Vozes Verbais', icon: '🔄', nodes: [{ label: 'Ativa vs. Passiva Analítica', detail: 'OD vira Sujeito Paciente; verbo SER + Particípio' }, { label: 'Passiva Sintética e Reflexiva', detail: 'VTD + SE + Sujeito Paciente; Sujeito age sobre si mesmo' }] }
    ),
    blocks: renumberBlocks([clone(newBlock_POR9_VerbosTemposModos), clone(newBlock_POR9_VozesVerbais)], 9),
  }),

  // 10 - Concordância verbal e nominal.
  finalizeLesson({
    id: 'por_10',
    cat: 'por',
    catName: 'Língua Portuguesa',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '10. Concordância verbal e nominal',
    editalRef: 'Item 10 de Língua Portuguesa — Concordância verbal e nominal.',
    mindMap: clone(byId['por_5'].mindMap),
    blocks: renumberBlocks([clone(byId['por_5'].blocks[0]), clone(byId['por_5'].blocks[2]), clone(newBlock_POR10_ConcordanciaCompleta)], 10),
  }),

  // 11 - Regência verbal e nominal.
  finalizeLesson({
    id: 'por_11',
    cat: 'por',
    catName: 'Língua Portuguesa',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '11. Regência verbal e nominal',
    editalRef: 'Item 11 de Língua Portuguesa — Regência verbal e nominal.',
    mindMap: clone(byId['por_6'].mindMap),
    blocks: renumberBlocks([clone(byId['por_6'].blocks[0]), clone(byId['por_6'].blocks[2]), clone(newBlock_POR11_RegenciaCompleta)], 11),
  }),

  // 12 - Crase.
  finalizeLesson({
    id: 'por_12',
    cat: 'por',
    catName: 'Língua Portuguesa',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '12. Crase',
    editalRef: 'Item 12 de Língua Portuguesa — Crase.',
    mindMap: makeStandardMindMap(
      12,
      'Emprego do Sinal Indicativo de Crase',
      'Item 12 de Língua Portuguesa — Casos Proibidos, Facultativos e Obrigatórios',
      { title: '1. Regra Geral e Testes', icon: '🎯', nodes: [{ label: 'Fusão a + a = à', detail: 'Preposição a + Artigo feminino a (ou aquele/aquela/aquilo)' }, { label: 'Teste do Masculino', detail: 'Se no masculino vira AO(S), no feminino tem crase À(S)' }] },
      { title: '2. Casos Proibidos', icon: '🚫', nodes: [{ label: 'Masculino e Verbo', detail: 'A pé, a prazo, a partir de, começou a falar' }, { label: 'Pronomes e Plural sem S', detail: 'A ela, a toda, a qualquer, gota a gota, a situações' }] },
      { title: '3. Os 3 Casos Facultativos', icon: '⚖️', nodes: [{ label: 'Preposição ATÉ', detail: 'Fui até a / até à unidade' }, { label: 'Nome Próprio e Possessivo', detail: 'Entreguei a/à Ana; Refiro-me a/à minha equipe' }] },
      { title: '4. Casos Obrigatórios', icon: '✅', nodes: [{ label: 'Locuções Femininas e Horas', detail: 'Às vezes, à noite, à medida que, às 14h45' }, { label: 'Casa, Terra e Distância', detail: 'Só têm crase quando vierem ESPECIFICADAS!' }] }
    ),
    blocks: renumberBlocks([clone(newBlock_POR12_CraseCompleta), clone(byId['por_6'].blocks[3])], 12),
  }),

  // 13 - Colocação pronominal.
  finalizeLesson({
    id: 'por_13',
    cat: 'por',
    catName: 'Língua Portuguesa',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '13. Colocação pronominal',
    editalRef: 'Item 13 de Língua Portuguesa — Colocação pronominal.',
    mindMap: makeStandardMindMap(
      13,
      'Colocação Pronominal (Topografia)',
      'Item 13 de Língua Portuguesa — Próclise, Mesóclise, Ênclise e Locuções Verbais',
      { title: '1. Próclise (Antes do Verbo)', icon: '⬅️', nodes: [{ label: 'Palavras Negativas e Advérbios', detail: 'Não, nunca, jamais, aqui, sempre (sem vírgula!)' }, { label: 'Relativos, Indefinidos e Subordinativas', detail: 'Que, quem, onde, tudo, alguém, quando, embora, se' }] },
      { title: '2. Mesóclise (No Meio)', icon: '↔️', nodes: [{ label: 'Futuro do Presente/Pretérito', detail: 'Realizar-se-á / Far-se-ia (apenas SEM palavra atrativa)' }, { label: 'Prioridade da Próclise', detail: 'Se houver atrativo antes do futuro, usa-se Próclise!' }] },
      { title: '3. Ênclise (Depois do Verbo)', icon: '➡️', nodes: [{ label: 'Início de Frase e Imperativo', detail: 'Entregue-me o relatório; Após pausa/vírgula' }, { label: 'Adaptações Fonéticas', detail: 'R/S/Z → lo/la (fazê-lo); Som nasal M/ÃO → no/na (fizeram-no)' }] },
      { title: '4. As 3 Proibições Absolutas', icon: '🚫', nodes: [{ label: 'Nunca Iniciar Período', detail: 'Proibido iniciar frase com me, te, se, o, a, lhe, nos, vos' }, { label: 'Proibido Ênclise no Futuro e Particípio', detail: 'Nunca usar ênclise após futuro nem após particípio!' }] }
    ),
    blocks: renumberBlocks([clone(byId['por_4'].blocks[0]), clone(byId['por_5'].blocks[1]), clone(newBlock_POR13_ColocacaoPronominal)], 13),
  }),

  // 14 - Estrutura da oração e do período: aspectos sintáticos e semânticos.
  finalizeLesson({
    id: 'por_14',
    cat: 'por',
    catName: 'Língua Portuguesa',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '14. Estrutura da oração e do período: aspectos sintáticos e semânticos',
    editalRef: 'Item 14 de Língua Portuguesa — Estrutura da oração e do período: aspectos sintáticos e semânticos.',
    mindMap: makeStandardMindMap(
      14,
      'Estrutura da Oração e do Período',
      'Item 14 de Língua Portuguesa — Análise Sintática, Coordenação e Subordinação',
      { title: '1. Termos Essenciais e Integrantes', icon: '🏛️', nodes: [{ label: 'Sujeito e Predicado', detail: 'Simples, composto, oculto, indeterminado e oração sem sujeito' }, { label: 'OD, OI e CN vs. AA', detail: 'Complemento Nominal (paciente) vs. Adjunto Adnominal (agente)' }] },
      { title: '2. Termos Acessórios e SE/QUE', icon: '🔍', nodes: [{ label: 'Adjunto Adverbial, Aposto e Vocativo', detail: 'Circunstâncias, explicação e chamamento' }, { label: 'Funções do SE e do QUE', detail: 'PA vs. IIS; Pronome relativo vs. Conjunção integrante' }] },
      { title: '3. Período por Coordenação', icon: '🔗', nodes: [{ label: 'Assindéticas e 5 Sindéticas', detail: 'Aditiva, Adversativa, Alternativa, Conclusiva e Explicativa' }] },
      { title: '4. Período por Subordinação', icon: '🌿', nodes: [{ label: 'Substantivas (6) e Adjetivas (2)', detail: 'Introduzidas por conjunção integrante; Restritiva vs. Explicativa' }, { label: '9 Orações Adverbiais', detail: 'Causal, Concessiva, Condicional, Conformativa, Consecutiva, Comparativa, Final, Proporcional, Temporal' }] }
    ),
    blocks: renumberBlocks([clone(byId['por_4'].blocks[3]), clone(byId['por_5'].blocks[3]), clone(newBlock_POR14_EstruturaOracaoPeriodo)], 14),
  }),

  // 15 - Acentuação gráfica.
  finalizeLesson({
    id: 'por_15',
    cat: 'por',
    catName: 'Língua Portuguesa',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '15. Acentuação gráfica',
    editalRef: 'Item 15 de Língua Portuguesa — Acentuação gráfica.',
    mindMap: makeStandardMindMap(
      15,
      'Acentuação Gráfica',
      'Item 15 de Língua Portuguesa — Regras Gerais, Hiatos, Ditongos Abertos e Diferenciais',
      { title: '1. Proparoxítonas e Oxítonas', icon: '✍️', nodes: [{ label: 'Proparoxítonas', detail: 'TODAS são acentuadas (médico, público, lâmpada)' }, { label: 'Oxítonas e Monossílabos', detail: 'Terminadas em A, E, O, EM, ENS (monossílabos: A, E, O)' }] },
      { title: '2. Paroxítonas', icon: '📘', nodes: [{ label: 'Terminações R, X, N, L, I, US...', detail: 'Caráter, tórax, hífen, fácil, júri, vírus, álbum, órfã, bíceps' }, { label: 'Ditongo Crescente Final', detail: 'História, vigilância, série, água, espécie, sanitário' }] },
      { title: '3. Regra Especial do Hiato', icon: '💧', nodes: [{ label: 'I e U Tônicos em Hiato', detail: 'Sa-ú-de, sa-í-da, pa-ís, ba-ú, e-go-ís-ta' }, { label: 'Exceções', detail: 'Seguido de NH (rainha) ou após ditongo em paroxítona (feiura)' }] },
      { title: '4. Novo Acordo Ortográfico', icon: '⚖️', nodes: [{ label: 'Ditongos Abertos ÉI, ÓI', detail: 'Caíram nas paroxítonas (ideia, heroico, jiboia); ficam nas oxítonas' }, { label: 'Acentos Diferenciais', detail: 'Pôde/pode, Pôr/por, Tem/Têm, Vem/Vêm' }] }
    ),
    blocks: renumberBlocks([clone(byId['por_2'].blocks[0]), clone(newBlock_POR15_AcentuacaoCompleta)], 15),
  }),

  // 16 - Ortografia.
  finalizeLesson({
    id: 'por_16',
    cat: 'por',
    catName: 'Língua Portuguesa',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '16. Ortografia',
    editalRef: 'Item 16 de Língua Portuguesa — Ortografia.',
    mindMap: clone(byId['por_2'].mindMap),
    blocks: renumberBlocks([clone(byId['por_2'].blocks[2]), clone(newBlock_POR16_OrtografiaDificuldades)], 16),
  }),

  // 17 - Pontuação.
  finalizeLesson({
    id: 'por_17',
    cat: 'por',
    catName: 'Língua Portuguesa',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '17. Pontuação',
    editalRef: 'Item 17 de Língua Portuguesa — Pontuação.',
    mindMap: makeStandardMindMap(
      17,
      'Pontuação',
      'Item 17 de Língua Portuguesa — Emprego da Vírgula, Ponto e Vírgula, Dois-Pontos e Travessão',
      { title: '1. Proibições da Vírgula (SVC)', icon: '🚫', nodes: [{ label: 'Sujeito e Verbo', detail: 'NUNCA separar o Sujeito do Verbo com uma vírgula' }, { label: 'Verbo e Complementos', detail: 'NUNCA separar o Verbo do Objeto Direto ou Indireto' }] },
      { title: '2. Vírgula no Período Simples', icon: '✅', nodes: [{ label: 'Vocativo e Aposto Explicativo', detail: 'Isolados obrigatoriamente por vírgula(s)' }, { label: 'Adjunto Adverbial Deslocado', detail: 'Longa extensão (≥3 palavras) exige vírgula; curto é facultativo' }] },
      { title: '3. Vírgula no Período Composto', icon: '🔗', nodes: [{ label: 'Adverbiais Antepostas', detail: 'Vírgula obrigatória quando vêm antes da principal' }, { label: 'Adjetivas Explicativas e Adversativas', detail: 'Entre vírgulas; antes de mas, porém, contudo, todavia' }] },
      { title: '4. Outros Sinais de Pontuação', icon: '✒️', nodes: [{ label: 'Duplo Travessão e Parênteses', detail: 'Substituem o par de vírgulas em apostos e intercalações' }, { label: 'Dois-Pontos e Ponto e Vírgula', detail: 'Enumeração/citação (:); itens de lei ou coordenadas com vírgula interna (;)' }] }
    ),
    blocks: renumberBlocks([clone(byId['por_6'].blocks[1]), clone(newBlock_POR17_PontuacaoCompleta)], 17),
  }),

  // 18 - Variação linguística.
  finalizeLesson({
    id: 'por_18',
    cat: 'por',
    catName: 'Língua Portuguesa',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '18. Variação linguística',
    editalRef: 'Item 18 de Língua Portuguesa — Variação linguística.',
    mindMap: makeStandardMindMap(
      18,
      'Variação Linguística',
      'Item 18 de Língua Portuguesa — Variações Diatópica, Diastrática, Diafásica e Diacrônica',
      { title: '1. Variação Diatópica (Lugar)', icon: '🗺️', nodes: [{ label: 'Geográfica / Regional', detail: 'Sotaques e vocabulário regional (carapanã, macaxeira)' }] },
      { title: '2. Variação Diastrática (Social)', icon: '👥', nodes: [{ label: 'Grupos Sociais e Profissões', detail: 'Jargão técnico de saúde, gírias juvenis e escolaridade' }] },
      { title: '3. Variação Diafásica (Registro)', icon: '🎙️', nodes: [{ label: 'Situacional / Contextual', detail: 'Registro formal (ofício) vs. informal/coloquial (conversa)' }] },
      { title: '4. Variação Diacrônica (Tempo)', icon: '⏳', nodes: [{ label: 'Histórica / Temporal', detail: 'Evolução ao longo dos séculos (Vossa Mercê → Você)' }] }
    ),
    blocks: renumberBlocks([clone(byId['por_1'].blocks[2]), clone(newBlock_POR18_VariacaoLinguistica)], 18),
  }),
];

const espLessons = oldLessons.filter(l => l.cat === 'esp');
const legLessons = oldLessons.filter(l => l.cat === 'leg');
const rlmLessons = oldLessons.filter(l => l.cat === 'rlm');
const atuLessons = oldLessons.filter(l => l.cat === 'atu');

const updatedData = {
  ...rawData,
  lessons: [
    ...espLessons,
    ...legLessons,
    ...newPorLessons,
    ...rlmLessons,
    ...atuLessons,
  ],
};

const jsonString = JSON.stringify(updatedData, null, 2);
fs.writeFileSync(publicJsonPath, jsonString, 'utf8');
console.log('Wrote JSON:', publicJsonPath);

if (fs.existsSync(rootJsonPath)) {
  fs.writeFileSync(rootJsonPath, jsonString, 'utf8');
  console.log('Wrote JSON:', rootJsonPath);
}

const jsString = `window.APP_DATA = ${jsonString};\nwindow.LOCAL_APP_DATA = window.APP_DATA;\n`;
if (fs.existsSync(publicJsPath)) {
  fs.writeFileSync(publicJsPath, jsString, 'utf8');
  console.log('Wrote JS:', publicJsPath);
}
if (fs.existsSync(rootJsPath)) {
  fs.writeFileSync(rootJsPath, jsString, 'utf8');
  console.log('Wrote JS:', rootJsPath);
}

console.log('Total lessons in app_data.json:', updatedData.lessons.length);
console.log('Summary of 18 Categorized Língua Portuguesa Lessons (por_1..por_18):');
newPorLessons.forEach(l => {
  console.log(`  ${l.id}: ${l.title} (${l.blocks.length} blocos, ${l.questionsCount} Q, ${l.flashcardsCount} FC)`);
});
