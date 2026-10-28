$port = 8888
$RepoRoot = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh"

# Create a simple static server
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

$running = $true

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

Write-Host "Server listening on http://localhost:$port/"
$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

# Run Edge headless with --virtual-time-budget=6000 to let JS execute
$dom = & $edgePath --headless=new --disable-gpu --virtual-time-budget=6000 --dump-dom "http://localhost:$port/index.html" 2>&1

$listener.Stop()
$listener.Close()

Write-Host "DOM length: $($dom.Length)"

# Check if lessonContentContainer or error message is present
$hasError = $dom -match "Erro ao carregar \./data/app_data\.json"
Write-Host "Has load error banner: $hasError"

if ($hasError) {
    # Extract error detail
    $dom -match 'Detalhe técnico: ([^<]+)' | Out-Null
    Write-Host "Error detail: $($matches[1])" -ForegroundColor Red
} else {
    Write-Host "No error banner found!" -ForegroundColor Green
    # Check if lessons sidebar is populated
    $hasSidebarItems = $dom -match 'sidebar-lesson-item'
    Write-Host "Has sidebar lesson items: $hasSidebarItems"
    
    # Check countdown
    $dom -match 'id="hero-countdown"[^>]*>([^<]+)<' | Out-Null
    Write-Host "Hero countdown value: $($matches[1])"
    
    # Check global progress
    $dom -match 'id="global-progress-percent"[^>]*>([^<]+)<' | Out-Null
    Write-Host "Global progress: $($matches[1])"

    # Check active lesson title
    $dom -match 'id="lessonTitleDisplay"[^>]*>([^<]+)<' | Out-Null
    Write-Host "Active lesson title: $($matches[1])"
}
