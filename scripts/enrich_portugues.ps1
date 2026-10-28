<#
.SYNOPSIS
Enriquecimento Didático Profundo - Língua Portuguesa (Aulas 17 a 22 / por_1 a por_6)
Insere a seção "Nivelamento & Pré-Requisitos Fundamentais (Aprenda a Base Primeiro!)"
em cada uma das 6 aulas de Língua Portuguesa no formato Markdown e no bloco JSON.
#>

$RepoRoot = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh"
$PorDir = Join-Path $RepoRoot "content\portugues"

Write-Host "Iniciando aprofundamento das 6 Aulas de Língua Portuguesa..." -ForegroundColor Cyan

# -------------------------------------------------------------
# AULA 17: por_1
# -------------------------------------------------------------
$file17 = Join-Path $PorDir "17-compreensao-interpretacao-textos-tipologia-generos-variacao-linguistica.md"
$content17 = Get-Content $file17 -Raw -Encoding UTF8

$nivelamento17 = @"
#### 0. Nivelamento & Pré-Requisitos Fundamentais (Aprenda a Base Primeiro!)

Antes de memorizar os detalhes de tipologia e figuras de linguagem, você precisa entender como a comunicação humana funciona do zero. Muitos candidatos erram questões fáceis da banca IBGP simplesmente porque confundem o que o texto realmente disse com o que eles próprios acham sobre o assunto!

##### A. O Que É Comunicação e os 6 Elementos do Circuito da Linguagem
Toda comunicação só acontece quando existem seis elementos indispensáveis (Teoria da Comunicação de Roman Jakobson):
1. **Emissor (ou Locutor):** Aquele que produz e envia a mensagem (pode ser o autor de uma crônica, um médico que assina um laudo, ou o ACE preenchendo um boletim de visita).
2. **Receptor (ou Interlocutor/Destinatário):** Aquele que recebe e decodifica a mensagem (o leitor da prova, o morador que recebe o folheto preventivo da dengue).
3. **Mensagem:** O conteúdo em si, o conjunto de informações, ideias ou sentimentos transmitidos.
4. **Canal de Comunicação:** O meio físico ou virtual que transporta a mensagem (o papel da prova, o cartaz fixado na UBS, o aplicativo de celular, as ondas sonoras da voz humana).
5. **Código:** O sistema de signos convencionados usado para estruturar a mensagem. Para que haja comunicação eficaz, emissor e receptor precisam dominar o mesmo código (a Língua Portuguesa escrita, a Língua Brasileira de Sinais - Libras, o código Morse).
6. **Contexto (ou Referente):** O assunto, a situação real, o fato ou a realidade do mundo à qual a mensagem se refere (por exemplo, a epidemia de dengue em Porto Velho).

> **A Regra de Ouro:** Cada um desses 6 elementos dá origem a uma das **6 Funções da Linguagem** cobradas pela banca IBGP!
> - Foco no Contexto $\rightarrow$ **Função Referencial** (informativa, objetiva, jornalística, científica).
> - Foco no Emissor $\rightarrow$ **Função Emotiva** (subjetiva, primeira pessoa "eu", sentimentos).
> - Foco no Receptor $\rightarrow$ **Função Conativa/Apelativa** (verbos no imperativo, convencimento, publicidade, cartilhas da SEMUSA).
> - Foco no Canal $\rightarrow$ **Função Fática** (testar o contato: "Alô?", "Entendeu?", "Veja bem...").
> - Foco no Código $\rightarrow$ **Função Metalinguística** (o código explicando a si mesmo: o dicionário que explica palavras usando palavras, um poema sobre o ato de escrever).
> - Foco na Mensagem $\rightarrow$ **Função Poética** (elaboração estética, ritmo, rimas, sonoridade, metáforas).

##### B. A Distinção Vital: Compreensão Textual vs. Interpretação Textual
Esta é a distinção mais importante de toda a prova de Língua Portuguesa:
- **Compreensão Textual (Intratextualidade / O que está ESCRITO):**
  - Significa entender o que está **explicitamente registrado** na superfície do texto.
  - O candidato não deve deduzir nem inventar nada: a resposta correta é uma paráfrase (dizer a mesma coisa com outras palavras) do que o autor expressou.
  - **Gatilhos clássicos no enunciado da banca IBGP:**
    - *"De acordo com o texto..."*
    - *"Segundo o autor..."*
    - *"No segundo parágrafo, afirma-se expressamente que..."*
    - *"O texto informa que..."*
- **Interpretação Textual (Extratextualidade / O que se DEDUZ com base em pistas):**
  - Significa extrair conclusões, inferências e mensagens implícitas a partir das pistas deixadas pelo autor somadas ao conhecimento de mundo compartilhado.
  - A resposta não está copiada no texto, mas decorre necessariamente dele.
  - **Gatilhos clássicos no enunciado da banca IBGP:**
    - *"Depreende-se do texto que..."*
    - *"Infere-se das palavras do autor que..."*
    - *"O texto permite concluir que..."*
    - *"A leitura do texto possibilita subentender que..."*

##### C. As Três Armadilhas Fatais da Banca (Os "Pecados" do Candidato)
Quando a banca IBGP elabora alternativas erradas de interpretação, ela utiliza quase sempre um destes três artifícios:
1. **Extrapolação (A Armadilha do Excesso):** A alternativa traz uma ideia que até pode ser verdadeira na vida real, mas **o texto não disse nada sobre aquilo**. O candidato concorda com a frase porque já ouviu falar no assunto, mas marca errado porque o texto não dá suporte àquela afirmação!
2. **Redução (A Armadilha do Detalhe):** A alternativa pega uma afirmação restrita, que valia apenas para um caso específico citado no texto, e a transforma em uma verdade universal para todo o tema.
3. **Contradição (A Armadilha da Inversão):** A alternativa afirma o exato oposto do que o autor defendeu, frequentemente trocando um conectivo ou inserindo uma palavra restritiva disfarçada ("sempre", "nunca", "apenas", "somente").

##### D. Sentido Literal (Denotativo) vs. Sentido Figurado (Conotativo)
- **Denotação (D de Dicionário / Dado Real):** É o uso da palavra em seu sentido literal, objetivo, primário, dicionarizado. Não dá margem a duplo sentido. É a linguagem exigida em relatórios oficiais da SEMUSA, editais e manuais técnicos.
  - *Exemplo:* "O mosquito transmissor da dengue deposita ovos em recipientes com água parada."
- **Conotação (C de Criatividade / Coração):** É o uso da palavra em sentido figurado, metafórico, subjetivo, dependente do contexto expressivo.
  - *Exemplo:* "Aquele bairro está mergulhado em um mar de problemas sanitários." (O bairro não virou oceano; "mar" aqui significa imensa quantidade).
"@

# Verificamos se já existe a seção no arquivo
if ($content17 -notmatch "0\. Nivelamento & Pré-Requisitos Fundamentais") {
    $content17 = $content17 -replace '(?s)#### 1\. Objetivo Claro da Aula', "$nivelamento17`r`n`r`n#### 1. Objetivo Claro da Aula"
    # Também atualizamos dentro do bloco json
    $content17 = $content17 -replace '(?s)"modoA_markdown": "#### 1\. Objetivo Claro', "`"modoA_markdown`": `"$($nivelamento17 -replace '\\', '\\' -replace '"', '\"' -replace '`r`n', '\n' -replace '`n', '\n')\n\n#### 1. Objetivo Claro"
    [System.IO.File]::WriteAllText($file17, $content17, [System.Text.Encoding]::UTF8)
    Write-Host " -> Aula 17 enriquecida com sucesso!" -ForegroundColor Green
} else {
    Write-Host " -> Aula 17 já continha nivelamento." -ForegroundColor Yellow
}

# -------------------------------------------------------------
# AULA 18: por_2
# -------------------------------------------------------------
$file18 = Join-Path $PorDir "18-ortografia-acentuacao-hifen-semantica-figuras-linguagem-sintaxe.md"
$content18 = Get-Content $file18 -Raw -Encoding UTF8

$nivelamento18 = @"
#### 0. Nivelamento & Pré-Requisitos Fundamentais (Aprenda a Base Primeiro!)

Acentuação gráfica e ortografia não são regras arbitrárias para você decorar mecanicamente. Elas dependem exclusivamente de como você ouve e pronuncia os sons das palavras. Antes de estudar as regras do Novo Acordo Ortográfico, domine a base fonética:

##### A. Fonema vs. Letra: Não Confunda Ouvido com Escrita!
- **Letra:** É o desenho gráfico, o caractere que você enxerga no papel.
- **Fonema:** É a menor unidade sonora capaz de estabelecer distinção de significado entre palavras (o som que sai da boca).
- **Atenção às Pegadinhas Clássicas:**
  - Letra **H** inicial não tem som algum em português! Portanto, "hoje" tem 4 letras e apenas 3 fonemas (/o/ /j/ /e/).
  - A letra **X** pode soar como dois fonemas (/k/ + /s/): "táxi" tem 4 letras e 5 fonemas!
  - **Dígrafo:** São DUAS letras que representam UM ÚNICO fonema. O dígrafo "engole" um som!
    - Dígrafos consonantais separáveis: **RR, SS, SC, SÇ, XC** (car-ro, pás-sa-ro, des-cer, nas-ço, ex-ce-ção).
    - Dígrafos consonantais inseparáveis: **CH, LH, NH, GU, QU** (chu-va, fi-lho, ni-nho, guer-ra, qui-lo).
    - Dígrafos vocálicos (nasais): **AM, AN, EM, EN, IM, IN, OM, ON, UM, UN** quando a vogal é nasalizada por M ou N na mesma sílaba (ex.: "campo" tem 5 letras e 4 fonemas: /k/ /ã/ /p/ /u/).

##### B. Encontros Vocálicos: Ditongo, Tritongo e Hiato
Saber a diferença entre ditongo e hiato é o que decide se uma palavra é acentuada ou não!
- **Ditongo:** É a união de uma Vogal (V) e uma Semivogal (SV) na **MESMA sílaba**. A semivogal é pronunciada com menos intensidade.
  - Ditongo Decrescente (V + SV): *pai, cai-xa, noi-te, cha-péu*.
  - Ditongo Crescente (SV + V): *his-tó-ria, á-gua, sé-rie, fa-mí-lia*. (As bancas costumam chamar essas palavras de "paroxítonas terminadas em ditongo crescente" ou "proparoxítonas aparentes/eventuais").
- **Tritongo:** União de SV + V + SV na **mesma sílaba**: *U-ru-guai, i-guais, en-xa-guou*.
- **Hiato:** É o encontro de duas vogais em sílabas **DIFERENTES**! Em português, NUNCA existem duas vogais verdadeiras na mesma sílaba. Por isso, quando se encontram, elas se separam:
  - *sa-ú-de, pa-ís, ba-ú, sa-í-da, ci-ú-me, ru-im, co-or-de-nar*.

##### C. O Método Infalível para Descobrir a Sílaba Tônica
A **sílaba tônica** é a sílaba pronunciada com mais força e duração. As outras são chamadas de sílabas átonas.
- **O Truque do "Chamar no Portão":** Se você estiver em dúvida sobre qual sílaba é a mais forte, finja que a palavra é o nome de um vizinho e chame no portão bem alto:
  - *"Ôôô Ca-fééé!"* $\rightarrow$ A sílaba que se esticou foi o "FÉ" (última sílaba $\rightarrow$ Oxítona).
  - *"Ôôô Mééédico!"* $\rightarrow$ A sílaba que se esticou foi o "MÉ" (antepenúltima $\rightarrow$ Proparoxítona).
  - *"Ôôô Ca-deeei-ra!"* $\rightarrow$ A sílaba que se esticou foi o "DEI" (penúltima $\rightarrow$ Paroxítona).

##### D. Classificação da Palavra Quanto à Posição da Sílaba Tônica
A contagem da posição da sílaba tônica é feita SEMPRE de **trás para frente** (do final para o início):
1. **Oxítona:** A sílaba tônica é a **ÚLTIMA** (ex.: *pará, cipó, você, sabiá, caju, anel*).
2. **Paroxítona:** A sílaba tônica é a **PENÚLTIMA** (mais de 70% das palavras do português! ex.: *casa, mesa, vírus, tórax, caráter, escola*).
3. **Proparoxítona:** A sílaba tônica é a **ANTEPENÚLTIMA** (ex.: *médico, lâmpada, árvore, endêmica*).

> **A Regra de Ouro Inicial:**
> 1. Todas as proparoxítonas são acentuadas sem exceção!
> 2. Oxítonas só são acentuadas se terminarem em **A, E, O, EM, ENS** (e ditongos abertos ÉI, ÉU, ÓI tônicos no fim).
> 3. Paroxítonas são acentuadas no final oposto: nas terminações **R, X, N, L, I/IS, US, UM/UNS, PS, Ã/ÃS e Ditongos** (Mnemônico: *ROUXINOL + DITONGO*).
"@

if ($content18 -notmatch "0\. Nivelamento & Pré-Requisitos Fundamentais") {
    $content18 = $content18 -replace '(?s)#### 1\. Objetivo Claro da Aula', "$nivelamento18`r`n`r`n#### 1. Objetivo Claro da Aula"
    $content18 = $content18 -replace '(?s)"modoA_markdown": "#### 1\. Objetivo Claro', "`"modoA_markdown`": `"$($nivelamento18 -replace '\\', '\\' -replace '"', '\"' -replace '`r`n', '\n' -replace '`n', '\n')\n\n#### 1. Objetivo Claro"
    [System.IO.File]::WriteAllText($file18, $content18, [System.Text.Encoding]::UTF8)
    Write-Host " -> Aula 18 enriquecida com sucesso!" -ForegroundColor Green
} else {
    Write-Host " -> Aula 18 já continha nivelamento." -ForegroundColor Yellow
}

# -------------------------------------------------------------
# AULA 19: por_3
# -------------------------------------------------------------
$file19 = Join-Path $PorDir "19-coesao-coerencia-conjuncoes-operadores-argumentativos-implictos.md"
$content19 = Get-Content $file19 -Raw -Encoding UTF8

$nivelamento19 = @"
#### 0. Nivelamento & Pré-Requisitos Fundamentais (Aprenda a Base Primeiro!)

Antes de memorizar a lista de conjunções coordenadas e subordinadas, você deve compreender o que realmente significa "costurar" um texto de forma coesa e coerente:

##### A. Coesão vs. Coerência: A Metáfora dos Tijolos e do Edifício
Imagine a construção de uma casa:
- **Coesão:** É a argamassa, o cimento e as ferragens que unem um tijolo ao outro. Trata-se da conexão **gramatical e visual** entre as palavras e as frases (feita por pronomes, conjunções, preposições, concordância e repetição intencional de termos). Um texto com boa coesão é suave de ler, sem solavancos.
- **Coerência:** É o projeto arquitetônico e a estabilidade da casa. Diz respeito ao **sentido global**, à lógica das ideias e à ausência de contradições internas. Um texto é coerente quando faz sentido no mundo real e não entra em contradição consigo mesmo.
> **Exemplo Clássico de Pegadinha:** Um texto pode ser perfeitamente coeso (gramática impecável, conjunções no lugar certo), mas totalmente incoerente! Veja: *"O dia estava ensolarado e límpido, portanto peguei meu guarda-chuva para me proteger das fortes tempestades que inundavam as ruas."* Gramaticalmente as frases estão conectadas, mas o sentido lógico é absurdo!

##### B. Coesão Referencial: Anáfora vs. Catáfora
Para evitar repetir a mesma palavra dez vezes no mesmo parágrafo, usamos a coesão referencial:
- **Anáfora (Olha para TRÁS):** O pronome ou termo substituto retoma uma informação que **já foi dita anteriormente** no texto. É a mais frequente na língua.
  - *Exemplo:* "O Agente de Combate às Endemias visitou o imóvel abandonado. **Ele** [retoma 'O Agente'] encontrou múltiplos focos de larvas **no local** [retoma 'no imóvel abandonado']."
  - Pronomes anafóricos típicos: *esse, essa, isso, aquele, ele, o qual*.
- **Catáfora (Olha para a FRENTE):** O pronome ou expressão antecipa uma informação que **ainda vai ser revelada** adiante.
  - *Exemplo:* "O supervisor da SEMUSA deu **este** aviso importante: **nenhum agente deve trabalhar sem protetor solar e crachá de identificação**."
  - Pronomes catafóricos típicos: *este, esta, isto*.

##### C. O Que É uma Conjunção e Como Ela Opera
A conjunção é a classe de palavra invariável que serve de "ponte" entre duas orações ou entre termos de mesma função sintática. A escolha da conjunção define a relação de sentido entre os fatos:
- Se você diz: *"Estudei muito E passei"* $\rightarrow$ Conjunção Aditiva (soma de acontecimentos favoráveis).
- Se você diz: *"Estudei muito, MAS não passei"* $\rightarrow$ Conjunção Adversativa (quebra de expectativa, oposição de ideias).
- Se você diz: *"Estudei muito, PORQUE queria passar"* $\rightarrow$ Conjunção Causal/Explicativa (motivo, justificativa).
- Se você diz: *"Estudei muito, LOGO passei"* $\rightarrow$ Conjunção Conclusiva (dedução lógica, resultado final).

> **Atenção:** A banca IBGP adora trocar uma conjunção por outra e perguntar se o sentido original e a correção gramatical se mantêm! Para acertar, você precisa reconhecer o valor semântico de cada conectivo.
"@

if ($content19 -notmatch "0\. Nivelamento & Pré-Requisitos Fundamentais") {
    $content19 = $content19 -replace '(?s)#### 1\. Objetivo Claro da Aula', "$nivelamento19`r`n`r`n#### 1. Objetivo Claro da Aula"
    $content19 = $content19 -replace '(?s)"modoA_markdown": "#### 1\. Objetivo Claro', "`"modoA_markdown`": `"$($nivelamento19 -replace '\\', '\\' -replace '"', '\"' -replace '`r`n', '\n' -replace '`n', '\n')\n\n#### 1. Objetivo Claro"
    [System.IO.File]::WriteAllText($file19, $content19, [System.Text.Encoding]::UTF8)
    Write-Host " -> Aula 19 enriquecida com sucesso!" -ForegroundColor Green
} else {
    Write-Host " -> Aula 19 já continha nivelamento." -ForegroundColor Yellow
}

# -------------------------------------------------------------
# AULA 20: por_4
# -------------------------------------------------------------
$file20 = Join-Path $PorDir "20-morfologia-classes-formacao-palavras-verbos-colocacao-pronominal.md"
$content20 = Get-Content $file20 -Raw -Encoding UTF8

$nivelamento20 = @"
#### 0. Nivelamento & Pré-Requisitos Fundamentais (Aprenda a Base Primeiro!)

Morfologia é o estudo da palavra isolada, analisando a sua estrutura, a sua família e a "etiqueta" (classe gramatical) a que ela pertence. Em Língua Portuguesa existem exatamente 10 classes de palavras, e compreender a divisão entre variáveis e invariáveis é o primeiro passo para nunca mais errar concordância:

##### A. As 10 Classes de Palavras: Variáveis vs. Invariáveis
| Grupo | Classe Gramatical | O Que Faz no Idioma? | Exemplo Prático |
| :--- | :--- | :--- | :--- |
| **Variáveis** (Flexionam em gênero, número e/ou pessoa) | **1. Substantivo** | Dá nome aos seres, objetos, sentimentos e lugares | *agente, mosquito, Porto Velho, saúde* |
| | **2. Artigo** | Determina (o, a) ou indetermina (um, uma) o substantivo | *o morador, uma vistoria* |
| | **3. Adjetivo** | Caracteriza, qualifica ou atribui estado ao substantivo | *água limpa, imóvel abandonado* |
| | **4. Numeral** | Expressa quantidade exata, ordem, fração ou multiplicação | *duas casas, primeiro distrito* |
| | **5. Pronome** | Acompanha ou substitui o substantivo, indicando a pessoa do discurso | *ele, este, meu, que, quem* |
| | **6. Verbo** | Expressa ação, estado, mudança de estado ou fenômeno da natureza | *inspecionar, chover, permanecer* |
| **Invariáveis** (NUNCA vão para o feminino nem para o plural!) | **7. Advérbio** | Modifica o verbo, o adjetivo ou outro advérbio, indicando circunstância | *ontem, muito, aqui, rapidamente* |
| | **8. Preposição** | Liga duas palavras criando dependência entre elas | *de, em, para, com, por, sem, sobre* |
| | **9. Conjunção** | Liga orações ou termos de mesma função sintática | *e, mas, porque, se, portanto* |
| | **10. Interjeição** | Expressa emoção súbita, susto, dor ou chamamento | *Ufa!, Cuidado!, Tomara!* |

##### B. A Regra de Ouro que Derruba Milhares de Candidatos: O Advérbio É Invariável!
Como o advérbio é invariável, ele **jamais** concorda com substantivo ou adjetivo feminino ou no plural:
- **Certo:** "A servidora da saúde estava **meio** preocupada com o surto de malária." (*Meio* aqui é advérbio de intensidade = um pouco, logo não vai para o feminino!).
- **Errado:** "A servidora estava *meia* preocupada." (*Meia* no feminino só existe quando for numeral fracionário: "comeu meia maçã" ou a peça de roupa: "meia de algodão").
- **Certo:** "Os agentes falaram **bastante** durante o treinamento." (*Bastante* modificando verbo é advérbio invariável). Mas atenção: se acompanhar substantivo com sentido de 'muitos', vira pronome indefinido e varia: "Havia **bastantes** recipientes no quintal".

##### C. Pronomes Pessoais: Retos vs. Oblíquos
- **Pronomes Pessoais do Caso Reto (eu, tu, ele/ela, nós, vós, eles/elas):**
  - Foram criados pela gramática para exercer a função de **SUJEITO** (quem pratica a ação).
  - *Erro grave do cotidiano:* "Deixa eu ver ele". O pronome reto não pode ser objeto direto!
- **Pronomes Pessoais do Caso Oblíquo Átono (me, te, se, o, a, lhe, nos, vos, os, as, lhes):**
  - Foram criados para exercer a função de **COMPLEMENTO (OBJETO)**.
  - **O, A, OS, AS:** Substituem objetos diretos (sem preposição). Sofrem transformações fonéticas:
    - Se o verbo terminar em **-R, -S ou -Z**, essas letras caem e o pronome vira **-LO, -LA, -LOS, -LAS** (*eliminar + o = eliminá-lo*; *fiz + o = fi-lo*).
    - Se o verbo terminar em som nasal (**-M, -ÃO, -ÕE**), o pronome ganha 'N' e vira **-NO, -NA, -NOS, -NAS** (*encontraram + o = encontraram-no*).
  - **LHE, LHES:** Substituem exclusivamente objetos indiretos regidos pela preposição "a" ou "para" (*entregou o relatório ao supervisor $\rightarrow$ entregou-lhe o relatório*). Nunca use "lhe" com verbo transitivo direto!
"@

if ($content20 -notmatch "0\. Nivelamento & Pré-Requisitos Fundamentais") {
    $content20 = $content20 -replace '(?s)#### 1\. Objetivo Claro da Aula', "$nivelamento20`r`n`r`n#### 1. Objetivo Claro da Aula"
    $content20 = $content20 -replace '(?s)"modoA_markdown": "#### 1\. Objetivo Claro', "`"modoA_markdown`": `"$($nivelamento20 -replace '\\', '\\' -replace '"', '\"' -replace '`r`n', '\n' -replace '`n', '\n')\n\n#### 1. Objetivo Claro"
    [System.IO.File]::WriteAllText($file20, $content20, [System.Text.Encoding]::UTF8)
    Write-Host " -> Aula 20 enriquecida com sucesso!" -ForegroundColor Green
} else {
    Write-Host " -> Aula 20 já continha nivelamento." -ForegroundColor Yellow
}

# -------------------------------------------------------------
# AULA 21: por_5
# -------------------------------------------------------------
$file21 = Join-Path $PorDir "21-sintaxe-1-analise-sintatica-concordancia-verbal-nominal.md"
$content21 = Get-Content $file21 -Raw -Encoding UTF8

$nivelamento21 = @"
#### 0. Nivelamento & Pré-Requisitos Fundamentais (Aprenda a Base Primeiro!)

Sintaxe não é decorar nomes complicados; é entender o papel que cada palavra desempenha dentro da frase. Se na Morfologia a palavra é um "ator", na Sintaxe ela recebe um "papel no palco" (sujeito, objeto, adjunto). Veja a base que sustenta toda a análise sintática:

##### A. Frase, Oração e Período
- **Frase:** É qualquer enunciado com sentido completo capaz de estabelecer comunicação. Pode ter verbo ou não ter verbo!
  - *Exemplo sem verbo (Frase Nominal):* "Silêncio no posto de saúde!", "Cuidado com o cão!".
  - *Exemplo com verbo (Frase Verbal):* "O agente chegou cedo."
- **Oração:** É o enunciado estruturado obrigatoriamente em torno de um **verbo** (ou locução verbal). Se não houver verbo, não há oração.
  - Quantidade de orações = Quantidade de verbos ou locuções verbais.
- **Período:** É a frase organizada em uma ou mais orações, encerrada por ponto final, ponto de interrogação ou exclamação:
  - **Período Simples:** Possui apenas UMA oração (chamada de Oração Absoluta). Ex.: *"A equipe de endemias inspecionou cinquenta casas hoje."*
  - **Período Composto:** Possui DUAS OU MAIS orações. Ex.: *"O agente inspecionou as casas [oração 1] e orientou os moradores sobre os criadouros [oração 2]."*

##### B. A Ordem Canônica da Língua Portuguesa e a Busca pelo Sujeito
A ordem natural e direta das orações em nossa língua é:
$$\mathbf{[SUJEITO]} + \mathbf{[VERBO]} + \mathbf{[COMPLEMENTOS]} + \mathbf{[ADJUNTOS\ ADVERBIAIS]}$$
- **A Tática da Banca IBGP:** Para fazer o candidato errar a concordância, a banca inverte a ordem das palavras e coloca o sujeito no final ou longe do verbo! Veja:
  - *"Surgiram repentinamente, após as intensas chuvas amazônicas de inverno, novos focos do mosquito transmissor da dengue."*
  - Muitos candidatos olham para "chuvas amazônicas" (que está perto do verbo) e acham que esse é o sujeito.
- **O Método Infalível para Encontrar o Sujeito:** Vá direto até o verbo e faça a pergunta mágica:
  - *"O QUE É QUE [verbo]?"* ou *"QUEM É QUE [verbo]?"*
  - *"O que é que surgiu?"* $\rightarrow$ Resposta: *"Novos focos do mosquito transmissor"*.
  - O núcleo do sujeito é **focos** (substantivo no plural). Portanto, o verbo **obrigatoriamente deve ficar no plural: SURGIRAM!**

##### C. O Sujeito Inexistente (Verbos Impessoais) — O Campeão de Pegadinhas!
Existem verbos que não possuem sujeito algum. Eles são chamados de **impessoais** e devem permanecer SEMPRE na 3ª pessoa do singular:
1. **Verbo HAVER no sentido de existir, acontecer ou indicando tempo decorrido:**
   - **Certo:** "Havia muitos moradores na reunião da SEMUSA."
   - **Errado:** "*Haviam* muitos moradores..." (HAVER no sentido de existir não vai para o plural jamais!).
   - **Atenção:** O verbo EXISTIR tem sujeito e concorda normalmente: *"Existiam muitos moradores"*.
2. **Verbo FAZER indicando tempo decorrido ou fenômeno climático:**
   - **Certo:** "Faz três anos que atuo na vigilância ambiental."
   - **Errado:** "*Fazem* três anos..." (FAZER indicando tempo não vai para o plural!).
   - **Certo:** "Fazia dias muito quentes em Porto Velho."
"@

if ($content21 -notmatch "0\. Nivelamento & Pré-Requisitos Fundamentais") {
    $content21 = $content21 -replace '(?s)#### 1\. Objetivo Claro da Aula', "$nivelamento21`r`n`r`n#### 1. Objetivo Claro da Aula"
    $content21 = $content21 -replace '(?s)"modoA_markdown": "#### 1\. Objetivo Claro', "`"modoA_markdown`": `"$($nivelamento21 -replace '\\', '\\' -replace '"', '\"' -replace '`r`n', '\n' -replace '`n', '\n')\n\n#### 1. Objetivo Claro"
    [System.IO.File]::WriteAllText($file21, $content21, [System.Text.Encoding]::UTF8)
    Write-Host " -> Aula 21 enriquecida com sucesso!" -ForegroundColor Green
} else {
    Write-Host " -> Aula 21 já continha nivelamento." -ForegroundColor Yellow
}

# -------------------------------------------------------------
# AULA 22: por_6
# -------------------------------------------------------------
$file22 = Join-Path $PorDir "22-sintaxe-2-regencia-verbal-nominal-crase-pontuacao.md"
$content22 = Get-Content $file22 -Raw -Encoding UTF8

$nivelamento22 = @"
#### 0. Nivelamento & Pré-Requisitos Fundamentais (Aprenda a Base Primeiro!)

Regência e crase são temas temidos porque muitos candidatos tentam decorar listas imensas de frases prontas sem entender a mecânica da transitividade verbal. Entenda a base do zero:

##### A. Transitividade Verbal: Quem Pede o Quê?
Os verbos em português se dividem quanto à necessidade de complementos:
1. **Verbo Intransitivo (VI):** Possui sentido completo em si mesmo. Não exige objeto para fechar o sentido básico (pode vir acompanhado apenas de circunstâncias de tempo, lugar ou modo).
   - *Exemplo:* "A larva do mosquito **morreu**." (Sentido completo). "O ACE **chegou** ao distrito de Calama." ('ao distrito' é adjunto adverbial de lugar, não é objeto!).
2. **Verbo Transitivo Direto (VTD):** Exige complemento **sem preposição obrigatória** (Objeto Direto). Responde à pergunta "O QUÊ?" ou "QUEM?".
   - *Exemplo:* "O agente eliminou **o criadouro**." (Eliminou o quê? 'O criadouro' - objeto direto).
3. **Verbo Transitivo Indireto (VTI):** Exige complemento **com preposição obrigatória** (Objeto Indireto). Responde às perguntas "DE QUÊ?", "A QUÊ?", "EM QUÊ?", "POR QUÊ?".
   - *Exemplo:* "A equipe necessita **de novos equipamentos**." (Necessita de quê? 'De novos equipamentos' - objeto indireto).
4. **Verbo Transitivo Direto e Indireto (VTDI / Bitransitivo):** Exige dois complementos simultâneos: um sem preposição e outro com preposição.
   - *Exemplo:* "O supervisor entregou **as fichas de campo** [OD] **aos agentes** [OI]."

##### B. A Matemática Simples da Crase
A crase não é um tipo de acento, mas sim o fenômeno da fusão de duas letras "A" em uma só. O acento que indica essa fusão chama-se **acento grave (`\grave{}`)**:
$$\mathbf{A\text{ (preposição exigida pelo verbo/nome)}} + \mathbf{A\text{ (artigo feminino aceito pelo substantivo)}} = \mathbf{\grave{A}}$$
- Para haver crase, você precisa de duas condições simultâneas:
  1. O termo anterior (verbo ou nome) deve **exigir a preposição 'A'**;
  2. O termo seguinte deve ser uma palavra feminina que **aceite o artigo feminino 'A'** (ou seja um dos pronomes: *aquele, aquela, aquilo*).

##### C. O Teste Infalível da Troca pelo Masculino
Nunca chute uma questão de crase! Aplique o teste prático mais famoso e seguro dos concursos:
1. Pegue a palavra feminina que está depois do "a" e substitua por uma palavra masculina similar (ex.: troque *escola* por *colégio*; *farmácia* por *posto*; *reunião* por *encontro*).
2. Observe o resultado:
   - Se no masculino surgir **"AO"** $\rightarrow$ No feminino **HAVERÁ CRASE ($\grave{a}$)**!
     - *Exemplo:* "O agente foi à UBS" $\rightarrow$ "O agente foi **ao** posto médico" (Deu AO $\rightarrow$ Tem crase!).
   - Se no masculino surgir apenas **"O"** $\rightarrow$ No feminino **NÃO HÁ CRASE (apenas artigo 'a')**!
     - *Exemplo:* "O agente visitou a UBS" $\rightarrow$ "O agente visitou **o** posto médico" (Deu O $\rightarrow$ Não tem crase!).
   - Se no masculino surgir apenas **"A"** $\rightarrow$ No feminino **NÃO HÁ CRASE (apenas preposição 'a')**!
     - *Exemplo:* "Entreguei o documento a uma moradora" $\rightarrow$ "Entreguei o documento **a** um morador" (Ficou só A $\rightarrow$ Sem crase!).

##### D. Os Três Casos de Proibição Absoluta da Crase
1. **Antes de palavra masculina:** O termo masculino não aceita artigo feminino 'a', logo a fusão é impossível (*andou a pé, pagou a prazo, barco a motor*).
2. **Antes de verbo:** Verbo não é substantivo e nunca aceita artigo (*começou a trabalhar, disposto a ajudar, apto a vacinar*).
3. **Antes de pronomes pessoais e de tratamento:** Não admitem artigo (*pediu a ela, disse a você, encaminhou a Vossa Senhoria*). Exceções de tratamento que admitem crase: *senhora, senhorita e dona*.
"@

if ($content22 -notmatch "0\. Nivelamento & Pré-Requisitos Fundamentais") {
    $content22 = $content22 -replace '(?s)#### 1\. Objetivo Claro da Aula', "$nivelamento22`r`n`r`n#### 1. Objetivo Claro da Aula"
    $content22 = $content22 -replace '(?s)"modoA_markdown": "#### 1\. Objetivo Claro', "`"modoA_markdown`": `"$($nivelamento22 -replace '\\', '\\' -replace '"', '\"' -replace '`r`n', '\n' -replace '`n', '\n')\n\n#### 1. Objetivo Claro"
    [System.IO.File]::WriteAllText($file22, $content22, [System.Text.Encoding]::UTF8)
    Write-Host " -> Aula 22 enriquecida com sucesso!" -ForegroundColor Green
} else {
    Write-Host " -> Aula 22 já continha nivelamento." -ForegroundColor Yellow
}

Write-Host "Concluído o enriquecimento das aulas de Português!" -ForegroundColor Cyan
