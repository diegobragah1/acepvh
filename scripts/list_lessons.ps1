param(
    [string]$ContentDir = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\content"
)

Get-ChildItem -Path $ContentDir -Recurse -File -Filter "*.md" |
    Where-Object { $_.Directory.Name -ne "content" -and $_.Name -notmatch "^_" } |
    ForEach-Object {
        $lines = (Get-Content $_.FullName | Measure-Object).Count
        [PSCustomObject]@{
            Dir = $_.Directory.Name
            File = $_.Name
            Lines = $lines
            SizeKB = [math]::Round($_.Length / 1KB, 1)
        }
    } | Format-Table -AutoSize
