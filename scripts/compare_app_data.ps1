Add-Type -AssemblyName System.IO.Compression.FileSystem
$zipPath = "C:\Users\Diego\.gemini\antigravity\brain\a3d3987e-61d3-4511-8d7f-3cfa7c9427ac\acepvh_atualizado.zip"
$zip = [System.IO.Compression.ZipFile]::OpenRead($zipPath)
$entry = $zip.Entries | Where-Object { $_.FullName -like "*app_data.json*" } | Select-Object -First 1
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8)
$zipAppDataTxt = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()

$zipData = ConvertFrom-Json $zipAppDataTxt
$currTxt = [System.IO.File]::ReadAllText("C:\Users\Diego\.gemini\antigravity\scratch\acepvh\data\app_data.json", [System.Text.Encoding]::UTF8)
$currData = ConvertFrom-Json $currTxt

Write-Host "Zip APP_DATA keys: $(( $zipData | Get-Member -MemberType NoteProperty ).Name -join ', ')"
Write-Host "Curr APP_DATA keys: $(( $currData | Get-Member -MemberType NoteProperty ).Name -join ', ')"

Write-Host "Zip lessons count: $($zipData.lessons.Count)"
Write-Host "Curr lessons count: $($currData.lessons.Count)"

Write-Host "Zip rlm_6 blocks count: $(( $zipData.lessons | Where-Object { $_.id -eq 'rlm_6' } ).blocks.Count)"
Write-Host "Curr rlm_6 blocks count: $(( $currData.lessons | Where-Object { $_.id -eq 'rlm_6' } ).blocks.Count)"

# Check if any property was deleted or corrupted
foreach ($p in ($zipData | Get-Member -MemberType NoteProperty).Name) {
    $zCount = if ($zipData.$p -is [Array]) { $zipData.$p.Count } else { "N/A" }
    $cCount = if ($currData.$p -is [Array]) { $currData.$p.Count } else { "N/A" }
    Write-Host "Property '$p' -> Zip: $zCount | Curr: $cCount"
}
