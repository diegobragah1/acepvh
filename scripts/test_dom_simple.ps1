$port = 9880
$RepoRoot = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh"
$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edgePath)) {
    $edgePath = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
}

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
$outFile = Join-Path $RepoRoot "test_rendered_dom.html"
$errFile = Join-Path $RepoRoot "test_rendered_err.log"
if (Test-Path $outFile) { Remove-Item $outFile -Force }
if (Test-Path $errFile) { Remove-Item $errFile -Force }

$p = Start-Process -FilePath $edgePath -ArgumentList "--headless=new", "--disable-gpu", "--user-data-dir=`"$tempUserData`"", "--dump-dom", "http://localhost:$port/index.html" -RedirectStandardOutput $outFile -RedirectStandardError $errFile -PassThru -NoNewWindow
$p.WaitForExit(10000)

$listener.Stop()
$listener.Close()

try { Remove-Item -Recurse -Force $tempUserData -ErrorAction SilentlyContinue } catch {}

if (Test-Path $outFile) {
    $content = Get-Content $outFile -Raw -Encoding UTF8
    Write-Host "Rendered DOM length: $($content.Length)"
    if ($content -match "Erro ao carregar") {
        Write-Host "FOUND ERROR BANNER!" -ForegroundColor Red
        $idx = $content.IndexOf("Erro ao carregar")
        Write-Host ($content.Substring($idx, [Math]::Min(500, $content.Length - $idx)))
    } else {
        Write-Host "NO ERROR BANNER FOUND!" -ForegroundColor Green
        # Check active lesson
        if ($content -match 'id="lessonTitleDisplay"[^>]*>([^<]+)<') {
            Write-Host "Active Lesson Title in DOM: $($matches[1])" -ForegroundColor Cyan
        }
        # Check sidebar items count
        $matches_sb = [regex]::Matches($content, 'sidebar-lesson-item')
        Write-Host "Sidebar lesson items rendered: $($matches_sb.Count)" -ForegroundColor Cyan
        
        # Check hero countdown
        if ($content -match 'id="hero-countdown"[^>]*>([^<]+)<') {
            Write-Host "Hero countdown: $($matches[1])" -ForegroundColor Cyan
        }
    }
} else {
    Write-Host "Output file not found" -ForegroundColor Red
}
if (Test-Path $errFile) {
    $err = Get-Content $errFile -Raw -Encoding UTF8
    if ($err.Trim()) {
        Write-Host "Stderr output: $err"
    }
}
