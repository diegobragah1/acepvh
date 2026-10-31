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
