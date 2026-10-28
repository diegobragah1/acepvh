$app = Get-Content "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\data\app_data.json" -Raw -Encoding UTF8 | ConvertFrom-Json
$l = $app.lessons | Where-Object { $_.id -eq "rlm_6" }
Write-Host "Lesson rlm_6:"
$l | Get-Member -MemberType NoteProperty | ForEach-Object {
    $prop = $_.Name
    $val = $l.$prop
    if ($val -is [Array]) {
        Write-Host "  $prop : Array ($($val.Count) items)"
    } elseif ($val -is [PSCustomObject]) {
        Write-Host "  $prop : Object with props $(($val | Get-Member -MemberType NoteProperty).Name -join ', ')"
    } else {
        $preview = "$val"
        if ($preview.Length -gt 60) { $preview = $preview.Substring(0, 60) + "..." }
        Write-Host "  $prop : $preview"
    }
}
