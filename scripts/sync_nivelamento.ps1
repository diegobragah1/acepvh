<#
.SYNOPSIS
Sincronização Integral do Nivelamento & Pré-Requisitos Fundamentais (Aprenda a Base Primeiro!)
Atualiza app_data.json, aulas.json e os arquivos markdown de Língua Portuguesa e RLM.
#>

$RepoRoot = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh"
$DataDir = Join-Path $RepoRoot "data"
$appDataFile = Join-Path $DataDir "app_data.json"
$aulasFile = Join-Path $DataDir "aulas.json"

Write-Host "Lendo app_data.json..." -ForegroundColor Cyan
$appData = Get-Content -Path $appDataFile -Raw -Encoding UTF8 | ConvertFrom-Json

# Função auxiliar para gerar card HTML de Nivelamento
function Get-NivelamentoHtml([string]$titulo, [string]$htmlContent) {
    return @"
<div class="bg-emerald-50 dark:bg-emerald-950/30 border-l-4 border-emerald-600 p-4 rounded-r-xl space-y-3 mb-5 shadow-sm">
  <div class="flex items-center gap-2">
    <span class="bg-emerald-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">Nivelamento Zero</span>
    <h4 class="font-extrabold text-emerald-950 dark:text-emerald-200 text-sm sm:text-base">0. Nivelamento &amp; Pré-Requisitos Fundamentais: $titulo</h4>
  </div>
  <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed space-y-2">
    $htmlContent
  </div>
</div>
"@
}

# -------------------------------------------------------------
# 1. PORTUGUÊS: por_1 (Aula 17)
# -------------------------------------------------------------
$l17 = $appData.lessons | Where-Object { $_.id -eq "por_1" }
if ($l17 -and $l17.blocks.Count -gt 0 -and $l17.blocks[0].modoA -notmatch "Nivelamento &amp; Pré-Requisitos") {
    $html17 = @"
<p class="font-semibold text-emerald-900 dark:text-emerald-300">Antes de resolver questões da banca IBGP, você precisa compreender a base absoluta do circuito da comunicação e a diferença real entre Compreensão e Interpretação:</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
  <div class="p-3 bg-white dark:bg-slate-800 rounded-lg border border-emerald-200 dark:border-slate-700">
    <div class="font-bold text-xs text-sky-800 dark:text-sky-300 uppercase mb-1">📘 Compreensão Textual (Intratextual)</div>
    <p class="text-xs">Está <strong>explicitamente escrito</strong> no texto. A resposta é uma paráfrase do que o autor declarou expressamente. Enunciados típicos: <em>"De acordo com o texto...", "Segundo o autor...", "No parágrafo 2 afirma-se que..."</em>.</p>
  </div>
  <div class="p-3 bg-white dark:bg-slate-800 rounded-lg border border-emerald-200 dark:border-slate-700">
    <div class="font-bold text-xs text-purple-800 dark:text-purple-300 uppercase mb-1">🔍 Interpretação Textual (Extratextual)</div>
    <p class="text-xs">Consiste em <strong>deduzir/inferir</strong> conclusões lógicas apoiadas nas pistas deixadas pelo texto. Enunciados típicos: <em>"Depreende-se do texto...", "Infere-se que...", "O texto permite concluir..."</em>.</p>
  </div>
</div>
<div class="bg-amber-50 dark:bg-amber-950/20 p-2.5 rounded-lg border border-amber-300 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200">
  <strong>⚠️ As 3 Armadilhas Fatais da Banca:</strong>
  <strong>1. Extrapolação</strong> (inventar o que o texto não disse);
  <strong>2. Redução</strong> (generalizar a partir de uma exceção);
  <strong>3. Contradição</strong> (concluir o inverso do que o autor sustentou).
</div>
<div class="pt-1">
  <strong>Os 6 Elementos da Comunicação e as 6 Funções de Jakobson:</strong>
  Emissor (&rarr; Função Emotiva/1ª pessoa); Receptor (&rarr; Função Conativa/Imperativo); Mensagem (&rarr; Função Poética); Canal (&rarr; Função Fática); Código (&rarr; Função Metalinguística); Contexto (&rarr; Função Referencial/Denotativa).
</div>
"@
    $l17.blocks[0].modoA = (Get-NivelamentoHtml "Comunicação, Compreensão vs. Interpretação e as 3 Armadilhas da Banca" $html17) + $l17.blocks[0].modoA
    Write-Host "por_1 (Aula 17) nivelada no JSON com sucesso!" -ForegroundColor Green
}

# -------------------------------------------------------------
# 2. PORTUGUÊS: por_2 (Aula 18)
# -------------------------------------------------------------
$l18 = $appData.lessons | Where-Object { $_.id -eq "por_2" }
if ($l18 -and $l18.blocks.Count -gt 0 -and $l18.blocks[0].modoA -notmatch "Nivelamento &amp; Pré-Requisitos") {
    $html18 = @"
<p class="font-semibold text-emerald-900 dark:text-emerald-300">A acentuação gráfica decorre exclusivamente da acústica da palavra (fonemas) e da posição da sílaba tônica. Domine esta base:</p>
<ul class="list-disc pl-5 space-y-1 text-xs">
  <li><strong>Letra vs. Fonema:</strong> Letra é o desenho escrito; Fonema é o som pronunciado. Ex.: <em>"táxi"</em> tem 4 letras e 5 fonemas (/k/ + /s/); <em>"hoje"</em> tem 4 letras e 3 fonemas (H inicial é mudo).</li>
  <li><strong>Dígrafo:</strong> Duas letras com um único som (RR, SS, CH, LH, NH, SC, SÇ, XC, GU/QU antes de e/i). O dígrafo "engole" um fonema!</li>
  <li><strong>Ditongo vs. Hiato:</strong> Ditongo = vogal + semivogal na <em>mesma sílaba</em> (pai, his-tó-ria); Hiato = duas vogais vizinhas que se <em>separam</em> em sílabas diferentes (sa-ú-de, pa-ís, ba-ú).</li>
  <li><strong>Posição da Sílaba Tônica (de trás para frente):</strong>
    Última = <strong>Oxítona</strong> (café, você, caju);
    Penúltima = <strong>Paroxítona</strong> (casa, mesa, vírus, tórax);
    Antepenúltima = <strong>Proparoxítona</strong> (médico, lâmpada &rarr; 100% acentuadas!).
  </li>
  <li><strong>Regra do Rouxinol para Paroxítonas:</strong> Acentuam-se as terminadas em <strong>R, X, N, L, I/IS, US, UM/UNS, PS, Ã/ÃS e Ditongo</strong>.</li>
</ul>
"@
    $l18.blocks[0].modoA = (Get-NivelamentoHtml "Fonética Zero, Dígrafos, Sílaba Tônica e o Mnemônico Rouxinol" $html18) + $l18.blocks[0].modoA
    Write-Host "por_2 (Aula 18) nivelada no JSON com sucesso!" -ForegroundColor Green
}

# -------------------------------------------------------------
# 3. PORTUGUÊS: por_3 (Aula 19)
# -------------------------------------------------------------
$l19 = $appData.lessons | Where-Object { $_.id -eq "por_3" }
if ($l19 -and $l19.blocks.Count -gt 0 -and $l19.blocks[0].modoA -notmatch "Nivelamento &amp; Pré-Requisitos") {
    $html19 = @"
<p class="font-semibold text-emerald-900 dark:text-emerald-300">Coesão é a costura gramatical das frases; Coerência é a harmonia lógica do sentido. Conheça as bases que destravam a prova:</p>
<ul class="list-disc pl-5 space-y-1 text-xs">
  <li><strong>Anáfora vs. Catáfora:</strong> Anáfora retoma termo que já foi dito atrás (<em>"O ACE visitou o bairro; <strong>ele</strong> orientou a comunidade"</em>); Catáfora antecipa termo a ser revelado adiante (<em>"O recado foi <strong>este</strong>: eliminem recipientes com água parada"</em>).</li>
  <li><strong>As 5 Conjunções Coordenativas:</strong> Aditiva (e, nem); Adversativa (mas, porém, contudo &rarr; quebra de expectativa); Alternativa (ou... ou); Conclusiva (logo, portanto, por isso); Explicativa (porque, pois anteposto).</li>
  <li><strong>As 9 Subordinativas Adverbiais (Mnemônico 6C + FTP):</strong>
    <strong>C</strong>ausais (já que), <strong>C</strong>omparativas (como), <strong>C</strong>oncessivas (embora, conquanto &rarr; obstáculo que NÃO impede a ação!), <strong>C</strong>ondicionais (se, caso), <strong>C</strong>onformativas (conforme, segundo), <strong>C</strong>onsecutivas (tão... que), <strong>F</strong>inais (para que, a fim de), <strong>T</strong>emporais (quando, assim que), <strong>P</strong>roporcionais (à medida que).
  </li>
  <li><strong>Pressuposto vs. Subentendido:</strong> Pressuposto é ativado por marcador gramatical irrefutável (<em>"Maria <strong>parou</strong> de fumar"</em> &rarr; pressupõe que Maria fumava antes); Subentendido depende das entrelinhas e do contexto sem marcador rígido.</li>
</ul>
"@
    $l19.blocks[0].modoA = (Get-NivelamentoHtml "Coesão Referencial, As 5 Famílias Coordenativas e o Mnemônico 6C+FTP" $html19) + $l19.blocks[0].modoA
    Write-Host "por_3 (Aula 19) nivelada no JSON com sucesso!" -ForegroundColor Green
}

# -------------------------------------------------------------
# 4. PORTUGUÊS: por_4 (Aula 20)
# -------------------------------------------------------------
$l20 = $appData.lessons | Where-Object { $_.id -eq "por_4" }
if ($l20 -and $l20.blocks.Count -gt 0 -and $l20.blocks[0].modoA -notmatch "Nivelamento &amp; Pré-Requisitos") {
    $html20 = @"
<p class="font-semibold text-emerald-900 dark:text-emerald-300">As 10 classes de palavras se dividem entre as que mudam de forma e as que nunca mudam:</p>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
  <div class="p-2.5 bg-white dark:bg-slate-800 rounded border border-emerald-200 dark:border-slate-700">
    <strong>6 Classes Variáveis (Flexionam):</strong>
    <ul class="list-disc pl-4 mt-1 space-y-0.5">
      <li>Substantivo (nomeia)</li>
      <li>Artigo (determina: o, um)</li>
      <li>Adjetivo (qualifica)</li>
      <li>Numeral (quantidade/ordem)</li>
      <li>Pronome (acompanha/substitui)</li>
      <li>Verbo (ação/estado/tempo)</li>
    </ul>
  </div>
  <div class="p-2.5 bg-white dark:bg-slate-800 rounded border border-emerald-200 dark:border-slate-700">
    <strong>4 Classes Invariáveis (NUNCA flexionam):</strong>
    <ul class="list-disc pl-4 mt-1 space-y-0.5">
      <li><strong>Advérbio</strong> (circunstância &rarr; nunca vai para feminino/plural!)</li>
      <li>Preposição (liga palavras: de, a, em, para)</li>
      <li>Conjunção (liga orações: e, mas, porque)</li>
      <li>Interjeição (expressa emoção: Ufa!, Cuidado!)</li>
    </ul>
  </div>
</div>
<div class="bg-amber-50 dark:bg-amber-950/20 p-2 rounded border border-amber-300 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200">
  <strong>Regra Suprema do Advérbio:</strong> <em>"A servidora estava <strong>meio</strong> cansada"</em> (sempre 'meio' invariável no sentido de 'um pouco'). Jamais use 'meia cansada'!
</div>
<div class="text-xs pt-1">
  <strong>Pronomes Retos vs. Oblíquos:</strong> Retos (eu, tu, ele...) exercem papel de SUJEITO. Oblíquos átonos (me, te, se, o, a, lhe...) exercem papel de COMPLEMENTO. Nunca inicie frase com pronome oblíquo (*"Me dê o frasco"* está errado na norma culta &rarr; o correto é *"Dê-me o frasco"*).
</div>
"@
    $l20.blocks[0].modoA = (Get-NivelamentoHtml "As 10 Classes de Palavras, A Invariabilidade do Advérbio e Pronomes Retos vs. Oblíquos" $html20) + $l20.blocks[0].modoA
    Write-Host "por_4 (Aula 20) nivelada no JSON com sucesso!" -ForegroundColor Green
}

# -------------------------------------------------------------
# 5. PORTUGUÊS: por_5 (Aula 21)
# -------------------------------------------------------------
$l21 = $appData.lessons | Where-Object { $_.id -eq "por_5" }
if ($l21 -and $l21.blocks.Count -gt 0 -and $l21.blocks[0].modoA -notmatch "Nivelamento &amp; Pré-Requisitos") {
    $html21 = @"
<p class="font-semibold text-emerald-900 dark:text-emerald-300">Sintaxe analisa o papel de cada termo no conjunto da frase. Aprenda a achar o sujeito em qualquer questão:</p>
<ul class="list-disc pl-5 space-y-1 text-xs">
  <li><strong>Frase vs. Oração vs. Período:</strong> Frase = sentido completo (com ou sem verbo: <em>"Atenção!"</em>); Oração = estruturada em torno de um verbo; Período = conjunto de orações até o ponto final.</li>
  <li><strong>A Ordem Canônica da Língua:</strong> <strong>[SUJEITO] + [VERBO] + [COMPLEMENTOS] + [ADJUNTOS]</strong>. A banca IBGP quase sempre inverte a ordem (coloca o sujeito depois do verbo) para induzir o candidato ao erro.</li>
  <li><strong>O Método Infalível para Achar o Sujeito:</strong> Pergunte ao verbo: <em>"O QUE É QUE [verbo]?"</em> ou <em>"QUEM É QUE [verbo]?"</em>. A resposta é o sujeito, e o verbo DEVE concordar com o seu núcleo em número e pessoa!</li>
  <li><strong>Os Verbos Impessoais (Oração Sem Sujeito):</strong>
    - <strong>HAVER</strong> no sentido de existir ou tempo decorrido: FICA SEMPRE NO SINGULAR! (<em>"Havia muitos mosquitos"</em> &rarr; NUNCA 'haviam'). Mas atenção: <em>Existir</em> é pessoal (<em>"Existiam muitos mosquitos"</em>).
    - <strong>FAZER</strong> indicando tempo decorrido ou clima: FICA SEMPRE NO SINGULAR! (<em>"Faz três anos"</em> &rarr; NUNCA 'fazem').
  </li>
</ul>
"@
    $l21.blocks[0].modoA = (Get-NivelamentoHtml "Sintaxe Zero, Ordem Canônica e o Segredo dos Verbos Impessoais (Haver/Fazer)" $html21) + $l21.blocks[0].modoA
    Write-Host "por_5 (Aula 21) nivelada no JSON com sucesso!" -ForegroundColor Green
}

# -------------------------------------------------------------
# 6. PORTUGUÊS: por_6 (Aula 22)
# -------------------------------------------------------------
$l22 = $appData.lessons | Where-Object { $_.id -eq "por_6" }
if ($l22 -and $l22.blocks.Count -gt 0 -and $l22.blocks[0].modoA -notmatch "Nivelamento &amp; Pré-Requisitos") {
    $html22 = @"
<p class="font-semibold text-emerald-900 dark:text-emerald-300">Transitividade e crase são puramente lógicas: o verbo manda a preposição, e o substantivo aceita ou não o artigo feminino:</p>
<ul class="list-disc pl-5 space-y-1 text-xs">
  <li><strong>Transitividade da Base:</strong>
    Verbo Intransitivo (VI &rarr; sentido completo: <em>o inseto morreu</em>);
    Transitivo Direto (VTD &rarr; pede objeto SEM preposição: <em>eliminou o foco</em>);
    Transitivo Indireto (VTI &rarr; pede objeto COM preposição: <em>precisa de larvicida</em>);
    Bitransitivo (VTDI &rarr; pede OD e OI: <em>entregou o laudo ao morador</em>).
  </li>
  <li><strong>A Equação Matemática da Crase:</strong>
    Preposição A (exigida pelo verbo) + Artigo A (aceito pela palavra feminina) = <strong>À (Crase!)</strong>.
  </li>
  <li><strong>O Teste da Troca pelo Masculino:</strong> Troque a palavra feminina por uma masculina. Se virar <strong>AO</strong> no masculino &rarr; TEM CRASE no feminino! (<em>"Fui à farmácia" &rarr; "Fui <strong>ao</strong> posto" &rarr; Deu AO, tem crase!</em>). Se der apenas 'O' ou apenas 'A' &rarr; Sem crase.</li>
  <li><strong>Crase Proibida Absoluta:</strong> Antes de palavra masculina (a pé, a prazo); Antes de verbo (a partir de, disposto a vacinar); Antes de pronomes pessoais/indefinidos (a ela, a você, a qualquer pessoa); Palavras repetidas (cara a cara, dia a dia).</li>
</ul>
"@
    $l22.blocks[0].modoA = (Get-NivelamentoHtml "Transitividade Verbal, A Equação da Crase e os 3 Testes Práticos" $html22) + $l22.blocks[0].modoA
    Write-Host "por_6 (Aula 22) nivelada no JSON com sucesso!" -ForegroundColor Green
}

# -------------------------------------------------------------
# 7. RLM: rlm_1 (Aula 23)
# -------------------------------------------------------------
$l23 = $appData.lessons | Where-Object { $_.id -eq "rlm_1" }
if ($l23 -and $l23.blocks.Count -gt 0 -and $l23.blocks[0].modoA -notmatch "Nivelamento &amp; Pré-Requisitos") {
    $html23 = @"
<p class="font-semibold text-emerald-900 dark:text-emerald-300">Lógica formal é matemática com palavras: só operamos com sentenças que podem ser julgadas como Verdadeiras ou Falsas:</p>
<ul class="list-disc pl-5 space-y-1 text-xs">
  <li><strong>O Que É Proposição:</strong> Oração declarativa completa (com sujeito e predicado) que pode ser unicamente julgada como <strong>V</strong> ou <strong>F</strong> (Princípios da Identidade, Não Contradição e Terceiro Excluído).</li>
  <li><strong>O Mnemônico P-E-I-S-O (O que NUNCA é Proposição!):</strong>
    <strong>P</strong>erguntas (<em>"Onde está o foco?"</em>);
    <strong>E</strong>xclamações (<em>"Que calor em Porto Velho!"</em>);
    <strong>I</strong>mperativos/Ordens (<em>"Feche a caixa d'água!"</em>);
    <strong>S</strong>entenças Abertas (<em>"x + 5 = 12"</em>, <em>"Ele é um bom agente"</em> &rarr; sem saber quem é x ou 'ele', não há V/F);
    <strong>O</strong>piniões/Paradoxos (<em>"Esta frase é falsa"</em>).
  </li>
  <li><strong>Os 5 Conectivos Sem Sofrimento:</strong>
    1. <strong>E (&and;):</strong> Só é V se TUDO for V ($V \land V = V$);
    2. <strong>OU (&or;):</strong> Basta UMA verdade para ser V (só é F se for $F \lor F$);
    3. <strong>OU... OU (&underline;&or;):</strong> Só é V se os lados forem DIFERENTES ($V \underline{\lor} F = V$);
    4. <strong>SE... ENTÃO (&rarr;):</strong> O macete da <strong>VERA FISCHER</strong> &rarr; Só é Falsa no caso $V \rightarrow F = F$ (todo o resto é V!);
    5. <strong>SE E SOMENTE SE (&harr;):</strong> Só é V se os lados tiverem o MESMO valor ($V \leftrightarrow V = V$ e $F \leftrightarrow F = V$).
  </li>
</ul>
"@
    $l23.blocks[0].modoA = (Get-NivelamentoHtml "O Que É Proposição, O Mnemônico P-E-I-S-O e os 5 Conectivos Lógicos" $html23) + $l23.blocks[0].modoA
    Write-Host "rlm_1 (Aula 23) nivelada no JSON com sucesso!" -ForegroundColor Green
}

# -------------------------------------------------------------
# 8. RLM: rlm_2 (Aula 24)
# -------------------------------------------------------------
$l24 = $appData.lessons | Where-Object { $_.id -eq "rlm_2" }
if ($l24 -and $l24.blocks.Count -gt 0 -and $l24.blocks[0].modoA -notmatch "Nivelamento &amp; Pré-Requisitos") {
    $html24 = @"
<p class="font-semibold text-emerald-900 dark:text-emerald-300">Negar e encontrar equivalências lógicas segue regras de ouro fundamentais:</p>
<ul class="list-disc pl-5 space-y-1 text-xs">
  <li><strong>Leis de De Morgan:</strong>
    - Para negar 'E': nega a 1ª, nega a 2ª e troca o 'E' por 'OU'! $\sim(P \land Q) \equiv \sim P \lor \sim Q$.
    - Para negar 'OU': nega a 1ª, nega a 2ª e troca o 'OU' por 'E'! $\sim(P \lor Q) \equiv \sim P \land \sim Q$.
  </li>
  <li><strong>Negação do 'Se... então' (Regra do MANÉ):</strong>
    <strong>MA</strong>ntém a primeira <strong>E</strong> <strong>NE</strong>ga a segunda! $\sim(P \rightarrow Q) \equiv P \land \sim Q$. (Nunca comece a negação de uma condicional com outro 'Se'!).
  </li>
  <li><strong>As 2 Equivalências da Condicional:</strong>
    1. Contrapositiva: Inverte e nega tudo! $P \rightarrow Q \equiv \sim Q \rightarrow \sim P$.
    2. Regra do NEYMAR: Nega a primeira OU copia a segunda! $P \rightarrow Q \equiv \sim P \lor Q$.
  </li>
  <li><strong>Negação de Quantificadores (Mnemônico PEA + NÃO):</strong>
    Para negar <strong>TODO</strong>, basta UM contraexemplo! Use <strong>P</strong>elo menos um NÃO / <strong>E</strong>xiste algum que NÃO / <strong>A</strong>lgum NÃO. (Jamais negue 'Todo' com 'Nenhum'!).
  </li>
</ul>
"@
    $l24.blocks[0].modoA = (Get-NivelamentoHtml "De Morgan, Regra do MANÉ, Equivalências e Negação de Quantificadores" $html24) + $l24.blocks[0].modoA
    Write-Host "rlm_2 (Aula 24) nivelada no JSON com sucesso!" -ForegroundColor Green
}

# -------------------------------------------------------------
# 9. RLM: rlm_3 (Aula 25)
# -------------------------------------------------------------
$l25 = $appData.lessons | Where-Object { $_.id -eq "rlm_3" }
if ($l25 -and $l25.blocks.Count -gt 0 -and $l25.blocks[0].modoA -notmatch "Nivelamento &amp; Pré-Requisitos") {
    $html25 = @"
<p class="font-semibold text-emerald-900 dark:text-emerald-300">A matemática básica zero que sustenta a resolução ágil de problemas em concursos:</p>
<ul class="list-disc pl-5 space-y-1 text-xs">
  <li><strong>Regra dos Sinais sem Mistério:</strong>
    - <em>Adição/Subtração (Tenho e Devo):</em> $-7 - 5 = -12$ (devo 7 e devo 5 = devo 12); $-10 + 4 = -6$ (devo 10 e pago 4 = ainda devo 6).
    - <em>Multiplicação/Divisão:</em> Sinais iguais dão $+$; Sinais diferentes dão $-$. Ex.: $(-3) \times (-4) = +12$; $(+8) \div (-2) = -4$.
  </li>
  <li><strong>MMC vs. MDC nos Enunciados de Concurso:</strong>
    - Use <strong>MMC</strong> quando o problema tratar de <em>eventos cíclicos periódicos que coincidirão no futuro</em> (ex.: agentes que visitam setores em intervalos de 6 e 8 dias).
    - Use <strong>MDC</strong> quando o problema tratar de <em>dividir/repartir coisas em partes iguais com o maior tamanho possível</em> sem sobras.
  </li>
  <li><strong>Equação do 1º Grau (A Balança de Dois Pratos):</strong> Ao pular o sinal de igual ($=$), inverte-se a operação: soma vira subtração ($x + 8 = 20 \implies x = 12$); multiplicação vira divisão ($3x = 27 \implies x = 9$).
  </li>
  <li><strong>Médias:</strong> Média Simples = soma de tudo dividido pela quantidade; Média Ponderada = multiplica cada valor pelo seu peso, soma os resultados e divide pela soma dos pesos.</li>
</ul>
"@
    $l25.blocks[0].modoA = (Get-NivelamentoHtml "Regra dos Sinais, Quando Usar MMC vs. MDC e Equações do 1º Grau" $html25) + $l25.blocks[0].modoA
    Write-Host "rlm_3 (Aula 25) nivelada no JSON com sucesso!" -ForegroundColor Green
}

# -------------------------------------------------------------
# 10. RLM: rlm_4 (Aula 26)
# -------------------------------------------------------------
$l26 = $appData.lessons | Where-Object { $_.id -eq "rlm_4" }
if ($l26 -and $l26.blocks.Count -gt 0 -and $l26.blocks[0].modoA -notmatch "Nivelamento &amp; Pré-Requisitos") {
    $html26 = @"
<p class="font-semibold text-emerald-900 dark:text-emerald-300">Frações, grandezas e porcentagens conectadas de forma intuitiva:</p>
<ul class="list-disc pl-5 space-y-1 text-xs">
  <li><strong>Operações com Frações:</strong>
    Multiplicação = reto em linha ($\frac{2}{3} \times \frac{4}{5} = \frac{8}{15}$);
    Divisão = repete a 1ª e multiplica pelo inverso da 2ª ($\frac{2}{3} \div \frac{4}{5} = \frac{2}{3} \times \frac{5}{4} = \frac{10}{12} = \frac{5}{6}$).
  </li>
  <li><strong>A Tríplice Equivalência (Fração = Decimal = Porcentagem):</strong>
    $\frac{1}{2} = 0,5 = 50\%$; $\frac{1}{4} = 0,25 = 25\%$; $\frac{1}{5} = 0,2 = 20\%$; $\frac{1}{10} = 0,1 = 10\%$ (ande 1 casa para a esquerda!); $\frac{1}{100} = 0,01 = 1\%$ (ande 2 casas!).
  </li>
  <li><strong>Grandezas Diretamente vs. Inversamente Proporcionais:</strong>
    - <em>Diretamente:</em> Se uma sobe, a outra sobe junto (mais horas trabalhadas = mais casas vistoriadas). Multiplica-se <strong>CRUZADO ($X$)</strong>.
    - <em>Inversamente:</em> Se uma sobe, a outra desce (mais agentes na equipe = menos tempo para terminar a área). Multiplica-se <strong>EM LINHA RETA ($\parallel$)</strong>.
  </li>
</ul>
"@
    $l26.blocks[0].modoA = (Get-NivelamentoHtml "Frações do Zero, A Tríplice Equivalência e Regra de Três Direta vs. Inversa" $html26) + $l26.blocks[0].modoA
    Write-Host "rlm_4 (Aula 26) nivelada no JSON com sucesso!" -ForegroundColor Green
}

# -------------------------------------------------------------
# 11. RLM: rlm_5 (Aula 27)
# -------------------------------------------------------------
$l27 = $appData.lessons | Where-Object { $_.id -eq "rlm_5" }
if ($l27 -and $l27.blocks.Count -gt 0 -and $l27.blocks[0].modoA -notmatch "Nivelamento &amp; Pré-Requisitos") {
    $html27 = @"
<p class="font-semibold text-emerald-900 dark:text-emerald-300">Análise combinatória e probabilidade descomplicadas:</p>
<ul class="list-disc pl-5 space-y-1 text-xs">
  <li><strong>Princípio Fundamental da Contagem (PFC):</strong>
    Regra do 'E' = MULTIPLICA (3 rotas de manhã E 4 rotas de tarde = $3 \times 4 = 12$ possibilidades).
    Regra do 'OU' = SOMA (2 opções de barco OU 3 de helicóptero = $2 + 3 = 5$ opções).
  </li>
  <li><strong>Fatorial ($n!$):</strong> Multiplicação regressiva até 1 ($4! = 4 \times 3 \times 2 \times 1 = 24$). Convenções: $0! = 1$ e $1! = 1$.</li>
  <li><strong>A Pergunta Decisiva: 'A ORDEM IMPORTA?':</strong>
    - Se a ordem importa (cargos de Presidente/Secretário, senhas, pódios) &rarr; <strong>ARRANJO</strong>.
    - Se a ordem NÃO importa (duplas de agentes, comissões, equipes de campo) &rarr; <strong>COMBINAÇÃO</strong>!
    Fórmula rápida para concurso: $C_{10, 2} = \frac{10 \times 9}{2 \times 1} = 45$.
  </li>
  <li><strong>Probabilidade Básica:</strong> $P = \frac{\text{Casos Favoráveis (o que eu quero)}}{\text{Casos Possíveis (o total)}}$. Varia sempre de $0$ ($0\%$) a $1$ ($100\%$).</li>
</ul>
"@
    $l27.blocks[0].modoA = (Get-NivelamentoHtml "O PFC (Regra do E e do OU), Arranjo vs. Combinação e Probabilidade" $html27) + $l27.blocks[0].modoA
    Write-Host "rlm_5 (Aula 27) nivelada no JSON com sucesso!" -ForegroundColor Green
}

# -------------------------------------------------------------
# 12. Salvar app_data.json e aulas.json
# -------------------------------------------------------------
Write-Host "Gravando app_data.json atualizado..." -ForegroundColor Cyan
$jsonOutput = $appData | ConvertTo-Json -Depth 20
[System.IO.File]::WriteAllText($appDataFile, $jsonOutput, [System.Text.Encoding]::UTF8)

# Também atualizamos aulas.json
$aulasOutput = $appData.lessons | ConvertTo-Json -Depth 20
[System.IO.File]::WriteAllText($aulasFile, $aulasOutput, [System.Text.Encoding]::UTF8)

Write-Host "Sincronização concluída com 100% de integridade!" -ForegroundColor Green
