# Auditoria individual — por_3, Significação das palavras

Estado: **PARCIAL**. Lote `SEMANTICA_ARTICULACAO_2026-10-31`. [Base, instante e hashes](BASE_SEMANTICA_ARTICULACAO.json). Índices de blocos, questões e cartões começam em zero.

## Escopo lido

Dois blocos principais em HTML A/B, mapa completo, seis questões com alternativas/comentários e sete cartões. Conferidos os trechos Markdown correspondentes aos achados no bloco 0. Lido integralmente o complemento `por_3` em `src/data/deepening/portugues.ts`: teoria, resumo, duas questões, um cartão e referências. Total de múltipla escolha: **oito questões**; total de cartões: **oito**. Casos resolvidos, atividade prática e oito perguntas de recuperação embutidas no modo A também foram examinados, mas não são contados como questões interativas adicionais.

## Achados e encaminhamentos

| Local | Evidência observada | Encaminhamento |
| --- | --- | --- |
| `blocks[0].modoA`, abertura e objetivos | Identifica-se como Aula 18 de ortografia/acentuação; grande parte da exposição é sobre figuras, pontuação e hífen. A aula atual é a 3, significação das palavras. As remissões a `port_5/6` não usam os IDs atuais `por_*`. | Reorganizar a identidade e as remissões. Distinguir revisão interdisciplinar de desenvolvimento da competência semântica. |
| `blocks[0].modoA/B`; mapa, ramo 2 | Denotação é igualada a «dicionário» e conotação a sentido não literal/subjetivo. Dicionários também registram acepções figuradas; estar dicionarizado não decide a leitura de uma ocorrência. O complemento já chama atenção ao contexto, mas o macete permanece nos resumos. | Substituir o critério dicionarizado/não dicionarizado por análise do uso no enunciado, com acepção, contexto e efeito de sentido. Conferir em verbetes reais. |
| `blocks[0].modoA`, polissemia/homonímia | A distinção apoia-se em «mesma raiz/origem» versus «origens distintas», sem demonstrar consulta etimológica ou discutir a organização das acepções em dicionários. O complemento reconhece que a distinção pode exigir consulta lexicográfica. | Explicitar o critério adotado e seus limites; confrontar entradas de cabeça/rede/ponto e formas homônimas, sem classificar só pela intuição ou grafia. |
| `blocks[0].modoA`, relações semânticas | Sinonímia e antonímia recebem definições e pares, mas pouca análise de substituição contextual, intensidade, registro ou diferentes eixos de oposição. O complemento desenvolve essas ressalvas; suas duas questões avaliam figura/ambiguidade, não a substituição sinonímica. | Acrescentar reescritas justificadas e contrastes contextualizados; não usar volume das figuras como medida da prática lexical. |
| `blocks[1].title/modoA` | O título promete «Dicionário Definitivo» com hiperônimos e polissemia; o cabeçalho anuncia 12 pares, mas a tabela contém oito linhas de pares/grupo. Hiperonímia aparece no resumo e em questão, polissemia não tem desenvolvimento específico nesse bloco. | Ajustar contagem e promessa ou desenvolver o conteúdo anunciado. A seleção não esgota parônimos/homônimos. |
| `blocks[0].modoA`, pares lexicais; `blocks[1].modoA` | Mandado é resumido como ordem judicial e mandato como período eletivo; outra passagem da própria aula admite ordem administrativa e procuração. Há perda de acepções entre versões da tabela. Iminente é abreviado para «imediato» no resumo. | Harmonizar as acepções e distinguir iminência de imediatismo; usar contexto e verbete com localizador, sem transformar glosa curta em definição exaustiva. |
| `blocks[0].modoA`, figuras de sintaxe; modo B | Define elipse excluindo termo anteriormente dito, embora depois afirme que toda zeugma é elipse. O complemento da aula 4 já explica elipse como categoria ampla. Persistem «A criança foi vacinado» e «A população… compareceram» como exemplos de silepse sem delimitar registro e condições. | Harmonizar com a revisão de `por_4`; conferir os exemplos antes de ensiná-los como licença geral de concordância. |
| `blocks[0].modoA`, atividade de hífen | «Vogais/consoantes diferentes: junta» é uma regra excessivamente ampla; o próprio exemplo sub-região usa hífen com consoantes diferentes. O texto ainda chama gratuito de «proparoxítona/paroxítona falsa» sem explicar uma classificação consistente. | Transferir a prática ortográfica à aula responsável e confrontar regras e exceções com o Acordo/VOLP. A incompatibilidade interna do hífen é observável sem autenticar todos os vocábulos. |
| `blocks[0].modoA/B`, adjetivas e sintaxe | Reaparece a oposição universal «restritiva=apenas uma parte», já ressalvada em `por_14`. O atalho CN=paciente/AA=agente é apresentado com abrangência maior que os exemplos demonstram. | Remeter ao diagnóstico de `por_14` e qualificar os critérios. Não contar a repetição como nova evidência de correção. |
| `blocks[0].questions[2]` | «Decidiu ___ os dados do relatório» não explicita sozinho confirmar ou corrigir; B é selecionada porque as demais alternativas erram sessão/iminente e/ou a figura. O comentário trata ratificar como se fosse determinado exclusivamente pela lacuna. | Tornar explícito o ato pretendido em revisão futura; preservar a distinção entre melhor conjunto de alternativas e determinação lexical pelo contexto. |
| Modos A/B e rótulos | Há «campeões», «mais cobrados», «dica infalível» e frequência atribuída à IBGP sem amostra/caderno identificados. As duas questões do bloco 1 têm rótulo IBGP sem autenticação de origem. | Exigir comprovação ou retirar a atribuição em lote de correção; não converter origem desconhecida em autoral por suposição. |

## Questões e distratores conferidos

| Local | Gabarito atual | Análise interna |
| --- | --- | --- |
| `blocks[0].questions[0]` | B | GPS da preparação transfere a função de orientar; A literaliza, C não demonstra redundância e D não identifica efeito sonoro pertinente. A alegação de que a frase vem de apostila não foi autenticada. |
| `blocks[0].questions[1]` | B | Recupera-se realiza na segunda oração: zeugma. Não há evidência de ironia, exagero ou paradoxo para A/C/D. A classificação não certifica as atribuições sanitárias usadas como cenário. |
| `blocks[0].questions[2]` | B, com ressalva pedagógica | B combina iminente, ratificar e sessão com zeugma. A troca iminente por eminente e sessão por seção; C/D usam cessão e classificam incorretamente a figura. Ratificar é possível, mas o contexto da lacuna não exclui isoladamente retificar. |
| `blocks[0].questions[3]` | B | A inclusão do falante em ficamos sustenta silepse de pessoa; ler o autor pela obra sustenta metonímia. A/C/D apresentam pares que não explicam essas operações. |
| `blocks[1].questions[0]` | B | Prestes a ocorrer=iminente; dados incorretos a corrigir=retificar; aplicar penalidade=infligir; violar norma=infringir. A/C/D confundem pelo menos um desses sentidos. Não certifica competência legal para aplicar a multa do exemplo. |
| `blocks[1].questions[1]` | C | Insetos é termo mais abrangente que Aedes aegypti no recorte; A oposição, B semelhança formal e D coincidência sonora não descrevem a relação proposta. |
| Complemento, `questions[0]` | B | Ponte expressa ligação figurada entre comunidade e serviço; o contexto não requer estrutura física, doença ou quantidade. |
| Complemento, `questions[1]` | C | Da moradora explicita a casa referida; possessivos/pronomes das demais alternativas dependem de contexto e conservam a imprecisão. |

Nenhuma troca inequívoca de gabarito foi indicada pela conferência interna. Uma questão fica sob ressalva pedagógica. Não há questão interativa dedicada à oposição polissemia/homonímia nem à escolha de sinônimo/antônimo com justificativa contextual. Das quatro questões do bloco 0, três exigem figuras de sintaxe/linguagem; isso limita seu uso como evidência da cobertura lexical.

## Fontes e limites

Foram consultados os arquivos locais acima e os registros de fontes 95–97. Eles apontam para índices BNCC/Inep e página de serviço do Manual da Presidência, sem verbetes específicos para cada definição. **Nenhuma fonte externa foi lida neste lote.** O bloqueio de consultas linguísticas no proxy foi documentado no lote anterior; não se registra aqui nova requisição ou nova confirmação de conteúdo externo.

Permanecem pendentes: confronto lexicográfico e gramatical com páginas/acepções, edital e retificações, desenvolvimento das lacunas, revisão das atividades não interativas e inspeção visual. Os oito recortes da matriz mantêm PENDENTE, com evidência documental e exercícios validados vazios. Conteúdo e identificadores não foram modificados.
