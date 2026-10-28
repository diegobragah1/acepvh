@echo off
"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu --dump-dom about:blank > "%~dp0test_blank.html"
