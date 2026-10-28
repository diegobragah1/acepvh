$port = 9999
$RepoRoot = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh"

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

$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$outDom = Join-Path $RepoRoot "test_dom.html"
$outErr = Join-Path $RepoRoot "test_err.txt"
if (Test-Path $outDom) { Remove-Item $outDom -Force }
if (Test-Path $outErr) { Remove-Item $outErr -Force }

$proc = Start-Process -FilePath $edgePath -ArgumentList "--headless=new --disable-gpu --virtual-time-budget=8000 --dump-dom http://localhost:$port/index.html" -RedirectStandardOutput $outDom -RedirectStandardError $outErr -PassThru -NoNewWindow
$proc.WaitForExit(15000)

Start-Sleep -Seconds 1
$listener.Stop()
$listener.Close()

if (Test-Path $outDom) {
    $domTxt = [System.IO.File]::ReadAllText($outDom, [System.Text.Encoding]::UTF8)
    Write-Host "test_dom.html size: $($domTxt.Length) characters"
    
    # Check for error text
    if ($domTxt -match 'Erro ao carregar') {
        Write-Host "ERROR BANNER FOUND IN DOM!" -ForegroundColor Red
        $idx = $domTxt.IndexOf('Erro ao carregar')
        Write-Host $domTxt.Substring($idx, 400)
    } else {
        Write-Host "NO ERROR BANNER in DOM! Page rendered!" -ForegroundColor Green
        
        # Check active lesson
        if ($domTxt -match 'id="lessonTitleDisplay"[^>]*>([^<]+)<') {
            Write-Host "Active Lesson Title: $($matches[1])" -ForegroundColor Cyan
        }
        # Check hero countdown
        if ($domTxt -match 'id="hero-countdown"[^>]*>([^<]+)<') {
            Write-Host "Countdown: $($matches[1])" -ForegroundColor Cyan
        }
        # Check global progress
        if ($domTxt -match 'id="global-progress-percent"[^>]*>([^<]+)<') {
            Write-Host "Global Progress: $($matches[1])" -ForegroundColor Cyan
        }
    }
} else {
    Write-Host "test_dom.html NOT CREATED!" -ForegroundColor Red
}

if (Test-Path $outErr) {
    $errTxt = [System.IO.File]::ReadAllText($outErr, [System.Text.Encoding]::UTF8)
    if ($errTxt.Trim()) {
        Write-Host "STDERR output: $errTxt"
    }
}
