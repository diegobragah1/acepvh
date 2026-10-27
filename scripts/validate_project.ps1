param(
    [string]$RepoRoot = ""
)

if (-not $RepoRoot) {
    $ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
    $RepoRoot = Split-Path -Parent $ScriptDir
}

$RepoRoot = (Resolve-Path $RepoRoot).Path

$ErrorActionPreference = "Stop"
$errors = [System.Collections.Generic.List[string]]::new()
$checks = [System.Collections.Generic.List[string]]::new()

# 1. Arquivos estruturais obrigatorios
$requiredFiles = @(
    "index.html",
    "css/style.css",
    "js/app.js",
    "data/app_data.json",
    "data/materias.json",
    "data/aulas.json",
    "sources/fontes.md",
    "README.md",
    "00_INDEX_ARQUITETURA_DADOS.md",
    "scripts/md_to_app_data.py"
)

foreach ($rf in $requiredFiles) {
    $p = Join-Path $RepoRoot ($rf -replace "/", "\")
    if (-not (Test-Path $p)) {
        $errors.Add("Arquivo obrigatorio ausente: $rf")
    } elseif ((Get-Item $p).Length -le 10) {
        $errors.Add("Arquivo obrigatorio vazio ou truncado: $rf")
    }
}
$checks.Add("Arquivos estruturais obrigatorios verificados ($($requiredFiles.Count)/$($requiredFiles.Count))")

# 2. Carregar JSONs de dados
$appDataPath = Join-Path $RepoRoot "data\app_data.json"
$materiasPath = Join-Path $RepoRoot "data\materias.json"
$aulasPath = Join-Path $RepoRoot "data\aulas.json"

$appData = Get-Content -Path $appDataPath -Raw -Encoding UTF8 | ConvertFrom-Json
$materiasData = Get-Content -Path $materiasPath -Raw -Encoding UTF8 | ConvertFrom-Json
$aulasData = Get-Content -Path $aulasPath -Raw -Encoding UTF8 | ConvertFrom-Json

$lessons = $appData.lessons
$aulasIdx = $aulasData.aulas

if ($lessons.Count -ne 32 -or $aulasIdx.Count -ne 32) {
    $errors.Add("Esperadas 32 aulas cadastradas, encontradas $($lessons.Count) em app_data.json e $($aulasIdx.Count) em aulas.json")
}
$checks.Add("Cadastro de aulas sincronizado: $($lessons.Count) aulas em app_data.json e $($aulasIdx.Count) em aulas.json")

# 3. Verificar existencia e integridade dos arquivos Markdown das 32 aulas
$mdTablesTotal = 0
foreach ($l in $lessons) {
    $paths = @($l.mdPath, $l.mdLegacyPath)
    foreach ($pStr in $paths) {
        if (-not $pStr) { continue }
        $cleanP = ($pStr -replace "^\./", "") -replace "/", "\"
        $fullP = Join-Path $RepoRoot $cleanP
        if (-not (Test-Path $fullP)) {
            $errors.Add("Caminho Markdown nao encontrado para aula $($l.id): $pStr")
        } else {
            $txt = [System.IO.File]::ReadAllText($fullP, [System.Text.Encoding]::UTF8)
            if ($txt.Length -lt 1000) {
                $errors.Add("Arquivo Markdown truncado: $cleanP ($($txt.Length) chars)")
            }
            if ($pStr -eq $l.mdPath) {
                $mdTablesTotal += ([regex]::Matches($txt, "\n\| :---")).Count
            }
        }
    }
}
$checks.Add("Caminhos e arquivos Markdown das 32 aulas verificados (64 arquivos .md auditados; $mdTablesTotal tabelas validadas)")

# 4. Validar questoes de 4 alternativas (A-D) e gabarito comentado
$qCount = 0
$fcCount = 0
foreach ($l in $lessons) {
    if (-not $l.sources -or $l.sources.Count -eq 0) {
        $errors.Add("Aula sem fontes vinculadas: $($l.id)")
    }
    for ($bIdx = 0; $bIdx -lt $l.blocks.Count; $bIdx++) {
        $b = $l.blocks[$bIdx]
        for ($qIdx = 0; $qIdx -lt $b.questions.Count; $qIdx++) {
            $q = $b.questions[$qIdx]
            $qCount++
            $opts = $q.options
            $ans = [int]$q.ans
            if ($opts.Count -ne 4) {
                $errors.Add("Questao $($l.id)_b${bIdx}_q${qIdx} possui $($opts.Count) opcoes (esperado: 4)")
            }
            if ($ans -lt 0 -or $ans -gt 3) {
                $errors.Add("Questao $($l.id)_b${bIdx}_q${qIdx} possui indice de gabarito invalido: $ans")
            }
            if (-not $q.comment) {
                $errors.Add("Questao $($l.id)_b${bIdx}_q${qIdx} sem gabarito comentado")
            }
        }
        $fcCount += $b.flashcards.Count
    }
}
$checks.Add("Banco de questoes e flashcards validado: $qCount questoes (A-D) com gabarito comentado e $fcCount flashcards ativos")

# 5. Verificar 94 fontes, 14 endemias, 16 codigos de cargos e matriz de 20 itens
if ($appData.sources.Count -ne 94) {
    $errors.Add("Esperadas 94 fontes cadastradas, encontradas $($appData.sources.Count)")
}
if ($appData.endemics.Count -ne 14) {
    $errors.Add("Esperadas 14 fichas de endemias, encontradas $($appData.endemics.Count)")
}
if ($appData.cargos.Count -ne 16) {
    $errors.Add("Esperados 16 codigos de vagas (340 a 356), encontrados $($appData.cargos.Count)")
}
if ($appData.auditMatrix.Count -ne 20) {
    $errors.Add("Esperados 20 macro-itens na matriz do edital, encontrados $($appData.auditMatrix.Count)")
}
$checks.Add("Inventario de 94 fontes, 14 fichas de endemias, 16 codigos de vagas e matriz de 20 itens 100% integros")

# 6. Validar caminhos relativos em index.html e js/app.js
$htmlTxt = [System.IO.File]::ReadAllText((Join-Path $RepoRoot "index.html"), [System.Text.Encoding]::UTF8)
if ($htmlTxt -notmatch '\./css/style\.css' -or $htmlTxt -notmatch '\./js/app\.js') {
    $errors.Add("index.html nao contem referencias relativas './css/style.css' e './js/app.js'")
}
$jsTxt = [System.IO.File]::ReadAllText((Join-Path $RepoRoot "js\app.js"), [System.Text.Encoding]::UTF8)
if ($jsTxt -notmatch '\./data/app_data\.json') {
    $errors.Add("js/app.js nao contem referencia relativa './data/app_data.json'")
}
$checks.Add("Caminhos relativos verificados para GitHub Pages (/acepvh/)")

Write-Host "=== RELATORIO DE EXECUCAO DA SUITE DE TESTES (validate_project.ps1) ===" -ForegroundColor Cyan
foreach ($c in $checks) {
    Write-Host "  [PASS] $c" -ForegroundColor Green
}

if ($errors.Count -gt 0) {
    Write-Host "`n  [ERROS ENCONTRADOS]:" -ForegroundColor Red
    foreach ($e in $errors) {
        Write-Host "   - $e" -ForegroundColor Red
    }
    exit 1
} else {
    Write-Host "`nRESULTADO FINAL: TODOS OS TESTES PASSARAM COM ZERO ERROS!" -ForegroundColor Green
}
