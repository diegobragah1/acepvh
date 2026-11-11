import React, { useState, useMemo } from 'react';
import type { Lesson } from '../../types';

const lomImage = new URL('../../assets/images/lom_pvh_memorizacao_1794411566209.jpg', import.meta.url).href;
const vetoresImage = new URL('../../assets/images/vetores_endemias_memorizacao_1794411569409.jpg', import.meta.url).href;
const liraaImage = new URL('../../assets/images/liraa_larvicidas_memorizacao_1794411571364.jpg', import.meta.url).href;
const susImage = new URL('../../assets/images/sus_ace_memorizacao_1794411572961.jpg', import.meta.url).href;

export interface HotspotPin {
  id: string;
  x: number;
  y: number;
  badge: string;
  title: string;
  rule: string;
  examTrap: string;
}

export interface MemorizationPlate {
  id: string;
  category: 'leg_lom' | 'esp_vetores' | 'esp_liraa' | 'leg_sus';
  title: string;
  subtitle: string;
  editalTag: string;
  imageUrl: string;
  imageAlt: string;
  hotspots: HotspotPin[];
}

const MEMORIZATION_PLATES: MemorizationPlate[] = [
  {
    id: 'lom_pvh',
    category: 'leg_lom',
    title: 'Lei Orgânica de Porto Velho — Gatilhos Visuais de Prova',
    subtitle: 'Símbolos Oficiais, Patrimônio Natural Exclusivo, Fórmula 2–10–2/3 e Prazos Críticos',
    editalTag: 'Aula leg_1 • Arts. 3º, 5º, 24, 42–44, 62 e 75 da LOM-PVH',
    imageUrl: lomImage,
    imageAlt: 'Infográfico de memorização da Lei Orgânica de Porto Velho',
    hotspots: [
      {
        id: 'lom_simbolos',
        x: 18,
        y: 44,
        badge: 'Art. 3º',
        title: '3 Símbolos Oficiais de Porto Velho',
        rule: 'São símbolos do Município: a Bandeira, o Hino e o Brasão (Lei Municipal nº 249/1983). As Três Caixas d’Água integram o Brasão e a Bandeira.',
        examTrap: 'Pegadinha IBGP: incluir "Selo Municipal" ou "Armas" como 4º símbolo autônomo na LOM.',
      },
      {
        id: 'lom_boto',
        x: 38,
        y: 52,
        badge: 'Art. 5º, VII',
        title: 'Boto do Rio Madeira — Patrimônio Natural',
        rule: 'Constitui patrimônio natural do Município de Porto Velho o boto que viva e habite nas águas do Rio Madeira e seus afluentes nos limites municipais.',
        examTrap: 'Dispositivo peculiar da LOM-PVH frequentemente cobrado literalmente em provas locais.',
      },
      {
        id: 'lom_emenda',
        x: 74,
        y: 38,
        badge: 'Art. 62',
        title: 'Fórmula da Emenda à LOM: 2 Turnos • 10 Dias • 2/3',
        rule: 'Proposta por 1/3 da Câmara, Prefeito, 50 entidades associativas (+2 anos) ou 5% do eleitorado. Votada em 2 turnos (interstício mínimo de 10 dias), aprovada por 2/3 e promulgada pela Mesa da Câmara.',
        examTrap: 'Não há sanção nem veto do Prefeito em Emenda à Lei Orgânica!',
      },
      {
        id: 'lom_90dias',
        x: 61,
        y: 74,
        badge: 'Art. 24 e Art. 237',
        title: 'Regra dos 90 Dias na LOM-PVH',
        rule: 'Logradouros, obras e serviços públicos só podem receber nomes de pessoas falecidas há no mínimo 90 dias (Art. 24). Eleição de Vereadores ocorre 90 dias antes do término do mandato (Art. 45, § 2º).',
        examTrap: 'A banca troca "90 dias" por "1 ano" ou afirma que pessoas vivas podem dar nome a obras públicas.',
      },
      {
        id: 'lom_autonomia',
        x: 88,
        y: 78,
        badge: 'Arts. 7º-A, 75 e 235',
        title: 'Limpeza Urbana Indelegável, TCE-RO (2/3) e FMS',
        rule: 'A limpeza pública/varrição é indelegável (Art. 7º-A, parágrafo único). O parecer prévio do TCE-RO só cai por 2/3 da Câmara (Art. 75). O Fundo Municipal de Saúde é instituído no Art. 235.',
        examTrap: 'Coleta/aterro pode ter concessão com autorização legislativa; varrição de vias é exclusiva de servidores.',
      },
    ],
  },
  {
    id: 'vetores_endemias',
    category: 'esp_vetores',
    title: 'Tríade de Vetores da Amazônia — Diferenciação Morfológica e Ecológica',
    subtitle: 'Comparativo direto entre Aedes aegypti, Anopheles darlingi e Lutzomyia longipalpis',
    editalTag: 'Aulas esp_4 a esp_9 • Controle Vetorial e 14 Endemias',
    imageUrl: vetoresImage,
    imageAlt: 'Comparativo morfológico e ecológico entre Aedes aegypti, Anopheles darlingi e Lutzomyia longipalpis',
    hotspots: [
      {
        id: 'vec_aedes',
        x: 18,
        y: 48,
        badge: 'Aedes aegypti',
        title: 'Dengue, Zika, Chikungunya e Febre Amarela Urbana',
        rule: 'Escudo torácico escuro com desenho em forma de lira branca e tarsos com anéis brancos. Fêmea diurna/antropofílica; deposita ovos isolados na parede úmida (acima da lâmina d’água), resistentes à dessecação por até 450 dias.',
        examTrap: 'O ovo não é posto em jangada na superfície (isso ocorre no Culex), mas aderido à parede interna do depósito.',
      },
      {
        id: 'vec_anopheles',
        x: 50,
        y: 48,
        badge: 'Anopheles darlingi',
        title: 'Malária (Plasmodium vivax e P. falciparum)',
        rule: 'Pousa formando ângulo de ~45° com a superfície (mosquito-prego). Hábito crepuscular/noturno. Criadouros preferenciais: coleções hídricas limpas, profundas, sombreadas e de baixo fluxo (igarapés e represas da bacia do Rio Madeira).',
        examTrap: 'Na Região Amazônica a malária é de notificação compulsória SEMANAL (SIVEP-Malária); na Extra-Amazônica é IMEDIATA (24h).',
      },
      {
        id: 'vec_lutzomyia',
        x: 82,
        y: 48,
        badge: 'Lutzomyia longipalpis',
        title: 'Leishmaniose Visceral e Tegumentar (Flebotomíneo)',
        rule: 'Díptero pequeno (2–3 mm), corpo densamente piloso cor de palha e asas lanceoladas mantidas eretas em "V" durante o pouso. Desenvolve-se em SOLO ÚMIDO rico em matéria orgânica em decomposição (folhiço, galinheiros, chiqueiros).',
        examTrap: 'Pegadinha clássica: flebotomíneos NÃO têm fase larval aquática! Suas larvas são terrestres.',
      },
    ],
  },
  {
    id: 'liraa_campo',
    category: 'esp_liraa',
    title: 'Escala Semafórica do LIRAa & Insumos de Inspeção do ACE',
    subtitle: 'Pontos de corte oficiais do Índice de Infestação Predial (IIP) e manejo operacional',
    editalTag: 'Aula esp_8 • LIRAa (MS) e Controle Químico/Biológico',
    imageUrl: liraaImage,
    imageAlt: 'Diagrama do LIRAa com faixas de risco verde, amarela e vermelha e equipamentos de campo do ACE',
    hotspots: [
      {
        id: 'liraa_verde',
        x: 31,
        y: 35,
        badge: 'IIP < 1,0%',
        title: 'Estrato Verde — Satisfatório',
        rule: 'Quando o Índice de Infestação Predial (IIP = imóveis positivos / imóveis pesquisados × 100) é inferior a 1,0%, a localidade encontra-se em situação satisfatória.',
        examTrap: 'Atenção: 1,0% exato já pertence à faixa de Alerta (Amarela), pois o verde exige estritamente < 1,0%.',
      },
      {
        id: 'liraa_amarelo',
        x: 31,
        y: 56,
        badge: '1,0% a 3,9%',
        title: 'Estrato Amarelo — Alerta Entomológico',
        rule: 'IIP de 1,0% até 3,9% indica estado de Alerta, exigindo intensificação imediata do manejo mecânico, bloqueio focal e mobilização comunitária nos quarteirões críticos.',
        examTrap: 'Não confunda IIP (imóveis positivos) com Índice de Breteau (IB = recipientes positivos / imóveis pesquisados × 100).',
      },
      {
        id: 'liraa_vermelho',
        x: 31,
        y: 77,
        badge: 'IIP ≥ 4,0%',
        title: 'Estrato Vermelho — Risco de Surto/Epidemia',
        rule: 'IIP igual ou superior a 4,0% caracteriza alto risco de transmissão epidêmica de arboviroses urbanas.',
        examTrap: 'A partir de 4,0% (inclusive) configura-se Risco de Surto segundo as Diretrizes Nacionais do Ministério da Saúde.',
      },
      {
        id: 'liraa_insumos',
        x: 75,
        y: 55,
        badge: 'Campo ACE',
        title: 'Pesquisa Larvária e Tratamento Focal',
        rule: 'Uso de pesca-larvas (concha), pipeta, tubitos com álcool 70% e lanterna. Prioridade absoluta ao controle mecânico (eliminação/vedação), reservando larvicidas (Bti, Espinosade, Piriproxifeno) aos depósitos fixos não elimináveis.',
        examTrap: 'Nebulização espacial UBV ("fumacê") atua somente sobre mosquitos adultos em voo e não possui efeito residual nem larvicida.',
      },
    ],
  },
  {
    id: 'sus_ace',
    category: 'leg_sus',
    title: 'Integração Atenção Básica & Vigilância em Saúde no SUS',
    subtitle: 'Princípios Doutrinários vs. Organizativos (Lei 8.080/90), Controle Social (Lei 8.142/90) e Lei 11.350/06',
    editalTag: 'Aulas esp_1, esp_2, leg_4 e leg_6 • SUS, PNAB e Carreira ACE',
    imageUrl: susImage,
    imageAlt: 'Infográfico da integração entre Atenção Básica e Controle de Endemias no SUS',
    hotspots: [
      {
        id: 'sus_doutrinarios',
        x: 49,
        y: 16,
        badge: 'Art. 7º Lei 8.080',
        title: 'Princípios Doutrinários: Universalidade, Integralidade e Equidade',
        rule: 'Universalidade (acesso a todos em todos os níveis), Integralidade (conjunto articulado e contínuo de ações preventivas e curativas) e Equidade (tratar desigualmente os desiguais conforme a vulnerabilidade epidemiológica).',
        examTrap: 'Na Lei 8.080/90 (Art. 7º, IV) aparece literalmente "igualdade da assistência à saúde, sem preconceitos ou privilégios".',
      },
      {
        id: 'sus_organizativos',
        x: 69,
        y: 35,
        badge: 'Diretrizes SUS',
        title: 'Princípios Organizativos: Descentralização, Regionalização e Participação',
        rule: 'Descentralização político-administrativa com direção única em cada esfera (no Município: SEMUSA), regionalização e hierarquização da rede, e participação da comunidade.',
        examTrap: 'A iniciativa privada participa do SUS em caráter COMPLEMENTAR (mediante contrato ou convênio), com preferência às entidades filantrópicas e sem fins lucrativos.',
      },
      {
        id: 'sus_conselho',
        x: 88,
        y: 28,
        badge: 'Lei 8.142/90',
        title: 'Conselho Municipal de Saúde (Permanente, Deliberativo e Paritário)',
        rule: 'Composição paritária: 50% de usuários e 50% divididos entre trabalhadores da saúde, gestores e prestadores. Reúne-se ordinariamente a cada mês; a Conferência de Saúde reúne-se a cada 4 anos.',
        examTrap: 'As decisões do Conselho de Saúde são homologadas pelo chefe do poder legalmente constituído em cada esfera de governo.',
      },
      {
        id: 'sus_territorio',
        x: 22,
        y: 65,
        badge: 'PNAB + Lei 11.350',
        title: 'Base Territorial Única entre ACE e ACS',
        rule: 'A PNAB (Portaria de Consolidação nº 2/GM/MS) e a Lei nº 11.350/2006 determinam a integração territorial entre as equipes da Atenção Básica e os Agentes de Combate às Endemias, unificando o planejamento de visitas e o mapeamento de áreas de risco.',
        examTrap: 'Não é exigido residir na área da comunidade para o ACE (requisito exclusivo do ACS na Lei 11.350/2006, Art. 6º, I).',
      },
    ],
  },
];

function stripHtmlTags(raw: string): string {
  return raw
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

interface ExtractedVisualStep {
  index: number;
  title: string;
  keyTokens: string[];
  summaryBullets: string[];
  topQuestion?: {
    stem: string;
    rightAnswer: string;
    comment: string;
  };
}

function extractLessonVisualSteps(lesson: Lesson): ExtractedVisualStep[] {
  return (lesson.blocks || []).map((block, idx) => {
    const rawText = stripHtmlTags(
      `${block.modoB || ''} ${block.modoB_markdown || ''} ${block.modoA || ''} ${block.modoA_markdown || ''}`
    );

    const tokenRegex =
      /\b(Art\.\s*\d+[º°]?(?:-[A-Z])?|Arts\.\s*\d+[º°]?\s*a\s*\d+[º°]?|Lei\s*n?[º°]?\s*[\d.\/-]+|LC\s*n?[º°]?\s*[\d.\/-]+|\d+(?:[.,]\d+)?\s*(?:%|dias?|horas?|meses|anos?|mL|mg\/L|hab\.?|turnos?)|IIP|LIRAa|SINAN|SIVEP|PNAB|TCE-RO|2\/3|1\/3|1\/5)\b/gi;
    const foundTokens = Array.from(
      new Set((rawText.match(tokenRegex) || []).map((t) => t.trim()))
    ).slice(0, 6);

    const sentences = rawText
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter(
        (s) =>
          s.length >= 40 &&
          s.length <= 210 &&
          !/^(?:1\.|2\.|Objetivo|Referência|Fontes|Correspondência)/i.test(s)
      )
      .slice(0, 3);

    const q0 = (block.questions || [])[0];
    const topQuestion =
      q0 && Array.isArray(q0.options) && typeof q0.ans === 'number' && q0.options[q0.ans]
        ? {
            stem: q0.q,
            rightAnswer: q0.options[q0.ans].replace(/^[A-E]\)\s*/i, ''),
            comment: q0.comment,
          }
        : undefined;

    return {
      index: idx,
      title: block.title.replace(/^Bloco\s*\d+\.\d+\s*—\s*/i, '').trim(),
      keyTokens: foundTokens,
      summaryBullets:
        sentences.length > 0
          ? sentences
          : ['Domine os conceitos-chave, exceções e gatilhos de prova deste bloco.'],
      topQuestion,
    };
  });
}

interface VisualMemorizationBoardProps {
  lesson: Lesson;
  onJumpToLessonBlock?: (blockIdx: number) => void;
}

export const VisualMemorizationBoard: React.FC<VisualMemorizationBoardProps> = ({
  lesson,
  onJumpToLessonBlock,
}) => {
  const orderedPlates = useMemo(() => {
    const list = [...MEMORIZATION_PLATES];
    if (lesson.id === 'leg_1') return list;
    if (lesson.id === 'esp_8') return [list[2], list[1], list[3], list[0]];
    if (lesson.cat === 'esp') return [list[1], list[2], list[3], list[0]];
    if (lesson.cat === 'leg') return [list[0], list[3], list[1], list[2]];
    return list;
  }, [lesson.id, lesson.cat]);

  const visualSteps = useMemo(() => extractLessonVisualSteps(lesson), [lesson]);
  const mindMap = lesson.mindMap;
  const deadlines = mindMap?.deadlinesAndNumbers || [];
  const goldenTraps = mindMap?.goldenTraps || [];
  const branches = mindMap?.branches || [];

  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const [activePlateId, setActivePlateId] = useState<string>(orderedPlates[0].id);
  const [selectedPinId, setSelectedPinId] = useState<string | null>(null);
  const [blindRecallMode, setBlindRecallMode] = useState<boolean>(false);
  const [revealedItems, setRevealedItems] = useState<Set<string>>(new Set());
  const [zoomOpen, setZoomOpen] = useState<boolean>(false);

  const currentPlate = useMemo(
    () => orderedPlates.find((p) => p.id === activePlateId) || orderedPlates[0],
    [orderedPlates, activePlateId]
  );

  const activePin = useMemo(
    () =>
      currentPlate.hotspots.find((h) => h.id === selectedPinId) ||
      currentPlate.hotspots[0],
    [currentPlate, selectedPinId]
  );

  const currentStep = visualSteps[activeStepIdx] || visualSteps[0];

  const toggleRevealItem = (key: string) => {
    setRevealedItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <div className="space-y-4">
      {/* Top Interactive Apostila Banner for this specific lesson */}
      <section className="rounded-2xl bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white p-4 sm:p-5 shadow-sm border border-teal-500/40">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1.5 min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                🎨 Apostila Visual Interativa &bull; Aula {String(lesson.num).padStart(2, '0')}
              </span>
              <span className="text-xs font-bold text-teal-300">
                {lesson.catName} &bull; {visualSteps.length} Pranchas de Tópicos da Aula
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug">
              Caderno Esquemático de Memorização: {lesson.title}
            </h3>
            {mindMap?.mnemonic && (
              <div className="mt-2 p-2.5 rounded-xl bg-amber-400/15 border border-amber-400/40 text-xs text-amber-100">
                <strong className="text-amber-300 uppercase tracking-wide text-[10px] block mb-0.5">
                  🔑 Regra Mnêmica de Ouro desta Aula:
                </strong>
                {mindMap.mnemonic}
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => {
                setBlindRecallMode((v) => !v);
                setRevealedItems(new Set());
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition cursor-pointer border ${
                blindRecallMode
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-xs'
                  : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
              }`}
            >
              {blindRecallMode
                ? '🙈 Modo Teste Ativo (Toque nos Cartões p/ Revelar)'
                : '👁️ Ativar Modo Teste de Memória Visual'}
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 1: Lesson-Specific Interactive Schematic Trail (All Blocks of This Lesson) */}
      <section className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-800">
              📐 Prancha Esquemática Interativa da Aula {String(lesson.num).padStart(2, '0')}
            </span>
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
              Trilha Visual Passo a Passo dos {visualSteps.length} Eixos da Aula
            </h4>
          </div>
          <span className="text-xs text-slate-500">
            Selecione cada etapa visual abaixo para inspecionar os gatilhos de prova
          </span>
        </div>

        {/* Visual Stepper Diagram */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {visualSteps.map((step, sIdx) => {
            const isSelected = sIdx === activeStepIdx;
            return (
              <button
                key={sIdx}
                type="button"
                onClick={() => setActiveStepIdx(sIdx)}
                className={`text-left p-3 rounded-xl border-2 transition cursor-pointer flex flex-col justify-between gap-2 ${
                  isSelected
                    ? 'bg-teal-950 text-white border-teal-600 shadow-sm'
                    : 'bg-slate-50 hover:bg-teal-50/60 text-slate-800 border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    className={`inline-flex items-center justify-center px-2 py-0.5 rounded-md text-[11px] font-extrabold shrink-0 ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-teal-100 text-teal-900'
                    }`}
                  >
                    Etapa {sIdx + 1}
                  </span>
                  {step.keyTokens.length > 0 && (
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        isSelected
                          ? 'bg-white/15 text-teal-200'
                          : 'bg-slate-200/80 text-slate-600'
                      }`}
                    >
                      {step.keyTokens.length} gatilhos
                    </span>
                  )}
                </div>

                <div className="text-xs font-extrabold leading-snug line-clamp-2">
                  {step.title}
                </div>

                {step.keyTokens.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {step.keyTokens.slice(0, 3).map((tok, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[10px] font-semibold px-1.5 py-0.5 rounded border ${
                          isSelected
                            ? 'border-teal-400/50 text-teal-200 bg-teal-900/50'
                            : 'border-teal-300 text-teal-800 bg-white'
                        }`}
                      >
                        {tok}
                      </span>
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Visual Canvas */}
        {currentStep && (
          <div className="rounded-2xl border-2 border-teal-600/80 bg-gradient-to-br from-teal-50/40 via-white to-amber-50/30 p-4 sm:p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
              <div className="space-y-0.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-800">
                  Ficha Visual da Etapa {currentStep.index + 1} de {visualSteps.length}
                </span>
                <h5 className="text-sm sm:text-base font-extrabold text-slate-900">
                  {currentStep.title}
                </h5>
              </div>
              {onJumpToLessonBlock && (
                <button
                  type="button"
                  onClick={() => onJumpToLessonBlock(currentStep.index)}
                  className="px-3 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold transition cursor-pointer"
                >
                  📖 Ler Texto Integral deste Tópico ➔
                </button>
              )}
            </div>

            {/* Key Visual Seals (Artigos / Números / Leis) */}
            {currentStep.keyTokens.length > 0 && (
              <div className="space-y-1.5">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                  🏷️ Selos de Memorização Imediata deste Tópico:
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {currentStep.keyTokens.map((tok, idx) => (
                    <span key={idx} className="lom-art-tag">
                      {tok}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Visual Summary Cards of the Step */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {currentStep.summaryBullets.map((bullet, bIdx) => {
                const itemKey = `step_${lesson.id}_${currentStep.index}_b_${bIdx}`;
                const isHidden = blindRecallMode && !revealedItems.has(itemKey);
                return (
                  <div
                    key={bIdx}
                    onClick={() => blindRecallMode && toggleRevealItem(itemKey)}
                    className={`rounded-xl bg-white border border-slate-200 p-3.5 shadow-2xs flex flex-col justify-between gap-2 ${
                      blindRecallMode ? 'cursor-pointer hover:border-amber-400' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2 py-0.5 rounded bg-teal-50 border border-teal-200 text-teal-900 text-[10px] font-extrabold">
                        Ponto-Chave #{bIdx + 1}
                      </span>
                      <span className="text-xs">📌</span>
                    </div>
                    {isHidden ? (
                      <div className="py-4 px-2 rounded-lg bg-amber-50 border border-dashed border-amber-400 text-center text-xs font-bold text-amber-950">
                        🔒 Toque para revelar o ponto-chave #{bIdx + 1}
                      </div>
                    ) : (
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                        {bullet}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Flash Question Application Box for the Active Step */}
            {currentStep.topQuestion && (
              <div className="rounded-xl bg-slate-900 text-white p-3.5 sm:p-4 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                    ⚡ Aplicação Direta em Prova (Gabarito Visual)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-semibold leading-relaxed">
                  {currentStep.topQuestion.stem}
                </p>
                {blindRecallMode && !revealedItems.has(`step_q_${currentStep.index}`) ? (
                  <button
                    type="button"
                    onClick={() => toggleRevealItem(`step_q_${currentStep.index}`)}
                    className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-extrabold cursor-pointer"
                  >
                    🔓 Revelar Resposta Correta
                  </button>
                ) : (
                  <div className="p-2.5 rounded-lg bg-emerald-950/90 border border-emerald-500/40 text-xs space-y-1">
                    <div className="font-extrabold text-emerald-300">
                      ✅ Resposta Correta: {currentStep.topQuestion.rightAnswer}
                    </div>
                    {currentStep.topQuestion.comment && (
                      <p className="text-slate-300 leading-relaxed">
                        {currentStep.topQuestion.comment}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </section>

      {/* SECTION 2: Visual Board of Numbers, Quorums, Deadlines & Branches of This Lesson */}
      {(deadlines.length > 0 || branches.length > 0 || goldenTraps.length > 0) && (
        <section className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
          {deadlines.length > 0 && (
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800">
                  ⏱️ Quadro de Memorização de Números, Prazos e Fórmulas da Aula
                </h4>
                <span className="text-[11px] text-slate-500">
                  {blindRecallMode ? 'Toque em cada selo para revelar' : 'Valores literais cobrados pela banca'}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {deadlines.map((card, cIdx) => {
                  const key = `dl_${lesson.id}_${cIdx}`;
                  const isHidden = blindRecallMode && !revealedItems.has(key);
                  return (
                    <div
                      key={cIdx}
                      onClick={() => blindRecallMode && toggleRevealItem(key)}
                      className={`p-3 rounded-xl border bg-slate-50/70 flex flex-col justify-between gap-1.5 ${
                        blindRecallMode ? 'cursor-pointer hover:border-amber-400' : 'border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="lom-art-tag !mr-0">{card.ref}</span>
                      </div>
                      {isHidden ? (
                        <div className="py-1.5 px-2 rounded bg-amber-100 border border-dashed border-amber-400 text-amber-950 text-xs font-extrabold text-center">
                          🔒 Revelar valor
                        </div>
                      ) : (
                        <div className="text-sm sm:text-base font-extrabold text-teal-900">
                          {card.value}
                        </div>
                      )}
                      <p className="text-xs text-slate-600 leading-snug">{card.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {goldenTraps.length > 0 && (
            <div className="space-y-2.5 pt-2 border-t border-slate-200">
              <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-rose-800">
                🛡️ Cartões Visuais Anti-Pegadinha desta Aula (Errado vs. Certo)
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {goldenTraps.map((trap, tIdx) => (
                  <div
                    key={tIdx}
                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5"
                  >
                    <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 space-y-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-800 block">
                        ❌ Pegadinha Falsa
                      </span>
                      <p className="text-xs text-rose-950 font-medium leading-snug">
                        &ldquo;{trap.wrong}&rdquo;
                      </p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 space-y-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 block">
                        ✅ Regra Correta
                      </span>
                      <p className="text-xs text-emerald-950 font-bold leading-snug">
                        {trap.right}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* SECTION 3: Illustrated Interactive Hotspot Plates */}
      <section className="bg-white rounded-2xl border border-teal-200/90 shadow-xs overflow-hidden">
        <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 px-4 py-3 flex flex-wrap items-center justify-between gap-2 text-white">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-200 block">
              🖼️ Pranchas Ilustradas com Pinos Interativos
            </span>
            <h4 className="text-xs sm:text-sm font-extrabold">
              Toque nos Pinos Numerados sobre a Ilustração para Memorizar Visualmente
            </h4>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {orderedPlates.map((plate, idx) => {
              const isActive = plate.id === currentPlate.id;
              return (
                <button
                  key={plate.id}
                  type="button"
                  onClick={() => {
                    setActivePlateId(plate.id);
                    setSelectedPinId(null);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer border ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 border-amber-300'
                      : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                  }`}
                >
                  {idx + 1}. {plate.title.split('—')[0].trim()}
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-3 sm:p-4 bg-slate-50/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start">
            {/* Annotated Image with Interactive Hotspot Pins */}
            <div className="lg:col-span-7 space-y-1.5">
              <div className="relative rounded-xl overflow-hidden border border-slate-300 bg-slate-900 shadow-xs">
                <img
                  src={currentPlate.imageUrl}
                  alt={currentPlate.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto block select-none"
                />

                {currentPlate.hotspots.map((pin, idx) => {
                  const isSelected = activePin?.id === pin.id;
                  const isRevealed = !blindRecallMode || revealedItems.has(pin.id);
                  return (
                    <button
                      key={pin.id}
                      type="button"
                      onClick={() => {
                        setSelectedPinId(pin.id);
                        if (blindRecallMode) {
                          setRevealedItems((prev) => new Set(prev).add(pin.id));
                        }
                      }}
                      style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                      title={`${idx + 1}. ${pin.title}`}
                      className={`-translate-x-1/2 -translate-y-1/2 absolute z-10 flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-extrabold transition-all cursor-pointer shadow-md border-2 ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 border-slate-900 scale-110 ring-4 ring-amber-300/60'
                          : isRevealed
                          ? 'bg-teal-900/95 hover:bg-teal-800 text-white border-white/90 hover:scale-105'
                          : 'bg-slate-900/90 hover:bg-slate-800 text-amber-300 border-amber-400'
                      }`}
                    >
                      <span>{idx + 1}</span>
                      <span className="hidden sm:inline">{pin.badge}</span>
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => setZoomOpen(true)}
                  className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md bg-slate-900/80 hover:bg-slate-900 text-white text-[11px] font-bold backdrop-blur-xs border border-white/20 transition cursor-pointer"
                >
                  🔍 Ampliar Prancha
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 px-1">
                <span>
                  📌 <strong>{currentPlate.editalTag}</strong>
                </span>
                <span>
                  Toque nos selos numerados <strong>(1 a {currentPlate.hotspots.length})</strong> sobre a imagem
                </span>
              </div>
            </div>

            {/* Active Pin Details */}
            <div className="lg:col-span-5 space-y-2.5">
              {activePin && (
                <div className="rounded-xl bg-white border-2 border-teal-600 p-3.5 shadow-xs space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-1.5 border-b border-slate-100 pb-2">
                    <span className="lom-art-tag !mr-0">{activePin.badge}</span>
                    <span className="text-[11px] font-bold text-teal-800">
                      Ponto Visual Selecionado
                    </span>
                  </div>

                  <h5 className="text-sm font-extrabold text-slate-900 leading-snug">
                    {activePin.title}
                  </h5>

                  {blindRecallMode && !revealedItems.has(activePin.id) ? (
                    <div className="p-3 rounded-lg bg-amber-50 border border-amber-300 text-center space-y-2">
                      <p className="text-xs font-bold text-amber-950">
                        Memória Ativa: Qual é a regra exata e a pegadinha de prova para este ponto?
                      </p>
                      <button
                        type="button"
                        onClick={() =>
                          setRevealedItems((prev) => new Set(prev).add(activePin.id))
                        }
                        className="px-3 py-1 rounded-md bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs transition cursor-pointer"
                      >
                        🔓 Revelar Regra e Pegadinha
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {activePin.rule}
                      </p>
                      <div className="p-2.5 rounded-lg bg-amber-50/90 border border-amber-200 text-xs text-amber-950 leading-relaxed">
                        <strong className="text-amber-900">⚠️ Cuidado na Prova (IBGP):</strong>{' '}
                        {activePin.examTrap}
                      </div>
                    </>
                  )}
                </div>
              )}

              <div className="rounded-xl bg-white border border-slate-200 p-2.5 space-y-1.5">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 px-1">
                  Índice Rápido da Prancha ({currentPlate.hotspots.length} pontos)
                </div>
                <div className="space-y-1">
                  {currentPlate.hotspots.map((pin, idx) => {
                    const isSelected = activePin?.id === pin.id;
                    return (
                      <button
                        key={pin.id}
                        type="button"
                        onClick={() => {
                          setSelectedPinId(pin.id);
                          if (blindRecallMode) {
                            setRevealedItems((prev) => new Set(prev).add(pin.id));
                          }
                        }}
                        className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition flex items-center justify-between gap-2 cursor-pointer ${
                          isSelected
                            ? 'bg-teal-50 text-teal-950 font-extrabold border border-teal-300'
                            : 'hover:bg-slate-50 text-slate-700 font-medium border border-transparent'
                        }`}
                      >
                        <span className="truncate">
                          <strong>{idx + 1}.</strong> {pin.title}
                        </span>
                        <span className="lom-art-tag shrink-0 !mr-0">{pin.badge}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {zoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
          onClick={() => setZoomOpen(false)}
        >
          <div
            className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-2.5 bg-slate-900 text-white flex items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-extrabold">{currentPlate.title}</h4>
                <p className="text-[11px] text-slate-300">{currentPlate.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setZoomOpen(false)}
                className="px-3 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-xs font-bold cursor-pointer"
              >
                ✕ Fechar
              </button>
            </div>
            <div className="p-2 bg-slate-950 max-h-[82vh] overflow-auto">
              <img
                src={currentPlate.imageUrl}
                alt={currentPlate.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
