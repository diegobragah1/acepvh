$RepoRoot = Split-Path -Parent $PSScriptRoot
$flatPath = Join-Path $RepoRoot "content\atu_1.md"
$thematicPath = Join-Path $RepoRoot "content\conhecimentos-gerais\29-geografia-demografia-ibge-distritos-hidrografia-simbolos-porto-velho-ro.md"

$distritosTable = [System.IO.File]::ReadAllText((Join-Path $PSScriptRoot "distritos_table.md"), [System.Text.Encoding]::UTF8)

foreach ($target in @($flatPath, $thematicPath)) {
    $txt = [System.IO.File]::ReadAllText($target, [System.Text.Encoding]::UTF8)
    
    # Substituir a linha escapada com backslashes pelo conteudo correto
    $patternEscaped = '(?m)^-\\ \\*\\*Geografia.*$'
    if ($txt -match $patternEscaped) {
        $cleanHeader = "- **Geografia dos Distritos de Porto Velho (Eixo BR-364 / Ponta do Abunã vs. Eixo Fluvial do Baixo e Médio Madeira — Códigos 341 a 356 do Edital ACE):**`n`n" + $distritosTable
        $txt = [regex]::Replace($txt, $patternEscaped, [System.Text.RegularExpressions.MatchEvaluator]{ return $cleanHeader })
        [System.IO.File]::WriteAllText($target, $txt, [System.Text.Encoding]::UTF8)
        Write-Host "Arquivo corrigido com sucesso: $target" -ForegroundColor Green
    } else {
        Write-Host "Linha escapada nao encontrada em: $target" -ForegroundColor Yellow
    }
}
