$PorDir = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\content\portugues"
Get-ChildItem $PorDir -Filter "*.md" | ForEach-Object {
    $txt = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
    $hasNiv = $txt -match "0\. Nivelamento & Pré-Requisitos Fundamentais"
    Write-Host "$($_.Name) has Nivelamento in text: $hasNiv"
}
