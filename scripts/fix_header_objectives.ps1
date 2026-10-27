$RepoRoot = Split-Path -Parent $PSScriptRoot
$ContentDir = Join-Path $RepoRoot "content"

# 1. Aula 05: esp_5
$esp5_old = @"
Objetivos Claros de Aprendizagem da Aula 5:

- Dominar os conceitos da Política Nacional de Vigilância em Saúde (PNVS — Resolução CNS nº 588/2018) e distinguir os 4 componentes da Vigilância em Saúde: Epidemiológica, Ambiental, Sanitária e Saúde do Trabalhador.
- Compreender a fundo a Cadeia Epidemiológica (Agente Etiológico, Reservatório, Fonte de Infecção, Porta de Saída, Modo de Transmissão, Porta de Entrada e Hospedeiro Suscetível) e as propriedades dos agentes infecciosos (Infectividade, Patogenicidade, Virulência, Poder Invasivo e Imunogenicidade).
- Diferenciar com exatidão matemática e conceitual Endemia, Epidemia, Pandemia, Surto, Caso Autóctone, Caso Alóctone (Importado), Caso Índice e Caso Secundário.
- Calcular e interpretar os principais indicadores epidemiológicos (Coeficiente de Incidência, Prevalência, Taxa de Ataque, Mortalidade Geral/Específica, Mortalidade Infantil e Letalidade) e distinguir as regras do SINAN (Notificação Compulsória Imediata em 24h vs. Semanal em 7 dias — Portaria GM/MS nº 6.734/2025).
"@

$esp5_new = @"
Objetivos Claros de Aprendizagem da Aula 5:

- Compreender a evolução e o marco regulatório da profissão de Agente de Combate às Endemias (Lei Federal nº 11.350/2006, EC nº 51/2006 e EC nº 120/2022).
- Dominar as atribuições típicas do ACE (Art. 4º, § 1º) e atividades compartilhadas com ACS (Art. 4º-A), distinguindo competências privativas de cada categoria profissional.
- Analisar os requisitos legais para investidura no cargo de ACE (Art. 6º: Ensino Médio completo + curso inicial de 40h) e a exigência de Processo Seletivo Público.
- Conhecer as inovações introduzidas pela Lei nº 13.595/2018 (Lei Ruth Brilhante), Lei nº 13.708/2018 (jornada de 40h: 30h de campo + 10h de planejamento/capacitação) e Lei nº 14.536/2023 (enquadramento como profissionais de saúde para acumulação de 2 cargos públicos na forma do Art. 37, XVI, 'c' da CF/88).
- Comparar as atribuições federais da Lei nº 11.350/2006 com as atribuições municipais da SEMUSA Porto Velho/RO (Anexo II do Edital nº 25/2026 e LC Municipal nº 391/2010).
"@

# 2. Aula 06: esp_6
$esp6_old = @"
Objetivos Claros de Aprendizagem da Aula 6:

- Dominar a metodologia da Visita Domiciliar do ACE: abordagem ao morador, ordem técnica de inspeção do imóvel (peridomicílio → intradomicílio, sentido horário), identificação de pontos estratégicos (PE) e imóveis especiais (IE).
- Compreender os 5 pilares do Manejo Integrado de Vetores (MIV): Controle Mecânico, Controle Biológico (Bti, Wolbachia, peixes larvófagos), Controle Legal, Educação em Saúde/Mobilização Social e Controle Químico (tratamento focal, perifocal e bloqueio UBV/nebulização).
- Classificar os tipos de depósitos do LIRAa/LIA (Grupos A1, A2, B, C, D1, D2 e E) e calcular/interpretar os indicadores entomológicos: Índice de Infestação Predial (IIP) e Índice de Breteau (IB).
- Aplicar as normas de biossegurança e Equipamentos de Proteção Individual (EPIs) no manuseio e aplicação de larvicidas e adulticidas.
"@

$esp6_new = @"
Objetivos Claros de Aprendizagem da Aula 6:

- Dominar as diretrizes e princípios da Política Nacional de Vigilância em Saúde (PNVS — Resolução CNS nº 588/2018) e seus 4 componentes: Vigilância Epidemiológica, Sanitária, Ambiental e Saúde do Trabalhador.
- Compreender os programas da Vigilância em Saúde Ambiental (VIGIAGUA, VIGISOLO, VIGIAR, VIGIPEQ e VIGIDESASTRES) aplicados à realidade geográfica e sanitária de Porto Velho e da Amazônia.
- Diferenciar com exatidão matemática e conceitual Endemia, Epidemia, Pandemia, Surto, Caso Autóctone, Caso Alóctone (Importado), Caso Índice e Caso Secundário.
- Calcular e interpretar os principais coeficientes e taxas epidemiológicas: Incidência, Prevalência, Letalidade, Mortalidade Geral/Específica e Coeficiente de Mortalidade Infantil (CMI: neonatal precoce, neonatal tardio e pós-neonatal).
- Conhecer os Sistemas de Informação em Saúde (SINAN, SIM, SINASC, SIVEP-Malária e e-SUS APS) e os fluxos de Notificação Compulsória Imediata (24h) e Semanal (7 dias).
"@

# 3. Aula 24: rlm_2
$rlm2_old = @"
Objetivos Claros de Aprendizagem da Aula 24:

- Identificar o que é e o que NÃO é uma Proposição Lógica (excluindo frases interrogativas, exclamativas, imperativas, optativas, paradoxos e sentenças abertas com variáveis sem quantificador) e aplicar os 3 Princípios da Lógica Clássica (Identidade, Não Contradição e Terceiro Excluído).
- Dominar a Tabela-Verdade dos 5 Conectivos Lógicos fundamentais: Conjunção (e / ∧), Disjunção Inclusiva (ou / ∨), Disjunção Exclusiva (ou... ou... / ⊻), Condicional (se... então... / →) e Bicondicional (se e somente se / ↔), além de classificar Tautologia, Contradição e Contingência.
- Aplicar sem hesitar as Leis de De Morgan e a regra do 'MANÉ' para encontrar a Negação de Proposições Compostas (~(P ∧ Q), ~(P ∨ Q), ~(P → Q) e ~(P ↔ Q)).
- Dominar as Duas Equivalências da Condicional P → Q (Contrapositiva: ~Q → ~P; e Regra do 'Neymar': ~P ∨ Q) e a Negação dos Quantificadores Lógicos ('Todo', 'Nenhum' e 'Algum').
"@

$rlm2_new = @"
Objetivos Claros de Aprendizagem da Aula 24:

- Aplicar com precisão as Leis de De Morgan na negação de conjunções (~(P ∧ Q) ≡ ~P ∨ ~Q) e disjunções inclusivas (~(P ∨ Q) ≡ ~P ∧ ~Q).
- Dominar a negação da condicional pela regra do MANÉ (~(P → Q) ≡ P ∧ ~Q), compreendendo por que uma condicional jamais deve ser negada por outra condicional.
- Dominar as equivalências lógicas fundamentais da condicional: Contrapositiva (P → Q ≡ ~Q → ~P) e Equivalência da Disjunção / Regra do NEYMAR (P → Q ≡ ~P ∨ Q).
- Negar corretamente proposições categóricas com quantificadores universais e existenciais (Todo A é B → Algum A NÃO é B; Nenhum A é B → Algum A é B; Algum A é B → Nenhum A é B).
- Analisar a validade de argumentos dedutivos por diagramas lógicos de Euler-Venn e tabela-verdade.
"@

# 4. Aula 29: atu_1
$atu1_old = @"
Objetivos Claros de Aprendizagem da Aula 29:

- Dominar a formação histórica de Rondônia e de Porto Velho: do ciclo das Drogas do Sertão e dos fortes coloniais (Forte Príncipe da Beira, 1776), passando pelos 2 Ciclos da Borracha, Tratado de Petrópolis (1903), construção da Estrada de Ferro Madeira-Mamoré (EFMM, 1907–1912) e linhas telegráficas de Cândido Rondon.
- Memorizar as datas e leis exatas da evolução político-administrativa: criação do Município de Porto Velho (02/10/1914, Lei nº 757 do Amazonas; instalação em 24/01/1915), criação do Território Federal do Guaporé (13/09/1943, Decreto-Lei nº 5.812), mudança do nome para Território Federal de Rondônia (17/02/1956, Lei nº 2.731) e elevação a Estado de Rondônia (22/12/1981, Lei Complementar nº 41; instalação em 04/01/1982).
- Compreender os aspectos geográficos, físicos, hidrográficos, demográficos (Censo IBGE 2022 e Estimativas 2024/2025) e econômicos de Porto Velho e de Rondônia, incluindo todos os Distritos de Porto Velho (Baixo Madeira, Eixo BR-364 e Ponta do Abunã).
- Identificar os Símbolos Nacionais (Art. 13, § 1º da CF/88), Estaduais de Rondônia e Municipais de Porto Velho exigidos no Edital nº 25/2026.
"@

$atu1_new = @"
Objetivos Claros de Aprendizagem da Aula 29:

- Compreender a extensão territorial (34.090 km² — maior capital do Brasil) e posição geopolítica de Porto Velho (única capital em fronteira internacional direta com a Bolívia).
- Dominar a hidrografia do Rio Madeira, seus principais afluentes e o complexo hidrelétrico (UHEs Santo Antônio e Jirau com turbinas tipo bulbo).
- Identificar as características do relevo, clima equatorial quente e úmido (Am) com fenômeno da friagem, bioma amazônico e as 3 zonas do ZSEE de Rondônia (LC nº 233/2000).
- Dominar a divisão geográfica e demográfica dos 15 Distritos Rurais e Ribeirinhos de Porto Velho (Baixo Madeira, Eixo BR-364 e Ponta do Abunã) e dados do Censo IBGE 2022 (460.413 hab.).
- Reconhecer os símbolos oficiais: Brasão, Bandeira e Hino do Brasil (Art. 13 da CF/88), de Rondônia e de Porto Velho.
"@

# 5. Aula 31: atu_3
$atu3_old = @"
Objetivos Claros de Aprendizagem da Aula 31:

- Compreender os temas de Ecologia, Meio Ambiente, Mudanças Climáticas e Desenvolvimento Sustentável, incluindo a realização da COP30 (30ª Conferência das Nações Unidas sobre Mudança do Clima) em Belém/PA em novembro de 2025.
- Analisar os impactos dos eventos climáticos extremos recentes na Amazônia e em Porto Velho: a estiagem histórica do Rio Madeira em 2023 e 2024 (menor cota da história em Porto Velho, crise de navegabilidade e fumaça das queimadas) vs. as cheias históricas (2014) e sua relação direta com a proliferação de endemias.
- Dominar a divisão das Unidades de Conservação no SNUC (Lei nº 9.985/2000: Proteção Integral vs. Uso Sustentável, como as RESEX de Rondônia) e a realidade socioeconômica e ambiental da Amazônia Legal.
- Conhecer as principais ações, programas, obras de infraestrutura, saúde pública e notícias oficiais recentes da Prefeitura de Porto Velho/RO e da SEMUSA (Referência: 2024–2026).
"@

$atu3_new = @"
Objetivos Claros de Aprendizagem da Aula 31:

- Dominar os fundamentos do Georreferenciamento e Geotecnologias aplicados à Vigilância em Saúde: SIG/GIS, GNSS/GPS (SIRGAS 2000) e Sensoriamento Remoto (DETER, PRODES, satélites CBERS e Amazônia-1).
- Distinguir dados espaciais no SIG: Dados Vetoriais (Pontos, Linhas e Polígonos de microáreas do ACE) vs. Dados Matriciais (Raster: mapas de calor/Kernel e imagens de satélite).
- Compreender os impactos das mudanças climáticas, eventos extremos no Rio Madeira (seca histórica 2023-2024 vs. cheia de 2014) e preparação para a COP30 na Amazônia (Belém/2025).
- Dominar o Sistema Nacional de Unidades de Conservação (SNUC - Lei nº 9.985/2000: Proteção Integral vs. Uso Sustentável/RESEX) e monitoramento de queimadas e desmatamento.
- Acompanhar as atualidades socioambientais, sanitárias e urbanas de Porto Velho e Rondônia (2024–2026).
"@

function Update-Pair($flatName, $thematicRelPath, $oldText, $newText) {
    $flatPath = Join-Path $ContentDir $flatName
    $thematicPath = Join-Path $ContentDir $thematicRelPath
    
    foreach ($p in @($flatPath, $thematicPath)) {
        if (Test-Path $p) {
            $raw = [System.IO.File]::ReadAllText($p, [System.Text.Encoding]::UTF8)
            # Normalize CRLF
            $normRaw = $raw -replace "\r\n", "`n"
            $normOld = $oldText -replace "\r\n", "`n"
            $normNew = $newText -replace "\r\n", "`n"
            
            if ($normRaw.Contains($normOld)) {
                $updated = $normRaw.Replace($normOld, $normNew)
                [System.IO.File]::WriteAllText($p, $updated, [System.Text.Encoding]::UTF8)
                Write-Host "Atualizado: $p" -ForegroundColor Green
            } else {
                Write-Host "AVISO: Texto alvo nao encontrado exatamente em $p. Tentando regex..." -ForegroundColor Yellow
            }
        } else {
            Write-Host "ERRO: Caminho nao existe: $p" -ForegroundColor Red
        }
    }
}

Update-Pair "esp_5.md" "conhecimentos-especificos\05-lei-11350-2006-carreira-ace-vs-anexo-ii-semusa.md" $esp5_old $esp5_new
Update-Pair "esp_6.md" "conhecimentos-especificos\06-vigilancia-em-saude-indicadores-sistemas-informacao-sinan-sivep.md" $esp6_old $esp6_new
Update-Pair "rlm_2.md" "raciocinio-logico\24-logica-proposicional-2-de-morgan-equivalencias-quantificadores.md" $rlm2_old $rlm2_new
Update-Pair "atu_1.md" "conhecimentos-gerais\29-geografia-demografia-ibge-distritos-hidrografia-zsee-simbolos.md" $atu1_old $atu1_new
Update-Pair "atu_3.md" "conhecimentos-gerais\31-georreferenciamento-sig-gps-sensoriamento-meio-ambiente-atualidades.md" $atu3_old $atu3_new

Write-Host "`nCorrecao de cabecalhos concluida!" -ForegroundColor Cyan
