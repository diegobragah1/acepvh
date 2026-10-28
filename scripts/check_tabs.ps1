$lines = Get-Content "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\index.html"
$matches = $lines | Select-String 'id="tab-'
foreach ($m in $matches) {
    Write-Host $m.Line.Trim()
}
