$dom = Get-Content "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\test_dom.html" -Raw -Encoding UTF8
Write-Host "DOM size: $($dom.Length)"
if ($dom -match "Erro ao carregar") {
    Write-Host "HAS ERROR BANNER:" -ForegroundColor Red
    $idx = $dom.IndexOf("Erro ao carregar")
    Write-Host $dom.Substring($idx, 400)
} else {
    Write-Host "NO ERROR BANNER!" -ForegroundColor Green
    if ($dom -match 'id="lessonTitleDisplay"[^>]*>([^<]+)<') {
        Write-Host "Active Lesson Title: $($matches[1])"
    }
    if ($dom -match 'id="hero-countdown"[^>]*>([^<]+)<') {
        Write-Host "Countdown: $($matches[1])"
    }
    if ($dom -match 'id="global-progress-percent"[^>]*>([^<]+)<') {
        Write-Host "Global Progress: $($matches[1])"
    }
}
$err = Get-Content "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\test_err.txt" -Raw -Encoding UTF8 -ErrorAction SilentlyContinue
if ($err) { Write-Host "ERR: $err" }
