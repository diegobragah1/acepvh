$app = Get-Content 'C:\Users\Diego\.gemini\antigravity\scratch\acepvh\data\app_data.json' -Raw -Encoding UTF8 | ConvertFrom-Json
$lessons = $app.lessons | Where-Object { $_.cat -in @('por', 'rlm') }
foreach ($l in $lessons) {
    Write-Host "[$($l.id)] $($l.title) (Blocks: $($l.blocks.Count), Questions: $($l.questionsCount), Flashcards: $($l.flashcardsCount))"
    for ($i = 0; $i -lt $l.blocks.Count; $i++) {
        $b = $l.blocks[$i]
        $mA_len = if ($b.modoA) { $b.modoA.Length } else { 0 }
        $mAm_len = if ($b.modoA_markdown) { $b.modoA_markdown.Length } else { 0 }
        Write-Host "   Block $($i+1): '$($b.title)' | modoA: $mA_len chars | modoA_md: $mAm_len chars | Q: $($b.questions.Count) | FC: $($b.flashcards.Count)"
    }
}
