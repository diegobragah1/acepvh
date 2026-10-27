param(
    [string]$Path
)

if (-not (Test-Path $Path)) {
    Write-Error "Arquivo nao encontrado: $Path"
    exit 1
}

$content = Get-Content $Path -Raw -Encoding UTF8
Write-Host "=== INSPECAO: $Path ==="
Write-Host "Tamanho: $([math]::Round($content.Length / 1KB, 1)) KB"
Write-Host "Linhas: $((Get-Content $Path).Count)"

$blocks = [regex]::Matches($content, '<!-- @block id="([^"]+)" title="([^"]+)" -->')
Write-Host "Blocos encontrados: $($blocks.Count)"
foreach ($b in $blocks) {
    Write-Host "  -> Bloco: $($b.Groups[1].Value) | $($b.Groups[2].Value)"
}

$questions = [regex]::Matches($content, '##### Questão [^\r\n]+')
Write-Host "Questoes encontradas: $($questions.Count)"
foreach ($q in $questions) {
    Write-Host "  -> $($q.Value)"
}

$fcs = [regex]::Matches($content, '\| \*\*FC [^\*]+\*\*')
Write-Host "Flashcards encontrados: $($fcs.Count)"
foreach ($f in $fcs) {
    Write-Host "  -> $($f.Value)"
}
