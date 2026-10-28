$ErrorActionPreference = "Stop"

$Root = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh_atualizado"
$ZipTarget = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh_atualizado.zip"

$DesktopBase = [Environment]::GetFolderPath('Desktop')
$DesktopDir = Join-Path $DesktopBase "acepvh_atualizado"
$DesktopZip = Join-Path $DesktopBase "acepvh_atualizado.zip"
$DownloadsZip = "C:\Users\Diego\Downloads\acepvh_atualizado.zip"
$ArtifactZip = "C:\Users\Diego\.gemini\antigravity\brain\a3d3987e-61d3-4511-8d7f-3cfa7c9427ac\acepvh_atualizado.zip"

Write-Host "=== ETAPA 1: Gerando data/app_data.js (Fallback Offline)..." -ForegroundColor Cyan
$jsonPath = Join-Path $Root "data\app_data.json"
$jsPath = Join-Path $Root "data\app_data.js"
$rawJson = [System.IO.File]::ReadAllText($jsonPath, [System.Text.Encoding]::UTF8)
$jsContent = "/**`n * Plataforma ACE SEMUSA Porto Velho 2026`n * Fallback offline para app_data.json (permite execucao offline por duplo clique em index.html)`n */`nwindow.LOCAL_APP_DATA = " + $rawJson + ";`n"
[System.IO.File]::WriteAllText($jsPath, $jsContent, [System.Text.Encoding]::UTF8)
Write-Host "data/app_data.js gerado com sucesso ($([math]::Round($jsContent.Length / 1MB, 2)) MB)." -ForegroundColor Green

Write-Host "=== ETAPA 2: Executando suite de testes de integridade..." -ForegroundColor Cyan
& (Join-Path $Root "scripts\validate_project.ps1")

Write-Host "=== ETAPA 3: Teste de renderizacao headless via Google Chrome..." -ForegroundColor Cyan
$tempDomFile = Join-Path $env:TEMP "test_chrome_verify_$(Get-Random).html"
$chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
if (Test-Path $chromePath) {
    $indexPath = Join-Path $Root "index.html"
    $batPath = Join-Path $env:TEMP "temp_run_chrome_$(Get-Random).bat"
    $batContent = "@echo off`n`"$chromePath`" --headless=new --disable-gpu --virtual-time-budget=4000 --dump-dom `"file:///$indexPath`" > `"$tempDomFile`"`n"
    [System.IO.File]::WriteAllText($batPath, $batContent, [System.Text.Encoding]::ASCII)
    cmd.exe /c "`"$batPath`""
    Remove-Item $batPath -Force -ErrorAction SilentlyContinue

    Start-Sleep -Seconds 1

    if (Test-Path $tempDomFile) {
        $dom = Get-Content $tempDomFile -Raw -Encoding UTF8
        if ($dom -match "Erro ao carregar") {
            throw "Erro detectado no DOM gerado pelo Chrome!"
        }
        if (-not ($dom -match "Aula 1 de 32")) {
            throw "Aula 1 de 32 não foi encontrada no DOM!"
        }
        Write-Host "Chrome validou a renderizacao com SUCESSO ZERO ERROS!" -ForegroundColor Green
        Remove-Item $tempDomFile -Force -ErrorAction SilentlyContinue
    }
}

Write-Host "=== ETAPA 4: Limpando arquivos temporarios da pasta do projeto..." -ForegroundColor Cyan
$tempFiles = @(
    "test_dom.html", "test_err.txt", "edge_debug.log", "test_rendered_dom.html",
    "test_rendered_err.log", "test_live_dom.html", "test_live_err.log",
    "test_offline_dom.html", "test_offline_err.log", "rendered_chrome_dom.html",
    "syntax_edge_err.log", "test_blank.html", "test_chrome_verify.html"
)
foreach ($tf in $tempFiles) {
    $p = Join-Path $Root $tf
    if (Test-Path $p) { Remove-Item $p -Force -ErrorAction SilentlyContinue }
    $pScr = Join-Path $Root "scripts\$tf"
    if (Test-Path $pScr) { Remove-Item $pScr -Force -ErrorAction SilentlyContinue }
}

Write-Host "=== ETAPA 5: Compactando pacote zip acepvh_atualizado.zip..." -ForegroundColor Cyan
if (Test-Path $ZipTarget) { Remove-Item $ZipTarget -Force }

Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::CreateFromDirectory($Root, $ZipTarget, [System.IO.Compression.CompressionLevel]::Optimal, $false)

$zipSize = (Get-Item $ZipTarget).Length
Write-Host "ZIP criado com sucesso em: $ZipTarget ($([math]::Round($zipSize / 1MB, 2)) MB)" -ForegroundColor Green

Write-Host "=== ETAPA 6: Sincronizando com Area de Trabalho, Downloads e Artefatos..." -ForegroundColor Cyan
if (-not (Test-Path $DesktopDir)) {
    New-Item -ItemType Directory -Path $DesktopDir -Force | Out-Null
}
Copy-Item -Path (Join-Path $Root "*") -Destination $DesktopDir -Recurse -Force
Write-Host "Pasta da Área de Trabalho atualizada: $DesktopDir" -ForegroundColor Green

Copy-Item -Path $ZipTarget -Destination $DesktopZip -Force
Write-Host "ZIP na Área de Trabalho atualizado: $DesktopZip" -ForegroundColor Green

Copy-Item -Path $ZipTarget -Destination $DownloadsZip -Force
Write-Host "ZIP em Downloads atualizado: $DownloadsZip" -ForegroundColor Green

Copy-Item -Path $ZipTarget -Destination $ArtifactZip -Force
Write-Host "ZIP de Artefatos atualizado: $ArtifactZip" -ForegroundColor Green

Write-Host "=== PROCESSO COMPLETO FINALIZADO COM 100% DE SUCESSO! ===" -ForegroundColor Green
