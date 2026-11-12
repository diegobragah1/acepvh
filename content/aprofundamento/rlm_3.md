# rlm_3 — Grandezas e Medidas: Cubagem de Depósitos e Dosagem de Larvicidas

### 1. Sistema Métrico Decimal e Fatores de Escala Dimensional
No Sistema Internacional de Unidades (SI), a conversão de medidas exige atenção rigorosa à dimensão geométrica da grandeza:
- **Comprimento ($1\text{D}$)**: cada unidade varia em fator $10$ ($1\text{ m} = 10\text{ dm} = 100\text{ cm} = 1.000\text{ mm}$).
- **Área ($2\text{D}$)**: cada unidade varia em fator $10^2 = 100$ ($1\text{ m}^2 = 100\text{ dm}^2 = 10.000\text{ cm}^2$; $1\text{ hectare (ha)} = 10.000\text{ m}^2$).
- **Volume ($3\text{D}$)**: cada unidade varia em fator $10^3 = 1.000$ ($1\text{ m}^3 = 1.000\text{ dm}^3 = 1.000.000\text{ cm}^3$).
- **Escala Cartográfica**: a escala linear é $E = \frac{d}{D}$. A escala de área corresponde ao quadrado da escala linear: $E_{\text{área}} = E^2$. Se o mapa está na escala $1:2.000$, uma linha de $3\text{ cm}$ representa $3 \times 2.000 = 6.000\text{ cm} = 60\text{ m}$.

### 2. Pontes Fundamentais entre Volume, Capacidade e Massa
A articulação entre espaço tridimensional e capacidade de armazenamento de água é direta:
- **$1\text{ m}^3 = 1.000\text{ litros}$**;
- **$1\text{ dm}^3 = 1\text{ litro}$**;
- **$1\text{ cm}^3 = 1\text{ mililitro (mL)}$**.
- **Equivalência para Água Pura**: sob condições normais de temperatura e pressão, $1\text{ litro de água} \approx 1\text{ kg} = 1.000\text{ gramas}$. Para outras substâncias líquidas, a conversão depende de sua densidade ($\rho = \frac{m}{V}$).

### 3. Tempo Decimal vs Tempo Sexagesimal
O tempo civil organiza-se em base sexagesimal (base 60), enquanto calculadoras operam em base decimal:
- $1\text{ hora} = 60\text{ minutos}$; $1\text{ minuto} = 60\text{ segundos}$.
- **Conversão de decimal para minutos**: multiplica-se a parte fracionária por 60:
  * $3,4\text{ horas} = 3\text{ horas} + (0,4 \times 60)\text{ minutos} = 3\text{ h } 24\text{ min}$ (e não 3 horas e 40 minutos!);
  * $2,75\text{ horas} = 2\text{ horas} + (0,75 \times 60)\text{ minutos} = 2\text{ h } 45\text{ min}$.
- **Conversão de minutos para decimal**: divide-se por 60:
  * $1\text{ h } 20\text{ min} = 1 + \frac{20}{60} = 1 + \frac{1}{3} \approx 1,333\text{ horas}$.

### 4. CUBAGEM DE DEPÓSITOS APLICADA AO TRABALHO DO ACE
No controle químico de criadouros de mosquitos vetores (*Aedes aegypti*), o ACE calcula o volume de recipientes para dosar larvicidas:
1. **Depósito Retangular / Caixa-d'água / Tanque Paralelepípedo**:
   $$V = c \times l \times h$$
   Onde $c$ é o comprimento, $l$ a largura e $h$ a altura útil de água (todas em metros).
   *Exemplo*: Reservatório de $1,2\text{ m} \times 0,8\text{ m} \times 0,5\text{ m} = 0,48\text{ m}^3$.
   Capacidade em litros: $0,48 \times 1.000 = 480\text{ litros}$.
2. **Depósito Cilíndrico / Tambor / Tonel / Cisterna**:
   $$V = \pi \cdot r^2 \cdot h = \pi \cdot \left(\frac{D}{2}\right)^2 \cdot h$$
   Onde $D$ é o diâmetro interno, $r = \frac{D}{2}$ é o raio da base cilíndrica e $h$ é a altura de água.
   *Alerta clássico de concurso*: a fórmula utiliza o **raio $r$**, e não o diâmetro $D$. Usar o diâmetro diretamente quadruplica incorretamente o volume ($2^2 = 4$).
   *Exemplo*: Cisterna de diâmetro $D = 2\text{ m}$ ($r = 1\text{ m}$) e $h = 1,5\text{ m}$ ($\pi = 3,14$):
   $$V = 3,14 \times 1^2 \times 1,5 = 4,71\text{ m}^3 = 4.710\text{ litros}$$

### 5. DOSAGEM DE LARVICIDAS EM GRAMAS E PARTES POR MILHÃO (PPM)
A concentração de larvicidas e produtos saneantes é expressa em partes por milhão (ppm):
- **Equivalência Física**: $1\text{ ppm} = 1\text{ mg de princípio ativo por litro de água} = 1\text{ g/m}^3$.
- **Cálculo da Massa de Larvicida**:
  $$\text{Dose em gramas (g)} = \text{Volume útil (m}^3\text{)} \times \text{Concentração exigida (g/m}^3\text{)}$$
  *Exemplo*: Tratar um reservatório com volume de $3,5\text{ m}^3$ de água na dosagem recomendada pelo Ministério da Saúde de $1\text{ ppm}$ ($1\text{ g/m}^3$):
  $$\text{Massa} = 3,5\text{ m}^3 \times 1\text{ g/m}^3 = 3,5\text{ gramas de larvicida}$$

## Resumo de revisão

Fatores métricos dependem da dimensão (10 em 1D, 100 em 2D, 1000 em 3D). 1 m³ = 1000 L; 1 dm³ = 1 L; 1 cm³ = 1 mL. 1 ppm = 1 mg/L = 1 g/m³. No cilindro, o raio é a metade do diâmetro.

| Grandeza / Geometria | Fórmula de Volume e Conversão | Exemplo Prático de Campo | Erro Frequente na Prova |
| --- | --- | --- | --- |
| **Depósito Retangular (Paralelepípedo)** | $V = c \times l \times h$ (em metros). Capacidade $= V \times 1.000\text{ L}$. | Caixa de $1,2\text{m} \times 0,8\text{m} \times 0,5\text{m} = 0,48\text{m}^3 = 480\text{L}$. | Multiplicar metros por centímetros sem uniformizar a unidade antes. |
| **Depósito Cilíndrico (Tambor/Cisterna)** | $V = \pi \cdot r^2 \cdot h = \pi \cdot (D/2)^2 \cdot h$. | Diâmetro $2\text{m} \implies r=1\text{m}$; com $h=1,5\text{m} \implies 4,71\text{m}^3 = 4.710\text{L}$. | Usar o diâmetro no lugar do raio, quadruplicando o volume final. |
| **Dosagem de Larvicida (ppm $\leftrightarrow$ g)** | $1\text{ ppm} = 1\text{ mg/L} = 1\text{ g/m}^3$. $\text{Dose(g)} = V(\text{m}^3) \times \text{ppm}$. | Tratar $3,5\text{m}^3$ a $1\text{ ppm} \implies 3,5\text{ g}$ de produto comercial. | Confundir concentração em mg/L com g/L (erro de fator 1.000). |
| **Tempo Decimal $\to$ Horas e Minutos** | Multiplicar a parte decimal por 60 minutos. | $3,4\text{ h} = 3\text{ h} + (0,4 \times 60) = \mathbf{3\text{ h } 24\text{ min}}$. | Ler $3,4\text{ horas}$ como *"3 horas e 40 minutos"*. |

## Exercícios autorais comentados

### Questão 1

[Autoral] Um Agente de Combate às Endemias inspeciona um depósito retangular (caixa-d'água de alvenaria) com medidas internas de 1,2 metro de comprimento, 80 centímetros de largura e 50 centímetros de altura útil. Qual é a capacidade máxima desse reservatório em litros?

- A) 480 litros.
- B) 48 litros.
- C) 4.800 litros.
- D) 480.000 litros.

**Gabarito: A.** Gabarito: A. Uniformizando as unidades para metros: comprimento = 1,2 m; largura = 80 cm = 0,8 m; altura = 50 cm = 0,5 m. O volume interno em metros cúbicos é: V = c × l × h = 1,2 × 0,8 × 0,5 = 0,48 m³. Como 1 m³ equivale exatamente a 1.000 litros, a capacidade é 0,48 × 1.000 = 480 litros. Erro da B: erra a conversão multiplicando por 100 em vez de 1.000; erro da C: multiplica por 10.000 por equívoco de casas decimais; erro da D: expressa em centímetros cúbicos ou mililitros (480.000 cm³ = 480 L).

### Questão 2

[Autoral] Um tambor metálico cilíndrico vertical (criadouro de Aedes aegypti) possui diâmetro interno de 2 metros e altura de água de 1,5 metro (adote $\pi = 3,14$). Qual é o volume de água contido nesse depósito em metros cúbicos e sua respectiva capacidade em litros?

- A) $4,71\text{ m}^3$ e $4.710\text{ litros}$.
- B) $9,42\text{ m}^3$ e $9.420\text{ litros}$.
- C) $18,84\text{ m}^3$ e $18.840\text{ litros}$.
- D) $0,471\text{ m}^3$ e $471\text{ litros}$.

**Gabarito: A.** Gabarito: A. O raio r é a metade do diâmetro D: r = 2 ÷ 2 = 1 metro. A fórmula do volume do cilindro é V = π · r² · h. Substituindo os valores: V = 3,14 × (1)² × 1,5 = 3,14 × 1 × 1,5 = 4,71 m³. Convertendo para capacidade (1 m³ = 1.000 L): 4,71 × 1.000 = 4.710 litros. Erro da B: utiliza o diâmetro (2 m) no lugar do raio sem elevar ao quadrado (3,14 × 2 × 1,5 = 9,42 m³); erro da C: utiliza o diâmetro inteiro (2 m) como raio (r = 2 => r² = 4), quadruplicando o volume para 18,84 m³; erro da D: divide por 10 indevidamente.

### Questão 3

[Autoral] Um larvicida granulado deve ser aplicado na dosagem recomendada pelo Ministério da Saúde de $1\text{ ppm}$ ($1\text{ parte por milhão} = 1\text{ mg/L} = 1\text{ g/m}^3$) de produto comercial por volume de água tratada. Se um ACE precisa tratar uma cisterna com volume útil de $3,5\text{ m}^3$ de água, qual massa de larvicida em gramas deverá ser dosada?

- A) $3,5\text{ gramas}$.
- B) $35\text{ gramas}$.
- C) $0,35\text{ grama}$.
- D) $350\text{ gramas}$.

**Gabarito: A.** Gabarito: A. Pela equivalência de grandezas físicas: 1 ppm equivale a 1 mg de produto por litro de água, o que corresponde a 1.000 mg por 1.000 litros, isto é, exatamente 1 g por metro cúbico (1 g/m³). Para um volume de 3,5 m³ à concentração de 1 g/m³, a massa necessária de larvicida é: 3,5 m³ × 1 g/m³ = 3,5 gramas. Erro da B: multiplica por 10 por confusão de conversão de unidades; erro da C: divide por 10 indevidamente; erro da D: confunde gramas com decigramas ou aplica fator 100.

### Questão 4

[Autoral] Em uma missão de campo em comunidade ribeirinha de Porto Velho, um ACE registrou no boletim que a viagem fluvial de ida e volta durou exatas $3,4\text{ horas}$. Ao converter esse tempo decimal para horas e minutos do sistema sexagesimal, obtém-se:

- A) 3 horas e 24 minutos.
- B) 3 horas e 40 minutos.
- C) 3 horas e 4 minutos.
- D) 204 minutos ou 3 horas e 44 minutos.

**Gabarito: A.** Gabarito: A. No sistema sexagesimal, a hora possui 60 minutos. A parte inteira é de 3 horas. A fração decimal de 0,4 hora deve ser multiplicada por 60 para obter os minutos correspondentes: 0,4 × 60 = 24 minutos. Portanto, 3,4 horas = 3 horas e 24 minutos. Erro da B: erro comum de interpretar a casa decimal 0,4 como 40 minutos (confundindo base 10 com base 60); erro da C: lê diretamente o algarismo 4 como 4 minutos; erro da D: 3,4 h equivale a 204 minutos, mas 204 min são 3 h e 24 min, e não 3 h e 44 min.

### Questão 5

[Autoral] Em uma planta cartográfica de reconhecimento geográfico do município desenhada na escala $1:2.000$, a distância linear medida entre duas residências é de $3\text{ cm}$. A distância real correspondente no terreno é de:

- A) 60 metros.
- B) 6 metros.
- C) 600 metros.
- D) 6.000 metros.

**Gabarito: A.** Gabarito: A. Pela definição de escala linear E = d / D, onde 1 : 2.000 significa que cada 1 cm no mapa representa 2.000 cm no terreno. Para 3 cm: D = 3 × 2.000 = 6.000 cm. Como 1 metro tem 100 cm, divide-se por 100: 6.000 ÷ 100 = 60 metros. Erro da B: divide por 1.000 por engano; erro da C: divide por 10; erro da D: esquece de converter centímetros em metros, mantendo o valor numérico em centímetros.

## Flashcards

**Qual a relação exata entre volume em metros cúbicos e capacidade em litros?**

1 metro cúbico (m³) equivale a exatamente 1.000 litros (1 m³ = 1.000 L; 1 dm³ = 1 L; 1 cm³ = 1 mL).

**Como calcular a capacidade de um depósito cilíndrico de diâmetro D e altura h?**

Calcula-se o raio r = D / 2 e aplica-se a fórmula do volume: V = π · r² · h = π · (D/2)² · h. Multiplica-se o resultado em m³ por 1.000 para obter litros.

**Quanto vale a concentração de 1 ppm de larvicida em gramas por metro cúbico?**

1 ppm (uma parte por milhão) equivale a 1 mg por litro, o que corresponde exatamente a 1 g por metro cúbico (1 g/m³).

## Referências de consulta

- [IMPA/OBMEP — Geometria Espacial: Volumes e Medidas](https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=39&tipo=7) — Cálculo de áreas, volumes de prismas e cilindros, e unidades de capacidade.
- [Ministério da Saúde — Diretrizes Nacionais para Prevenção e Controle de Arboviroses](https://bvsms.saude.gov.br/bvs/publicacoes/diretrizes_nacionais_prevencao_controle_dengue.pdf) — Tratamento químico focal, cubagem de criadouros e cálculo de dosagem de larvicidas.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
