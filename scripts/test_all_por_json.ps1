$PorDir = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\content\portugues"
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

foreach ($lid in $filesMap.Keys) {
    $fName = $filesMap[$lid]
    $fPath = Join-Path $PorDir $fName
    $txt = [System.IO.File]::ReadAllText($fPath, [System.Text.Encoding]::UTF8)
    $jsonMatches = [regex]::Matches($txt, '(?s)```json\s*\r?\n(\{.*?\})\s*\r?\n```')
    $errCount = 0
    foreach ($m in $jsonMatches) {
        try {
            $parsed = $m.Groups[1].Value | ConvertFrom-Json
        } catch {
            $errCount++
        }
    }
    Write-Host "$lid ($fName): $($jsonMatches.Count) json blocks, $errCount errors"
}
