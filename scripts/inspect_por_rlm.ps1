$data = Get-Content "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\data\app_data.json" -Raw -Encoding UTF8 | ConvertFrom-Json

Write-Host "=== LINGUA PORTUGUESA (por_1 a por_6) ==="
$data.lessons | Where-Object { $_.cat -eq "por" } | ForEach-Object {
    Write-Host "`n[$($_.id)] Aula $($_.num): $($_.title)"
    Write-Host "EditalRef: $($_.editalRef)"
    foreach ($b in $_.blocks) {
        Write-Host "   - $($b.title)"
    }
}

Write-Host "`n=== RACIOCINIO LOGICO (rlm_1 a rlm_6) ==="
$data.lessons | Where-Object { $_.cat -eq "rlm" } | ForEach-Object {
    Write-Host "`n[$($_.id)] Aula $($_.num): $($_.title)"
    Write-Host "EditalRef: $($_.editalRef)"
    foreach ($b in $_.blocks) {
        Write-Host "   - $($b.title)"
    }
}
