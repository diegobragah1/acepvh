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

// Keep a clean backup before recategorizing Conhecimentos Gerais e Atualidades into 6 lessons
const backupPath = path.resolve(process.cwd(), 'scripts/backup_before_recategorize_gerais_6.json');
const primaryJsonPath = jsonFiles[0];

if (!fs.existsSync(backupPath)) {
  fs.copyFileSync(primaryJsonPath, backupPath);
  console.log('Created backup at:', backupPath);
}

const rawData = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
const byId = Object.fromEntries(rawData.lessons.map(l => [l.id, l]));

const oldAtu1 = byId['atu_1'];
const oldAtu2 = byId['atu_2'];
const oldAtu3 = byId['atu_3'];

// New Block 1.3 for atu_1 (Cultura Geral: Fatos Políticos, econômicos e sociais nos últimos 5 anos)
const newBlock_Atu1_Cronologia5Anos = {
  title:
    'Bloco 1.3 — Síntese Cronológica dos Últimos 5 Anos (2021–2026): Fatos Políticos, Econômicos e Sociais do Mundo, do Brasil, de Rondônia e de Porto Velho na Mídia Nacional e Internacional',
  modoA: `<div class="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
  <div class="bg-teal-900 text-white p-3.5 rounded-xl border border-teal-700">
    <span class="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">Item 1 de Conhecimentos Gerais — Últimos 5 Anos (2021–2026)</span>
    <h4 class="text-sm sm:text-base font-extrabold mt-0.5">Quadro Cronológico Integrado: Mundo, Brasil, Rondônia e Porto Velho</h4>
    <p class="text-xs text-teal-100 mt-1">Os acontecimentos políticos, econômicos e sociais de maior repercussão jornalística nos últimos 5 anos para a prova da banca IBGP.</p>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">1. Panorama Internacional e Geopolítico (Últimos 5 Anos: 2021–2026)</h5>
  <ul class="list-disc pl-5 space-y-1.5">
    <li><strong>Conflitos Geopolíticos de Repercussão Global:</strong>
      <ul class="list-disc pl-5 mt-1 space-y-1">
        <li><strong>Guerra Rússia–Ucrânia (iniciada em fevereiro de 2022):</strong> Maior conflito militar em solo europeu desde a Segunda Guerra Mundial, provocando crise energética na Europa, inflação global de alimentos/fertilizantes (impactando diretamente o agronegócio brasileiro e rondoniense) e entrada da <strong>Finlândia (2023)</strong> e da <strong>Suécia (2024)</strong> na OTAN;</li>
        <li><strong>Conflito no Oriente Médio (outubro de 2023–2025):</strong> Escalada militar na Faixa de Gaza (Israel–Hamas), tensões no Líbano, Síria, Mar Vermelho (Houthis no Iêmen) e confrontos diretos entre Israel e Irã, afetando rotas marítimas e preços do petróleo;</li>
        <li><strong>Expansão do BRICS+ (2024–2025):</strong> O bloco formado originalmente por Brasil, Rússia, Índia, China e África do Sul aprovou na Cúpula de Joanesburgo/Kazan a entrada de novos membros plenos: <strong>Egito, Etiópia, Irã, Emirados Árabes Unidos (2024) e Indonésia (2025)</strong>, além de países parceiros. Em <strong>2025, o Brasil exerceu a presidência do BRICS</strong>;</li>
        <li><strong>G20 no Brasil (Novembro de 2024, Rio de Janeiro):</strong> Sob presidência brasileira, a Cúpula do G20 lançou a <strong>Aliança Global contra a Fome e a Pobreza</strong> e contou pela primeira vez com a <strong>União Africana</strong> como membro pleno do G20.</li>
      </ul>
    </li>
  </ul>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">2. Fatos Políticos, Econômicos e Sociais no Brasil (2021–2026)</h5>
  <div class="overflow-x-auto my-2">
    <table class="min-w-full text-xs border border-slate-300 rounded-lg overflow-hidden">
      <thead class="bg-slate-800 text-white">
        <tr>
          <th class="p-2 border border-slate-300 text-left">Eixo Temático</th>
          <th class="p-2 border border-slate-300 text-left">Fato Marcante no Brasil (2021–2026)</th>
          <th class="p-2 border border-slate-300 text-left">Detalhe Cobrado em Prova (IBGP)</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 bg-white">
        <tr>
          <td class="p-2 font-bold text-teal-900">Economia e Tributação</td>
          <td class="p-2"><strong>Reforma Tributária sobre o Consumo (EC nº 132/2023 e LC nº 214/2025)</strong></td>
          <td class="p-2">Criou o <strong>IVA Dual</strong>: <strong>CBS</strong> (Contribuição sobre Bens e Serviços — federal, unificando PIS/Cofins/IPI) e <strong>IBS</strong> (Imposto sobre Bens e Serviços — estadual e municipal, unificando ICMS e ISS), além do <strong>Imposto Seletivo ("Imposto do Pecado")</strong> sobre produtos prejudiciais à saúde ou ao meio ambiente, com transição entre 2026 e 2033 e cashback para baixa renda.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Finanças Públicas</td>
          <td class="p-2"><strong>Novo Arcabouço Fiscal (LC nº 200/2023)</strong></td>
          <td class="p-2">Substituiu o antigo Teto de Gastos (EC 95/2016) pelo <strong>Regime Fiscal Sustentável</strong>, combinando metas de resultado primário com limite de crescimento real das despesas entre 0,6% e 2,5% ao ano.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Demografia e Sociedade</td>
          <td class="p-2"><strong>Censo Demográfico IBGE 2022 (divulgado em 2023–2024)</strong></td>
          <td class="p-2">População do Brasil: <strong>203,08 milhões de habitantes</strong> (crescimento anual de 0,52%, o menor da série histórica), evidenciando rápido <strong>envelhecimento populacional</strong> e queda da fecundidade.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Clima e Eventos Extremos</td>
          <td class="p-2"><strong>Enchentes no Rio Grande do Sul (Maio/2024) e Estiagem Histórica na Amazônia (2023–2024)</strong></td>
          <td class="p-2">Catástrofe climática no RS atingiu mais de 470 municípios; simultaneamente, a Bacia Amazônica e o <strong>Rio Madeira em Porto Velho registraram a menor cota histórica (19 cm em outubro de 2024)</strong>.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">3. Fatos Políticos, Econômicos e Sociais em Rondônia e Porto Velho (2021–2026)</h5>
  <ul class="list-disc pl-5 space-y-1.5">
    <li><strong>Liderança no Agronegócio e Exportações:</strong> Rondônia consolidou-se entre os maiores produtores e exportadores de <strong>carne bovina (status de área livre de febre aftosa sem vacinação reconhecido pela OMSA), soja, milho, café robusta amazônico (conilon/robusta com Indicação Geográfica "Matas de Rondônia") e piscicultura de peixes nativos (tambaqui)</strong>, tendo o <strong>Porto Público Organizado de Porto Velho (SOPH)</strong> e os terminais privados no Rio Madeira como corredor estratégico de exportação (Arco Norte).</li>
    <li><strong>Infraestrutura e Integração Regional em Porto Velho:</strong> Nova Rodoviária de Porto Velho, ampliação e modernização do Aeroporto Internacional Governador Jorge Teixeira, obras de macrodrenagem, saneamento básico e pavimentação urbana, além da inauguração da <strong>Ponte Binacional sobre o Rio Mamoré (Guajará-Mirim/RO – Guayaramerín/Bolívia)</strong> em licitação/execução federal como parte do tratado de Petrópolis.</li>
  </ul>
</div>`,
  modoB: `<ul class="list-disc pl-4 space-y-1 text-xs">
  <li><strong>Reforma Tributária (EC 132/2023 e LC 214/2025):</strong> IVA Dual = <strong>CBS</strong> (Federal: PIS/Cofins) + <strong>IBS</strong> (Estadual/Municipal: ICMS/ISS) + <strong>Imposto Seletivo</strong> (produtos nocivos à saúde/meio ambiente).</li>
  <li><strong>BRICS+ (2024–2025):</strong> Novos membros plenos: Egito, Etiópia, Irã, Emirados Árabes Unidos e Indonésia. G20 no Rio (2024) lançou a Aliança Global contra a Fome e a Pobreza.</li>
  <li><strong>Rondônia e Porto Velho (2021–2026):</strong> Café "Matas de Rondônia" (Indicação Geográfica), liderança em tambaqui/carne/soja, hidrovia do Madeira (Arco Norte) e estiagem recorde do Rio Madeira (2023–2024).</li>
</ul>`,
  traps: [
    '❌ Mito/Pegadinha: "A Reforma Tributária aprovada pela EC nº 132/2023 extinguiu o ICMS e o ISS para criar um imposto único exclusivamente federal." — ✅ CORRETO: Foi criado um IVA Dual: a CBS (federal) e o IBS (de competência compartilhada entre Estados e Municípios, substituindo ICMS e ISS).',
    '❌ Mito/Pegadinha: "O Censo IBGE 2022 mostrou explosão da taxa de natalidade e rejuvenescimento da população brasileira." — ✅ CORRETO: O Censo 2022 registrou a menor taxa de crescimento populacional da história (0,52% ao ano) e acelerado envelhecimento demográfico.',
  ],
  questions: [
    {
      q: '(IBGP — Perfil Conhecimentos Gerais) Dentre os fatos políticos e econômicos mais relevantes aprovados no Brasil nos últimos cinco anos, destaca-se a Reforma Tributária sobre o consumo (Emenda Constitucional nº 132/2023, regulamentada pela Lei Complementar nº 214/2025). Sobre esse novo modelo tributário, é CORRETO afirmar que:',
      options: [
        'A) Instituiu o Imposto sobre Valor Agregado (IVA) Dual, composto pela CBS (Contribuição sobre Bens e Serviços, de competência federal) e pelo IBS (Imposto sobre Bens e Serviços, de competência compartilhada entre Estados, DF e Municípios), além do Imposto Seletivo sobre bens e serviços prejudiciais à saúde ou ao meio ambiente.',
        'B) Extinguiu todos os tributos municipais e transferiu 100% da arrecadação do país exclusivamente para o Banco Central.',
        'C) Manteve intactos o PIS, a Cofins, o ICMS e o ISS sem qualquer alteração até o ano de 2090.',
        'D) Proibiu a devolução personalizada de tributos (cashback) para famílias de baixa renda.',
      ],
      ans: 0,
      comment:
        'Gabarito: A. A EC nº 132/2023 e a LC nº 214/2025 instituíram o IVA Dual: CBS (federal, substituindo PIS e Cofins) e IBS (subnacional, substituindo ICMS estadual e ISS municipal), além do Imposto Seletivo (extrafiscal sobre produtos nocivos à saúde e ao meio ambiente) e do mecanismo de cashback para famílias de baixa renda.',
    },
    {
      q: '(IBGP — Perfil Conhecimentos Gerais RO/PVH) Nos últimos cinco anos, a cafeicultura de Rondônia alcançou destaque econômico nacional e internacional, recebendo do Instituto Nacional da Propriedade Industrial (INPI) o registro de Indicação Geográfica (Denominação de Origem) para a produção sustentável de cafés robustas amazônicos sob a denominação:',
      options: [
        'A) Cerrado Mineiro.',
        'B) Matas de Rondônia.',
        'C) Vale dos Vinhedos.',
        'D) Pampa Gaúcho.',
      ],
      ans: 1,
      comment:
        'Gabarito: B. A Denominação de Origem "Matas de Rondônia" foi concedida pelo INPI aos cafés da espécie Coffea canephora (Robusta Amazônico) produzidos de forma sustentável em Rondônia.',
    },
    {
      q: '(IBGP — Perfil Atualidades) Em novembro de 2024, o Brasil sediou no Rio de Janeiro a Cúpula de Líderes do G20. Qual foi a principal iniciativa social global lançada pela presidência brasileira durante o evento, com adesão de dezenas de países e organismos internacionais?',
      options: [
        'A) O Tratado de Tordesilhas Digital.',
        'B) A Aliança Global contra a Fome e a Pobreza.',
        'C) A extinção da Organização Mundial da Saúde (OMS).',
        'D) A criação da moeda única europeia (Euro).',
      ],
      ans: 1,
      comment:
        'Gabarito: B. A marca central da presidência brasileira do G20 em 2024 foi o lançamento oficial da Aliança Global contra a Fome e a Pobreza.',
    },
  ],
  flashcards: [
    {
      f: 'Atualidades Brasil: O que é o IVA Dual criado pela Reforma Tributária (EC 132/2023)?',
      b: 'É o modelo dividido em CBS (Contribuição sobre Bens e Serviços — federal, unificando PIS/Cofins) e IBS (Imposto sobre Bens e Serviços — estadual e municipal, unificando ICMS e ISS), além do Imposto Seletivo.',
    },
    {
      f: 'Atualidades Mundo (2024): Qual iniciativa mundial foi lançada pelo Brasil na Cúpula do G20 no Rio de Janeiro?',
      b: 'A Aliança Global contra a Fome e a Pobreza.',
    },
    {
      f: 'Atualidades Rondônia: Qual é a Denominação de Origem (Indicação Geográfica) reconhecida pelo INPI para o café Robusta Amazônico produzido no estado?',
      b: 'Matas de Rondônia.',
    },
    {
      f: 'Atualidades Porto Velho (2023–2024): Qual fenômeno hidrológico extremo atingiu o Rio Madeira em outubro de 2024?',
      b: 'A maior seca/estiagem histórica já registrada, fazendo o nível do Rio Madeira em Porto Velho atingir a marca mínima recorde de 19 centímetros.',
    },
  ],
};

// New Block 2.2 for atu_2 (Humanidades: movimentos artísticos, culturais e sociais do Brasil e do mundo)
const newBlock_Atu2_HumanidadesBrasilMundo = {
  title:
    'Bloco 2.2 — Movimentos Artísticos, Culturais e Sociais do Brasil e do Mundo: Do Renascimento e Barroco à Semana de Arte Moderna de 1922, Tropicalismo e Movimentos Sociais Contemporâneos',
  modoA: `<div class="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
  <div class="bg-teal-900 text-white p-3.5 rounded-xl border border-teal-700">
    <span class="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">Item 2 de Conhecimentos Gerais — Humanidades</span>
    <h4 class="text-sm sm:text-base font-extrabold mt-0.5">Movimentos Artísticos, Culturais e Sociais no Brasil e no Mundo</h4>
    <p class="text-xs text-teal-100 mt-1">Síntese completa do PDF de Humanidades da Subpasta 7 complementada com movimentos sociais e patrimônios culturais.</p>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">1. Grandes Movimentos Artísticos e Culturais na História Mundial e Brasileira</h5>
  <div class="overflow-x-auto my-2">
    <table class="min-w-full text-xs border border-slate-300 rounded-lg overflow-hidden">
      <thead class="bg-slate-800 text-white">
        <tr>
          <th class="p-2 border border-slate-300 text-left">Movimento Artístico / Cultural</th>
          <th class="p-2 border border-slate-300 text-left">Características Centrais</th>
          <th class="p-2 border border-slate-300 text-left">Principais Expoentes (Mundo e Brasil)</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 bg-white">
        <tr>
          <td class="p-2 font-bold text-teal-900">Renascimento Cultural (Sécs. XIV–XVI)</td>
          <td class="p-2">Antropocentrismo, racionalismo, humanismo, perspectiva geométrica e retomada dos valores greco-romanos.</td>
          <td class="p-2">Leonardo da Vinci, Michelangelo, Rafael Sanzio, Camões, Shakespeare.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Barroco e Barroco Mineiro (Sécs. XVII–XVIII)</td>
          <td class="p-2">Dualismo entre fé e razão, contraste claro-escuro, dramaticidade e ornamentação intensa. No Brasil, expressou-se na arte sacra em pedra-sabão e madeira.</td>
          <td class="p-2">Caravaggio (Itália); no Brasil: <strong>Aleijadinho</strong> (Antônio Francisco Lisboa), <strong>Mestre Ataíde</strong>, Gregório de Matos e Padre Antônio Vieira.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Vanguardas Europeias (Início do Séc. XX)</td>
          <td class="p-2">Ruptura com a arte acadêmica tradicional: <strong>Cubismo</strong> (geometrização), <strong>Expressionismo</strong> (subjetividade/dor), <strong>Futurismo</strong> (velocidade/máquina), <strong>Dadaísmo</strong> (irreverência/antiarte) e <strong>Surrealismo</strong> (inconsciente/sonhos).</td>
          <td class="p-2">Pablo Picasso (Cubismo — <em>Guernica</em>), Salvador Dalí (Surrealismo), Edvard Munch (Expressionismo — <em>O Grito</em>), Marcel Duchamp (Dadaísmo).</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Modernismo Brasileiro e Semana de Arte Moderna (Fevereiro de 1922 — Teatro Municipal de SP)</td>
          <td class="p-2">Ruptura com o academicismo parnasiano, liberdade formal (verso livre), valorização da identidade nacional, da linguagem coloquial brasileira e do <strong>Manifesto Antropofágico (1928)</strong> ("deglutir" a cultura estrangeira e transformá-la em arte autenticamente brasileira).</td>
          <td class="p-2"><strong>Tarsila do Amaral</strong> (<em>Abaporu</em>, <em>Operários</em>), <strong>Anita Malfatti</strong>, <strong>Mário de Andrade</strong> (<em>Macunaíma</em>), <strong>Oswald de Andrade</strong>, Menotti Del Picchia, Heitor Villa-Lobos (música) e Victor Brecheret (escultura). Na 2ª fase: Candido Portinari (<em>Os Retirantes</em>) e Oscar Niemeyer.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Bossa Nova, Cinema Novo e Tropicalismo (Anos 1950–1960)</td>
          <td class="p-2">Renovação estética brasileira: Bossa Nova (harmonia sofisticada), Cinema Novo ("uma câmera na mão e uma ideia na cabeça" — crítica social) e <strong>Tropicália (1967–1968)</strong>, que fundiu cultura pop/guitarra elétrica com ritmos tradicionais e retomou a antropofagia modernista.</td>
          <td class="p-2">Tom Jobim, João Gilberto e Vinicius de Moraes (Bossa Nova); Glauber Rocha (Cinema Novo); Caetano Veloso, Gilberto Gil, Gal Costa, Os Mutantes, Tom Zé e Hélio Oiticica (Tropicalismo).</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">2. Movimentos Sociais no Mundo, no Brasil e na Amazônia</h5>
  <ul class="list-disc pl-5 space-y-1.5">
    <li><strong>Movimentos Sociais Clássicos vs. Novos Movimentos Sociais:</strong> Os movimentos clássicos (séc. XIX e meados do séc. XX) concentravam-se nas relações trabalhistas e sindicais (movimento operário e campesinato). Já os <strong>Novos Movimentos Sociais</strong> (a partir da segunda metade do séc. XX e séc. XXI) articulam pautas de <strong>direitos humanos, igualdade racial (Movimento Negro), direitos das mulheres (Sufragismo e Feminismo), inclusão da pessoa com deficiência, preservação socioambiental e demarcação de terras indígenas e quilombolas</strong>.</li>
    <li><strong>Movimentos Sociais Históricos da Amazônia e de Rondônia:</strong>
      <ul class="list-disc pl-5 mt-1 space-y-1">
        <li><strong>Movimento dos Seringueiros e os "Empates" (anos 1970–1980):</strong> Liderado por Wilson Pinheiro e <strong>Chico Mendes</strong>, uniu trabalhadores extrativistas da Amazônia Ocidental na defesa da floresta em pé, dando origem ao conceito mundialmente reconhecido de <strong>Reserva Extrativista (RESEX)</strong> — hoje fundamental em Rondônia (como a RESEX Lago do Cuniã em Porto Velho e a RESEX Rio Ouro Preto em Guajará-Mirim);</li>
        <li><strong>Movimento Indígena e Povos Tradicionais em Rondônia:</strong> Atuação de povos originários como os <strong>Karitiana, Karipuna, Uru-Eu-Wau-Wau, Cinta Larga, Suruí (Paiter Suruí), Gavião (Ikolen) e Arara</strong>, além das comunidades ribeirinhas e quilombolas do Vale do Guaporé e do Baixo Madeira.</li>
      </ul>
    </li>
  </ul>
</div>`,
  modoB: `<ul class="list-disc pl-4 space-y-1 text-xs">
  <li><strong>Semana de Arte Moderna (Fevereiro de 1922, Teatro Municipal de SP):</strong> Mário de Andrade, Oswald de Andrade, Anita Malfatti, Tarsila do Amaral (<em>Abaporu</em> / Manifesto Antropofágico de 1928), Heitor Villa-Lobos e Victor Brecheret.</li>
  <li><strong>Tropicalismo (1967–1968):</strong> Caetano Veloso, Gilberto Gil, Gal Costa, Tom Zé e Hélio Oiticica (sincretismo entre vanguarda, cultura pop e raízes brasileiras).</li>
  <li><strong>Movimento Socioambiental Amazônico:</strong> Criou o modelo de <strong>Reserva Extrativista (RESEX)</strong>, como a <strong>RESEX Lago do Cuniã</strong> (localizada no Baixo Madeira, em Porto Velho).</li>
</ul>`,
  traps: [
    '❌ Mito/Pegadinha: "A Semana de Arte Moderna de 1922 ocorreu no Teatro Amazonas, em Manaus, e defendia o retorno ao estilo clássico português." — ✅ CORRETO: Ocorreu no Teatro Municipal de São Paulo (fevereiro de 1922) e rompeu com o academicismo, defendendo a identidade nacional e a liberdade estética.',
    '❌ Mito/Pegadinha: "As Reservas Extrativistas (RESEX), como a do Lago do Cuniã em Porto Velho, proíbem a permanência de populações ribeirinhas e extrativistas tradicionais." — ✅ CORRETO: A RESEX é uma Unidade de Conservação de Uso Sustentável criada justamente para proteger os meios de vida e a cultura das populações extrativistas tradicionais.',
  ],
  questions: [
    {
      q: '(IBGP — Perfil Humanidades) A Semana de Arte Moderna de 1922, realizada no Teatro Municipal de São Paulo, representou um divisor de águas na história artística e cultural brasileira. Assinale a alternativa que apresenta CORRETAMENTE características e protagonistas desse movimento:',
      options: [
        'A) Ruptura com o academicismo e o parnasianismo, liberdade formal, valorização da linguagem coloquial e da identidade nacional, tendo como expoentes Mário de Andrade, Oswald de Andrade, Anita Malfatti, Tarsila do Amaral e Heitor Villa-Lobos.',
        'B) Imitação rigorosa da escultura greco-romana clássica e proibição de temas ligados ao folclore e à cultura popular brasileira.',
        'C) Movimento exclusivo da música eletrônica surgido na década de 1990 no Rio Grande do Sul.',
        'D) Rejeição completa às vanguardas europeias em favor do retorno ao estilo colonial barroco do século XVII.',
      ],
      ans: 0,
      comment:
        'Gabarito: A. O Modernismo de 1922 rompeu com o passadismo acadêmico e parnasiano, assimilou criticamente as vanguardas europeias (antropofagia cultural) e valorizou a identidade nacional, a cultura popular e a língua falada no Brasil.',
    },
    {
      q: '(IBGP — Perfil Humanidades e Cultura de PVH) No município de Porto Velho e no estado de Rondônia, as manifestações artísticas, culturais e socioambientais refletem a pluralidade de povos indígenas, ribeirinhos, nordestinos e migrantes. Sobre o patrimônio cultural e os movimentos sociais locais, assinale a alternativa CORRETA:',
      options: [
        'A) O Arraial Flor do Maracujá (Mostra de Quadrilhas e Bois-Bumbás) e a Banda do Vai Quem Quer constituem marcos tradicionais da cultura popular de Porto Velho, assim como a Reserva Extrativista (RESEX) Lago do Cuniã representa a conquista socioambiental das comunidades ribeirinhas do Baixo Madeira.',
        'B) Porto Velho não possui nenhum bem tombado ou reconhecido como patrimônio histórico, pois a Estrada de Ferro Madeira-Mamoré foi construída no estado do Paraná.',
        'C) As Caixas d’Água do Caiari ("Três Marias") foram demolidas em 1950 e substituídas por arranha-céus.',
        'D) O movimento dos seringueiros na Amazônia defendia a substituição total da floresta nativa por desertos de mineração.',
      ],
      ans: 0,
      comment:
        'Gabarito: A. O Arraial Flor do Maracujá, a Banda do Vai Quem Quer, as Três Caixas d’Água e o complexo da EFMM são ícones culturais de Porto Velho, e a RESEX Lago do Cuniã é referência nacional de manejo comunitário sustentável no Baixo Madeira.',
    },
    {
      q: '(IBGP — Perfil Humanidades) Na história da arte brasileira do final da década de 1960 (1967–1968), o movimento cultural que retomou o conceito de "antropofagia" de Oswald de Andrade, unindo guitarras elétricas, música popular tradicional, artes plásticas (Hélio Oiticica) e cinema em obras de Caetano Veloso, Gilberto Gil, Gal Costa e Os Mutantes, ficou conhecido como:',
      options: [
        'A) Arcadismo Mineiro.',
        'B) Tropicalismo (ou Tropicália).',
        'C) Realismo Científico.',
        'D) Classicismo Quinhentista.',
      ],
      ans: 1,
      comment:
        'Gabarito: B. O Tropicalismo (Tropicália) revolucionou a cultura brasileira entre 1967 e 1968 ao fundir elementos da cultura pop internacional e das vanguardas com ritmos regionais brasileiros.',
    },
  ],
  flashcards: [
    {
      f: 'Humanidades: Quais foram os principais artistas e escritores ligados ao Modernismo de 1922 no Brasil?',
      b: 'Mário de Andrade, Oswald de Andrade, Anita Malfatti, Tarsila do Amaral (quadro Abaporu), Menotti Del Picchia, Victor Brecheret e Heitor Villa-Lobos.',
    },
    {
      f: 'Humanidades Porto Velho: Quais são os principais marcos culturais e folclóricos da capital rondoniense?',
      b: 'Complexo da Estrada de Ferro Madeira-Mamoré (EFMM), As Três Caixas d’Água ("Três Marias"), Arraial Flor do Maracujá (Quadrilhas e Bois-Bumbás), Banda do Vai Quem Quer e Festas do Divino no Guaporé/Madeira.',
    },
    {
      f: 'Humanidades e Movimentos Sociais: Qual Unidade de Conservação no Baixo Madeira (Porto Velho) simboliza a conquista das comunidades extrativistas e ribeirinhas (manejo de jacaré e pesca)?',
      b: 'A Reserva Extrativista (RESEX) Lago do Cuniã.',
    },
    {
      f: 'Humanidades: Qual movimento artístico brasileiro de 1967–1968 (Caetano Veloso, Gilberto Gil, Hélio Oiticica) retomou a antropofagia modernista?',
      b: 'O Tropicalismo (ou Tropicália).',
    },
  ],
};

// New Block 2.3 for atu_2 (Humanidades: Literatura, Música, Povos Indígenas e Patrimônio Imaterial de RO/PVH)
const newBlock_Atu2_HumanidadesRondonia = {
  title:
    'Bloco 2.3 — Movimentos Culturais, Literários, Musicais e Povos Tradicionais de Porto Velho e Rondônia (Regionalismo Amazônico, Beradeiro, Povos Indígenas e Patrimônio Imaterial)',
  modoA: `<div class="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
  <div class="bg-teal-900 text-white p-3.5 rounded-xl border border-teal-700">
    <span class="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">Identidade Cultural de Porto Velho e Rondônia</span>
    <h4 class="text-sm sm:text-base font-extrabold mt-0.5">A Cultura "Beradeira", a Literatura Regional e os Movimentos Indígenas e Quilombolas</h4>
    <p class="text-xs text-teal-100 mt-1">Tópicos essenciais de Humanidades locais frequentemente cobrados em provas municipais de Porto Velho.</p>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">1. O Movimento de Valorização da Identidade "Beradeira" e a Música/Literatura de Porto Velho</h5>
  <ul class="list-disc pl-5 space-y-1.5">
    <li><strong>Ressignificação do Termo "Beradeiro":</strong> Historicamente utilizado de forma pejorativa para designar quem vivia "na beira" dos rios (ribeirinhos do Rio Madeira, Machado, Guaporé e Mamoré), o termo <strong>"Beradeiro"</strong> foi ressignificado pelos movimentos culturais, musicais e acadêmicos de Porto Velho como símbolo de <strong>orgulho identitário, resistência amazônica e pertencimento ribeirinho</strong>.</li>
    <li><strong>Expressões Musicais e Poéticas Locais:</strong> Destacam-se na história cultural de Porto Velho compositores, poetas e cronistas como <strong>Bado</strong>, <strong>Zezinho dos Palmares</strong>, <strong>Ernesto Melo</strong>, <strong>Sílvio Santos (Zé Katraca)</strong>, <strong>Antero Soares</strong>, além da historiografia regional de <strong>Abnael Machado de Lima</strong>, <strong>Esron Penha de Menezes</strong>, <strong>Manoel Rodrigues Ferreira</strong> (autor de <em>A Ferrovia do Diabo</em>) e <strong>Dante Ribeiro da Fonseca</strong>.</li>
    <li><strong>Culinária e Saberes Tradicionais:</strong> Caldeirada de tucunaré e tambaqui no tucupi, mojica de peixe, farinha d’água de mandioca do Baixo Madeira, tacacá, açaí, cupuaçu e castanha-da-amazônia.</li>
  </ul>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">2. Diversidade Étnica, Povos Indígenas e Comunidades Quilombolas em Rondônia</h5>
  <ul class="list-disc pl-5 space-y-1.5">
    <li><strong>Povos Indígenas em Porto Velho e Rondônia:</strong> Rondônia abriga mais de 50 etnias indígenas (inclusive grande diversidade linguística do tronco Tupi). No município de Porto Velho e entorno imediato destacam-se as Terras Indígenas <strong>Karitiana</strong> (famosa pela língua Arikém e artesanato), <strong>Karipuna</strong>, <strong>Kaxarari</strong> (na divisa com o Amazonas/Acre, distrito de Extrema) e <strong>Uru-Eu-Wau-Wau</strong> (na Serra dos Pacaás Novos).</li>
    <li><strong>Comunidades Remanescentes de Quilombos e Festa do Divino Espírito Santo:</strong> Formadas historicamente por descendentes de trabalhadores africanos escravizados no século XVIII (ciclo do ouro e construção do Forte Príncipe da Beira no Vale do Guaporé), destacam-se comunidades como <strong>Pedras Negras, Santo Antônio do Guaporé, Jesus e Forte Príncipe da Beira</strong>, célebres pela secular <strong>Romaria fluvial da Festa do Divino Espírito Santo do Vale do Guaporé</strong> (reconhecida como patrimônio cultural imaterial).</li>
  </ul>
</div>`,
  modoB: `<ul class="list-disc pl-4 space-y-1 text-xs">
  <li><strong>Cultura "Beradeira":</strong> Valorização identitária das populações ribeirinhas das margens ("beiras") do Rio Madeira e seus afluentes em Porto Velho.</li>
  <li><strong>Terras Indígenas em Porto Velho e entorno:</strong> <strong>Karitiana</strong>, <strong>Karipuna</strong> e <strong>Kaxarari</strong> (além dos Paiter Suruí, Cinta Larga e Uru-Eu-Wau-Wau em Rondônia).</li>
  <li><strong>Patrimônio Imaterial Afro-Rondoniense:</strong> Comunidades quilombolas do Vale do Guaporé (Pedras Negras, Santo Antônio) e a tradicional <strong>Festa do Divino Espírito Santo</strong>.</li>
</ul>`,
  traps: [
    '❌ Mito/Pegadinha: "O município de Porto Velho não possui terras indígenas demarcadas nem população ribeirinha tradicional." — ✅ CORRETO: Porto Velho abriga Terras Indígenas históricas como Karitiana, Karipuna e Kaxarari, além de dezenas de comunidades ribeirinhas no Baixo e Alto Madeira.',
  ],
  questions: [
    {
      q: '(IBGP — Perfil Humanidades RO/PVH) Nos movimentos culturais e identitários de Porto Velho, o termo historicamente associado às populações tradicionais que habitam as margens ("beiras") do Rio Madeira e de seus igarapés — hoje valorizado na música, na literatura e nas artes locais como símbolo de orgulho e pertencimento amazônico — é:',
      options: [
        'A) Bandeirante paulista.',
        'B) Beradeiro.',
        'C) Tropeiro dos pampas.',
        'D) Jangadeiro atlântico.',
      ],
      ans: 1,
      comment:
        'Gabarito: B. A identidade "beradeira" (do habitante da beira dos rios amazônicos, especialmente do Rio Madeira) é um marco cultural, artístico e literário de Porto Velho.',
    },
    {
      q: '(IBGP — Perfil Humanidades RO) No território do município de Porto Velho e regiões limítrofes, destacam-se importantes Terras Indígenas reconhecidas pela preservação de suas línguas, saberes e biodiversidade amazônica, entre as quais se incluem:',
      options: [
        'A) Karitiana, Karipuna e Kaxarari.',
        'B) Asteca, Inca e Maia.',
        'C) Zulu e Maori.',
        'D) Sami e Inuit.',
      ],
      ans: 0,
      comment:
        'Gabarito: A. As Terras Indígenas Karitiana, Karipuna e Kaxarari têm presença direta no território de Porto Velho e entorno.',
    },
    {
      q: '(IBGP — Perfil Humanidades RO) No Vale do Rio Guaporé, em Rondônia, comunidades remanescentes de quilombos (como Pedras Negras e Santo Antônio do Guaporé) preservam há mais de um século uma importante manifestação religiosa e cultural fluvial reconhecida como patrimônio cultural imaterial do estado, denominada:',
      options: [
        'A) Oktoberfest Germânica.',
        'B) Festa do Divino Espírito Santo do Vale do Guaporé.',
        'C) Festival de Inverno da Serra Gaúcha.',
        'D) Cavalhada Goiana do Cerrado.',
      ],
      ans: 1,
      comment:
        'Gabarito: B. A Festa do Divino Espírito Santo do Vale do Guaporé é a mais tradicional manifestação religiosa e cultural das comunidades quilombolas e ribeirinhas da fronteira Brasil–Bolívia em Rondônia.',
    },
  ],
  flashcards: [
    {
      f: 'Humanidades PVH: O que significa a identidade cultural "Beradeira" em Porto Velho?',
      b: 'Refere-se ao habitante tradicional da "beira" do Rio Madeira e seus afluentes, ressignificado pelas artes, literatura e música de Porto Velho como símbolo de orgulho ribeirinho amazônico.',
    },
    {
      f: 'Humanidades PVH: Quais são as 3 principais Terras Indígenas localizadas no município de Porto Velho e divisas?',
      b: 'Terras Indígenas Karitiana, Karipuna e Kaxarari.',
    },
    {
      f: 'Humanidades RO: Qual obra clássica de Manoel Rodrigues Ferreira narra a epopeia da construção da Estrada de Ferro Madeira-Mamoré?',
      b: 'O livro "A Ferrovia do Diabo".',
    },
    {
      f: 'Humanidades RO: Qual celebração centenária das comunidades quilombolas do Vale do Guaporé é Patrimônio Cultural Imaterial de Rondônia?',
      b: 'A Festa do Divino Espírito Santo do Vale do Guaporé.',
    },
  ],
};

// New Block 4.1 for atu_4 (Noções de cidadania)
const newBlock_Atu4_Cidadania = {
  title:
    'Bloco 4.1 — Noções de Cidadania: Conceito Histórico e Constitucional, Direitos Civis, Políticos e Sociais, Soberania Popular (Plebiscito, Referendo e Iniciativa Popular) e Cidadania Ativa no SUS',
  modoA: `<div class="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
  <div class="bg-teal-900 text-white p-3.5 rounded-xl border border-teal-700">
    <span class="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">Item 4 de Conhecimentos Gerais — Parte 1: Noções de Cidadania</span>
    <h4 class="text-sm sm:text-base font-extrabold mt-0.5">Cidadania Plena, Gerações/Dimensões de Direitos e Mecanismos de Participação Democrática</h4>
    <p class="text-xs text-teal-100 mt-1">Conceitos fundamentais de cidadania cobrados pela banca IBGP em Conhecimentos Gerais.</p>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">1. Conceito de Cidadania: Sentido Estrito vs. Sentido Amplo (T. H. Marshall e a "Constituição Cidadã" de 1988)</h5>
  <ul class="list-disc pl-5 space-y-1.5">
    <li><strong>Cidadania como Fundamento da República (Art. 1º, II da CF/88):</strong> A Constituição Federal de 1988 (chamada por Ulysses Guimarães de <em>"Constituição Cidadã"</em>) consagrou a <strong>cidadania</strong> e a <strong>dignidade da pessoa humana</strong> como fundamentos do Estado Democrático de Direito.</li>
    <li><strong>Cidadania em Sentido Estrito (Jurídico-Político) vs. Sentido Amplo (Substancial):</strong>
      <ul class="list-disc pl-5 mt-1 space-y-1">
        <li><strong>Sentido Estrito:</strong> É o vínculo político que habilita o nacional a participar da vida política do Estado por meio do <strong>direito de votar (capacidade eleitoral ativa) e de ser votado (capacidade eleitoral passiva)</strong>, adquirido com o alistamento eleitoral;</li>
        <li><strong>Sentido Amplo (Cidadania Plena):</strong> É o exercício efetivo dos <strong>direitos e deveres civis, políticos, sociais, econômicos, culturais e ambientais</strong> na vida em sociedade, garantindo inclusão social, acesso à saúde, educação, trabalho digno, justiça e participação comunitária.</li>
      </ul>
    </li>
    <li><strong>As Três Dimensões Clássicas da Cidadania (T. H. Marshall):</strong>
      <ol class="list-decimal pl-5 mt-1 space-y-0.5">
        <li><strong>Direitos Civis (1ª Dimensão — Liberdade):</strong> Liberdade de ir e vir, liberdade de expressão, propriedade, igualdade perante a lei e devido processo legal;</li>
        <li><strong>Direitos Políticos (2ª etapa histórica / participação):</strong> Direito de votar, ser votado, organizar partidos políticos, participar de conselhos e fiscalizar o poder público;</li>
        <li><strong>Direitos Sociais (Igualdade Material / Bem-Estar):</strong> Saúde, educação, alimentação, trabalho, moradia, transporte, lazer, segurança e previdência social (Art. 6º da CF/88).</li>
      </ol>
    </li>
  </ul>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">2. Instrumentos Diretos de Exercício da Cidadania e Soberania Popular (Art. 14 da CF/88)</h5>
  <p>A soberania popular é exercida pelo sufrágio universal e pelo voto direto e secreto, com valor igual para todos, e, nos termos da lei, mediante <strong>três instrumentos de democracia direta/semidireta</strong>:</p>
  <ul class="list-disc pl-5 space-y-1">
    <li><strong>1. Plebiscito (Consulta PRÉVIA):</strong> Os cidadãos são convocados a manifestar-se <strong>ANTES</strong> da elaboração da lei ou ato administrativo sobre tema de relevância constitucional/administrativa (ex.: plebiscito obrigatório para criação, incorporação, fusão ou desmembramento de Municípios — Art. 18, § 4º da CF/88);</li>
    <li><strong>2. Referendo (Consulta POSTERIOR):</strong> Os cidadãos são convocados <strong>DEPOIS</strong> da aprovação da lei ou ato normativo, para ratificá-lo (confirmá-lo) ou rejeitá-lo;</li>
    <li><strong>3. Iniciativa Popular:</strong> Apresentação de projeto de lei diretamente pelos cidadãos ao Poder Legislativo (na esfera federal: mínimo de 1% do eleitorado nacional, distribuído por pelo menos 5 Estados, com não menos de 0,3% dos eleitores de cada um deles; na esfera municipal/LOM-PVH: mínimo de <strong>5% do eleitorado do Município</strong>).</li>
  </ul>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">3. Cidadania Sanitária e Controle Social no Trabalho do ACE</h5>
  <p>Na saúde pública, o exercício da cidadania materializa-se na <strong>participação da comunidade na gestão do SUS</strong> (Conselhos e Conferências de Saúde — Lei nº 8.142/1990), no uso das <strong>Ouvidorias do SUS (Disque 136 e Ouvidoria SEMUSA)</strong> e na corresponsabilidade socioambiental dos moradores junto ao <strong>Agente de Combate às Endemias (ACE)</strong> para manter quintais e imóveis livres de criadouros de vetores.</p>
</div>`,
  modoB: `<ul class="list-disc pl-4 space-y-1 text-xs">
  <li><strong>Cidadania Plena (T. H. Marshall):</strong> Integra <strong>Direitos Civis</strong> (liberdade individual), <strong>Direitos Políticos</strong> (participação no poder/voto) e <strong>Direitos Sociais</strong> (saúde, educação, trabalho, moradia).</li>
  <li><strong>Plebiscito vs. Referendo (Art. 14 CF/88):</strong> <strong>Plebiscito</strong> = consulta <strong>PRÉVIA</strong> (antes da lei); <strong>Referendo</strong> = consulta <strong>POSTERIOR</strong> (para confirmar ou rejeitar lei já aprovada).</li>
  <li><strong>Iniciativa Popular no Município (Art. 29, XIII CF/88):</strong> Subscrição de, no mínimo, <strong>5% do eleitorado municipal</strong>.</li>
</ul>`,
  traps: [
    '❌ Mito/Pegadinha: "Cidadania resume-se exclusivamente ao ato de votar a cada dois anos, não tendo relação com direitos sociais como saúde e educação." — ✅ CORRETO: Na concepção contemporânea e constitucional, a cidadania plena abrange dimensões civis, políticas, sociais, econômicas e ambientais, além de direitos e deveres cotidianos.',
    '❌ Mito/Pegadinha: "O plebiscito é convocado após a aprovação da lei para referendá-la, enquanto o referendo ocorre antes da lei." — ✅ CORRETO: É o inverso! Plebiscito (Pré = antes) é consulta prévia; Referendo é consulta posterior.',
  ],
  questions: [
    {
      q: '(IBGP — Perfil Conhecimentos Gerais) Acerca das noções contemporâneas de cidadania e dos mecanismos de participação popular previstos na Constituição Brasileira, assinale a alternativa CORRETA:',
      options: [
        'A) O conceito contemporâneo de cidadania plena abrange o exercício integrado dos direitos e deveres civis, políticos e sociais, incluindo a participação democrática mediante sufrágio universal, plebiscito (consulta prévia), referendo (consulta posterior) e iniciativa popular.',
        'B) A cidadania no Brasil é restrita aos titulares de cargos públicos vitalícios, sendo vedada aos trabalhadores da iniciativa privada.',
        'C) O plebiscito consiste na consulta popular realizada obrigatoriamente dez anos após a revogação de uma lei.',
        'D) Os direitos sociais, como a saúde e a educação, foram excluídos do conceito de cidadania pela Constituição de 1988.',
      ],
      ans: 0,
      comment:
        'Gabarito: A. A cidadania plena articula direitos civis, políticos e sociais, além dos instrumentos de soberania popular do Art. 14 da CF/88 (plebiscito = consulta prévia; referendo = consulta posterior; iniciativa popular).',
    },
    {
      q: '(IBGP — Perfil Cidadania) No âmbito municipal, a propositura de projetos de lei de interesse específico do Município, da cidade ou de bairros por meio da iniciativa popular exige a manifestação de, pelo menos, qual percentual do eleitorado municipal?',
      options: [
        'A) 5% (cinco por cento) do eleitorado.',
        'B) 50% (cinquenta por cento) do eleitorado.',
        'C) 90% (noventa por cento) do eleitorado.',
        'D) 0,001% do eleitorado.',
      ],
      ans: 0,
      comment:
        'Gabarito: A. Conforme o Art. 29, inciso XIII da CF/88 (e a Lei Orgânica de Porto Velho), a iniciativa popular de projetos de lei de interesse específico do Município, da cidade ou de bairros exige a manifestação de, pelo menos, 5% do eleitorado.',
    },
    {
      q: '(IBGP — Perfil Cidadania e Saúde) O exercício da cidadania na saúde pública brasileira combina direitos (acesso universal, igualitário e gratuito às ações e serviços do SUS) e deveres coletivos e socioambientais. Constitui exemplo de exercício ativo da cidadania sanitária pela população em parceria com o Agente de Combate às Endemias (ACE):',
      options: [
        'A) Recusar sistematicamente a vistoria de imóveis e acumular pneus a céu aberto.',
        'B) Participar dos Conselhos e Conferências de Saúde e colaborar na eliminação mecânica de criadouros domésticos de vetores (como o Aedes aegypti), exercendo a corresponsabilidade sanitária.',
        'C) Utilizar antibióticos sem receita médica para prevenir arboviroses.',
        'D) Descartar resíduos sólidos hospitalares nas margens dos igarapés urbanos.',
      ],
      ans: 1,
      comment:
        'Gabarito: B. A cidadania ativa envolve tanto o controle social (Conselhos e Conferências) quanto o dever cívico e sanitário de preservar o meio ambiente doméstico e comunitário livre de focos de vetores.',
    },
  ],
  flashcards: [
    {
      f: 'Cidadania: Quais são as 3 dimensões clássicas da cidadania segundo T. H. Marshall?',
      b: '1. Direitos Civis (liberdade individual e igualdade perante a lei); 2. Direitos Políticos (participação política/voto); 3. Direitos Sociais (saúde, educação, trabalho e bem-estar social).',
    },
    {
      f: 'Cidadania (Art. 14 CF/88): Qual a diferença entre Plebiscito e Referendo?',
      b: 'Plebiscito é consulta popular PRÉVIA (antes da elaboração da lei/ato); Referendo é consulta popular POSTERIOR (para confirmar ou rejeitar lei/ato já aprovado).',
    },
    {
      f: 'Cidadania Municipal: Qual é o percentual mínimo de eleitores exigido para a Iniciativa Popular de lei no Município (Art. 29, XIII da CF/88)?',
      b: 'Mínimo de 5% (cinco por cento) do eleitorado municipal.',
    },
    {
      f: 'Cidadania: Quais são os 5 fundamentos da República Federativa do Brasil no Art. 1º da CF/88 (mnemônico SO-CI-DI-VA-PLU)?',
      b: 'Soberania, Cidadania, Dignidade da pessoa humana, Valores sociais do trabalho e da livre iniciativa, e Pluralismo político.',
    },
  ],
};

// New Block 4.2 for atu_4 (Símbolos nacionais, estaduais e municipais)
const newBlock_Atu4_Simbolos = {
  title:
    'Bloco 4.2 — Símbolos Nacionais (CF/88 Art. 13 e Lei nº 5.700/1971), Símbolos Estaduais de Rondônia e Símbolos Municipais de Porto Velho',
  modoA: `<div class="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
  <div class="bg-teal-900 text-white p-3.5 rounded-xl border border-teal-700">
    <span class="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">Item 4 de Conhecimentos Gerais — Parte 2: Símbolos Nacionais, Estaduais e Municipais</span>
    <h4 class="text-sm sm:text-base font-extrabold mt-0.5">Guia Completo dos Símbolos da República, do Estado de Rondônia e do Município de Porto Velho</h4>
    <p class="text-xs text-teal-100 mt-1">Todos os detalhes visuais, históricos e autorais dos símbolos oficiais exigidos no edital.</p>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">1. Os 4 Símbolos Oficiais da República Federativa do Brasil (Art. 13, § 1º da CF/88 e Lei nº 5.700/1971)</h5>
  <p>Conforme o <strong>Art. 13, § 1º da Constituição Federal de 1988</strong>, são símbolos da República Federativa do Brasil: <strong>(1) a Bandeira Nacional; (2) o Hino Nacional; (3) as Armas Nacionais (Brasão da República); e (4) o Selo Nacional</strong> (mnemônico: <strong>BA-HI-AR-SE</strong>):</p>
  <ul class="list-disc pl-5 space-y-1.5">
    <li><strong>1. Bandeira Nacional:</strong> Instituída pelo Decreto nº 4, de <strong>19 de novembro de 1889</strong> (Dia da Bandeira), com projeto de <strong>Raimundo Teixeira Mendes e Miguel Lemos</strong> e desenho de <strong>Décio Villares</strong>. Possui retângulo verde, losango amarelo, círculo azul-celeste com a faixa branca (lema positivista <em>"Ordem e Progresso"</em>, inspirado em Augusto Comte) e <strong>27 estrelas brancas</strong> (representando os 26 Estados e o Distrito Federal). A única estrela posicionada <strong>acima da faixa branca</strong> é <strong><em>Spica</em> (Alfa da Virgem), que representa o Estado do Pará</strong>; a estrela <strong>Muliphen (Gama do Cão Maior) representa o Estado de Rondônia</strong>!</li>
    <li><strong>2. Hino Nacional Brasileiro:</strong> Música composta por <strong>Francisco Manuel da Silva</strong> (1831) e letra (poema) escrita por <strong>Joaquim Osório Duque-Estrada</strong> (1909, oficializada em 1922).</li>
    <li><strong>3. Armas Nacionais (Brasão da República):</strong> Criadas pelo engenheiro <strong>Artur Sauer</strong> e desenhadas por <strong>Luís Grüder</strong> (1889). Apresentam a estrela de cinco pontas, o Cruzeiro do Sul ao centro, ramos de <strong>café (à direita) e fumo/tabaco (à esquerda)</strong> e a data da Proclamação da República (<em>15 de novembro de 1889</em>).</li>
    <li><strong>4. Selo Nacional:</strong> Constituído por um círculo representando uma esfera celeste (igual ao centro da Bandeira Nacional) com as palavras <em>"República Federativa do Brasil"</em> ao redor, utilizado para autenticar diplomas, certificados e atos oficiais da República.</li>
  </ul>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">2. Símbolos Oficiais do Estado de Rondônia (Art. 7º da Constituição Estadual e Decretos-Leis de 1981)</h5>
  <div class="overflow-x-auto my-2">
    <table class="min-w-full text-xs border border-slate-300 rounded-lg overflow-hidden">
      <thead class="bg-slate-800 text-white">
        <tr>
          <th class="p-2 border border-slate-300 text-left">Símbolo Estadual de Rondônia</th>
          <th class="p-2 border border-slate-300 text-left">Autoria / Norma Legal</th>
          <th class="p-2 border border-slate-300 text-left">Descrição e Significado (Cai muito na prova!)</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 bg-white">
        <tr>
          <td class="p-2 font-bold text-teal-900">Bandeira do Estado de Rondônia</td>
          <td class="p-2">Criada por <strong>Sílvio Rolim de Carvalho</strong> (Decreto-Lei nº 7, de 31/12/1981).</td>
          <td class="p-2">Possui 4 cores (verde, amarelo, azul e branco): metade superior em <strong>azul</strong> (céu), faixa inferior em <strong>verde</strong> (florestas), duas faixas em <strong>amarelo</strong> (riquezas minerais) que convergem para o centro imitando o traçado de uma rodovia (<strong>BR-364</strong>) rumo ao horizonte, e ao centro uma <strong>grande estrela branca de 5 pontas (Muliphen)</strong> elevando-se no céu azul (o novo estado nascendo).</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Hino do Estado de Rondônia (<em>"Céus de Rondônia"</em>)</td>
          <td class="p-2">Letra de <strong>Joaquim Araújo Lima</strong> e música de <strong>José de Mello e Silva</strong>.</td>
          <td class="p-2">Composto originalmente em 1946 como valsa <em>"Céus de Guaporé"</em> e oficializado como Hino de Rondônia em 1981. Refrão clássico: <em>"Quando nosso céu se faz moldura / Para engalanar a natureza / Nós os Bandeirantes de Rondônia / Nos orgulhamos de tanta beleza..."</em>.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Brasão de Armas do Estado de Rondônia</td>
          <td class="p-2">Criado por <strong>Sebastiãoima/Artistas locais</strong> (Decreto-Lei de 1981).</td>
          <td class="p-2">Apresenta ao fundo o <strong>Forte Príncipe da Beira</strong> (defesa da fronteira), o Rio Madeira/Guaporé, a <strong>Estrada de Ferro Madeira-Mamoré</strong> e a <strong>BR-364</strong>, ladeado por galhos de <strong>cacau e café/borracha</strong>, uma espada empunhada e a divisa <em>"1943 — GUAPORÉ — 1981 — RONDÔNIA"</em>.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">3. Símbolos Oficiais do Município de Porto Velho (Art. 4º da Lei Orgânica do Município)</h5>
  <ul class="list-disc pl-5 space-y-1.5">
    <li><strong>Art. 4º da LOM-PVH:</strong> São símbolos do Município de Porto Velho: <strong>a Bandeira, o Brasão e o Hino</strong>, representativos de sua cultura e história.</li>
    <li><strong>Bandeira do Município de Porto Velho:</strong> Composta pelas cores <strong>azul-celeste e amarelo-ouro</strong>, trazendo ao centro o perfil estilizado em preto de uma <strong>Caixa d’Água histórica (das Três Caixas d’Água / "Três Marias")</strong> sobre fundo amarelo cercado por estrelas azuis.</li>
    <li><strong>Brasão de Armas de Porto Velho:</strong> Destaca elementos fundadores da capital: as <strong>Três Caixas d’Água ("Três Marias")</strong>, a locomotiva da <strong>Estrada de Ferro Madeira-Mamoré (EFMM)</strong>, o sol nascente, o Rio Madeira, a seringueira (ciclo da borracha) e a data de criação do município (<strong>2 de outubro de 1914</strong> — Lei nº 757 do Estado do Amazonas) e instalação (<strong>24 de janeiro de 1915</strong>).</li>
    <li><strong>Hino do Município de Porto Velho:</strong> Letra de <strong>Abnael Machado de Lima e José Ribeiro Filho</strong> e música de <strong>Waldemar Bastos</strong> (exaltando o Rio Madeira, os pioneiros da ferrovia e a pujança da capital).</li>
  </ul>
</div>`,
  modoB: `<ul class="list-disc pl-4 space-y-1 text-xs">
  <li><strong>4 Símbolos Nacionais (Art. 13, § 1º CF/88 — BA-HI-AR-SE):</strong> Bandeira, Hino, Armas e Selo. Estrela de Rondônia na Bandeira Nacional: <strong>Muliphen</strong> (Gama do Cão Maior).</li>
  <li><strong>Símbolos de Rondônia:</strong> Bandeira criada por <strong>Sílvio Carvalho</strong> (faixas amarelas = BR-364 e riquezas; verde = mata; azul = céu; estrela branca = novo Estado). Hino <em>"Céus de Rondônia"</em>: letra de <strong>Joaquim Araújo Lima</strong> e música de <strong>José de Mello e Silva</strong>.</li>
  <li><strong>Símbolos de Porto Velho (Art. 4º LOM):</strong> Bandeira (azul e amarela com a Caixa d’Água ao centro), Brasão (Três Caixas d’Água, locomotiva da EFMM e seringueira) e Hino.</li>
</ul>`,
  traps: [
    '❌ Mito/Pegadinha: "O Carnaval, o Futebol e a Moeda Real são símbolos oficiais da República Federativa do Brasil previstos no Art. 13 da Constituição." — ✅ CORRETO: Os 4 únicos símbolos oficiais da República no Art. 13, § 1º da CF/88 são a Bandeira, o Hino, as Armas e o Selo Nacionais.',
    '❌ Mito/Pegadinha: "A Bandeira do Município de Porto Velho traz ao centro o desenho da Usina de Itaipu em verde e vermelho." — ✅ CORRETO: A Bandeira de Porto Velho tem as cores azul e amarelo e traz ao centro a silhueta histórica da Caixa d’Água ("Três Marias").',
  ],
  questions: [
    {
      q: '(IBGP — Perfil Símbolos Oficiais) De acordo com o Art. 13, § 1º da Constituição da República Federativa do Brasil de 1988, são Símbolos da República Federativa do Brasil:',
      options: [
        'A) A Bandeira, o Hino, as Armas e o Selo Nacionais.',
        'B) A Bandeira, a Moeda Nacional, a Língua Portuguesa e o Brasão do Congresso.',
        'C) O Hino da Independência, a Faixa Presidencial e o Cruzeiro do Sul.',
        'D) Apenas a Bandeira Nacional e o Hino Nacional.',
      ],
      ans: 0,
      comment:
        'Gabarito: A. Nos termos literais do Art. 13, § 1º da CF/88, são símbolos da República Federativa do Brasil a Bandeira, o Hino, as Armas e o Selo Nacionais. A língua portuguesa é o idioma oficial (caput do Art. 13), e não um dos quatro símbolos.',
    },
    {
      q: '(IBGP — Perfil Símbolos Estaduais de RO) Sobre os símbolos oficiais do Estado de Rondônia (Bandeira, Brasão e Hino "Céus de Rondônia"), assinale a alternativa CORRETA:',
      options: [
        'A) A Bandeira de Rondônia, projetada por Sílvio Carvalho em 1981, apresenta o céu azul, a floresta verde, faixas amarelas que remetem às riquezas minerais e à rodovia BR-364 convergindo para o centro, onde desponta uma estrela branca de cinco pontas.',
        'B) O Hino de Rondônia foi composto por Dom Pedro I em 1822 durante viagem ao Rio Madeira.',
        'C) O Brasão de Rondônia proíbe qualquer referência ao Forte Príncipe da Beira ou ao antigo Território Federal do Guaporé.',
        'D) Na Bandeira Nacional, o Estado de Rondônia não é representado por nenhuma estrela.',
      ],
      ans: 0,
      comment:
        'Gabarito: A. A Bandeira de Rondônia (autoria de Sílvio Rolim de Carvalho, oficializada em 31/12/1981) simboliza a rodovia BR-364/riquezas (amarelo), a floresta (verde), o céu (azul) e a estrela Muliphen (branca). O Hino "Céus de Rondônia" tem letra de Joaquim Araújo Lima e música de José de Mello e Silva.',
    },
    {
      q: '(IBGP — Perfil Símbolos Municipais de PVH) Nos termos da Lei Orgânica do Município de Porto Velho, são símbolos municipais a Bandeira, o Brasão e o Hino. Qual monumento histórico fundador da capital rondoniense está estampado em destaque no centro da Bandeira e no Brasão de Porto Velho?',
      options: [
        'A) O Cristo Redentor do Corcovado.',
        'B) A Caixa d’Água histórica (monumento das Três Caixas d’Água / "Três Marias").',
        'C) O Elevador Lacerda.',
        'D) O Teatro Amazonas.',
      ],
      ans: 1,
      comment:
        'Gabarito: B. As históricas Caixas d’Água ("Três Marias"), erguidas entre 1910 e 1912 pela Madeira-Mamoré Railway Company na Praça das Três Caixas d’Água, são o símbolo central da Bandeira e do Brasão de Porto Velho.',
    },
    {
      q: '(IBGP — Perfil Símbolos Nacionais) Na Bandeira Nacional da República Federativa do Brasil, cada uma das 27 unidades federativas é representada por uma estrela específica da esfera celeste. A estrela que representa oficialmente o Estado de Rondônia denomina-se:',
      options: [
        'A) Muliphen (Gama da constelação do Cão Maior).',
        'B) Estrela Polar do Norte.',
        'C) Sol da Meia-Noite.',
        'D) Alfa Centauri.',
      ],
      ans: 0,
      comment:
        'Gabarito: A. Pela Lei Federal nº 5.700/1971 (atualizada pela Lei nº 8.421/1992), a estrela Muliphen (Gama do Cão Maior) representa o Estado de Rondônia na Bandeira Nacional, enquanto Spica (Alfa da Virgem, única acima da faixa branca) representa o Pará.',
    },
  ],
  flashcards: [
    {
      f: 'Símbolos Nacionais (Art. 13, § 1º CF/88): Quais são os 4 símbolos da República Federativa do Brasil?',
      b: '1. Bandeira Nacional; 2. Hino Nacional; 3. Armas Nacionais (Brasão); 4. Selo Nacional (Mnemônico: BA-HI-AR-SE).',
    },
    {
      f: 'Símbolos Nacionais: Qual estrela representa Rondônia na Bandeira Nacional e qual é a única estrela acima da faixa branca?',
      b: 'Rondônia é representada pela estrela Muliphen (Gama do Cão Maior). A única estrela acima da faixa branca "Ordem e Progresso" é Spica (que representa o Pará).',
    },
    {
      f: 'Símbolos Estaduais de RO: Quem criou a Bandeira de Rondônia e quem são os autores do Hino "Céus de Rondônia"?',
      b: 'Bandeira de RO: criada por Sílvio Rolim de Carvalho (1981). Hino de RO ("Céus de Rondônia"): letra de Joaquim Araújo Lima e música de José de Mello e Silva.',
    },
    {
      f: 'Símbolos Municipais de PVH: Quais são as cores e o elemento central da Bandeira de Porto Velho?',
      b: 'Cores azul-celeste e amarelo-ouro, trazendo ao centro a silhueta de uma das históricas Caixas d’Água ("Três Marias") cercada por estrelas.',
    },
  ],
};

// New Block 5.3 for atu_5 (Panorama Multitemático: Economia, Ecologia, Meio Ambiente/COP30, Justiça, Segurança, Saúde, Educação, Esportes e Turismo)
const newBlock_Atu5_Multitematico = {
  title:
    'Bloco 5.3 — Panorama Multitemático do Edital: Economia, Ecologia, Meio Ambiente (COP30 na Amazônia), Justiça, Segurança Pública, Saúde, Educação, Qualidade de Vida, Esportes e Turismo (PVH, RO, Brasil e Mundo)',
  modoA: `<div class="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
  <div class="bg-teal-900 text-white p-3.5 rounded-xl border border-teal-700">
    <span class="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">Item 5 de Conhecimentos Gerais — Eixos Multitemáticos Completos</span>
    <h4 class="text-sm sm:text-base font-extrabold mt-0.5">Meio Ambiente, Ecologia, Justiça, Segurança, Saúde, Educação, Esportes e Turismo</h4>
    <p class="text-xs text-teal-100 mt-1">Cobertura sistemática de todos os 16 subtemas listados no item 5 do conteúdo programático de Conhecimentos Gerais.</p>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">1. Ecologia, Meio Ambiente e Clima: COP30 na Amazônia, Mercado de Carbono e Transição Energética</h5>
  <ul class="list-disc pl-5 space-y-1.5">
    <li><strong>COP30 na Amazônia (Belém/PA — Novembro de 2025):</strong> A 30ª Conferência das Partes da Convenção-Quadro das Nações Unidas sobre Mudança do Clima (UNFCCC) realizou-se pela primeira vez na Amazônia brasileira (Belém/PA), tendo como pautas centrais: atualização das <strong>NDCs (Contribuições Nacionalmente Determinadas)</strong> para limitar o aquecimento a 1,5°C, financiamento climático para países em desenvolvimento, bioeconomia amazônica e o fundo internacional <strong>TFFF (Fundo Florestas Tropicais para Sempre)</strong> proposto pelo Brasil.</li>
    <li><strong>Mercado Regulado de Créditos de Carbono no Brasil (Lei Federal nº 15.042/2024):</strong> Instituiu o <strong>Sistema Brasileiro de Comércio de Emissões de Gases de Efeito Estufa (SBCE)</strong>, regulamentando metas de emissões para grandes indústrias e a geração de créditos de carbono florestais/REDD+ (com salvaguardas para povos indígenas e comunidades tradicionais na Amazônia).</li>
    <li><strong>Conceitos de Ecologia Cobrados pela IBGP (PDF #76 do Drive):</strong>
      <ul class="list-disc pl-5 mt-1 space-y-1">
        <li><strong>Hábitat vs. Nicho Ecológico:</strong> <em>Hábitat</em> é o "endereço" físico onde a espécie vive (ex.: água limpa parada sombreada para a larva do <em>Aedes aegypti</em> ou igarapés da floresta para o <em>Anopheles darlingi</em>); <em>Nicho ecológico</em> é a "profissão" / papel funcional da espécie no ecossistema (hábitos alimentares hematófagos da fêmea, horário de picada, predadores e reprodução);</li>
        <li><strong>Relações Ecológicas:</strong> Harmônicas (Mutualismo, Protocooperação, Comensalismo, Inquilinismo) vs. Desarmônicas (<strong>Parasitismo</strong> — ex.: <em>Plasmodium</em> ou <em>Schistosoma</em> no humano; <strong>Predatismo</strong> — ex.: peixes larvófagos <em>Poecilia reticulata</em> predando larvas de mosquitos no controle biológico; Competição e Amensalismo).</li>
      </ul>
    </li>
  </ul>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">2. Justiça, Segurança Pública, Educação, Qualidade de Vida, Esportes e Turismo</h5>
  <div class="overflow-x-auto my-2">
    <table class="min-w-full text-xs border border-slate-300 rounded-lg overflow-hidden">
      <thead class="bg-slate-800 text-white">
        <tr>
          <th class="p-2 border border-slate-300 text-left">Área Temática do Item 5</th>
          <th class="p-2 border border-slate-300 text-left">Destaques no Brasil, em Rondônia e em Porto Velho</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 bg-white">
        <tr>
          <td class="p-2 font-bold text-teal-900">Justiça e Segurança Pública</td>
          <td class="p-2"><strong>SUSP (Sistema Único de Segurança Pública — Lei nº 13.675/2018)</strong>; combate aos crimes ambientais e garimpo ilegal na Amazônia; criação da Polícia Penal (EC 104/2019); endurecimento contra o feminicídio (<strong>Lei nº 14.994/2024 — Pacote Antifeminicídio</strong>, que tornou o feminicídio crime autônomo com pena de 20 a 40 anos de reclusão) e atuação premiada do <strong>TJRO e MP-RO</strong> (Selo Diamante CNJ em transparência e justiça digital).</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Educação e Ciência</td>
          <td class="p-2">Novo FUNDEB Permanente (EC 108/2020), Programa <strong>Pé-de-Meia (Lei nº 14.818/2024)</strong> de incentivo financeiro-educacional para estudantes do ensino médio público, restrição ao uso de celulares nas escolas de educação básica (<strong>Lei Federal nº 15.100/2025</strong>) e expansão da <strong>UNIR (Universidade Federal de Rondônia)</strong> e do <strong>IFRO (Instituto Federal de Rondônia)</strong>.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Esportes e Qualidade de Vida</td>
          <td class="p-2"><strong>Jogos Olímpicos de Paris 2024:</strong> Delegação brasileira conquistou 20 medalhas (3 ouros: <strong>Beatriz Souza</strong> no judô, <strong>Rebeca Andrade</strong> no solo da ginástica artística — tornando-se a maior medalhista olímpica da história do Brasil com 6 medalhas — e <strong>Ana Patrícia e Duda</strong> no vôlei de praia) e protagonismo histórico das mulheres (100% dos ouros brasileiros em Paris 2024).</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Turismo em Porto Velho e Rondônia</td>
          <td class="p-2"><strong>Complexo Turístico da Estrada de Ferro Madeira-Mamoré (EFMM)</strong> revitalizado às margens do Rio Madeira, Parque Natural Municipal de Porto Velho (Parque Ecológico), Parque Circuito, Balneários e Cachoeira de Teotônio (memória histórica e vila), ecoturismo e pesca esportiva no Rio Madeira, Rio Machado e Vale do Guaporé (Forte Príncipe da Beira em Costa Marques).</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<ul class="list-disc pl-4 space-y-1 text-xs">
  <li><strong>Ecologia (Hábitat vs. Nicho):</strong> Hábitat = local físico onde vive; Nicho ecológico = papel funcional/comportamental da espécie.</li>
  <li><strong>Meio Ambiente (2024–2025):</strong> <strong>COP30 em Belém/PA (Amazônia)</strong> e criação do mercado regulado de carbono no Brasil (<strong>SBCE — Lei nº 15.042/2024</strong>).</li>
  <li><strong>Justiça, Educação e Esportes:</strong> Lei nº 14.994/2024 (Feminicídio crime autônomo: pena de 20 a 40 anos); Lei nº 15.100/2025 (restrição de celulares nas escolas) + Programa Pé-de-Meia; <strong>Rebeca Andrade</strong> = maior medalhista olímpica da história do Brasil (Paris 2024).</li>
</ul>`,
  traps: [
    '❌ Mito/Pegadinha: "Em ecologia, hábitat é o comportamento alimentar do mosquito e nicho ecológico é o endereço geográfico onde ele mora." — ✅ CORRETO: É o inverso! Hábitat é o local físico ("endereço") e Nicho Ecológico é o conjunto de relações e funções da espécie ("profissão").',
    '❌ Mito/Pegadinha: "A COP30 da ONU sobre Mudanças Climáticas foi transferida da Amazônia para a Antártida." — ✅ CORRETO: A COP30 teve como sede oficial a cidade de Belém (Pará), na Amazônia brasileira.',
  ],
  questions: [
    {
      q: '(IBGP — Perfil Ecologia e Meio Ambiente) Em Ecologia aplicada à Saúde Pública e ao Controle de Vetores, os conceitos de "hábitat" e "nicho ecológico" são fundamentais para compreender o comportamento de mosquitos transmissores de endemias. Assinale a alternativa CORRETA:',
      options: [
        'A) Hábitat corresponde ao ambiente físico onde a espécie vive (seu "endereço"), enquanto nicho ecológico corresponde ao papel funcional, hábitos alimentares, horários de atividade e interações biológicas da espécie no ecossistema (sua "profissão").',
        'B) Hábitat e nicho ecológico são termos exclusivos para rochas vulcânicas sem vida.',
        'C) O uso de peixes larvófagos (como Poecilia reticulata) para devorar larvas de mosquitos em tanques é um exemplo de relação ecológica harmônica de mutualismo obrigatório.',
        'D) O protozoário Plasmodium vivax mantém com o ser humano uma relação ecológica harmônica de comensalismo.',
      ],
      ans: 0,
      comment:
        'Gabarito: A. Hábitat é o local físico onde o organismo vive; nicho ecológico é o seu modo de vida e função no ecossistema. O uso de peixes larvófagos é predatismo (controle biológico), e o Plasmodium no humano é parasitismo (relação desarmônica interespecífica).',
    },
    {
      q: '(IBGP — Perfil Atualidades Brasil) No campo da justiça, educação e meio ambiente no Brasil entre 2024 e 2025, importantes marcos legislativos foram sancionados. Assinale a alternativa CORRETA:',
      options: [
        'A) A Lei Federal nº 14.994/2024 transformou o feminicídio em crime autônomo no Código Penal (com pena de 20 a 40 anos de reclusão), a Lei nº 15.042/2024 instituiu o Sistema Brasileiro de Comércio de Emissões de Gases de Efeito Estufa (mercado regulado de carbono) e a Lei nº 15.100/2025 disciplinou a restrição ao uso de aparelhos celulares nas escolas de educação básica.',
        'B) O Brasil revogou todas as leis ambientais em 2024 e proibiu a realização da COP30 em Belém.',
        'C) O Programa Pé-de-Meia foi criado para cobrar mensalidades obrigatórias de alunos do ensino fundamental público.',
        'D) Nos Jogos Olímpicos de Paris 2024, o Brasil não conquistou nenhuma medalha de ouro.',
      ],
      ans: 0,
      comment:
        'Gabarito: A. Todos os três marcos legislativos recentes (Lei 14.994/2024 — Pacote Antifeminicídio; Lei 15.042/2024 — Mercado Regulado de Carbono / SBCE; e Lei 15.100/2025 — restrição de celulares nas escolas) tiveram amplo destaque na mídia nacional.',
    },
    {
      q: '(IBGP — Perfil Esportes e Atualidades) Nos Jogos Olímpicos de Paris 2024, o esporte brasileiro alcançou um marco histórico quando uma atleta tornou-se a maior medalhista olímpica da história do Brasil (entre homens e mulheres), somando seis medalhas olímpicas na carreira após conquistar o ouro no solo da ginástica artística. Trata-se de:',
      options: [
        'A) Rebeca Andrade.',
        'B) Hortência Marcari.',
        'C) Maria Esther Bueno.',
        'D) Daiane dos Santos.',
      ],
      ans: 0,
      comment:
        'Gabarito: A. Rebeca Andrade alcançou 6 medalhas olímpicas (2 em Tóquio 2020 e 4 em Paris 2024, incluindo o ouro no solo), superando Robert Scheidt e Torben Grael (5 medalhas cada).',
    },
  ],
  flashcards: [
    {
      f: 'Ecologia: Qual a diferença entre Hábitat e Nicho Ecológico?',
      b: 'Hábitat é o local físico onde a espécie vive ("endereço"); Nicho ecológico é o papel funcional e comportamental que a espécie desempenha no ecossistema ("profissão").',
    },
    {
      f: 'Meio Ambiente (2024–2025): Qual cidade da Amazônia brasileira sediou a COP30 da ONU e qual lei criou o mercado regulado de carbono no Brasil?',
      b: 'Belém (Pará) sediou a COP30; a Lei Federal nº 15.042/2024 instituiu o Sistema Brasileiro de Comércio de Emissões (SBCE / mercado regulado de carbono).',
    },
    {
      f: 'Justiça e Segurança (Lei nº 14.994/2024): O que mudou no crime de Feminicídio no Brasil?',
      b: 'Tornou-se crime autônomo (Art. 121-A do Código Penal) com pena de reclusão de 20 a 40 anos (a maior pena máxima prevista para um crime no CP).',
    },
    {
      f: 'Esportes (Paris 2024): Quem se tornou a maior medalhista olímpica da história do Brasil (com 6 medalhas) e quem ganhou os 3 ouros brasileiros em Paris?',
      b: 'Rebeca Andrade (maior medalhista, com 6 medalhas). Os 3 ouros de Paris 2024 foram de Beatriz Souza (judô), Rebeca Andrade (ginástica) e Ana Patrícia/Duda (vôlei de praia).',
    },
  ],
};

// New Block 6.3 for atu_6 (Questões da realidade econômica, cultural, histórica, geográfica e socioambiental)
const newBlock_Atu6_RealidadeSocioambiental = {
  title:
    'Bloco 6.3 — Síntese Integrada da Realidade Econômica, Cultural, Histórica, Geográfica e Socioambiental de Porto Velho, Rondônia, Brasil e Mundo (Matrizes Comparativas e Estudos de Caso)',
  modoA: `<div class="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
  <div class="bg-teal-900 text-white p-3.5 rounded-xl border border-teal-700">
    <span class="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">Item 6 de Conhecimentos Gerais — Realidade Multidimensional</span>
    <h4 class="text-sm sm:text-base font-extrabold mt-0.5">Matriz Sinóptica da Realidade de Porto Velho e Rondônia no Contexto Amazônico, Brasileiro e Mundial</h4>
    <p class="text-xs text-teal-100 mt-1">Conexão entre território, ciclos econômicos, hidroeletricidade, logística fluvial/rodoviária e desafios socioambientais e sanitários.</p>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">1. Quadro-Síntese da Realidade Econômica, Geográfica, Histórica e Socioambiental de Porto Velho e Rondônia</h5>
  <div class="overflow-x-auto my-2">
    <table class="min-w-full text-xs border border-slate-300 rounded-lg overflow-hidden">
      <thead class="bg-slate-800 text-white">
        <tr>
          <th class="p-2 border border-slate-300 text-left">Dimensão da Realidade</th>
          <th class="p-2 border border-slate-300 text-left">Realidade de Porto Velho (Município)</th>
          <th class="p-2 border border-slate-300 text-left">Realidade de Rondônia (Estado) e Conexão Nacional/Global</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 bg-white">
        <tr>
          <td class="p-2 font-bold text-teal-900">Realidade Geográfica e Territorial</td>
          <td class="p-2"><strong>Capital de maior área territorial do Brasil (~34.091 km²)</strong> — maior que estados como Alagoas e Sergipe. Faz fronteira internacional com a <strong>Bolívia</strong> e divisa com os estados do <strong>Amazonas, Acre e Mato Grosso</strong>. Divide-se em Sede Urbana e Distritos (Eixo BR-364/Alto Madeira e Baixo Madeira).</td>
          <td class="p-2">Rondônia possui <strong>52 municípios</strong> (~237.765 km²), situado na Amazônia Ocidental, em zona de transição entre o Planalto Residual Norte-Amazônico/Chapada dos Parecis (Ponto mais alto: <strong>Pico do Tracoá / Serra dos Pacaás Novos</strong>) e a Planície Amazônica.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Realidade Demográfica (IBGE 2022/2025)</td>
          <td class="p-2">População no Censo 2022: <strong>460.434 habitantes</strong> (estimativa IBGE 2024/2025 superior a <strong>514 mil habitantes</strong>), concentrando cerca de <strong>29% a 30% da população de todo o estado</strong>.</td>
          <td class="p-2">População de Rondônia no Censo 2022: <strong>1.581.196 habitantes</strong> (estimativa 2024/2025: ~1,74 milhão). Os 5 municípios mais populosos: <strong>1º Porto Velho, 2º Ji-Paraná, 3º Ariquemes, 4º Vilhena, 5º Cacoal</strong>.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Realidade Econômica e Energética</td>
          <td class="p-2">Maior PIB de Rondônia (setor de serviços, administração pública, comércio, construção civil, logística portuária no Rio Madeira e geração hidrelétrica com as <strong>UHEs Santo Antônio e Jirau</strong>, que usam turbinas tipo <strong>Bulbo / fio d’água</strong>).</td>
          <td class="p-2">Economia baseada na agropecuária moderna (bovinocultura de corte e leite, soja, milho, café Robusta Amazônico "Matas de Rondônia", piscicultura de tambaqui), agroindústria e corredor de exportação do <strong>Arco Norte (BR-364 + Hidrovia do Madeira → Rio Amazonas → Oceano Atlântico/Ásia/Europa)</strong>.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Realidade Histórica</td>
          <td class="p-2">Nascida como porto fluvial e pátio ferroviário da <strong>Estrada de Ferro Madeira-Mamoré (1907–1912)</strong> a jusante das cachoeiras de Santo Antônio. Criada como município do Amazonas em <strong>02/10/1914 (Lei nº 757, sancionada por Jonathas Pedrosa)</strong> e instalada em <strong>24/01/1915</strong>.</td>
          <td class="p-2">Cinco grandes ciclos: Ouro/Defesa Colonial (Forte Príncipe da Beira, 1776) → 1º Ciclo da Borracha e Tratado de Petrópolis (1903) + Linhas Telegráficas de Rondon → 2º Ciclo da Borracha e criação do <strong>Território Federal do Guaporé (Dec.-Lei 5.812, de 13/09/1943 — Getúlio Vargas; 1º governador: Aluízio Ferreira)</strong> → Renomeado <strong>Território Federal de Rondônia (Lei 2.731, de 17/02/1956)</strong> → Elevado a <strong>Estado de Rondônia (LC nº 41, de 22/12/1981, instalado em 04/01/1982 — Jorge Teixeira)</strong>.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Realidade Socioambiental e Sanitária</td>
          <td class="p-2">Desafios de saneamento básico (expansão da rede de água e esgoto), manejo de águas pluviais/igarapés urbanos, queimadas na estação seca (agosto–outubro, elevando SRAG) e controle da <strong>Malária e Arboviroses</strong> nos bairros periféricos e distritos rurais/ribeirinhos.</td>
          <td class="p-2">Instrumento de gestão territorial: <strong>ZSEE-RO (Zoneamento Socioeconômico-Ecológico — LC Estadual nº 233/2000 e atualizações)</strong>, dividindo o estado em Zonas Produtivas (Zona 1), Zonas de Manejo Sustentável (Zona 2) e Unidades de Conservação / Terras Indígenas (Zona 3).</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<ul class="list-disc pl-4 space-y-1 text-xs">
  <li><strong>Porto Velho em Números:</strong> Capital brasileira de maior extensão territorial (~34.091 km²); criada em <strong>02/10/1914</strong> (instalada em 24/01/1915); abriga as UHEs <strong>Santo Antônio e Jirau</strong> (turbinas Bulbo a fio d’água no Rio Madeira).</li>
  <li><strong>5 Maiores Municípios de RO (População):</strong> 1º Porto Velho, 2º Ji-Paraná, 3º Ariquemes, 4º Vilhena e 5º Cacoal.</li>
  <li><strong>4 Datas de Ouro de RO:</strong> <strong>1914</strong> (Criação de PVH) → <strong>1943</strong> (Território do Guaporé) → <strong>1956</strong> (Passa a chamar-se Rondônia) → <strong>1981/1982</strong> (LC nº 41/1981 cria o Estado de Rondônia).</li>
</ul>`,
  traps: [
    '❌ Mito/Pegadinha: "Porto Velho foi fundada em 1981 junto com a Lei Complementar nº 41, sendo o menor município em área de Rondônia." — ✅ CORRETO: O município de Porto Velho foi criado em 2 de outubro de 1914 (Lei nº 757 do Amazonas) e é a capital de MAIOR extensão territorial de todo o Brasil (~34.091 km²).',
    '❌ Mito/Pegadinha: "As usinas hidrelétricas de Santo Antônio e Jirau ficam no Rio Guaporé e utilizam grandes reservatórios de acumulação que secaram o Rio Amazonas." — ✅ CORRETO: Ambas ficam no Rio Madeira (em Porto Velho) e operam no sistema a fio d’água com turbinas do tipo Bulbo.',
  ],
  questions: [
    {
      q: '(IBGP — Perfil Realidade de Porto Velho e RO) Considerando a realidade histórica, geográfica, econômica e socioambiental do Município de Porto Velho e do Estado de Rondônia, assinale a alternativa CORRETA:',
      options: [
        'A) Porto Velho é a capital estadual de maior extensão territorial do Brasil (com cerca de 34 mil km²), originou-se a partir da construção da Estrada de Ferro Madeira-Mamoré (sendo criada como município em 2 de outubro de 1914) e abriga no Rio Madeira as usinas hidrelétricas de Santo Antônio e Jirau, que operam a fio d’água com turbinas tipo bulbo.',
        'B) Porto Velho limita-se ao norte com o Oceano Atlântico e ao sul com a República Argentina.',
        'C) O Território Federal do Guaporé foi criado em 1822 por Dom Pedro I e transformado em Estado de Rondônia em 1930.',
        'D) A economia de Rondônia depende exclusivamente da importação de gelo polar, não possuindo produção agropecuária nem corredor hidroviário.',
      ],
      ans: 0,
      comment:
        'Gabarito: A. Síntese exata da realidade histórica, geográfica e energética de Porto Velho: maior capital brasileira em área (~34.091 km²), criada em 02/10/1914 a partir do ciclo da EFMM, banhada pelo Rio Madeira onde operam as UHEs Santo Antônio e Jirau (a fio d’água / turbinas bulbo).',
    },
    {
      q: '(IBGP — Perfil Realidade Histórica de RO) Na formação político-administrativa de Rondônia, assinale a alternativa que apresenta CORRETAMENTE a sequência cronológica dos marcos legais de sua evolução:',
      options: [
        'A) 1943: Criação do Território Federal do Guaporé (Decreto-Lei nº 5.812, no governo Getúlio Vargas) → 1956: Mudança da denominação para Território Federal de Rondônia (Lei nº 2.731, em homenagem ao Marechal Cândido Rondon) → 1981: Elevação à categoria de Estado de Rondônia pela Lei Complementar nº 41, de 22 de dezembro de 1981.',
        'B) 1500: Criação do Estado de Rondônia → 1914: Rebaixamento a Território do Guaporé → 2020: Anexação ao Estado do Mato Grosso.',
        'C) 1903: Criação do Estado do Guaporé pelo Tratado de Madri → 1988: Extinção do município de Porto Velho.',
        'D) 1956: Construção do Forte Príncipe da Beira por Jorge Teixeira → 1981: Construção da Estrada de Ferro Madeira-Mamoré.',
      ],
      ans: 0,
      comment:
        'Gabarito: A. A cronologia oficial de Rondônia é: 13/09/1943 (Decreto-Lei nº 5.812 cria o Território Federal do Guaporé, desmembrado do Amazonas e de Mato Grosso) → 17/02/1956 (Lei nº 2.731 altera o nome para Território Federal de Rondônia) → 22/12/1981 (Lei Complementar nº 41 cria o Estado de Rondônia, instalado em 04/01/1982).',
    },
    {
      q: '(IBGP — Perfil Realidade Socioambiental de RO) O instrumento legal e técnico de planejamento territorial do Estado de Rondônia (instituído pela Lei Complementar Estadual nº 233/2000) que divide o território estadual em zonas segundo sua aptidão produtiva, necessidade de manejo sustentável e proteção de Unidades de Conservação e Terras Indígenas denomina-se:',
      options: [
        'A) Zoneamento Socioeconômico-Ecológico do Estado de Rondônia (ZSEE-RO).',
        'B) Tratado de Tordesilhas.',
        'C) Plano Diretor Marítimo Costeiro.',
        'D) Código Florestal Europeu.',
      ],
      ans: 0,
      comment:
        'Gabarito: A. O Zoneamento Socioeconômico-Ecológico (ZSEE-RO) é o instrumento basilar de ordenamento territorial e socioambiental de Rondônia.',
    },
    {
      q: '(IBGP — Perfil Realidade Demográfica e Econômica de RO) De acordo com os dados oficiais do Censo Demográfico do IBGE, os cinco municípios mais populosos do Estado de Rondônia são:',
      options: [
        'A) Porto Velho, Ji-Paraná, Ariquemes, Vilhena e Cacoal.',
        'B) Manaus, Rio Branco, Cuiabá, Belém e Macapá.',
        'C) Guajará-Mirim, Costa Marques, Pimenteiras do Oeste, Cabixi e Rio Crespo.',
        'D) Porto Velho, São Paulo, Brasília, Salvador e Curitiba.',
      ],
      ans: 0,
      comment:
        'Gabarito: A. Os 5 maiores polos populacionais e econômicos de Rondônia são: 1º Porto Velho (capital), 2º Ji-Paraná, 3º Ariquemes, 4º Vilhena e 5º Cacoal.',
    },
  ],
  flashcards: [
    {
      f: 'Realidade de RO: Quais são as 4 datas históricas fundamentais de Porto Velho e Rondônia (1914, 1943, 1956 e 1981)?',
      b: '02/10/1914: Criação do município de Porto Velho; 13/09/1943: Criação do Território Federal do Guaporé; 17/02/1956: Passa a chamar-se Território Federal de Rondônia; 22/12/1981 (LC 41/81): Criação do Estado de Rondônia.',
    },
    {
      f: 'Realidade de RO: Quais são os 5 municípios mais populosos de Rondônia segundo o IBGE?',
      b: '1º Porto Velho, 2º Ji-Paraná, 3º Ariquemes, 4º Vilhena e 5º Cacoal.',
    },
    {
      f: 'Realidade Socioambiental de RO: O que é o ZSEE-RO (LC Estadual nº 233/2000)?',
      b: 'É o Zoneamento Socioeconômico-Ecológico de Rondônia, que ordena o uso do solo em Zona 1 (consolidação agropecuária), Zona 2 (manejo sustentável) e Zona 3 (Unidades de Conservação e Terras Indígenas).',
    },
    {
      f: 'Realidade Econômica/Logística de PVH: Qual é a importância da Hidrovia do Rio Madeira no chamado "Arco Norte"?',
      b: 'É um dos principais corredores logísticos de exportação de grãos (soja e milho de RO e MT) pelo Porto de Porto Velho até os portos do Rio Amazonas (Itacoatiara/Barcarena) rumo ao mercado internacional.',
    },
  ],
};

// Build the 6 categorized lessons (atu_1 .. atu_6) matching the user's exact 1..6 list:
const newAtu1 = {
  ...oldAtu2,
  id: 'atu_1',
  cat: 'atu',
  catName: 'Conhecimentos Gerais e Atualidades',
  weight: '5 Questões • Peso 2 (10 pts)',
  title: '1. Cultura Geral: Fatos Políticos econômicos e sociais do Município, do Estado, do Brasil e do mundo ocorridos nos últimos 05 (cinco) anos, divulgados na mídia nacional e internacional',
  editalRef: '1 - Cultura Geral: Fatos Políticos econômicos e sociais do Município, do Estado, do Brasil e do mundo ocorridos nos últimos 05 (cinco) anos, divulgados na mídia nacional e internacional.',
  auditBadge: 'GERAIS ITEM 1 — CULTURA GERAL E FATOS DOS ÚLTIMOS 5 ANOS (2021–2026)',
  sources: [70, 71, 72, 73, 74, 75, 86, 91],
  mindMap: {
    centralTitle: '1. Cultura Geral: Fatos Políticos, Econômicos e Sociais nos Últimos 5 Anos (Município, Estado, Brasil e Mundo)',
    mnemonic: 'Mundo: Guerra Ucrânia (2022), Oriente Médio (2023–25), BRICS+ (10 membros), G20 no Brasil (Aliança contra a Fome) • Brasil: Reforma Tributária (EC 132/23: CBS+IBS), Arcabouço Fiscal (LC 200/23), Censo IBGE 2022 • RO/PVH: Seca recorde do Madeira, Café Matas de RO e Arco Norte',
    deadlinesAndNumbers: [
      { value: 'EC 132/2023 e LC 214/2025', label: 'Reforma Tributária sobre o consumo: cria CBS (federal), IBS (estadual/municipal) e Imposto Seletivo' },
      { value: '203,08 Milhões (Censo 2022)', label: 'População oficial do Brasil apurada pelo Censo IBGE 2022 (menor taxa histórica de crescimento: 0,52%/ano)' },
      { value: 'BRICS+ (2024–2025)', label: 'Entrada de Egito, Etiópia, Irã, Emirados Árabes Unidos e Indonésia no bloco dos emergentes' },
      { value: '19 cm (Outubro de 2024)', label: 'Nível mínimo histórico atingido pelo Rio Madeira em Porto Velho durante a estiagem severa na Amazônia' },
    ],
    branches: [
      {
        title: '1. Geopolítica e Economia Mundial nos Últimos 5 Anos (2021–2026)',
        icon: '🌍',
        color: 'indigo',
        nodes: [
          {
            label: 'Conflitos Globais (Rússia–Ucrânia e Oriente Médio) e OTAN',
            detail:
              'Guerra na Ucrânia (desde fev/2022) levou Finlândia (2023) e Suécia (2024) à OTAN e impactou preços globais de energia e fertilizantes. Conflito em Gaza/Oriente Médio afetou rotas no Mar Vermelho.',
            badge: 'Geopolítica 2022–2026',
          },
          {
            label: 'Expansão do BRICS+ e Cúpula do G20 no Brasil (2024)',
            detail:
              'BRICS incorporou Egito, Etiópia, Irã, Emirados Árabes Unidos e Indonésia. No G20 do Rio (nov/2024), o Brasil lançou a Aliança Global contra a Fome e a Pobreza.',
            badge: 'Diplomacia e Blocos',
          },
        ],
      },
      {
        title: '2. Fatos Políticos, Econômicos e Sociais do Brasil (2021–2026)',
        icon: '🇧🇷',
        color: 'teal',
        nodes: [
          {
            label: 'Reforma Tributária (EC 132/2023 e LC 214/2025) e Novo Arcabouço Fiscal (LC 200/2023)',
            detail:
              'Substituição de 5 tributos pelo IVA Dual: CBS (federal: PIS/Cofins/IPI) + IBS (estadual/municipal: ICMS/ISS) + Imposto Seletivo e cashback para baixa renda.',
            badge: 'Economia Nacional',
          },
          {
            label: 'Censo Demográfico IBGE 2022 e Eventos Climáticos Extremos (RS e Amazônia)',
            detail:
              'Brasil com 203,08 milhões de habitantes e rápido envelhecimento populacional. Enchentes históricas no RS (maio/2024) e seca severa na Amazônia (2023–2024).',
            badge: 'Sociedade e Demografia',
          },
        ],
      },
      {
        title: '3. Fatos Econômicos, Políticos e Sociais do Estado de Rondônia',
        icon: '🌾',
        color: 'amber',
        nodes: [
          {
            label: 'Potência Agroexportadora, Café "Matas de Rondônia" e Piscicultura',
            detail:
              'Liderança na produção de tambaqui, carne bovina (livre de aftosa sem vacinação), soja e café Robusta Amazônico com Indicação Geográfica do INPI ("Matas de Rondônia").',
            badge: 'Economia de RO',
          },
        ],
      },
      {
        title: '4. Fatos Recentes do Município de Porto Velho (2021–2026)',
        icon: '🏙️',
        color: 'emerald',
        nodes: [
          {
            label: 'Infraestrutura Urbana, Hidrovia do Madeira e Ações de Saúde Pública',
            detail:
              'Nova Rodoviária, modernização portuária e aeroportuária, enfrentamento das estiagens/cheias históricas do Rio Madeira e expansão da atenção básica e vigilância em saúde pela SEMUSA.',
            badge: 'Porto Velho 2021–2026',
          },
        ],
      },
    ],
  },
  blocks: renumberBlocks(
    [
      oldAtu2.blocks[2], // Fatos Políticos, Econômicos, Sociais e Culturais do Brasil e do Mundo (Últimos 5 Anos)
      oldAtu3.blocks[1], // Atualidades Nacionais, Regionais e Municipais de Porto Velho (2024–2026)
      newBlock_Atu1_Cronologia5Anos, // Síntese Cronológica dos Últimos 5 Anos (2021–2026): Mundo, Brasil, RO e PVH
    ],
    1
  ),
};

const newAtu2 = {
  ...oldAtu2,
  id: 'atu_2',
  cat: 'atu',
  catName: 'Conhecimentos Gerais e Atualidades',
  weight: '5 Questões • Peso 2 (10 pts)',
  title: '2. Humanidades: movimentos artísticos, culturais e sociais do Município, do Estado, do Brasil e do mundo',
  editalRef: '2 - Humanidades: movimentos artísticos, culturais e sociais do Município, do Estado, do Brasil e do mundo.',
  auditBadge: 'GERAIS ITEM 2 — HUMANIDADES: MOVIMENTOS ARTÍSTICOS, CULTURAIS E SOCIAIS',
  sources: [77, 78, 79, 86, 91],
  mindMap: {
    centralTitle: '2. Humanidades: Movimentos Artísticos, Culturais e Sociais (Porto Velho, Rondônia, Brasil e Mundo)',
    mnemonic: 'Mundo: Renascimento, Barroco, Vanguardas (Cubismo, Surrealismo) • Brasil: Barroco Mineiro (Aleijadinho), Semana de 1922 (Antropofagia/Tarsila/Mário), Tropicalismo (1967–68) • RO/PVH: Cultura Beradeira, EFMM, Três Caixas d’Água, Flor do Maracujá, Festa do Divino e RESEX',
    deadlinesAndNumbers: [
      { value: 'Fevereiro de 1922', label: 'Semana de Arte Moderna no Teatro Municipal de São Paulo (Marco do Modernismo Brasileiro)' },
      { value: '1967–1968 (Tropicália)', label: 'Movimento Tropicalista (Caetano Veloso, Gilberto Gil, Gal Costa, Hélio Oiticica)' },
      { value: 'Três Caixas d’Água (1910–1912)', label: 'Monumento histórico e cultural de Porto Velho ("Três Marias") erguido na época da EFMM' },
      { value: 'Flor do Maracujá e Divino', label: 'Maiores manifestações folclóricas e culturais de Porto Velho e do Vale do Guaporé' },
    ],
    branches: [
      {
        title: '1. Movimentos Artísticos Mundiais e Vanguardas Europeias',
        icon: '🎨',
        color: 'indigo',
        nodes: [
          {
            label: 'Renascimento, Barroco, Romantismo e Realismo',
            detail:
              'Renascimento (humanismo e perspectiva: Da Vinci, Michelangelo); Barroco (contraste fé/razão); Romantismo (subjetivismo e nacionalismo); Realismo (crítica social objetiva).',
            badge: 'História da Arte',
          },
          {
            label: 'Vanguardas Europeias do Século XX',
            detail:
              'Cubismo (Picasso — geometrização), Surrealismo (Dalí — inconsciente), Expressionismo (Munch — emoção dramática), Futurismo e Dadaísmo.',
            badge: 'Vanguardas Séc. XX',
          },
        ],
      },
      {
        title: '2. Movimentos Artísticos e Culturais do Brasil (Barroco, Semana de 22 e Tropicália)',
        icon: '🎭',
        color: 'teal',
        nodes: [
          {
            label: 'Semana de Arte Moderna de 1922 e Movimento Antropofágico (1928)',
            detail:
              'Realizada no Teatro Municipal de SP (Mário de Andrade, Oswald de Andrade, Tarsila do Amaral, Anita Malfatti, Villa-Lobos), rompeu com o academicismo e valorizou a identidade brasileira.',
            badge: 'Modernismo 1922',
          },
          {
            label: 'Bossa Nova, Cinema Novo e Tropicalismo (Anos 1950–1960)',
            detail:
              'Renovação estética e crítica social: Glauber Rocha (Cinema Novo) e Tropicália (Caetano, Gil, Gal, Hélio Oiticica).',
            badge: 'Cultura Brasileira',
          },
        ],
      },
      {
        title: '3. Movimentos Artísticos e Culturais de Porto Velho e Rondônia',
        icon: '🚂',
        color: 'amber',
        nodes: [
          {
            label: 'Patrimônio Tombado (EFMM e Três Caixas d’Água) e Folclore Local',
            detail:
              'Complexo da Estrada de Ferro Madeira-Mamoré, As Três Caixas d’Água ("Três Marias"), Arraial Flor do Maracujá (Quadrilhas e Bois-Bumbás), Banda do Vai Quem Quer e Duelo na Fronteira (Guajará-Mirim).',
            badge: 'Cultura de PVH/RO',
          },
          {
            label: 'Identidade "Beradeira" e Festa do Divino no Vale do Guaporé',
            detail:
              'Valorização da cultura ribeirinha do Rio Madeira ("beradeira") e da secular Festa do Divino Espírito Santo nas comunidades quilombolas do Guaporé.',
            badge: 'Patrimônio Imaterial',
          },
        ],
      },
      {
        title: '4. Movimentos Sociais no Mundo, no Brasil e na Amazônia',
        icon: '🤝',
        color: 'emerald',
        nodes: [
          {
            label: 'Direitos Humanos, Movimento Socioambiental (RESEX) e Povos Indígenas',
            detail:
              'Movimentos civis, feministas, antirracistas e socioambientais. Na Amazônia: criação das Reservas Extrativistas (como a RESEX Lago do Cuniã em PVH) e defesa das Terras Indígenas (Karitiana, Karipuna, Kaxarari, Suruí, Uru-Eu-Wau-Wau).',
            badge: 'Movimentos Sociais',
          },
        ],
      },
    ],
  },
  blocks: renumberBlocks(
    [
      oldAtu2.blocks[1], // Cultura, Patrimônio Histórico Tombado e Manifestações Tradicionais de Porto Velho e Rondônia
      newBlock_Atu2_HumanidadesBrasilMundo, // Movimentos Artísticos, Culturais e Sociais do Brasil e do Mundo
      newBlock_Atu2_HumanidadesRondonia, // Movimentos Culturais, Literários, Musicais e Povos Tradicionais de PVH e RO
    ],
    2
  ),
};

const newAtu3 = {
  ...oldAtu1,
  id: 'atu_3',
  cat: 'atu',
  catName: 'Conhecimentos Gerais e Atualidades',
  weight: '5 Questões • Peso 2 (10 pts)',
  title: '3. Conhecimentos Gerais e Atualidades: aspectos geográficos, históricos, físicos, econômicos, sociais, políticos e estatísticos do Município, do Estado, do Brasil e do mundo',
  editalRef: '3 - Conhecimentos Gerais e Atualidades: aspectos geográficos, históricos, físicos, econômicos, sociais, políticos e estatísticos do Município, do Estado, do Brasil e do mundo.',
  auditBadge: 'GERAIS ITEM 3 — GEOGRAFIA, HISTÓRIA, ECONOMIA, POLÍTICA E ESTATÍSTICA (IBGE)',
  sources: [70, 75, 80, 86, 91],
  mindMap: {
    centralTitle: '3. Aspectos Geográficos, Históricos, Físicos, Econômicos, Sociais, Políticos e Estatísticos (PVH, RO, Brasil e Mundo)',
    mnemonic: 'Geografia/Físico: Rio Madeira (Jirau e Santo Antônio), Clima Equatorial (Am), 15 Distritos (Alto vs. Baixo Madeira) • Estatística IBGE: PVH ~460 mil (Censo 22) / >514 mil (Est. 24/25); RO ~1,58 mi • História: EFMM (1907–12) → PVH (1914) → Guaporé (1943) → RO (1956) → Estado (1981)',
    deadlinesAndNumbers: [
      { value: '34.091 km² (Porto Velho)', label: 'Maior capital do Brasil em área territorial (divide-se em Sede Urbana + Distritos do Alto e Baixo Madeira)' },
      { value: '02/10/1914 (Lei nº 757)', label: 'Data de criação do Município de Porto Velho (instalado em 24/01/1915, tendo Fernando Guapindaia como 1º intendente)' },
      { value: '13/09/1943 e 22/12/1981', label: 'Criação do Território Federal do Guaporé (Dec.-Lei 5.812/43) e elevação a Estado de Rondônia (LC 41/81)' },
      { value: '460.434 hab. (Censo 2022)', label: 'População de Porto Velho no Censo IBGE 2022 (estimativa 2024/2025 acima de 514 mil habitantes)' },
    ],
    branches: [
      oldAtu1.mindMap.branches[0],
      oldAtu1.mindMap.branches[1],
      oldAtu2.mindMap.branches[1],
      oldAtu2.mindMap.branches[2],
    ],
  },
  blocks: renumberBlocks(
    [
      oldAtu1.blocks[0], // Geografia Física, Limites, Hidrografia (Rio Madeira e UHEs), Clima, Vegetação e ZSEE
      oldAtu1.blocks[1], // Dados Demográficos e Econômicos Oficiais (IBGE Censo 2022 e Estimativas 2024/2025) e os 15 Distritos do Edital ACE
      oldAtu2.blocks[0], // Linha do Tempo Completa da Formação Histórica e Política de Rondônia e Porto Velho (Século XVIII a 1981)
      oldAtu2.blocks[3], // Linha do Tempo Completa de Rondônia e Porto Velho: De Santo Antônio do Rio Madeira ao Estado de Rondônia (LC 41/1981)
    ],
    3
  ),
};

const newAtu4 = {
  ...oldAtu1,
  id: 'atu_4',
  cat: 'atu',
  catName: 'Conhecimentos Gerais e Atualidades',
  weight: '5 Questões • Peso 2 (10 pts)',
  title: '4. Noções de cidadania. Símbolos nacionais, estaduais e municipais',
  editalRef: '4 - Noções de cidadania. Símbolos nacionais, estaduais e municipais.',
  auditBadge: 'GERAIS ITEM 4 — CIDADANIA E SÍMBOLOS NACIONAIS, ESTADUAIS (RO) E MUNICIPAIS (PVH)',
  sources: [42, 49, 86, 91, 92],
  mindMap: {
    centralTitle: '4. Noções de Cidadania e Símbolos Oficiais Nacionais (Brasil), Estaduais (Rondônia) e Municipais (Porto Velho)',
    mnemonic: 'Cidadania: Direitos Civis, Políticos e Sociais + Plebiscito (Prévia), Referendo (Posterior) e Iniciativa Popular (5% no Município) • Símbolos Nacionais (Art. 13 CF): Bandeira, Hino, Armas e Selo (Estrela de RO = Muliphen) • RO: Bandeira (Sílvio Carvalho) e Hino "Céus de Rondônia" • PVH: Três Caixas d’Água',
    deadlinesAndNumbers: [
      { value: '4 Símbolos Nacionais (Art. 13)', label: 'Bandeira Nacional, Hino Nacional, Armas Nacionais (Brasão) e Selo Nacional (Lei nº 5.700/1971)' },
      { value: 'Estrela Muliphen (Gama Cão Maior)', label: 'Estrela que representa oficialmente o Estado de Rondônia na Bandeira Nacional' },
      { value: '31/12/1981 (Dec.-Lei nº 7)', label: 'Adoção da Bandeira do Estado de Rondônia (autoria de Sílvio Rolim de Carvalho)' },
      { value: '5% do Eleitorado Municipal', label: 'Quórum mínimo para apresentação de projeto de lei de Iniciativa Popular no Município (Art. 29, XIII CF/88)' },
    ],
    branches: [
      {
        title: '1. Noções de Cidadania: Direitos Civis, Políticos, Sociais e Soberania Popular',
        icon: '🗳️',
        color: 'teal',
        nodes: [
          {
            label: 'Cidadania Plena (T. H. Marshall e Art. 1º, II da CF/88)',
            detail:
              'Articula Direitos Civis (liberdade individual), Direitos Políticos (votar e ser votado) e Direitos Sociais (saúde, educação, trabalho, moradia), além de deveres cívicos e socioambientais.',
            badge: 'Constituição Cidadã',
          },
          {
            label: 'Plebiscito (Prévia) vs. Referendo (Posterior) vs. Iniciativa Popular',
            detail:
              'Plebiscito = consulta antes da lei; Referendo = consulta após a lei para confirmá-la ou rejeitá-la; Iniciativa Popular = 5% do eleitorado no âmbito municipal.',
            badge: 'Art. 14 CF/88',
          },
        ],
      },
      {
        title: '2. Símbolos Nacionais da República Federativa do Brasil (Art. 13, § 1º CF/88)',
        icon: '🇧🇷',
        color: 'emerald',
        nodes: [
          {
            label: 'Bandeira, Hino, Armas e Selo Nacionais (Lei nº 5.700/1971)',
            detail:
              'Bandeira (Raimundo Teixeira Mendes / Décio Villares, 27 estrelas: Spica = Pará acima da faixa; Muliphen = Rondônia); Hino (música de Francisco Manuel da Silva e letra de Joaquim Osório Duque-Estrada).',
            badge: 'BA-HI-AR-SE',
          },
        ],
      },
      {
        title: '3. Símbolos Estaduais de Rondônia (Bandeira, Brasão e Hino "Céus de Rondônia")',
        icon: '⭐',
        color: 'amber',
        nodes: [
          {
            label: 'Bandeira de Rondônia (Sílvio Carvalho) e Hino "Céus de Rondônia"',
            detail:
              'Bandeira com azul (céu), verde (floresta), amarelo (riquezas e rodovia BR-364) e estrela branca central. Hino com letra de Joaquim Araújo Lima e música de José de Mello e Silva.',
            badge: 'Símbolos de RO',
          },
        ],
      },
      {
        title: '4. Símbolos Municipais de Porto Velho (Art. 4º da LOM-PVH)',
        icon: '🏛️',
        color: 'indigo',
        nodes: [
          {
            label: 'Bandeira, Brasão (Três Caixas d’Água e EFMM) e Hino de Porto Velho',
            detail:
              'Bandeira azul e amarela com a Caixa d’Água histórica ao centro; Brasão com as Três Caixas d’Água ("Três Marias"), locomotiva da EFMM, seringueira e Rio Madeira; Hino de Abnael Machado de Lima, José Ribeiro Filho e Waldemar Bastos.',
            badge: 'Símbolos de PVH',
          },
        ],
      },
    ],
  },
  blocks: renumberBlocks(
    [
      newBlock_Atu4_Cidadania, // Noções de Cidadania, Direitos e Deveres e Participação Popular
      newBlock_Atu4_Simbolos, // Símbolos Nacionais, Estaduais (RO) e Municipais (PVH)
      oldAtu1.blocks[3], // Raio-X Geográfico dos Distritos de Porto Velho, Censo IBGE 2022 e Símbolos Oficiais
    ],
    4
  ),
};

const newAtu5 = {
  ...oldAtu3,
  id: 'atu_5',
  cat: 'atu',
  catName: 'Conhecimentos Gerais e Atualidades',
  weight: '5 Questões • Peso 2 (10 pts)',
  title: '5. Atualidades nos assuntos relacionados com economia, ecologia, história, política, meio ambiente, justiça, segurança pública, saúde, cultura, educação, religião, qualidade de vida, esportes, turismo, georreferenciamento, inovações tecnológicas e científicas do Município, do Estado, do Brasil e do mundo',
  editalRef: '5 - Atualidades nos assuntos relacionados com economia, ecologia, história, política, meio ambiente, justiça, segurança pública, saúde, cultura, educação, religião, qualidade de vida, esportes, turismo, georreferenciamento, inovações tecnológicas e científicas do Município, do Estado, do Brasil e do mundo.',
  auditBadge: 'GERAIS ITEM 5 — GEORREFERENCIAMENTO (SIG/GPS), ECOLOGIA, INOVAÇÕES E ATUALIDADES MULTITEMÁTICAS',
  sources: [76, 81, 82, 83, 84, 85, 86, 91],
  mindMap: {
    centralTitle: '5. Georreferenciamento (SIG/GPS/PRODES), Ecologia, Meio Ambiente (COP30), Saúde, Justiça, Educação, Esportes, Turismo e Inovações',
    mnemonic: 'Georreferenciamento: GPS (24 satélites), SIRGAS 2000 (IBGE), SIG Vetorial (ponto/linha/polígono) vs. Matricial (pixel/raster), PRODES (anual) vs. DETER (alertas diários) • Inovação em Saúde: Wolbachia, Qdenga, BRI-Aedes • Ecologia: Hábitat vs. Nicho, COP30 em Belém',
    deadlinesAndNumbers: [
      { value: 'SIRGAS 2000', label: 'Sistema Geodésico de Referência oficial do Brasil (adotado pelo IBGE para cartografia e georreferenciamento)' },
      { value: 'PRODES vs. DETER (INPE)', label: 'PRODES mede a taxa anual consolidada de desmatamento; DETER emite alertas rápidos quase diários para fiscalização' },
      { value: 'Wolbachia e Qdenga', label: 'Inovações biotecnológicas do Ministério da Saúde no controle e prevenção da Dengue e arboviroses' },
      { value: 'COP30 (Belém/PA) e SBCE', label: 'Conferência climática da ONU na Amazônia e criação do mercado regulado de carbono (Lei nº 15.042/2024)' },
    ],
    branches: oldAtu3.mindMap.branches,
  },
  blocks: renumberBlocks(
    [
      oldAtu3.blocks[0], // Georreferenciamento Aplicado à Vigilância em Saúde e Meio Ambiente: SIG (GIS), GPS/GNSS, Sensoriamento Remoto e PRODES/DETER
      oldAtu3.blocks[3], // Inovações Tecnológicas e Científicas no Controle Vetorial MS (Wolbachia, Fludora Fusion, BRI-Aedes e SISS-Geo)
      newBlock_Atu5_Multitematico, // Panorama Multitemático: Economia, Ecologia, Meio Ambiente (COP30), Justiça, Segurança, Educação, Esportes e Turismo
    ],
    5
  ),
};

const newAtu6 = {
  ...oldAtu1,
  id: 'atu_6',
  cat: 'atu',
  catName: 'Conhecimentos Gerais e Atualidades',
  weight: '5 Questões • Peso 2 (10 pts)',
  title: '6. Questões da realidade, econômica, cultural, história, geográfica e socioambiental do Município, do Estado, do Brasil e do mundo',
  editalRef: '6 - Questões da realidade, econômica, cultural, história, geográfica e socioambiental do Município, do Estado, do Brasil e do mundo.',
  auditBadge: 'GERAIS ITEM 6 — REALIDADE ECONÔMICA, CULTURAL, HISTÓRICA, GEOGRÁFICA E SOCIOAMBIENTAL',
  sources: [70, 75, 76, 80, 86, 91],
  mindMap: {
    centralTitle: '6. Questões da Realidade Econômica, Cultural, Histórica, Geográfica e Socioambiental (Porto Velho, Rondônia, Brasil e Mundo)',
    mnemonic: 'Geografia/Área: PVH = maior capital do Brasil (~34.091 km²) • Hidrelétricas do Madeira: Santo Antônio e Jirau (fio d’água / turbinas bulbo) • Economia: Arco Norte (Hidrovia do Madeira + BR-364), Soja, Carne, Tambaqui e Café • Socioambiental: ZSEE-RO (Zonas 1, 2 e 3)',
    deadlinesAndNumbers: [
      { value: '52 Municípios em RO', label: 'Maiores em população: 1º Porto Velho, 2º Ji-Paraná, 3º Ariquemes, 4º Vilhena e 5º Cacoal' },
      { value: 'UHEs Santo Antônio e Jirau', label: 'Complexo Hidrelétrico do Rio Madeira em Porto Velho (sistema a fio d’água com turbinas tipo Bulbo)' },
      { value: 'ZSEE-RO (LC nº 233/2000)', label: 'Zoneamento Socioeconômico-Ecológico de Rondônia (Zona 1 produtiva, Zona 2 manejo, Zona 3 proteção)' },
      { value: '1903 → 1912 → 1914 → 1943 → 1981', label: 'Tratado de Petrópolis (1903), EFMM (1912), PVH (1914), Território do Guaporé (1943) e Estado de RO (1981)' },
    ],
    branches: [
      {
        title: '1. Realidade Geográfica e Socioambiental de Porto Velho e Rondônia',
        icon: '🌳',
        color: 'emerald',
        nodes: [
          {
            label: 'Bacia do Rio Madeira, UHEs a Fio d’Água e ZSEE-RO',
            detail:
              'O Rio Madeira nasce da confluência dos rios Beni e Mamoré; abriga em PVH as UHEs Santo Antônio e Jirau (turbinas bulbo) e forma o corredor logístico do Arco Norte.',
            badge: 'Hidrogeografia',
          },
          {
            label: 'Divisão Distrital de Porto Velho (Eixo BR-364 vs. Baixo Madeira)',
            detail:
              'Distritos terrestres no eixo da BR-364/fronteira (Jaci-Paraná, União Bandeirantes, Mutum-Paraná, Abunã, Vista Alegre do Abunã, Fortaleza do Abunã, Extrema, Nova Califórnia) e distritos fluviais no Baixo Madeira (São Carlos, Nazaré, Calama, Demarcação).',
            badge: '15 Distritos no Edital',
          },
        ],
      },
      {
        title: '2. Realidade Econômica de Porto Velho, Rondônia e Brasil',
        icon: '📈',
        color: 'amber',
        nodes: [
          {
            label: 'Complexo Agroindustrial, Piscicultura (Tambaqui) e Exportações',
            detail:
              'Rondônia destaca-se na produção de carne bovina, soja, milho, café Robusta Amazônico e peixes nativos, escoando pelo Porto Organizado de Porto Velho.',
            badge: 'Economia Regional',
          },
        ],
      },
      {
        title: '3. Realidade Histórica e Cultural da Amazônia Ocidental',
        icon: '🏛️',
        color: 'teal',
        nodes: [
          {
            label: 'Ciclos da Borracha, EFMM, Missão Rondon e Formação do Estado',
            detail:
              'Do Forte Príncipe da Beira (1776) e da Estrada de Ferro Madeira-Mamoré (1907–1912) à colonização agrícola ao longo da BR-364 e criação do Estado (LC 41/1981).',
            badge: 'História Regional',
          },
        ],
      },
      {
        title: '4. Realidade Socioambiental e Sanitária no Trabalho do ACE',
        icon: '🩺',
        color: 'rose',
        nodes: [
          {
            label: 'Determinantes Socioambientais das Endemias Amazônicas',
            detail:
              'Relação direta entre regime hidrológico do Rio Madeira (cheias e vazantes), saneamento urbano/rural e incidência de Malária, Dengue, Leptospirose, Chagas Oral e Leishmanioses.',
            badge: 'Saúde e Ambiente',
          },
        ],
      },
    ],
  },
  blocks: renumberBlocks(
    [
      oldAtu1.blocks[2], // Desenvolvimento Integral Passo a Passo e Estudos de Caso (História, Geografia, Economia, Distritos e Cultura de PVH e RO)
      oldAtu3.blocks[2], // Desenvolvimento Integral Passo a Passo e Estudos de Caso (Ecologia e Realidade Socioambiental da Amazônia/RO e PVH)
      newBlock_Atu6_RealidadeSocioambiental, // Síntese Integrada da Realidade Econômica, Cultural, Histórica, Geográfica e Socioambiental
    ],
    6
  ),
};

const categorizedAtuLessons = [
  newAtu1,
  newAtu2,
  newAtu3,
  newAtu4,
  newAtu5,
  newAtu6,
];

for (const l of categorizedAtuLessons) {
  l.questionsCount = l.blocks.reduce((sum, b) => sum + (b.questions?.length || 0), 0);
  l.flashcardsCount = l.blocks.reduce((sum, b) => sum + (b.flashcards?.length || 0), 0);
}

const espLessons = rawData.lessons.filter(l => l.cat === 'esp');
const legLessons = rawData.lessons.filter(l => l.cat === 'leg');
const porLessons = rawData.lessons.filter(l => l.cat === 'por');
const rlmLessons = rawData.lessons.filter(l => l.cat === 'rlm');

// Also renumber por_1..por_6 as 1..6 and rlm_1..rlm_6 as 1..6 so every discipline is cleanly numbered starting from 1!
porLessons.forEach((l, idx) => {
  const num = idx + 1;
  const cleanTitle = (l.title || '').replace(/^\d+\.\s*/, '');
  l.title = `${num}. ${cleanTitle}`;
  l.blocks = renumberBlocks(l.blocks || [], num);
});

rlmLessons.forEach((l, idx) => {
  const num = idx + 1;
  const cleanTitle = (l.title || '').replace(/^\d+\.\s*/, '');
  l.title = `${num}. ${cleanTitle}`;
  l.blocks = renumberBlocks(l.blocks || [], num);
});

const all35Lessons = [
  ...espLessons,
  ...legLessons,
  ...porLessons,
  ...rlmLessons,
  ...categorizedAtuLessons,
];

rawData.lessons = all35Lessons;

if (Array.isArray(rawData.aulasIndex)) {
  rawData.aulasIndex = all35Lessons.map((l, idx) => ({
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

// Update schedule so atu_4, atu_5, atu_6 are also included in the 12-week study plan
if (Array.isArray(rawData.schedule)) {
  rawData.schedule.forEach(s => {
    if (s.week === 'Semana 10' && Array.isArray(s.lessons) && !s.lessons.includes('atu_4')) {
      s.lessons.push('atu_4');
    }
    if (s.week === 'Semana 11' && Array.isArray(s.lessons) && !s.lessons.includes('atu_5')) {
      s.lessons.push('atu_5');
    }
    if (s.week === 'Semana 12' && Array.isArray(s.lessons) && !s.lessons.includes('atu_6')) {
      s.lessons.push('atu_6');
    }
  });
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

console.log(`Total lessons in app_data.json: ${all35Lessons.length}`);
console.log('Summary of 6 Categorized Conhecimentos Gerais e Atualidades Lessons (atu_1..atu_6):');
categorizedAtuLessons.forEach(l => {
  console.log(`  ${l.id}: ${l.title} (${l.blocks.length} blocos, ${l.questionsCount} Q, ${l.flashcardsCount} FC)`);
});
