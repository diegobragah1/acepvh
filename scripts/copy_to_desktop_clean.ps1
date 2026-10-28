$src = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh_atualizado.zip"
$destDesktop = [System.IO.Path]::Combine([System.Environment]::GetFolderPath("Desktop"), "acepvh_atualizado.zip")
Copy-Item -Path $src -Destination $destDesktop -Force
Write-Host "Desktop zip updated to: $destDesktop ($( (Get-Item $destDesktop).Length ) bytes)"
