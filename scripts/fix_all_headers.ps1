$RepoRoot = Split-Path -Parent $PSScriptRoot
$ContentDir = Join-Path $RepoRoot "content"

$items = @(
    @{
        num = "5"
        flat = "esp_5.md"
        thematic = "conhecimentos-especificos\05-lei-11350-2006-carreira-ace-vs-anexo-ii-semusa.md"
        pattern = '(?s)Objetivos Claros de Aprendizagem da Aula 5:\s*\r?\n.*?(?=\r?\n#### 2\.)'
        replacement = @"
Objetivos Claros de Aprendizagem da Aula 5:

- Compreender a evolução e o marco regulatório da profissão de Agente de Combate às Endemias (Lei Federal nº 11.350/2006, EC nº 51/2006 e EC nº 120/2022).
- Dominar as atribuições típicas do ACE (Art. 4º, § 1º) e atividades compartilhadas com ACS (Art. 4º-A), distinguindo competências privativas de cada categoria profissional.
- Analisar os requisitos legais para investidura no cargo de ACE (Art. 6º: Ensino Médio completo + curso inicial de 40h) e a exigência de Processo Seletivo Público.
- Conhecer as inovações introduzidas pela Lei nº 13.595/2018 (Lei Ruth Brilhante), Lei nº 13.708/2018 (jornada de 40h: 30h de campo + 10h de planejamento/capacitação) e Lei nº 14.536/2023 (enquadramento como profissionais de saúde para acumulação de 2 cargos públicos na forma do Art. 37, XVI, 'c' da CF/88).
- Comparar as atribuições federais da Lei nº 11.350/2006 com as atribuições municipais da SEMUSA Porto Velho/RO (Anexo II do Edital nº 25/2026 e LC Municipal nº 391/2010).
"@
    },
    @{
        num = "6"
        flat = "esp_6.md"
        thematic = "conhecimentos-especificos\06-vigilancia-em-saude-indicadores-sistemas-informacao-sinan-sivep.md"
        pattern = '(?s)Objetivos Claros de Aprendizagem da Aula 6:\s*\r?\n.*?(?=\r?\n#### 2\.)'
        replacement = @"
Objetivos Claros de Aprendizagem da Aula 6:

- Dominar as diretrizes e princípios da Política Nacional de Vigilância em Saúde (PNVS — Resolução CNS nº 588/2018) e seus 4 componentes: Vigilância Epidemiológica, Sanitária, Ambiental e Saúde do Trabalhador.
- Compreender os programas da Vigilância em Saúde Ambiental (VIGIAGUA, VIGISOLO, VIGIAR, VIGIPEQ e VIGIDESASTRES) aplicados à realidade geográfica e sanitária de Porto Velho e da Amazônia.
- Diferenciar com exatidão matemática e conceitual Endemia, Epidemia, Pandemia, Surto, Caso Autóctone, Caso Alóctone (Importado), Caso Índice e Caso Secundário.
- Calcular e interpretar os principais coeficientes e taxas epidemiológicas: Incidência, Prevalência, Letalidade, Mortalidade Geral/Específica e Coeficiente de Mortalidade Infantil (CMI: neonatal precoce, neonatal tardio e pós-neonatal).
- Conhecer os Sistemas de Informação em Saúde (SINAN, SIM, SINASC, SIVEP-Malária e e-SUS APS) e os fluxos de Notificação Compulsória Imediata (24h) e Semanal (7 dias).
"@
    },
    @{
        num = "24"
        flat = "rlm_2.md"
        thematic = "raciocinio-logico\24-logica-proposicional-2-de-morgan-equivalencias-quantificadores-argumentacao.md"
        pattern = '(?s)Objetivos Claros de Aprendizagem da Aula 24:\s*\r?\n.*?(?=\r?\n#### 2\.)'
        replacement = @"
Objetivos Claros de Aprendizagem da Aula 24:

- Aplicar com precisão as Leis de De Morgan na negação de conjunções (~(P ∧ Q) ≡ ~P ∨ ~Q) e disjunções inclusivas (~(P ∨ Q) ≡ ~P ∧ ~Q).
- Dominar a negação da condicional pela regra do MANÉ (~(P → Q) ≡ P ∧ ~Q), compreendendo por que uma condicional jamais deve ser negada por outra condicional.
- Dominar as equivalências lógicas fundamentais da condicional: Contrapositiva (P → Q ≡ ~Q → ~P) e Equivalência da Disjunção / Regra do NEYMAR (P → Q ≡ ~P ∨ Q).
- Negar corretamente proposições categóricas com quantificadores universais e existenciais (Todo A é B → Algum A NÃO é B; Nenhum A é B → Algum A é B; Algum A é B → Nenhum A é B).
- Analisar a validade de argumentos dedutivos por diagramas lógicos de Euler-Venn e regras de inferência lógica.
"@
    },
    @{
        num = "28"
        flat = "rlm_6.md"
        thematic = "raciocinio-logico\28-geometria-plana-espacial-unidades-medida-casa-dos-pombos.md"
        pattern = '(?s)Objetivos Claros de Aprendizagem da Aula 28:\s*\r?\n.*?(?=\r?\n#### 2\.)'
        replacement = @"
Objetivos Claros de Aprendizagem da Aula 28:

- Calcular áreas e perímetros de figuras planas fundamentais (quadrados, retângulos, triângulos, trapézios e círculos), aplicando o Teorema de Pitágoras e ternos pitagóricos clássicos a plantas de quarteirões e imóveis.
- Dominar o cálculo de volume e capacidade de reservatórios e depósitos de água (paralelepípedos retângulos, prismas, cilindros e calhas), essenciais para o trabalho de campo do ACE e dosagem de larvicidas.
- Converter com total segurança unidades do Sistema Métrico Decimal: comprimento (km, m, cm, mm), área (m², cm², hectares), volume e capacidade (1 m³ = 1.000 L; 1 dm³ = 1 L; 1 cm³ = 1 mL) e massa (kg, g, mg).
- Compreender e aplicar o Princípio da Casa dos Pombos (Princípio das Gavetas de Dirichlet) utilizando o raciocínio do pior caso ('azarado') e a fórmula N = g × (k - 1) + 1 para garantir ocorrências idênticas.
"@
    },
    @{
        num = "29"
        flat = "atu_1.md"
        thematic = "conhecimentos-gerais\29-geografia-demografia-ibge-distritos-hidrografia-simbolos-porto-velho-ro.md"
        pattern = '(?s)Objetivos Claros de Aprendizagem da Aula 29:\s*\r?\n.*?(?=\r?\n#### 2\.)'
        replacement = @"
Objetivos Claros de Aprendizagem da Aula 29:

- Compreender a extensão territorial (34.090 km² — maior capital do Brasil) e posição geopolítica de Porto Velho (única capital em fronteira internacional direta com a Bolívia).
- Dominar a hidrografia do Rio Madeira, seus principais afluentes e o complexo hidrelétrico (UHEs Santo Antônio e Jirau com turbinas tipo bulbo).
- Identificar as características do relevo, clima equatorial quente e úmido (Am) com fenômeno da friagem, bioma amazônico e as 3 zonas do ZSEE de Rondônia (LC nº 233/2000).
- Dominar a divisão geográfica e demográfica dos 15 Distritos Rurais e Ribeirinhos de Porto Velho (Baixo Madeira, Eixo BR-364 e Ponta do Abunã) e dados do Censo IBGE 2022 (460.413 hab.).
- Reconhecer os símbolos oficiais: Brasão, Bandeira e Hino do Brasil (Art. 13 da CF/88), de Rondônia e de Porto Velho.
"@
    },
    @{
        num = "31"
        flat = "atu_3.md"
        thematic = "conhecimentos-gerais\31-georreferenciamento-sig-gps-sensoriamento-remoto-atualidades-2025-2026.md"
        pattern = '(?s)Objetivos Claros de Aprendizagem da Aula 31:\s*\r?\n.*?(?=\r?\n#### 2\.)'
        replacement = @"
Objetivos Claros de Aprendizagem da Aula 31:

- Dominar os fundamentos do Georreferenciamento e Geotecnologias aplicados à Vigilância em Saúde: SIG/GIS, GNSS/GPS (sistema geodésico oficial SIRGAS 2000) e Sensoriamento Remoto (DETER, PRODES, satélites CBERS e Amazônia-1).
- Distinguir dados espaciais no SIG: Dados Vetoriais (Pontos de focos/casos, Linhas de ruas/rios e Polígonos de microáreas do ACE) vs. Dados Matriciais (Raster: mapas de calor/Kernel e imagens de satélite).
- Compreender os impactos das mudanças climáticas, eventos extremos no Rio Madeira (seca histórica 2023-2024 vs. cheia de 2014) e preparação para a COP30 na Amazônia (Belém/2025).
- Dominar o Sistema Nacional de Unidades de Conservação (SNUC - Lei nº 9.985/2000: Proteção Integral vs. Uso Sustentável/RESEX) e monitoramento de queimadas e desmatamento.
- Acompanhar as atualidades socioambientais, sanitárias e urbanas de Porto Velho e Rondônia (2024–2026).
"@
    }
)

foreach ($item in $items) {
    Write-Host "`nProcessando Aula $($item.num)..." -ForegroundColor Cyan
    $flatPath = Join-Path $ContentDir $item.flat
    $thematicPath = Join-Path $ContentDir $item.thematic
    
    foreach ($p in @($flatPath, $thematicPath)) {
        if (Test-Path $p) {
            $txt = [System.IO.File]::ReadAllText($p, [System.Text.Encoding]::UTF8)
            if ($txt -match $item.pattern) {
                $txt = [regex]::Replace($txt, $item.pattern, $item.replacement)
                [System.IO.File]::WriteAllText($p, $txt, [System.Text.Encoding]::UTF8)
                Write-Host "  [OK] Atualizado: $p" -ForegroundColor Green
            } else {
                Write-Host "  [AVISO] Padrao regex nao encontrado em: $p" -ForegroundColor Yellow
            }
        } else {
            Write-Host "  [ERRO] Arquivo inexistente: $p" -ForegroundColor Red
        }
    }
}

Write-Host "`nTodos os cabecalhos processados!" -ForegroundColor Green
