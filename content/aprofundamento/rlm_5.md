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

## Flashcards

**Qual é a negação de p→q?**

p ∧ ¬q.

**Recíproca e contrapositiva são a mesma coisa?**

Não. A contrapositiva ¬q→¬p é equivalente a p→q; a recíproca q→p não é em geral.

## Referências de consulta

- [IMPA/OBMEP — módulos de matemática](https://portaldaobmep.impa.br/index.php/modulo/index) — Introdução à lógica matemática; definições, validade e técnicas de prova.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
