param(
    [int]$port = 9876
)

$RepoRoot = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh"
$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edgePath)) {
    $edgePath = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
}

# Start local HTTP server
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

$serverTask = [System.Threading.Tasks.Task]::Run([Action]{
    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $req = $context.Request
            $res = $context.Response
            
            $rawPath = $req.Url.AbsolutePath.TrimStart('/')
            if (-not $rawPath) { $rawPath = "index.html" }
            $rawPath = [System.Uri]::UnescapeDataString($rawPath)
            $filePath = Join-Path $RepoRoot ($rawPath -replace '/', '\')
            
            if (Test-Path $filePath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                switch ($ext) {
                    ".html" { $res.ContentType = "text/html; charset=utf-8" }
                    ".js"   { $res.ContentType = "application/javascript; charset=utf-8" }
                    ".css"  { $res.ContentType = "text/css; charset=utf-8" }
                    ".json" { $res.ContentType = "application/json; charset=utf-8" }
                    default { $res.ContentType = "application/octet-stream" }
                }
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $res.ContentLength64 = $bytes.Length
                $res.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $res.StatusCode = 404
                $msg = [System.Text.Encoding]::UTF8.GetBytes("Not Found: $rawPath")
                $res.OutputStream.Write($msg, 0, $msg.Length)
            }
            $res.Close()
        } catch {
            if (-not $listener.IsListening) { break }
        }
    }
})

Write-Host "HTTP Server listening on http://localhost:$port/"

$tempUserData = Join-Path $env:TEMP "edge_test_user_$(Get-Random)"
$args = @(
    "--headless=new",
    "--disable-gpu",
    "--user-data-dir=$tempUserData",
    "--enable-logging=stderr",
    "--v=1",
    "--virtual-time-budget=7000",
    "--dump-dom",
    "http://localhost:$port/index.html"
)

$psi = New-Object System.Diagnostics.ProcessStartInfo
$psi.FileName = $edgePath
$psi.Arguments = $args -join " "
$psi.UseShellExecute = $false
$psi.RedirectStandardOutput = $true
$psi.RedirectStandardError = $true
$psi.CreateNoWindow = $true

$proc = [System.Diagnostics.Process]::Start($psi)
$stdout = $proc.StandardOutput.ReadToEnd()
$stderr = $proc.StandardError.ReadToEnd()
$proc.WaitForExit(10000)

$listener.Stop()
$listener.Close()

try { Remove-Item -Recurse -Force $tempUserData -ErrorAction SilentlyContinue } catch {}

Write-Host "STDOUT length: $($stdout.Length)"
Write-Host "STDERR lines: $($stderr.Split("`n").Length)"

# Look for console errors in stderr
$consoleErrors = $stderr -split "`n" | Where-Object { $_ -match "CONSOLE|Uncaught|TypeError|SyntaxError|ReferenceError|Failed to load" }
if ($consoleErrors) {
    Write-Host "=== CONSOLE LOGS & ERRORS FOUND ===" -ForegroundColor Red
    $consoleErrors | ForEach-Object { Write-Host $_ }
} else {
    Write-Host "No CONSOLE errors found in stderr!" -ForegroundColor Green
}

if ($stdout -match "Erro ao carregar") {
    Write-Host "DOM CONTAINS 'Erro ao carregar'!" -ForegroundColor Red
    $idx = $stdout.IndexOf("Erro ao carregar")
    Write-Host ($stdout.Substring($idx, [Math]::Min(500, $stdout.Length - $idx)))
} else {
    Write-Host "DOM DOES NOT CONTAIN 'Erro ao carregar'!" -ForegroundColor Green
    if ($stdout -match 'id="lessonTitleDisplay"[^>]*>([^<]+)<') {
        Write-Host "Active Lesson Title in DOM: $($matches[1])" -ForegroundColor Cyan
    }
}
