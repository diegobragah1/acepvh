$data = Get-Content "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\data\app_data.json" -Raw -Encoding UTF8 | ConvertFrom-Json

$nullTitles = 0
foreach ($l in $data.lessons) {
    for ($i = 0; $i -lt $l.blocks.Count; $i++) {
        $b = $l.blocks[$i]
        if (-not $b.title) {
            Write-Host "Lesson $($l.id) Block $i has NULL/EMPTY title!" -ForegroundColor Red
            $nullTitles++
        }
    }
}
Write-Host "Total null or empty block titles: $nullTitles"
