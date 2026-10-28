$jsText = [System.IO.File]::ReadAllText("C:\Users\Diego\.gemini\antigravity\scratch\acepvh\js\app.js", [System.Text.Encoding]::UTF8)

# Check brace balance
$openBraces = 0
$lines = $jsText -split "`n"
$inBlockComment = $false

for ($i = 0; $i -lt $lines.Length; $i++) {
    $line = $lines[$i]
    $trimmed = $line.Trim()
    
    # Simple brace counter (ignoring strings/regex for approximate check)
    # Count '{' and '}'
    $chars = $line.ToCharArray()
    $inString = $false
    $stringChar = ''
    $escape = $false
    
    for ($j = 0; $j -lt $chars.Length; $j++) {
        $c = $chars[$j]
        if ($escape) { $escape = $false; continue }
        if ($c -eq '\') { $escape = $true; continue }
        
        if ($inString) {
            if ($c -eq $stringChar) { $inString = $false }
            continue
        }
        
        if ($c -eq '"' -or $c -eq "'" -or $c -eq '`') {
            $inString = $true
            $stringChar = $c
            continue
        }
        
        if ($c -eq '{') { $openBraces++ }
        if ($c -eq '}') {
            $openBraces--
            if ($openBraces -lt 0) {
                Write-Host "NEGATIVE BRACE at line $($i+1): $line" -ForegroundColor Red
            }
        }
    }
}
Write-Host "Final openBraces count: $openBraces"
