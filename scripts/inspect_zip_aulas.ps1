Add-Type -AssemblyName System.IO.Compression.FileSystem
$zipPath = "C:\Users\Diego\.gemini\antigravity\brain\a3d3987e-61d3-4511-8d7f-3cfa7c9427ac\acepvh_atualizado.zip"
$zip = [System.IO.Compression.ZipFile]::OpenRead($zipPath)
$entry = $zip.GetEntry("data/aulas.json")
if ($entry) {
    $stream = $entry.Open()
    $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8)
    $txt = $reader.ReadToEnd()
    $reader.Close()
    $stream.Close()
    Write-Host "aulas.json in zip length: $($txt.Length)"
    Write-Host "First 300 chars of aulas.json:"
    Write-Host $txt.Substring(0, [Math]::Min(300, $txt.Length))
}
$zip.Dispose()
