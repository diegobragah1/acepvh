<#
.SYNOPSIS
Substitui os blocos json nos arquivos .md de Português pelos blocos perfeitamente serializados de app_data.json
#>

$RepoRoot = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh"
$PorDir = Join-Path $RepoRoot "content\portugues"
$appData = Get-Content "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\data\app_data.json" -Raw -Encoding UTF8 | ConvertFrom-Json
$lessonsMap = @{}
foreach ($l in $appData.lessons) { $lessonsMap[$l.id] = $l }

$filesMap = @{
    "por_1" = "17-compreensao-interpretacao-textos-tipologia-generos-variacao-linguistica.md"
    "por_2" = "18-ortografia-acentuacao-hifen-semantica-figuras-linguagem-sintaxe.md"
    "por_3" = "19-coesao-coerencia-conjuncoes-operadores-argumentativos-implictos.md"
    "por_4" = "20-morfologia-classes-formacao-palavras-verbos-colocacao-pronominal.md"
    "por_5" = "21-sintaxe-1-analise-sintatica-concordancia-verbal-nominal.md"
    "por_6" = "22-sintaxe-2-regencia-verbal-nominal-crase-pontuacao.md"
}

$fence = [string]::new([char]96, 3)

foreach ($lid in $filesMap.Keys) {
    $fName = $filesMap[$lid]
    $fPath = Join-Path $PorDir $fName
    $txt = [System.IO.File]::ReadAllText($fPath, [System.Text.Encoding]::UTF8)
    $l = $lessonsMap[$lid]
    
    $pattern = '(?s)```json\s*\r?\n(\{.*?\})\s*\r?\n```'
    $matches = [regex]::Matches($txt, $pattern)
    
    for ($i = $matches.Count - 1; $i -ge 0; $i--) {
        $m = $matches[$i]
        if ($i -lt $l.blocks.Count) {
            $b = $l.blocks[$i]
            $cleanJson = $b | ConvertTo-Json -Depth 20
            $replacement = "$fence" + "json`r`n" + $cleanJson + "`r`n" + "$fence"
            $txt = $txt.Substring(0, $m.Index) + $replacement + $txt.Substring($m.Index + $m.Length)
        }
    }
    
    [System.IO.File]::WriteAllText($fPath, $txt, [System.Text.Encoding]::UTF8)
    Write-Host "Arquivo corrigido com sucesso: $lid ($fName)" -ForegroundColor Green
}
