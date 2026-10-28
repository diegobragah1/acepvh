$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8089/")
$listener.Start()

$RepoRoot = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh"

$runServer = [System.Threading.Tasks.Task]::Run([Action]{
    $count = 0
    while ($listener.IsListening -and $count -lt 30) {
        $context = $listener.GetContext()
        $req = $context.Request
        $res = $context.Response
        $urlPath = $req.Url.AbsolutePath.TrimStart('/')
        if (-not $urlPath) { $urlPath = "index.html" }
        $filePath = Join-Path $RepoRoot ($urlPath -replace '/', '\')
        
        Write-Host "REQ: $urlPath"
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            if ($ext -eq ".html") { $res.ContentType = "text/html; charset=utf-8" }
            elseif ($ext -eq ".js") { $res.ContentType = "application/javascript; charset=utf-8" }
            elseif ($ext -eq ".css") { $res.ContentType = "text/css; charset=utf-8" }
            elseif ($ext -eq ".json") { $res.ContentType = "application/json; charset=utf-8" }
            $res.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $res.StatusCode = 404
        }
        $res.Close()
        $count++
    }
})

$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$logFile = Join-Path $RepoRoot "edge_debug.log"
if (Test-Path $logFile) { Remove-Item $logFile -Force }

$proc = Start-Process -FilePath $edgePath -ArgumentList "--headless=new --dump-dom --enable-logging --log-file=`"$logFile`" http://localhost:8089/index.html" -PassThru -NoNewWindow
$proc.WaitForExit(10000)

Start-Sleep -Seconds 2
$listener.Stop()

if (Test-Path $logFile) {
    Write-Host "=== EDGE LOG ==="
    Get-Content $logFile
} else {
    Write-Host "No edge log created."
}
