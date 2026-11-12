# rlm_7 — Contagem por decisões: ordem, repetição e restrições

## O que torna duas escolhas diferentes?
Antes de usar fórmula, defina um resultado do experimento. Escolher coordenador e relator entre 5 pessoas difere de escolher uma comissão de 2 pessoas: no primeiro problema, os cargos distinguem as posições; no segundo, a ordem da dupla não importa. A escolha de fórmula decorre dessa definição.

## Exemplo 1: cargos distintos
Há 5 escolhas para coordenador. Como uma pessoa não pode ocupar os dois cargos no modelo, restam 4 para relator. Total: 5 × 4 = 20. Esse é um arranjo de 5 elementos tomados 2 a 2. A dupla Ana/Bruno com cargos invertidos constitui outro resultado.

## Exemplo 2: comissão sem cargos
As mesmas 20 escolhas ordenadas contam cada dupla duas vezes. Dividindo por 2! = 2, obtemos 10 comissões. Na forma geral, C(n,k)=n!/[k!(n−k)!]. Não se divide por k! quando a ordem identifica resultados diferentes.

## Exemplo 3: códigos com repetição
Um código de 3 dígitos usa 0 a 9 e admite repetição e zero inicial. Há 10³ = 1.000 códigos. Se fosse um número de três algarismos, o primeiro não poderia ser zero: seriam 9 × 10 × 10 = 900 números. Código e número não são sempre modelos idênticos.

## Restrição e complemento
Quantos códigos de 3 dígitos têm pelo menos um zero? Conte todos (1.000) e subtraia os sem zero (9³ = 729): 271. A expressão “pelo menos um” pode incluir dois ou três zeros; tentar contar apenas uma posição com zero subestima ou duplica casos.

Em permutações de letras repetidas, trocas entre letras idênticas não criam palavras novas. “CASA” tem 4!/2! = 12 anagramas distintos. O divisor corrige a repetição dos dois As. Os anagramas podem não ter significado lexical. Por fim, fatorial de zero é 1; essa convenção preserva as fórmulas nos casos de escolha de todos ou de nenhum elemento.

## Resumo de revisão

Defina o resultado. Cargos: ordem importa. Comissão: ordem não importa. Repetição e zero inicial mudam o espaço. Pelo menos um pode ser resolvido por complemento. Letras iguais exigem correção da contagem.

| Modelo Combinatório | A Ordem Importa? | Fórmula | Exemplo Clássico de Prova |
| --- | --- | --- | --- |
| **Permutação Simples ($P_n$)** | **SIM** (usa todos os $n$ elementos). | $P_n = n!$ | Fila de 5 agentes: $5! = 120$; anagramas de *VETOR*: $5! = 120$. |
| **Permutação com Repetição ($P_n^{a,b}$)** | **SIM** (há elementos repetidos). | $P_n^{a,b} = \frac{n!}{a! \cdot b!}$ | Anagramas de *ARARA* (5 letras: 3 A e 2 R): $\frac{5!}{3!2!} = \frac{120}{12} = 10$. |
| **Arranjo Simples ($A_{n,p}$)** | **SIM** (escolhe $p$ dentre $n$ para cargos/posições/senhas distintas). | $A_{n,p} = \frac{n!}{(n-p)!}$ | Escolher **1 chefe e 1 motorista** entre 6 servidores: $6 \times 5 = 30$. |
| **Combinação Simples ($C_{n,p}$)** | **NÃO** (escolhe subconjunto/dupla/comissão de iguais). | $C_{n,p} = \frac{n!}{p!(n-p)!}$ | Escolher **dupla de campo** entre 6 agentes: $\frac{6 \times 5}{2!} = 15$. |
| **Contagem Complementar ("Pelo menos um")** | Depende do caso base | $\text{Total} - \text{Casos sem nenhum}$ | Duplas com **pelo menos 1 veterano** $= \text{Total de duplas} - \text{Duplas só de novatos}$. |

## Exercícios autorais comentados

### Questão 1

[Autoral] Entre 5 pessoas, quantas duplas sem cargos distintos podem ser formadas?

- A) 5
- B) 10
- C) 20
- D) 25

**Gabarito: B.** Gabarito: B. Como a ordem não importa em duplas sem função distinta, aplica-se Combinação: C(5,2) = (5 × 4) ÷ 2 = 10 duplas. Erro da A: número de pessoas individuais; erro da C: calcula Arranjo A(5,2) = 5 × 4 = 20, contando cada dupla duas vezes (AB e BA); erro da D: admite repetição da mesma pessoa (5 × 5).

### Questão 2

[Autoral] Quantos códigos de três dígitos, admitindo repetição e zero inicial, contêm ao menos um zero?

- A) 27
- B) 100
- C) 271
- D) 300

**Gabarito: C.** Gabarito: C. Total de códigos de 3 dígitos (0 a 9 com repetição): 10³ = 1.000. Códigos SEM nenhum dígito zero (dígitos 1 a 9): 9³ = 729. Pelo complementar: 1.000 − 729 = 271. Erro da A: 27 é quantidade insuficiente sem base combinatória; erro da B: conta apenas códigos com 0 na 1ª casa (1 × 10 × 10); erro da D: soma 100 + 100 + 100 contando repetições múltiplas vezes (000 contado 3 vezes).

### Questão 3

[Autoral] Quantos anagramas distintos podem ser formados com todas as 5 letras da palavra SAÚDE (desconsiderando o acento) e quantos podem ser formados com as 6 letras da palavra DENGUE, respectivamente?

- A) 120 anagramas para SAUDE e 360 anagramas para DENGUE.
- B) 25 anagramas para SAUDE e 36 anagramas para DENGUE.
- C) 120 anagramas para ambas.
- D) 720 anagramas para SAUDE e 120 para DENGUE.

**Gabarito: A.** Gabarito: A. SAUDE tem 5 letras distintas: P₅ = 5! = 120. DENGUE tem 6 letras com dois Es repetidos: P₆^(2) = 6! ÷ 2! = 720 ÷ 2 = 360. Erro da B: eleva 5² e 6² em vez de fatorial; erro da C: ignora que DENGUE tem 6 letras e repetição; erro da D: troca os números de letras entre as duas palavras.

### Questão 4

[Autoral] Uma base distrital conta com 4 agentes veteranos e 3 agentes recém-admitidos. Deseja-se formar uma equipe de 3 agentes para uma vistoria especial, de modo que haja PELO MENOS 1 agente veterano na equipe. Quantas equipes distintas podem ser formadas?

- A) 34 equipes.
- B) 35 equipes.
- C) 12 equipes.
- D) 24 equipes.

**Gabarito: A.** Gabarito: A. Total irrestrito de trios entre 7 agentes: C(7,3) = (7 × 6 × 5) ÷ 6 = 35. Único trio proibido (0 veteranos = só os 3 novatos): C(3,3) = 1. Pelo complementar: 35 − 1 = 34. Erro da B: inclui o trio formado só por recém-admitidos; erro da C: multiplica 4 × 3 (apenas duplas de 1 veterano com 1 novato); erro da D: seleciona somente combinações parciais (C(4,1)×C(3,2) + C(4,2)×C(3,1) = 12 + 18 = 30 ≠ 24).

## Flashcards

**Qual pergunta separa arranjo de combinação?**

Trocar a ordem dos escolhidos produz um resultado diferente? (Sim = Arranjo; Não = Combinação).

**Como contar “ao menos um” em problemas de combinatória?**

Calcule o total geral de casos sem restrição e subtraia os casos que não possuem nenhum elemento do tipo pedido.

**Qual a fórmula da permutação com elementos repetidos?**

Pn^(a,b) = n! / (a! × b!), onde a e b são as quantidades de vezes que cada elemento se repete.

## Referências de consulta

- [IMPA/OBMEP — módulos de matemática](https://portaldaobmep.impa.br/index.php/modulo/index) — Análise combinatória: princípio fundamental da contagem, permutações e combinações.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
