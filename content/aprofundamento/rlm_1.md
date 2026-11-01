# rlm_1 — Escolha entre MMC e MDC e conferência dos cálculos

## Conjuntos e operações sem atalhos perigosos
Naturais, inteiros, racionais e reais formam conjuntos encaixados. Um número racional pode ser escrito como razão de inteiros com denominador não nulo. Sua expansão decimal é finita ou periódica. Um decimal com infinitas casas não é automaticamente irracional: 0,333… = 1/3. O número 1 não é primo; primo tem exatamente dois divisores naturais positivos distintos.

Na prioridade das operações, potências precedem multiplicações e divisões; estas são executadas na ordem em que aparecem quando têm a mesma prioridade. Assim, 18 ÷ 3 × 2 = 6 × 2 = 12. Em −3², a potência atua antes do sinal externo e o resultado é −9; em (−3)², a base é negativa e o resultado é 9. O módulo mede distância até zero: |−5| = 5, e não −5.

## Exemplo 1: formar kits iguais
Uma unidade tem 84 fichas azuis e 126 verdes e deseja formar o maior número de kits idênticos, sem sobra. O número de kits deve dividir simultaneamente 84 e 126. Portanto, procuramos o MDC, não o MMC.
- 84 = 2² × 3 × 7; 126 = 2 × 3² × 7.
- Fatores comuns com menores expoentes: 2 × 3 × 7 = 42 kits.
- Cada kit terá 84/42 = 2 fichas azuis e 126/42 = 3 verdes.

## Exemplo 2: reencontro de ciclos
Duas rotinas repetem-se a cada 12 e 18 dias e ocorreram juntas hoje. O próximo reencontro deve ser um múltiplo positivo de ambos: MMC(12,18) = 36. Dividir 36 por 12 e por 18 confirma um número inteiro de ciclos em cada rotina.

O vocabulário ajuda, mas não basta: “maior” no enunciado não significa sempre MDC. Identifique se a incógnita **divide as quantidades** ou **é múltiplo dos períodos**. Para frações, lembre que o denominador determina partes do todo; somar 1/2 e 1/3 exige denominador comum, resultando em 5/6, e não em 2/5.

## Quantidade de divisores naturais e relação fundamental entre MMC e MDC
Fatorado um número natural $N = p_1^{a} cdot p_2^{b} cdot p_3^{c}$ em fatores primos, a quantidade total de divisores naturais positivos de $N$ é obtida somando $1$ a cada expoente e multiplicando os resultados: $D(N) = (a+1)(b+1)(c+1)$. Por exemplo, $72 = 2^3 cdot 3^2$ possui $(3+1)(2+1) = 12$ divisores positivos. Além disso, para quaisquer dois inteiros positivos $a$ e $b$, vale sempre a identidade $	ext{MMC}(a,b) 	imes 	ext{MDC}(a,b) = a 	imes b$.

## Resumo de revisão

MDC divide quantidades para repartir sem sobra; MMC encontra múltiplos comuns de ciclos. Primo tem dois divisores positivos. Decimal periódico é racional. Parênteses alteram a base da potência.

| Ferramenta Aritmética | Fórmulas e Regras Práticas | Gatilho no Enunciado da Prova | Pegadinha Clássica |
| --- | --- | --- | --- |
| **MDC (Máximo Divisor Comum)** | Produto dos fatores primos **comuns** com os **menores** expoentes. | Dividir em partes iguais de **maior tamanho possível**, sem sobra (kits, equipes, lotes). | Confundir o **tamanho de cada kit** ($	ext{MDC}$) com o **total de kits** ($	ext{Soma} div 	ext{MDC}$). |
| **MMC (Mínimo Múltiplo Comum)** | Produto de todos os fatores primos (comuns e não comuns) com os **maiores** expoentes. | Eventos periódicos que coincidem hoje e pergunta-se **quando voltarão a coincidir**. | Se a questão pede o dia do mês ou da semana, some o $	ext{MMC}$ à data inicial. |
| **Relação Fundamental e Divisores** | $	ext{MMC}(a,b) cdot 	ext{MDC}(a,b) = a cdot b$; nº de divisores de $p^a q^b = (a+1)(b+1)$. | Dados $	ext{MMC}$, $	ext{MDC}$ e um dos números, achar o outro imediatamente. | Esquecer que o número **1 não é primo** nem composto, e que **2 é o único primo par**. |
| **Fração Geratriz e Potências** | $0,aaaadots = rac{a}{9}$; $0,ababdots = rac{ab}{99}$. $(-3)^2 = +9$ × $-3^2 = -9$. | Somar dízimas periódicas ou calcular expressões com módulo e potência. | Achar que dízima periódica é número irracional (toda dízima periódica pertence a $mathbb{Q}$). |

## Exercícios autorais comentados

### Questão 1

[Autoral] Qual é o maior número de kits idênticos, sem sobra, usando 84 fichas azuis e 126 verdes?

- A) 21
- B) 42
- C) 84
- D) 252

**Gabarito: B.** MDC(84,126)=42. São 2 fichas azuis e 3 verdes por kit. 21 divide ambos, mas não é o máximo; 84 não divide 126; 252 é um múltiplo, não quantidade possível de kits.

### Questão 2

[Autoral] Rotinas de 12 e 18 dias coincidem hoje. Quando voltarão a coincidir pela primeira vez?

- A) 6 dias
- B) 18 dias
- C) 30 dias
- D) 36 dias

**Gabarito: D.** MMC(12,18)=36. Seis é o MDC; 18 não é múltiplo de 12; somar períodos não encontra necessariamente um reencontro.

### Questão 3

[Autoral] Uma coordenação de endemias recebeu 120 tubos de coleta e 180 etiquetas de identificação e deseja distribuí-los em pacotes com a mesma quantidade total de itens do mesmo tipo, de modo que cada pacote tenha a maior capacidade possível sem misturar tubos com etiquetas no mesmo pacote e sem sobra. Quantos pacotes serão formados ao todo?

- A) 5 pacotes ao todo (2 pacotes de tubos e 3 pacotes de etiquetas, com 60 unidades em cada pacote).
- B) 60 pacotes ao todo.
- C) 300 pacotes ao todo.
- D) 12 pacotes ao todo.

**Gabarito: A.** O maior divisor comum entre 120 e 180 é MDC(120, 180) = 60 unidades por pacote. Assim, formam-se 120/60 = 2 pacotes de tubos e 180/60 = 3 pacotes de etiquetas, totalizando 2 + 3 = 5 pacotes.

### Questão 4

[Autoral] Sabendo que o número natural $N = 2^3 \times 3^1 \times 5^2 = 600$ representa a quantidade de imóveis de um estrato, quantos divisores naturais positivos possui o número $600$?

- A) 24 divisores positivos.
- B) 6 divisores positivos.
- C) 10 divisores positivos.
- D) 30 divisores positivos.

**Gabarito: A.** Somando 1 a cada expoente da decomposição em fatores primos (3, 1 e 2) e multiplicando os resultados, temos: (3 + 1) × (1 + 1) × (2 + 1) = 4 × 2 × 3 = 24 divisores naturais positivos.

## Flashcards

**O que distingue um problema de MMC de um de MDC?**

No MMC, o resultado é múltiplo dos períodos (encontro futuro de ciclos); no MDC, divide as quantidades em partes iguais sem sobra.

**0,333… é irracional?**

Não. É uma dízima periódica igual a 1/3, portanto um número racional (Q).

**Como calcular rapidamente a quantidade de divisores positivos de um número natural fatorado?**

Decomponha em fatores primos, some 1 a cada expoente e multiplique os resultados: (a+1)(b+1)(c+1).

## Referências de consulta

- [IMPA/OBMEP — módulos de matemática](https://portaldaobmep.impa.br/index.php/modulo/index) — Números naturais: operações, divisibilidade, números primos, MMC e MDC.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
