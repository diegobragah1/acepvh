import type { DeepeningEntry } from './types';
const ibge = {title:'IBGE — Porto Velho',url:'https://www.ibge.gov.br/cidades-e-estados/ro/porto-velho.html',section:'População, território e indicadores; observar o ano de cada medida.'};
export const gerais: DeepeningEntry[] = [
  {
    id:'atu_1',title:'Atualidades com contexto: clima, economia e escalas de análise',
    theory:`## Um fato precisa de data, lugar e consequência
Atualidades não se resumem a nomes de autoridades. Para cada notícia, identifique o acontecimento, quando ocorreu, onde produziu efeitos, quais instituições atuaram e qual relação existe com o conteúdo do programa. O recorte “últimos cinco anos” deve seguir o marco temporal indicado pelo edital; não deve ser convertido automaticamente em uma lista fixa e eterna.

## Caso nacional: enchentes de 2024
As enchentes de 2024 no Rio Grande do Sul provocaram impactos humanos, urbanos e econômicos, com interrupção de serviços e necessidade de reconstrução. Para estudar, separe evento meteorológico, exposição e vulnerabilidade. Chuva intensa é um fenômeno físico; ocupação de áreas suscetíveis, infraestrutura e capacidade de resposta ajudam a explicar por que os danos são diferentes entre populações.

## Caso amazônico: secas de 2023–2024
As secas na Amazônia afetaram circulação fluvial e abastecimento em diferentes áreas. Uma consequência importante para a análise regional é a dependência de rios para deslocamento e acesso a serviços. Não se deve concluir que todos os municípios amazônicos foram atingidos no mesmo grau nem transformar um nível de rio medido em uma estação em medida de toda a bacia.

## Caso internacional sediado no Brasil
Belém sediou a COP30 em novembro de 2025. O tema permite relacionar mitigação, adaptação e financiamento climático. **Mitigação** procura reduzir causas do aquecimento, como emissões; **adaptação** busca reduzir impactos e vulnerabilidades. Uma conferência produzir decisões não significa que todas as medidas nacionais e locais já estejam implementadas.

## Economia: nível e variação
Inflação mede variação de preços de uma cesta e período definidos. Redução da taxa de inflação não significa, por si, que todos os preços caíram. Se uma taxa positiva passa de 6% para 4%, há desaceleração do crescimento dos preços, não redução automática do nível geral ao patamar anterior. Em indicadores, confira taxa mensal, acumulado no ano e doze meses antes de comparar.

Os fatos acima foram selecionados como casos datados para estudo. Para notícias posteriores, preserve o mesmo método: fonte, data do evento, data da publicação, recorte territorial e distinção entre anúncio e execução.`,
    summary:'Estude fatos datados com causas, instituições e impactos. Enchentes, secas e COP30 conectam clima, infraestrutura e políticas. Inflação menor não significa preços menores. Não confunda anúncio com execução.',
    questions:[
      {q:'[Autoral] Uma inflação anual positiva passa de 6% para 4%. Isso significa necessariamente que:',options:['Todos os preços caíram.', 'A velocidade de crescimento do nível de preços diminuiu no recorte do indicador.', 'O nível de preços retornou ao do ano anterior.', 'A inflação deixou de medir variações.'],ans:1,comment:'A taxa positiva menor representa desaceleração. Não implica queda generalizada nem recomposição de preços anteriores.'},
      {q:'[Autoral] Reforçar a capacidade de uma comunidade enfrentar enchentes é exemplo de:',options:['Adaptação aos impactos climáticos.', 'Eliminação automática de todas as emissões.', 'Uma medida sem relação com vulnerabilidade.', 'Garantia de que não haverá chuva.'],ans:0,comment:'Adaptação reduz danos e vulnerabilidade. Mitigação atua sobre causas do aquecimento; nenhuma das medidas garante ausência de eventos meteorológicos.'},
    ],flashcards:[['Mitigação e adaptação são sinônimos?', 'Não. Mitigação atua sobre causas do aquecimento; adaptação reduz vulnerabilidade e impactos.'],['Taxa de inflação menor é preço menor?', 'Não necessariamente. Pode indicar apenas crescimento mais lento dos preços.']],references:[
      {title:'Agência Brasil — enchentes do RS, retrospectiva de 2025',url:'https://agenciabrasil.ebc.com.br/geral/noticia/2025-05/um-ano-das-enchentes-no-rs-do-caos-lenta-reconstrucao',section:'Evento de maio de 2024 e consequências.'},
      {title:'Cemaden — secas de 2023–2024',url:'https://www.gov.br/cemaden/pt-br/assuntos/noticias-cemaden/cemaden-analisa-secas-recentes-no-brasil-e-apresenta-diagnostico-e-projecoes-como-subsidio-para-a-cop-16/',section:'Diagnóstico dos eventos recentes de seca.'},
      {title:'MMA — COP30',url:'https://www.gov.br/mma/pt-br/assuntos/cop30/cop30/',section:'Conferência em Belém em novembro de 2025; temas de adaptação e mitigação.'},
      {title:'IBGE — IPCA',url:'https://www.ibge.gov.br/estatisticas/economicas/precos-e-custos/9256-ipca.html',section:'O que é; períodos de referência e séries.'},
    ],
  },
  {
    id:'atu_2',title:'Patrimônio, memória e movimentos culturais em Rondônia',
    theory:`## Cultura não é só um monumento
Cultura envolve modos de viver, criar, expressar e transmitir conhecimentos. Patrimônio cultural pode incluir bens materiais, como edifícios e acervos, e referências imateriais, como saberes, celebrações e formas de expressão. A classificação não mede superioridade: um prédio não vale mais que um saber apenas por ser material.

## Madeira-Mamoré como objeto histórico
O patrimônio ferroviário de Porto Velho permite estudar transporte, trabalho, migrações e transformações urbanas. Sua preservação não deve apagar conflitos, condições de vida dos trabalhadores e participação de diferentes grupos. A história não se resume à data de inauguração ou ao nome de um empreendimento.

## Flor do Maracujá e circulação cultural
O Arraial Flor do Maracujá reúne manifestações como quadrilhas e bois-bumbás, com continuidade e recriação ao longo de suas edições. Uma tradição pode incorporar elementos novos e continuar reconhecida pelos seus participantes. Cultura popular não é uma peça imóvel do passado: há transmissão entre gerações, organização comunitária, trabalho artístico e circulação econômica.

## Povos e identidades
Não trate todos os povos indígenas como um grupo homogêneo nem use ribeirinho, quilombola e indígena como categorias intercambiáveis. Cada trajetória envolve relações com território, língua, memória e direitos. A análise cultural deve nomear grupos e práticas quando a fonte os identifica, evitando generalizações que apagam diferenças.

## Movimento artístico e contexto
Renascimento, Barroco, Modernismo e manifestações contemporâneas são recortes que precisam ser relacionados a contextos de produção, linguagens e debates. Um movimento não se identifica por um único adjetivo. Em questões comparativas, observe mudança de formas, diálogo com tradições e relação com o público, em vez de concluir que todo artista de um período segue um modelo idêntico.

## Caso resolvido
Um enunciado diz que preservar patrimônio significa proibir qualquer uso social e manter silêncio sobre conflitos históricos. A conclusão é inadequada. Preservação pode articular conservação, pesquisa, acesso e educação patrimonial; suas condições concretas dependem dos instrumentos de proteção. Um evento cultural frequentado pela comunidade também pode ser objeto de estudo, sem precisar ser convertido em monumento físico.`,
    summary:'Patrimônio inclui dimensões materiais e imateriais. Madeira-Mamoré articula memória do trabalho e cidade; Flor do Maracujá articula tradição e recriação. Grupos culturais não são homogêneos. Preservação e uso social exigem análise.',
    questions:[
      {q:'[Autoral] Uma celebração transmitida entre gerações exemplifica potencialmente patrimônio:',options:['Apenas mineral.', 'Imaterial.', 'Necessariamente sem valor histórico.', 'Que deixa de ser cultural se sofrer qualquer mudança.'],ans:1,comment:'Celebrações e saberes podem constituir referências imateriais. Tradições podem ser recriadas; imaterial não significa ausência de suporte físico ou de história.'},
      {q:'[Autoral] Estudar a Madeira-Mamoré de forma historicamente contextualizada exige considerar:',options:['Somente uma data isolada.', 'Transporte, trabalhadores, migrações e transformação urbana.', 'A inexistência de participação social.', 'Que patrimônio só pode ser estudado sem acesso público.'],ans:1,comment:'A contextualização relaciona o bem aos processos históricos e sociais. Datas ajudam, mas não substituem interpretação das relações e experiências.'},
    ],flashcards:[['Material e imaterial indicam hierarquia de valor?', 'Não. São dimensões e instrumentos de reconhecimento diferentes.'],['Tradição cultural pode mudar?', 'Sim. Transmissão e recriação podem coexistir.']],references:[{title:'Iphan — patrimônio ferroviário de Rondônia',url:'https://www.gov.br/iphan/pt-br/superintendencias/rondonia/patrimonio-ferroviario',section:'Madeira-Mamoré e formação urbana.'},{title:'Governo de Rondônia — Flor do Maracujá',url:'https://rondonia.ro.gov.br/portal/flordomaracuja/',section:'Quadrilhas, bois-bumbás e manifestações do evento.'}],
  },
  {
    id:'atu_3',title:'Porto Velho: história administrativa e leitura de indicadores',
    theory:`## Três datas respondem a perguntas diferentes
Criação legal, instalação administrativa e desenvolvimento de um núcleo urbano não são o mesmo evento. No caso de Porto Velho, a criação municipal em 1914 e a instalação em 1915 precisam ser distinguidas. A formação vinculada à Madeira-Mamoré integra o contexto urbano, mas não substitui a identificação do ato administrativo pedido na questão.

O Território Federal do Guaporé foi criado em 1943 e passou a denominar-se Rondônia em 1956. A criação do Estado pela LC 41 ocorreu em 1981, com instalação em 1982. Dizer apenas “Rondônia começou em 1981” apaga etapas territoriais e a história das populações que já viviam na região.

## Município não é apenas sua sede
Porto Velho compreende áreas urbanas e rurais, com diferentes formas de ocupação e acesso. A sede é a cidade de Porto Velho; o município é a unidade territorial e administrativa mais ampla. Distâncias, rios e infraestrutura ajudam a explicar custos e dificuldades de prestação de serviços.

## População, estimativa e densidade
O IBGE informa 460.434 pessoas para Porto Velho no Censo 2022. Esse número pertence ao recenseamento e a sua data de referência. Uma estimativa de outro ano não “corrige automaticamente” o censo como se ambos fossem a mesma observação. A metodologia e o período precisam acompanhar o dado.

Densidade demográfica é população dividida pela área considerada. Um município extenso pode apresentar baixa densidade média e, simultaneamente, bairros densamente ocupados. A média municipal não descreve a distribuição interna nem a acessibilidade de todas as comunidades.

## Economia e relações espaciais
Atividades econômicas, circulação fluvial, transporte rodoviário e oferta de serviços organizam o território. Ao interpretar um mapa, separe limite municipal, bacia hidrográfica e área de influência de um serviço: as três delimitações podem não coincidir.

Em comparação de indicadores, mantenha unidade, ano e território. Não combine uma população de um ano com área de outra delimitação sem explicar o procedimento. A conclusão deve respeitar a escala: um indicador de Rondônia não pode ser apresentado como se medisse apenas Porto Velho.`,
    summary:'Criação e instalação são distintas: município 1914/1915; Estado 1981/1982. Censo 2022 e estimativa de outro ano não são a mesma medida. Densidade média não descreve distribuição interna.',
    questions:[
      {q:'[Autoral] Uma questão pede a instalação de Porto Velho. Qual cuidado é necessário?',options:['Usar criação e instalação como sinônimos.', 'Distinguir a criação municipal de 1914 da instalação de 1915.', 'Responder obrigatoriamente 1981.', 'Ignorar o objeto do enunciado.'],ans:1,comment:'Criação legal e instalação administrativa são marcos distintos. 1981 relaciona-se à criação do Estado, não à instalação do município.'},
      {q:'[Autoral] Baixa densidade demográfica média do município permite afirmar que:',options:['Todos os bairros têm ocupação igualmente baixa.', 'Não existem áreas urbanas densas.', 'A população é pequena em relação à área total, sem descrever toda a distribuição interna.', 'Não há necessidade de transporte fluvial.'],ans:2,comment:'A média resulta da razão população/área. Não informa, por si, concentração em bairros, dispersão rural ou modalidade de transporte.'},
    ],flashcards:[['Município e sede são a mesma coisa?', 'Não. A sede integra um território municipal mais amplo.'],['Censo e estimativa anual são intercambiáveis?', 'Não. Cada dado deve manter metodologia e ano de referência.']],references:[ibge,{title:'Prefeitura — história da cidade',url:'https://www.portovelho.ro.gov.br/pagina/a-cidade',section:'Criação/instalação e transformação do Território em Estado; conferir o ato legal quando houver divergência de transcrição.'}],
  },
  {
    id:'atu_4',title:'Cidadania em prática e distinção entre símbolos oficiais',
    theory:`## Cidadania envolve participação e direitos
Cidadania não se limita ao voto. Inclui acesso a direitos, participação na vida pública, fiscalização de políticas e respeito aos direitos de outras pessoas. Direitos civis, políticos e sociais relacionam-se, mas têm objetos distintos: liberdade e garantias individuais, participação no poder e condições sociais de vida são dimensões que não se reduzem umas às outras.

## Participação em decisões
Plebiscito consulta antes de uma decisão política nas condições legais; referendo submete um ato já produzido à manifestação popular. Iniciativa popular permite apresentar proposta nos requisitos constitucionais e legais, mas não significa aprovação automática. O momento e o efeito do mecanismo distinguem as alternativas.

## Caso resolvido: reclamar e fiscalizar
Uma comunidade identifica dificuldade de acesso a visitas e apresenta informações ao serviço e aos canais de participação. Isso pode constituir exercício de cidadania e controle social. Relatar um problema não prova sozinho uma infração, mas produz uma demanda que precisa ser tratada nos mecanismos competentes. Participar exige também cuidado com dados e respeito aos envolvidos.

## Símbolos em escalas diferentes
A Constituição reconhece como símbolos da República a bandeira, o hino, as armas e o selo nacionais. Estados e municípios podem ter símbolos próprios. O brasão municipal não se transforma em símbolo nacional apenas porque representa uma capital. A Lei Orgânica de Porto Velho trata de bandeira, hino e brasão do município; a análise precisa respeitar essa escala.

O idioma oficial e os símbolos aparecem próximos no art. 13 da Constituição, mas não são a mesma categoria normativa. Em questões, leia se o comando pede língua oficial, símbolo nacional ou símbolo local.

## Identidade sem exclusão
Reconhecer símbolos e patrimônio pode fortalecer memória coletiva, mas não exige apagar a diversidade cultural. Uma política de saúde atende pessoas com diferentes origens, formas de expressão e condições de vida. Respeito aos símbolos, participação pública e proteção de direitos devem ser analisados dentro do Estado democrático, sem tratar divergência legítima como ausência automática de cidadania.`,
    summary:'Cidadania vai além de votar. Plebiscito antecede; referendo sucede. Iniciativa popular não aprova automaticamente a proposta. Bandeira, hino, armas e selo são nacionais; Porto Velho tem símbolos próprios.',
    questions:[
      {q:'[Autoral] Uma consulta popular anterior à decisão, nas condições legais, corresponde a:',options:['Referendo.', 'Plebiscito.', 'Nomeação.', 'Fiscalização sanitária.'],ans:1,comment:'Plebiscito é prévio; referendo submete decisão/ato já produzido à apreciação. Momento e efeito distinguem os institutos.'},
      {q:'[Autoral] Qual conjunto corresponde aos símbolos nacionais indicados na Constituição?',options:['Somente bandeira e moeda.', 'Bandeira, hino, armas e selo nacionais.', 'Prefeito, governador e presidente.', 'Somente o brasão de Porto Velho.'],ans:1,comment:'O art. 13, §1º, enumera bandeira, hino, armas e selo. Símbolos locais têm escala própria e não substituem essa enumeração.'},
    ],flashcards:[['Qual diferença de momento entre plebiscito e referendo?', 'Plebiscito é prévio; referendo é posterior ao ato ou decisão a submeter à consulta.'],['Iniciativa popular é aprovação automática?', 'Não. É mecanismo de apresentação de proposta sujeito ao processo e requisitos legais.']],references:[{title:'Constituição — portal oficial',url:'https://www4.planalto.gov.br/legislacao/portal-legis/legislacao-1/constituicao',section:'Arts. 13 e 14: símbolos e soberania popular.'},{title:'Prefeitura — Lei Orgânica',url:'https://www.portovelho.ro.gov.br/uploads/docman/leiorganicadeportovelho.pdf',section:'Art. 3º: símbolos municipais.'}],
  },
  {
    id:'atu_5',title:'Geotecnologias e avaliação de notícias científicas',
    theory:`## Coordenada não é análise territorial completa
GNSS designa sistemas de navegação por satélite; GPS é um deles. Uma posição precisa ser acompanhada de sistema de referência e qualidade de medição para ser utilizada corretamente. Um mapa de pontos de visitas mostra localização, mas não explica sozinho por que existem concentrações de risco.

Um SIG combina dados espaciais e atributos para consulta e análise. Representações vetoriais usam pontos, linhas e polígonos; representações matriciais usam uma grade de células. Um ponto pode representar imóvel, uma linha pode representar trecho de rota e um polígono pode delimitar área de atuação. O significado vem do dado e de sua legenda, não apenas da forma gráfica.

## Caso de mapa enganoso
Dois bairros apresentam 20 registros cada. No primeiro, foram realizadas 100 inspeções; no segundo, 400. Um mapa de contagens pode mostrar igualdade, mas as proporções são 20% e 5%. A interpretação precisa considerar o denominador e a cobertura. Cor intensa não equivale automaticamente a maior risco individual.

## Sensoriamento remoto: alerta e taxa
O PRODES e o DETER têm objetivos e métodos distintos. No monitoramento da Amazônia, o PRODES produz a taxa anual de desmatamento por corte raso, enquanto o DETER fornece alertas para apoiar fiscalização. Cobertura de nuvens e oportunidade de detecção influenciam os registros. Um alerta detectado em determinado mês não é necessariamente um evento que começou naquele mês.

## Ciência, inovação e evidência
Ao ler notícia sobre nova tecnologia, diferencie teste em laboratório, estudo de campo, registro regulatório, incorporação a uma política e uso efetivo. Esses estágios não são equivalentes. Uma redução observada em um estudo não garante o mesmo resultado em todo território sem considerar implementação e contexto.

## Aplicação multitemática
Economia, educação, segurança e saúde também usam indicadores e pesquisas. Confira quem produziu o dado, qual população foi observada, em que período e com qual método. Resultado de amostra não é contagem censitária, e correlação entre duas curvas não demonstra, sozinha, causalidade. A prudência analítica permite avaliar notícias sem rejeitar nem aceitar toda inovação por entusiasmo.`,
    summary:'GPS integra GNSS; SIG analisa dados e atributos. Contagens precisam de denominador. PRODES mede taxa anual; DETER alerta fiscalização. Estudo, registro, incorporação e implementação são estágios diferentes.',
    questions:[
      {q:'[Autoral] Qual comparação entre DETER e PRODES é adequada?',options:['São nomes de produtos idênticos.', 'DETER fornece alertas; PRODES produz taxa anual no monitoramento correspondente.', 'Todo alerta equivale à taxa mensal oficial.', 'Nuvens nunca interferem na detecção.'],ans:1,comment:'Os produtos têm objetivos e métodos diferentes. O INPE alerta para não tratar os registros de alerta como taxa mensal de desmatamento.'},
      {q:'[Autoral] Dois bairros têm 20 registros, com 100 e 400 inspeções. Quais são as proporções?',options:['20% e 5%.','20% e 20%.','5% e 20%.','100% e 400%.'],ans:0,comment:'20/100=20%; 20/400=5%. A igualdade dos numeradores não implica igualdade de proporções; ainda se deve avaliar o que e como foi inspecionado.'},
    ],flashcards:[['Todo ponto no mapa representa a mesma qualidade de informação?', 'Não. Precisão, referência, cobertura e definição do registro importam.'],['Uma correlação demonstra causalidade?', 'Não por si. É preciso investigar mecanismos, desenho do estudo e explicações alternativas.']],references:[{title:'INPE — monitoramento do desmatamento',url:'https://www.gov.br/inpe/pt-br/acesso-a-informacao/perguntas-frequentes/principais-produtos-e-servicos-do-inpe/monitoramento-do-territorio-florestas/como-se-monitora-o-desmatamento',section:'Finalidades de PRODES e DETER.'},{title:'INPE — DETER',url:'https://www.gov.br/inpe/pt-br/area-conhecimento/unidade-amazonia/projetos-e-pesquisas/deter',section:'Diferença entre ocorrência e detecção; limitações de comparação e uso de alertas.'}],
  },
  {
    id:'atu_6',title:'Realidade socioambiental amazônica: raciocínio integrado por território',
    theory:`## Uma cadeia de relações, não uma causa única
A realidade de Porto Velho e Rondônia deve ser estudada relacionando história de ocupação, atividades econômicas, circulação, ambiente e acesso a direitos. Uma mesma transformação pode gerar oportunidades para alguns grupos e custos para outros. Por isso, perguntar apenas se um empreendimento é “bom” ou “ruim” empobrece a análise: examine quem é afetado, em que dimensão e com quais alternativas.

## Caso resolvido: estiagem e acesso a serviços
Uma comunidade depende de transporte fluvial. A estiagem dificulta deslocamentos, altera o tempo de viagem e pode afetar abastecimento. Uma política de saúde precisa considerar continuidade de insumos, comunicação e possibilidade de acesso. O evento físico não produz os mesmos efeitos em toda população; vulnerabilidade e infraestrutura modulam o impacto.

No estudo das secas de 2023–2024, relacione o monitoramento climático a essas condições. Não transforme uma situação observada em um ponto do rio em afirmação sobre todas as localidades, nem atribua todo problema a uma única variável sem avaliar outras condições.

## Economia e indicadores sociais
Crescimento de uma atividade econômica não comprova automaticamente melhora de todos os indicadores sociais. A distribuição de renda, a qualidade dos serviços e as condições ambientais precisam ser examinadas. PIB per capita é uma média econômica; não corresponde ao salário recebido por cada morador. Do mesmo modo, um indicador municipal não descreve todas as diferenças entre distritos e bairros.

## História e diversidade
A expansão urbana e as redes de transporte dialogam com trajetórias indígenas, ribeirinhas, migratórias e de trabalhadores. A Madeira-Mamoré é uma entrada para essa análise, mas não esgota a história regional. Cultura e território não se reduzem a monumentos ou ciclos econômicos; incluem formas de vida e relações de pertencimento.

## Síntese de uma resposta bem fundamentada
Ao analisar um caso, escreva: fato e data; população e território; mecanismo plausível; evidência; limite da conclusão; resposta pública pertinente. “Aumentou o número de registros” exige perguntar se houve mais eventos ou melhor detecção. “Cresceu a economia” exige perguntar o que cresceu e quem se beneficiou. Esse procedimento integra os eixos do programa sem substituir estudo dos fatos por opiniões gerais.`,
    summary:'Relacione ambiente, infraestrutura, circulação e desigualdades. Impactos variam entre populações. PIB per capita não é salário individual. Escala, data e mecanismo sustentam uma análise socioambiental.',
    questions:[
      {q:'[Autoral] A estiagem afeta duas comunidades de forma diferente. Qual explicação é mais consistente?',options:['Todo evento ambiental produz danos idênticos.', 'Infraestrutura, exposição e dependência do transporte podem diferenciar impactos.', 'Diferenças sociais nunca importam.', 'Nenhuma política pública pode considerar vulnerabilidade.'],ans:1,comment:'O mesmo fenômeno interage com condições sociais e territoriais distintas. A análise deve considerar exposição, vulnerabilidade e capacidade de resposta.'},
      {q:'[Autoral] O PIB per capita de um município indica necessariamente:',options:['O salário exato de cada morador.', 'Uma média econômica que não descreve a distribuição individual de renda.', 'Que todos têm a mesma renda.', 'Que não existe desigualdade interna.'],ans:1,comment:'PIB per capita divide uma medida de produção pelo total populacional. Não representa a renda de cada pessoa e não elimina diferenças internas.'},
    ],flashcards:[['Por que escala territorial importa?', 'Um indicador estadual ou municipal pode ocultar desigualdades entre localidades e populações.'],['O que uma boa análise de caso explicita?', 'Fato/data, população/território, mecanismo, evidência, limite e resposta pertinente.']],references:[ibge,{title:'Cemaden — secas e impactos de 2023–2024',url:'https://www.gov.br/cemaden/pt-br/assuntos/noticias-cemaden/cemaden-analisa-secas-recentes-no-brasil-e-apresenta-diagnostico-e-projecoes-como-subsidio-para-a-cop-16/',section:'Diagnóstico da seca e impactos; aplicações territoriais deste complemento são estudos de caso autorais.'},{title:'Iphan — patrimônio ferroviário',url:'https://www.gov.br/iphan/pt-br/superintendencias/rondonia/patrimonio-ferroviario',section:'Formação histórica e patrimônio de Porto Velho.'}],
  },
];
