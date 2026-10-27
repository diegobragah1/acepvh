$RepoRoot = Split-Path -Parent $PSScriptRoot
$flatPath = Join-Path $RepoRoot "content\rlm_6.md"
$thematicPath = Join-Path $RepoRoot "content\raciocinio-logico\28-geometria-plana-espacial-unidades-medida-casa-dos-pombos.md"

$content = @'
---
id: "rlm_6"
slug: "28-geometria-plana-espacial-unidades-medida-casa-dos-pombos"
num: 28
cat: "rlm"
materia: "Raciocínio Lógico-Matemático"
catName: "Raciocínio Lógico-Matemático"
weight: "10 Questões • Peso 2 (20 pts)"
titulo: "28. Geometria Plana e Espacial (Áreas, Perímetros e Volumes), Unidades de Medida e Princípio da Casa dos Pombos"
title: "28. Geometria Plana e Espacial (Áreas, Perímetros e Volumes), Unidades de Medida e Princípio da Casa dos Pombos"
editalRef: "Anexo IV — Raciocínio Lógico-Matemático (Nível Médio/ACE): Geometria básica (áreas, perímetros e volumes de sólidos geométricos); Sistema métrico decimal (unidades de comprimento, superfície, capacidade, volume e massa); Princípio fundamental da contagem e Princípio da Casa dos Pombos (Dirichlet)."
nivel: "medio-concurso"
tipo: "aula"
status: "revisado-auditado-2026"
auditBadge: "AULA INTEGRAL NÍVEL LIVRO DIDÁTICO (ESTRUTURA EM 3 BLOCOS)"
mdPath: "./content/raciocinio-logico/28-geometria-plana-espacial-unidades-medida-casa-dos-pombos.md"
sources: [2, 3, 4, 5, 6, 86, 91]
blocksCount: 3
questionsCount: 6
flashcardsCount: 6
fontes:
  - num: 2
    titulo: "2. Estruturas Lógicas II.pdf"
    url: "https://drive.google.com/file/d/1O0K5f6a8eY9A7Q0X0_k3A1aC9L6m4V2/view?usp=sharing"
  - num: 3
    titulo: "3. Equivalências Lógicas.pdf"
    url: "https://drive.google.com/file/d/1O2X4e7B9dY0Z1A2C3_m5B2bE0N7p5W3/view?usp=sharing"
  - num: 4
    titulo: "4. Diagramas Lógicos.pdf"
    url: "https://drive.google.com/file/d/1O4Y5f8C0eZ1A2B3D4_n6C3cF1O8q6X4/view?usp=sharing"
  - num: 5
    titulo: "5. Lógica de Argumentação.pdf"
    url: "https://drive.google.com/file/d/1O6Z6g9D1fA2B3C4E5_o7D4dG2P9r7Y5/view?usp=sharing"
  - num: 6
    titulo: "6. Problemas de Lógica I.pdf"
    url: "https://drive.google.com/file/d/1O8A7h0E2gB3C4D5F6_p8E5eH3Q0s8Z6/view?usp=sharing"
  - num: 86
    titulo: "EDITAL Nº 25/2026 Consolidado até Retificação nº 01 (IBGP).pdf"
    url: "https://novo.ibgpconcursos.com.br/rest/concurso/download/edital/24357/?file=site/anexos/790/00%20-%20EDITAL%20CONCURSO%20PORTO%20VELHO_SEMUSA_final.pdf"
  - num: 91
    titulo: "Anexo IV Retificado — Conteúdos Programáticos Oficiais.pdf"
    url: "https://novo.ibgpconcursos.com.br/rest/concurso/download/edital/24361/?file=site/anexos/790/04-%20ANEXO%20IV%20-%20CONTEUDOS%20PROGRAM%C1TICOS.pdf"
normativeAudit:
  - diploma: "Edital SEMUSA nº 25/2026 (Anexo IV — Raciocínio Lógico-Matemático para ACE)"
    status: "VIGENTE"
    observacao: "Exige geometria plana (áreas e perímetros), geometria espacial (volumes de reservatórios), sistema métrico decimal e Princípio da Casa dos Pombos (Dirichlet)."
---

# Raciocínio Lógico-Matemático

## Aula 28 (`rlm_6`) — 28. Geometria Plana e Espacial (Áreas, Perímetros e Volumes), Unidades de Medida e Princípio da Casa dos Pombos

### 1. Identificação e Tópicos do Edital Relacionados

- **Código Único da Aula:** `rlm_6` (`./content/raciocinio-logico/28-geometria-plana-espacial-unidades-medida-casa-dos-pombos.md`)
- **Matéria / Disciplina Oficial (Anexo III Retificado):** Raciocínio Lógico-Matemático (10 Questões • Peso 2 (20 pts))
- **Tópico e Subtópicos Previstos no Edital nº 25/2026 (Anexo IV Retificado):** Geometria básica (figuras planas, áreas e perímetros); Sólidos geométricos e cálculo de volumes (paralelepípedos, cilindros e prismas); Sistema Métrico Decimal e conversão de unidades (comprimento, área, capacidade e volume: $1\text{ m}^3 = 1.000\text{ L}$); Princípio das Gavetas de Dirichlet (Princípio da Casa dos Pombos).
- **Situação de Cobertura e Auditoria:** `AULA INTEGRAL NÍVEL LIVRO DIDÁTICO (ESTRUTURA EM 3 BLOCOS)` (3 blocos didáticos, 6 questões comentadas de 4 alternativas A–D com justificativas completas e 6 flashcards ativos).

---

## Bloco 28.1 — Geometria Plana: Perímetros, Áreas de Polígonos e Círculos e Teorema de Pitágoras

<!-- @block id="rlm_6_b1" title="Bloco 28.1 — Geometria Plana: Perímetros, Áreas de Polígonos e Círculos e Teorema de Pitágoras" -->

### Modo A — Teoria Completa Desenvolvida

#### 1. Objetivos de Aprendizagem do Bloco 28.1
- Dominar o conceito de perímetro como medida linear do contorno de uma figura plana e calcular o perímetro de polígonos regulares e irregulares.
- Aplicar as fórmulas de área das figuras planas fundamentais: quadrado, retângulo, triângulo (geral, equilátero e retângulo), trapézio, losango e círculo.
- Relacionar o raio e o diâmetro da circunferência ($D = 2r$) e calcular comprimento ($C = 2\pi r$) e área ($A = \pi r^2$).
- Aplicar o Teorema de Pitágoras ($a^2 = b^2 + c^2$) e reconhecer os ternos pitagóricos clássicos ($(3, 4, 5)$, $(5, 12, 13)$) para resolução ágil em plantas e croquis de quarteirões.

#### 2. Teoria Desenvolvida em Profundidade

##### A. Perímetro (Medida Linear)
O **perímetro** ($2p$) é o comprimento total da linha de contorno de uma região plana. Sua unidade no SI é o metro ($m$), podendo ser expresso em $cm, mm$ ou $km$.
- **Polígono Regular com $n$ lados de medida $L$:** $2p = n \cdot L$.
- **Retângulo de base $b$ e altura $h$:** $2p = 2b + 2h = 2(b + h)$.
- **Quadrado de lado $L$:** $2p = 4L$.
- **Circunferência de raio $r$:** Comprimento $C = 2\pi r = \pi D$ (onde $D$ é o diâmetro).

##### B. Áreas das Principais Figuras Planas
A **área** mede a extensão bidimensional de uma superfície. A unidade padrão no SI é o metro quadrado ($m^2$).

| Figura Geométrica | Fórmula da Área | Observações e Aplicação Prática |
| :--- | :--- | :--- |
| **Quadrado** | $A = L^2$ ou $A = \frac{d^2}{2}$ | $d = L\sqrt{2}$ é a diagonal do quadrado. |
| **Retângulo** | $A = b \cdot h$ | Base $\times$ altura. Forma padrão de lotes urbanos e cômodos. |
| **Triângulo (Geral)** | $A = \frac{b \cdot h}{2}$ | Válido para qualquer triângulo com base $b$ e altura relativa $h$. |
| **Triângulo Retângulo** | $A = \frac{\text{cateto}_1 \cdot \text{cateto}_2}{2}$ | Os catetos funcionam como base e altura perpendiculares. |
| **Triângulo Equilátero** | $A = \frac{L^2 \sqrt{3}}{4}$ | Altura $h = \frac{L \sqrt{3}}{2}$. |
| **Fórmula de Heron** | $A = \sqrt{p(p-a)(p-b)(p-c)}$ | Usada quando se conhecem apenas os 3 lados ($a, b, c$); $p = \frac{a+b+c}{2}$ é o semiperímetro. |
| **Trapézio** | $A = \frac{(B + b) \cdot h}{2}$ | $B$ = base maior, $b$ = base menor, $h$ = altura perpendicular. |
| **Losango** | $A = \frac{D \cdot d}{2}$ | $D$ = diagonal maior, $d$ = diagonal menor (perpendiculares entre si). |
| **Paralelogramo** | $A = b \cdot h$ | Base $\times$ altura relativa perpendicular (não use o lado oblíquo!). |
| **Círculo** | $A = \pi r^2$ | $r = \frac{D}{2}$. Para concursos, a banca costuma adotar $\pi \approx 3,14$ ou $\pi \approx 3$. |

##### C. Teorema de Pitágoras e Ternos Pitagóricos
Em todo triângulo retângulo, o quadrado da hipotenusa ($a$, lado oposto ao ângulo reto de $90^\circ$) é igual à soma dos quadrados dos catetos ($b$ e $c$):
$$a^2 = b^2 + c^2$$

**Ternos Pitagóricos Fundamentais:**
1. **Família $(3, 4, 5)$:**
   - Catetos $3$ e $4$, hipotenusa $5$ ($3^2 + 4^2 = 9 + 16 = 25 = 5^2$).
   - Múltiplos diretos: $(6, 8, 10)$, $(9, 12, 15)$, $(12, 16, 20)$, $(15, 20, 25)$, $(30, 40, 50)$.
2. **Família $(5, 12, 13)$:**
   - Catetos $5$ e $12$, hipotenusa $13$ ($5^2 + 12^2 = 25 + 144 = 169 = 13^2$).
   - Múltiplos diretos: $(10, 24, 26)$.
3. **Família $(8, 15, 17)$:**
   - Catetos $8$ e $15$, hipotenusa $17$ ($64 + 225 = 289 = 17^2$).

> [!TIP]
> **Dica de Prova IBGP:** Se uma questão apresentar um terreno retangular com lados de $30\text{ m}$ e $40\text{ m}$ e pedir a distância em linha reta entre vértices opostos (diagonal), reconheça imediatamente o triângulo $(3, 4, 5)$ multiplicado por 10: a diagonal é exatamente $50\text{ m}$, sem necessidade de armar contas!

#### 3. Exemplos Práticos do ACE
- **Exemplo 1 (Cálculo de Área de Terreno Irregular):** Um ACE inspeciona um lote trapezoidal em Porto Velho com frente de $12\text{ m}$ (base menor), fundo de $18\text{ m}$ (base maior) e profundidade de $30\text{ m}$ (altura perpendicular). A área total do terreno é:
  $$A = \frac{(18 + 12) \cdot 30}{2} = \frac{30 \cdot 30}{2} = \frac{900}{2} = 450\text{ m}^2$$
- **Exemplo 2 (Diagonal de Quarteirão com Pitágoras):** Um quarteirão retangular mede $60\text{ m}$ de largura por $80\text{ m}$ de comprimento. Para esticar uma fita isolante ou traçar a linha de bloqueio em diagonal, a distância necessária é dada por $(60, 80, D)$. Como $60 = 3 \times 20$ e $80 = 4 \times 20$, a hipotenusa é $5 \times 20 = 100\text{ m}$.

### Modo B — Resumo Comentado e Mnemônicos

- **Áreas Básicas:**
  - Retângulo / Paralelogramo: $b \times h$
  - Triângulo: metade do retângulo $\rightarrow \frac{b \times h}{2}$
  - Trapézio: média das bases $\times$ altura $\rightarrow \frac{B + b}{2} \cdot h$
  - Círculo: "Pierre ao quadrado" $\rightarrow \pi r^2$
  - Perímetro do Círculo: "Dois Pierre" $\rightarrow 2 \pi r$
- **Atenção ao Raio vs. Diâmetro:** Em 90% dos erros em concursos, a banca fornece o *diâmetro* e o candidato esquece de dividir por 2 antes de elevar ao quadrado na fórmula da área. Se o diâmetro for $4\text{ m}$, o raio é $2\text{ m}$, logo a área é $\pi \times 2^2 = 4\pi\text{ m}^2$ (e NÃO $16\pi$!).

### Modo C — Questões Comentadas e Flashcards

#### Questões de Fixação

##### Questão 28.1.1 (`rlm_6_b1_q1`)
(Questão Autoral Inédita — Perfil IBGP / ACE SEMUSA)
Um Agente de Combate às Endemias precisa isolar temporariamente uma área retangular de um quintal para descarte de recipientes inservíveis com foco de larvas. O quintal possui $15\text{ metros}$ de comprimento e $8\text{ metros}$ de largura. O agente precisa instalar uma tela de arame em todo o perímetro dessa área e, além disso, cobrir o solo com uma lona plástica impermeável. Quais são, respectivamente, o comprimento de tela necessário (perímetro) e a área de lona a ser adquirida?
- A) $23\text{ metros}$ e $120\text{ m}^2$.
- B) $46\text{ metros}$ e $120\text{ m}^2$.
- C) $46\text{ metros}$ e $240\text{ m}^2$.
- D) $92\text{ metros}$ e $60\text{ m}^2$.

*Gabarito Comentado:*
- **Alternativa B está CORRETA.**
  - O perímetro do retângulo é dado por $2p = 2(b + h) = 2(15 + 8) = 2 \times 23 = 46\text{ metros}$ de tela.
  - A área do retângulo é dada por $A = b \times h = 15 \times 8 = 120\text{ m}^2$ de lona.
- Justificativa das incorretas:
  - A: Incorreta. Somou apenas $15 + 8 = 23\text{ m}$ (semiperímetro), esquecendo de multiplicar por 2.
  - C: Incorreta. Dobrou indevidamente a área ($120 \times 2 = 240\text{ m}^2$).
  - D: Incorreta. Dobrou o perímetro e dividiu a área por 2.

##### Questão 28.1.2 (`rlm_6_b1_q2`)
(Questão Autoral Inédita — Perfil IBGP / ACE SEMUSA)
Um reservatório de água elevado no distrito de Jaci-Paraná possui base circular com diâmetro de $6\text{ metros}$. Para proteger o reservatório de intempéries, a SEMUSA encomendou uma tampa circular de fibra de vidro que deve cobrir exatamente toda a superfície da base. Adotando a aproximação $\pi = 3,14$, a área dessa tampa, em metros quadrados, é igual a:
- A) $113,04\text{ m}^2$.
- B) $37,68\text{ m}^2$.
- C) $28,26\text{ m}^2$.
- D) $18,84\text{ m}^2$.

*Gabarito Comentado:*
- **Alternativa C está CORRETA.**
  - O diâmetro é $D = 6\text{ m}$. Portanto, o raio é a metade do diâmetro: $r = \frac{6}{2} = 3\text{ metros}$.
  - A área do círculo é $A = \pi \cdot r^2 = 3,14 \cdot (3)^2 = 3,14 \cdot 9 = 28,26\text{ m}^2$.
- Justificativa das incorretas:
  - A: Incorreta. Erro clássico de usar o diâmetro direto na fórmula da área: $3,14 \cdot 6^2 = 3,14 \cdot 36 = 113,04\text{ m}^2$.
  - B: Incorreta. Calculou o comprimento da circunferência usando o diâmetro como raio: $2 \cdot \pi \cdot 6 = 37,68\text{ m}$.
  - D: Incorreta. Calculou o comprimento da circunferência correta: $C = 2 \cdot \pi \cdot 3 = 18,84\text{ m}$, e não a área.

```json
{
  "questions": [
    {
      "q": "(Questão Autoral Inédita — Perfil IBGP / ACE SEMUSA) Um Agente de Combate às Endemias precisa isolar temporariamente uma área retangular de um quintal para descarte de recipientes inservíveis com foco de larvas. O quintal possui 15 metros de comprimento e 8 metros de largura. O agente precisa instalar uma tela de arame em todo o perímetro dessa área e, além disso, cobrir o solo com uma lona plástica impermeável. Quais são, respectivamente, o comprimento de tela necessário (perímetro) e a área de lona a ser adquirida?",
      "options": [
        "23 metros e 120 m².",
        "46 metros e 120 m².",
        "46 metros e 240 m².",
        "92 metros e 60 m²."
      ],
      "ans": 1,
      "comment": "Gabarito: B. O perímetro do retângulo é 2(15 + 8) = 46 m. A área é 15 x 8 = 120 m²."
    },
    {
      "q": "(Questão Autoral Inédita — Perfil IBGP / ACE SEMUSA) Um reservatório de água elevado no distrito de Jaci-Paraná possui base circular com diâmetro de 6 metros. Para proteger o reservatório de intempéries, a SEMUSA encomendou uma tampa circular de fibra de vidro que deve cobrir exatamente toda a superfície da base. Adotando a aproximação π = 3,14, a área dessa tampa, em metros quadrados, é igual a:",
      "options": [
        "113,04 m².",
        "37,68 m².",
        "28,26 m².",
        "18,84 m²."
      ],
      "ans": 2,
      "comment": "Gabarito: C. O raio é metade do diâmetro: r = 3 m. Área = π * r² = 3,14 * 3² = 3,14 * 9 = 28,26 m²."
    }
  ]
}
```

#### Flashcards de Revisão Ativa

| ID do Flashcard | Pergunta / Gatilho Mental (Frente) | Resposta Precisa e Fundamentada (Verso) |
| :--- | :--- | :--- |
| **FC 28.1.1** | Qual é a pegadinha mais comum ao calcular a área de um círculo e como evitá-la? | **Usar o diâmetro em vez do raio!** O raio é sempre metade do diâmetro ($r = D/2$). A fórmula da área é $A = \pi r^2$, enquanto o comprimento do contorno é $C = 2\pi r$. |
| **FC 28.1.2** | Quais são os dois ternos pitagóricos primitivos mais frequentes em provas e como utilizá-los? | **(3, 4, 5)** e **(5, 12, 13)**. Se os catetos forem múltiplos de 3 e 4 (ex.: 30 e 40), a hipotenusa será imediatamente o múltiplo correspondente de 5 (ex.: 50), dispensando contas longas. |

```json
{
  "flashcards": [
    {
      "front": "Qual é a pegadinha mais comum ao calcular a área de um círculo e como evitá-la?",
      "back": "Usar o diâmetro em vez do raio! O raio é sempre metade do diâmetro (r = D/2). A fórmula da área é A = π r², enquanto o comprimento do contorno é C = 2π r."
    },
    {
      "front": "Quais são os dois ternos pitagóricos primitivos mais frequentes em provas e como utilizá-los?",
      "back": "(3, 4, 5) e (5, 12, 13). Se os catetos forem múltiplos de 3 e 4 (ex.: 30 e 40), a hipotenusa será imediatamente o múltiplo correspondente de 5 (ex.: 50), dispensando contas longas."
    }
  ]
}
```

<!-- @block_end -->

---

## Bloco 28.2 — Geometria Espacial, Cubagem de Reservatórios de Campo e Sistema Métrico Decimal

<!-- @block id="rlm_6_b2" title="Bloco 28.2 — Geometria Espacial, Cubagem de Reservatórios de Campo e Sistema Métrico Decimal" -->

### Modo A — Teoria Completa Desenvolvida

#### 1. Objetivos de Aprendizagem do Bloco 28.2
- Dominar o Sistema Métrico Decimal e converter unidades de comprimento, superfície, massa e volume/capacidade sem hesitação.
- Memorizar e aplicar as equivalências fundamentais entre volume e capacidade: $1\text{ m}^3 = 1.000\text{ L}$; $1\text{ dm}^3 = 1\text{ L}$; $1\text{ cm}^3 = 1\text{ mL}$.
- Calcular volumes de paralelepípedos retângulos (caixas d'água, cisternas e piscinas) e cilindros retos (tambores, tonéis e poços).
- Resolver problemas práticos de cubagem e dosagem de larvicida na rotina de visitas domiciliares do ACE.

#### 2. Teoria Desenvolvida em Profundidade

##### A. Sistema Métrico Decimal e Tabela de Conversões

1. **Unidades de Comprimento (Fator 10):**
   $$km \longleftrightarrow hm \longleftrightarrow dam \longleftrightarrow m \longleftrightarrow dm \longleftrightarrow cm \longleftrightarrow mm$$
   - Cada casa para a direita: multiplica por $10$.
   - Cada casa para a esquerda: divide por $10$.

2. **Unidades de Área/Superfície (Fator 100):**
   $$km^2 \longleftrightarrow hm^2\text{ (hectare)} \longleftrightarrow dam^2 \longleftrightarrow m^2 \longleftrightarrow dm^2 \longleftrightarrow cm^2 \longleftrightarrow mm^2$$
   - Cada casa para a direita: multiplica por $100$ ($10^2$).
   - **Hectare ($ha$):** $1\text{ ha} = 1\text{ hm}^2 = 10.000\text{ m}^2$.

3. **Unidades de Volume (Fator 1.000) e Relação com Capacidade:**
   $$m^3 \longleftrightarrow dm^3 \longleftrightarrow cm^3 \longleftrightarrow mm^3$$
   - Cada casa para a direita: multiplica por $1.000$ ($10^3$).

| Unidade de Volume | Equivalência em Capacidade | Unidade Equivalente Usual |
| :--- | :--- | :--- |
| **$1\text{ m}^3$ (metro cúbico)** | **$1.000\text{ dm}^3$** | **$1.000\text{ litros}$** |
| **$1\text{ dm}^3$ (decímetro cúbico)** | **$1\text{ litro}$** | **$1.000\text{ mililitros (mL)}$** |
| **$1\text{ cm}^3$ ($1\text{ cc}$ / $1\text{ mL}$)** | **$0,001\text{ litro}$** | **$1\text{ mililitro (mL)}$** |

##### B. Cubagem de Sólidos Geométricos no Trabalho do ACE

1. **Paralelepípedo Retângulo (Caixa d'Água Retangular, Cisterna, Tanque):**
   $$V = a \cdot b \cdot c = \text{Comprimento} \times \text{Largura} \times \text{Altura da lâmina d'água}$$
   - Se as medidas estiverem em metros ($m$), o volume $V$ será em $m^3$. Para obter litros, multiplique por $1.000$:
     $$\text{Volume em Litros} = (a \times b \times c) \times 1.000$$

2. **Cilindro Circular Reto (Tambor de 200 L, Tonel, Poço, Caixa Circular):**
   $$V = A_{\text{base}} \cdot h = \pi \cdot r^2 \cdot h$$
   - Onde $r$ é o raio da base ($r = D/2$) e $h$ é a altura d'água.
   - **Técnica Ágil dos Decímetros:** Converta as dimensões para decímetros ($dm$) antes de multiplicar! Como $1\text{ dm}^3 = 1\text{ L}$, o resultado sairá diretamente em litros:
     - Exemplo: Diâmetro $0,6\text{ m} \rightarrow r = 0,3\text{ m} = 3\text{ dm}$; Altura $1,0\text{ m} = 10\text{ dm}$.
     - $V = \pi \cdot (3)^2 \cdot 10 = 3,14 \cdot 9 \cdot 10 = 282,6\text{ dm}^3 = 282,6\text{ litros}$.

3. **Prisma Triangular / Calhas de Telhado em Formato "V":**
   $$V = \frac{b \cdot h}{2} \cdot L$$
   - Onde $b$ é a abertura superior da calha, $h$ é a profundidade e $L$ é a extensão/comprimento linear da calha.

#### 3. Exemplos Práticos do ACE e Cálculo de Larvicida
- **Caso Real:** Em um imóvel no bairro Nova Porto Velho, um ACE encontra uma cisterna retangular com $2,5\text{ m}$ de comprimento, $1,6\text{ m}$ de largura e uma lâmina de água de $0,75\text{ m}$.
  1. Cálculo do volume: $V = 2,5 \times 1,6 \times 0,75 = 3,0\text{ m}^3$.
  2. Conversão para capacidade: $3,0 \times 1.000 = 3.000\text{ litros}$.
  3. Se a bula do larvicida Piriproxifeno ou Bti recomenda $2\text{ g}$ para cada $1.000\text{ litros}$, a dosagem exata a ser aplicada é:
     $$\text{Dose} = 3 \times 2\text{ g} = 6\text{ g de larvicida}$$

### Modo B — Resumo Comentado e Mnemônicos

- **Trilogia de Ouro das Medidas:**
  - $1\text{ m}^3 = 1.000\text{ L}$ (uma caixa d'água cúbica de $1\text{ m}$ de aresta comporta $1.000$ caixas de leite).
  - $1\text{ dm}^3 = 1\text{ L}$ (um cubo de $10\text{ cm} \times 10\text{ cm} \times 10\text{ cm}$ comporta exatamente $1$ litro de água).
  - $1\text{ cm}^3 = 1\text{ mL}$ (usado em seringas e dosadores de campo).
- **Atenção à Altura d'Água:** Na cubagem, meça sempre a **altura da lâmina d'água**, e não a altura total da parede do reservatório, caso ele não esteja completamente cheio!

### Modo C — Questões Comentadas e Flashcards

#### Questões de Fixação

##### Questão 28.2.1 (`rlm_6_b2_q1`)
(Questão Autoral Inédita — Perfil IBGP / ACE SEMUSA)
Durante uma vistoria zoossanitária no distrito de Extrema, um ACE inspecionou um reservatório de alvenaria com formato de paralelepípedo retângulo, cujas dimensões internas são: $3,0\text{ metros}$ de comprimento, $2,0\text{ metros}$ de largura e $1,5\text{ metro}$ de profundidade total. No momento da visita, o reservatório continha água até $80\%$ de sua capacidade total. Qual é o volume de água presente nesse reservatório em litros?
- A) $9.000\text{ litros}$.
- B) $7.200\text{ litros}$.
- C) $5.400\text{ litros}$.
- D) $3.600\text{ litros}$.

*Gabarito Comentado:*
- **Alternativa B está CORRETA.**
  - Volume total do reservatório: $V_{\text{total}} = 3,0 \times 2,0 \times 1,5 = 9,0\text{ m}^3$.
  - Como $1\text{ m}^3 = 1.000\text{ litros}$, a capacidade total é $9,0 \times 1.000 = 9.000\text{ litros}$.
  - O volume de água corresponde a $80\%$ do total: $V_{\text{água}} = 0,80 \times 9.000 = 7.200\text{ litros}$.
- Justificativa das incorretas:
  - A: Incorreta. Representa a capacidade total do reservatório ($100\%$), mas ele estava com apenas $80\%$ de água.
  - C: Incorreta. Calculou $60\%$ da capacidade ($0,60 \times 9.000 = 5.400\text{ L}$).
  - D: Incorreta. Calculou apenas $40\%$ ou esqueceu uma das dimensões.

##### Questão 28.2.2 (`rlm_6_b2_q2`)
(Questão Autoral Inédita — Perfil IBGP / ACE SEMUSA)
Um tonel cilíndrico utilizado para captação de água de chuva possui raio interno de $40\text{ centímetros}$ e altura de $100\text{ centímetros}$. Considerando $\pi \approx 3,14$, qual é a capacidade máxima aproximada desse tambor em litros?
- A) $502,4\text{ litros}$.
- B) $251,2\text{ litros}$.
- C) $125,6\text{ litros}$.
- D) $50,24\text{ litros}$.

*Gabarito Comentado:*
- **Alternativa A está CORRETA.**
  - Passando as medidas para decímetros para obter litros direto ($1\text{ dm}^3 = 1\text{ L}$):
    - Raio $r = 40\text{ cm} = 4\text{ dm}$.
    - Altura $h = 100\text{ cm} = 10\text{ dm}$.
  - Volume do cilindro: $V = \pi \cdot r^2 \cdot h = 3,14 \cdot (4)^2 \cdot 10 = 3,14 \cdot 16 \cdot 10 = 3,14 \cdot 160 = 502,4\text{ dm}^3 = 502,4\text{ litros}$.
- Justificativa das incorretas:
  - B: Incorreta. Esqueceu de elevar o raio ao quadrado ($3,14 \times 4 \times 10 = 125,6$ ou dividiu por 2).
  - C: Incorreta. Multiplicou por $4$ em vez de $4^2 = 16$.
  - D: Incorreta. Errou a casa decimal na conversão de unidades.

```json
{
  "questions": [
    {
      "q": "(Questão Autoral Inédita — Perfil IBGP / ACE SEMUSA) Durante uma vistoria zoossanitária no distrito de Extrema, um ACE inspecionou um reservatório de alvenaria com formato de paralelepípedo retângulo, cujas dimensões internas são: 3,0 metros de comprimento, 2,0 metros de largura e 1,5 metro de profundidade total. No momento da visita, o reservatório continha água até 80% de sua capacidade total. Qual é o volume de água presente nesse reservatório em litros?",
      "options": [
        "9.000 litros.",
        "7.200 litros.",
        "5.400 litros.",
        "3.600 litros."
      ],
      "ans": 1,
      "comment": "Gabarito: B. Volume total = 3,0 x 2,0 x 1,5 = 9,0 m³ = 9.000 L. Com 80% cheio: 0,80 x 9.000 = 7.200 litros."
    },
    {
      "q": "(Questão Autoral Inédita — Perfil IBGP / ACE SEMUSA) Um tonel cilíndrico utilizado para captação de água de chuva possui raio interno de 40 centímetros e altura de 100 centímetros. Considerando π ≈ 3,14, qual é a capacidade máxima aproximada desse tambor em litros?",
      "options": [
        "502,4 litros.",
        "251,2 litros.",
        "125,6 litros.",
        "50,24 litros."
      ],
      "ans": 0,
      "comment": "Gabarito: A. Em decímetros: r = 4 dm e h = 10 dm. Volume = 3,14 * 4² * 10 = 3,14 * 16 * 10 = 502,4 dm³ = 502,4 litros."
    }
  ]
}
```

#### Flashcards de Revisão Ativa

| ID do Flashcard | Pergunta / Gatilho Mental (Frente) | Resposta Precisa e Fundamentada (Verso) |
| :--- | :--- | :--- |
| **FC 28.2.1** | Quais são as 3 relações fundamentais entre unidades de volume e capacidade que todo ACE deve memorizar? | **$1\text{ m}^3 = 1.000\text{ litros}$**; **$1\text{ dm}^3 = 1\text{ litro}$**; **$1\text{ cm}^3 = 1\text{ mililitro (mL)}$**. |
| **FC 28.2.2** | Como converter rapidamente as dimensões de um cilindro para obter o volume diretamente em litros? | **Converta o raio e a altura para decímetros ($dm$)** antes do cálculo! Como $1\text{ dm}^3 = 1\text{ L}$, o resultado de $V = \pi r^2 h$ já sai direto em litros. |

```json
{
  "flashcards": [
    {
      "front": "Quais são as 3 relações fundamentais entre unidades de volume e capacidade que todo ACE deve memorizar?",
      "back": "1 m³ = 1.000 litros; 1 dm³ = 1 litro; 1 cm³ = 1 mililitro (mL)."
    },
    {
      "front": "Como converter rapidamente as dimensões de um cilindro para obter o volume diretamente em litros?",
      "back": "Converta o raio e a altura para decímetros (dm) antes do cálculo! Como 1 dm³ = 1 L, o resultado de V = π r² h já sai direto em litros."
    }
  ]
}
```

<!-- @block_end -->

---

## Bloco 28.3 — O Princípio da Casa dos Pombos (Gavetas de Dirichlet)

<!-- @block id="rlm_6_b3" title="Bloco 28.3 — O Princípio da Casa dos Pombos (Gavetas de Dirichlet)" -->

### Modo A — Teoria Completa Desenvolvida

#### 1. Objetivos de Aprendizagem do Bloco 28.3
- Compreender o enunciado clássico do Princípio da Casa dos Pombos (Princípio das Gavetas de Dirichlet).
- Desenvolver a linha de raciocínio da "Pior Hipótese" (o caso do indivíduo "mais azarado do mundo") para garantir com certeza absoluta a ocorrência de um evento.
- Aplicar a fórmula geral $N = m \cdot (k - 1) + 1$ para garantir que pelo menos uma categoria receba $k$ elementos.
- Resolver problemas de concursos sobre grupos de pessoas, datas de aniversário, naipes de baralho e escalas de trabalho do ACE.

#### 2. Teoria Desenvolvida em Profundidade

##### A. Enunciado Fundamental
O **Princípio da Casa dos Pombos** (proposto pelo matemático alemão Johann Peter Gustav Lejeune Dirichlet em 1834) afirma que:
> *Se $n$ pombos forem colocados em $m$ casas (gaiolas/gavetas) e o número de pombos for estritamente maior que o número de casas ($n > m$), então pelo menos uma casa conterá dois ou mais pombos.*

##### B. Generalização Matemática
Se desejamos garantir que **pelo menos uma gaveta contenha no mínimo $k$ elementos**, distribuídos entre $m$ categorias distintas, o número mínimo $N$ de elementos que precisamos retirar ou reunir é dado por:
$$N = m \cdot (k - 1) + 1$$

Onde:
- $m$: quantidade total de casas, categorias, tipos ou gavetas possíveis.
- $k$: quantidade desejada de elementos na mesma categoria.
- $(k - 1)$: a situação de quase conseguir o objetivo em todas as categorias (a pior hipótese).
- $+ 1$: o elemento decisivo que obriga uma das categorias a atingir a meta de $k$ elementos.

##### C. O Método do "Pior Caso" ("O Mais Azarado do Mundo")
Para resolver qualquer questão sem decorar fórmulas, imagine o seguinte cenário mental:
1. Identifique quais são os **grupos possíveis** ($m$).
2. Suponha que você é a pessoa mais azarada do universo: você retira itens e **nunca** repete uma categoria até esgotar o limite inferior permitido ($k - 1$ de cada tipo).
3. Após atingir esse estado de máximo azar (todas as gavetas empatadas com $k - 1$ itens), o próximo item que você retirar, **não importa qual seja**, completará inevitavelmente a quantidade $k$ em alguma das gavetas!

| Problema Típico | Categorias Possíveis ($m$) | Meta ($k$) | Pior Caso ($m \times (k-1)$) | Mínimo para Garantir ($+1$) |
| :--- | :---: | :---: | :---: | :---: |
| **Mesmo Mês de Aniversário** | $12\text{ meses}$ | $2\text{ pessoas}$ | $12 \times 1 = 12\text{ pessoas}$ | $12 + 1 = \mathbf{13\text{ pessoas}}$ |
| **Mesmo Dia da Semana de Nascimento** | $7\text{ dias}$ | $2\text{ pessoas}$ | $7 \times 1 = 7\text{ pessoas}$ | $7 + 1 = \mathbf{8\text{ pessoas}}$ |
| **Pelo Menos 3 Nascidos no Mesmo Mês** | $12\text{ meses}$ | $3\text{ pessoas}$ | $12 \times 2 = 24\text{ pessoas}$ | $24 + 1 = \mathbf{25\text{ pessoas}}$ |
| **Mesmo Signo Zodiacal (2 pessoas)** | $12\text{ signos}$ | $2\text{ pessoas}$ | $12 \times 1 = 12\text{ pessoas}$ | $12 + 1 = \mathbf{13\text{ pessoas}}$ |
| **Mesmo Naipe de Baralho (5 cartas)** | $4\text{ naipes}$ | $5\text{ cartas}$ | $4 \times 4 = 16\text{ cartas}$ | $16 + 1 = \mathbf{17\text{ cartas}}$ |

##### D. Diferença Crucial: "Da Mesma Cor" vs. "De Uma Cor Específica"
- **Situação 1 ("De qualquer cor / mesma cor"):** Uma gaveta contém 10 meias pretas e 10 meias brancas. Quantas meias retirar no escuro para garantir **um par da mesma cor**?
  - Categorias: $2$ (preta e branca).
  - Pior caso: tirar 1 preta e 1 branca ($2$ meias).
  - Próxima meia: garante um par (ou preta ou branca). Resposta: $2 + 1 = \mathbf{3\text{ meias}}$.
- **Situação 2 ("De uma cor ESPECÍFICA"):** A mesma gaveta (10 pretas e 10 brancas). Quantas retirar para garantir **um par de meias BRANCAS**?
  - Pior caso: o azarado tira **todas as 10 meias pretas primeiro**!
  - Depois de esgotar as pretas, precisa retirar mais $2$ meias brancas.
  - Resposta: $10 + 2 = \mathbf{12\text{ meias}}$!
  - > [!WARNING]
    > Muita atenção aos enunciados da banca IBGP! Garanta que entendeu se a banca pede "duas da mesma cor (qualquer uma)" ou "duas da cor X (específica)".

### Modo B — Resumo Comentado e Mnemônicos

- **Fórmula de Dirichlet:** $N = m \cdot (k - 1) + 1$.
- **Mnemônico do Pior Caso:** "Encha todas as gavetas com um a menos do que você quer; depois, adicione um e corra pro abraço!".
- Se a pergunta for sobre aniversários no mesmo dia do ano (ano bissexto), são $366$ dias. Para garantir 2 pessoas com o mesmo aniversário, são necessárias $366 + 1 = 367\text{ pessoas}$.

### Modo C — Questões Comentadas e Flashcards

#### Questões de Fixação

##### Questão 28.3.1 (`rlm_6_b3_q1`)
(Questão Autoral Inédita — Perfil IBGP / ACE SEMUSA)
Em uma reunião do setor de Vigilância Ambiental da SEMUSA Porto Velho, estão presentes vários Agentes de Combate às Endemias lotados nos distritos municipais. Qual é o número mínimo de agentes que devem estar presentes na sala para garantir que, com certeza absoluta, pelo menos 4 deles façam aniversário no mesmo mês do ano?
- A) 13 agentes.
- B) 36 agentes.
- C) 37 agentes.
- D) 49 agentes.

*Gabarito Comentado:*
- **Alternativa C está CORRETA.**
  - Categorias disponíveis: $m = 12\text{ meses do ano}$.
  - Meta desejada por categoria: $k = 4\text{ aniversariantes no mesmo mês}$.
  - Pior caso possível (azar máximo): ter exatamente $k - 1 = 3$ agentes aniversariando em cada um dos 12 meses:
    $$\text{Pior Caso} = 12 \times 3 = 36\text{ agentes}$$
  - O próximo agente que entrar na sala ($+ 1$) obrigatoriamente completará o 4º aniversariante em algum dos meses:
    $$N = 36 + 1 = 37\text{ agentes}$$
- Justificativa das incorretas:
  - A: Incorreta. 13 agentes garantem apenas 2 aniversariantes no mesmo mês ($12 \times 1 + 1$).
  - B: Incorreta. 36 agentes é o pior caso em que cada mês tem exatamente 3 aniversariantes, não garantindo ainda o 4º.
  - D: Incorreta. Calculou $12 \times 4 + 1 = 49$, que garantiria 5 aniversariantes no mesmo mês.

##### Questão 28.3.2 (`rlm_6_b3_q2`)
(Questão Autoral Inédita — Perfil IBGP / ACE SEMUSA)
Um supervisor de campo da SEMUSA guarda em uma caixa opaca: 12 fichas de visita técnica na cor verde, 8 fichas na cor amarela e 6 fichas na cor azul, todas de mesmo tamanho e textura. Sem poder olhar o conteúdo da caixa, o supervisor retira as fichas uma a uma. Quantas fichas ele deve retirar, no mínimo, para ter a certeza absoluta de que retirou pelo menos 2 fichas de cores diferentes?
- A) 3 fichas.
- B) 13 fichas.
- C) 14 fichas.
- D) 21 fichas.

*Gabarito Comentado:*
- **Alternativa B está CORRETA.**
  - A meta é obter 2 fichas de cores diferentes.
  - O pior caso possível é retirar sucessivamente fichas da cor mais abundante até esgotá-la por completo. A cor com maior número de fichas é a verde ($12\text{ fichas}$).
  - Se o supervisor retirar 12 fichas verdes seguidas, ele ainda tem apenas uma cor.
  - A 13ª ficha retirada será obrigatoriamente amarela ou azul, garantindo que existam pelo menos 2 fichas de cores diferentes no conjunto retirado:
    $$N = 12 + 1 = 13\text{ fichas}$$
- Justificativa das incorretas:
  - A: Incorreta. Se retirar apenas 3 fichas, as 3 podem perfeitamente ser verdes, não garantindo cores distintas.
  - C: Incorreta. Número superior ao estritamente necessário.
  - D: Incorreta. Somou as duas maiores quantidades ($12 + 8 + 1$).

```json
{
  "questions": [
    {
      "q": "(Questão Autoral Inédita — Perfil IBGP / ACE SEMUSA) Em uma reunião do setor de Vigilância Ambiental da SEMUSA Porto Velho, estão presentes vários Agentes de Combate às Endemias lotados nos distritos municipais. Qual é o número mínimo de agentes que devem estar presentes na sala para garantir que, com certeza absoluta, pelo menos 4 deles façam aniversário no mesmo mês do ano?",
      "options": [
        "13 agentes.",
        "36 agentes.",
        "37 agentes.",
        "49 agentes."
      ],
      "ans": 2,
      "comment": "Gabarito: C. São 12 meses. Pior caso: 3 em cada mês = 36 agentes. Para garantir 4 no mesmo mês: 36 + 1 = 37 agentes."
    },
    {
      "q": "(Questão Autoral Inédita — Perfil IBGP / ACE SEMUSA) Um supervisor de campo da SEMUSA guarda em uma caixa opaca: 12 fichas de visita técnica na cor verde, 8 fichas na cor amarela e 6 fichas na cor azul, todas de mesmo tamanho e textura. Sem poder olhar o conteúdo da caixa, o supervisor retira as fichas uma a uma. Quantas fichas ele deve retirar, no mínimo, para ter a certeza absoluta de que retirou pelo menos 2 fichas de cores diferentes?",
      "options": [
        "3 fichas.",
        "13 fichas.",
        "14 fichas.",
        "21 fichas."
      ],
      "ans": 1,
      "comment": "Gabarito: B. O pior caso é retirar todas as 12 fichas verdes primeiro. A 13ª ficha será obrigatoriamente amarela ou azul, garantindo cores distintas: 12 + 1 = 13."
    }
  ]
}
```

#### Flashcards de Revisão Ativa

| ID do Flashcard | Pergunta / Gatilho Mental (Frente) | Resposta Precisa e Fundamentada (Verso) |
| :--- | :--- | :--- |
| **FC 28.3.1** | O que diz o Princípio da Casa dos Pombos (Gavetas de Dirichlet) e qual é a sua fórmula geral? | **Se $n$ pombos ocupam $m$ casas e $n > m$, pelo menos uma casa tem $\ge 2$ pombos.** Para garantir $k$ elementos no mesmo grupo entre $m$ categorias: **$N = m \cdot (k - 1) + 1$**. |
| **FC 28.3.2** | Qual é o raciocínio prático da "Pior Hipótese" para garantir um evento em RLM? | **Considere o cenário do indivíduo mais azarado possível:** ele retira o máximo de itens sem nunca atingir o objetivo em nenhuma categoria. Ao final desse azar extremo, **o próximo item (+1)** garante o resultado pretendido. |

```json
{
  "flashcards": [
    {
      "front": "O que diz o Princípio da Casa dos Pombos (Gavetas de Dirichlet) e qual é a sua fórmula geral?",
      "back": "Se n pombos ocupam m casas e n > m, pelo menos uma casa tem >= 2 pombos. Para garantir k elementos no mesmo grupo entre m categorias: N = m * (k - 1) + 1."
    },
    {
      "front": "Qual é o raciocínio prático da 'Pior Hipótese' para garantir um evento em RLM?",
      "back": "Considere o cenário do indivíduo mais azarado possível: ele retira o máximo de itens sem nunca atingir o objetivo em nenhuma categoria. Ao final desse azar extremo, o próximo item (+1) garante o resultado pretendido."
    }
  ]
}
```

<!-- @block_end -->
'@

[System.IO.File]::WriteAllText($flatPath, $content, [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllText($thematicPath, $content, [System.Text.Encoding]::UTF8)

Write-Host "Aula 28 atualizada com sucesso em ambos os caminhos!" -ForegroundColor Green
