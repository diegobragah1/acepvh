# atu_5 — Geotecnologias, Reconhecimento Geográfico, Método Wolbachia e Vacina Qdenga

### 1. Geotecnologias, Navegação por Satélite (GNSS) e o Datum SIRGAS 2000
No monitoramento ambiental e na vigilância entomológica contemporânea do ACE, as geotecnologias são fundamentais para o mapeamento da distribuição vetorial:
- **GNSS (*Global Navigation Satellite System*)**: termo universal que engloba as constelações mundiais de satélites artificiais de navegação, incluindo o **GPS** (norte-americano), o **GLONASS** (russo), o **Galileo** (europeu) e o **BeiDou** (chinês).
- **Datum Geodésico Oficial**: no Brasil, o referencial geodésico oficial adotado pelo IBGE (Decreto nº 5.334/2005) é o **SIRGAS 2000** (Sistema de Referência Geocêntrico para as Américas 2000). A configuração correta do datum nos aparelhos GNSS/tablets de campo do ACE assegura compatibilidade cartográfica com as bases de dados municipais e federais.

### 2. Modelos de Dados em SIG na Vigilância em Saúde: Vetorial vs Matricial (Raster)
Um Sistema de Informações Geográficas (SIG) organiza o espaço através de dois modelos principais:
1. **Modelo Vetorial**: representa feições geométricas discretas ligadas a uma tabela de atributos alfanuméricos:
   - **Ponto** ($x, y$): posição exata de focos de larvas, ovitrampas de monitoramento, Pontos Estratégicos (PE) e domicílios com casos notificados no SINAN;
   - **Linha**: arruamentos, rotas operacionais diárias do agente, valas de drenagem urbana e trechos de igarapés;
   - **Polígono**: áreas fechadas que delimitam quarteirões sanitários, bairros, setores censitários, estratos do LIRAa e zonas de raio de bloqueio químico (150 m ou 300 m).
2. **Modelo Matricial (Raster)**: grade regular de células (pixels) em que cada pixel armazena um valor quantitativo:
   - Imagens de satélite orbitais (Sentinel, Landsat) e ortofotos de alta resolução capturadas por **Drones (VANTs)**, ferramentas inovadoras adotadas pela vigilância em Porto Velho para fiscalizar caixas-d'água destampadas em lajes, calhas obstruídas e piscinas em imóveis desocupados ou de difícil acesso;
   - Mapas de densidade de Kernel ("mapas de calor" para identificação de *clusters* de transmissão de arboviroses).

### 3. Normas Técnicas de Campo do Reconhecimento Geográfico (RG) pelo ACE
O Reconhecimento Geográfico (RG) é a atividade cartográfica prioritária e contínua do ACE, normatizada pelo Ministério da Saúde:
- Elaboração e atualização contínua de croquis cadastrais dos quarteirões;
- **Numeração Padronizada dos Quarteirões**: a numeração deve sempre se iniciar no **vértice superior esquerdo (noroeste)** do mapa da localidade, progredindo a numeração sistematicamente no **sentido horário**;
- **Pontos Estratégicos (PE)**: imóveis que contêm depósitos volumosos de risco ou que recebem grande circulação de pessoas e materiais (borracharias, ferros-velhos, cemitérios, garagens de ônibus, cooperativas de reciclagem). Devem ser cadastrados e inspecionados com periodicidade obrigatória **quinzenal** pelo ACE.

### 4. Monitoramento Remoto na Amazônia: PRODES vs DETER (INPE)
- **PRODES**: taxa anual oficial consolidada de desmatamento por corte raso na Amazônia Legal (ano Prodes: agosto a julho); instrumento de alta precisão para planejamento de longo prazo;
- **DETER**: sistema diário de alertas de alteração de cobertura florestal com alta frequência temporal, destinado a subsidiar a fiscalização rápida em campo pelos órgãos de proteção ambiental (IBAMA e SEDAM/RO).

### 5. Inovação Biotecnológica: O Método Wolbachia (Fiocruz / WMP)
- **Mecanismo Biológico**: mosquitos *Aedes aegypti* recebem a bactéria intracelular natural *Wolbachia pipientis* (presente em 60% dos insetos na natureza, mas ausente no *Aedes* selvagem). Ao colonizar as células do inseto, a bactéria compete por lipídios e nutrientes essenciais com os vírus da Dengue, Zika, Chikungunya e Febre Amarela, bloqueando a replicação viral no organismo do mosquito.
- **Herança Materna e Incompatibilidade Citoplasmática**: fêmeas portadoras de Wolbachia transmitem a bactéria para 100% de seus descendentes. Quando machos com Wolbachia cruzam com fêmeas selvagens (sem Wolbachia), os ovos resultantes tornam-se inférteis.
- **Biossegurança**: o método **NÃO é transgênico** (não há alteração no DNA do mosquito) e a bactéria não infecta humanos nem animais vertebrados, mantendo-se de forma autossustentável no ecossistema local.

### 6. Vacina Tetravalente contra a Dengue: Qdenga (TAK-003) no SUS
- **Composição e Esquema**: vacina tetravalente com vírus vivo atenuado (sorotipos DENV-1, 2, 3 e 4) incorporada pela CONITEC ao SUS em dezembro de 2023. É administrada por via subcutânea em **2 doses**, com intervalo estrito de **3 meses (90 dias)**.
- **Público Prioritário no SUS**: crianças e adolescentes de 10 a 14 anos em municípios com alta carga de transmissão viral.
- **Contraindicações Absolutas**: gestantes, lactantes (mulheres que amamentam), indivíduos com imunodeficiência congênita ou adquirida e histórico de hipersensibilidade grave a componentes da fórmula.

## Resumo de revisão

SIRGAS 2000 é o datum oficial do Brasil (IBGE). Modelo Vetorial: Ponto (foco), Linha (rua), Polígono (quarteirão). No RG, quarteirões numeram-se do vértice superior esquerdo no sentido horário; Pontos Estratégicos têm visita quinzenal. Wolbachia não é transgênico e bloqueia vírus no mosquito. Qdenga tem 2 doses (intervalo 3 meses) e contraindica gestantes.

| Inovação / Geotecnologia | Definição e Princípio | Aplicação Prática no Trabalho do ACE | Ponto Crítico da Banca IBGP |
| --- | --- | --- | --- |
| **Datum SIRGAS 2000** | Sistema de Referência Geocêntrico para as Américas adotado pelo IBGE. | Coleta de coordenadas precisas com GNSS/tablets em vistorias de campo. | Não utilizar data descontinuados (Córrego Alegre ou SAD 69). |
| **SIG Vetorial vs Matricial** | **Vetorial**: Ponto, Linha, Polígono; **Matricial (Raster)**: grade de pixels. | **Ponto**: ovitrampa/PE; **Linha**: rua/rota; **Polígono**: quarteirão/bloqueio; **Raster**: drone/calor. | Não confundir pontos discretos com grades contínuas de pixels. |
| **Reconhecimento Geográfico (RG)** | Atualização de croquis cadastrais de quarteirões e imóveis. | Iniciar numeração no canto **superior esquerdo no sentido horário**; PEs inspecionados **quinzenalmente**. | Garantir padronização cartográfica nas equipes municipais. |
| **Método Wolbachia (Fiocruz)** | Bactéria natural intracelular *Wolbachia* no *Aedes aegypti*. | Bloqueia a transmissão dos vírus da Dengue, Zika e Chikungunya pelo vetor. | **Não é transgênico**; herdado por via materna; seguro para humanos. |
| **Vacina Qdenga (TAK-003)** | Vacina tetravalente com vírus vivo atenuado no SUS. | Esquema obrigatório de **2 doses com intervalo de 3 meses (90 dias)** para 10 a 14 anos. | **Contraindicada** para gestantes, lactantes e imunossuprimidos. |

## Exercícios autorais comentados

### Questão 1

[Autoral] No trabalho de Reconhecimento Geográfico (RG) desenvolvido pelo ACE na SEMUSA Porto Velho, utiliza-se a tecnologia GNSS para a coleta de coordenadas espaciais. De acordo com as normas do IBGE, o sistema geodésico de referência oficial do Brasil é o:

- A) SIRGAS 2000 (Sistema de Referência Geocêntrico para as Américas 2000).
- B) Córrego Alegre de 1920.
- C) Datum de Greenwich de 1884.
- D) SAD 69 (South American Datum 1969), que substituiu definitivamente o SIRGAS 2000 em 2024.

**Gabarito: A.** Gabarito: A. O SIRGAS 2000 é o datum oficial do Brasil desde 2005 (Decreto nº 5.334/2005 e Resolução IBGE nº 1/2005). Erro da B e D: Córrego Alegre e SAD 69 são data legados já descontinuados como padrão oficial; erro da C: meridiano de Greenwich é referência de longitude, não datum geodésico geocêntrico brasileiro.

### Questão 2

[Autoral] Em um Sistema de Informações Geográficas (SIG) utilizado pela vigilância ambiental para mapeamento de vetores, as feições espaciais correspondentes a um foco de mosquito, a uma vala de drenagem urbana e à área total de um quarteirão sanitário são modeladas no formato vetorial, respectivamente, por:

- A) Ponto, linha e polígono.
- B) Polígono, ponto e pixel.
- C) Pixel, matriz e tabela.
- D) Linha, ponto e voxel.

**Gabarito: A.** Gabarito: A. No modelo vetorial de SIG: coordenadas pontuais (focos, ovitrampas, PEs) são Pontos; feições lineares unidimensionais (ruas, valas, rios, rotas) são Linhas; áreas bidimensionais fechadas (quarteirões, bairros, estratos) são Polígonos. Erro da B, C e D: invertem as primitivas ou misturam com o modelo matricial/raster (pixel).

### Questão 3

[Autoral] Durante a atualização do croquis de Reconhecimento Geográfico (RG) de uma localidade, as normas técnicas do Ministério da Saúde orientam que a numeração dos quarteirões deve ser iniciada:

- A) No canto superior esquerdo (noroeste) do croquis, progredindo a numeração sistematicamente no sentido horário.
- B) No centro exato do mapa, em espiral no sentido anti-horário.
- C) Em ordem aleatória determinada por sorteio diário entre os moradores.
- D) De baixo para cima, numerando apenas os quarteirões que possuem comércios.

**Gabarito: A.** Gabarito: A. Pelo manual de Reconhecimento Geográfico do Ministério da Saúde, a numeração dos quarteirões inicia-se no vértice superior esquerdo (noroeste) do mapa/croquis e avança no sentido horário, garantindo padronização cadastral. Erro da B, C e D: contrariam a norma técnica oficial de cartografia epidemiológica.

### Questão 4

[Autoral] Em relação à inovação biotecnológica do Método Wolbachia aplicada no controle das arboviroses urbanas (Dengue, Zika e Chikungunya), assinale a afirmativa CORRETA:

- A) Os mosquitos Aedes aegypti são inoculados com a bactéria intracelular natural Wolbachia pipientis, que reduz a replicação viral no vetor, sendo o método autossustentável por herança materna e não transgênico.
- B) Trata-se de um mosquito transgênico modificado com DNA de peixes árticos para esterilizar fêmeas de abelhas nativas.
- C) A bactéria Wolbachia é altamente infecciosa e fatal para seres humanos quando transmitida pela picada do mosquito.
- D) O método consiste em aplicar antibióticos clorados na água das torneiras domésticas de toda a cidade.

**Gabarito: A.** Gabarito: A. O Método Wolbachia (Fiocruz/WMP) não envolve transgenia: a bactéria natural Wolbachia impede a replicação dos vírus no Aedes e é transmitida às novas gerações de mosquitos pelas fêmeas, sem risco a humanos. Erro da B: não é transgênico; erro da C: Wolbachia não infecta humanos nem vertebrados; erro da D: não utiliza antibióticos em redes de água.

### Questão 5

[Autoral] Sobre a vacina Qdenga (TAK-003) incorporada ao Sistema Único de Saúde (SUS) contra a Dengue, é correto afirmar:

- A) É uma vacina tetravalente com vírus vivo atenuado, administrada em esquema de 2 doses com intervalo de 3 meses, sendo contraindicada para gestantes e pessoas imunossuprimidas.
- B) É uma vacina de dose única obrigatória para recém-nascidos no primeiro dia de vida.
- C) É uma vacina intramuscular formulada exclusivamente contra o vírus da febre aftosa bovina.
- D) A vacina pode ser administrada livremente em mulheres grávidas em qualquer estágio gestacional por não conter vírus atenuado.

**Gabarito: A.** Gabarito: A. A vacina Qdenga protege contra os 4 sorotipos da dengue (tetravalente atenuada), aplicada em 2 doses subcutâneas com intervalo de 3 meses (90 dias); por ser de vírus vivo atenuado, é formalmente contraindicada para gestantes, lactantes e imunossuprimidos. Erro da B: exige 2 doses com intervalo de 3 meses; erro da C: combate a dengue humana; erro da D: contraindicada em gestantes.

## Flashcards

**Qual o datum geodésico oficial do Brasil e sua importância no trabalho do ACE?**

O SIRGAS 2000 (Sistema de Referência Geocêntrico para as Américas 2000), adotado oficialmente pelo IBGE para compatibilizar dados cartográficos e de geolocalização no SUS.

**Qual a norma de numeração de quarteirões no Reconhecimento Geográfico (RG) do Ministério da Saúde?**

A numeração inicia-se no canto superior esquerdo (noroeste) do mapa e progride sequencialmente no sentido horário.

**Qual é o esquema posológico da vacina Qdenga no SUS e sua principal contraindicação clínica?**

Esquema de 2 doses com intervalo de 3 meses (90 dias) por via subcutânea; é contraindicada para gestantes, lactantes e indivíduos com imunodeficiência grave por conter vírus atenuado.

## Referências de consulta

- [Fiocruz / World Mosquito Program — Método Wolbachia](https://portal.fiocruz.br/noticia/metodo-wolbachia-estrategia-inovadora-no-combate-arboviroses) — Bactéria Wolbachia, transmissão materna, bloqueio viral e segurança ambiental.
- [Ministério da Saúde / CONITEC — Incorporação da Vacina Qdenga no SUS](https://www.gov.br/saude/pt-br/assuntos/noticias/2023/dezembro/ministerio-da-saude-incorpora-vacina-contra-a-dengue-ao-sus) — Esquema vacinal de 2 doses com intervalo de 3 meses e contraindicações.
- [INPE — Monitoramento de Desmatamento na Amazônia (PRODES e DETER)](https://www.gov.br/inpe/pt-br/acesso-a-informacao/perguntas-frequentes/principais-produtos-e-servicos-do-inpe/monitoramento-do-territorio-florestas/como-se-monitora-o-desmatamento) — Diferenças metodológicas entre taxa anual consolidada (PRODES) e alertas (DETER).

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
