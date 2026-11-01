# Auditoria individual — por_8, Classes e formação de palavras

Estado: **PARCIAL**, sem certificação integral. Lote `MORFOLOGIA_2026-10-31`, data civil de São Paulo. [Base, instante, hashes e fonte lexical](BASE_MORFOLOGIA.json). Índices começam em zero.

## Escopo efetivamente lido

Três blocos principais em HTML A/B, mapa completo (mnemônico, painéis e armadilha), oito questões com alternativas/comentários e nove cartões. Conferidos os trechos correspondentes aos achados nas versões Markdown dos blocos 0 e 1. Lido integralmente o complemento `por_8` de `src/data/deepening/portugues.ts`: teoria, resumo, duas questões, um cartão e referências. Total: **dez questões interativas e dez cartões**. Também examinados os quatro casos resolvidos, a atividade prática e oito perguntas de recuperação do bloco 0, sem somá-los aos itens interativos.

## Evidência externa delimitada: noitecer

A teoria, os resumos, cartões e comentários afirmam que **noitecer não existe**, usando essa afirmação para justificar anoitecer pelo teste de retirada de a-. Foi lida a lista ortográfica pt-BR do projeto LibreOffice/VERO, em revisão fixa, e confirmada a entrada literal:

> `noitecer/abjkMò`

Fonte: [LibreOffice/dictionaries, pt_BR/pt_BR.dic, linha 212503](https://github.com/LibreOffice/dictionaries/blob/4f1df64b2e8e14751aa7c2205d170ca016071315/pt_BR/pt_BR.dic#L212503), commit `4f1df64b2e8e14751aa7c2205d170ca016071315`. SHA-256 do arquivo: `a38bfb26b68ece2834e79fe83e48d5792652970ace12db89d1b9674bf9933183`. A apresentação de `pt_BR/README_pt_BR.txt` identifica o material como dicionário para correção ortográfica do Hunspell.

Isso fornece um registro lexical contrário à alegação categórica de inexistência. **Não certifica etimologia, frequência, produtividade ou o processo formador de anoitecer**, e não autoriza trocar automaticamente seu gabarito. A ausência de entrada literal de outras formas também não comprova inexistência: há regras de afixos e limites de cobertura. O complemento já recomenda analisar a estrutura relevante, em vez de simplesmente encontrar dois afixos.

## Achados localizados

| Local | Evidência e consequência | Encaminhamento |
| --- | --- | --- |
| `blocks[0].modoA`, abertura; `blocks[1].flashcards[*].lessonTitle`; mapa | Mantém Aula 20 de morfologia/verbos/colocação. O item atual é o 8, identificação, definição, classificação, flexão, emprego e formação. As classes não recebem desenvolvimento equilibrado. | Atualizar identidade e remissões; manter articulação com aulas 9/13/14 sem tratar repetição de vozes como prática de todas as classes. |
| `blocks[0..2].modoA/B`; vários cartões e questões | O teste de retirada é chamado infalível; formas como noitecer são declaradas inexistentes. No mapa e nos cartões, retirar apenas o prefixo já decide a classificação. | Retirar o automatismo; conferir bases, afixos, estrutura e hipótese de formação em fonte morfológica, com registro lexical específico. Ver evidência externa acima. |
| `blocks[0].modoA/B`; `blocks[2].modoB` | Subterrâneo aparece como exemplo de parassíntese, sem justificar a segmentação ou a base relevante. Desalmado, esclarecer e outras palavras também dependem de análise que a mera busca de uma cadeia de letras não demonstra. | Confrontar cada formação, distinguindo análise sincrônica, origem histórica e segmentação. O registro de subterrâneo em lista ortográfica não resolve sua formação. |
| `blocks[0].modoA`, estudo de caso 2 | Em desvalorização, «retirar o sufixo» produz desvalorizar: a operação pressupõe uma análise morfológica, não é simples apagamento gráfico. Em esclarecer, a justificativa depende da inexistência não demonstrada de clarecer. | Mostrar a estrutura por etapas e a forma da base; não apresentar apagamento de letras como prova suficiente. |
| `blocks[0].modoA`, regressiva | O critério substantivo abstrato=derivado de verbo/concreto=primitivo é usado para decidir direção derivacional. O sentido de ação ou objeto sozinho não demonstra a história da formação. | Sustentar o processo com análise lexical/etimológica conforme a abordagem adotada; distinguir exemplos didáticos de regra universal. |
| `blocks[0].modoA/B`, composição | Alterna «sem perda de fonemas» e «sem perda de letras», que não são o mesmo critério. A lista inclui formações de origem histórica sem demonstrar a análise relevante. | Separar grafia, pronúncia, morfemas e origem; conferir as segmentações de cada exemplo. |
| `blocks[0..2].modoA`; complemento | As dez classes são listadas, mas artigo, numeral e interjeição têm exposição especialmente breve. Artigo não é desenvolvido por tipos/usos; numeral recebe glosa quantidade/ordem; interjeição não recebe sequência própria de definição/exemplos. | Desenvolver cada classe em contexto, suas propriedades e emprego. O painel seis variáveis/quatro invariáveis não demonstra ensino integral. |
| `blocks[0].modoA`, flexão dos compostos | Há tabela geral de plural, mas não discussão suficiente de variantes, estruturas restritivas e lexicalização. Não há exercício interativo dedicado ao plural de compostos. | Conferir compostos individualmente e praticar a justificativa, sem usar um rótulo estrutural como decisão exaustiva. |
| Mapa, `branches[0].nodes[1]` | O/a/os/as são reduzidos a OD e lhe/lhes a OI. A análise não desenvolve usos possessivos de lhe nem outras funções/contextos dos pronomes, e a classe não deve ser identificada apenas por uma função prototípica. | Separar classe e função, reconstruir a relação no enunciado e confrontar os usos em gramática. O complemento já distingue classe/função. |
| Mapa, `branches[1]`; `blocks[1].modoA`; resumos/cartões | PA é associada a plural e a «termo seguinte», embora o resumo do bloco 1 já exemplifique eliminou-se o foco e eliminaram-se os focos. VTD+se é tratado como decisão suficiente em passagens antigas. | Harmonizar singular/plural e posição do sujeito; excluir leitura reflexiva/recíproca/pronominal antes da classificação de PA/IIS. |
| `blocks[0].modoA`, vozes; cartão 2 | SER/ESTAR+particípio é apresentado como fórmula de passiva; TER/HAVER+particípio como voz ativa. Tempo composto e voz são dimensões distintas: uma locução pode conter ambos, como têm sido emitidos. | Distinguir passiva de estado/predicação e tempo composto de voz; analisar auxiliares e particípio na construção completa. |
| `blocks[0].modoA`, tempos/modos e MARIO | Indicativo=certeza/fato real é definição absoluta; paradigmas e exceções são resumidos sem conferir todos os verbos. Correlação verbal aparece como conjunto fechado de modelos. | Delimitar valores contextuais, paradigmas e possibilidades de correlação; remeter à auditoria de verbos sem certificar por mnemônico. |
| Mapa, ramo 2; `blocks[0].modoA`, mesóclise | Proíbe pronome átono «após vírgula» e usa mesóclise sempre que não há atrativo, sem delimitar registro e estrutura. A própria atividade admite próclise com sujeito expresso antes do futuro. | Harmonizar com o contraste já existente e com a aula de colocação; não converter posição gráfica em proibição universal. |
| `blocks[0].questions[0].comment` | Explica «na letra E é locução de tempo composto», mas há apenas A–D. | Registrar e retirar comentário órfão em correção própria; não inventar alternativa perdida. |
| `blocks[0].questions[2].comment` | Menciona planalto e propusermos, que não aparecem nas alternativas; não explicita diretamente o erro de vier a planilha. | Reescrever o comentário alternativa por alternativa e conferir coerência com o item atual. |
| Títulos, objetivos e comentários | «Favorita», «mais frequente», «recorrente» e rótulos Padrão IBGP/IBGP não têm corpus ou origem autenticada. | Conferir origem e frequência separadamente. O texto autoral já identificado como tal permanece distinto de material cuja origem é desconhecida. |

## Questões: gabaritos, distratores e ressalvas

| Local | Gabarito atual | Conferência editorial |
| --- | --- | --- |
| `blocks[0].questions[0]` | C | Identificaram-se focos admite focos foram identificados. A/B pluralizam indevidamente precisa-se de/trata-se de; D não é passiva. O comentário da inexistente E está errado por falta de correspondência, independentemente da resposta C. |
| `blocks[0].questions[1]` | B, justificativa pendente | A própria pergunta define acréscimo simultâneo e pede o nome parassíntese; A/C/D nomeiam outros processos. A justificativa lexical dos exemplos não fica provada por essa definição, especialmente diante de noitecer registrado. |
| `blocks[0].questions[2]` | B pretendida | Mantiver/vir são adequados ao futuro do subjuntivo de manter/ver. A erra intervir no contexto futuro e a análise proposta; C troca a formação de infelizmente e usa vier em lugar de vir a planilha; D classifica combate como composição e usa interviram. A justificativa de parassíntese exige fonte específica e o comentário contém resíduos de outros itens. |
| `blocks[0].questions[3]` | C | Mantém pretérito perfeito, sujeito paciente plural e particípio concordante. A altera para presente e erra singular na pronominal; B altera para imperfeito; D altera para condicional/tempo composto. A passiva sintética omite o agente, diferentemente da analítica apresentada. |
| `blocks[1].questions[0]` | B pretendida | Infelizmente admite análise prefixal/sufixal e combate é apresentado como deverbal; A/C/D misturam composição/conversão/hibridismo incompatíveis com a leitura didática proposta. O comentário «não existe noitecer» é contraditado pela fonte lexical consultada; a formação de anoitecer não foi certificada. |
| `blocks[1].questions[1]` | B | Em I, focos foram identificados sustenta PA; em II, de servidores é complemento, não sujeito paciente. A inventa conjunção condicional, C troca as funções e D exige plural indevido. |
| `blocks[1].questions[2]` | B | Primeiro que introduz o conteúdo de informou; segundo retoma agentes. A inverte; C/D atribuem classes/relações não presentes. |
| `blocks[2].questions[0]` | B pretendida, não validada | B é o conjunto de exemplos da classificação ensinada; A traz prefixação/sufixação, C reúne compostos e D deverbais na análise escolar. Não se certifica a formação dos três vocábulos de B pelo argumento de inexistência das formas intermediárias: noitecer está registrado e os demais exigem confronto próprio. |
| Complemento, `questions[0]` | B | Rápida caracteriza e concorda com conferência. A atribui ao advérbio a modificação/concordância nominal; C/D não correspondem à forma e à função. |
| Complemento, `questions[1]` | C | Relatório/relatórios pertence ao mesmo paradigma de número. A/B/D formam outra unidade lexical por sufixação ou prefixação. |

Não se propõe substituição automática dos gabaritos. Há quatro questões de formação com justificativas ainda não certificadas, duas falhas objetivas de comentário e repetição de PA/IIS. Nenhum dos dez itens desenvolve a interjeição ou a classificação/emprego de numerais; o único item de flexão nominal do complemento verifica plural simples, sem cobrir os compostos.

## Rastreabilidade e limites

Os 16 recortes c01–c16 foram preservados. Acrescentados c17–c24: estrutura morfêmica; flexão/derivação; prefixação/sufixação/parassíntese; regressiva/conversão; composição; plural dos compostos; que/se em contexto; pronomes e funções. Cada registro distingue exemplo, inventário e exercício efetivamente conferido. A decomposição continua ampliável.

Materiais externos efetivamente lidos: arquivo lexical em revisão fixa e apresentação do README do projeto VERO/Hunspell. Os hashes e o localizador da entrada estão no registro de base. A evidência documental é restrita à alegação lexical, não valida regras morfológicas ou todos os recortes da aula. Os metadados locais das fontes 95–97 também foram examinados; índices e página de serviço não substituem gramática com seção/página.

Permanecem: confronto morfológico/etimológico específico, autenticação das atribuições, reconferência do Anexo IV/retificações, desenvolvimento dos recortes pouco ensinados e inspeção visual. Nenhum recorte recebe VALIDADO e `exerciciosValidados` permanece vazio. Dataset, gabaritos, cartões e identificadores não foram alterados neste lote.
