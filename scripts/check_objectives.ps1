$contentDir = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\content"
$files = Get-ChildItem -Path $contentDir -Recurse -File -Filter "*.md" |
    Where-Object { $_.Directory.Name -ne "content" -and $_.Name -notmatch "^_" } |
    Sort-Object Name

& {
    foreach ($f in $files) {
        $txt = Get-Content $f.FullName -Raw -Encoding UTF8
        $titleMatch = [regex]::Match($txt, 'titulo:\s*"([^"]+)"')
        $title = if ($titleMatch.Success) { $titleMatch.Groups[1].Value } else { $f.Name }
        
        $objMatch = [regex]::Match($txt, '(?s)Objetivos [^\r\n]+:\s*\r?\n(.*?)(?=\r?\n#|\r?\n---|\r?\n#### 2)')
        $objs = if ($objMatch.Success) { 
            ($objMatch.Groups[1].Value -split '\r?\n' | Where-Object { $_ -match '^\s*-\s*' } | Select-Object -First 2) -join " || "
        } else { "NENHUM OBJETIVO ENCONTRADO" }
        
        [PSCustomObject]@{
            File = $f.Name.Substring(0, [math]::Min(35, $f.Name.Length))
            Title = $title.Substring(0, [math]::Min(45, $title.Length))
            FirstObjectives = $objs.Substring(0, [math]::Min(80, $objs.Length))
        }
    }
} | Format-Table -AutoSize
