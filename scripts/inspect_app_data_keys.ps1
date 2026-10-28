$txt = [System.IO.File]::ReadAllText("C:\Users\Diego\.gemini\antigravity\scratch\acepvh\data\app_data.json", [System.Text.Encoding]::UTF8)
$data = ConvertFrom-Json $txt
Write-Host "Properties on APP_DATA:"
$data | Get-Member -MemberType NoteProperty | ForEach-Object {
    $val = $data.($_.Name)
    $type = if ($val -is [Array]) { "Array ($($val.Count))" } else { $val.GetType().Name }
    Write-Host "  - $($_.Name): $type"
}
