import type { DeepeningEntry } from './types';
const cf = {title:'Constituição Federal — portal oficial de legislação',url:'https://www4.planalto.gov.br/legislacao/portal-legis/legislacao-1/constituicao',section:'Arts. 196 a 200; casos de aplicação autorais.'};
const los = {title:'Lei 8.080/1990 — Planalto',url:'https://www.planalto.gov.br/ccivil_03/leis/l8080.htm',section:'Arts. 2º a 7º, 8º a 18: objetivos, organização e competências do SUS.'};
const agents = {title:'Lei 11.350/2006 — Planalto',url:'https://planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11350.htm',section:'Arts. 2º, 2º-A, 3º, 4º e 4º-A; observar as alterações e o marco temporal do edital.'};
const pnab = {title:'PNAB — Portaria 2.436/2017',url:'https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prt2436_22_09_2017.html',section:'Arts. 1º a 3º e anexo: processo de trabalho e integração da atenção básica com a vigilância.'};
const pnvs = {title:'CNS — Resolução 588/2018',url:'https://bvsms.saude.gov.br/bvs/saudelegis/cns/2018/res0588_13_08_2018.html',section:'Arts. 2º e 3º: integração das vigilâncias e atuação territorial.'};

export const especificos: DeepeningEntry[] = [
  {
    id:'esp_1',title:'Direito à saúde aplicado: universalidade, integralidade e rede',
    theory:`## Do direito ao funcionamento do serviço
O art. 196 relaciona o direito à saúde tanto à redução de riscos quanto ao acesso às ações de promoção, proteção e recuperação. Isso impede reduzir a saúde pública ao atendimento de quem já está doente. O saneamento, a informação e a prevenção dialogam com o direito à saúde, ainda que envolvam outros setores da administração.

O art. 198 organiza a rede e apresenta diretrizes como descentralização, atendimento integral e participação da comunidade. **Descentralizar** não significa que cada município possa ignorar a articulação do sistema; **integralidade** não significa que toda unidade execute todos os procedimentos. A rede articula diferentes pontos de atenção, conforme as necessidades e os serviços disponíveis.

## Caso resolvido: encaminhamento não elimina responsabilidade
Uma pessoa procura uma unidade com necessidade de avaliação que demanda outro serviço. A unidade que encaminha não deve tratar o encaminhamento como abandono. O caso ajuda a distinguir três ideias: acesso inicial, referência para um serviço adequado e continuidade do cuidado. Se o fluxo exige transporte e informação entre equipes, planejar essas etapas integra a organização da rede.

Não se conclui, a partir desse caso, que qualquer pessoa possa exigir qualquer procedimento em qualquer unidade e a qualquer momento. Universalidade diz respeito ao direito de acesso; a organização concreta considera necessidade, prioridade, regulação e capacidade da rede.

## Iniciativa privada: dois planos
O art. 199 permite a assistência à saúde pela iniciativa privada e prevê participação complementar no SUS nas condições ali descritas. Atuar no setor privado e atuar complementarmente no SUS não são situações idênticas. Em questão de prova, descubra se o enunciado está tratando de liberdade de prestar assistência ou de integração contratual com o sistema público.

## Competência ampla do SUS
O art. 200 inclui vigilância, saúde do trabalhador, formação de recursos humanos e participação em saneamento, entre outras atribuições. Assim, uma alternativa que diga “o SUS atua exclusivamente em hospitais” exclui campos expressamente previstos. Ao revisar artigos com emendas, use a redação aplicável ao marco temporal do edital; um texto histórico com alterações riscadas não deve ser lido como se todas as versões vigorassem simultaneamente.`,
    summary:'Saúde abrange reduzir riscos e prestar cuidado. Rede articula pontos de atenção; integralidade não exige tudo em cada unidade. Assistência privada e participação complementar no SUS são planos distintos.',
    questions:[
      {q:'[Autoral] Uma unidade encaminha uma pessoa para avaliação especializada. Qual conclusão respeita a organização em rede?',options:['Integralidade exige todos os procedimentos em cada unidade.','O encaminhamento deve integrar um fluxo que preserve a continuidade do cuidado.','O SUS se limita ao atendimento hospitalar.','A referência elimina qualquer necessidade de comunicação entre serviços.'],ans:1,comment:'A rede organiza pontos com funções diferentes e exige articulação. Integralidade não equivale a concentrar todo procedimento em uma unidade nem a abandonar o usuário após o encaminhamento.'},
      {q:'[Autoral] O art. 196 permite reduzir saúde pública apenas ao tratamento de pessoas já doentes?',options:['Sim, pois prevenção não integra saúde.','Sim, pois políticas sociais são irrelevantes.','Não, pois também trata de redução de riscos e promoção e proteção.','Não, porque proíbe toda assistência privada.'],ans:2,comment:'O artigo abrange políticas de redução de riscos e acesso a promoção, proteção e recuperação. A existência de assistência privada é tratada em outro plano pelo art. 199.'},
    ],flashcards:[['Integralidade significa tudo em cada unidade?','Não. A rede deve articular as ações necessárias nos pontos adequados.'],['O SUS atua apenas em hospitais?','Não. Inclui vigilâncias, atenção básica e outras atribuições previstas constitucionalmente.']],references:[cf],
  },
  {
    id:'esp_2',title:'Controle social e gestão: conselho, conferência e comissões',
    theory:`## Separe as funções institucionais
A Lei 8.080 organiza campos de atuação e competências do sistema. A Lei 8.142 disciplina participação da comunidade e transferências de recursos. Para comparar instituições, pergunte quem participa, com qual finalidade e com que periodicidade. Nomes parecidos não asseguram funções equivalentes.

O **Conselho de Saúde** tem caráter permanente e deliberativo e atua na formulação de estratégias e no controle da execução da política, inclusive nos aspectos econômicos e financeiros. A **Conferência de Saúde** reúne-se ordinariamente a cada quatro anos para avaliar a situação e propor diretrizes. A lei admite convocação extraordinária; por isso, “só pode acontecer a cada quatro anos” é formulação excessiva.

## Paridade calculada
A Lei 8.142 estabelece representação dos usuários paritária em relação ao conjunto dos demais segmentos. Em um exemplo com 24 assentos, essa relação corresponde a 12 para usuários e 12 para os demais, considerados em conjunto. A lei não está dizendo que usuários, gestores, prestadores e trabalhadores devem receber quatro parcelas iguais de 25%.

## Caso resolvido: formular diretrizes não é gerir a folha
Uma conferência propõe priorizar comunidades com dificuldade de acesso. A proposta orienta a formulação de políticas, mas não transforma a conferência em órgão executor de todas as despesas. O conselho acompanha e delibera nos limites legais; a gestão executa e presta contas. Participação da comunidade complementa o sistema de controles, sem apagar as competências dos demais órgãos.

## Pactuação e controle social
Comissões intergestores constituem espaços de articulação entre gestores. Não devem ser confundidas com conselhos de saúde, nos quais há representação social. Uma pergunta sobre pactuação entre entes federados exige identificar essa natureza; outra sobre participação de usuários exige olhar o conselho e a conferência.

Nos exercícios sobre transferência financeira, não memorize apenas “fundo a fundo”. Examine também requisitos, finalidade, planejamento e mecanismos de acompanhamento previstos na legislação. Uma transferência de recurso não comprova, sozinha, que uma ação foi executada nem que os resultados esperados foram alcançados.`,
    summary:'Conselho é permanente e deliberativo; conferência avalia e propõe diretrizes, ordinariamente a cada quatro anos. Paridade dos usuários é em relação ao conjunto dos demais. Pactuação de gestores não é controle social.',
    questions:[
      {q:'[Autoral] Em um conselho hipotético de 24 assentos, quantos correspondem aos usuários na paridade prevista pela Lei 8.142?',options:['6','8','12','24'],ans:2,comment:'Usuários ocupam metade em relação ao conjunto dos demais segmentos: 12 e 12. Dividir todos os segmentos em quatro parcelas iguais não expressa essa paridade.'},
      {q:'[Autoral] Qual afirmação distingue corretamente conselho e conferência?',options:['Ambos só existem no ano da conferência.','O conselho é permanente; a conferência reúne-se ordinariamente a cada quatro anos.','A conferência é a única gestora da folha de pessoal.','As comissões intergestores substituem a representação dos usuários.'],ans:1,comment:'A Lei 8.142 diferencia o caráter permanente do conselho e a reunião ordinária da conferência. Admite conferências extraordinárias e não transfere toda a execução administrativa a esses colegiados.'},
    ],flashcards:[['Qual é a paridade dos usuários?','Metade dos assentos em relação ao conjunto dos demais segmentos.'],['Comissão intergestores é conselho de saúde?','Não. Pactuação entre gestores e participação/controle social têm composições e finalidades distintas.']],references:[los,{title:'Lei 8.142/1990 — Câmara dos Deputados',url:'https://www2.camara.leg.br/legin/fed/lei/1990/lei-8142-28-dezembro-1990-366031-publicacaooriginal-1-pl.html',section:'Art. 1º, §§ 1º a 5º: conselho, conferência e paridade.'}],
  },
  {
    id:'esp_3',title:'Atribuições, requisitos e evolução legal: como não misturar regimes',
    theory:`## Leis modificadoras e texto consolidado
As Leis 13.595/2018 e 13.708/2018 alteraram a Lei 11.350/2006. Para estudar, acompanhe a redação incorporada a cada artigo, distinguindo texto vigente e histórico. A lei modificadora explica de onde veio a mudança; o texto consolidado permite localizar a regra no conjunto. A denominação Lei Ruth Brilhante consta na Lei 11.350, incluída pela Lei 14.799/2024; não deve ser atribuída automaticamente a toda alteração anterior.

## ACS e ACE: integração sem identidade completa
O ACS atua com referência à atenção básica e ao vínculo com a comunidade. O ACE desenvolve vigilância, prevenção e controle de doenças e promoção da saúde, conforme a legislação e supervisão. Há ações compartilhadas, mas isso não elimina as atribuições específicas. Em uma questão que descreva pesquisa entomológica, é necessário identificar a atividade e sua base legal, sem concluir que ambos os cargos têm requisitos idênticos em todos os pontos.

## Atividade típica e atividade assistida
A lei distingue atividades típicas e ações realizadas em caráter excepcional com assistência de profissional de nível superior e estrutura adequada. Participar de determinada ação assistida não confere autorização geral para diagnosticar doenças ou prescrever medicamentos. Leia o verbo empregado: identificar suspeita e encaminhar não equivale a confirmar diagnóstico clínico.

## Caso resolvido: suspeita durante a visita
Durante uma visita, um agente observa relato de febre e identifica situação compatível com a definição operacional de suspeita trabalhada pela equipe. O percurso adequado envolve orientar o acesso ao serviço, comunicar a situação ao responsável e registrar conforme o fluxo. A confirmação e o manejo clínico dependem da avaliação profissional competente. Isso articula a vigilância com a assistência, sem substituir uma pela outra.

## Vínculo, jornada e remuneração
Separe requisito de ingresso, atribuição profissional, organização da jornada e composição remuneratória. Um certificado de curso não prova sozinho que todos os requisitos de ingresso foram cumpridos. Da mesma forma, piso constitucional, vencimento básico e gratificações locais não são conceitos idênticos. Valores e vantagens exigem combinar a norma federal, a norma local aplicável e a data de referência da questão.`,
    summary:'Leia as alterações dentro da Lei 11.350. ACS e ACE compartilham ações, mas não são cargos idênticos. Suspeita e encaminhamento não são diagnóstico/prescrição. Requisito, atribuição e remuneração são planos diferentes.',
    questions:[
      {q:'[Autoral] Identificar um caso suspeito e encaminhar ao serviço significa que o ACE pode:',options:['Prescrever qualquer tratamento.','Substituir a confirmação clínica por impressão pessoal.','Articular vigilância e assistência dentro de suas atribuições.','Ignorar registro e comunicação à equipe.'],ans:2,comment:'Identificação de suspeitas, orientação e encaminhamento articulam o trabalho de campo com a rede. Não conferem autorização geral de diagnóstico ou prescrição.'},
      {q:'[Autoral] Para comparar requisito de ingresso e vantagem remuneratória, o candidato deve:',options:['Tratá-los como a mesma regra.','Distinguir os objetos e conferir normas e marco temporal aplicáveis.','Consultar apenas o nome do cargo.','Considerar que uma lei modificadora apaga todos os artigos não alterados.'],ans:1,comment:'Requisitos e remuneração têm objetos diferentes. Leis modificadoras alteram dispositivos específicos; o conjunto deve ser lido em sua versão pertinente.'},
    ],flashcards:[['Identificar suspeita equivale a confirmar doença?','Não. A suspeita orienta o fluxo de vigilância e avaliação; a confirmação segue critérios e competências próprias.'],['Por que ler a lei consolidada?','Para localizar cada alteração no conjunto, sem confundir redações antigas com atuais.']],references:[agents],
  },
  {
    id:'esp_4',title:'Universalidade, equidade, integralidade e competências em um caso de território',
    theory:`## Princípios aplicados à mesma situação
Imagine duas comunidades com populações semelhantes. Uma tem acesso rodoviário e serviços próximos; outra depende de deslocamento fluvial e enfrenta barreiras sazonais. **Universalidade** significa que ambas integram o universo de pessoas com direito às ações de saúde. **Equidade** orienta considerar necessidades e barreiras distintas; repartir recursos em parcelas numericamente iguais nem sempre produz acesso comparável. **Integralidade** exige relacionar prevenção, cuidado e continuidade conforme as necessidades.

O exemplo não determina automaticamente quanto cada comunidade receberá. A decisão exige diagnóstico, critérios transparentes e planejamento. Equidade não é preferência pessoal do gestor, e universalidade não é sinônimo de distribuição idêntica de cada insumo a cada pessoa.

## Direção única e cooperação
O SUS possui direção em cada esfera e competências distribuídas entre União, estados e municípios. Normatização, coordenação, apoio técnico e execução articulam-se na rede. Uma ação ocorrer no município não prova que sua responsabilidade é exclusivamente municipal; financiamento e coordenação podem envolver mais de uma esfera.

No cotidiano, planejar uma rota de visita, consolidar dados e organizar referências são atividades relacionadas, mas distintas. O município conhece as necessidades locais; a articulação regional permite acessar serviços que extrapolam sua capacidade isolada. A direção única não elimina pactuação nem cooperação.

## Promoção, prevenção e proteção
Promoção da saúde trata de condições e possibilidades de vida saudável, incluindo ações intersetoriais. Prevenção busca evitar doenças ou agravos específicos e suas consequências. Proteção pode envolver medidas contra exposições e riscos. As categorias podem se articular em uma intervenção; não é necessário forçar toda atividade a caber em apenas uma caixa.

## Caso comentado
Um bairro apresenta armazenamento inseguro de água porque o abastecimento é irregular. Orientar o morador é parte da ação; dialogar com saneamento e abastecimento enfrenta uma condição que favorece o problema. Culpar exclusivamente a família oculta um determinante estrutural. O agente registra o risco observado e participa do fluxo de articulação da equipe, respeitando suas competências. A análise relaciona comportamento, infraestrutura e organização dos serviços.`,
    summary:'Universalidade inclui; equidade considera necessidades; integralidade articula cuidado. Competências são distribuídas e cooperativas. Educação e ação intersetorial podem enfrentar dimensões diferentes do mesmo risco.',
    questions:[
      {q:'[Autoral] Garantir apoio adicional a uma comunidade com barreiras fluviais, com base em necessidades identificadas, relaciona-se a:',options:['Equidade.', 'Exclusão da universalidade.', 'Preferência pessoal sem critério.', 'Eliminação da cooperação regional.'],ans:0,comment:'Equidade considera desigualdades de necessidades e acesso. O apoio deve ter justificativa e critérios, preservando o direito universal.'},
      {q:'[Autoral] A orientação sobre recipientes acompanhada de articulação com abastecimento de água mostra:',options:['Que educação e saneamento nunca se relacionam.', 'Atuação sobre comportamentos e determinantes estruturais.', 'Que todo risco decorre apenas de desatenção individual.', 'Que o ACE substitui sozinho todos os setores da prefeitura.'],ans:1,comment:'A ação identifica níveis de determinação e demanda cooperação. Isso não atribui ao agente competência para executar sozinho todas as respostas intersetoriais.'},
    ],flashcards:[['Equidade exige dividir tudo igualmente?','Não. Exige considerar diferenças de necessidades e barreiras com critérios justificáveis.'],['Ação local é sempre responsabilidade exclusiva do município?','Não. O SUS distribui competências e prevê cooperação entre esferas.']],references:[los,{title:'Ministério da Saúde — SUS',url:'https://www.gov.br/saude/pt-br/sus',section:'Universalidade, integralidade e articulação das ações.'}],
  },
  {
    id:'esp_5',title:'Territorialização, adscrição e continuidade: o papel da atenção básica',
    theory:`## Território é uma população em condições concretas
Territorializar não significa apenas desenhar um limite. Implica conhecer população, circulação, serviços, condições de moradia, barreiras de acesso e riscos. **Adscrição** vincula uma população a uma equipe para organizar responsabilidade e acompanhamento. Esse vínculo não autoriza negar acolhimento por uma interpretação mecânica do endereço.

A PNAB considera atenção básica e atenção primária à saúde equivalentes nos termos do documento. A equipe multiprofissional desenvolve ações individuais, familiares e coletivas. A atenção básica é descrita como principal porta de entrada e coordenadora do cuidado; isso não significa ser a única porta possível da rede, pois urgências e outros pontos têm funções próprias.

## Caso resolvido: visita que alimenta o planejamento
A equipe identifica concentração de recipientes sem proteção em uma área onde o abastecimento é intermitente. O registro territorial permite planejar visitas, orientação e articulação com outras ações. O mapa organiza a localização; o diálogo com moradores explica a dinâmica de armazenamento; os dados consolidados ajudam a avaliar se a resposta alcançou as áreas de maior necessidade.

Sem registro, o conhecimento fica dependente da memória individual. Sem escuta, o mapa pode mostrar pontos e ocultar os motivos do risco. Territorialização combina informação quantitativa, observação e conhecimento comunitário.

## Integração ACS–ACE
Uma ação integrada pode compartilhar planejamento, identificação de situações e educação em saúde. O ACS pode contribuir com o vínculo e o conhecimento das famílias; o ACE, com saberes de vigilância e controle de endemias. A integração respeita atribuições próprias, supervisão e fluxos de comunicação. Ela não exige duplicar cadastros nem transformar todo profissional em responsável por qualquer procedimento.

## Longitudinalidade e coordenação
Uma visita isolada pode resolver uma tarefa, mas acompanhamento longitudinal considera a relação ao longo do tempo. Coordenação conecta a informação produzida na atenção básica a outros pontos da rede. Para avaliar um encaminhamento, pergunte se a pessoa conseguiu acesso e se a equipe recebeu informação relevante sobre o seguimento. Em questões, diferencie o vínculo continuado da simples repetição de um atendimento burocrático.`,
    summary:'Territorialização reúne localização e condições de vida. Adscrição organiza responsabilidade. Atenção básica é principal, não única porta. Integração ACS–ACE compartilha planejamento e preserva atribuições.',
    questions:[
      {q:'[Autoral] Territorializar uma área exige:',options:['Somente traçar linhas no mapa.', 'Conhecer população, riscos, serviços e barreiras de acesso.', 'Proibir circulação entre bairros.', 'Dispensar escuta dos moradores.'],ans:1,comment:'O território incorpora condições de vida, dinâmica populacional e serviços. O desenho cartográfico é um instrumento, não a totalidade do diagnóstico.'},
      {q:'[Autoral] Na PNAB, ser a principal porta de entrada significa:',options:['Ser a única porta possível em qualquer situação.', 'Coordenar o cuidado em articulação com outros pontos da rede.', 'Executar todo procedimento especializado em cada UBS.', 'Eliminar o papel das urgências.'],ans:1,comment:'A coordenação organiza o cuidado na rede. Principal não equivale a única; especialidades e urgências permanecem com funções próprias.'},
    ],flashcards:[['Adscrição se resume a endereço?', 'Não. Organiza vínculo e responsabilidade sanitária sobre uma população.'],['Visitas repetidas garantem longitudinalidade?', 'Não por si. É preciso continuidade de relação, informação e acompanhamento.']],references:[pnab],
  },
  {
    id:'esp_6',title:'História do ACE por mudanças de modelo, não só por datas',
    theory:`## Duas perguntas para cada marco
Uma linha do tempo ganha sentido quando mostra o problema enfrentado e a mudança institucional. Campanhas de controle de doenças, consolidação de órgãos federais, descentralização e regulamentação profissional representam dimensões diferentes. A criação de uma instituição não equivale automaticamente ao surgimento de uma carreira municipal com o mesmo nome.

## Campanhas e território
Modelos campanhistas organizaram ações dirigidas a doenças e vetores específicos. Sua lógica privilegiava intervenções focalizadas e estruturas de comando próprias. Na experiência amazônica, condições ambientais, deslocamentos e circulação de pessoas influenciaram a organização do trabalho. Ao estudar o período, relacione o objetivo sanitário às condições de execução, sem reduzir a história a uma narrativa de progresso inevitável.

## Do órgão central à articulação do SUS
SUCAM e FUNASA são marcos institucionais importantes no controle de endemias. A trajetória da profissão, porém, inclui também mudanças de vínculo, luta por reconhecimento e organização municipal. A descentralização exige que a execução territorial dialogue com normas, apoio técnico, informação e financiamento de outras esferas. Não é simples desaparecimento do papel federal.

## Marcos jurídicos com objetos distintos
A Emenda Constitucional 51/2006 e a Lei 11.350/2006 integram o marco de disciplina das atividades e admissão. Alterações posteriores detalharam atribuições e outros aspectos do trabalho. A Lei 14.536/2023 reconhece ACS e ACE como profissionais de saúde para a finalidade constitucional expressamente indicada no art. 2º-A; não é correto deduzir autorização para toda atividade clínica a partir desse reconhecimento.

## Caso de análise histórica
Uma alternativa diz: “a criação do SUS tornou desnecessário o controle de vetores”. Ela falha porque confunde mudança de organização com abandono da finalidade sanitária. Outra diz: “a municipalização eliminou toda coordenação nacional”. Também erra ao apagar cooperação e definição de diretrizes.

Para revisar, monte três colunas: instituição ou norma; problema/objeto; consequência para o trabalho. Essa estrutura evita confundir datas de criação de órgãos, regras de ingresso, remuneração e expansão de atribuições, que não ocorreram todas no mesmo momento.`,
    summary:'Relacione marcos a mudanças de modelo, vínculo e atribuições. Instituição e carreira não são sinônimos. Descentralizar não elimina coordenação. Reconhecimento profissional não autoriza qualquer procedimento clínico.',
    questions:[
      {q:'[Autoral] Qual interpretação histórica é mais adequada?',options:['Municipalização eliminou toda coordenação federal.', 'Mudanças institucionais alteram a organização do trabalho sem tornar o controle de endemias desnecessário.', 'A criação de um órgão equivale sempre à criação de toda carreira municipal.', 'Reconhecimento profissional elimina limites legais de atuação.'],ans:1,comment:'A finalidade de controle e vigilância persiste em diferentes arranjos. As demais opções confundem instituições, competências e limites profissionais.'},
      {q:'[Autoral] Para estudar uma lei modificadora na linha do tempo, é necessário identificar:',options:['Somente seu número.', 'O dispositivo e o objeto alterados, além da data.', 'A remuneração de todos os servidores do país.', 'Uma mudança automática em todas as profissões de saúde.'],ans:1,comment:'A análise histórica exige entender o efeito da norma. O número e a data, isolados, não explicam qual aspecto do trabalho mudou.'},
    ],flashcards:[['Descentralização equivale a ausência de coordenação?', 'Não. Execução territorial pode coexistir com diretrizes, financiamento e cooperação entre esferas.'],['Como organizar uma linha do tempo útil?', 'Marco; problema/objeto; consequência para o trabalho.']],references:[{title:'Fiocruz — arquivo histórico da SUCAM',url:'https://basearch.coc.fiocruz.br/index.php/superintendencia-de-campanhas-de-saude-publica-sucam',section:'História institucional e vinculação com a FUNASA.'},agents],
  },
  {
    id:'esp_7',title:'Visita técnica, indicadores entomológicos e segurança do trabalho',
    theory:`## A visita como sequência de decisões
Uma visita exige preparação, identificação, comunicação com o responsável, observação, intervenção autorizada e registro. O objetivo não se resume a localizar um recipiente: é compreender o risco e orientar uma resposta possível. Descrever a condição observada ajuda a equipe a verificar depois o que mudou.

O manejo integrado combina medidas adequadas ao contexto. Proteção ou eliminação de depósitos, organização ambiental, mobilização comunitária e controle conforme protocolo não são etapas substituídas automaticamente por aplicação de produto. O uso de insumos depende de indicação técnica, formulação, equipamento, capacitação e proteção. Não se deve improvisar concentração nem transferir uma dose entre produtos diferentes.

## Dois índices com denominadores distintos
Em um exemplo de 200 imóveis inspecionados, 18 apresentam depósitos positivos e foram encontrados 27 depósitos positivos no total. O **índice de infestação predial**, no recorte do exercício, é 18/200 × 100 = 9%. O **índice de Breteau** é 27/200 × 100 = 13,5 depósitos positivos por 100 imóveis. O primeiro conta imóveis positivos; o segundo, depósitos positivos. Um imóvel pode ter mais de um depósito positivo.

Não chame automaticamente o índice de Breteau de “percentual de imóveis”. Também não conclua que um levantamento isolado mede diretamente a quantidade de pessoas doentes. Entomologia e epidemiologia produzem informações relacionadas, mas distintas.

## Registro e acompanhamento
“Imóvel fechado” e “imóvel inspecionado sem depósito positivo” não são o mesmo resultado. Fechado significa que a observação prevista não foi realizada; registrá-lo como negativo criaria uma informação falsa. O planejamento do retorno precisa considerar essa diferença.

## Segurança em campo
O risco depende da tarefa, do ambiente, dos produtos e dos equipamentos. EPI é uma barreira dentro de um conjunto de medidas, e não autorização para qualquer exposição. Diante de acidente ou suspeita de intoxicação, siga o fluxo de assistência e comunicação; exemplos didáticos não devem ser usados para escolher antídotos ou realizar procedimentos sem habilitação. Uma boa resposta de prova combina prevenção, registro e encaminhamento.`,
    summary:'Imóvel fechado não é negativo. IIP conta imóveis positivos; Breteau conta depósitos positivos por 100 imóveis. Controle segue protocolo e formulação; EPI não elimina todos os riscos.',
    questions:[
      {q:'[Autoral] Em 200 imóveis inspecionados, 18 positivos e 27 depósitos positivos, quais são IIP e Breteau?',options:['9% e 13,5 por 100 imóveis.', '13,5% e 9 por 100 imóveis.', '18% e 27 por 100 imóveis.', '9% e 27% de pessoas doentes.'],ans:0,comment:'IIP=18/200×100=9%. Breteau=27/200×100=13,5 depósitos positivos por 100 imóveis. Os dados não calculam pessoas doentes.'},
      {q:'[Autoral] Um imóvel estava fechado e não foi inspecionado. Qual registro é correto?',options:['Negativo para depósitos, mesmo sem inspeção.', 'Inspecionado e positivo por presunção.', 'Fechado/não inspecionado, conforme o fluxo de registro.', 'Excluir o imóvel de toda informação de campo.'],ans:2,comment:'Ausência de observação não equivale a resultado negativo. Registrar a condição real permite planejar retorno e avaliar cobertura.'},
    ],flashcards:[['Por que IIP e Breteau podem ser diferentes?', 'Um imóvel positivo pode conter mais de um depósito positivo.'],['Fechado significa negativo?', 'Não. Significa que a inspeção prevista não foi realizada.']],references:[agents,{title:'Ministério da Saúde — Aedes aegypti',url:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/aedes-aegypti',section:'Vigilância entomológica e controle integrado; cálculos do complemento são exemplos autorais.'}],
  },
  {
    id:'esp_8',title:'Incidência, prevalência, letalidade e ciclo da informação',
    theory:`## O indicador depende da pergunta
Incidência examina ocorrência de casos novos em população sob risco durante um período. Prevalência considera pessoas com a condição em um ponto ou intervalo definido, segundo a medida utilizada. Letalidade relaciona óbitos pela doença aos casos dessa doença; mortalidade relaciona óbitos à população. Trocar o denominador altera a pergunta respondida.

## Cálculo comentado
Em um grupo hipotético de 2.000 pessoas inicialmente sob risco, ocorreram 40 casos novos em um mês. A incidência acumulada simplificada do exercício é 40/2.000 = 2%, ou 20 por 1.000 no período. Se 2 desses 40 casos evoluíram para óbito pela doença, a letalidade é 2/40 = 5%. A mortalidade nesse grupo, considerando esses óbitos e o mesmo recorte, é 2/2.000 = 0,1%, ou 1 por 1.000. Os resultados não são intercambiáveis.

Uma prevalência maior pode decorrer de mais casos novos, maior duração da condição ou melhor detecção, entre outros fatores. Portanto, a contagem isolada não revela automaticamente piora do risco de adoecer.

## Da suspeita à decisão
O ciclo da vigilância envolve coletar, qualificar, analisar, interpretar e devolver informação para orientar ações. Uma ficha preenchida e nunca analisada não completa esse processo. Data de início de sintomas e data de notificação respondem a perguntas diferentes: uma ajuda a reconstruir o tempo da ocorrência; a outra, o fluxo da informação.

Notificação pode ser indicada para suspeitas, conforme a definição e a norma aplicável; não se deve exigir confirmação laboratorial como condição universal. Prazos e listas são atualizados, portanto exigem consulta ao instrumento normativo pertinente e ao fluxo local.

## Comparações seguras
Dois bairros com números absolutos iguais podem ter taxas diferentes se suas populações forem distintas. Antes de comparar, confira período, definição de caso, população, fonte e completude. Aumento de notificações pode refletir maior transmissão, mas também busca ativa ou melhora de registro. A hipótese precisa de investigação, não de conclusão automática.`,
    summary:'Casos novos: incidência. Casos existentes: prevalência. Óbitos/casos: letalidade. Óbitos/população: mortalidade. Compare períodos e definições. Notificação e confirmação não são sinônimos.',
    questions:[
      {q:'[Autoral] Quarenta casos e dois óbitos pela doença correspondem a qual letalidade?',options:['0,1%','2%','5%','20%'],ans:2,comment:'Letalidade=2/40×100=5%. Usar a população geral como denominador produziria uma medida de mortalidade, não de letalidade.'},
      {q:'[Autoral] Um aumento de notificações demonstra necessariamente aumento real da transmissão?',options:['Sim, sem necessidade de análise.', 'Não; também pode refletir melhora de detecção e registro.', 'Sim, porque definição de caso nunca muda.', 'Não, porque notificações jamais se relacionam a transmissão.'],ans:1,comment:'Aumento de notificações requer investigar explicações concorrentes. Ele pode sinalizar transmissão, mas a conclusão exige avaliar definição, cobertura, busca ativa e período.'},
    ],flashcards:[['Qual denominador distingue letalidade de mortalidade?', 'Letalidade usa casos da doença; mortalidade usa população.'],['Uma ficha preenchida completa o ciclo da vigilância?', 'Não. A informação precisa ser qualificada, analisada e usada na decisão.']],references:[pnvs,{title:'Ministério da Saúde — Guia de Vigilância em Saúde',url:'https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/guia-de-vigilancia-em-saude-volume-2-6a-edicao/view',section:'Vigilância e investigação: definições de caso e análise por tempo, lugar e pessoa; cálculos autorais.'}],
  },
  {
    id:'esp_9',title:'Matriz de transmissão e casos diferenciais das doenças do programa',
    theory:`## Estude o mecanismo antes de decorar o nome
Para cada doença, relacione agente, via, exposição e medida de controle. Ter febre não identifica sozinho a causa. Um relato de exposição orienta a investigação, mas não substitui avaliação e critérios de diagnóstico.

| Doença | Agente ou grupo | Mecanismo essencial para distinguir |
| --- | --- | --- |
| Dengue | Vírus dengue | Transmissão vetorial por Aedes infectado; queda da febre não garante recuperação sem risco. |
| Chikungunya | Vírus chikungunya | Transmissão por Aedes; dor articular pode ser importante e persistente. |
| Zika | Vírus Zika | Via vetorial e outras vias reconhecidas, inclusive sexual e vertical; atenção à gestação. |
| Febre amarela | Vírus da febre amarela | Ciclo silvestre brasileiro envolve Haemagogus e Sabethes; primatas não humanos são sentinelas, não alvos de eliminação. |
| Malária | Plasmodium | Transmissão usual pela fêmea infectada de Anopheles; exposição e diagnóstico oportuno importam. |
| Chagas | Trypanosoma cruzi | Via vetorial clássica envolve material fecal do triatomíneo; também há transmissão oral e outras vias. |
| Leishmaniose tegumentar | Leishmania | Picada de flebotomíneo infectado; acometimento cutâneo e/ou mucoso. |
| Leishmaniose visceral | Leishmania | Transmissão por flebotomíneo; doença sistêmica, com cão como reservatório importante no contexto urbano brasileiro. |
| Esquistossomose | Schistosoma mansoni | Cercárias em água doce penetram a pele; caramujo Biomphalaria participa do ciclo. |
| Raiva | Vírus do gênero Lyssavirus | Saliva de mamífero infectado em exposições relevantes, como mordedura; avaliação imediata da exposição. |
| Leptospirose | Leptospira | Contato com ambiente contaminado por urina de animais infectados; enchentes ampliam exposições. |
| Febre maculosa | Rickettsia | Transmissão por carrapatos infectados; história de exposição deve ser valorizada. |
| Influenza | Vírus influenza | Transmissão respiratória; medidas de prevenção e vigilância de síndromes respiratórias. |
| COVID-19 | SARS-CoV-2 | Transmissão respiratória, com relevância da ventilação e proteção conforme o contexto. |

## Caso 1: sem confundir vetor e agente
Um exercício descreve água doce, caramujo e penetração de larvas pela pele. A combinação aponta para o mecanismo da esquistossomose, não para ingestão obrigatória do caramujo. Outro descreve contaminação por fezes de triatomíneo: não se deve responder que o parasito é inoculado pela saliva do barbeiro como se fosse o mesmo mecanismo de uma picada de mosquito.

## Caso 2: sintomas e gravidade
Febre após exposição pode ter diversas causas. Dor abdominal intensa, sangramento ou deterioração do estado geral exigem encaminhamento oportuno conforme o fluxo assistencial. A função educativa do ACE é reconhecer situações de atenção e facilitar acesso; não escolher medicamentos a partir desta tabela.

## Controle coerente com a cadeia
Saneamento, controle de vetores, proteção individual, vacinação quando indicada e vigilância de exposições têm alvos diferentes. Eliminar um mosquito não previne toda doença da tabela. Compare cada medida com a via efetiva e com o protocolo específico.`,
    summary:'Agente não é vetor; reservatório não é via. Esquistossomose: cercária/pele. Chagas vetorial: material fecal. Arboviroses e doenças respiratórias não compartilham todas as medidas de prevenção. Sintomas orientam suspeita, não diagnóstico isolado.',
    questions:[
      {q:'[Autoral] Qual associação está correta?',options:['Chagas: inoculação obrigatória do parasito pela saliva do barbeiro.', 'Esquistossomose: cercárias podem penetrar a pele em água doce contaminada.', 'Malária: causada pelo mosquito como agente etiológico.', 'Leptospirose: causada por vírus influenza.'],ans:1,comment:'A cercária é a forma infectante para humanos na esquistossomose. Chagas vetorial envolve material fecal; malária é causada por Plasmodium; leptospirose por bactéria Leptospira.'},
      {q:'[Autoral] Por que uma única medida de controle não serve para todas as doenças da tabela?',options:['Porque todas têm o mesmo vetor.', 'Porque os agentes, vias e exposições são diferentes.', 'Porque nenhuma admite prevenção.', 'Porque o diagnóstico depende apenas da febre.'],ans:1,comment:'Medidas precisam atingir elementos da cadeia de transmissão. Controle de mosquito, saneamento, ventilação e avaliação de exposições não são intervenções intercambiáveis.'},
    ],flashcards:[['Por que não eliminar primatas não humanos em uma investigação de febre amarela?', 'São sentinelas importantes; o ciclo vetorial não se interrompe por essa conduta.'],['Qual é o mecanismo vetorial clássico de Chagas?', 'Contato de material fecal do triatomíneo infectado com porta de entrada; não a inoculação salivar típica dos mosquitos.']],references:[
      {title:'Ministério da Saúde — arboviroses',url:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/arboviroses/arboviroses',section:'Doenças e ciclo silvestre da febre amarela.'},
      {title:'Ministério da Saúde — esquistossomose',url:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/esquistossomose',section:'Ciclo e transmissão.'},
      {title:'Ministério da Saúde — doença de Chagas',url:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/doenca-de-chagas/doenca-de-chagas',section:'Formas de transmissão.'},
      {title:'Ministério da Saúde — malária',url:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/m/malaria',section:'Agente, transmissão e diagnóstico.'},
      {title:'Ministério da Saúde — leishmaniose visceral',url:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/l/leishmaniose-visceral',section:'Doença sistêmica, vetor e reservatórios.'},
      {title:'Ministério da Saúde — raiva',url:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/r/raiva/raiva',section:'Agente e exposição.'},
      {title:'Ministério da Saúde — leptospirose',url:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/l/leptospirose/leptospirose/',section:'Transmissão e situações de risco.'},
      {title:'Ministério da Saúde — Guia de Vigilância em Saúde',url:'https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/vigilancia',section:'Volumes 1 a 3: capítulos de doenças respiratórias, arboviroses, protozooses e zoonoses.'},
    ],
  },
  {
    id:'esp_10',title:'Cadeia epidemiológica, períodos e pontos de interrupção',
    theory:`## Elementos diferentes da mesma cadeia
O agente etiológico é o causador da doença. Reservatório é o ambiente ou ser em que o agente se mantém nas condições relevantes de sua ecologia. Hospedeiro abriga o agente em alguma etapa; vetor participa da transmissão. Essas categorias podem sobrepor-se em situações específicas, mas não são sinônimos por definição.

**Porta de saída**, **modo de transmissão**, **porta de entrada** e **suscetibilidade do hospedeiro** completam um modelo útil para organizar a prevenção. Em uma doença respiratória, partículas emitidas por uma pessoa podem alcançar outra em um ambiente mal ventilado. Ventilação atua no ambiente de exposição; uma vacina indicada atua sobre a proteção do hospedeiro. Os alvos diferem, embora as medidas possam ser combinadas.

## Períodos que não se confundem
Incubação é o intervalo entre infecção e início de sintomas. Transmissibilidade é o período em que o agente pode ser transmitido nas condições da doença. A pessoa pode transmitir antes dos sintomas em certas infecções; logo, estar sem sintomas não equivale universalmente a não transmitir. Latência tem usos técnicos que dependem do campo; não a substitua automaticamente por incubação em toda definição.

## Caso resolvido: reservatório não é vetor
Em um cenário didático de leishmaniose visceral urbana, o cão pode participar como reservatório, enquanto o flebotomíneo participa como vetor. Responder “o cão é o mosquito transmissor” mistura categorias. Também não se deve deduzir contágio humano por simples convivência com o animal: a via deve ser especificada conforme o ciclo reconhecido.

## Hospedeiro definitivo e intermediário
Na parasitologia, a classificação depende da etapa do ciclo, especialmente reprodução sexuada ou fase adulta, conforme o parasito. Não use “definitivo” como sinônimo de “mais importante” nem suponha que seja sempre o humano. O ciclo da esquistossomose e o da malária mostram que o papel deve ser estudado para cada agente.

## Infecciosa, transmissível e contagiosa
Uma doença infecciosa é causada por agente biológico; isso não significa necessariamente transmissão direta entre pessoas. A expressão contagiosa costuma ser usada para destacar contágio, mas o material deve explicitar a via. Em questão, use a descrição epidemiológica precisa em vez de concluir que toda infecção exige isolamento idêntico.`,
    summary:'Agente causa; reservatório mantém; vetor transmite; hospedeiro abriga. Incubação não é transmissibilidade. Definitivo depende do ciclo parasitário. Doença infecciosa não implica transmissão direta entre pessoas.',
    questions:[
      {q:'[Autoral] Em um cenário de leishmaniose visceral urbana, cão e flebotomíneo exercem, respectivamente, papéis de:',options:['Agente etiológico e bactéria.', 'Reservatório e vetor.', 'Vetor e reservatório, necessariamente.', 'Dois nomes do mesmo parasito.'],ans:1,comment:'O cão é reservatório importante nesse contexto, e o flebotomíneo participa como vetor. O agente etiológico é Leishmania.'},
      {q:'[Autoral] O período entre infecção e início dos sintomas é chamado de:',options:['Incubação.', 'Letalidade.', 'Prevalência.', 'Mortalidade.'],ans:0,comment:'Incubação é intervalo temporal até os sintomas. Letalidade, prevalência e mortalidade são medidas epidemiológicas, não esse período.'},
    ],flashcards:[['Incubação e transmissibilidade são idênticas?', 'Não. Sintomas e capacidade de transmitir têm intervalos que podem diferir.'],['Hospedeiro definitivo é sempre humano?', 'Não. A classificação depende da etapa do ciclo do parasito.']],references:[{title:'Ministério da Saúde — zoonoses',url:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/z/zoonoses',section:'Agentes, vias de exposição e medidas de prevenção.'},{title:'Ministério da Saúde — leishmaniose visceral',url:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/l/leishmaniose-visceral',section:'Reservatórios e transmissão.'}],
  },
];
