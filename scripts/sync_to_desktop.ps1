<#
.SYNOPSIS
Sincroniza o projeto atualizado e os arquivos ZIP para a Área de Trabalho e Downloads do usuário
#>

$SourceDir = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh_atualizado"
$ZipSrc = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh_atualizado.zip"

$DesktopFolder = "C:\Users\Diego\OneDrive\Área de Trabalho\acepvh_atualizado"
$DesktopZip = "C:\Users\Diego\OneDrive\Área de Trabalho\acepvh_atualizado.zip"
$DownloadsZip = "C:\Users\Diego\Downloads\acepvh_atualizado.zip"
$ArtifactZip = "C:\Users\Diego\.gemini\antigravity\brain\a3d3987e-61d3-4511-8d7f-3cfa7c9427ac\acepvh_atualizado.zip"

Write-Host "Sincronizando pasta descompactada na Área de Trabalho..." -ForegroundColor Cyan
if (-not (Test-Path $DesktopFolder)) {
    New-Item -ItemType Directory -Path $DesktopFolder -Force | Out-Null
}

Copy-Item -Path (Join-Path $SourceDir "*") -Destination $DesktopFolder -Recurse -Force
Write-Host "Pasta da Área de Trabalho atualizada!" -ForegroundColor Green

Write-Host "Sincronizando arquivos ZIP..." -ForegroundColor Cyan
Copy-Item -Path $ZipSrc -Destination $DesktopZip -Force
Copy-Item -Path $ZipSrc -Destination $DownloadsZip -Force
Copy-Item -Path $ZipSrc -Destination $ArtifactZip -Force

Write-Host "Todos os destinos sincronizados com sucesso!" -ForegroundColor Green
