# rlm_6 — Validade, diagramas de conjuntos e problemas de associação

## Verdade das frases e validade do argumento
Um argumento é válido quando não existe interpretação em que todas as premissas sejam verdadeiras e a conclusão falsa. Validade é uma relação entre premissas e conclusão, não um selo de veracidade factual. “Todo A é B; x é A; logo x é B” tem forma válida, mesmo se alguém escolher classes que tornem uma premissa falsa no mundo real.

## Duas inferências e duas armadilhas
Se p implica q e p ocorre, conclui-se q: modus ponens. Se p implica q e q não ocorre, conclui-se não p: modus tollens. Já concluir p a partir de q é afirmar o consequente. Concluir não q a partir de não p é negar o antecedente. Para detectar o erro, procure outra razão que permita q sem p.

“Todo agente da equipe A fez o curso; Bruno fez o curso; logo Bruno é da equipe A” é inválido: pessoas de outras equipes podem ter feito o mesmo curso. Um diagrama com Bruno fora do círculo A, mas dentro do conjunto dos formados, refuta a inferência.

## União e interseção sem duplicar pessoas
Em um grupo de 50 pessoas, 28 estudam Português, 25 estudam Matemática e 10 estudam ambas. A união contém 28 + 25 − 10 = 43 pessoas; 7 não estudam nenhuma. A interseção é subtraída porque foi contada duas vezes. “Somente Português” corresponde a 28 − 10 = 18.

Pertinência relaciona elemento e conjunto: x pertence a A. Inclusão relaciona conjuntos: A está contido em B. Um conjunto com 3 elementos distintos tem 2³=8 subconjuntos, incluindo vazio e o próprio conjunto.

## Associação e sequências
Em problemas de associação, use tabela e registre tanto possibilidades quanto proibições. Uma conclusão precisa respeitar todas as pistas, não só uma. Em sequências finitas, vários padrões podem ser inventados; a solução de prova depende do padrão simples compatível com o comando e as alternativas. Não apresente uma regra escolhida como se fosse a única continuação matematicamente possível.

## Resumo de revisão

Validade exclui premissas verdadeiras com conclusão falsa. Modus ponens/tollens são válidos; afirmar consequente não. União subtrai a interseção. Pertinência é elemento/conjunto; inclusão é conjunto/conjunto.

## Exercícios autorais comentados

### Questão 1

[Autoral] Em 50 pessoas, 28 estudam P, 25 estudam M e 10 ambas. Quantas não estudam nenhuma?

- A) 0
- B) 7
- C) 10
- D) 17

**Gabarito: B.** A união tem 28+25−10=43. Restam 50−43=7. Somar sem descontar a interseção contaria as mesmas pessoas duas vezes.

### Questão 2

[Autoral] “Todo A é B; João é B; logo João é A” é:

- A) Sempre válido.
- B) Inválido, pois B pode conter elementos fora de A.
- C) Uma negação de todos.
- D) Uma identidade entre A e B.

**Gabarito: B.** A inclusão A⊆B não implica B⊆A. João pode pertencer a B sem pertencer a A; esse contraexemplo mostra a invalidade.

## Flashcards

**Como provar que um argumento é inválido?**

Exibindo premissas verdadeiras e conclusão falsa em um contraexemplo.

**Qual a fórmula de dois conjuntos finitos?**

n(A∪B)=n(A)+n(B)−n(A∩B).

## Referências de consulta

- [IMPA/OBMEP — módulos de matemática](https://portaldaobmep.impa.br/index.php/modulo/index) — Conjuntos e introdução à lógica matemática; exemplos autorais de diagramas e argumentos.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
