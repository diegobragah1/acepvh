$appDataFile = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\data\app_data.json"
$raw = [System.IO.File]::ReadAllText($appDataFile, [System.Text.Encoding]::UTF8)

Write-Host "Raw size: $($raw.Length)"

# Check if there are any trailing commas or syntax issues in JSON
try {
    $data = ConvertFrom-Json $raw -ErrorAction Stop
    Write-Host "ConvertFrom-Json: SUCCESS"
} catch {
    Write-Host "ConvertFrom-Json FAILED: $($_.Exception.Message)" -ForegroundColor Red
}

# Now let's check what app.js uses from APP_DATA:
# 1. APP_DATA.lessons
Write-Host "Lessons count: $($data.lessons.Count)"
foreach ($l in $data.lessons) {
    if (-not $l.id) { Write-Host "Lesson missing ID!" -ForegroundColor Red }
    if (-not $l.title) { Write-Host "Lesson $($l.id) missing title!" -ForegroundColor Red }
    if (-not $l.cat) { Write-Host "Lesson $($l.id) missing cat!" -ForegroundColor Red }
    if (-not $l.catName) { Write-Host "Lesson $($l.id) missing catName!" -ForegroundColor Red }
    if ($l.sources -eq $null) { Write-Host "Lesson $($l.id) sources is null!" -ForegroundColor Red }
    if (-not ($l.sources -is [Array])) { Write-Host "Lesson $($l.id) sources is NOT an array! Type: $($l.sources.GetType().FullName)" -ForegroundColor Red }
    if (-not $l.blocks -or $l.blocks.Count -eq 0) { Write-Host "Lesson $($l.id) has NO blocks!" -ForegroundColor Red }
}

# 2. APP_DATA.sources
Write-Host "Sources count: $($data.sources.Count)"
foreach ($s in $data.sources) {
    if ($s.num -eq $null) { Write-Host "Source missing num!" -ForegroundColor Red }
    if (-not $s.title -and -not $s.name) { Write-Host "Source $($s.num) missing title and name!" -ForegroundColor Red }
}

# 3. APP_DATA.endemics
Write-Host "Endemics count: $($data.endemics.Count)"

# 4. APP_DATA.auditMatrix
Write-Host "AuditMatrix count: $($data.auditMatrix.Count)"

# 5. APP_DATA.cargos
Write-Host "Cargos count: $($data.cargos.Count)"

# 6. APP_DATA.schedule
Write-Host "Schedule count: $($data.schedule.Count)"

# 7. APP_DATA.materias
Write-Host "Materias count: $($data.materias.Count)"

Write-Host "Integrity inspection completed!"
