$txt = [System.IO.File]::ReadAllText("C:\Users\Diego\.gemini\antigravity\scratch\acepvh\content\portugues\17-compreensao-interpretacao-textos-tipologia-generos-variacao-linguistica.md", [System.Text.Encoding]::UTF8)
$jsonMatches = [regex]::Matches($txt, '(?s)```json\s*\r?\n(\{.*?\})\s*\r?\n```')
Write-Host "Matches found: $($jsonMatches.Count)"
foreach ($m in $jsonMatches) {
    try {
        $obj = $m.Groups[1].Value | ConvertFrom-Json
        Write-Host "JSON valid: $($obj.title)"
    } catch {
        Write-Host "JSON error: $($_.Exception.Message)"
        # write out first 200 chars of json
        Write-Host "Start: $($m.Groups[1].Value.Substring(0, 300))"
    }
}
