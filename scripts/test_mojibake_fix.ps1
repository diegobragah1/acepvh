$s = "0. Nivelamento & PrÃ©-Requisitos Fundamentais: FonÃ©tica Zero, DÃgrafos, SÃlaba TÃ´nica e o MnemÃ´nico Rouxinol"
$bytes = [System.Text.Encoding]::GetEncoding("ISO-8859-1").GetBytes($s)
$fixed = [System.Text.Encoding]::UTF8.GetString($bytes)
Write-Host "Original: $s"
Write-Host "Fixed:    $fixed"
