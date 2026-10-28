$domFile = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\rendered_chrome_dom.html"
if (-not (Test-Path $domFile)) {
    Write-Host "File not found: $domFile" -ForegroundColor Red
    exit 1
}

$dom = Get-Content $domFile -Raw -Encoding UTF8
Write-Host "Rendered DOM size: $($dom.Length) characters"

if ($dom -match "Erro ao carregar") {
    Write-Host "CRITICAL FAILURE: 'Erro ao carregar' found in DOM!" -ForegroundColor Red
    $idx = $dom.IndexOf("Erro ao carregar")
    Write-Host ($dom.Substring($idx, [Math]::Min(500, $dom.Length - $idx)))
} else {
    Write-Host "PERFECT: NO error banner found in DOM!" -ForegroundColor Green
}

# 1. Check active lesson position
if ($dom -match 'Aula 1 de 32') {
    Write-Host "[PASS] Lesson counter: 'Aula 1 de 32' rendered!" -ForegroundColor Green
} else {
    Write-Host "[FAIL] 'Aula 1 de 32' NOT found!" -ForegroundColor Red
}

# 2. Check sidebar items
$sbMatches = [regex]::Matches($dom, 'data-lesson-id="([^"]+)"')
Write-Host "[INFO] Sidebar lessons rendered: $($sbMatches.Count)" -ForegroundColor Cyan
if ($sbMatches.Count -eq 32) {
    Write-Host "[PASS] All 32 lessons rendered in sidebar!" -ForegroundColor Green
} else {
    Write-Host "[WARN] Expected 32 sidebar lessons, got $($sbMatches.Count)" -ForegroundColor Yellow
}

# 3. Check Hero Countdown
if ($dom -match 'id="hero-countdown"[^>]*>(.*?)</div>') {
    Write-Host "[PASS] Hero countdown rendered: $($matches[1].Trim())" -ForegroundColor Green
} else {
    Write-Host "[FAIL] Hero countdown element not found!" -ForegroundColor Red
}

# 4. Check Global Progress
if ($dom -match 'id="global-progress-percent"[^>]*>(.*?)</div>') {
    Write-Host "[PASS] Global Progress rendered: $($matches[1].Trim())" -ForegroundColor Green
} else {
    Write-Host "[FAIL] Global Progress element not found!" -ForegroundColor Red
}

# 5. Check 5-level topic status breakdown
if ($dom -match 'id="count_not_started">(\d+)<') {
    Write-Host "[PASS] 5-level status counters active (Not started: $($matches[1]))" -ForegroundColor Green
}

# 6. Check Tab 7 (Conteúdo Programático Detalhado)
if ($dom -match 'data-prog-id="esp_1"') {
    Write-Host "[PASS] Tab 7 items generated (esp_1 found)" -ForegroundColor Green
}

Write-Host "ALL AUDIT CHECKS COMPLETED!" -ForegroundColor Green
