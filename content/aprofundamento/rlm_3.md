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
| **Pontes Volume $\leftrightarrow$ Capacidade** | **$1\text{ m}^3 = 1.000\text{ L}$**; **$1\text{ dm}^3 = 1\text{ L}$**; **$1\text{ cm}^3 = 1\text{ mL}$**. | Converta as dimensões da caixa-d'água para **metros**, multiplique ($C \times L \times A$) e multiplique por **1.000** para obter litros. | Multiplicar metros por centímetros sem converter antes para a mesma unidade. |
| **Volume de Reservatório Cilíndrico (Tonel)** | $V = \pi \cdot r^2 \cdot h$ (onde $r = \text{diâmetro} \div 2$). | Se diâmetro $= 1\text{ m}$, então $r = 0,5\text{ m}$ (e $r^2 = 0,25\text{ m}^2$). | Usar o diâmetro inteiro no lugar do raio $r$, quadruplicando erroneamente o volume. |
| **Massa (t $\to$ kg $\to$ g $\to$ mg)** | $1\text{ t} = 1.000\text{ kg}$; $1\text{ kg} = 1.000\text{ g}$; $1\text{ g} = 1.000\text{ mg}$. | Cada degrau principal multiplica ou divide por $1.000$. | Esquecer que $2\text{ g} = 2.000\text{ mg}$ ao calcular concentração por litro. |
| **Tempo Decimal $\leftrightarrow$ Sexagesimal** | $0,1\text{ h} = 6\text{ min}$; $0,25\text{ h} = 15\text{ min}$; $0,5\text{ h} = 30\text{ min}$; $0,75\text{ h} = 45\text{ min}$. | Multiplique a parte decimal da hora por **60** para achar os minutos. | Ler $2,4\text{ horas}$ como *"2 horas e 40 minutos"* (o correto é $2\text{ h } + 0,4 \times 60 = \mathbf{2\text{ h } 24\text{ min}}$). |

## Exercícios autorais comentados

### Questão 1

[Autoral] Qual é a capacidade de um reservatório ideal de 1,2 m × 80 cm × 50 cm?

- A) 48 L
- B) 480 L
- C) 4.800 L
- D) 480.000 L

**Gabarito: B.** Gabarito: B. Convertendo tudo para metros: 1,2 m × 0,8 m × 0,5 m = 0,48 m³. Como 1 m³ = 1.000 L, 0,48 × 1.000 = 480 litros. Erro da A: erro de uma casa decimal (× 100 em vez de × 1.000); erro da C: multiplica por 10.000 erroneamente; erro da D: informa em mililitros ou cm³ (480.000 cm³) em vez de litros.

### Questão 2

[Autoral] Em escala 1:2.000, 3 cm no mapa representam:

- A) 6 m
- B) 60 m
- C) 600 m
- D) 6.000 m

**Gabarito: B.** Gabarito: B. Distância real = 3 cm × 2.000 = 6.000 cm. Como 1 m = 100 cm, divide-se por 100: 6.000 ÷ 100 = 60 metros. Erro da A: divide por 1.000 por engano; erro da C: divide apenas por 10; erro da D: mantém em centímetros trocando apenas a unidade para metros.

### Questão 3

[Autoral] Uma equipe de campo registrou que o deslocamento fluvial e a vistoria em uma comunidade ribeirinha duraram exatas 3,4 horas. Convertendo esse tempo para horas e minutos, obtém-se:

- A) 3 horas e 24 minutos.
- B) 3 horas e 40 minutos.
- C) 3 horas e 04 minutos.
- D) 340 minutos.

**Gabarito: A.** Gabarito: A. A parte inteira é 3 horas; a fração decimal 0,4 h equivale a 0,4 × 60 = 24 minutos. Logo, 3 h e 24 min. Erro da B: confunde 0,4 h com 40 minutos (sistema decimal em vez de sexagesimal); erro da C: lê o dígito 4 diretamente como 04 min; erro da D: 3,4 × 60 = 204 minutos, não 340 minutos.

### Questão 4

[Autoral] Um reservatório cilíndrico vertical possui diâmetro interno de 2 metros e altura útil de 1,5 metro ($\pi = 3,14$). Qual é a capacidade total desse reservatório em litros?

- A) 4.710 litros.
- B) 9.420 litros.
- C) 18.840 litros.
- D) 471 litros.

**Gabarito: A.** Gabarito: A. Com diâmetro D = 2 m, o raio é r = D/2 = 1 m. Volume: V = π × r² × h = 3,14 × 1² × 1,5 = 4,71 m³ = 4.710 litros. Erro da B: multiplica usando r = 2 m ou dobra o resultado (V = 9,42 seria se h = 3 m); erro da C: usa r = 2 m na fórmula π·r²·h (3,14 × 4 × 1,5 = 18,84 m³); erro da D: erro de uma casa decimal ao converter m³ para litros.

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
