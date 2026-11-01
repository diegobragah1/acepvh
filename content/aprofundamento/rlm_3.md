# rlm_3 — Análise dimensional, escala e grandezas que não se convertem do mesmo jeito

## A dimensão determina o fator
Comprimento mede uma dimensão; área, duas; volume, três. Se 1 m = 100 cm, então 1 m² = 10.000 cm² e 1 m³ = 1.000.000 cm³. Multiplicar por 100 em toda conversão entre metros e centímetros é um erro: o fator precisa ser elevado à potência da dimensão.

## Exemplo resolvido com unidades mistas
Um reservatório retangular ideal tem medidas internas de 1,2 m, 80 cm e 50 cm. Primeiro uniformize: 80 cm = 0,8 m; 50 cm = 0,5 m. O volume é 1,2 × 0,8 × 0,5 = 0,48 m³. Como 1 m³ = 1.000 L, cabem 480 L. Se estiver preenchido até metade da altura, com seção constante, haverá 240 L. Não use dimensões externas nem pressuponha preenchimento total sem indicação.

## Escala explicada
Em uma planta de escala 1:2.000, 3 cm representam 3 × 2.000 = 6.000 cm, ou 60 m. A razão relaciona comprimentos na mesma unidade. Se a figura sofre ampliação linear de fator 2, sua área multiplica-se por 4, não por 2. A escala de área é o quadrado da escala linear.

## Tempo, massa e capacidade
1,5 h = 1 h + 0,5 × 60 min = 1 h 30 min; 1 h 20 min = 1 + 20/60 h, aproximadamente 1,333 h. As casas decimais de hora não representam minutos diretamente. Em massa, 0,75 kg = 750 g. Já capacidade e massa não se confundem: converter litros de uma substância em quilogramas exige sua densidade e as condições pertinentes. Não é verdade que todo litro pesa 1 kg.

## Conferência pelas unidades
Ao multiplicar m × m × m, o resultado é m³. Ao dividir visitas por horas, obtém-se uma taxa de visitas/hora. Essa verificação detecta fórmulas escolhidas por aparência. Para calcular área, é preciso uma relação geométrica adequada; para calcular capacidade, precisa-se de volume interno útil. O exemplo de reservatório ensina matemática e não estabelece dosagem de produto.

## Resumo de revisão

Comprimento, área e volume usam fatores com potências diferentes. Uniformize unidades. Escala linear não é escala de área. Hora decimal exige fator 60; litro para massa depende de densidade.

| Grandeza / Conversão no Campo do ACE | Equivalência Exata | Passo a Passo Prático | Erro Clássico de Prova |
| --- | --- | --- | --- |
| **Pontes Volume $leftrightarrow$ Capacidade** | **$1	ext{ m}^3 = 1.000	ext{ L}$**; **$1	ext{ dm}^3 = 1	ext{ L}$**; **$1	ext{ cm}^3 = 1	ext{ mL}$**. | Converta as dimensões da caixa-d'água para **metros**, multiplique ($C 	imes L 	imes A$) e multiplique por **1.000** para obter litros. | Multiplicar metros por centímetros sem converter antes para a mesma unidade. |
| **Volume de Reservatório Cilíndrico (Tonel)** | $V = pi cdot r^2 cdot h$ (onde $r = 	ext{diâmetro} div 2$). | Se diâmetro $= 1	ext{ m}$, então $r = 0,5	ext{ m}$ (e $r^2 = 0,25	ext{ m}^2$). | Usar o diâmetro inteiro no lugar do raio $r$, quadruplicando erroneamente o volume. |
| **Massa (t $	o$ kg $	o$ g $	o$ mg)** | $1	ext{ t} = 1.000	ext{ kg}$; $1	ext{ kg} = 1.000	ext{ g}$; $1	ext{ g} = 1.000	ext{ mg}$. | Cada degrau principal multiplica ou divide por $1.000$. | Esquecer que $2	ext{ g} = 2.000	ext{ mg}$ ao calcular concentração por litro. |
| **Tempo Decimal $leftrightarrow$ Sexagesimal** | $0,1	ext{ h} = 6	ext{ min}$; $0,25	ext{ h} = 15	ext{ min}$; $0,5	ext{ h} = 30	ext{ min}$; $0,75	ext{ h} = 45	ext{ min}$. | Multiplique a parte decimal da hora por **60** para achar os minutos. | Ler $2,4	ext{ horas}$ como *"2 horas e 40 minutos"* (o correto é $2	ext{ h } + 0,4 	imes 60 = mathbf{2	ext{ h } 24	ext{ min}}$). |

## Exercícios autorais comentados

### Questão 1

[Autoral] Qual é a capacidade de um reservatório ideal de 1,2 m × 80 cm × 50 cm?

- A) 48 L
- B) 480 L
- C) 4.800 L
- D) 480.000 L

**Gabarito: B.** 1,2×0,8×0,5=0,48 m³=480 L. As demais respostas resultam de erros de conversão ou de fator decimal.

### Questão 2

[Autoral] Em escala 1:2.000, 3 cm no mapa representam:

- A) 6 m
- B) 60 m
- C) 600 m
- D) 6.000 m

**Gabarito: B.** 3×2.000=6.000 cm. Dividindo por 100, são 60 m. É preciso manter a mesma unidade antes da conversão final.

### Questão 3

[Autoral] Uma equipe de campo registrou que o deslocamento fluvial e a vistoria em uma comunidade ribeirinha duraram exatas 3,4 horas. Convertendo esse tempo para horas e minutos, obtém-se:

- A) 3 horas e 24 minutos.
- B) 3 horas e 40 minutos.
- C) 3 horas e 04 minutos.
- D) 340 minutos.

**Gabarito: A.** A parte inteira corresponde a 3 horas; a parte decimal (0,4 hora) deve ser multiplicada por 60 minutos: 0,4 × 60 = 24 minutos. Logo, 3,4 h = 3 horas e 24 minutos.

### Questão 4

[Autoral] Um reservatório cilíndrico vertical possui diâmetro interno de 2 metros e altura útil de 1,5 metro ($pi = 3,14$). Qual é a capacidade total desse reservatório em litros?

- A) 4.710 litros.
- B) 9.420 litros.
- C) 18.840 litros.
- D) 471 litros.

**Gabarito: A.** Como o diâmetro é 2 m, o raio é r = 1 m. O volume do cilindro é V = π × r² × h = 3,14 × 1² × 1,5 = 4,71 m³. Multiplicando por 1.000 L/m³, obtêm-se 4.710 litros.

## Flashcards

**Quanto vale 1 m² em cm² e 1 m³ em litros?**

1 m² = 10.000 cm²; 1 m³ = 1.000 litros (e 1 dm³ = 1 litro; 1 cm³ = 1 mL).

**Pode converter qualquer litro em 1 kg?**

Não. A relação entre volume/capacidade e massa depende da densidade da substância (1 L ≈ 1 kg vale para água pura nas condições padrão).

**Como converter 2,75 horas em horas e minutos?**

Multiplique a parte decimal por 60: 0,75 × 60 = 45 minutos → 2 horas e 45 minutos.

## Referências de consulta

- [IMPA/OBMEP — módulos de matemática](https://portaldaobmep.impa.br/index.php/modulo/index) — Geometria: medidas de comprimento, área, volume e semelhança; exemplos dimensionais autorais.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
