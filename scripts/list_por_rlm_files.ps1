$porFiles = Get-ChildItem "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\content\portugues" -Filter "*.md"
Write-Host "=== ARQUIVOS PORTUGUES ==="
foreach ($f in $porFiles) {
    Write-Host "$($f.Name): $($f.Length) bytes"
}

$rlmFiles = Get-ChildItem "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\content\raciocinio-logico" -Filter "*.md"
Write-Host "`n=== ARQUIVOS RACIOCINIO LOGICO ==="
foreach ($f in $rlmFiles) {
    Write-Host "$($f.Name): $($f.Length) bytes"
}
