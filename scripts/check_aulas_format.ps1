$content = Get-Content "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\data\aulas.json" -Raw -Encoding UTF8 | ConvertFrom-Json
if ($content -is [Array]) {
    Write-Host "aulas.json is an Array of $($content.Count) items."
} else {
    Write-Host "aulas.json is an Object with properties:"
    $content.psobject.Properties | ForEach-Object { Write-Host ("  - {0}" -f $_.Name) }
}
