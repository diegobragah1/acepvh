$txt = [System.IO.File]::ReadAllText("C:\Users\Diego\.gemini\antigravity\scratch\acepvh\data\app_data.json", [System.Text.Encoding]::UTF8)
# Look at the raw text of lesson 17 sources in app_data.json!
$idx = $txt.IndexOf('"id": "por_1"')
if ($idx -ge 0) {
    $sub = $txt.Substring($idx, 400)
    Write-Host "Raw snippet for por_1:"
    Write-Host $sub
}
$idx28 = $txt.IndexOf('"id": "rlm_6"')
if ($idx28 -ge 0) {
    $sub28 = $txt.Substring($idx28, 400)
    Write-Host "Raw snippet for rlm_6:"
    Write-Host $sub28
}
