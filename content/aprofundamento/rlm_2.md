# rlm_2 — Regra de três composta com modelo e verificação

## Antes da conta, estabeleça o modelo
Uma relação é diretamente proporcional quando multiplicar uma grandeza por um fator multiplica a outra pelo mesmo fator. É inversamente proporcional quando o produto das duas permanece constante no modelo considerado. Duas grandezas aumentarem juntas não basta para provar proporcionalidade: tarifa com valor fixo, por exemplo, não é proporcional à distância total.

## Exemplo completo de trabalho de equipe
Quatro agentes, trabalhando 6 horas por dia durante 3 dias, concluem 360 visitas fictícias. Suponha produtividade constante, visitas equivalentes e ausência de deslocamentos adicionais. Quantas visitas seis agentes fariam em 5 horas por dia durante 4 dias?
- O esforço inicial corresponde a 4 × 6 × 3 = 72 agente-horas.
- A produtividade do modelo é 360/72 = 5 visitas por agente-hora.
- A nova capacidade é 6 × 5 × 4 = 120 agente-horas.
- Logo, 120 × 5 = 600 visitas.

Também se pode usar 360 × (6/4) × (5/6) × (4/3) = 600. Cada razão deve comparar a mesma grandeza, mantendo as outras controladas. Se a pergunta fosse o tempo para executar a mesma quantidade de visitas, aumentar o número de agentes reduziria o tempo nas hipóteses do modelo.

## Porcentagem e pontos percentuais
Uma taxa que passa de 20% para 25% aumenta 5 pontos percentuais. O crescimento relativo é (25−20)/20 = 25%. São duas medidas diferentes. Em uma redução de R$ 250 para R$ 200, o desconto é 50/250 = 20%, tomando o preço inicial como base. Para recuperar R$ 250 partindo de R$ 200, exige-se aumento de 50/200 = 25%.

## Limites e conferência
No trabalho real, produtividade varia e deslocamento consome tempo. O problema matemático deve enunciar suas hipóteses; não transforme o exemplo em meta operacional da equipe. Para conferir, calcule a taxa unitária e recomponha o total. Nas divisões proporcionais, confira soma e razão; em porcentagem, escreva explicitamente qual é a base de 100%.

## Resumo de revisão

Grandezas proporcionais obedecem a um modelo. Taxa unitária ajuda na regra de três composta. De 20% para 25%: +5 pontos percentuais e +25% relativo. A base muda em desconto e recomposição.

| Modelo Proporcional / Percentual | Equação / Método Rápido | Exemplo Resolvido | Armadilha Comum |
| --- | --- | --- | --- |
| **Divisão Diretamente Proporcional** | $\frac{A}{p_1} = \frac{B}{p_2} = k \implies p_1 k + p_2 k = \text{Total}$ | Dividir 300 imóveis diretamente a 2 e 3: $2k+3k=300 \implies k=60 \implies 120\text{ e }180$. | Esquecer de multiplicar a constante $k$ pelo peso pedido na pergunta. |
| **Divisão Inversamente Proporcional** | Proporcional aos inversos $\frac{1}{p_1}$ e $\frac{1}{p_2}$. | Dividir 100 kits inversamente a 2 e 3 ($\text{MMC}=6 \to$ pesos $3$ e $2$): $5k=100 \implies 60\text{ e }40$. | Quem tem o **menor** número no critério inverso (ex.: menos faltas) recebe a **maior** parte. |
| **Regra de Três Composta (Causas × Efeito)** | $\frac{\text{Produção}_1}{\text{Agentes}_1 \cdot \text{Dias}_1 \cdot \text{Horas}_1} = \frac{\text{Produção}_2}{\text{Agentes}_2 \cdot \text{Dias}_2 \cdot \text{Horas}_2}$ | Isolar o **produto/serviço executado** no numerador e os **fatores de esforço** no denominador evita errar setas. | Se houver grau de **dificuldade**, ele entra junto com a Produção (no numerador). |
| **Variações Percentuais Sucessivas** | Fator acumulado $= (1 \pm i_1) \times (1 \pm i_2)$ | Aumento de $20\%$ seguido de queda de $20\%$: $1,20 \times 0,80 = 0,96$ (**queda líquida de $4\%$**). | Achar que $+20\%$ seguido de $-20\%$ volta exatamente aos $100\%$ iniciais. |

## Exercícios autorais comentados

### Questão 1

[Autoral] No modelo do texto, 4 agentes × 6 h × 3 dias produzem 360 visitas. Qual produção corresponde a 6 agentes × 5 h × 4 dias?

- A) 300
- B) 480
- C) 600
- D) 720

**Gabarito: C.** Gabarito: C. Produtividade unitária: 360 ÷ (4 × 6 × 3) = 360 ÷ 72 = 5 visitas por agente-hora. Novo cenário: 6 × 5 × 4 = 120 agentes-hora × 5 = 600 visitas. Erro da A: subestima o aumento de agentes/dias; erro da B: confunde fatores da proporção composta; erro da D: multiplica 360 por 2 erroneamente.

### Questão 2

[Autoral] Uma taxa passa de 20% para 25%. Qual é a variação relativa?

- A) 5%
- B) 20%
- C) 25%
- D) 45%

**Gabarito: C.** Gabarito: C. A diferença absoluta é de 5 pontos percentuais (25% − 20%). Relativamente à taxa inicial de 20%, tem-se 5 ÷ 20 = 0,25 = 25% de aumento relativo. Erro da A: confunde variação absoluta em pontos percentuais (5 p.p.) com variação relativa; erro da B: repete a taxa inicial; erro da D: soma as duas taxas (20% + 25%).

### Questão 3

[Autoral] O número de focos registrados em um distrito subiu 20% do 1º para o 2º bimestre e, após um mutirão de limpeza, caiu 25% do 2º para o 3º bimestre. Em relação ao 1º bimestre, a quantidade de focos no 3º bimestre apresentou:

- A) Redução acumulada de 10%.
- B) Redução acumulada de 5%.
- C) Aumento acumulado de 5%.
- D) Estabilidade exata (0% de variação).

**Gabarito: A.** Gabarito: A. Aplicando fatores sucessivos sobre a base 1: 1,20 × 0,75 = 0,90 (= 90%), isto é, redução líquida de 10%. Erro da B: soma ingênua +20% − 25% = −5%, ignorando que a queda de 25% incide sobre os 120% do 2º bimestre; erro da C e D: subestimam o efeito da redução sobre base ampliada.

### Questão 4

[Autoral] Um lote de 220 armadilhas será dividido entre duas equipes de modo inversamente proporcional ao número de veículos avariados de cada uma (2 e 3 veículos, respectivamente). Quantas armadilhas receberá a equipe que teve MENOS veículos avariados?

- A) 132 armadilhas.
- B) 88 armadilhas.
- C) 110 armadilhas.
- D) 150 armadilhas.

**Gabarito: A.** Gabarito: A. Dividir inversamente a 2 e 3 equivale a dividir diretamente por 1/2 e 1/3 (proporção 3:2). Logo 3k + 2k = 220 → 5k = 220 → k = 44. Quem teve menos avarias (2) fica com a maior cota: 3 × 44 = 132. Erro da B: 88 é a parte da outra equipe (2 × 44); erro da C: divisão igualitária (220 ÷ 2); erro da D: erro na fração proporcional.

### Questão 5

[Autoral] Em um depósito da SEMUSA, o consumo diário de um larvicida é diretamente proporcional ao número de equipes em campo e ao número de dias úteis. Sabendo que 5 equipes utilizam 30 kg do insumo em 6 dias, quantos quilogramas serão necessários para 8 equipes trabalharem por 10 dias nas mesmas condições?

- A) 80 kg.
- B) 48 kg.
- C) 64 kg.
- D) 96 kg.

**Gabarito: A.** Gabarito: A. Consumo por equipe-dia = 30 ÷ (5 × 6) = 1 kg/equipe-dia. Para 8 equipes durante 10 dias: 8 × 10 × 1 = 80 kg. Erro da B: 48 kg considera apenas o aumento de equipes (8 × 6); erro da C: erro de inversão na regra de três composta; erro da D: multiplicação indevida de razões.

## Flashcards

**De 20% para 25% significa quanto?**

Aumento de 5 pontos percentuais ou de 25% em relação à taxa inicial (5/20 = 0,25).

**Por que explicitar produtividade constante?**

Porque a regra de três pressupõe que a taxa unitária do modelo se mantém nas condições comparadas.

**Qual o resultado de um aumento de 10% seguido de um desconto de 10% sobre um valor?**

1,10 × 0,90 = 0,99, ou seja, uma redução líquida de 1% em relação ao valor inicial.

## Referências de consulta

- [IMPA/OBMEP — Razões e proporções](https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=57&tipo=7) — Números direta e inversamente proporcionais; regra de três simples e composta.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
