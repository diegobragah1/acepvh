$jsonFile = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\data\app_data.json"
$txt = [System.IO.File]::ReadAllText($jsonFile, [System.Text.Encoding]::UTF8)
Write-Host "app_data.json character count: $($txt.Length)"

try {
    $data = ConvertFrom-Json $txt
    Write-Host "app_data.json parsed successfully with ConvertFrom-Json!"
    Write-Host "Lessons count: $($data.lessons.Count)"
    Write-Host "Config: $($data.config.siteTitle)"
    Write-Host "Topics count: $($data.topics.Count)"
} catch {
    Write-Host "ERROR parsing app_data.json: $($_.Exception.Message)"
}
