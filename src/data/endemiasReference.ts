export interface LiraaDepositGroup {
  grp: string;
  desc: string;
  items: string;
  conduta: string;
}

export interface SynanthropicRodent {
  esp: string;
  popular: string;
  habito: string;
  morf: string;
  raio: string;
  ninhada: string;
}

export interface ChemicalProtocol {
  title: string;
  badge: string;
  desc: string;
  ficha: string[];
}

export interface AceGlossaryItem {
  term: string;
  cat: string;
  def: string;
}

export const LIRAA_DEPOSIT_GROUPS: LiraaDepositGroup[] = [
  {
    grp: 'A1',
    desc: 'Armazenamento de Água (Elevado)',
    items: 'Caixas d’água ligadas à rede pública.',
    conduta: 'Vedação mecânica com tela milimétrica ou tampa. Tratamento focal apenas se impossível vedar.',
  },
  {
    grp: 'A2',
    desc: 'Armazenamento de Água (Ao nível do solo)',
    items: 'Tambores, tonéis, cisternas, potes, filtros de barro.',
    conduta: 'Vedação, limpeza das bordas com bucha (ovos aderidos) e aplicação de larvicida se consumo/uso contínuo.',
  },
  {
    grp: 'B',
    desc: 'Depósitos Móveis',
    items: 'Pratinhos de plantas, bebedouros de animais, pingadeiras, fontes ornamentais.',
    conduta: 'NÃO aplicar larvicida! Eliminação mecânica: escovação semanal, preenchimento com areia até a borda.',
  },
  {
    grp: 'C',
    desc: 'Depósitos Fixos',
    items: 'Calhas, lajes em desnível, ralos, vasos sanitários em desuso, piscinas não tratadas, cacos de vidro em muros.',
    conduta: 'Desobstrução, nivelamento, aplicação de larvicida em ralos/piscinas abandonadas.',
  },
  {
    grp: 'D1',
    desc: 'Passíveis de Remoção (Pneus)',
    items: 'Pneus e outros materiais rodantes inservíveis ou em borracharias.',
    conduta: 'Armazenamento em local coberto, furar ou encaminhar para Ecoponto/Reciclagem.',
  },
  {
    grp: 'D2',
    desc: 'Passíveis de Remoção (Lixo/Resíduos)',
    items: 'Garrafas PET, latas, plásticos, carcaças de eletrodomésticos no quintal.',
    conduta: 'Acondicionamento adequado e destinação para coleta pública.',
  },
  {
    grp: 'E',
    desc: 'Depósitos Naturais',
    items: 'Axilas de folhas (bromélias), buracos em árvores (ocos), rochas, cascas de coco/cacau.',
    conduta: 'Eliminação mecânica ou manejo ambiental conforme orientação da vigilância local.',
  },
];

export const SYNANTHROPIC_RODENTS: SynanthropicRodent[] = [
  {
    esp: 'Rattus norvegicus',
    popular: 'Ratazana / Rato de esgoto',
    habito: 'Terrestre / Escavador (tocas no solo, margens de córregos e galerias pluviais). Nadam muito bem.',
    morf: 'Corpo robusto (até 500g), focinho rombudo, orelhas pequenas e peludas, cauda mais CURTA que o corpo.',
    raio: '30 a 50 metros ao redor da toca.',
    ninhada: '8 a 12 filhotes por gestação.',
  },
  {
    esp: 'Rattus rattus',
    popular: 'Rato de telhado / Rato preto',
    habito: 'Arborícola / Escalador (forros, sótãos, telhados, árvores). Raramente escava tocas no solo.',
    morf: 'Corpo esguio (200g), focinho afilado, orelhas grandes e sem pelos, cauda mais LONGA que o corpo.',
    raio: '30 a 60 metros (deslocamento vertical e por fiações).',
    ninhada: '6 a 8 filhotes por gestação.',
  },
  {
    esp: 'Mus musculus',
    popular: 'Camundongo / Catita',
    habito: 'Intradomiciliar (dentro de armários, gavetas, fogões, despensas). Curioso (neofilia) — explora objetos novos.',
    morf: 'Pequeno porte (15 a 30g), orelhas grandes em relação à cabeça, fezes pequenas e afiladas.',
    raio: '3 a 5 metros apenas (território muito curto).',
    ninhada: '4 a 8 filhotes (alta frequência reprodutiva).',
  },
];

export const CHEMICAL_PROTOCOLS: ChemicalProtocol[] = [
  {
    title: 'Tratamento Focal (Larvicidas)',
    badge: 'Elimina Larvas (Imaturos)',
    desc: 'Realizado diretamente nos depósitos positivos ou potenciais dos grupos A1, A2 e C que NÃO possam ser eliminados mecanicamente.',
    ficha: [
      'Espinosade (Spinosad): Biolarvicida derivado da bactéria Saccharopolyspora spinosa. Atua no sistema nervoso da larva. Residualidade: até 8 a 10 semanas.',
      'Bti (Bacillus thuringiensis israelensis): Larvicida biológico seletivo (produz cristais proteicos tóxicos no intestino alcalino das larvas de dípteros).',
      'Piriproxifeno (Pyriproxyfen): Análogo de hormônio juvenil (IGR - Regulador de Crescimento de Insetos). Impede a emergência do adulto na fase de pupa.',
    ],
  },
  {
    title: 'Tratamento Perifocal (Residual)',
    badge: 'Efeito Residual em Superfícies',
    desc: 'Aplicação de inseticida de ação residual nas paredes externas e internas de depósitos em Pontos Estratégicos (PE) como cemitérios, borracharias e ferros-velhos.',
    ficha: [
      'Equipamento utilizado: Bomba compressora costal manual (aspersor com bico leque 80.02).',
      'Frequência em Pontos Estratégicos (PE): Pesquisa larvária quinzenal (a cada 15 dias) e tratamento químico residual mensal ou conforme residualidade do produto.',
      'Objetivo: Eliminar fêmeas grávidas que pousam nas bordas e superfícies dos recipientes para oviposição.',
    ],
  },
  {
    title: 'Bloqueio de Transmissão (UBV / Espacial)',
    badge: 'Elimina Apenas Alados (Adultos)',
    desc: 'Aplicação espacial a Ultra Baixo Volume (UBV costal motorizado ou pesado acoplado a veículo) para interromper surtos com casos suspeitos/confirmados.',
    ficha: [
      'Efeito: Zero efeito residual! Mata apenas o mosquito adulto em voo no momento em que as gotículas (10 a 25 micra) o atingem.',
      'Horário de aplicação: Início da manhã (05h às 08h) ou final da tarde (17h às 19h), períodos de maior atividade hematofágica do Aedes e menor corrente térmica ascendente.',
      'EPI Obrigatório do ACE: Respirador semifacial com filtro químico para vapores orgânicos, óculos de proteção, protetor auricular, macacão hidrorrepelente, luvas nitrílicas e botas.',
    ],
  },
  {
    title: 'Borrifação Residual Intradomiciliar (BRI)',
    badge: 'Malária, Chagas e Leishmaniose',
    desc: 'Aplicação de inseticida de longa duração nas paredes internas e externas dos domicílios em áreas endêmicas de Malária (Anopheles), Doença de Chagas (Triatomíneos) e LV (Lutzomyia).',
    ficha: [
      'Mecanismo: Os vetores têm hábito de pousar nas paredes antes ou logo após o repasto sanguíneo (endofilia), entrando em contato letal com o inseticida.',
      'Triatomíneos (Barbeiros): Além das paredes internas, borrifam-se anexos peridomiciliares (galinheiros, chiqueiros, paióis e montes de telhas/tijolos).',
      'Orientação ao morador: Afastar móveis da parede, cobrir alimentos e utensílios, retirar animais domésticos e aguardar secagem completa antes de retornar.',
    ],
  },
];

export const ACE_GLOSSARY_ITEMS: AceGlossaryItem[] = [
  {
    term: 'Agente Etiológico',
    cat: 'Epidemiologia',
    def: 'Microrganismo ou parasita causador direto da doença (ex: vírus, bactéria, protozoário, helminto). Não confundir com vetor!',
  },
  {
    term: 'Vetor Biológico',
    cat: 'Entomologia',
    def: 'Artrópode no qual o agente etiológico obrigatoriamente se multiplica ou cumpre parte do seu ciclo evolutivo antes de ser transmitido (ex: Aedes aegypti, Anopheles darlingi).',
  },
  {
    term: 'Vetor Mecânico',
    cat: 'Entomologia',
    def: 'Transporta o patógeno apenas acidentalmente nas patas ou probóscide, sem que haja ciclo biológico obrigatório (ex: mosca doméstica).',
  },
  {
    term: 'Reservatório',
    cat: 'Epidemiologia',
    def: 'Ser vivo (humano, animal ou planta) onde o agente infeccioso vive e se multiplica naturalmente, servindo de fonte de infecção para os vetores (ex: cão doméstico na Leishmaniose Visceral).',
  },
  {
    term: 'Hospedeiro Definitivo',
    cat: 'Parasitologia',
    def: 'Aquele que abriga o parasita em sua fase de maturidade ou de reprodução SEXUADA. Na Malária, o mosquito Anopheles é o hospedeiro definitivo (e o homem é o intermediário)! Na Esquistossomose, o homem é o definitivo.',
  },
  {
    term: 'Hospedeiro Intermediário',
    cat: 'Parasitologia',
    def: 'Aquele que abriga o parasita em sua fase larvária ou de reprodução ASSEXUADA (ex: caramujo Biomphalaria no Schistosoma mansoni; homem no Plasmodium da malária).',
  },
  {
    term: 'Antropofilia vs. Zoofilia',
    cat: 'Entomologia',
    def: 'Antropofilia é a preferência do vetor por sugar sangue humano (ex: Aedes aegypti). Zoofilia é a preferência por sangue de outros animais.',
  },
  {
    term: 'Endofilia vs. Exofilia',
    cat: 'Entomologia',
    def: 'Endofilia é o hábito do vetor de permanecer/repousar DENTRO do domicílio após o repasto sanguíneo (justifica a borrifação intradomiciliar). Exofilia é o repouso no ambiente externo/vegetação.',
  },
  {
    term: 'Período de Incubação Intrínseco vs. Extrínseco',
    cat: 'Epidemiologia',
    def: 'Intrínseco: tempo entre a picada infectante e o início dos sintomas no SER HUMANO. Extrínseco: tempo que o patógeno leva para se multiplicar dentro do VETOR até torná-lo infectante.',
  },
  {
    term: 'Ponto Estratégico (PE)',
    cat: 'Operação de Campo',
    def: 'Imóveis com grande concentração de depósitos preferenciais para oviposição do Aedes aegypti e alto risco de dispersão passiva (cemitérios, borracharias, ferros-velhos, depósitos de sucata). Visitados quinzenalmente!',
  },
  {
    term: 'Armadilha Ovitrampa vs. Larvitrampa',
    cat: 'Vigilância Entomológica',
    def: 'Ovitrampa: pote preto com infusão de feno e palheta de eucatex áspera para coletar OVOS. Larvitrampa: secção de pneu com água para detectar presença de LARVAS em locais estratégicos.',
  },
  {
    term: 'Neofobia',
    cat: 'Controle de Roedores',
    def: 'Comportamento de desconfiança e aversão a objetos ou alimentos novos no ambiente, típico das ratazanas (Rattus norvegicus) e ratos de telhado. Exige o uso de raticidas anticoagulantes de ação lenta.',
  },
  {
    term: 'Epizootia',
    cat: 'Vigilância Ambiental',
    def: 'Ocorrência de doença ou morte de animais (ex: Primatas Não Humanos / macacos na Febre Amarela) que serve como evento sentinela para alertar o risco iminente de transmissão humana.',
  },
  {
    term: 'Casos Autóctones vs. Importados',
    cat: 'Epidemiologia',
    def: 'Autóctone: infecção contraída no próprio município de residência. Importado (Alóctone): infecção contraída em outro município/estado/país e diagnosticada no local atual.',
  },
  {
    term: 'Endemia vs. Epidemia vs. Surto',
    cat: 'Epidemiologia',
    def: 'Endemia: presença constante da doença dentro dos limites esperados para aquela região (ex: Malária na Amazônia). Epidemia: elevação brusca e acima do limite esperado. Surto: epidemia restrita a um espaço delimitado (quartel, escola, bairro).',
  },
  {
    term: 'Notificação Compulsória Imediata vs. Semanal',
    cat: 'Vigilância Epidemiológica',
    def: 'Imediata: deve ser comunicada em até 24 horas (ex: Raiva humana, Febre Amarela, Botulismo, Óbito por Dengue, Doença de Chagas Aguda). Semanal: em até 7 dias (ex: Dengue clássica, Leishmanioses, Esquistossomose).',
  },
  {
    term: 'Lâmina de Verificação de Cura (LVC)',
    cat: 'Controle da Malária',
    def: 'Exame de gota espessa realizado durante e após o tratamento da malária para confirmar a eliminação parasitária e detectar precocemente recaídas (P. vivax) ou recrudescências (P. falciparum).',
  },
  {
    term: 'Gota Espessa',
    cat: 'Diagnóstico Parasitológico',
    def: 'Exame padrão-ouro oficial do Ministério da Saúde para diagnóstico da Malária e da Doença de Chagas na fase aguda, permitindo quantificar a parasitemia e identificar a espécie do protozoário.',
  },
];
