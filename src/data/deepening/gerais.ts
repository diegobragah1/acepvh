import type { DeepeningEntry } from './types';

const ibge = {
  title: 'IBGE — Panorama do Censo 2022 em Porto Velho',
  url: 'https://cidades.ibge.gov.br/brasil/ro/porto-velho/panorama',
  section: 'População residente (460.434 hab.), área territorial (34.090,952 km²), densidade e PIB municipal.'
};

export const gerais: DeepeningEntry[] = [
  {
    id: 'atu_1',
    title: 'Extremos Hidrológicos, Crise Climática, Queimadas e Reforma Tributária',
    theory: String.raw`### 1. Extremos Hidrológicos Históricos do Rio Madeira: Seca de 2024 vs Cheia de 2014
O regime hidrológico do Rio Madeira em Porto Velho apresentou nos últimos anos oscilações extremas que entraram para a história climatológica do Brasil:
- **Cheia Centenária Histórica de 2014**: em abril de 2014, o Rio Madeira atingiu a cota máxima histórica de **19,74 metros** na estação fluviométrica oficial de Porto Velho, provocando inundações severas em bairros ribeirinhos e centrais (Bairro da Balsa, Triângulo, Panair, Cai N'água), submergindo trechos da rodovia federal BR-364 no sentido Acre e exigindo estado de calamidade pública.
- **Seca Severa de 2023**: em outubro de 2023, o rio registrou a marca histórica de **1,10 metro**, gerando o primeiro grande alerta de colapso de navegabilidade.
- **Seca Histórica Recorde Absoluta de 2024**: em **23 de setembro de 2024**, o nível do Rio Madeira atingiu a cota mínima absoluta de **25 centímetros** na régua oficial monitorada pela Agência Nacional de Águas (ANA) e pelo Serviço Geológico do Brasil (SGB/CPRM), chegando a um repique de **19 centímetros** em outubro de 2024 — a menor marca registrada em mais de 50 anos de medições oficiais da bacia.
- **Repercussões Socioeconômicas e Sanitárias Imediatas**:
  * Paralisação parcial e interrupção do tráfego de comboios de barcaças de grãos na **Hidrovia do Madeira** (um dos principais eixos do Corredor Logístico do Arco Norte rumo a Itacoatiara/AM e Santarém/PA);
  * Isolamento hidroviário dos distritos ribeirinhos do **Baixo Madeira** (como São Carlos, Nazaré, Calama e Demarcação), com embarcações escolares e de saúde encalhando em bancos de areia;
  * Desabastecimento de água potável em virtude do rebaixamento do lençol freático e secamento de poços amazônicos nas comunidades rurais;
  * Redução substancial da geração de energia nas Usinas Hidrelétricas **Santo Antônio** e **Jirau**, que operam sob o modelo a fio d'água e dependem da vazão corrente do rio.

### 2. Crise de Queimadas, Material Particulado ($PM_{2,5}$) e Impactos na Rede da SEMUSA
Durante o segundo semestre de 2024, Porto Velho e o Estado de Rondônia enfrentaram a mais grave crise de poluição atmosférica por queimadas florestais e agropecuárias da Amazônia Ocidental:
- **Material Particulado Fino ($PM_{2,5}$)**: as partículas inaláveis com diâmetro aerodinâmico inferior a $2,5\ \mu\text{m}$ ultrapassaram concentrações diárias de **$300\ \mu\text{g/m}^3$ a $500\ \mu\text{g/m}^3$** na capital rondoniense, superando em mais de 20 a 30 vezes o limite máximo de segurança diário estabelecido pela Organização Mundial da Saúde (OMS), fixado em $15\ \mu\text{g/m}^3$.
- **Mecanismo Fisiopatológico**: devido ao seu diâmetro microscópico, o $PM_{2,5}$ não é filtrado pelas vias aéreas superiores, atingindo diretamente os alvéolos pulmonares e penetrando na corrente sanguínea, desencadeando respostas inflamatórias agudas.
- **Sobrecarga na Rede da SEMUSA**: a concentração de fumaça gerou explosão de atendimentos nas Unidades de Pronto Atendimento (UPAs Sul, Leste e Jaci-Paraná) e Unidades Básicas de Saúde (UBSs), com pacientes apresentando crises de asma, bronquite crônica agudizada, pneumonia bacteriana secundária e conjuntivite química, afetando de forma desproporcional crianças menores de 5 anos e idosos.

### 3. COP30 no Brasil (Belém/PA) e a Distinção Mitigação vs Adaptação
A realização da 30ª Conferência das Nações Unidas sobre Mudança do Clima (COP30) em Belém/PA (novembro de 2025) consolidou o protagonismo da Amazônia no debate global:
- **Mitigação Climática**: conjunto de ações voltadas a atacar as **causas** do aquecimento global, visando reduzir, frear ou capturar as emissões de gases de efeito estufa (GEE). Exemplos: transição para matrizes de energia renovável, redução do desmatamento ilegal e reflorestamento de Áreas de Preservação Permanente (APPs).
- **Adaptação Climática**: conjunto de ações voltadas a lidar com os **impactos e vulnerabilidades** já deflagrados pelos eventos climáticos extremos. No campo da saúde pública e do trabalho do ACE, a adaptação traduz-se em planos de contingência contra estiagens e cheias, reforço da vigilância entomológica em reservatórios improvisados de água e resposta a desastres socioambientais.

### 4. Reforma Tributária (Emenda Constitucional nº 132/2023) e o Novo Regime Fiscal
A EC 132/2023 reformulou a tributação sobre o consumo no Brasil com a criação do **IVA Dual**:
- **CBS (Contribuição sobre Bens e Serviços)**: de competência privativa da União (federal), substituindo o PIS e a Cofins (e incorporando gradualmente o IPI);
- **IBS (Imposto sobre Bens e Serviços)**: de competência compartilhada entre Estados e Municípios, unificando o ICMS estadual e o ISS municipal;
- **Princípio do Destino**: o tributo arrecadado passa a pertencer ao Estado e ao Município onde a mercadoria ou o serviço é efetivamente consumido, acabando com a guerra fiscal entre entes federativos;
- **Imposto Seletivo (IS)**: tributo federal de caráter extrafiscal ("imposto do pecado"), incidente sobre bens e serviços prejudiciais à saúde humana (cigarros, bebidas alcoólicas) ou ao meio ambiente;
- **Cesta Básica Nacional de Alimentos**: isenção total (alíquota zero) para itens essenciais da alimentação;
- **Novo Regime Fiscal Sustentável (LC 200/2023)**: substituiu o antigo teto de gastos rígido da EC 95 por metas fiscais que limitam o crescimento das despesas públicas a uma proporção do crescimento real das receitas.

### 5. Logística e Dinâmica Econômica de Rondônia
Porto Velho consolida-se como polo geoeconômico de Rondônia ao integrar a rodovia federal **BR-364** à **Hidrovia do Rio Madeira**, operando como nó central de escoamento da produção agropecuária (soja, milho, carne bovina, café robusta amazônico e piscicultura) em direção aos portos exportadores do Arco Norte.`,
    summary: String.raw`Rio Madeira: cheia histórica de 2014 (19,74 m) e seca histórica recorde de 2024 (25 cm em set/2024 e 19 cm em out/2024). Queimadas geraram PM2,5 > 300 µg/m³, sobrecarregando a rede da SEMUSA. Mitigação combate as causas do aquecimento; Adaptação ajusta a saúde e as cidades aos impactos. EC 132/2023 criou o IVA Dual (CBS federal e IBS subnacional).

| Fenômeno / Marco Recente | Dados Oficiais e Parâmetros | Repercussão em Porto Velho / Rondônia | Ponto Crítico para a Banca IBGP |
| --- | --- | --- | --- |
| **Cheia Histórica de 2014** | Cota recorde de **19,74 metros** na régua de Porto Velho (abril de 2014). | Alagamento de bairros da orla, interdição da BR-364 sentido Acre e isolamento terrestre. | Contrastar com a seca histórica recorde de 2024. |
| **Seca Histórica de 2024** | Cota mínima absoluta de **25 cm** em 23/09/2024 (repique de 19 cm em out/2024). | Restrição de barcaças na Hidrovia do Madeira, isolamento fluvial do Baixo Madeira e redução de geração nas UHEs. | A menor marca fluvial em mais de 50 anos de medições oficiais da ANA/SGB. |
| **Crise de Queimadas e $PM_{2,5}$** | Partículas finas ultrapassando **$300\ \mu\text{g/m}^3$** (limite OMS: $15\ \mu\text{g/m}^3$). | Sobrecarga de urgências na SEMUSA (UPAs Sul/Leste/Jaci) por asma e bronquite em crianças/idosos. | O $PM_{2,5}$ tem diâmetro $< 2,5\ \mu\text{m}$, penetrando nos alvéolos pulmonares e corrente sanguínea. |
| **Mitigação vs Adaptação (COP30)** | Belém/PA sediou a conferência do clima em novembro de 2025. | Estruturação de planos de contingência sanitária do SUS para seca e inundação extrema. | **Mitigação** reduz emissões (causa); **Adaptação** protege a saúde pública dos impactos (efeito). |
| **Reforma Tributária (EC 132/2023)** | Modelo do **IVA Dual**: **CBS** (União) + **IBS** (Estados e Municípios). | IBS unifica ICMS e ISS com arrecadação destinada ao município consumidor. | O Imposto Seletivo ("pecado") taxa itens prejudiciais à saúde/ambiente. |`,
    questions: [
      {
        q: '[Autoral] Em relação aos extremos hidrológicos registrados no Rio Madeira no município de Porto Velho nos anos recentes e suas consequências socioeconômicas e sanitárias, assinale a afirmativa CORRETA:',
        options: [
          'Em setembro de 2024, o Rio Madeira registrou a menor cota de sua série histórica oficial em Porto Velho, marcando 25 cm na régua da estação fluviométrica, o que restringiu o tráfego de comboios na Hidrovia do Madeira e isolou distritos fluviais do Baixo Madeira.',
          'O Rio Madeira manteve-se com nível estável e superior a 20 metros em todos os meses de 2023 e 2024, sem impacto sobre a navegação.',
          'A seca histórica do Rio Madeira permitiu o acesso rodoviário pavimentado imediato a distritos exclusivamente fluviais como Calama e Nazaré.',
          'As usinas hidrelétricas de Santo Antônio e Jirau operaram com aumento quádruplo de geração elétrica devido à estiagem prolongada.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Atualidades Regionais',
        comment: 'Gabarito: A. Em 23 de setembro de 2024, o Rio Madeira atingiu a cota mínima histórica de 25 cm no porto de Porto Velho (superando o recorde anterior de 1,10 m de outubro de 2023 e atingindo repique de 19 cm em outubro de 2024), paralisando barcaças na hidrovia e isolando comunidades ribeirinhas do Baixo Madeira. Erro da B: a cota de 19,74 m foi registrada na cheia de 2014, enquanto 2023-2024 registraram secas recordes; erro da C: Calama e Nazaré não possuem acesso rodoviário, dependendo da navegação fluvial; erro da D: as usinas a fio d\'água reduziram sua capacidade de geração de energia devido à baixa vazão do rio.'
      },
      {
        q: '[Autoral] Durante o segundo semestre de 2024, Porto Velho enfrentou severa crise de poluição atmosférica decorrente de queimadas florestais na Amazônia. Sobre os impactos desse fenômeno na saúde pública e na rede municipal de saúde (SEMUSA), é CORRETO afirmar:',
        options: [
          'A concentração de material particulado fino ($PM_{2,5}$) superou 300 $\\mu\\text{g/m}^3$, provocando sobrecarga nas UPAs e UBSs por crises respiratórias agudas (asma, bronquite e pneumonia), especialmente entre crianças e idosos.',
          'A fumaça florestal atuou como broncodilatador benéfico e reduziu a zero as internações por síndromes respiratórias agudas na capital.',
          'As partículas $PM_{2,5}$ não penetram nos pulmões por possuírem diâmetro aerodinâmico superior a 50 micrômetros.',
          'A recomendação técnica da Secretaria Municipal de Saúde foi a prática intensiva de maratonas ao ar livre ao meio-dia sob fumaça.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Atualidades e Saúde',
        comment: 'Gabarito: A. As queimadas de 2024 elevaram os níveis de PM2,5 a patamares dezenas de vezes superiores ao limite diário recomendado pela OMS (15 µg/m³), causando intoxicação e sobrecarga na rede de urgência e emergência da SEMUSA. Erro da B: fumaça é altamente tóxica e agrava patologias respiratórias; erro da C: PM2,5 possui diâmetro inferior a 2,5 micrômetros, penetrando diretamente nos alvéolos pulmonares e na corrente sanguínea; erro da D: a recomendação formal foi suspender exercícios ao ar livre e intensificar hidratação.'
      },
      {
        q: '[Autoral] No âmbito das discussões sobre mudanças climáticas e da realização da COP30 em Belém/PA em novembro de 2025, diferenciam-se os conceitos de mitigação e adaptação. No planejamento da vigilância em saúde ambiental, constitui medida típica de ADAPTAÇÃO climática:',
        options: [
          'Estruturar planos de contingência locais para garantir água potável e assistência do ACE a comunidades ribeirinhas vulneráveis durante secas e enchentes extremas.',
          'Substituir combustíveis fósseis por energia solar em indústrias automobilísticas na Europa para diminuir as emissões globais de carbono.',
          'Desativar as estações de monitoramento hidrológico da bacia amazônica para reduzir os gastos públicos com sensores fluviais.',
          'Negociar créditos de carbono florestais em bolsas de valores internacionais.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Caso Prático ACE',
        comment: 'Gabarito: A. Adaptação climática consiste em preparar as comunidades, os serviços de saúde e a infraestrutura urbana para resistir e responder aos impactos de eventos climáticos já em curso. Erro da B: reduzir emissões de gases de efeito estufa é a definição de Mitigação; erro da C: desativar monitoramento amplia a vulnerabilidade da população; erro da D: créditos de carbono integram mecanismos econômicos de mitigação de emissões.'
      },
      {
        q: '[Autoral] A Emenda Constitucional nº 132/2023 instituiu a Reforma Tributária do consumo no Brasil, criando o modelo do Imposto sobre Valor Agregado (IVA) Dual. De acordo com o novo texto constitucional, o tributo de competência compartilhada entre Estados e Municípios que substituirá o ICMS e o ISS é denominado:',
        options: [
          'IBS (Imposto sobre Bens e Serviços).',
          'CBS (Contribuição sobre Bens e Serviços).',
          'Imposto Seletivo (IS).',
          'IPVA Náutico Distrital.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Legislação e Economia',
        comment: 'Gabarito: A. No IVA Dual da EC 132/2023, o IBS (Imposto sobre Bens e Serviços) é subnacional (Estados e Municípios), unificando ICMS e ISS com cobrança no destino. A CBS (Contribuição sobre Bens e Serviços) é de competência da União (federal), substituindo PIS e Cofins. O Imposto Seletivo incide sobre bens prejudiciais à saúde ou ao meio ambiente. Erro da B: CBS é federal; erro da C: Imposto Seletivo é tributo federal extrafiscal; erro da D: não é o substituto do ICMS/ISS.'
      },
      {
        q: '[Autoral] Em relação à economia do Estado de Rondônia e ao papel logístico de Porto Velho no cenário recente dos últimos 5 anos, assinale a afirmativa CORRETA:',
        options: [
          'Porto Velho atua como elo logístico estratégico integrando o transporte rodoviário pela BR-364 à Hidrovia do Madeira, escoando safras de grãos de Rondônia e Mato Grosso pelo Corredor do Arco Norte.',
          'Rondônia deixou de produzir café e cacau para dedicar 100% de seu território à extração de carvão mineral subterrâneo.',
          'O Porto Organizado de Porto Velho opera exclusivamente com submarinos nucleares que navegam até os Andes bolivianos.',
          'O Estado de Rondônia não possui rebanho bovino e importa carne vermelha de outros continentes.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Geografia Econômica',
        comment: 'Gabarito: A. Porto Velho articula o modal rodoviário (BR-364) ao hidroviário (Hidrovia do Madeira rumo aos portos de Itacoatiara e Santarém), compondo o Arco Norte de exportação do agronegócio. Erro da B: Rondônia destaca-se na produção de café robusta amazônico e cacau, sem extração de carvão mineral; erro da C: o porto opera comboios de barcaças fluviais; erro da D: Rondônia possui um dos maiores rebanhos bovinos do país com certificação de área livre de febre aftosa.'
      }
    ],
    flashcards: [
      [
        'Quais foram as cotas extremas históricas do Rio Madeira na cheia de 2014 e na seca de 2024?',
        'Cheia histórica centenária de 2014: 19,74 metros; Seca histórica recorde absoluta de 2024: 25 centímetros em setembro (com repique de 19 centímetros em outubro).'
      ],
      [
        'Qual a diferença entre Mitigação e Adaptação Climática no contexto da COP30?',
        'Mitigação combate as causas do aquecimento global reduzindo ou capturando emissões de GEE; Adaptação ajusta as cidades, os serviços de saúde e a população aos impactos e vulnerabilidades dos eventos climáticos já em curso.'
      ],
      [
        'Quais são os dois tributos que compõem o modelo de IVA Dual criado pela EC 132/2023?',
        'A CBS (Contribuição sobre Bens e Serviços), federal, que substitui PIS e Cofins; e o IBS (Imposto sobre Bens e Serviços), compartilhado entre Estados e Municípios, que substitui ICMS e ISS.'
      ]
    ],
    references: [
      {
        title: 'SGB/CPRM & ANA — Sistema de Alerta Hidrológico da Bacia do Rio Madeira',
        url: 'https://www.sgb.gov.br/siah/',
        section: 'Relatórios de monitoramento das cotas fluviométricas históricas da estação Porto Velho.'
      },
      {
        title: 'Cemaden — Diagnóstico das Secas Recentes na Amazônia',
        url: 'https://www.gov.br/cemaden/pt-br/assuntos/noticias-cemaden/cemaden-analisa-secas-recentes-no-brasil-e-apresenta-diagnostico-e-projecoes-como-subsidio-para-a-cop-16/',
        section: 'Impactos hidroclimáticos da estiagem de 2023-2024 e vulnerabilidades regionais.'
      },
      {
        title: 'Planalto — Emenda Constitucional nº 132/2023 (Reforma Tributária)',
        url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm',
        section: 'Instituição do IVA Dual (CBS e IBS), Imposto Seletivo e Cesta Básica Nacional.'
      }
    ]
  },
  {
    id: 'atu_2',
    title: 'Patrimônio Histórico, Ferrovia Madeira-Mamoré, Cultura Popular e Povos Tradicionais',
    theory: String.raw`### 1. Estrada de Ferro Madeira-Mamoré (EFMM): História, Tratado de Petrópolis e Memória do Trabalho
A fundação e expansão do núcleo urbano de Porto Velho estão indissociavelmente ligadas à saga de construção da Estrada de Ferro Madeira-Mamoré (EFMM):
- **Tratado de Petrópolis (17 de novembro de 1903)**: firmado entre o Brasil (diplomacia conduzida pelo Barão do Rio Branco) e a Bolívia para solucionar a Questão do Acre. O Brasil incorporou o Acre mediante pagamento de 2 milhões de libras esterlinas e o compromisso formal de construir uma ferrovia que vencesse o trecho encachoeirado dos rios Madeira e Mamoré, viabilizando o escoamento da borracha boliviana até o porto de Porto Velho e o Oceano Atlântico.
- **Construção (1907 a 1912)**: executada pelo consórcio norte-americano de Percival Farquhar (*Madeira-Mamoré Railway Company*). Seus 366 km de extensão ligaram Porto Velho a Guajará-Mirim, contornando 20 cachoeiras fluviais intransponíveis à navegação de grande porte.
- **Mão de Obra e Imigração Antilhana (Barbadianos)**: operários de mais de 25 nacionalidades trabalharam no canteiro, com destaque para trabalhadores afro-caribenhos de língua inglesa originários de Barbados e de outras ilhas das Antilhas britânicas (**barbadianos**). Eles fundaram bairros históricos como o Alto do Bode (atual bairro Triângulo), introduziram vocábulos ingleses, a prática do críquete e elementos da culinária antilhana.
- **Atuação Sanitária de Oswaldo Cruz (1910)**: diante da mortandade epidêmica de trabalhadores por impaludismo (malária), a companhia contratou o sanitarista Dr. Oswaldo Cruz e o Dr. Belisário Penna, que atuaram no Hospital da Candelária em Porto Velho, estabelecendo o uso preventivo obrigatório diário de quinino e a vedação de alojamentos com telas de proteção.
- **Tombamento e Revitalização**: desativada em 1972, a EFMM foi tombada pelo IPHAN como Patrimônio Cultural Brasileiro em 2005. Em 2024, o Complexo da Estrada de Ferro Madeira-Mamoré foi revitalizado pela Prefeitura e reaberto à visitação pública como espaço histórico, cultural e turístico.

### 2. As Três Caixas d'Água ("As Três Marias"): Arquitetura e Símbolo Cívico
- **Origem e Fabricação**: reservatórios metálicos cilíndricos erguidos em ferro entre **1910 e 1912**, importados dos Estados Unidos e fabricados pela célebre empresa *Chicago Bridge & Iron Works*.
- **Finalidade Histórica**: foram erguidas no ponto mais alto da cidade nascente para armazenar água encanada e abastecer as oficinas da EFMM, as caldeiras das locomotivas a vapor e os primeiros bairros residenciais de Porto Velho.
- **Heráldica Oficial**: carinhosamente chamadas de "As Três Marias", constituem o ícone arquitetônico central do Brasão de Armas e da Bandeira Oficial do Município de Porto Velho (Art. 3º da Lei Orgânica Municipal).

### 3. Real Forte Príncipe da Beira (1776): Sentinela Colonial do Guaporé
- **Localização**: situado na margem direita do Rio Guaporé, no atual município de **Costa Marques/RO** (não se localiza em Porto Velho!).
- **Histórico**: monumento militar colonial português iniciado em 1776 pelo governador Luís de Albuquerque de Melo Pereira e Cáceres sob o traçado do engenheiro Domingos Sambuceti, para garantir a posse das terras lusitanas da fronteira oeste frente ao Império Espanhol no contexto do Tratado de Madri (1750) e Tratado de Santo Ildefonso (1777); tombado pelo IPHAN em 1950.

### 4. Manifestações Culturais Populares: Arraial Flor do Maracujá e Duelo na Fronteira
- **Arraial Flor do Maracujá**: fundado em 1982 no Parque dos Tanques em Porto Velho, é considerado o maior festival folclórico e junino do Estado de Rondônia e um dos maiores da Região Norte, celebrando anualmente a disputa de dezenas de quadrilhas juninas e grupos de bois-bumbás.
- **Duelo na Fronteira (Guajará-Mirim)**: festival folclórico de bois-bumbás na fronteira Brasil-Bolívia, reunindo o confronto histórico entre o Boi Malhadinho (azul e branco) e o Boi Flor do Campo (vermelho e branco).
- **Festa do Divino Espírito Santo**: celebração religiosa e fluvial secular realizada nos rios Guaporé e Madeira, conduzida com forte protagonismo por comunidades quilombolas e ribeirinhas (como Pedras Negras e Santo Antônio do Guaporé).

### 5. Povos Originários e Comunidades Tradicionais de Porto Velho
O município abriga expressiva diversidade étnica e cultural com impacto direto na organização da atenção à saúde indígena e ribeirinha pelo SUS:
- **Povo Karipuna**: habitam a Terra Indígena Karipuna, situada entre os municípios de Porto Velho e Nova Mamoré (no entorno do distrito de União Bandeirantes); pertencem ao tronco linguístico Tupi-Kagwahiva e enfrentam pressões históricas por invasões e desmatamento;
- **Povo Karitiana**: habitam a TI Karitiana ao sul do município de Porto Velho; família linguística Arikém; preservam tradições rituais e artefatos de cestaria e cerâmica;
- **Povo Kaxarari**: habitam a TI Kaxarari na tríplice fronteira de Rondônia, Acre e Amazonas, com acesso pela rodovia BR-364 no distrito de Extrema; família linguística Pano;
- **Ribeirinhos da RESEX Lago do Cuniã**: reserva extrativista federal na margem esquerda do Baixo Madeira, internacionalmente reconhecida pela gestão comunitária sustentável da pesca do pirarucu e do manejo do jacaré-açu.`,
    summary: String.raw`EFMM (1907-1912) decorreu do Tratado de Petrópolis (1903) para contornar cachoeiras; operários barbadianos e missão sanitária de Oswaldo Cruz (1910). As Três Caixas d'Água (Chicago Bridge) são símbolo no brasão de PVH. Forte Príncipe da Beira fica em Costa Marques. Flor do Maracujá é o maior festival junino de RO.

| Patrimônio / Manifestação | Origem Histórica e Localização | Significado Cultural e Social | Ponto Crítico para a Banca IBGP |
| --- | --- | --- | --- |
| **Estrada de Ferro Madeira-Mamoré** | 1907 a 1912; 366 km entre Porto Velho e Guajará-Mirim. | Tratado de Petrópolis (1903); imigração de barbadianos (afro-caribenhos). | Ação sanitária de **Oswaldo Cruz** em 1910 na Candelária contra a malária. |
| **As Três Caixas d'Água (Três Marias)** | Importadas dos EUA (*Chicago Bridge*), 1910–1912; Porto Velho. | Abastecimento ferroviário e urbano pioneiro; ícone visual da capital. | Estampadas no Brasão de Armas e na Bandeira de Porto Velho (Art. 3º LOM). |
| **Real Forte Príncipe da Beira** | Iniciado em 1776 no Rio Guaporé, em **Costa Marques/RO**. | Fortaleza colonial militar portuguesa pombalina na fronteira oeste. | **Não fica em Porto Velho**; localiza-se em Costa Marques no Vale do Guaporé. |
| **Arraial Flor do Maracujá** | Criado em 1982 no Parque dos Tanques, em Porto Velho. | Maior mostra folclórica de quadrilhas juninas e bois-bumbás de Rondônia. | Expressão da identidade cultural cabocla, nordestina e amazônica. |
| **Povos Originários e RESEX Cuniã** | TIs Karipuna, Karitiana, Kaxarari e RESEX Lago do Cuniã. | Pluralidade étnica, territórios protegidos e saúde intercultural no SUS. | Karipuna no entorno de União Bandeirantes; RESEX Cuniã no Baixo Madeira. |`,
    questions: [
      {
        q: '[Autoral] A construção da Estrada de Ferro Madeira-Mamoré (EFMM, 1907–1912) foi o marco fundador do núcleo urbano de Porto Velho. Sobre a história e o patrimônio da ferrovia, assinale a afirmativa CORRETA:',
        options: [
          'A EFMM foi construída para cumprir o Tratado de Petrópolis (1903), ligando Porto Velho a Guajará-Mirim para contornar cachoeiras fluviais, e contou com expressiva mão de obra de barbadianos (afro-caribenhos), além de receber a visita sanitária de Oswaldo Cruz em 1910.',
          'A ferrovia foi inaugurada no século XVI pelo Barão de Mauá para ligar Porto Velho a Lisboa por via subterrânea.',
          'O Tratado de Petrópolis foi assinado entre Brasil e França para permutar o território do Amapá pelo Rio Madeira.',
          'A EFMM foi totalmente demolida em 1920 sem deixar nenhum vestígio material ou tombamento patrimonial.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'História Regional',
        comment: 'Gabarito: A. A ferrovia derivou do Tratado de Petrópolis de 1903 (Brasil e Bolívia), contou com operários barbadianos e outros imigrantes, teve ações sanitárias de Oswaldo Cruz na Candelária em 1910 contra a malária e é tombada pelo IPHAN. Erro da B: inaugurada no início do século XX (1912), não no século XVI; erro da C: Tratado de Petrópolis foi entre Brasil e Bolívia no contexto da questão do Acre; erro da D: a ferrovia operou até 1972 e seu complexo foi tombado pelo IPHAN em 2005 e revitalizado em 2024.'
      },
      {
        q: '[Autoral] As Três Caixas d\'Água, popularmente conhecidas como “As Três Marias”, localizadas no centro histórico de Porto Velho, constituem símbolo oficial do município. Sobre a origem e a função histórica desse monumento, é CORRETO afirmar:',
        options: [
          'Foram fabricadas nos Estados Unidos pela Chicago Bridge & Iron Works e instaladas entre 1910 e 1912 para abastecer a ferrovia e a população inicial de Porto Velho, figurando no Brasão e na Bandeira do Município.',
          'Foram escavadas em granito natural por missionários jesuítas no século XVII para batismo de indígenas.',
          'Trata-se de silos construídos em 2020 para armazenar café robusta amazônico para exportação.',
          'Foram doadas pelo governo da Bolívia como indenização pela Guerra do Paraguai.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Patrimônio e História',
        comment: 'Gabarito: A. As Três Caixas d\'Água são reservatórios metálicos cilíndricos erguidos entre 1910 e 1912 pela empresa norte-americana Chicago Bridge & Iron Works, símbolo heráldico estampado no brasão e na bandeira de Porto Velho. Erro da B: são estruturas de ferro importadas no início do século XX; erro da C: foram construídas para abastecimento de água no período da EFMM; erro da D: são ligadas à EFMM e ao capital da ferrovia.'
      },
      {
        q: '[Autoral] No município de Costa Marques (RO), às margens do Rio Guaporé, ergue-se uma fortificação militar histórica do século XVIII (iniciada em 1776 no período pombalino), tombada pelo IPHAN e testemunho das disputas coloniais entre Portugal e Espanha na fronteira oeste, denominada:',
        options: [
          'Real Forte Príncipe da Beira.',
          'Forte de Copacabana.',
          'Fortaleza de Santa Cruz de Anhatomirim.',
          'Forte dos Reis Magos.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Patrimônio Regional',
        comment: 'Gabarito: A. O Real Forte Príncipe da Beira, em Costa Marques/RO, é a maior fortificação militar construída pela Coroa Portuguesa fora do litoral brasileiro. Erro da B: Copacabana fica no Rio de Janeiro; erro da C: Anhatomirim fica em Santa Catarina; erro da D: Reis Magos fica em Natal/RN.'
      },
      {
        q: '[Autoral] Considerada a maior festa folclórica e junina de Rondônia e uma das mais expressivas da Região Norte, realizada anualmente no Parque dos Tanques em Porto Velho com disputas de quadrilhas juninas e bois-bumbás desde 1982, trata-se do:',
        options: [
          'Arraial Flor do Maracujá.',
          'Festival Folclórico de Parintins.',
          'Bumba Meu Boi de São Luís.',
          'Círio de Nazaré.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Cultura Popular',
        comment: 'Gabarito: A. O Arraial Flor do Maracujá é a festa folclórica símbolo de Porto Velho, com quadrilhas e bois-bumbás no Parque dos Tanques. Erro da B: Parintins ocorre no Amazonas; erro da C: Bumba Meu Boi tradicional ocorre no Maranhão; erro da D: Círio de Nazaré é procissão religiosa em Belém/PA.'
      },
      {
        q: '[Autoral] Na composição étnica e sociocultural de Porto Velho e regiões vizinhas, destacam-se povos originários e comunidades tradicionais com atuação relevante para as políticas públicas de saúde intercultural do SUS. Sobre essas populações, assinale a correlação CORRETA:',
        options: [
          'A Terra Indígena Karipuna situa-se na região de influência de União Bandeirantes, e a RESEX Lago do Cuniã no Baixo Madeira é referência em manejo sustentável de recursos pesqueiros e fauna silvestre.',
          'Todos os povos originários de Rondônia falam a mesma língua e residem em áreas urbanas sem demarcação territorial.',
          'Os povos Karitiana e Kaxarari são originários da Patagônia chilena e migraram para Rondônia após 2020.',
          'A Reserva Extrativista do Lago do Cuniã é uma mina de exploração de urânio enriquecido proibida para moradores tradicionais.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Diversidade Étnica',
        comment: 'Gabarito: A. Os Karipuna têm TI no entorno de União Bandeirantes/Nova Mamoré, enquanto a RESEX Lago do Cuniã no Baixo Madeira destaca-se pelo manejo de jacarés e pirarucu. Erro da B: há grande diversidade linguística (troncos Tupi, Macro-Jê, Pano, etc.) e terras indígenas demarcadas; erro da C: Karitiana e Kaxarari são etnias nativas da Amazônia; erro da D: RESEX Cuniã é unidade de conservação de uso sustentável de base comunitária.'
      }
    ],
    flashcards: [
      [
        'Qual acordo diplomático determinou a construção da Estrada de Ferro Madeira-Mamoré?',
        'O Tratado de Petrópolis (1903), firmado entre o Brasil e a Bolívia, pelo qual o Brasil assumiu a obrigação de construir a ferrovia de 366 km para dar escoamento à borracha boliviana.'
      ],
      [
        'Quem foram os barbadianos e qual a sua contribuição cultural para Porto Velho?',
        'Trabalhadores afro-caribenhos de língua inglesa originários de Barbados e das Antilhas que trabalharam na EFMM e fundaram bairros históricos como o Alto do Bode (Triângulo), legando influências na culinária e vocabulário.'
      ],
      [
        'Em qual município rondoniense fica localizado o Real Forte Príncipe da Beira e qual a sua data de início?',
        'Fica localizado no município de Costa Marques/RO, às margens do Rio Guaporé; sua construção foi iniciada em 1776 no período colonial pombalino.'
      ]
    ],
    references: [
      {
        title: 'IPHAN — Patrimônio Ferroviário de Rondônia (Complexo EFMM)',
        url: 'https://www.gov.br/iphan/pt-br/superintendencias/rondonia/patrimonio-ferroviario',
        section: 'Histórico da ferrovia, Tratado de Petrópolis, operários e tombamento cultural.'
      },
      {
        title: 'Governo do Estado de Rondônia — Arraial Flor do Maracujá',
        url: 'https://rondonia.ro.gov.br/portal/flordomaracuja/',
        section: 'Tradição do maior festival folclórico de Porto Velho (quadrilhas e bois-bumbás).'
      }
    ]
  },
  {
    id: 'atu_3',
    title: 'Cronologia Político-Administrativa, Geografia do Madeira e Censo IBGE 2022',
    theory: String.raw`### 1. Cronologia Político-Administrativa Completa: De Humaitá ao Estado de Rondônia
A história institucional de Porto Velho e de Rondônia é balizada por quatro marcos legislativos e administrativos decisivos:
1. **02/10/1914 — Criação do Município de Porto Velho**: instituído pela **Lei Estadual nº 757 do Amazonas**, promulgada pelo governador Jonathas Pedrosa, desmembrando o novel município das terras de Humaitá/AM. A instalação solene do município ocorreu em **24/01/1915**, tendo como primeiro superintendente o Major Fernando Guapindaia. Enquanto Porto Velho nasceu pertencendo ao Amazonas, a povoação vizinha de Santo Antônio do Rio Madeira pertencia a Mato Grosso.
2. **13/09/1943 — Criação do Território Federal do Guaporé**: criado pelo **Decreto-Lei nº 5.812/1943** pelo presidente Getúlio Vargas durante o Estado Novo e a Segunda Guerra Mundial (mobilização dos Soldados da Borracha), desmembrando áreas do Estado do Amazonas e do Estado de Mato Grosso. O capitão Aluízio Pinheiro Ferreira foi nomeado seu primeiro governador. Em 1945, o município vizinho de Santo Antônio do Rio Madeira foi extinto e seu território incorporado a Porto Velho.
3. **17/02/1956 — Denominação de Território Federal de Rondônia**: alterado pela **Lei Federal nº 2.731/1956** (sancionada no governo JK), prestando homenagem de gratidão nacional ao Marechal Cândido Mariano da Silva Rondon, desbravador das linhas telegráficas estratégicas da Amazônia.
4. **22/12/1981 — Criação do Estado de Rondônia**: elevado à categoria de Estado federado pela **Lei Complementar Federal nº 41/1981** (sancionada pelo presidente João Figueiredo). A instalação formal do Estado ocorreu em **04/01/1982**, com a posse solene do coronel Jorge Teixeira de Oliveira ("Teixeirão") como seu primeiro governador.

### 2. Hidrografia Regional: A Bacia do Rio Madeira e seus Afluentes
- **Formação Hidrográfica**: o Rio Madeira forma-se na fronteira internacional Brasil-Bolívia a partir da junção dos rios **Beni** e **Mamoré**.
- **Regime de Sedimentos e Vazão**: caracterizado como rio de **águas brancas (barrentas)**, transporta gigantesca carga de sedimentos ricos em minerais dos Andes, respondendo por aproximadamente 15% a 20% da descarga líquida total do Rio Amazonas.
- **Principais Afluentes em Território Rondoniense**: Rio Guaporé, Rio Abunã, Rio Mutum-Paraná, Rio Jaci-Paraná, Rio Candeias, Rio Jamari e Rio Machado (Ji-Paraná, cuja foz no Madeira situa-se no distrito de Calama).
- **Foz Fluvial**: o Rio Madeira deságua na margem direita do Rio Amazonas, a jusante de Manaus, nas proximidades do porto exportador de Itacoatiara/AM.

### 3. Demografia e Geografia de Porto Velho: Dados Definitivos do Censo IBGE 2022
- **População Residente Oficial**: **460.434 habitantes** no Censo Demográfico do IBGE 2022 (maior população municipal de Rondônia, concentrando ~29% dos habitantes do Estado).
- **Área Territorial Oficial**: **34.090,952 km²**, consagrando Porto Velho como a **capital brasileira de maior extensão territorial**, superando em área geográfica países como a Bélgica e estados brasileiros como Sergipe e Alagoas.
- **Densidade Demográfica Média**: **13,51 hab/km²**. Trata-se de uma média aritmética espacial que encobre a hiperconcentração de moradores na sede urbana (onde residem mais de 85% da população) em contraste com o vasto vazio demográfico dos distritos florestais e ribeirinhos.
- **PIB Municipal**: maior Produto Interno Bruto de Rondônia, superando os R$ 20 bilhões de reais, respondendo por mais de 35% de toda a atividade econômica estadual.

### 4. Nota Técnica de Precisão Territorial: Distritos Administrativos vs. Localidades do Quadro de Vagas do Edital ACE nº 25/2026
Para evitar qualquer divergência entre fontes geográficas e o quadro do concurso, distinga sempre dois recortes:
1. **No Edital nº 25/2026 — SEMUSA Porto Velho (Retificação nº 01)**: As **140 vagas totais de ACE** estão distribuídas em **16 códigos de lotação (340 a 356, sendo o código 340 para Porto Velho — Zona Urbana com 96 vagas e 15 códigos distritais/rurais com 44 vagas)**: Abunã (341), Calama (342), Cujubim Grande (344 — cód. 343 inexistente no Anexo I), Extrema (345), Fortaleza do Abunã (346), Jaci Paraná (347), Joana D'Arc (348), Lago Cuniã (349), Nazaré (350), Nova Califórnia (351), Rio Pardo (352), Santa Rita (353), São Carlos (354), União Bandeirantes (355) e Vista Alegre (356).
2. **Classificação Logística e Geográfica**:
   - **Eixo da BR-364 / Ponta do Abunã e Entorno Terrestre**: Jaci-Paraná, Mutum-Paraná, Nova Mutum, Abunã, Fortaleza do Abunã, Vista Alegre do Abunã, Extrema, Nova Califórnia, União Bandeirantes, Rio Pardo e Bom Futuro.
   - **Baixo Madeira (Acesso Predominantemente Fluvial)**: São Carlos, Nazaré, Calama e Demarcação.`,
    summary: String.raw`Criação de PVH: Lei 757/1914 do Amazonas (instalado em 1915). Guaporé em 1943; Território de Rondônia em 1956; Estado em 1981 (instalado em 1982). Censo 2022: 460.434 hab., 34.090,952 km² e 13,51 hab/km². Distritos dividem-se em Eixo Rodoviário (BR-364) e Eixo Fluvial (Baixo Madeira).

| Marco Histórico / Dado Oficial | Data / Número Oficial | Base Legal / Fonte | Significado Crítico para a Banca IBGP |
| --- | --- | --- | --- |
| **Criação de Porto Velho** | **02/10/1914** (instalado em 24/01/1915). | Lei Estadual do Amazonas nº 757/1914. | Porto Velho nasceu em terras do **Amazonas**; Santo Antônio pertencia a Mato Grosso. |
| **Território Federal do Guaporé** | **13/09/1943** (Aluízio Ferreira, 1º Gov.). | Decreto-Lei nº 5.812/1943 (Vargas). | Desmembrado de áreas do Amazonas e Mato Grosso na 2ª Guerra Mundial. |
| **Território de Rondônia** | **17/02/1956** (homenagem a Rondon). | Lei Federal nº 2.731/1956 (JK). | Homenagem histórica ao Marechal Cândido Mariano da Silva Rondon. |
| **Criação do Estado de Rondônia** | **22/12/1981** (instalado em 04/01/1982). | Lei Complementar Federal nº 41/1981. | Governador Jorge Teixeira de Oliveira instalou o Estado em 1982. |
| **Censo Demográfico IBGE 2022** | **460.434 hab.** e **34.090,952 km²**. | IBGE Cidades 2022. | **Maior capital brasileira em extensão**; densidade de 13,51 hab/km². |
| **Quadro de Vagas SEMUSA** | 16 códigos (340 urbano + 341–356 distritos). | Edital nº 25/2026 SEMUSA. | Eixo Rodoviário BR-364 versus Eixo Fluvial Baixo Madeira. |`,
    questions: [
      {
        q: '[Autoral] A respeito da linha do tempo da evolução político-administrativa do Município de Porto Velho e do Estado de Rondônia, assinale a sequência cronológica CORRETA dos fatos históricos e suas respectivas bases legais:',
        options: [
          'Criação do Município de Porto Velho pela Lei 757/1914 do Amazonas $\\rightarrow$ Criação do Território Federal do Guaporé pelo Dec-Lei 5.812/1943 $\\rightarrow$ Denominação de Território Federal de Rondônia pela Lei 2.731/1956 $\\rightarrow$ Criação do Estado de Rondônia pela LC 41/1981.',
          'Criação do Estado de Rondônia em 1914 $\\rightarrow$ Criação do Município de Porto Velho em 1943 $\\rightarrow$ Criação do Território do Guaporé em 1981.',
          'Instalação do Território de Rondônia em 1500 $\\rightarrow$ Transformação em província do Império em 1988 $\\rightarrow$ Criação do Município de Porto Velho em 2024.',
          'Desmembramento de Rondônia a partir do Estado do Acre em 1956 sem nunca ter integrado o Amazonas ou Mato Grosso.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'História Regional',
        comment: 'Gabarito: A. A ordem cronológica exata é: 1) Lei 757/1914 do Amazonas (criação de Porto Velho, instalado em 1915); 2) Dec-Lei 5.812/1943 (Território do Guaporé); 3) Lei 2.731/1956 (Território de Rondônia); 4) LC 41/1981 (criação do Estado de Rondônia, instalado em 1982). Erro da B, C e D: invertem completamente os marcos ou trazem distorções anacrônicas.'
      },
      {
        q: '[Autoral] Segundo os dados consolidados do Censo Demográfico do IBGE 2022, o município de Porto Velho apresenta as seguintes características demográficas e territoriais oficiais:',
        options: [
          'População residente de 460.434 habitantes, área territorial de 34.090,952 km² (maior capital do país em área territorial) e densidade demográfica média de 13,51 hab/km².',
          'População residente de 100.000 habitantes e área de 500 km², sendo a menor capital do Brasil.',
          'Densidade demográfica de 1.500 hab/km² uniforme em todos os distritos da floresta.',
          'População de 2 milhões de habitantes recenseados exclusivamente na Praça das Três Caixas d\'Água.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Geografia e Demografia',
        comment: 'Gabarito: A. O Censo IBGE 2022 registrou exatamente 460.434 habitantes em Porto Velho, com vasta extensão territorial de 34.090,952 km² e densidade média de 13,51 hab/km². Erro da B, C e D: números fictícios que destoam da base oficial do IBGE.'
      },
      {
        q: '[Autoral] Em relação à Bacia Hidrográfica do Rio Madeira e aos rios que banham o território de Rondônia, assinale a afirmativa CORRETA:',
        options: [
          'O Rio Madeira forma-se na fronteira Brasil-Bolívia pela confluência dos rios Beni e Mamoré, e tem como afluentes em Rondônia rios como o Guaporé, Abunã, Jaci-Paraná, Jamari e Machado.',
          'O Rio Madeira nasce no Oceano Atlântico e corre em direção aos Andes bolivianos.',
          'O Rio Madeira é de águas pretas e ácidas como o Rio Negro, sem carregar sedimentos andinos.',
          'O Rio Machado (Ji-Paraná) deságua diretamente na Baía de Guanabara no Rio de Janeiro.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Geografia Física',
        comment: 'Gabarito: A. O Madeira nasce da junção do Mamoré e do Beni, caracterizando-se por águas brancas/barrentas ricas em sedimentos andinos, recebendo importantes afluentes em RO (Guaporé, Abunã, Jaci-Paraná, Jamari, Machado). Erro da B: o rio corre no sentido sul-norte/nordeste em direção ao Rio Amazonas; erro da C: o Madeira tem águas brancas/barrentas; erro da D: o Machado deságua no Rio Madeira em Calama.'
      },
      {
        q: '[Autoral] Ao confrontar a divisão administrativa oficial de Porto Velho com o Quadro de Vagas do Edital nº 25/2026 da SEMUSA (16 códigos de lotação de ACE), um candidato aprovado para o Código 342 (Calama) e outro aprovado para o Código 345 (Extrema de Rondônia) estarão alocados, respectivamente, em:',
        options: [
          'Um distrito do Baixo Madeira com acesso predominantemente fluvial e um distrito da Ponta do Abunã com acesso rodoviário pavimentado pela BR-364.',
          'Dois bairros urbanos contíguos do centro da cidade de Porto Velho.',
          'Duas ilhas oceânicas desabitadas no litoral sul de Rondônia.',
          'Dois distritos pertencentes administrativamente ao Estado do Amazonas sem vínculo com a SEMUSA.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Caso Prático ACE',
        comment: 'Gabarito: A. Calama situa-se no extremo norte fluvial do Baixo Madeira (confluência com o Machado), exigindo transporte hidroviário; Extrema localiza-se na Ponta do Abunã a mais de 300 km da sede, acessível pela BR-364. Erro da B: são distritos distantes da sede urbana; erro da C: Rondônia não possui litoral oceânico; erro da D: ambos integram o Município de Porto Velho e o edital da SEMUSA.'
      },
      {
        q: '[Autoral] A respeito da fundação do município vizinho de Santo Antônio do Rio Madeira e sua relação histórica com Porto Velho, é correto afirmar que:',
        options: [
          'Santo Antônio do Rio Madeira pertencia originariamente ao Estado de Mato Grosso e foi extinto na década de 1940, sendo seu território incorporado ao município de Porto Velho.',
          'Santo Antônio do Rio Madeira é a atual capital do Estado do Acre.',
          'Porto Velho foi criado como uma colônia penal militar de Santo Antônio no ano de 2010.',
          'Santo Antônio do Rio Madeira nunca existiu, tratando-se apenas de lenda folclórica rondoniense.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'História Regional',
        comment: 'Gabarito: A. Santo Antônio pertencia a Mato Grosso (polo inicial das primeiras tentativas da ferrovia no século XIX); Porto Velho surgiu em terras do Amazonas em 1907 como ponto de transbordo e porto mais navegável. Em 1945, Santo Antônio foi anexado a Porto Velho. Erro da B: a capital do Acre é Rio Branco; erro da C: Porto Velho foi criado em 1914; erro da D: foi município histórico real de Mato Grosso.'
      }
    ],
    flashcards: [
      [
        'Qual o ato legal de criação do Município de Porto Velho e a qual Estado ele pertencia originariamente?',
        'Criado pela Lei Estadual do Amazonas nº 757, de 02/10/1914 (instalado em 24/01/1915), tendo sido desmembrado do território de Humaitá/AM.'
      ],
      [
        'Quais foram os atos legais de criação do Território do Guaporé e do Estado de Rondônia?',
        'Território do Guaporé: Decreto-Lei nº 5.812 de 13/09/1943 (mudado para Rondônia pela Lei 2.731/1956); Estado de Rondônia: Lei Complementar nº 41 de 22/12/1981 (instalado em 04/01/1982).'
      ],
      [
        'Quais são os dados oficiais de população e área de Porto Velho segundo o Censo IBGE 2022?',
        'População residente de 460.434 habitantes e área territorial de 34.090,952 km² (maior capital do Brasil em área territorial), com densidade de 13,51 hab/km².'
      ]
    ],
    references: [
      ibge,
      {
        title: 'Prefeitura Municipal de Porto Velho — História e Administração',
        url: 'https://www.portovelho.ro.gov.br/pagina/a-cidade',
        section: 'Criação legal de 1914, instalação em 1915 e evolução territorial da capital.'
      },
      {
        title: 'Planalto — Lei Complementar Federal nº 41/1981',
        url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp41.htm',
        section: 'Criação do Estado de Rondônia e instalação de seus poderes constitucionais.'
      }
    ]
  },
  {
    id: 'atu_4',
    title: 'Cidadania, Direitos Fundamentais e Símbolos Cívicos Oficiais',
    theory: String.raw`### 1. Cidadania e Direitos Fundamentais na CF/88 (Art. 5º)
A cidadania plena engloba o gozo de direitos civis, políticos e sociais, bem como a fiscalização do poder público e o cumprimento de deveres de solidariedade comunitária.
- **Inviolabilidade do Domicílio e o Trabalho do ACE (Art. 5º, XI da CF/88)**:
  * O texto constitucional dispõe que *"a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial"*;
  * No cotidiano da vigilância entomológica, a visita domiciliar deve ocorrer no período diurno e mediante a permissão do morador. Havendo recusa obstinada ou imóveis fechados/abandonados com evidente risco sanitário à coletividade, o ingresso compulsório submete-se aos trâmites da legislação sanitária e, quando cabível, à expedição de ordem judicial autorizativa.

### 2. Soberania Popular e Mecanismos de Participação Direta (Art. 14 da CF/88)
A soberania popular é exercida pelo sufrágio universal e pelo voto direto e secreto, com valor igual para todos, e mediante três instrumentos clássicos de democracia semidireta:
1. **Plebiscito**: consulta popular convocada com **anterioridade** ao ato legislativo ou administrativo, convocando os cidadãos a aprovar ou rejeitar previamente a matéria proposta;
2. **Referendo**: consulta popular convocada com **posterioridade** à edição de uma lei ou ato estatal, para que o eleitorado ratifique (confirme) ou rejeite o texto normativo já elaborado;
3. **Iniciativa Popular**: prerrogativa dos cidadãos de subscrever e apresentar projetos de lei perante o Poder Legislativo (na esfera federal, exige-se subscrição de pelo menos 1% do eleitorado nacional, distribuído por pelo menos 5 Estados com não menos de 0,3% dos eleitores em cada um);
- **Alistamento Eleitoral e Voto**:
  * **Obrigatórios**: para os maiores de 18 anos e menores de 70 anos;
  * **Facultativos**: para os analfabetos, os maiores de 70 anos e os jovens de 16 e 17 anos.

### 3. Os Quatro Símbolos Nacionais do Brasil (Art. 13 da CF/88 e Lei nº 5.700/1971)
O Art. 13, § 1º da Constituição Federal estabelece taxativamente como os 4 símbolos oficiais da República Federativa do Brasil:
1. A **Bandeira Nacional**;
2. O **Hino Nacional**;
3. As **Armas Nacionais** (Brasão da República);
4. O **Selo Nacional**.
- *Pegadinha crucial da banca IBGP*: a **Língua Portuguesa** é o idioma oficial da República (*caput* do Art. 13), mas **NÃO** integra a lista dos quatro símbolos cívicos nacionais do § 1º.

### 4. Símbolos Oficiais do Estado de Rondônia (Lei Estadual nº 07/1981 e Art. 6º da CE/RO)
- **Bandeira Estadual**: projetada pelo desenhista e arquiteto **Sílvio Carvalho Feitosa** em 1981, na transição para Estado. Possui faixas inferiores verde e amarela convergindo em V, campo superior em azul celeste e, despontando no centro, uma imponente estrela branca de cinco pontas denominada **Muliphein** (representando o novo Estado no céu brasileiro);
- **Hino de Rondônia**: intitulado *"Céus de Rondônia"*, com letra do poeta **Joaquim Araújo Lima** e música do maestro **José de Mello e Silva**;
- **Armas e Selo do Estado**: símbolos heráldicos e autenticadores dos atos estaduais.

### 5. Símbolos Oficiais do Município de Porto Velho (Art. 3º da LOM)
Nos termos do Art. 3º da Lei Orgânica Municipal de Porto Velho, são símbolos do Município:
1. A **Bandeira Municipal**;
2. O **Brasão de Armas**;
3. O **Hino do Município** (*"Canto do Madeira"*), além de outros instituídos por lei municipal.
- *Iconografia Heráldica*: o Brasão e a Bandeira municipal trazem a representação estilizada das **Três Caixas d'Água** cilíndricas ("As Três Marias") e da locomotiva a vapor da Estrada de Ferro Madeira-Mamoré.`,
    summary: String.raw`Inviolabilidade do domicílio (Art. 5º, XI CF): entrada diurna com consentimento. Plebiscito é prévio; referendo é posterior. Os 4 símbolos nacionais são Bandeira, Hino, Armas e Selo (língua é idioma, não símbolo). Bandeira de RO: Sílvio Feitosa (estrela Muliphein). Bandeira de PVH: Três Marias e EFMM.

| Esfera Federativa | Base Constitucional / Legal | Símbolos Oficiais Previstos | Elementos e Autoria |
| --- | --- | --- | --- |
| **Nacional (Brasil)** | Art. 13, § 1º da CF/88 e Lei 5.700/1971. | **Bandeira, Hino, Armas e Selo** nacionais (4 símbolos). | O idioma português é a língua oficial (*caput*), não símbolo do § 1º. |
| **Estadual (Rondônia)** | Art. 6º da Constituição Estadual e Lei 07/81. | **Bandeira, Hino, Armas e Selo** de Rondônia. | Bandeira de **Sílvio Carvalho Feitosa** (estrela *Muliphein*); Hino *"Céus de Rondônia"*. |
| **Municipal (Porto Velho)** | Art. 3º da Lei Orgânica Municipal de PVH. | **Bandeira, Brasão e Hino** do Município. | Brasão destaca as **Três Caixas d'Água (Três Marias)** e a EFMM; Hino *"Canto do Madeira"*. |
| **Soberania Popular (Art. 14)** | Plebiscito, Referendo e Iniciativa Popular. | Voto obrigatório (18 a 70 anos); facultativo (16-17 anos, >70 e analfabetos). | Plebiscito consulta **antes**; referendo consulta **depois** do ato. |`,
    questions: [
      {
        q: '[Autoral] Nos termos do Art. 13, § 1º da Constituição Federal de 1988 e da Lei nº 5.700/1971, são expressamente enumerados como os quatro SÍMBOLOS NACIONAIS do Brasil:',
        options: [
          'A Bandeira Nacional, o Hino Nacional, as Armas Nacionais e o Selo Nacional.',
          'A Bandeira Nacional, a Língua Portuguesa, o Palácio do Planalto e a Moeda Real.',
          'O Hino Nacional, as Armas Nacionais, a Faixa Presidencial e o Voto Obrigatório.',
          'O Selo Nacional, o Brasão de Porto Velho, o Código Civil e a Estátua do Cristo Redentor.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Legislação Constitucional',
        comment: 'Gabarito: A. O Art. 13, § 1º da CF/88 estabelece textualmente: "São símbolos da República Federativa do Brasil a bandeira, o hino, as armas e o selo nacionais." A língua portuguesa é o idioma oficial (caput do art. 13), não compondo o rol de símbolos do § 1º. Erro da B: língua portuguesa é idioma oficial e moeda não é símbolo cívico; erro da C e D: incluem elementos estranhos ao texto constitucional.'
      },
      {
        q: '[Autoral] A Bandeira do Estado de Rondônia e o Hino Oficial do Estado (“Céus de Rondônia”) possuem como elementos históricos e autores oficiais, respectivamente:',
        options: [
          'Projeto de Sílvio Carvalho Feitosa (1981), com faixas verde e amarela, campo superior azul e a estrela branca Muliphein ao centro; e letra de Joaquim Araújo Lima com música de José de Mello e Silva.',
          'Desenho de Oscar Niemeyer sem estrelas; e composição lírica de Villa-Lobos cantada em latim.',
          'Bandeira monocromática preta; e hino sem letra composto por banda militar em 1500.',
          'Bandeira idêntica à do Estado de São Paulo; e letra de Castro Alves em homenagem à Bahia.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Símbolos Estaduais',
        comment: 'Gabarito: A. A bandeira de Rondônia foi idealizada por Sílvio Carvalho Feitosa na transição para Estado em 1981, apresentando a estrela Muliphein. O hino "Céus de Rondônia" tem letra de Joaquim Araújo Lima e melodia de José de Mello e Silva. Erro da B, C e D: trazem dados fictícios ou autores estranhos à heráldica rondoniense.'
      },
      {
        q: '[Autoral] Segundo o Art. 3º da Lei Orgânica do Município de Porto Velho, são símbolos oficiais do Município:',
        options: [
          'A Bandeira, o Brasão e o Hino do Município, figurando no escudo a representação estilizada das Três Caixas d\'Água e da ferrovia.',
          'Apenas a Moeda Municipal e o Livro de Ouro do Garimpo.',
          'Exclusivamente o Hino Nacional Brasileiro, sendo vedado ao Município possuir brasão ou hino próprio.',
          'O Brasão do Estado do Amazonas e a Bandeira da República da Bolívia.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Legislação Municipal',
        comment: 'Gabarito: A. O Art. 3º da LOM de Porto Velho estabelece expressamente a Bandeira, o Brasão e o Hino como símbolos municipais, destacando as Três Marias e a EFMM. Erro da B: municípios não cunham moeda; erro da C: a CF autoriza símbolos próprios aos municípios (art. 13, § 2º); erro da D: símbolos de outros entes.'
      },
      {
        q: '[Autoral] Nos termos do Art. 14 da Constituição Federal de 1988, a soberania popular é exercida pelo sufrágio universal e pelo voto direto e secreto, com valor igual para todos, e mediante três mecanismos clássicos de democracia semidireta: plebiscito, referendo e iniciativa popular. Sobre a distinção temporal entre plebiscito e referendo, assinale a afirmativa CORRETA:',
        options: [
          'O plebiscito é uma consulta popular prévia (convocada com anterioridade ao ato legislativo ou administrativo), enquanto o referendo é uma consulta posterior (para ratificar ou rejeitar ato já produzido).',
          'O plebiscito só pode ser realizado após a lei ter entrado em vigor há mais de 10 anos.',
          'O referendo é convocado antes do projeto ser redigido, e o plebiscito é um tribunal de exceção.',
          'Plebiscito e referendo são sinônimos perfeitos que designam exclusivamente a eleição de prefeitos.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Direitos Políticos',
        comment: 'Gabarito: A. Pelo Art. 14 da CF/88 e Lei 9.709/1998, o plebiscito é convocado previamente à criação do ato legislativo/administrativo; o referendo é convocado posteriormente para ratificar ou rejeitar lei ou ato já editado. Erro da B, C e D: distorcem o momento procedimental ou confundem com eleição ordinária.'
      },
      {
        q: '[Autoral] Em relação à inviolabilidade do domicílio no exercício das funções do Agente de Combate às Endemias (Art. 5º, XI da Constituição Federal de 1988), assinale a conduta constitucionalmente ADEQUADA do agente de campo:',
        options: [
          'O agente deve realizar a inspeção com o consentimento do morador durante o dia, não podendo invadir ou arrombar o domicílio sem autorização legal/judicial em caso de recusa.',
          'O agente tem o poder de derrubar portas e portões residenciais a qualquer hora da noite sem autorização judicial para borrifar inseticida.',
          'A residência deixa de ser asilo inviolável sempre que o agente suspeitar de um vaso de planta com água.',
          'O agente só pode ingressar em imóveis se estiver acompanhado de tropas das Forças Armadas da ONU.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Caso Prático ACE',
        comment: 'Gabarito: A. A casa é asilo inviolável (Art. 5º, XI). O ACE atua com o consentimento do morador no horário diurno. Em casos de imóveis abandonados ou recusa reiterada, a entrada compulsória sanitária exige procedimento legal específico e/ou ordem judicial. Erro da B e C: violam o Art. 5º, XI da CF/88; erro da D: não há necessidade nem cabimento de forças da ONU.'
      }
    ],
    flashcards: [
      [
        'A língua portuguesa é um dos quatro símbolos nacionais da República?',
        'Não. O Art. 13, caput da CF/88 declara a língua portuguesa como o idioma oficial; os quatro símbolos do § 1º são a Bandeira, o Hino, as Armas e o Selo nacionais.'
      ],
      [
        'Qual a diferença entre plebiscito e referendo no Art. 14 da Constituição Federal?',
        'O plebiscito é uma consulta popular convocada previamente à decisão legislativa; o referendo é convocado posteriormente para que o povo ratifique ou rejeite lei já elaborada.'
      ],
      [
        'Quais são os símbolos oficiais de Porto Velho e qual monumento consta em seu brasão?',
        'A Bandeira, o Brasão de Armas e o Hino municipal (Art. 3º LOM); seu brasão traz a imagem histórica das Três Caixas d\'Água (Três Marias) e da locomotiva da EFMM.'
      ]
    ],
    references: [
      {
        title: 'Presidência da República — Constituição Federal de 1988 (Art. 5º, 13 e 14)',
        url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm',
        section: 'Direitos fundamentais, símbolos nacionais e soberania popular.'
      },
      {
        title: 'Câmara Municipal de Porto Velho — Lei Orgânica Municipal',
        url: 'https://www.portovelho.ro.gov.br/uploads/docman/leiorganicadeportovelho.pdf',
        section: 'Art. 3º: Símbolos oficiais do Município de Porto Velho.'
      }
    ]
  },
  {
    id: 'atu_5',
    title: 'Geotecnologias, Reconhecimento Geográfico, Método Wolbachia e Vacina Qdenga',
    theory: String.raw`### 1. Geotecnologias, Navegação por Satélite (GNSS) e o Datum SIRGAS 2000
No monitoramento ambiental e na vigilância entomológica contemporânea do ACE, as geotecnologias são fundamentais para o mapeamento da distribuição vetorial:
- **GNSS (*Global Navigation Satellite System*)**: termo universal que engloba as constelações mundiais de satélites artificiais de navegação, incluindo o **GPS** (norte-americano), o **GLONASS** (russo), o **Galileo** (europeu) e o **BeiDou** (chinês).
- **Datum Geodésico Oficial**: no Brasil, o referencial geodésico oficial adotado pelo IBGE (Decreto nº 5.334/2005) é o **SIRGAS 2000** (Sistema de Referência Geocêntrico para as Américas 2000). A configuração correta do datum nos aparelhos GNSS/tablets de campo do ACE assegura compatibilidade cartográfica com as bases de dados municipais e federais.

### 2. Modelos de Dados em SIG na Vigilância em Saúde: Vetorial vs Matricial (Raster)
Um Sistema de Informações Geográficas (SIG) organiza o espaço através de dois modelos principais:
1. **Modelo Vetorial**: representa feições geométricas discretas ligadas a uma tabela de atributos alfanuméricos:
   - **Ponto** ($x, y$): posição exata de focos de larvas, ovitrampas de monitoramento, Pontos Estratégicos (PE) e domicílios com casos notificados no SINAN;
   - **Linha**: arruamentos, rotas operacionais diárias do agente, valas de drenagem urbana e trechos de igarapés;
   - **Polígono**: áreas fechadas que delimitam quarteirões sanitários, bairros, setores censitários, estratos do LIRAa e zonas de raio de bloqueio químico (150 m ou 300 m).
2. **Modelo Matricial (Raster)**: grade regular de células (pixels) em que cada pixel armazena um valor quantitativo:
   - Imagens de satélite orbitais (Sentinel, Landsat) e ortofotos de alta resolução capturadas por **Drones (VANTs)**, ferramentas inovadoras adotadas pela vigilância em Porto Velho para fiscalizar caixas-d'água destampadas em lajes, calhas obstruídas e piscinas em imóveis desocupados ou de difícil acesso;
   - Mapas de densidade de Kernel ("mapas de calor" para identificação de *clusters* de transmissão de arboviroses).

### 3. Normas Técnicas de Campo do Reconhecimento Geográfico (RG) pelo ACE
O Reconhecimento Geográfico (RG) é a atividade cartográfica prioritária e contínua do ACE, normatizada pelo Ministério da Saúde:
- Elaboração e atualização contínua de croquis cadastrais dos quarteirões;
- **Numeração Padronizada dos Quarteirões**: a numeração deve sempre se iniciar no **vértice superior esquerdo (noroeste)** do mapa da localidade, progredindo a numeração sistematicamente no **sentido horário**;
- **Pontos Estratégicos (PE)**: imóveis que contêm depósitos volumosos de risco ou que recebem grande circulação de pessoas e materiais (borracharias, ferros-velhos, cemitérios, garagens de ônibus, cooperativas de reciclagem). Devem ser cadastrados e inspecionados com periodicidade obrigatória **quinzenal** pelo ACE.

### 4. Monitoramento Remoto na Amazônia: PRODES vs DETER (INPE)
- **PRODES**: taxa anual oficial consolidada de desmatamento por corte raso na Amazônia Legal (ano Prodes: agosto a julho); instrumento de alta precisão para planejamento de longo prazo;
- **DETER**: sistema diário de alertas de alteração de cobertura florestal com alta frequência temporal, destinado a subsidiar a fiscalização rápida em campo pelos órgãos de proteção ambiental (IBAMA e SEDAM/RO).

### 5. Inovação Biotecnológica: O Método Wolbachia (Fiocruz / WMP)
- **Mecanismo Biológico**: mosquitos *Aedes aegypti* recebem a bactéria intracelular natural *Wolbachia pipientis* (presente em 60% dos insetos na natureza, mas ausente no *Aedes* selvagem). Ao colonizar as células do inseto, a bactéria compete por lipídios e nutrientes essenciais com os vírus da Dengue, Zika, Chikungunya e Febre Amarela, bloqueando a replicação viral no organismo do mosquito.
- **Herança Materna e Incompatibilidade Citoplasmática**: fêmeas portadoras de Wolbachia transmitem a bactéria para 100% de seus descendentes. Quando machos com Wolbachia cruzam com fêmeas selvagens (sem Wolbachia), os ovos resultantes tornam-se inférteis.
- **Biossegurança**: o método **NÃO é transgênico** (não há alteração no DNA do mosquito) e a bactéria não infecta humanos nem animais vertebrados, mantendo-se de forma autossustentável no ecossistema local.

### 6. Vacina Tetravalente contra a Dengue: Qdenga (TAK-003) no SUS
- **Composição e Esquema**: vacina tetravalente com vírus vivo atenuado (sorotipos DENV-1, 2, 3 e 4) incorporada pela CONITEC ao SUS em dezembro de 2023. É administrada por via subcutânea em **2 doses**, com intervalo estrito de **3 meses (90 dias)**.
- **Público Prioritário no SUS**: crianças e adolescentes de 10 a 14 anos em municípios com alta carga de transmissão viral.
- **Contraindicações Absolutas**: gestantes, lactantes (mulheres que amamentam), indivíduos com imunodeficiência congênita ou adquirida e histórico de hipersensibilidade grave a componentes da fórmula.`,
    summary: String.raw`SIRGAS 2000 é o datum oficial do Brasil (IBGE). Modelo Vetorial: Ponto (foco), Linha (rua), Polígono (quarteirão). No RG, quarteirões numeram-se do vértice superior esquerdo no sentido horário; Pontos Estratégicos têm visita quinzenal. Wolbachia não é transgênico e bloqueia vírus no mosquito. Qdenga tem 2 doses (intervalo 3 meses) e contraindica gestantes.

| Inovação / Geotecnologia | Definição e Princípio | Aplicação Prática no Trabalho do ACE | Ponto Crítico da Banca IBGP |
| --- | --- | --- | --- |
| **Datum SIRGAS 2000** | Sistema de Referência Geocêntrico para as Américas adotado pelo IBGE. | Coleta de coordenadas precisas com GNSS/tablets em vistorias de campo. | Não utilizar data descontinuados (Córrego Alegre ou SAD 69). |
| **SIG Vetorial vs Matricial** | **Vetorial**: Ponto, Linha, Polígono; **Matricial (Raster)**: grade de pixels. | **Ponto**: ovitrampa/PE; **Linha**: rua/rota; **Polígono**: quarteirão/bloqueio; **Raster**: drone/calor. | Não confundir pontos discretos com grades contínuas de pixels. |
| **Reconhecimento Geográfico (RG)** | Atualização de croquis cadastrais de quarteirões e imóveis. | Iniciar numeração no canto **superior esquerdo no sentido horário**; PEs inspecionados **quinzenalmente**. | Garantir padronização cartográfica nas equipes municipais. |
| **Método Wolbachia (Fiocruz)** | Bactéria natural intracelular *Wolbachia* no *Aedes aegypti*. | Bloqueia a transmissão dos vírus da Dengue, Zika e Chikungunya pelo vetor. | **Não é transgênico**; herdado por via materna; seguro para humanos. |
| **Vacina Qdenga (TAK-003)** | Vacina tetravalente com vírus vivo atenuado no SUS. | Esquema obrigatório de **2 doses com intervalo de 3 meses (90 dias)** para 10 a 14 anos. | **Contraindicada** para gestantes, lactantes e imunossuprimidos. |`,
    questions: [
      {
        q: '[Autoral] No trabalho de Reconhecimento Geográfico (RG) desenvolvido pelo ACE na SEMUSA Porto Velho, utiliza-se a tecnologia GNSS para a coleta de coordenadas espaciais. De acordo com as normas do IBGE, o sistema geodésico de referência oficial do Brasil é o:',
        options: [
          'SIRGAS 2000 (Sistema de Referência Geocêntrico para as Américas 2000).',
          'Córrego Alegre de 1920.',
          'Datum de Greenwich de 1884.',
          'SAD 69 (South American Datum 1969), que substituiu definitivamente o SIRGAS 2000 em 2024.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Geotecnologias',
        comment: 'Gabarito: A. O SIRGAS 2000 é o datum oficial do Brasil desde 2005 (Decreto nº 5.334/2005 e Resolução IBGE nº 1/2005). Erro da B e D: Córrego Alegre e SAD 69 são data legados já descontinuados como padrão oficial; erro da C: meridiano de Greenwich é referência de longitude, não datum geodésico geocêntrico brasileiro.'
      },
      {
        q: '[Autoral] Em um Sistema de Informações Geográficas (SIG) utilizado pela vigilância ambiental para mapeamento de vetores, as feições espaciais correspondentes a um foco de mosquito, a uma vala de drenagem urbana e à área total de um quarteirão sanitário são modeladas no formato vetorial, respectivamente, por:',
        options: [
          'Ponto, linha e polígono.',
          'Polígono, ponto e pixel.',
          'Pixel, matriz e tabela.',
          'Linha, ponto e voxel.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Caso Prático ACE',
        comment: 'Gabarito: A. No modelo vetorial de SIG: coordenadas pontuais (focos, ovitrampas, PEs) são Pontos; feições lineares unidimensionais (ruas, valas, rios, rotas) são Linhas; áreas bidimensionais fechadas (quarteirões, bairros, estratos) são Polígonos. Erro da B, C e D: invertem as primitivas ou misturam com o modelo matricial/raster (pixel).'
      },
      {
        q: '[Autoral] Durante a atualização do croquis de Reconhecimento Geográfico (RG) de uma localidade, as normas técnicas do Ministério da Saúde orientam que a numeração dos quarteirões deve ser iniciada:',
        options: [
          'No canto superior esquerdo (noroeste) do croquis, progredindo a numeração sistematicamente no sentido horário.',
          'No centro exato do mapa, em espiral no sentido anti-horário.',
          'Em ordem aleatória determinada por sorteio diário entre os moradores.',
          'De baixo para cima, numerando apenas os quarteirões que possuem comércios.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Normas Técnicas ACE',
        comment: 'Gabarito: A. Pelo manual de Reconhecimento Geográfico do Ministério da Saúde, a numeração dos quarteirões inicia-se no vértice superior esquerdo (noroeste) do mapa/croquis e avança no sentido horário, garantindo padronização cadastral. Erro da B, C e D: contrariam a norma técnica oficial de cartografia epidemiológica.'
      },
      {
        q: '[Autoral] Em relação à inovação biotecnológica do Método Wolbachia aplicada no controle das arboviroses urbanas (Dengue, Zika e Chikungunya), assinale a afirmativa CORRETA:',
        options: [
          'Os mosquitos Aedes aegypti são inoculados com a bactéria intracelular natural Wolbachia pipientis, que reduz a replicação viral no vetor, sendo o método autossustentável por herança materna e não transgênico.',
          'Trata-se de um mosquito transgênico modificado com DNA de peixes árticos para esterilizar fêmeas de abelhas nativas.',
          'A bactéria Wolbachia é altamente infecciosa e fatal para seres humanos quando transmitida pela picada do mosquito.',
          'O método consiste em aplicar antibióticos clorados na água das torneiras domésticas de toda a cidade.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Inovações em Saúde',
        comment: 'Gabarito: A. O Método Wolbachia (Fiocruz/WMP) não envolve transgenia: a bactéria natural Wolbachia impede a replicação dos vírus no Aedes e é transmitida às novas gerações de mosquitos pelas fêmeas, sem risco a humanos. Erro da B: não é transgênico; erro da C: Wolbachia não infecta humanos nem vertebrados; erro da D: não utiliza antibióticos em redes de água.'
      },
      {
        q: '[Autoral] Sobre a vacina Qdenga (TAK-003) incorporada ao Sistema Único de Saúde (SUS) contra a Dengue, é correto afirmar:',
        options: [
          'É uma vacina tetravalente com vírus vivo atenuado, administrada em esquema de 2 doses com intervalo de 3 meses, sendo contraindicada para gestantes e pessoas imunossuprimidas.',
          'É uma vacina de dose única obrigatória para recém-nascidos no primeiro dia de vida.',
          'É uma vacina intramuscular formulada exclusivamente contra o vírus da febre aftosa bovina.',
          'A vacina pode ser administrada livremente em mulheres grávidas em qualquer estágio gestacional por não conter vírus atenuado.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Imunização e SUS',
        comment: 'Gabarito: A. A vacina Qdenga protege contra os 4 sorotipos da dengue (tetravalente atenuada), aplicada em 2 doses subcutâneas com intervalo de 3 meses (90 dias); por ser de vírus vivo atenuado, é formalmente contraindicada para gestantes, lactantes e imunossuprimidos. Erro da B: exige 2 doses com intervalo de 3 meses; erro da C: combate a dengue humana; erro da D: contraindicada em gestantes.'
      }
    ],
    flashcards: [
      [
        'Qual o datum geodésico oficial do Brasil e sua importância no trabalho do ACE?',
        'O SIRGAS 2000 (Sistema de Referência Geocêntrico para as Américas 2000), adotado oficialmente pelo IBGE para compatibilizar dados cartográficos e de geolocalização no SUS.'
      ],
      [
        'Qual a norma de numeração de quarteirões no Reconhecimento Geográfico (RG) do Ministério da Saúde?',
        'A numeração inicia-se no canto superior esquerdo (noroeste) do mapa e progride sequencialmente no sentido horário.'
      ],
      [
        'Qual é o esquema posológico da vacina Qdenga no SUS e sua principal contraindicação clínica?',
        'Esquema de 2 doses com intervalo de 3 meses (90 dias) por via subcutânea; é contraindicada para gestantes, lactantes e indivíduos com imunodeficiência grave por conter vírus atenuado.'
      ]
    ],
    references: [
      {
        title: 'Fiocruz / World Mosquito Program — Método Wolbachia',
        url: 'https://portal.fiocruz.br/noticia/metodo-wolbachia-estrategia-inovadora-no-combate-arboviroses',
        section: 'Bactéria Wolbachia, transmissão materna, bloqueio viral e segurança ambiental.'
      },
      {
        title: 'Ministério da Saúde / CONITEC — Incorporação da Vacina Qdenga no SUS',
        url: 'https://www.gov.br/saude/pt-br/assuntos/noticias/2023/dezembro/ministerio-da-saude-incorpora-vacina-contra-a-dengue-ao-sus',
        section: 'Esquema vacinal de 2 doses com intervalo de 3 meses e contraindicações.'
      },
      {
        title: 'INPE — Monitoramento de Desmatamento na Amazônia (PRODES e DETER)',
        url: 'https://www.gov.br/inpe/pt-br/acesso-a-informacao/perguntas-frequentes/principais-produtos-e-servicos-do-inpe/monitoramento-do-territorio-florestas/como-se-monitora-o-desmatamento',
        section: 'Diferenças metodológicas entre taxa anual consolidada (PRODES) e alertas (DETER).'
      }
    ]
  },
  {
    id: 'atu_6',
    title: 'Usinas Hidrelétricas do Madeira, Saneamento Básico e Matriz dos 15 Distritos',
    theory: String.raw`### 1. Complexo Hidrelétrico do Rio Madeira: UHE Santo Antônio e UHE Jirau
A implantação das duas megausinas hidrelétricas no Rio Madeira em Porto Velho reconfigurou a hidrodinâmica fluvial, a ocupação territorial e o perfil ecoepidemiológico da capital:
- **Modelo Operacional a Fio d'Água (*Run-of-the-River*)**: as UHEs Santo Antônio e Jirau utilizam turbinas tipo bulbo de eixo horizontal, concebidas para operar com grande volume de vazão e baixa queda d'água. Esse modelo não possui grandes reservatórios de acumulação plurianual, dependendo diretamente da vazão fluvial sazonal do Madeira.
- **Alterações Hidrodinâmicas e Impactos Vetoriais**:
  * Formação de remansos e áreas de refluxo fluvial calmo nas margens, criando condições favoráveis para o mosquito-prego (*Anopheles darlingi*), vetor primário da malária na Amazônia;
  * Expansão de enseadas de remanso com grande proliferação de macrófitas aquáticas flutuantes (especialmente o aguapé *Eichhornia crassipes*).

### 2. Ecologia Vetorial Específica: O Mosquito Mansonia e Macrófitas Aquáticas
- **Respiração Submersa e Sifão Modificado**: as larvas e pupas de mosquitos do gênero *Mansonia* possuem uma adaptação morfológica singular: o sifão respiratório é pontiagudo e denteado em serra, perfurando o aerênquima das raízes submersas das plantas aquáticas flutuantes para retirar o oxigênio interno da planta.
- **Desafio no Controle pelo ACE**: como as larvas de *Mansonia* não sobem à lâmina superficial d'água para respirar o ar atmosférico, **larvicidas biológicos de dispersão na película superficial (como o Bti comum) são ineficazes**. O controle vetorial eficaz exige necessariamente o manejo físico, remoção mecânica e destinação adequada das macrófitas aquáticas flutuantes nos espelhos d'água.

### 3. Marco Legal do Saneamento Básico (Lei nº 14.026/2020) e a Vulnerabilidade Sanitária de Porto Velho
- **Metas de Universalização da Lei nº 14.026/2020**: até 31 de dezembro de 2033, 99% da população brasileira deve ter acesso a água potável tratada e 90% a coleta e tratamento de esgoto sanitário.
- **Déficit Histórico em Porto Velho**: diagnósticos oficiais do SNIS e do Instituto Trata Brasil indicam que Porto Velho possui menos de 10% de cobertura de coleta e tratamento de esgoto, além de intermitência severa no abastecimento público de água tratada.
- **Conexão Direta com os Criadouros de Vetores (LIRAa)**:
  * A falta de água contínua encanada obriga os moradores a armazenarem água potável em tambores, tonéis, camburões e caixas baixas no piso, configurando os **Depósitos do Tipo A2**, que historicamente lideram os índices de criadouros de *Aedes aegypti* na capital;
  * A ausência de rede coletora de esgoto perpetua valas negras a céu aberto e fossas rudimentares, multiplicando pernilongos *Culex quinquefasciatus* e atraindo roedores sinantrópicos (*Rattus norvegicus*), elevando os riscos de contaminação por leptospirose em períodos chuvosos.

### 4. Matriz Territorial Completa dos 15 Distritos Rurais e Ribeirinhos de Porto Velho (Códigos SEMUSA nº 25/2026: 341 a 356)
A vasta extensão territorial de Porto Velho (34.090,952 km²) organiza-se em três eixos de atuação prioritária do ACE:

1. **Eixo BR-364 / Ponta do Abunã (Acesso Rodoviário Pavimentado Contínuo)**:
   - **Jaci-Paraná (Cód. 347/346)**: a ~90 km da sede pela BR-364 sentido Acre; banhado pelo Rio Jaci-Paraná; polo comercial dinâmico; foco de arboviroses urbanas (*Aedes*) e malária na orla fluvial.
   - **Nova Mutum Paraná (Cód. 351/341)**: a ~110 km da sede pela BR-364; cidade planejada construída pelo consórcio da UHE Jirau para reassentamento; vigilância em bairros ordenados e na margem do reservatório hidrelétrico.
   - **Abunã (Cód. 347/341)**: a ~215 km da sede pela BR-364; confluência dos rios Abunã e Madeira (Ponte do Abunã inaugurada em 2021); antiga estação ferroviária da EFMM; divisa com a Bolívia e Acre; vigilância de malária ribeirinha e febre amarela.
   - **Vista Alegre do Abunã (Cód. 356/345)**: a ~260 km da sede (km 1000 da BR-364); rápido crescimento agropecuário e madeireiro; controle intensivo de depósitos A2 em borracharias e oficinas.
   - **Extrema de Rondônia (Extrema) (Cód. 345/343)**: a ~325 km da sede pela BR-364; principal centro urbano e financeiro da Ponta do Abunã; divisa imediata com o Acre; agências bancárias e comércio forte; risco de surtos epidêmicos de Dengue com múltiplos sorotipos.
   - **Nova Califórnia (Cód. 351/344)**: a ~360 km da sede no extremo oeste rondoniense (divisa com Acrelândia/AC); referência agroflorestal internacional com o Projeto RECA (agroflorestas); vigilância de malária residual e leishmaniose tegumentar em ramais.

2. **Eixo Rural / Bacia Leiteira e Conflito Ambiental (Acesso Rodoviário Não Pavimentado / Misto)**:
   - **União Bandeirantes (Cód. 355/342/348)**: a ~160 km da sede (BR-364 até km 90 + rodovia estadual RO-490 em terra batida); distrito gigantesco e polo da bacia leiteira; entorno da TI Karipuna e FLONA Bom Futuro; estradas de difícil tráfego no inverno amazônico; alta incidência de leishmaniose tegumentar americana (LTA) por flebotomíneos e acidentes ofídicos.
   - **Rio Pardo (Cód. 352/349)**: a ~170 km da sede por estradas vicinais precárias de terra na região da FLONA Bom Futuro; área de forte pressão agropastoril e clareiras de desmatamento; busca ativa de lâminas de malária de clareira e vigilância de zoonoses.

3. **Eixo Fluvial do Baixo Madeira (Acesso Fluvial Predominante / Exclusivo a Jusante)**:
   - **São Carlos do Jamari (São Carlos) (Cód. 354/350/352)**: a ~1h30 em voadeira rápida ou ~4h em barco de linha descendo o Madeira; foz do Rio Jamari; distrito mais antigo e polo de saúde do Baixo Madeira (Unidade Mista de Saúde); visitas de barco de palafita em palafita e borrifação residual intradomiciliar.
   - **Nazaré (Cód. 353/350/351)**: a ~2h em voadeira ou ~5h em barco de linha; comunidade tradicional cabocla e afro-amazônica de pescadores e extrativistas de açaí; controle de malária na vazante (poças marginais), instalação de mosquiteiros impregnados (MILDs) e cloração de água potável.
   - **Calama (Cód. 354/342/352)**: a ~6h a 8h em voadeira rápida ou ~15h em barco de linha recreio; extremo norte de Porto Velho na confluência do Madeira com o Machado (Ji-Paraná), divisa com o Amazonas (Humaitá/Manicoré); polo pesqueiro e comercial secular; malária autóctone contínua e controle sanitário em barcos interestaduais.
   - **Cujubim Grande (Cód. 344/353)**: a ~35 km da sede; acesso misto (fluvial pelo Madeira ou terrestre em estrada de chão na estiagem); olarias tradicionais com cavas de argila que se transformam em criadouros de mosquitos.
   - **Terra Caída (Cód. 354)**: a ~3h em voadeira a jusante; comunidade vulnerável ao fenômeno geomorfológico das "terras caídas" (desbarrancamento violento das margens na vazante); realocação contínua de moradias e cloração de água potável.
   - **Papagaios (Cód. 355)**: a ~3h30 em voadeira rápida; ambiente de ilhas fluviais e várzea do Rio Madeira; agricultura familiar e pesca; busca ativa de febris de malária e prevenção da Febre do Oropouche.
   - **Demarcação (Cód. 356)**: a ~7h a 9h em voadeira rápida; ponto extremo norte na calha do Rio Machado; área remota atendida por operações conjuntas com a Unidade Básica de Saúde Fluvial (UBSF) da SEMUSA.`,
    summary: String.raw`UHE Santo Antônio e Jirau operam a fio d'água (turbinas bulbo), gerando remansos com Anopheles e macrófitas com Mansonia (cujas larvas respiram perfurando raízes, resistindo a larvicidas de superfície). Saneamento em PVH tem <10% de esgoto e intermitência de água, criando depósitos A2. Os 15 distritos dividem-se em Ponta do Abunã (BR-364), Bacia Leiteira (RO-490) e Baixo Madeira (fluvial).

| Eixo Territorial / Tema | Distritos / Usinas / Leis | Perfil Operacional e de Acesso | Desafio Entomológico e Sanitário do ACE |
| --- | --- | --- | --- |
| **UHEs Santo Antônio e Jirau** | Usinas a fio d'água no Rio Madeira com turbinas tipo bulbo. | Remansos marginais e enseadas com macrófitas aquáticas flutuantes. | *Anopheles darlingi* (malária) e mosquitos *Mansonia* (controle por retirada física de macrófitas). |
| **Saneamento e LIRAa** | Marco Legal (Lei 14.026/2020); <10% de esgoto em Porto Velho. | Abastecimento intermitente de água leva ao acúmulo doméstico. | Multiplicação de **Depósitos Tipo A2** (tambores e tonéis no chão) com larvas de *Aedes aegypti*. |
| **Eixo BR-364 / Ponta do Abunã** | Jaci-Paraná, Nova Mutum, Abunã, Vista Alegre, Extrema e Nova Califórnia. | Acesso rodoviário pavimentado contínuo (90 km a 360 km da sede). | Arboviroses urbanas (*Aedes*), Leishmaniose Tegumentar em ramais e vigilância em fronteiras. |
| **Eixo Rural / Bacia Leiteira** | União Bandeirantes e Rio Pardo. | Estradas de terra precárias (lama no inverno amazônico); entorno de TIs e FLONA. | Leishmaniose Tegumentar Americana (flebotomíneos), malária em clareiras e acidentes com animais peçonhentos. |
| **Eixo Baixo Madeira (Fluvial)** | São Carlos, Nazaré, Calama, Cujubim Grande, Terra Caída, Papagaios e Demarcação. | Acesso fluvial exclusivo a jusante (1h30 a 9h em voadeiras; barcos de linha). | Malária ribeirinha, isolamento em secas extremas, MILDs e atuação com UBS Fluvial. |`,
    questions: [
      {
        q: '[Autoral] As Usinas Hidrelétricas de Santo Antônio e Jirau, instaladas no Rio Madeira em Porto Velho, utilizam o modelo operacional a fio d\'água com turbinas tipo bulbo. Do ponto de vista ambiental e entomológico, a implantação dessas usinas provocou alterações caracterizadas pelo(a):',
        options: [
          'Aumento de remansos propícios à proliferação do mosquito Anopheles darlingi (malária) e formação de enseadas com macrófitas aquáticas onde se desenvolvem larvas do mosquito Mansonia.',
          'Eliminação definitiva e total de todos os mosquitos e insetos da bacia amazônica.',
          'Formação de reservatórios com profundidade de 2.000 metros e extinção da vazante fluvial.',
          'Desaparecimento completo das águas do Rio Madeira por evaporação atômica nas turbinas.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Ambiente e Vetores',
        comment: 'Gabarito: A. As UHEs a fio d\'água criam remansos e enseadas que favorecem anofelinos nas margens e mosquitos Mansonia associados a macrófitas aquáticas flutuantes (como o aguapé). Erro da B, C e D: hipóteses absurdas sem respaldo biológico ou hidrológico.'
      },
      {
        q: '[Autoral] Em relação à biologia e ao controle de larvas do mosquito do gênero Mansonia em reservatórios hidrelétricos e represas, assinale a particularidade técnica CORRETA:',
        options: [
          'As larvas e pupas de Mansonia perfuram as raízes de macrófitas aquáticas para respirar o ar de seus tecidos internos, de modo que larvicidas biológicos de ação superficial são ineficazes, exigindo o manejo físico das plantas aquáticas.',
          'As larvas de Mansonia respiram exclusivamente na superfície livre da água e morrem com qualquer sabão neutro.',
          'O mosquito Mansonia é o vetor exclusivo da doença de Chagas nas matas ciliares.',
          'As pupas de Mansonia transformam-se em pequenos peixes predadores de larvas de Aedes.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Biologia Vetorial',
        comment: 'Gabarito: A. O sifão respiratório adaptado de larvas e pupas de Mansonia fixa-se nas raízes de plantas aquáticas flutuantes (macrófitas) para extrair oxigênio submerso. Por isso, larvicidas que atuam na película superficial não surtem efeito, demandando a remoção física das macrófitas. Erro da B: não dependem da película superficial; erro da C: doença de Chagas é transmitida por triatomíneos (barbeiros); erro da D: são insetos dípteros, não peixes.'
      },
      {
        q: '[Autoral] O Marco Legal do Saneamento Básico (Lei Federal nº 14.026/2020) estabelece metas de universalização de 99% de água potável e 90% de coleta e tratamento de esgoto até 2033. Em Porto Velho, o déficit histórico de esgotamento sanitário (menos de 10% de cobertura) e a intermitência no fornecimento de água afetam diretamente o trabalho do ACE ao:',
        options: [
          'Estimular o armazenamento de água doméstica em tambores e caixas baixas no chão (Depósitos do Tipo A2), que concentram criadouros de Aedes aegypti, além de esgoto a céu aberto favorecendo roedores e leptospirose.',
          'Eliminar qualquer risco de dengue ou leptospirose em todo o perímetro urbano.',
          'Substituir a necessidade de visitas do ACE por robôs submarinos municipais.',
          'Impedir a reprodução de insetos em recipientes artificiais.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Saneamento e Saúde',
        comment: 'Gabarito: A. A precariedade do saneamento e abastecimento de água induz as famílias a estocar água em tonéis/tambores (depósitos A2 do LIRAa), principais focos de Aedes na cidade, enquanto esgoto a céu aberto atrai roedores (leptospirose). Erro da B e D: a precariedade sanitária amplifica e não elimina os riscos vetoriais; erro da C: o trabalho do ACE é presencial e essencial.'
      },
      {
        q: '[Autoral] Um Agente de Combate às Endemias designado para atuar no distrito de Nova Califórnia (Código 351) e outro designado para São Carlos do Jamari (Código 354) vivenciarão desafios de deslocamento e perfis territoriais distintos. Sobre esses dois distritos de Porto Velho, assinale a afirmativa CORRETA:',
        options: [
          'Nova Califórnia situa-se no extremo oeste do Eixo da BR-364 (divisa com o Acre) com acesso rodoviário pavimentado contínuo; enquanto São Carlos localiza-se no Baixo Madeira a jusante da capital, com acesso predominantemente fluvial pelo Rio Madeira.',
          'São Carlos possui linha de metrô de superfície diária e Nova Califórnia só pode ser acessada de canoa a remo.',
          'Ambos os distritos ficam na orla da Praia de Santos no litoral paulista.',
          'Nova Califórnia e São Carlos são bairros centrais a 50 metros da sede da Prefeitura de Porto Velho.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Distritos de Porto Velho',
        comment: 'Gabarito: A. Nova Califórnia situa-se a cerca de 360 km da sede na BR-364 sentido Acre (polo agroflorestal do RECA); São Carlos situa-se a jusante no Rio Madeira, acessível por barco/voadeira no Baixo Madeira. Erro da B, C e D: trazem informações geográficas e logísticas incorretas.'
      },
      {
        q: '[Autoral] No distrito rural de União Bandeirantes (situado a cerca de 160 km de Porto Velho, com acesso pela BR-364 e pela rodovia estadual RO-490 em leito natural de terra batida), as características epidemiológicas e os desafios operacionais do ACE no período chuvoso (“inverno amazônico”) envolvem principalmente:',
        options: [
          'Extensas linhas e ramais rurais com tráfego prejudicado por lamaçal e atoleiros, com vigilância voltada à leishmaniose tegumentar em áreas de desmatamento/fronteira agrícola, além de malária e acidentes com animais peçonhentos.',
          'Apenas vistorias em apartamentos de edifícios de 40 andares servidos por helipontos.',
          'Nenhuma necessidade de visita do ACE por ser uma área desprovida de vegetação ou moradias humanas.',
          'Inexistência de chuvas durante os meses de dezembro a março.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Caso Prático ACE',
        comment: 'Gabarito: A. União Bandeirantes é polo leiteiro com grande malha de estradas vicinais (linhas e ramais); no inverno amazônico as estradas de terra tornam-se de difícil trafegabilidade; a proximidade com a FLONA Bom Futuro e TI Karipuna exige vigilância intensiva de leishmaniose tegumentar (flebotomíneos), malária e ofidismo. Erro da B: trata-se de distrito rural agropastoril e não de metrópole verticalizada; erro da C e D: possui grande população residente e o inverno amazônico é marcado por chuvas torrenciais.'
      }
    ],
    flashcards: [
      [
        'Qual o modelo de operação das UHEs Santo Antônio e Jirau no Rio Madeira e quais turbinas utilizam?',
        'Operam no modelo a fio d\'água (run-of-the-river), sem grandes reservatórios de acumulação plurianual, empregando turbinas tipo bulbo de eixo horizontal.'
      ],
      [
        'Por que larvicidas biológicos de dispersão na película superficial da água falham contra larvas de Mansonia?',
        'Porque as larvas e pupas de Mansonia não sobem à superfície para respirar; possuem sifão modificado que perfura as raízes submersas de macrófitas aquáticas (como o aguapé), absorvendo o oxigênio interno da planta.'
      ],
      [
        'Quais são os 3 grandes eixos de deslocamento dos 15 distritos rurais e ribeirinhos de Porto Velho?',
        '1) Eixo BR-364 / Ponta do Abunã (rodoviário pavimentado); 2) Eixo Rural / Bacia Leiteira (RO-490 em terra batida / ramais); 3) Eixo Baixo Madeira (transporte fluvial exclusivo pelo Rio Madeira a jusante).'
      ]
    ],
    references: [
      {
        title: 'Instituto Trata Brasil — Ranking do Saneamento Básico nas 100 Maiores Cidades',
        url: 'https://tratabrasil.org.br/ranking-do-saneamento-2024/',
        section: 'Indicadores de esgotamento sanitário e abastecimento em Porto Velho frente à Lei 14.026/2020.'
      },
      {
        title: 'ANEEL / IBAMA — Estudos Ambientais das UHEs Santo Antônio e Jirau',
        url: 'https://www.gov.br/ibama/pt-br/assuntos/foco-ambiental/hidreletricas',
        section: 'Modelo a fio d\'água, turbinas tipo bulbo, macrófitas e monitoramento entomológico do Madeira.'
      },
      ibge
    ]
  }
];
