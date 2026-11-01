# Auditoria individual — por_10, Concordância verbal e nominal

Estado: **PARCIAL**, sem certificação integral. Lote `CONCORDANCIA_2026-10-31`, data civil de São Paulo. [Base, instante e hashes](BASE_CONCORDANCIA.json). Localizadores com índices a partir de zero.

## Escopo efetivamente lido

Três blocos principais: modos A/B em HTML, mapa completo (incluindo mnemônico, painéis numéricos e armadilha), cinco questões com todas as alternativas e comentários e sete cartões. Conferidos os trechos correspondentes aos achados nas versões Markdown dos blocos 0 e 1. Lido integralmente o complemento `por_10` de `src/data/deepening/portugues.ts`: teoria, resumo, duas questões, um cartão e referências. Total examinado: **sete questões interativas e oito cartões**, além do caso resolvido do bloco 0. O complemento é acrescentado em runtime e não é um quarto bloco do JSON bruto.

## Achados localizados

| Local | Evidência e consequência | Encaminhamento |
| --- | --- | --- |
| Mapa, título; `blocks[0].modoA`, abertura/objetivos; `blocks[1].flashcards[*].lessonTitle` | Ainda identifica Aula 21 de análise sintática e promete resolver qualquer questão de crase, regência e colocação. O item atual é o 10, concordância. Os objetivos de concordância incluem casos sem desenvolvimento proporcional. | Atualizar identidade e remissões; delimitar o conteúdo desta aula, sem usar repetição de outros itens como cobertura de concordância. |
| Mapa, `mnemonic`; `blocks[0].modoB`; `blocks[1..2].modoA` | «Existir tem sujeito e vai para o plural» aparece como regra geral. O plural decorre do sujeito plural dos exemplos; o complemento corretamente diz que existir concorda com o sujeito. | Harmonizar com contraste singular/plural: existe uma solução / existem soluções; deve existir / devem existir. Incluir ocorrer/acontecer sem impor plural a todos os usos. |
| `blocks[0].modoB`, VTD + se | Resume VTD + se como plural. O próprio modo A, em diagnóstico acrescentado ao final, admite sujeito paciente singular e outros usos de se, excluindo o algoritmo por transitividade isolada. | Propagar as condições ao resumo e à revisão; comparar vende-se uma casa, vendem-se casas e ela se lavou. |
| `blocks[0].modoA`, tabela inicial de se; cartão 0 e questão 0 | Trata-se de é apresentado como VTI + IIS e usado como caso-modelo sem discutir o caráter da construção pronominal. A análise é repetida em vários recursos. | Conferir a classificação de tratar-se de em fonte gramatical específica, separando a estabilidade do singular da análise da função de se. Não alterar gabarito apenas por possível divergência terminológica. |
| Mapa, percentuais; `blocks[1].modoA`, linha 4; `blocks[2].modoA` | Formula número OU especificador como regra ampla; só o bloco 2 acrescenta a condição com determinativo anteposto. A variante 1% dos imóveis aparece sem explicar a relação entre concordância verbal e eventual predicativo/particípio. | Unificar condições, construir exemplos com números e especificadores em conflito e comentar a flexão nominal nas locuções passivas. Conferir variantes em fonte normativa. |
| `blocks[0].modoA`, objetivos; complemento | Sujeito composto posposto, um dos que e ou/nem são prometidos nos objetivos. O complemento exemplifica composto anteposto e apenas menciona particularidades do posposto; não desenvolve um dos que ou coordenação com ou/nem. | Desenvolver construção, sentido e alternativas admitidas, sem alegar ausência de toda a regra geral. Não equiparar menção à competência ensinada. |
| `blocks[1].modoA`, mais de um | Há exemplo de singular e reciprocidade, mas a exceção por repetição fica sem exemplo. «Apenas» fecha a regra sem demonstrar seu alcance. | Acrescentar contraste analisado e verificar a formulação normativa antes de a apresentar como exaustiva. |
| `blocks[0].modoA`, SER; `blocks[1].modoA`, dar/bater/soar | SER promete horas, datas e distâncias, mas só há exemplos de horas. Dar/bater/soar recebe contraste com relógio como sujeito, porém não há exercício específico. | Desenvolver datas/distâncias com a unidade e a estrutura explícitas; praticar a identificação do sujeito em vez de procurar palavra-chave. |
| `blocks[0..2].modoA/B`; cartões sobre é proibido | A presença de artigo/determinante é apresentada como condição suficiente para toda a concordância predicativa e como única condição da flexão. «Água limpa é necessário» é oferecido sem discutir a interpretação genérica, a especificação do nome e a tradição normativa adotada. | Confrontar a regra em fonte específica e distinguir construção cristalizada de concordância regular do predicativo; não transformar o macete do artigo em regra para todo nome sem artigo. |
| `blocks[1..2].modoA`, lista nominal | Inclui quite entre palavras que «variam em gênero e número». Quite tem a mesma forma para masculino e feminino; a flexão relevante é quite/quites. Mesmo só recebe delimitação «em pessoa» no bloco 2; os demais blocos dizem sempre variar, sem contraste adverbial. | Separar o paradigma de cada palavra: quite/quites; elas mesmas / elas vieram mesmo. Não aplicar uma instrução única a todas. |
| `blocks[0].modoA`, objetivos nominais | Adjetivo anteposto/posposto a vários substantivos é anunciado, mas não recebe análise comparativa nos três blocos ou no complemento. | Desenvolver exemplos com núcleos de gêneros/números diferentes, função atributiva/predicativa e condições admitidas; isso não é suprido pela repetição de anexas. |
| `blocks[1].modoA`, alerta | Já distingue alerta adverbial e alertas adjetivo, citando Aulete e tradição mais restritiva. É uma ressalva útil, mas a fonte não foi relida nesta etapa. | Preservar a distinção e confirmar o verbete antes de declarar nova validação documental; não restaurar regra de invariabilidade absoluta. |
| Mapa e `blocks[1].questions[2]` | Parte da aula se dedica a subordinadas. A questão compara frases com conteúdos e predicados diferentes, não um par controlado em que só as vírgulas mudam. A classificação é possível, mas não demonstra isoladamente todo o efeito de retirar vírgulas. | Distinguir identificação sintática de comparação de reescritas. Remeter à aula 14 e qualificar a oposição parte/todo. |
| Títulos, objetivos e comentários | Há «praticamente todas as provas», «mais caem» e «questão clássica» sem levantamento; títulos Padrão IBGP/IBGP não autenticam origem. | Conferir a origem ou manter explicitamente não demonstrada. Não converter rótulo em evidência de frequência ou autoria. |

## Questões: fundamento e distratores

Conferência editorial interna; o conteúdo sanitário dos cenários não é protocolo validado por esta análise.

| Local | Gabarito atual | Resolução e limites |
| --- | --- | --- |
| `blocks[0].questions[0]` | D | D mantém trata-se de no singular e anexas concordando com planilhas. A exige havia; B, faz; C, deve haver. A classificação específica de se em tratar-se de fica pendente de confronto; isso não torna as alternativas A–C corretas. |
| `blocks[1].questions[0]` | B | Deve haver e faz temporal ficam no singular. A erra haviam/faziam; C erra devem haver e existirem diante de risco singular; D erra fazem temporal. O comentário sobre existir no plural vale para soluções, não para qualquer sujeito. |
| `blocks[1].questions[1]` | C | Necessária concorda com a higienização e anexas com orientações. A erra anexo diante de planilhas e menas; B erra meia preocupadas, embora bastantes dados esteja adequado; D erra proibido com a entrada. A frequência de higienização citada não recebe certificação técnica. |
| `blocks[1].questions[2]` | B | Em I, a relativa isolada é explicativa; em II, a não isolada é restritiva. A nega a classificação/efeito, C inventa coordenação adversativa e D exige vírgula na restritiva. B é compatível com a leitura proposta, mas os dois períodos não permitem atribuir todas as diferenças de sentido só à pontuação. |
| `blocks[2].questions[0]` | B | Deve haver, bastantes motivos e fotografias anexas compõem a construção adequada. A erra haviam e anexo com autos; C erra fazem temporal e proibido com a permanência; D erra meia destampada e não flexiona mesmas no sentido de em pessoa. |
| Complemento, `questions[0]` | B | Deve haver preserva a impessoalidade do haver existencial. A erra o auxiliar, C emprega houveram como existencial e D pluraliza fazer temporal. |
| Complemento, `questions[1]` | C | Conferem-se os relatórios admite a paráfrase os relatórios são conferidos, com sujeito paciente plural. A/B/D têm indeterminação nos usos apresentados, sem sujeito paciente equivalente. |

Não foi identificada troca inequívoca de gabarito nas sete questões. Isso não certifica todos os comentários ou o universo das regras. Quatro itens interativos incluem haver existencial como discriminação central; faltam questões específicas de percentuais, partitivos, mais de um, relativos que/quem, horas, sujeito composto posposto e adjetivo com vários núcleos. A distribuição de prática é mais estreita que os objetivos anunciados.

## Rastreabilidade por subcompetência

Os recortes amplos `por_10-c01` (verbal) e `por_10-c02` (nominal) foram preservados. Foram acrescentados, sem renumerar linhas antigas, c03–c16: núcleo do sujeito; composto anteposto/posposto; partitivos; percentuais; relativos que/quem; mais de um; horas/datas/distâncias; impessoais/auxiliares; funções de se; adjetivo com vários substantivos; expressões predicativas; paradigmas nominais; advérbio/numeral/adjetivo; menos/alerta. Isso refina a matriz, mas ainda não esgota todos os casos do item aberto.

Cada novo recorte registra o que foi encontrado e o que falta, inclusive quando só há anúncio ou exemplo. Não se associa automaticamente toda questão da aula a todos os recortes: o inventário herdado continua sendo inventário; a análise efetiva de cada item está na tabela acima.

## Fontes e limites

Consultados efetivamente: dataset, complemento, gerador e metadados das fontes 95–97 e 110–112. Em nova tentativa, a [FUNAG — concordância verbal](https://www.funag.gov.br/manual/index.php?title=Concord%C3%A2ncia_verbal) e o [Aulete — alerta](https://www.aulete.com.br/alerta) foram bloqueados pelo proxy com HTTP 403 antes da leitura. As páginas de destino não foram confirmadas como disponíveis e não são declaradas fontes lidas.

Confronto normativo de regras/variantes, autenticação de origem, Anexo IV/retificações e inspeção visual permanecem pendentes. A matriz conserva `evidenciaFonte` e `exerciciosValidados` vazios, com pendências críticas, sem nível VALIDADO. O lote registra diagnósticos; não modifica conteúdo, gabaritos, cartões, identificadores ou progresso do estudante.
