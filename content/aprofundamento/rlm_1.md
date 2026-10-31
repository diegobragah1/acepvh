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

## Resumo de revisão

MDC divide quantidades para repartir sem sobra; MMC encontra múltiplos comuns de ciclos. Primo tem dois divisores positivos. Decimal periódico é racional. Parênteses alteram a base da potência.

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

## Flashcards

**O que distingue um problema de MMC de um de MDC?**

No MMC, o resultado é múltiplo das quantidades; no MDC, divide-as.

**0,333… é irracional?**

Não. É uma dízima periódica igual a 1/3.

## Referências de consulta

- [IMPA/OBMEP — módulos de matemática](https://portaldaobmep.impa.br/index.php/modulo/index) — Números naturais: operações, divisibilidade, números primos, MMC e MDC.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
