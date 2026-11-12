# rlm_6 — Argumentação Lógica, Diagramas de Venn, Conjuntos e Associação Lógica

### 1. Validade de Argumentos e Regras de Inferência
Um argumento lógico dedutivo é composto por um conjunto de premissas $P_1, P_2, \dots, P_k$ e uma conclusão $C$.
- **Critério de Validade**: um argumento é **válido** se, e somente se, a verdade de suas premissas tornar logicamente impossível a falsidade de sua conclusão (não existe interpretação com premissas todas V e conclusão F).
- **Validade vs Verdade Factual**: a validade é uma propriedade estritamente estrutural/formal do raciocínio, e não do conteúdo factual empírico.
- **Regras de Inferência Válidas**:
  * **Modus Ponens (Afirmação do Antecedente)**: $p \to q, \quad p \quad \vdash \quad q$;
  * **Modus Tollens (Negação do Consequente)**: $p \to q, \quad \neg q \quad \vdash \quad \neg p$;
  * **Silogismo Hipotético**: $p \to q, \quad q \to r \quad \vdash \quad p \to r$;
  * **Silogismo Disjuntivo**: $p \lor q, \quad \neg p \quad \vdash \quad q$.
- **Falácias Formais Recorrentes na Banca IBGP**:
  * *Afirmação do Consequente*: $p \to q, \quad q \quad \not\vdash \quad p$ (concluir $p$ a partir de $q$ é falacioso);
  * *Negação do Antecedente*: $p \to q, \quad \neg p \quad \not\vdash \quad \neg q$ (concluir $\neg q$ a partir de $\neg p$ é falacioso).

### 2. Teoria dos Conjuntos e Diagramas de Venn
- **Pertinência ($\in$) vs Inclusão ($\subset, \subseteq$)**: pertinência vincula elemento a conjunto ($x \in A$); inclusão vincula subconjunto a conjunto ($A \subset B$).
- **Conjunto das Partes ($\mathcal{P}(A)$)**: conjunto formado por todos os subconjuntos de $A$. Para um conjunto finito com $n$ elementos:
  $$n(\mathcal{P}(A)) = 2^n$$
  O total de **subconjuntos próprios** é $2^n - 1$ (exclui o próprio $A$). O conjunto vazio $\emptyset$ é subconjunto de qualquer conjunto ($\emptyset \subseteq A$).
- **Princípio da Inclusão-Exclusão**:
  * *Para dois conjuntos*:
    $$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$
  * *Para três conjuntos*:
    $$n(A \cup B \cup C) = n(A) + n(B) + n(C) - [n(A \cap B) + n(A \cap C) + n(B \cap C)] + n(A \cap B \cap C)$$
  * *Regra de Ouro nos Diagramas de Venn*: inicie sempre o preenchimento dos valores numéricos pela **interseção central tríplice** $n(A \cap B \cap C)$, subtraindo esse valor das interseções duplas adjacentes.

### 3. Problemas de Associação Lógica em Tabelas Cruzadas
Problemas que correlacionam pessoas, cargos, bairros de lotação e escalas de serviço são resolvidos estruturando uma matriz de dupla entrada:
- Preencha cada célula com $O$ (correspondência verdadeira confirmada) ou $X$ (associação proibida eliminada);
- Uma vez preenchido um $O$ em uma célula, elimine com $X$ todas as outras células da mesma linha e da mesma coluna (correspondência biunívoca).

### 4. Problemas de Verdades e Mentiras
Problemas em que personagens fazem declarações e apenas um fala a verdade (ou apenas um mente):
1. Procure identificar duas declarações **mutuamente contraditórias** entre si (se uma afirma $p$ e a outra afirma $\neg p$, exatamente uma é verdadeira e a outra é necessariamente falsa);
2. Teste a hipótese consistente que satisfaz o número exato de verdades exigido pelo enunciado sem gerar contradição.

## Resumo de revisão

Argumento válido impede premissas V com conclusão F. Modus Ponens e Tollens são válidos; afirmar o consequente é falácia. Conjunto das Partes tem 2ⁿ subconjuntos. Comece diagramas de Venn pela interseção central.

| Regra / Conceito | Estrutura Lógica / Fórmula | Aplicação Prática | Cuidado de Prova |
| --- | --- | --- | --- |
| **Modus Ponens** | $p \to q$ e $p \implies q$. | Se chove, calha enche. Choveu $\implies$ calha encheu. | Não cometer a falácia de afirmar o consequente ($p \to q$ e $q$ **não** garante $p$). |
| **Modus Tollens** | $p \to q$ e $\neg q \implies \neg p$. | Se há foco, há lixo. Não há lixo $\implies$ não há foco. | Não cometer a falácia de negar o antecedente ($p \to q$ e $\neg p$ **não** garante $\neg q$). |
| **Inclusão-Exclusão (2 conjuntos)** | $n(A \cup B) = n(A) + n(B) - n(A \cap B)$ | Subtrair a interseção para não contar as pessoas duas vezes. | Somente $A = n(A) - n(A \cap B)$. |
| **Conjunto das Partes $\mathcal{P}(A)$** | Total de subconjuntos $= 2^n$. | Para $n = 6$ elementos: $2^6 = 64$ subconjuntos. | O conjunto vazio $\emptyset$ sempre integra $\mathcal{P}(A)$. |

## Exercícios autorais comentados

### Questão 1

[Autoral] Em um grupo de 50 servidores da saúde, 28 realizaram o curso de vigilância de arboviroses, 25 realizaram o curso de controle de roedores e 10 realizaram ambos os cursos. Quantos desses servidores NÃO realizaram nenhum dos dois cursos?

- A) 7 servidores.
- B) 0 servidores.
- C) 10 servidores.
- D) 17 servidores.

**Gabarito: A.** Gabarito: A. Pelo Princípio da Inclusão-Exclusão para dois conjuntos: n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 28 + 25 - 10 = 43 servidores que fizeram pelo menos um dos cursos. O número de servidores que não fizeram nenhum dos dois cursos é o complementar em relação ao total: 50 - 43 = 7 servidores. Erro da B: soma 28 + 25 = 53 e supõe que todos fizeram; erro da C: 10 é o número de servidores que fizeram ambos os cursos; erro da D: calcula 28 - 10 = 18 ou 25 - 10 = 15 sem relacionar com o universo.

### Questão 2

[Autoral] Considere verdadeiras as premissas: P1: “Se chover forte durante a tarde, então o mutirão de borrifação será adiado”; P2: “O mutirão de borrifação NÃO foi adiado”. Aplicando a regra de inferência válida (Modus Tollens), conclui-se necessariamente que:

- A) Não choveu forte durante a tarde.
- B) Choveu forte durante a tarde.
- C) A equipe de borrifação não compareceu ao trabalho.
- D) O mutirão foi transferido para o período noturno.

**Gabarito: A.** Gabarito: A. Pelo Modus Tollens: dadas as premissas p -> q e ~q, conclui-se necessariamente ~p. Como a consequência ("o mutirão foi adiado") não ocorreu (~q), a condição suficiente ("choveu forte") obrigatoriamente não ocorreu (~p). Erro da B: contradiz a validade lógica (se tivesse chovido forte, o mutirão teria sido adiado); erro da C e D: conclusões sem respaldo nas premissas fornecidas.

### Questão 3

[Autoral] Um kit padrão de inspeção de campo do ACE é composto por um conjunto $A$ com exatamente 6 instrumentos distintos. O número total de subconjuntos possíveis que podem ser formados com esses instrumentos (isto é, o número de elementos do Conjunto das Partes $\mathcal{P}(A)$) é:

- A) 64 subconjuntos.
- B) 12 subconjuntos.
- C) 36 subconjuntos.
- D) 32 subconjuntos.

**Gabarito: A.** Gabarito: A. Para qualquer conjunto finito A com n elementos, o número de subconjuntos de seu Conjunto das Partes é dado por 2ⁿ. Com n = 6 instrumentos: n(P(A)) = 2⁶ = 64 subconjuntos (incluindo o conjunto vazio e o conjunto completo com os 6 instrumentos). Erro da B: multiplica 6 × 2 = 12; erro da C: calcula 6² = 36; erro da D: calcula 2⁵ = 32.

### Questão 4

[Autoral] O argumento lógico “Todo agente que atua no Baixo Madeira utiliza transporte fluvial; Marcos utiliza transporte fluvial; portanto, Marcos atua no Baixo Madeira” é classificado como:

- A) Inválido, pois comete a falácia da afirmação do consequente (o conjunto dos que usam transporte fluvial pode conter outras pessoas além dos agentes do Baixo Madeira).
- B) Válido, pois a premissa universal garante a igualdade de todos os elementos.
- C) Uma tautologia clássica de Modus Ponens.
- D) Verdadeiro exclusivamente no caso em que Marcos é o supervisor da equipe.

**Gabarito: A.** Gabarito: A. Se o conjunto A (agentes do Baixo Madeira) está contido no conjunto B (usuários de transporte fluvial), pertencer a B não garante pertencer a A (Marcos pode ser um ribeirinho, turista ou comerciante). Trata-se da clássica falácia da afirmação do consequente (p -> q e q não autorizam concluir p). Erro da B: confunde inclusão de conjuntos com identidade; erro da C: Modus Ponens exige afirmar o antecedente (p), e não o consequente (q); erro da D: validade é propriedade formal e independe de fatos empíricos não premissados.

### Questão 5

[Autoral] Em uma investigação sanitária sobre 3 arboviroses (Dengue, Zika e Chikungunya) em 100 pacientes febris, constatou-se que: 50 tiveram Dengue, 40 tiveram Zika, 30 tiveram Chikungunya; 20 tiveram Dengue e Zika; 15 tiveram Dengue e Chikungunya; 10 tiveram Zika e Chikungunya; e 5 pacientes apresentaram coinfecção simultânea pelas três arboviroses. Quantos desses 100 pacientes NÃO tiveram nenhuma das três doenças?

- A) 20 pacientes.
- B) 15 pacientes.
- C) 10 pacientes.
- D) 25 pacientes.

**Gabarito: A.** Gabarito: A. Pelo Princípio da Inclusão-Exclusão para 3 conjuntos: n(D ∪ Z ∪ C) = n(D) + n(Z) + n(C) - [n(D ∩ Z) + n(D ∩ C) + n(Z ∩ C)] + n(D ∩ Z ∩ C). Substituindo: n(D ∪ Z ∪ C) = 50 + 40 + 30 - [20 + 15 + 10] + 5 = 120 - 45 + 5 = 80 pacientes com pelo menos uma arbovirose. Portanto, o número de pacientes que não tiveram nenhuma das três é: 100 - 80 = 20 pacientes. Erro da B: esquece de somar a interseção tríplice (+5); erro da C: calcula 100 - 90; erro da D: soma e subtrai as interseções com erros de sinal.

## Flashcards

**Como refutar formalmente a validade de um argumento dedutivo?**

Exibindo um contraexemplo em que todas as premissas sejam simultaneamente verdadeiras e a conclusão seja falsa.

**Qual é a ordem correta para preencher um Diagrama de Venn de três conjuntos?**

Começa-se sempre pela interseção tríplice central n(A ∩ B ∩ C), descontando esse valor ao preencher as interseções duplas adjacentes.

**Quantos subconjuntos possui o Conjunto das Partes de um conjunto com n elementos?**

Possui exatamente 2ⁿ subconjuntos, incluindo o conjunto vazio e o próprio conjunto original.

## Referências de consulta

- [IMPA/OBMEP — Teoria dos Conjuntos e Argumentação Lógica](https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=49&tipo=7) — Operações com conjuntos, diagramas de Venn, argumentos lógicos e dedução.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
