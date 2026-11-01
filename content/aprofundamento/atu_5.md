# atu_5 — Geotecnologias e avaliação de notícias científicas

## Coordenada não é análise territorial completa
GNSS designa sistemas de navegação por satélite; GPS é um deles. Uma posição precisa ser acompanhada de sistema de referência e qualidade de medição para ser utilizada corretamente. Um mapa de pontos de visitas mostra localização, mas não explica sozinho por que existem concentrações de risco.

Um SIG combina dados espaciais e atributos para consulta e análise. Representações vetoriais usam pontos, linhas e polígonos; representações matriciais usam uma grade de células. Um ponto pode representar imóvel, uma linha pode representar trecho de rota e um polígono pode delimitar área de atuação. O significado vem do dado e de sua legenda, não apenas da forma gráfica.

## Caso de mapa enganoso
Dois bairros apresentam 20 registros cada. No primeiro, foram realizadas 100 inspeções; no segundo, 400. Um mapa de contagens pode mostrar igualdade, mas as proporções são 20% e 5%. A interpretação precisa considerar o denominador e a cobertura. Cor intensa não equivale automaticamente a maior risco individual.

## Sensoriamento remoto: alerta e taxa
O PRODES e o DETER têm objetivos e métodos distintos. No monitoramento da Amazônia, o PRODES produz a taxa anual de desmatamento por corte raso, enquanto o DETER fornece alertas para apoiar fiscalização. Cobertura de nuvens e oportunidade de detecção influenciam os registros. Um alerta detectado em determinado mês não é necessariamente um evento que começou naquele mês.

## Ciência, inovação e evidência
Ao ler notícia sobre nova tecnologia, diferencie teste em laboratório, estudo de campo, registro regulatório, incorporação a uma política e uso efetivo. Esses estágios não são equivalentes. Uma redução observada em um estudo não garante o mesmo resultado em todo território sem considerar implementação e contexto.

## Aplicação multitemática
Economia, educação, segurança e saúde também usam indicadores e pesquisas. Confira quem produziu o dado, qual população foi observado, em que período e com qual método. Resultado de amostra não é contagem censitária, e correlação entre duas curvas não demonstra, sozinha, causalidade. A prudência analítica permite avaliar notícias sem rejeitar nem aceitar toda inovação por entusiasmo.

## Georreferenciamento aplicado diretamente ao Reconhecimento Geográfico (RG) do ACE
O item 5 do edital destaca expressamente **georreferenciamento** e **inovações tecnológicas e científicas**. Na rotina operacional do ACE, o georreferenciamento integra-se ao **Reconhecimento Geográfico (RG)**:
- **Primitivas vetoriais no SIG da vigilância:** **Ponto** (coordenada $x, y$ de uma ovitrampa, de um Ponto Estratégico, de um foco positivo ou de um caso confirmado); **Linha** (eixo de rua, igarapé, vala de drenagem ou rota percorrida pelo agente); **Polígono** (delimitação fechada de um quarteirão, estrato do LIRAa, área de raio de bloqueio de 150m/300m, bairro ou distrito sanitário).
- **Dado Matricial (Raster):** imagens orbitais de satélite, ortofotos de drones (VANTs usados para identificar caixas d'água destampadas ou piscinas abandonadas em imóveis fechados) e mapas de densidade de Kernel ("mapas de calor").
- **Inovações biotecnológicas no controle vetorial:** método **Wolbachia** (mosquitos *Aedes aegypti* com a bactéria intracelular *Wolbachia pipientis*, que reduz a transmissão de Dengue, Zika e Chikungunya e se mantém na população local), **Estações Disseminadoras de Larvicida (EDLs)** (potes com tecido impregnado com larvicida piriproxifeno transportado pelas próprias fêmeas do mosquito a outros criadouros) e **armadilhas georreferenciadas (ovitrampas)**.

## Resumo de revisão

GPS integra GNSS; SIG analisa dados e atributos. Contagens precisam de denominador. PRODES mede taxa anual; DETER alerta fiscalização. Estudo, registro, incorporação e implementação são estágios diferentes.

| Conceito de Geotecnologia / Inovação | Definição Técnica | Aplicação Direta na Vigilância (ACE) | Contraste de Prova |
| --- | --- | --- | --- |
| **GNSS × GPS** | **GNSS**: categoria global de navegação por satélite; **GPS** (EUA), **GLONASS** (Rússia), **Galileo** (UE) e **BeiDou** (China) são constelações. | Coleta de coordenadas geográficas (latitude/longitude) de focos, armadilhas e imóveis no tablet/celular de campo. | GPS é um sistema específico pertencente ao conjunto GNSS; o datum oficial do Brasil (IBGE) é o **SIRGAS2000**. |
| **SIG Vetorial (Ponto, Linha, Polígono)** | Geometrias discretas associadas a tabela de atributos (banco de dados). | **Ponto**: ovitrampa/PE; **Linha**: rua/igarapé; **Polígono**: quarteirão/estrato LIRAa/raio de bloqueio. | Não confundir feição vetorial com grade matricial de pixels. |
| **SIG Matricial (Raster)** | Grade regular de células (pixels), onde cada célula guarda um valor (cor, altitude, temperatura ou índice). | Imagens de satélite, aerolevantamento por **drones (VANTs)** e mapas de calor (Kernel) de casos de arboviroses. | Quanto menor o tamanho do pixel no terreno, **maior** a resolução espacial. |
| **PRODES × DETER (INPE)** | **PRODES**: taxa anual consolidada de corte raso; **DETER**: alertas diários/rápidos para fiscalização. | Monitoramento ambiental da Amazônia e correlação de frentes de desmatamento com risco de malária e leishmaniose. | DETER não é taxa oficial anual; serve para orientar ações rápidas de fiscalização (IBAMA/órgãos estaduais). |
| **Wolbachia e EDLs (Inovações MS/Fiocruz)** | **Wolbachia**: bactéria simbiótica que bloqueia replicação de arbovírus no *Aedes*; **EDL**: estação disseminadora de larvicida. | Tecnologias complementares incorporadas pelo Ministério da Saúde em municípios prioritários. | Wolbachia **não** é modificação genética (transgênico) e é segura para humanos e animais. |

## Exercícios autorais comentados

### Questão 1

[Autoral] Qual comparação entre DETER e PRODES é adequada?

- A) São nomes de produtos idênticos.
- B) DETER fornece alertas; PRODES produz taxa anual no monitoramento correspondente.
- C) Todo alerta equivale à taxa mensal oficial.
- D) Nuvens nunca interferem na detecção.

**Gabarito: B.** Os produtos têm objetivos e métodos diferentes. O INPE alerta para não tratar os registros de alerta como taxa mensal de desmatamento.

### Questão 2

[Autoral] Dois bairros têm 20 registros, com 100 e 400 inspeções. Quais são as proporções?

- A) 20% e 5%.
- B) 20% e 20%.
- C) 5% e 20%.
- D) 100% e 400%.

**Gabarito: A.** 20/100=20%; 20/400=5%. A igualdade dos numeradores não implica igualdade de proporções; ainda se deve avaliar o que e como foi inspecionado.

### Questão 3

[Autoral] Em um Sistema de Informações Geográficas (SIG) utilizado pela Vigilância Ambiental de Porto Velho para atualizar o Reconhecimento Geográfico (RG), a posição exata de uma armadilha ovitrampa, o traçado de um igarapé urbano e a área delimitada de um quarteirão são representados no modelo vetorial, respectivamente, pelas primitivas geométricas:

- A) Ponto, linha e polígono.
- B) Polígono, ponto e pixel.
- C) Linha, matriz e tabela.
- D) Círculo, texto e áudio.

**Gabarito: A.** No modelo vetorial de um SIG, elementos sem área na escala de análise (uma ovitrampa ou foco puntual) são representados por pontos; feições lineares (ruas, rios, igarapés) por linhas; e áreas fechadas (quarteirões, bairros, estratos) por polígonos.

### Questão 4

[Autoral] Entre as inovações tecnológicas e científicas aplicadas ao controle das arboviroses no Brasil (Dengue, Zika e Chikungunya) com apoio do Ministério da Saúde e da Fiocruz, destaca-se o Método Wolbachia, que consiste em:

- A) Liberar mosquitos Aedes aegypti portadores da bactéria intracelular natural Wolbachia, que reduz a capacidade de transmissão desses vírus pelo vetor e se transmite às gerações seguintes de mosquitos.
- B) Pulverizar antibióticos hospitalares por avião sobre os rios da Amazônia.
- C) Substituir toda a água encanada da cidade por óleo mineral.
- D) Eliminar todas as espécies de abelhas e borboletas polinizadoras dos parques urbanos.

**Gabarito: A.** A Wolbachia é uma bactéria presente naturalmente em cerca de 60% dos insetos (mas não originalmente no Aedes aegypti); quando introduzida no Aedes em laboratório e liberada em campo, impede que os vírus de Dengue, Zika e Chikungunya se desenvolvam adequadamente no mosquito, sendo método seguro, autossustentável e não transgênico.

## Flashcards

**Todo ponto no mapa representa a mesma qualidade de informação?**

Não. Precisão, sistema de referência (datum SIRGAS2000), cobertura e definição do registro importam.

**Uma correlação demonstra causalidade?**

Não por si. É preciso investigar mecanismos, desenho do estudo e explicações alternativas.

**Como Ponto, Linha e Polígono são usados no SIG da Vigilância em Saúde?**

Ponto: foco/ovitrampa/PE; Linha: logradouro/igarapé/rota; Polígono: quarteirão/estrato LIRAa/bairro/distrito.

## Referências de consulta

- [INPE — monitoramento do desmatamento](https://www.gov.br/inpe/pt-br/acesso-a-informacao/perguntas-frequentes/principais-produtos-e-servicos-do-inpe/monitoramento-do-territorio-florestas/como-se-monitora-o-desmatamento) — Finalidades de PRODES e DETER.
- [INPE — DETER](https://www.gov.br/inpe/pt-br/area-conhecimento/unidade-amazonia/projetos-e-pesquisas/deter) — Diferença entre ocorrência e detecção; limitações de comparação e uso de alertas.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
