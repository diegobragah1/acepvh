import fs from 'node:fs';
import path from 'node:path';

const filesToUpdate = [
  path.resolve(process.cwd(), 'public/data/app_data.json'),
  path.resolve(process.cwd(), 'data/app_data.json'),
];

const jsFilesToUpdate = [
  path.resolve(process.cwd(), 'public/data/app_data.js'),
  path.resolve(process.cwd(), 'data/app_data.js'),
];

// 1. New dedicated Block 5.1: História e Evolução da Profissão de ACE
const block5_1_HistoriaACE = {
  title:
    'Bloco 5.1 — História e Evolução da Profissão de ACE: Do Modelo Campanhista (Oswaldo Cruz, DNERu e Guardas da SUCAM) à FUNASA, EC nº 51/2006, Lei nº 11.350/2006, EC nº 63/2010, Lei nº 13.595/2018, Lei nº 13.708/2018, EC nº 120/2022 e Lei nº 14.536/2023',
  modoA: `<div class="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
  <div class="bg-teal-900 text-white p-3.5 rounded-xl border border-teal-700">
    <span class="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">Tópico Expresso da Pauta de Conhecimentos Específicos (Anexo IV SEMUSA)</span>
    <h4 class="text-sm sm:text-base font-extrabold mt-0.5">História e Evolução da Profissão de Agente de Combate a Endemias (ACE) no Brasil</h4>
    <p class="text-xs text-teal-100 mt-1">Da polícia sanitária e campanhas verticalizadas (DNERu / SUCAM / FUNASA) à descentralização do SUS, constitucionalização da carreira (EC 51/2006, EC 63/2010 e EC 120/2022) e regulamentação como profissional de saúde (Leis Federais nº 11.350/2006, 13.595/2018, 13.708/2018 e 14.536/2023).</p>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">1. Origens Históricas: Sanitarismo Campanhista, Oswaldo Cruz, Carlos Chagas, MES e DNERu (1900–1969)</h5>
  <p>A história do <strong>Agente de Combate às Endemias (ACE)</strong> confunde-se com a própria história da Saúde Pública e do controle de vetores no Brasil. A trajetória evolutiva da profissão divide-se em <strong>seis grandes fases históricas e institucionais</strong> que caem recorrentemente nas provas da banca IBGP:</p>
  <ul class="list-disc pl-5 space-y-1.5">
    <li><strong>1ª Fase — O Modelo Sanitarista-Campanhista e as Brigadas de "Mata-Mosquitos" (1903–1930):</strong> Sob a liderança de <strong>Oswaldo Cruz</strong> (Diretor-Geral de Saúde Pública no Rio de Janeiro a partir de 1903), surgiram as primeiras <em>Brigadas Sanitárias de "Mata-Mosquitos"</em> para combater a Febre Amarela urbana (<em>Aedes aegypti</em>), a Peste Bubônica (ratos e pulgas) e a Varíola. O modelo era <strong>verticalizado, centralizador e inspirado em campanhas militares ("polícia sanitária")</strong>. No interior do país e na Amazônia (inclusive durante a construção da <strong>Estrada de Ferro Madeira-Mamoré em Porto Velho, visitada por Oswaldo Cruz em 1910 e Carlos Chagas em 1912–1913</strong>), as expedições científicas do Instituto Oswaldo Cruz consolidaram o controle de campo da malária (quinina e saneamento). Em 1920, com <strong>Carlos Chagas</strong>, criou-se o <strong>DNSP (Departamento Nacional de Saúde Pública)</strong>, estruturando serviços de profilaxia rural.</li>
    <li><strong>2ª Fase — Os Serviços Nacionais Verticalizados e o DNERu (1930–1969):</strong> Na Era Vargas (criação do MES em 1930 e reorganização por Gustavo Capanema em 1941), foram criados os <strong>Serviços Nacionais específicos por doença</strong> (Serviço Nacional de Febre Amarela — SNFA, Serviço Nacional de Malária — SNM, Serviço Nacional de Peste — SNP) e, na Amazônia, o <strong>SESP (Serviço Especial de Saúde Pública, 1942)</strong> nos Acordos de Washington (borracha). Em <strong>1953</strong> foi criado o <strong>Ministério da Saúde</strong> autônomo (Lei nº 1.920/1953) e, em <strong>1956</strong> (Governo JK, Lei nº 2.743/1956), os serviços de endemias foram unificados no <strong>DNERu (Departamento Nacional de Endemias Rurais)</strong>, chefiado inicialmente por Mário Pinotti.</li>
    <li><strong>3ª Fase — A Era da SUCAM e os "Guardas de Endemias / Guardas Sanitários" (1970–1990):</strong> Pelo Decreto nº 66.623/1970, a fusão do DNERu com a Campanha de Erradicação da Malária (CEM) e a Campanha de Erradicação da Varíola (CEV) deu origem à histórica <strong>SUCAM (Superintendência de Campanhas de Saúde Pública)</strong>. Os trabalhadores de campo — então chamados de <strong>Guardas de Endemias, Guardas Sanitários ou Agentes de Saúde Pública</strong> — atuavam em regime de campanha federal centralizada, percorrendo rios, seringais, garimpos e frentes de colonização (como em Rondônia nas décadas de 1970 e 1980) para borrifação com DDT, captura de triatomíneos e coleta de lâminas de malária. Apesar do heroísmo técnico, o modelo ainda era <strong>verticalizado e separado da assistência médica</strong> (que ficava no INPS/INAMPS).</li>
    <li><strong>4ª Fase — Criação da FUNASA e Descentralização para Estados e Municípios (1990–2005):</strong> Com a Constituição de 1988 e a Lei nº 8.080/1990, em <strong>1991 (Lei nº 8.029/1990 e Decreto nº 100/1991)</strong> a SUCAM e a Fundação SESP foram fundidas para criar a <strong>FUNASA (Fundação Nacional de Saúde)</strong>. O marco decisivo da municipalização do controle de endemias foi a <strong>Portaria Ministerial GM/MS nº 1.399, de 15 de dezembro de 1999</strong>, que regulamentou a NOB-SUS 01/96 na área de epidemiologia e controle de doenças, <strong>descentralizando as ações de vigilância e controle de vetores da FUNASA para os Estados e Municípios</strong> (mediante a Programação Pactuada Integrada de Epidemiologia e Controle de Doenças — PPI-ECD e o Teto Financeiro de Vigilância em Saúde — TFVS). Nesse período de transição, milhares de agentes municipais eram contratados de forma precária (via ONGs, OSCIPs, cooperativas ou contratos temporários sem direitos trabalhistas).</li>
    <li><strong>5ª Fase — Constitucionalização e Criação Formal da Profissão de ACE (EC nº 51/2006 e Lei nº 11.350/2006):</strong> Para extinguir a precarização dos vínculos e unificar nacionalmente a nomenclatura do cargo, foi promulgada a <strong>Emenda Constitucional nº 51, de 14 de fevereiro de 2006</strong> (que incluiu os §§ 4º, 5º e 6º ao Art. 198 da CF/88), instituindo a admissão obrigatória por meio de <strong>Processo Seletivo Público</strong> de provas ou provas e títulos e vedando a terceirização. Logo em seguida, a <strong>Lei Federal nº 11.350, de 5 de outubro de 2006</strong> (originada da MP nº 297/2006), regulamentou a carreira, consagrou oficialmente a denominação <strong>Agente de Combate às Endemias (ACE)</strong>, exigiu vínculo direto com o ente federativo (administração direta, autárquica ou fundacional) e definiu suas atribuições no âmbito exclusivo do SUS.</li>
    <li><strong>6ª Fase — Valorização Salarial, Formação Técnica, Integração com a Atenção Básica e Reconhecimento como Profissional de Saúde (2010–2023):</strong>
      <ul class="list-disc pl-5 mt-1 space-y-1">
        <li><strong>EC nº 63/2010 e Lei nº 12.994/2014:</strong> Instituíram o Piso Salarial Profissional Nacional e a assistência financeira complementar da União (95% do piso) para jornada de 40h semanais;</li>
        <li><strong>Portaria GM/MS nº 2.436/2017 (PNAB 2017) e Resolução CNS nº 588/2018 (PNVS):</strong> Determinaram a <strong>integração obrigatória entre o ACE e o ACS em base territorial única</strong>, superando a histórica fragmentação entre vigilância e atenção básica;</li>
        <li><strong>Lei Federal nº 13.595, de 5 de janeiro de 2018 (Lei Ruth Brilhante):</strong> Reformulou as atribuições do ACE (atividades típicas, assistidas e compartilhadas com o ACS), tornou <strong>essencial e obrigatória</strong> a presença do ACE na estrutura de vigilância epidemiológica e ambiental (Art. 2º, § 1º), exigiu Ensino Médio e dividiu a jornada de 40h em 30h de campo + 10h internas;</li>
        <li><strong>Lei Federal nº 13.708, de 14 de agosto de 2018:</strong> Escalonou o piso salarial nacional (2019 a 2021), fixou reajuste anual, estruturou cursos técnicos/aperfeiçoamento, garantiu EPIs gratuitos e obrigou o ente federado a fornecer ou custear a locomoção de campo (Art. 9º-H);</li>
        <li><strong>Emenda Constitucional nº 120, de 5 de maio de 2022:</strong> Fixou o <strong>piso constitucional nunca inferior a 2 (dois) salários mínimos</strong> repassados pela União com dotação própria (fora do limite de despesa com pessoal da LRF), além de <strong>aposentadoria especial e adicional de insalubridade</strong> (Art. 198, §§ 7º a 11 da CF/88);</li>
        <li><strong>Programa Saúde com Agente / Mais Saúde com Agente (MS/UFRGS/CONASEMS):</strong> Maior programa nacional de formação técnica em serviço, habilitando o ACE como <strong>Técnico em Vigilância em Saúde com Ênfase no Combate às Endemias</strong>;</li>
        <li><strong>Lei Federal nº 14.536, de 20 de janeiro de 2023 (Art. 2º-A da Lei 11.350/2006):</strong> Reconheceu formalmente o ACE e o ACS como <strong>profissionais de saúde, com profissões regulamentadas</strong>, permitindo a <strong>acumulação remunerada de dois cargos ou empregos públicos privativos de profissionais de saúde</strong> (Art. 37, XVI, "c" da CF/88), desde que haja compatibilidade de horários!</li>
      </ul>
    </li>
  </ul>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">2. Quadro Sinóptico Cronológico da Evolução da Profissão de ACE (Foco Total na Banca IBGP)</h5>
  <div class="overflow-x-auto my-2">
    <table class="min-w-full text-xs border border-slate-300 rounded-lg overflow-hidden">
      <thead class="bg-slate-800 text-white">
        <tr>
          <th class="p-2 border border-slate-300 text-left">Marco Histórico / Diploma</th>
          <th class="p-2 border border-slate-300 text-left">Órgão / Denominação da Época</th>
          <th class="p-2 border border-slate-300 text-left">Transformação na Profissão de ACE (O que cai na prova IBGP)</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 bg-white">
        <tr>
          <td class="p-2 font-bold text-teal-900">1903–1920 (Oswaldo Cruz e Carlos Chagas)</td>
          <td class="p-2">DGSP / DNSP ("Brigadas de Mata-Mosquitos")</td>
          <td class="p-2">Início do controle vetorial sistemático no Brasil (Febre Amarela urbana no RJ e expedições contra Malária na Amazônia / Estrada de Ferro Madeira-Mamoré em Porto Velho). Modelo campanhista-policialesco.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">1956 (Lei nº 2.743/1956)</td>
          <td class="p-2"><strong>DNERu</strong> (Dep. Nacional de Endemias Rurais)</td>
          <td class="p-2">Unificou os antigos Serviços Nacionais específicos (Febre Amarela, Malária, Peste) em um único departamento federal voltado às endemias rurais.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">1970 (Decreto nº 66.623/1970)</td>
          <td class="p-2"><strong>SUCAM</strong> ("Guardas de Endemias / Guardas Sanitários")</td>
          <td class="p-2">Criada pela fusão do DNERu + CEM (Malária) + CEV (Varíola). Atuação federal verticalizada no controle de Chagas, Malária, Esquistossomose e Febre Amarela em todo o território nacional.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">1991 e 1999 (Dec. 100/1991 e Portaria MS 1.399/1999)</td>
          <td class="p-2"><strong>FUNASA</strong> → Descentralização para Estados e Municípios</td>
          <td class="p-2">Fusão da SUCAM + FSESP gerando a FUNASA. Em 1999, a <strong>Portaria GM/MS nº 1.399/1999</strong> descentralizou a execução das ações de vigilância e controle de endemias para os <strong>Municípios (como a SEMUSA Porto Velho)</strong>.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">EC nº 51/2006 e Lei nº 11.350/2006</td>
          <td class="p-2"><strong>Agente de Combate às Endemias (ACE)</strong> no SUS</td>
          <td class="p-2">Ingresso mediante <strong>Processo Seletivo Público</strong>; vínculo direto (vedada terceirização, salvo surto epidêmico); atuação exclusiva no SUS; criação oficial da nomenclatura <strong>Agente de Combate às Endemias (ACE)</strong>.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">EC nº 63/2010 e Lei nº 12.994/2014</td>
          <td class="p-2">Piso Salarial Nacional e Assistência da União (95%)</td>
          <td class="p-2">Estabeleceu o piso salarial nacional para jornada de 40h semanais e a assistência financeira complementar da União correspondente a 95% do piso salarial.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Lei nº 13.595/2018 (Lei Ruth Brilhante)</td>
          <td class="p-2">Reformulação de Atribuições e Obrigatoriedade no SUS</td>
          <td class="p-2">Tornou <strong>essencial e obrigatória</strong> a presença do ACE na vigilância epidemiológica e ambiental (Art. 2º, § 1º); exigiu Ensino Médio; detalhou atividades típicas, assistidas e integradas (ACE+ACS).</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Lei nº 13.708/2018</td>
          <td class="p-2">Escalonamento do Piso, Jornada 30h+10h, EPIs e Locomoção</td>
          <td class="p-2">Escalonou o piso salarial (2019–2021), fixou a divisão da jornada de 40h (<strong>30h externas de campo + 10h internas</strong>), garantiu EPIs gratuitos e obrigou o ente a fornecer/custear locomoção (Art. 9º-H).</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">EC nº 120/2022 e Lei nº 14.536/2023</td>
          <td class="p-2">Piso de 2 Salários Mínimos e Profissional de Saúde Regulamentado</td>
          <td class="p-2"><strong>EC 120/2022:</strong> Piso mínimo de <strong>2 SM</strong> pago pela União + insalubridade + aposentadoria especial. <strong>Lei 14.536/2023 (Art. 2º-A):</strong> Reconheceu ACE e ACS como <strong>profissionais de saúde regulamentados</strong> (permite acumular 2 cargos públicos de saúde!).</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<div class="space-y-2 text-xs sm:text-sm text-slate-800 leading-relaxed">
  <p><strong>LINHA DO TEMPO BLINDADA — HISTÓRIA E EVOLUÇÃO DA PROFISSÃO DE ACE:</strong></p>
  <ul class="list-disc pl-5 space-y-1">
    <li><strong>1903–1920 (Oswaldo Cruz / Carlos Chagas):</strong> Brigadas de "Mata-Mosquitos" (DGSP/DNSP) → modelo campanhista vertical e expedições na Amazônia (EFMM em Porto Velho).</li>
    <li><strong>1956 (DNERu) → 1970 (SUCAM):</strong> Unificação das campanhas rurais; agentes eram chamados de <em>Guardas de Endemias / Guardas Sanitários</em> (atuação federal centralizada e separada da atenção básica).</li>
    <li><strong>1991 (FUNASA) → 1999 (Portaria MS nº 1.399/1999):</strong> Fusão da SUCAM + FSESP na FUNASA e <strong>descentralização (municipalização)</strong> dos agentes e ações de controle de endemias para Estados e Municípios.</li>
    <li><strong>2006 (EC nº 51/2006 + Lei nº 11.350/2006):</strong> Criação oficial da nomenclatura <strong>Agente de Combate às Endemias (ACE)</strong>, admissão por <strong>Processo Seletivo Público</strong>, vínculo direto e proibição de terceirização (salvo surto epidêmico).</li>
    <li><strong>2018 (Lei nº 13.595/2018 + Lei nº 13.708/2018):</strong> Presença obrigatória do ACE na vigilância epidemiológica/ambiental, exigência de Ensino Médio, jornada de 40h (30h campo + 10h internas), escalonamento do piso, EPIs e custeio de locomoção.</li>
    <li><strong>2022–2023 (EC nº 120/2022 + Lei nº 14.536/2023):</strong> Piso constitucional de <strong>2 salários mínimos</strong> + insalubridade + aposentadoria especial, e reconhecimento como <strong>profissional de saúde regulamentado</strong> (direito de acumular 2 cargos de saúde).</li>
  </ul>
</div>`,
  questions: [
    {
      q: '(Inédita — Padrão IBGP 2026) Acerca da história e evolução institucional da profissão de Agente de Combate às Endemias (ACE) no Brasil, assinale a alternativa CORRETA:',
      options: [
        'A) A profissão de ACE foi criada originalmente pela Constituição de 1988 sob a gestão do INAMPS, órgão responsável pelo controle de vetores na década de 1970.',
        'B) A Superintendência de Campanhas de Saúde Pública (SUCAM, 1970) originou-se da fusão do DNERu com as campanhas de erradicação da malária e da varíola; posteriormente, em 1991, a SUCAM e a Fundação SESP deram origem à FUNASA, cujas ações de controle de endemias foram descentralizadas aos Estados e Municípios e regulamentadas nacionalmente pela EC nº 51/2006 e pela Lei nº 11.350/2006.',
        'C) O modelo campanhista de Oswaldo Cruz e da SUCAM caracterizava-se pela descentralização municipal e pela atuação em território único integrado às equipes de Saúde da Família desde 1970.',
        'D) A Emenda Constitucional nº 51/2006 extinguiu o cargo de Agente de Combate às Endemias e determinou que suas funções fossem terceirizadas por cooperativas privadas.'
      ],
      ans: 1,
      comment:
        'Gabarito: B. A trajetória institucional evoluiu do DNERu (1956) para a SUCAM (1970), depois para a FUNASA (1991, fusão da SUCAM com a FSESP), passando pela descentralização aos municípios (Portaria MS 1.399/1999) até a constitucionalização pela EC 51/2006 e regulamentação pela Lei Federal nº 11.350/2006.'
    },
    {
      q: '(Inédita — Padrão IBGP 2026) Na evolução histórica do trabalho do Agente de Combate às Endemias (ACE), a transição do antigo modelo "sanitarista-campanhista" (época da SUCAM) para o atual modelo de "Vigilância em Saúde integrada à Atenção Básica" (PNAB 2017, PNVS 2018 e Lei nº 13.595/2018) caracteriza-se principalmente por:',
      options: [
        'A) Manter a atuação do ACE isolada em campanhas verticais esporádicas, proibindo o compartilhamento de dados com o Agente Comunitário de Saúde (ACS).',
        'B) Superar a fragmentação histórica entre vigilância e assistência por meio da unificação da base territorial (território único) entre ACE e ACS, planejamento conjunto, educação permanente e atuação contínua sobre os determinantes ambientais e sociais da saúde.',
        'C) Substituir integralmente as visitas domiciliares do ACE pelo atendimento clínico individual dentro dos hospitais terciários.',
        'D) Transferir a responsabilidade exclusiva do controle de vetores dos Municípios de volta para o Governo Federal.'
      ],
      ans: 1,
      comment:
        'Gabarito: B. A grande evolução contemporânea da profissão de ACE foi superar o isolamento verticalizado da antiga SUCAM e integrar-se organicamente à Atenção Básica em base territorial única com o ACS (Portaria 2.436/2017 e Lei 13.595/2018).'
    }
  ],
  flashcards: [
    {
      f: 'Qual foi a sequência histórica dos órgãos federais de controle de endemias no Brasil até a descentralização para os Municípios?',
      b: '1º) Brigadas de Oswaldo Cruz / DNSP (1903–1920) -> 2º) Serviços Nacionais por doença (anos 1930/40) -> 3º) DNERu (1956) -> 4º) SUCAM (1970) -> 5º) FUNASA (1991, fusão SUCAM + FSESP) -> 6º) Descentralização para Estados e Municípios (Portaria MS 1.399/1999) e Lei 11.350/2006.',
      front: 'Qual foi a sequência histórica dos órgãos federais de controle de endemias no Brasil até a descentralização para os Municípios?',
      back: '1º) Brigadas de Oswaldo Cruz / DNSP (1903–1920) -> 2º) Serviços Nacionais por doença (anos 1930/40) -> 3º) DNERu (1956) -> 4º) SUCAM (1970) -> 5º) FUNASA (1991, fusão SUCAM + FSESP) -> 6º) Descentralização para Estados e Municípios (Portaria MS 1.399/1999) e Lei 11.350/2006.'
    },
    {
      f: 'Quais foram as 4 Emendas Constitucionais e Leis que consolidaram a evolução de direitos do ACE entre 2006 e 2023?',
      b: '• EC 51/2006 + Lei 11.350/2006: Processo Seletivo Público e vínculo direto;\n• EC 63/2010 + Lei 12.994/2014: Piso salarial nacional e 95% de repasse da União;\n• Leis 13.595/2018 e 13.708/2018: Atribuições, Ensino Médio, jornada 30h+10h, EPIs e locomoção;\n• EC 120/2022 + Lei 14.536/2023: Piso de 2 salários mínimos, insalubridade, aposentadoria especial e reconhecimento como profissional de saúde regulamentado.',
      front: 'Quais foram as 4 Emendas Constitucionais e Leis que consolidaram a evolução de direitos do ACE entre 2006 e 2023?',
      back: '• EC 51/2006 + Lei 11.350/2006: Processo Seletivo Público e vínculo direto;\n• EC 63/2010 + Lei 12.994/2014: Piso salarial nacional e 95% de repasse da União;\n• Leis 13.595/2018 e 13.708/2018: Atribuições, Ensino Médio, jornada 30h+10h, EPIs e locomoção;\n• EC 120/2022 + Lei 14.536/2023: Piso de 2 salários mínimos, insalubridade, aposentadoria especial e reconhecimento como profissional de saúde regulamentado.'
    }
  ]
};

// 2. New dedicated Block 5.3: Lei Federal nº 13.708/2018
const block5_3_Lei13708 = {
  title:
    'Bloco 5.3 — Lei Federal nº 13.708/2018 (Texto Integral e Comentado): Piso Salarial Profissional Nacional, Escalonamento (2019–2021), Jornada de 40h (30h Campo + 10h Internas), EPIs, Custeio de Locomoção (Art. 9º-H), Formação Técnica e Incentivo Financeiro Federal (Art. 9º-E)',
  modoA: `<div class="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
  <div class="bg-indigo-900 text-white p-3.5 rounded-xl border border-indigo-700">
    <span class="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">Diploma Legal Expresso na Pauta de Conhecimentos Específicos (Anexo IV SEMUSA)</span>
    <h4 class="text-sm sm:text-base font-extrabold mt-0.5">Lei Federal nº 13.708, de 14 de agosto de 2018 — Estudo Integral Artigo por Artigo</h4>
    <p class="text-xs text-indigo-100 mt-1">Altera a Lei nº 11.350, de 5 de outubro de 2006, para modificar normas que regulam o exercício profissional dos Agentes Comunitários de Saúde (ACS) e dos Agentes de Combate às Endemias (ACE).</p>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">1. O Que a Lei Federal nº 13.708/2018 Alterou na Lei nº 11.350/2006? (Visão Sistêmica para a Prova IBGP)</h5>
  <p>A <strong>Lei Federal nº 13.708, de 14 de agosto de 2018</strong> (que figura nominalmente na pauta de Conhecimentos Específicos do Edital nº 25/2026 da SEMUSA Porto Velho), promoveu alterações estruturais nos <strong>artigos 5º, 9º-A, 9º-E e 9º-H da Lei Federal nº 11.350/2006</strong>. Toda questão da banca IBGP sobre a Lei nº 13.708/2018 cobra um dos <strong>6 eixos normativos</strong> abaixo:</p>

  <div class="overflow-x-auto my-2">
    <table class="min-w-full text-xs border border-slate-300 rounded-lg overflow-hidden">
      <thead class="bg-slate-800 text-white">
        <tr>
          <th class="p-2 border border-slate-300 text-left">Eixo da Lei nº 13.708/2018</th>
          <th class="p-2 border border-slate-300 text-left">Dispositivo Alterado na Lei 11.350/2006</th>
          <th class="p-2 border border-slate-300 text-left">Regra Literal e Atualização Constitucional (EC 120/2022)</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 bg-white">
        <tr>
          <td class="p-2 font-bold text-teal-900">1. Cursos de Aperfeiçoamento e Formação Técnica (A cada 2 anos)</td>
          <td class="p-2 font-semibold">Art. 5º, § 1º e § 2º-A</td>
          <td class="p-2">• <strong>§ 1º:</strong> Os cursos de aperfeiçoamento de ACS e ACE serão organizados e financiados, de modo <strong>tripartite</strong>, pela União, pelos Estados, pelo DF e pelos Municípios, e sua realização será <strong>bienal (a cada 2 anos), com carga horária mínima de 200 (duzentas) horas</strong> (nota: dispositivo teve veto parcial analisa-se junto ao § 2º-A).<br>• <strong>§ 2º-A:</strong> Os cursos técnicos de ACS e de <strong>Agente de Combate às Endemias (Vigilância em Saúde)</strong> poderão ser ministrados nas modalidades <strong>presencial e semipresencial</strong> e seguirão as diretrizes curriculares nacionais definidas pelo <strong>Conselho Nacional de Educação (CNE)</strong>.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">2. Escalonamento Histórico do Piso Salarial Nacional (2019 a 2021) e Piso Atual (EC 120/2022)</td>
          <td class="p-2 font-semibold">Art. 9º-A, § 1º, I, II e III</td>
          <td class="p-2">A Lei nº 13.708/2018 fixou o piso salarial profissional nacional para jornada de <strong>40 (quarenta) horas semanais</strong> no seguinte escalonamento:<br>• <strong>I — R$ 1.250,00</strong> em <strong>1º de janeiro de 2019</strong>;<br>• <strong>II — R$ 1.400,00</strong> em <strong>1º de janeiro de 2020</strong>;<br>• <strong>III — R$ 1.550,00</strong> em <strong>1º de janeiro de 2021</strong>.<br><strong>ATENÇÃO:</strong> A partir de maio de 2022, com a promulgação da <strong>Emenda Constitucional nº 120/2022 (Art. 198, § 9º da CF/88)</strong>, o vencimento mínimo de ACS e ACE passou a ser de <strong>NUNCA INFERIOR A 2 (DOIS) SALÁRIOS MÍNIMOS</strong> (no Edital SEMUSA 2026: R$ 3.242,00!). Se a prova perguntar os valores históricos expressos na letra da Lei 13.708/2018, são R$ 1.250 (2019), R$ 1.400 (2020) e R$ 1.550 (2021); se perguntar o piso constitucional vigente hoje, são <strong>2 salários mínimos</strong>!</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">3. Divisão Obrigatória da Jornada de 40 Horas Semanais (30h Campo + 10h Internas)</td>
          <td class="p-2 font-semibold">Art. 9º-A, § 2º, I e II</td>
          <td class="p-2">A jornada de trabalho de <strong>40 (quarenta) horas semanais</strong> exigida para garantia do piso salarial deve ser <strong>integralmente dedicada a ações e serviços de promoção da saúde, de vigilância epidemiológica e ambiental e de combate a endemias</strong> em prol das famílias e comunidades assistidas, dentro dos respectivos territórios de atuação, e compõe-se de:<br>• <strong>I — 30 (trinta) horas semanais:</strong> para atividades externas de visitação domiciliar, execução de ações de campo, coleta de dados, mapeamento e orientação comunitária;<br>• <strong>II — 10 (dez) horas semanais:</strong> para atividades de planejamento e avaliação de ações, detalhamento das atividades, registro de dados (digitação) e formação e aprimoramento técnico.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">4. Reajuste Anual em 1º de Janeiro</td>
          <td class="p-2 font-semibold">Art. 9º-A, § 5º</td>
          <td class="p-2">O piso salarial de que trata o § 1º do art. 9º-A será reajustado, <strong>anualmente, em 1º de janeiro</strong>, a partir do ano subsequente (2022). Hoje, vinculado aos <strong>2 salários mínimos (EC 120/2022)</strong>, é reajustado automaticamente todo dia 1º de janeiro conforme o novo valor do Salário Mínimo Nacional!</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">5. Incentivo Financeiro Federal para Fortalecimento de Políticas e Atuação de ACE e ACS</td>
          <td class="p-2 font-semibold">Art. 9º-E, caput e Parágrafo Único</td>
          <td class="p-2">Atendidos os requisitos, continuará sendo repassado pela União o <strong>incentivo financeiro para fortalecimento de políticas afetas à atuação de agentes comunitários de saúde e de combate às endemias</strong> (além dos 95% de assistência financeira complementar do Art. 9º-C).<br>• <strong>Parágrafo único (Incluído pela Lei 13.708/2018):</strong> Os recursos de que trata este artigo serão <strong>reajustados anualmente, em 1º de janeiro</strong>, na mesma proporção do reajuste concedido ao piso salarial profissional nacional de ACS e ACE!</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">6. Obrigação do Ente Federado de Fornecer ou Custear a Locomoção de Campo (Indenização de Transporte)</td>
          <td class="p-2 font-semibold">Art. 9º-H (Incluído pela Lei 13.708/2018)</td>
          <td class="p-2"><strong>"Art. 9º-H. Compete ao ente federado ao qual o Agente Comunitário de Saúde ou o Agente de Combate às Endemias esteja vinculado fornecer ou custear a locomoção necessária para o exercício das atividades, conforme regulamento do ente federado."</strong></td>
        </tr>
      </tbody>
    </table>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">2. Transcrição Literal Integral da Lei Federal nº 13.708, de 14 de Agosto de 2018</h5>
  <blockquote class="bg-slate-50 border-l-4 border-indigo-600 p-3.5 rounded-r-xl text-xs space-y-2">
    <p><strong>LEI Nº 13.708, DE 14 DE AGOSTO DE 2018.</strong><br><em>Altera a Lei nº 11.350, de 5 de outubro de 2006, para modificar normas que regulam o exercício profissional dos Agentes Comunitários de Saúde e dos Agentes de Combate às Endemias.</em></p>
    <p><strong>Art. 1º</strong> A Lei nº 11.350, de 5 de outubro de 2006, passa a vigorar com as seguintes alterações:</p>
    <p><strong>"Art. 5º</strong> .......................................................................................................<br>
    <strong>§ 2º-A.</strong> Os cursos técnicos de Agente Comunitário de Saúde e de Agente de Combate às Endemias poderão ser ministrados nas modalidades presencial e semipresencial e seguirão as diretrizes curriculares nacionais definidas pelo Conselho Nacional de Educação." (NR)</p>
    <p><strong>"Art. 9º-A.</strong> ..................................................................................................<br>
    <strong>§ 1º</strong> O piso salarial profissional nacional é o valor abaixo do qual a União, os Estados, o Distrito Federal e os Municípios não poderão fixar o vencimento inicial das Carreiras de Agente Comunitário de Saúde e de Agente de Combate às Endemias para a jornada de 40 (quarenta) horas semanais.<br>
    <strong>I -</strong> R$ 1.250,00 (mil duzentos e cinquenta reais) em 1º de janeiro de 2019;<br>
    <strong>II -</strong> R$ 1.400,00 (mil e quatrocentos reais) em 1º de janeiro de 2020;<br>
    <strong>III -</strong> R$ 1.550,00 (mil quinhentos e cinquenta reais) em 1º de janeiro de 2021.<br>
    <strong>§ 2º</strong> A jornada de trabalho de 40 (quarenta) horas semanais exigida para garantia do piso salarial previsto nesta Lei deverá ser integralmente dedicada a ações e serviços de promoção da saúde, de vigilância epidemiológica e ambiental e de combate a endemias em prol das famílias e comunidades assistidas, dentro dos respectivos territórios de atuação, e compõe-se de:<br>
    <strong>I -</strong> 30 (trinta) horas semanais para atividades externas de visitação domiciliar, execução de ações de campo, acompanhamento de condicionalidades de programas sociais, coleta de dados e orientação e mobilização da comunidade, entre outras;<br>
    <strong>II -</strong> 10 (dez) horas semanais para atividades de planejamento e avaliação de ações, detalhamento das atividades, registro de dados e formação e aprimoramento técnico.<br>
    <strong>§ 5º</strong> O piso salarial de que trata o § 1º deste artigo será reajustado, anualmente, em 1º de janeiro, a partir do ano subsequente ao do término do escalonamento previsto nos incisos I, II e III do § 1º deste artigo." (NR)</p>
    <p><strong>"Art. 9º-H.</strong> Compete ao ente federado ao qual o Agente Comunitário de Saúde ou o Agente de Combate às Endemias esteja vinculado fornecer ou custear a locomoção necessária para o exercício das atividades, conforme regulamento do ente federado."</p>
  </blockquote>
</div>`,
  modoB: `<div class="space-y-2 text-xs sm:text-sm text-slate-800 leading-relaxed">
  <p><strong>RESUMO CIRÚRGICO DA LEI FEDERAL Nº 13.708/2018 (ANEXO IV SEMUSA):</strong></p>
  <ul class="list-disc pl-5 space-y-1">
    <li><strong>Curso Técnico (Art. 5º, § 2º-A):</strong> Pode ser ministrado nas modalidades <strong>presencial e semipresencial</strong>, seguindo diretrizes do <strong>Conselho Nacional de Educação (CNE)</strong>.</li>
    <li><strong>Escalonamento Histórico na Lei 13.708/2018 (Art. 9º-A, § 1º):</strong> R$ 1.250,00 (2019) → R$ 1.400,00 (2020) → R$ 1.550,00 (2021). <strong>Piso Constitucional Atual (EC 120/2022):</strong> <strong>2 Salários Mínimos</strong> (reajuste anual em 1º de janeiro).</li>
    <li><strong>Fórmula da Jornada de 40h (Art. 9º-A, § 2º):</strong> <strong>30 horas externas (campo/visitas) + 10 horas internas (planejamento, registro de dados e formação técnica)</strong>.</li>
    <li><strong>Locomoção de Campo (Art. 9º-H):</strong> Compete ao <strong>ente federado (ex.: Município de Porto Velho) fornecer ou custear a locomoção necessária</strong> para o exercício das atividades de campo!</li>
  </ul>
</div>`,
  questions: [
    {
      q: '(Inédita — Padrão IBGP 2026) De acordo com a Lei Federal nº 13.708/2018, que alterou a Lei nº 11.350/2006 para regulamentar normas do exercício profissional de Agente de Combate às Endemias (ACE) e Agente Comunitário de Saúde (ACS), assinale a alternativa CORRETA:',
      options: [
        'A) Os cursos técnicos de Agente de Combate às Endemias somente podem ser ministrados na modalidade 100% presencial, sendo vedado o ensino semipresencial.',
        'B) A jornada de trabalho de 40 (quarenta) horas semanais exigida para garantia do piso salarial compõe-se de 30 (trinta) horas semanais para atividades externas de campo/visitação domiciliar e 10 (dez) horas semanais para atividades de planejamento, avaliação, registro de dados e formação e aprimoramento técnico.',
        'C) O custeio da locomoção necessária para o exercício das atividades de campo é de responsabilidade exclusiva e pessoal do próprio Agente de Combate às Endemias.',
        'D) A jornada de trabalho para recebimento do piso salarial nacional passou a ser de 20 (vinte) horas semanais.'
      ],
      ans: 1,
      comment:
        'Gabarito: B. Nos termos do Art. 9º-A, § 2º da Lei 11.350/2006 (redação dada pela Lei Federal nº 13.708/2018), a jornada de 40h semanais divide-se em 30h para atividades externas (campo/visitação) e 10h para planejamento, avaliação, registro de dados e formação técnica. Além disso, o Art. 5º, § 2º-A admite as modalidades presencial e semipresencial, e o Art. 9º-H obriga o ente federado a fornecer ou custear a locomoção.'
    },
    {
      q: '(Inédita — Padrão IBGP 2026) Nos termos expressos do Art. 9º-H e do Art. 5º, § 2º-A da Lei Federal nº 11.350/2006, incluídos pela Lei Federal nº 13.708/2018, é CORRETO afirmar que:',
      options: [
        'A) Compete ao ente federado ao qual o ACE esteja vinculado fornecer ou custear a locomoção necessária para o exercício das atividades, conforme regulamento do ente federado; e os cursos técnicos de ACE poderão ser ministrados nas modalidades presencial e semipresencial conforme diretrizes do Conselho Nacional de Educação (CNE).',
        'B) Compete exclusivamente ao Ministério dos Transportes fornecer veículos individuais a cada ACE, sendo vedada a indenização financeira pelo Município.',
        'C) O curso técnico de ACE segue as diretrizes do Conselho Federal de Medicina e exige carga horária exclusivamente noturna.',
        'D) O piso salarial nacional dos ACE somente pode ser reajustado a cada 5 (cinco) anos mediante plebiscito municipal.'
      ],
      ans: 0,
      comment:
        'Gabarito: A. É a literalidade exata do Art. 9º-H e do Art. 5º, § 2º-A da Lei nº 11.350/2006, inseridos pela Lei Federal nº 13.708/2018.'
    }
  ],
  flashcards: [
    {
      f: 'O que estabelece o Art. 9º-H da Lei nº 11.350/2006, incluído pela Lei Federal nº 13.708/2018?',
      b: 'Compete ao ente federado ao qual o ACS ou o ACE esteja vinculado FORNECER OU CUSTEAR A LOCOMOÇÃO necessária para o exercício das atividades de campo, conforme regulamento do ente federado.',
      front: 'O que estabelece o Art. 9º-H da Lei nº 11.350/2006, incluído pela Lei Federal nº 13.708/2018?',
      back: 'Compete ao ente federado ao qual o ACS ou o ACE esteja vinculado FORNECER OU CUSTEAR A LOCOMOÇÃO necessária para o exercício das atividades de campo, conforme regulamento do ente federado.'
    },
    {
      f: 'Segundo a Lei Federal nº 13.708/2018 (Art. 5º, § 2º-A e Art. 9º-A, § 2º da Lei 11.350/2006), em quais modalidades pode ser ministrado o Curso Técnico de ACE e como se divide a jornada de 40h?',
      b: '• Modalidades do Curso Técnico de ACE: Presencial e Semipresencial (diretrizes do CNE).\n• Divisão da Jornada de 40h: 30 horas semanais externas (campo/visitação) + 10 horas semanais internas (planejamento, avaliação, registro de dados e aprimoramento técnico).',
      front: 'Segundo a Lei Federal nº 13.708/2018 (Art. 5º, § 2º-A e Art. 9º-A, § 2º da Lei 11.350/2006), em quais modalidades pode ser ministrado o Curso Técnico de ACE e como se divide a jornada de 40h?',
      back: '• Modalidades do Curso Técnico de ACE: Presencial e Semipresencial (diretrizes do CNE).\n• Divisão da Jornada de 40h: 30 horas semanais externas (campo/visitação) + 10 horas semanais internas (planejamento, avaliação, registro de dados e aprimoramento técnico).'
    }
  ]
};

// 3. New dedicated Block 6.1: Doenças contagiosas: agente etiológico, reservatório, hospedeiro, de modo de transmissão, sintomas e medidas de controle
const block6_1_DoencasContagiosas = {
  title:
    'Bloco 6.1 — Doenças Contagiosas: Agente Etiológico, Reservatório, Hospedeiro, de Modo de Transmissão, Sintomas e Medidas de Controle (Cadeia Epidemiológica Completa e Matriz Sinóptica das 14 Doenças do Edital)',
  modoA: `<div class="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
  <div class="bg-teal-900 text-white p-3.5 rounded-xl border border-teal-700">
    <span class="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">Tópico Expresso da Pauta de Conhecimentos Específicos (Anexo IV SEMUSA)</span>
    <h4 class="text-sm sm:text-base font-extrabold mt-0.5">Doenças Contagiosas e Transmissíveis: Agente Etiológico, Reservatório, Hospedeiro, Modo de Transmissão, Sintomas e Medidas de Controle</h4>
    <p class="text-xs text-teal-100 mt-1">Análise completa dos 6 elos da cadeia epidemiológica de transmissão, propriedades biológicas dos agentes infecciosos e Quadro Sinóptico Comparativo das 14 Doenças exigidas no Edital SEMUSA Porto Velho.</p>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">1. Conceito e Diferenciação: Doença Infecciosa vs. Doença Transmissível vs. Doença Contagiosa</h5>
  <ul class="list-disc pl-5 space-y-1.5">
    <li><strong>Doença Infecciosa:</strong> Resulta da penetração, alojamento e multiplicação de um agente etiológico vivo (vírus, bactéria, protozoário, helminto, fungo) no organismo de um hospedeiro, com manifestação de sinais e sintomas clínicos (nota: o <em>Tétano</em> é uma doença infecciosa, mas <strong>não é transmissível/contagiosa</strong> de pessoa para pessoa).</li>
    <li><strong>Doença Transmissível:</strong> Qualquer doença causada por um agente infeccioso específico ou seus produtos tóxicos, que se manifesta pela transmissão desse agente ou de seus produtos, de uma pessoa ou animal infectado ou de um reservatório a um hospedeiro suscetível, <strong>direta ou indiretamente</strong> (por meio de vetor artrópode, hospedeiro intermediário, água, alimento ou fômite).</li>
    <li><strong>Doença Contagiosa (Transmissão Direta / Contágio):</strong> É a doença transmissível cujo agente passa diretamente de um indivíduo infectado para outro suscetível por contato físico, gotículas respiratórias ou secreções, sem depender de vetor biológico (ex.: <strong>Influenza, COVID-19, Sarampo, Tuberculose, Hanseníase</strong>). Na linguagem dos editais de saúde pública (como o Anexo IV da banca IBGP), o bloco <em>"Doenças contagiosas: agente etiológico, reservatório, hospedeiro, de modo de transmissão, sintomas e medidas de controle"</em> abrange o estudo sistemático dos <strong>6 elementos da Cadeia Epidemiológica</strong> aplicáveis tanto às doenças contagiosas diretas quanto às doenças transmissíveis vetoriais e zoonóticas!</li>
  </ul>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">2. Os 6 Elementos Obrigatórios do Bloco (Agente Etiológico, Reservatório, Hospedeiro, Modo de Transmissão, Sintomas e Medidas de Controle)</h5>
  <div class="overflow-x-auto my-2">
    <table class="min-w-full text-xs border border-slate-300 rounded-lg overflow-hidden">
      <thead class="bg-slate-800 text-white">
        <tr>
          <th class="p-2 border border-slate-300 text-left">Elemento do Edital</th>
          <th class="p-2 border border-slate-300 text-left">Definição Técnica e Classificações</th>
          <th class="p-2 border border-slate-300 text-left">Pegadinhas Clássicas da Banca IBGP</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 bg-white">
        <tr>
          <td class="p-2 font-bold text-teal-900">1. Agente Etiológico (Bioagente)</td>
          <td class="p-2">Ser vivo ou partícula biológica capaz de produzir infecção ou doença infecciosa.<br>• <strong>Vírus:</strong> Dengue, Febre Amarela, Zika (<em>Flavivirus</em>); Chikungunya (<em>Alphavirus</em>); Raiva (<em>Lyssavirus</em>); Influenza (<em>Orthomyxoviridae</em>); COVID-19 (<em>SARS-CoV-2</em>).<br>• <strong>Bactérias:</strong> Leptospirose (<em>Leptospira interrogans</em> — espiroqueta); Febre Maculosa (<em>Rickettsia rickettsii</em> — bactéria intracelular obrigatória).<br>• <strong>Protozoários:</strong> Malária (<em>Plasmodium vivax, P. falciparum, P. malariae</em>); Doença de Chagas (<em>Trypanosoma cruzi</em>); Leishmanioses (<em>Leishmania braziliensis, L. amazonensis, L. guyanensis, L. infantum chagasi</em>).<br>• <strong>Helmintos (Vermes):</strong> Esquistossomose (<em>Schistosoma mansoni</em> — platelminto trematódeo).</td>
          <td class="p-2"><strong>5 Propriedades do Agente Etiológico:</strong><br>1) <strong>Infectividade:</strong> capacidade de penetrar, alojar-se e multiplicar-se;<br>2) <strong>Patogenicidade:</strong> capacidade de produzir sintomas clínicos nos infectados;<br>3) <strong>Virulência:</strong> capacidade de produzir casos <strong>graves ou fatais</strong>;<br>4) <strong>Poder Invasivo:</strong> capacidade de difundir-se pelos tecidos;<br>5) <strong>Imunogenicidade:</strong> capacidade de induzir imunidade específica duradoura.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">2. Reservatório (e Fonte de Infecção)</td>
          <td class="p-2">É o habitat natural (ser humano, animal, artrópode, planta ou solo) no qual um agente infeccioso vive, cresce e se multiplica, e do qual depende para sua sobrevivência e perpetuação na natureza.<br>• <strong>Tipos de Portadores:</strong> <em>Portador São/Assintomático</em> (nunca tem sintomas), <em>Portador em Incubação</em> (transmite antes dos sintomas) e <em>Portador Convalescente</em> (continua transmitindo após a cura clínica).<br>• <strong>Classificação Zoonótica:</strong> <em>Antroponose</em> (reservatório exclusivamente humano, ex.: Dengue urbana); <em>Antropozoonose</em> (do animal para o homem, ex.: Raiva, Leptospirose); <em>Zooantroponose</em> (do homem para o animal); <em>Anfixenose</em> (homem e animais intercambiam, ex.: Chagas).</td>
          <td class="p-2">• Na <strong>Leishmaniose Visceral (Calazar)</strong>, o principal reservatório doméstico urbano é o <strong>CÃO</strong>; no ambiente silvestre são raposas e marsupiais.<br>• Na <strong>Leptospirose</strong>, o principal reservatório urbano é a <strong>ratazana (<em>Rattus norvegicus</em>)</strong>, que elimina a bactéria na urina por toda a vida.<br>• Na <strong>Febre Maculosa</strong>, o próprio <strong>carrapato <em>Amblyomma</em> é vetor E reservatório</strong> (transmissão transovariana), sendo a <strong>capivara e o cavalo hospedeiros amplificadores</strong>!</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">3. Hospedeiro (Definitivo vs. Intermediário e Suscetível)</td>
          <td class="p-2">Pessoa ou animal vivo que, em circunstâncias naturais, permite a subsistência ou o alojamento de um agente infeccioso.<br>• <strong>Hospedeiro DEFINITIVO:</strong> É aquele que abriga o parasita em sua fase de maturidade ou de <strong>reprodução SEXUADA</strong>.<br>• <strong>Hospedeiro INTERMEDIÁRIO:</strong> É aquele que abriga o parasita em sua fase larvária ou de <strong>reprodução ASSEXUADA</strong>.<br>• <strong>Hospedeiro Acidental:</strong> Aquele que entra no ciclo silvestre sem ser essencial à manutenção do agente (ex.: homem na Febre Amarela Silvestre e na LTA).</td>
          <td class="p-2"><strong>A Pegadinha nº 1 da Banca IBGP:</strong><br>• Na <strong>MALÁRIA</strong>: Hospedeiro <strong>Definitivo = Mosquito <em>Anopheles</em></strong> (reprodução sexuada/esporogonia); Hospedeiro <strong>Intermediário = Ser Humano</strong> (reprodução assexuada/esquizogonia)!<br>• Na <strong>ESQUISTOSSOMOSE</strong>: Hospedeiro <strong>Definitivo = Ser Humano</strong> (vermes adultos sexuados no sistema porta); Hospedeiro <strong>Intermediário = Caramujo <em>Biomphalaria</em></strong> (reprodução assexuada: miracídio → cercária)!</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">4. Modo de Transmissão (Direta vs. Indireta e Vetores)</td>
          <td class="p-2">Mecanismo pelo qual o agente infeccioso se propaga da Porta de Saída do reservatório até a Porta de Entrada do novo hospedeiro suscetível:<br>• <strong>1) Transmissão Direta Imediata:</strong> Contato físico direto (mordedura na Raiva, contato sexual no Zika, transmissão vertical/transplacentária no Zika e Chagas).<br>• <strong>2) Transmissão Direta Mediata:</strong> Gotículas respiratórias de Flügge a curta distância (Influenza e COVID-19).<br>• <strong>3) Transmissão Indireta por Veículo Animado (VETOR):</strong><br>— <em>Vetor Biológico</em> (o agente multiplica-se ou desenvolve-se obrigatoriamente dentro do artrópode: <em>Aedes, Anopheles, Lutzomyia, Triatomíneos, Amblyomma</em>);<br>— <em>Vetor Mecânico</em> (apenas transporta o agente nas patas/probóscide sem multiplicação biológica, ex.: mosca doméstica).<br>• <strong>4) Transmissão Indireta por Veículo Inanimado:</strong> Água/lama contaminada (Leptospirose, cercárias da Esquistossomose), alimentos (açaí na Doença de Chagas Oral), fômites ou aerossóis.</td>
          <td class="p-2">• Na <strong>Doença de Chagas</strong>, a transmissão vetorial NÃO ocorre pela picada/saliva do barbeiro, mas sim pelas <strong>FEZES do barbeiro</strong> depositadas após a picada; e na Amazônia a principal via atual é a <strong>Transmissão ORAL</strong> (açaí/bacaba)!<br>• No <strong>Zika Vírus</strong>, além da picada do <em>Aedes aegypti</em>, há transmissão <strong>sexual e vertical (congênita)</strong>.<br>• Na <strong>Esquistossomose</strong>, a cercária penetra <strong>ativamente pela pele</strong> na água doce (não é por beber água com ovos!).</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">5. Sintomas e Cronologia Clínica da Infecção</td>
          <td class="p-2">• <strong>Período de Incubação Intrínseco (PII):</strong> Tempo entre a entrada do agente no hospedeiro humano e o surgimento do 1º sintoma clínico.<br>• <strong>Período de Incubação Extrínseco (PIE):</strong> Tempo entre a ingestão do agente pelo vetor artrópode e o momento em que o vetor se torna infectante na glândula salivar (ex.: 8 a 12 dias para o vírus da Dengue no <em>Aedes</em>).<br>• <strong>Período Prodrômico:</strong> Sintomas gerais inespecíficos (mal-estar, febre baixa, cefaleia).<br>• <strong>Período de Estado (Clínico Manifesto):</strong> Sinais e sintomas característicos/típicos da doença.<br>• <strong>Período de Transmissibilidade:</strong> Intervalo em que o indivíduo/animal elimina o agente e pode infectar outros ou infectar vetores.</td>
          <td class="p-2"><strong>Sintomas-Chave (Patognomônicos) de Prova:</strong><br>• <strong>Dengue:</strong> Sinais de alarme surgem na <strong>queda da febre</strong> (3º ao 7º dia);<br>• <strong>Chikungunya:</strong> Poliartralgia simétrica incapacitante que cronifica (> 90 dias);<br>• <strong>Zika:</strong> Exantema pruriginoso precoce + conjuntivite não purulenta + microcefalia;<br>• <strong>Febre Amarela:</strong> Icterícia + hemorragias + <strong>Sinal de Faget</strong> (febre alta com pulso lento/bradicardia);<br>• <strong>Leptospirose:</strong> Mialgia nas panturrilhas + <strong>Síndrome de Weil</strong> (icterícia rubínica + insuficiência renal + hemorragia pulmonar);<br>• <strong>Chagas Aguda:</strong> <strong>Sinal de Romaña</strong> (edema bipalpebral unilateral) e Chagoma.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">6. Medidas de Controle e Profilaxia nos 3 Elos</td>
          <td class="p-2">Conjunto de intervenções para interromper a cadeia de transmissão:<br>• <strong>Sobre o Reservatório / Fonte de Infecção:</strong> Diagnóstico e tratamento precoce (ex.: malária em < 48h), <strong>Isolamento</strong> (aplicado ao <strong>DOENTE</strong> durante o período de transmissibilidade), notificação compulsória, vacinação/encoleiramento de cães.<br>• <strong>Sobre o Elo de Transmissão (Meio Ambiente e Vetores):</strong> Saneamento básico, Manejo Integrado de Vetores pelo ACE (controle mecânico, biológico com Bti/Wolbachia, legal e químico com tratamento focal, perifocal, BRI e UBV), antirratização (4 As) e pasteurização do açaí.<br>• <strong>Sobre o Hospedeiro Suscetível:</strong> <strong>Vacinação (imunização ativa)</strong>, soroterapia (imunização passiva), quimioprofilaxia, uso de EPIs, mosquiteiros (MILD), repelentes e <strong>Quarentena</strong> (aplicada aos <strong>COMUNICANTES SADIOS</strong> pelo período máximo de incubação!).</td>
          <td class="p-2"><strong>Diferença Clássica IBGP — Isolamento vs. Quarentena:</strong><br>• <strong>ISOLAMENTO:</strong> Segrega o indivíduo ou animal <strong>JÁ DOENTE / INFECTADO</strong> durante o <strong>período de transmissibilidade</strong>.<br>• <strong>QUARENTENA:</strong> Restringe pessoas ou animais <strong>SADIOS (comunicantes expostos)</strong> durante o <strong>período máximo de incubação</strong> da doença!</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">3. Matriz Sinóptica Completa das 14 Doenças Exigidas no Edital (Cruzamento das 6 Colunas da Pauta Oficial)</h5>
  <div class="overflow-x-auto my-2">
    <table class="min-w-full text-[11px] border border-slate-300 rounded-lg overflow-hidden">
      <thead class="bg-teal-950 text-white">
        <tr>
          <th class="p-2 border border-slate-300 text-left">Doença (Pauta Oficial)</th>
          <th class="p-2 border border-slate-300 text-left">1. Agente Etiológico</th>
          <th class="p-2 border border-slate-300 text-left">2. Reservatório</th>
          <th class="p-2 border border-slate-300 text-left">3. Hospedeiro</th>
          <th class="p-2 border border-slate-300 text-left">4. Modo de Transmissão / Vetor</th>
          <th class="p-2 border border-slate-300 text-left">5. Sintomas Clássicos</th>
          <th class="p-2 border border-slate-300 text-left">6. Medidas de Controle (ACE/SUS)</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 bg-white">
        <tr>
          <td class="p-2 font-bold text-teal-900">1. Raiva</td>
          <td class="p-2">Vírus RNA <em>Lyssavirus</em> (Rhabdoviridae)</td>
          <td class="p-2">Mamíferos: Cão/gato (urbano), morcego <em>Desmodus rotundus</em> (aéreo), raposa/sagui (silvestre)</td>
          <td class="p-2">Humano e mamíferos (aves e répteis são refratários!)</td>
          <td class="p-2">Direta: mordedura, arranhadura ou lambedura com saliva infectada</td>
          <td class="p-2">Encefalite aguda, hidrofobia, aerofobia, espasmos, paralisia (~100% letal)</td>
          <td class="p-2">Vacinação canina/felina; observação de cão/gato por 10 dias; morcego = sempre grave (Soro + 4 doses vacina: D0, 3, 7, 14)</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">2. Esquistossomose</td>
          <td class="p-2">Helminto trematódeo <em>Schistosoma mansoni</em></td>
          <td class="p-2">Ser humano (principal reservatório que elimina ovos nas fezes)</td>
          <td class="p-2"><strong>Definitivo:</strong> Homem<br><strong>Intermediário:</strong> Caramujo <em>Biomphalaria</em></td>
          <td class="p-2">Indireta hídrica: penetração ativa da larva <strong>cercária</strong> pela pele (10h–16h)</td>
          <td class="p-2">Dermatite cercariana, febre de Katayama, hepatoesplenomegalia e ascite ("barriga d'água")</td>
          <td class="p-2">Saneamento básico, pesquisa malacológica pelo ACE, Praziquantel (exame Kato-Katz) e moluscicida criterioso</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">3. Doença de Chagas</td>
          <td class="p-2">Protozoário flagelado <em>Trypanosoma cruzi</em></td>
          <td class="p-2">Humano e mamíferos silvestres/domésticos (gambá, tatu, macaco, cão)</td>
          <td class="p-2">Vertebrados mamíferos e vetor invertebrado (triatomíneo)</td>
          <td class="p-2"><strong>Oral</strong> (açaí/bacaba na Amazônia) e <strong>Vetorial</strong> pelas <strong>fezes</strong> do barbeiro (<em>Triatoma, Panstrongylus, Rhodnius</em>)</td>
          <td class="p-2">Aguda: febre prolongada, miocardite, Sinal de Romaña, Chagoma. Crônica: cardiomiopatia, megaesôfago/megacólon</td>
          <td class="p-2">Branqueamento térmico do açaí (80°C/10s), melhoria habitacional, PITs (Postos de Informação de Triatomíneos) e BRI</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">4. Dengue</td>
          <td class="p-2">Vírus RNA <em>Flavivirus</em> (4 sorotipos: DENV 1, 2, 3 e 4)</td>
          <td class="p-2">Ser humano e mosquito <em>Aedes aegypti</em> (transmissão transovariana)</td>
          <td class="p-2">Ser humano suscetível</td>
          <td class="p-2">Vetorial biológica: picada da fêmea do <em>Aedes aegypti</em> (hábito diurno)</td>
          <td class="p-2">Febre alta súbita, dor retro-orbitária, mialgia; sinais de alarme na queda da febre (dor abdominal, vômitos, sangramento)</td>
          <td class="p-2">Controle mecânico, LIRAa, larvicidas (Bti, Espinosade, Piriproxifeno), UBV no bloqueio, Vacina Qdenga (10–14 anos) e hidratação (proibido AAS/AINEs)</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">5. Febre Amarela</td>
          <td class="p-2">Vírus RNA <em>Flavivirus</em></td>
          <td class="p-2"><strong>Silvestre:</strong> Mosquitos e Primatas Não Humanos (macacos = sentinelas). <strong>Urbano:</strong> Homem</td>
          <td class="p-2">Homem (acidental no ciclo silvestre) e macacos (amplificadores/sentinelas)</td>
          <td class="p-2"><strong>Silvestre:</strong> <em>Haemagogus</em> e <em>Sabethes</em>.<br><strong>Urbana (sem casos desde 1942):</strong> <em>Aedes aegypti</em></td>
          <td class="p-2">Febre aguda, icterícia, insuficiência hepatorrenal, hemorragia ("vômito negro") e <strong>Sinal de Faget</strong></td>
          <td class="p-2">Vacina Febre Amarela (9 meses e reforço 4 anos; ou dose única), vigilância de epizootias em macacos (Notificação Imediata 24h) e controle do <em>Aedes</em></td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">6. Febre Maculosa</td>
          <td class="p-2">Bactéria intracelular <em>Rickettsia rickettsii</em> (e <em>R. parkeri</em>)</td>
          <td class="p-2">Carrapatos do gênero <em>Amblyomma</em> (transmissão transovariana)</td>
          <td class="p-2">Homem; <strong>Hospedeiros amplificadores:</strong> Capivaras e Equinos (cavalos)</td>
          <td class="p-2">Vetorial: picada do carrapato-estrela (<em>Amblyomma sculptum / cajennense</em>) fixado por ≥ 4 a 6 horas</td>
          <td class="p-2">Febre alta, cefaleia, mialgia e exantema maculopapular centrípeto nas <strong>palmas das mãos e plantas dos pés</strong></td>
          <td class="p-2">Roupas claras/botas vedadas, retirar carrapato com pinça pela base, roçagem de pastos e antibiótico Doxiciclina imediato (Notificação Imediata 24h)</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">7. Influenza (Gripe)</td>
          <td class="p-2">Vírus RNA <em>Influenza</em> A, B e C (Orthomyxoviridae)</td>
          <td class="p-2">Ser humano, aves aquáticas e suínos (no Influenza A)</td>
          <td class="p-2">Ser humano</td>
          <td class="p-2">Direta (gotículas respiratórias de Flügge) e indireta por mãos/fômites contaminados</td>
          <td class="p-2">Síndrome Gripal (febre, tosse, dor de garganta, mialgia), podendo evoluir para SRAG (dispneia, SatO2 < 95%)</td>
          <td class="p-2">Vacinação anual PNI, etiqueta respiratória, lavagem das mãos, Oseltamivir precoce e vigilância SIVEP-Gripe (SRAG)</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">8. Chikungunya</td>
          <td class="p-2">Vírus RNA <em>Alphavirus</em> (CHIKV — Togaviridae)</td>
          <td class="p-2">Ser humano (ciclo urbano)</td>
          <td class="p-2">Ser humano suscetível</td>
          <td class="p-2">Vetorial: picada da fêmea de <em>Aedes aegypti</em> e <em>Aedes albopictus</em></td>
          <td class="p-2">Febre alta + <strong>poliartralgia/artrite bilateral simétrica intensa</strong> (fases: aguda até 14d, pós-aguda 15–90d, crônica > 90d)</td>
          <td class="p-2">Eliminação de criadouros do <em>Aedes</em>, tratamento focal/perifocal/UBV, manejo da dor articular e reabilitação fisioterápica</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">9. Zika Vírus</td>
          <td class="p-2">Vírus RNA <em>Flavivirus</em> (ZIKV)</td>
          <td class="p-2">Ser humano e primatas</td>
          <td class="p-2">Ser humano (atenção máxima às gestantes e fetos)</td>
          <td class="p-2">Vetorial (<em>Aedes aegypti</em>), <strong>Vertical (transplacentária)</strong> e <strong>Sexual</strong></td>
          <td class="p-2">Febre baixa/ausente, <strong>exantema maculopapular pruriginoso precoce</strong>, conjuntivite não purulenta; Microcefalia (SCZ) e Guillain-Barré</td>
          <td class="p-2">Controle do <em>Aedes</em>, proteção de gestantes (repelentes, telas, preservativos) e Notificação Imediata (24h) de Zika em gestante</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">10. Leptospirose</td>
          <td class="p-2">Bactéria espiroqueta <em>Leptospira interrogans</em></td>
          <td class="p-2">Roedores sinantrópicos (principal: <em>Rattus norvegicus</em> / ratazana), cães e bovinos</td>
          <td class="p-2">Ser humano (acidental) e mamíferos domésticos</td>
          <td class="p-2">Contato da pele (lesada ou íntegra imersa) ou mucosa com água/lama de enchente contaminada pela <strong>urina de ratos</strong></td>
          <td class="p-2">Febre, sufusão conjuntival, <strong>mialgia intensa nas panturrilhas</strong>; forma grave = <strong>Síndrome de Weil</strong> (icterícia rubínica + IRA + hemorragia)</td>
          <td class="p-2">Antirratização (eliminar os 4 As: Água, Alimento, Abrigo, Acesso), desratização com cumarínicos (antídoto: Vitamina K1), botas/luvas de PVC e saneamento</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">11. Leishmaniose Tegumentar (LTA)</td>
          <td class="p-2">Protozoários <em>Leishmania braziliensis, L. guyanensis, L. amazonensis</em></td>
          <td class="p-2">Animais silvestres (roedores, marsupiais/gambás, preguiças, tamanduás)</td>
          <td class="p-2">Homem (hospedeiro acidental) e mamíferos silvestres</td>
          <td class="p-2">Vetorial: picada da fêmea de flebotomíneos <em>Lutzomyia</em> (mosquito-palha / tatuquira — criadouro em <strong>solo úmido com matéria orgânica</strong>!)</td>
          <td class="p-2">Úlcera cutânea indolor com <strong>bordas elevadas em moldura</strong> e fundo granuloso ("Ferida Brava") e lesão destrutiva de mucosa nasal/oral</td>
          <td class="p-2">Limpeza de quintais sombreados (retirar folhas/frutos podres e fezes do solo), afastamento de galinheiros, telas finas e tratamento específico no SUS</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">12. Leishmaniose Visceral (LV / Calazar)</td>
          <td class="p-2">Protozoário <em>Leishmania infantum</em> (sin. <em>L. chagasi</em>)</td>
          <td class="p-2"><strong>Urbano: CÃO doméstico</strong> (principal!).<br><strong>Silvestre:</strong> Raposas e marsupiais</td>
          <td class="p-2">Homem e canídeos</td>
          <td class="p-2">Vetorial: picada da fêmea do flebotomíneo <em>Lutzomyia longipalpis</em> (hábito crepuscular/noturno; criadouro terrestre orgânico)</td>
          <td class="p-2">Febre prolongada irregular, <strong>hepatoesplenomegalia volumosa</strong>, emagrecimento/caquexia e pancitopenia (anemia, leucopenia, plaquetopenia)</td>
          <td class="p-2">Manejo ambiental da matéria orgânica no solo, encoleiramento de cães com Deltametrina 4%, inquérito sorológico canino e BRI</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">13. Malária</td>
          <td class="p-2">Protozoários <em>Plasmodium vivax</em> (+ comum), <em>P. falciparum</em> (+ grave) e <em>P. malariae</em></td>
          <td class="p-2">Ser humano infectado (com gametócitos circulantes no sangue)</td>
          <td class="p-2"><strong>Definitivo:</strong> Mosquito <em>Anopheles</em>.<br><strong>Intermediário:</strong> Ser Humano</td>
          <td class="p-2">Vetorial: picada da fêmea do <em>Anopheles darlingi</em> (mosquito-prego / carapanã — água limpa, sombreada e baixo fluxo)</td>
          <td class="p-2">Paroxismo malárico: calafrio intenso → febre alta (40°C) → sudorese profusa (a cada 48h na terçã e 72h na quartã), anemia; recaída por hipnozoítos no <em>P. vivax</em></td>
          <td class="p-2">Gota Espessa / Teste Rápido em < 48h, tratamento completo (Cloroquina + Primaquina/Tafenoquina no <em>P. vivax</em>; ACT no <em>P. falciparum</em>), MILD, BRI e SIVEP-Malária</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">14. COVID-19</td>
          <td class="p-2">Vírus RNA <em>SARS-CoV-2</em> (Coronaviridae)</td>
          <td class="p-2">Ser humano (origem zoonótica em quirópteros)</td>
          <td class="p-2">Ser humano</td>
          <td class="p-2">Direta/indireta respiratória: gotículas, aerossóis e contato com superfícies contaminadas</td>
          <td class="p-2">Síndrome Gripal (febre, tosse, dor de garganta, anosmia/ageusia), podendo evoluir para SRAG (dispneia, SatO2 < 95%, trombose)</td>
          <td class="p-2">Vacinação atualizada PNI, ventilação de ambientes, uso de máscaras/isolamento em sintomáticos e notificação (e-SUS Notifica p/ SG e SIVEP-Gripe p/ SRAG)</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<div class="space-y-2 text-xs sm:text-sm text-slate-800 leading-relaxed">
  <p><strong>RESUMO TÁTICO — DOENÇAS CONTAGIOSAS: AGENTE, RESERVATÓRIO, HOSPEDEIRO, TRANSMISSÃO, SINTOMAS E CONTROLE:</strong></p>
  <ul class="list-disc pl-5 space-y-1">
    <li><strong>5 Propriedades do Agente Etiológico:</strong> <strong>Infectividade</strong> (penetrar e multiplicar-se) | <strong>Patogenicidade</strong> (causar sintomas clínicos) | <strong>Virulência</strong> (causar casos graves/fatais) | <strong>Poder Invasivo</strong> | <strong>Imunogenicidade</strong> (gerar imunidade duradoura).</li>
    <li><strong>Hospedeiro Definitivo vs. Intermediário (Pegadinha Campeã):</strong> Na <strong>Malária</strong>, o Definitivo é o mosquito <em>Anopheles</em> e o Intermediário é o Homem. Na <strong>Esquistossomose</strong>, o Definitivo é o Homem e o Intermediário é o caramujo <em>Biomphalaria</em>.</li>
    <li><strong>Isolamento vs. Quarentena:</strong> <strong>Isolamento</strong> = aplica-se ao <strong>DOENTE</strong> pelo período de <strong>transmissibilidade</strong>. <strong>Quarentena</strong> = aplica-se ao <strong>COMUNICANTE SADIO</strong> pelo período máximo de <strong>incubação</strong>.</li>
  </ul>
</div>`,
  questions: [
    {
      q: '(Inédita — Padrão IBGP 2026) No estudo das doenças contagiosas e transmissíveis (agente etiológico, reservatório, hospedeiro, modo de transmissão, sintomas e medidas de controle), assinale a alternativa CORRETA:',
      options: [
        'A) Patogenicidade é a capacidade do agente etiológico de produzir casos graves ou fatais, enquanto virulência é a simples capacidade de penetrar no hospedeiro sem causar sintomas.',
        'B) Na Malária, o ser humano é o hospedeiro intermediário (onde ocorre a reprodução assexuada ou esquizogonia) e o mosquito Anopheles é o hospedeiro definitivo (onde ocorre a reprodução sexuada ou esporogonia); já na Esquistossomose, o ser humano é o hospedeiro definitivo e o caramujo Biomphalaria é o hospedeiro intermediário.',
        'C) Quarentena é a segregação de indivíduos que já estão clinicamente doentes durante o período de transmissibilidade, enquanto isolamento aplica-se apenas a indivíduos sadios.',
        'D) A Febre Maculosa é causada por um vírus transmitido pela urina da capivara, e a Leptospirose é causada por um protozoário transmitido pela picada do carrapato-estrela.'
      ],
      ans: 1,
      comment:
        'Gabarito: B. Na Malária, a reprodução sexuada ocorre no mosquito Anopheles (hospedeiro definitivo) e a assexuada no homem (hospedeiro intermediário). Na Esquistossomose, os vermes adultos reproduzem-se sexuadamente no sistema porta humano (hospedeiro definitivo) e as larvas multiplicam-se assexuadamente no caramujo Biomphalaria (hospedeiro intermediário).'
    },
    {
      q: '(Inédita — Padrão IBGP 2026) Relacione corretamente a propriedade biológica do agente etiológico e a medida de controle na cadeia epidemiológica de transmissão:',
      options: [
        'A) Virulência é a capacidade do agente bioagressor de produzir casos graves ou fatais entre os doentes (refletida epidemiologicamente pela taxa de letalidade); e o isolamento aplica-se ao indivíduo infectado/doente durante o período de transmissibilidade, enquanto a quarentena aplica-se aos comunicantes sadios durante o período máximo de incubação.',
        'B) Imunogenicidade é a capacidade do vetor mecânico de multiplicar o vírus em suas glândulas salivares.',
        'C) Na Leishmaniose Visceral, o mosquito-palha (Lutzomyia longipalpis) deposita seus ovos exclusivamente em caixas d’água elevadas (Grupo A1 do LIRAa).',
        'D) Na Doença de Chagas, o reservatório exclusivo é o caramujo Biomphalaria glabrata.'
      ],
      ans: 0,
      comment:
        'Gabarito: A. Virulência mede a gravidade/fatalidade da doença produzida pelo agente; isolamento segrega o doente no período de transmissibilidade e quarentena restringe o comunicante sadio pelo período máximo de incubação.'
    }
  ],
  flashcards: [
    {
      f: 'Diferencie Infectividade, Patogenicidade, Virulência e Imunogenicidade do Agente Etiológico:',
      b: '• Infectividade: capacidade de penetrar, alojar-se e multiplicar-se no hospedeiro.\n• Patogenicidade: capacidade de produzir sinais e sintomas clínicos (doença manifesta) nos infectados.\n• Virulência: capacidade de produzir casos GRAVES ou FATAIS.\n• Imunogenicidade: capacidade de induzir resposta imune específica e duradoura.',
      front: 'Diferencie Infectividade, Patogenicidade, Virulência e Imunogenicidade do Agente Etiológico:',
      back: '• Infectividade: capacidade de penetrar, alojar-se e multiplicar-se no hospedeiro.\n• Patogenicidade: capacidade de produzir sinais e sintomas clínicos (doença manifesta) nos infectados.\n• Virulência: capacidade de produzir casos GRAVES ou FATAIS.\n• Imunogenicidade: capacidade de induzir resposta imune específica e duradoura.'
    },
    {
      f: 'Qual a diferença entre Isolamento e Quarentena nas medidas de controle de doenças contagiosas?',
      b: '• ISOLAMENTO: Segregação de pessoa ou animal JÁ DOENTE/INFECTADO durante o PERÍODO DE TRANSMISSIBILIDADE.\n• QUARENTENA: Restrição de atividades de pessoas ou animais SADIOS (comunicantes expostos) durante o PERÍODO MÁXIMO DE INCUBAÇÃO da doença.',
      front: 'Qual a diferença entre Isolamento e Quarentena nas medidas de controle de doenças contagiosas?',
      back: '• ISOLAMENTO: Segregação de pessoa ou animal JÁ DOENTE/INFECTADO durante o PERÍODO DE TRANSMISSIBILIDADE.\n• QUARENTENA: Restrição de atividades de pessoas ou animais SADIOS (comunicantes expostos) durante o PERÍODO MÁXIMO DE INCUBAÇÃO da doença.'
    }
  ]
};

// 4. Synthesis prepend for esp_2 Block 2.1 (SUS: princípios fundamentais, diretrizes, atribuições e competências das esferas governamentais do SUS. Promoção e proteção da saúde.)
const esp2_Block2_1_Prepend = `<div class="bg-teal-900 text-white p-3.5 rounded-xl border border-teal-700 mb-3">
  <span class="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">Tópico Expresso da Pauta de Conhecimentos Específicos (Anexo IV SEMUSA)</span>
  <h4 class="text-sm sm:text-base font-extrabold mt-0.5">Sistema Único de Saúde – SUS: Princípios Fundamentais, Diretrizes, Atribuições e Competências das Esferas Governamentais do SUS. Promoção e Proteção da Saúde</h4>
  <p class="text-xs text-teal-100 mt-1">Mapeamento integral dos Princípios Doutrinários (Universalidade, Integralidade, Equidade), Diretrizes Organizativas (Art. 198 CF/88 e Art. 7º da Lei 8.080/90), Atribuições do SUS (Art. 200 CF/88 e Art. 6º Lei 8.080/90), Competências das Esferas Federal (Art. 16), Estadual (Art. 17) e Municipal (Art. 18) e Promoção vs. Proteção da Saúde.</p>
</div>
<div class="overflow-x-auto my-2">
  <table class="min-w-full text-xs border border-slate-300 rounded-lg overflow-hidden">
    <thead class="bg-slate-800 text-white">
      <tr>
        <th class="p-2 border border-slate-300 text-left">Eixo Exato do Edital</th>
        <th class="p-2 border border-slate-300 text-left">Base Legal (CF/88 e Lei nº 8.080/1990)</th>
        <th class="p-2 border border-slate-300 text-left">Síntese Técnica Obrigatória para a Prova IBGP</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 bg-white">
      <tr>
        <td class="p-2 font-bold text-teal-900">1. Princípios Fundamentais (Doutrinários / Éticos) do SUS</td>
        <td class="p-2">Art. 196 da CF/88 e Art. 7º, I, II e IV da Lei nº 8.080/1990</td>
        <td class="p-2">• <strong>Universalidade:</strong> Saúde é direito de todos, em todos os níveis de assistência, sem exigência de contribuição prévia.<br>• <strong>Integralidade:</strong> Conjunto articulado e contínuo das ações e serviços preventivos e curativos, individuais e coletivos, exigidos para cada caso em todos os níveis de complexidade.<br>• <strong>Equidade (Igualdade Material):</strong> Tratar desigualmente os desiguais na medida de suas vulnerabilidades (na literalidade da Lei 8.080/90, Art. 7º, IV, consta como <em>"igualdade da assistência à saúde, sem preconceitos ou privilégios"</em>).</td>
      </tr>
      <tr>
        <td class="p-2 font-bold text-teal-900">2. Diretrizes Constitucionais e Organizativas do SUS</td>
        <td class="p-2">Art. 198, I, II e III da CF/88 e Art. 7º, VIII e IX da Lei nº 8.080/1990</td>
        <td class="p-2">• <strong>I — Descentralização político-administrativa, com direção única em cada esfera de governo:</strong> ênfase na descentralização dos serviços para os <strong>municípios (municipalização)</strong>;<br>• <strong>Regionalização e Hierarquização:</strong> organização da rede por Regiões de Saúde e níveis crescentes de complexidade tecnológica;<br>• <strong>II — Atendimento integral:</strong> com prioridade para as atividades preventivas, sem prejuízo dos serviços assistenciais;<br>• <strong>III — Participação da comunidade:</strong> Controle Social via Conselhos e Conferências de Saúde (Lei nº 8.142/1990).</td>
      </tr>
      <tr>
        <td class="p-2 font-bold text-teal-900">3. Atribuições do SUS (Campo de Atuação)</td>
        <td class="p-2">Art. 200, I a VIII da CF/88 e Art. 6º da Lei nº 8.080/1990</td>
        <td class="p-2"><strong>Executar</strong> ações de vigilância sanitária, vigilância epidemiológica, saúde do trabalhador, assistência terapêutica integral (inclusive farmacêutica) e <strong>saúde bucal (Lei 14.572/2023)</strong>; <strong>participar</strong> da política e execução de saneamento básico; <strong>ordenar</strong> a formação de RH; <strong>colaborar</strong> na proteção do meio ambiente (incluído o do trabalho); <strong>controlar e fiscalizar</strong> alimentos, água e bebidas para consumo humano; e assistência toxicológica/antídotos (Lei 14.715/2023).</td>
      </tr>
      <tr>
        <td class="p-2 font-bold text-teal-900">4. Competências das Esferas Governamentais do SUS</td>
        <td class="p-2">Arts. 15, 16, 17 e 18 da Lei nº 8.080/1990</td>
        <td class="p-2">• <strong>Atribuições Comuns (Art. 15):</strong> União, Estados, DF e Municípios (Plano de Saúde, requisição de bens/serviços em epidemias com justa indenização).<br>• <strong>Direção Nacional / União (Art. 16 — Ministério da Saúde):</strong> Normatizar e coordenar sistemas nacionais (alta complexidade, laboratórios, VISA/VE) e vigiar <strong>portos, aeroportos e fronteiras</strong>.<br>• <strong>Direção Estadual / Estados (Art. 17 — SESAU):</strong> <strong>Promover a descentralização para os Municípios</strong>, coordenar rede estadual de laboratórios e hemocentros, gerir referência regional e executar ações de forma <strong>supletiva</strong>.<br>• <strong>Direção Municipal / Municípios (Art. 18 — SEMUSA):</strong> <strong>Planejar, organizar, controlar, avaliar, GERIR e EXECUTAR diretamente</strong> os serviços públicos de saúde e de vigilância epidemiológica, sanitária e ambiental, e celebrar contratos/convênios locais.</td>
      </tr>
      <tr>
        <td class="p-2 font-bold text-teal-900">5. Promoção e Proteção da Saúde</td>
        <td class="p-2">Art. 196 da CF/88, Arts. 2º, 3º e 5º da Lei nº 8.080/1990, PNPS e Leavell & Clark</td>
        <td class="p-2">Ambas integram a <strong>Prevenção Primária (Período Pré-Patogênico de Leavell & Clark)</strong>:<br>• <strong>Promoção da Saúde (1º nível — inespecífica e intersetorial):</strong> Atua positivamente sobre os <strong>Determinantes e Condicionantes Sociais da Saúde (Art. 3º da Lei 8.080/90)</strong>: alimentação, moradia, saneamento básico, meio ambiente, trabalho, renda, educação, atividade física, transporte, lazer e Carta de Ottawa (1986).<br>• <strong>Proteção da Saúde / Proteção Específica (2º nível — direcionada a agravos específicos):</strong> Vacinação/imunização, controle vetorial mecânico/biológico/químico pelo ACE, uso de mosquiteiros impregnados (MILD), EPIs, fluoretação da água e vigilância sanitária/ambiental.</td>
      </tr>
    </tbody>
  </table>
</div>`;

for (const filePath of filesToUpdate) {
  if (!fs.existsSync(filePath)) continue;
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Update esp_1
  const esp1 = data.lessons.find(l => l.id === 'esp_1');
  if (esp1) {
    esp1.title =
      '1. Constituição da República Federativa do Brasil (com as Emendas Constitucionais): Art. 196 a 200; Evolução das Políticas de Saúde e Promoção e Proteção da Saúde (PNPS)';
    esp1.editalRef =
      'Constituição da República Federativa do Brasil (com as Emendas Constitucionais): Art. 196 a 200. Promoção e proteção da saúde.';
    if (esp1.blocks[3]) {
      esp1.blocks[3].title =
        'Bloco 1.4 — Promoção e Proteção da Saúde: História Natural da Doença (Leavell & Clark: 5 Níveis de Prevenção), Modelos de Atenção, Determinantes Sociais e MACC';
    }
  }

  // Update esp_2
  const esp2 = data.lessons.find(l => l.id === 'esp_2');
  if (esp2) {
    esp2.title =
      '2. Sistema Único de Saúde – SUS: Princípios Fundamentais, Diretrizes, Atribuições e Competências das Esferas Governamentais do SUS. Promoção e Proteção da Saúde (Lei Federal nº 8.080/1990 — Parte I)';
    esp2.editalRef =
      'Legislações Federais de Saúde Pública: Lei Federal nº 8.080/1990. Sistema Único de Saúde – SUS: princípios fundamentais, diretrizes, atribuições e competências das esferas governamentais do SUS. Promoção e proteção da saúde.';
    if (esp2.mindMap) {
      esp2.mindMap.centralTitle =
        'Sistema Único de Saúde – SUS: Princípios, Diretrizes, Atribuições, Competências das Esferas e Promoção e Proteção da Saúde (Lei nº 8.080/1990)';
      if (!esp2.mindMap.branches.some(b => b.title.includes('Promoção e Proteção da Saúde'))) {
        esp2.mindMap.branches.push({
          title: '5. Promoção e Proteção da Saúde no SUS (Arts. 2º, 3º e 5º)',
          icon: '🛡️',
          color: 'emerald',
          nodes: [
            {
              label: 'Promoção da Saúde (1º Nível)',
              detail:
                'Ações amplas e intersetoriais sobre os 11 Determinantes e Condicionantes do Art. 3º (alimentação, moradia, saneamento, meio ambiente, trabalho, renda, educação, atividade física, transporte e lazer).',
              badge: 'Art. 3º Lei 8.080'
            },
            {
              label: 'Proteção Específica da Saúde (2º Nível)',
              detail:
                'Ações direcionadas à redução de riscos específicos: imunização (PNI), controle de vetores pelo ACE, uso de EPIs, mosquiteiros impregnados e vigilância sanitária/epidemiológica.',
              badge: 'Prevenção Primária'
            }
          ]
        });
      }
    }
    if (esp2.blocks[0]) {
      esp2.blocks[0].title =
        'Bloco 2.1 — Sistema Único de Saúde – SUS: Princípios Fundamentais, Diretrizes, Objetivos, Atribuições (Campo de Atuação — Vigilâncias) e Promoção e Proteção da Saúde (Arts. 1º a 7º da Lei nº 8.080/1990)';
      if (!esp2.blocks[0].modoA.includes('Eixo Exato do Edital')) {
        esp2.blocks[0].modoA = esp2_Block2_1_Prepend + esp2.blocks[0].modoA;
      }
    }
    if (esp2.blocks[1]) {
      esp2.blocks[1].title =
        'Bloco 2.2 — Atribuições e Competências das Esferas Governamentais do SUS: Direção Nacional (Art. 16), Estadual (Art. 17), Municipal (Art. 18), Comissões Intergestores (CIT, CIB, CIR) e Subsistema Indígena (Arts. 8º a 19-H)';
    }
  }

  // Update esp_4
  const esp4 = data.lessons.find(l => l.id === 'esp_4');
  if (esp4) {
    esp4.title =
      '4. Política Nacional de Atenção Básica (Portaria Federal nº 2.436/2017 — PNAB), Promoção e Proteção da Saúde, Decreto nº 7.508/2011, Redes de Atenção à Saúde (RAS) e PNH';
    esp4.editalRef =
      'Portaria Federal nº 2.436/2017. Política Nacional de Atenção Básica. Promoção e proteção da saúde. Decreto Federal nº 7.508/2011.';
    if (esp4.mindMap) {
      esp4.mindMap.centralTitle =
        'Política Nacional de Atenção Básica (Portaria Federal nº 2.436/2017 — PNAB) + Promoção e Proteção da Saúde + Decreto nº 7.508/2011';
    }
    if (esp4.blocks[1]) {
      esp4.blocks[1].title =
        'Bloco 4.2 — Política Nacional de Atenção Básica (Portaria Federal nº 2.436/2017 — PNAB): Princípios, Diretrizes, Equipes (eSF, eAP, eSFR, UBSF, eMulti) e Integração Atenção Básica e Vigilância em Saúde (ACE + ACS)';
    }
    if (esp4.blocks[2]) {
      esp4.blocks[2].title =
        'Bloco 4.3 — Promoção e Proteção da Saúde: História Natural da Doença e Níveis de Prevenção de Leavell & Clark (Pré-Patogênese e Patogênese), Prevenção Quaternária e Modelos Assistenciais de Saúde';
    }
  }

  // Update esp_5
  const esp5 = data.lessons.find(l => l.id === 'esp_5');
  if (esp5) {
    esp5.title =
      '5. História e Evolução da Profissão de ACE; Atribuições do Agente de Combate a Endemias; Lei Federal nº 11.350/2006, Lei Federal nº 13.708/2018, Lei Federal nº 13.595/2018, Lei nº 14.536/2023 e EC nº 120/2022';
    esp5.editalRef =
      'Lei Federal nº 11.350/2006. Lei Federal nº 13.708/2018. Lei Federal nº 13.595/2018. História e Evolução da Profissão de ACE. Atribuições do Agente de Combate a Endemias.';
    if (esp5.mindMap) {
      esp5.mindMap.centralTitle =
        'História e Evolução da Profissão de ACE + Atribuições do ACE + Leis Federais nº 11.350/2006, 13.595/2018, 13.708/2018 e EC 120/2022';
      esp5.mindMap.branches = [
        {
          title: '1. História e Evolução da Profissão de ACE (1903–2023)',
          icon: '📜',
          color: 'amber',
          nodes: [
            {
              label: 'Brigadas de Oswaldo Cruz -> DNERu (1956) -> SUCAM (1970)',
              detail:
                'Origens no modelo sanitarista-campanhista vertical (febre amarela, malária na EFMM e endemias rurais com os antigos Guardas de Endemias da SUCAM).',
              badge: 'Raízes Históricas'
            },
            {
              label: 'FUNASA (1991) e Descentralização (Portaria 1.399/1999)',
              detail:
                'Fusão da SUCAM com a Fundação SESP criando a FUNASA, seguida da municipalização das ações de vigilância e controle de endemias para as Secretarias Municipais (SEMUSA).',
              badge: 'Municipalização'
            },
            {
              label: 'EC 51/2006, Lei 11.350/2006, EC 120/2022 e Lei 14.536/2023',
              detail:
                'Criação formal do cargo de ACE via Processo Seletivo Público, piso de 2 salários mínimos (EC 120/22) e reconhecimento como profissional de saúde regulamentado (Lei 14.536/23).',
              badge: 'Carreira Constitucional'
            }
          ]
        },
        {
          title: '2. Atribuições do Agente de Combate a Endemias (Arts. 3º a 4º-A)',
          icon: '🦟',
          color: 'teal',
          nodes: [
            {
              label: 'Atribuições Típicas do ACE (Art. 4º, § 1º — Lei 13.595/2018)',
              detail:
                'Vigilância, prevenção e controle de doenças: pesquisa entomológica/malacológica, cadastramento de imóveis, controle mecânico/químico/biológico e educação comunitária.',
              badge: '11 Atividades Típicas'
            },
            {
              label: 'Atividades Assistidas por Nível Superior (Art. 4º, § 2º)',
              detail:
                'Vacinação animal, coleta/transporte de amostras biológicas de animais, investigação diagnóstica laboratorial e auxílio ao Médico Veterinário em necropsia de animais.',
              badge: 'Supervisão Superior'
            },
            {
              label: 'Atribuições Compartilhadas ACE + ACS (Art. 4º-A e PNAB)',
              detail:
                'Atuação integrada em Território Único: diagnóstico demográfico/ambiental, visitas domiciliares conjuntas, georreferenciamento e busca ativa de casos suspeitos.',
              badge: 'Território Único'
            }
          ]
        },
        {
          title: '3. Lei Federal nº 13.708/2018 (Piso, Jornada 30h+10h, EPIs e Locomoção)',
          icon: '⚖️',
          color: 'indigo',
          nodes: [
            {
              label: 'Escalonamento do Piso (2019–2021) e EC 120/2022 (2 SM)',
              detail:
                'A Lei 13.708/2018 escalonou o piso nacional (R$ 1.250 em 2019; R$ 1.400 em 2020; R$ 1.550 em 2021) com reajuste em 1º de janeiro. A EC 120/2022 elevou para 2 salários mínimos.',
              badge: 'Art. 9º-A, §§ 1º e 5º'
            },
            {
              label: 'Divisão da Jornada de 40h (30h Campo + 10h Internas)',
              detail:
                'Art. 9º-A, § 2º: 30 horas semanais para atividades externas de campo/visitação domiciliar e 10 horas semanais para planejamento, avaliação, registro de dados e formação técnica.',
              badge: '30h + 10h'
            },
            {
              label: 'Custeio de Locomoção (Art. 9º-H) e Curso Técnico (Art. 5º, § 2º-A)',
              detail:
                'Compete ao ente federado fornecer ou custear a locomoção de campo (Art. 9º-H). Cursos técnicos de ACE podem ser presenciais ou semipresenciais segundo diretrizes do CNE.',
              badge: 'Lei 13.708/2018'
            }
          ]
        },
        {
          title: '4. Requisitos de Ingresso, Acumulação e Vedação de Terceirização',
          icon: '🛡️',
          color: 'emerald',
          nodes: [
            {
              label: 'Requisitos do ACE (Art. 7º) vs. ACS (Art. 6º)',
              detail:
                'ACE exige Ensino Médio + Curso Introdutório de formação inicial (mínimo 40h), NÃO exigindo morar na microárea (requisito exclusivo do ACS no Art. 6º, I e Art. 10, parágrafo único).',
              badge: 'Art. 7º Lei 11.350'
            },
            {
              label: 'Acumulação de 2 Cargos de Saúde (Lei 14.536/2023 — Art. 2º-A)',
              detail:
                'ACE e ACS são profissionais de saúde regulamentados para fins do Art. 37, XVI, "c" da CF/88, podendo acumular 2 cargos públicos de saúde se houver compatibilidade de horários.',
              badge: 'Lei 14.536/2023'
            },
            {
              label: 'Vedação de Contratação Temporária ou Terceirizada (Art. 16)',
              detail:
                'É proibida a contratação temporária ou terceirizada de ACS e ACE, SALVO na hipótese de combate a surtos epidêmicos, na forma da lei aplicável.',
              badge: 'Art. 16 Lei 11.350'
            }
          ]
        }
      ];
    }

    // Remove previously injected 5.1/5.3 if re-running script
    const origBlocks = esp5.blocks.filter(
      b =>
        !b.title.startsWith('Bloco 5.1 — História e Evolução da Profissão de ACE') &&
        !b.title.startsWith('Bloco 5.3 — Lei Federal nº 13.708/2018')
    );

    if (origBlocks.length >= 4) {
      origBlocks[0].title =
        'Bloco 5.2 — Atribuições do Agente de Combate a Endemias: Atividades Típicas (Art. 4º, § 1º), Assistidas (Art. 4º, § 2º), Compartilhadas ACE + ACS (Art. 4º-A e PNAB) e Lei Federal nº 11.350/2006 (Leis 13.595/2018 e 14.536/2023)';
      origBlocks[1].title =
        'Bloco 5.4 — Requisitos de Ingresso (Art. 6º vs. Art. 7º), Jornada (30h + 10h), Curso Introdutório (40h), Indenização de Transporte e Quadro Comparativo Lei 11.350/2006 vs. Anexo II do Edital SEMUSA';
      origBlocks[2].title =
        'Bloco 5.5 — Desenvolvimento Passo a Passo, Estudos de Caso Resolvidos e Atividade Prática de Fixação (Atribuições do ACE e Leis Federais nº 11.350/2006, 13.595/2018, 13.708/2018 e 14.536/2023)';
      origBlocks[3].title =
        'Bloco 5.6 — Texto Integral Consolidado da Lei Federal nº 11.350/2006 (Arts. 1º a 21 Completos com as Leis nº 13.595/2018, 13.708/2018 e 14.536/2023) e Regras de Desligamento (Art. 10) e Vedação de Terceirização (Art. 16)';

      esp5.blocks = [
        block5_1_HistoriaACE,
        origBlocks[0],
        block5_3_Lei13708,
        origBlocks[1],
        origBlocks[2],
        origBlocks[3]
      ];
    }
    esp5.questionsCount = esp5.blocks.reduce((acc, b) => acc + (b.questions?.length || 0), 0);
    esp5.flashcardsCount = esp5.blocks.reduce((acc, b) => acc + (b.flashcards?.length || 0), 0);
  }

  // Update esp_6
  const esp6 = data.lessons.find(l => l.id === 'esp_6');
  if (esp6) {
    esp6.title =
      '6. Vigilância em Saúde e Doenças Contagiosas: Agente Etiológico, Reservatório, Hospedeiro, de Modo de Transmissão, Sintomas e Medidas de Controle; Indicadores e Sistemas de Informação (SINAN, SIM, SINASC, e-SUS)';
    esp6.editalRef =
      'Vigilância em Saúde. Doenças contagiosas: agente etiológico, reservatório, hospedeiro, de modo de transmissão, sintomas e medidas de controle.';
    if (esp6.mindMap) {
      esp6.mindMap.centralTitle =
        'Vigilância em Saúde + Doenças Contagiosas (Agente Etiológico, Reservatório, Hospedeiro, Transmissão, Sintomas e Controle) + SIS';
      if (!esp6.mindMap.branches.some(b => b.title.includes('Doenças Contagiosas'))) {
        esp6.mindMap.branches.unshift({
          title: '1. Doenças Contagiosas: Agente, Reservatório, Hospedeiro, Transmissão, Sintomas e Controle',
          icon: '🦠',
          color: 'rose',
          nodes: [
            {
              label: 'Agente Etiológico e 5 Propriedades Biológicas',
              detail:
                'Vírus, bactérias, protozoários, helmintos e fungos. Propriedades: Infectividade (penetrar/multiplicar), Patogenicidade (causar sintomas), Virulência (gravidade/letalidade) e Imunogenicidade.',
              badge: 'Bioagentes'
            },
            {
              label: 'Reservatório vs. Hospedeiro (Definitivo e Intermediário)',
              detail:
                'Reservatório = habitat natural (humano, cão na LV, ratazana na Leptospirose, carrapato na Febre Maculosa). Malária: Definitivo = Anopheles e Intermediário = Homem; Esquistossomose: Definitivo = Homem e Intermediário = Biomphalaria.',
              badge: 'Elo Epidemiológico'
            },
            {
              label: 'Modo de Transmissão, Sintomas e Medidas de Controle',
              detail:
                'Transmissão direta (gotículas, saliva, sexual, vertical) vs. indireta (vetores biológicos/mecânicos, água, alimentos). Controle nos 3 elos: Isolamento (no doente) vs. Quarentena (no comunicante sadio).',
              badge: 'Profilaxia e Controle'
            }
          ]
        });
      }
    }

    const orig6Blocks = esp6.blocks.filter(
      b => !b.title.startsWith('Bloco 6.1 — Doenças Contagiosas:')
    );
    if (orig6Blocks.length >= 4) {
      orig6Blocks[0].title =
        'Bloco 6.2 — Vigilância em Saúde (Epidemiológica, Sanitária, Ambiental e Saúde do Trabalhador), Conceitos Epidemiológicos (Endemia, Epidemia, Surto, Pandemia) e Indicadores de Saúde';
      orig6Blocks[1].title =
        'Bloco 6.3 — Sistemas de Informação em Saúde (SIS): SINAN, SIM, SINASC, SI-PNI, SIVEP-Malária, SISPNCD/e-SUS e Lista Nacional de Notificação Compulsória (24h vs. Semanal)';
      orig6Blocks[2].title =
        'Bloco 6.4 — Desenvolvimento Integral Passo a Passo, Estudos de Caso Resolvidos e Atividade Prática (Vigilância em Saúde, PNVS Resolução CNS nº 588/2018 e Epidemiologia de Campo)';
      orig6Blocks[3].title =
        'Bloco 6.5 — Laboratório Prático de Indicadores Epidemiológicos, Prazos de Notificação Compulsória e Fluxo Operacional SINAN/SIVEP';

      esp6.blocks = [block6_1_DoencasContagiosas, ...orig6Blocks];
    }
    esp6.questionsCount = esp6.blocks.reduce((acc, b) => acc + (b.questions?.length || 0), 0);
    esp6.flashcardsCount = esp6.blocks.reduce((acc, b) => acc + (b.flashcards?.length || 0), 0);
  }

  // Update esp_7, esp_8, esp_9 editalRef and titles for 100% syllabus clarity
  const esp7 = data.lessons.find(l => l.id === 'esp_7');
  if (esp7) {
    esp7.title =
      '7. Conhecimentos Básicos das Endemias I — Arboviroses (Dengue, Febre Amarela, Chikungunya e Zika Vírus: Agente, Reservatório, Hospedeiro, Transmissão, Sintomas e Controle) e LIRAa (Imóveis, Depósitos A1–E, IIP e IB)';
    esp7.editalRef =
      'Conhecimentos Básicos: Dengue, Febre Amarela, Chikungunya, Zika Vírus. Doenças contagiosas: agente etiológico, reservatório, hospedeiro, de modo de transmissão, sintomas e medidas de controle.';
  }

  const esp8 = data.lessons.find(l => l.id === 'esp_8');
  if (esp8) {
    esp8.title =
      '8. Conhecimentos Básicos das Endemias II — Protozooses na Amazônia (Malária, Doença de Chagas e Leishmaniose: Tegumentar e Visceral — Agente, Reservatório, Hospedeiro, Transmissão, Sintomas e Controle)';
    esp8.editalRef =
      'Conhecimentos Básicos: Doença de Chagas, Leishmaniose: Tegumentar e Visceral e Malária. Doenças contagiosas: agente etiológico, reservatório, hospedeiro, de modo de transmissão, sintomas e medidas de controle.';
  }

  const esp9 = data.lessons.find(l => l.id === 'esp_9');
  if (esp9) {
    esp9.title =
      '9. Conhecimentos Básicos das Endemias III — Raiva, Esquistossomose, Febre Maculosa, Leptospirose (3 Roedores e Antirratização), Influenza, COVID-19 e Animais Peçonhentos (Agente, Reservatório, Hospedeiro, Transmissão, Sintomas e Controle)';
    esp9.editalRef =
      'Conhecimentos Básicos: Raiva, Esquistossomose, Febre Maculosa, Influenza, Leptospirose, COVID-19. Doenças contagiosas: agente etiológico, reservatório, hospedeiro, de modo de transmissão, sintomas e medidas de controle.';
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Updated JSON:', filePath);

  // Also update corresponding .js files
  for (const jsPath of jsFilesToUpdate) {
    const jsContent = `window.APP_DATA = ${JSON.stringify(data)};\nwindow.LOCAL_APP_DATA = window.APP_DATA;\n`;
    fs.writeFileSync(jsPath, jsContent, 'utf8');
    console.log('Updated JS:', jsPath);
  }
}
