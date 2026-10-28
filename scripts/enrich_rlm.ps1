<#
.SYNOPSIS
Enriquecimento Didático Profundo - Raciocínio Lógico-Matemático (Aulas 23 a 28 / rlm_1 a rlm_6)
Insere a seção "Nivelamento & Pré-Requisitos Fundamentais (Aprenda a Base Primeiro!)"
em cada uma das aulas rlm_1 a rlm_5 e reestrutura rlm_6 completamente no padrão da plataforma.
#>

$RepoRoot = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh"
$RlmDir = Join-Path $RepoRoot "content\raciocinio-logico"

Write-Host "Iniciando aprofundamento das 6 Aulas de RLM..." -ForegroundColor Cyan

# -------------------------------------------------------------
# AULA 23: rlm_1
# -------------------------------------------------------------
$file23 = Join-Path $RlmDir "23-logica-proposicional-1-proposicoes-conectivos-tabelas-verdade-tautologia.md"
$content23 = Get-Content $file23 -Raw -Encoding UTF8

$nivelamento23 = @'
#### 0. Nivelamento & Pré-Requisitos Fundamentais (Aprenda a Base Primeiro!)

Raciocínio Lógico não é adivinhação nem jogo de palavras soltas. É uma ciência exata que estuda a validade dos pensamentos e argumentos através de regras matemáticas universais. Antes de preencher tabelas-verdade, você precisa dominar o conceito de proposição:

##### A. O Que É uma Proposição (Sentença Declarativa)
Uma **Proposição** (ou sentença fechada) é qualquer oração declarativa que possui:
1. Um **sujeito** e um **predicado** (obrigatoriamente contém um verbo);
2. Um **sentido completo**;
3. A capacidade inegociável de ser julgada unicamente como **VERDADEIRA (V)** ou **FALSA (F)**, jamais ambas ao mesmo tempo.

##### B. Os Três Princípios Fundamentais da Lógica Clássica (Bivalente)
Toda a lógica cobrada pela banca IBGP se apoia em três pilares:
1. **Princípio da Identidade:** Uma proposição verdadeira é sempre verdadeira; uma falsa é sempre falsa ($P \equiv P$).
2. **Princípio da Não Contradição:** Nenhuma proposição pode ser simultaneamente verdadeira e falsa sob a mesma perspectiva e tempo ($\sim(P \land \sim P)$).
3. **Princípio do Terceiro Excluído:** Uma proposição só pode assumir dois valores: ou é Verdadeira ou é Falsa; não existe um "terceiro estado" ou "mais ou menos verdade".

##### C. O Mnemônico P-E-I-S-O: O Que NUNCA É Proposição!
A banca IBGP adora colocar frases e perguntar: "Qual das alternativas abaixo é uma proposição lógica?". Para acertar em 5 segundos, aplique o mnemônico **P-E-I-S-O**:
- **P - Perguntas (Interrogativas):** *"O agente já chegou?", "Quantos focos foram eliminados?"* (Não têm valor V ou F!).
- **E - Exclamações (Emocionais):** *"Que calor insuportável em Porto Velho!", "Parabéns pela aprovação!"*
- **I - Imperativos (Ordens/Comandos):** *"Feche a tampa da caixa d'água!", "Não deixe água parada no prato da planta!"* (Ordem não se julga como verdadeira ou falsa; ordem se cumpre ou desobedece).
- **S - Sentenças Abertas (Variáveis sem definição):** *"Ele é um excelente servidor", "x + 7 = 15"* (Quem é "ele"? Quanto vale "x"? Sem saber a quem se refere, não é possível atribuir V ou F!).
- **O - Opiniões subjetivas sem critério objetivo e Paradoxos:** *"Esta frase é totalmente falsa"* (Se for verdadeira, ela mente; se for falsa, diz a verdade $\rightarrow$ paradoxo sem valor lógico!).

##### D. Como Decorar os 5 Conectivos Lógicos Sem Sofrimento
As proposições simples são unidas por conectivos lógicos:
1. **Conjunção ("E" $\land$):** É o conectivo do "exigente". Só é VERDADE se tudo for verdade! Se uma única parte for falsa, a frase inteira vira mentira ($V \land V = V$; qualquer F dá F).
2. **Disjunção Inclusiva ("OU" $\lor$):** É o conectivo do "generoso". Basta UMA verdade para salvar o dia! Só é FALSA se tudo for falso ($F \lor F = F$).
3. **Disjunção Exclusiva ("OU... OU" $\underline{\lor}$):** É o conectivo da "escolha obrigatória". Só é VERDADE se os lados forem DIFERENTES ($V \underline{\lor} F = V$, $F \underline{\lor} V = V$). Se forem iguais, é Falsa!
4. **Condicional ("SE... ENTÃO" $\rightarrow$):** O mais importante do concurso! Pense no macete da **VERA FISCHER**:
   - Só existe um caso em que a promessa é quebrada: quando o primeiro é Verdadeiro e o segundo é Falso ($V \rightarrow F = F$).
   - Todos os outros casos ($V \rightarrow V$, $F \rightarrow V$, $F \rightarrow F$) são **VERDADEIROS**!
5. **Bicondicional ("SE E SOMENTE SE" $\leftrightarrow$):** É a via de mão dupla. Só é VERDADEIRA se os dois lados tiverem o MESMO valor lógico ($V \leftrightarrow V = V$ e $F \leftrightarrow F = V$).
'@

if ($content23 -notmatch "0\. Nivelamento & Pré-Requisitos Fundamentais") {
    $content23 = $content23 -replace '(?s)#### 1\. Objetivos Claros', "$nivelamento23`r`n`r`n#### 1. Objetivos Claros"
    $escaped23 = $nivelamento23 -replace '\\', '\\' -replace '"', '\"' -replace "`r`n", '\n' -replace "`n", '\n'
    $content23 = $content23 -replace '(?s)"modoA_markdown": "#### 1\. Objetivos Claros', "`"modoA_markdown`": `"$escaped23\n\n#### 1. Objetivos Claros"
    [System.IO.File]::WriteAllText($file23, $content23, [System.Text.Encoding]::UTF8)
    Write-Host " -> Aula 23 enriquecida com sucesso!" -ForegroundColor Green
} else {
    Write-Host " -> Aula 23 já continha nivelamento." -ForegroundColor Yellow
}

# -------------------------------------------------------------
# AULA 24: rlm_2
# -------------------------------------------------------------
$file24 = Join-Path $RlmDir "24-logica-proposicional-2-de-morgan-equivalencias-quantificadores-argumentacao.md"
$content24 = Get-Content $file24 -Raw -Encoding UTF8

$nivelamento24 = @'
#### 0. Nivelamento & Pré-Requisitos Fundamentais (Aprenda a Base Primeiro!)

Negar uma proposição ou encontrar uma equivalência não significa inventar ideias opostas da cabeça; obedece a regras de transformação precisas. Entenda os conceitos fundamentais antes das fórmulas:

##### A. O Que Significa Lógica de Negação
Negar uma proposição $P$ ($\sim P$ ou $\neg P$) consiste em inverter o seu valor de verdade:
- Se $P$ era Verdadeira, $\sim P$ torna-se Falsa.
- Se $P$ era Falsa, $\sim P$ torna-se Verdadeira.
- A **Dupla Negação** anula a si mesma: negar o que foi negado é o mesmo que afirmar: $\sim(\sim P) \equiv P$ (*"Não é verdade que o agente não foi a campo"* $\equiv$ *"O agente foi a campo"*).

##### B. Por Que Negar "E" Vira "OU"? (Leis de De Morgan Explicadas)
Pense em uma situação do mundo real:
- O supervisor diz aos agentes: *"Para a inspeção de hoje, vocês devem levar o crachá E o protetor solar."*
- Quando é que um agente **descumpre essa regra** (ou seja, nega a afirmação)?
- Ele precisa esquecer as duas coisas para descumprir? **NÃO!** Basta ele esquecer o crachá OU esquecer o protetor solar (ou ambos)!
- Por isso a regra matemática é incontestável:
  $$\sim(P \land Q) \equiv \sim P \lor \sim Q$$
  *(Nega a primeira, nega a segunda e troca o 'E' por 'OU')*
- E para negar o "OU":
  $$\sim(P \lor Q) \equiv \sim P \land \sim Q$$
  *(Nega a primeira, nega a segunda e troca o 'OU' por 'E')*

##### C. Como Negar o "Se... então" com a Regra do MANÉ
Se um político diz: *"Se eu for eleito, então construirei uma nova UBS no bairro."*
- Quando é que você pode chamá-lo de mentiroso?
- Somente se ele for eleito ($P$ aconteceu) **E** ele NÃO construir a UBS ($\sim Q$ aconteceu)!
- Portanto, para negar uma condicional $P \rightarrow Q$, você aplica a regra do **MANÉ**:
  $$\sim(P \rightarrow Q) \equiv P \land \sim Q$$
  - **MA**ntém a primeira proposição exatamente como está;
  - Troca o conectivo por **E**;
  - **NE**ga a segunda proposição!
  *(Nunca inicie a negação de uma condicional com outro 'Se'!).*

##### D. Negação de Quantificadores: A Regra do PEA + NÃO
O maior erro de iniciantes em RLM é achar que a negação de "Todo homem é honesto" é "Nenhum homem é honesto". **Isso está completamente errado!**
- Para derrubar uma afirmação que diz que "TODOS são", você não precisa provar que ninguém é; você só precisa encontrar **UM ÚNICO CASO CONTRÁRIO**!
- Mnemônico **PEA + NÃO**:
  - Para negar **TODO** $\rightarrow$ use **P**elo menos um NÃO / **E**xiste algum que NÃO / **A**lgum NÃO.
  - Para negar **NENHUM** $\rightarrow$ use **P**elo menos um É / **E**xiste algum que É / **A**lgum É.
'@

if ($content24 -notmatch "0\. Nivelamento & Pré-Requisitos Fundamentais") {
    $content24 = $content24 -replace '(?s)#### 1\. Objetivos Claros', "$nivelamento24`r`n`r`n#### 1. Objetivos Claros"
    $escaped24 = $nivelamento24 -replace '\\', '\\' -replace '"', '\"' -replace "`r`n", '\n' -replace "`n", '\n'
    $content24 = $content24 -replace '(?s)"modoA_markdown": "#### 1\. Objetivos Claros', "`"modoA_markdown`": `"$escaped24\n\n#### 1. Objetivos Claros"
    [System.IO.File]::WriteAllText($file24, $content24, [System.Text.Encoding]::UTF8)
    Write-Host " -> Aula 24 enriquecida com sucesso!" -ForegroundColor Green
} else {
    Write-Host " -> Aula 24 já continha nivelamento." -ForegroundColor Yellow
}

# -------------------------------------------------------------
# AULA 25: rlm_3
# -------------------------------------------------------------
$file25 = Join-Path $RlmDir "25-conjuntos-mmc-mdc-equacoes-sistemas-lineares-funcao-1-grau-medias.md"
$content25 = Get-Content $file25 -Raw -Encoding UTF8

$nivelamento25 = @'
#### 0. Nivelamento & Pré-Requisitos Fundamentais (Aprenda a Base Primeiro!)

Matemática básica é cumulativa: se houver dúvida na regra dos sinais ou em frações simples, os problemas de equações e médias ficam confusos. Vamos consolidar a base absoluta:

##### A. Os Conjuntos Numéricos do Zero
1. **Números Naturais ($\mathbb{N}$):** $\{0, 1, 2, 3, 4, 5, \dots\}$. São os números inteiros e positivos usados para contagem direta de objetos e imóveis.
2. **Números Inteiros ($\mathbb{Z}$):** $\{\dots, -3, -2, -1, 0, 1, 2, 3, \dots\}$. Incluem os naturais mais os números negativos (temperaturas abaixo de zero, dívidas, saldo bancário negativo).
3. **Números Racionais ($\mathbb{Q}$):** Todos os números que podem ser escritos na forma de fração $\frac{a}{b}$ (com $b \neq 0$). Incluem os inteiros, os números com vírgula exatos ($0,75 = \frac{3}{4}$) e as dízimas periódicas ($0,333\dots = \frac{1}{3}$).
4. **Números Irracionais ($\mathbb{I}$):** Números decimais infinitos que **não** têm repetição periódica e não podem virar fração exata ($\pi \approx 3,14159\dots$, $\sqrt{2} \approx 1,414\dots$).
5. **Números Reais ($\mathbb{R}$):** É o conjunto que engloba TODOS os números anteriores juntos em uma régua contínua.

##### B. A Regra dos Sinais Sem Confusão: "Tenho e Devo" vs. "Multiplicação"
Nunca confunda a regra da soma com a regra da multiplicação:
- **Na Adição e Subtração (Pense em Dinheiro no Bolso: Tenho e Devo):**
  - $+8 + 5 = +13$ (Tenho 8 e ganho 5 $\rightarrow$ fico com 13).
  - $-8 - 5 = -13$ (Devo 8 na farmácia e compro mais 5 fiado $\rightarrow$ devo 13 no total!).
  - $-10 + 4 = -6$ (Devo 10 e pago 4 $\rightarrow$ continuo devendo 6).
  - $+15 - 9 = +6$ (Tenho 15 e gasto 9 $\rightarrow$ ainda sobram 6).
- **Na Multiplicação e Divisão (Sinais Iguais dão Mais; Diferentes dão Menos):**
  - $(+) \times (+) = \mathbf{+}$ e $(-) \times (-) = \mathbf{+}$ (Sinais iguais resultam em POSITIVO).
  - $(+) \times (-) = \mathbf{-}$ e $(-) \times (+) = \mathbf{-}$ (Sinais diferentes resultam em NEGATIVO).

##### C. Fatoração e a Diferença Prática entre MMC e MDC
- **Número Primo:** É o número inteiro maior que 1 que só pode ser dividido por 1 e por ele mesmo ($\{2, 3, 5, 7, 11, 13, 17, 19, 23\dots\}$). O número 2 é o **único primo par**!
- **Mínimo Múltiplo Comum (MMC):**
  - **Quando usar na prova?** Sempre que o problema falar em **eventos que se repetem ciclicamente** e perguntar quando eles acontecerão **juntos novamente** no futuro!
  - *Exemplo clássico:* *"Um ACE visita o setor A de 6 em 6 dias, e o setor B de 8 em 8 dias. Se visitou ambos hoje, daqui a quantos dias visitará juntos de novo?"* $\rightarrow$ É MMC(6, 8) = 24 dias!
- **Máximo Divisor Comum (MDC):**
  - **Quando usar na prova?** Sempre que o problema falar em **dividir, cortar ou repartir quantidades diferentes em partes iguais, com o maior tamanho possível** sem sobras!
  - *Exemplo clássico:* *"Temos 60 fichas amarelas e 48 fichas azuis e queremos agrupá-las em pastas com o mesmo número de fichas sem misturar cores. Qual o maior número de fichas por pasta?"* $\rightarrow$ É MDC(60, 48) = 12 fichas!

##### D. Equação do 1º Grau: A Metáfora da Balança de Dois Pratos
Resolver uma equação do primeiro grau ($ax + b = c$) é encontrar o valor da incógnita $x$ que equilibra os dois lados da balança:
- **Regra de Transposição:** Toda vez que um termo pula para o outro lado do sinal de igual ($=$), ele deve realizar a **operação inversa**:
  - O que está SOMANDO passa SUBTRAINDO: $x + 12 = 30 \implies x = 30 - 12 = 18$.
  - O que está SUBTRAINDO passa SOMANDO: $x - 7 = 20 \implies x = 20 + 7 = 27$.
  - O que está MULTIPLICANDO passa DIVIDINDO: $4x = 36 \implies x = \frac{36}{4} = 9$.
  - O que está DIVIDINDO passa MULTIPLICANDO: $\frac{x}{5} = 8 \implies x = 8 \times 5 = 40$.
'@

if ($content25 -notmatch "0\. Nivelamento & Pré-Requisitos Fundamentais") {
    $content25 = $content25 -replace '(?s)#### 1\. Objetivos Claros', "$nivelamento25`r`n`r`n#### 1. Objetivos Claros"
    $escaped25 = $nivelamento25 -replace '\\', '\\' -replace '"', '\"' -replace "`r`n", '\n' -replace "`n", '\n'
    $content25 = $content25 -replace '(?s)"modoA_markdown": "#### 1\. Objetivos Claros', "`"modoA_markdown`": `"$escaped25\n\n#### 1. Objetivos Claros"
    [System.IO.File]::WriteAllText($file25, $content25, [System.Text.Encoding]::UTF8)
    Write-Host " -> Aula 25 enriquecida com sucesso!" -ForegroundColor Green
} else {
    Write-Host " -> Aula 25 já continha nivelamento." -ForegroundColor Yellow
}

# -------------------------------------------------------------
# AULA 26: rlm_4
# -------------------------------------------------------------
$file26 = Join-Path $RlmDir "26-razao-proporcao-regra-de-tres-simples-composta-porcentagem-fracoes.md"
$content26 = Get-Content $file26 -Raw -Encoding UTF8

$nivelamento26 = @'
#### 0. Nivelamento & Pré-Requisitos Fundamentais (Aprenda a Base Primeiro!)

Antes de calcular regras de três compostas ou aumentos sucessivos, domine a mecânica elementar das frações e porcentagens:

##### A. Frações do Zero: O Que Elas Realmente Significam
Uma fração $\frac{A}{B}$ representa uma divisão:
- O número de baixo (**Denominador**) indica em **quantas partes iguais o todo foi dividido**.
- O número de cima (**Numerador**) indica **quantas dessas partes nós pegamos**.
- **Operações Fundamentais com Frações:**
  - **Soma e Subtração:**
    - Se os denominadores forem iguais, basta operar os numeradores: $\frac{3}{10} + \frac{4}{10} = \frac{7}{10}$.
    - Se forem diferentes, use o MMC ou multiplique cruzado (Método da Borboleta): $\frac{1}{3} + \frac{1}{4} = \frac{1 \times 4 + 1 \times 3}{3 \times 4} = \frac{7}{12}$.
  - **Multiplicação:** É feita em linha reta! Numerador com numerador, denominador com denominador:
    $$\frac{2}{5} \times \frac{3}{7} = \frac{2 \times 3}{5 \times 7} = \frac{6}{35}$$
  - **Divisão:** Repita a primeira fração e multiplique pelo **INVERSO** da segunda:
    $$\frac{2}{3} \div \frac{4}{5} = \frac{2}{3} \times \frac{5}{4} = \frac{10}{12} = \frac{5}{6}$$

##### B. A Tríplice Aliança: Fração $\longleftrightarrow$ Decimal $\longleftrightarrow$ Porcentagem
Todo número racional pode ser escrito em 3 formatos equivalentes. Memorize esta tabela para ganhar velocidade de cálculo:
| Fração Irredutível | Valor Decimal | Percentual | Aplicação Mental Rápida |
| :---: | :---: | :---: | :--- |
| $\mathbf{\frac{1}{2}}$ | $0,50$ | **$50\%$** | Divida o valor por 2 |
| $\mathbf{\frac{1}{4}}$ | $0,25$ | **$25\%$** | Metade da metade (divida por 4) |
| $\mathbf{\frac{3}{4}}$ | $0,75$ | **$75\%$** | Multiplique por 3 e divida por 4 (ou $50\% + 25\%$) |
| $\mathbf{\frac{1}{5}}$ | $0,20$ | **$20\%$** | Divida o valor por 5 |
| $\mathbf{\frac{1}{10}}$ | $0,10$ | **$10\%$** | **Ande a vírgula 1 casa para a esquerda!** |
| $\mathbf{\frac{1}{100}}$ | $0,01$ | **$1\%$** | **Ande a vírgula 2 casas para a esquerda!** |

> **Cálculo de Cabeça em 2 Segundos:**
> - Para calcular $15\%$ de $400$: Ache $10\%$ andando a vírgula ($= 40$). Como $5\%$ é a metade de $10\%$, temos $+20$. Total: $40 + 20 = 60$!

##### C. Grandezas Diretamente vs. Inversamente Proporcionais
Antes de montar qualquer regra de três, faça a pergunta da seta:
- **Diretamente Proporcionais:** Quando o aumento de uma grandeza provoca o **aumento** da outra na mesma proporção (ou quando uma diminui, a outra diminui junto).
  - *Exemplo:* Mais horas trabalhadas $\rightarrow$ mais casas visitadas.
  - *Como resolver:* Multiplica-se em **CRUZ ($X$)**!
- **Inversamente Proporcionais:** Quando o aumento de uma grandeza provoca a **redução** da outra na mesma proporção!
  - *Exemplo:* Mais agentes trabalhando na mesma área $\rightarrow$ **MENOS** dias necessários para terminar o serviço. Maior velocidade do barco da SEMUSA $\rightarrow$ **MENOS** tempo de viagem até o distrito ribeirinho.
  - *Como resolver:* Multiplica-se em **LINHA RETA ($\parallel$)**!
'@

if ($content26 -notmatch "0\. Nivelamento & Pré-Requisitos Fundamentais") {
    $content26 = $content26 -replace '(?s)#### 1\. Objetivos Claros', "$nivelamento26`r`n`r`n#### 1. Objetivos Claros"
    $escaped26 = $nivelamento26 -replace '\\', '\\' -replace '"', '\"' -replace "`r`n", '\n' -replace "`n", '\n'
    $content26 = $content26 -replace '(?s)"modoA_markdown": "#### 1\. Objetivos Claros', "`"modoA_markdown`": `"$escaped26\n\n#### 1. Objetivos Claros"
    [System.IO.File]::WriteAllText($file26, $content26, [System.Text.Encoding]::UTF8)
    Write-Host " -> Aula 26 enriquecida com sucesso!" -ForegroundColor Green
} else {
    Write-Host " -> Aula 26 já continha nivelamento." -ForegroundColor Yellow
}

# -------------------------------------------------------------
# AULA 27: rlm_5
# -------------------------------------------------------------
$file27 = Join-Path $RlmDir "27-sequencias-pa-pg-analise-combinatoria-probabilidade.md"
$content27 = Get-Content $file27 -Raw -Encoding UTF8

$nivelamento27 = @'
#### 0. Nivelamento & Pré-Requisitos Fundamentais (Aprenda a Base Primeiro!)

Análise Combinatória e Probabilidade assustam os candidatos quando estes tentam adivinhar qual fórmula aplicar. O segredo é fazer as perguntas certas antes de tocar em qualquer fórmula:

##### A. O Princípio Fundamental da Contagem (A Regra do "E" e do "OU")
Toda a combinatória se resume a duas operações lógicas:
1. **Regra do "E" (Princípio Multiplicativo):** Se uma decisão deve ser tomada em etapas sucessivas e independentes, **MULTIPLICAM-SE** as possibilidades de cada etapa!
   - *Exemplo:* Um ACE deve escolher uma rota de campo entre 3 opções de manhã **E** uma rota entre 4 opções à tarde. Total de possibilidades: $3 \times 4 = 12$ combinações de jornadas diárias!
2. **Regra do "OU" (Princípio Aditivo):** Se as opções forem excludentes (ou você escolhe uma alternativa, OU escolhe outra), **SOMAM-SE** as possibilidades!
   - *Exemplo:* Para chegar a uma comunidade ribeirinha, o agente pode pegar uma das 2 linhas de barco **OU** pegar um dos 3 helicópteros da Defesa Civil. Total: $2 + 3 = 5$ opções de transporte.

##### B. O Conceito de Fatorial ($n!$)
O fatorial é a multiplicação regressiva de um número inteiro positivo por todos os seus antecessores até chegar em 1:
- $3! = 3 \times 2 \times 1 = 6$
- $4! = 4 \times 3 \times 2 \times 1 = 24$
- $5! = 5 \times 4 \times 3 \times 2 \times 1 = 120$
- **Convenções Obrigatórias de Concurso:** $0! = 1$ e $1! = 1$.

##### C. A Pergunta de 1 Milhão de Reais: "A ORDEM IMPORTA?"
Quando o problema pedir para formar grupos ou subconjuntos a partir de um total de elementos, faça SEMPRE esta pergunta mental:
> *"Se eu mudar a ordem dos elementos escolhidos, isso cria um grupo novo ou continua sendo o mesmo grupo?"*

- **Se a resposta for SIM (A ordem importa!):**
  - Trata-se de um **ARRANJO** ou **PERMUTAÇÃO**.
  - Ocorre quando há hierarquia, cargos diferentes (Presidente e Secretário), números de telefone, senhas bancárias ou pódios de corrida.
  - *Exemplo:* A senha $1-2-3$ é totalmente diferente da senha $3-2-1$!

- **Se a resposta for NÃO (A ordem NÃO importa!):**
  - Trata-se de uma **COMBINAÇÃO SIMPLES**!
  - Ocorre quando os elementos formam equipes, duplas de agentes, comissões, saladas de frutas, sorteios de prêmios iguais ou mãos de baralho.
  - *Exemplo:* Uma dupla de trabalho formada pelo Agente João e pelo Agente Pedro é EXATAMENTE a mesma dupla formada por Pedro e João! Mudar a ordem não cria uma dupla nova.
  - **Fórmula da Combinação:**
    $$C_{n, p} = \frac{n!}{p!(n - p)!}$$
  - *Macete Rápido para Concurso:* Para calcular $C_{10, 2}$, desça o 10 em 2 fatores e divida por $2 \times 1$: $\frac{10 \times 9}{2 \times 1} = 45$. Para calcular $C_{8, 3}$: $\frac{8 \times 7 \times 6}{3 \times 2 \times 1} = 56$!

##### D. Probabilidade Básica do Zero
A probabilidade $P(A)$ de um evento acontecer é simplesmente a fração entre o que você quer e o que pode acontecer:
$$P(A) = \frac{\text{Número de Casos Favoráveis (o que eu quero que saia)}}{\text{Número de Casos Possíveis (o total de resultados do espaço amostral)}}$$
- O resultado é sempre um número entre $0$ ($0\%$ de chance, evento impossível) e $1$ ($100\%$ de certeza, evento certo).
'@

if ($content27 -notmatch "0\. Nivelamento & Pré-Requisitos Fundamentais") {
    $content27 = $content27 -replace '(?s)#### 1\. Objetivos Claros', "$nivelamento27`r`n`r`n#### 1. Objetivos Claros"
    $escaped27 = $nivelamento27 -replace '\\', '\\' -replace '"', '\"' -replace "`r`n", '\n' -replace "`n", '\n'
    $content27 = $content27 -replace '(?s)"modoA_markdown": "#### 1\. Objetivos Claros', "`"modoA_markdown`": `"$escaped27\n\n#### 1. Objetivos Claros"
    [System.IO.File]::WriteAllText($file27, $content27, [System.Text.Encoding]::UTF8)
    Write-Host " -> Aula 27 enriquecida com sucesso!" -ForegroundColor Green
} else {
    Write-Host " -> Aula 27 já continha nivelamento." -ForegroundColor Yellow
}

Write-Host "Aulas 23 a 27 enriquecidas com sucesso!" -ForegroundColor Cyan
