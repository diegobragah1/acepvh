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

// New deep-dive Block for esp_5 (Política Nacional de Atenção Básica)
const newBlock_PNAB_Operacional = {
  title:
    'Bloco 5.2 — Processo de Trabalho na PNAB (Portaria nº 2.436/2017): Territorialização, Adscrição, Atribuições Comuns e Específicas dos Agentes (ACS e ACE) e Integração Atenção Básica–Vigilância',
  modoA: `<div class="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
  <div class="bg-teal-900 text-white p-3.5 rounded-xl border border-teal-700">
    <span class="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">Detalhamento Operacional da Portaria GM/MS nº 2.436/2017 (PNAB)</span>
    <h4 class="text-sm sm:text-base font-extrabold mt-0.5">Territorialização, Microárea, Atribuições Comuns e Integração Obrigatória ACE + ACS</h4>
    <p class="text-xs text-teal-100 mt-1">Síntese completa dos Anexos da Portaria de Consolidação nº 2/2017 (Origem: Portaria GM/MS nº 2.436/2017) com foco nas atribuições dos Agentes na Atenção Básica.</p>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">1. Conceito de Atenção Básica, Proibição de Exclusão e Diretrizes Operacionais</h5>
  <ul class="list-disc pl-5 space-y-1.5">
    <li><strong>Definição Oficial (Art. 2º da PNAB):</strong> A Atenção Básica é o conjunto de ações de saúde individuais, familiares e coletivas que envolvem <strong>promoção, prevenção, proteção, diagnóstico, tratamento, reabilitação, redução de danos, cuidados paliativos e vigilância em saúde</strong>, desenvolvida por meio de práticas de cuidado integrado e gestão qualificada, realizada com equipe multiprofissional e dirigida à população em <strong>território definido</strong>, sobre as quais as equipes assumem <strong>responsabilidade sanitária</strong>.</li>
    <li><strong>Porta de Entrada Preferencial e Ordenadora da RAS:</strong> A Atenção Básica é a <strong>principal porta de entrada</strong> e centro de comunicação da Rede de Atenção à Saúde (RAS), coordenando o cuidado e ordenando os fluxos e contrafluxos de usuários na rede.</li>
    <li><strong>Proibição de Restrição de Acesso (Art. 2º, § 1º):</strong> É <strong>proibida qualquer exclusão</strong> baseada em idade, gênero, raça/cor, etnia, crença, condição socioeconômica, orientação sexual, identidade de gênero ou estado de saúde.</li>
    <li><strong>Padrões Essenciais vs. Padrões Ampliados:</strong>
      <ul class="list-disc pl-5 mt-1 space-y-1">
        <li><strong>Padrões Essenciais:</strong> Ações e procedimentos básicos relacionados a condições básicas/essenciais de acesso e qualidade que <strong>todas as equipes de AB do Brasil</strong> devem ofertar obrigatoriamente;</li>
        <li><strong>Padrões Ampliados:</strong> Ações e procedimentos estratégicos recomendados para avançar na qualidade do cuidado conforme as especificidades locorregionais (como áreas endêmicas de Malária e Arboviroses na Amazônia).</li>
      </ul>
    </li>
  </ul>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">2. Parâmetros de População Adscrita, Microárea, UBS e Carga Horária na PNAB 2017</h5>
  <div class="overflow-x-auto my-2">
    <table class="min-w-full text-xs border border-slate-300 rounded-lg overflow-hidden">
      <thead class="bg-slate-800 text-white">
        <tr>
          <th class="p-2 border border-slate-300 text-left">Parâmetro da PNAB (Portaria 2.436/2017)</th>
          <th class="p-2 border border-slate-300 text-left">Regra Oficial / Número Exato</th>
          <th class="p-2 border border-slate-300 text-left">Pegadinha Clássica de Prova (IBGP)</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 bg-white">
        <tr>
          <td class="p-2 font-bold text-teal-900">População Adscrita por Equipe (eSF / eAB)</td>
          <td class="p-2"><strong>2.000 a 3.500 pessoas</strong> por equipe, localizada dentro do seu território.</td>
          <td class="p-2">Na PNAB antiga (2011) o teto era 4.000 pessoas. Na PNAB 2017 vigente, a faixa padrão é de <strong>2.000 a 3.500 pessoas</strong> (podendo ser menor em áreas rurais/vulneráveis).</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">População por Microárea (ACS)</td>
          <td class="p-2">No máximo <strong>750 pessoas</strong> por Agente Comunitário de Saúde (ACS).</td>
          <td class="p-2">A banca troca 750 por 500 ou 1.000 pessoas. O limite máximo por ACS na microárea é <strong>750 pessoas</strong>.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Máximo de Equipes por UBS</td>
          <td class="p-2">Recomenda-se no máximo <strong>4 equipes por UBS</strong> (atingindo no máximo 14.000 pessoas).</td>
          <td class="p-2">Garante vínculo e evita superlotação da Unidade Básica de Saúde.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Composição Mínima da eSF (Saúde da Família)</td>
          <td class="p-2">1 Médico + 1 Enfermeiro + 1 Auxiliar/Técnico de Enfermagem + <strong>ACS</strong> (podendo integrar <strong>ACE</strong> e equipe de Saúde Bucal).</td>
          <td class="p-2">Na eSF, todos os profissionais cumprem <strong>40 horas semanais</strong>. O número de ACS por equipe é definido conforme a base populacional (não há mais mínimo fixo de 4 ACS se a população for pequena, mas deve cobrir 100% da população cadastrada da microárea).</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Prazo para Implantação após Credenciamento</td>
          <td class="p-2">O gestor municipal tem até <strong>4 meses (prorrogáveis por mais 2 meses)</strong> após publicação da portaria de credenciamento para cadastrar e implantar a equipe no SCNES.</td>
          <td class="p-2">Atenção ao prazo: 4 meses + 2 meses de prorrogação.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">3. Atribuições Comuns entre ACS e ACE na PNAB 2017 (Integração Territorial)</h5>
  <p>A Portaria nº 2.436/2017 unificou a base territorial de atuação da Atenção Básica e da Vigilância em Saúde, estabelecendo <strong>atribuições comuns ao ACS e ao ACE</strong>:</p>
  <ol class="list-decimal pl-5 space-y-1">
    <li>Realizar diagnóstico demográfico, social, cultural, ambiental, epidemiológico e sanitário do território em que atuam, contribuindo para o processo de <strong>territorialização e mapeamento da área de atuação da equipe</strong>;</li>
    <li>Desenvolver atividades de promoção da saúde, de prevenção de doenças e agravos, em especial aqueles mais prevalentes no território, por meio de <strong>visitas domiciliares regulares e de ações educativas individuais e coletivas</strong>;</li>
    <li>Realizar visitas domiciliares com periodicidade estabelecida no planejamento da equipe e conforme as necessidades de saúde da população, para o monitoramento da situação das famílias e indivíduos, com <strong>especial atenção às pessoas com agravos e condições que necessitem de acompanhamento mais frequente</strong>;</li>
    <li>Identificar e registrar situações que interfiram no curso das doenças ou que tenham importância epidemiológica relacionada aos fatores ambientais, realizando, quando necessário, <strong>bloqueio de transmissão de doenças infecciosas e agravos</strong>;</li>
    <li>Orientar a comunidade sobre sintomas, riscos e agentes transmissores de doenças e medidas de prevenção individual e coletiva;</li>
    <li>Mobilizar a comunidade para desenvolver medidas simples de manejo ambiental e outras formas de intervenção no ambiente para o controle de vetores;</li>
    <li>Conhecer o funcionamento das ações e serviços do seu território e orientar as pessoas quanto à utilização dos serviços de saúde disponíveis;</li>
    <li>Estimular a participação da comunidade nas políticas públicas voltadas para a área de saúde e socioeducacional;</li>
    <li>Identificar parceiros e recursos na comunidade que possam potencializar ações intersetoriais;</li>
    <li>Exercer outras atribuições que lhes sejam atribuídas por legislação específica da categoria (Lei nº 11.350/2006 e Lei nº 13.595/2018).</li>
  </ol>
</div>`,
  modoB: `<ul class="list-disc pl-4 space-y-1 text-xs">
  <li><strong>PNAB 2017 (Portaria nº 2.436/2017):</strong> Atenção Básica = porta de entrada preferencial, coordenadora do cuidado e ordenadora da RAS, incluindo expressamente os <strong>cuidados paliativos</strong> e a <strong>vigilância em saúde</strong>.</li>
  <li><strong>População adscrita por eSF/eAB:</strong> <strong>2.000 a 3.500 pessoas</strong>. Máximo por ACS na microárea: <strong>750 pessoas</strong>.</li>
  <li><strong>Integração ACE + ACS:</strong> Base territorial única, planejamento conjunto na UBS, reuniões de equipe unificadas e 10 atribuições comuns na visita domiciliar e mobilização comunitária.</li>
</ul>`,
  traps: [
    '❌ Mito/Pegadinha: "A PNAB 2017 não inclui cuidados paliativos nem vigilância em saúde no conceito de Atenção Básica." — ✅ CORRETO: A Portaria nº 2.436/2017 incluiu expressamente os cuidados paliativos e a vigilância em saúde nas ações da Atenção Básica (Art. 2º).',
    '❌ Mito/Pegadinha: "Cada equipe de Saúde da Família deve atender até 4.500 pessoas e cada ACS até 1.000 pessoas." — ✅ CORRETO: Pela PNAB 2017, a população adscrita por equipe é de 2.000 a 3.500 pessoas, e cada ACS acompanha no máximo 750 pessoas.',
  ],
  questions: [
    {
      q: '(IBGP — Perfil SEMUSA PVH) De acordo com a Política Nacional de Atenção Básica (Portaria GM/MS nº 2.436/2017), assinale a alternativa CORRETA acerca da organização territorial, equipes e integração com o Agente de Combate às Endemias (ACE):',
      options: [
        'A) A população adscrita recomendada por equipe de Atenção Básica (eAB) e de Saúde da Família (eSF) é de 2.000 a 3.500 pessoas, e o número máximo de pessoas por Agente Comunitário de Saúde (ACS) é de 750 pessoas.',
        'B) A Atenção Básica restringe-se às ações de promoção e prevenção primária, sendo vedada a realização de cuidados paliativos e de ações de vigilância em saúde nas Unidades Básicas de Saúde.',
        'C) O Agente de Combate às Endemias (ACE) e o Agente Comunitário de Saúde (ACS) devem atuar em bases territoriais distintas e independentes, sem compartilhamento de mapas ou reuniões de equipe.',
        'D) A carga horária semanal obrigatória do ACE integrado à equipe de Atenção Básica é de 20 horas semanais.',
      ],
      ans: 0,
      comment:
        'Gabarito: A. Conforme o Anexo da Portaria nº 2.436/2017 (PNAB), a população adscrita por eSF/eAB é de 2.000 a 3.500 pessoas e cada ACS cobre até 750 pessoas. A PNAB inclui cuidados paliativos e vigilância em saúde (erro da B), determina base territorial única entre ACE e ACS (erro da C) e jornada de 40h semanais (erro da D).',
    },
    {
      q: '(IBGP — Perfil ACE) Segundo a Portaria Federal nº 2.436/2017 (PNAB), constituem atribuições COMUNS ao Agente Comunitário de Saúde (ACS) e ao Agente de Combate às Endemias (ACE), EXCETO:',
      options: [
        'A) Realizar diagnóstico demográfico, social, cultural, ambiental, epidemiológico e sanitário do território em que atuam, contribuindo para o processo de territorialização.',
        'B) Orientar a comunidade sobre sintomas, riscos e agentes transmissores de doenças e medidas de prevenção individual e coletiva.',
        'C) Mobilizar a comunidade para desenvolver medidas simples de manejo ambiental e outras formas de intervenção no ambiente para o controle de vetores.',
        'D) Prescrever antimicrobianos e solicitar exames laboratoriais e radiológicos de alta complexidade durante as visitas domiciliares.',
      ],
      ans: 3,
      comment:
        'Gabarito: D. Prescrição de medicamentos e solicitação de exames são atos privativos de profissionais médicos ou de enfermagem (conforme protocolos), jamais sendo atribuição de ACS ou ACE.',
    },
    {
      q: '(IBGP — Perfil ACE) A Portaria GM/MS nº 2.436/2017 classifica as ações e procedimentos ofertados pelas equipes de Atenção Básica em dois padrões distintos. Aquele que corresponde às ações e procedimentos básicos relacionados a condições essenciais de acesso e qualidade que todas as equipes devem ofertar denomina-se:',
      options: [
        'A) Padrão Terciário Hospitalocêntrico.',
        'B) Padrão Essencial.',
        'C) Padrão Facultativo Privado.',
        'D) Padrão Especial de Alta Complexidade.',
      ],
      ans: 1,
      comment:
        'Gabarito: B. A PNAB 2017 divide a carteira de serviços em Padrões Essenciais (obrigatórios em todas as UBS do país) e Padrões Ampliados (estratégicos conforme o perfil epidemiológico local).',
    },
  ],
  flashcards: [
    {
      f: 'PNAB 2017 (Portaria nº 2.436/2017): Qual é a população adscrita recomendada por equipe (eSF/eAB) e o limite máximo por ACS?',
      b: 'População adscrita por equipe (eSF/eAB): 2.000 a 3.500 pessoas. Limite máximo por ACS: até 750 pessoas.',
    },
    {
      f: 'PNAB 2017: Quais duas ações importantes foram expressamente incorporadas ao conceito de Atenção Básica no Art. 2º?',
      b: 'Cuidados paliativos e Vigilância em Saúde (além de promoção, prevenção, proteção, diagnóstico, tratamento, reabilitação e redução de danos).',
    },
    {
      f: 'PNAB 2017: Como deve ser a base territorial entre a equipe de Atenção Básica (ACS) e a Vigilância em Saúde (ACE)?',
      b: 'Deve haver base territorial única (territorialização conjunta), planejamento integrado, compartilhamento de informações e reuniões conjuntas de equipe.',
    },
  ],
};

// New deep-dive Block for esp_6 (História e Evolução da Profissão de ACE)
const newBlock_HistoriaACE_Amazonia = {
  title:
    'Bloco 6.3 — Linha do Tempo Analítica dos Órgãos de Controle de Endemias no Brasil e na Amazônia (EFMM, SESP, DNERu, SUCAM, FUNASA e SEMUSA) e Formação Técnica (Saúde com Agente)',
  modoA: `<div class="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
  <div class="bg-teal-900 text-white p-3.5 rounded-xl border border-teal-700">
    <span class="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">Aprofundamento Histórico Regional e Nacional</span>
    <h4 class="text-sm sm:text-base font-extrabold mt-0.5">Do Controle da Malária na Estrada de Ferro Madeira-Mamoré (Porto Velho, 1910) ao Programa Mais Saúde com Agente</h4>
    <p class="text-xs text-teal-100 mt-1">Conexão histórica entre a evolução da profissão de ACE no Brasil e a formação sanitária de Porto Velho e Rondônia.</p>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">1. O Berço Amazônico da Profissão: Oswaldo Cruz e Carlos Chagas em Porto Velho (1910–1913)</h5>
  <p>Para o concurso da <strong>SEMUSA Porto Velho</strong>, a história da profissão de Agente de Combate às Endemias possui um vínculo direto com a própria fundação do município:</p>
  <ul class="list-disc pl-5 space-y-1.5">
    <li><strong>Missão de Oswaldo Cruz à Estrada de Ferro Madeira-Mamoré (Julho de 1910):</strong> Contratado pela <em>Madeira-Mamoré Railway Company</em> (Percival Farquhar) diante da altíssima mortalidade por malária ("impaludismo"), ancilostomíase e beribéri entre os operários no Hospital da Candelária, Oswaldo Cruz permaneceu em Porto Velho e Santo Antônio do Madeira em 1910. Elaborou o clássico relatório <em>"Considerações Gerais sobre as Condições Sanitárias do Rio Madeira"</em>, implantando a <strong>quinização profilática obrigatória, o telamento dos alojamentos e o saneamento de criadouros de anofelinos</strong> — medidas executadas por guardas sanitários de campo.</li>
    <li><strong>Expedição de Carlos Chagas ao Vale do Amazonas (1912–1913):</strong> Comissionado pela Superintendência da Defesa da Borracha, Carlos Chagas percorreu os rios da Amazônia (incluindo o Rio Madeira), mapeando a cadeia epidemiológica da malária e das endemias rurais.</li>
    <li><strong>O SESP (Serviço Especial de Saúde Pública — 1942):</strong> Criado durante a Segunda Guerra Mundial (Acordos de Washington e "Soldados da Borracha"), o SESP introduziu na Amazônia o <strong>modelo de educação sanitária domiciliar, saneamento básico rural (fossas e abastecimento de água) e controle sistemático da malária com visitadores sanitários e guardas de endemias</strong>.</li>
  </ul>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">2. A Transição Institucional dos Órgãos Federais de Endemias (1956 → 1970 → 1991 → 1999 → 2003)</h5>
  <div class="overflow-x-auto my-2">
    <table class="min-w-full text-xs border border-slate-300 rounded-lg overflow-hidden">
      <thead class="bg-slate-800 text-white">
        <tr>
          <th class="p-2 border border-slate-300 text-left">Ano / Norma</th>
          <th class="p-2 border border-slate-300 text-left">Órgão / Sigla</th>
          <th class="p-2 border border-slate-300 text-left">Origem e Papel na História do ACE</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 bg-white">
        <tr>
          <td class="p-2 font-bold text-teal-900">1956 (Lei 2.743/56)</td>
          <td class="p-2"><strong>DNERu</strong></td>
          <td class="p-2"><strong>Departamento Nacional de Endemias Rurais:</strong> Reuniu os Serviços Nacionais de Febre Amarela (SNFA), Malária (SNM) e Peste (SNP). Popularizou o método Pinotti (sal cloroquinado) e o uso de inseticidas de ação residual no domicílio.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">1970 (Dec. 66.623/70)</td>
          <td class="p-2"><strong>SUCAM</strong></td>
          <td class="p-2"><strong>Superintendência de Campanhas de Saúde Pública:</strong> Nasceu da fusão de 3 estruturas: <strong>DNERu + CEM (Campanha de Erradicação da Malária) + CEV (Campanha de Erradicação da Varíola)</strong>. Seus agentes ficaram consagrados na memória popular brasileira como os <em>"Guardas da SUCAM"</em> ou <em>"Mata-Mosquitos"</em>, fundamentais no controle da explosão de malária durante a colonização de Rondônia (BR-364) nos anos 1970 e 1980.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">1991 (Dec. 100/91)</td>
          <td class="p-2"><strong>FUNASA</strong></td>
          <td class="p-2"><strong>Fundação Nacional de Saúde:</strong> Nasceu da fusão da <strong>SUCAM + Fundação SESP (FSESP)</strong> após a criação do SUS (Lei 8.080/1990), assumindo inicialmente a coordenação nacional da epidemiologia, controle de endemias e saúde indígena.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">1999 (Portaria MS 1.399/99)</td>
          <td class="p-2"><strong>Descentralização (PPI-ECD)</strong></td>
          <td class="p-2">Regulamentou a NOB-SUS 01/96 na área de epidemiologia e controle de doenças, transferindo a execução direta das ações de campo e o financiamento (TFVS) para os <strong>Estados e Municípios certificados</strong>.</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">2003 (Dec. 4.726/03)</td>
          <td class="p-2"><strong>SVS/MS (hoje SVSA/MS)</strong></td>
          <td class="p-2">Criação da <strong>Secretaria de Vigilância em Saúde do Ministério da Saúde</strong> (atual Secretaria de Vigilância em Saúde e Ambiente — SVSA/MS), que absorveu do CENEPI/FUNASA a gestão nacional da vigilância epidemiológica, ambiental e controle de endemias.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">3. Comparativo Histórico: Paradigma Campanhista (SUCAM) vs. Paradigma da Vigilância em Saúde no SUS (ACE Atual)</h5>
  <ul class="list-disc pl-5 space-y-1.5">
    <li><strong>Modelo Campanhista Antigo (DNERu / SUCAM):</strong> Verticalizado (decisões tomadas em Brasília sem participação municipal), fragmentado por doença isolada, focado predominantemente no <strong>controle químico (inseticidas)</strong>, temporário/campanhista e <strong>desarticulado da atenção primária</strong>.</li>
    <li><strong>Modelo Atual da Vigilância em Saúde no SUS (ACE — Lei 11.350/06, Lei 13.595/18 e PNVS 588/18):</strong> <strong>Descentralizado (municipalizado)</strong>, horizontal, contínuo e permanente, fundamentado no <strong>Manejo Integrado de Vetores (priorizando o controle mecânico e a educação em saúde sobre o controle químico)</strong>, com <strong>base territorial única e integração obrigatória com a Equipe de Saúde da Família (ACS + ACE)</strong> e participação social.</li>
  </ul>
</div>`,
  modoB: `<ul class="list-disc pl-4 space-y-1 text-xs">
  <li><strong>Fusões Históricas que caem na prova:</strong> (1) <strong>SUCAM (1970)</strong> = DNERu + CEM (Malária) + CEV (Varíola); (2) <strong>FUNASA (1991)</strong> = SUCAM + Fundação SESP; (3) <strong>SVS/SVSA (2003)</strong> = assumiu a gestão nacional de vigilância em saúde do MS.</li>
  <li><strong>Portaria GM/MS nº 1.399/1999:</strong> Marco da descentralização das ações de epidemiologia e controle de doenças (PPI-ECD) da FUNASA para Estados e Municípios.</li>
  <li><strong>Mudança de Paradigma:</strong> Do modelo verticalizado/químico (SUCAM) para o modelo descentralizado, territorializado, educativo e integrado à Atenção Básica (ACE no SUS).</li>
</ul>`,
  traps: [
    '❌ Mito/Pegadinha: "A FUNASA foi criada em 1970 pela fusão do INAMPS com o DNERu." — ✅ CORRETO: Em 1970 foi criada a SUCAM (fusão do DNERu + CEM + CEV). A FUNASA foi criada em 1991 pela fusão da SUCAM com a Fundação SESP.',
    '❌ Mito/Pegadinha: "O modelo atual de atuação do ACE no SUS mantém a característica verticalizada, centralizada na União e desvinculada das Unidades Básicas de Saúde." — ✅ CORRETO: O modelo atual do ACE no SUS é descentralizado (municipalizado), permanente e integrado territorialmente às equipes de Atenção Básica (ACS + ACE).',
  ],
  questions: [
    {
      q: '(IBGP — Perfil ACE) Na evolução histórica das instituições de controle de endemias no Brasil, a Superintendência de Campanhas de Saúde Pública (SUCAM), criada em 1970, e a Fundação Nacional de Saúde (FUNASA), instituída em 1991, resultaram, respectivamente, da fusão de quais estruturas governamentais?',
      options: [
        'A) SUCAM: fusão do DNERu, da Campanha de Erradicação da Malária (CEM) e da Campanha de Erradicação da Varíola (CEV); FUNASA: fusão da SUCAM com a Fundação SESP (FSESP).',
        'B) SUCAM: fusão do INAMPS com a ANVISA; FUNASA: fusão do Ministério da Saúde com as Secretarias Municipais.',
        'C) SUCAM: fusão das Caixas de Aposentadorias e Pensões (CAPs); FUNASA: fusão dos Institutos de Aposentadoria e Pensões (IAPs).',
        'D) SUCAM: fusão da FIOCRUZ com o Instituto Butantan; FUNASA: fusão do CONASS com o CONASEMS.',
      ],
      ans: 0,
      comment:
        'Gabarito: A. Em 1970 (Decreto nº 66.623/1970), o DNERu, a CEM e a CEV foram fundidos na SUCAM. Em 1991 (Decreto nº 100/1991), a SUCAM e a Fundação SESP (FSESP) foram fundidas na FUNASA.',
    },
    {
      q: '(IBGP — Perfil ACE) Comparando-se o antigo modelo sanitarista-campanhista (vigente na época do DNERu e da SUCAM) com o atual modelo de atuação do Agente de Combate às Endemias (ACE) no Sistema Único de Saúde (SUS), é CORRETO afirmar que:',
      options: [
        'A) O modelo atual preserva o caráter estritamente federal, militarizado e isolado das equipes de Saúde da Família.',
        'B) O modelo atual substituiu as ações verticalizadas e centradas apenas em inseticidas por uma vigilância descentralizada (municipalizada), contínua, baseada no território, na educação em saúde e na integração com a Atenção Básica.',
        'C) No modelo atual do SUS, o ACE deixou de realizar vistorias domiciliares, atuando exclusivamente dentro de hospitais regionais.',
        'D) A descentralização das ações de controle de endemias para os municípios foi proibida pela Emenda Constitucional nº 51/2006.',
      ],
      ans: 1,
      comment:
        'Gabarito: B. A evolução histórica da profissão de ACE marcou a transição do modelo campanhista verticalizado (SUCAM) para a Vigilância em Saúde descentralizada, territorializada, educativa e integrada à Atenção Básica no SUS.',
    },
    {
      q: '(IBGP — Perfil SEMUSA PVH) Em 1910, durante a construção da Estrada de Ferro Madeira-Mamoré em Porto Velho, o sanitarista brasileiro contratado para diagnosticar a crise sanitária regional e implantar medidas pioneiras de controle da malária (quinização profilática e telamento contra anofelinos) foi:',
      options: [
        'A) Eloy Chaves.',
        'B) Oswaldo Cruz.',
        'C) Vital Brazil.',
        'D) Adolpho Lutz.',
      ],
      ans: 1,
      comment:
        'Gabarito: B. Oswaldo Cruz esteve em Porto Velho e Santo Antônio do Madeira em julho de 1910, produzindo o histórico relatório sobre as condições sanitárias do Rio Madeira e implantando o protocolo de controle da malária na EFMM.',
    },
  ],
  flashcards: [
    {
      f: 'História do ACE: De quais órgãos nasceu a SUCAM em 1970 e de quais órgãos nasceu a FUNASA em 1991?',
      b: 'SUCAM (1970) = DNERu + CEM (Malária) + CEV (Varíola). FUNASA (1991) = SUCAM + Fundação SESP (FSESP).',
    },
    {
      f: 'História do ACE: Qual portaria de 1999 marcou a descentralização das ações de controle de endemias da FUNASA para Estados e Municípios?',
      b: 'A Portaria Ministerial GM/MS nº 1.399, de 15 de dezembro de 1999 (regulamentou a PPI-ECD e o Teto Financeiro de Vigilância em Saúde).',
    },
    {
      f: 'História do ACE em Porto Velho: Qual sanitarista esteve na Estrada de Ferro Madeira-Mamoré em 1910 para combater a malária?',
      b: 'Oswaldo Cruz (autor do relatório "Considerações Gerais sobre as Condições Sanitárias do Rio Madeira", 1910).',
    },
  ],
};

// New deep-dive Block 10.2 for esp_10 (Doenças contagiosas: agente etiológico, reservatório, hospedeiro, de modo de transmissão, sintomas e medidas de controle)
const newBlock_DoencasContagiosas_Elos = {
  title:
    'Bloco 10.2 — Aprofundamento Teórico dos 6 Elementos das Doenças Contagiosas: Propriedades do Agente Etiológico, Tipos de Reservatório/Portador, Hospedeiros, Modos de Transmissão, Períodos Clínicos e Medidas de Controle',
  modoA: `<div class="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
  <div class="bg-teal-900 text-white p-3.5 rounded-xl border border-teal-700">
    <span class="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">Item 10 da Pauta de Conhecimentos Específicos — Teoria Epidemiológica Completa</span>
    <h4 class="text-sm sm:text-base font-extrabold mt-0.5">Destrinchando Cada Elemento do Edital: Agente Etiológico, Reservatório, Hospedeiro, Modo de Transmissão, Sintomas e Medidas de Controle</h4>
    <p class="text-xs text-teal-100 mt-1">Definições conceituais do Guia de Vigilância em Saúde (MS) e exemplos práticos cobrados pela banca IBGP.</p>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">1. Diferenciação Conceitual: Infecção vs. Doença Infecciosa vs. Doença Transmissível vs. Doença Contagiosa vs. Infestação</h5>
  <ul class="list-disc pl-5 space-y-1.5">
    <li><strong>Infecção:</strong> Penetração, alojamento e, geralmente, multiplicação de um <strong>agente etiológico microbiano</strong> (vírus, bactéria, protozoário, fungo ou helminto) no organismo de um hospedeiro, <strong>com ou sem manifestação de sintomas</strong> (pode ser infecção inaparente/assintomática ou aparente/clínica).</li>
    <li><strong>Infestação:</strong> Alojamento, desenvolvimento e reprodução de <strong>artrópodes ou ectoparasitas</strong> na superfície do corpo (ex.: piolhos/pediculose, sarna/escabiose, carrapatos) ou presença de vetores/roedores em um imóvel ou ambiente (ex.: infestação predial por <em>Aedes aegypti</em> medida pelo IIP).</li>
    <li><strong>Contaminação:</strong> Presença de agentes infecciosos (ou substâncias químicas/radioativas) em <strong>superfícies inanimadas</strong> (água, alimentos, roupas, objetos/fômites, instrumentos cirúrgicos, solo) ou na superfície íntegra da pele sem invasão tecidual.</li>
    <li><strong>Doença Transmissível:</strong> Qualquer doença causada por um agente infeccioso específico (ou suas toxinas) que se manifesta pela transmissão desse agente ou de seus produtos, de uma pessoa ou animal infectado, ou de um reservatório, para um <strong>hospedeiro suscetível</strong> (direta ou indiretamente).</li>
    <li><strong>Doença Contagiosa (Sentido Estrito e Amplo em Provas):</strong> Em sentido estrito, refere-se às doenças transmissíveis propagadas por <strong>contato direto ou proximidade imediata</strong> entre o doente e o suscetível (ex.: Influenza, COVID-19, Sarampo, Hanseníase, Raiva por mordedura). No edital do ACE, o tópico <em>"Doenças contagiosas: agente etiológico, reservatório, hospedeiro, de modo de transmissão, sintomas e medidas de controle"</em> abrange a <strong>cadeia epidemiológica completa de todas as doenças transmissíveis do programa</strong> (tanto as de contágio direto quanto as transmitidas por vetores e veículos ambientais).</li>
  </ul>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">2. Tipos de Fontes de Infecção, Reservatórios e Portadores</h5>
  <div class="overflow-x-auto my-2">
    <table class="min-w-full text-xs border border-slate-300 rounded-lg overflow-hidden">
      <thead class="bg-slate-800 text-white">
        <tr>
          <th class="p-2 border border-slate-300 text-left">Conceito Epidemiológico</th>
          <th class="p-2 border border-slate-300 text-left">Definição Técnica Exata</th>
          <th class="p-2 border border-slate-300 text-left">Exemplos nas 14 Doenças do Edital</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 bg-white">
        <tr>
          <td class="p-2 font-bold text-teal-900">Reservatório</td>
          <td class="p-2">Qualquer ser humano, animal, artrópode, planta, solo ou matéria nos quais um agente etiológico <strong>normalmente vive e se multiplica</strong>, dependendo dele para sua sobrevivência na natureza.</td>
          <td class="p-2"><strong>Homem:</strong> Dengue, Malária, Esquistossomose.<br/><strong>Cão doméstico:</strong> LV (urbano).<br/><strong>Ratazana (R. norvegicus):</strong> Leptospirose.<br/><strong>Carrapato-estrela / Capivara:</strong> Febre Maculosa.<br/><strong>PNH (Macacos):</strong> Febre Amarela Silvestre (hospedeiros amplificadores).</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Portador Assintomático (ou Passivo/São)</td>
          <td class="p-2">Indivíduo infectado que <strong>alberga e elimina o agente etiológico sem apresentar sintomas clínicos</strong> em nenhum momento da infecção.</td>
          <td class="p-2">Cerca de 70% a 80% das infecções pelo vírus Zika ou Dengue são oligosintomáticas/assintomáticas, mas o indivíduo com viremia pode infectar o <em>Aedes aegypti</em>!</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Portador em Incubação (Precoce)</td>
          <td class="p-2">Indivíduo que já elimina o agente infeccioso <strong>antes do aparecimento dos primeiros sintomas clínicos</strong>.</td>
          <td class="p-2"><strong>COVID-19 e Influenza:</strong> A transmissão começa de 1 a 2 dias <strong>antes</strong> do início dos sintomas. Na <strong>Raiva canina/felina</strong>, o vírus pode estar na saliva alguns dias antes dos sinais neurológicos (por isso observa-se o animal por 10 dias!).</td>
        </tr>
        <tr>
          <td class="p-2 font-bold text-teal-900">Portador Convalescente</td>
          <td class="p-2">Indivíduo que já se recuperou clinicamente dos sintomas agudos, mas <strong>continua eliminando o agente etiológico</strong> por determinado período.</td>
          <td class="p-2">Na <strong>Leptospirose</strong> (leptospirúria prolongada) e no <strong>Zika Vírus</strong> (persistência viral no sêmen por semanas após a cura clínica).</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">3. Classificação Detalhada dos Modos de Transmissão e dos Vetores</h5>
  <ul class="list-disc pl-5 space-y-1.5">
    <li><strong>Transmissão Horizontal vs. Transmissão Vertical:</strong>
      <ul class="list-disc pl-5 mt-1 space-y-1">
        <li><strong>Horizontal:</strong> Ocorre entre indivíduos da população (por contato direto, gotículas, água, alimentos ou vetores);</li>
        <li><strong>Vertical (Materno-Fetal / Congênita / Perinatal):</strong> Ocorre da gestante para o concepto (via transplacentária, no canal de parto ou amamentação). Exemplos críticos no edital: <strong>Zika Vírus</strong> (Síndrome Congênita do Zika / microcefalia), <strong>Doença de Chagas</strong> (transmissão congênita) e <strong>Chikungunya</strong> (transmissão perinatal intraparto).</li>
      </ul>
    </li>
    <li><strong>Vetor Biológico Propagativo vs. Ciclo-Propagativo vs. Ciclo-Evolutivo:</strong>
      <ul class="list-disc pl-5 mt-1 space-y-1">
        <li><strong>No Vetor Mecânico (ex.: mosca doméstica, barata):</strong> O agente apenas é transportado nas patas/probóscide, <strong>sem multiplicação nem mudança de fase</strong> no inseto;</li>
        <li><strong>No Vetor Biológico (ex.: <em>Aedes aegypti</em>, <em>Anopheles darlingi</em>, <em>Triatoma infestans</em>, <em>Lutzomyia longipalpis</em>, <em>Amblyomma sculptum</em>):</strong> O agente obrigatoriamente se multiplica e/ou cumpre ciclo evolutivo dentro do artrópode durante o <strong>Período de Incubação Extrínseco (PIE)</strong> (que dura em média 8 a 12 dias na Dengue).</li>
      </ul>
    </li>
    <li><strong>Transmissão Transovariana (Transestadial) no Vetor:</strong> Fenômeno em que a fêmea infectada do vetor transmite o agente etiológico diretamente para seus ovos e larvas (sua prole já nasce infectada!). Ocorre no <strong><em>Aedes aegypti</em> (vírus da Dengue)</strong> e de forma importantíssima no <strong>carrapato-estrela <em>Amblyomma sculptum</em> (bactéria <em>Rickettsia rickettsii</em> da Febre Maculosa)</strong>, razão pela qual o próprio carrapato funciona como vetor e reservatório!</li>
  </ul>
</div>`,
  modoB: `<ul class="list-disc pl-4 space-y-1 text-xs">
  <li><strong>Infecção vs. Infestação vs. Contaminação:</strong> Infecção = invasão/multiplicação de microrganismo no hospedeiro; Infestação = ectoparasitas no corpo ou vetores no ambiente; Contaminação = presença de agente em objeto inanimado (fômite, água, alimento).</li>
  <li><strong>Portadores:</strong> Assintomático (nunca tem sintomas), Em Incubação (transmite antes dos sintomas: COVID-19, Influenza, Raiva nos dias prévios) e Convalescente (transmite após a cura clínica: Zika no sêmen).</li>
  <li><strong>Transmissão Vertical no Edital:</strong> Zika Vírus (microcefalia/SCZ), Doença de Chagas e Chikungunya.</li>
  <li><strong>Transmissão Transovariana no Vetor:</strong> A fêmea passa o bioagente aos ovos (ocorre no <em>Aedes aegypti</em> e no carrapato <em>Amblyomma sculptum</em> na Febre Maculosa).</li>
</ul>`,
  traps: [
    '❌ Mito/Pegadinha: "Contaminação e infecção são sinônimos exatos: diz-se que a água de uma caixa d’água está infectada e o paciente está contaminado." — ✅ CORRETO: Tecnicamente, seres vivos sofrem INFECÇÃO (por microrganismos) ou INFESTAÇÃO (por ectoparasitas), enquanto objetos inanimados, água e alimentos sofrem CONTAMINAÇÃO.',
    '❌ Mito/Pegadinha: "O portador em incubação não transmite doenças, pois a transmissibilidade só se inicia após a febre." — ✅ CORRETO: O portador em incubação já elimina o agente antes dos sintomas (ex.: Influenza, COVID-19 e Raiva canina nos dias que antecedem os sinais clínicos).',
  ],
  questions: [
    {
      q: '(IBGP — Perfil ACE) Na terminologia epidemiológica das doenças contagiosas e transmissíveis, assinale a alternativa que diferencia CORRETAMENTE os conceitos de infecção, infestação e contaminação:',
      options: [
        'A) Infecção é a penetração e multiplicação de um agente infeccioso (vírus, bactéria, protozoário ou helminto) no organismo de um hospedeiro vivo; contaminação é a presença de agentes infecciosos em superfícies inanimadas (água, alimentos, objetos/fômites); e infestação refere-se ao alojamento de ectoparasitas na superfície corporal ou presença de vetores/roedores no ambiente.',
        'B) Infecção ocorre apenas em objetos de plástico e metal, enquanto contaminação ocorre exclusivamente no sangue humano.',
        'C) Infestação é sinônimo de infecção viral aguda transmitida por gotículas respiratórias.',
        'D) Toda infecção provoca obrigatoriamente sintomas clínicos graves e hospitalização imediata.',
      ],
      ans: 0,
      comment:
        'Gabarito: A. Definição clássica do Guia de Vigilância em Saúde: infecção ocorre em hospedeiro vivo por bioagente interno; contaminação ocorre em objetos/veículos inanimados (água, alimentos, fômites); infestação aplica-se a ectoparasitas na superfície corporal ou artrópodes/roedores no ambiente.',
    },
    {
      q: '(IBGP — Perfil ACE) O indivíduo infectado que já elimina o agente etiológico para o meio externo ou para vetores durante o período que antecede o surgimento dos primeiros sinais e sintomas clínicos (como ocorre na Influenza, na COVID-19 e nos dias prévios aos sintomas da Raiva no cão) é classificado epidemiologicamente como:',
      options: [
        'A) Vetor mecânico inanimado.',
        'B) Portador em incubação (ou precoce).',
        'C) Hospedeiro intermediário acidental.',
        'D) Fômite convalescente.',
      ],
      ans: 1,
      comment:
        'Gabarito: B. O portador em incubação (ou precoce) é aquele que transmite o bioagente ainda durante o período de incubação, antes da manifestação clínica da doença.',
    },
    {
      q: '(IBGP — Perfil ACE) Em determinadas doenças transmitidas por artrópodes (como no carrapato-estrela Amblyomma sculptum na Febre Maculosa e no mosquito Aedes aegypti nas arboviroses), a fêmea infectada consegue transmitir o agente etiológico diretamente para seus ovos, de modo que as larvas já eclodem infectadas. Esse mecanismo denomina-se:',
      options: [
        'A) Transmissão mecânica por fômites.',
        'B) Transmissão transovariana (ou vertical no vetor).',
        'C) Quimioprofilaxia passiva.',
        'D) Isolamento respiratório de contato.',
      ],
      ans: 1,
      comment:
        'Gabarito: B. A transmissão transovariana (da fêmea do vetor para seus ovos/prole) mantém o agente etiológico circulando na natureza mesmo durante períodos secos ou sem vertebrados virêmicos.',
    },
  ],
  flashcards: [
    {
      f: 'Epidemiologia: Qual a diferença técnica entre Infecção, Contaminação e Infestação?',
      b: 'Infecção: penetração/multiplicação de microrganismo em ser vivo. Contaminação: presença de agente em objeto inanimado (água, alimento, fômite). Infestação: ectoparasitas no corpo ou vetores/roedores no imóvel.',
    },
    {
      f: 'Epidemiologia: Quais são os 3 tipos de Portadores nas doenças transmissíveis?',
      b: '1. Portador Assintomático/São (nunca apresenta sintomas); 2. Portador em Incubação (transmite antes dos sintomas); 3. Portador Convalescente (continua transmitindo após a cura clínica).',
    },
    {
      f: 'Epidemiologia: O que é Período de Incubação Extrínseco (PIE) nas doenças vetoriais?',
      b: 'É o tempo entre a ingestão do sangue infectado pelo vetor biológico (ex.: Aedes aegypti) e o momento em que o vetor passa a ser capaz de transmitir o agente pela picada (média de 8 a 12 dias na Dengue).',
    },
    {
      f: 'Epidemiologia: O que é transmissão transovariana e em quais vetores do edital ela ocorre?',
      b: 'É a passagem do agente etiológico da fêmea infectada do vetor diretamente para seus ovos/prole. Ocorre no Aedes aegypti e no carrapato-estrela (Amblyomma sculptum — Febre Maculosa).',
    },
  ],
};

// New deep-dive Block 10.3 for esp_10 (Estudos de Caso e Quadro de Ouro por Classe de Agente)
const newBlock_DoencasContagiosas_EstudosCaso = {
  title:
    'Bloco 10.3 — Classificação por Natureza do Agente Etiológico (Vírus, Bactérias, Protozoários e Helmintos) e 4 Estudos de Caso Resolvidos da Cadeia de Transmissão e Controle',
  modoA: `<div class="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
  <div class="bg-teal-900 text-white p-3.5 rounded-xl border border-teal-700">
    <span class="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">Resumo Tático de Prova — Classificação Taxonômica das 14 Doenças</span>
    <h4 class="text-sm sm:text-base font-extrabold mt-0.5">Como a Banca IBGP Cobra a Natureza Biológica do Agente Etiológico e as Medidas de Controle</h4>
    <p class="text-xs text-teal-100 mt-1">Agrupamento mnemônico imediato das 14 doenças do Edital de ACE por classe de bioagente e elo vulnerável de controle.</p>
  </div>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">1. Agrupamento Taxonômico das 14 Doenças do Edital (Pegadinha nº 1 da Banca IBGP!)</h5>
  <p>A questão mais frequente sobre o item 10 do edital pede para o candidato identificar quais doenças são causadas por <strong>Vírus, Bactérias, Protozoários ou Helmintos</strong>. Memorize esta regra infalível (<strong>7 Vírus + 4 Protozooses + 2 Bacterioses + 1 Helmintíase = 14 Doenças</strong>):</p>
  <ul class="list-disc pl-5 space-y-1.5">
    <li><strong>7 DOENÇAS VIRAIS (Causadas por Vírus):</strong>
      <ol class="list-decimal pl-5 mt-1 space-y-0.5">
        <li><strong>Dengue</strong> (Flavivírus — DENV 1, 2, 3 e 4);</li>
        <li><strong>Febre Amarela</strong> (Flavivírus — Vírus da Febre Amarela);</li>
        <li><strong>Zika Vírus</strong> (Flavivírus — ZIKV);</li>
        <li><strong>Chikungunya</strong> (Alphavírus — CHIKV);</li>
        <li><strong>Raiva</strong> (Lyssavirus — Rhabdoviridae);</li>
        <li><strong>Influenza</strong> (Influenzavirus A, B e C — Orthomyxoviridae);</li>
        <li><strong>COVID-19</strong> (Coronavírus SARS-CoV-2).</li>
      </ol>
    </li>
    <li><strong>4 DOENÇAS PROTOZOÁRIAS (Causadas por Protozoários):</strong>
      <ol class="list-decimal pl-5 mt-1 space-y-0.5">
        <li><strong>Malária</strong> (<em>Plasmodium vivax</em>, <em>Plasmodium falciparum</em> e <em>Plasmodium malariae</em>);</li>
        <li><strong>Doença de Chagas</strong> (<em>Trypanosoma cruzi</em>);</li>
        <li><strong>Leishmaniose Tegumentar Americana — LTA</strong> (<em>Leishmania braziliensis</em>, <em>L. guyanensis</em>, <em>L. amazonensis</em>);</li>
        <li><strong>Leishmaniose Visceral — LV / Calazar</strong> (<em>Leishmania infantum chagasi</em>).</li>
      </ol>
    </li>
    <li><strong>2 DOENÇAS BACTERIANAS (Causadas por Bactérias):</strong>
      <ol class="list-decimal pl-5 mt-1 space-y-0.5">
        <li><strong>Leptospirose</strong> (Bactéria espiroqueta <em>Leptospira interrogans</em>);</li>
        <li><strong>Febre Maculosa</strong> (Bactéria gram-negativa intracelular obrigatória <em>Rickettsia rickettsii</em> — <strong>CUIDADO: Febre Maculosa é BACTÉRIA, não é vírus nem protozoário!</strong>).</li>
      </ol>
    </li>
    <li><strong>1 DOENÇA HELMÍNTICA (Causada por Verme Platelminto Trematódeo):</strong>
      <ol class="list-decimal pl-5 mt-1 space-y-0.5">
        <li><strong>Esquistossomose Mansônica</strong> (Helminto <em>Schistosoma mansoni</em>).</li>
      </ol>
    </li>
  </ul>

  <h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">2. Estudos de Caso Resolvidos Passo a Passo (Aplicação dos 6 Elos da Cadeia Epidemiológica)</h5>
  <div class="space-y-2.5">
    <div class="bg-slate-50 p-3 rounded-xl border border-slate-200">
      <p class="font-bold text-teal-900">Estudo de Caso 1 — Diferenciação do Modo de Transmissão: Picada vs. Fezes do Vetor</p>
      <p class="mt-1"><strong>Situação-Problema:</strong> Em visita domiciliar na zona rural de Porto Velho, um morador pergunta ao ACE se a Malária e a Doença de Chagas são transmitidas exatamente da mesma forma (pela saliva da picada do inseto). Como o ACE deve explicar a diferença no elo do <em>modo de transmissão</em>?</p>
      <p class="mt-1 text-slate-700"><strong>Resolução Técnica:</strong> Na <strong>Malária</strong> (e também na Dengue, Zika, Chikungunya, Febre Amarela e Leishmanioses), a transmissão vetorial ocorre pela <strong>inoculação da saliva durante a picada da fêmea do mosquito</strong> (<em>Anopheles darlingi</em>). Já na <strong>Doença de Chagas</strong>, o modo de transmissão vetorial clássico <strong>NÃO ocorre pela saliva da picada</strong>, mas sim pelo <strong>contato das fezes/urina do barbeiro (triatomíneo)</strong> — eliminadas logo após o repasto sanguíneo — com a pele lesada pelo ato de coçar ou com a mucosa ocular (Sinal de Romaña). Além disso, na Amazônia predomina hoje a <strong>transmissão oral da Doença de Chagas</strong> (ingestão de açaí ou bacaba triturados com barbeiros infectados).</p>
    </div>

    <div class="bg-slate-50 p-3 rounded-xl border border-slate-200">
      <p class="font-bold text-teal-900">Estudo de Caso 2 — Onde Atua Cada Medida de Controle na Cadeia Epidemiológica?</p>
      <p class="mt-1"><strong>Situação-Problema:</strong> Durante um surto comunitário, a Secretaria Municipal de Saúde adota 3 medidas simultâneas: (1) Tratamento medicamentoso e isolamento domiciliar dos doentes; (2) Eliminação de criadouros de mosquitos e cloração da água; (3) Campanha de vacinação da população sadia. Sobre qual elo da cadeia atua cada medida?</p>
      <p class="mt-1 text-slate-700"><strong>Resolução Técnica:</strong> (1) O tratamento e o isolamento atuam sobre o <strong>1º Elo (Fonte de Infecção / Reservatório Humano)</strong>, interrompendo a eliminação do agente; (2) O controle vetorial e o saneamento da água atuam sobre o <strong>2º Elo (Modo/Via de Transmissão)</strong>, impedindo que o agente chegue a outras pessoas; (3) A vacinação atua sobre o <strong>3º Elo (Hospedeiro Suscetível)</strong>, conferindo proteção específica (imunidade ativa artificial) para que o indivíduo não adoeça.</p>
    </div>
  </div>
</div>`,
  modoB: `<ul class="list-disc pl-4 space-y-1 text-xs">
  <li><strong>Regra 7-4-2-1 das 14 Doenças do Edital:</strong>
    <strong>7 Vírus</strong> (Dengue, Zika, Chikungunya, Febre Amarela, Raiva, Influenza, COVID-19);
    <strong>4 Protozoários</strong> (Malária, Chagas, LTA, LV);
    <strong>2 Bactérias</strong> (Leptospirose e Febre Maculosa);
    <strong>1 Helminto</strong> (Esquistossomose).</li>
  <li><strong>Pegadinha Campeã:</strong> Febre Maculosa é causada por <strong>BACTÉRIA</strong> (<em>Rickettsia rickettsii</em>), e Doença de Chagas vetorial transmite-se pelas <strong>FEZES</strong> do barbeiro (e via <strong>ORAL</strong> pelo açaí na Amazônia).</li>
</ul>`,
  traps: [
    '❌ Mito/Pegadinha: "A Febre Maculosa e a Leptospirose são doenças causadas por vírus transmitidos por roedores e carrapatos." — ✅ CORRETO: Ambas são doenças BACTERIANAS: a Febre Maculosa é causada pela bactéria Rickettsia rickettsii e a Leptospirose pela bactéria espiroqueta Leptospira interrogans.',
    '❌ Mito/Pegadinha: "A Malária e a Leishmaniose são causadas por bactérias, enquanto a Esquistossomose é causada por um protozoário." — ✅ CORRETO: Malária (Plasmodium) e Leishmaniose (Leishmania) são causadas por PROTOZOÁRIOS, enquanto a Esquistossomose (Schistosoma mansoni) é causada por um HELMINTO (verme platelminto trematódeo).',
  ],
  questions: [
    {
      q: '(IBGP — Perfil ACE) Considerando a classificação dos agentes etiológicos das doenças constantes no conteúdo programático de Agente de Combate às Endemias, assinale a alternativa que apresenta EXCLUSIVAMENTE doenças causadas por BACTÉRIAS:',
      options: [
        'A) Dengue e Febre Amarela.',
        'B) Malária e Doença de Chagas.',
        'C) Leptospirose e Febre Maculosa.',
        'D) Raiva e Esquistossomose.',
      ],
      ans: 2,
      comment:
        'Gabarito: C. Entre as 14 doenças do edital, as duas únicas causadas por bactérias são a Leptospirose (Leptospira interrogans) e a Febre Maculosa (Rickettsia rickettsii). Dengue, Febre Amarela e Raiva são virais; Malária e Chagas são protozooses; Esquistossomose é helmintíase.',
    },
    {
      q: '(IBGP — Perfil ACE) Assinale a alternativa que relaciona CORRETAMENTE a doença contagiosa/transmissível, a classe biológica de seu agente etiológico e seu principal modo de transmissão:',
      options: [
        'A) Malária — Vírus — Ingestão de água contaminada com caramujos.',
        'B) Doença de Chagas — Protozoário (Trypanosoma cruzi) — Contato com fezes de triatomíneos infectados após a picada ou ingestão de alimentos contaminados (como açaí e bacaba).',
        'C) Leishmaniose Visceral — Bactéria — Mordedura direta do cão doméstico.',
        'D) Esquistossomose — Protozoário — Picada do mosquito Lutzomyia longipalpis.',
      ],
      ans: 1,
      comment:
        'Gabarito: B. A Doença de Chagas tem como agente etiológico o protozoário flagelado Trypanosoma cruzi, transmitido vetorialmente pelas fezes do barbeiro (triatomíneo) ou por via oral (alimentos contaminados). A LV não passa por mordida do cão, mas pela picada do flebotomíneo Lutzomyia longipalpis.',
    },
    {
      q: '(IBGP — Perfil ACE) Na cadeia epidemiológica das doenças transmissíveis, quando o serviço de saúde realiza a vacinação de bloqueio em pessoas sadias, a eliminação mecânica de criadouros de mosquitos e o isolamento domiciliar de pacientes com sintomas respiratórios agudos, essas medidas de controle atuam, respectivamente, sobre:',
      options: [
        'A) O hospedeiro suscetível (3º elo), o modo/via de transmissão (2º elo) e a fonte de infecção (1º elo).',
        'B) A fonte de infecção (1º elo), o hospedeiro suscetível (3º elo) e o vetor biológico (2º elo).',
        'C) Apenas sobre o agente etiológico inanimado.',
        'D) Exclusivamente sobre os portadores convalescentes.',
      ],
      ans: 0,
      comment:
        'Gabarito: A. A vacinação protege o hospedeiro suscetível (3º elo); o controle de vetores/criadouros interrompe a via de transmissão (2º elo); e o isolamento do paciente sintomático atua sobre a fonte de infecção (1º elo).',
    },
  ],
  flashcards: [
    {
      f: 'Quais são as 2 únicas doenças BACTERIANAS entre as 14 doenças do edital de ACE?',
      b: '1. Leptospirose (bactéria espiroqueta Leptospira interrogans); 2. Febre Maculosa (bactéria Rickettsia rickettsii).',
    },
    {
      f: 'Quais são as 4 doenças causadas por PROTOZOÁRIOS entre as 14 doenças do edital de ACE?',
      b: '1. Malária (Plasmodium); 2. Doença de Chagas (Trypanosoma cruzi); 3. Leishmaniose Tegumentar (Leishmania); 4. Leishmaniose Visceral (Leishmania infantum chagasi).',
    },
    {
      f: 'Quais são as 7 doenças VIRAIS entre as 14 doenças do edital de ACE?',
      b: 'Dengue, Febre Amarela, Zika Vírus, Chikungunya, Raiva, Influenza e COVID-19.',
    },
    {
      f: 'Qual é a única doença causada por HELMINTO (verme platelminto trematódeo) entre as 14 do edital?',
      b: 'Esquistossomose Mansônica (causada pelo Schistosoma mansoni, tendo o caramujo Biomphalaria como hospedeiro intermediário).',
    },
  ],
};

function renumberBlocks(blocks, lessonNum) {
  return blocks.map((b, idx) => {
    const cleanTitle = (b.title || '').replace(/^Bloco\s+\d+\.\d+\s*—\s*/i, '');
    return {
      ...b,
      title: `Bloco ${lessonNum}.${idx + 1} — ${cleanTitle}`,
    };
  });
}

// Always read from a clean snapshot or backup if we run multiple times
const backupPath = path.resolve(process.cwd(), 'scripts/backup_before_recategorize_10.json');
const primaryJsonPath = jsonFiles[0];

if (!fs.existsSync(backupPath)) {
  fs.copyFileSync(primaryJsonPath, backupPath);
  console.log('Created backup at:', backupPath);
}

const rawData = JSON.parse(fs.readFileSync(backupPath, 'utf8'));

const byId = Object.fromEntries(rawData.lessons.map(l => [l.id, l]));

const old1 = byId['esp_1'];
const old2 = byId['esp_2'];
const old3 = byId['esp_3'];
const old4 = byId['esp_4'];
const old5 = byId['esp_5'];
const old6 = byId['esp_6'];
const old7 = byId['esp_7'];
const old8 = byId['esp_8'];
const old9 = byId['esp_9'];
const old10 = byId['esp_10'];

// Build the 10 categorized lessons (esp_1 .. esp_10) matching the user's exact 1..10 list:
const newEsp1 = {
  ...old1,
  id: 'esp_1',
  cat: 'esp',
  catName: 'Conhecimentos Específicos ACE',
  weight: '15 Questões • Peso 2 (30 pts)',
  title: '1. Constituição da República Federativa do Brasil (com as Emendas Constitucionais): Art. 196 a 200',
  editalRef: '1 - Constituição da República Federativa do Brasil (com as Emendas Constitucionais): Art. 196 a 200.',
  auditBadge: 'CATEGORIA 1 DO EDITAL — TEXTO CONSTITUCIONAL + EMENDAS 100% COBERTOS',
  sources: [56, 62, 86, 91],
  mindMap: {
    centralTitle: '1. CF/88 (Arts. 196 a 200) e Emendas Constitucionais da Saúde e dos Agentes (EC 29, 51, 63, 86, 95 e 120/2022)',
    mnemonic: 'Art. 196 (Direito de Todos) • Art. 197 (Relevância Pública) • Art. 198 (Diretrizes + ACS/ACE §§ 4º a 11) • Art. 199 (Privado Complementar) • Art. 200 (8 Competências do SUS)',
    deadlinesAndNumbers: [
      { value: '15% da RCL', label: 'Mínimo da União em Saúde (EC 86/2015 — Art. 198, § 2º, I)' },
      { value: '12% Estados / 15% Municípios', label: 'Mínimo constitucional em ASPS (EC 29/2000 e LC 141/2012)' },
      { value: '2 Salários Mínimos', label: 'Piso Constitucional Nacional dos ACS e ACE (EC 120/2022 — Art. 198, § 9º)' },
      { value: 'Arts. 196 a 200', label: 'Seção II (Da Saúde) do Capítulo da Seguridade Social na CF/88' },
    ],
    branches: old1.mindMap.branches,
  },
  blocks: renumberBlocks(
    [
      old1.blocks[1], // Arts. 196 a 200 + ECs
      old1.blocks[0], // Seguridade Social Arts. 194 e 195
      old1.blocks[5], // Texto Constitucional Integral Arts. 193 a 200
    ],
    1
  ),
};

const newEsp2 = {
  ...old2,
  id: 'esp_2',
  cat: 'esp',
  catName: 'Conhecimentos Específicos ACE',
  weight: '15 Questões • Peso 2 (30 pts)',
  title: '2. Legislações Federais de Saúde Pública: Lei Federal nº 8.080/1990. Portaria Federal nº 2.436/2017. Lei Federal nº 8.142/1990',
  editalRef: '2 - Legislações Federais de Saúde Pública: Lei Federal nº 8.080/1990. Portaria Federal nº 2.436/2017. Lei Federal nº 8.142/1990.',
  auditBadge: 'CATEGORIA 2 DO EDITAL — LEIS 8.080/90, 8.142/90 E PORTARIA 2.436/17 INTEGRAIS',
  sources: [57, 58, 59, 63, 64, 86, 91],
  mindMap: {
    centralTitle: '2. Legislações Federais de Saúde Pública: Lei 8.080/1990 + Portaria 2.436/2017 + Lei 8.142/1990',
    mnemonic: 'Lei 8.080/90 (Estrutura, Subsistemas, RENAME/CONITEC e Financiamento) • Lei 8.142/90 (Conselhos Paritários 50% Usuários, Conferências 4/4 anos e Fundo a Fundo) • Portaria 2.436/17 (Marco Legal da PNAB)',
    deadlinesAndNumbers: [
      { value: '4 em 4 anos', label: 'Periodicidade das Conferências de Saúde (Art. 1º, § 1º da Lei 8.142/1990)' },
      { value: '50% Usuários', label: 'Paridade nos Conselhos de Saúde (50% usuários + 25% trabalhadores + 25% gestores/prestadores)' },
      { value: '6 Requisitos (Art. 4º)', label: 'Fundo, Conselho, Plano, Relatório de Gestão, Contrapartida e Comissão de Carreira (PCCS)' },
      { value: '180 dias', label: 'Prazo da CONITEC (prorrogável por +90 dias) para incorporação de tecnologia no SUS (Art. 19-R)' },
    ],
    branches: [...old3.mindMap.branches],
  },
  blocks: renumberBlocks(
    [
      old3.blocks[0], // Subsistemas da Lei 8.080/1990, RENAME, CONITEC e Financiamento
      old3.blocks[1], // Lei Federal nº 8.142/1990 Integral
      old2.blocks[2], // Desenvolvimento Passo a Passo Lei 8.080/1990
      old3.blocks[2], // Desenvolvimento Passo a Passo Lei 8.142/1990
      old2.blocks[3], // Texto Integral Lei 8.080/1990 (Parte 1: Arts. 1º a 19-H)
      old3.blocks[3], // Texto Integral Lei 8.080/1990 (Parte 2: Arts. 19-I a 55) + Lei 8.142/1990 (Arts. 1º a 7º)
    ],
    2
  ),
};

const newEsp3 = {
  ...old5,
  id: 'esp_3',
  cat: 'esp',
  catName: 'Conhecimentos Específicos ACE',
  weight: '15 Questões • Peso 2 (30 pts)',
  title: '3. Lei Federal nº 11.350/2006. Lei Federal nº 13.708/2018. Lei Federal nº 13.595/2018',
  editalRef: '3 - Lei Federal nº 11.350/2006. Lei Federal nº 13.708/2018. Lei Federal nº 13.595/2018 (incluindo Lei nº 14.536/2023 e EC nº 120/2022).',
  auditBadge: 'CATEGORIA 3 DO EDITAL — MARCO LEGAL INTEGRAL DO ACE (11.350 + 13.708 + 13.595)',
  sources: [61, 86, 87, 88, 89, 91],
  mindMap: {
    centralTitle: '3. Leis Federais da Carreira de ACE: Lei nº 11.350/2006 + Lei nº 13.708/2018 + Lei nº 13.595/2018',
    mnemonic: 'Lei 11.350/06 (Regulamentação, PSP e Vedação de Terceirização) • Lei 13.595/18 (Ruth Brilhante: Ensino Médio, Presença Obrigatória, 30h+10h) • Lei 13.708/18 (Piso Escalonado, Cursos 200h a cada 2 anos, Locomoção Art. 9º-H)',
    deadlinesAndNumbers: [
      { value: '30h Campo + 10h Internas', label: 'Divisão da jornada de 40h semanais (Art. 9º-A, § 2º — Leis 13.595 e 13.708/2018)' },
      { value: '200 horas / 2 anos', label: 'Cursos de aperfeiçoamento a cada 2 anos (Art. 5º, § 2º da Lei 11.350 c/c Lei 13.708/2018)' },
      { value: '95% do Piso', label: 'Assistência financeira complementar da União aos Municípios (Art. 9º-C)' },
      { value: '2 Salários Mínimos', label: 'Piso Nacional vigente por força da EC nº 120/2022 (R$ 3.242,00 no Anexo I SEMUSA PVH)' },
    ],
    branches: old5.mindMap.branches,
  },
  blocks: renumberBlocks(
    [
      old5.blocks[2], // Lei Federal nº 13.708/2018 (Texto Integral e Comentado)
      old5.blocks[3], // Requisitos de Ingresso (Lei 11.350 e Lei 13.595), Jornada 30h+10h, Curso Introdutório 40h, Transporte
      old5.blocks[4], // Desenvolvimento Passo a Passo e Estudos de Caso (Leis 11.350, 13.595, 13.708 e 14.536)
      old5.blocks[5], // Texto Integral Consolidado da Lei Federal nº 11.350/2006 (Arts. 1º a 21 Completos)
    ],
    3
  ),
};

const newEsp4 = {
  ...old2,
  id: 'esp_4',
  cat: 'esp',
  catName: 'Conhecimentos Específicos ACE',
  weight: '15 Questões • Peso 2 (30 pts)',
  title: '4. Sistema Único de Saúde – SUS: princípios fundamentais, diretrizes, atribuições e competências das esferas governamentais do SUS. Promoção e proteção da saúde',
  editalRef: '4 - Sistema Único de Saúde – SUS: princípios fundamentais, diretrizes, atribuições e competências das esferas governamentais do SUS. Promoção e proteção da saúde.',
  auditBadge: 'CATEGORIA 4 DO EDITAL — PRINCÍPIOS, COMPETÊNCIAS DO SUS E PROMOÇÃO/PROTEÇÃO DA SAÚDE',
  sources: [57, 60, 63, 65, 86, 91],
  mindMap: {
    centralTitle: '4. SUS: Princípios Fundamentais, Diretrizes, Atribuições, Competências das Esferas (Arts. 15–18) e Promoção e Proteção da Saúde',
    mnemonic: 'Princípios Doutrinários: U-I-E (Universalidade, Integralidade, Equidade) • Diretrizes: Descentralização, Regionalização/Hierarquização e Participação • Competências: União (Normatizar/Portos Art. 16), Estado (Coordenar Art. 17), Município (Executar Art. 18) • Leavell & Clark (5 Níveis)',
    deadlinesAndNumbers: [
      { value: '3 Princípios Doutrinários', label: 'Universalidade, Integralidade e Equidade (Base ética do SUS)' },
      { value: 'Art. 6º Lei 8.080/90', label: 'Atribuições do SUS: Vigilância Epidemiológica, Sanitária, Saúde do Trabalhador e Assistência Terapêutica Integral' },
      { value: 'Arts. 15, 16, 17 e 18', label: 'Competências Comuns (15), União (16), Estados (17) e Municípios (18)' },
      { value: '5 Níveis de Prevenção', label: 'Leavell & Clark: 1º Promoção da Saúde e 2º Proteção Específica = Prevenção Primária' },
    ],
    branches: old2.mindMap.branches,
  },
  blocks: renumberBlocks(
    [
      old2.blocks[0], // SUS: Princípios Fundamentais, Diretrizes, Objetivos, Atribuições (Art. 6º) e Promoção e Proteção da Saúde
      old2.blocks[1], // Organização, Direção, Atribuições e Competências das Esferas Governamentais do SUS (Arts. 8º a 19-H)
      old1.blocks[3], // Promoção e Proteção da Saúde: História Natural da Doença (Leavell & Clark), Modelos de Atenção e DSS
      old1.blocks[4], // Política Nacional de Promoção da Saúde (PNPS) e Carta de Ottawa
      old4.blocks[2], // Promoção e Proteção da Saúde: Aprofundamento Prático em Prevenção Primária a Quaternária
    ],
    4
  ),
};

const newEsp5 = {
  ...old4,
  id: 'esp_5',
  cat: 'esp',
  catName: 'Conhecimentos Específicos ACE',
  weight: '15 Questões • Peso 2 (30 pts)',
  title: '5. Política Nacional de Atenção Básica',
  editalRef: '5 - Política Nacional de Atenção Básica (Portaria GM/MS nº 2.436/2017 — PNAB, Processo de Trabalho, Equipes e Integração com a Rede de Atenção à Saúde).',
  auditBadge: 'CATEGORIA 5 DO EDITAL — POLÍTICA NACIONAL DE ATENÇÃO BÁSICA (PNAB) 100% DETALHADA',
  sources: [59, 60, 65, 86, 91],
  mindMap: {
    centralTitle: '5. Política Nacional de Atenção Básica (PNAB — Portaria GM/MS nº 2.436/2017) e Integração na RAS',
    mnemonic: '3 Princípios da PNAB: Universalidade, Equidade e Integralidade • 9 Diretrizes: Regionalização, Territorialização, População Adscrita, Cuidado Centrado na Pessoa, Resolutividade, Longitudinalidade, Coordenação, Ordenação da Rede e Participação',
    deadlinesAndNumbers: [
      { value: '2.000 a 3.500 pessoas', label: 'População adscrita recomendada por equipe de Saúde da Família (eSF) ou Atenção Básica (eAB)' },
      { value: 'Até 750 pessoas', label: 'Limite máximo de pessoas acompanhadas por Agente Comunitário de Saúde (ACS) na microárea' },
      { value: '40 horas semanais', label: 'Carga horária obrigatória para todos os profissionais da eSF, ACS e ACE na PNAB' },
      { value: 'Até 4 equipes / UBS', label: 'Recomendação máxima de equipes por Unidade Básica de Saúde para garantir vínculo' },
    ],
    branches: old4.mindMap.branches,
  },
  blocks: renumberBlocks(
    [
      old4.blocks[1], // Política Nacional de Atenção Básica (Portaria 2.436/2017): Princípios, Diretrizes, Equipes e Integração ACE+ACS
      newBlock_PNAB_Operacional, // Processo de Trabalho, Parâmetros Populacionais, Atribuições Comuns ACE/ACS
      old4.blocks[0], // Articulação da AB nas Redes de Atenção à Saúde e Decreto 7.508/2011
      old4.blocks[3], // Texto Integral do Decreto 7.508/2011
    ],
    5
  ),
};

const newEsp6 = {
  ...old5,
  id: 'esp_6',
  cat: 'esp',
  catName: 'Conhecimentos Específicos ACE',
  weight: '15 Questões • Peso 2 (30 pts)',
  title: '6. História e Evolução da Profissão de ACE',
  editalRef: '6 - História e Evolução da Profissão de ACE.',
  auditBadge: 'CATEGORIA 6 DO EDITAL — HISTÓRIA E EVOLUÇÃO COMPLETA DA PROFISSÃO DE ACE',
  sources: [56, 61, 86, 89, 91],
  mindMap: {
    centralTitle: '6. História e Evolução da Profissão de Agente de Combate às Endemias (ACE): De Oswaldo Cruz (1903) à Lei 14.536/2023',
    mnemonic: '1903/1910 (Oswaldo Cruz / EFMM) → 1942 (SESP) → 1956 (DNERu) → 1970 (SUCAM: DNERu+CEM+CEV) → 1991 (FUNASA: SUCAM+FSESP) → 1999 (Portaria 1.399 Descentralização) → 2006 (EC 51 + Lei 11.350) → 2018 (Leis 13.595 e 13.708) → 2022/23 (EC 120 + Lei 14.536)',
    deadlinesAndNumbers: [
      { value: '1956 (DNERu) / 1970 (SUCAM)', label: 'Unificação dos serviços de endemias rurais (1956) e criação da SUCAM com os Guardas de Endemias (1970)' },
      { value: '1991 (FUNASA) / 1999 (Port. 1.399)', label: 'Fusão SUCAM+FSESP na FUNASA (1991) e descentralização para Estados e Municípios (1999)' },
      { value: 'EC 51/2006 e Lei 11.350/2006', label: 'Constitucionalização da carreira, Processo Seletivo Público e criação oficial da nomenclatura ACE' },
      { value: 'EC 120/2022 e Lei 14.536/2023', label: 'Piso de 2 Salários Mínimos, insalubridade, aposentadoria especial e reconhecimento como Profissional de Saúde' },
    ],
    branches: [
      {
        title: '1. Fase Sanitarista-Campanhista (1903 a 1969): Oswaldo Cruz, Carlos Chagas, SESP e DNERu',
        icon: '🏛️',
        color: 'teal',
        nodes: [
          {
            label: 'Brigadas de "Mata-Mosquitos" (1903) e EFMM em Porto Velho (1910)',
            detail:
              'Oswaldo Cruz criou as brigadas contra Febre Amarela, Peste e Varíola no RJ (1903) e implantou em 1910 o protocolo contra a Malária na Estrada de Ferro Madeira-Mamoré em Porto Velho.',
            badge: 'Origens 1903–1910',
          },
          {
            label: 'SESP na Amazônia (1942) e Criação do DNERu (Lei 2.743/1956)',
            detail:
              'O SESP (1942) introduziu visitadores sanitários na Amazônia; em 1956, o DNERu unificou os Serviços Nacionais de Febre Amarela, Malária e Peste.',
            badge: 'SESP e DNERu',
          },
        ],
      },
      {
        title: '2. Era da SUCAM (1970–1990), Criação da FUNASA (1991) e Descentralização (1999)',
        icon: '🧭',
        color: 'amber',
        nodes: [
          {
            label: 'SUCAM (Decreto nº 66.623/1970): Os "Guardas de Endemias"',
            detail:
              'Criada pela fusão do DNERu + CEM (Malária) + CEV (Varíola). Atuação heroica em regime de campanha federal verticalizada na Amazônia e em Rondônia.',
            badge: 'SUCAM 1970',
          },
          {
            label: 'FUNASA (1991) e Portaria GM/MS nº 1.399/1999 (Municipalização)',
            detail:
              'Fusão da SUCAM + FSESP gerou a FUNASA (1991). A Portaria 1.399/1999 descentralizou a execução do controle de endemias para Estados e Municípios.',
            badge: 'Descentralização',
          },
        ],
      },
      {
        title: '3. Constitucionalização e Regulamentação no SUS (EC 51/2006 e Lei 11.350/2006)',
        icon: '⚖️',
        color: 'indigo',
        nodes: [
          {
            label: 'EC nº 51/2006 (Art. 198, §§ 4º a 6º da CF/88)',
            detail:
              'Instituiu a admissão obrigatória por Processo Seletivo Público de provas ou provas e títulos e vedou a terceirização precária.',
            badge: 'EC 51/2006',
          },
          {
            label: 'Lei Federal nº 11.350/2006',
            detail:
              'Criou oficialmente a nomenclatura Agente de Combate às Endemias (ACE), exigiu vínculo direto e definiu atuação exclusiva no SUS.',
            badge: 'Lei 11.350/2006',
          },
        ],
      },
      {
        title: '4. Valorização, Integração e Reconhecimento como Profissional de Saúde (2010–2023)',
        icon: '🛡️',
        color: 'emerald',
        nodes: [
          {
            label: 'EC 63/2010, Lei 13.595/2018 (Ruth Brilhante) e Lei 13.708/2018',
            detail:
              'Piso nacional e repasse de 95% da União (EC 63/10); presença obrigatória do ACE na vigilância, Ensino Médio, jornada 30h+10h e custeio de locomoção.',
            badge: 'Leis de 2018',
          },
          {
            label: 'EC nº 120/2022 (Piso de 2 SM) e Lei nº 14.536/2023 (Profissional de Saúde)',
            detail:
              'Piso mínimo de 2 salários mínimos + insalubridade + aposentadoria especial (EC 120/22) e reconhecimento como profissional de saúde regulamentado (acumulação de 2 cargos — Lei 14.536/23).',
            badge: 'Conquistas 2022–2023',
          },
        ],
      },
    ],
  },
  blocks: renumberBlocks(
    [
      old5.blocks[0], // História e Evolução da Profissão de ACE (6 Fases + Quadro Cronológico)
      old1.blocks[2], // Evolução Histórica das Políticas de Saúde no Brasil (Colônia à 8ª CNS)
      newBlock_HistoriaACE_Amazonia, // Linha do Tempo Analítica dos Órgãos de Endemias no Brasil e na Amazônia (EFMM, SESP, DNERu, SUCAM, FUNASA)
    ],
    6
  ),
};

const newEsp7 = {
  ...old10,
  id: 'esp_7',
  cat: 'esp',
  catName: 'Conhecimentos Específicos ACE',
  weight: '15 Questões • Peso 2 (30 pts)',
  title: '7. Atribuições do Agente de Combate a Endemias',
  editalRef: '7 - Atribuições do Agente de Combate a Endemias (Lei Federal nº 11.350/2006, Lei nº 13.595/2018, Anexo II SEMUSA PVH e Operações Práticas de Campo).',
  auditBadge: 'CATEGORIA 7 DO EDITAL — ATRIBUIÇÕES LEGAIS E OPERACIONAIS DE CAMPO DO ACE',
  sources: [61, 67, 68, 69, 86, 89, 91],
  mindMap: {
    centralTitle: '7. Atribuições do Agente de Combate às Endemias (ACE): Atividades Típicas, Assistidas, Compartilhadas e Operações de Campo',
    mnemonic: 'Art. 4º § 1º (5 Atividades Típicas) • Art. 4º § 2º (5 Atividades Assistidas por Nível Superior) • Art. 4º-A (6 Atividades Compartilhadas ACE+ACS) • Campo: LIRAa (Depósitos A1–E, IIP e IB), Cubagem, Dosagem, RG e EPIs (NR-6)',
    deadlinesAndNumbers: [
      { value: 'Art. 4º, §§ 1º e 2º', label: 'Atribuições específicas típicas (§ 1º) e atribuições assistidas por nível superior (§ 2º) na Lei 11.350/06' },
      { value: 'IIP < 1% | 1–3,9% | ≥ 4%', label: 'Classificação do Índice de Infestação Predial no LIRAa: Satisfatório (<1%), Alerta (1% a 3,9%) e Risco (≥4%)' },
      { value: '20 a 25 imóveis/dia', label: 'Meta operacional média de visitas domiciliares do ACE em ciclo bimestral (6 ciclos/ano)' },
      { value: '1 m³ = 1.000 Litros', label: 'Regra-base de cubagem matemática de caixas d’água e cisternas para dosagem de larvicidas' },
    ],
    branches: [
      {
        title: '1. Atribuições Legais do ACE (Art. 4º, §§ 1º, 2º e Art. 4º-A da Lei 11.350/2006)',
        icon: '📋',
        color: 'teal',
        nodes: [
          {
            label: 'Atividades Típicas (Art. 4º, § 1º I a V) vs. Assistidas (§ 2º I a V)',
            detail:
              'Típicas: vistoria de imóveis, orientação, eliminação de focos, notificação e mobilização. Assistidas (sob supervisão superior): coleta de material biológico, aplicação de substâncias químicas, guarda de insumos e zoonoses.',
            badge: 'Lei 13.595/2018',
          },
          {
            label: 'Atividades Compartilhadas ACE + ACS (Art. 4º-A) e Anexo II SEMUSA',
            detail:
              'Planejamento integrado, atualização de mapas/croquis, busca ativa de sintomáticos e acompanhamento de condicionalidades. Inclui todas as 9 atribuições municipais do Anexo II (LC 391/2010).',
            badge: 'Integração e Anexo II',
          },
        ],
      },
      ...old10.mindMap.branches.slice(0, 3),
    ],
  },
  blocks: renumberBlocks(
    [
      old5.blocks[1], // Atribuições do Agente de Combate a Endemias (Art. 4º, § 1º, § 2º, Art. 4º-A e Anexo II SEMUSA)
      old7.blocks[1], // Operacionalização de Campo do ACE (PNCD/MS): Imóveis (R, C, TB, PE, O), Depósitos A1 a E, LIRAa, IIP e IB
      old10.blocks[0], // Cubagem Matemática de Depósitos, Dosagem de Larvicidas e Bomba Costal Guarany
      old10.blocks[1], // Biossegurança no Trabalho de Campo, EPIs (NR-6), Toxicologia e Tríplice Lavagem
      old10.blocks[2], // Reconhecimento Geográfico (RG), Cartografia de Campo, Numeração Territorial e Cadastro
      old10.blocks[3], // Caderno Prático de Campo ACE: 5 Cálculos Operacionais Resolvidos Passo a Passo
    ],
    7
  ),
};

const newEsp8 = {
  ...old6,
  id: 'esp_8',
  cat: 'esp',
  catName: 'Conhecimentos Específicos ACE',
  weight: '15 Questões • Peso 2 (30 pts)',
  title: '8. Vigilância em Saúde',
  editalRef: '8 - Vigilância em Saúde (Vigilância Epidemiológica, Sanitária, Ambiental e Saúde do Trabalhador; PNVS Resolução CNS nº 588/2018; Indicadores e Sistemas de Informação em Saúde).',
  auditBadge: 'CATEGORIA 8 DO EDITAL — VIGILÂNCIA EM SAÚDE, PNVS E SISTEMAS DE INFORMAÇÃO',
  sources: [60, 68, 69, 86, 91],
  mindMap: {
    centralTitle: '8. Vigilância em Saúde: Os 4 Pilares (Epidemiológica, Sanitária, Ambiental e Trabalhador), PNVS (Res. 588/2018), Indicadores e SIS',
    mnemonic: '4 Vigilâncias: VE (Pessoas/Agravos) + VISA (Bens/Produtos/Serviços) + VSA (Água/Ar/Solo/Vetores/Desastres) + VISAT (Trabalho) • Notificação Imediata = até 24h • Notificação Semanal = até 7 dias',
    deadlinesAndNumbers: [
      { value: 'Até 24 horas', label: 'Prazo da Notificação Compulsória Imediata (ex.: Febre Amarela, Raiva, Malária extra-amazônica, Chagas Aguda)' },
      { value: 'Até 7 dias (Semanal)', label: 'Prazo da Notificação Compulsória Semanal (ex.: Dengue/Zika/Chikungunya sem óbito, LTA, LV, Esquistossomose)' },
      { value: 'SIVEP-Malária vs. SINAN', label: 'Na Amazônia Legal (Rondônia), a Malária é notificada no SIVEP-Malária; fora da Amazônia, no SINAN (imediata 24h)' },
      { value: 'Resolução CNS nº 588/2018', label: 'Instituiu a Política Nacional de Vigilância em Saúde (PNVS), de caráter universal, transversal e público' },
    ],
    branches: old6.mindMap.branches.filter(b => !b.title.includes('Doenças Contagiosas')),
  },
  blocks: renumberBlocks(
    [
      old6.blocks[1], // Vigilância em Saúde (Epidemiológica, Sanitária, Ambiental e Saúde do Trabalhador) e Indicadores
      old6.blocks[2], // Sistemas de Informação em Saúde (SIS): SINAN, SIM, SINASC, SI-PNI, SIVEP-Malária e Lista de Notificação Compulsória
      old6.blocks[3], // Desenvolvimento Integral Passo a Passo e Estudos de Caso (Vigilância em Saúde e PNVS Res. 588/2018)
      old6.blocks[4], // Laboratório Prático de Indicadores Epidemiológicos, Prazos de Notificação e Fluxo SINAN/SIVEP
    ],
    8
  ),
};

const newEsp9 = {
  ...old7,
  id: 'esp_9',
  cat: 'esp',
  catName: 'Conhecimentos Específicos ACE',
  weight: '15 Questões • Peso 2 (30 pts)',
  title: '9. Conhecimentos Básicos: Raiva, Esquistossomose, Doença de Chagas, Dengue, Febre Amarela, Febre Maculosa, Influenza, Chikungunya, Zika Vírus, Leptospirose, Leishmaniose: Tegumentar e Visceral e Malária, COVID-19',
  editalRef: '9 - Conhecimentos Básicos: Raiva, Esquistossomose, Doença de Chagas, Dengue, Febre Amarela, Febre Maculosa, Influenza, Chikungunya, Zika Vírus, Leptospirose, Leishmaniose: Tegumentar e Visceral e Malária, COVID-19.',
  auditBadge: 'CATEGORIA 9 DO EDITAL — AS 14 DOENÇAS ESPECÍFICAS EM 12 BLOCOS APROFUNDADOS',
  sources: [66, 67, 68, 69, 86, 91],
  mindMap: {
    centralTitle: '9. Conhecimentos Básicos das 14 Doenças do Edital: Arboviroses, Protozooses, Zoonoses, Helmintíase e Viroses Respiratórias',
    mnemonic: 'Arboviroses (Dengue, Zika, Chikungunya, Febre Amarela) • Protozooses (Malária, Chagas, LTA, LV) • Zoonoses/Bacterioses (Raiva, Leptospirose, Febre Maculosa) • Helmintíase (Esquistossomose) • Respiratórias (Influenza, COVID-19)',
    deadlinesAndNumbers: [
      { value: '10 Dias (Raiva)', label: 'Período de observação clínica de cão ou gato agressor na profilaxia da Raiva Humana' },
      { value: 'Gota Espessa (Malária)', label: 'Exame padrão-ouro oficial do Ministério da Saúde para diagnóstico e controle de cura da Malária' },
      { value: '4h a 6h (Febre Maculosa)', label: 'Tempo mínimo de fixação do carrapato-estrela (Amblyomma sculptum) para ativar e transmitir a Rickettsia rickettsii' },
      { value: 'Caramujo Biomphalaria', label: 'Hospedeiro intermediário da Esquistossomose Mansônica (libera cercárias que penetram ativamente na pele)' },
    ],
    branches: [
      {
        title: '1. Arboviroses: Dengue, Febre Amarela, Chikungunya e Zika Vírus',
        icon: '🦟',
        color: 'rose',
        nodes: [
          {
            label: 'Dengue (DENV 1–4), Zika (ZIKV) e Chikungunya (CHIKV)',
            detail:
              'Vetor urbano: fêmea do Aedes aegypti. Dengue: febre + dor retro-orbitária + sinais de alarme (dor abdominal contínua, vômitos, sangramento); Chikungunya: poliartralgia intensa/crônica; Zika: exantema pruriginoso + conjuntivite não purulenta + síndrome congênita (microcefalia).',
            badge: 'Aedes aegypti',
          },
          {
            label: 'Febre Amarela: Ciclo Silvestre (Haemagogus/Sabethes) vs. Urbano (Aedes)',
            detail:
              'Sem transmissão urbana no Brasil desde 1942. Macacos (PNH) não transmitem a doença: são hospedeiros amplificadores e eventos sentinelas (epizootia = notificação imediata em 24h!). Vacina dose única aos 9 meses + reforço aos 4 anos.',
            badge: 'Epizootia PNH',
          },
        ],
      },
      {
        title: '2. Protozooses na Amazônia: Malária, Doença de Chagas e Leishmanioses (LTA e LV)',
        icon: '🔬',
        color: 'amber',
        nodes: [
          {
            label: 'Malária (Plasmodium vivax, P. falciparum e P. malariae)',
            detail:
              'Vetor: fêmea do Anopheles darlingi (hospedeiro definitivo = reprodução sexuada; homem = hospedeiro intermediário). P. vivax é o mais prevalente na Amazônia e forma hipnozoítos no fígado (recaída tratada com Primaquina/Tafenoquina). P. falciparum causa malária grave.',
            badge: 'Anopheles darlingi',
          },
          {
            label: 'Doença de Chagas (T. cruzi) e Leishmaniose Tegumentar (LTA) e Visceral (LV)',
            detail:
              'Chagas: fezes do barbeiro (triatomíneo) ou via oral (açaí/bacaba na Amazônia). LTA e LV: picada de flebotomíneos (mosquito-palha; Lutzomyia longipalpis na LV). Na LV, o cão doméstico é o principal reservatório urbano (controle: coleira de deltametrina 4%).',
            badge: 'Triatomíneos e Flebotomíneos',
          },
        ],
      },
      {
        title: '3. Zoonoses e Helmintíase: Raiva, Esquistossomose, Febre Maculosa e Leptospirose',
        icon: '🐾',
        color: 'teal',
        nodes: [
          {
            label: 'Raiva (Lyssavirus) e Esquistossomose (Schistosoma mansoni)',
            detail:
              'Raiva: vírus neurotrópico transmitido pela saliva de mamíferos (cão, gato, morcego); letalidade ~100%; cão/gato observável por 10 dias. Esquistossomose: verme trematódeo; hospedeiro definitivo = homem (elimina ovos nas fezes → miracídio); intermediário = caramujo Biomphalaria (libera cercárias).',
            badge: 'Raiva e Biomphalaria',
          },
          {
            label: 'Leptospirose (Leptospira interrogans) e Febre Maculosa (Rickettsia rickettsii)',
            detail:
              'Leptospirose: bactéria espiroqueta na urina de roedores (Rattus norvegicus = ratazana de esgoto, R. rattus = rato de telhado, Mus musculus = camundongo); forma grave = Síndrome de Weil. Febre Maculosa: bactéria transmitida pelo carrapato-estrela (Amblyomma sculptum); capivaras e equinos são hospedeiros amplificadores.',
            badge: 'Bacterioses Zoonóticas',
          },
        ],
      },
      {
        title: '4. Viroses Respiratórias Contagiosas: Influenza e COVID-19 (SG vs. SRAG)',
        icon: '🫁',
        color: 'indigo',
        nodes: [
          {
            label: 'Influenza (A, B, C) e COVID-19 (SARS-CoV-2)',
            detail:
              'Transmissão direta por gotículas respiratórias, aerossóis e contato com superfícies contaminadas. Síndrome Gripal (SG) evolui para Síndrome Respiratória Aguda Grave (SRAG) quando há dispneia, desconforto respiratório ou SpO2 < 95%.',
            badge: 'SG vs. SRAG',
          },
        ],
      },
    ],
  },
  blocks: renumberBlocks(
    [
      old7.blocks[0], // Arboviroses I: Dengue, Zika, Chikungunya e Febre Amarela
      old7.blocks[2], // Arboviroses II: Desenvolvimento Integral Passo a Passo e Estudos de Caso
      old7.blocks[3], // Arboviroses III: Quadro Clínico Diferencial, Manejo da Febre Amarela e LIRAa
      old8.blocks[0], // Protozooses I: Malária
      old8.blocks[1], // Protozooses II: Doença de Chagas e Leishmanioses (LTA e LV)
      old8.blocks[2], // Protozooses III: Desenvolvimento Integral Passo a Passo e Estudos de Caso
      old8.blocks[3], // Protozooses IV: Protocolo Amazônico de Malária, Chagas Oral e Coleiras na LV
      old9.blocks[0], // Esquistossomose Mansônica e Raiva
      old9.blocks[1], // Leptospirose (3 Roedores e Antirratização), Influenza, COVID-19 e Peçonhentos
      old9.blocks[2], // Febre Maculosa Brasileira
      old9.blocks[3], // Zoonoses, Helmintíases e Vírus Respiratórios: Desenvolvimento Passo a Passo
      old9.blocks[4], // Profilaxia da Raiva, Síndrome de Weil na Leptospirose e Manejo Ambiental
    ],
    9
  ),
};

const newEsp10 = {
  ...old6,
  id: 'esp_10',
  cat: 'esp',
  catName: 'Conhecimentos Específicos ACE',
  weight: '15 Questões • Peso 2 (30 pts)',
  title: '10. Doenças contagiosas: agente etiológico, reservatório, hospedeiro, de modo de transmissão, sintomas e medidas de controle',
  editalRef: '10 - Doenças contagiosas: agente etiológico, reservatório, hospedeiro, de modo de transmissão, sintomas e medidas de controle.',
  auditBadge: 'CATEGORIA 10 DO EDITAL — CADEIA EPIDEMIOLÓGICA E MATRIZ SINÓPTICA DAS 14 DOENÇAS',
  sources: [60, 66, 67, 68, 69, 86, 91],
  mindMap: {
    centralTitle: '10. Doenças Contagiosas: Agente Etiológico, Reservatório, Hospedeiro, Modo de Transmissão, Sintomas e Medidas de Controle',
    mnemonic: '6 Elos da Cadeia: 1. Agente Etiológico (7 Vírus, 4 Protozoários, 2 Bactérias, 1 Helminto) • 2. Reservatório/Portador • 3. Porta de Saída • 4. Modo de Transmissão (Direta vs. Indireta / Vetorial) • 5. Porta de Entrada • 6. Hospedeiro Suscetível',
    deadlinesAndNumbers: [
      { value: '7 Vírus + 4 Protoz. + 2 Bact. + 1 Helm.', label: 'Divisão exata dos agentes etiológicos das 14 doenças do Edital de ACE' },
      { value: '5 Propriedades do Agente', label: 'Infectividade, Patogenicidade, Virulência, Poder Invasivo e Imunogenicidade' },
      { value: 'Isolamento vs. Quarentena', label: 'Isolamento aplica-se ao DOENTE (1º elo); Quarentena aplica-se ao COMUNICANTE SADIO exposto' },
      { value: 'Definitivo vs. Intermediário', label: 'Malária: Definitivo = Anopheles e Intermediário = Homem; Esquistossomose: Definitivo = Homem e Intermediário = Caramujo' },
    ],
    branches: [
      {
        title: '1. Agente Etiológico: Taxonomia (7-4-2-1) e 5 Propriedades Biológicas',
        icon: '🦠',
        color: 'rose',
        nodes: [
          {
            label: 'Infectividade vs. Patogenicidade vs. Virulência vs. Imunogenicidade',
            detail:
              'Infectividade = capacidade de penetrar e multiplicar; Patogenicidade = capacidade de produzir sintomas clínicos; Virulência = gravidade/letalidade dos casos; Imunogenicidade = capacidade de induzir imunidade duradoura.',
            badge: 'Propriedades do Agente',
          },
          {
            label: 'Natureza Biológica nas 14 Doenças (Regra 7-4-2-1)',
            detail:
              '7 Vírus (Dengue, Zika, Chikungunya, FA, Raiva, Influenza, COVID-19); 4 Protozoários (Malária, Chagas, LTA, LV); 2 Bactérias (Leptospirose e Febre Maculosa); 1 Helminto (Esquistossomose).',
            badge: 'Taxonomia IBGP',
          },
        ],
      },
      {
        title: '2. Reservatório, Portadores e Hospedeiros (Definitivo vs. Intermediário)',
        icon: '🐾',
        color: 'amber',
        nodes: [
          {
            label: 'Reservatório e os 3 Tipos de Portadores',
            detail:
              'Reservatório = habitat natural do bioagente. Portadores: Assintomático/São (sem sintomas), Em Incubação (transmite antes dos sintomas: COVID, Influenza, Raiva) e Convalescente (após cura clínica).',
            badge: '1º Elo da Cadeia',
          },
          {
            label: 'Hospedeiro Definitivo (Sexuada) vs. Intermediário (Assexuada)',
            detail:
              'Na Malária: Definitivo = mosquito Anopheles (esporogonia sexuada) e Intermediário = Homem (esquizogonia assexuada). Na Esquistossomose: Definitivo = Homem e Intermediário = caramujo Biomphalaria.',
            badge: 'Pegadinha Clássica',
          },
        ],
      },
      {
        title: '3. Modos de Transmissão (Direta, Indireta, Vertical e Vetorial) e Sintomas',
        icon: '🔄',
        color: 'teal',
        nodes: [
          {
            label: 'Transmissão Direta vs. Indireta (Fômites, Água, Alimentos e Vetores)',
            detail:
              'Direta: gotículas (Influenza/COVID-19) e mordedura/saliva (Raiva). Indireta Vetorial: picada (Dengue, Malária, LV, Febre Maculosa) ou fezes do barbeiro (Chagas). Indireta por Água/Solo: Leptospirose e Esquistossomose.',
            badge: '2º Elo da Cadeia',
          },
          {
            label: 'Fases Clínicas e Sintomas Diferenciais',
            detail:
              'Período de Incubação → Período Prodrômico (sinais inespecíficos) → Período de Estado (sintomas típicos da doença) → Convalescença.',
            badge: 'Clínica e Sintomas',
          },
        ],
      },
      {
        title: '4. Medidas de Controle nos 3 Elos da Cadeia Epidemiológica',
        icon: '🛡️',
        color: 'emerald',
        nodes: [
          {
            label: 'Controle sobre a Fonte (1º Elo), a Transmissão (2º Elo) e o Suscetível (3º Elo)',
            detail:
              '1º Elo: Diagnóstico precoce, tratamento, notificação e Isolamento do doente. 2º Elo: Manejo integrado de vetores (mecânico, biológico, legal e químico) e saneamento. 3º Elo: Vacinação, educação em saúde, EPIs e Quarentena de comunicantes.',
            badge: 'Medidas de Controle',
          },
        ],
      },
    ],
  },
  blocks: renumberBlocks(
    [
      old6.blocks[0], // Doenças Contagiosas: Agente Etiológico, Reservatório, Hospedeiro, Modo de Transmissão, Sintomas e Medidas de Controle + Matriz das 14 Doenças
      newBlock_DoencasContagiosas_Elos, // Aprofundamento Teórico dos 6 Elementos (Infecção vs Infestação, Portadores, Modos de Transmissão)
      newBlock_DoencasContagiosas_EstudosCaso, // Classificação Taxonômica (7-4-2-1) e Estudos de Caso Resolvidos
    ],
    10
  ),
};

const categorizedEspLessons = [
  newEsp1,
  newEsp2,
  newEsp3,
  newEsp4,
  newEsp5,
  newEsp6,
  newEsp7,
  newEsp8,
  newEsp9,
  newEsp10,
];

// Recalculate questionsCount and flashcardsCount for each of the 10 esp lessons
for (const l of categorizedEspLessons) {
  l.questionsCount = l.blocks.reduce((sum, b) => sum + (b.questions?.length || 0), 0);
  l.flashcardsCount = l.blocks.reduce((sum, b) => sum + (b.flashcards?.length || 0), 0);
}

// Keep all non-esp lessons in their exact order, and place the 10 categorized esp lessons at indices 0..9!
const nonEspLessons = rawData.lessons.filter(l => l.cat !== 'esp');
// Renumber non-esp lessons cleanly from 11 to 32 so the numbering is 1..32 with 1..10 being Conhecimentos Específicos
nonEspLessons.forEach((l, idx) => {
  const newNum = idx + 11;
  const cleanTitle = (l.title || '').replace(/^\d+\.\s*/, '');
  l.title = `${newNum}. ${cleanTitle}`;
  l.blocks = renumberBlocks(l.blocks || [], newNum);
});

const all32Lessons = [...categorizedEspLessons, ...nonEspLessons];

rawData.lessons = all32Lessons;

// Also synchronize rawData.aulasIndex if present
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

// Update schedule descriptions so they reflect the new 1..10 Conhecimentos Específicos categorization
if (Array.isArray(rawData.schedule)) {
  const scheduleUpdates = {
    'Semana 1': {
      focus: 'Itens 1 e 2 de Específicos: CF/88 (Arts. 196–200) e Legislações Federais (Lei 8.080/90, Portaria 2.436/17 e Lei 8.142/90)',
      lessons: ['esp_1', 'esp_2', 'por_1'],
    },
    'Semana 2': {
      focus: 'Itens 3 e 4 de Específicos: Leis do ACE (11.350/06, 13.708/18, 13.595/18) e SUS (Princípios, Competências e Promoção/Proteção)',
      lessons: ['esp_3', 'esp_4', 'rlm_1'],
    },
    'Semana 3': {
      focus: 'Itens 5 e 6 de Específicos: Política Nacional de Atenção Básica (PNAB) e História e Evolução da Profissão de ACE',
      lessons: ['esp_5', 'esp_6', 'leg_1'],
    },
    'Semana 4': {
      focus: 'Itens 7 e 8 de Específicos: Atribuições do ACE e Vigilância em Saúde + Estatuto LC 385/2010',
      lessons: ['esp_7', 'esp_8', 'leg_2'],
    },
    'Semana 5': {
      focus: 'Itens 9 e 10 de Específicos: Conhecimentos Básicos das 14 Doenças e Doenças Contagiosas (Cadeia Epidemiológica)',
      lessons: ['esp_9', 'esp_10', 'por_2'],
    },
  };
  rawData.schedule.forEach(s => {
    if (scheduleUpdates[s.week]) {
      s.focus = scheduleUpdates[s.week].focus;
      s.lessons = scheduleUpdates[s.week].lessons;
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

console.log('Summary of 10 Categorized Conhecimentos Específicos Lessons:');
categorizedEspLessons.forEach(l => {
  console.log(`  ${l.id}: ${l.title} (${l.blocks.length} blocos, ${l.questionsCount} Q, ${l.flashcardsCount} FC)`);
});
