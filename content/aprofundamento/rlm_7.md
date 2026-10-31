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

## Flashcards

**Qual pergunta separa arranjo de combinação?**

Trocar a ordem produz um resultado diferente?

**Como contar “ao menos um zero” em três dígitos?**

Conte todos e subtraia os que não têm zero.

## Referências de consulta

- [IMPA/OBMEP — módulos de matemática](https://portaldaobmep.impa.br/index.php/modulo/index) — Análise combinatória: princípio fundamental da contagem, permutações e combinações.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
