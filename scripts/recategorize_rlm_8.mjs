import fs from 'node:fs';
import path from 'node:path';

const publicJsonPath = path.resolve(process.cwd(), 'public/data/app_data.json');
const rootJsonPath = path.resolve(process.cwd(), 'data/app_data.json');
const publicJsPath = path.resolve(process.cwd(), 'public/data/app_data.js');
const rootJsPath = path.resolve(process.cwd(), 'data/app_data.js');
const backupPath = path.resolve(process.cwd(), 'scripts/backup_before_recategorize_rlm_8.json');

if (!fs.existsSync(backupPath)) {
  fs.copyFileSync(publicJsonPath, backupPath);
  console.log('Created backup at:', backupPath);
}

const rawData = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
const oldLessons = rawData.lessons;

const byId = Object.fromEntries(oldLessons.map(l => [l.id, l]));
const clone = obj => JSON.parse(JSON.stringify(obj));

// New Block 1.1 for rlm_1
const newBlock_RLM1_OperacoesPotRadDecimais = {
  title: 'Bloco 1.1 — Conjuntos Numéricos (ℕ, ℤ, ℚ, ℝ), Operações Fundamentais, Potenciação, Radiciação, Números Decimais e Valor Absoluto (Módulo)',
  sourceRef: 'Anexo IV — Raciocínio Lógico (Item 1: Conjuntos numéricos, operações, decimais e valor absoluto)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-amber-950/90 text-white border border-amber-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 1 de Raciocínio Lógico — Base Numérica e Operacional</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Conjuntos Numéricos ($\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$), Operações, Decimais e Valor Absoluto</h4>
    <p class="text-xs text-amber-100 mt-1">Dominar a hierarquia dos conjuntos numéricos, as propriedades das operações em $\\mathbb{N}$, as regras de potenciação/radiciação, a conversão de números decimais e o conceito de módulo (valor absoluto) garante acerto rápido nas primeiras questões de RLM da IBGP.</p>
  </div>

  <div class="overflow-x-auto">
    <table class="w-full text-left border-collapse text-xs border border-slate-300">
      <thead>
        <tr class="bg-slate-900 text-white">
          <th class="p-2.5 border border-slate-700">Conjunto / Tópico</th>
          <th class="p-2.5 border border-slate-700">Representação e Definição</th>
          <th class="p-2.5 border border-slate-700">Pegadinhas de Prova (IBGP)</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr class="bg-white">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">Naturais ($\\mathbb{N}$) e Propriedades</td>
          <td class="p-2.5 border border-slate-200">$\\mathbb{N} = \\{0, 1, 2, 3, 4, \\dots\\}$ e $\\mathbb{N}^* = \\{1, 2, 3, \\dots\\}$ (sem o zero).<br><strong>Propriedades da Adição e Multiplicação em $\\mathbb{N}$:</strong><br>• <strong>Fechamento:</strong> soma e produto de naturais são sempre naturais.<br>• <strong>Comutativa:</strong> $a+b = b+a$ e $a \\cdot b = b \\cdot a$.<br>• <strong>Associativa:</strong> $(a+b)+c = a+(b+c)$.<br>• <strong>Elemento Neutro:</strong> $0$ na adição ($a+0=a$) e $1$ na multiplicação ($a \\cdot 1 = a$).<br>• <strong>Distributiva:</strong> $a \\cdot (b + c) = a\\cdot b + a\\cdot c$.</td>
          <td class="p-2.5 border border-slate-200">A <strong>subtração</strong> e a <strong>divisão</strong> <u>NÃO</u> possuem fechamento em $\\mathbb{N}$ (ex.: $3 - 5 = -2 \\notin \\mathbb{N}$).</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">Inteiros ($\\mathbb{Z}$), Racionais ($\\mathbb{Q}$) e Reais ($\\mathbb{R}$)</td>
          <td class="p-2.5 border border-slate-200">• <strong>Inteiros ($\\mathbb{Z}$):</strong> $\\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$.<br>• <strong>Racionais ($\\mathbb{Q}$):</strong> todo número que pode ser escrito como fração $\\frac{a}{b}$ com $a \\in \\mathbb{Z}$ e $b \\in \\mathbb{Z}^*$. Inclui inteiros, decimais exatos e <strong>dízimas periódicas</strong>.<br>• <strong>Irracionais ($\\mathbb{I}$):</strong> decimais infinitos e não periódicos ($\\pi, \\sqrt{2}, \\sqrt{3}, e$).<br>• <strong>Reais ($\\mathbb{R}$):</strong> $\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{I}$, sendo $\\mathbb{Q} \\cap \\mathbb{I} = \\emptyset$.</td>
          <td class="p-2.5 border border-slate-200">Toda dízima periódica (ex.: $0,333\\dots = \\frac{3}{9} = \\frac{1}{3}$ ou $0,2727\\dots = \\frac{27}{99} = \\frac{3}{11}$) é um número <strong>RACIONAL ($\\mathbb{Q}$)</strong>, e não irracional!</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">Valor Absoluto (Módulo $|x|$)</td>
          <td class="p-2.5 border border-slate-200">Representa a <strong>distância</strong> do número $x$ até a origem ($0$) na reta real. Portanto, $|x| \\ge 0$ sempre:<br>• Se $x \\ge 0 \\Rightarrow |x| = x$ (ex.: $|7| = 7$).<br>• Se $x < 0 \\Rightarrow |x| = -x$ (ex.: $|-7| = 7$).</td>
          <td class="p-2.5 border border-slate-200">Cuidado com sinais fora do módulo: $-|-8| + |-3| = -8 + 3 = -5$.</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">Potenciação e Radiciação</td>
          <td class="p-2.5 border border-slate-200">• $a^m \\cdot a^n = a^{m+n}$ | $a^m : a^n = a^{m-n}$ | $(a^m)^n = a^{m \\cdot n}$.<br>• $a^0 = 1$ (para $a \\ne 0$) | $a^{-n} = \\left(\\frac{1}{a}\\right)^n$.<br>• Expoente fracionário: $a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$ ("quem está no sol vai para a sombra").</td>
          <td class="p-2.5 border border-slate-200">Diferença crítica: $(-3)^2 = (-3)\\cdot(-3) = +9$, mas $-3^2 = -(3\\cdot 3) = -9$ (sem parênteses, o sinal não é elevado!).</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Hierarquia dos Conjuntos:</strong> $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$ e $\\mathbb{Q} \\cap \\mathbb{I} = \\emptyset$.</li>
  <li><strong>Elemento Neutro em $\\mathbb{N}$:</strong> Adição = $0$; Multiplicação = $1$.</li>
  <li><strong>Fração Geratriz:</strong> $0,aaaa\\dots = \\frac{a}{9}$ | $0,abab\\dots = \\frac{ab}{99}$.</li>
  <li><strong>Valor Absoluto (Módulo):</strong> $|-a| = a$ (sempre não-negativo).</li>
  <li><strong>Potências:</strong> $(-2)^4 = +16$, enquanto $-2^4 = -16$; $8^{2/3} = \\sqrt[3]{8^2} = 2^2 = 4$.</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Conjuntos Numéricos e Valor Absoluto) Considere a expressão numérica E = |-12| - (-3)² + 0,444... × 9. O valor correto de E pertence a qual subconjunto numérico?',
      options: [
        'E = -17, pertencente a ℤ - ℕ.',
        'E = 7, pertencente ao conjunto dos números naturais (ℕ) e primos.',
        'E = 25, pertencente ao conjunto dos quadrados perfeitos em ℕ.',
        'E = 3,4, pertencente ao conjunto dos racionais não inteiros (ℚ - ℤ).',
      ],
      ans: 1,
      comment: 'Passo a passo: |-12| = 12; (-3)² = +9; 0,444... = 4/9, logo (4/9) × 9 = 4. Substituindo na expressão: E = 12 - 9 + 4 = 7. O número 7 é natural (ℕ) e primo.',
    },
    {
      q: '(IBGP — Propriedades nos Números Naturais) Na operação 18 × (10 + 5) = 18 × 10 + 18 × 5 = 180 + 90 = 270, utilizada por um ACE para calcular o total de imóveis inspecionados em 18 quarteirões, foi aplicada a propriedade:',
      options: [
        'Comutativa da adição.',
        'Associativa da multiplicação.',
        'Distributiva da multiplicação em relação à adição.',
        'Elemento neutro da multiplicação.',
      ],
      ans: 2,
      comment: 'A igualdade a × (b + c) = a × b + a × c denomina-se propriedade distributiva da multiplicação em relação à adição.',
    },
    {
      q: '(IBGP — Potenciação e Radiciação) O valor da expressão 27^(1/3) + 16^(0,5) - 5⁰ é igual a:',
      options: ['5', '6', '7', '8'],
      ans: 1,
      comment: '27^(1/3) = ∛27 = 3; 16^(0,5) = 16^(1/2) = √16 = 4; 5⁰ = 1. Portanto: 3 + 4 - 1 = 6.',
    },
  ],
  flashcards: [
    {
      f: 'Qual é a relação de inclusão entre os conjuntos numéricos ℕ, ℤ, ℚ e ℝ?',
      b: 'ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ (todo natural é inteiro, todo inteiro é racional e todo racional é real). Os irracionais (𝕀) são disjuntos dos racionais (ℚ ∩ 𝕀 = ∅).',
    },
    {
      f: 'Qual a diferença entre (-4)² e -4²?',
      b: '(-4)² = (-4) × (-4) = +16 (a base é -4). Já -4² = -(4 × 4) = -16 (apenas o 4 está elevado ao quadrado).',
    },
    {
      f: 'O que é o valor absoluto (ou módulo) de um número real x?',
      b: 'É a distância de x até o zero na reta numérica, sendo sempre maior ou igual a zero: |-9| = 9 e |9| = 9.',
    },
    {
      f: 'Como transformar uma dízima periódica simples como 0,777... em fração geratriz?',
      b: 'Coloca-se o período no numerador e tantos noves quantos forem os algarismos do período no denominador: 0,777... = 7/9.',
    },
  ],
};

// New Block 1.3 for rlm_1
const newBlock_RLM1_MMCMDCPrimos = {
  title: 'Bloco 1.3 — Laboratório IBGP: Decomposição em Fatores Primos, Número de Divisores, Múltiplos, MDC e MMC em Problemas de Campo do ACE',
  sourceRef: 'Anexo IV — Raciocínio Lógico (Item 1: Decomposição em fatores primos, múltiplos, divisores, MDC e MMC)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-teal-950/90 text-white border border-teal-700">
    <h4 class="text-base font-extrabold">Como Diferenciar MMC e MDC em Segundos na Prova da IBGP</h4>
    <p class="text-xs text-teal-100 mt-1">Mais de 80% das questões contextualizadas do Item 1 cobram a interpretação de problemas de <strong>MMC</strong> (ciclos que voltam a coincidir no futuro) ou <strong>MDC</strong> (divisão em partes iguais do maior tamanho possível sem sobra).</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
      <div class="font-extrabold text-slate-900">1. Fatoração Prima e Nº de Divisores</div>
      <p class="text-slate-700">Escreva $N = p_1^a \\cdot p_2^b \\cdot p_3^c$.<br>O total de divisores naturais de $N$ é:<br><strong>$n(D) = (a + 1)\\cdot(b + 1)\\cdot(c + 1)$</strong>.<br><em>Exemplo:</em> $72 = 2^3 \\cdot 3^2 \\Rightarrow n(D) = (3+1)(2+1) = 4 \\times 3 = 12$ divisores.</p>
    </div>
    <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 space-y-1.5">
      <div class="font-extrabold text-teal-950">2. Quando usar MMC (Mínimo Múltiplo Comum)</div>
      <p class="text-slate-700"><strong>Palavras-chave:</strong> "simultaneamente", "juntos novamente", "de quanto em quanto tempo", "múltiplo comum".<br><em>Regra prática:</em> Fatores comuns e não comuns com o <strong>maior expoente</strong>.</p>
    </div>
    <div class="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 space-y-1.5">
      <div class="font-extrabold text-indigo-950">3. Quando usar MDC (Máximo Divisor Comum)</div>
      <p class="text-slate-700"><strong>Palavras-chave:</strong> "dividir em grupos iguais", "maior tamanho possível", "menor número de equipes", "sem sobrar nada".<br><em>Regra prática:</em> Apenas fatores comuns com o <strong>menor expoente</strong>.<br><strong>Relação fundamental:</strong> $\\text{MMC}(a,b) \\times \\text{MDC}(a,b) = a \\times b$.</p>
    </div>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Quantidade de divisores de $N = 2^a \\cdot 3^b$:</strong> Some $1$ a cada expoente e multiplique: $(a+1)(b+1)$.</li>
  <li><strong>MMC:</strong> Encontro futuro de ciclos periódicos (ex.: equipe A a cada 12 dias e equipe B a cada 18 dias $\\rightarrow \\text{MMC}(12,18) = 36$ dias).</li>
  <li><strong>MDC:</strong> Repartição exata em pacotes/equipes de tamanho máximo (ex.: 120 fichas urbanas e 84 rurais $\\rightarrow \\text{MDC}(120,84) = 12$ por equipe, gerando $10 + 7 = 17$ equipes).</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — MDC Aplicado à SEMUSA) Um supervisor de endemias precisa dividir 144 tubos de coleta e 108 lanternas clínicas em kits idênticos para os agentes de campo, de modo que cada kit contenha o maior número possível de itens de um mesmo tipo, sem misturá-los nos pacotes e sem que sobre material. O número total de pacotes formados será:',
      options: ['7 pacotes.', '12 pacotes.', '21 pacotes.', '36 pacotes.'],
      ans: 0,
      comment: 'Calculamos o MDC(144, 108): 144 = 2⁴ × 3² e 108 = 2² × 3³. O MDC é 2² × 3² = 4 × 9 = 36 itens por pacote. O total de pacotes será: (144 ÷ 36) + (108 ÷ 36) = 4 + 3 = 7 pacotes.',
    },
    {
      q: '(IBGP — Decomposição em Fatores Primos) Decompondo o número natural 360 em fatores primos, obtém-se 2ᵃ × 3ᵇ × 5ᶜ. O valor de (a + b + c) e o total de divisores naturais de 360 são, respectivamente:',
      options: [
        '6 e 24 divisores.',
        '5 e 18 divisores.',
        '6 e 12 divisores.',
        '7 e 30 divisores.',
      ],
      ans: 0,
      comment: '360 = 36 × 10 = (2² × 3²) × (2 × 5) = 2³ × 3² × 5¹. Logo, a = 3, b = 2, c = 1 e a + b + c = 6. O número de divisores naturais é (3+1)(2+1)(1+1) = 4 × 3 × 2 = 24 divisores.',
    },
    {
      q: '(IBGP — MMC de Ciclos) Três viaturas de bloqueio espacial (UBV) partem juntas da base da SEMUSA às 07h00. A primeira retorna à base a cada 40 minutos, a segunda a cada 45 minutos e a terceira a cada 60 minutos. Elas voltarão a se encontrar simultaneamente na base às:',
      options: ['11h00.', '12h00.', '13h00.', '14h30.'],
      ans: 2,
      comment: 'Calculamos o MMC(40, 45, 60): 40 = 2³ × 5; 45 = 3² × 5; 60 = 2² × 3 × 5. MMC = 2³ × 3² × 5 = 8 × 9 × 5 = 360 minutos = 6 horas. Partindo às 07h00 + 6 horas = 13h00.',
    },
  ],
  flashcards: [
    {
      f: 'Como calcular rapidamente a quantidade de divisores naturais de um número N?',
      b: 'Fatore N em primos (N = p₁ᵃ · p₂ᵇ · p₃ᶜ), some 1 a cada expoente e multiplique os resultados: (a+1)(b+1)(c+1).',
    },
    {
      f: 'Qual é a relação fundamental entre o MMC e o MDC de dois números naturais a e b?',
      b: 'MMC(a, b) × MDC(a, b) = a × b.',
    },
    {
      f: 'Quais palavras-chave indicam problema de MDC na prova da IBGP?',
      b: '"Dividir em partes iguais", "maior tamanho possível", "menor quantidade de grupos/equipes", "sem sobrar elementos".',
    },
    {
      f: 'O número 1 é primo ou composto?',
      b: 'Nem primo nem composto! Número primo é aquele que possui exatamente 2 divisores naturais distintos (1 e ele mesmo). O menor número primo (e único par) é o 2.',
    },
  ],
};

// New Block 3.1 for rlm_3
const newBlock_RLM3_GrandezasMedidasTempoMassaCap = {
  title: 'Bloco 3.1 — Grandezas e Medidas: Quantidade, Tempo (h, min, s), Comprimento, Capacidade (L e mL), Volume (m³, dm³, cm³) e Massa (t, kg, g, mg)',
  sourceRef: 'Anexo IV — Raciocínio Lógico (Item 3: Grandezas e medidas: quantidade, tempo, comprimento, capacidade e massa)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-teal-950/90 text-white border border-teal-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 3 de Raciocínio Lógico — Grandezas e Medidas</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Tabela Completa de Conversão: Quantidade, Tempo, Comprimento, Capacidade e Massa</h4>
    <p class="text-xs text-teal-100 mt-1">Este tópico conecta diretamente a matemática com o trabalho diário do ACE: cubagem de caixas d'água ($\\text{m}^3 \\rightarrow \\text{Litros}$) e dosagem de larvicidas em gramas ou mililitros.</p>
  </div>

  <div class="overflow-x-auto">
    <table class="w-full text-left border-collapse text-xs border border-slate-300">
      <thead>
        <tr class="bg-slate-900 text-white">
          <th class="p-2.5 border border-slate-700">Grandeza do Edital</th>
          <th class="p-2.5 border border-slate-700">Unidades e Fatores de Conversão</th>
          <th class="p-2.5 border border-slate-700">Ponte Direta e Pegadinha IBGP</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr class="bg-white">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">1. Quantidade</td>
          <td class="p-2.5 border border-slate-200">• <strong>Dúzia</strong> = $12$ unidades | <strong>Meia dúzia</strong> = $6$ unidades.<br>• <strong>Grosa</strong> = $12$ dúzias = $144$ unidades.<br>• <strong>Resma</strong> = $500$ folhas (20 mãos de 25 folhas).<br>• <strong>Milheiro</strong> = $1.000$ unidades | <strong>Centena</strong> = $100$ | <strong>Dezena</strong> = $10$.</td>
          <td class="p-2.5 border border-slate-200">Em problemas de estoque de fichas da SEMUSA, lembre que $1\\text{ resma} = 500\\text{ folhas}$.</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">2. Tempo (Base 60)</td>
          <td class="p-2.5 border border-slate-200">• $1\\text{ dia} = 24\\text{ h} = 1.440\\text{ min}$.<br>• $1\\text{ hora} = 60\\text{ min} = 3.600\\text{ s}$.<br>• $1\\text{ minuto} = 60\\text{ s}$.<br>• <strong>Decimal $\\rightarrow$ Minutos:</strong> Multiplique a parte decimal por $60$ (ex.: $2,4\\text{ h} = 2\\text{ h e } (0,4 \\times 60)\\text{ min} = 2\\text{h } 24\\text{min}$).</td>
          <td class="p-2.5 border border-slate-200"><strong>Pegadinha clássica:</strong> $3,5\\text{ h}$ são $3\\text{h } 30\\text{min}$ (e NUNCA $3\\text{h } 50\\text{min}$!). $1,75\\text{ h} = 1\\text{h } 45\\text{min}$.</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">3. Comprimento (Passo $10^1$)</td>
          <td class="p-2.5 border border-slate-200">$\\text{km} \\xrightarrow{\\times 10} \\text{hm} \\xrightarrow{\\times 10} \\text{dam} \\xrightarrow{\\times 10} \\mathbf{m} \\xrightarrow{\\times 10} \\text{dm} \\xrightarrow{\\times 10} \\text{cm} \\xrightarrow{\\times 10} \\text{mm}$.<br>• $1\\text{ km} = 1.000\\text{ m}$ | $1\\text{ m} = 100\\text{ cm} = 1.000\\text{ mm}$.</td>
          <td class="p-2.5 border border-slate-200">Em <strong>Área ($\\text{m}^2$)</strong> cada casa multiplica/divide por $100$ ($1\\text{ ha} = 1\\text{ hm}^2 = 10.000\\text{ m}^2$). Em <strong>Volume ($\\text{m}^3$)</strong> cada casa multiplica/divide por $1.000$.</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">4. Capacidade (Passo $10^1$) e Ponte Volume</td>
          <td class="p-2.5 border border-slate-200">$\\text{kL} \\rightarrow \\text{hL} \\rightarrow \\text{daL} \\rightarrow \\mathbf{L} \\rightarrow \\text{dL} \\rightarrow \\text{cL} \\rightarrow \\text{mL}$.<br>• <strong>Tríade de Ouro Volume $\\leftrightarrow$ Capacidade:</strong><br>1) $1\\text{ m}^3 = 1.000\\text{ L}$ ($1\\text{ kL}$)<br>2) $1\\text{ dm}^3 = 1\\text{ L}$<br>3) $1\\text{ cm}^3 = 1\\text{ mL}$</td>
          <td class="p-2.5 border border-slate-200">Caixa d'água de $2\\text{ m} \\times 1,5\\text{ m} \\times 0,8\\text{ m} = 2,4\\text{ m}^3 = 2.400\\text{ Litros}$.</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">5. Massa (Passo $10^1$)</td>
          <td class="p-2.5 border border-slate-200">$\\text{kg} \\rightarrow \\text{hg} \\rightarrow \\text{dag} \\rightarrow \\mathbf{g} \\rightarrow \\text{dg} \\rightarrow \\text{cg} \\rightarrow \\text{mg}$.<br>• $1\\text{ tonelada (t)} = 1.000\\text{ kg}$.<br>• $1\\text{ kg} = 1.000\\text{ g}$ | $1\\text{ g} = 1.000\\text{ mg}$.</td>
          <td class="p-2.5 border border-slate-200">Se o larvicida usa $2\\text{ g}$ para cada $1.000\\text{ L}$, um reservatório de $5.500\\text{ L}$ exige $11\\text{ g} = 11.000\\text{ mg}$.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Tempo:</strong> $0,1\\text{ h} = 6\\text{ min}$; $0,25\\text{ h} = 15\\text{ min}$; $0,5\\text{ h} = 30\\text{ min}$; $0,75\\text{ h} = 45\\text{ min}$.</li>
  <li><strong>Volume $\\leftrightarrow$ Capacidade:</strong> $1\\text{ m}^3 = 1.000\\text{ L}$ | $1\\text{ dm}^3 = 1\\text{ L}$ | $1\\text{ cm}^3 = 1\\text{ mL}$.</li>
  <li><strong>Massa:</strong> $1\\text{ t} = 1.000\\text{ kg}$; $1\\text{ kg} = 1.000\\text{ g}$; $1\\text{ g} = 1.000\\text{ mg}$.</li>
  <li><strong>Quantidade:</strong> $1\\text{ resma} = 500\\text{ folhas}$; $1\\text{ dúzia} = 12$; $1\\text{ grosa} = 144$.</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Tempo em Forma Decimal) Um Agente de Combate às Endemias realizou uma ação de bloqueio focal que durou exatamente 3,4 horas. Esse tempo corresponde a:',
      options: [
        '3 horas e 4 minutos.',
        '3 horas e 24 minutos.',
        '3 horas e 40 minutos.',
        '3 horas e 45 minutos.',
      ],
      ans: 1,
      comment: '3,4 horas = 3 horas inteiras + 0,4 hora. Convertendo 0,4 h para minutos: 0,4 × 60 = 24 minutos. Portanto, 3 horas e 24 minutos.',
    },
    {
      q: '(IBGP — Capacidade, Volume e Massa) Uma cisterna retangular possui 2,5 m de comprimento, 1,2 m de largura e 1,5 m de profundidade, estando com 80% de sua capacidade preenchida com água. Se a recomendação técnica do larvicida é aplicar 2 gramas a cada 1.000 litros de água, a massa de larvicida necessária, em miligramas (mg), é:',
      options: ['7.200 mg.', '9.000 mg.', '3.600 mg.', '4.500 mg.'],
      ans: 0,
      comment: 'Volume total = 2,5 × 1,2 × 1,5 = 4,5 m³ = 4.500 litros. Volume de água (80%) = 0,8 × 4.500 = 3.600 litros. Como cada 1.000 L exige 2 g, para 3.600 L aplicam-se 3,6 × 2 g = 7,2 g = 7.200 mg.',
    },
    {
      q: '(IBGP — Quantidade e Massa) A coordenação de vigilância adquiriu 4 resmas de fichas de notificação, sendo que cada folha pesa 4,5 gramas. A massa total dessas folhas, em quilogramas (kg), é igual a:',
      options: ['4,5 kg.', '7,2 kg.', '9,0 kg.', '18,0 kg.'],
      ans: 2,
      comment: '1 resma = 500 folhas. Logo, 4 resmas = 4 × 500 = 2.000 folhas. Massa total = 2.000 × 4,5 g = 9.000 g = 9,0 kg.',
    },
    {
      q: '(IBGP — Comprimento) Um agente percorreu no turno da manhã 2,4 km, 850 m e 15.000 cm em visitas domiciliares. A distância total percorrida, em metros, foi de:',
      options: ['3.265 m.', '3.400 m.', '3.900 m.', '4.750 m.'],
      ans: 1,
      comment: 'Convertendo tudo para metros: 2,4 km = 2.400 m; 850 m = 850 m; 15.000 cm = 150 m. Somando: 2.400 + 850 + 150 = 3.400 metros.',
    },
  ],
  flashcards: [
    {
      f: 'Como converter horas decimais (ex.: 2,6 h) para horas e minutos?',
      b: 'Mantém-se a parte inteira (2 h) e multiplica-se a parte decimal por 60: 0,6 × 60 = 36 minutos (2h 36min).',
    },
    {
      f: 'Quais são as 3 equivalências fundamentais entre unidades de volume e de capacidade?',
      b: '1 m³ = 1.000 L; 1 dm³ = 1 L; 1 cm³ = 1 mL.',
    },
    {
      f: 'Quantas unidades há em 1 dúzia, 1 grosa e 1 resma?',
      b: '1 dúzia = 12 unidades; 1 grosa = 144 unidades (12 dúzias); 1 resma = 500 folhas.',
    },
    {
      f: 'Como converter toneladas (t), quilogramas (kg), gramas (g) e miligramas (mg)?',
      b: '1 t = 1.000 kg; 1 kg = 1.000 g; 1 g = 1.000 mg (multiplica-se por 1.000 ao descer e divide-se por 1.000 ao subir).',
    },
    {
      f: 'A quantos metros quadrados (m²) equivale 1 hectare (ha)?',
      b: '1 hectare (ha) = 1 hm² = 10.000 m² (equivalente a um quadrado de 100 m × 100 m).',
    },
  ],
};

// New Block 4.1 for rlm_4
const newBlock_RLM4_EquacoesSistemasFuncao1Grau = {
  title: 'Bloco 4.1 — Equações do 1º Grau, Sistemas de Equações do 1º Grau e Função do 1º Grau (f(x) = ax + b): Resolução de Problemas',
  sourceRef: 'Anexo IV — Raciocínio Lógico (Item 4: Equações do 1º grau, sistemas de equações do 1º grau e função do 1º grau)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-indigo-950/90 text-white border border-indigo-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 4 de Raciocínio Lógico — Álgebra e Funções</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Equação do 1º Grau, Sistemas Lineares ($2 \\times 2$) e Função do 1º Grau ($f(x) = ax + b$)</h4>
    <p class="text-xs text-indigo-100 mt-1">Aprenda a traduzir enunciados em linguagem algébrica, resolver sistemas de duas incógnitas pelos métodos da Adição e Substituição e interpretar os coeficientes $a$ e $b$ da função afim.</p>
  </div>

  <div class="overflow-x-auto">
    <table class="w-full text-left border-collapse text-xs border border-slate-300">
      <thead>
        <tr class="bg-slate-900 text-white">
          <th class="p-2.5 border border-slate-700">Subtópico do Item 4</th>
          <th class="p-2.5 border border-slate-700">Estrutura Matemática e Método</th>
          <th class="p-2.5 border border-slate-700">Tradução de Enunciados IBGP</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr class="bg-white">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">1. Equação do 1º Grau</td>
          <td class="p-2.5 border border-slate-200">Forma geral: $ax + b = 0$ (com $a \\ne 0$) $\\Rightarrow x = -\\frac{b}{a}$.<br>Ao lidar com frações, multiplique toda a equação pelo <strong>MMC dos denominadores</strong> para eliminar as frações imediatamente.</td>
          <td class="p-2.5 border border-slate-200">• "O dobro de um número excede em 15..." $\\rightarrow 2x - 15$.<br>• "Três números consecutivos" $\\rightarrow x, x+1, x+2$.<br>• "A terça parte do restante" $\\rightarrow \\frac{1}{3}$ do que sobrou.</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">2. Sistemas de Equações do 1º Grau ($2 \\times 2$)</td>
          <td class="p-2.5 border border-slate-200">$\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}$<br>• <strong>Método da Adição:</strong> multiplique uma equação para cancelar $x$ ou $y$ ao somar.<br>• <strong>Método da Substituição:</strong> isole uma variável (ex.: $y = c_1 - x$) e substitua na outra.</td>
          <td class="p-2.5 border border-slate-200">Problemas clássicos de "total de itens e total de pontos/rodas/pés" (ex.: questões certas valendo $+3$ e erradas $-1$; motos de 2 rodas e carros de 4 rodas).</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">3. Função do 1º Grau (Função Afim)</td>
          <td class="p-2.5 border border-slate-200">Lei de formação: <strong>$f(x) = ax + b$</strong> (gráfico é uma <strong>reta</strong>).<br>• <strong>$b$ (coeficiente linear / termo independente):</strong> valor inicial quando $x = 0$ ($f(0) = b$; onde a reta corta o eixo $y$).<br>• <strong>$a$ (coeficiente angular / taxa de variação):</strong> $a = \\frac{\\Delta y}{\\Delta x}$. Se $a > 0$, função <strong>crescente</strong>; se $a < 0$, <strong>decrescente</strong>.<br>• <strong>Raiz ou Zero da função:</strong> valor de $x$ para $f(x) = 0 \\Rightarrow x = -\\frac{b}{a}$.</td>
          <td class="p-2.5 border border-slate-200">Ex.: Estoque inicial de $b = 500$ kits que consome $a = -25$ kits por dia $\\rightarrow E(t) = 500 - 25t$. O estoque zera em $t = 500/25 = 20$ dias.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Equação do 1º Grau:</strong> Elimine denominadores multiplicando pelo MMC.</li>
  <li><strong>Sistema $2 \\times 2$:</strong> 2 incógnitas exigem 2 equações independentes (use Adição ou Substituição).</li>
  <li><strong>Função do 1º Grau ($f(x) = ax + b$):</strong> $b$ = valor fixo/inicial ($x=0$); $a$ = taxa de variação por unidade ($a>0$ crescente, $a<0$ decrescente); raiz = $-b/a$.</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Equação do 1º Grau com Frações) Um ACE recebeu um lote de fichas de visita. No primeiro dia utilizou 1/3 do lote; no segundo dia utilizou 2/5 do que havia restado; e no terceiro dia utilizou as 36 fichas finais, encerrando o lote. O total de fichas desse lote era:',
      options: ['60 fichas.', '75 fichas.', '90 fichas.', '108 fichas.'],
      ans: 2,
      comment: 'Seja x o total. 1º dia: usou (1/3)x, restaram (2/3)x. 2º dia: usou (2/5) do restante, logo sobraram (3/5) de (2/3)x = (6/15)x = (2/5)x. Como sobraram 36 fichas para o 3º dia: (2/5)x = 36 ⇒ 2x = 180 ⇒ x = 90 fichas.',
    },
    {
      q: '(IBGP — Sistema de Equações do 1º Grau) Em um ponto de apoio há 28 veículos da vigilância, entre motocicletas (2 rodas) e caminhonetes (4 rodas), totalizando 88 rodas no pátio. A diferença entre o número de caminhonetes e o número de motocicletas é:',
      options: ['2', '4', '6', '8'],
      ans: 1,
      comment: 'Sistema: M + C = 28 (I) e 2M + 4C = 88 ⇒ M + 2C = 44 (II). Subtraindo (I) de (II): C = 44 - 28 = 16 caminhonetes. Logo, M = 28 - 16 = 12 motocicletas. A diferença C - M = 16 - 12 = 4.',
    },
    {
      q: '(IBGP — Função do 1º Grau) O volume V(t), em litros, de água em um reservatório que está sendo esvaziado para limpeza segue a função do 1º grau V(t) = 1.800 - 45t, em que t é o tempo em minutos. Em quantos minutos o reservatório estará completamente vazio (raiz da função)?',
      options: ['30 minutos.', '35 minutos.', '40 minutos.', '45 minutos.'],
      ans: 2,
      comment: 'O reservatório estará vazio quando V(t) = 0: 1.800 - 45t = 0 ⇒ 45t = 1.800 ⇒ t = 1.800 ÷ 45 = 40 minutos.',
    },
    {
      q: '(IBGP — Função do 1º Grau: Ponto de Equilíbrio) Duas equipes de campo iniciam a semana com metas acumuladas dadas por A(d) = 40 + 18d e B(d) = 100 + 6d, onde d é o número de dias trabalhados. O número de dias necessários para que ambas as equipes atinjam exatamente a mesma quantidade acumulada é:',
      options: ['4 dias.', '5 dias.', '6 dias.', '8 dias.'],
      ans: 1,
      comment: 'Igualando as funções: 40 + 18d = 100 + 6d ⇒ 18d - 6d = 100 - 40 ⇒ 12d = 60 ⇒ d = 5 dias.',
    },
  ],
  flashcards: [
    {
      f: 'Na função do 1º grau f(x) = ax + b, o que significam os coeficientes a e b?',
      b: 'b (coeficiente linear) é o valor inicial quando x = 0 (corta o eixo y). a (coeficiente angular) é a taxa de variação por unidade de x (a > 0 crescente; a < 0 decrescente).',
    },
    {
      f: 'O que é a raiz (ou zero) de uma função do 1º grau f(x) = ax + b?',
      b: 'É o valor de x que torna f(x) = 0, calculado por x = -b/a (ponto onde a reta corta o eixo x).',
    },
    {
      f: 'Na resolução de problemas de frações sucessivas, se alguém gasta 1/4 e depois 2/3 do restante, que fração sobra?',
      b: 'Multiplica-se o que sobra em cada etapa: (3/4) × (1/3) = 1/4 do total inicial.',
    },
    {
      f: 'Quando um sistema linear 2×2 é chamado de SPD (Sistema Possível e Determinado)?',
      b: 'Quando admite uma única solução (um único par ordenado (x, y) onde as duas retas se interceptam).',
    },
    {
      f: 'Como equacionar três números pares consecutivos?',
      b: 'x, x + 2 e x + 4.',
    },
  ],
};

// New Block 4.3 for rlm_4
const newBlock_RLM4_MediasSimplesPonderadaLab = {
  title: 'Bloco 4.3 — Laboratório IBGP de Média Aritmética Simples e Média Aritmética Ponderada: Problemas de Alteração de Soma e Pesos',
  sourceRef: 'Anexo IV — Raciocínio Lógico (Item 4: Média aritmética simples e ponderada)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-teal-950/90 text-white border border-teal-700">
    <h4 class="text-base font-extrabold">Média Aritmética Simples vs. Média Aritmética Ponderada</h4>
    <p class="text-xs text-teal-100 mt-1">O segredo da IBGP em questões de média é transformar imediatamente a média na <strong>SOMA DOS ELEMENTOS</strong> ($\\text{Soma} = \\text{Média} \\times n$).</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
      <div class="font-extrabold text-slate-900">1. Média Aritmética Simples ($\\bar{x}$)</div>
      <p class="text-slate-700">$$\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_n}{n} \\iff \\text{Soma} = \\bar{x} \\cdot n$$<br><strong>Atalho de ouro:</strong> Se a média de $5$ agentes é $24$ imóveis/dia, a soma dos $5$ é $5 \\times 24 = 120$. Se entra um $6º$ agente e a média sobe para $25$, a nova soma é $6 \\times 25 = 150$. Logo, o $6º$ agente visitou $150 - 120 = 30$ imóveis!</p>
    </div>
    <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 space-y-1.5">
      <div class="font-extrabold text-amber-950">2. Média Aritmética Ponderada ($\\bar{x}_p$)</div>
      <p class="text-slate-700">$$\\bar{x}_p = \\frac{x_1 \\cdot p_1 + x_2 \\cdot p_2 + \\dots + x_k \\cdot p_k}{p_1 + p_2 + \\dots + p_k}$$<br><strong>Pegadinha mortal:</strong> Divide-se pela <strong>SOMA DOS PESOS</strong> ($p_1 + p_2 + \\dots + p_k$), e NUNCA pela quantidade de parcelas!</p>
    </div>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Regra da Soma (Média Simples):</strong> $\\text{Soma} = \\text{Média} \\times \\text{Quantidade}$.</li>
  <li><strong>Média Ponderada:</strong> Multiplique cada valor pelo seu peso/frequência e divida pela <strong>soma dos pesos</strong>.</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Média Aritmética Simples: Entrada de Novo Elemento) A média diária de imóveis vistoriados por uma equipe de 6 agentes foi de 24 imóveis. Quando o 7º agente da equipe entregou seu boletim diário, a média de todo o grupo subiu para 25 imóveis. Quantos imóveis o 7º agente vistoriou?',
      options: ['29 imóveis.', '30 imóveis.', '31 imóveis.', '32 imóveis.'],
      ans: 2,
      comment: 'Soma dos 6 primeiros agentes = 6 × 24 = 144 imóveis. Nova soma com os 7 agentes = 7 × 25 = 175 imóveis. Logo, o 7º agente vistoriou 175 - 144 = 31 imóveis.',
    },
    {
      q: '(IBGP — Média Aritmética Ponderada) Em uma avaliação interna de capacitação da SEMUSA, a prova teórica tem peso 3, a prova prática de campo tem peso 5 e o estudo de caso tem peso 2. Se um candidato obteve nota 7,0 na teórica, 9,0 na prática e 8,0 no estudo de caso, sua média final ponderada foi:',
      options: ['8,0.', '8,2.', '8,4.', '8,5.'],
      ans: 1,
      comment: 'Média ponderada = [(7,0 × 3) + (9,0 × 5) + (8,0 × 2)] ÷ (3 + 5 + 2) = [21 + 45 + 16] ÷ 10 = 82 ÷ 10 = 8,2.',
    },
    {
      q: '(IBGP — Média Ponderada por Frequência) Em um setor com 10 agentes, 4 agentes têm 30 anos, 4 agentes têm 35 anos e 2 agentes têm 45 anos. A média de idade desse grupo é:',
      options: ['34 anos.', '35 anos.', '36 anos.', '36,6 anos.'],
      ans: 1,
      comment: 'Média = [(4 × 30) + (4 × 35) + (2 × 45)] ÷ (4 + 4 + 2) = [120 + 140 + 90] ÷ 10 = 350 ÷ 10 = 35 anos.',
    },
  ],
  flashcards: [
    {
      f: 'Qual é o erro mais comum em questões de Média Aritmética Ponderada?',
      b: 'Dividir pela quantidade de notas em vez de dividir pela SOMA DOS PESOS (p₁ + p₂ + ... + pₖ).',
    },
    {
      f: 'Se a média aritmética de n números é M e somamos uma constante k a todos os números, o que acontece com a média?',
      b: 'A nova média passa a ser M + k.',
    },
    {
      f: 'Como resolver rapidamente questões em que um elemento entra ou sai de um grupo alterando a média?',
      b: 'Calcula-se a Soma Antes (n × M₁) e a Soma Depois ((n±1) × M₂); a diferença entre as somas é o valor do elemento.',
    },
    {
      f: 'Média ponderada com pesos iguais equivale a qual tipo de média?',
      b: 'Equivale exatamente à Média Aritmética Simples.',
    },
  ],
};

// New Block 6.5 for rlm_6
const newBlock_RLM6_ConjuntosSequenciasAssociacaoVerdadesMentiras = {
  title: 'Bloco 6.5 — Linguagem Completa dos Conjuntos (Pertinência, Inclusão, Conjunto das Partes 2ⁿ), Sequências Lógicas (Números, Letras, Palavras e Figuras), Associação Lógica e Verdades e Mentiras',
  sourceRef: 'Anexo IV — Raciocínio Lógico (Item 6: Linguagem dos conjuntos, Sequências lógicas, Associação lógica e Verdades e mentiras)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-slate-900 text-white border border-teal-600">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 6 de Raciocínio Lógico — Cobertura Integral do Edital</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Linguagem dos Conjuntos, Sequências Lógicas, Associação Lógica e Verdades/Mentiras</h4>
    <p class="text-xs text-slate-300 mt-1">Este bloco consolida todos os subitens da segunda metade do Item 6 do edital: notação de conjuntos, conjunto das partes ($2^n$), sequências com números/letras/palavras/figuras, tabelas de associação lógica e problemas de verdades e mentiras.</p>
  </div>

  <div class="overflow-x-auto">
    <table class="w-full text-left border-collapse text-xs border border-slate-300">
      <thead>
        <tr class="bg-slate-900 text-white">
          <th class="p-2.5 border border-slate-700">Subtópico do Item 6</th>
          <th class="p-2.5 border border-slate-700">Regras, Fórmulas e Símbolos</th>
          <th class="p-2.5 border border-slate-700">Dica Prática IBGP</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr class="bg-white">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">1. Pertinência ($\\in, \\notin$) vs. Inclusão ($\\subset, \\not\\subset, \\supset$)</td>
          <td class="p-2.5 border border-slate-200">• <strong>Pertinência ($\\in, \\notin$):</strong> relaciona <strong>Elemento $\\leftrightarrow$ Conjunto</strong> (ex.: $2 \\in \\{1, 2, 3\\}$).<br>• <strong>Inclusão ($\\subset, \\not\\subset$):</strong> relaciona <strong>Conjunto $\\leftrightarrow$ Conjunto</strong> (ex.: $\\{2\\} \\subset \\{1, 2, 3\\}$).<br>• <strong>Igualdade ($A = B$):</strong> $A \\subset B$ e $B \\subset A$ (mesmos elementos, independentemente de ordem ou repetição: $\\{1,2,2\\} = \\{2,1\\}$).</td>
          <td class="p-2.5 border border-slate-200">O <strong>conjunto vazio ($\\emptyset$ ou $\\{\\}$)</strong> é subconjunto de QUALQUER conjunto ($\\emptyset \\subset A$ é sempre <strong>VERDADEIRO</strong>!). Atenção: $\\{\\emptyset\\}$ não é vazio, é um <strong>conjunto unitário</strong>!</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">2. Conjunto das Partes $\\mathcal{P}(A)$ e Operações</td>
          <td class="p-2.5 border border-slate-200">• Se $A$ tem $n$ elementos, o <strong>Conjunto das Partes $\\mathcal{P}(A)$</strong> (conjunto de todos os subconjuntos de $A$) possui exatamente <strong>$2^n$ subconjuntos</strong> (e $2^n - 1$ subconjuntos próprios não-vazios).<br>• <strong>União ($A \\cup B$):</strong> $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$.<br>• <strong>Interseção ($A \\cap B$):</strong> elementos comuns.<br>• <strong>Diferença ($A - B$):</strong> pertence a $A$ e NÃO pertence a $B$.<br>• <strong>Complementar ($\\complement_U^A = A^c$):</strong> $U - A$.</td>
          <td class="p-2.5 border border-slate-200">Se $n(A) = 5$, então $n(\\mathcal{P}(A)) = 2^5 = 32$ subconjuntos.</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">3. Sequências Lógicas (Números, Letras, Palavras e Figuras)</td>
          <td class="p-2.5 border border-slate-200">• <strong>Numéricas:</strong> diferenças de 1ª ou 2ª ordem, alternadas (termos ímpares vs. pares), potências ($1, 4, 9, 16, 25\\dots$) ou Fibonacci ($1, 1, 2, 3, 5, 8, 13\\dots$).<br>• <strong>Letras:</strong> posição no alfabeto de 26 letras ou iniciais (D, S, T, Q, Q, S, S = dias da semana; U, D, T, Q, C = números).<br>• <strong>Palavras/Ciclos:</strong> divida a posição pedida pelo tamanho $T$ do bloco repetido e olhe para o <strong>RESTO</strong> da divisão.<br>• <strong>Figuras:</strong> rotação horária/anti-horária ($90^\\circ, 45^\\circ$) e contagem de lados/elementos.</td>
          <td class="p-2.5 border border-slate-200">Resto $0$ na divisão pelo período $T$ equivale sempre ao <strong>último elemento</strong> do ciclo!</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">4. Associação Lógica e Verdades/Mentiras</td>
          <td class="p-2.5 border border-slate-200">• <strong>Associação Lógica:</strong> monte uma <strong>grade/tabela de cruzamento</strong> marcando "S" (Sim) e bloqueando a linha e a coluna inteiras com "N" (Não).<br>• <strong>Verdades e Mentiras:</strong> procure duas falas <strong>contraditórias</strong> (ex.: A diz "B mentiu" ou "Fui eu" vs. "Não foi X"). Entre duas contraditórias, exatamente 1 é V e 1 é F!</td>
          <td class="p-2.5 border border-slate-200">Teste a hipótese no elemento que gera conflito direto e confira quantas verdades e mentiras o enunciado exige.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Conjunto das Partes:</strong> $n(\\mathcal{P}(A)) = 2^n$ subconjuntos; $\\emptyset \\subset A$ para todo $A$.</li>
  <li><strong>Princípio da Inclusão-Exclusão:</strong> $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$.</li>
  <li><strong>Sequências Cíclicas:</strong> Divida $N$ pelo tamanho $T$ do ciclo; o resto indica a posição (resto $0$ = último item do ciclo).</li>
  <li><strong>Associação Lógica:</strong> Grade com "S" e "N"; cada "S" elimina o resto da sua linha e coluna.</li>
  <li><strong>Verdades e Mentiras:</strong> Duas afirmações contraditórias têm obrigatoriamente valores lógicos opostos (uma V e uma F).</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Linguagem dos Conjuntos e Conjunto das Partes) Considere o conjunto A = {1, 2, 3, 4, 5, 6}. O número total de subconjuntos de A (conjunto das partes P(A)) e o número de subconjuntos não-vazios de A são, respectivamente:',
      options: ['12 e 11.', '32 e 31.', '64 e 63.', '36 e 35.'],
      ans: 2,
      comment: 'Como A possui n = 6 elementos, o conjunto das partes P(A) tem 2⁶ = 64 subconjuntos. Excluindo o conjunto vazio (∅), restam 64 - 1 = 63 subconjuntos não-vazios.',
    },
    {
      q: '(IBGP — Sequências Lógicas com Letras e Palavras) Na sequência lógica infinita formada pela repetição da sigla "SEMUSAPVHSEMUSAPVH...", a letra que ocupa a 2026ª posição é:',
      options: ['S', 'E', 'A', 'H'],
      ans: 0,
      comment: 'O bloco "SEMUSAPVH" possui T = 9 letras (1:S, 2:E, 3:M, 4:U, 5:S, 6:A, 7:P, 8:V, 9:H). Dividindo 2026 por 9: 2026 = 9 × 225 + 1 (resto = 1). O resto 1 corresponde à 1ª letra do bloco, que é "S".',
    },
    {
      q: '(IBGP — Associação Lógica) Três agentes — Ana, Bruno e Carlos — atuam nos distritos de Jaci-Paraná, União Bandeirantes e Extrema, e utilizam como meio de locomoção moto, barco e bicicleta, não necessariamente nessa ordem. Sabe-se que: (I) quem atua em Jaci-Paraná usa barco; (II) Ana atua em Extrema; (III) Bruno não usa barco nem bicicleta. É CORRETO afirmar que:',
      options: [
        'Carlos atua em União Bandeirantes e usa bicicleta.',
        'Bruno atua em União Bandeirantes e usa moto.',
        'Ana usa moto e Carlos atua em Extrema.',
        'Bruno atua em Jaci-Paraná e Carlos usa bicicleta.',
      ],
      ans: 1,
      comment: 'Pela pista (III), Bruno não usa barco nem bicicleta, logo Bruno usa MOTO. Pela pista (I), quem atua em Jaci-Paraná usa barco (portanto não é Bruno e, pela pista II, não é Ana que atua em Extrema); logo, CARLOS atua em Jaci-Paraná e usa BARCO. Assim, resta para Ana a BICICLETA (em Extrema) e para Bruno o distrito de UNIÃO BANDEIRANTES (com MOTO).',
    },
    {
      q: '(IBGP — Problemas de Verdades e Mentiras) Quatro servidores (P, Q, R e S) foram questionados sobre quem esqueceu o portão do depósito aberto. Eles declararam:\n• P: "Foi o Q."\n• Q: "Foi o S."\n• R: "Não fui eu."\n• S: "O Q está mentindo."\nSabendo-se que apenas UM dos quatro servidores disse a verdade e que apenas UM esqueceu o portão aberto, quem esqueceu o portão aberto foi:',
      options: ['P', 'Q', 'R', 'S'],
      ans: 2,
      comment: 'As falas de Q ("Foi o S") e S ("Q está mentindo") são contraditórias; logo, a única verdade está obrigatoriamente entre Q e S. Consequentemente, P e R estão MENTINDO. Como R mentiu ao dizer "Não fui eu", conclui-se que FOI O R quem esqueceu o portão aberto (e S disse a verdade).',
    },
  ],
  flashcards: [
    {
      f: 'Qual a diferença entre os símbolos ∈ (pertence) e ⊂ (está contido)?',
      b: '∈ relaciona ELEMENTO com CONJUNTO; ⊂ relaciona CONJUNTO com CONJUNTO.',
    },
    {
      f: 'Quantos subconjuntos possui um conjunto finito com n elementos?',
      b: 'Possui 2ⁿ subconjuntos (fórmula do Conjunto das Partes P(A)).',
    },
    {
      f: 'Em uma sequência periódica de período T, o que significa obter resto 0 na divisão de N por T?',
      b: 'Significa que o N-ésimo termo é exatamente o ÚLTIMO elemento do bloco de repetição.',
    },
    {
      f: 'Qual é o ponto de partida em problemas de Verdades e Mentiras?',
      b: 'Identificar duas declarações contraditórias (ex.: "Foi X" e "X mente"), pois entre elas há obrigatoriamente 1 Verdade e 1 Mentira.',
    },
    {
      f: 'O que representa a operação de diferença A - B entre dois conjuntos?',
      b: 'O conjunto dos elementos que pertencem exclusivamente a A e NÃO pertencem a B.',
    },
  ],
};

// New Block 7.4 for rlm_7
const newBlock_RLM7_CombinatoriaCompletaIBGP = {
  title: 'Bloco 7.4 — Quadro Comparativo Definitivo de Análise Combinatória: PFC, Permutação (Simples, com Repetição e Circular), Arranjo e Combinação',
  sourceRef: 'Anexo IV — Raciocínio Lógico (Item 7: Análise combinatória: princípio fundamental da contagem, arranjos, permutações e combinações)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-teal-950/90 text-white border border-teal-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 7 de Raciocínio Lógico — Análise Combinatória</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Como Nunca Mais Confundir Arranjo, Permutação e Combinação na IBGP</h4>
    <p class="text-xs text-teal-100 mt-1">Basta fazer uma única pergunta ao enunciado: <strong>"Se eu trocar a ordem dos elementos escolhidos, o resultado muda?"</strong></p>
  </div>

  <div class="overflow-x-auto">
    <table class="w-full text-left border-collapse text-xs border border-slate-300">
      <thead>
        <tr class="bg-slate-900 text-white">
          <th class="p-2.5 border border-slate-700">Método Combinatório</th>
          <th class="p-2.5 border border-slate-700">Fórmula Oficial</th>
          <th class="p-2.5 border border-slate-700">Critério de Escolha e Exemplos Típicos IBGP</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr class="bg-white">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">1. Princípio Fundamental da Contagem (PFC)</td>
          <td class="p-2.5 border border-slate-200">• <strong>Multiplicativo ("E"):</strong> $n_1 \\times n_2 \\times \\dots \\times n_k$.<br>• <strong>Aditivo ("OU" mutuamente exclusivo):</strong> $n_1 + n_2$.</td>
          <td class="p-2.5 border border-slate-200">Senhas, placas de veículos, escolha de uniforme (camisa E calça E bota).</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">2. Permutação Simples, com Repetição e Circular</td>
          <td class="p-2.5 border border-slate-200">• <strong>Simples:</strong> $P_n = n!$<br>• <strong>Com repetição:</strong> $P_n^{a,b} = \\frac{n!}{a! \\cdot b!}$<br>• <strong>Circular:</strong> $PC_n = (n - 1)!$</td>
          <td class="p-2.5 border border-slate-200">Usa <strong>TODOS os $n$ elementos</strong> apenas trocando de posição: filas e <strong>anagramas</strong> (ex.: anagramas de ENDEMIA $= \\frac{7!}{2!} = 2.520$).</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">3. Arranjo Simples ($A_{n,p}$)</td>
          <td class="p-2.5 border border-slate-200">$$A_{n,p} = \\frac{n!}{(n - p)!}$$</td>
          <td class="p-2.5 border border-slate-200">Escolhe $p$ entre $n$ elementos e <strong>A ORDEM IMPORTA</strong> (cargos distintos: Presidente, Vice e Secretário; pódio 1º, 2º e 3º lugar; senhas sem repetição).</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">4. Combinação Simples ($C_{n,p}$)</td>
          <td class="p-2.5 border border-slate-200">$$C_{n,p} = \\frac{n!}{p!(n - p)!}$$</td>
          <td class="p-2.5 border border-slate-200">Escolhe $p$ entre $n$ elementos e <strong>A ORDEM NÃO IMPORTA</strong> (comissões, equipes de plantão sem hierarquia, duplas, triângulos, apertos de mão).</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Ordem importa (cargos diferentes, pódio, senha)?</strong> $\\rightarrow$ <strong>Arranjo ($A_{n,p}$)</strong> ou PFC.</li>
  <li><strong>Ordem NÃO importa (equipe, comissão, grupo igualitário)?</strong> $\\rightarrow$ <strong>Combinação ($C_{n,p}$)</strong>.</li>
  <li><strong>Usa todos os elementos (fila, anagrama)?</strong> $\\rightarrow$ <strong>Permutação ($P_n = n!$)</strong>.</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Combinação com Restrição por Categoria) Uma unidade de vigilância possui 6 agentes veteranos e 4 agentes recém-nomeados. De quantas maneiras distintas é possível formar uma comissão de campo composta por 3 agentes veteranos e 2 agentes recém-nomeados?',
      options: ['26 maneiras.', '60 maneiras.', '120 maneiras.', '720 maneiras.'],
      ans: 2,
      comment: 'Como dentro de cada grupo não há distinção de cargos, a ordem NÃO importa (Combinação): C(6,3) × C(4,2) = [(6 × 5 × 4) / (3 × 2 × 1)] × [(4 × 3) / (2 × 1)] = 20 × 6 = 120 maneiras.',
    },
    {
      q: '(IBGP — Arranjo Simples vs. Combinação) Entre 8 supervisores da SEMUSA, deseja-se escolher 1 Coordenador-Geral, 1 Coordenador Adjunto e 1 Relator. O número de maneiras distintas de preencher essas 3 funções é:',
      options: ['56.', '168.', '336.', '512.'],
      ans: 2,
      comment: 'Como os cargos são distintos (a ordem importa), trata-se de Arranjo A(8,3) = 8 × 7 × 6 = 336 maneiras.',
    },
    {
      q: '(IBGP — Permutação com Elementos Juntos) De quantos modos distintos 5 agentes (incluindo João e Maria) podem se posicionar em uma fila indiana de modo que João e Maria fiquem sempre juntos?',
      options: ['24 modos.', '48 modos.', '60 modos.', '120 modos.'],
      ans: 1,
      comment: 'Considerando o bloco (João, Maria) como 1 único elemento, temos 4 elementos para permutar: 4! = 24. Como João e Maria podem trocar de posição entre si de 2! = 2 modos, o total é 24 × 2 = 48 modos.',
    },
    {
      q: '(IBGP — Permutação com Repetição: Anagramas) O número de anagramas distintos da palavra VETOR que começam por vogal é igual a:',
      options: ['24.', '48.', '60.', '120.'],
      ans: 1,
      comment: 'A palavra VETOR tem 5 letras distintas, sendo 2 vogais (E, O) e 3 consoantes (V, T, R). Para a 1ª posição há 2 escolhas (E ou O) e para as 4 posições restantes há 4! = 24 permutações. Total = 2 × 24 = 48 anagramas.',
    },
  ],
  flashcards: [
    {
      f: 'Qual é a pergunta-chave para decidir entre Arranjo e Combinação?',
      b: '"A ordem dos elementos escolhidos importa?" Se SIM (cargos distintos, senhas, pódio) → Arranjo; se NÃO (comissão, equipe, grupo) → Combinação.',
    },
    {
      f: 'Como calcular o número de anagramas de uma palavra com letras repetidas (ex.: BANANA)?',
      b: 'Usa-se Permutação com Repetição: divide-se o fatorial do total de letras pelo produto dos fatoriais das repetições: 6! / (3! · 2!) = 720 / 12 = 60.',
    },
    {
      f: 'Qual é o valor de 0! e 1!?',
      b: 'Por definição matemática, 0! = 1 e 1! = 1.',
    },
    {
      f: 'Como resolver problemas de permutação onde dois elementos devem ficar SEMPRE JUNTOS?',
      b: 'Amarra-se a dupla em um único "bloco" (reduzindo n para n-1 elementos) e multiplica-se por 2! (permutação interna da dupla).',
    },
    {
      f: 'Qual a fórmula da Permutação Circular de n pessoas em torno de uma mesa redonda?',
      b: 'PCₙ = (n - 1)!',
    },
  ],
};

// New Block 8.1 for rlm_8
const newBlock_RLM8_ProbabilidadeEspacosFinitos = {
  title: 'Bloco 8.1 — Probabilidade: Conceitos Básicos, Espaços Amostrais Finitos, Probabilidade da União, Eventos Independentes, Complementar e Condicional',
  sourceRef: 'Anexo IV — Raciocínio Lógico (Item 8: Probabilidade: conceitos básicos e cálculo de probabilidades em espaços amostrais finitos)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-indigo-950/90 text-white border border-indigo-700">
    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-slate-950">Item 8 de Raciocínio Lógico — Probabilidade</span>
    <h4 class="text-base sm:text-lg font-extrabold mt-1">Probabilidade em Espaços Amostrais Finitos Equiprováveis ($P(A) = \\frac{n(A)}{n(\\Omega)}$)</h4>
    <p class="text-xs text-indigo-100 mt-1">Domine os conceitos de experimento aleatório, espaço amostral ($\\Omega$), evento ($A$), probabilidade da união, probabilidade complementar ("pelo menos um"), eventos independentes e probabilidade condicional.</p>
  </div>

  <div class="overflow-x-auto">
    <table class="w-full text-left border-collapse text-xs border border-slate-300">
      <thead>
        <tr class="bg-slate-900 text-white">
          <th class="p-2.5 border border-slate-700">Conceito / Regra de Probabilidade</th>
          <th class="p-2.5 border border-slate-700">Fórmula Matemática</th>
          <th class="p-2.5 border border-slate-700">Quando Usar na Prova da IBGP</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr class="bg-white">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">1. Definição de Laplace (Espaço Finito Equiprovável)</td>
          <td class="p-2.5 border border-slate-200">$$P(A) = \\frac{n(A)}{n(\\Omega)} = \\frac{\\text{Casos Favoráveis}}{\\text{Casos Possíveis}}$$<br>Propriedade: $0 \\le P(A) \\le 1$ (ou $0\\%$ a $100\\%$).</td>
          <td class="p-2.5 border border-slate-200">$P(\\emptyset) = 0$ (evento impossível) e $P(\\Omega) = 1$ (evento certo).</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">2. Probabilidade Complementar ("Pelo menos um")</td>
          <td class="p-2.5 border border-slate-200">$$P(A^c) = 1 - P(A)$$<br>$$P(\\text{pelo menos } 1) = 1 - P(\\text{nenhum})$$</td>
          <td class="p-2.5 border border-slate-200">Sempre que o enunciado pedir a probabilidade de ocorrer <strong>"pelo menos um"</strong> (ou "no mínimo um"), calcule $1 - P(\\text{nenhum})$.</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">3. Probabilidade da União ("A OU B")</td>
          <td class="p-2.5 border border-slate-200">$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$<br>Se $A$ e $B$ forem <strong>mutuamente exclusivos</strong> ($A \\cap B = \\emptyset$): $P(A \\cup B) = P(A) + P(B)$.</td>
          <td class="p-2.5 border border-slate-200">Nunca esqueça de subtrair a interseção $P(A \\cap B)$ para não contar duas vezes quem pertence a ambos os grupos!</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2.5 font-bold text-slate-900 border border-slate-200">4. Interseção ("A E B") e Condicional ("Sabendo que...")</td>
          <td class="p-2.5 border border-slate-200">• <strong>Independentes (com reposição):</strong> $P(A \\cap B) = P(A) \\cdot P(B)$.<br>• <strong>Dependentes (sem reposição):</strong> $P(A \\cap B) = P(A) \\cdot P(B|A)$.<br>• <strong>Condicional:</strong> $P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{n(A \\cap B)}{n(B)}$.</td>
          <td class="p-2.5 border border-slate-200">Na condicional ("Sabendo-se que o imóvel sorteado é da zona rural..."), reduza o denominador diretamente para o subgrupo informado!</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Fórmula Base:</strong> $P(A) = \\text{Favoráveis} / \\text{Total}$, sempre entre $0$ e $1$.</li>
  <li><strong>Regra do "OU":</strong> $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.</li>
  <li><strong>Regra do "E":</strong> Multiplique as probabilidades ($P(A) \\times P(B)$). Cuidado com sorteios <strong>sem reposição</strong> (o total e os favoráveis diminuem em $1$!).</li>
  <li><strong>"Pelo menos um":</strong> $1 - P(\\text{nenhum})$.</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Probabilidade da União em Espaço Amostral Finito) Em uma urna numerada de 1 a 30 correspondente aos quarteirões de um bairro, sorteia-se ao acaso 1 quarteirão para auditoria. A probabilidade de o número sorteado ser múltiplo de 4 OU múltiplo de 6 é de:',
      options: ['3/10 (30%).', '1/3 (33,3%).', '2/5 (40%).', '7/30 (23,3%).'],
      ans: 0,
      comment: 'Espaço amostral n(Ω) = 30. Múltiplos de 4 até 30: {4, 8, 12, 16, 20, 24, 28} → n(A) = 7. Múltiplos de 6 até 30: {6, 12, 18, 24, 30} → n(B) = 5. Interseção (múltiplos de MMC(4,6) = 12): {12, 24} → n(A ∩ B) = 2. Logo, n(A ∪ B) = 7 + 5 - 2 = 10. Probabilidade = 10/30 = 3/10 (30%).',
    },
    {
      q: '(IBGP — Probabilidade Sem Reposição) Uma caixa contém 6 amostras positivas e 4 amostras negativas para larvas de Aedes aegypti. Retirando-se sucessivamente e sem reposição 2 amostras ao acaso, a probabilidade de ambas serem positivas é de:',
      options: ['1/3.', '9/25.', '2/5.', '1/2.'],
      ans: 0,
      comment: 'Total = 10 amostras. 1ª retirada positiva: 6/10. 2ª retirada positiva (sem reposição): restam 5 positivas em 9 amostras → 5/9. Multiplicando: (6/10) × (5/9) = 30/90 = 1/3.',
    },
    {
      q: '(IBGP — Probabilidade Complementar: "Pelo menos um") A probabilidade de chover em determinado distrito no sábado é de 40% e, de forma independente, a probabilidade de chover no domingo é de 30%. A probabilidade de chover em PELO MENOS UM desses dois dias do fim de semana é:',
      options: ['58%.', '62%.', '70%.', '42%.'],
      ans: 0,
      comment: 'Probabilidade de NÃO chover no sábado = 60% (0,6). Probabilidade de NÃO chover no domingo = 70% (0,7). Probabilidade de não chover em nenhum dos dois dias = 0,6 × 0,7 = 0,42 (42%). Logo, P(pelo menos um dia) = 1 - 0,42 = 0,58 = 58%.',
    },
    {
      q: '(IBGP — Lançamento de Dois Dados) No lançamento simultâneo de dois dados honestos de 6 faces, a probabilidade de a soma dos pontos obtidos nas faces superiores ser igual a 8 é:',
      options: ['1/6.', '5/36.', '1/9.', '7/36.'],
      ans: 1,
      comment: 'Espaço amostral de dois dados: n(Ω) = 6 × 6 = 36 pares. Pares cuja soma é 8: (2,6), (3,5), (4,4), (5,3) e (6,2) → 5 casos favoráveis. Portanto, P = 5/36.',
    },
  ],
  flashcards: [
    {
      f: 'Qual é a fórmula da Probabilidade da União P(A ∪ B)?',
      b: 'P(A ∪ B) = P(A) + P(B) - P(A ∩ B).',
    },
    {
      f: 'Qual é a técnica mais rápida para calcular a probabilidade de ocorrer "pelo menos um" sucesso?',
      b: 'Usar o evento complementar: P(pelo menos 1) = 1 - P(nenhum).',
    },
    {
      f: 'Quando dois eventos A e B são chamados de mutuamente exclusivos?',
      b: 'Quando não podem ocorrer simultaneamente, isto é, A ∩ B = ∅ e P(A ∩ B) = 0.',
    },
    {
      f: 'Qual o tamanho do espaço amostral no lançamento simultâneo de dois dados de 6 faces e de n moedas?',
      b: 'Dois dados: 6 × 6 = 36 resultados possíveis. n moedas: 2ⁿ resultados possíveis.',
    },
    {
      f: 'Na probabilidade condicional P(A|B), qual conjunto passa a ser o novo denominador?',
      b: 'Apenas o conjunto B (a condição que já sabemos ter ocorrido): P(A|B) = n(A ∩ B) / n(B).',
    },
  ],
};

// New Block 8.4 for rlm_8
const newBlock_RLM8_RaciocinioSequencialCiclosCalendario = {
  title: 'Bloco 8.4 — Resolução de Problemas Envolvendo Raciocínio Lógico e Sequencial: Calendários, Posicionamento em Filas, Ciclos e Dedução Sequencial',
  sourceRef: 'Anexo IV — Raciocínio Lógico (Item 8: Resolução de problemas envolvendo raciocínio lógico e sequencial)',
  modoA: `<div class="space-y-4">
  <div class="p-4 rounded-xl bg-teal-950/90 text-white border border-teal-700">
    <h4 class="text-base font-extrabold">Problemas Clássicos de Raciocínio Lógico e Sequencial na IBGP</h4>
    <p class="text-xs text-teal-100 mt-1">Além da Casa dos Pombos, a parte final do Item 8 cobra problemas de <strong>calendários (dias da semana e anos bissextos)</strong>, <strong>posicionamento em filas</strong>, <strong>subida/descida em etapas</strong> e <strong>dedução sequencial</strong>.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
      <div class="font-extrabold text-slate-900">1. Problemas de Calendário (Módulo 7)</div>
      <p class="text-slate-700">Os dias da semana repetem-se a cada <strong>$7$ dias</strong>.<br>• <strong>Ano comum ($365$ dias):</strong> $365 = 52 \\times 7 + 1$ (avança <strong>$1$ dia</strong> da semana).<br>• <strong>Ano bissexto ($366$ dias, múltiplo de 4):</strong> $366 = 52 \\times 7 + 2$ (avança <strong>$2$ dias</strong> se passar por 29/fev).<br>• <strong>Mês de 31 dias:</strong> possui exatamente <strong>3 dias da semana</strong> que aparecem 5 vezes (os dias 1º, 2 e 3 do mês!).</p>
    </div>
    <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 space-y-1.5">
      <div class="font-extrabold text-teal-950">2. Posição em Filas e Intervalos</div>
      <p class="text-slate-700">• Se uma pessoa é a $a$-ésima de frente para trás e a $b$-ésima de trás para frente, o total na fila é:<br><strong>$N = a + b - 1$</strong> (subtrai $1$ para não contar a própria pessoa duas vezes!).<br>• <strong>Postes/Árvores em linha aberta:</strong> $\\text{Nº de objetos} = \\frac{\\text{Comprimento}}{\\text{Espaçamento}} + 1$.</p>
    </div>
    <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 space-y-1.5">
      <div class="font-extrabold text-amber-950">3. Problemas de Subida com Recuo</div>
      <p class="text-slate-700">Se algo avança $S$ metros de dia e recua $D$ metros à noite para atingir o topo $H$:<br>Subtraia primeiro o último avanço $(H - S)$, divida pelo saldo diário $(S - D)$ e some $+1$ dia final (pois ao atingir o topo não escorrega de volta!).</p>
    </div>
  </div>
</div>`,
  modoB: `<ul class="space-y-1.5 text-xs">
  <li><strong>Calendário:</strong> Divida os dias corridos por $7$ e some o resto ao dia da semana inicial.</li>
  <li><strong>Fila:</strong> $\\text{Total} = \\text{Posição da frente} + \\text{Posição de trás} - 1$.</li>
  <li><strong>Plantio/Armadilhas em linha reta:</strong> $\\text{Total} = (L / d) + 1$.</li>
</ul>`,
  questions: [
    {
      q: '(IBGP — Raciocínio Sequencial: Calendário) A prova objetiva do concurso da SEMUSA Porto Velho ocorrerá em um domingo, dia 13/12/2026. Daqui a exatos 100 dias após essa data, o dia da semana será:',
      options: ['Segunda-feira.', 'Terça-feira.', 'Quarta-feira.', 'Quinta-feira.'],
      ans: 1,
      comment: 'Dividimos 100 por 7 (ciclo semanal): 100 = 7 × 14 + 2 (resto = 2). Avançando 2 dias a partir de domingo: +1 = segunda-feira; +2 = terça-feira.',
    },
    {
      q: '(IBGP — Raciocínio Lógico em Fila) Em uma fila única de atendimento de vacinação, Lucas observa que é o 14º a partir do início da fila e o 19º a contar do final da fila. O número total de pessoas nessa fila é:',
      options: ['31 pessoas.', '32 pessoas.', '33 pessoas.', '34 pessoas.'],
      ans: 1,
      comment: 'Há 13 pessoas à frente de Lucas e 18 pessoas atrás dele. Total = 14 + 19 - 1 = 32 pessoas.',
    },
    {
      q: '(IBGP — Raciocínio Sequencial: Espaçamento de Armadilhas) Ao longo de uma avenida retilínea de 600 metros de extensão, um agente deve instalar ovitrampas a cada 25 metros, colocando obrigatoriamente uma no início (marco 0 m) e uma no final (marco 600 m) da avenida. O total de ovitrampas instaladas será:',
      options: ['23.', '24.', '25.', '26.'],
      ans: 2,
      comment: 'Número de intervalos de 25 m = 600 ÷ 25 = 24 intervalos. Como há uma armadilha na extremidade inicial e outra na final, o total de pontos é 24 + 1 = 25 ovitrampas.',
    },
  ],
  flashcards: [
    {
      f: 'Se uma pessoa ocupa a posição A de frente para trás e a posição B de trás para frente em uma fila, qual é o total de pessoas na fila?',
      b: 'Total = A + B - 1.',
    },
    {
      f: 'Como descobrir o dia da semana após N dias corridos?',
      b: 'Divide-se N por 7 e avança-se o número de dias correspondente ao RESTO da divisão.',
    },
    {
      f: 'Quantas armadilhas são necessárias em uma rua reta de comprimento L com espaçamento d, incluindo início e fim?',
      b: 'Total = (L / d) + 1.',
    },
    {
      f: 'Em um mês de 31 dias, quantos dias da semana se repetem exatamente 5 vezes?',
      b: 'Exatamente 3 dias da semana (aqueles que caem nos dias 1, 2 e 3 do mês).',
    },
  ],
};

function renumberBlocks(blocks, lessonNum) {
  return blocks.map((b, idx) => {
    const cleanTitle = b.title.replace(/^Bloco\s+\d+\.\d+\s*—\s*/i, '');
    return {
      ...b,
      title: `Bloco ${lessonNum}.${idx + 1} — ${cleanTitle}`,
    };
  });
}

function finalizeLesson(lesson) {
  let qCount = 0;
  let fcCount = 0;
  lesson.blocks.forEach(b => {
    qCount += (b.questions || []).length;
    fcCount += (b.flashcards || []).length;
  });
  lesson.questionsCount = qCount;
  lesson.flashcardsCount = fcCount;
  return lesson;
}

const newRlmLessons = [
  // 1 - Conjuntos numéricos: naturais, inteiros, racionais e reais...
  finalizeLesson({
    id: 'rlm_1',
    cat: 'rlm',
    catName: 'Raciocínio Lógico',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '1. Conjuntos numéricos: naturais, inteiros, racionais e reais. Operações de adição, subtração, multiplicação, divisão, potenciação e radiciação; números decimais; valor absoluto; propriedades no conjunto dos números naturais; decomposição de um número natural em fatores primos; múltiplos e divisores; máximo divisor comum e mínimo múltiplo comum',
    editalRef: 'Item 1 de Raciocínio Lógico — Conjuntos numéricos: naturais, inteiros, racionais e reais. Operações de adição, subtração, multiplicação, divisão, potenciação e radiciação; números decimais; valor absoluto; propriedades no conjunto dos números naturais; decomposição de um número natural em fatores primos; múltiplos e divisores; máximo divisor comum e mínimo múltiplo comum.',
    mindMap: {
      centralTitle: '1. Conjuntos Numéricos, Operações, Primos, MDC e MMC',
      centralSubtitle: 'Item 1 de Raciocínio Lógico — ℕ, ℤ, ℚ, ℝ, Decimais, Módulo e Divisibilidade',
      branches: [
        {
          title: '1. Conjuntos Numéricos (ℕ, ℤ, ℚ, ℝ)',
          icon: '🔢',
          color: 'teal',
          nodes: [
            { label: 'Inclusão', detail: 'ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ e ℚ ∩ 𝕀 = ∅' },
            { label: 'Racionais (ℚ)', detail: 'Frações a/b, decimais exatos e dízimas periódicas' },
            { label: 'Propriedades em ℕ', detail: 'Comutativa, associativa, distributiva e neutros (0 e 1)' },
          ],
        },
        {
          title: '2. Operações, Potências e Raízes',
          icon: '⚡',
          color: 'indigo',
          nodes: [
            { label: 'Potenciação', detail: 'aᵐ·aⁿ = aᵐ⁺ⁿ | (-3)² = +9 vs. -3² = -9' },
            { label: 'Expoente Fracionário', detail: 'a^(m/n) = ⁿ√(aᵐ)' },
            { label: 'Valor Absoluto |x|', detail: 'Distância até a origem (sempre ≥ 0)' },
          ],
        },
        {
          title: '3. Fatores Primos e Divisores',
          icon: '🧩',
          color: 'amber',
          nodes: [
            { label: 'Fatoração Prima', detail: 'N = p₁ᵃ · p₂ᵇ · p₃ᶜ' },
            { label: 'Nº de Divisores', detail: 'n(D) = (a+1)(b+1)(c+1)' },
            { label: 'Menor Primo', detail: '2 (único primo par; 1 não é primo)' },
          ],
        },
        {
          title: '4. MMC vs. MDC na Prática',
          icon: '🎯',
          color: 'emerald',
          nodes: [
            { label: 'MMC (Múltiplo)', detail: 'Ciclos simultâneos e encontro futuro' },
            { label: 'MDC (Divisor)', detail: 'Divisão exata em grupos de tamanho máximo' },
            { label: 'Teorema', detail: 'MMC(a,b) × MDC(a,b) = a × b' },
          ],
        },
      ],
    },
    blocks: renumberBlocks(
      [
        clone(newBlock_RLM1_OperacoesPotRadDecimais),
        clone(byId['rlm_3'].blocks[2]),
        clone(newBlock_RLM1_MMCMDCPrimos),
      ],
      1
    ),
  }),

  // 2 - Razões e proporções: grandezas direta e inversamente proporcionais; regra de três simples e composta. Porcentagem.
  finalizeLesson({
    id: 'rlm_2',
    cat: 'rlm',
    catName: 'Raciocínio Lógico',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '2. Razões e proporções: grandezas direta e inversamente proporcionais; regra de três simples e composta. Porcentagem',
    editalRef: 'Item 2 de Raciocínio Lógico — Razões e proporções: grandezas direta e inversamente proporcionais; regra de três simples e composta. Porcentagem.',
    mindMap: clone(byId['rlm_4'].mindMap),
    blocks: renumberBlocks(
      [
        clone(byId['rlm_4'].blocks[0]),
        clone(byId['rlm_4'].blocks[1]),
        clone(byId['rlm_4'].blocks[2]),
        clone(byId['rlm_4'].blocks[3]),
      ],
      2
    ),
  }),

  // 3 - Grandezas e medidas: quantidade, tempo, comprimento, capacidade e massa.
  finalizeLesson({
    id: 'rlm_3',
    cat: 'rlm',
    catName: 'Raciocínio Lógico',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '3. Grandezas e medidas: quantidade, tempo, comprimento, capacidade e massa',
    editalRef: 'Item 3 de Raciocínio Lógico — Grandezas e medidas: quantidade, tempo, comprimento, capacidade e massa.',
    mindMap: {
      centralTitle: '3. Grandezas e Medidas',
      centralSubtitle: 'Item 3 de Raciocínio Lógico — Quantidade, Tempo, Comprimento, Capacidade e Massa',
      branches: [
        {
          title: '1. Quantidade e Tempo (Base 60)',
          icon: '⏱️',
          color: 'teal',
          nodes: [
            { label: 'Quantidade', detail: 'Dúzia (12), Grosa (144), Resma (500 folhas)' },
            { label: 'Tempo', detail: '1 h = 60 min = 3.600 s' },
            { label: 'Hora Decimal', detail: '0,4 h = 0,4 × 60 = 24 min (3,5 h = 3h 30min)' },
          ],
        },
        {
          title: '2. Comprimento, Área e Volume',
          icon: '📏',
          color: 'indigo',
          nodes: [
            { label: 'Comprimento (×10)', detail: 'km ↔ hm ↔ dam ↔ m ↔ dm ↔ cm ↔ mm' },
            { label: 'Área (×100)', detail: '1 ha = 1 hm² = 10.000 m²' },
            { label: 'Volume (×1.000)', detail: 'm³ ↔ dm³ ↔ cm³' },
          ],
        },
        {
          title: '3. Capacidade e Cubagem ACE',
          icon: '💧',
          color: 'amber',
          nodes: [
            { label: 'Ponte 1 m³', detail: '1 m³ = 1.000 Litros' },
            { label: 'Ponte 1 dm³', detail: '1 dm³ = 1 Litro' },
            { label: 'Ponte 1 cm³', detail: '1 cm³ = 1 mL' },
          ],
        },
        {
          title: '4. Massa e Dosagem de Larvicida',
          icon: '⚖️',
          color: 'emerald',
          nodes: [
            { label: 'Tonelada e Quilo', detail: '1 t = 1.000 kg | 1 kg = 1.000 g' },
            { label: 'Grama e Miligrama', detail: '1 g = 1.000 mg' },
            { label: 'Aplicação ACE', detail: 'Cubagem em m³ → Litros → Gramas de larvicida' },
          ],
        },
      ],
    },
    blocks: renumberBlocks(
      [
        clone(newBlock_RLM3_GrandezasMedidasTempoMassaCap),
        clone(byId['rlm_6'].blocks[0]),
        clone(byId['rlm_6'].blocks[1]),
        clone(byId['rlm_6'].blocks[3]),
      ],
      3
    ),
  }),

  // 4 - Equações do 1º grau, sistemas de equações do 1º grau e função do 1º grau: resolução de problemas. Média aritmética simples e ponderada.
  finalizeLesson({
    id: 'rlm_4',
    cat: 'rlm',
    catName: 'Raciocínio Lógico',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '4. Equações do 1º grau, sistemas de equações do 1º grau e função do 1º grau: resolução de problemas. Média aritmética simples e ponderada',
    editalRef: 'Item 4 de Raciocínio Lógico — Equações do 1º grau, sistemas de equações do 1º grau e função do 1º grau: resolução de problemas. Média aritmética simples e ponderada.',
    mindMap: {
      centralTitle: '4. Equações, Sistemas, Função do 1º Grau e Médias',
      centralSubtitle: 'Item 4 de Raciocínio Lógico — Álgebra Linear e Estatística Básica IBGP',
      branches: [
        {
          title: '1. Equações do 1º Grau',
          icon: '🧮',
          color: 'teal',
          nodes: [
            { label: 'Forma Geral', detail: 'ax + b = 0 ⇒ x = -b/a' },
            { label: 'Frações Sucessivas', detail: 'Multiplique pelo MMC dos denominadores' },
            { label: 'Linguagem Algébrica', detail: 'Consecutivos (x, x+1), dobro (2x), terça parte (x/3)' },
          ],
        },
        {
          title: '2. Sistemas Lineares (2×2)',
          icon: '🔗',
          color: 'indigo',
          nodes: [
            { label: 'Método da Adição', detail: 'Soma as equações cancelando uma incógnita' },
            { label: 'Substituição', detail: 'Isola x na 1ª e substitui na 2ª' },
            { label: 'Problemas Clássicos', detail: 'Motos (2 rodas) vs. Carros (4 rodas); Acertos vs. Erros' },
          ],
        },
        {
          title: '3. Função do 1º Grau f(x) = ax + b',
          icon: '📈',
          color: 'amber',
          nodes: [
            { label: 'Coeficiente Linear (b)', detail: 'Valor inicial quando x = 0 (corta eixo y)' },
            { label: 'Coeficiente Angular (a)', detail: 'Taxa de variação (a > 0 crescente; a < 0 decrescente)' },
            { label: 'Raiz da Função', detail: 'f(x) = 0 ⇒ x = -b/a (corta eixo x)' },
          ],
        },
        {
          title: '4. Médias Simples e Ponderada',
          icon: '📊',
          color: 'emerald',
          nodes: [
            { label: 'Média Simples', detail: 'Soma = Média × n' },
            { label: 'Média Ponderada', detail: 'Σ(xᵢ · pᵢ) ÷ Σ(pᵢ)' },
            { label: 'Pegadinha IBGP', detail: 'Dividir sempre pela SOMA DOS PESOS!' },
          ],
        },
      ],
    },
    blocks: renumberBlocks(
      [
        clone(newBlock_RLM4_EquacoesSistemasFuncao1Grau),
        clone(byId['rlm_3'].blocks[1]),
        clone(newBlock_RLM4_MediasSimplesPonderadaLab),
      ],
      4
    ),
  }),

  // 5 - Noções de lógica matemática: proposições simples e compostas; conectivos lógicos; tabelas-verdade; negação de proposições; equivalências e implicações lógicas; quantificadores.
  finalizeLesson({
    id: 'rlm_5',
    cat: 'rlm',
    catName: 'Raciocínio Lógico',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '5. Noções de lógica matemática: proposições simples e compostas; conectivos lógicos; tabelas-verdade; negação de proposições; equivalências e implicações lógicas; quantificadores',
    editalRef: 'Item 5 de Raciocínio Lógico — Noções de lógica matemática: proposições simples e compostas; conectivos lógicos; tabelas-verdade; negação de proposições; equivalências e implicações lógicas; quantificadores.',
    mindMap: clone(byId['rlm_1'].mindMap),
    blocks: renumberBlocks(
      [
        clone(byId['rlm_1'].blocks[0]),
        clone(byId['rlm_1'].blocks[1]),
        clone(byId['rlm_1'].blocks[2]),
        clone(byId['rlm_1'].blocks[3]),
        clone(byId['rlm_2'].blocks[0]),
        clone(byId['rlm_2'].blocks[1]),
      ],
      5
    ),
  }),

  // 6 - Argumentação lógica... Diagramas lógicos... Linguagem dos conjuntos... Sequências lógicas... Problemas de associação lógica e de verdades e mentiras.
  finalizeLesson({
    id: 'rlm_6',
    cat: 'rlm',
    catName: 'Raciocínio Lógico',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '6. Argumentação lógica: premissas e conclusões; inferências; análise e validade de argumentos. Diagramas lógicos. Linguagem dos conjuntos: notação e representação; elementos e relação de pertinência; igualdade de conjuntos; relação de inclusão e subconjuntos; conjunto unitário, conjunto vazio, conjunto universo e conjunto das partes; conjuntos finitos e infinitos; operações com conjuntos - união, interseção, diferença e complementar. Sequências lógicas com números, letras, palavras e figuras. Problemas de associação lógica e de verdades e mentiras',
    editalRef: 'Item 6 de Raciocínio Lógico — Argumentação lógica: premissas e conclusões; inferências; análise e validade de argumentos. Diagramas lógicos. Linguagem dos conjuntos: notação e representação; elementos e relação de pertinência; igualdade de conjuntos; relação de inclusão e subconjuntos; conjunto unitário, conjunto vazio, conjunto universo e conjunto das partes; conjuntos finitos e infinitos; operações com conjuntos - união, interseção, diferença e complementar. Sequências lógicas com números, letras, palavras e figuras. Problemas de associação lógica e de verdades e mentiras.',
    mindMap: {
      centralTitle: '6. Argumentação, Diagramas, Conjuntos, Sequências e Associação',
      centralSubtitle: 'Item 6 de Raciocínio Lógico — Validade de Argumentos, Venn, 2ⁿ, Ciclos e Verdades/Mentiras',
      branches: [
        {
          title: '1. Argumentação e Diagramas Lógicos',
          icon: '🧠',
          color: 'teal',
          nodes: [
            { label: 'Validade Dedutiva', detail: 'Premissas V garantem Conclusão V (Modus Ponens / Tollens)' },
            { label: 'Diagramas Categóricos', detail: 'Todo A é B (inclusão), Nenhum (disjuntos), Algum (interseção)' },
            { label: 'Sofismas Clássicos', detail: 'Afirmação do consequente e negação do antecedente' },
          ],
        },
        {
          title: '2. Linguagem e Operações de Conjuntos',
          icon: '⭕',
          color: 'indigo',
          nodes: [
            { label: 'Pertinência vs. Inclusão', detail: '∈ (elemento-conjunto) vs. ⊂ (conjunto-conjunto); ∅ ⊂ A' },
            { label: 'Conjunto das Partes P(A)', detail: '2ⁿ subconjuntos no total (2ⁿ - 1 não-vazios)' },
            { label: 'Operações e Venn', detail: 'n(A ∪ B) = n(A) + n(B) - n(A ∩ B); Diferença A - B; Complementar' },
          ],
        },
        {
          title: '3. Sequências Lógicas',
          icon: '🔄',
          color: 'amber',
          nodes: [
            { label: 'Números e Letras', detail: 'PA, PG, diferenças de 2ª ordem, Fibonacci e posições no alfabeto' },
            { label: 'Palavras e Ciclos', detail: 'Dividir N pelo período T e usar o RESTO (resto 0 = último)' },
            { label: 'Figuras', detail: 'Rotação de ângulos, simetria e contagem de lados/vértices' },
          ],
        },
        {
          title: '4. Associação e Verdades/Mentiras',
          icon: '🕵️',
          color: 'emerald',
          nodes: [
            { label: 'Associação Lógica', detail: 'Tabela de cruzamento: cada "Sim" bloqueia linha e coluna' },
            { label: 'Verdades e Mentiras', detail: 'Localizar 2 falas contraditórias (1 V e 1 F obrigatoriamente)' },
            { label: 'Teste de Hipótese', detail: 'Validar com a quantidade de verdades informada no enunciado' },
          ],
        },
      ],
    },
    blocks: renumberBlocks(
      [
        clone(byId['rlm_2'].blocks[2]),
        clone(byId['rlm_2'].blocks[3]),
        clone(byId['rlm_3'].blocks[0]),
        clone(byId['rlm_3'].blocks[3]),
        clone(newBlock_RLM6_ConjuntosSequenciasAssociacaoVerdadesMentiras),
      ],
      6
    ),
  }),

  // 7 - Análise combinatória: princípio fundamental da contagem, arranjos, permutações e combinações.
  finalizeLesson({
    id: 'rlm_7',
    cat: 'rlm',
    catName: 'Raciocínio Lógico',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '7. Análise combinatória: princípio fundamental da contagem, arranjos, permutações e combinações',
    editalRef: 'Item 7 de Raciocínio Lógico — Análise combinatória: princípio fundamental da contagem, arranjos, permutações e combinações.',
    mindMap: clone(byId['rlm_5'].mindMap),
    blocks: renumberBlocks(
      [
        clone(byId['rlm_5'].blocks[0]),
        clone(byId['rlm_5'].blocks[1]),
        clone(byId['rlm_5'].blocks[2]),
        clone(newBlock_RLM7_CombinatoriaCompletaIBGP),
      ],
      7
    ),
  }),

  // 8 - Probabilidade: conceitos básicos e cálculo de probabilidades em espaços amostrais finitos. Resolução de problemas envolvendo raciocínio lógico e sequencial.
  finalizeLesson({
    id: 'rlm_8',
    cat: 'rlm',
    catName: 'Raciocínio Lógico',
    weight: '10 Questões • Peso 2 (20 pts)',
    title: '8. Probabilidade: conceitos básicos e cálculo de probabilidades em espaços amostrais finitos. Resolução de problemas envolvendo raciocínio lógico e sequencial',
    editalRef: 'Item 8 de Raciocínio Lógico — Probabilidade: conceitos básicos e cálculo de probabilidades em espaços amostrais finitos. Resolução de problemas envolvendo raciocínio lógico e sequencial.',
    mindMap: {
      centralTitle: '8. Probabilidade e Raciocínio Lógico e Sequencial',
      centralSubtitle: 'Item 8 de Raciocínio Lógico — Espaços Finitos, União, Condicional, Casa dos Pombos e Sequencial',
      branches: [
        {
          title: '1. Probabilidade em Espaços Finitos',
          icon: '🎲',
          color: 'teal',
          nodes: [
            { label: 'Lei de Laplace', detail: 'P(A) = n(A) / n(Ω) (Favoráveis ÷ Possíveis)' },
            { label: 'Complementar', detail: 'P(pelo menos 1) = 1 - P(nenhum)' },
            { label: 'Dados e Moedas', detail: '2 dados = 36 pares; n moedas = 2ⁿ casos' },
          ],
        },
        {
          title: '2. União ("OU"), Interseção ("E") e Condicional',
          icon: '🎯',
          color: 'indigo',
          nodes: [
            { label: 'Regra do OU', detail: 'P(A ∪ B) = P(A) + P(B) - P(A ∩ B)' },
            { label: 'Regra do E', detail: 'Com reposição: P(A)·P(B) | Sem reposição: reduz total e favoráveis' },
            { label: 'Condicional P(A|B)', detail: 'Restringe o denominador ao grupo B informado' },
          ],
        },
        {
          title: '3. Princípio da Casa dos Pombos',
          icon: '🕊️',
          color: 'amber',
          nodes: [
            { label: 'Pior Cenário', detail: 'Esgotar (k - 1) de cada uma das n categorias e somar + 1' },
            { label: 'Fórmula Direta', detail: 'N_mín = n × (k - 1) + 1' },
            { label: 'Certeza Dedutiva', detail: 'Garante "com certeza" pelo menos k elementos do mesmo grupo' },
          ],
        },
        {
          title: '4. Raciocínio Lógico e Sequencial',
          icon: '📅',
          color: 'emerald',
          nodes: [
            { label: 'Calendários', detail: 'Ciclo de 7 dias (avança o resto de N ÷ 7)' },
            { label: 'Posicionamento em Filas', detail: 'Total = Frente + Trás - 1' },
            { label: 'Espaçamento em Linha', detail: 'Total de pontos = (Comprimento ÷ Distância) + 1' },
          ],
        },
      ],
    },
    blocks: renumberBlocks(
      [
        clone(newBlock_RLM8_ProbabilidadeEspacosFinitos),
        clone(byId['rlm_5'].blocks[3]),
        clone(byId['rlm_6'].blocks[2]),
        clone(newBlock_RLM8_RaciocinioSequencialCiclosCalendario),
      ],
      8
    ),
  }),
];

const espLessons = oldLessons.filter(l => l.cat === 'esp');
const legLessons = oldLessons.filter(l => l.cat === 'leg');
const porLessons = oldLessons.filter(l => l.cat === 'por');
const atuLessons = oldLessons.filter(l => l.cat === 'atu');

const updatedData = {
  ...rawData,
  lessons: [
    ...espLessons,
    ...legLessons,
    ...porLessons,
    ...newRlmLessons,
    ...atuLessons,
  ],
};

const jsonString = JSON.stringify(updatedData, null, 2);
fs.writeFileSync(publicJsonPath, jsonString, 'utf8');
console.log('Wrote JSON:', publicJsonPath);

if (fs.existsSync(rootJsonPath)) {
  fs.writeFileSync(rootJsonPath, jsonString, 'utf8');
  console.log('Wrote JSON:', rootJsonPath);
}

const jsString = `window.APP_DATA = ${jsonString};\nwindow.LOCAL_APP_DATA = window.APP_DATA;\n`;
if (fs.existsSync(publicJsPath)) {
  fs.writeFileSync(publicJsPath, jsString, 'utf8');
  console.log('Wrote JS:', publicJsPath);
}
if (fs.existsSync(rootJsPath)) {
  fs.writeFileSync(rootJsPath, jsString, 'utf8');
  console.log('Wrote JS:', rootJsPath);
}

console.log('Total lessons in app_data.json:', updatedData.lessons.length);
console.log('Summary of 8 Categorized Raciocínio Lógico Lessons (rlm_1..rlm_8):');
newRlmLessons.forEach(l => {
  console.log(`  ${l.id}: ${l.title} (${l.blocks.length} blocos, ${l.questionsCount} Q, ${l.flashcardsCount} FC)`);
});
