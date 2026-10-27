# Script de expansão didática integral da Aula 04 (esp_4)
# Decreto 7.508/2011, PNAB 2017, PNH e Leavell & Clark (PDFs #59, #60, #65, #86, #91)

$targetPath1 = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\content\conhecimentos-especificos\04-decreto-7508-2011-redes-atencao-pnab-2017-humanizasus.md"
$targetPath2 = "C:\Users\Diego\.gemini\antigravity\scratch\acepvh\content\esp_4.md"

# Carregar o arquivo existente para reaproveitar os blocos 4.1 e 4.2 intactos
$existing = Get-Content $targetPath1 -Raw -Encoding UTF8

Write-Host "Iniciando atualização da Aula 04..."
