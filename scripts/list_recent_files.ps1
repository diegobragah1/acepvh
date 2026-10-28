Get-ChildItem -Path "C:\Users\Diego\.gemini\antigravity\scratch\acepvh" -Recurse -File | 
    Sort-Object LastWriteTime -Descending | 
    Select-Object -First 25 FullName, Length, LastWriteTime | 
    Format-Table -AutoSize
