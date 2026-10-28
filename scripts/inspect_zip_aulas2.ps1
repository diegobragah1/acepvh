Add-Type -AssemblyName System.IO.Compression.FileSystem
$zipPath = "C:\Users\Diego\.gemini\antigravity\brain\a3d3987e-61d3-4511-8d7f-3cfa7c9427ac\acepvh_atualizado.zip"
$zip = [System.IO.Compression.ZipFile]::OpenRead($zipPath)
$zip.Entries | Where-Object { $_.FullName -like "*aulas.json*" } | ForEach-Object {
    Write-Host "Entry: $($_.FullName), Size: $($_.Length)"
    $stream = $_.Open()
    $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8)
    $txt = $reader.ReadToEnd()
    $reader.Close()
    $stream.Close()
    Write-Host "Snippet: $($txt.Substring(0, [Math]::Min(300, $txt.Length)))"
}
$zip.Dispose()
