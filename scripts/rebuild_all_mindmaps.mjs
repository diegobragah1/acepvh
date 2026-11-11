import fs from 'node:fs';
import path from 'node:path';

const appDataPath = path.resolve('data/app_data.json');
const rawAppData = JSON.parse(fs.readFileSync(appDataPath, 'utf8'));

// Complete, topic-aligned MindMap overrides and enrichments for all 49 lessons
const MINDMAP_UPDATES = {
  esp_1: {
    centralSubtitle: 'Seguridade Social (Arts. 194–195), Saúde na CF/88 (Arts. 196–200), Regime Constitucional dos ACS/ACE (EC 51, 63, 120/2022 e EC 140/2026) e Financiamento (EC 29 e 86)',
    goldenTraps: [
      {
        wrong: 'As ações e serviços públicos de saúde podem destinar auxílios ou subvenções a instituições privadas com fins lucrativos quando houver falta de leitos.',
        right: 'FALSO! O Art. 199, § 2º da CF/88 veda expressamente a destinação de recursos públicos para auxílios ou subvenções às instituições privadas com fins lucrativos.'
      },
      {
        wrong: 'O piso salarial nacional dos ACS e ACE de 2 salários mínimos entra no limite de despesa com pessoal da Lei de Responsabilidade Fiscal do Município.',
        right: 'FALSO! Pelo Art. 198, § 11 da CF/88 (EC 120/2022), os recursos federais do piso de 2 SM não são objeto de inclusão no cálculo para fins do limite de despesa com pessoal.'
      }
    ]
  },

  esp_2: {
    centralTitle: '2. Legislações Federais de Saúde Pública: Lei nº 8.080/1990, Portaria nº 2.436/2017 (PNAB) e Lei nº 8.142/1990',
    centralSubtitle: 'Estrutura e Subsistemas da Lei Orgânica da Saúde (Lei 8.080/90), Controle Social e Transferências Intergovernamentais (Lei 8.142/90) e Atenção Básica (Portaria 2.436/17)',
    mnemonic: 'Lei 8.080 = Organização, Princípios, Direção Única e Subsistemas (SasiSUS/AD/Parto/IAPI) • Lei 8.142 = Conselhos (50% Usuários, Deliberativo) + Conferências (4 em 4 anos) + Fundo a Fundo • Portaria 2.436 = PNAB (Porta Preferencial)',
    deadlinesAndNumbers: [
      { value: '4 em 4 anos', label: 'Periodicidade ordinária das Conferências de Saúde (convocadas pelo Executivo ou extraordinariamente por esta ou pelo Conselho)', ref: 'Art. 1º, § 1º Lei 8.142/90' },
      { value: '50% de Usuários', label: 'Representação paritária dos usuários nos Conselhos e Conferências de Saúde em relação ao conjunto dos demais segmentos', ref: 'Art. 1º, § 4º Lei 8.142/90' },
      { value: '180 dias (CONITEC)', label: 'Prazo(s) de avaliação de incorporação tecnológica no SUS (prorrogável por +90 dias) pela CONITEC', ref: 'Art. 19-R Lei 8.080/90' },
      { value: '6 Requisitos (Art. 4º)', label: 'Fundo de Saúde, Conselho, Plano, Relatórios, Contrapartida no orçamento e Comissão de PCCS para repasse regular', ref: 'Art. 4º Lei 8.142/90' }
    ],
    branches: [
      {
        title: '1. Lei nº 8.080/1990: Campo de Atuação e Subsistemas',
        icon: '🏥',
        color: 'teal',
        nodes: [
          {
            label: 'Campo de Atuação do SUS (Art. 6º)',
            detail: 'Execução de vigilância sanitária, vigilância epidemiológica, saúde do trabalhador e assistência terapêutica integral (inclusive farmacêutica).',
            badge: 'Art. 6º Lei 8.080'
          },
          {
            label: 'Os 4 Subsistemas Especiais da Lei 8.080/90',
            detail: '1. Saúde Indígena — SasiSUS (Arts. 19-A a 19-H, financiado pela União); 2. Atendimento e Internação Domiciliar (Art. 19-I); 3. Acompanhante no Parto (Art. 19-J); 4. CONITEC e Assistência Terapêutica (Arts. 19-M a 19-U).',
            badge: 'Arts. 19-A a 19-U'
          },
          {
            label: 'Participação Complementar e Financiamento (Arts. 24–38)',
            detail: 'Quando as disponibilidades do SUS forem insuficientes, recorre-se à iniciativa privada mediante contrato ou convênio, com preferência para entidades filantrópicas e sem fins lucrativos.',
            badge: 'Arts. 24 a 26'
          }
        ]
      },
      {
        title: '2. Lei nº 8.142/1990: Conselhos e Conferências de Saúde',
        icon: '🗣️',
        color: 'indigo',
        nodes: [
          {
            label: 'Conferência de Saúde (Art. 1º, § 1º — Consultiva)',
            detail: 'Reúne-se a cada 4 anos com representação dos vários segmentos sociais para avaliar a situação de saúde e propor diretrizes para a política de saúde.',
            badge: 'A cada 4 anos'
          },
          {
            label: 'Conselho de Saúde (Art. 1º, § 2º — Permanente e Deliberativo)',
            detail: 'Órgão colegiado composto por governo, prestadores de serviço, profissionais de saúde e usuários (paritário: 50% usuários); atua na formulação de estratégias e no controle da execução, inclusive econômica e financeira.',
            badge: 'Deliberativo (50%)'
          },
          {
            label: 'Homologação das Decisões e CONASS/CONASEMS',
            detail: 'As decisões do Conselho são homologadas pelo chefe do poder legalmente constituído em cada esfera. CONASS e CONASEMS têm representação no Conselho Nacional de Saúde (§ 3º).',
            badge: 'Art. 1º, §§ 2º e 3º'
          }
        ]
      },
      {
        title: '3. Lei nº 8.142/1990: Transferências Intergovernamentais',
        icon: '💰',
        color: 'emerald',
        nodes: [
          {
            label: 'Repasse Regular e Automático (Fundo a Fundo)',
            detail: 'Os recursos do FNS são alocados como cobertura das ações e serviços de saúde a serem implementados pelos Municípios, Estados e DF (mínimo de 70% aos Municípios no Art. 3º, § 2º).',
            badge: 'Fundo a Fundo'
          },
          {
            label: 'Os 6 Requisitos do Art. 4º para Municípios, Estados e DF',
            detail: 'I — Fundo de Saúde; II — Conselho de Saúde; III — Plano de Saúde; IV — Relatórios de Gestão; V — Contrapartida de recursos no orçamento; VI — Comissão de elaboração do Plano de Carreira, Cargos e Salários (PCCS).',
            badge: '6 Requisitos (Art. 4º)'
          }
        ]
      },
      {
        title: '4. Portaria nº 2.436/2017: Diretrizes Gerais da PNAB no SUS',
        icon: '🧭',
        color: 'amber',
        nodes: [
          {
            label: 'Atenção Básica como Ordenadora da RAS',
            detail: 'Principal porta de entrada e centro de comunicação da Rede de Atenção à Saúde (RAS), coordenando o cuidado e ordenando os fluxos e contrafluxos.',
            badge: 'Portaria 2.436/17'
          },
          {
            label: 'Integração Vigilância em Saúde + Atenção Básica',
            detail: 'Determina a territorialização conjunta e a atuação integrada entre Agentes de Combate às Endemias (ACE) e Agentes Comunitários de Saúde (ACS) sob base territorial única.',
            badge: 'ACE + ACS na PNAB'
          }
        ]
      }
    ],
    goldenTraps: [
      {
        wrong: 'A Conferência de Saúde é um órgão permanente e deliberativo que fiscaliza mensalmente o Fundo Municipal de Saúde.',
        right: 'FALSO! Quem tem caráter permanente e deliberativo é o CONSELHO de Saúde (Art. 1º, § 2º da Lei 8.142/90). A Conferência reúne-se a cada 4 anos para avaliar a situação e propor diretrizes.'
      },
      {
        wrong: 'O Subsistema de Atenção à Saúde Indígena (SasiSUS) é financiado exclusivamente pelos Municípios que possuem terras indígenas.',
        right: 'FALSO! Pelo Art. 19-E da Lei 8.080/90, caberá à UNIÃO, com seus recursos próprios, financiar o Subsistema de Atenção à Saúde Indígena (Estados e Municípios atuam de forma complementar).'
      }
    ]
  },

  esp_3: {
    centralTitle: '3. Leis Federais da Carreira de ACE: Lei nº 11.350/2006, Lei nº 13.708/2018 e Lei nº 13.595/2018',
    centralSubtitle: 'Requisitos de Ingresso, Atribuições (Típicas, Assistidas e Compartilhadas), Jornada de 40h (Lei Ruth Brilhante), Piso Salarial e Formação Técnica',
    mnemonic: 'Lei 11.350/06 = Marco Legal ACS/ACE (Veda terceirização temporária salvo surto!) • Lei 13.595/18 (Ruth Brilhante) = Jornada 40h + Atribuições §§ 1º e 2º • Lei 13.708/18 = Piso, Curso Técnico e Revogação do § 2º do Art. 9º-A',
    deadlinesAndNumbers: [
      { value: '40 horas semanais', label: 'Jornada integral de trabalho de ACS e ACE (tempo integral para ações de campo, planejamento, reuniões e formação)', ref: 'Art. 9º-A, § 2º Lei 11.350' },
      { value: '40 horas (Curso Introd.)', label: 'Carga horária mínima do curso introdutório de formação inicial e continuada para ingresso como ACE/ACS', ref: 'Art. 7º, I Lei 11.350/06' },
      { value: '2 Salários Mínimos', label: 'Piso salarial profissional nacional dos ACS e ACE garantido pela União (EC 120/2022)', ref: 'Art. 198, § 9º CF/88' },
      { value: 'Ensino Médio Completo', label: 'Escolaridade exigida para o cargo de ACE (salvo quem já exercia a atividade em 05/01/2018 — § 2º)', ref: 'Art. 3º, III Lei 11.350' }
    ],
    branches: [
      {
        title: '1. Lei nº 11.350/2006: Vínculo, Ingresso e Requisitos',
        icon: '📜',
        color: 'teal',
        nodes: [
          {
            label: 'Exercício Exclusivo no SUS e Vedação à Terceirização (Arts. 2º e 16)',
            detail: 'O exercício das atividades de ACS e ACE dá-se exclusivamente no âmbito do SUS, mediante vínculo direto com órgão ou entidade da administração direta, autárquica ou fundacional. É VEDADA a contratação temporária ou terceirizada, salvo na hipótese de combate a surtos epidêmicos!',
            badge: 'Art. 16 (Salvo Surto)'
          },
          {
            label: 'Requisitos para o Cargo de ACE (Art. 3º)',
            detail: 'I — Haver concluído, com aproveitamento, curso introdutório de formação inicial e continuada (mínimo 40h); II — Haver concluído o ensino médio. (Nota: residir na área da comunidade desde a publicação do edital é requisito exclusivo do ACS, não do ACE!).',
            badge: 'ACE ≠ Residir na Área'
          }
        ]
      },
      {
        title: '2. Lei nº 13.595/2018 (Lei Ruth Brilhante): Atribuições do ACE',
        icon: '🦟',
        color: 'indigo',
        nodes: [
          {
            label: 'Atividades Típicas (Art. 4º, § 1º) vs. Assistidas (§ 2º)',
            detail: 'Típicas (§ 1º): vistoria de domicílios/depósitos/terrenos, orientação comunitária, identificação de focos, coleta de vetores e censo de animais. Assistidas por nível superior (§ 2º): administração de substâncias para controle de vetores, necropsia de animais, coleta de sangue de cães/gatos e eutanásia de animais.',
            badge: 'Art. 4º, §§ 1º e 2º'
          },
          {
            label: 'Atribuições Compartilhadas ACS + ACE (Art. 4º-A)',
            detail: 'Educação popular e mobilização social, identificação de situações de risco ambiental/sanitário, orientação sobre sintomas e encaminhamento à unidade de saúde.',
            badge: 'Art. 4º-A'
          }
        ]
      },
      {
        title: '3. Jornada de 40h, Condições de Trabalho e Indenização de Transporte',
        icon: '⏱️',
        color: 'amber',
        nodes: [
          {
            label: 'Jornada de 40h Semanais (Redação Vigente)',
            detail: 'A jornada de 40h é integralmente dedicada às ações de campo, reuniões, planejamento e formação continuada. Os incisos que dividiam a jornada em "30h externas + 10h internas" foram REVOGADOS pela Lei 13.708/2018!',
            badge: '30h+10h Revogado!'
          },
          {
            label: 'Indenização de Transporte (Art. 9º-H) e Nome Ruth Brilhante',
            detail: 'Se o ente público não fornecer locomoção para o deslocamento em serviço, deve conceder indenização de transporte. A Lei 14.799/2024 denominou oficialmente a Lei 13.595/2018 como "Lei Ruth Brilhante".',
            badge: 'Art. 9º-H + Lei 14.799/24'
          }
        ]
      },
      {
        title: '4. Lei nº 13.708/2018, Lei nº 14.536/2023 e EC nº 140/2026',
        icon: '🛡️',
        color: 'emerald',
        nodes: [
          {
            label: 'Aperfeiçoamento Bienal (Art. 5º, § 2º) e Cursos Técnicos (Art. 9º-G)',
            detail: 'A Lei 13.708/2018 retirou o mínimo fixo de 200h do § 2º do art. 5º (mantendo cursos bienais de aperfeiçoamento) e previu cursos técnicos em Vigilância em Saúde / ACE financiados de forma tripartite.',
            badge: 'Lei 13.708/2018'
          },
          {
            label: 'Profissionais de Saúde (Lei 14.536/2023) e Carreira Essencial (EC 140/2026)',
            detail: 'ACS e ACE são reconhecidos como profissionais de saúde (permitindo acumular 2 cargos de saúde — Art. 37, XVI, "c" da CF), e a EC 140/2026 inseriu o inciso IV no Art. 198 e o § 4º-B sobre o quadro próprio de carreira.',
            badge: 'Lei 14.536 + EC 140'
          }
        ]
      }
    ],
    goldenTraps: [
      {
        wrong: 'Pela Lei 11.350/2006, o Agente de Combate às Endemias (ACE) é obrigado a residir na microárea em que atuar desde a data da publicação do edital do concurso.',
        right: 'FALSO! O requisito de residir na área da comunidade em que atuar (Art. 6º, I) aplica-se exclusivamente ao Agente Comunitário de Saúde (ACS), e NÃO ao ACE (Art. 3º).'
      },
      {
        wrong: 'A jornada de 40 horas do ACE continua dividida obrigatoriamente em 30 horas de visitas de campo e 10 horas de trabalho interno.',
        right: 'FALSO! Os incisos que previam a divisão rígida de 30h + 10h foram revogados pela Lei nº 13.708/2018. Hoje toda a jornada de 40h compreende o conjunto integrado de atividades externas e internas.'
      }
    ]
  },

  esp_4: {
    centralSubtitle: 'Princípios Doutrinários (U-I-E), Diretrizes Organizativas (Art. 7º da Lei 8.080/90), Atribuições Comuns (Art. 15), Competências das 3 Esferas (Arts. 16 a 18) e Promoção e Proteção da Saúde',
    goldenTraps: [
      {
        wrong: 'A Equidade está expressa literalmente no rol dos 14 incisos do Art. 7º da Lei Federal nº 8.080/1990.',
        right: 'CUIDADO! Na letra fria do Art. 7º, IV da Lei 8.080/90, a palavra escrita é "IGUALDADE da assistência à saúde, sem preconceitos ou privilégios". A Equidade é princípio doutrinário do SUS (tratar desigualmente os desiguais).'
      },
      {
        wrong: 'Cabe exclusivamente à União executar diretamente todas as ações de vigilância epidemiológica e sanitária nos bairros de cada Município.',
        right: 'FALSO! Pela diretriz da descentralização com direção única em cada esfera (Art. 18, IV da Lei 8.080/90), compete à direção MUNICIPAL do SUS executar os serviços de vigilância epidemiológica, vigilância sanitária e controle de zoonoses.'
      }
    ]
  },

  esp_5: {
    centralTitle: '5. Política Nacional de Atenção Básica (PNAB — Portaria Federal nº 2.436/2017)',
    centralSubtitle: '3 Princípios (U-E-I), 9 Diretrizes, Equipes (eSF, eAB, eSFR, UBSF, eMulti), População Adscrita (2.000 a 3.500), Limite por ACS (750) e as 10 Atribuições Comuns ACE + ACS',
    mnemonic: '3 Princípios = Universalidade, Equidade e Integralidade • População por eSF = 2.000 a 3.500 pessoas • Máximo por ACS = 750 pessoas • Carga Horária ACE/ACS na PNAB = 40h semanais • 4 Equipes por UBS (recomendado)',
    deadlinesAndNumbers: [
      { value: '2.000 a 3.500 pessoas', label: 'População adscrita recomendada por equipe de Saúde da Família (eSF) e de Atenção Básica (eAB)', ref: 'Anexo PNAB item 3.3' },
      { value: 'Máximo 750 pessoas', label: 'Número máximo de pessoas acompanhadas por 1 Agente Comunitário de Saúde (ACS) na microárea', ref: 'Anexo PNAB item 3.4' },
      { value: '40 horas semanais', label: 'Carga horária obrigatória para todos os profissionais da eSF (médico, enfermeiro, técnico, ACS e ACE vinculado)', ref: 'Anexo PNAB item 3.4' },
      { value: '60 dias (SCNES)', label: 'Prazo máximo após publicação de portaria de credenciamento para cadastrar e iniciar o funcionamento da equipe', ref: 'Portaria 2.436/2017' }
    ],
    branches: [
      {
        title: '1. Princípios (3) e Diretrizes (9) da Atenção Básica na PNAB',
        icon: '🧭',
        color: 'teal',
        nodes: [
          {
            label: 'Os 3 Princípios da PNAB 2017',
            detail: '1. Universalidade (acesso universal e contínuo sem diferenciação); 2. Equidade (oferta segundo as necessidades, reduzindo desigualdades); 3. Integralidade (cuidado integral: promoção, prevenção, cura, reabilitação e redução de danos).',
            badge: '3 Princípios (U-E-I)'
          },
          {
            label: 'As 9 Diretrizes da PNAB 2017',
            detail: 'Regionalização e Hierarquização; Territorialização; População Adscrita; Cuidado Centrado na Pessoa; Resolutividade; Longitudinalidade do Cuidado; Coordenação do Cuidado; Ordenação da Rede; e Participação da Comunidade.',
            badge: '9 Diretrizes'
          },
          {
            label: 'Proibição de Restrição de Acesso',
            detail: 'É proibida qualquer exclusão baseada em idade, gênero, raça/cor, etnia, crença, condição socioeconômica ou orientação sexual.',
            badge: 'Acesso Universal'
          }
        ]
      },
      {
        title: '2. Tipologia das Equipes na PNAB (eSF, eAB, eSFR, UBSF e eSB)',
        icon: '👩‍⚕️',
        color: 'indigo',
        nodes: [
          {
            label: 'Equipe de Saúde da Família (eSF — Estratégia Prioritária)',
            detail: 'Composição mínima obrigatória: Médico, Enfermeiro, Auxiliar/Técnico de Enfermagem e Agente Comunitário de Saúde (ACS). Podem compor a equipe: ACE e profissionais de Saúde Bucal.',
            badge: 'Composição Mínima eSF'
          },
          {
            label: 'Equipe de Atenção Básica (eAB) e Saúde Ribeirinha/Fluvial',
            detail: 'eAB: médico, enfermeiro e auxiliar/técnico (carga horária mínima de 10h por profissional, somando 40h por categoria, máx. 3 profissionais por categoria). Em Porto Velho destacam-se as eSFR (Saúde da Família Ribeirinha) e UBSF (Unidades Básicas de Saúde Fluviais).',
            badge: 'eAB / eSFR / UBSF'
          }
        ]
      },
      {
        title: '3. Território, População Adscrita e Parâmetros Operacionais',
        icon: '🗺️',
        color: 'amber',
        nodes: [
          {
            label: 'População Adscrita (2.000 a 3.500) e Limite de 750 por ACS',
            detail: 'Cada eSF/eAB atende de 2.000 a 3.500 pessoas (podendo ser menor em áreas ribeirinhas/rurais dispersas como o Baixo Madeira). Cada ACS acompanha no máximo 750 pessoas, cobrindo 100% da população cadastrada da microárea.',
            badge: '2.000–3.500 | 750/ACS'
          },
          {
            label: 'Número de Equipes por UBS e Horário de Funcionamento',
            detail: 'Recomenda-se no máximo 4 equipes por UBS para garantir vínculo. Funcionamento mínimo de 40 horas/semana, 5 dias por semana, nos 12 meses do ano.',
            badge: '40h / 5 dias / 12 meses'
          }
        ]
      },
      {
        title: '4. Integração ACE + ACS e as 10 Atribuições Comuns na PNAB',
        icon: '🤝',
        color: 'emerald',
        nodes: [
          {
            label: 'Território Único e Planejamento Conjunto (Item 4.2.6)',
            detail: 'A PNAB determina a unificação da base geográfica entre ACS e ACE, com planejamento integrado das visitas domiciliares, troca diária de informações sobre focos e casos febris e educação em saúde conjunta.',
            badge: 'Base Geográfica Única'
          },
          {
            label: 'Atribuições Específicas do ACE na PNAB',
            detail: 'Identificar focos e criadouros, realizar eliminação mecânica, aplicar larvicidas/inseticidas quando indicado, registrar ações nos sistemas de informação e bloquear a transmissão de doenças.',
            badge: 'ACE na Atenção Básica'
          }
        ]
      }
    ],
    goldenTraps: [
      {
        wrong: 'Na Equipe de Saúde da Família (eSF), a presença do Agente de Combate às Endemias (ACE) e do Cirurgião-Dentista é obrigatória para o credenciamento mínimo.',
        right: 'FALSO! A composição mínima obrigatória da eSF é Médico, Enfermeiro, Auxiliar/Técnico de Enfermagem e ACS. O ACE e os profissionais de Saúde Bucal PODEM compor a equipe (são agregados/integrados), mas não são condição mínima de existência da eSF.'
      },
      {
        wrong: 'Cada Agente Comunitário de Saúde (ACS) pode acompanhar até 3.500 pessoas em sua microárea segundo a PNAB 2017.',
        right: 'FALSO! 2.000 a 3.500 pessoas é a população de toda a EQUIPE (eSF). O limite máximo por ACS é de 750 pessoas!'
      }
    ]
  },

  esp_6: {
    centralSubtitle: 'Das Brigadas de Oswaldo Cruz (1903), EFMM em Porto Velho (1910), SESP (1942), DNERu (1956) e SUCAM (1970) à FUNASA (1991), Descentralização (1999), EC 51/2006, EC 120/2022 e EC 140/2026',
    goldenTraps: [
      {
        wrong: 'A SUCAM foi criada em 1991 a partir da fusão da FUNASA com o INAMPS para descentralizar o controle de endemias aos municípios.',
        right: 'FALSO! Foi exatamente o inverso: a SUCAM foi criada em 1970 (fusão do DNERu + CEM + Campanha da Varíola). Em 1991, a SUCAM fundiu-se com a FSESP para originar a FUNASA!'
      },
      {
        wrong: 'A Emenda Constitucional nº 51/2006 fixou o piso salarial de 2 salários mínimos para os Agentes de Combate às Endemias.',
        right: 'FALSO! A EC 51/2006 criou o Processo Seletivo Público e vedou a terceirização temporária (salvo surto). Quem fixou o piso de 2 salários mínimos no Art. 198, § 9º da CF foi a EC nº 120/2022!'
      }
    ]
  },

  esp_7: {
    centralTitle: '7. Atribuições do Agente de Combate a Endemias (Legais e Operacionais de Campo)',
    centralSubtitle: 'Atribuições Típicas (Art. 4º, § 1º), Assistidas (§ 2º), Compartilhadas (Art. 4º-A), LIRAa (Depósitos A1 a E, IIP e IB), Cubagem, Dosagem, Biossegurança e Reconhecimento Geográfico',
    branches: [
      {
        title: '1. Atribuições Legais do ACE (Art. 4º, §§ 1º e 2º e Art. 4º-A da Lei 11.350/06)',
        icon: '📋',
        color: 'teal',
        nodes: [
          {
            label: 'Atividades Típicas (Art. 4º, § 1º) vs. Assistidas (§ 2º)',
            detail: 'Típicas (autônomas): vistoria de imóveis, pesquisa larvária, educação sanitária, censo de animais e identificação de focos. Assistidas por nível superior (§ 2º): aplicação de substâncias químicas, necropsia, coleta de sangue animal e eutanásia.',
            badge: 'Típicas vs. Assistidas'
          },
          {
            label: 'Atribuições no Anexo II do Edital SEMUSA Porto Velho',
            detail: 'Vistoria de residências, depósitos, terrenos baldios e pontos estratégicos (PE); inspeção de caixas d’água e calhas; aplicação de larvicidas e inseticidas; atualização do Reconhecimento Geográfico (RG) e educação comunitária.',
            badge: 'Anexo II SEMUSA'
          }
        ]
      },
      {
        title: '2. Pesquisa Larvária, LIRAa/LIA e Índices Entomológicos (IIP e IB)',
        icon: '🦟',
        color: 'indigo',
        nodes: [
          {
            label: 'Os 7 Grupos de Depósitos no LIRAa (A1, A2, B, C, D1, D2 e E)',
            detail: 'A1: caixa d’água elevada ligada à rede; A2: depósito ao nível do solo (tambor, tonel, cisterna); B: móveis (vasos, bebedouros); C: fixos (calhas, lajes, piscinas); D1: pneus; D2: lixo/sucata; E: naturais (bromélias, ocos de árvores).',
            badge: 'A1 a E (LIRAa)'
          },
          {
            label: 'Índice de Infestação Predial (IIP) vs. Índice de Breteau (IB)',
            detail: 'IIP = (Imóveis Positivos ÷ Imóveis Pesquisados) × 100. Classificação MS: < 1% Satisfatório; de 1% a 3,9% Alerta; ≥ 4,0% Risco de Surto! IB = (Recipientes Positivos ÷ Imóveis Pesquisados) × 100.',
            badge: '<1% | 1–3,9% | ≥4%'
          }
        ]
      },
      {
        title: '3. Cubagem de Reservatórios e Dosagem Operacional de Campo',
        icon: '📐',
        color: 'amber',
        nodes: [
          {
            label: 'Fórmulas de Cubagem e Ponte Volume–Capacidade',
            detail: 'Paralelepípedo: V = C × L × H. Cilindro: V = π × r² × H. Conversão de ouro: 1 m³ = 1.000 Litros | 1 dm³ = 1 Litro | 1 cm³ = 1 mL.',
            badge: '1 m³ = 1.000 L'
          },
          {
            label: 'Ciclos de Visita: LI (Bimestral) vs. PE (Quinzenal)',
            detail: 'Imóveis comuns (ciclo bimestral = a cada 2 meses, meta mínima 80% de cobertura). Pontos Estratégicos — PE (cemitérios, borracharias, ferros-velhos): pesquisa e tratamento QUINZENAL (a cada 15 dias)!',
            badge: 'PE = 15 em 15 dias'
          }
        ]
      },
      {
        title: '4. Biossegurança (NR-6), Tríplice Lavagem e Reconhecimento Geográfico',
        icon: '🥽',
        color: 'emerald',
        nodes: [
          {
            label: 'EPIs (NR-6) e Tríplice Lavagem de Embalagens (Lei 14.785/2023)',
            detail: 'Empregador fornece EPI gratuitamente com CA válido; ACE usa e conserva. Na preparação da calda, realiza-se a tríplice lavagem (água limpa até 1/4 da embalagem, agitar 30s por 3 vezes e verter na bomba pulverizadora) e inutilização do frasco.',
            badge: 'Tríplice Lavagem'
          },
          {
            label: 'Reconhecimento Geográfico (RG) e Ordem de Percurso no Quarteirão',
            detail: 'Croqui do quarteirão numerado no sentido HORÁRIO (pela direita de quem entra na face norte), registrando logradouros, tipo de imóvel (R, C, TB, PE, O) e pendências (Fechado vs. Recusa).',
            badge: 'Sentido Horário'
          }
        ]
      }
    ],
    goldenTraps: [
      {
        wrong: 'No LIRAa, um tambor de armazenamento de água de chuva ao nível do solo é classificado no grupo A1.',
        right: 'FALSO! O grupo A1 é exclusivo para caixa d’água ELEVADA ligada à rede pública. Depósitos de armazenamento de água ao nível do solo (tambores, tonéis, cisternas) pertencem ao grupo A2!'
      },
      {
        wrong: 'Na tríplice lavagem de embalagens vazias de inseticidas, a água da lavagem deve ser descartada na rede de esgoto ou no solo.',
        right: 'FALSO! A água da tríplice lavagem deve ser despejada diretamente no tanque do equipamento pulverizador para compor a calda de aplicação, evitando qualquer contaminação ambiental.'
      }
    ]
  },

  esp_8: {
    centralTitle: '8. Vigilância em Saúde: Os 4 Pilares (VE, VISA, VSA e VISAT), PNVS, Notificação Compulsória e Indicadores',
    centralSubtitle: 'Vigilância Epidemiológica, Sanitária, Ambiental (Vigiágua/Vigisolo/Vigiar) e Saúde do Trabalhador, Resolução CNS nº 588/2018 (PNVS), SINAN/SIM/SINASC/SIVEP e Indicadores',
    branches: [
      {
        title: '1. Os 4 Pilares da Vigilância em Saúde e Conceitos Epidemiológicos',
        icon: '📊',
        color: 'teal',
        nodes: [
          {
            label: 'VE, VISA, VSA e VISAT (Art. 6º da Lei 8.080/90 e Res. CNS 588/18)',
            detail: 'Epidemiológica (doenças/agravos e determinantes); Sanitária (bens, produtos e serviços — poder de polícia); Ambiental (fatores não biológicos: Vigiágua, Vigisolo, Vigiar, Vigidesastres); Saúde do Trabalhador (processos e ambientes de trabalho).',
            badge: '4 Vigilâncias'
          },
          {
            label: 'Endemia vs. Epidemia vs. Surto vs. Pandemia',
            detail: 'Endemia: ocorrência habitual dentro do limite esperado (ex.: Malária na Amazônia). Epidemia: casos acima do limiar epidêmico esperado. Surto: epidemia restrita a local fechado/instituição (quartel, escola, navio). Pandemia: escala global.',
            badge: 'Conceitos-Chave'
          }
        ]
      },
      {
        title: '2. Notificação Compulsória no Brasil (Imediata 24h vs. Semanal)',
        icon: '🚨',
        color: 'rose',
        nodes: [
          {
            label: 'Notificação Imediata (Até 24 Horas) vs. Semanal (Até 7 Dias)',
            detail: 'Imediata (24h pelo meio mais rápido): Botulismo, Cólera, Febre Amarela, Febre Maculosa, Hantavirose, Raiva Humana, Chagas Aguda, Malária extra-amazônica e ÓBITO por Dengue/Zika/Chikungunya, além de Zika em gestante.',
            badge: '24h vs. 7 dias'
          },
          {
            label: 'Pegadinha Regional da Malária (Amazônia Legal vs. Extra-Amazônica)',
            detail: 'Na Região Amazônica (incluindo Porto Velho/RO!), a Malária é endêmica: notificação SEMANAL no SIVEP-Malária. Fora da Amazônia Legal, 1 caso suspeito de Malária é de notificação IMEDIATA (24h) no SINAN!',
            badge: 'Malária RO = Semanal'
          }
        ]
      },
      {
        title: '3. Sistemas de Informação em Saúde (SINAN, SIM, SINASC, SIVEP e SI-PNI)',
        icon: '💻',
        color: 'indigo',
        nodes: [
          {
            label: 'Documento-Base de Cada Sistema Oficial do SUS',
            detail: 'SINAN = Ficha Individual de Notificação (FIN — alimentado diante da simples SUSPEITA!). SIM = Declaração de Óbito (DO). SINASC = Declaração de Nascido Vivo (DNV). SIVEP-Malária = exclusivo para Malária na Amazônia Legal.',
            badge: 'FIN / DO / DNV'
          }
        ]
      },
      {
        title: '4. Indicadores de Saúde: Incidência, Prevalência, Letalidade e Mortalidade',
        icon: '🧮',
        color: 'amber',
        nodes: [
          {
            label: 'Incidência (Casos Novos) vs. Prevalência (Novos + Antigos)',
            detail: 'Incidência mede o RISCO de adoecer (casos novos ÷ população exposta). Prevalência = estoque de casos existentes (aumenta com maior duração da doença/tratamento que prolonga a vida sem curar; diminui com cura rápida ou óbito).',
            badge: 'P ≈ I × Duração'
          },
          {
            label: 'Mortalidade Específica vs. Letalidade (Gravidade) vs. Infantil',
            detail: 'Letalidade = (Óbitos pela doença ÷ Doentes daquela doença) × 100 — mede a GRAVIDADE da doença (ex.: Raiva ≈ 100%). Mortalidade Infantil = óbitos < 1 ano por 1.000 nascidos vivos (Neonatal Precoce 0–6d, Tardia 7–27d, Pós-Neonatal 28–364d).',
            badge: 'Letalidade = Gravidade'
          }
        ]
      }
    ],
    goldenTraps: [
      {
        wrong: 'O SINAN só deve ser alimentado após a confirmação laboratorial definitiva da doença de notificação compulsória.',
        right: 'FALSO! A notificação compulsória no SINAN é realizada diante da simples SUSPEITA clínica/epidemiológica do agravo, para disparar oportunamente o bloqueio de transmissão.'
      },
      {
        wrong: 'Em Porto Velho/RO, qualquer caso de Dengue clássica sem sinais de alarme exige notificação imediata em até 24 horas.',
        right: 'FALSO! Casos comuns de Dengue, Chikungunya e Zika têm notificação SEMANAL. A notificação é imediata (24h) nos casos de ÓBITO por arbovirose ou Zika em gestante.'
      }
    ]
  },

  esp_9: {
    centralSubtitle: 'Arboviroses (Dengue, Zika, Chikungunya, Febre Amarela), Protozooses (Malária, Chagas, LTA, LV), Zoonoses (Raiva, Leptospirose, Febre Maculosa), Esquistossomose e Viroses Respiratórias (Influenza e COVID-19)',
    goldenTraps: [
      {
        wrong: 'Na Malária humana, o mosquito Anopheles darlingi é o hospedeiro intermediário, e o ser humano é o hospedeiro definitivo.',
        right: 'FALSO! Na Malária é o INVERSO: o mosquito Anopheles é o HOSPEDEIRO DEFINITIVO (onde ocorre a reprodução sexuada/esporogonia), e o ser humano é o HOSPEDEIRO INTERMEDIÁRIO (esquizogonia assexuada)!'
      },
      {
        wrong: 'No controle da Leishmaniose Visceral (Calazar), o Ministério da Saúde recomenda a vacinação em massa de humanos e o tratamento de cães soropositivos com medicamentos de uso humano.',
        right: 'FALSO! É proibido tratar cães com medicamentos de uso humano (para evitar resistência parasitária), e não há vacina humana no PNI contra LV. As medidas incluem encoleiramento com deltametrina 4%, manejo ambiental, controle químico e eutanásia humanitária quando indicada.'
      }
    ]
  },

  esp_10: {
    centralSubtitle: 'Propriedades do Agente Etiológico, Regra 7-4-2-1 das 14 Doenças, Reservatórios, Portadores e Hospedeiros (Definitivo vs. Intermediário), Transmissão, Sintomas e Isolamento vs. Quarentena',
    goldenTraps: [
      {
        wrong: 'Quarentena é a separação de pessoas já comprovadamente doentes, enquanto Isolamento é a restrição aplicada a contatos sadios expostos.',
        right: 'FALSO! ISOLAMENTO aplica-se a pessoas ou animais JÁ DOENTES/INFECTADOS durante o período de transmissibilidade; QUARENTENA aplica-se a comunicantes SADIOS expostos, pelo prazo máximo de incubação da doença!'
      },
      {
        wrong: 'O vírus da Raiva possui baixa letalidade (inferior a 5%), mas altíssima infectividade pelo ar.',
        right: 'FALSO! O vírus da Raiva (Lyssavirus) possui LETALIDADE próxima de 100% (uma vez instalados os sintomas clínicos, quase todos os doentes evoluem para óbito) e transmite-se pela saliva em mordeduras/arranhaduras.'
      }
    ]
  },

  leg_1: {
    centralTitle: '1. Lei Orgânica do Município de Porto Velho/RO (LOM-PVH Consolidada — 249 Dispositivos)',
    centralSubtitle: 'Símbolos (Art. 3º), Patrimônio e Boto (Art. 5º), Competências (Arts. 7º–8º), Servidores (Arts. 27–41), Distritos (Arts. 42–44), Legislativo e Processo Legislativo (Arts. 45–77), Executivo (Arts. 78–109), Tributos, Saneamento (Arts. 150–153) e Saúde (Arts. 171–180 e 235)',
    mnemonic: 'Símbolos = Bandeira, Hino e Brasão (Art. 3º) • Boto do Rio Madeira = Patrimônio Natural (Art. 5º, VII) • Criar Distrito = 1/5 + 50 moradias + Escola + Posto de Saúde + Posto Policial (Art. 43) • Emenda à LOM = 1/3 ou Prefeito ou 50 Entidades (+2 anos) ou 5% eleitores (2 turnos, 10 dias, 2/3) • Veto = 15 dias úteis (Art. 72)',
    deadlinesAndNumbers: [
      { value: '1/5 + 50 moradias', label: 'Requisitos para criar Distrito em Porto Velho (+ escola pública, posto de saúde e posto policial na vila-sede)', ref: 'Art. 43 LOM-PVH' },
      { value: '15 dias úteis (Veto)', label: 'Prazo do Prefeito para sancionar ou vetar projeto de lei (48h p/ comunicar motivos; Câmara aprecia em 30 dias por maioria absoluta)', ref: 'Art. 72 LOM-PVH' },
      { value: '2/3 da Câmara', label: 'Quórum para aprovar Emenda à LOM (2 turnos, 10 dias — Art. 63) e para rejeitar parecer prévio do TCE-RO sobre contas do Prefeito', ref: 'Arts. 63 e 73 LOM-PVH' },
      { value: 'Mais de 15 dias', label: 'Ausência consecutiva do Prefeito do Município ou do Estado que exige autorização prévia da Câmara Municipal, sob pena de perda do cargo', ref: 'Art. 85 LOM-PVH' },
      { value: 'Até 50% de redução', label: 'Redução da carga horária do servidor municipal responsável por pessoa com deficiência que requeira cuidados imprescindíveis', ref: 'Art. 31 LOM-PVH' }
    ],
    branches: [
      {
        title: '1. Fundamentos, Símbolos, Patrimônio e Distritos (Arts. 1º–6º e 42–44)',
        icon: '🏛️',
        color: 'teal',
        nodes: [
          {
            label: 'Símbolos Oficiais (Art. 3º) e Poderes Municipais (Art. 4º)',
            detail: 'Símbolos: Bandeira, Hino e Brasão (Lei Municipal nº 249/1983). Poderes do Município: Legislativo e Executivo, independentes e harmônicos entre si.',
            badge: 'Arts. 3º e 4º'
          },
          {
            label: 'Patrimônio Municipal e o Boto do Rio Madeira (Art. 5º, VII)',
            detail: 'Inclui bens móveis/imóveis, herança jacente sobre imóvel urbano e, como bem natural, o BOTO que viva e habite nas águas do Rio Madeira e seus afluentes nos limites do território municipal!',
            badge: 'Art. 5º, VII (Boto)'
          },
          {
            label: 'Criação de Distritos (Arts. 42 a 44)',
            detail: 'Por Lei Municipal. Exige: 1/5 (quinta parte) da população, eleitorado e arrecadação exigidos p/ criar Município + na povoação-sede (categoria de Vila): mínimo de 50 moradias, escola pública, posto de saúde e posto policial. Vedada criação até 6 meses antes das eleições.',
            badge: 'Art. 43 (1/5 + 50)'
          }
        ]
      },
      {
        title: '2. Competências, Administração Pública e Servidores (Arts. 7º–41)',
        icon: '⚖️',
        color: 'indigo',
        nodes: [
          {
            label: 'Competência Privativa (Art. 7º e 7º-A) vs. Comum (Art. 8º)',
            detail: 'Transporte coletivo: mín. 3 empresas, vedado consórcio/monopólio e 1 veículo/2.000 hab. Coleta de lixo pode ter concessão autorizada pela Câmara, mas limpeza pública/varrição (Art. 7º-A, parágrafo único) é INDELEGÁVEL e exclusiva de servidores municipais.',
            badge: 'Arts. 7º e 7º-A'
          },
          {
            label: 'Obras, Logradouros (Art. 24) e Bens Municipais (Arts. 19–23)',
            detail: 'Logradouros, obras e serviços só podem receber nomes de pessoas falecidas há no mínimo 90 dias (Art. 24). Cemitérios têm caráter secular (Art. 26).',
            badge: '90 dias (Art. 24)'
          },
          {
            label: 'Servidores Municipais na LOM (Arts. 11 e 27–41)',
            detail: 'Reserva mínima de 10% para PcD nos concursos (Art. 11, parágrafo único). Redução de até 50% da carga horária para servidor responsável por PcD (Art. 31). No texto de 1990 do Art. 30 constam 2 anos para estabilidade, mas prevalecem os 3 anos da CF/88 (Art. 41) e da LC 385/2010.',
            badge: 'Arts. 11, 30 e 31'
          }
        ]
      },
      {
        title: '3. Poder Legislativo, Processo Legislativo e Contas (Arts. 45–77)',
        icon: '🗳️',
        color: 'amber',
        nodes: [
          {
            label: 'Câmara Municipal (Art. 45), Sessão (Art. 56) e Atribuições (Arts. 47–48)',
            detail: 'Sessão anual: 01/fev a 17/jul e 01/ago a 22/dez. Mesa Diretora: mandato de 2 anos, vedada recondução para o mesmo cargo na mesma legislatura. Art. 47 = com sanção do Prefeito (emendas impositivas de 1,60% da RCL, metade na Saúde); Art. 48 = competência privativa sem sanção.',
            badge: 'Arts. 45 a 58'
          },
          {
            label: 'Emenda à LOM (Arts. 62–64), Urgência (Art. 66) e Veto (Art. 72)',
            detail: 'Emenda à LOM: proposta por 1/3 da Câmara, Prefeito, 50 entidades associativas (+2 anos) ou 5% dos eleitores; 2 turnos (interstício mín. 10 dias), aprovada por 2/3 e promulgada pela Mesa. Urgência do Prefeito: 45 dias. Veto: 15 dias úteis (derrubado por maioria absoluta em 30 dias).',
            badge: 'Arts. 62 a 72'
          },
          {
            label: 'Fiscalização e Parecer Prévio do TCE-RO (Arts. 73–75)',
            detail: 'Contas ficam 60 dias à disposição dos contribuintes (Art. 75). O parecer prévio do TCE-RO sobre as contas do Prefeito só deixa de prevalecer por decisão de 2/3 dos membros da Câmara (Art. 73, § 3º).',
            badge: '2/3 no TCE (Art. 73)'
          }
        ]
      },
      {
        title: '4. Poder Executivo, Tributos, Saneamento e Saúde (Arts. 78–239)',
        icon: '🏥',
        color: 'emerald',
        nodes: [
          {
            label: 'Prefeito, Vice, Conselhos e Guarda Municipal (Arts. 78–109)',
            detail: 'Prazo de 10 dias para assumir posse (Art. 80). Dupla vacância: eleição direta em 60 dias, ou indireta pela Câmara em 15 dias se no último ano (Art. 83). Ausência > 15 dias consecutivos exige autorização da Câmara (Art. 85). Conselhos têm número ímpar (Art. 101). Guarda não age repressivamente em greve do setor público (Art. 104).',
            badge: 'Arts. 78 a 109'
          },
          {
            label: 'Saneamento Básico (Arts. 150–153) e Meio Ambiente (Arts. 212–217)',
            detail: 'Vedada a criação de aterros sanitários à margem de rios, lagos, lagunas, manguezais e mananciais (Art. 151). Relatório semestral de monitoramento da água distribuída (Art. 152). Princípio do poluidor-pagador e proteção do Rio Candeias (Art. 215).',
            badge: 'Arts. 150–152 e 215'
          },
          {
            label: 'Saúde na LOM (Arts. 171–180) e Fundo Municipal de Saúde (Art. 235)',
            detail: 'Prioridade para atividades preventivas e gratuidade (Art. 172). Vedação de recursos públicos para auxílios/subvenções a privadas com fins lucrativos (Art. 173, § 3º). Obrigatoriedade de Banco de Leite Materno Municipal sob administração da SEMUSA (Art. 175, § 3º). Fundo Municipal de Saúde criado no Art. 235.',
            badge: 'Arts. 171–180 e 235'
          }
        ]
      }
    ],
    goldenTraps: [
      {
        wrong: 'O parecer prévio do Tribunal de Contas (TCE-RO) sobre as contas anuais do Prefeito de Porto Velho pode ser derrubado por maioria absoluta dos Vereadores.',
        right: 'FALSO! Só deixará de prevalecer por decisão de 2/3 (dois terços) dos membros da Câmara Municipal, em votação nominal pública (Art. 73, § 3º da LOM-PVH e Art. 31, § 2º da CF/88).'
      },
      {
        wrong: 'Pelo Art. 7º-A da Lei Orgânica de Porto Velho, os serviços de varrição manual de vias, poda de árvores e limpeza de feiras livres podem ser terceirizados por concessão pública.',
        right: 'FALSO! O parágrafo único do Art. 7º-A veda expressamente a concessão e licitação da limpeza pública (varrição, lavagem de feiras, roçagem de córregos e poda), devendo ser exercida por servidores públicos municipais!'
      }
    ]
  },

  leg_3: {
    branches: [
      {
        title: '1. LC nº 390/2010 (PCCR Geral dos Servidores da SEMUSA)',
        icon: '🏥',
        color: 'teal',
        nodes: [
          {
            label: 'Estrutura da Carreira e Ingresso',
            detail: 'Ingresso sempre na Classe e Referência iniciais mediante concurso público de provas ou de provas e títulos. Desenvolvimento funcional por Progressão Horizontal (tempo/avaliação) e Vertical/Titulação.',
            badge: 'LC 390/2010'
          },
          {
            label: 'Grupos Ocupacionais da Saúde Municipal',
            detail: 'Organiza os cargos de nível fundamental, médio/técnico e superior da Rede Pública Municipal de Saúde de Porto Velho (SEMUSA), definindo jornadas, tabelas de vencimento e adicionais.',
            badge: 'Rede SEMUSA'
          }
        ]
      },
      {
        title: '2. LC nº 391/2010 (Quadro Específico de ACS e ACE em Porto Velho)',
        icon: '🦟',
        color: 'emerald',
        nodes: [
          {
            label: 'Regime Estatutário Efetivo e Jornada de 40 Horas',
            detail: 'Regulamenta os cargos efetivos de Agente Comunitário de Saúde (ACS) e Agente de Combate às Endemias (ACE) no âmbito da SEMUSA, submetidos ao RJU (LC 385/2010) e à jornada integral de 40h semanais.',
            badge: 'LC 391/2010'
          },
          {
            label: 'Atribuições Municipais do ACE na SEMUSA',
            detail: 'Vistoria de domicílios, depósitos, terrenos baldios e pontos estratégicos; pesquisa larvária; aplicação de larvicidas e inseticidas; bloqueio de transmissão; atualização geográfica e educação em saúde.',
            badge: 'Campo SEMUSA'
          }
        ]
      },
      {
        title: '3. LCs nº 447/2012, 449/2012 e 1.018/2025 (Atualizações da Carreira)',
        icon: '📈',
        color: 'amber',
        nodes: [
          {
            label: 'Modernização de Tabelas, Piso e Gratificações',
            detail: 'Reestruturação das tabelas vencimentais, alinhamento ao piso constitucional nacional dos Agentes (EC 120/2022 = 2 salários mínimos), incentivo de campo e adicional de insalubridade.',
            badge: 'LC 1.018/2025'
          },
          {
            label: 'Gratificação de Localidade / Interiorização',
            detail: 'Valorização do exercício profissional nos distritos rurais e ribeirinhos de Porto Velho (Eixo BR-364 e Baixo/Médio Madeira).',
            badge: 'Distritos PVH'
          }
        ]
      },
      {
        title: '4. Desenvolvimento Funcional, Progressão e Vantagens',
        icon: '🏆',
        color: 'violet',
        nodes: [
          {
            label: 'Progressão Funcional por Mérito e Qualificação',
            detail: 'Evolução nas referências e classes condicionada à aprovação no estágio probatório, avaliação periódica de desempenho favorável e cumprimento do interstício legal.',
            badge: 'Progressão'
          },
          {
            label: 'Incentivo por Titulação e Capacitação Continuada',
            detail: 'Adicional/incentivo concedido pela conclusão de cursos de aperfeiçoamento, formação técnica em vigilância em saúde, graduação e pós-graduação correlatos à área de atuação.',
            badge: 'Qualificação'
          }
        ]
      }
    ]
  },

  leg_4: {
    centralSubtitle: 'Conceito de PcD e Avaliação Biopsicossocial (Art. 2º), Igualdade e Atendimento Prioritário (Arts. 4º–9º), Direito à Saúde no SUS (Arts. 18–26), Acessibilidade e 6 Barreiras (Art. 3º), Capacidade Civil Plena, Curatela, Tomada de Decisão Apoiada e Crimes (Arts. 88–91)',
    goldenTraps: [
      {
        wrong: 'Pelo Estatuto da Pessoa com Deficiência (Lei 13.146/2015), toda pessoa com deficiência mental ou intelectual é considerada absolutamente incapaz para os atos da vida civil, exigindo interdição total.',
        right: 'FALSO! A Lei 13.146/2015 assegura a CAPACIDADE CIVIL PLENA da pessoa com deficiência (Arts. 6º e 84), inclusive para casar, exercer direitos sexuais/reprodutivos e trabalhar. A curatela é medida extraordinária e restrita apenas aos atos de natureza patrimonial e negocial (Art. 85)!'
      },
      {
        wrong: 'O acompanhante ou atendente pessoal da pessoa com deficiência tem exatamente os mesmos direitos de atendimento prioritário, mesmo quando estiver desacompanhado do titular.',
        right: 'FALSO! Pelo Art. 9º, § 1º da LBI, os direitos de atendimento prioritário estendem-se ao acompanhante ou atendente pessoal (exceto quanto à restituição do Imposto de Renda e tramitação processual — § 2º), vinculados ao atendimento da pessoa com deficiência.'
      }
    ]
  },

  leg_5: {
    centralSubtitle: 'Título I — Princípios Fundamentais (Arts. 1º–4º), Título II — Direitos e Garantias Fundamentais (Arts. 5º–13), Organização dos Municípios (Arts. 29, 29-A, 30 e 31) e Administração Pública (Arts. 37, 38 e 39)',
    branches: [
      {
        title: '1. Princípios Fundamentais da República (Arts. 1º–4º)',
        icon: '🇧🇷',
        color: 'teal',
        nodes: [
          {
            label: 'Art. 1º (SO-CI-DI-VA-PLU) e Soberania Popular',
            detail: 'Fundamentos: Soberania, Cidadania, Dignidade da pessoa humana, Valores sociais do trabalho e da livre iniciativa e Pluralismo político. Todo o poder emana do povo (sufrágio universal, plebiscito, referendo e iniciativa popular).',
            badge: 'Art. 1º'
          },
          {
            label: 'Art. 3º (Objetivos — CON-GA-ERRA-PRO) vs. Art. 4º (Relações Internacionais)',
            detail: 'Objetivos começam com verbo no infinitivo: Construir, Garantir, Erradicar, Promover. Internacional: autodeterminação, não-intervenção, solução pacífica, concessão de asilo político e integração latino-americana (parágrafo único).',
            badge: 'Arts. 3º e 4º'
          }
        ]
      },
      {
        title: '2. Direitos e Deveres Individuais e Coletivos (Art. 5º)',
        icon: '⚖️',
        color: 'indigo',
        nodes: [
          {
            label: 'Inviolabilidade Domiciliar (Inciso XI — Foco ACE)',
            detail: 'A casa é asilo inviolável. Sem consentimento do morador, só se entra: a qualquer hora (dia ou noite) em flagrante delito, desastre ou para prestar socorro; ou, SOMENTE DURANTE O DIA, por determinação judicial!',
            badge: 'Art. 5º, XI'
          },
          {
            label: 'Crimes RA-ÇÃO vs. 3TH (Incisos XLII a XLIV)',
            detail: 'RA-ÇÃO (Racismo e Ação de grupos armados contra a ordem constitucional): inafiançáveis e IMPRESCRITÍVEIS. 3TH (Tortura, Tráfico, Terrorismo e Hediondos): inafiançáveis e insuscetíveis de graça ou anistia.',
            badge: 'RA-ÇÃO ≠ 3TH'
          },
          {
            label: 'Remédios Constitucionais (HC, HD, MS, MI e Ação Popular)',
            detail: 'HC (liberdade de locomoção, gratuito), HD (dados pessoais e retificação, gratuito), MS Individual e Coletivo (direito líquido e certo não amparado por HC/HD), MI (falta de norma regulamentadora) e Ação Popular (qualquer cidadão/eleitor contra ato lesivo).',
            badge: '5 Remédios'
          }
        ]
      },
      {
        title: '3. Direitos Sociais (Arts. 6º–11), Nacionalidade e Símbolos (Arts. 12–13)',
        icon: '👷',
        color: 'emerald',
        nodes: [
          {
            label: 'Direitos Sociais (Art. 6º), Trabalhistas (Art. 7º) e Sindicais (Art. 8º)',
            detail: 'Art. 6º inclui moradia (EC 26/00), alimentação (EC 64/10) e transporte (EC 90/15), além da renda básica familiar (parágrafo único, EC 114/21). Art. 8º: unicidade sindical (mínimo 1 município) e estabilidade do dirigente sindical até 1 ano após o mandato.',
            badge: 'Arts. 6º a 11'
          },
          {
            label: 'Cargos Privativos de Brasileiro NATO (MP3.COM — Art. 12, § 3º) e Símbolos (Art. 13)',
            detail: 'Natos: Presidente e Vice da República, Presidente da Câmara, Presidente do Senado, Ministros do STF, Carreira Diplomática, Oficial das Forças Armadas e Ministro de Estado da Defesa. Símbolos da República: Bandeira, Hino, Armas e Selo.',
            badge: 'Arts. 12 e 13'
          }
        ]
      },
      {
        title: '4. Municípios (Arts. 29, 29-A, 30 e 31) e Administração Pública (Arts. 37–39)',
        icon: '🏛️',
        color: 'amber',
        nodes: [
          {
            label: 'Municípios na CF/88 (Arts. 29 a 31)',
            detail: 'Lei Orgânica votada em 2 turnos (interstício mín. 10 dias, aprovada por 2/3). Competência local e suplementar (Art. 30). Fiscalização pela Câmara com auxílio do TCE (parecer prévio sobre contas do Prefeito só cai por 2/3 dos Vereadores — Art. 31, § 2º).',
            badge: 'Arts. 29 a 31'
          },
          {
            label: 'Princípios LIMPE, Concurso, Acumulação de Saúde e Mandato (Arts. 37 a 39)',
            detail: 'Concurso válido por até 2 anos, prorrogável uma vez por igual período. Acumulação remunerada lícita (havendo compatibilidade de horários): 2 de professor; 1 de professor + 1 técnico/científico; ou 2 de profissionais de saúde (inclui ACE pela Lei 14.536/2023!).',
            badge: 'Arts. 37 a 39'
          }
        ]
      }
    ],
    goldenTraps: [
      {
        wrong: 'O Agente de Combate às Endemias pode entrar à força na residência do morador durante o dia sem ordem judicial apenas invocando o interesse sanitário.',
        right: 'FALSO! Pelo Art. 5º, XI da CF/88, sem consentimento do morador só se entra em caso de flagrante delito, desastre ou para prestar socorro, ou, durante o dia, por determinação judicial (ou autorização legal/judicial específica em imóveis abandonados nos termos da Lei 13.301/2016).'
      },
      {
        wrong: 'Funções de confiança e cargos em comissão são de livre nomeação para qualquer pessoa estranha aos quadros do serviço público.',
        right: 'FALSO! Pelo Art. 37, V da CF/88, as FUNÇÕES DE CONFIANÇA são exercidas EXCLUSIVAMENTE por servidores ocupantes de cargo efetivo, enquanto os cargos em comissão são preenchidos por servidores de carreira nos casos, condições e percentuais mínimos previstos em lei.'
      }
    ]
  },

  por_1: {
    mnemonic: 'Compreensão = O que está ESCRITO no texto ("Segundo o texto...") • Interpretação = O que se DEDUZ além do texto ("Depreende-se/Infere-se...") • 4 Vilões IBGP = Extrapolação, Redução, Contradição e Inversão',
    deadlinesAndNumbers: [
      { value: 'Compreensão ≠ Interpretação', label: 'Compreensão: coleta literal na superfície do texto; Interpretação: inferência lógica autorizada pelas pistas textuais', ref: 'Comando da Questão' },
      { value: 'Pressuposto vs. Subentendido', label: 'Pressuposto: marcado por gatilho linguístico ("parou de", "ainda", "tornou a"); Subentendido: insinuação pragmática do leitor', ref: 'Implícitos' },
      { value: '6 Funções da Linguagem', label: 'Referencial (informar), Emotiva (eu), Conativa (você/imperativo), Fática (canal), Metalinguística (código) e Poética (forma)', ref: 'Jakobson' },
      { value: '4 Distratores Clássicos', label: 'Extrapolação (viajar além), Redução (generalizar parte), Contradição (dizer o oposto) e Inversão de causa/consequência', ref: 'Banca IBGP' }
    ],
    goldenTraps: [
      {
        wrong: 'Na frase "O município voltou a registrar queda nos casos de malária", é apenas uma suposição subjetiva do leitor achar que antes já havia ocorrido queda.',
        right: 'FALSO! A locução verbal "voltou a" funciona como gatilho linguístico de PRESSUPOSTO, tornando indiscutível e linguisticamente comprovado que houve queda anteriormente.'
      },
      {
        wrong: 'Se uma alternativa traz uma afirmação verdadeira no mundo real sobre saúde pública, ela deve ser marcada mesmo que o texto da prova não trate desse ponto.',
        right: 'FALSO! Isso é a armadilha da EXTRAPOLAÇÃO. Em interpretação de texto, só é verdadeiro aquilo que o texto-base sustenta direta ou inferencialmente.'
      }
    ]
  },

  por_2: {
    mnemonic: '5 Tipos Textuais (Fixos: Narração, Descrição, Exposição, Argumentação, Injunção) ≠ Infinitos Gêneros Textuais (Sociais: notícia, editorial, crônica, bula, manual, ofício)',
    deadlinesAndNumbers: [
      { value: '5 Tipos Textuais', label: 'Narrativo (fatos no tempo), Descritivo (retrato estático), Dissertativo-Expositivo (saber), Argumentativo (tese) e Injuntivo (instruir)', ref: 'Tipologia Textual' },
      { value: 'Verbos no Imperativo', label: 'Marca gramatical dominante da tipologia INJUNTIVA ou instrucional (manuais do ACE, receitas, editais, campanhas)', ref: 'Injunção' },
      { value: 'Notícia vs. Editorial', label: 'Notícia = predominantemente narrativa/expositiva e impessoal; Editorial = dissertativo-argumentativo com tese do veículo sem assinatura individual', ref: 'Gêneros Jornalísticos' },
      { value: 'Crônica', label: 'Gênero híbrido (entre jornalismo e literatura) que parte de um fato cotidiano efêmero com olhar subjetivo, lírico ou crítico-humorístico', ref: 'Gênero Favorito IBGP' }
    ],
    goldenTraps: [
      {
        wrong: 'Notícia, reportagem, crônica, bula de remédio e artigo de opinião são exemplos de Tipos Textuais.',
        right: 'FALSO! Esses são GÊNEROS TEXTUAIS (formas sociais concretas). Os Tipos Textuais (ou sequências tipológicas) são apenas 5 estruturas linguísticas internas: narração, descrição, exposição, argumentação e injunção.'
      },
      {
        wrong: 'Todo texto dissertativo tem como objetivo convencer o leitor a mudar de opinião sobre um tema polêmico.',
        right: 'FALSO! O texto dissertativo-EXPOSITIVO apenas informa e explica um saber consensual sem defender tese polêmica; quem busca persuadir/convencer é o dissertativo-ARGUMENTATIVO.'
      }
    ]
  },

  por_3: {
    mnemonic: 'Ratificar = Confirmar | Retificar = Corrigir • Iminente = Prestes a ocorrer | Eminente = Ilustre • Infringir = Violar lei | Infligir = Aplicar pena • Polissemia = 1 palavra com vários sentidos',
    deadlinesAndNumbers: [
      { value: 'Polissemia vs. Homonímia', label: 'Polissemia = mesma origem e vários sentidos em contexto; Homonímia = origens distintas que coincidem na grafia ou no som', ref: 'Semântica Lexical' },
      { value: 'Hiperônimo → Hipônimo', label: 'Hiperônimo (geral: "arbovirose") retoma Hipônimo (específico: "dengue") garantindo coesão sem repetição', ref: 'Hierarquia Semântica' },
      { value: 'Denotação vs. Conotação', label: 'Denotativo = sentido literal/dicionário; Conotativo = sentido figurado/metafórico construído no contexto', ref: 'Plano de Sentido' },
      { value: 'Seção / Sessão / Cessão', label: 'Seção = setor/divisão; Sessão = tempo de reunião/cinema; Cessão = ato de ceder/doar', ref: 'Homônimos Homófonos' }
    ],
    goldenTraps: [
      {
        wrong: 'Em "O fiscal infligiu as normas sanitárias e por isso lhe foi infringida uma multa", os parônimos foram empregados corretamente.',
        right: 'FALSO! Os verbos foram invertidos: quem viola a norma INFRINGE a lei; quem aplica a penalidade INFLIGE a multa!'
      },
      {
        wrong: 'O termo "doença" é um hipônimo em relação a "malária" e "leishmaniose".',
        right: 'FALSO! "Doença" é o termo mais amplo/genérico (HIPERÔNIMO), enquanto "malária" e "leishmaniose" são os termos específicos (HIPÔNIMOS).'
      }
    ]
  },

  por_4: {
    mnemonic: 'Elipse = Omissão geral • Zeugma = Omissão de termo JÁ CITADO antes • Polissíndeto = Conectivo repetido • Assíndeto = Sem conectivo • Hipérbato = Inversão da ordem direta • Silepse = Concordância com a IDEIA (Gênero, Número ou Pessoa)',
    deadlinesAndNumbers: [
      { value: 'Zeugma ⊂ Elipse', label: 'A Zeugma é o caso especial de elipse em que o termo omitido já apareceu expresso anteriormente no enunciado', ref: 'Figuras por Omissão' },
      { value: '3 Tipos de Silepse', label: 'Gênero ("Vossa Excelência está preocupado"), Número ("O povo corria; gritavam") e Pessoa ("Os brasileiros somos solidários")', ref: 'Concordância Ideológica' },
      { value: 'Hipérbato (Anástrofe)', label: 'Inversão da ordem direta Sujeito-Verbo-Complemento (ex.: "Ouviram do Ipiranga as margens plácidas")', ref: 'Figuras de Inversão' },
      { value: 'Anacoluto', label: 'Quebra sintática da frase que deixa um termo inicial solto, sem função sintática na oração seguinte', ref: 'Ruptura Sintática' }
    ],
    goldenTraps: [
      {
        wrong: 'Em "Todos os agentes somos responsáveis pela saúde da comunidade", há um erro gramatical de concordância verbal.',
        right: 'FALSO! Ocorre SILEPSE DE PESSOA (concordância ideológica legítima): o sujeito está na 3ª pessoa do plural ("Todos os agentes"), mas o verbo vai para a 1ª do plural ("somos") porque o falante se inclui no grupo!'
      },
      {
        wrong: 'Na frase "Eu inspecionei o quintal; meu colega, a caixa d’água", a vírgula após "colega" marca um anacoluto.',
        right: 'FALSO! A vírgula marca uma ZEUGMA (tipo especial de elipse), substituindo a forma verbal "inspecionou" já expressa na primeira oração.'
      }
    ]
  },

  por_5: {
    mnemonic: 'Metáfora (sem "como") ≠ Comparação (com "como") • Metonímia = Parte pelo Todo / Continente pelo Conteúdo / Autor pela Obra • Antítese (palavras opostas) ≠ Paradoxo (ideia autocontraditória) • Sinestesia = Mistura de sentidos físicos',
    deadlinesAndNumbers: [
      { value: 'Metáfora vs. Comparação', label: 'Ambas aproximam termos por semelhança, mas a Comparação traz conectivo comparativo explícito ("como", "tal qual") e a Metáfora é direta', ref: 'Tropos' },
      { value: 'Catacrese', label: 'Metáfora desgastada pelo uso cotidiano por falta de nome específico ("dente de alho", "braço da cadeira", "embarcar no avião")', ref: 'Tropos' },
      { value: 'Antítese vs. Paradoxo', label: 'Antítese aproxima termos opostos sem quebrar a lógica ("vida e morte"); Paradoxo funde opostos numa mesma ideia contraditória ("ferida que dói e não se sente")', ref: 'Figuras de Pensamento' },
      { value: 'Aliteração vs. Assonância', label: 'Aliteração = repetição de sons CONSONANTAIS; Assonância = repetição de sons VOCÁLICOS', ref: 'Figuras de Som' }
    ],
    goldenTraps: [
      {
        wrong: 'Em "O morador bebeu dois copos de água filtrada", ocorre uma metáfora porque o copo foi comparado à água.',
        right: 'FALSO! Ocorre METONÍMIA (continente pelo conteúdo): ninguém bebe o vidro do copo, e sim a água contida nele (relação objetiva de contiguidade, não de semelhança).'
      },
      {
        wrong: 'Eufemismo e Hipérbole têm a mesma função expressiva de exagerar dramaticamente uma informação.',
        right: 'FALSO! A HIPÉRBOLE exagera intencionalmente ("chorei rios de lágrimas"), enquanto o EUFEMISMO suaviza uma expressão dura ou desagradável ("ele partiu desta para melhor" = morreu).'
      }
    ]
  },

  por_6: {
    centralTitle: '6. Articulação Textual: Operadores Sequenciais e Expressões Referenciais',
    centralSubtitle: 'Expressões Referenciais (Anáfora, Catáfora, Dêixis e Demonstrativos ESTE, ESSE, AQUELE) e Operadores Sequenciais / Argumentativos Escalares',
    mnemonic: 'ESSE/ISSO = Retoma o que JÁ FOI DITO (Anafórico ←) • ESTE/ISTO = Anuncia o que VAI SER DITO (Catafórico →) ou retoma o ÚLTIMO termo entre dois • AQUELE = Retoma o PRIMEIRO termo mencionado',
    branches: [
      {
        title: '1. Expressões Referenciais: Anáfora, Catáfora e Demonstrativos',
        icon: '🎯',
        color: 'teal',
        nodes: [
          {
            label: 'ESSE / ESSA / ISSO (Coesão Anafórica ←)',
            detail: 'Aponta para trás no texto, retomando um termo, ideia ou período já enunciado anteriormente ("O ACE identificou larvas no tonel; ESSE fato exigiu bloqueio imediato").',
            badge: 'ESSE = Passado Textual'
          },
          {
            label: 'ESTE / ESTA / ISTO (Coesão Catafórica →)',
            detail: 'Aponta para a frente no texto, anunciando algo que será dito a seguir ("A meta da campanha é ESTA: zerar os criadouros domésticos").',
            badge: 'ESTE = Futuro Textual'
          },
          {
            label: 'Retomada Distribuída de Dois Termos: ESTE vs. AQUELE',
            detail: 'Quando dois termos foram citados antes ("Dengue e Malária são endêmicas: ESTA é causada por protozoário; AQUELA, por vírus"), ESTE retoma o mais próximo (Malária) e AQUELE retoma o mais distante (Dengue)!',
            badge: 'Este (Último) / Aquele (1º)'
          }
        ]
      },
      {
        title: '2. Operadores Argumentativos Escalares (Adição, Limite e Ressalva)',
        icon: '📈',
        color: 'indigo',
        nodes: [
          {
            label: 'Inclusão no Topo da Escala (Até, Mesmo, Inclusive, Nem)',
            detail: 'Introduzem o argumento mais forte de uma escala ("Até os imóveis fechados foram inspecionados" / "Nem o temporal impediu a visita").',
            badge: 'Força Argumentativa'
          },
          {
            label: 'Retificação e Reformulação (Aliás, Melhor dizendo, Isto é, Ou seja)',
            detail: 'Explicam, corrigem ou ajustam a precisão do que acabou de ser dito na sequência textual.',
            badge: 'Esclarecimento'
          },
          {
            label: 'Orientação Oposta: "Pouco" vs. "Um pouco"',
            detail: '"Trabalhou POUCO" orienta para a negação/insuficiência (mas conseguiu terminar); "Trabalhou UM POUCO" orienta positivamente (e por isso avançou na meta).',
            badge: 'Escala Positiva vs. Negativa'
          }
        ]
      },
      {
        title: '3. Operadores Sequenciais de Oposição, Concessão, Causa e Conclusão',
        icon: '🔗',
        color: 'amber',
        nodes: [
          {
            label: 'Adversativos (Mas, Porém, Contudo, Todavia, Entretanto, No entanto)',
            detail: 'Introduzem argumento que prevalece sobre o anterior. Atenção a "PORQUANTO" (= porque, causal/explicativo) vs. "CONQUANTO" (= embora, concessivo)!',
            badge: 'Conquanto ≠ Porquanto'
          },
          {
            label: 'Concessivos (Embora, Ainda que, Mesmo que, Posto que, Apesar de)',
            detail: 'Admite um fato contrário na subordinada, mas a ideia da oração principal prevalece.',
            badge: 'Posto que = Embora!'
          }
        ]
      },
      {
        title: '4. Substituição Lexical, Pronomes Relativos e Advérbios Referenciais',
        icon: '🧭',
        color: 'emerald',
        nodes: [
          {
            label: 'O QUAL / CUJO / ONDE como Articuladores Referenciais',
            detail: 'CUJO indica posse entre dois substantivos (sem artigo depois); ONDE retoma exclusivamente lugar físico fixo; O QUAL evita ambiguidade quando há dois antecedentes de gêneros diferentes.',
            badge: 'Relativos no Texto'
          },
          {
            label: 'Nominalização e Epítetos Referenciais',
            detail: 'Retomar um verbo por um substantivo abstrato ("Os moradores descartaram pneus → Esse DESCARTE...") ou retomar "Porto Velho" por "a capital rondoniense".',
            badge: 'Progressão Referencial'
          }
        ]
      }
    ]
  },

  por_7: {
    mnemonic: 'Coesão = Costura visível na superfície (conectivos e pronomes) • Coerência = Lógica profunda de sentido • 4 Metarregras de Charolles = Repetição, Progressão, Não-Contradição e Relação',
    deadlinesAndNumbers: [
      { value: '4 Metarregras (Charolles)', label: '1. Repetição (continuidade temática); 2. Progressão (informação nova); 3. Não-Contradição (lógica interna); 4. Relação (conexão de fatos)', ref: 'Coerência Textual' },
      { value: 'Anáfora vs. Catáfora', label: 'Anáfora retoma termo anterior (←); Catáfora antecipa termo posterior (→)', ref: 'Coesão Referencial' },
      { value: 'A-A-A-C-E (Coordenativas)', label: 'Aditivas (e, nem), Adversativas (mas, porém), Alternativas (ou... ou), Conclusivas (logo, portanto) e Explicativas (pois, porque)', ref: 'Coesão Sequencial' },
      { value: 'Pois (Antes vs. Depois)', label: 'Antes do verbo = Explicativo/Causal (= porque); Posposto ao verbo entre vírgulas = Conclusivo (= portanto)', ref: 'Pegadinha Clássica' }
    ],
    goldenTraps: [
      {
        wrong: 'A conjunção "posto que" possui valor explicativo/causal equivalente a "porque" na norma-padrão.',
        right: 'FALSO! Na gramática normativa e nas provas da IBGP, "POSTO QUE" é locução conjuntiva CONCESSIVA (= embora, ainda que), exigindo verbo no subjuntivo!'
      },
      {
        wrong: 'Em "O agente visitou o morador com seu equipamento de proteção", o pronome "seu" garante coesão referencial perfeita sem qualquer ambiguidade.',
        right: 'FALSO! O possessivo de 3ª pessoa ("seu") gera AMBIGUIDADE referencial (não se sabe se o equipamento é do agente ou do morador), devendo ser desfeito na reescrita.'
      }
    ]
  },

  por_8: {
    centralTitle: '8. Classes de Palavras (Identificação, Flexão e Emprego) e Formação de Palavras',
    centralSubtitle: 'As 6 Classes Variáveis (Substantivo, Artigo, Adjetivo, Pronome, Numeral e Verbo), as 4 Invariáveis (Advérbio, Preposição, Conjunção e Interjeição), Derivação e Composição',
    mnemonic: '6 Variáveis (S-A-A-P-N-V) vs. 4 Invariáveis (A-P-C-I) • Parassíntese = Prefixo + Sufixo SIMULTÂNEOS (tire o prefixo: se a palavra não existir sozinha, é Parassintética!) • Derivação Imprópria = Mudança de classe sem mudar a forma',
    deadlinesAndNumbers: [
      { value: '6 Variáveis / 4 Invariáveis', label: 'Variáveis: Substantivo, Artigo, Adjetivo, Pronome, Numeral, Verbo. Invariáveis: Advérbio, Preposição, Conjunção, Interjeição', ref: '10 Classes Gramaticais' },
      { value: 'Teste da Parassíntese', label: 'Em "amanhecer" ou "entardecer", não existe "*manhecer" nem "*tardecer" -> Derivação Parassintética (diferente de "infelizmente")', ref: 'Formação de Palavras' },
      { value: 'Derivação Regressiva', label: 'Formação de substantivo abstrato deverbal de ação pela redução do verbo (combater → o combate; atacar → o ataque)', ref: 'Substantivo Deverbal' },
      { value: 'Justaposição vs. Aglutinação', label: 'Justaposição = sem perda fonética (guarda-chuva, passatempo); Aglutinação = com perda fonética (planalto, aguardente, fidalgo)', ref: 'Composição' }
    ],
    branches: [
      {
        title: '1. Classes Variáveis Nominais: Substantivo, Artigo, Adjetivo e Numeral',
        icon: '🔤',
        color: 'teal',
        nodes: [
          {
            label: 'Substantivo e Plural dos Compostos',
            detail: 'Regra de ouro dos compostos com hífen: Substantivo + Substantivo ou Adjetivo variam AMBOS (couves-flores, guardas-noturnos); Verbo ou Palavra Invariável + Substantivo varia SÓ O SEGUNDO (guarda-chuvas, abaixo-assinados); ligados por preposição varia SÓ O PRIMEIRO (pés-de-moleque).',
            badge: 'Plural dos Compostos'
          },
          {
            label: 'Adjetivo vs. Locução Adjetiva e Mudança de Posição',
            detail: 'A inversão Adjetivo + Substantivo pode mudar a classe e o sentido: "homem grande" (alto) vs. "grande homem" (ilustre); "funcionário simples" (humilde) vs. "simples funcionário" (mero).',
            badge: 'Posição do Adjetivo'
          }
        ]
      },
      {
        title: '2. Pronomes (Pessoais, Demonstrativos, Relativos e Indefinidos)',
        icon: '🗣️',
        color: 'indigo',
        nodes: [
          {
            label: 'Pronomes Retos (Eu, Tu) vs. Oblíquos (Mim, Ti, O/A vs. Lhe)',
            detail: 'Após preposição essencial usa-se MIM/TI, salvo se for sujeito de verbo no infinitivo ("Para EU fazer a vistoria" vs. "Trouxe o mapa para MIM"). O/A/OS/AS funcionam como Objeto Direto; LHE/LHES como Objeto Indireto (ou adjunto adnominal de posse).',
            badge: 'Eu vs. Mim | O vs. Lhe'
          },
          {
            label: 'Pronomes Relativos (Que, Quem, O qual, Cujo, Onde)',
            detail: 'Retomam antecedente e introduzem oração subordinada adjetiva. "CUJO" concorda com o consequente e jamais admite artigo depois dele ("o bairro cujas ruas").',
            badge: 'Pronomes Relativos'
          }
        ]
      },
      {
        title: '3. As 4 Classes Invariáveis (Advérbio, Preposição, Conjunção e Interjeição)',
        icon: '🧭',
        color: 'amber',
        nodes: [
          {
            label: 'Advérbio (Invariável!) vs. Adjetivo (Variável)',
            detail: 'O advérbio modifica Verbo, Adjetivo ou outro Advérbio e NÃO varia ("Eles falaram ALTO / As agentes estão MEIO cansadas"). Quando modifica substantivo, é adjetivo/pronome indefinido e varia ("Fizeram BASTANTES visitas").',
            badge: 'Advérbio Não Varia!'
          },
          {
            label: 'Preposição Relational vs. Nocional e Derivação Imprópria',
            detail: 'Derivação imprópria (conversão) muda a classe sem alterar a forma: "O NÃO foi imediato" (advérbio substantivado com artigo "o"); "Caminharam RÁPIDO" (adjetivo adverbializado).',
            badge: 'Derivação Imprópria'
          }
        ]
      },
      {
        title: '4. Processos de Formação de Palavras (Derivação e Composição)',
        icon: '🧩',
        color: 'emerald',
        nodes: [
          {
            label: 'Parassintética vs. Prefixal e Sufixal',
            detail: 'Em "DESLEALDADE", existem "desleal" e "lealdade" → Derivação Prefixal e Sufixal. Em "ANOITECER" ou "EMUDECER", não existem "*noitecer" nem "*mudecer" → Derivação Parassintética (simultânea)!',
            badge: 'Teste do Esqueleto'
          },
          {
            label: 'Composição: Justaposição vs. Aglutinação',
            detail: 'Justaposição une radicais sem perda de fonemas (girassol, pontapé, segunda-feira). Aglutinação une radicais COM perda fonética (planalto = plano + alto; embora = em + boa + hora; vinagre = vinho + acre).',
            badge: 'Justaposição vs. Aglutinação'
          }
        ]
      }
    ],
    goldenTraps: [
      {
        wrong: 'A palavra "infelizmente" é formada por derivação parassintética porque possui prefixo (in-) e sufixo (-mente).',
        right: 'FALSO! Como existem na língua as palavras "infeliz" e "felizmente", os afixos não foram obrigados a entrar simultaneamente: trata-se de Derivação Prefixal e Sufixal!'
      },
      {
        wrong: 'Em "Encontraram bastantes focos no terreno", a palavra "bastantes" está incorreta porque advérbio não tem plural.',
        right: 'FALSO! A frase está CORRETA: antes do substantivo "focos", "bastantes" é pronome indefinido/adjetivo (= muitos) e concorda normalmente no plural!'
      }
    ]
  },

  por_9: {
    mnemonic: 'Indicativo = Certeza • Subjuntivo = Hipótese/Desejo • Imperativo Negativo = 100% do Presente do Subjuntivo • MARIO (Mediar, Ansiar, Remediar, Incendiar, Odiar -> -eio) • Intervir = Vir | Provir = Vir | Prover = Ver',
    deadlinesAndNumbers: [
      { value: 'Pretérito Mais-que-Perfeito', label: 'Desinência "-RA" átona (ex.: "fizera, trouxera, houvera") = "tinha/havia feito" (passado anterior a outro passado)', ref: 'Tempos do Indicativo' },
      { value: 'Intervir = Conjugado por VIR', label: 'Passado: "Ele interveio / Nós interviemos / Eles intervieram". Futuro do Subjuntivo: "Quando eu intervier"', ref: 'Verbos Derivados' },
      { value: 'Ver vs. Vir no Subjuntivo', label: 'VER -> Quando eu VIR / Se nós VÍRMOS; VIR -> Quando eu VIER / Se nós VIERMOS; MANTER -> Quando eu MANTIVER', ref: 'Futuro do Subjuntivo' },
      { value: 'Voz Passiva Sintética', label: 'VTD (ou VTDI) + pronome apassivador "SE" + Sujeito Paciente (concorda no plural: "Eliminam-se os focos")', ref: 'Vozes Verbais' }
    ],
    goldenTraps: [
      {
        wrong: 'Na frase "O supervisor interviu na reunião da equipe", o verbo intervir está conjugado segundo a norma-padrão.',
        right: 'FALSO! "Intervir" conjuga-se exatamente como "VIR" (ele veio → ele INTERVEIO; eles vieram → eles INTERVIERAM). A forma "*interviu" não existe na norma culta!'
      },
      {
        wrong: 'A oração "Precisa-se de novos agentes de endemias" pode ser passada para a voz passiva analítica ("Novos agentes são precisados").',
        right: 'FALSO! Como o verbo "precisar" é Transitivo Indireto (pede a preposição "de"), o "SE" é Índice de Indeterminação do Sujeito, e a oração está na VOZ ATIVA (não admite voz passiva!).'
      }
    ]
  },

  por_10: {
    centralTitle: '10. Concordância Verbal e Nominal (Regra Geral e Casos Especiais IBGP)',
    centralSubtitle: 'Verbos Impessoais (Haver e Fazer), Voz Passiva Sintética vs. Sujeito Indeterminado (SE), Sujeito Composto, Partitivos, Porcentagens e Concordância Nominal (Anexo, Mesmo, Meio, Bastante, É proibido)',
    mnemonic: 'HAVER (= existir) e FAZER (= tempo) são IMPESSOAIS -> Ficam no SINGULAR (e passam a impessoalidade para o auxiliar: "Deve haver / Vai fazer")! • VTD + SE = Concorda ("Vendem-se casas") | VTI + SE = Singular ("Trata-se de casos")',
    deadlinesAndNumbers: [
      { value: 'Haver (Existir) = Singular', label: '"Havia muitos focos / Deve haver soluções" (impessoal, sem sujeito). Já "Existir/Ocorrer" têm sujeito e vão ao plural ("Devem existir soluções")', ref: 'Verbos Impessoais' },
      { value: 'VTD + SE vs. VTI + SE', label: 'VTD + SE (Partícula Apassivadora) concorda com o sujeito ("Notificaram-se os casos"); VTI/VI + SE (IIS) fica no singular ("Precisa-se de técnicos")', ref: 'Partícula SE' },
      { value: 'Sujeito Posposto ao Verbo', label: 'Com sujeito composto DEPOIS do verbo ("Faltou/Faltaram água e cloro"), o verbo concorda com todos (plural) ou com o núcleo mais próximo', ref: 'Sujeito Composto' },
      { value: 'É proibido vs. É proibida', label: 'Sem determinante = invariável ("É proibido entrada"); Com artigo/pronome feminino = concorda ("É proibida A entrada")', ref: 'Concordância Nominal' }
    ],
    branches: [
      {
        title: '1. Verbos Impessoais (Haver, Fazer, Fenômenos) e Verbo SER',
        icon: '🚫',
        color: 'teal',
        nodes: [
          {
            label: 'Haver (= Existir/Ocorrer/Tempo) e Fazer (= Tempo/Clima)',
            detail: 'Não possuem sujeito e ficam obrigatoriamente na 3ª pessoa do singular: "Havia 20 focos no bairro / Faz três anos que passei". Nas locuções verbais, contaminam o auxiliar: "Deve haver 20 focos / Vai fazer três anos". (Atenção: Existir, Ocorrer e Acontecer são pessoais e variam: "Devem existir 20 focos"!).',
            badge: 'Deve haver vs. Devem existir'
          },
          {
            label: 'Verbo SER em Horas, Datas e Distâncias',
            detail: 'Concorda com o numeral: "É uma hora / São duas horas / São vinte de junho" (mas "Hoje é dia 20 de junho", concordando com a palavra "dia").',
            badge: 'Horas e Datas'
          }
        ]
      },
      {
        title: '2. Concordância com a Partícula "SE", Partitivos, Porcentagens e "Mais de um"',
        icon: '✅',
        color: 'indigo',
        nodes: [
          {
            label: 'Partícula Apassivadora (PA) vs. Índice de Indeterminação (IIS)',
            detail: 'Sem preposição no termo seguinte (VTD + SE) → Voz Passiva Sintética: o termo é Sujeito Paciente e o verbo CONCORDA ("Analisaram-se as amostras"). Com preposição obrigatória (VTI + SE) → Sujeito Indeterminado: verbo no SINGULAR ("Trata-se de amostras graves").',
            badge: 'PA (Plural) vs. IIS (Singular)'
          },
          {
            label: 'Expressões Partitivas e Porcentagens',
            detail: 'Em "A maioria dos moradores apoiou / apoiaram" e "1% dos imóveis apresentou / apresentaram", o verbo pode concordar com o núcleo partitivo/numeral (singular) ou com o especificador plural.',
            badge: 'Dupla Concordância'
          }
        ]
      },
      {
        title: '3. Concordância Nominal: Regra Geral vs. Concordância Atrativa',
        icon: '📏',
        color: 'amber',
        nodes: [
          {
            label: 'Adjetivo Posposto vs. Anteposto a Dois Substantivos',
            detail: 'Posposto ("tanque e caixa tampados / tampada"): concorda com o mais próximo ou vai para o masculino plural (gramatical). Anteposto ("Mantinha fechadas a caixa e o tonel"): na função de adjunto adnominal concorda com o mais próximo.',
            badge: 'Posposto vs. Anteposto'
          }
        ]
      },
      {
        title: '4. Casos Especiais de Concordância Nominal (Anexo, Mesmo, Meio, Bastante, Só)',
        icon: '🔑',
        color: 'emerald',
        nodes: [
          {
            label: 'Anexo, Incluso, Mesmo, Próprio, Quite e Obrigado (Variáveis!)',
            detail: 'Concordam em gênero e número com o substantivo/pronome a que se referem: "As planilhas seguem anexas" (exceção: "em anexo" é invariável); "Elas mesmas fizeram a vistoria" (mas "mesmo" = até/realmente é invariável); "Estamos quites".',
            badge: 'Anexas / Elas mesmas'
          },
          {
            label: 'Meio vs. Meia, Bastante vs. Bastantes e Só vs. Sós',
            detail: 'Meio (= um pouco, advérbio) é invariável: "A porta ficou meio aberta"; Meia (= metade) varia: "Tomou meia colher". Só (= sozinho, adjetivo) varia: "Eles ficaram sós"; Só (= somente, advérbio) não varia ("a sós" também é invariável).',
            badge: 'Meio aberta / Sós'
          }
        ]
      }
    ],
    goldenTraps: [
      {
        wrong: 'Na frase "Devem haver muitos criadouros naquele terreno baldio", o verbo auxiliar concorda corretamente com "muitos criadouros".',
        right: 'FALSO! O verbo "haver" no sentido de existir é impessoal (não tem sujeito) e transmite sua impessoalidade ao verbo auxiliar: o correto é "DEVE HAVER muitos criadouros" (ou "Devem existir muitos criadouros").'
      },
      {
        wrong: 'Em "Trata-se de medidas urgentes de saúde pública", o verbo deveria estar no plural ("Tratam-se") para concordar com "medidas urgentes".',
        right: 'FALSO! Como "tratar-se" rege a preposição "de" (VTI), o "se" é Índice de Indeterminação do Sujeito e o verbo fica obrigatoriamente na 3ª pessoa do SINGULAR ("Trata-se de medidas urgentes")!'
      }
    ]
  },

  por_11: {
    centralTitle: '11. Regência Verbal e Nominal (Verbos de Prova e Pronomes Relativos)',
    centralSubtitle: 'Regência dos Verbos Campeões (Assistir, Aspirar, Visar, Implicar, Preferir, Obedecer, Esquecer/Lembrar, Chegar/Morar, Pagar/Perdoar, Simpatizar), Regência Nominal e Relativos (Onde, Aonde, Cujo)',
    mnemonic: 'IMPLICAR (acarretar) = VTD sem "em"! • PREFERIR X a Y (sem "do que" e sem "mais")! • OBEDECER / DESOBEDECER = VTI com "a"! • ESQUECER / LEMBRAR: Sem pronome = sem "de" | Com pronome (me/se) = com "de"!',
    deadlinesAndNumbers: [
      { value: 'Assistir / Aspirar / Visar', label: 'Mudam de sentido conforme a regência: Assistir (ver = VTI "a"), Aspirar (desejar = VTI "a", sem "lhe") e Visar (objetivar = VTI "a")', ref: 'Mudança de Sentido' },
      { value: 'Implicar (Acarretar) = VTD', label: 'No sentido de gerar consequência é Transitivo Direto SEM preposição "em" ("O descaso implica risco de epidemia")', ref: 'Campeão de Prova' },
      { value: 'Preferir X a Y', label: 'Rege apenas a preposição "A"; rejeita "mais", "antes" e "do que" ("Prefiro prevenir A remediar")', ref: 'VTDI' },
      { value: 'Onde (Em) vs. Aonde (A)', label: 'ONDE = verbos estáticos que pedem "em" (morar, ficar); AONDE = verbos de movimento que pedem "a" (ir, chegar, levar)', ref: 'Regência + Relativos' }
    ],
    branches: [
      {
        title: '1. Verbos que Mudam de Sentido Conforme a Regência',
        icon: '🎯',
        color: 'teal',
        nodes: [
          {
            label: 'ASSISTIR: Ver (VTI com "a") vs. Ajudar/Socorrer (VTD ou VTI) vs. Caber (VTI)',
            detail: 'No sentido de presenciar/ver é VTI e NÃO aceita "lhe" (usa-se "a ele/a ela"): "Assistimos AO treinamento e assistimos A ELE". No sentido de prestar assistência médica, é VTD (ou VTI): "O médico assistiu O paciente".',
            badge: 'Assistir AO filme (a ele)'
          },
          {
            label: 'ASPIRAR: Inalar (VTD) vs. Desejar/Almejar (VTI com "a", sem "lhe")',
            detail: 'Inalar/cheirar = VTD ("Aspirou O pó"). Almejar/pretender = VTI com "a" e rejeita "lhe" ("Aspirava AO cargo de ACE / Aspirava A ELE").',
            badge: 'Aspirar AO cargo (a ele)'
          },
          {
            label: 'VISAR: Mirar/Rubricar (VTD) vs. Ter em vista/Objetivar (VTI com "a")',
            detail: 'Mirar o alvo ou dar visto em documento = VTD ("Visou O formulário"). Ter como objetivo = VTI com "a" ("A campanha visa AO controle vetorial").',
            badge: 'Visar AO objetivo'
          }
        ]
      },
      {
        title: '2. Os 5 Verbos de Regência Fixa Mais Cobrados pela IBGP',
        icon: '⚡',
        color: 'indigo',
        nodes: [
          {
            label: 'IMPLICAR (Acarretar) e SIMPATIZAR / ANTIPATIZAR',
            detail: 'IMPLICAR (= acarretar/produzir consequência) é VTD direto, SEM preposição "em" ("A falha implica demissão"). SIMPATIZAR e ANTIPATIZAR são VTI (com "com"), mas NÃO são pronominais (nunca diga "*simpatizei-me")!',
            badge: 'Implica algo (sem "em"!)'
          },
          {
            label: 'PREFERIR e OBEDECER / DESOBEDECER',
            detail: 'PREFERIR exige "preferir X A Y" (proibido usar "mais", "muito mais" ou "do que"). OBEDECER e DESOBEDECER são sempre VTI (pedem preposição "A": "Obedeça ÀS normas", embora admitam voz passiva!).',
            badge: 'Preferir X a Y | Obedecer a'
          },
          {
            label: 'ESQUECER / LEMBRAR e PAGAR / PERDOAR',
            detail: 'Esquecer/Lembrar: sem pronome = VTD ("Esqueci o crachá"); com pronome = VTI com "de" ("Esqueci-me DO crachá"). Pagar/Perdoar: coisa = OD ("Paguei a taxa"); pessoa = OI com "a" ("Paguei AO servidor").',
            badge: 'Esqueci X vs. Esqueci-me DE X'
          }
        ]
      },
      {
        title: '3. Verbos de Movimento/Estáticos (Chegar, Ir, Morar, Residir) e Informar',
        icon: '🧭',
        color: 'amber',
        nodes: [
          {
            label: 'CHEGAR e IR (Preposição "A") vs. MORAR, RESIDIR e SITUAR (Preposição "EM")',
            detail: 'Chegar e Ir exigem a preposição "A" (e não "em"): "Chegamos À unidade de saúde". Morar, residir e situar exigem a preposição "EM" (e não "a"): "Reside NA Rua Sete de Setembro".',
            badge: 'Chegar A / Morar EM'
          },
          {
            label: 'INFORMAR, AVISAR, CERTIFICAR e NOTIFICAR (VTDI)',
            detail: 'Pedem um Objeto Direto e um Objeto Indireto: informa-se ALGO (OD) A ALGUÉM (OI) ou informa-se ALGUÉM (OD) DE/SOBRE ALGO (OI) — nunca dois objetos iguais!',
            badge: 'Algo A alguém / Alguém DE algo'
          }
        ]
      },
      {
        title: '4. Regência Nominal e Regência com Pronomes Relativos',
        icon: '🔗',
        color: 'emerald',
        nodes: [
          {
            label: 'Substantivos e Adjetivos de Prova',
            detail: 'Acessível A, alheio A, ansioso POR/PARA, apto A/PARA, aversão A/POR, capacidade DE/PARA, compatível COM, imune A/DE, nocivo A, obediente A, passível DE, residente EM.',
            badge: 'Regência Nominal'
          },
          {
            label: 'Preposição Antes do Relativo (A que, De que, Com que, Cujo, Onde vs. Aonde)',
            detail: 'A preposição exigida pelo verbo após o relativo desloca-se para ANTES do relativo: "O equipamento DE QUE preciso" (precisar de); "A meta A QUE visamos" (visar a); "O distrito AONDE fomos" (ir a) vs. "O distrito ONDE atuamos" (atuar em).',
            badge: 'De que / A que / Aonde'
          }
        ]
      }
    ],
    goldenTraps: [
      {
        wrong: 'A frase "O atraso na notificação implica em grave prejuízo para o bloqueio epidemiológico" está correta segundo a norma-padrão.',
        right: 'FALSO! No sentido de acarretar/gerar consequência, o verbo IMPLICAR é Transitivo Direto e rejeita a preposição "em": o correto é "implica grave prejuízo".'
      },
      {
        wrong: 'Em "O bairro onde a equipe se dirigiu ontem fica na Zona Leste", o pronome "onde" foi empregado corretamente.',
        right: 'FALSO! Quem se dirige, dirige-se A algum lugar (movimento com preposição "a"). Portanto, exige-se "AONDE a equipe se dirigiu" (ou "ao qual a equipe se dirigiu")!'
      }
    ]
  },

  por_12: {
    mnemonic: 'Troque a feminina por MASCULINA: se der AO, tem CRASE (À)! • 3 Facultativos = ATÉ + Minha/Sua/Nossa (singular) + Nome Próprio Feminino • NUNCA antes de Masculino, Verbo, Pronome Geral ou Plural com "a" no singular!',
    deadlinesAndNumbers: [
      { value: 'A (prep.) + A (art.) = À', label: 'Teste infalível: substitua a palavra feminina por uma masculina equivalente; se aparecer "AO", ocorre crase ("À")', ref: 'Regra Geral' },
      { value: '3 Casos Facultativos', label: '1. Após a preposição ATÉ; 2. Antes de pronome possessivo feminino singular (minha/sua); 3. Antes de nome próprio feminino', ref: 'Uso Facultativo' },
      { value: 'Locuções Femininas = À', label: 'Locuções adverbiais, prepositivas e conjuntivas femininas levam crase obrigatória ("às vezes, à noite, à medida que, à procura de")', ref: 'Uso Obrigatório' },
      { value: 'Casa / Terra / Distância', label: 'Sem especificador = SEM crase ("Voltei a casa / Ficou a distância"); Determinados = COM crase ("Voltei à casa dos pais / Ficou à distância de 2m")', ref: 'Casos Especiais' }
    ],
    goldenTraps: [
      {
        wrong: 'Em "A campanha refere-se a pessoas vulneráveis da comunidade", falta o acento grave indicativo de crase em "a pessoas".',
        right: 'FALSO! Quando o "a" está no singular diante de palavra no PLURAL ("a pessoas"), trata-se apenas de preposição (sem artigo), sendo PROIBIDO o uso da crase!'
      },
      {
        wrong: 'Nas expressões de horas como "O atendimento funciona de 8h às 17h", o uso da crase em "às 17h" está correto.',
        right: 'FALSO! Pela regra do paralelismo sintático: "de 8h a 17h" (sem artigo nos dois → sem crase) ou "das 8h às 17h" (com artigo nos dois → com crase)!'
      }
    ]
  },

  por_13: {
    mnemonic: 'Fatores de Próclise = N-R-P-I-S-D (Negativas, Relativos, Pronomes Indefinidos, Interrogativos, Subordinativas, Advérbios sem vírgula) • 3 Proibições = NUNCA iniciar frase com oblíquo átono; NUNCA ênclise no Futuro nem no Particípio!',
    deadlinesAndNumbers: [
      { value: '6 Atrativos de Próclise', label: 'Palavras negativas, advérbios (sem vírgula), pronomes relativos, indefinidos, interrogativos e conjunções subordinativas', ref: 'Próclise Obrigatória' },
      { value: 'Vírgula Isola o Advérbio', label: 'Com vírgula após o advérbio inicial ("Aqui, trabalha-se muito"), cessa a atração e usa-se ÊNCLISE!', ref: 'Pausa Fonética' },
      { value: 'Mesóclise (Futuros)', label: 'Usada com Futuro do Presente ("Dar-se-á") ou Futuro do Pretérito ("Far-se-ia") desde que NÃO haja palavra atrativa antes', ref: 'Mesóclise' },
      { value: '3 Proibições Absolutas', label: '1. Iniciar período com pronome átono; 2. Usar ênclise no futuro ("*fará-se"); 3. Usar ênclise no particípio ("*tinha falado-me")', ref: 'Vedações Normativas' }
    ],
    goldenTraps: [
      {
        wrong: 'Na frase "Não realizar-se-á a borrifação em caso de chuva", a mesóclise é obrigatória por causa do verbo no futuro.',
        right: 'FALSO! A Próclise VENCE a Mesóclise! Como há a palavra negativa "Não" antes do verbo, a próclise é obrigatória: "Não SE realizará a borrifação".'
      },
      {
        wrong: 'Em "Ontem, se identificaram novos focos no bairro", a próclise é obrigatória por causa do advérbio "Ontem".',
        right: 'FALSO! Como o advérbio "Ontem" está isolado por VÍRGULA, ele perde a força atrativa e não se pode iniciar a oração após a pausa com pronome átono: o correto é "Ontem, identificaram-se novos focos".'
      }
    ]
  },

  por_14: {
    mnemonic: 'Adjunto Adnominal (Agente/Posse, concreto ou abstrato) ≠ Complemento Nominal (Paciente/Alvo, sempre com preposição e nunca com substantivo concreto!) • Subordinadas Substantivas (= ISSO) • Adjetivas (= QUE relativo: Sem vírgula Restritiva / Com vírgula Explicativa)',
    deadlinesAndNumbers: [
      { value: 'AA vs. CN (Subst. Abstrato)', label: 'Com substantivo abstrato + "de": se pratica a ação = Adjunto Adnominal ("resposta do aluno"); se sofre a ação = Complemento Nominal ("leitura do edital")', ref: 'Termos da Oração' },
      { value: '6 Subord. Substantivas', label: 'Trocam por ISSO: Subjetiva, Objetiva Direta, Objetiva Indireta, Completiva Nominal, Predicativa e Apositiva (após dois-pontos)', ref: 'Conjunção Integrante' },
      { value: 'Restritiva vs. Explicativa', label: 'Adjetiva Restritiva (sem vírgulas) limita a um subgrupo; Adjetiva Explicativa (entre vírgulas) generaliza para todo o conjunto', ref: 'Mudança de Sentido' },
      { value: '9 Subord. Adverbiais', label: '6 C + F-P-T: Causal, Consecutiva, Condicional, Concessiva, Comparativa, Conformativa + Final, Proporcional e Temporal', ref: 'Período Composto' }
    ],
    goldenTraps: [
      {
        wrong: 'As frases "Os moradores que limparam os quintais evitaram a dengue" e "Os moradores, que limparam os quintais, evitaram a dengue" possuem exatamente o mesmo sentido.',
        right: 'FALSO! Sem vírgulas (Adjetiva Restritiva) significa que APENAS os moradores que limparam evitaram a dengue; com vírgulas (Adjetiva Explicativa) significa que TODOS os moradores limparam e todos evitaram!'
      },
      {
        wrong: 'Na expressão "a vistoria dos imóveis pelo agente", ambos os termos preposicionados exercem a função de adjunto adnominal.',
        right: 'FALSO! Como "imóveis" sofre a ação de ser vistoriado (paciente), "dos imóveis" é COMPLEMENTO NOMINAL; já "pelo agente" pratica a ação.'
      }
    ]
  },

  por_15: {
    mnemonic: 'Proparoxítonas = TODAS acentuadas • Oxítonas = A, E, O, EM, ENS • Paroxítonas = NÃO terminadas em A, E, O, EM, ENS (incluindo ditongo crescente!) • Hiato = I e U tônicos sozinhos (ou com S) na sílaba, salvo após ditongo em paroxítona ou antes de NH',
    deadlinesAndNumbers: [
      { value: 'Oxítonas vs. Paroxítonas', label: 'Regras opostas: Oxítonas levam acento em A, E, O, EM, ENS; Paroxítonas levam acento em L, N, R, X, I, U, Ã, ÃO, PS, UM e Ditongos', ref: 'Regras Gerais' },
      { value: 'Regra Especial do Hiato', label: 'I e U tônicos em hiato com vogal anterior levam acento (sa-ú-de, pa-ís, ba-ú, ca-í-ram — diferente de rainha e cair)', ref: 'Atenção: Não confundir c/ ditongo!' },
      { value: 'Ditongos Abertos ÉI e ÓI', label: 'Perderam o acento nas PAROXÍTONAS (ideia, jiboia, heroico, assembleia), mas mantêm nas OXÍTONAS e monossílabos (herói, papéis, céu)', ref: 'Novo Acordo Ortográfico' },
      { value: 'Têm / Vêm e Derivados', label: 'Ele tem / Eles têm; Ele vem / Eles vêm; Ele mantém / Eles mantêm; Ele intervém / Eles intervêm (singular agudo, plural circunflexo)', ref: 'Acento Diferencial' }
    ],
    goldenTraps: [
      {
        wrong: 'As palavras "saúde", "país" e "heroico" são acentuadas pela mesma regra dos ditongos abertos.',
        right: 'FALSO! "Sa-ú-de" e "pa-ís" são acentuadas pela REGRA DO HIATO (vogais U e I tônicas isoladas em hiato), enquanto "heroico" perdeu o acento no Novo Acordo por ser paroxítona com ditongo aberto "oi"!'
      },
      {
        wrong: 'As palavras "história", "água" e "médico" são acentuadas pela mesma regra gramatical.',
        right: 'FALSO! "Médico" é proparoxítona real, enquanto "história" e "água" são PAROXÍTONAS terminadas em ditongo crescente (ou proparoxítonas aparentes/eventuais).'
      }
    ]
  },

  por_16: {
    centralTitle: '16. Ortografia Oficial: Emprego das Letras, Hífen, Os 4 Porquês e Dificuldades Ortográficas',
    centralSubtitle: 'Relações Som-Grafema (S/Z, X/CH, G/J, SS/Ç/SC), Tabela Completa do Hífen (Novo Acordo Ortográfico, co- e re-), Os 4 Porquês e Expressões Homônimas/Parônimas (Mal/Mau, Onde/Aonde, Há/A, Senão/Se não)',
    mnemonic: 'Hífen = Vogais IGUAIS separam com hífen (micro-ondas, anti-inflamatório), EXCETO os prefixos CO- e RE- (coorganizar, reeleição)! Vogais DIFERENTES juntam (autoescola, infraestrutura)! • R ou S após vogal = Dobra a consoante (antirrábico, ultrassom)!',
    deadlinesAndNumbers: [
      { value: 'Vogais Iguais vs. Diferentes', label: 'Com hífen: micro-ondas, contra-ataque (exceção: co- e re- juntam sempre: cooperar, reescrever). Sem hífen: autoescola, semiaberto', ref: 'Regra do Hífen' },
      { value: 'Vogal + R ou S = Dobram', label: 'Prefixo terminado em vogal + palavra iniciada por R ou S: juntam e dobram (antirrábico, antissocial, minissaia, biorritmo)', ref: 'Regra do Hífen' },
      { value: 'Os 4 Porquês', label: 'Por que (início/pergunta ou = pelo qual); Por quê (antes de ponto); Porque (resposta/causa = pois); Porquê (substantivo = o motivo)', ref: 'Emprego dos Porquês' },
      { value: 'Mal (Bem) vs. Mau (Bom)', label: 'MAL opõe-se a BEM (advérbio/substantivo/conjunção); MAU opõe-se a BOM (adjetivo variável: maus hábitos, má conduta)', ref: 'Pares Ortográficos' }
    ],
    branches: [
      {
        title: '1. Emprego das Letras: Relações Som-Grafema (S/Z, X/CH, G/J, SS/Ç)',
        icon: '🔤',
        color: 'teal',
        nodes: [
          {
            label: 'Emprego do S vs. Z (Sufixos -ês/-esa, -isar vs. -izar, -ez/-eza)',
            detail: 'Usa-se S: após ditongos (coisa, causa, lousa), nos sufixos de origem/título (-ês, -esa: rondoniense, princesa) e em verbos cujo radical já tem S (pesquisa → pesquisar; análise → analisar). Usa-se Z: nos substantivos abstratos derivados de adjetivos (-ez, -eza: limpidez, pobreza, rigidez) e em verbos cujo radical não tem S (atual → atualizar; higienizar).',
            badge: 'Analisar (S) vs. Atualizar (Z)'
          },
          {
            label: 'Emprego do X vs. CH e G vs. J',
            detail: 'Usa-se X: após ditongo (caixa, peixe, frouxo — exceto recauchutar/caucho), após a sílaba inicial EN- (enxada, enxaqueca, enxame — exceto encher/encharcar, derivados de cheio) e após ME- inicial (mexer, mexicano — exceto mecha). Usa-se J em palavras de origem tupi/africana (jiboia, pajé, jenipapo) e nos verbos terminados em -jar (viajem = verbo vs. a viagem = substantivo).',
            badge: 'Enxame (X) vs. Encharcar (CH)'
          }
        ]
      },
      {
        title: '2. O Emprego do Hífen no Novo Acordo Ortográfico',
        icon: '🔗',
        color: 'indigo',
        nodes: [
          {
            label: 'Vogais Iguais (Com Hífen) vs. Vogais Diferentes (Junto)',
            detail: 'Prefixo termina com a MESMA vogal com que começa o 2º elemento → COM HÍFEN (anti-inflamatório, micro-ondas, contra-ataque). Exceção oficial: prefixos CO- e RE- aglutinam-se mesmo diante de O e E (coocupante, coorganizar, reeleição, reestruturação)! Vogais diferentes → JUNTO (autoescola, infraestrutura, semiaberto).',
            badge: 'Exceção: Coorganizar / Reeleição'
          },
          {
            label: 'Prefixos Sempre com Hífen e Palavras Iniciadas por H, R ou S',
            detail: 'Diante de H → sempre COM hífen (anti-higiênico, super-homem). Prefixo em vogal + R ou S → junta e DOBRA (antirrábico, antissocial, ultrassom). Sempre com hífen: EX-, VICE-, ALÉM-, AQUÉM-, RECÉM-, SEM-, PRÉ-, PRÓ-, PÓS- (tônicos) e SUB-/SOB- antes de B ou R (sub-região, sub-bloco).',
            badge: 'Antirrábico / Sub-região'
          }
        ]
      },
      {
        title: '3. Os 4 Porquês (Por que, Por quê, Porque e Porquê)',
        icon: '❓',
        color: 'amber',
        nodes: [
          {
            label: 'POR QUE (Separado sem acento) vs. POR QUÊ (Separado com acento)',
            detail: 'POR QUE: (1) início/meio de perguntas diretas ou indiretas (= por qual razão: "Por que o foco voltou?"); (2) pronome relativo (= pelo qual / pela qual: "Os caminhos por que passei"). POR QUÊ: exclusivamente no FIM da frase ou isolado antes de pausa/ponto ("O foco voltou, mas não sei por quê.").',
            badge: 'Pergunta/Relativo vs. Fim de Frase'
          },
          {
            label: 'PORQUE (Junto sem acento) vs. PORQUÊ (Junto com acento)',
            detail: 'PORQUE: conjunção causal ou explicativa em respostas (= pois, já que, visto que: "Não fui porque choveu"). PORQUÊ: substantivo masculino antecedido de artigo/pronome (= o motivo, a razão: "Não entendi o porquê da recusa").',
            badge: 'Explicação vs. Substantivo (O porquê)'
          }
        ]
      },
      {
        title: '4. Dificuldades Ortográficas Campeãs (Há/A, Mal/Mau, Senão/Se não, Afim/A fim)',
        icon: '🎯',
        color: 'emerald',
        nodes: [
          {
            label: 'HÁ (Passado / Existir) vs. A (Futuro / Distância)',
            detail: 'HÁ (verbo haver) indica tempo decorrido/passado ("Há dois meses fizemos o LIRAa") ou existência ("Há focos aqui"). A (preposição) indica tempo futuro ("Daqui a duas semanas") ou distância ("Fica a 100 metros").',
            badge: 'Há (Passado) vs. A (Futuro)'
          },
          {
            label: 'SENÃO (Caso contrário / Mas sim) vs. SE NÃO (Caso não)',
            detail: 'SENÃO (junto) = caso contrário, exceto, defeito ("Tampe a caixa, senão o mosquito prolifera"). SE NÃO (separado) = conjunção condicional "caso não" ("Se não chover amanhã, faremos o bloqueio"). A FIM DE = para (finalidade) vs. AFIM = semelhante/parente.',
            badge: 'Senão vs. Se não'
          }
        ]
      }
    ],
    goldenTraps: [
      {
        wrong: 'Pela regra das vogais iguais do Novo Acordo Ortográfico, as palavras "co-organizar" e "re-eleição" devem ser grafadas obrigatoriamente com hífen.',
        right: 'FALSO! Os prefixos CO- e RE- são exceções expressas no Acordo Ortográfico: eles se unem sem hífen mesmo quando o segundo elemento começa por "o" ou "e" (coorganizar, cooperar, reeleição, reescrever)!'
      },
      {
        wrong: 'Em "Daqui há quinze dias começará o novo ciclo de visitas", o verbo haver foi empregado corretamente.',
        right: 'FALSO! Para indicar tempo FUTURO (especialmente após "daqui"), usa-se a preposição "A" ("Daqui A quinze dias"), e jamais o verbo "há" (que indica tempo passado decorrido)!'
      }
    ]
  },

  por_17: {
    mnemonic: 'PROIBIDO separar por vírgula: Sujeito + Verbo + Complementos (Ordem SVC)! • Vírgula OBRIGATÓRIA: Vocativo, Aposto Explicativo, Adjunto Adverbial Longo Deslocado e Orações Subordinadas Antepostas! • Duplo Travessão = Par de Vírgulas = Parênteses',
    deadlinesAndNumbers: [
      { value: 'Proibição Absoluta (SVC)', label: 'Jamais colocar uma única vírgula entre o Sujeito e o Verbo ou entre o Verbo e seus Complementos (mesmo que o sujeito seja longo!)', ref: 'Ordem Direta' },
      { value: 'Vocativo vs. Aposto', label: 'Vocativo (chamamento) é SEMPRE isolado por vírgula; Aposto Explicativo é isolado por vírgulas, travessões ou dois-pontos', ref: 'Termos Isolados' },
      { value: 'Vírgula antes do "E"', label: 'Permitida quando as orações coordenadas ligadas pelo "E" possuem SUJEITOS DIFERENTES ou quando o "E" tem valor adversativo (= mas)', ref: 'Período Composto' },
      { value: 'Ponto e Vírgula (;)', label: 'Separa itens de enumerações legais ou orações coordenadas que já possuem vírgula interna (pausa intermediária)', ref: 'Outros Sinais' }
    ],
    goldenTraps: [
      {
        wrong: 'Quando o sujeito de uma oração é muito extenso, recomenda-se colocar uma vírgula logo antes do verbo para facilitar a respiração.',
        right: 'FALSO! A pontuação em Língua Portuguesa segue critério SINTÁTICO, e não respiratório: é terminantemente proibido separar o sujeito do verbo por uma única vírgula, independentemente do tamanho do sujeito!'
      },
      {
        wrong: 'A substituição das vírgulas que isolam uma oração subordinada adjetiva explicativa por ponto final mantém a correção gramatical.',
        right: 'FALSO! Substituir vírgulas por travessões duplos ou parênteses mantém a correção, mas colocar ponto final fragmentaria o período deixando a subordinada truncada.'
      }
    ]
  },

  por_18: {
    mnemonic: '4 Dimensões da Variação: Diatópica = LUGAR/Região • Diastrática = GRUPO SOCIAL/Jargão • Diafásica = SITUAÇÃO/Grau de Formalidade (Monitoramento) • Diacrônica = TEMPO/História',
    deadlinesAndNumbers: [
      { value: 'Diatópica (Geográfica)', label: 'Diferenças regionais de vocabulário e sotaque no espaço (ex.: "carapanã" em Porto Velho vs. "pernilongo/muriçoca" em outras regiões)', ref: 'Eixo do Lugar' },
      { value: 'Diastrática (Social)', label: 'Variedades associadas a grupos sociais, faixas etárias, escolaridade ou jargões técnicos profissionais', ref: 'Eixo Social' },
      { value: 'Diafásica (Situacional)', label: 'Adequação do mesmo falante ao contexto comunicativo (registro formal/monitorado num ofício vs. informal em casa)', ref: 'Eixo do Estilo/Registro' },
      { value: 'Diacrônica (Histórica)', label: 'Mudança da língua ao longo do tempo histórico (ex.: "Vossa Mercê → vosmecê → você")', ref: 'Eixo do Tempo' }
    ],
    goldenTraps: [
      {
        wrong: 'Quando um Agente de Combate às Endemias adapta sua linguagem técnica para explicar de modo simples o ciclo do mosquito a um morador, ele comete um desvio condenável da norma-padrão.',
        right: 'FALSO! Trata-se de ADEQUAÇÃO LINGUÍSTICA (variação diafásica consciente), fundamental para a eficácia comunicativa na educação em saúde.'
      },
      {
        wrong: 'O uso da palavra regional "carapanã" em Porto Velho para designar o mosquito é exemplo de variação diacrônica (histórica).',
        right: 'FALSO! A diferença de vocabulário conforme a região geográfica do país classifica-se como variação DIATÓPICA (ou geográfica/regional).'
      }
    ]
  },

  rlm_1: {
    mnemonic: 'ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ • Nº de Divisores = Soma 1 em cada expoente primo e multiplica: (a+1)(b+1) • MMC = Múltiplo Comum (Encontros futuros / Ciclos simultâneos) • MDC = Maior Divisor (Dividir em pacotes iguais de tamanho máximo sem sobra)',
    deadlinesAndNumbers: [
      { value: 'n(D) = (a+1)(b+1)(c+1)', label: 'Fórmula da quantidade total de divisores naturais de N = p₁ᵃ · p₂ᵇ · p₃ᶜ', ref: 'Decomposição Prima' },
      { value: 'MMC(a,b) × MDC(a,b) = a × b', label: 'Identidade fundamental que relaciona o Mínimo Múltiplo Comum e o Máximo Divisor Comum de dois números', ref: 'Teorema MMC/MDC' },
      { value: 'Fração Geratriz (9 e 0)', label: 'No denominador: tantos 9 quantos forem os algarismos do período e tantos 0 quantos forem os do antiperíodo', ref: 'Dízimas Periódicas' },
      { value: '(-3)² = +9 vs. -3² = -9', label: 'Com parênteses a base é negativa (+9); sem parênteses o sinal negativo fica fora da potência (-9)', ref: 'Potenciação' }
    ],
    goldenTraps: [
      {
        wrong: 'O número 1 é o menor número primo natural, e todo número primo é obrigatoriamente ímpar.',
        right: 'FALSO! O número 1 NÃO é primo (possui apenas 1 divisor), e o menor número primo é o 2, que é o único número primo PAR!'
      },
      {
        wrong: 'Para dividir 120 frascos de larvicida e 90 luvas no menor número possível de kits iguais sem sobrar nada, deve-se calcular o MMC(120, 90).',
        right: 'FALSO! Problemas de divisão exata em partes iguais de tamanho máximo (menor quantidade de kits) resolvem-se pelo MDC(120, 90) = 30 itens por kit!'
      }
    ]
  },

  rlm_3: {
    mnemonic: '1 m³ = 1.000 Litros | 1 dm³ = 1 Litro | 1 cm³ = 1 mL • 1 Hectare (ha) = 10.000 m² • Horas Decimais: multiplique a parte decimal por 60 min (ex.: 2,4 h = 2h + 0,4×60 = 2h 24min, e NÃO 2h 40min!)',
    deadlinesAndNumbers: [
      { value: '1 m³ = 1.000 Litros', label: 'Ponte fundamental de cubagem de caixas d’água e cisternas no trabalho de campo do ACE (1 dm³ = 1 L; 1 cm³ = 1 mL)', ref: 'Volume ↔ Capacidade' },
      { value: '0,1 h = 6 minutos', label: 'Conversão de hora decimal para minutos sexagesimais (multiplica-se a parte decimal por 60: 0,4 h = 24 min; 0,75 h = 45 min)', ref: 'Tempo (Base 60)' },
      { value: '1 ha = 10.000 m²', label: 'Medida agrária oficial equivalente a 1 hectômetro quadrado (1 hm² = quadrado de 100 m × 100 m)', ref: 'Unidades de Área' },
      { value: '1 g = 1.000 mg | 1 t = 1.000 kg', label: 'Escala de massa de 10 em 10 (kg → hg → dag → g → dg → cg → mg), essencial para cálculo de larvicida em mg/L', ref: 'Massa e Dosagem' }
    ],
    goldenTraps: [
      {
        wrong: 'Um trabalho de campo que durou 3,3 horas corresponde exatamente a 3 horas e 30 minutos.',
        right: 'FALSO! O sistema de tempo é sexagesimal (base 60): 0,3 × 60 = 18 minutos. Portanto, 3,3 horas equivalem a 3 horas e 18 minutos (3h 30min seria 3,5 horas)!'
      },
      {
        wrong: 'Para converter 2,5 m² em cm², basta deslocar a vírgula duas casas para a direita (250 cm²).',
        right: 'FALSO! Nas unidades de ÁREA (m² → dm² → cm²), cada degrau vale 2 casas decimais (×100). De m² para cm² são 2 degraus = 4 casas decimais: 2,5 m² = 25.000 cm² (e em VOLUME m³ → cm³ são 3 casas por degrau)!'
      }
    ]
  },

  rlm_4: {
    mnemonic: 'Função do 1º Grau: f(x) = ax + b (a = taxa de variação/inclinação; b = valor inicial quando x = 0; raiz = -b/a) • Média Ponderada = Soma(Valor × Peso) ÷ Soma dos Pesos • Soma Total = Média × Quantidade',
    deadlinesAndNumbers: [
      { value: 'f(x) = ax + b', label: 'a > 0 crescente; a < 0 decrescente; b = intercepto no eixo y; raiz x = -b/a (onde f(x) = 0)', ref: 'Função Afim' },
      { value: 'Soma = Média × n', label: 'Atalho de ouro da Média Aritmética Simples: descubra sempre a SOMA total antes e depois de incluir/retirar um elemento', ref: 'Média Simples' },
      { value: 'MP = Σ(xᵢ · pᵢ) / Σpᵢ', label: 'Na Média Aritmética Ponderada, divide-se pela SOMA DOS PESOS (ou frequências), e nunca pela quantidade de linhas da tabela', ref: 'Média Ponderada' },
      { value: 'Adição vs. Substituição', label: 'Sistemas lineares 2×2: some as equações após multiplicar uma delas para cancelar uma incógnita imediatamente', ref: 'Sistemas do 1º Grau' }
    ],
    goldenTraps: [
      {
        wrong: 'Em uma tabela com 3 equipes (Equipe A de 10 agentes com média 20 visitas; Equipe B de 30 agentes com média 40 visitas), a média geral de visitas por agente é (20 + 40) ÷ 2 = 30.',
        right: 'FALSO! Como as equipes têm tamanhos (pesos) diferentes, deve-se calcular a MÉDIA PONDERADA: (10×20 + 30×40) ÷ (10 + 30) = 1.400 ÷ 40 = 35 visitas por agente!'
      },
      {
        wrong: 'Se um agente gasta 1/3 do estoque pela manhã e 1/2 do restante à tarde, ele gastou ao todo 1/3 + 1/2 = 5/6 do estoque.',
        right: 'FALSO! "1/2 do RESTANTE" incide sobre o que sobrou da manhã (2/3): metade de 2/3 é 1/3. Logo, ele gastou 1/3 + 1/3 = 2/3, restando 1/3 do estoque!'
      }
    ]
  },

  rlm_5: {
    branches: [
      {
        title: '1. O que É vs. O que NÃO É Proposição Lógica e Tabela-Verdade (2ⁿ)',
        icon: '🧠',
        color: 'teal',
        nodes: [
          {
            label: 'Definição de Proposição e os 3 Princípios Lógicos',
            detail: 'Sentença declarativa com verbo e sentido completo que admite um único valor lógico (V ou F). Regida pelos princípios da Identidade, Não-Contradição e Terceiro Excluído. Uma tabela-verdade com n proposições simples possui 2ⁿ linhas.',
            badge: '2ⁿ Linhas'
          },
          {
            label: 'Os 5 Casos que NÃO são Proposições (P-E-I-S-P)',
            detail: '1. Frases interrogativas ("Quantos focos há?"); 2. Exclamativas ("Que perigo!"); 3. Imperativas/ordens ("Tampe a caixa d’água!"); 4. Sentenças abertas com variável livre ("x + 2 = 7", "Ele é agente"); 5. Paradoxos autorreferentes.',
            badge: 'Não são Proposições'
          }
        ]
      },
      {
        title: '2. Tabela de Ouro dos 5 Conectivos Lógicos (∧, ∨, ⊻, →, ↔)',
        icon: '⚡',
        color: 'indigo',
        nodes: [
          {
            label: 'Conjunção (E: ∧) vs. Disjunção Inclusiva (OU: ∨)',
            detail: 'Conjunção (P ∧ Q): só é VERDADEIRA quando ambas são V (V ∧ V = V). Disjunção inclusiva (P ∨ Q): só é FALSA quando ambas são F (F ∨ F = F).',
            badge: 'E (Tudo V) | OU (Basta 1 V)'
          },
          {
            label: 'Condicional (Se P, então Q: → — Regra Vera Fischer)',
            detail: 'Só é FALSA quando o antecedente é V e o consequente é F (V → F = F). Se o antecedente for F ou o consequente for V, a condicional é sempre VERDADEIRA!',
            badge: 'V → F = F'
          },
          {
            label: 'Disjunção Exclusiva (Ou... ou: ⊻) vs. Bicondicional (Se e somente se: ↔)',
            detail: 'Disjunção exclusiva (P ⊻ Q): V quando têm valores DIFERENTES. Bicondicional (P ↔ Q): V quando têm valores IGUAIS.',
            badge: '⊻ ≠ ↔'
          }
        ]
      },
      {
        title: '3. Negações (De Morgan e MANÉ) e Equivalências (Contrapositiva e NEYMAR)',
        icon: '🔄',
        color: 'amber',
        nodes: [
          {
            label: 'Leis de De Morgan (Negação do E e do OU) e Negação da Condicional (MANÉ)',
            detail: '~(P ∧ Q) ⇔ ~P ∨ ~Q (nega tudo e troca E por OU). ~(P ∨ Q) ⇔ ~P ∧ ~Q (nega tudo e troca OU por E). Negação de "Se P, então Q": ~(P → Q) ⇔ P ∧ ~Q (MAntém a 1ª E NEga a 2ª — jamais use "Se... então" na negação!).',
            badge: 'MANÉ: P ∧ ~Q'
          },
          {
            label: 'As 2 Equivalências da Condicional (P → Q)',
            detail: '1. Contrapositiva (Inverte e Nega as duas): P → Q ⇔ ~Q → ~P. 2. Regra do NEYMAR (Nega a 1ª OU Mantém a 2ª): P → Q ⇔ ~P ∨ Q.',
            badge: '~Q → ~P | ~P ∨ Q'
          }
        ]
      },
      {
        title: '4. Tautologia, Condição Suficiente/Necessária e Quantificadores',
        icon: '⚖️',
        color: 'emerald',
        nodes: [
          {
            label: 'Tautologia (100% V), Contradição (100% F) e Condição SUN (p → q)',
            detail: 'Em p → q: o antecedente p é Condição SUFICIENTE para q, e o consequente q é Condição NECESSÁRIA para p (Mnemônico: SUN -> SUficiente vem antes de Necessária!). Em p ↔ q: necessária e suficiente.',
            badge: 'p (Suficiente) → q (Necessária)'
          },
          {
            label: 'Negação dos Quantificadores (Todo, Nenhum e Algum)',
            detail: 'Negação de "TODO A é B" = "ALGUM A não é B" (Pelo menos um / Existe um A que não é B — nunca negue Todo com Nenhum!). Negação de "NENHUM A é B" = "ALGUM A é B".',
            badge: '~(Todo) = Algum não é'
          }
        ]
      }
    ],
    goldenTraps: [
      {
        wrong: 'A negação lógica da proposição "Se chove, então o rio sobe" é "Se não chove, então o rio não sobe".',
        right: 'FALSO! A condicional NUNCA se nega com outra condicional! Pela regra do MANÉ (~(P → Q) ⇔ P ∧ ~Q), a negação correta é: "Chove E o rio não sobe".'
      },
      {
        wrong: 'A negação de "Todos os depósitos foram vistoriados" é "Nenhum depósito foi vistoriado".',
        right: 'FALSO! Para quebrar a afirmação universal "Todos foram vistoriados", basta que PELO MENOS UM (Algum) depósito não tenha sido vistoriado!'
      }
    ]
  },

  rlm_6: {
    mnemonic: 'Modus Ponens (Afirma o 1º → Afirma o 2º) | Modus Tollens (Nega o 2º → Nega o 1º) • Pertinência (∈: elemento-conjunto) ≠ Inclusão (⊂: conjunto-conjunto) • Conjunto das Partes = 2ⁿ subconjuntos • n(A ∪ B) = n(A) + n(B) - n(A ∩ B)',
    deadlinesAndNumbers: [
      { value: 'n(P(A)) = 2ⁿ', label: 'Número total de subconjuntos (Conjunto das Partes) de um conjunto finito com n elementos (inclui ∅ e o próprio A)', ref: 'Conjunto das Partes' },
      { value: 'n(A ∪ B) = n(A)+n(B)-n(A∩B)', label: 'Princípio da Inclusão-Exclusão para 2 conjuntos (no diagrama de Venn, comece sempre preenchendo pela INTERSEÇÃO!)', ref: 'Operações c/ Conjuntos' },
      { value: 'Modus Ponens vs. Tollens', label: 'Ponens: P→Q e P ⊢ Q; Tollens: P→Q e ~Q ⊢ ~P (Cuidado: afirmar Q ou negar P é falácia/argumento inválido!)', ref: 'Validade de Argumentos' },
      { value: 'Resto de N ÷ k (Ciclos)', label: 'Em sequências cíclicas de período k, o resto da divisão de N por k indica a posição exata dentro do bloco (resto 0 = último)', ref: 'Sequências Lógicas' }
    ],
    goldenTraps: [
      {
        wrong: 'Se 30 agentes atuam contra a Dengue, 25 atuam contra a Malária e 10 atuam em ambas, o total de agentes dessas equipes é 30 + 25 + 10 = 65.',
        right: 'FALSO! Os 10 agentes da interseção já estão contados dentro dos 30 e dentro dos 25. Pela fórmula n(D ∪ M) = 30 + 25 - 10 = 45 agentes!'
      },
      {
        wrong: 'Das premissas "Todo ACE é servidor público" e "Algum servidor público é biólogo", conclui-se necessariamente que "Algum ACE é biólogo".',
        right: 'FALSO! No diagrama de Venn, o conjunto dos biólogos pode interceptar a região dos servidores públicos totalmente fora do círculo menor dos ACEs, tornando o argumento INVÁLIDO.'
      }
    ]
  },

  rlm_7: {
    centralTitle: '7. Análise Combinatória: Princípio Fundamental da Contagem (PFC), Arranjos, Permutações e Combinações',
    centralSubtitle: 'PFC Multiplicativo ("E") e Aditivo ("OU"), Permutação Simples (n!), com Repetição (Anagramas) e Circular ((n-1)!), Arranjo Simples (Ordem Importa) vs. Combinação Simples (Ordem NÃO Importa)',
    mnemonic: 'A ORDEM IMPORTA? SIM (Senhas, Pódio, Cargos distintos) = ARRANJO A(n,p) = n!/(n-p)! • NÃO (Comissões, Equipes, Duplas, Salada de frutas) = COMBINAÇÃO C(n,p) = n!/[p!(n-p)!] (divide por p! para tirar a ordem!)',
    deadlinesAndNumbers: [
      { value: 'Pₙ = n! | 0! = 1', label: 'Permutação Simples usa todos os n elementos disponíveis (ex.: 5 agentes em fila = 5! = 120 modos)', ref: 'Permutação Simples' },
      { value: 'PCₙ = (n - 1)!', label: 'Permutação Circular (em roda/mesa redonda sem referência fixa): fixa-se 1 elemento e permutam-se os demais', ref: 'Permutação Circular' },
      { value: 'A(n,p) = n! / (n - p)!', label: 'Arranjo Simples: escolhe p elementos entre n quando a ORDEM altera a natureza do agrupamento (ex.: 1º, 2º e 3º lugares)', ref: 'Ordem Importa!' },
      { value: 'C(n,p) = n! / [p!(n - p)!]', label: 'Combinação Simples: escolhe um subconjunto de p elementos entre n quando a ORDEM NÃO importa ({A,B} = {B,A})', ref: 'Ordem NÃO Importa!' }
    ],
    branches: [
      {
        title: '1. Princípio Fundamental da Contagem (PFC Multiplicativo e Aditivo)',
        icon: '🔢',
        color: 'teal',
        nodes: [
          {
            label: 'Princípio Multiplicativo ("E" — Etapas Sucessivas e Independentes)',
            detail: 'Se uma decisão ocorre em etapas sucessivas (escolher 1 camisa dentre 4 E 1 calça dentre 3 E 1 bota dentre 2), multiplicam-se as possibilidades: 4 × 3 × 2 = 24 modos. Em problemas com restrição (ex.: número par ou elementos que não podem começar com zero), comece sempre preenchendo pela casa da RESTRIÇÃO!',
            badge: 'Comece pela Restrição!'
          },
          {
            label: 'Princípio Aditivo ("OU" — Casos Mutuamente Exclusivos)',
            detail: 'Quando o problema se divide em casos alternativos disjuntos ("Caso 1 OU Caso 2"), calcula-se cada caso separadamente e SOMAM-SE os resultados.',
            badge: 'E = Multiplica | OU = Soma'
          }
        ]
      },
      {
        title: '2. Permutações: Simples (n!), com Repetição (Anagramas) e Circular ((n-1)!)',
        icon: '🔄',
        color: 'indigo',
        nodes: [
          {
            label: 'Permutação Simples (Pₙ = n!) e Bloco Unido ("Sempre Juntos")',
            detail: 'Troca apenas a posição de TODOS os n elementos. Se dois elementos devem ficar SEMPRE JUNTOS (ex.: Ana e Bruno juntos numa fila de 5 pessoas), amarre-os como 1 único bloco (4! = 24) e multiplique pela permutação interna do bloco (2! = 2) → 24 × 2 = 48!',
            badge: 'Juntos = Amarre em 1 Bloco!'
          },
          {
            label: 'Permutação com Repetição (Anagramas) e Permutação Circular',
            detail: 'Anagramas com letras repetidas: Pₙ^(a,b) = n! ÷ (a! · b!). Exemplo: ARARA (5 letras, 3 A e 2 R) = 5! ÷ (3! · 2!) = 120 ÷ 12 = 10 anagramas. Em roda/mesa circular: PCₙ = (n - 1)!.',
            badge: 'n! / (a!·b!) | (n-1)!'
          }
        ]
      },
      {
        title: '3. Arranjo Simples: Quando a Ordem Importa (Aₙ,ₚ)',
        icon: '🥇',
        color: 'amber',
        nodes: [
          {
            label: 'Como Reconhecer um Problema de Arranjo',
            detail: 'Escolhemos p elementos dentre n (p < n) e inverter a ordem gera um resultado DIFERENTE: formação de senhas/placas, pódio (ouro, prata e bronze) ou cargos com funções distintas (1 Coordenador e 1 Relator).',
            badge: 'Cargos Distintos = Arranjo'
          },
          {
            label: 'Cálculo Rápido pelo Método dos Tracinhos (Sem Fórmula)',
            detail: 'Para escolher 1 Coordenador e 1 Secretário entre 10 agentes: 10 opções para Coordenador × 9 opções restantes para Secretário = 90 maneiras.',
            badge: 'A(10,2) = 10 × 9 = 90'
          }
        ]
      },
      {
        title: '4. Combinação Simples: Quando a Ordem NÃO Importa (Cₙ,ₚ)',
        icon: '🤝',
        color: 'emerald',
        nodes: [
          {
            label: 'Como Reconhecer um Problema de Combinação',
            detail: 'Escolhemos p elementos dentre n com funções IGUAIS (formar uma equipe, comissão, dupla de campo, escolher questões de uma prova ou pontos para formar triângulos): escolher {João, Maria} é idêntico a escolher {Maria, João}!',
            badge: 'Equipes/Duplas = Combinação'
          },
          {
            label: 'Combinação com "Pelo Menos Um" (Método Total − Proibido)',
            detail: 'Para formar uma equipe de 3 agentes (dentre 5 homens e 4 mulheres) com PELO MENOS 1 mulher: calcule o Total sem restrição C(9,3) = 84 e subtraia o caso proibido (nenhuma mulher = só homens) C(5,3) = 10 → 84 - 10 = 74 equipes!',
            badge: 'Total − Nenhum'
          }
        ]
      }
    ],
    goldenTraps: [
      {
        wrong: 'Para escolher uma dupla de agentes de campo dentre 8 servidores disponíveis, o número de duplas possíveis é 8 × 7 = 56.',
        right: 'FALSO! Em uma dupla de campo não há hierarquia (a ordem NÃO importa: {A, B} é a mesma dupla que {B, A}). Deve-se dividir por 2!: C(8,2) = (8 × 7) ÷ 2 = 28 duplas!'
      },
      {
        wrong: 'O número de anagramas da palavra SAÚDE que começam por vogal é igual a 5! = 120.',
        right: 'FALSO! SAÚDE tem 5 letras distintas, sendo 3 vogais (A, Ú, E). Fixando 1 das 3 vogais na 1ª posição (3 opções) e permutando as 4 letras restantes (4! = 24), temos 3 × 24 = 72 anagramas!'
      }
    ]
  },

  rlm_8: {
    mnemonic: 'Laplace: P(A) = Favoráveis / Total (equiprováveis) • Regra do OU = Soma e tira a Interseção • Regra do E = Multiplica • Pelo menos 1 = 1 - P(Nenhum) • Casa dos Pombos = Pior Caso + 1',
    deadlinesAndNumbers: [
      { value: 'P(A ∪ B) = P(A)+P(B)-P(A∩B)', label: 'Probabilidade da União ("A ou B"): some as probabilidades individuais e subtraia a interseção para não contar em dobro', ref: 'Regra do OU' },
      { value: 'P(Pelo menos 1) = 1 - P(0)', label: 'Evento complementar: muito mais rápido calcular 100% menos a probabilidade de NENHUM ocorrer', ref: 'Complementar' },
      { value: 'P(A|B) = P(A ∩ B) / P(B)', label: 'Probabilidade Condicional ("sabendo que B ocorreu"): o evento B passa a ser o novo universo reduzido (denominador)', ref: 'Condicional' },
      { value: 'Pior Cenário + 1', label: 'Princípio da Casa dos Pombos: esgote o limite máximo sem atingir a meta em todas as categorias e some + 1', ref: 'Certeza Dedutiva' }
    ],
    goldenTraps: [
      {
        wrong: 'Em uma urna com 4 bolas verdes e 6 vermelhas, a probabilidade de retirar 2 bolas verdes seguidas SEM reposição é (4/10) × (4/10) = 16%.',
        right: 'FALSO! Na retirada SEM reposição, a 1ª bola não volta para a urna: na 2ª retirada restam apenas 3 verdes num total de 9 bolas. Logo, P = (4/10) × (3/9) = 12/90 = 2/15 (≈ 13,33%)!'
      },
      {
        wrong: 'Em uma caixa com 10 luvas pretas e 10 luvas brancas misturadas no escuro, bastam 2 retiradas para garantir com certeza um par da mesma cor.',
        right: 'FALSO! No pior cenário, as 2 primeiras luvas podem sair de cores diferentes (1 preta e 1 branca). Pelo Princípio da Casa dos Pombos (2 cores × 1 + 1), são necessárias 3 retiradas para garantir um par da mesma cor!'
      }
    ]
  },

  atu_1: {
    centralSubtitle: 'Geopolítica e Economia Mundial (BRICS+, G20 no Brasil, COP30 na Amazônia, Conflitos), Economia e Política Nacional (Reforma Tributária EC 132/2023, Censo 2022) e Fatos de Rondônia e Porto Velho (Estiagem/Cheias do Rio Madeira e Saúde)',
    goldenTraps: [
      {
        wrong: 'A Reforma Tributária aprovada pela EC nº 132/2023 unificou todos os tributos brasileiros em um único imposto federal gerido exclusivamente pela União.',
        right: 'FALSO! O Brasil adotou o modelo de IVA DUAL: a CBS (Contribuição sobre Bens e Serviços, de competência federal, substituindo PIS/Cofins/IPI) e o IBS (Imposto sobre Bens e Serviços, de competência compartilhada de Estados e Municípios, substituindo ICMS e ISS).'
      },
      {
        wrong: 'Durante os anos de 2023 e 2024, a Bacia do Rio Madeira em Porto Velho registrou exclusivamente cheias recordes ininterruptas, sem períodos de seca.',
        right: 'FALSO! Em outubro de 2023 e setembro/outubro de 2024, o Rio Madeira em Porto Velho enfrentou as duas piores ESTIAGENS (secas históricas) já registradas pela ANA/CPRM, isolando comunidades ribeirinhas do Baixo Madeira.'
      }
    ]
  },

  atu_2: {
    centralSubtitle: 'Movimentos Artísticos e Vanguardas Mundiais, Arte e Cultura no Brasil (Barroco, Semana de Arte Moderna de 1922, Concretismo, Tropicália), Patrimônio de Porto Velho/RO e Movimentos Sociais',
    goldenTraps: [
      {
        wrong: 'O Forte Príncipe da Beira, tombado pelo IPHAN em Rondônia, localiza-se no centro urbano de Porto Velho às margens do Rio Jamari.',
        right: 'FALSO! O Real Forte Príncipe da Beira (construído a partir de 1776 no ciclo pombalino) localiza-se no município de COSTA MARQUES/RO, na margem direita do Rio Guaporé (fronteira com a Bolívia)!'
      },
      {
        wrong: 'As Três Caixas d’Água de Porto Velho (As Três Marias) foram construídas na década de 1980 após a criação do Estado de Rondônia.',
        right: 'FALSO! Foram erguidas entre 1910 e 1912 pela Chicago Bridge & Iron Works durante a construção da Estrada de Ferro Madeira-Mamoré (EFMM), sendo o símbolo histórico e cultural máximo de Porto Velho.'
      }
    ]
  },

  atu_3: {
    centralSubtitle: 'Formação Histórica (Tratado de Petrópolis 1903, EFMM 1907–1912, Município de PVH 1914, Território do Guaporé 1943, Rondônia 1956 e Estado de RO LC 41/1981), Geografia Física, Demografia IBGE 2022 e Distritos de Porto Velho',
    branches: [
      {
        title: '1. Território, Limites e Demografia Oficial de Porto Velho (IBGE 2022)',
        icon: '🗺️',
        color: 'teal',
        nodes: [
          {
            label: 'Superlativos Geográficos de Porto Velho',
            detail: 'Maior capital brasileira em extensão territorial (~34.091 km²), única capital brasileira que faz fronteira internacional (com a Bolívia/Pando, a oeste) e divisa interestadual com Amazonas (norte) e Acre (oeste/noroeste).',
            badge: '34.091 km² | Fronteira Bolívia'
          },
          {
            label: 'Demografia Oficial (Censo IBGE 2022 vs. Estimativas)',
            detail: 'Censo 2022: 460.434 habitantes em Porto Velho (estimativa 2024/2025 ~514 mil) e 1.581.196 habitantes no Estado de Rondônia (52 municípios).',
            badge: '460.434 hab. (Censo 2022)'
          }
        ]
      },
      {
        title: '2. Os Distritos de Porto Velho (Eixo BR-364 vs. Baixo e Médio Madeira)',
        icon: '🚤',
        color: 'indigo',
        nodes: [
          {
            label: 'Eixo Rodoviário BR-364 / Alto Madeira e União Bandeirantes',
            detail: 'Jaci-Paraná, Mutum-Paraná, Abunã, Fortaleza do Abunã, Vista Alegre do Abunã, Extrema, Nova Califórnia (na ponta oeste junto ao Acre) e União Bandeirantes.',
            badge: 'Eixo BR-364'
          },
          {
            label: 'Eixo Fluvial (Baixo e Médio Rio Madeira)',
            detail: 'São Carlos, Nazaré, Calama e Demarcação (acessíveis por via fluvial no Baixo Madeira, com forte atuação das equipes de saúde ribeirinhas e de controle de malária da SEMUSA).',
            badge: 'Baixo Madeira (Fluvial)'
          }
        ]
      },
      {
        title: '3. Estrada de Ferro Madeira-Mamoré (EFMM) e Missão Oswaldo Cruz (1910)',
        icon: '🚂',
        color: 'amber',
        nodes: [
          {
            label: 'Tratado de Petrópolis (1903) e Construção da EFMM (1907–1912)',
            detail: '366 km ligando Porto Velho a Guajará-Mirim para contornar o trecho encachoeirado dos rios Madeira e Mamoré. Em 1910, Oswaldo Cruz e Belisário Penna estiveram em Porto Velho implantando a profilaxia contra a malária com quinino.',
            badge: '366 km | Oswaldo Cruz 1910'
          }
        ]
      },
      {
        title: '4. Linha do Tempo Política (1914 → 1943 → 1956 → 1981) e Geografia Física',
        icon: '🏛️',
        color: 'emerald',
        nodes: [
          {
            label: 'Quatro Datas Críticas de Prova (1914, 1943, 1956 e 1981)',
            detail: '02/10/1914: Criação do Município de Porto Velho (ainda no AM, instalado em 24/01/1915). 13/09/1943: Criação do Território Federal do Guaporé (Decreto-Lei 5.812, 1º governador Aluízio Ferreira). 17/02/1956: Mudança do nome para Território Federal de Rondônia. 22/12/1981: Elevação a Estado de Rondônia pela LC nº 41/1981 (instalado em 04/01/1982, governador Jorge Teixeira).',
            badge: '1914 | 1943 | 1956 | 1981'
          },
          {
            label: 'Relevo (Pico Três Irmãos), Clima (Am) e Hidrografia (Rio Madeira)',
            detail: 'Ponto culminante de RO: Pico Três Irmãos (Serra dos Pacaás Novos, ~1.126 m). Clima Equatorial Quente e Úmido (Am) com estação seca de inverno (friagem). Bacia do Rio Madeira e sub-bacias (Jamari, Machado/Ji-Paraná, Guaporé e Mamoré).',
            badge: 'Pico Três Irmãos | Clima Am'
          }
        ]
      }
    ],
    goldenTraps: [
      {
        wrong: 'O Município de Porto Velho foi criado em 1943 juntamente com o Território Federal do Guaporé.',
        right: 'FALSO! O Município de Porto Velho foi criado quase 30 anos antes, em 2 de outubro de 1914 (Lei nº 757 do Estado do Amazonas), sendo instalado em 24 de janeiro de 1915!'
      },
      {
        wrong: 'Os distritos de Calama, Nazaré e São Carlos ficam ao longo da rodovia BR-364 na divisa com o Estado do Acre.',
        right: 'FALSO! Calama, Nazaré, São Carlos e Demarcação são distritos RIBEIRINHOS do Baixo Madeira (nordeste do município, rumo à divisa com Humaitá/AM); quem fica na ponta oeste na BR-364 junto ao Acre é Nova Califórnia e Extrema!'
      }
    ]
  },

  atu_4: {
    centralSubtitle: 'Noções de Cidadania (Direitos Civis, Políticos e Sociais e Soberania Popular), Símbolos Nacionais (Art. 13, § 1º da CF/88 e Lei 5.700/1971), Símbolos do Estado de Rondônia e Símbolos do Município de Porto Velho (Art. 3º da LOM-PVH)',
    branches: [
      {
        title: '1. Noções de Cidadania: Direitos Civis, Políticos, Sociais e Soberania Popular',
        icon: '🗳️',
        color: 'teal',
        nodes: [
          {
            label: 'Cidadania Plena (T. H. Marshall e Art. 1º, II da CF/88)',
            detail: 'Articula três dimensões: Direitos Civis (liberdade individual, igualdade perante a lei), Direitos Políticos (votar, ser votado, plebiscito, referendo, iniciativa popular e ação popular) e Direitos Sociais (saúde, educação, trabalho, previdência).',
            badge: 'Civis + Políticos + Sociais'
          },
          {
            label: 'Plebiscito vs. Referendo e Controle Social no SUS',
            detail: 'Plebiscito = consulta popular ANTES do ato legislativo/administrativo; Referendo = consulta popular DEPOIS do ato para ratificá-lo ou rejeitá-lo. Na saúde, a cidadania ativa manifesta-se nos Conselhos e Conferências de Saúde (Lei 8.142/1990).',
            badge: 'Plebiscito (Antes) / Referendo (Depois)'
          }
        ]
      },
      {
        title: '2. Os 4 Símbolos Nacionais (Art. 13, § 1º da CF/88 e Lei nº 5.700/1971)',
        icon: '🇧🇷',
        color: 'emerald',
        nodes: [
          {
            label: 'Quais são os 4 Símbolos da República Federativa do Brasil (BHAS)',
            detail: '1. Bandeira Nacional; 2. Hino Nacional (poema de Joaquim Osório Duque Estrada e música de Francisco Manuel da Silva); 3. Armas Nacionais (Brasão da República, com a data 15 de novembro de 1889); 4. Selo Nacional.',
            badge: '4 Símbolos Nacionais (BHAS)'
          },
          {
            label: 'As 27 Estrelas da Bandeira Nacional',
            detail: 'Representam os 26 Estados e o Distrito Federal. A única estrela acima da faixa branca "Ordem e Progresso" é Spica (Espiga da Virgem), que representa o Estado do Pará! Rondônia é representada por Gamma Muscae (na constelação da Mosca).',
            badge: 'Spica = Pará | 27 Estrelas'
          }
        ]
      },
      {
        title: '3. Símbolos Oficiais do Estado de Rondônia (Art. 6º da CE/RO)',
        icon: '⭐',
        color: 'indigo',
        nodes: [
          {
            label: 'Bandeira, Hino ("Céus de Rondônia") e Armas/Brasão de Rondônia',
            detail: 'São 3 os símbolos estaduais (não há Selo Estadual!). Bandeira criada por Sílvio Carvalho Feitosa (verde, amarelo, azul e a estrela branca Muliphein ao centro). Hino "Céus de Rondônia": letra de Joaquim Araújo Lima e música de José de Mello e Silva.',
            badge: 'Hino: Céus de Rondônia'
          }
        ]
      },
      {
        title: '4. Símbolos Municipais de Porto Velho (Art. 3º da LOM-PVH e Lei 249/1983)',
        icon: '🏛️',
        color: 'amber',
        nodes: [
          {
            label: 'Os 3 Símbolos Oficiais do Município de Porto Velho (Art. 3º da LOM)',
            detail: 'São 3 os símbolos municipais: a Bandeira, o Hino e o Brasão, regulamentados pela Lei Municipal nº 249, de 11 de outubro de 1983.',
            badge: 'Art. 3º LOM-PVH (3 Símbolos)'
          },
          {
            label: 'Elementos do Brasão e da Bandeira de Porto Velho',
            detail: 'Trazem em destaque a silhueta das Três Caixas d’Água (As Três Marias), o sol nascente sobre as águas do Rio Madeira e as cores azul, amarelo-ouro e branco.',
            badge: 'Três Caixas d’Água no Brasão'
          }
        ]
      }
    ],
    goldenTraps: [
      {
        wrong: 'Tanto a República Federativa do Brasil quanto o Estado de Rondônia e o Município de Porto Velho possuem 4 símbolos oficiais (Bandeira, Hino, Armas e Selo).',
        right: 'FALSO! Apenas a União (Brasil) possui 4 símbolos oficiais (incluindo o Selo Nacional — Art. 13, § 1º da CF/88). O Estado de Rondônia e o Município de Porto Velho (Art. 3º da LOM) possuem apenas 3 símbolos: Bandeira, Hino e Brasão/Armas!'
      },
      {
        wrong: 'A única estrela situada acima da faixa branca "Ordem e Progresso" na Bandeira Nacional representa o Distrito Federal (Brasília).',
        right: 'FALSO! A estrela acima da faixa branca (Spica) representa o Estado do PARÁ (maior território no norte à época de 1889). O Distrito Federal é representado por Sigma Octantis (a Estrela Polar do Sul).'
      }
    ]
  },

  atu_5: {
    centralSubtitle: 'Georreferenciamento (GPS/GNSS, SIRGAS 2000, SIG Vetorial vs. Matricial, Buffer e Kernel), Monitoramento Ambiental (PRODES vs. DETER), Inovações em Saúde (Wolbachia, Qdenga, BRI-Aedes, SISS-Geo) e Temas Transversais',
    branches: [
      {
        title: '1. Georreferenciamento, Coordenadas e Sistema Oficial (SIRGAS 2000)',
        icon: '🛰️',
        color: 'teal',
        nodes: [
          {
            label: 'Latitude, Longitude e Datum Oficial do Brasil (SIRGAS 2000)',
            detail: 'Latitude: distância angular ao Equador (0° a 90° N/S — Porto Velho fica a ~8°45’ S). Longitude: distância a Greenwich (0° a 180° L/O — fuso UTC-4). O Sistema Geodésico de Referência oficial adotado pelo IBGE no Brasil é o SIRGAS 2000!',
            badge: 'SIRGAS 2000 (IBGE)'
          },
          {
            label: 'GNSS (GPS, GLONASS, Galileo e BeiDou) e os 3 Segmentos',
            detail: 'Todo sistema GNSS opera com 3 segmentos: Espacial (constelação de satélites), de Controle (estações terrestres de monitoramento) e do Usuário (receptor/tablet do ACE em campo).',
            badge: '3 Segmentos GNSS'
          }
        ]
      },
      {
        title: '2. SIG (Sistema de Informações Geográficas): Vetorial vs. Matricial (Raster)',
        icon: '🗺️',
        color: 'indigo',
        nodes: [
          {
            label: 'Dados Vetoriais (Geometria Discreta: Ponto, Linha e Polígono)',
            detail: 'Representam feições por coordenadas exatas: PONTO (um foco positivo de Aedes, um caso notificado, uma ovitrampa), LINHA (uma rua, a BR-364, um igarapé) e POLÍGONO (um quarteirão, um bairro, um distrito).',
            badge: 'Ponto / Linha / Polígono'
          },
          {
            label: 'Dados Matriciais / Raster (Grade Contínua de Pixels)',
            detail: 'Representam o espaço como uma matriz de células (pixels): imagens de satélite (CBERS, Landsat, Sentinel), ortofotos de drones e modelos digitais de elevação/temperatura.',
            badge: 'Grade de Pixels (Raster)'
          }
        ]
      },
      {
        title: '3. Sensoriamento Remoto (PRODES vs. DETER) e Análise Espacial no ACE',
        icon: '🚁',
        color: 'emerald',
        nodes: [
          {
            label: 'Buffer (Raio de Bloqueio) e Mapa de Kernel (Mancha de Calor)',
            detail: 'No SIG da vigilância epidemiológica, o BUFFER traça automaticamente o raio de bloqueio ao redor de um caso positivo (ex.: 150 m), enquanto o Mapa de Kernel identifica os hotspots (concentração de focos/casos).',
            badge: 'Buffer + Mapa de Kernel'
          },
          {
            label: 'Monitoramento da Amazônia pelo INPE: PRODES vs. DETER',
            detail: 'PRODES: calcula a taxa ANUAL consolidada de desmatamento por corte raso (alta resolução espacial). DETER: sistema de alerta RÁPIDO (quase diário) para acionar a fiscalização imediata do IBAMA em campo.',
            badge: 'PRODES (Anual) vs. DETER (Diário)'
          }
        ]
      },
      {
        title: '4. Inovações Científicas na Vigilância em Saúde e Atualidades 2024–2026',
        icon: '🧬',
        color: 'amber',
        nodes: [
          {
            label: 'Método Wolbachia, Vacina Qdenga (TAK-003), EDLs e BRI-Aedes',
            detail: 'Wolbachia: bactéria intracelular natural (presente em ~60% dos insetos, NÃO é modificação genética/transgênica!) introduzida no Aedes aegypti para impedir a replicação dos vírus da Dengue, Zika e Chikungunya. EDLs: Estações Disseminadoras de Larvicida (piriproxifeno).',
            badge: 'Wolbachia ≠ Transgênico!'
          },
          {
            label: 'SISS-Geo (Fiocruz), COP30 na Amazônia e Mercado de Carbono',
            detail: 'SISS-Geo: aplicativo de georreferenciamento de epizootias (primatas mortos na vigilância de Febre Amarela). Na agenda ambiental: COP30 em Belém/PA e instituição do Sistema Brasileiro de Comércio de Emissões de Gases de Efeito Estufa (SBCE).',
            badge: 'SISS-Geo + COP30'
          }
        ]
      }
    ],
    goldenTraps: [
      {
        wrong: 'O Método Wolbachia consiste na liberação de mosquitos Aedes aegypti geneticamente modificados (transgênicos) em laboratório para esterilizar as fêmeas.',
        right: 'FALSO! O Wolbachia NÃO utiliza modificação genética (não é mosquito transgênico): utiliza uma bactéria intracelular natural que bloqueia a transmissão de Dengue, Zika e Chikungunya e se mantém autossustentável na população local!'
      },
      {
        wrong: 'No monitoramento por satélite do INPE, o DETER calcula a taxa anual oficial consolidada do desmatamento, enquanto o PRODES emite alertas diários rápidos.',
        right: 'FALSO! É o inverso: o PRODES mede a taxa ANUAL oficial consolidada de corte raso, enquanto o DETER emite alertas RÁPIDOS (quase diários) para orientar a fiscalização imediata!'
      }
    ]
  },

  atu_6: {
    centralSubtitle: 'Hidrelétricas do Rio Madeira (Santo Antônio e Jirau a Fio d’Água), Impactos nos Vetores (Anopheles e Mansonia), Marco Legal do Saneamento (Lei 14.026/2020), Economia e Realidade Socioambiental de Porto Velho e Rondônia',
    goldenTraps: [
      {
        wrong: 'As usinas hidrelétricas de Santo Antônio e Jirau no Rio Madeira possuem reservatórios de acumulação gigantescos com barragens de queda alta semelhantes a Itaipu.',
        right: 'FALSO! Santo Antônio e Jirau foram projetadas como usinas a FIO D’ÁGUA equipadas com turbinas tipo BULBO (baixa queda e grande vazão), reduzindo a área alagada permanente em comparação às represas tradicionais.'
      },
      {
        wrong: 'O Marco Legal do Saneamento Básico (Lei nº 14.026/2020) estabelece a meta de universalização de 50% de água potável e 50% de coleta de esgoto até 2050.',
        right: 'FALSO! A meta legal de universalização até 31 de dezembro de 2033 é de 99% da população com água potável e 90% da população com coleta e tratamento de esgotos!'
      }
    ]
  }
};

let updatedCount = 0;
for (const lesson of rawAppData.lessons) {
  const mm = lesson.mindMap || {};
  const upd = MINDMAP_UPDATES[lesson.id];

  if (upd) {
    if (upd.centralTitle) mm.centralTitle = upd.centralTitle;
    if (upd.centralSubtitle) mm.centralSubtitle = upd.centralSubtitle;
    if (upd.mnemonic) mm.mnemonic = upd.mnemonic;
    if (upd.deadlinesAndNumbers) mm.deadlinesAndNumbers = upd.deadlinesAndNumbers;
    if (upd.branches) mm.branches = upd.branches;
    if (upd.goldenTraps) mm.goldenTraps = upd.goldenTraps;
    updatedCount++;
  }

  // Ensure every single lesson has centralSubtitle, mnemonic, deadlinesAndNumbers (with ref), and goldenTraps
  if (!mm.centralTitle) mm.centralTitle = lesson.title;
  if (!mm.centralSubtitle) mm.centralSubtitle = lesson.editalRef || `Síntese visual completa e estruturada da ${lesson.title}`;
  if (!mm.mnemonic) mm.mnemonic = `Domine os conceitos-chave, prazos e diferenças essenciais de ${lesson.title}`;

  const deadlines = mm.deadlinesAndNumbers || mm.keyMetrics || [];
  mm.deadlinesAndNumbers = deadlines.map((d, idx) => ({
    value: d.value || `Indicador #${idx + 1}`,
    label: d.label || d.detail || '',
    ref: d.ref || `Ref. Aula ${lesson.num}`
  }));

  // Ensure every node in every branch has a clean, non-generic label, detail, and badge
  mm.branches = (mm.branches || []).map((br, bIdx) => ({
    title: br.title || `${bIdx + 1}. Ramo Visual ${bIdx + 1}`,
    icon: br.icon || '📌',
    color: br.color || ['teal', 'indigo', 'amber', 'emerald'][bIdx % 4],
    nodes: (br.nodes || []).map((n, nIdx) => ({
      label: n.label && !/^(Ponto-Chave|Conceito|Ponto|Tópico)\s*#\d+/i.test(n.label) ? n.label : `Regra Essencial ${nIdx + 1}`,
      detail: n.detail || '',
      badge: n.badge || `Foco #${nIdx + 1}`
    }))
  }));

  lesson.mindMap = mm;
}

fs.writeFileSync(appDataPath, JSON.stringify(rawAppData, null, 2), 'utf8');
console.log(`Updated mindMaps across ${rawAppData.lessons.length} lessons (${updatedCount} explicit major updates).`);
