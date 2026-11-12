import type { DeepeningEntry } from './types';

export const legislacao: DeepeningEntry[] = [
  // =========================================================================
  // AULA leg_1: LEI ORGÂNICA DO MUNICÍPIO DE PORTO VELHO/RO
  // =========================================================================
  {
    id: 'leg_1',
    title: 'Autonomia municipal, competências, saúde, saneamento e controle externo na LOM',
    theory: `## Posição Constitucional e Autonomia Federativa do Município (Arts. 1º a 6º)
O Município de Porto Velho integra a República Federativa do Brasil e o Estado de Rondônia como ente federado dotado de plena autonomia política, administrativa, financeira e auto-organizacional, nos termos dos arts. 1º, 18 e 29 da Constituição Federal de 1988 e da Lei Orgânica do Município de Porto Velho (LOM). Essa autonomia desdobra-se em quatro capacidades indelegáveis:
1. **Auto-organização e autolegislação:** competência para elaborar e promulgar sua própria Lei Orgânica e editar leis municipais de interesse local;
2. **Autogoverno:** eleição direta do Prefeito, do Vice-Prefeito e dos Vereadores para mandatos de quatro anos, sem subordinação hierárquica aos Poderes estaduais ou federais;
3. **Autoadministração:** organização, prestação e execução dos serviços públicos locais e exercício do poder de polícia administrativa;
4. **Autonomia financeira:** instituição e arrecadação de tributos de sua competência privativa (IPTU, ISS, ITBI, taxas de polícia e de serviços, e contribuição de melhoria), bem como aplicação e gestão independente de suas receitas orçamentárias (art. 156 da CF/88).

**Distinção essencial de prova:** Autonomia não se confunde com soberania. A soberania é monopólio da República Federativa do Brasil no concerto internacional (art. 1º, I, da CF/88). O Município é ente autônomo subordinado aos limites materiais e formais da Constituição da República e da Constituição do Estado de Rondônia.
São símbolos municipais oficiais a Bandeira, o Brasão e o Hino de Porto Velho (Lei Municipal nº 249/1983). A sede do Município possui a categoria de Cidade de Porto Velho; a sede de cada Distrito tem a categoria de Vila, e a de Subdistrito, de Povoado (art. 42, § 3º). A criação, organização e supressão de distritos competem ao Município, observada a legislação estadual e mediante consulta plebiscitária às populações interessadas (art. 30, IV, CF c/c art. 7º LOM).

## Repartição Constitucional de Competências (Arts. 7º, 8º e 9º da LOM)
A repartição de atribuições na LOM de Porto Velho segue rigorosamente o princípio constitucional da predominância do interesse:
- **Competência Privativa/Exclusiva (Art. 7º LOM / Art. 30, I e V, CF):** abrange matérias de nítido interesse local. Destacam-se: legislar sobre assuntos de interesse local; instituir e arrecadar tributos próprios; organizar e prestar diretamente ou sob concessão/permissão os serviços públicos de interesse local, com ênfase expressa no **transporte coletivo urbano, que possui caráter essencial**; planejar o uso e ocupação do solo urbano por meio do Plano Diretor (obrigatório para cidades com mais de vinte mil habitantes); e fixar o horário de funcionamento do comércio e de serviços (matéria consolidada pela Súmula Vinculante nº 38 do STF: *"É competente o Município para fixar o horário de funcionamento de estabelecimento comercial"*).
- **Competência Comum/Cumulativa (Art. 8º LOM / Art. 23 CF):** exercida em cooperação administrativa direta com a União e o Estado de Rondônia. Engloba: cuidar da saúde e da assistência pública; proteger as pessoas com deficiência; proteger o meio ambiente, os recursos hídricos e o patrimônio histórico e cultural; e promover programas de construção de moradias e melhoria das condições habitacionais e de **saneamento básico**.
- **Competência Suplementar (Art. 9º LOM / Art. 30, II, CF):** confere à Câmara Municipal competência para suplementar a legislação federal e estadual no que couber, adaptando normas gerais às especificidades e realidades biogeográficas de Porto Velho, vedada qualquer antinomia com as diretrizes superiores.

## Processo Legislativo Municipal e Controle Externo (Arts. 51 a 72)
O Poder Legislativo municipal é exercido pela Câmara Municipal de Porto Velho, composta por vereadores eleitos pelo sistema representativo proporcional. O processo legislativo municipal compreende a elaboração de: Emendas à Lei Orgânica, Leis Complementares, Leis Ordinárias, Decretos Legislativos e Resoluções. No ordenamento municipal de Porto Velho, **não existem Medidas Provisórias nem Leis Delegadas**.

### Rito Específico de Emenda à Lei Orgânica (Art. 53 da LOM)
A Lei Orgânica Municipal pode ser emendada mediante proposta: de um terço, no mínimo, dos membros da Câmara; do Prefeito Municipal; ou de cinco por cento do eleitorado municipal (iniciativa popular). A proposta de emenda à LOM exige rito qualificado e solene:
- Votação em **DOIS TURNOS** de deliberação no plenário da Câmara;
- Interstício temporal mínimo de **10 (dez) DIAS** entre o primeiro e o segundo turno de votação;
- Aprovação por quórum qualificado de **dois terços ($\\\\frac{2}{3}$)** dos membros da Câmara Municipal;
- **Promulgação privativa pela Mesa da Câmara Municipal**, com o respectivo número de ordem. **Não há sanção nem veto do Prefeito Municipal** sobre propostas de emenda à Lei Orgânica!

### Leis Complementares e Veto Executivo
As Leis Complementares municipais são aprovadas por maioria absoluta dos membros da Câmara. O Prefeito dispõe de quinze dias úteis para sancionar ou vetar (por inconstitucionalidade ou contrariedade ao interesse público) projetos de lei ordinária e complementar, comunicando os motivos do veto ao Presidente da Câmara em quarenta e oito horas. O veto é apreciado em trinta dias, exigindo maioria absoluta dos vereadores para sua rejeição.

### Controle Externo e Parecer Prévio do TCE-RO (Arts. 68 a 72 c/c Art. 31, § 2º, CF)
O controle externo sobre as contas anuais da Administração Direta e Indireta do Município é exercido pela Câmara Municipal com o auxílio técnico do **Tribunal de Contas do Estado de Rondônia (TCE-RO)**. As contas que o Prefeito deve prestar anualmente recebem parecer prévio técnico do TCE-RO. Esse parecer prévio emitido pelo Tribunal de Contas **somente deixará de prevalecer por decisão de dois terços ($\\\\frac{2}{3}$) dos membros da Câmara Municipal**. Trata-se de salvaguarda constitucional contra arbitrariedades políticas, valorizando a auditoria técnica contábil e orçamentária. É terminantemente vedada a criação de novos Tribunais, Conselhos ou órgãos de Contas Municipais (art. 31, § 4º, CF/88).

## Saneamento Básico e Meio Ambiente na LOM (Arts. 150 a 153)
A proteção ambiental e o saneamento básico na Lei Orgânica de Porto Velho estabelecem balizas decisivas para a atuação do Agente de Combate às Endemias (ACE), visto que o acúmulo de resíduos e o manejo inadequado da água são os principais determinantes socioambientais da proliferação de vetores biológicos (como *Aedes aegypti*, anofelinos e flebotomíneos):
- **Vedação a Aterros Sanitários em Mananciais (Art. 151):** É expressamente e peremptoriamente **VEDADA A CRIAÇÃO DE ATERROS SANITÁRIOS À MARGEM DE RIOS, LAGOS, LAGUNAS, MANGUEZAIS E JUNTO A MANANCIAIS**. Este dispositivo estabelece blindagem jurídica à bacia do Rio Madeira e aos igarapés urbanos e distritais de Porto Velho, proibindo depósitos de lixo que poluam o lençol freático e criem criadouros de vetores.
- **Relatório Semestral de Qualidade da Água (Art. 152):** A administração municipal ou empresa concessionária delegatária do serviço de água **divulgará relatório SEMESTRAL de monitoramento da qualidade da água distribuída para consumo da população**, atestando parâmetros de potabilidade e ausência de contaminantes químicos ou biológicos (parágrafo único).
- **Planejamento Sanitário e Epidemiológico (Art. 153):** As ações e obras de saneamento básico e drenagem urbana devem ser obrigatoriamente precedidas de diagnóstico sanitário que avalie o perfil epidemiológico das comunidades, visando diretamente à redução de doenças infectocontagiosas e à eliminação de criadouros de endemias.

## Saúde Pública Municipal e Atuação do ACE (Arts. 171 a 180 e Art. 235)
O capítulo da Ordem Social da LOM organiza o Sistema Municipal de Saúde segundo os princípios do SUS:
- **Direito à Saúde e Prioridade Preventiva (Arts. 171 e 172):** A saúde é direito de todos e dever do Município. As ações e serviços públicos de saúde em Porto Velho integram uma rede regionalizada e hierarquizada que obedece à seguinte diretriz basilar: **atendimento integral, com prioridade expressa para as atividades preventivas, sem prejuízo dos serviços assistenciais** (art. 172, I). É exatamente nessa prioridade preventiva que se ancora a missão de campo do ACE na vigilância em saúde ambiental.
- **Vedação de Recursos Públicos a Entidades Lucrativas (Art. 173, § 3º):** É expressamente **VEDADA ao Município de Porto Velho a destinação de recursos públicos para auxílios ou subvenções a instituições privadas com fins lucrativos**. Repasses e contratos de complementaridade só admitem preferência para entidades filantrópicas e sem fins lucrativos (art. 173, § 2º c/c art. 199, § 2º, CF).
- **Banco de Leite Materno Municipal (Art. 175, § 3º):** O Município é legalmente obrigado a criar e manter em pleno funcionamento um **Banco de Leite Materno Municipal sob gestão direta da Secretaria Municipal de Saúde (SEMUSA)**, apoiando o aleitamento materno e a nutrição infantil.
- **Autorização Legislativa para Contratação Suplementar (Art. 180):** A participação complementar de serviços privados de saúde somente poderá ocorrer quando houver comprovada insuficiência dos serviços públicos municipais, exigindo-se **PRÉVIA AUTORIZAÇÃO DA CÂMARA MUNICIPAL** mediante contrato de direito público ou convênio.
- **Fundo Municipal de Saúde (Art. 235):** Os recursos destinados à saúde em Porto Velho são geridos e movimentados exclusivamente por meio do Fundo Municipal de Saúde (FMS), sob acompanhamento e deliberação fiscalizatória do Conselho Municipal de Saúde (CMS).`,
    summary: `Síntese estruturada da Lei Orgânica do Município de Porto Velho (LOM) para o concurso da SEMUSA:

| Instituto na LOM de Porto Velho | Dispositivo e Regra Legal Objetiva | Pegadinha Clássica de Prova (IBGP / Bancas) |
| --- | --- | --- |
| **Posição Federativa e Autonomia** | Arts. 1º a 3º e 6º: Município autônomo (auto-organização, autogoverno, autoadministração, autonomia tributária). | Afirmar que o Município detém **soberania** (soberania é unicamente da República Federativa do Brasil no plano externo). |
| **Símbolos Oficiais** | Art. 3º: Bandeira, Brasão e Hino Municipal (Lei nº 249/1983). Categoria: Sede = Cidade; Distrito = Vila; Subdistrito = Povoado. | Confundir com os quatro símbolos da República (Bandeira, Hino, Armas e Selo Nacional). |
| **Competência Privativa × Comum** | Art. 7º: Interesse local, transporte urbano coletivo (essencial), ordenamento do solo, horário do comércio (SV 38/STF). Art. 8º: Comum (saúde, saneamento, meio ambiente em cooperação). | Dizer que a fiscalização de estabelecimentos ou horário do comércio exige lei federal delegada. |
| **Rito de Emenda à LOM** | Art. 53: Dois turnos, interstício mínimo de 10 dias, quórum de 2/3 dos membros da Câmara, promulgada pela Mesa da Câmara. | Dizer que há sanção ou veto do Prefeito, ou trocar o quórum para maioria absoluta / simples. |
| **Controle Externo (TCE-RO)** | Art. 31 CF c/c LOM: Câmara fiscaliza com auxílio do TCE-RO. Parecer prévio do TCE só cai por voto de 2/3 da Câmara. | Afirmar que maioria simples da Câmara rejeita o parecer prévio do Tribunal de Contas. |
| **Saneamento e Mananciais** | Art. 151: Vedada criação de aterros sanitários à margem de rios, lagos e mananciais. Art. 152: Relatório semestral de potabilidade. | Dizer que aterro sanitário na calha do Rio Madeira é permitido com licença ordinária, ou que o relatório é anual. |
| **Saúde e Rede Privada** | Art. 172: Prioridade preventiva. Art. 173, § 3º: Vedada subvenção a entidades lucrativas. Art. 180: Contratação suplementar exige autorização prévia da Câmara. | Dizer que a SEMUSA pode conceder auxílio financeiro público a hospitais privados com fins lucrativos. |`,
    questions: [
      {
        q: '[Autoral] A Câmara Municipal de Porto Velho aprovou proposta que altera dispositivos da Lei Orgânica do Município de Porto Velho (LOM) referentes às diretrizes municipais de saneamento e controle de vetores. Considerando os preceitos constitucionais e as regras regimentais do processo legislativo municipal, a aprovação e promulgação dessa Emenda à Lei Orgânica exigem:',
        options: [
          'Votação em dois turnos, com interstício mínimo de dez dias, aprovação por dois terços dos membros da Câmara Municipal e promulgação pela Mesa da Câmara Municipal, não havendo sanção ou veto do Prefeito.',
          'Votação em turno único, aprovação por maioria absoluta dos vereadores e sanção obrigatória do Prefeito Municipal no prazo de quinze dias úteis.',
          'Votação em dois turnos com intervalo de quarenta e oito horas, aprovação por maioria simples dos vereadores presentes e homologação pelo Governador do Estado de Rondônia.',
          'Aprovação por decreto unilateral do Presidente da Câmara Municipal, condicionada a referendo popular obrigatório em até trinta dias.',
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Processo Legislativo Municipal',
        comment: 'Gabarito: A. Conforme o art. 29, caput, da CF/88 e o art. 53 da LOM de Porto Velho, a emenda à Lei Orgânica depende de votação em dois turnos com interstício mínimo de 10 dias, aprovação por 2/3 dos membros da Câmara e promulgação privativa pela Mesa da Câmara Municipal, não havendo sanção nem veto do Prefeito. Erro da B: não há turno único, quórum de maioria absoluta nem sanção executiva do Prefeito; erro da C: o interstício mínimo é de 10 dias (não 48h), o quórum é qualificado de 2/3 (não maioria simples) e inexiste ingerência do Governador; erro da D: a emenda exige processo legislativo cameral e não decreto monocrático.',
      },
      {
        q: '[Autoral] O Município de Porto Velho editou norma disciplinando o horário de fiscalização sanitária para estabelecimentos comerciais de alimentos e determinou vistorias residenciais preventivas contra o vetor da dengue em áreas ribeirinhas do Baixo Madeira. Uma entidade questionou a validade da norma alegando usurpação de competência da União. De acordo com a repartição constitucional e a Lei Orgânica de Porto Velho, a medida adotada pelo Município é:',
        options: [
          'Nula de pleno direito, pois a vigilância epidemiológica e a regulação de horários comerciais pertencem à competência privativa da União.',
          'Válida e legítima, uma vez que compete privativamente ao Município legislar sobre assuntos de interesse local e fixar o horário de funcionamento de estabelecimentos, além de exercer competência comum na proteção da saúde pública.',
          'Condicionada à prévia delegação legislativa da Assembleia Legislativa do Estado de Rondônia por meio de lei delegada estadual.',
          'Inconstitucional, pois aos Municípios é vedado suplementar a legislação federal em matéria de saúde pública ou fixar regras sobre o comércio local.',
        ],
        ans: 1,
        difficulty: 'Intermediário',
        questionType: 'Repartição de Competências',
        comment: 'Gabarito: B. O art. 30, incisos I e II, da CF/88, os arts. 7º e 8º da LOM de Porto Velho e a Súmula Vinculante nº 38 do STF asseguram ao Município competência para legislar sobre interesse local e horário comercial, além de executar ações comuns de saúde pública e combate a endemias. Erro da A: o interesse local e a saúde são de competência municipal concorrente/comum; erro da C: o Município não depende de autorização da Assembleia Legislativa estadual; erro da D: o art. 30, II, da CF/88 autoriza expressamente a competência legislativa suplementar municipal.',
      },
      {
        q: '[Autoral] Nos termos expressos da Lei Orgânica do Município de Porto Velho acerca da Ordem Econômica e Social (Capítulo de Saneamento Básico e Meio Ambiente), assinale a afirmativa correta quanto à proteção das águas e destinação de resíduos:',
        options: [
          'A administração municipal ou concessionária é obrigada a divulgar relatório semestral de monitoramento da qualidade da água distribuída à população, sendo expressamente vedada a criação de aterros sanitários à margem de rios, lagos, lagunas, manguezais e mananciais.',
          'É permitida a instalação de aterros sanitários nas margens do Rio Madeira e de seus afluentes, desde que haja parecer favorável individual do Secretário Municipal de Obras.',
          'O monitoramento da água distribuída para consumo humano é dispensável quando o serviço de saneamento for delegado a empresas privadas concessionárias.',
          'As ações municipais de saneamento básico devem priorizar a cobrança tarifária sem necessidade de planejamento técnico ou epidemiológico prévio.',
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Legislação Literal (Saneamento)',
        comment: 'Gabarito: A. Reproduz literalmente os arts. 151 e 152 da LOM de Porto Velho: o art. 151 veda peremptoriamente a instalação de aterros sanitários às margens de corpos hídricos e mananciais; o art. 152 impõe a divulgação de relatório semestral de monitoramento da qualidade da água distribuída à população, inclusive por concessionárias delegatárias (parágrafo único). Erro da B: a vedação do art. 151 é categórica e não admite autorização discricionária de secretário; erro da C: o dever aplica-se expressamente às concessionárias privadas; erro da D: o art. 153 exige prévio planejamento técnico e sanitário para reversão de agravos epidemiológicos.',
      },
      {
        q: '[Autoral] O Sistema Único de Saúde no Município de Porto Velho é estruturado segundo diretrizes da Constituição Federal e preceitos da Lei Orgânica Municipal. Sobre as regras da saúde pública na LOM de Porto Velho, assinale a afirmativa correta:',
        options: [
          'As ações e serviços públicos de saúde em Porto Velho priorizam o atendimento hospitalar curativo em detrimento das atividades preventivas e de vigilância ambiental.',
          'É expressamente autorizada a destinação de subvenções e auxílios financeiros dos cofres municipais a clínicas e hospitais privados com finalidade lucrativa.',
          'A assistência à saúde é livre à iniciativa privada e o Município poderá contratá-la de forma complementar mediante insuficiência própria com prévia autorização da Câmara Municipal, sendo expressamente vedada a destinação de recursos públicos para auxílios ou subvenções a instituições privadas com fins lucrativos.',
          'A criação do Banco de Leite Materno Municipal é atribuição restrita da União, sendo vedada sua instalação e gestão pela Secretaria Municipal de Saúde (SEMUSA).',
        ],
        ans: 2,
        difficulty: 'Intermediário',
        questionType: 'Saúde Pública Municipal',
        comment: 'Gabarito: C. Conforme os arts. 172, 173 (§ 3º) e 180 da LOM de Porto Velho, a contratação de rede privada suplementar por insuficiência pública exige prévia autorização da Câmara de Vereadores, sendo vedada a concessão de recursos públicos ou subvenções a instituições com fins lucrativos. Erro da A: o art. 172, I, determina atendimento integral com prioridade para atividades preventivas; erro da B: o art. 173, § 3º, proíbe expressamente repasses a entidades com finalidade lucrativa; erro da D: o art. 175, § 3º, obriga o Município a criar e manter o Banco de Leite Materno Municipal gerido pela SEMUSA.',
      },
      {
        q: '[Autoral] No exercício do controle externo da administração pública de Porto Velho, a fiscalização contábil, financeira e orçamentária do Município será exercida pela Câmara Municipal com o auxílio do Tribunal de Contas do Estado de Rondônia (TCE-RO). Conforme a CF/88 e a Lei Orgânica Municipal, o parecer prévio emitido pelo TCE-RO sobre as contas que o Prefeito deve prestar anualmente:',
        options: [
          'Possui caráter meramente opinativo sem qualquer força vinculante, podendo ser ignorado por decisão da maioria simples dos vereadores presentes na sessão ordinária.',
          'Torna-se automaticamente definitivo e vincula a cassação imediata do mandato do Prefeito sem deliberação dos vereadores.',
          'Pode ser anulado por despacho do Procurador-Geral do Município sem participação do Poder Legislativo.',
          'Somente deixará de prevalecer por decisão de dois terços dos membros da Câmara Municipal, assegurando o controle político-constitucional qualificado do Poder Legislativo.',
        ],
        ans: 3,
        difficulty: 'Intermediário',
        questionType: 'Controle Externo Municipal',
        comment: 'Gabarito: D. O art. 31, § 2º, da CF/88 e a LOM de Porto Velho estabelecem que o parecer prévio do Tribunal de Contas do Estado sobre as contas prestadas anualmente pelo Prefeito só deixa de prevalecer pelo voto qualificado de 2/3 dos membros da Câmara Municipal. Erro da A: o parecer exige quórum qualificado de 2/3 para ser rejeitado, não bastando maioria simples; erro da B: a competência para o julgamento das contas é privativa da Câmara Municipal e não do TCE-RO; erro da C: procurador municipal integra o Executivo e não possui atribuição para anular deliberação de contas.',
      },
    ],
    flashcards: [
      [
        'Qual a distinção federativa entre soberania nacional e autonomia municipal?',
        'Soberania é atributo único, exclusivo e indivisível da República Federativa do Brasil no plano externo; os Municípios possuem autonomia política, administrativa, financeira e auto-organizacional nos limites da Constituição.',
      ],
      [
        'Qual o quórum e o procedimento para emenda à Lei Orgânica de Porto Velho?',
        'Votação em dois turnos com intervalo mínimo de dez dias, aprovação por dois terços dos membros da Câmara Municipal e promulgação privativa pela Mesa da Câmara (sem sanção ou veto do Prefeito).',
      ],
      [
        'Quais as principais vedações e obrigações da LOM de Porto Velho em saneamento e saúde?',
        'Vedação expressa de aterros sanitários em margens de rios/mananciais (art. 151); relatório semestral de qualidade da água (art. 152); prioridade para ações preventivas (art. 172); vedação de subvenção a entidades lucrativas (art. 173, § 3º); e Banco de Leite Materno gerido pela SEMUSA (art. 175, § 3º).',
      ],
    ],
    references: [
      {
        title: 'SAPL — Lei Orgânica do Município de Porto Velho (Texto Consolidado)',
        url: 'https://sapl.portovelho.ro.leg.br/ta/1639/text',
        section: 'Arts. 1º a 9º (autonomia e competências), 51 a 72 (processo legislativo e controle externo), 150 a 153 (saneamento) e 171 a 180 (saúde).',
      },
      {
        title: 'Constituição da República Federativa do Brasil de 1988 (Planalto)',
        url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm',
        section: 'Arts. 29 a 31 (organização municipal e controle externo) e Arts. 196 a 200 (da saúde).',
      },
    ],
  },

  // =========================================================================
  // AULA leg_2: ESTATUTO DOS SERVIDORES MUNICIPAIS DE PORTO VELHO (LC 385/2010)
  // =========================================================================
  {
    id: 'leg_2',
    title: 'Provimento, posse, exercício, estágio probatório, regime disciplinar e PAD (LC 385/2010)',
    theory: `## Conceitos Fundamentais e Formas de Provimento (Arts. 1º a 10 da LC 385/2010)
A Lei Complementar Municipal nº 385, de 01 de julho de 2010, institui o Regime Jurídico dos Servidores Públicos do Município de Porto Velho, das Autarquias e das Fundações Públicas Municipais. O estatuto define:
- **Servidor Público (Art. 2º):** pessoa legalmente investida em cargo público;
- **Cargo Público (Art. 3º):** conjunto de atribuições e responsabilidades cometidas a um servidor, criado por lei, com denominação própria, número certo e vencimento pago pelos cofres públicos, para provimento em caráter efetivo (mediante concurso público de provas ou de provas e títulos) ou em comissão (livre nomeação e exoneração, restrito a atribuições de direção, chefia e assessoramento, conforme art. 37, V, da CF/88).

### Provimento Originário vs. Provimento Derivado (Art. 8º)
- **Provimento Originário:** A **Nomeação** é a única forma de provimento originário (inicial). Não pressupõe qualquer vínculo estatutário funcional anterior entre o cidadão nomeado e a Administração Municipal.
- **Provimento Derivado:** Exige vínculo funcional preexistente no quadro municipal. São formas derivadas admitidas: **Promoção**, **Readaptação**, **Reversão**, **Aproveitamento**, **Reintegração** e **Recondução**.
*(Atenção: A ascensão funcional, transformação de cargo e transferência foram banidas do direito brasileiro e declaradas inconstitucionais pelo STF na Súmula Vinculante nº 43: "É inconstitucional toda modalidade de provimento que propicie ao servidor investir-se, no cargo que não integra a carreira na qual anteriormente investido, sem prévia aprovação em concurso público").*

### Formas de Vacância (Art. 39)
A vacância de cargo decorre de: Exoneração, Demissão, Promoção, Readaptação, Aposentadoria, Posse em outro cargo inacumulável e Falecimento. Promoção e Readaptação são institutos bifrontes (híbridos), gerando simultaneamente provimento no novo patamar/cargo e vacância do posto originário.

## O Itinerário de Ingresso: Nomeação, Posse e Exercício (Arts. 11 a 21)
O ingresso no serviço público municipal segue uma sequência rígida de três atos inconfundíveis:
1. **Nomeação (Provimento):** Ato administrativo formal de convocação do candidato aprovado em concurso público. Isoladamente, não investe o cidadão no cargo nem outorga remuneração. O concurso público tem validade de até 2 (dois) anos, prorrogável uma única vez por igual período (art. 12). Candidatos aprovados dentro das vagas do edital têm direito subjetivo à nomeação durante a vigência do certame (Tema 161/STF).
2. **Posse (Investidura - Art. 15):** É a aceitação expressa das atribuições, deveres e responsabilidades inerentes ao cargo, com a assinatura do respectivo termo. **A investidura no cargo público ocorre com a posse!**
   - *Prazo da Posse:* **30 (trinta) dias**, contados da data da publicação oficial do ato de provimento (nomeação), prorrogável por mais **30 (trinta) dias**, a requerimento formal e justificado do interessado.
   - *Inspeção Médica Oficial:* Só haverá posse após prévia inspeção médica oficial atestando aptidão física e mental (art. 15, § 3º).
   - *Consequência da Não Posse:* Se a posse não se concretizar no prazo legal de 30+30 dias, **O ATO DE NOMEAÇÃO SERÁ TORNADO SEM EFEITO** (art. 15, § 6º). Não há exoneração nem demissão, porque o candidato sequer ingressou no quadro de servidores investidos!
3. **Exercício (Efetivo Desempenho - Art. 18):** É o efetivo desempenho das atribuições do cargo público pelo servidor empossado.
   - *Prazo do Exercício:* **15 (quinze) dias impreteríveis**, contados da data da posse.
   - *Consequência do Não Exercício:* O servidor empossado que não entrar em exercício no prazo de 15 dias **SERÁ EXONERADO DE OFÍCIO DO CARGO** (art. 18, § 2º). A investidura já ocorreu com o termo de posse; portanto, o rompimento do vínculo funcional exige o ato formal de exoneração (desligamento sem caráter punitivo).

## Estágio Probatório e Estabilidade (Arts. 22 a 26 c/c Art. 41 da CF/88)
Ao entrar em efetivo exercício, o servidor nomeado para cargo de provimento efetivo fica sujeito a estágio probatório pelo período de **3 (três) anos / 36 meses**, durante o qual sua aptidão e capacidade funcional serão objeto de Avaliação Especial de Desempenho por comissão designada.
Os cinco requisitos/fatores avaliados na LC nº 385/2010 são sintetizados pelo mnemônico **RAPID**:
1. **R**esponsabilidade;
2. **A**ssiduidade;
3. **P**rodutividade;
4. **I**niciativa (Capacidade de Iniciativa);
5. **D**isciplina.

**Consequência da Reprovação no Estágio:** O servidor não aprovado no estágio probatório será **EXONERADO** de ofício. Todavia, se já era servidor público estável do Município de Porto Velho em outro cargo municipal, será **RECONDUZIDO** ao cargo que ocupava anteriormente (art. 22, § 2º c/c art. 32). Reprovação em estágio probatório jamais constitui demissão punitiva!
O servidor adquire **estabilidade** após 3 anos de efetivo exercício e aprovação na avaliação especial de desempenho. Uma vez estável, só perderá o cargo por: (1) sentença judicial transitada em julgado; (2) processo administrativo disciplinar (PAD) com ampla defesa; (3) procedimento de avaliação periódica de desempenho, com ampla defesa; ou (4) corte de gastos de pessoal na forma do art. 169, § 4º da CF/88.

## Formas de Provimento Derivado em Confronto Analítico
- **Reintegração (Art. 33):** Reinvestidura do servidor **estável** no cargo anteriormente ocupado quando invalidada a sua demissão por decisão administrativa ou judicial, com **ressarcimento integral de todos os vencimentos e vantagens pecuniárias** do período de afastamento. Se o cargo foi extinto, o servidor fica em disponibilidade remunerada; se provido por outro servidor, este é reconduzido ao cargo anterior (sem indenização), aproveitado ou posto em disponibilidade.
- **Recondução (Art. 32):** Retorno do servidor **estável** ao cargo municipal anteriormente ocupado, decorrente de: (1) inabilitação em estágio probatório relativo a outro cargo público municipal; ou (2) reintegração do anterior ocupante do cargo.
- **Reversão (Art. 30):** Retorno à atividade do servidor **aposentado**. Ocorre: (1) de ofício, quando junta médica oficial atestar insubsistentes os motivos da aposentadoria por invalidez permanente; ou (2) a pedido, no interesse da administração, desde que estável, com aposentadoria voluntária nos últimos cinco anos e havendo cargo vago.
- **Readaptação (Art. 27):** Investidura do servidor em cargo de atribuições e responsabilidades compatíveis com a limitação em sua capacidade física ou mental verificada em perícia médica oficial superveniente à investidura.
- **Aproveitamento (Art. 34):** Retorno obrigatório à atividade do servidor que se encontrava em disponibilidade remunerada, em cargo de atribuições e vencimentos compatíveis.

## Regime Disciplinar: Penalidades, Faltas e Prescrição (Arts. 133 a 167)
O servidor municipal submete-se a deveres (art. 133) e proibições (art. 134). As penalidades disciplinares taxativas da LC nº 385/2010 são:
1. **Advertência (Art. 140/154):** Aplicada por escrito em infrações leves. Registrada na ficha funcional, com **cancelamento automático do registro após 3 (três) anos de efetivo exercício**, se o servidor não cometer nova falta disciplinar no período.
2. **Suspensão (Art. 141/155):** Aplicada em reincidência de faltas punidas com advertência ou violação de proibições que não tipifiquem demissão. Limite máximo: **até 90 (noventa) dias**. A critério da administração, havendo conveniência para o serviço, a suspensão pode ser convertida em **multa à base de 50% por dia de vencimento**, ficando o servidor obrigado a permanecer em efetivo exercício. O registro da suspensão será **cancelado após 5 (cinco) anos de efetivo exercício** sem nova infração.
3. **Demissão (Art. 142/156):** Penalidade expulsória aplicada em infrações gravíssimas: crime funcional contra a administração; improbidade administrativa; aplicação irregular de dinheiros públicos; corrupção; ofensa física em serviço contra outrem (salvo legítima defesa); incontinência pública escandalosa; insubordinação grave em serviço; **Abandono de Cargo** (ausência intencional por **mais de trinta dias consecutivos**); e **Inassiduidade Habitual** (falta injustificada ao serviço por **sessenta dias, interpoladamente, durante o período de doze meses**).
4. **Cassação de Aposentadoria ou Disponibilidade (Art. 144):** Aplicada ao inativo que cometeu na atividade falta punível com demissão.
5. **Destituição de Cargo em Comissão ou de Função de Confiança (Art. 145).**

### Prazos de Prescrição da Ação Disciplinar (Art. 167)
- **5 (cinco) anos:** para infrações puníveis com Demissão, Cassação de Aposentadoria e Destituição de Cargo em Comissão;
- **2 (dois) anos:** para infrações puníveis com Suspensão;
- **180 (cento e oitenta) dias:** para infrações puníveis com Advertência.
*Termo inicial e interrupção:* A prescrição começa a correr da data em que a autoridade competente toma conhecimento formal do fato. A portaria que instaura a Sindicância ou o Processo Disciplinar **interrompe o prazo prescricional** até a decisão final (art. 167, § 3º).

## Procedimento Disciplinar: Sindicância vs. PAD (Arts. 168 a 214)
- **Sindicância Administrativa (Arts. 168 a 170):** Conduzida por comissão de **2 a 3 servidores**. Prazo de conclusão: **30 dias, prorrogável por mais 30**. Desfechos taxativos da sindicância: (1) arquivamento do processo; (2) aplicação direta de penalidade de **Advertência ou Suspensão de ATÉ 30 dias**; ou (3) recomendação de instauração de Processo Administrativo Disciplinar (PAD). Da sindicância **NUNCA pode resultar aplicação de demissão ou cassação**!
- **PAD Ordinário (Arts. 171 a 200):** Procedimento contraditório obrigatório sempre que a falta ensejar penalidade de **Suspensão superior a 30 dias (de 31 a 90 dias), Demissão, Cassação ou Destituição**.
  - Conduzido por **Comissão de 3 (três) servidores ESTÁVEIS** designada pela autoridade instauradora;
  - Prazo de conclusão: **60 (sessenta) dias, prorrogável por mais 60 (sessenta) dias**, mediante justificativa formal;
  - Prazo para Defesa Escrita: **10 (dez) dias** se houver um único indiciado; prazo comum de **20 (vinte) dias** havendo dois ou mais indiciados. Não apresentando defesa (revelia), a autoridade designará obrigatoriamente defensor dativo estável;
  - Julgamento pela Autoridade Julgadora: prazo de **20 (vinte) dias** a contar do recebimento do relatório conclusivo da comissão processante.
- **PAD de Rito Sumário (Arts. 158 a 163):** Rito simplificado reservado exclusivamente para: (1) Abandono de cargo; (2) Inassiduidade habitual; e (3) Acumulação ilegal de cargos públicos. Conduzido por comissão de **2 servidores estáveis**, com prazo de conclusão de **30 (trinta) dias prorrogável por 15 (quinze) dias**, e prazo para defesa escrita de **5 (cinco) dias**.

## Concessões Estatutárias sem Prejuízo da Remuneração (Art. 119)
O servidor pode ausentar-se do serviço sem qualquer desconto remuneratório por:
- **1 (um) dia:** para doação voluntária de sangue;
- **2 (dois) dias:** para alistamento como eleitor;
- **8 (oito) dias consecutivos:** por motivo de casamento (licença gala) ou de falecimento de cônjuge, companheiro, pais, madrasta/padrasto, filhos, enteados, menor sob guarda ou irmãos (licença nojo).`,
    summary: `Síntese estruturada do Regime Jurídico dos Servidores Municipais de Porto Velho (LC nº 385/2010):

| Instituto na LC nº 385/2010 | Regra Legal / Prazo / Requisito | Ponto de Atenção em Provas da IBGP |
| --- | --- | --- |
| **Nomeação × Posse × Exercício** | Nomeação = provimento. Posse = investidura (30+30 dias). Exercício = desempenho (15 dias impreteríveis). | Não tomar posse → nomeação tornada **sem efeito**. Tomar posse e não entrar em exercício → **exoneração de ofício**. |
| **Estágio Probatório (3 anos)** | Fatores **RAPID**: Responsabilidade, Assiduidade, Produtividade, Iniciativa, Disciplina. | Reprovação gera **exoneração** ou **recondução** do servidor já estável em cargo anterior (nunca demissão). |
| **Reintegração × Recondução** | Reintegração = retorno do demitido (demissão invalidada com ressarcimento). Recondução = retorno do estável ao cargo de origem. | Reintegração devolve vencimentos retroativos integrais; Recondução decorre de inabilitação ou reintegração de terceiro. |
| **Reversão × Aproveitamento** | Reversão = retorno do aposentado. Aproveitamento = retorno do servidor colocado em disponibilidade. | Mnemonico: Re**V**ersão = **V**elho/aposentado; Aproveitamento = disponível remunerado. |
| **Penalidades e Cancelamento** | Advertência (cancela em 3 anos); Suspensão até 90 dias (cancela em 5 anos, conversível em multa de 50%); Demissão. | A conversão em multa obriga o servidor a continuar trabalhando normalmente. |
| **Prazos Prescricionais** | Demissão/Cassação = 5 anos; Suspensão = 2 anos; Advertência = 180 dias. | A portaria de instauração de sindicância ou PAD **interrompe** a prescrição. |
| **Sindicância × PAD Ordinário** | Sindicância: comissão de 2 a 3 servidores (30+30d, max suspensão 30d). PAD: 3 estáveis (60+60d, defesa 10d/20d comum). | Demitir servidor com base exclusiva em sindicância gera **nulidade absoluta** por cerceamento de defesa. |
| **Abandono × Inassiduidade** | Abandono: ausência intencional > 30 dias consecutivos. Inassiduidade: 60 dias interpolados em 12 meses. | Ambos são apenados com **Demissão** processada pelo rito sumário (30+15 dias). |`,
    questions: [
      {
        q: '[Autoral] Um candidato aprovado no concurso público para o cargo de Agente de Combate às Endemias da Prefeitura de Porto Velho teve sua portaria de nomeação publicada no Diário Oficial. Sob a ótica da Lei Complementar Municipal nº 385/2010 (Regime Jurídico dos Servidores Municipais de Porto Velho), assinale a afirmativa correta quanto aos prazos e às consequências jurídicas de seu ingresso:',
        options: [
          'A posse dar-se-á no prazo de quinze dias improrrogáveis; caso não tome posse, o candidato será demitido do serviço público municipal.',
          'A posse ocorrerá no prazo de trinta dias contados da publicação do ato de provimento, prorrogável por mais trinta dias a requerimento formal; se não tomar posse nesse prazo, o ato de nomeação será tornado sem efeito.',
          'O exercício antecede a posse e deve iniciar em até cinco dias da convocação preliminar, sem necessidade de prévia inspeção médica oficial.',
          'Uma vez empossado, o servidor terá trinta dias para entrar em exercício; caso não cumpra o prazo, será suspenso por noventa dias.',
        ],
        ans: 1,
        difficulty: 'Intermediário',
        questionType: 'Prazos de Posse e Exercício',
        comment: 'Gabarito: B. De acordo com os arts. 15 e 18 da LC nº 385/2010, a posse ocorre em 30 dias (prorrogável por mais 30 a requerimento). Não ocorrendo a posse, o ato de nomeação é tornado sem efeito. Após a posse, o exercício deve iniciar em 15 dias impreteríveis, sob pena de exoneração de ofício. Erro da A: a posse tem prazo de 30+30 dias e a não posse não gera demissão (inexistia investidura); erro da C: o exercício sucede a posse e a perícia médica prévia é obrigatória (art. 15, § 3º); erro da D: o prazo de exercício é de 15 dias e a consequência da não entrada em exercício é a exoneração de ofício, não suspensão.',
      },
      {
        q: '[Autoral] Carlos, servidor público estável do Município de Porto Velho no cargo de Auxiliar de Serviços Gerais, foi aprovado em novo concurso e empossado como Agente de Combate às Endemias (ACE). Durante o estágio probatório de três anos no novo cargo, Carlos foi considerado inapto na Avaliação Especial de Desempenho Funcional por insuficiência de produtividade. Conforme a LC nº 385/2010, qual medida jurídica deverá ser adotada pela Administração?',
        options: [
          'Carlos será demitido do serviço público municipal com nota de destituição em sua ficha funcional.',
          'Carlos será reconduzido ao cargo anteriormente ocupado de Auxiliar de Serviços Gerais, no qual já havia adquirido estabilidade funcional.',
          'Carlos será aposentado compulsoriamente com vencimentos proporcionais ao tempo de serviço.',
          'Carlos será posto em disponibilidade remunerada sem possibilidade de retornar ao quadro de servidores da ativa.',
        ],
        ans: 1,
        difficulty: 'Intermediário',
        questionType: 'Estágio Probatório e Recondução',
        comment: 'Gabarito: B. O art. 32 da LC nº 385/2010 e o art. 41 da CF/88 disciplinam o instituto da Recondução, que consiste no retorno do servidor estável ao cargo anteriormente ocupado em decorrência de inabilitação em estágio probatório relativo a outro cargo municipal. Erro da A: reprovação em estágio gera exoneração ou recondução, jamais demissão punitiva; erro da C: aposentadoria compulsória aplica-se aos 75 anos de idade na forma da CF; erro da D: a disponibilidade aplica-se exclusivamente em caso de extinção do cargo ou declaração de sua desnecessidade para servidor estável.',
      },
      {
        q: '[Autoral] Um servidor público municipal da SEMUSA Porto Velho faltou ao serviço injustificadamente durante 65 (sessenta e cinco) dias interpolados no período de 12 (doze) meses. Conforme as normas expressas do Estatuto dos Servidores Públicos do Município de Porto Velho (LC nº 385/2010), essa conduta, a penalidade correspondente e o prazo de prescrição da ação disciplinar são:',
        options: [
          'Inassiduidade habitual; penalidade de demissão; prazo prescricional da ação disciplinar de cinco anos contados da data em que o fato se tornou conhecido pela autoridade competente.',
          'Abandono de cargo; penalidade de advertência escrita; prazo de prescrição de cento e oitenta dias.',
          'Desobediência branda; penalidade de suspensão de dez dias convertida em repreensão oral; prazo de prescrição de dois anos.',
          'Falta leve funcional; perda de dois dias de férias com arquivamento sumário sem processo disciplinar.',
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Regime Disciplinar e Prescrição',
        comment: 'Gabarito: A. Nos termos do art. 143, parágrafo único, e art. 142 da LC nº 385/2010, configura-se inassiduidade habitual a falta injustificada ao serviço por 60 dias, interpoladamente, durante 12 meses. A infração é punida com Demissão, cuja ação disciplinar prescreve em 5 anos (art. 167, I). Erro da B: abandono de cargo exige ausência intencional por mais de 30 dias consecutivos (art. 143, caput) e a penalidade é demissão; erro da C: não há conversão oral e a infração tipifica falta gravíssima punida com demissão; erro da D: a apuração disciplinar de faltas graves é obrigatória e vinculada.',
      },
      {
        q: '[Autoral] Sobre a apuração de irregularidades funcionais por meio de Sindicância e de Processo Administrativo Disciplinar (PAD) na Lei Complementar Municipal nº 385/2010 de Porto Velho, assinale a afirmativa correta:',
        options: [
          'A Sindicância conduzida por comissão de dois servidores pode aplicar validamente a demissão ou a cassação de aposentadoria de servidor municipal.',
          'O prazo para defesa escrita do indiciado no PAD ordinário é de quarenta e oito horas, sendo vedada a nomeação de defensor dativo em caso de revelia.',
          'O PAD ordinário é conduzido por comissão composta por três servidores estáveis, com prazo de conclusão de sessenta dias prorrogável por igual período, sendo obrigatório sempre que a falta ensejar suspensão por mais de trinta dias, demissão ou cassação.',
          'A publicação da portaria que instaura a sindicância ou o PAD não interrompe a prescrição da ação disciplinar municipal.',
        ],
        ans: 2,
        difficulty: 'Intermediário',
        questionType: 'Sindicância vs. PAD',
        comment: 'Gabarito: C. Conforme os arts. 168 a 174 da LC nº 385/2010, o PAD ordinário é conduzido por comissão de 3 servidores estáveis, com prazo de 60 dias (prorrogável por mais 60), sendo indispensável para penalidades de suspensão superior a 30 dias, demissão e cassação. Erro da A: da sindicância pode resultar no máximo advertência ou suspensão de até 30 dias (art. 170); erro da B: o prazo de defesa no PAD ordinário é de 10 dias para um indiciado ou 20 dias comum para dois ou mais (art. 186), sendo obrigatório defensor dativo estável em revelia; erro da D: a portaria instauradora interrompe formalmente a prescrição disciplinar (art. 167, § 3º).',
      },
      {
        q: '[Autoral] Na sistemática da Lei Complementar Municipal nº 385/2010, a reinvestidura do servidor estável no cargo anteriormente ocupado, quando invalidada a sua demissão por decisão administrativa ou judicial, com ressarcimento integral de todas as vantagens pecuniárias, denomina-se:',
        options: [
          'Readaptação profissional decorrente de laudo pericial.',
          'Aproveitamento obrigatório de servidor em disponibilidade.',
          'Reversão de ofício por cessação de invalidez.',
          'Reintegração, ficando o eventual ocupante da vaga reconduzido ao cargo de origem sem direito a indenização.',
        ],
        ans: 3,
        difficulty: 'Fácil',
        questionType: 'Formas de Provimento Derivado',
        comment: 'Gabarito: D. O art. 33 da LC nº 385/2010 define a Reintegração como a reinvestidura do servidor estável no cargo anteriormente ocupado quando invalidada sua demissão por decisão administrativa ou judicial, com ressarcimento de todas as vantagens. Se o cargo estiver provido, o eventual ocupante é reconduzido ao cargo anterior sem indenização, aproveitado em outro ou posto em disponibilidade. Erro da A: readaptação (art. 27) dá-se por limitação física ou mental; erro da B: aproveitamento (art. 34) é o retorno de servidor disponível; erro da C: reversão (art. 30) é o retorno do aposentado.',
      },
    ],
    flashcards: [
      [
        'Quais os prazos e consequências legais de posse e exercício na LC 385/2010?',
        'Posse em 30 dias (prorrogável por +30 a requerimento): se não tomar posse, a nomeação é tornada sem efeito. Exercício em 15 dias impreteríveis da posse: se não entrar em exercício, ocorre exoneração de ofício.',
      ],
      [
        'Quais os 5 fatores do estágio probatório (RAPID) e o efeito da reprovação do servidor estável?',
        'Responsabilidade, Assiduidade, Produtividade, Iniciativa e Disciplina (RAPID) avaliados em 3 anos. A reprovação acarreta exoneração do cargo, ou recondução ao cargo de origem caso o servidor já seja estável no Município.',
      ],
      [
        'Quais os limites da Sindicância e os prazos de prescrição disciplinar na LC 385/2010?',
        'A sindicância aplica no máximo advertência ou suspensão de até 30 dias (demissão exige PAD com 3 estáveis). Prazos de prescrição: 5 anos (demissão/cassação), 2 anos (suspensão) e 180 dias (advertência).',
      ],
    ],
    references: [
      {
        title: 'SAPL — Lei Complementar Municipal nº 385/2010 (Regime Jurídico dos Servidores)',
        url: 'https://sapl.portovelho.ro.leg.br/ta/2/text',
        section: 'Arts. 8º a 26 (provimento, posse, exercício, estágio e estabilidade), 30 a 35 (provimento derivado), 119 (concessões), 133 a 167 (regime disciplinar) e 168 a 214 (sindicância e PAD).',
      },
      {
        title: 'Supremo Tribunal Federal — Súmula Vinculante nº 43 e Tema 161 de Repercussão Geral',
        url: 'https://portal.stf.jus.br/jurisprudencia/',
        section: 'Vedações de provimento derivado em cargo estranho à carreira e direito subjetivo à nomeação de candidato aprovado.',
      },
    ],
  },

  // =========================================================================
  // AULA leg_3: PLANOS DE CARREIRA E SALÁRIOS DE PORTO VELHO (LC 390/10 vs LC 391/10)
  // =========================================================================
  {
    id: 'leg_3',
    title: 'PCCR da Saúde (LC 390), Estrutura Geral (LC 391), Piso Nacional do ACE e LC 1.018/2025',
    theory: `## Diferenciação Estrutural dos Diplomas Normativos da Carreira
Para o concurso da Prefeitura Municipal de Porto Velho, é indispensável dominar a arquitetura funcional e a distinção precisa entre os diplomas de pessoal do Município:
1. **Lei Complementar Municipal nº 390, de 30 de junho de 2010 (PCCR da Saúde):**
   - É o Plano de Carreira, Cargos e Remuneração exclusivo dos Profissionais da Saúde da Rede Pública Municipal de Saúde de Porto Velho (SEMUSA);
   - Estrutura a carreira em **7 (sete) Classes (A, B, C, D, E, F e G)** e **15 (quinze) Referências numéricas (I a XV)**;
   - Disciplina jornada estatutária, regras de plantão hospitalar/ambulatorial, desenvolvimento funcional e gratificações específicas de assistência sanitária.
2. **Lei Complementar Municipal nº 391, de 06 de julho de 2010 (Estrutura Geral de Pessoal):**
   - Dispõe de modo amplo sobre a criação, reestruturação e organização de cargos efetivos e empregos públicos de toda a Prefeitura de Porto Velho (Administração Direta, Fazenda, Obras, Educação, Trânsito e Saúde);
   - Não se trata de uma lei exclusiva de ACE/ACS: fixa a arquitetura de cargos, atribuições e quantitativos gerais do Município.
3. **Leis Complementares de Adequação Funcional (LC nº 447/2012 e LC nº 449/2012):**
   - A LC nº 447/2012 e a LC nº 449/2012 alteraram o art. 5º da LC nº 390/2010 e atualizaram os Anexos da LC nº 391/2010, posicionando os Agentes de Combate às Endemias formalmente na **Classe A do Grupo da Saúde** (cargos de apoio técnico e vigilância, item 29 do Anexo II da LC 391/2010).
4. **Lei Complementar Municipal nº 1.018, de 11 de junho de 2025 (Recepcionante Atualizada):**
   - Lei municipal recente que atualizou formalmente o Anexo II da LC nº 391/2010 e a tabela salarial da SEMUSA, instituindo a nova **Tabela de Vencimento dos Agentes Comunitários de Saúde e Agentes de Combate às Endemias (ACS e ACE)** em 15 Referências (I a XV).
   - Fixou o vencimento da **Referência I em R$ 3.036,00** (valor correspondente a exatamente dois salários mínimos federais do ano de 2025) e o topo da carreira na **Referência XV em R$ 3.739,61**.

## O Piso Salarial Nacional Vinculante (EC 120/2022, Lei 11.350/06 e STF Tema 1.132)
A remuneração básica do Agente de Combate às Endemias vincula-se de forma imperativa ao Art. 198, § 9º, da Constituição Federal de 1988 (acrescentado pela Emenda Constitucional nº 120/2022) c/c o art. 9º-A da Lei Federal nº 11.350/2006:
- **Piso Salarial Nacional:** O vencimento inicial dos Agentes de Combate às Endemias **não será inferior a 2 (dois) salários mínimos federais**.
- **Assistência Financeira da União (CF Art. 198, §§ 7º e 8º):** Compete expressamente à União prestar assistência financeira complementar aos Municípios e transferir recursos orçamentários com dotação própria de forma regular e automática para o pagamento integral do piso nacional.
- **Imunidade Fiscal aos Limites da LRF (CF Art. 198, § 11 c/c Tema 1.132/STF):** Os recursos financeiros repassados pela União aos Municípios para pagamento do piso salarial de ACS e ACE **não serão considerados para fins do cálculo do limite de despesa com pessoal** fixado pela Lei de Responsabilidade Fiscal (LRF). O STF (Tema 1.132 da Repercussão Geral) confirmou a eficácia plena e imediata do piso de dois salários mínimos, não podendo o Município pretextar crise fiscal ou limite da LRF para reduzir ou descumprir o piso.

## Requisitos de Investidura, Regime Estatutário e Lotação Regionalizada
- **Regime Estatutário Efetivo:** Em Porto Velho, o provimento do cargo de ACE submete-se exclusivamente ao regime estatutário da LC nº 385/2010. É expressamente vedada a terceirização, contratação temporária ou precarização do combate a endemias para funções permanentes de saúde (art. 198, § 4º da CF c/c art. 16 da Lei Federal 11.350/2006).
- **Requisitos de Posse (Anexo I do Edital SEMUSA nº 25/2026 c/c Lei Federal 11.350/06, art. 7º):**
  1. Conclusão do **Ensino Médio Completo**;
  2. Conclusão, com aproveitamento, de **Curso de Formação Inicial com carga horária mínima de 40 (quarenta) horas** ministrado pelo Município ou sob sua supervisão.
- **Inexigibilidade de Residência Prévia para o ACE:** Diferentemente do Agente Comunitário de Saúde (ACS), que deve obrigatoriamente residir na área da comunidade desde a publicação do edital (art. 6º, I da Lei 11.350/06), **para o Agente de Combate às Endemias (ACE) NÃO há exigência legal de residência na área geográfica de atuação**. O candidato a ACE apenas escolhe sua localidade de lotação no ato da inscrição.
- **Jornada de Trabalho:** **40 (quarenta) horas semanais integrais**, dedicadas às ações de visitação domiciliar, busca ativa de focos, aplicação de larvicidas e educação sanitária. A antiga divisão de 30 horas de campo e 10 horas complementares foi revogada pelas Leis Federais nº 13.708/2018 e nº 14.792/2024.
- **Lotação Regionalizada no Edital nº 25/2026 (SEMUSA):** As vagas foram distribuídas em 16 códigos específicos de vaga: **Código 340 (Sede Urbana de Porto Velho)** e **Códigos 341 a 356 (15 Distritos Rurais e Ribeirinhos)**, como Calama, São Carlos, Extrema, Nova Califórnia, Jaci-Paraná, Abunã, Vista Alegre, etc. O candidato concorre e vincula sua nomeação ao código escolhido.

## Desenvolvimento Funcional e Estrutura Remuneratória (LC 390/2010)
A remuneração do servidor resulta da soma do vencimento básico com as vantagens pecuniárias previstas em lei:
- **Vencimento Básico:** Valor fixado em lei para a Referência salarial do cargo (iniciando em R$ 3.036,00 na Ref. I da LC 1.018/2025).
- **Progressão Horizontal (por Tempo e Desempenho):** Avanço de uma Referência para a imediatamente subsequente (ex.: da Ref. I para a Ref. II) **dentro da mesma Classe (Classe A)**. Exige o cumprimento cumulativo do **interstício bienal de 24 (vinte e quatro) meses de efetivo exercício** na referência anterior e conceito satisfatório na Avaliação Periódica de Desempenho. Afastamentos não remunerados, suspensão disciplinar ou excesso de faltas não justificadas suspendem o cômputo do interstício.
- **Progressão Vertical / Titulação:** Salto decorrente de cursos de qualificação, aperfeiçoamento técnico e formação acadêmica na área da saúde pública, nos termos do plano de carreira da SEMUSA.

### Vantagens Pecuniárias, Gratificações e Adicionais
- **Adicional de Insalubridade Constitucional:** Garantido de forma cogente pelo art. 198, § 10 da CF/88 (EC 120/2022) e art. 9º-A, § 3º da Lei Federal nº 11.350/2006. Devido em razão da exposição contínua do ACE a agentes biológicos infecciosos (vírus da dengue, protozoários da malária e leishmaniose) e manipulação de agentes químicos (inseticidas adulticidas organofosforados/piretroides e larvicidas químicos e biológicos), calculado nos percentuais legalmente definidos sobre a base de cálculo aplicável.
- **Adicional de Localidade / Difícil Acesso nos Distritos Rurais (Art. 8º da LC nº 447/2012):** Gratificação instituída para servidores da SEMUSA lotados e em exercício fora da sede urbana, compensando as dificuldades de transporte e isolamento geográfico nos distritos do Baixo Madeira e da Ponta do Abunã.
- **Gratificação de Produtividade Especial (GPE):** Regulamentada na LC nº 391/2010 (alterada pela LC nº 594/2015), vinculada ao cumprimento das metas mensais de vistorias domiciliares e inspeções de quarteirões.
- **Incentivo Financeiro Adicional (IFA):** Parcela extraordinária anual transferida pela União no último trimestre de cada ano (Portaria GM/MS nº 674/2003 e normativas subsequentes), repassada aos agentes como reconhecimento financeiro pelo cumprimento das metas da vigilância epidemiológica (14º vencimento anual).
- **Indenização de Transporte (Art. 9º-H da Lei 11.350/2006):** Dever do Município de fornecer meios de locomoção adequados ou indenizar despesas de deslocamento de campo do ACE.`,
    summary: `Síntese estruturada dos Planos de Carreira e Salários de Porto Velho (LC 390/2010 vs LC 391/2010 e LC 1.018/2025):

| Eixo Comparativo | LC Municipal nº 390/2010 (PCCR Saúde) | LC Municipal nº 391/2010 (Quadro Geral) |
| --- | --- | --- |
| **Âmbito de Aplicação** | Privativo dos profissionais da saúde da SEMUSA. | Quadro geral de cargos e empregos de toda a Prefeitura Direta. |
| **Estrutura Funcional** | 7 Classes (A a G) e 15 Referências (I a XV). | Agrupa administração, fazenda, obras e saúde. |
| **Enquadramento do ACE** | Classe A (Grupo da Saúde - apoio e vigilância). | Item 29 do Anexo II da LC 391/2010 c/c LC 449/2012. |
| **Atualização Salarial (LC 1.018/2025)** | Anexo II atualizado: Vencimento inicial (Ref. I) = **R$ 3.036,00**; Topo (Ref. XV) = **R$ 3.739,61**. |
| **Piso Constitucional (EC 120/2022)** | Mínimo de **2 salários mínimos federais** (CF art. 198, § 9º), custeado pela União com dotação própria. |
| **Impacto na LRF (Tema 1.132/STF)** | Os repasses federais do piso do ACE **não entram no cômputo da LRF** (CF art. 198, § 11). |
| **Requisitos de Ingresso** | **Ensino Médio Completo** + **Curso Inicial de 40 horas**. Não exige residência na área. |
| **Jornada de Trabalho** | **40 horas semanais integrais** (revogada a divisão 30h campo / 10h curso). |
| **Vantagens Acumuláveis** | Piso Nacional + Insalubridade (art. 198, § 10) + Difícil Acesso nos Distritos (LC 447/12) + IFA Anual. |`,
    questions: [
      {
        q: '[Autoral] A respeito da estrutura normativa que rege os servidores públicos municipais de Porto Velho, assinale a opção que diferencia com rigor técnico o objeto da Lei Complementar Municipal nº 390/2010 da Lei Complementar Municipal nº 391/2010:',
        options: [
          'A LC nº 390/2010 institui o Plano de Carreira, Cargos e Remuneração (PCCR) privativo dos Profissionais da Saúde da SEMUSA, ao passo que a LC nº 391/2010 organiza de forma ampla os cargos e empregos públicos de toda a Prefeitura de Porto Velho, abrigando o ACE no Grupo da Saúde.',
          'A LC nº 390/2010 trata unicamente de cargos em comissão de livre nomeação, enquanto a LC nº 391/2010 disciplina apenas os estagiários do município.',
          'Ambas as leis foram integralmente revogadas pela Lei Orgânica Municipal, passando os servidores municipais a ser regidos pela Consolidação das Leis do Trabalho (CLT).',
          'A LC nº 391/2010 é um estatuto exclusivo dos Agentes de Endemias, não abrangendo nenhum outro cargo ou secretaria municipal.',
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Diferenciação Normativa de Carreiras',
        comment: 'Gabarito: A. A LC nº 390/2010 é o PCCR setorial da Saúde (SEMUSA - 7 classes e 15 referências); a LC nº 391/2010 é a lei de organização geral de cargos e empregos da Prefeitura de Porto Velho, que com as alterações das LCs 449/2012 e 1.018/2025 posiciona o ACE no Grupo da Saúde sob regime estatutário. Erro da B: tratam de cargos efetivos permanentes; erro da C: o regime é estatutário pleno regido pela LC 385/2010 e não CLT; erro da D: a LC 391 abrange todas as secretarias municipais da administração direta e não é exclusiva de ACE.',
      },
      {
        q: '[Autoral] O cargo de Agente de Combate às Endemias (ACE) da SEMUSA Porto Velho possui remuneração disciplinada em conformidade com o Art. 198 da CF/88 (EC nº 120/2022) e a Lei Complementar Municipal nº 1.018/2025. A respeito da composição remuneratória e do piso salarial do ACE, é correto afirmar:',
        options: [
          'O piso salarial do ACE pode ser reduzido pelo Prefeito por decreto se o município ultrapassar o limite de gastos de pessoal da Lei de Responsabilidade Fiscal.',
          'O vencimento inicial da categoria não será inferior a dois salários mínimos, cabendo à União prestar assistência financeira regular e automática com dotação própria, sendo ainda garantido o adicional de insalubridade e aposentadoria especial em razão dos riscos.',
          'Os repasses federais vinculados ao pagamento do piso salarial dos agentes de endemias integram a base de cálculo para a apuração do limite máximo de despesas com pessoal da Prefeitura na LRF.',
          'O adicional de insalubridade foi extinto pela Emenda Constitucional nº 120/2022, sendo expressamente vedado qualquer pagamento cumulativo com o piso.',
        ],
        ans: 1,
        difficulty: 'Intermediário',
        questionType: 'Piso Salarial Nacional e LRF',
        comment: 'Gabarito: B. O art. 198, §§ 7º, 8º, 9º e 10, da CF/88 (inseridos pela EC 120/2022) e a LC Municipal nº 1.018/2025 fixam o piso de 2 salários mínimos, garantem assistência financeira regular e automática da União com dotação própria, e asseguram adicional de insalubridade e aposentadoria especial. Erro da A: o piso é garantia constitucional vinculante; erro da C: o § 11 do art. 198 da CF e o Tema 1.132 do STF estabelecem expressamente que tais recursos não são computados nos limites da LRF; erro da D: o adicional de insalubridade é direito cumulativo expressamente garantido pelo § 10.',
      },
      {
        q: '[Autoral] Em conformidade com a Lei Federal nº 11.350/2006, com o Plano de Cargos da SEMUSA e com o Edital SEMUSA nº 25/2026, constituem requisitos obrigatórios para posse no cargo de Agente de Combate às Endemias e sua respectiva jornada de trabalho:',
        options: [
          'Comprovar residência na localidade de atuação desde a publicação do edital e jornada semanal facultativa de vinte horas.',
          'Possuir nível superior em Biomedicina e aprovação em exame prático de tiro defensivo em área de floresta.',
          'Conclusão do Ensino Médio completo, aproveitamento no Curso de Formação Inicial de quarenta horas e cumprimento de jornada de quarenta horas semanais integrais, não sendo exigido residir na área de atuação.',
          'Ter concluído apenas o ensino fundamental e assinar termo de renúncia ao regime estatutário da LC 385/2010.',
        ],
        ans: 2,
        difficulty: 'Fácil',
        questionType: 'Requisitos de Investidura e Jornada',
        comment: 'Gabarito: C. Conforme o art. 7º da Lei Federal nº 11.350/2006 e o Edital SEMUSA nº 25/2026, os requisitos para investidura como ACE são: Ensino Médio completo e aprovação no Curso Introdutório de 40 horas, com jornada de 40 horas semanais integrais (Leis 13.708/18 e 14.792/24). A residência prévia na área é exigência restrita ao ACS (art. 6º, I), não se aplicando ao ACE. Erro da A: o ACE não tem obrigação de residir na localidade e a jornada é de 40h; erro da B: a exigência é nível médio e não há exame de tiro; erro da D: o regime do ACE em Porto Velho é estatutário efetivo (LC 385/2010) e a escolaridade é ensino médio.',
      },
      {
        q: '[Autoral] No que tange à evolução e ao desenvolvimento na carreira dos servidores da SEMUSA regidos pelo PCCR da Saúde (LC Municipal nº 390/2010 e alterações), a progressão horizontal caracteriza-se por:',
        options: [
          'A movimentação automática para o topo da carreira no momento da conclusão do estágio probatório.',
          'A passagem do servidor da referência salarial em que se encontra para a imediatamente subsequente dentro da mesma classe, após cumprir o interstício de vinte e quatro meses de efetivo exercício e obter conceito satisfatório na avaliação periódica de desempenho.',
          'A transferência definitiva do servidor para órgãos federais mantendo a remuneração pelo tesouro municipal.',
          'A elevação compulsória da jornada de trabalho para sessenta horas semanais sem reflexo remuneratório.',
        ],
        ans: 1,
        difficulty: 'Intermediário',
        questionType: 'Desenvolvimento Funcional na Carreira',
        comment: 'Gabarito: B. A progressão horizontal na sistemática da LC nº 390/2010 consiste no avanço entre referências salariais dentro da mesma Classe, mediante o cumprimento cumulativo do interstício bienal de 24 meses de efetivo exercício e avaliação de desempenho satisfatória. Erro da A: não há progressão automática para o topo; erro da C: progressão não transfere o servidor entre entes federativos (o que violaria a Súmula Vinculante 43); erro da D: a progressão horizontal não altera a jornada legal de 40 horas semanais.',
      },
      {
        q: '[Autoral] Um Agente de Combate às Endemias da SEMUSA Porto Velho é lotado no Distrito de Extrema de Rondônia (Código 345 do Edital nº 25/2026), na região da Ponta do Abunã. Além do vencimento básico inicial fixado pela LC nº 1.018/2025 (Ref. I: R$ 3.036,00), o servidor fará jus a vantagens pecuniárias específicas da função e da localidade, entre as quais se incluem:',
        options: [
          'Apenas vale-refeição simbólico, sendo vedada qualquer gratificação compensatória pelo isolamento geográfico do distrito.',
          'Honorários advocatícios de sucumbência distribuídos mensalmente pelo gabinete da SEMUSA.',
          'Pagamento exclusivo por comissão de vendas de inseticidas no comércio local.',
          'Adicional de Insalubridade constitucional por exposição a agentes biológicos e químicos, e Adicional de Localidade / Difícil Acesso nos termos da LC nº 447/2012, além do repasse anual do Incentivo Financeiro Adicional (IFA).',
        ],
        ans: 3,
        difficulty: 'Intermediário',
        questionType: 'Vantagens Pecuniárias do ACE',
        comment: 'Gabarito: D. A remuneração do ACE em exercício distrital compõe-se do vencimento básico da tabela municipal (LC 1.018/2025, Ref. I: R$ 3.036,00), do adicional de insalubridade constitucional (CF art. 198, § 10), do adicional de localidade/difícil acesso para distritos rurais da SEMUSA (art. 8º da LC 447/2012), e do IFA anual (Portaria MS 674). Erro da A: o adicional de difícil acesso é expressamente assegurado pela LC 447/2012; erro da B: honorários advocatícios pertencem a advogados e procuradores públicos (Lei 8.906/94); erro da C: o ACE é servidor público estatutário proibido de comercializar insumos públicos.',
      },
    ],
    flashcards: [
      [
        'Qual a diferença entre a LC 390/2010 e a LC 391/2010 em Porto Velho?',
        'A LC 390/2010 institui o PCCR exclusivo dos profissionais da Saúde (SEMUSA - 7 classes e 15 referências), enquanto a LC 391/2010 organiza de forma geral os cargos e empregos de toda a Prefeitura de Porto Velho, inserindo o ACE no Grupo da Saúde.',
      ],
      [
        'Como se aplica o piso nacional de 2 salários mínimos do ACE perante a LRF e a LC 1.018/2025?',
        'O piso inicial de 2 salários mínimos (CF art. 198, § 9º) é repassado automaticamente pela União e imune aos limites da LRF (art. 198, § 11 e Tema 1.132/STF), iniciando na Ref. I em R$ 3.036,00 na LC 1.018/2025 de Porto Velho.',
      ],
      [
        'O ACE tem obrigação de residir na localidade de atuação e qual é sua jornada de trabalho?',
        'O ACE não precisa residir na localidade de atuação (requisito privativo do ACS); sua jornada obrigatória é de 40 horas semanais integrais e seu vínculo funcional é estatutário efetivo (LC 385/2010).',
      ],
    ],
    references: [
      {
        title: 'SAPL — LC Municipal nº 390/2010 (PCCR da Saúde de Porto Velho)',
        url: 'https://sapl.portovelho.ro.leg.br/ta/57/text',
        section: 'Arts. 5º a 11 e Anexos (classes, referências, progressão bienal e gratificações da saúde).',
      },
      {
        title: 'SAPL — LC Municipal nº 391/2010 e LC 1.018/2025 (Quadro Geral e Nova Tabela)',
        url: 'https://sapl.portovelho.ro.leg.br/ta/58/text',
        section: 'Anexo II: Tabela de Vencimento dos Agentes de Endemias (Ref. I R$ 3.036,00 a Ref. XV R$ 3.739,61).',
      },
      {
        title: 'Emenda Constitucional nº 120/2022 e Tema 1.132 do STF',
        url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc120.htm',
        section: 'Art. 198, §§ 7º a 11 da CF/88 (piso de 2 SM, dotação própria da União, insalubridade e imunidade à LRF).',
      },
    ],
  },

  // =========================================================================
  // AULA leg_4: ESTATUTO DA PESSOA COM DEFICIÊNCIA (LEI FEDERAL Nº 13.146/2015)
  // =========================================================================
  {
    id: 'leg_4',
    title: 'Modelo biopsicossocial, 6 barreiras, direito à saúde e capacidade civil na LBI',
    theory: `## Conceito Legal e Superação do Modelo Biomédico (Art. 2º da LBI)
A Lei Federal nº 13.146, de 06 de julho de 2015 (Estatuto da Pessoa com Deficiência / Lei Brasileira de Inclusão - LBI), internalizou a Convenção sobre os Direitos das Pessoas com Deficiência da ONU com status de emenda constitucional (art. 5º, § 3º, da CF/88). O art. 2º da LBI estabelece o conceito contemporâneo de pessoa com deficiência:
> *"Considera-se pessoa com deficiência aquela que tem impedimento de longo prazo de natureza física, mental, intelectual ou sensorial, o qual, em interação com uma ou mais barreiras, pode obstruir sua participação plena e efetiva na sociedade em igualdade de condições com as demais pessoas."*

Esse paradigma consagra o **Modelo Biopsicossocial**: a deficiência deixa de ser vista como defeito ou doença intrínseca do indivíduo (modelo biomédico ultrapassado) e passa a ser compreendida como o resultado da colisão entre o impedimento corporal e as barreiras atitudinais, arquitetônicas e ambientais erguidas pela sociedade.
Quando necessária, a **avaliação da deficiência será biopsicossocial**, realizada por equipe **multiprofissional e interdisciplinar**, considerando obrigatoriamente (art. 2º, § 1º):
1. Os impedimentos nas funções e nas estruturas do corpo;
2. Os fatores socioambientais, psicológicos e pessoais;
3. A limitação no desempenho de atividades cotidianas;
4. A restrição de participação social.
Essa avaliação fundamenta-se nas diretrizes da **CIF (Classificação Internacional de Funcionalidade, Incapacidade e Saúde da OMS)**, e não em laudos médicos meramente estáticos baseados no CID.

## As 6 Espécies Taxativas de Barreiras (Art. 3º, IV, da LBI)
Barreira é qualquer entrave, obstáculo, atitude ou comportamento que limite ou impeça a participação social ou o exercício de direitos. O art. 3º, inciso IV, da LBI categoriza expressamente seis modalidades de barreiras:
- **a) Barreiras Urbanísticas:** existentes nas vias e nos espaços públicos e privados abertos ao público ou de uso coletivo (ex.: calçadas sem guias rebaixadas, buracos, desníveis e postes bloqueando o passeio público);
- **b) Barreiras Arquitetônicas:** existentes nos edifícios públicos e privados (ex.: ausência de rampas ou elevadores, escadas sem corrimão, portas estreitas que não comportam cadeiras de rodas, balcões altos e banheiros inacessíveis);
- **c) Barreiras nos Transportes:** existentes nos sistemas e meios de transporte terrestres, fluviais ou aéreos (ex.: ônibus sem plataforma elevatória, barcos sem embarque acessível no Rio Madeira, ausência de avisos sonoros e visuais de parada);
- **d) Barreiras nas Comunicações e na Informação:** qualquer entrave que dificulte ou impeça a expressão ou o recebimento de mensagens através de sistemas de comunicação e de tecnologia da informação (ex.: folhetos de saúde sem versão em Braille ou fonte ampliada, sites da SEMUSA sem leitor de tela, campanhas sem janela de intérprete de Libras e legendas);
- **e) Barreiras Atitudinais:** atitudes, preconceitos, estigmas ou comportamentos que impeçam ou prejudiquem a participação social da pessoa com deficiência em igualdade de condições (ex.: capacitismo, infantilização, pressupor incapacidade intelectual, ignorar a pessoa e dirigir-se apenas ao seu acompanhante);
- **f) Barreiras Tecnológicas:** as que dificultam ou impedem o acesso da pessoa com deficiência às tecnologias da informação e da comunicação.

## Desenho Universal, Adaptação Razoável e Tecnologia Assistiva (Art. 3º)
- **Desenho Universal (Art. 3º, II):** Concepção de produtos, ambientes, programas e serviços a serem usados por todas as pessoas, na maior medida possível, sem necessidade de adaptação ou projeto específico (é a regra geral prioritária do planejamento público).
- **Adaptação Razoável (Art. 3º, VI):** Modificações e ajustes necessários e adequados que não acarretem ônus desproporcional e indevido, quando requeridos em cada caso particular, a fim de assegurar o exercício de direitos da pessoa com deficiência.
- **Tecnologia Assistiva ou Ajuda Técnica (Art. 3º, III):** Produtos, equipamentos, dispositivos, recursos, metodologias e serviços voltados a promover a autonomia, independência e qualidade de vida da pessoa com deficiência.

## Direito Fundamental à Saúde no SUS (Arts. 18 a 23 da LBI)
O Estatuto da Pessoa com Deficiência assegura atenção integral à saúde em todos os níveis de complexidade pelo Sistema Único de Saúde (SUS), garantindo acesso universal, gratuito e igualitário (art. 18):
- **Descentralização e Proximidade Domiciliar (§ 2º):** Os serviços de habilitação e reabilitação devem ser ofertados o mais próximo possível da residência da pessoa com deficiência, **inclusive na zona rural e em comunidades distritais e ribeirinhas** (diretriz vital para os 15 distritos rurais de Porto Velho).
- **Atendimento Domiciliar Multiprofissional (§ 4º, I):** O SUS é expressamente obrigado a ofertar **atendimento domiciliar multiprofissional**, tratamento ambulatorial e internação para pessoas com deficiência impossibilitadas de locomoção. O ACE tem papel crucial ao identificar e cadastrar essas pessoas nas visitas domiciliares, articulando a equipe de saúde da família.
- **Campanhas de Saúde Acessíveis (§ 4º, V):** Campanhas de vacinação, prevenção de endemias (dengue, malária, etc.) e educação em saúde devem ser disponibilizadas em formatos plenamente acessíveis (áudio, vídeo com Libras e linguagem simples).
- **Direito a Acompanhante (Art. 21) e Consentimento Informado (Art. 22):** É assegurado acompanhante em tempo integral nos casos de internação hospitalar. A realização de procedimentos clínicos depende de consentimento prévio, livre e esclarecido, sendo vedada qualquer intervenção compulsória baseada na deficiência.

## Plena Capacidade Civil e Curatela Extraordinária (Arts. 6º, 84 e 85)
A LBI operou verdadeira revolução na teoria das incapacidades civis no Brasil:
- **Regra da Plena Capacidade Civil (Art. 6º):** A pessoa com deficiência é plenamente capaz para todos os atos da vida civil. A deficiência NÃO afeta a plena capacidade civil para:
  1. Casar-se ou constituir união estável;
  2. Exercer direitos sexuais e reprodutivos;
  3. Conservar sua fertilidade, sendo terminantemente **proibida a esterilização compulsória**;
  4. Exercer o direito à família, guarda, tutela e adoção de filhos;
  5. Votar e ser votada em eleições democráticas.
- **Caráter Extraordinário da Curatela (Art. 85):** A curatela passou a ser medida **extraordinária**, de duração delimitada, proporcional às necessidades concretas do indivíduo e restrita estritamente aos **atos relacionados aos direitos de natureza patrimonial e negocial**. A curatela **NUNCA alcança direitos existenciais** (corpo, sexualidade, casamento, voto e família).
- **Tomada de Decisão Apoiada (Art. 1.783-A do Código Civil):** Alternativa não restritiva à curatela, na qual a pessoa com deficiência elege duas pessoas de sua confiança para apoiá-la na gestão de seus atos negociais.

## Equiparações Legais de Proteção às Deficiências Sensoriais
- **Lei Federal nº 14.126/2021 (Visão Monocular):** Classificou formalmente a visão monocular como deficiência sensorial do tipo visual para todos os efeitos legais, incorporando à lei a histórica Súmula 377 do Superior Tribunal de Justiça (STJ): *"O portador de visão monocular tem direito de concorrer, em concurso público, às vagas reservadas aos deficientes"*.
- **Lei Federal nº 14.768/2023 (Deficiência Auditiva Unilateral Total):** Estabeleceu nova definição legal para a deficiência auditiva, enquadrando expressamente a perda auditiva unilateral total (anacusia unilateral), superando de forma definitiva a antiga e restritiva Súmula 552 do STJ, garantindo a essas pessoas todos os direitos e reservas legais.`,
    summary: `Síntese estruturada da Lei Federal nº 13.146/2015 (Estatuto da Pessoa com Deficiência / LBI) e leis correlatas:

| Instituto da LBI | Definição Legal / Diretriz Normativa | Armadilha Clássica de Bancas de Concurso |
| --- | --- | --- |
| **Conceito de Deficiência (Art. 2º)** | Impedimento de longo prazo em interação com uma ou mais barreiras que obstrui a participação em igualdade de condições. | Avaliação é **biopsicossocial** por equipe **multiprofissional** (CIF/OMS). Dizer que é perícia médica isolada (CID). |
| **As 6 Barreiras (Art. 3º, IV)** | Urbanísticas (vias/espaços públicos); Arquitetônicas (edifícios); Transportes; Comunicações/informação; Atitudinais; Tecnológicas. | Trocar barreira arquitetônica (prédio da SEMUSA sem rampa) por urbanística (calçada esburacada). |
| **Barreiras Atitudinais** | Atitudes, preconceitos, estigmas e capacitismo que prejudicam a participação social. | Tratar o preconceito como mero "desvio moral", sem enquadrar como barreira jurídica punível. |
| **Direito à Saúde (Art. 18)** | SUS integral e descentralizado (zona rural/distritos); **atendimento domiciliar multiprofissional** para quem tem dificuldade de locomoção. | Afirmar que a reabilitação concentra-se apenas na capital ou que o atendimento domiciliar é facultativo. |
| **Plena Capacidade Civil (Art. 6º)** | A pessoa com deficiência é plenamente capaz para casar, votar, conservar fertilidade e adotar. | Dizer que a pessoa com deficiência intelectual é absolutamente incapaz ou impedida de votar. |
| **Limites da Curatela (Art. 85)** | Medida **extraordinária** restrita a atos **patrimoniais e negociais**. Não atinge direitos existenciais. | Afirmar que o curador pode decidir sobre o casamento, voto ou esterilização da pessoa curatelada. |
| **Leis 14.126/21 e 14.768/23** | Visão monocular = deficiência sensorial visual (Súmula 377 STJ); Surdez unilateral total = deficiência auditiva (superando Súmula 552 STJ). | Dizer que visão monocular ou perda auditiva unilateral não asseguram reserva de vagas em concurso. |`,
    questions: [
      {
        q: '[Autoral] Durante a visita domiciliar no Distrito de Calama, em Porto Velho, um Agente de Combate às Endemias atende um morador com deficiência intelectual que reside com sua mãe idosa. O ACE percebe caixas d’água com larvas de mosquito transmissor da dengue e orienta a vedação e o tratamento. O agente dirige a palavra diretamente ao morador com deficiência, explicando de forma clara e acessível as medidas profiláticas. Diante da Lei Federal nº 13.146/2015 (Estatuto da Pessoa com Deficiência), a postura do agente:',
        options: [
          'Foi tecnicamente correta, pois a deficiência não afeta a plena capacidade civil do indivíduo e a conduta respeitosa evitou barreira atitudinal, promovendo a autonomia do cidadão.',
          'Violou a legislação civil brasileira, pois a pessoa com deficiência intelectual é absolutamente incapaz e não pode dialogar com agentes públicos.',
          'Exige intervenção compulsória e internação psiquiátrica imediata em razão do risco biológico sanitário.',
          'É inválida, pois a Lei Brasileira de Inclusão aplica-se exclusivamente a pessoas com deficiência física e motora da sede urbana da capital.',
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Caso Prático ACE (Barreiras e Capacidade)',
        comment: 'Gabarito: A. Conforme os arts. 2º e 6º da Lei nº 13.146/2015 (LBI), a pessoa com deficiência goza de plena capacidade civil. O diálogo direto e respeitoso do ACE elimina barreiras atitudinais (art. 3º, IV, "e"), fortalecendo a cidadania e o vínculo comunitário no SUS. Erro da B: a LBI revogou a incapacidade civil absoluta das pessoas com deficiência intelectual, sendo a curatela medida excepcional e patrimonial (art. 85); erro da C: a LBI proíbe intervenções compulsórias baseadas na deficiência (art. 22); erro da D: a LBI tem âmbito nacional e abrange todas as modalidades de impedimento em qualquer localidade rural ou urbana.',
      },
      {
        q: '[Autoral] No que tange à caracterização legal e à avaliação das deficiências no ordenamento jurídico brasileiro contemporâneo, à luz da Lei Federal nº 13.146/2015, da Lei Federal nº 14.126/2021 e da Lei Federal nº 14.768/2023, assinale a afirmativa correta:',
        options: [
          'A avaliação da deficiência é exclusivamente biomédica e consiste em teste genético realizado por médico perito monocrático, sendo irrelevantes fatores socioambientais.',
          'A visão monocular é considerada mera condição estética, não assegurando enquadramento legal como deficiência para efeito de reserva de vagas em concursos.',
          'A visão monocular é legalmente classificada como deficiência sensorial visual (Lei 14.126/2021 c/c Súmula 377 STJ), e a deficiência auditiva inclui a perda auditiva unilateral total nos termos da Lei 14.768/2023.',
          'A perda auditiva unilateral total não é reconhecida como deficiência auditiva em nenhuma hipótese pelo direito brasileiro.',
        ],
        ans: 2,
        difficulty: 'Intermediário',
        questionType: 'Equiparações Legais de Deficiência',
        comment: 'Gabarito: C. A Lei Federal nº 14.126/2021 consolidou que a visão monocular é deficiência sensorial do tipo visual (Súmula 377 do STJ). Do mesmo modo, a Lei Federal nº 14.768/2023 superou a antiga Súmula 552 do STJ, reconhecendo expressamente a perda auditiva unilateral total como deficiência auditiva. Erro da A: a avaliação é biopsicossocial, realizada por equipe multiprofissional e interdisciplinar (art. 2º, § 1º); erro da B: a Lei 14.126/2021 garante todos os efeitos legais à visão monocular; erro da D: a Lei 14.768/2023 enquadra legalmente a surdez unilateral total.',
      },
      {
        q: '[Autoral] O Art. 18 da Lei Federal nº 13.146/2015 disciplina a atenção à saúde da pessoa com deficiência no âmbito do Sistema Único de Saúde (SUS). Nos termos expressos desse artigo, as ações e os serviços públicos de saúde destinados à pessoa com deficiência devem garantir:',
        options: [
          'Atendimento domiciliar multiprofissional para as pessoas impossibilitadas de locomoção, além de campanhas de saúde e vacinação em formatos plenamente acessíveis.',
          'Cobrança compulsória de taxa de coparticipação financeira para o fornecimento de cadeiras de rodas e próteses na rede pública.',
          'Obrigatoriedade de esterilização cirúrgica de mulheres internadas em hospitais municipais que apresentem diagnóstico psiquiátrico.',
          'Concentração dos serviços de reabilitação física exclusivamente na capital do Estado, vedada sua descentralização para os distritos municipais.',
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Direito à Saúde na LBI',
        comment: 'Gabarito: A. O art. 18, § 4º, incisos I e V, do Estatuto da Pessoa com Deficiência assegura atendimento domiciliar multiprofissional para pessoas com dificuldade de locomoção e a acessibilidade completa de campanhas de vacinação e saúde. Erro da B: o SUS assegura acesso gratuito e universal sem taxas de coparticipação; erro da C: o art. 6º, IV, garante o direito de conservar a fertilidade, sendo a esterilização forçada crime e violação grave; erro da D: o art. 18, § 2º, estabelece a descentralização dos serviços para local próximo da moradia, inclusive zona rural.',
      },
      {
        q: '[Autoral] Em relação às 6 (seis) espécies taxativas de barreiras estabelecidas pelo Art. 3º, inciso IV, da Lei Federal nº 13.146/2015 (LBI), assinale a opção que exemplifica corretamente uma barreira atitudinal:',
        options: [
          'A ausência de rampas de acesso e de elevadores adaptados na entrada principal da sede da SEMUSA.',
          'A atitude preconceituosa, capacitista ou discriminatória de um servidor que recusa atendimento ou infantiliza uma pessoa com deficiência, presumindo sua incapacidade de decisão.',
          'Um buraco profundo no meio da calçada da avenida municipal impedindo a passagem de uma cadeira de rodas.',
          'A falta de sinal sonoro nos semáforos de cruzamentos de trânsito de grande fluxo veicular.',
        ],
        ans: 1,
        difficulty: 'Fácil',
        questionType: 'Classificação de Barreiras',
        comment: 'Gabarito: B. Conforme o art. 3º, IV, "e", da LBI, barreiras atitudinais são atitudes ou comportamentos que impeçam ou prejudiquem a participação social da pessoa com deficiência em igualdade de condições (ex.: preconceito, capacitismo, infantilização). Erro da A: trata-se de barreira arquitetônica (edifícios); erro da C: calçada pública esburacada é barreira urbanística (vias públicas); erro da D: semáforo de trânsito sem aviso sonoro enquadra-se nas barreiras urbanísticas e nos transportes/comunicação.',
      },
      {
        q: '[Autoral] Sobre a plena capacidade civil e o instituto da Curatela disciplinados na Lei Federal nº 13.146/2015 (Estatuto da Pessoa com Deficiência), é correto afirmar que:',
        options: [
          'Toda pessoa com deficiência auditiva ou visual deve ser submetida obrigatoriamente a curatela total sobre seus atos patrimoniais e existenciais.',
          'A decretação de curatela impede a pessoa com deficiência de casar-se, votar nas eleições gerais e conservar sua integridade física.',
          'A deficiência intelectual implica a perda definitiva de todos os direitos políticos e do direito de exercer tutela ou adoção.',
          'A deficiência não afeta a plena capacidade civil da pessoa; e a curatela constitui medida extraordinária, proporcional às necessidades fáticas, restrita estritamente aos atos relacionados aos direitos de natureza patrimonial e negocial.',
        ],
        ans: 3,
        difficulty: 'Intermediário',
        questionType: 'Capacidade Civil e Curatela',
        comment: 'Gabarito: D. Combina com exatidão o art. 6º (plena capacidade civil para casar, votar, manter fertilidade e adotar) e o art. 85 da LBI (curatela como medida extraordinária e limitada aos atos de natureza patrimonial e negocial). Erro da A: a deficiência sensorial não enseja curatela automática e a curatela é sempre extraordinária; erro da B e C: a curatela não alcança direitos existenciais (ao próprio corpo, à sexualidade, ao matrimônio, ao voto e à família), expressamente preservados pelo art. 85, § 1º.',
      },
    ],
    flashcards: [
      [
        'Como a LBI define deficiência e como deve ser sua avaliação legal?',
        'Impedimento de longo prazo (físico, mental, intelectual ou sensorial) que, em interação com barreiras, obstrui a participação plena na sociedade; sua avaliação é biopsicossocial, realizada por equipe multiprofissional (CIF/OMS).',
      ],
      [
        'A pessoa com deficiência tem plena capacidade civil e até onde alcança a curatela?',
        'A deficiência não afeta a plena capacidade civil para casar, votar, manter fertilidade e adotar (art. 6º); a curatela é medida extraordinária restrita estritamente a atos de natureza patrimonial e negocial (art. 85).',
      ],
      [
        'Quais as inovações das Leis Federais 14.126/2021 e 14.768/2023 quanto à caracterização de deficiência?',
        'A Lei 14.126/2021 classificou a visão monocular como deficiência sensorial visual (Súmula 377 STJ); a Lei 14.768/2023 incluiu expressamente a perda auditiva unilateral total no conceito de deficiência auditiva (superando a Súmula 552 STJ).',
      ],
    ],
    references: [
      {
        title: 'Lei Federal nº 13.146/2015 — Estatuto da Pessoa com Deficiência (Planalto)',
        url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm',
        section: 'Arts. 1º a 6º (conceito, barreiras e capacidade civil), 18 a 23 (direito à saúde no SUS) e 84 a 86 (curatela).',
      },
      {
        title: 'Leis Federais nº 14.126/2021 e nº 14.768/2023 (Planalto)',
        url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14126.htm',
        section: 'Enquadramento legal de visão monocular e perda auditiva unilateral total como deficiências sensoriais.',
      },
    ],
  },

  // =========================================================================
  // AULA leg_5: DIREITO CONSTITUCIONAL NA CF/88 APLICADO AO CARGO E AO MUNICÍPIO
  // =========================================================================
  {
    id: 'leg_5',
    title: 'Princípios fundamentais, inviolabilidade domiciliar, municípios e administração pública',
    theory: `## Princípios Fundamentais da República (Arts. 1º a 4º da CF/88)
A Constituição da República Federativa do Brasil de 1988 inaugura seu texto estabelecendo preceitos basilares que condicionam toda a atuação dos agentes públicos:
- **Fundamentos da República (Art. 1º):** Princípios estruturantes expressos por substantivos, memorizados pelo mnemônico **SO-CI-DI-VA-PLU**:
  * I - **So**berania (independência e supremacia do Estado brasileiro no cenário internacional);
  * II - **Ci**dadania (exercício pleno de direitos políticos, civis e sociais);
  * III - **Di**gnidade da pessoa humana (núcleo axiológico de proteção integral dos direitos fundamentais);
  * IV - **Va**lores sociais do trabalho e da livre iniciativa (dignificação do trabalho e primazia da ordem econômica);
  * V - **Plu**ralismo político (garantia de convívio democrático entre múltiplas correntes de pensamento).
  * *Parágrafo único:* *"Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos desta Constituição"* (consagração da democracia semidireta ou participativa).
- **Separação de Poderes (Art. 2º):** São Poderes da União, dos Estados, do DF e dos Municípios, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário. *Atenção máxima municipal:* No Município, existem apenas dois Poderes: **Poder Executivo** (Prefeitura) e **Poder Legislativo** (Câmara Municipal). **NÃO EXISTE Poder Judiciário nem Ministério Público Municipal no Brasil!** A prestação jurisdicional e o Ministério Público que atuam na comarca de Porto Velho pertencem ao Estado de Rondônia ou à União.
- **Objetivos Fundamentais da República (Art. 3º):** Metas político-programáticas de transformação social expressas por verbos no infinitivo, sintetizadas pelo mnemônico **CON-GA-ER-PRO**:
  * I - **Con**struir uma sociedade livre, justa e solidária;
  * II - **Ga**rantir o desenvolvimento nacional;
  * III - **Er**radicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais;
  * IV - **Pro**mover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação.
- **Princípios das Relações Internacionais (Art. 4º):** Independência nacional, prevalência dos direitos humanos, autodeterminação dos povos, não intervenção, igualdade entre os Estados, defesa da paz, solução pacífica dos conflitos, repúdio ao terrorismo e ao racismo, cooperação entre os povos e concessão de asilo político.

## Direitos Individuais e Coletivos: Inviolabilidade de Domicílio e Rotina do ACE (Art. 5º, XI)
O art. 5º da CF/88 consagra os direitos e garantias fundamentais individuais e coletivos. Para o Agente de Combate às Endemias, o dispositivo mais sensível é a garantia da inviolabilidade domiciliar:
> *"Art. 5º, XI - A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial;"*

### Harmonização Prática com o Combate a Endemias (Lei Federal nº 13.301/2016 e STF)
1. **Regra Geral:** O ingresso ordinário do ACE em residências habitadas para inspeção de quintais, caixas d'água e aplicação de larvicidas **exige o consentimento informado do morador**. O ACE deve identificar-se com crachá, uniforme oficial e explicar cordialmente o objetivo da visita preventiva.
2. **Exceções Constitucionais Expressas (Art. 5º, XI):**
   - A qualquer hora do dia ou da noite: em caso de **flagrante delito** ou **desastre**, ou para **prestar socorro**;
   - Apenas **durante o dia**: por **determinação judicial** (mandado judicial expedido pelo juiz competente).
3. **Ingresso Forçado em Situação de Risco Sanitário (Lei Federal nº 13.301/2016 e jurisprudência do STF):**
   - A Lei Federal nº 13.301/2016 autorizou o ingresso forçado de agentes de saúde em imóveis públicos e privados desocupados, abandonados ou na ausência reiterada do proprietário no combate ao mosquito transmissor da Dengue, Zika e Febre Amarela.
   - O Supremo Tribunal Federal (no julgamento do **Tema 280 da Repercussão Geral** e na **ADI 5592**) consolidou que o ingresso forçado em domicílio sem mandado judicial exige **motivação prévia idônea e demonstrada**, evidenciando fundadas razões de risco grave à saúde coletiva equivalente a situação emergencial de socorro sanitário.
   - Em imóvel habitado onde houver recusa peremptória do proprietário e sem perigo de desastre explosivo imediato, **o agente não pode arrombar as portas por iniciativa própria**: deve lavrar auto de recusa, notificar o morador e acionar a assessoria jurídica municipal para a obtenção de **mandado judicial para cumprimento durante o dia** com eventual apoio de força policial.

## Remédios Constitucionais do Art. 5º
- **Habeas Corpus (inc. LXVIII):** Protege a **liberdade de locomoção** contra ilegalidade ou abuso de poder. Ação gratuita, que prescinde de advogado.
- **Habeas Data (inc. LXXII):** Assegura o conhecimento de **informações relativas à pessoa do impetrante** constantes de registros públicos ou para **retificação de dados**. Ação gratuita que exige prévia recusa da via administrativa (Súmula 2 do STJ).
- **Mandado de Segurança Individual e Coletivo (incs. LXIX e LXX):** Protege **direito líquido e certo**, não amparado por HC ou HD, exigindo prova documental pré-constituída. Coletivo: ajuizado por partido com representação no Congresso, sindicato, entidade de classe ou associação legalmente constituída há pelo menos um ano.
- **Mandado de Injunção (inc. LXXI):** Concedido sempre que a **falta de norma regulamentadora** torne inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas da nacionalidade, soberania e cidadania.
- **Ação Popular (inc. LXXIII):** Qualquer **cidadão** (eleitor no gozo dos direitos políticos) tem legitimidade para propor ação visando a anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural, com isenção de custas salvo comprovada má-fé.

## Direitos Sociais e a Saúde na CF/88 (Arts. 6º a 13 e 196 a 200)
- O art. 6º inclui a saúde como direito social fundamental, ao lado da educação, trabalho, moradia, transporte e segurança.
- O art. 196 consagra a cláusula pétrea social da saúde: *"A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações e serviços para sua promoção, proteção e recuperação."*

## Organização do Estado: O Município na Federação (Arts. 29 a 31)
- **Criação de Municípios (Art. 18, § 4º):** Far-se-á por lei estadual, dentro do período determinado por Lei Complementar Federal, dependendo de consulta prévia, mediante plebiscito, às populações interessadas, após divulgação dos Estudos de Viabilidade Municipal (EVM).
- **Lei Orgânica Municipal (Art. 29):** Votada em dois turnos, com interstício mínimo de dez dias, e aprovada por dois terços dos membros da Câmara Municipal, que a promulga.
- **Competências Municipais (Art. 30):** Legislar sobre assuntos de interesse local (I); suplementar legislação federal e estadual (II); prestar serviços de saúde com cooperação técnica da União e do Estado (VII); e ordenar o uso do solo (VIII).
- **Fiscalização das Contas (Art. 31):** Controle externo da Câmara Municipal com auxílio do Tribunal de Contas do Estado (TCE-RO). O parecer prévio do TCE só deixa de prevalecer por voto de dois terços dos vereadores (§ 2º). As contas anuais ficam disponíveis a qualquer contribuinte por sessenta dias (§ 3º). É expressamente vedada a criação de novos Tribunais de Contas municipais (§ 4º).

## Administração Pública e Acumulação de Cargos pelo ACE (Arts. 37 a 39)
- **Princípios Expressos (Art. 37, caput):** **LIMPE** — Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência. O art. 37, § 1º, proíbe nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades em publicidade institucional.
- **Concurso Público (Art. 37, II e III):** Validade de até dois anos, prorrogável uma vez por igual período.
- **Acumulação Remunerada de Cargos Públicos (Art. 37, XVI):** Regra: vedada. Exceções taxativas, condicionadas à **compatibilidade de horários** e respeito ao teto remuneratório:
  * a) Dois cargos de professor;
  * b) Um cargo de professor com outro técnico ou científico;
  * c) **Dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas**.
- **O Impacto Decisivo da Lei Federal nº 14.536/2023 para o ACE:** Historicamente, debatia-se se o Agente de Combate às Endemias poderia acumular seu cargo com outro na saúde pública. A **Lei Federal nº 14.536/2023** encerrou definitivamente essa celeuma ao alterar a Lei nº 11.350/2006 para reconhecer expressamente: *"Os Agentes Comunitários de Saúde e os Agentes de Combate às Endemias são considerados profissionais de saúde, com profissões regulamentadas"*. Portanto, **o ACE pode acumular licitamente 2 cargos privativos de profissionais de saúde** (como ACE + Técnico de Enfermagem ou outro cargo de saúde regulamentado), desde que comprovada a compatibilidade de horários!`,
    summary: `Síntese estruturada de Direito Constitucional na CF/88 aplicado ao concurso da SEMUSA Porto Velho:

| Dispositivo da CF/88 | Regra Constitucional / Mnemônico | Aplicação Prática / Pegadinha da Banca |
| --- | --- | --- |
| **Art. 1º — Fundamentos** | **SO-CI-DI-VA-PLU**: Soberania, Cidadania, Dignidade, Valores do trabalho/iniciativa, Pluralismo político. | Confundir Fundamentos (substantivos) com Objetivos (verbos). Parágrafo único: todo poder emana do povo. |
| **Art. 2º — Separação de Poderes** | No Município existem apenas **Poder Executivo e Poder Legislativo**. | Afirmar que existe "Poder Judiciário Municipal" ou "Ministério Público do Município". |
| **Art. 3º — Objetivos Fundamentais** | **CON-GA-ER-PRO**: Construir sociedade justa, Garantir desenvolvimento, Erradicar pobreza, Promover o bem. | Dizer que "garantir o desenvolvimento nacional" é fundamento da República (é objetivo). |
| **Art. 5º, XI — Inviolabilidade Domiciliar** | Casa é asilo inviolável. Exceções: flagrante, desastre ou socorro (qualquer hora); ordem judicial (só de dia). | ACE entra com **consentimento**. Recusa em imóvel habitado exige **mandado judicial para o dia** (Lei 13.301/16 e STF Tema 280). |
| **Art. 5º — Remédios Constitucionais** | HC (locomoção), HD (dados pessoais), MS (direito líquido e certo), MI (falta de norma), Ação Popular (cidadão eleitor). | Ação Popular só pode ser proposta por **cidadão eleitor**, com isenção de custas salvo comprovada má-fé. |
| **Arts. 29 a 31 — Municípios** | LOM (2 turnos, 10d, 2/3, Câmara). Fiscalização pelo TCE-RO (parecer cai por 2/3). | É expressamente vedada a criação de novos Tribunais de Contas municipais (art. 31, § 4º). |
| **Art. 37, XVI — Acumulação de Cargos** | Vedada em regra. Exceção "c": dois cargos de saúde com profissões regulamentadas. | **Lei Federal 14.536/2023** enquadrou o ACE como profissional de saúde, permitindo acumular 2 cargos com compatibilidade de horários. |`,
    questions: [
      {
        q: '[Autoral] Em uma determinada rua de Porto Velho, um Agente de Combate às Endemias identifica um imóvel habitado cujo quintal apresenta recipientes acumulando água com centenas de larvas vivas de Aedes aegypti. Ao solicitar permissão para ingressar, o morador recusa peremptoriamente a entrada do agente. Considerando a garantia do Art. 5º, inciso XI, da CF/88 e a Lei Federal nº 13.301/2016, assinale a conduta constitucional e legalmente exigida do agente:',
        options: [
          'O ACE não deve arrombar ou forçar a entrada por conta própria; deve lavrar termo de recusa e notificação, informando a autoridade de vigilância epidemiológica para que requisite mandado judicial específico para cumprimento durante o dia, ou intervenção motivada de socorro sanitário nos termos da lei.',
          'O agente público deve arrombar os portões imediatamente durante o período noturno, pois o combate a mosquitos equipara-se a crime de terrorismo inafiançável.',
          'O domicílio perde sua garantia de inviolabilidade sempre que o morador apresentar atraso no pagamento do IPTU, autorizando arrombamento policial imediato.',
          'O ACE está impedido pela Constituição de fiscalizar qualquer imóvel de propriedade privada no território nacional.',
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Caso Prático ACE (Inviolabilidade Domiciliar)',
        comment: 'Gabarito: A. A casa é asilo inviolável (art. 5º, XI, CF/88). Diante de recusa em imóvel habitado sem desastre descontrolado explosivo, o ingresso forçado sem consentimento violaria a Constituição. Deve-se notificar formalmente para obtenção de determinação judicial para cumprimento durante o dia (STF Tema 280, ADI 5592 e Lei 13.301/2016). Erro da B: ordem judicial só pode ser executada de dia, e foco biológico não é crime de terrorismo; erro da C: débito tributário de IPTU não suspende garantias fundamentais individuais; erro da D: a fiscalização sanitária atua sobre imóveis públicos e privados, respeitadas as formalidades legais.',
      },
      {
        q: '[Autoral] A Constituição Federal de 1988 estabelece uma distinção técnica precisa entre os Fundamentos da República Federativa do Brasil (Art. 1º) e os Objetivos Fundamentais da República (Art. 3º). Assinale a opção que apresenta, respectivamente, um fundamento e um objetivo fundamental:',
        options: [
          'Garantir o desenvolvimento nacional e soberania.',
          'Dignidade da pessoa humana (Art. 1º, III) e erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais (Art. 3º, III).',
          'Construir uma sociedade livre, justa e solidária e pluralismo político.',
          'Promover o bem de todos e cidadania.',
        ],
        ans: 1,
        difficulty: 'Fácil',
        questionType: 'Fundamentos vs. Objetivos da República',
        comment: 'Gabarito: B. Fundamentos da República (art. 1º, SO-CI-DI-VA-PLU) incluem a dignidade da pessoa humana (inc. III); Objetivos Fundamentais (art. 3º, CON-GA-ER-PRO) incluem erradicar a pobreza e reduzir desigualdades (inc. III). Erro da A: garantir o desenvolvimento nacional é objetivo (art. 3º, II) e soberania é fundamento (art. 1º, I); erro da C: construir sociedade livre é objetivo (art. 3º, I) e pluralismo político é fundamento (art. 1º, V); erro da D: promover o bem de todos é objetivo (art. 3º, IV) e cidadania é fundamento (art. 1º, II).',
      },
      {
        q: '[Autoral] Um Agente de Combate às Endemias aprovado em concurso público municipal na SEMUSA Porto Velho possui também formação como Técnico de Enfermagem e é aprovado em concurso público estadual de saúde (SESAU-RO) para cumprir escala noturna de vinte e quatro horas semanais. Sabendo que os horários não coincidem e que a remuneração total respeita o teto constitucional, indaga-se: à luz do Art. 37, inciso XVI, da CF/88 e da Lei Federal nº 14.536/2023, essa acumulação remunerada é:',
        options: [
          'Lícita e constitucional, pois a Lei Federal nº 14.536/2023 reconheceu expressamente o cargo de ACE como profissional de saúde com profissão regulamentada, enquadrando-se na exceção da alínea "c" do inciso XVI do Art. 37 da CF/88.',
          'Ilícita em qualquer circunstância, pois a Constituição Federal veda de modo absoluto a percepção de mais de uma remuneração dos cofres públicos.',
          'Permitida somente se o servidor renunciar à remuneração de um dos cargos, trabalhando na condição de voluntário honorífico no Estado.',
          'Válida unicamente se ambos os cargos forem exercidos sob a chefia da mesma autoridade no mesmo prédio público.',
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Acumulação Constitucional de Cargos',
        comment: 'Gabarito: A. O art. 37, XVI, "c", da CF/88 autoriza acumular dois cargos privativos de profissionais de saúde, com profissões regulamentadas, havendo compatibilidade de horários. A Lei Federal nº 14.536/2023 incluiu expressamente o ACE nessa categoria, viabilizando a acumulação com outro cargo da área da saúde (como técnico de enfermagem). Erro da B: a vedação não é absoluta, admitindo as exceções das alíneas "a", "b" e "c"; erro da C: a contraprestação remuneratória é legítima; erro da D: a acumulação pode ocorrer entre esferas distintas (municipal e estadual).',
      },
      {
        q: '[Autoral] Qualquer cidadão é parte legítima para propor determinada ação constitucional que vise a anular ato lesivo ao patrimônio público ou de entidade de que o Estado participe, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural. De acordo com o Art. 5º, inciso LXXIII, da CF/88, trata-se de:',
        options: [
          'Habeas Data impetrado em nome da coletividade.',
          'Mandado de Segurança Coletivo ajuizado por qualquer empresa comercial.',
          'Ação Popular, sendo o autor isento de custas judiciais e de ônus da sucumbência, salvo comprovada má-fé.',
          'Mandado de Injunção destinado à apuração de falta funcional de servidores.',
        ],
        ans: 2,
        difficulty: 'Fácil',
        questionType: 'Remédios Constitucionais',
        comment: 'Gabarito: C. É a transcrição do art. 5º, inciso LXXIII, da CF/88: a Ação Popular é cabível a qualquer cidadão eleitor para anular atos lesivos ao patrimônio público, moralidade, meio ambiente e patrimônio cultural, com isenção de custas salvo má-fé. Erro da A: Habeas Data (inc. LXXII) destina-se a informações sobre a pessoa do impetrante em bancos públicos; erro da B: Mandado de Segurança Coletivo (inc. LXX) cabe a partidos políticos com assento no Congresso ou entidades de classe/associações de 1 ano; erro da D: Mandado de Injunção (inc. LXXI) destina-se a suprir falta de norma regulamentadora.',
      },
      {
        q: '[Autoral] Em conformidade com o Art. 31 da Constituição Federal de 1988 e com as regras gerais sobre a fiscalização dos Municípios, o controle externo das contas municipais e a organização administrativa subordinam-se à seguinte diretriz:',
        options: [
          'É expressamente autorizada a criação de novos Tribunais, Conselhos ou órgãos de Contas Municipais pelas Câmaras de Vereadores.',
          'As contas dos Municípios ficarão à disposição dos contribuintes durante cinco dias no ano para exame e apreciação.',
          'O parecer prévio emitido pelo órgão competente sobre as contas do Prefeito só deixará de prevalecer por decisão de um terço dos vereadores.',
          'O controle externo da Câmara Municipal será exercido com auxílio dos Tribunais de Contas dos Estados, sendo expressamente vedada a criação de novos Tribunais, Conselhos ou órgãos de Contas Municipais.',
        ],
        ans: 3,
        difficulty: 'Intermediário',
        questionType: 'Fiscalização e Controle dos Municípios',
        comment: 'Gabarito: D. Reproduz os comandos do art. 31, §§ 1º e 4º, da CF/88: o controle externo municipal é exercido pela Câmara com o TCE, sendo vedada a criação de novos tribunais ou conselhos de contas municipais. Erro da A: a criação de novos tribunais de contas municipais é terminantemente proibida pelo art. 31, § 4º; erro da B: as contas anuais ficam disponíveis aos contribuintes por 60 dias anualmente (art. 31, § 3º); erro da C: a rejeição do parecer do TCE exige voto qualificado de 2/3 dos membros da Câmara (art. 31, § 2º).',
      },
    ],
    flashcards: [
      [
        'Qual a distinção constitucional entre Fundamentos (art. 1º) e Objetivos (art. 3º) da República?',
        'Fundamentos são princípios estruturantes substantivos (SO-CI-DI-VA-PLU); Objetivos são metas estatais expressas por verbos no infinitivo (CON-GA-ER-PRO: construir, garantir, erradicar, promover).',
      ],
      [
        'Como se compatibiliza a inviolabilidade de domicílio (art. 5º, XI) com a vistoria do ACE?',
        'A entrada ordinária exige consentimento do morador. Entrada forçada cabe em flagrante delito/desastre ou prestar socorro a qualquer hora; por determinação judicial, apenas durante o dia (STF Tema 280 e Lei 13.301/16).',
      ],
      [
        'O Agente de Combate às Endemias pode acumular licitamente outro cargo público de saúde?',
        'Sim. A Lei Federal nº 14.536/2023 classificou o ACE como profissional de saúde com profissão regulamentada, permitindo acumular dois cargos de saúde sob o art. 37, XVI, "c", da CF/88, com compatibilidade de horários.',
      ],
    ],
    references: [
      {
        title: 'Constituição da República Federativa do Brasil de 1988 (Planalto)',
        url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm',
        section: 'Arts. 1º a 4º (princípios fundamentais), 5º a 13 (direitos individuais e sociais), 29 a 31 (municípios) e 37 a 39 (administração pública).',
      },
      {
        title: 'Lei Federal nº 14.536/2023 — Reconhecimento de ACE e ACS como profissionais de saúde',
        url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14536.htm',
        section: 'Art. 1º (regulamentação profissional para fins de acumulação de cargos no Art. 37, XVI, "c", da CF).',
      },
      {
        title: 'Lei Federal nº 13.301/2016 e STF (Tema 280 / ADI 5592)',
        url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/lei/l13301.htm',
        section: 'Diretrizes legais e limites constitucionais para o ingresso forçado em imóveis no combate ao Aedes aegypti.',
      },
    ],
  },

  // =========================================================================
  // AULA leg_6: NOVA LEI DE LICITAÇÕES E CONTRATOS (LEI FEDERAL Nº 14.133/2021)
  // =========================================================================
  {
    id: 'leg_6',
    title: 'Modalidades, pregão para insumos de saúde, rito processual e contratação direta',
    theory: `## Princípios e Regime Jurídico Geral (Art. 5º da Lei nº 14.133/2021)
A Lei Federal nº 14.133, de 01 de abril de 2021 (Nova Lei de Licitações e Contratos Administrativos), substituiu em definitivo as antigas Leis nº 8.666/1993, nº 10.520/2002 (Lei do Pregão) e nº 12.462/2011 (RDC). O art. 5º elenca os princípios fundamentais:
- Legalidade, impessoalidade, moralidade, publicidade, eficiência, interesse público, probidade administrativa, igualdade, planejamento, transparência, eficácia, segregação de funções, motivação, vinculação ao edital, julgamento objetivo, segurança jurídica, razoabilidade, competitividade, proporcionalidade, celeridade, economicidade e desenvolvimento nacional sustentável.
- **Princípio da Segregação de Funções (Art. 7º, § 1º):** Veda a concentração de atribuições críticas (planejamento, julgamento, fiscalização e pagamento) na mesma pessoa, prevenindo fraudes e conflitos de interesse.

## As 5 Modalidades de Licitação e Extinção do Regime Antigo (Art. 28)
São modalidades de licitação **exclusivamente**:
1. **Pregão:** modalidade obrigatória para aquisição de bens e serviços comuns, cujo critério de julgamento poderá ser menor preço ou maior desconto;
2. **Concorrência:** modalidade para contratação de bens e serviços especiais e de obras e serviços comuns e especiais de engenharia;
3. **Concurso:** modalidade para escolha de trabalho técnico, científico ou artístico, com prêmio ou remuneração aos vencedores;
4. **Leilão:** modalidade para alienação de bens móveis inservíveis ou legalmente apreendidos, ou de imóveis;
5. **Diálogo Competitivo:** modalidade inovadora para contratações complexas em que a Administração dialoga com licitantes pré-selecionados para desenvolver alternativas que atendam às suas necessidades.

### Extinção Definitiva de Modalidades e Critério de Escolha
Foram expressamente **EXTINTAS** as modalidades antigas: **Convite**, **Tomada de Preços** e **Regime Diferenciado de Contratações (RDC)**.
**Atenção fundamental de prova:** Na Lei nº 14.133/2021, a escolha da modalidade de licitação é determinada pela **NATUREZA DO OBJETO** (comum, especial, obra de engenharia, obra complexa), e **JAMAIS PELO VALOR ESTIMADO DA CONTRATAÇÃO** (como ocorria no regime superado da Lei 8.666/93). Menor preço e maior desconto são critérios de julgamento (art. 33), e não modalidades.

## Obrigatoriedade do Pregão e Insumos da Vigilância em Saúde (Art. 6º, XLI e Art. 34)
- **Definição de Bem ou Serviço Comum:** Aquele cujos padrões de desempenho e qualidade possam ser objetivamente definidos pelo edital, por meio de **especificações usuais de mercado**.
- **Obrigatoriedade do Pregão (Art. 34):** Sempre que o objeto for caracterizado como bem ou serviço comum, o uso da modalidade Pregão é **compulsório e obrigatório**. O pregão é realizado **preferencialmente na forma eletrônica** (art. 17, § 2º). A sessão presencial é excepcional e exige justificativa circunstanciada registrada em ata e gravada em áudio e vídeo.
- **Aplicação Direta no Setor de Endemias e na SEMUSA Porto Velho:** Todos os insumos, materiais e equipamentos de proteção utilizados habitualmente pelos Agentes de Combate às Endemias enquadram-se perfeitamente como bens comuns de mercado e são adquiridos **obrigatoriamente por Pregão Eletrônico**:
  * Inseticidas adulticidas (Malathion, Deltametrina) e larvicidas químicos ou biológicos (Piriproxifem, *Bacillus thuringiensis israelensis* - Bti, Espinosade);
  * Bombas costais de aspersão manuais de compressão prévia e termonebulizadores costais motorizados (UBV costal);
  * Equipamentos de Proteção Individual - EPIs (máscaras faciais completas com filtro de carvão ativado para vapores orgânicos e névoas, luvas de borracha nitrílica, botas de PVC com cano médio, óculos de segurança panorâmicos de policarbonato e aventais impermeáveis);
  * Insumos de rotina de campo: pipetas de vidro, tubos de ensaio, pescadores de larvas, lanternas de LED recarregáveis, pranchetas de acrílico e bolsas de lona verde padronizadas.

## Ordem Procedimental das Fases da Licitação (Art. 17)
O rito procedimental ordinário das licitações segue a seguinte ordem de fases (art. 17):
1. **Fase preparatória:** planejamento da demanda (DFD), Estudo Técnico Preliminar (ETP), Termo de Referência (TR), Mapa de Riscos e orçamento estimado;
2. **Divulgação do edital de licitação;**
3. **Apresentação de propostas e lances;**
4. **Fase de julgamento das propostas;**
5. **Fase de habilitação;**
6. **Fase recursal única;**
7. **Homologação.**
**Inovação procedimental capital:** Na regra geral da Lei nº 14.133/2021, o **JULGAMENTO DAS PROPOSTAS ANTECEDE A FASE DE HABILITAÇÃO**. Isso significa que a Administração só analisa os documentos de habilitação jurídica, fiscal, técnica e econômico-financeira do licitante vencedor da fase de lances, eliminando a burocracia de analisar previamente os envelopes de todos os concorrentes. A inversão de fases (habilitação antes do julgamento) tornou-se exceção que exige ato formalmente motivado e previsão expressa no edital (art. 17, § 1º).

## Contratação Direta: Inexigibilidade (Art. 74) vs. Dispensa (Art. 75)
Toda contratação direta deve ser instruída em processo formal com planejamento prévio rigoroso (art. 72: documento de formalização de demanda, termo de referência, justificativa de preço e da escolha do fornecedor, comprovação de habilitação e parecer jurídico).
- **Inexigibilidade de Licitação (Art. 74):** Caracteriza-se quando há **inviabilidade fática ou jurídica de competição** no mercado. O rol do art. 74 é **exemplificativo**. Hipóteses taxadas na lei:
  * I - Fornecedor exclusivo (atestado por sindicato ou junta comercial);
  * II - Contratação de serviço técnico especializado de natureza predominantemente intelectual com profissional ou empresa de **notória especialização** (vedada para publicidade e divulgação);
  * III - Contratação de profissional do setor artístico consagrado pela opinião pública ou crítica especializada;
  * IV - Credenciamento;
  * V - **Aquisição ou locação de imóvel cujas características de instalações e localização tornem necessária sua escolha**. *(Atenção de prova: na antiga Lei 8.666/93, imóvel era hipótese de dispensa; na Lei 14.133/2021 passou a ser formalmente INEXIGIBILIDADE!)*.
- **Dispensa de Licitação (Art. 75):** A competição entre fornecedores é perfeitamente viável, mas a lei autoriza a não realização do certame por razões de economicidade ou interesse público superior. O rol é **taxativo** (*numerus clausus*). Principais hipóteses:
  * *Baixo Valor (incs. I e II):* Obras e serviços de engenharia até R$ 100.000,00; compras e outros serviços até R$ 50.000,00 (valores-base do texto legal de 2021, atualizados anualmente por decreto federal);
  * *Emergência ou Calamidade Pública na Saúde (inc. VIII):* Contratação imediata quando caracterizada urgência que possa ocasionar prejuízo ou comprometer a segurança de pessoas e a continuidade dos serviços essenciais (ex.: surtos súbitos e epidemias descontroladas de dengue, malária ou febre amarela em Porto Velho).
    - *Condições e Limitações Estritas do Inciso VIII:*
      1. Os bens contratados devem ser estritamente necessários para debelar a emergência;
      2. O prazo de vigência contratual é de **no máximo 1 (um) ano**, contado da data de ocorrência da emergência;
      3. **É expressamente VEDADA a prorrogação** dos contratos emergenciais decorrentes dessa dispensa;
      4. **É expressamente VEDADA a recontratação** de empresa já contratada com base nessa mesma hipótese de emergência.
  * *Licitação Deserta ou Fracassada (inc. X):* Quando não acudiram interessados ou nenhuma proposta foi válida, e a repetição for prejudicial à Administração.`,
    summary: `Síntese estruturada da Lei Federal nº 14.133/2021 (Nova Lei de Licitações) para o cargo de ACE da SEMUSA:

| Tópico da Nova Lei | Regra Normativa / Dispositivo Legal | Ponto Crítico / Pegadinha Clássica de Concurso |
| --- | --- | --- |
| **As 5 Modalidades (Art. 28)** | Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo. | **Extintas**: Convite, Tomada de Preços e RDC. Modalidade depende da **natureza do objeto**, e nunca do valor. |
| **Pregão Obrigatório (Art. 34)** | Compulsório para **bens e serviços comuns** (padrões usuais de mercado). Preferencialmente eletrônico. | Insumos do ACE (inseticidas, bombas costais, EPIs, larvicidas) são bens comuns licitados **obrigatoriamente por Pregão**. |
| **Critérios de Julgamento (Art. 33)** | Menor preço, Maior desconto, Melhor técnica/conteúdo artístico, Técnica e preço, Maior lance, Maior retorno econômico. | Menor preço e maior desconto são **critérios de julgamento**, e não modalidades licitatórias. |
| **Ordem das Fases (Art. 17)** | Preparatória → Edital → Propostas → **Julgamento** → **Habilitação** → Recurso único → Homologação. | O **julgamento antecede a habilitação** (habilita-se somente o vencedor). A inversão de fases é excepcionalíssima. |
| **Inexigibilidade (Art. 74)** | Competição **inviável** (rol exemplificativo): fornecedor exclusivo, notória especialização, artista, imóvel singular. | **Aquisição ou locação de imóvel específico** passou a ser **Inexigibilidade** (art. 74, V), e não mais dispensa. |
| **Dispensa de Licitação (Art. 75)** | Competição viável, dispensada pela lei (rol taxativo): baixo valor (incs. I/II), emergência em saúde (inc. VIII). | Contratação emergencial da saúde (inc. VIII) dura **até 1 ano**, sendo **vedada prorrogação e recontratação**. |
| **Processo de Contratação Direta** | Art. 72: Exige DFD, TR, justificativa de preço, justificativa da escolha, habilitação e parecer jurídico. | Contratação direta sem licitação **não dispensa processo administrativo formal**. |`,
    questions: [
      {
        q: '[Autoral] A SEMUSA de Porto Velho precisa adquirir 400 bombas costais manuais de aspersão e 1.500 quilos de larvicida para as atividades rotineiras dos Agentes de Combate às Endemias. Considerando que tais materiais possuem especificações de mercado usuais, padronizadas e amplamente comercializadas por múltiplos fornecedores, a modalidade de licitação legalmente obrigatória que a Administração deve adotar, conforme a Lei Federal nº 14.133/2021, é:',
        options: [
          'O Pregão, preferencialmente sob a forma eletrônica, adotando como critério de julgamento o menor preço ou o maior desconto.',
          'A Tomada de Preços ou o Convite, a depender exclusivamente do valor orçado da contratação.',
          'O Concurso, com premiação artística para os fabricantes dos melhores equipamentos.',
          'A Inexigibilidade de licitação com dispensa de processo administrativo, por se tratar de compra da área de saúde pública.',
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Modalidade Pregão e Bens Comuns',
        comment: 'Gabarito: A. Conforme o art. 6º, XLI, e o art. 34 da Lei Federal nº 14.133/2021, o Pregão é modalidade obrigatória para aquisição de bens e serviços comuns (especificações usuais de mercado), julgado por menor preço ou maior desconto e realizado preferencialmente em plataforma eletrônica (art. 17, § 2º). Erro da B: Convite e Tomada de Preços foram formalmente extintos pela Lei 14.133/2021; erro da C: Concurso (art. 28, III) destina-se a trabalhos técnicos, científicos ou artísticos com prêmio; erro da D: a compra de bens comuns na saúde subordina-se à licitação regular e bens padronizados viabilizam ampla competição.',
      },
      {
        q: '[Autoral] Em decorrência do transbordamento sazonal do Rio Madeira e seus afluentes em Porto Velho, sobrevém uma explosão atípica de casos de malária e dengue, levando à decretação formal de situação de emergência em saúde pública pelo Prefeito. Diante da necessidade inadiável de adquirir imediatamente lotes emergenciais de inseticidas de choque para pronta aplicação no bloqueio de transmissão, sob a Lei Federal nº 14.133/2021, a SEMUSA:',
        options: [
          'Deverá instaurar um Diálogo Competitivo com consórcios internacionais para debater novas tecnologias ao longo de dois anos.',
          'Poderá efetuar contratação direta por Dispensa de licitação fundamentada no Art. 75, inciso VIII, limitada aos bens estritamente necessários ao atendimento da emergência, com prazo contratual de no máximo um ano, vedada a prorrogação e vedada a recontratação da mesma empresa sob o mesmo fundamento.',
          'Poderá contratar verbalmente e sem processo formal parentes dos gestores municipais, pois a emergência anula o princípio da impessoalidade.',
          'Fica impedida de adquirir qualquer insumo enquanto não realizar Leilão presencial com aviso prévio de seis meses.',
        ],
        ans: 1,
        difficulty: 'Intermediário',
        questionType: 'Dispensa Emergencial na Saúde',
        comment: 'Gabarito: B. Reproduz as condições vinculantes do art. 75, inciso VIII, da Lei Federal nº 14.133/2021 para a dispensa emergencial: limitação ao objeto necessário para combater a situação emergencial, prazo contratual máximo de 1 ano contado da emergência, e vedação expressa à prorrogação e à recontratação da mesma empresa. Erro da A: o Diálogo Competitivo (art. 32) é reservado para contratações complexas e não para socorro emergencial; erro da C: o art. 72 exige processo formal de contratação direta, preservando impessoalidade e moralidade; erro da D: Leilão (art. 31) é para alienação de bens inservíveis ou apreendidos.',
      },
      {
        q: '[Autoral] Nos termos do Art. 28 da Lei Federal nº 14.133/2021 (Nova Lei de Licitações e Contratos Administrativos), são modalidades de licitação exclusivamente:',
        options: [
          'Pregão, Tomada de Preços, Convite, Leilão e Consulta.',
          'Menor preço, Maior desconto, Técnica e preço e Diálogo competitivo.',
          'Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo.',
          'Inexigibilidade, Dispensa, Adesão a ata de registro de preços e Pré-qualificação.',
        ],
        ans: 2,
        difficulty: 'Fácil',
        questionType: 'Modalidades de Licitação',
        comment: 'Gabarito: C. O art. 28 da Lei Federal nº 14.133/2021 estabelece taxativamente as 5 modalidades: Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo. Foram banidas Tomada de Preços, Convite e RDC. Erro da A: Convite e Tomada de Preços foram extintos e Consulta era restrita a agências reguladoras; erro da B: menor preço e maior desconto são critérios de julgamento (art. 33); erro da D: dispensa e inexigibilidade são contratação direta e registro de preços é procedimento auxiliar (art. 78).',
      },
      {
        q: '[Autoral] A respeito da Contratação Direta na Lei Federal nº 14.133/2021, o Art. 74 disciplina a Inexigibilidade de licitação, caracterizada pela inviabilidade fática ou jurídica de competição. Assinale a hipótese legalmente classificada como INEXIGIBILIDADE pela novel legislação:',
        options: [
          'Aquisição ou locação de imóvel cujas características de instalações e de localização tornem necessária sua escolha pela Administração Pública.',
          'Contratação de obras e serviços de engenharia de pequeno valor até cem mil reais.',
          'Contratação emergencial de insumos de saúde pública por prazo de até um ano em epidemias.',
          'Contratação de bens e serviços comuns cujas especificações de desempenho sejam usuais no mercado atacadista.',
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Inexigibilidade vs. Dispensa',
        comment: 'Gabarito: A. Na Lei Federal nº 14.133/2021 (art. 74, inciso V), a aquisição ou locação de imóvel com localização e características singulares necessárias tornou-se expressamente hipótese de Inexigibilidade de Licitação (diferindo da antiga Lei 8.666/93, que a tratava como dispensa). Erro da B: obras de pequeno valor são hipótese de Dispensa de Licitação (art. 75, I); erro da C: contratação emergencial em saúde é hipótese de Dispensa (art. 75, VIII); erro da D: bens e serviços comuns são licitados compulsoriamente por Pregão (art. 34).',
      },
      {
        q: '[Autoral] No rito procedimental ordinário das licitações estabelecido pelo Art. 17 da Lei Federal nº 14.133/2021, a relação de ordem entre as fases de julgamento das propostas e de habilitação dos participantes estrutura-se da seguinte forma:',
        options: [
          'A fase de habilitação documental de todos os licitantes é sempre obrigatoriamente realizada antes da abertura de qualquer proposta de preços.',
          'A fase de julgamento das propostas foi totalmente extinta pelo novo marco legal.',
          'O julgamento e a habilitação ocorrem exclusivamente no momento do encerramento final do contrato administrativo.',
          'A fase de julgamento das propostas antecede a fase de habilitação, sendo examinados os documentos de habilitação apenas do licitante vencedor, admitindo-se a inversão de fases apenas excepcionalmente mediante ato motivado e previsão expressa no edital.',
        ],
        ans: 3,
        difficulty: 'Intermediário',
        questionType: 'Ordem das Fases Procedimentais',
        comment: 'Gabarito: D. O art. 17, caput e § 1º, da Lei Federal nº 14.133/2021 inverteu a regra geral da antiga lei: na nova lei, o julgamento das propostas antecede a fase de habilitação. Examina-se apenas a documentação do licitante primeiro colocado, o que confere notável celeridade ao certame. A habilitação prévia (inversão) tornou-se exceção que exige motivação formal e previsão expressa no edital. Erro da A: a habilitação prévia universal era a regra do regime antigo da Lei 8.666; erro da B: a fase de julgamento é essencial para seleção da proposta mais vantajosa; erro da C: o julgamento e a habilitação antecedem a homologação e a contratação.',
      },
    ],
    flashcards: [
      [
        'Quais são as 5 modalidades da Lei 14.133/2021 e quais modalidades foram extintas?',
        'São modalidades vigentes: Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo. Foram expressamente extintas as modalidades Convite, Tomada de Preços e RDC. A escolha baseia-se na natureza do objeto, nunca no valor.',
      ],
      [
        'Por que insumos do trabalho do ACE (bombas costais, inseticidas, EPIs) são licitados por Pregão?',
        'Porque são definidos como bens comuns, cujos padrões de qualidade e desempenho são objetivamente definidos por especificações usuais de mercado, tornando o Pregão eletrônico modalidade obrigatória.',
      ],
      [
        'Qual a diferença entre Inexigibilidade (art. 74) e Dispensa (art. 75) e a regra da emergência na saúde?',
        'Inexigibilidade decorre de inviabilidade de competição (exclusivo, imóvel singular, artista). Dispensa decorre de autorização legal com competição viável; a dispensa emergencial na saúde (art. 75, VIII) dura até 1 ano, vedada prorrogação e recontratação.',
      ],
    ],
    references: [
      {
        title: 'Lei Federal nº 14.133/2021 — Nova Lei de Licitações e Contratos (Planalto)',
        url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm',
        section: 'Arts. 5º (princípios), 6º (definições), 17 (ordem das fases), 28 (modalidades), 34 (pregão) e 72 a 75 (contratação direta: inexigibilidade e dispensa).',
      },
    ],
  },

  // =========================================================================
  // AULA leg_7: LEI DE ACESSO À INFORMAÇÃO (LAI) NAS TRÊS ESFERAS DA FEDERAÇÃO
  // =========================================================================
  {
    id: 'leg_7',
    title: 'LAI nas 3 esferas: prazos federais, sigilo em RO (Lei 6.385/26) e fluxo de PVH (Dec. 14.565/17)',
    theory: `## A Matriz Federal da Transparência: Lei Federal nº 12.527/2011
A Lei Federal nº 12.527, de 18 de novembro de 2011 (Lei de Acesso à Informação - LAI), regulamenta o direito constitucional fundamental de acesso às informações públicas (arts. 5º, XXXIII, 37, § 3º, II e 216, § 2º da CF/88), aplicando-se de forma vinculante a todos os entes da Federação (União, Estados, DF e Municípios), aos três Poderes e aos Tribunais de Contas.
- **Diretrizes Estruturantes (Art. 3º):**
  1. A **publicidade é preceito geral** e o **sigilo é a exceção** temporária;
  2. Divulgação de informações de interesse público independentemente de solicitações (**transparência ativa**);
  3. Fomento ao controle social e prestação de contas da Administração Pública;
  4. Utilização de meios de tecnologia da informação em formatos abertos e legíveis por máquina.
- **Transparência Ativa (Art. 8º):** Dever compulsório dos órgãos públicos de manter atualizados em sítios oficiais na internet: estrutura organizacional, repasses e transferências de recursos, receitas e despesas orçamentárias, procedimentos licitatórios e contratos administrativos, remuneração detalhada e nominal dos cargos e servidores públicos, respostas a perguntas frequentes e dados de contato do Serviço de Informação ao Cidadão (SIC).
- **Transparência Passiva (Arts. 10 a 12):** Atendimento formal a requerimentos apresentados por qualquer pessoa física ou jurídica.
  * *Requisitos de Solicitação:* Identificação do requerente e especificação detalhada da informação pretendida.
  * *Vedação Absoluta (Art. 10, § 3º):* **São expressamente VEDADAS quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público.** O requerente não precisa justificar para que finalidade utilizará os dados públicos.
  * *Gratuidade do Acesso (Art. 12):* A busca e o fornecimento de informação são **gratuitos**, cobrando-se exclusivamente os custos diretos de reprodução gráfica de documentos (com isenção assegurada a quem declarar hipossuficiência).
- **Prazos de Atendimento (Art. 11):**
  * Informação disponível: **acesso imediato**;
  * Não sendo possível o fornecimento imediato: prazo de **até 20 (vinte) dias**;
  * Prorrogação: prorrogável por **mais 10 (dez) dias**, mediante justificativa expressa e comunicação formal encaminhada ao requerente antes de esgotado o prazo inicial.
- **Prazos Máximos de Sigilo da Informação Classificada (Art. 24):**
  * **Ultrassecreta:** prazo máximo de até **25 (vinte e cinco) anos**;
  * **Secreta:** prazo máximo de até **15 (quinze) anos**;
  * **Reservada:** prazo máximo de até **5 (cinco) anos**.
- **Informações Pessoais (Art. 31):** Relativas à intimidade, vida privada, honra e imagem das pessoas naturais têm acesso restrito pelo prazo máximo de até **100 (cem) anos**, a contar da data de sua produção.
- **Vedações Absolutas de Sigilo e Acesso Parcial:**
  * Informações que versem sobre condutas que impliquem **violação de direitos humanos** praticada por agentes públicos ou a mando de autoridades **não poderão ser objeto de restrição de acesso** (art. 21, parágrafo único);
  * Quando um documento contiver trecho protegido por sigilo, **é assegurado o acesso à parte não sigilosa** por meio de certidão, extrato ou cópia com ocultação (tarjamento) da informação reservada (art. 7º, § 2º).

## A Esfera Estadual de Rondônia: Lei nº 3.166/2013 e a Lei Estadual nº 6.385/2026
No Estado de Rondônia, a LAI é regulamentada pela Lei Ordinária Estadual nº 3.166, de 04 de julho de 2013, que instituiu o Serviço de Informação ao Cidadão do Estado (SIC-RO) e a Ouvidoria Geral sob fiscalização técnica da Controladoria-Geral do Estado (CGE-RO).
### A Atualização Cirúrgica da Lei Estadual nº 6.385/2026 (DOE-RO nº 82 de 30/04/2026)
A Assembleia Legislativa de Rondônia aprovou alteração de grande relevo nos arts. 21 a 24 da Lei Estadual nº 3.166/2013 por meio da Lei nº 6.385/2026:
- **Art. 22, VII e Art. 24:** Classificação no grau **reservado** de informações que possam colocar em risco a segurança institucional dos Chefes dos Poderes do Estado (Executivo, Legislativo e Judiciário), seus familiares e equipes envolvidas diretamente em **agendas, itinerários, deslocamentos, logística, rotas e viagens oficiais**;
- **Art. 24, § 1º:** Essa classificação terá o prazo máximo de até **5 (cinco) anos**, ao término do qual os documentos tornam-se de livre acesso público;
- **Art. 24, § 2º — Controle Obrigatório pelos Órgãos de Fiscalização:** As informações dessas viagens oficiais classificadas no grau reservado **serão obrigatoriamente disponibilizadas aos órgãos de controle externo e interno (Tribunal de Contas do Estado - TCE-RO, Controladoria-Geral do Estado - CGE-RO e Ministério Público do Estado de Rondônia - MP-RO) no prazo de até 10 (dez) dias**, contado da data de retorno dos compromissos oficiais que lhes deram origem;
- **Art. 24, § 3º:** Os órgãos de controle exercerão o acesso em regime restrito e sob estrito dever de sigilo funcional, respondendo administrativa, civil e penalmente por qualquer vazamento indevido.

## A Esfera Municipal de Porto Velho: Decreto Municipal nº 14.565/2017
No Município de Porto Velho, a LAI foi regulamentada no âmbito do Poder Executivo pelo **Decreto Municipal nº 14.565, de 07 de março de 2017**. O Serviço de Informações ao Cidadão (SIC) da Prefeitura é coordenado pela Ouvidoria Municipal, sendo as ações de transparência ativa auditadas pela Controladoria-Geral do Município (CGM-PVH).
### O Rito Recursal Municipal em 4 Instâncias (Arts. 21 a 24 do Decreto 14.565/2017)
No caso de negativa de acesso à informação ou de não fornecimento das razões de indeferimento, o munícipe pode percorrer uma trilha recursal hierárquica sucessiva em quatro instâncias administrativas:
1. **1ª Instância (Art. 21, caput):** Recurso no prazo de **10 (dez) dias** à autoridade hierarquicamente superior à que proferiu a decisão impugnada, a qual deverá se manifestar em **5 (cinco) dias**;
2. **2ª Instância (Art. 21, parágrafo único):** Desprovido o recurso pela autoridade superior, cabe novo recurso no prazo de **10 (dez) dias** ao **Prefeito Municipal**, que deverá decidir no prazo de **5 (cinco) dias**;
3. **3ª Instância (Art. 23):** Desprovido o recurso pelo Prefeito (ou infrutífera a reclamação), o requerente poderá apresentar recurso no prazo de **10 (dez) dias** à **Controladoria-Geral do Município (CGM)**, que decidirá no prazo de **5 (cinco) dias**;
4. **4ª Instância (Art. 24):** Desprovido o recurso pela CGM, o cidadão poderá apresentar, no prazo de **10 (dez) dias**, recurso final deliberativo à **Comissão Mista de Reavaliação de Informação**.

### Reclamação por Omissão (Art. 22 do Decreto 14.565/2017)
No caso de ausência total de resposta ao pedido de informação dentro dos prazos legais, o cidadão pode apresentar reclamação à autoridade de monitoramento do órgão. O prazo de 10 dias para apresentar essa reclamação **começará a correr somente após decorridos 30 (trinta) dias da apresentação do pedido inicial** (art. 22, § 1º). Se a reclamação for rejeitada ou omitida, cabe recurso em 10 dias à CGM (art. 23).

### Competência Municipal para Classificação de Sigilo (Art. 30 do Decreto 14.565/2017)
- **Grau Ultrassecreto (25 anos):** Prefeito, Vice-Prefeito, Secretários Municipais e autoridades equivalentes, Chefe de Gabinete, Controlador-Geral do Município e Procurador-Geral do Município. **É vedada a delegação de competência!** (art. 30, I e § 1º);
- **Grau Secreto (15 anos):** As autoridades do grau ultrassecreto somadas aos dirigentes máximos de autarquias, fundações e empresas públicas municipais. **É vedada a delegação!** (art. 30, II e § 1º);
- **Grau Reservado (5 anos):** As autoridades dos graus anteriores somadas a coordenadores, diretores e chefes de assessorias técnicas. **É permitida a delegação** formal a agentes com função de direção, comando ou chefia, sendo vedada a subdelegação (art. 30, III e §§ 2º e 3º).

## Distinção Crucial: Decreto da LAI (14.565/2017) vs. Decreto da LGPD (18.310/2022)
As bancas examinadoras costumam explorar a confusão conceitual entre os dois decretos da Prefeitura de Porto Velho:
- **Decreto Municipal nº 14.565/2017 (LAI Municipal):** Regulamenta a Lei Federal nº 12.527/2011. Sua finalidade essencial é garantir a **máxima publicidade**, transparência ativa, acesso a receitas, contratos e auditoria social das contas da Prefeitura. O princípio orientador é o **acesso público como regra**.
- **Decreto Municipal nº 18.310/2022 (LGPD Municipal):** Regulamenta a Lei Federal nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais). Sua finalidade é proteger a **privacidade, intimidade e dados pessoais** dos munícipes cadastrados nas bases públicas municipais. No âmbito da SEMUSA e da atuação do ACE, o Decreto 18.310/2022 proíbe o vazamento de prontuários clínicos, diagnósticos médicos e dados sensíveis de pacientes colhidos nas visitas domiciliares.
- **Relação Normativa:** O Decreto nº 18.310/2022 **NÃO revogou** o Decreto nº 14.565/2017. Ambos os diplomas coexistem harmonicamente na ordem jurídica de Porto Velho: dados da gestão e despesas públicas são transparentes (LAI); dados íntimos e clínicos de munícipes são protegidos contra divulgação indevida (LGPD).`,
    summary: `Síntese estruturada da Lei de Acesso à Informação (LAI) nas três esferas federativas:

| Esfera Federativa | Diploma Normativo | Prazos Ordinários e Sigilos | Rito Recursal / Órgãos Competentes |
| --- | --- | --- | --- |
| **Federal** | **Lei nº 12.527/2011** | Imediato se disponível; ou até **20 dias (+10 justificados)**. Sigilos: Ultrassecreta (25a), Secreta (15a), Reservada (5a). Pessoais: **até 100 anos**. | Vedado exigir motivos do pedido (art. 10, § 3º). Gratuidade do serviço (art. 12). Violação de direitos humanos nunca é sigilosa. |
| **Estadual (RO)** | **Lei nº 3.166/2013** alt. pela **Lei nº 6.385/2026** | Sigilo **reservado (até 5 anos)** para rotas, itinerários e agendas de segurança institucional de Chefes de Poder (art. 22, VII e 24). | Disponibilização **obrigatória aos órgãos de controle (TCE-RO, CGE-RO e MP-RO) em até 10 dias** do retorno dos compromissos oficiais. |
| **Municipal (PVH)** | **Decreto nº 14.565/2017** | Prazos idênticos à matriz federal (imediato ou 20+10d). Reclamação por omissão: prazo inicia **30 dias após o pedido inicial**. | **Trilha em 4 Instâncias (prazo de 10 dias cada)**: 1ª Autoridade Superior → 2ª Prefeito → 3ª CGM → 4ª Comissão Mista de Reavaliação. |
| **Contraste de Decretos** | **Decreto 14.565/17 (LAI)** × **Decreto 18.310/22 (LGPD)** | Decreto 14.565 = Publicidade e transparência governamental. Decreto 18.310 = Proteção de privacidade e prontuários do SUS. | Ambos coexistem em Porto Velho. A LGPD municipal não revogou a LAI de Porto Velho. |`,
    questions: [
      {
        q: '[Autoral] Um munícipe formula pedido perante o Serviço de Informações ao Cidadão (SIC) da Secretaria Municipal de Saúde de Porto Velho solicitando acesso aos relatórios consolidados de infestação predial do mosquito transmissor da dengue nos bairros da capital. O atendente recusa-se a protocolar o pedido exigindo que o solicitante comprove que a pesquisa possui finalidade acadêmica e justifique os motivos de seu interesse. À luz da Lei Federal nº 12.527/2011 (LAI) e do Decreto Municipal nº 14.565/2017, a exigência do servidor:',
        options: [
          'É manifestamente ilegal e abusiva, visto que a legislação veda expressamente quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público.',
          'É legal e compulsória, pois informações epidemiológicas de saúde pública possuem sigilo absoluto perante os cidadãos.',
          'Aplica-se unicamente a pedidos formulados por via postal, dispensando-se o protocolo presencial.',
          'Somente seria dispensada se o requerente apresentasse autorização expressa do Conselho Federal de Medicina.',
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Transparência Passiva e Vedação de Motivos',
        comment: 'Gabarito: A. O art. 10, § 3º, da Lei Federal nº 12.527/2011 e o art. 14 do Decreto Municipal nº 14.565/2017 prescrevem expressamente: "São vedadas quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público". A publicidade é preceito geral e o cidadão não precisa fundamentar a utilidade que dará à informação pública. Erro da B: relatórios de infestação e saúde ambiental são de interesse coletivo difuso (transparência ativa); erro da C: a vedação a exigir motivos aplica-se a qualquer canal de solicitação (físico ou eletrônico); erro da D: o acesso à informação pública é direito fundamental de qualquer cidadão, sem necessidade de autorização corporativa.',
      },
      {
        q: '[Autoral] Um cidadão teve indeferido seu pedido de acesso a informações orçamentárias pelo titular de uma secretaria municipal de Porto Velho. Conforme o Decreto Municipal de Porto Velho nº 14.565/2017, caso pretenda recorrer da decisão negativa no âmbito do Poder Executivo Municipal, o requerente deverá observar a seguinte trilha recursal e prazos:',
        options: [
          'Recurso direto e exclusivo ao Tribunal de Justiça de Rondônia no prazo de quarenta e oito horas.',
          'Recurso no prazo de dez dias à autoridade hierarquicamente superior; desprovido este, recurso em dez dias ao Prefeito Municipal; desprovido por este, recurso em dez dias à Controladoria-Geral do Município (CGM); e, se desprovido pela CGM, recurso final à Comissão Mista de Reavaliação de Informação.',
          'Reclamação perante a Presidência da República no prazo de trinta dias com afastamento cautelar do Prefeito.',
          'Apresentação de recurso por via oral na rádio local sem formalização perante a Ouvidoria Municipal.',
        ],
        ans: 1,
        difficulty: 'Intermediário',
        questionType: 'Trilha Recursal Municipal (Decreto 14.565)',
        comment: 'Gabarito: B. Reproduz a ordem das instâncias recursais do Decreto Municipal nº 14.565/2017: 1ª instância à autoridade superior (art. 21, caput); 2ª instância ao Prefeito (art. 21, parágrafo único); 3ª instância à Controladoria-Geral do Município (art. 23); e 4ª instância à Comissão Mista de Reavaliação de Informação (art. 24). Todos com prazo de interposição de 10 dias. Erro da A: o rito administrativo municipal é prévio e tramita no Executivo; erro da C: Municípios detêm autonomia federativa e não estão subordinados à Presidência da República para recursos da LAI local; erro da D: o procedimento recursal exige protocolo formal tempestivo.',
      },
      {
        q: '[Autoral] Nos termos da Lei Federal nº 12.527/2011 (LAI), os prazos máximos de restrição de acesso para as informações públicas classificadas nos graus ULTRASSECRETA, SECRETA e RESERVADA, bem como o prazo máximo de restrição de acesso às informações PESSOAIS relativas à intimidade, vida privada, honra e imagem, são, respectivamente:',
        options: [
          'Ultrassecreta: até 25 anos; Secreta: até 15 anos; Reservada: até 5 anos; e Informações Pessoais: até 100 anos a contar da data de sua produção.',
          'Ultrassecreta: até 5 anos; Secreta: até 10 anos; Reservada: até 20 anos; e Informações Pessoais: até 30 anos.',
          'Ultrassecreta: perpétua; Secreta: até 50 anos; Reservada: até 10 anos; e Informações Pessoais: públicas de imediato.',
          'Todas as categorias classificadas submetem-se ao prazo único uniforme de 15 anos.',
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Prazos Máximos de Sigilo da LAI',
        comment: 'Gabarito: A. Conforme o art. 24, § 1º, da Lei Federal nº 12.527/2011, os prazos máximos de sigilo são: Ultrassecreta = 25 anos; Secreta = 15 anos; e Reservada = 5 anos. Já o art. 31, § 1º, I, fixa em até 100 anos a proteção das informações pessoais que versem sobre intimidade, vida privada, honra e imagem. Erro da B: inverteu os prazos e distorceu a tabela legal; erro da C: a Constituição e a LAI vedam sigilo perpétuo e protegem informações pessoais; erro da D: a lei adota prazos escalonados e diferenciados por grau de sensibilidade.',
      },
      {
        q: '[Autoral] A Lei Ordinária Estadual nº 6.385, de 30 de abril de 2026, alterou a Lei nº 3.166/2013, que dispõe sobre a LAI no âmbito do Estado de Rondônia. Quanto à segurança institucional de Chefes de Poder e ao controle das informações de suas viagens oficiais, a novel legislação de Rondônia estabeleceu que:',
        options: [
          'Fica proibida qualquer auditoria pelo Tribunal de Contas do Estado sobre passagens e diárias do Poder Executivo.',
          'As viagens e deslocamentos oficiais dos Chefes de Poder são classificadas como ultrassecretas por cem anos com incineração dos comprovantes de voo.',
          'Tais informações serão classificadas no grau reservado pelo prazo máximo de cinco anos, sendo obrigatoriamente disponibilizadas aos órgãos de controle (TCE-RO, CGE-RO e MP-RO) no prazo de até dez dias contado do retorno dos compromissos oficiais, resguardado o sigilo.',
          'A legislação de Rondônia aboliu o sigilo para todas as autoridades, obrigando a transmissão ao vivo das rotas de viaturas policiais.',
        ],
        ans: 2,
        difficulty: 'Intermediário',
        questionType: 'Legislação Estadual de Rondônia (Lei 6.385/2026)',
        comment: 'Gabarito: C. É o teor dos novos arts. 22, VII, e 24, §§ 1º a 3º, introduzidos na Lei Estadual nº 3.166/2013 pela Lei Estadual nº 6.385/2026: grau reservado (até 5 anos) para segurança de viagens de autoridades, com dever compulsório de disponibilização aos órgãos de controle (TCE-RO, CGE-RO e MP-RO) em até 10 dias após o retorno do compromisso oficial. Erro da A: o controle financeiro do TCE-RO é inafastável; erro da B: a classificação é no grau reservado (5 anos), sendo crime a queima de comprovantes fiscais; erro da D: dados que comprometam a incolumidade de autoridades e de seus familiares admitem classificação no grau reservado.',
      },
      {
        q: '[Autoral] No âmbito do Município de Porto Velho, um servidor da SEMUSA precisa diferenciar a aplicação do Decreto Municipal nº 14.565/2017 do Decreto Municipal nº 18.310/2022. A correta distinção jurídica e funcional entre ambos os atos regulamentares municipais é:',
        options: [
          'O Decreto nº 14.565/2017 disciplina exclusivamente a concessão de licenças sanitárias para funerárias, enquanto o Decreto nº 18.310/2022 trata do descarte de lixo químico.',
          'O Decreto nº 18.310/2022 revogou integralmente a LAI em Porto Velho, tornando todos os contratos da Prefeitura confidenciais.',
          'Ambos os decretos tratam da mesma matéria e são sinônimos repetidos sem qualquer distinção conceitual.',
          'O Decreto nº 14.565/2017 regulamenta a Lei de Acesso à Informação (LAI - transparência pública, pedidos ao SIC e trilha recursal), enquanto o Decreto nº 18.310/2022 regulamenta a Lei Geral de Proteção de Dados Pessoais (LGPD - privacidade, governança de dados e proteção de informações dos cidadãos atendidos no SUS).',
        ],
        ans: 3,
        difficulty: 'Intermediário',
        questionType: 'Distinção Normativa: LAI vs. LGPD Municipal',
        comment: 'Gabarito: D. O Decreto nº 14.565/2017 regulamenta a LAI municipal (transparência ativa, passiva e recursos na Prefeitura); o Decreto nº 18.310/2022 regulamenta no Poder Executivo Municipal a LGPD (Lei 13.709/2018), resguardando prontuários e dados pessoais de moradores atendidos pela SEMUSA. Os dois diplomas coexistem harmonicamente. Erro da A: nenhum dos decretos versa sobre cemitérios ou lixo químico; erro da B: a LGPD e o Decreto 18.310 não revogaram a transparência dos contratos públicos; erro da C: transparência pública (LAI) e privacidade de dados pessoais (LGPD) são institutos jurídicos complementares, mas distintos.',
      },
    ],
    flashcards: [
      [
        'Quais os prazos ordinários de resposta e de recurso na LAI (Lei 12.527/2011)?',
        'Resposta: acesso imediato se disponível; se não for possível, até 20 dias, prorrogável por mais 10 dias com justificativa expressa e ciência. Recurso: 10 dias a contar da ciência da decisão de indeferimento.',
      ],
      [
        'Qual a trilha recursal municipal em Porto Velho nos termos do Decreto 14.565/2017?',
        'Trilha sucessiva em 4 instâncias com prazo de 10 dias cada: 1ª Autoridade hierarquicamente superior → 2ª Prefeito Municipal → 3ª Controladoria-Geral do Município (CGM) → 4ª Comissão Mista de Reavaliação de Informação.',
      ],
      [
        'O que dispõe a Lei Estadual de Rondônia nº 6.385/2026 sobre sigilo de viagens e agendas oficiais?',
        'Classifica no grau reservado (até 5 anos) dados de logística e rotas de Chefes de Poder, obrigando a disponibilização aos órgãos de controle (TCE-RO, CGE-RO e MP-RO) em até 10 dias do retorno.',
      ],
    ],
    references: [
      {
        title: 'Lei Federal nº 12.527/2011 — Lei de Acesso à Informação (Planalto)',
        url: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm',
        section: 'Arts. 3º (diretrizes), 7º a 12 (transparência ativa e passiva), 15 (recursos), 24 (prazos de sigilo) e 31 (dados pessoais).',
      },
      {
        title: 'Lei Estadual de Rondônia nº 3.166/2013 alterada pela Lei nº 6.385/2026 (ALE-RO)',
        url: 'https://sapl.al.ro.leg.br/norma/10125',
        section: 'Arts. 21 a 24: classificação no grau reservado de viagens oficiais e comunicação compulsória aos órgãos de controle em 10 dias.',
      },
      {
        title: 'Decreto Municipal de Porto Velho nº 14.565/2017 (SAPL-CMPV)',
        url: 'https://sapl.portovelho.ro.leg.br/norma/8889',
        section: 'Arts. 10 a 16 (procedimento de acesso), 21 a 24 (trilha recursal em 4 instâncias) e 30 (competências de classificação).',
      },
      {
        title: 'Decreto Municipal de Porto Velho nº 18.310/2022 — LGPD Municipal (SAPL-CMPV)',
        url: 'https://sapl.portovelho.ro.leg.br/ta/10567/text',
        section: 'Governança e proteção de dados pessoais e sensíveis no âmbito do Poder Executivo de Porto Velho.',
      },
    ],
  },
];
