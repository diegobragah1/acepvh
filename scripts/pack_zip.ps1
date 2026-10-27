$ErrorActionPreference = "Stop"
$RepoRoot = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh_atualizado"
$ZipPath = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh_atualizado.zip"

Write-Host "Iniciando criacao do pacote zip..."
if (Test-Path $ZipPath) {
    Remove-Item $ZipPath -Force
}

Compress-Archive -Path (Join-Path $RepoRoot "*") -DestinationPath $ZipPath -CompressionLevel Optimal
$size = (Get-Item $ZipPath).Length
Write-Host "Pacote criado com sucesso em: $ZipPath"
Write-Host "Tamanho: $([math]::Round($size / 1MB, 2)) MB ($size bytes)"
