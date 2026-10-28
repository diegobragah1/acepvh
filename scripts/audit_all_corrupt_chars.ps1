$app = Get-Content "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\data\app_data.json" -Raw -Encoding UTF8

# Valid chars pattern: ASCII + standard Portuguese accents & math symbols
# Any char code > 127 that is NOT in the valid set:
$validLatin = "áÁàÀãÃâÂéÉêÊíÍóÓõÕôÔúÚüÜçÇºª°§—–“”‘’«»•·×÷≤≥±√²³½¼¾→←↑↓↔⇒✓✔✕✖\u00A0\u200B\u2022\u2192"

$corruptions = @{}

for ($i = 0; $i -lt $app.Length; $i++) {
    $c = $app[$i]
    $code = [int][char]$c
    if ($code -gt 127) {
        $charStr = [string]$c
        if ($validLatin.IndexOf($charStr) -lt 0) {
            # Check if it's a known valid symbol like currency or punctuation
            if ($code -eq 0x2013 -or $code -eq 0x2014 -or $code -eq 0x2018 -or $code -eq 0x2019 -or 
                $code -eq 0x201C -or $code -eq 0x201D -or $code -eq 0x2026 -or $code -eq 0x20AC -or 
                $code -eq 0x2192 -or $code -eq 0x2264 -or $code -eq 0x2265 -or $code -eq 0x2260 -or 
                $code -eq 0x2248 -or $code -eq 0x2208 -or $code -eq 0x2282 -or $code -eq 0x222A -or 
                $code -eq 0x2229 -or $code -eq 0x2205 -or $code -eq 0x221E -or $code -eq 0x2211 -or 
                $code -eq 0x221A -or $code -eq 0x03C0 -or $code -eq 0x03B1 -or $code -eq 0x03B2 -or 
                $code -eq 0x03BC -or $code -eq 0x00D7 -or $code -eq 0x00F7 -or $code -eq 0x00B1 -or 
                $code -eq 0x00B2 -or $code -eq 0x00B3 -or $code -eq 0x00B0 -or $code -eq 0x00BA -or 
                $code -eq 0x00AA -or $code -eq 0x00A7 -or $code -eq 0x2713 -or $code -eq 0x2714 -or
                $code -eq 0x2022 -or $code -eq 0x00B7 -or $code -eq 0x21D2) {
                continue
            }
            if (-not $corruptions.ContainsKey($charStr)) {
                $corruptions[$charStr] = @{
                    Char = $charStr
                    Code = ("U+{0:X4}" -f $code)
                    Count = 0
                    Samples = @()
                }
            }
            $corruptions[$charStr].Count++
            if ($corruptions[$charStr].Samples.Count -lt 3) {
                $start = [Math]::Max(0, $i - 30)
                $len = [Math]::Min(60, $app.Length - $start)
                $corruptions[$charStr].Samples += $app.Substring($start, $len).Replace("`n", " ").Replace("`r", "")
            }
        }
    }
}

Write-Host "Total unique unexpected characters found: $($corruptions.Count)"
foreach ($kv in $corruptions.GetEnumerator() | Sort-Object { $_.Value.Count } -Descending) {
    Write-Host ("`nChar '{0}' ({1}) - Count: {2}" -f $kv.Value.Char, $kv.Value.Code, $kv.Value.Count)
    foreach ($s in $kv.Value.Samples) {
        Write-Host ("  Sample: ...{0}..." -f $s)
    }
}
