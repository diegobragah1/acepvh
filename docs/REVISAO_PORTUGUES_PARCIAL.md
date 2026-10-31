# Revisão de português — fechamento parcial de 31/10/2026

Esta revisão corrige afirmações determinadas no conteúdo principal. Não certifica a cobertura integral das 18 aulas de português nem a autenticidade das atribuições de questões à banca. A leitura dos blocos, cartões e questões das aulas 4, 5, 9, 12, 15 e 16 identificou os pontos abaixo; a conferência de todos os demais enunciados e tópicos continua pendente.

| Aula | Problema e correção | Evidência/limite |
|---|---|---|
| 4 — figuras de sintaxe | Resumos e cartões excluíam da elipse termos já expressos. Agora explicitam zeugma como caso particular. Substituído exemplo ambíguo de anacoluto que retomava objeto com pronome. Silepse de número passa a ter contexto entre orações, evitando apresentar concordância local inadequada como regra. | Revisão conceitual pontual. Não autentica a origem dos exemplos ou das questões. |
| 5 — figuras de linguagem | Os quatro gabaritos conferidos permanecem. | Revisão das definições mais amplas e das limitações dos atalhos ainda pendente; não há certificação integral. |
| 9 — verbos | Eliminada proibição universal da passiva com VTI: obedecer/desobedecer são exceções reconhecidas. Correlação -sse/-ria passa de obrigatória a frequente. Explicada a transformação haviam inspecionado → haviam sido inspecionados. | Aulete, seção Regência, entradas obedecer/desobedecer. Os três gabaritos conferidos permanecem. Reouve é forma correta: não foi alterada. |
| 12 — crase | Retiradas promessas de 100% e macete infalível. Possessivo plural distingue a minhas/às minhas; facultatividade depende de artigo e construção. Retirada proibição universal de à distância sem medida; indicada variação de manuais. Corrigida classificação sempre VTI para obedecer sem complemento expresso. | Manual do Senado, Crase; Aulete, Regência. A tabela de regência e demais classificações ainda precisam de revisão completa. Gabaritos preservados. |
| 15 — acentuação | Vírus removido da lista de exemplos de proparoxítonas. Resumo passa a reconhecer proparoxítonas aparentes. Distrator Sanitário/endêmico/público substituído por Vírus/endêmico/público, evitando dupla resposta admissível. | Acordo Ortográfico, base XI. Gabarito C preservado, comentário refeito e questão versionada `20261031-acentuacao-2`. Atribuição IBGP não autenticada foi retirada dessa questão. |
| 16 — ortografia | Resumo, mapa e cartão recebem ressalvas co-/re- e pós-/pré-/pró-. Retirada regra de acentuação como simples inverso de terminações de oxítonas. Há indica tempo decorrido. | Acordo, bases VIII–XI e XVI; Manual do Senado, Hífen. A relação de exceções não é apresentada como exaustiva. |

## Fontes vinculadas às aulas

- [Acordo Ortográfico — Câmara dos Deputados](https://www.camara.leg.br/internet/reformaortografica/decreto_e_texto_do_acordo.pdf): bases X (hiatos), XI (proparoxítonas reais/aparentes), XVI (prefixação).
- [Manual do Senado — Crase](https://www12.senado.leg.br/manualdecomunicacao/estilos/crase): locuções, possessivos, contextos facultativos e acento por clareza em à distância. Há divergência entre manuais; não se converte uma orientação editorial em proibição universal.
- [Aulete — Gramática, Regência](https://www.aulete.com.br/gram/cap11-15-regencia): obedecer e desobedecer, emprego sem complemento e passiva admitida.
- [Manual do Senado — Hífen](https://www12.senado.leg.br/manualdecomunicacao/estilos/hifen): prefixos gerais, co-/re- e prefixos tônicos acentuados.

## Aplicação e validação

`scripts/review_portuguese.py` aplica substituições delimitadas às aulas identificadas e sincroniza as quatro cópias JSON/JS. Não usa correspondência de palavras para aprovar cobertura. A questão alterada recebe nova identidade de tentativa; respostas antigas não são reaproveitadas silenciosamente. A matriz global continua sem certificação de cobertura integral.

## Continuação: coesão, concordância, estrutura e pontuação

- **Aula 7:** corrigido o conselho de substituir `sua` por `dele`, que podia manter a mesma ambiguidade. A redação agora explicita o possuidor. A questão do bloco 2 passa a pedir leitura isolada, sem contexto adicional; o contraste com `embora` é explicado como problema discursivo nessa leitura, não como proibição gramatical universal. Gabarito B mantido, revisão `20261031-coerencia-contexto`.
- **Aulas 10 e 14:** a transitividade deixa de ser apresentada como diagnóstico suficiente das funções de `se`. Foram incluídos critérios e contraexemplos de passiva, indeterminação, reflexividade, reciprocidade e verbo pronominal na exposição principal existente. Concordância da passiva depende do sujeito paciente singular/plural. A ressalva de obedecer/desobedecer alcança também a aula 14.
- **Aula 10:** alerta advérbio invariável é distinguido do adjetivo com plural alertas registrado pelo Aulete. Existe tradição mais restritiva, ilustrada por artigo de Arnaldo Niskier na ABL; a divergência é reconhecida. A mesóclise sem palavra atrativa não é declarada obrigatória em toda posição: com sujeito expresso, admite-se também próclise.
- **Aula 17:** corrigido título que a chamava de aula 22; removidas contagens de tokens sem documentação. O segundo bloco principal foi reescrito para tratar efetivamente de pontuação: vírgula e sintaxe, extensão de adjuntos, conjunção e, ponto e vírgula, dois-pontos, travessões, parênteses, aspas, ponto final, interrogação, exclamação, reticências e efeitos de sentido. As questões e os cartões foram preservados. A contagem de três palavras não é apresentada como definição universal de adjunto longo. A troca de sinais que isolam aposto não garante identidade de destaque discursivo.
- **Aula 18:** os quatro gabaritos foram conferidos na leitura da teoria, resumo e cartões: conativa, diafásica, pressuposição de repetição e alternância de registro. Permanecem sem alteração. Isso não autentica a origem das questões nem certifica o esgotamento da variação linguística.

Referências adicionais: [Aulete — pronomes pessoais](https://www.aulete.com.br/gram/cap09-02-pronomes_pessoais), [alerta](https://www.aulete.com.br/alerta), [Manual da Câmara](https://bd.camara.leg.br/bd/bitstream/handle/bdcamara/5684/manual_redacao.pdf), [Senado — vírgula](https://www12.senado.leg.br/manualdecomunicacao/estilos/virgula), [vírgula antes de e](https://www12.senado.leg.br/manualdecomunicacao/estilos/virgula-antes-da-conjuncao-e), [ponto e vírgula](https://www12.senado.leg.br/manualdecomunicacao/estilos/ponto-e-virgula), [aspas](https://www12.senado.leg.br/manualdecomunicacao/estilos/aspas). Aplicação reproduzível: `node --import tsx scripts/review_syntax.ts`, após `python scripts/review_portuguese.py`.

Ainda há revisão pendente de trechos repetidos, regências controversas e afirmações de frequência atribuídas à banca. A leitura das aulas longas 1, 3, 6, 8 e 13 ainda não foi encerrada. Nenhuma linha deste relatório converte uma leitura parcial em auditoria integral.

## Aula 13 — exposição principal reorganizada

A leitura dos três blocos anteriores foi concluída. A exposição principal foi reescrita em `content/revisao/por_13.md`, sem acrescentar uma seção de aprofundamento aplicado: o conteúdo agora trata dos fundamentos da colocação, condições de próclise/ênclise/mesóclise, adaptações dos acusativos, locuções com infinitivo/gerúndio/particípio, possibilidades alternativas e análise de pontuação. O material anterior repetia extensamente aulas de concordância, regência, crase e formação de palavras, inclusive com títulos de aulas 20 e 21.

- As três posições dos blocos e todas as questões foram conservadas para manter as identidades de tentativas. As questões de outros temas no segundo bloco passaram a ter identificação de revisão interdisciplinar.
- Corrigidos comentários das questões 1, 2 e 3 do bloco 1 que explicavam alternativa E inexistente. Os gabaritos conferidos permanecem B, B, B, C, C e C, na ordem dos seis itens.
- O cartão que dizia que toda vírgula após advérbio tornava obrigatória a ênclise foi substituído por explicação com contraexemplo de negação. Mapa e resumos agora acompanham a exposição.
- O Manual da Câmara foi efetivamente baixado e convertido para leitura: seções 6.5.1–6.5.5, páginas impressas 179–186. Explicita próclise com sujeito anteposto ao futuro, alternativas com infinitivo e posições em locuções. O material distingue essa orientação formal da colocação corrente no português brasileiro.
- Aplicação: `node --import tsx scripts/review_pronouns.ts`, após os dois scripts anteriores. Não executar apenas um script antigo de enriquecimento: ele pode restaurar explicações superadas.

A exposição foi revisada com essas fontes e condições. Isso não autentica a origem dos exercícios nem constitui certificação de todos os casos controversos de colocação pronominal. A pendência anterior de leitura da aula 13 foi substituída por este registro; continuam pendentes as aulas longas 1, 3, 6 e 8.
