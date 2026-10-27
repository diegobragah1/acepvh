$RepoRoot = Split-Path -Parent $PSScriptRoot
$filePath = Join-Path $RepoRoot "content\esp_5.md"
$text = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)

$pattern = '(?s)Objetivos Claros de Aprendizagem da Aula 5:\s*\r?\n.*?(?=\r?\n#### 2\.)'
$newObj = @"
Objetivos Claros de Aprendizagem da Aula 5:

- Compreender a evolução e o marco regulatório da profissão de Agente de Combate às Endemias (Lei Federal nº 11.350/2006, EC nº 51/2006 e EC nº 120/2022).
- Dominar as atribuições típicas do ACE (Art. 4º, § 1º) e atividades compartilhadas com ACS (Art. 4º-A), distinguindo competências privativas de cada categoria profissional.
- Analisar os requisitos legais para investidura no cargo de ACE (Art. 6º: Ensino Médio completo + curso inicial de 40h) e a exigência de Processo Seletivo Público.
- Conhecer as inovações introduzidas pela Lei nº 13.595/2018 (Lei Ruth Brilhante), Lei nº 13.708/2018 (jornada de 40h: 30h de campo + 10h de planejamento/capacitação) e Lei nº 14.536/2023 (enquadramento como profissionais de saúde para acumulação de 2 cargos públicos na forma do Art. 37, XVI, 'c' da CF/88).
- Comparar as atribuições federais da Lei nº 11.350/2006 com as atribuições municipais da SEMUSA Porto Velho/RO (Anexo II do Edital nº 25/2026 e LC Municipal nº 391/2010).
"@

if ($text -match $pattern) {
    Write-Host "MATCH ENCONTRADO!" -ForegroundColor Green
    $text = [regex]::Replace($text, $pattern, $newObj)
    [System.IO.File]::WriteAllText($filePath, $text, [System.Text.Encoding]::UTF8)
    Write-Host "Arquivo salvo com sucesso!" -ForegroundColor Green
} else {
    Write-Host "NÃO MATCHEOU!" -ForegroundColor Red
}
