$txt = [System.IO.File]::ReadAllText("C:\Users\Diego\.gemini\antigravity\scratch\acepvh\data\app_data.json", [System.Text.Encoding]::UTF8)
$idx = $txt.IndexOf('"por_1"')
if ($idx -ge 0) {
    $start = [Math]::Max(0, $idx - 50)
    $sub = $txt.Substring($start, 500)
    Write-Host "Raw snippet around por_1:"
    Write-Host $sub
} else {
    Write-Host "por_1 NOT FOUND IN app_data.json!" -ForegroundColor Red
}
