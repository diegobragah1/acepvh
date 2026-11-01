# rlm_5 — Condicional, contrapositiva e negação com contraexemplos

## Proposição e valor lógico
Na lógica clássica usada nesses exercícios, uma proposição declarativa recebe verdadeiro ou falso em uma interpretação. Perguntas e ordens não recebem o mesmo tratamento. Sentenças abertas, como “x é maior que 5”, dependem de atribuir um valor a x ou de quantificá-lo. O número de linhas de uma tabela com n proposições atômicas distintas é 2 elevado a n.

## Uma condicional não é uma bicondicional
Considere p: “o relatório foi aprovado” e q: “o relatório foi arquivado”. A afirmação p → q é falsa somente quando p é verdadeira e q é falsa. Arquivar um relatório que não foi aprovado não contradiz, por si, essa regra: a frase não afirmou que aprovação era a única razão para arquivamento.

| p | q | p → q |
| --- | --- | --- |
| V | V | V |
| V | F | F |
| F | V | V |
| F | F | V |

A contrapositiva ¬q → ¬p é equivalente à condicional. A recíproca q → p e a inversa ¬p → ¬q não são equivalentes a ela em geral. No exemplo, “não arquivado implica não aprovado” preserva a regra lógica; “arquivado implica aprovado” acrescentaria uma condição que não foi fornecida.

## Negação passo a passo
Negar “se p, então q” significa afirmar a ocorrência que a torna falsa: p e não q. Não é “se não p, então não q”. Em De Morgan, negar “p e q” resulta em “não p ou não q”; negar “p ou q” resulta em “não p e não q”, considerando o ou inclusivo.

## Quantificadores
A negação de “todos os imóveis foram visitados” é “existe pelo menos um imóvel que não foi visitado”, e não “nenhum foi visitado”. Para refutar uma universal, basta um contraexemplo. Na frase “algum imóvel foi visitado”, algum significa pelo menos um no universo considerado, sem exigir que todos os demais não tenham sido visitados. Definir o universo evita inferências indevidas.

## Resumo de revisão

p→q só é falsa em V/F. Contrapositiva é equivalente; recíproca não. Negação: p e não q. Negar todos exige algum não; negar algum exige nenhum.

| Operação Lógica | Proposição Original | Equivalência ou Negação Exata | Mnemonico Rápido de Prova |
| --- | --- | --- | --- |
| **Negação da Conjunção (De Morgan)** | $
eg(p land q)$ — *"Não é verdade que (P e Q)"* | $
eg p lor 
eg q$ — *"Não P **ou** não Q"* | Nega tudo e troca **E** por **OU**. |
| **Negação da Disjunção (De Morgan)** | $
eg(p lor q)$ — *"Não é verdade que (P ou Q)"* | $
eg p land 
eg q$ — *"Não P **e** não Q"* | Nega tudo e troca **OU** por **E**. |
| **Negação da Condicional** | $
eg(p 	o q)$ — *"Não é verdade que (Se P, então Q)"* | $p land 
eg q$ — *"P **e** não Q"* | **MANÉ**: **Ma**ntém a primeira **e** **Ne**ga a segunda (tira o *Se... então*). |
| **Equivalências da Condicional ($p 	o q$)** | *"Se chove, então a calha enche."* | 1) **Contrapositiva**: $
eg q 	o 
eg p$ (*Se não enche, não chove*); 2) **Disjuntiva**: $
eg p lor q$ (*Não chove ou a calha enche*). | **Inverte e nega** as duas (mantendo o *Se... então*) OU **Ne**ga a 1ª **ou** **Ma**ntém a 2ª (**NEYMAR**). |
| **Negação de Quantificadores** | **Todo A é B** ($orall$) × **Algum A é B** ($exists$) × **Nenhum A é B** | Neg. de **Todo** = **Algum/Pelo menos um... não é** (**PEA + NÃO**); Neg. de **Algum** = **Nenhum é**; Neg. de **Nenhum** = **Algum é**. | Nunca negue *"Todo A é B"* com *"Nenhum A é B"*! |

## Exercícios autorais comentados

### Questão 1

[Autoral] Qual nega “Se o documento foi aprovado, então foi arquivado”?

- A) O documento não foi aprovado.
- B) Se foi arquivado, foi aprovado.
- C) O documento foi aprovado e não foi arquivado.
- D) O documento não foi aprovado e foi arquivado.

**Gabarito: C.** A negação da condicional é o caso p verdadeiro e q falso. A primeira apenas nega o antecedente; a segunda é recíproca; a quarta não torna a condicional falsa.

### Questão 2

[Autoral] A negação de “todos os imóveis foram visitados” é:

- A) Nenhum imóvel foi visitado.
- B) Ao menos um imóvel não foi visitado.
- C) Todos os imóveis foram revisitados.
- D) Exatamente um imóvel foi visitado.

**Gabarito: B.** Um contraexemplo basta para negar a universal. Não se conclui que nenhum foi visitado nem se determina uma quantidade exata.

### Questão 3

[Autoral] Uma proposição logicamente equivalente à condicional “Se o depósito está vedado, então não há larvas” é:

- A) Se há larvas, então o depósito não está vedado.
- B) Se o depósito não está vedado, então há larvas.
- C) O depósito está vedado e há larvas.
- D) Se não há larvas, então o depósito está vedado.

**Gabarito: A.** Pela equivalência contrapositiva de p → q (equivalente a ¬q → ¬p), invertem-se e negam-se ambos os termos: negar “não há larvas” produz “há larvas”, e negar “o depósito está vedado” produz “o depósito não está vedado”.

### Questão 4

[Autoral] De acordo com as Leis de De Morgan, a negação lógica da proposição composta “O agente coletou a amostra ou o supervisor assinou o boletim” é:

- A) O agente não coletou a amostra e o supervisor não assinou o boletim.
- B) O agente não coletou a amostra ou o supervisor não assinou o boletim.
- C) Se o agente coletou a amostra, então o supervisor assinou o boletim.
- D) O agente coletou a amostra e o supervisor assinou o boletim.

**Gabarito: A.** Para negar uma disjunção inclusiva (p ∨ q), negam-se ambas as proposições simples e substitui-se o conectivo “ou” pelo conectivo “e”: ¬p ∧ ¬q.

## Flashcards

**Qual é a negação de p→q?**

p ∧ ¬q (mantém a primeira proposição, troca o conectivo por “e”, e nega a segunda).

**Recíproca e contrapositiva são a mesma coisa?**

Não. A contrapositiva (¬q→¬p) é equivalente a p→q; a recíproca (q→p) não é equivalente.

**Quais são as duas equivalências clássicas da condicional p → q?**

1) Contrapositiva: ¬q → ¬p (Se não Q, então não P); 2) Disjunção equivalente: ¬p ∨ q (Não P ou Q).

## Referências de consulta

- [IMPA/OBMEP — módulos de matemática](https://portaldaobmep.impa.br/index.php/modulo/index) — Introdução à lógica matemática; definições, validade e técnicas de prova.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
