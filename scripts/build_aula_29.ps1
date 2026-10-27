$RepoRoot = Split-Path -Parent $PSScriptRoot
$flatPath = Join-Path $RepoRoot "content\atu_1.md"
$thematicPath = Join-Path $RepoRoot "content\conhecimentos-gerais\29-geografia-demografia-ibge-distritos-hidrografia-simbolos-porto-velho-ro.md"

$distritosTable = [System.IO.File]::ReadAllText((Join-Path $PSScriptRoot "distritos_table.md"), [System.Text.Encoding]::UTF8)

$pattern = '(?m)^- \*\*Geografia dos Distritos de Porto Velho.*?$'

foreach ($target in @($flatPath, $thematicPath)) {
    $txt = [System.IO.File]::ReadAllText($target, [System.Text.Encoding]::UTF8)
    
    if ($txt -match $pattern -and -not $txt.Contains("Cód. Vaga | Distrito / Localidade")) {
        $replacement = [regex]::Match($txt, $pattern).Value + "`n`n" + $distritosTable
        $txt = [regex]::Replace($txt, $pattern, [System.Text.RegularExpressions.Regex]::Escape($replacement).Replace("\$", "$"))
        # In powershell, let's use direct string replace
        $matchVal = [regex]::Match($txt, $pattern).Value
        $txt = $txt.Replace($matchVal, $replacement)
        [System.IO.File]::WriteAllText($target, $txt, [System.Text.Encoding]::UTF8)
        Write-Host "Tabela detalhada dos 15 Distritos inserida com sucesso em: $target" -ForegroundColor Green
    } elseif ($txt.Contains("Cód. Vaga | Distrito / Localidade")) {
        Write-Host "Tabela ja estava presente em: $target" -ForegroundColor Yellow
    } else {
        Write-Host "Marcador nao encontrado em: $target" -ForegroundColor Red
    }
}
