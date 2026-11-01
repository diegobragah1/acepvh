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

| Regra de Inferência / Conjunto | Estrutura Formal | Conclusão Válida / Fórmula | Armadilha / Falácia |
| --- | --- | --- | --- |
| **Modus Ponens (Afirmação do Antecedente)** | Premissa 1: $p 	o q$; Premissa 2: $p$. | Logo, **$q$**. | Confundir com a falácia da afirmação do consequente ($p 	o q$ e $q$ **não** garante $p$). |
| **Modus Tollens (Negação do Consequente)** | Premissa 1: $p 	o q$; Premissa 2: $
eg q$. | Logo, **$
eg p$**. | Confundir com a falácia da negação do antecedente ($p 	o q$ e $
eg p$ **não** garante $
eg q$). |
| **Silogismo Disjuntivo** | Premissa 1: $p lor q$; Premissa 2: $
eg p$. | Logo, **$q$**. | Se uma das duas é verdadeira e a primeira falhou, a segunda é obrigatoriamente verdadeira. |
| **Princípio da Inclusão-Exclusão (2 e 3 conjuntos)** | $n(A cup B) = n(A) + n(B) - n(A cap B)$ | Para 3 conjuntos: soma os individuais, subtrai as interseções 2 a 2 e soma $n(A cap B cap C)$. | Comece sempre preenchendo o Diagrama de Venn pela **interseção central**. |
| **Conjunto das Partes $mathcal{P}(A)$** | Total de subconjuntos de $A$ com $n$ elementos $= 2^n$. | Subconjuntos próprios não vazios $= 2^n - 2$. | O conjunto vazio $emptyset$ é **subconjunto** de qualquer conjunto ($emptyset subset A$). |

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

### Questão 3

[Autoral] Considere verdadeiras as premissas: P1) “Se há pneus expostos à chuva, então surge foco de larvas”; P2) “Não surgiu foco de larvas neste pátio”. Aplicando a regra de inferência válida (Modus Tollens), conclui-se necessariamente que:

- A) Não há pneus expostos à chuva neste pátio.
- B) Há pneus expostos à chuva neste pátio.
- C) Choveu todos os dias da semana.
- D) O pátio não possui muro.

**Gabarito: A.** Pelo Modus Tollens (se p → q é verdadeira e ¬q é verdadeira, então ¬p é verdadeira), a ausência do consequente (“não surgiu foco”) implica necessariamente a falsidade do antecedente (“não há pneus expostos à chuva”).

### Questão 4

[Autoral] Um conjunto $A$ reúne os 6 equipamentos básicos de proteção individual do agente em determinada operação. O número total de subconjuntos que compõem o Conjunto das Partes de $A$, denotado por $n(\mathcal{P}(A))$, é igual a:

- A) 64.
- B) 12.
- C) 36.
- D) 32.

**Gabarito: A.** Um conjunto finito com n = 6 elementos distintos possui exatamente 2^n = 2^6 = 64 subconjuntos (incluindo o conjunto vazio e o próprio conjunto A).

## Flashcards

**Como provar que um argumento é inválido?**

Exibindo um contraexemplo em que todas as premissas sejam verdadeiras e a conclusão seja falsa.

**Qual a fórmula da união de dois conjuntos finitos?**

n(A∪B) = n(A) + n(B) − n(A∩B).

**Por onde se deve começar a preencher um problema com Diagrama de Venn?**

Sempre pela interseção central (elementos que pertencem simultaneamente a todos os conjuntos), descontando esse valor das regiões adjacentes.

## Referências de consulta

- [IMPA/OBMEP — módulos de matemática](https://portaldaobmep.impa.br/index.php/modulo/index) — Conjuntos e introdução à lógica matemática; exemplos autorais de diagramas e argumentos.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
