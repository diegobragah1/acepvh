$js = [System.IO.File]::ReadAllText("C:\Users\Diego\.gemini\antigravity\scratch\acepvh\js\app.js", [System.Text.Encoding]::UTF8)

# Accurate lexer for comments, strings, template literals, and braces
$len = $js.Length
$i = 0
$line = 1
$col = 1
$stack = New-Object System.Collections.Generic.Stack[PSCustomObject]
$errors = @()

while ($i -lt $len) {
    $c = $js[$i]
    $next = if ($i + 1 -lt $len) { $js[$i + 1] } else { '' }

    if ($c -eq "`n") {
        $line++
        $col = 1
        $i++
        continue
    }

    # Line comment
    if ($c -eq '/' -and $next -eq '/') {
        $i += 2
        $col += 2
        while ($i -lt $len -and $js[$i] -ne "`n") {
            $i++
            $col++
        }
        continue
    }

    # Block comment
    if ($c -eq '/' -and $next -eq '*') {
        $startLine = $line
        $startCol = $col
        $i += 2
        $col += 2
        while ($i + 1 -lt $len -and -not ($js[$i] -eq '*' -and $js[$i + 1] -eq '/')) {
            if ($js[$i] -eq "`n") {
                $line++
                $col = 1
            } else {
                $col++
            }
            $i++
        }
        $i += 2
        $col += 2
        continue
    }

    # Single or double quote string
    if ($c -eq '"' -or $c -eq "'") {
        $quote = $c
        $startLine = $line
        $startCol = $col
        $i++
        $col++
        while ($i -lt $len) {
            $sc = $js[$i]
            if ($sc -eq '\') {
                $i += 2
                $col += 2
                continue
            }
            if ($sc -eq $quote) {
                $i++
                $col++
                break
            }
            if ($sc -eq "`n") {
                $line++
                $col = 1
            } else {
                $col++
            }
            $i++
        }
        continue
    }

    # Template literal
    if ($c -eq '`') {
        $startLine = $line
        $startCol = $col
        $i++
        $col++
        while ($i -lt $len) {
            $tc = $js[$i]
            $tnext = if ($i + 1 -lt $len) { $js[$i + 1] } else { '' }
            if ($tc -eq '\') {
                $i += 2
                $col += 2
                continue
            }
            if ($tc -eq '$' -and $tnext -eq '{') {
                # Interpolation starts!
                $stack.Push([PSCustomObject]@{ Type = '`'; Line = $startLine; Col = $startCol })
                $stack.Push([PSCustomObject]@{ Type = '${'; Line = $line; Col = $col })
                $i += 2
                $col += 2
                break
            }
            if ($tc -eq '`') {
                $i++
                $col++
                break
            }
            if ($tc -eq "`n") {
                $line++
                $col = 1
            } else {
                $col++
            }
            $i++
        }
        continue
    }

    # Opening delimiters
    if ($c -eq '{' -or $c -eq '(' -or $c -eq '[') {
        $stack.Push([PSCustomObject]@{ Type = [string]$c; Line = $line; Col = $col })
        $i++
        $col++
        continue
    }

    # Closing delimiters
    if ($c -eq '}' -or $c -eq ')' -or $c -eq ']') {
        if ($stack.Count -eq 0) {
            $errors += "UNMATCHED CLOSING '$c' at line $line, col $col"
            $i++
            $col++
            continue
        }
        $top = $stack.Pop()
        $expected = switch ($c) {
            '}' { if ($top.Type -eq '${') { '${' } else { '{' } }
            ')' { '(' }
            ']' { '[' }
        }
        if ($top.Type -ne $expected) {
            $errors += "MISMATCH: Got '$c' at line $line, col $col, but expected matching for '$($top.Type)' opened at line $($top.Line), col $($top.Col)"
        }
        
        # If we just closed a '${', check if we need to continue parsing the template string!
        if ($top.Type -eq '${' -and $stack.Count -gt 0 -and $stack.Peek().Type -eq '`') {
            $tpl = $stack.Pop()
            # resume template string reading
            $i++
            $col++
            while ($i -lt $len) {
                $tc = $js[$i]
                $tnext = if ($i + 1 -lt $len) { $js[$i + 1] } else { '' }
                if ($tc -eq '\') {
                    $i += 2
                    $col += 2
                    continue
                }
                if ($tc -eq '$' -and $tnext -eq '{') {
                    $stack.Push($tpl)
                    $stack.Push([PSCustomObject]@{ Type = '${'; Line = $line; Col = $col })
                    $i += 2
                    $col += 2
                    break
                }
                if ($tc -eq '`') {
                    $i++
                    $col++
                    break
                }
                if ($tc -eq "`n") {
                    $line++
                    $col = 1
                } else {
                    $col++
                }
                $i++
            }
            continue
        }
        
        $i++
        $col++
        continue
    }

    $i++
    $col++
}

while ($stack.Count -gt 0) {
    $unclosed = $stack.Pop()
    $errors += "UNCLOSED '$($unclosed.Type)' opened at line $($unclosed.Line), col $($unclosed.Col)"
}

Write-Host "Total Errors: $($errors.Count)"
foreach ($e in $errors) {
    Write-Host $e -ForegroundColor Red
}
