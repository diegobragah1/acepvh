$RepoRoot = Split-Path -Parent $PSScriptRoot
$dataFile = Join-Path $RepoRoot "data\app_data.json"
$data = Get-Content $dataFile -Raw -Encoding UTF8 | ConvertFrom-Json

$totQ = 0
$totFC = 0
$byMateria = @{}

foreach ($l in $data.lessons) {
    $mat = $l.id.Split('_')[0]
    if (-not $byMateria.ContainsKey($mat)) {
        $byMateria[$mat] = @{ Q = 0; FC = 0 }
    }
    $lQ = 0
    $lFC = 0
    foreach ($b in $l.blocks) {
        $lQ += $b.questions.Count
        $lFC += $b.flashcards.Count
    }
    $totQ += $lQ
    $totFC += $lFC
    $byMateria[$mat].Q += $lQ
    $byMateria[$mat].FC += $lFC
    Write-Host ("{0,-8} | Q: {1,2} | FC: {2,2} | {3}" -f $l.id, $lQ, $lFC, $l.title)
}

Write-Host "------------------------------------------------------------"
foreach ($k in $byMateria.Keys) {
    Write-Host ("MATERIA {0,-5} | Total Q: {1,2} | Total FC: {2,2}" -f $k, $byMateria[$k].Q, $byMateria[$k].FC)
}
Write-Host ("TOTAL GERAL: {0} questoes | {1} flashcards" -f $totQ, $totFC)
