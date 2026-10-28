<#
.SYNOPSIS
Enriquecimento Didático Limpo - Língua Portuguesa (Aulas 17 a 22 / por_1 a por_6)
Atualiza o corpo Markdown E atualiza os blocos JSON serializando via ConvertTo-Json
para garantir sintaxe JSON 100% perfeita sem quebras de linha brutas.
#>

$RepoRoot = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh"
$PorDir = Join-Path $RepoRoot "content\portugues"

# Textos de nivelamento para cada aula:
$nivelamentos = @{
    "por_1" = @'
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
'@;

    "por_2" = @'
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
  - Ditongo Crescente (SV + V): *his-tó-ria, á-gua, sé-rie, fa-mí-lia*.
- **Tritongo:** União de SV + V + SV na **mesma sílaba**: *U-ru-guai, i-guais, en-xa-guou*.
- **Hiato:** É o encontro de duas vogais em sílabas **DIFERENTES**! Em português, NUNCA existem duas vogais verdadeiras na mesma sílaba. Por isso, quando se encontram, elas se separam:
  - *sa-ú-de, pa-ís, ba-ú, sa-í-da, ci-ú-me, ru-im, co-or-de-nar*.

##### C. O Método Infalível para Descobrir a Sílaba Tônica
A **sílaba tônica** é a sílaba pronunciada com mais força e duração. As outras são chamadas de sílabas átonas.
- **O Truque do "Chamar no Portão":** Se você estiver em dúvida sobre qual sílaba é a mais forte, chame a palavra como se chamasse um amigo no portão:
  - *"Ôôô Ca-fééé!"* $\rightarrow$ A sílaba prolongada foi "FÉ" (última sílaba $\rightarrow$ Oxítona).
  - *"Ôôô Mééédico!"* $\rightarrow$ A sílaba prolongada foi "MÉ" (antepenúltima $\rightarrow$ Proparoxítona).
  - *"Ôôô Ca-deeei-ra!"* $\rightarrow$ A sílaba prolongada foi "DEI" (penúltima $\rightarrow$ Paroxítona).

##### D. Classificação Quanto à Posição da Sílaba Tônica
A contagem da posição da sílaba tônica é feita SEMPRE de **trás para frente** (do final para o início):
1. **Oxítona:** A sílaba tônica é a **ÚLTIMA** (ex.: *pará, cipó, você, sabiá, caju, anel*).
2. **Paroxítona:** A sílaba tônica é a **PENÚLTIMA** (mais de 70% das palavras do português! ex.: *casa, mesa, vírus, tórax, caráter, escola*).
3. **Proparoxítona:** A sílaba tônica é a **ANTEPENÚLTIMA** (ex.: *médico, lâmpada, árvore, endêmica*).

> **A Regra de Ouro Inicial:**
> 1. Todas as proparoxítonas são acentuadas sem exceção!
> 2. Oxítonas são acentuadas se terminarem em **A, E, O, EM, ENS** (e ditongos abertos ÉI, ÉU, ÓI no final).
> 3. Paroxítonas são acentuadas nas terminações opostas: **R, X, N, L, I/IS, US, UM/UNS, PS, Ã/ÃS e Ditongos** (Mnemônico: *ROUXINOL + DITONGO*).
'@;

    "por_3" = @'
#### 0. Nivelamento & Pré-Requisitos Fundamentais (Aprenda a Base Primeiro!)

Antes de memorizar a lista de conjunções coordenadas e subordinadas, você deve compreender o que realmente significa "costurar" um texto de forma coesa e coerente:

##### A. Coesão vs. Coerência: A Metáfora dos Tijolos e do Edifício
- **Coesão:** É a argamassa, o cimento e as ferragens que unem um tijolo ao outro. Trata-se da conexão **gramatical e visual** entre as palavras e as frases (feita por pronomes, conjunções, preposições, concordância e pontuação).
- **Coerência:** É o projeto arquitetônico e a habitabilidade da casa. Diz respeito ao **sentido global**, à lógica das ideias e à ausência de contradições internas.
> **Pegadinha da Banca:** Um texto pode ser perfeitamente coeso e totalmente incoerente! Ex.: *"O sol brilhava no céu sem nuvens, portanto abri o guarda-chuva para me proteger do temporal que inundava a avenida."* A gramática está correta, mas o sentido lógico é absurdo.

##### B. Coesão Referencial: Anáfora vs. Catáfora
- **Anáfora (Olha para TRÁS):** O pronome ou termo substituto retoma uma informação que **já foi dita anteriormente**.
  - *Exemplo:* "O Agente de Combate às Endemias visitou o imóvel abandonado. **Ele** encontrou múltiplos focos de larvas **no local**."
- **Catáfora (Olha para a FRENTE):** O pronome antecipa uma informação que **ainda vai ser revelada**.
  - *Exemplo:* "O supervisor da SEMUSA deu **este** aviso importante: **nenhum agente deve trabalhar sem crachá de identificação**."

##### C. O Papel das Conjunções
A conjunção é a classe de palavra que serve de ponte lógica entre duas orações:
- *"Estudei muito E passei"* $\rightarrow$ Conjunção Aditiva (soma).
- *"Estudei muito, MAS não passei"* $\rightarrow$ Conjunção Adversativa (oposição/quebra de expectativa).
- *"Estudei muito, PORQUE queria passar"* $\rightarrow$ Conjunção Causal/Explicativa (motivo).
- *"Estudei muito, LOGO passei"* $\rightarrow$ Conjunção Conclusiva (conclusão lógica).
'@;

    "por_4" = @'
#### 0. Nivelamento & Pré-Requisitos Fundamentais (Aprenda a Base Primeiro!)

Morfologia é o estudo da palavra isolada, analisando a sua estrutura e a classe gramatical a que ela pertence. Em Língua Portuguesa existem exatamente 10 classes de palavras:

##### A. As 10 Classes de Palavras: Variáveis vs. Invariáveis
| Grupo | Classe Gramatical | O Que Faz no Idioma? | Exemplo Prático |
| :--- | :--- | :--- | :--- |
| **Variáveis** (Flexionam em gênero, número e/ou pessoa) | **1. Substantivo** | Dá nome aos seres, objetos e sentimentos | *agente, mosquito, Porto Velho* |
| | **2. Artigo** | Determina (o, a) ou indetermina (um, uma) o substantivo | *o morador, uma vistoria* |
| | **3. Adjetivo** | Caracteriza ou qualifica o substantivo | *água limpa, imóvel abandonado* |
| | **4. Numeral** | Expressa quantidade, ordem ou fração | *duas casas, primeiro distrito* |
| | **5. Pronome** | Acompanha ou substitui o substantivo | *ele, este, meu, que, quem* |
| | **6. Verbo** | Expressa ação, estado ou fenômeno | *inspecionar, chover, permanecer* |
| **Invariáveis** (NUNCA vão para o feminino nem para o plural!) | **7. Advérbio** | Modifica o verbo, o adjetivo ou outro advérbio | *ontem, muito, aqui, rapidamente* |
| | **8. Preposição** | Liga duas palavras criando dependência | *de, em, para, com, por, sem* |
| | **9. Conjunção** | Liga orações estabelecendo sentido | *e, mas, porque, se, portanto* |
| | **10. Interjeição** | Expressa emoção súbita ou susto | *Ufa!, Cuidado!, Tomara!* |

##### B. A Regra de Ouro: O Advérbio É Invariável!
Como o advérbio é invariável, ele **jamais** concorda com substantivo feminino ou no plural:
- **Certo:** "A servidora da saúde estava **meio** preocupada com o surto de malária." (*Meio* = um pouco, advérbio invariável).
- **Errado:** "A servidora estava *meia* preocupada." (*Meia* no feminino só é a peça de vestuário ou o numeral fracionário: 'meia maçã').

##### C. Pronomes Pessoais: Retos vs. Oblíquos
- **Pronomes Retos (eu, tu, ele, nós, vós, eles):** Exercem papel de **SUJEITO**. Não devem ser usados como objeto (*"vi ele"* é coloquial; na norma culta é *"vi-o"*).
- **Pronomes Oblíquos Átonos (me, te, se, o, a, lhe, nos, vos, os, as, lhes):** Exercem papel de **COMPLEMENTO**.
  - **O, A, OS, AS:** Substituem objetos diretos sem preposição (viram *-lo, -la* após -r, -s, -z; viram *-no, -na* após som nasal).
  - **LHE, LHES:** Substituem objetos indiretos com preposição "a" ou "para" (*entregou o relatório ao supervisor $\rightarrow$ entregou-lhe o relatório*).
'@;

    "por_5" = @'
#### 0. Nivelamento & Pré-Requisitos Fundamentais (Aprenda a Base Primeiro!)

Sintaxe é o estudo da função que cada palavra exerce dentro da oração. Entenda a base da estrutura oracional:

##### A. Frase, Oração e Período
- **Frase:** Todo enunciado com sentido completo (pode ou não ter verbo: *"Socorro!"*, *"Cuidado com o cão!"*).
- **Oração:** Todo enunciado estruturado ao redor de um **verbo** (ou locução verbal). Sem verbo, não há oração!
- **Período:** Frase formada por uma oração (Período Simples) ou duas ou mais orações (Período Composto).

##### B. A Ordem Canônica e o Método para Achar o Sujeito
A ordem direta da língua portuguesa é:
$$\mathbf{[SUJEITO]} + \mathbf{[VERBO]} + \mathbf{[COMPLEMENTOS]} + \mathbf{[ADJUNTOS\ ADVERBIAIS]}$$
- **A Tática da Banca:** Inverter a ordem para confundir o candidato:
  - *"Surgiram repentinamente, após as fortes chuvas de inverno, novos focos do mosquito transmissor da dengue."*
- **O Método Infalível:** Vá até o verbo e pergunte: *"O QUE É QUE [verbo]?"* ou *"QUEM É QUE [verbo]?"*:
  - *"O que é que surgiu?"* $\rightarrow$ Resposta: *"Novos focos do mosquito..."*
  - Núcleo do sujeito: **focos** (plural). Portanto, o verbo fica obrigatoriamente no plural: **SURGIRAM**!

##### C. Oração Sem Sujeito (Verbos Impessoais) — Pegadinha Frequente!
1. **Verbo HAVER no sentido de existir, acontecer ou indicando tempo:** É impessoal e fica SEMPRE no singular!
   - **Certo:** "Havia muitos moradores na palestra."
   - **Errado:** "*Haviam* muitos moradores..." (Haver no sentido de existir não vai para o plural!).
2. **Verbo FAZER indicando tempo decorrido ou clima:** Fica SEMPRE no singular!
   - **Certo:** "Faz três anos que trabalho no setor de endemias."
   - **Errado:** "*Fazem* três anos..."
'@;

    "por_6" = @'
#### 0. Nivelamento & Pré-Requisitos Fundamentais (Aprenda a Base Primeiro!)

Regência e crase dependem da relação entre o termo que manda (termo regente) e o termo que obedece (termo regido). Compreenda a mecânica da transitividade:

##### A. Transitividade Verbal da Base
1. **Verbo Intransitivo (VI):** Sentido completo por si só (*"A larva do mosquito morreu"*, *"O agente chegou cedo"*).
2. **Verbo Transitivo Direto (VTD):** Pede complemento **sem preposição** (*"O ACE eliminou [o criadouro]"*).
3. **Verbo Transitivo Indireto (VTI):** Pede complemento **com preposição obrigatória** (*"A equipe necessita [de novos equipamentos]"*).
4. **Verbo Bitransitivo (VTDI):** Pede dois complementos, um direto e outro indireto (*"O supervisor entregou [as fichas] [aos agentes]"*).

##### B. O Conceito e a Matemática da Crase
A crase é a fusão de duas letras "A": a preposição exigida pelo verbo/nome mais o artigo feminino da palavra seguinte:
$$\mathbf{A\text{ (preposição)}} + \mathbf{A\text{ (artigo)}} = \mathbf{\grave{A}}$$

##### C. O Teste Prático da Troca pelo Masculino
Substitua a palavra feminina seguinte por uma palavra masculina similar (ex.: troque *escola* por *posto médico*; *reunião* por *encontro*):
- Se no masculino der **"AO"** $\rightarrow$ No feminino **TEM CRASE ($\grave{a}$)**!
  - *"O agente foi à UBS"* $\rightarrow$ *"O agente foi **ao** posto médico"* (Deu AO $\rightarrow$ Tem crase!).
- Se no masculino der apenas **"O"** $\rightarrow$ No feminino **NÃO TEM CRASE (apenas artigo 'a')**!
  - *"O agente visitou a UBS"* $\rightarrow$ *"O agente visitou **o** posto médico"* (Deu O $\rightarrow$ Sem crase!).
- Se no masculino der apenas **"A"** $\rightarrow$ No feminino **NÃO TEM CRASE (apenas preposição 'a')**!
  - *"Entregou a uma moradora"* $\rightarrow$ *"Entregou **a** um morador"* (Deu só A $\rightarrow$ Sem crase!).

##### D. Casos Proibidos de Crase
1. Antes de palavra masculina (*andou a pé, pagou a prazo*).
2. Antes de verbo (*começou a trabalhar, disposto a ajudar*).
3. Antes de pronomes pessoais e indefinidos (*pediu a ela, disse a você*).
'@
}

$filesMap = @{
    "por_1" = "17-compreensao-interpretacao-textos-tipologia-generos-variacao-linguistica.md"
    "por_2" = "18-ortografia-acentuacao-hifen-semantica-figuras-linguagem-sintaxe.md"
    "por_3" = "19-coesao-coerencia-conjuncoes-operadores-argumentativos-implictos.md"
    "por_4" = "20-morfologia-classes-formacao-palavras-verbos-colocacao-pronominal.md"
    "por_5" = "21-sintaxe-1-analise-sintatica-concordancia-verbal-nominal.md"
    "por_6" = "22-sintaxe-2-regencia-verbal-nominal-crase-pontuacao.md"
}

foreach ($key in $filesMap.Keys) {
    $fName = $filesMap[$key]
    $fPath = Join-Path $PorDir $fName
    $txt = [System.IO.File]::ReadAllText($fPath, [System.Text.Encoding]::UTF8)
    $niv = $nivelamentos[$key]

    # 1. Inserir no corpo Markdown da Aula antes de '#### 1. Objetivo Claro' se ainda não estiver
    if ($txt -notmatch "0\. Nivelamento & Pré-Requisitos Fundamentais") {
        $txt = $txt -replace '(?s)#### 1\. Objetivo Claro da Aula', "$niv`r`n`r`n#### 1. Objetivo Claro da Aula"
    }

    # 2. Localizar cada bloco JSON com regex, decodificar, atualizar modoA_markdown se necessário e recodificar com ConvertTo-Json
    $pattern = '(?s)```json\s*\r?\n(\{.*?\})\s*\r?\n```'
    $matches = [regex]::Matches($txt, $pattern)
    
    # Processamos o primeiro bloco json (Block 1) onde o nivelamento pertence
    if ($matches.Count -gt 0) {
        $m0 = $matches[0]
        try {
            $bObj = $m0.Groups[1].Value | ConvertFrom-Json
            if ($bObj.modoA_markdown -notmatch "0\. Nivelamento & Pré-Requisitos Fundamentais") {
                $bObj.modoA_markdown = $niv + "`n`n" + $bObj.modoA_markdown
                # Se tiver modoA html, prefixamos também uma versão limpa de HTML
                # mas podemos deixar modoA vazio para o md_to_app_data converter ou manter
            }
            $cleanJson = $bObj | ConvertTo-Json -Depth 20
            # Substituímos no texto
            $txt = $txt.Substring(0, $m0.Groups[1].Index) + $cleanJson + $txt.Substring($m0.Groups[1].Index + $m0.Groups[1].Length)
        } catch {
            Write-Warning "Falha ao processar JSON em $fName`: $($_.Exception.Message)"
        }
    }

    [System.IO.File]::WriteAllText($fPath, $txt, [System.Text.Encoding]::UTF8)
    Write-Host "Processado com sucesso: $key ($fName)" -ForegroundColor Green
}

Write-Host "Enriquecimento limpo de Português finalizado!" -ForegroundColor Cyan
