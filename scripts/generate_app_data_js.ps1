$jsonPath = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\data\app_data.json"
$jsPath = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\data\app_data.js"

$rawJson = [System.IO.File]::ReadAllText($jsonPath, [System.Text.Encoding]::UTF8)
$jsContent = "/**`n * Plataforma ACE SEMUSA Porto Velho 2026`n * Fallback offline para app_data.json (permite execucao offline por duplo clique em index.html)`n */`nwindow.LOCAL_APP_DATA = " + $rawJson + ";`n"

[System.IO.File]::WriteAllText($jsPath, $jsContent, [System.Text.Encoding]::UTF8)
Write-Host "Generated data/app_data.js successfully! Length: $($jsContent.Length) characters."
