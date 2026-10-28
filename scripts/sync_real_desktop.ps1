$desktop = [Environment]::GetFolderPath('Desktop')
Write-Host "Target Desktop folder: $desktop"

$zipSrc = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh_atualizado.zip"
$folderSrc = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh_atualizado"

$destZip = Join-Path $desktop "acepvh_atualizado.zip"
$destDir = Join-Path $desktop "acepvh_atualizado"

Write-Host "Copying ZIP to: $destZip"
Copy-Item -Path $zipSrc -Destination $destZip -Force

Write-Host "Copying unzipped folder to: $destDir"
if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force | Out-Null
}
Copy-Item -Path (Join-Path $folderSrc "*") -Destination $destDir -Recurse -Force

Write-Host "Real Desktop updated successfully!" -ForegroundColor Green

# Remove the mojibake folder if present
$badFolders = Get-ChildItem "C:\Users\Diego\OneDrive" | Where-Object { $_.Name -match '\?rea' }
foreach ($bf in $badFolders) {
    Write-Host "Removing mojibake folder: $($bf.FullName)"
    Remove-Item -Recurse -Force $bf.FullName -ErrorAction SilentlyContinue
}

# Verify real desktop files
Get-Item $destZip | Select-Object FullName, LastWriteTime, Length
Get-Item (Join-Path $destDir "index.html") | Select-Object FullName, LastWriteTime, Length
Get-Item (Join-Path $destDir "js\app.js") | Select-Object FullName, LastWriteTime, Length
Get-Item (Join-Path $destDir "data\app_data.js") | Select-Object FullName, LastWriteTime, Length
