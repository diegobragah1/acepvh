$data = Get-Content "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\data\app_data.json" -Raw -Encoding UTF8 | ConvertFrom-Json

foreach ($l in $data.lessons) {
    if (-not $l.blocks) {
        Write-Host "Lesson $($l.id) has NO blocks!" -ForegroundColor Red
        continue
    }
    foreach ($b in $l.blocks) {
        if ($b.questions) {
            foreach ($q in $b.questions) {
                # check question fields
                if (-not $q.options -or $q.options.Count -eq 0) {
                    Write-Host "Lesson $($l.id) question missing options!" -ForegroundColor Red
                }
            }
        }
        if ($b.flashcards) {
            foreach ($fc in $b.flashcards) {
                # check flashcard fields (front/back or f/b)
                if (-not $fc.front -and -not $fc.f) {
                    Write-Host "Lesson $($l.id) FC missing front!" -ForegroundColor Red
                }
            }
        }
    }
}
Write-Host "Questions and Flashcards sanity check completed!"
