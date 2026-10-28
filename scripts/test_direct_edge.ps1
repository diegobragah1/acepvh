$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) { $edge = "C:\Program Files\Microsoft\Edge\Application\msedge.exe" }
$testUrl = "file:///C:/Users/Diego/.gemini/antigravity/scratch/acepvh/index.html"
$tempDir = Join-Path $env:TEMP "edge_dir_$(Get-Random)"

$dom = & $edge --headless=new --disable-gpu --user-data-dir="$tempDir" --dump-dom "$testUrl" 2>$null

try { Remove-Item -Recurse -Force $tempDir -ErrorAction SilentlyContinue } catch {}

Write-Host "DOM length: $($dom.Length)"
if ($dom -match 'Aula 1 de 32') {
    Write-Host "FOUND 'Aula 1 de 32' in offline DOM!" -ForegroundColor Green
}
if ($dom -match 'id="global-progress-percent"[^>]*>([^<]+)<') {
    Write-Host "Global progress: $($matches[1].Trim())" -ForegroundColor Cyan
}
if ($dom -match 'id="hero-countdown"[^>]*>([^<]+)<') {
    Write-Host "Hero countdown: $($matches[1].Trim())" -ForegroundColor Cyan
}
