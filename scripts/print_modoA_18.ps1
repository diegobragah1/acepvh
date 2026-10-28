$app = Get-Content "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\data\app_data.json" -Raw -Encoding UTF8 | ConvertFrom-Json
$l18 = $app.lessons | Where-Object { $_.id -eq "por_2" }
$modoA = $l18.blocks[0].modoA
Write-Host "Length: $($modoA.Length)"
Write-Host $modoA.Substring(0, [Math]::Min(1200, $modoA.Length))
