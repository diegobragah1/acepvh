$RepoRoot = Split-Path -Parent $PSScriptRoot
$flatPath = Join-Path $RepoRoot "content\atu_1.md"
$thematicPath = Join-Path $RepoRoot "content\conhecimentos-gerais\29-geografia-demografia-ibge-distritos-hidrografia-simbolos-porto-velho-ro.md"
$tablePath = Join-Path $PSScriptRoot "distritos_table.md"
$tableTxt = [System.IO.File]::ReadAllText($tablePath, [System.Text.Encoding]::UTF8)

foreach ($target in @($flatPath, $thematicPath)) {
    $lines = [System.IO.File]::ReadAllLines($target, [System.Text.Encoding]::UTF8)
    $newLines = [System.Collections.Generic.List[string]]::new()
    
    foreach ($line in $lines) {
        if ($line.StartsWith('-\ \*\*Geografia')) {
            $newLines.Add('- **Geografia dos Distritos de Porto Velho (Eixo BR-364 / Ponta do Abuna vs. Eixo Fluvial do Baixo e Medio Madeira):**')
            $newLines.Add('')
            $newLines.Add($tableTxt)
            $newLines.Add('')
        } else {
            $newLines.Add($line)
        }
    }
    
    [System.IO.File]::WriteAllLines($target, $newLines, [System.Text.Encoding]::UTF8)
    Write-Host "Processado com sucesso: $target"
}
