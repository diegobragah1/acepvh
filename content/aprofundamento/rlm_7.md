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
| **Permutação com Repetição ($P_n^{a,b}$)** | **SIM** (há elementos repetidos). | $P_n^{a,b} = rac{n!}{a! cdot b!}$ | Anagramas de *ARARA* (5 letras: 3 A e 2 R): $rac{5!}{3!2!} = rac{120}{12} = 10$. |
| **Arranjo Simples ($A_{n,p}$)** | **SIM** (escolhe $p$ dentre $n$ para cargos/posições/senhas distintas). | $A_{n,p} = rac{n!}{(n-p)!}$ | Escolher **1 chefe e 1 motorista** entre 6 servidores: $6 	imes 5 = 30$. |
| **Combinação Simples ($C_{n,p}$)** | **NÃO** (escolhe subconjunto/dupla/comissão de iguais). | $C_{n,p} = rac{n!}{p!(n-p)!}$ | Escolher **dupla de campo** entre 6 agentes: $rac{6 	imes 5}{2!} = 15$. |
| **Contagem Complementar ("Pelo menos um")** | Depende do caso base | $	ext{Total} - 	ext{Casos sem nenhum}$ | Duplas com **pelo menos 1 veterano** $= 	ext{Total de duplas} - 	ext{Duplas só de novatos}$. |

## Exercícios autorais comentados

### Questão 1

[Autoral] Entre 5 pessoas, quantas duplas sem cargos distintos podem ser formadas?

- A) 5
- B) 10
- C) 20
- D) 25

**Gabarito: B.** C(5,2)=5×4/2=10. Vinte contaria cada dupla em duas ordens; 25 permitiria escolhas com repetição e posições.

### Questão 2

[Autoral] Quantos códigos de três dígitos, admitindo repetição e zero inicial, contêm ao menos um zero?

- A) 27
- B) 100
- C) 271
- D) 300

**Gabarito: C.** Todos: 10³=1.000. Sem zero: 9³=729. Complemento: 1.000−729=271. Contar apenas “um zero em uma posição” trata mal as repetições.

### Questão 3

[Autoral] Quantos anagramas distintos podem ser formados com todas as 5 letras da palavra SAÚDE (desconsiderando o acento) e quantos podem ser formados com as 6 letras da palavra DENGUE, respectivamente?

- A) 120 anagramas para SAUDE e 360 anagramas para DENGUE.
- B) 25 anagramas para SAUDE e 36 anagramas para DENGUE.
- C) 120 anagramas para ambas.
- D) 720 anagramas para SAUDE e 120 para DENGUE.

**Gabarito: A.** SAUDE possui 5 letras todas distintas: P5 = 5! = 120. DENGUE possui 6 letras com a letra E repetida 2 vezes: P6^(2) = 6! / 2! = 720 / 2 = 360 anagramas distintos.

### Questão 4

[Autoral] Uma base distrital conta com 4 agentes veteranos e 3 agentes recém-admitidos. Deseja-se formar uma equipe de 3 agentes para uma vistoria especial, de modo que haja PELO MENOS 1 agente veterano na equipe. Quantas equipes distintas podem ser formadas?

- A) 34 equipes.
- B) 35 equipes.
- C) 12 equipes.
- D) 24 equipes.

**Gabarito: A.** O total de equipes de 3 pessoas escolhidas entre as 7 disponíveis é C(7,3) = (7×6×5)/(3×2×1) = 35. O único caso proibido é formar a equipe sem nenhum veterano (isto é, escolhendo os 3 recém-admitidos): C(3,3) = 1. Pelo complemento: 35 − 1 = 34 equipes.

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
