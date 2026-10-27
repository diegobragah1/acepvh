<#
.SYNOPSIS
Compilador e Sincronizador de Conteudo Markdown (.md) -> JSON (ACEPVH 2026) - PowerShell
Repositório Oficial: https://github.com/diegobragah1/acepvh
Uso:
  powershell -ExecutionPolicy Bypass -File ./scripts/md_to_app_data.ps1 -ContentDir ./content -DataDir ./data
#>

param(
    [string]$ContentDir = "",
    [string]$DataDir = ""
)

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RepoDefault = Split-Path -Parent $ScriptDir

if (-not $ContentDir) { $ContentDir = Join-Path $RepoDefault "content" }
if (-not $DataDir) { $DataDir = Join-Path $RepoDefault "data" }

$ContentDir = (Resolve-Path $ContentDir).Path
$DataDir = (Resolve-Path $DataDir).Path

$ErrorActionPreference = "Stop"

$subjectFolders = @{
    "esp" = "conhecimentos-especificos"
    "leg" = "legislacao"
    "por" = "portugues"
    "rlm" = "raciocinio-logico"
    "atu" = "conhecimentos-gerais"
}

function Parse-Frontmatter([string]$text) {
    $meta = @{}
    if ($text -match '(?s)^---\s*\r?\n(.*?)\r?\n---\s*\r?\n') {
        $rawLines = $matches[1] -split '\r?\n'
        foreach ($line in $rawLines) {
            if ($line -match '^\s*([^:]+)\s*:\s*(.*)$') {
                $k = $matches[1].Trim()
                $v = $matches[2].Trim()
                if ($v.StartsWith('"') -and $v.EndsWith('"')) {
                    $v = $v.Substring(1, $v.Length - 2) -replace '\\"', '"'
                } elseif ($v.StartsWith('[') -and $v.EndsWith(']')) {
                    try {
                        $v = $v | ConvertFrom-Json
                    } catch {}
                } elseif ($v -match '^\d+$') {
                    $v = [int]$v
                }
                $meta[$k] = $v
            }
        }
    }
    return $meta
}

function Format-Inline([string]$str) {
    $s = $str -replace '\*\*(.+?)\*\*', '<strong>$1</strong>'
    $s = $s -replace '\*(.+?)\*', '<em>$1</em>'
    $s = $s -replace '`(.+?)`', '<code>$1</code>'
    return $s
}

function Convert-MdToHtml([string]$md) {
    if (-not $md) { return "" }
    $lines = $md -split '\r?\n'
    $htmlParts = [System.Collections.Generic.List[string]]::new()
    $htmlParts.Add('<div class="space-y-3">')
    $inList = $false
    $inTable = $false
    $tableRows = [System.Collections.Generic.List[object]]::new()

    $flushTable = {
        if (-not $inTable -or $tableRows.Count -eq 0) { return }
        $header = $tableRows[0]
        $body = if ($tableRows.Count -gt 2) { $tableRows.GetRange(2, $tableRows.Count - 2) } else { @() }
        $tableRows.Clear()
        $ths = ($header | ForEach-Object { "<th class=""p-2 border border-slate-300 text-left"">$_</th>" }) -join ""
        $trs = ""
        foreach ($r in $body) {
            $tds = ($r | ForEach-Object { "<td class=""p-2 border border-slate-200 align-top"">$_</td>" }) -join ""
            $trs += "<tr class=""bg-white hover:bg-slate-50"">$tds</tr>"
        }
        $htmlParts.Add("<div class=""overflow-x-auto my-2""><table class=""min-w-full text-xs border border-slate-300""><thead class=""bg-slate-800 text-white""><tr>$ths</tr></thead><tbody>$trs</tbody></table></div>")
    }

    foreach ($line in $lines) {
        $s = $line.Trim()
        if ($s.StartsWith("|") -and $s.EndsWith("|")) {
            if ($inList) { $htmlParts.Add("</ul>"); $inList = $false }
            $inTable = $true
            $cells = ($s.Substring(1, $s.Length - 2) -split '\|') | ForEach-Object { Format-Inline $_.Trim() }
            $tableRows.Add($cells)
            continue
        } elseif ($inTable) {
            & $flushTable
            $inTable = $false
        }

        if (-not $s) {
            if ($inList) { $htmlParts.Add("</ul>"); $inList = $false }
            continue
        }

        if ($s.StartsWith("#### ")) {
            if ($inList) { $htmlParts.Add("</ul>"); $inList = $false }
            $htmlParts.Add("<h4 class=""font-extrabold text-slate-900 text-sm sm:text-base border-b border-slate-200 pb-1"">$(Format-Inline $s.Substring(5))</h4>")
        } elseif ($s.StartsWith("##### ")) {
            if ($inList) { $htmlParts.Add("</ul>"); $inList = $false }
            $htmlParts.Add("<h5 class=""font-bold text-teal-900 text-xs sm:text-sm"">$(Format-Inline $s.Substring(6))</h5>")
        } elseif ($s.StartsWith("- ")) {
            if (-not $inList) {
                $htmlParts.Add('<ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-800">')
                $inList = $true
            }
            $htmlParts.Add("<li>$(Format-Inline $s.Substring(2))</li>")
        } elseif ($s.StartsWith("> ")) {
            if ($inList) { $htmlParts.Add("</ul>"); $inList = $false }
            $htmlParts.Add("<blockquote class=""bg-slate-100 border-l-4 border-slate-500 p-3 rounded-r-lg italic text-xs sm:text-sm"">$(Format-Inline $s.Substring(2))</blockquote>")
        } else {
            if ($inList) { $htmlParts.Add("</ul>"); $inList = $false }
            $htmlParts.Add("<p class=""text-xs sm:text-sm text-slate-800 leading-relaxed"">$(Format-Inline $s)</p>")
        }
    }

    if ($inTable) { & $flushTable }
    if ($inList) { $htmlParts.Add("</ul>") }
    $htmlParts.Add("</div>")
    return $htmlParts -join "`n"
}

$appDataFile = Join-Path $DataDir "app_data.json"
$appData = Get-Content -Path $appDataFile -Raw -Encoding UTF8 | ConvertFrom-Json

$existingLessons = @{}
foreach ($l in $appData.lessons) {
    $existingLessons[$l.id] = $l
}

$mdFiles = Get-ChildItem -Path $ContentDir -Filter "*.md" -Recurse | Where-Object {
    $_.Name -notmatch '^_|^00_|^catalogo_|^fichas_'
}

$updatedCount = 0
foreach ($mf in $mdFiles) {
    $txt = [System.IO.File]::ReadAllText($mf.FullName, [System.Text.Encoding]::UTF8)
    $meta = Parse-Frontmatter $txt
    $lid = $meta["id"]
    if (-not $lid) { continue }

    $jsonMatches = [regex]::Matches($txt, '(?s)```json\s*\r?\n(\{.*?\})\s*\r?\n```')
    $blocks = [System.Collections.Generic.List[object]]::new()
    foreach ($m in $jsonMatches) {
        try {
            $bObj = $m.Groups[1].Value | ConvertFrom-Json
            $modoAHtml = if ($bObj.modoA) { $bObj.modoA } else { Convert-MdToHtml $bObj.modoA_markdown }
            $modoBHtml = if ($bObj.modoB) { $bObj.modoB } else { Convert-MdToHtml $bObj.modoB_markdown }
            $blocks.Add([PSCustomObject]@{
                title = $bObj.title
                modoA_markdown = $bObj.modoA_markdown
                modoB_markdown = $bObj.modoB_markdown
                modoA = $modoAHtml
                modoB = $modoBHtml
                questions = $bObj.questions
                flashcards = $bObj.flashcards
            })
        } catch {
            Write-Warning "Falha ao ler bloco JSON em $($mf.Name)"
        }
    }

    if ($blocks.Count -gt 0) {
        $cat = if ($meta["cat"]) { $meta["cat"] } else { "esp" }
        $subjFolder = if ($subjectFolders.ContainsKey($cat)) { $subjectFolders[$cat] } else { "conhecimentos-especificos" }
        $slug = if ($meta["slug"]) { $meta["slug"] } else { $lid }
        $qCnt = ($blocks | ForEach-Object { $_.questions.Count } | Measure-Object -Sum).Sum
        $fCnt = ($blocks | ForEach-Object { $_.flashcards.Count } | Measure-Object -Sum).Sum

        $lessonObj = [PSCustomObject]@{
            id = $lid
            num = if ($meta["num"]) { [int]$meta["num"] } else { 99 }
            slug = $slug
            subjectFolder = $subjFolder
            mdPath = if ($meta["mdPath"]) { $meta["mdPath"] } else { "./content/$subjFolder/$slug.md" }
            mdLegacyPath = "./content/$lid.md"
            cat = $cat
            catName = if ($meta["catName"]) { $meta["catName"] } else { $meta["materia"] }
            weight = $meta["weight"]
            title = if ($meta["title"]) { $meta["title"] } else { $meta["titulo"] }
            editalRef = $meta["editalRef"]
            auditBadge = if ($meta["auditBadge"]) { $meta["auditBadge"] } else { "AUDITADO" }
            sources = $meta["sources"]
            questionsCount = $qCnt
            flashcardsCount = $fCnt
            blocks = $blocks
        }
        $existingLessons[$lid] = $lessonObj
        $updatedCount++
    }
}

$sortedLessons = $existingLessons.Values | Sort-Object { [int]$_.num }
$appData.lessons = @($sortedLessons)

$aulasIndex = @($sortedLessons | ForEach-Object {
    [PSCustomObject]@{
        id = $_.id
        num = $_.num
        slug = $_.slug
        cat = $_.cat
        materia = $_.catName
        weight = $_.weight
        titulo = $_.title
        editalRef = $_.editalRef
        auditBadge = $_.auditBadge
        mdPath = $_.mdPath
        mdLegacyPath = $_.mdLegacyPath
        sources = $_.sources
        blocksCount = $_.blocks.Count
        questionsCount = $_.questionsCount
        flashcardsCount = $_.flashcardsCount
    }
})
$appData | Add-Member -MemberType NoteProperty -Name "aulasIndex" -Value $aulasIndex -Force

$appDataJson = $appData | ConvertTo-Json -Depth 10
[System.IO.File]::WriteAllText((Join-Path $DataDir "app_data.json"), $appDataJson, [System.Text.Encoding]::UTF8)

$aulasJsonObj = [PSCustomObject]@{
    totalAulas = $aulasIndex.Count
    totalQuestoesBanco = ($aulasIndex | Measure-Object -Property questionsCount -Sum).Sum
    totalFlashcardsBanco = ($aulasIndex | Measure-Object -Property flashcardsCount -Sum).Sum
    aulas = $aulasIndex
}
$aulasJson = $aulasJsonObj | ConvertTo-Json -Depth 10
[System.IO.File]::WriteAllText((Join-Path $DataDir "aulas.json"), $aulasJson, [System.Text.Encoding]::UTF8)

Write-Host "Sincronizacao concluida com sucesso! $($sortedLessons.Count) aulas catalogadas." -ForegroundColor Green
