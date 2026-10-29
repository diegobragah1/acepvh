import React, { useState, useEffect } from 'react';
import { LessonMindMap, MindMapBranch } from '../types';

interface LessonMindMapViewProps {
  lessonId: string;
  lessonNum: number;
  mindMap: LessonMindMap;
}

const COLOR_STYLES: Record<
  MindMapBranch['color'],
  {
    cardBorder: string;
    headerBg: string;
    headerText: string;
    badgeBg: string;
    badgeText: string;
    dotBg: string;
    connectorBorder: string;
  }
> = {
  teal: {
    cardBorder: 'border-teal-300',
    headerBg: 'bg-gradient-to-r from-teal-700 to-teal-600',
    headerText: 'text-white',
    badgeBg: 'bg-teal-100 border-teal-300',
    badgeText: 'text-teal-900',
    dotBg: 'bg-teal-600',
    connectorBorder: 'border-teal-300'
  },
  indigo: {
    cardBorder: 'border-indigo-300',
    headerBg: 'bg-gradient-to-r from-indigo-700 to-indigo-600',
    headerText: 'text-white',
    badgeBg: 'bg-indigo-100 border-indigo-300',
    badgeText: 'text-indigo-900',
    dotBg: 'bg-indigo-600',
    connectorBorder: 'border-indigo-300'
  },
  amber: {
    cardBorder: 'border-amber-300',
    headerBg: 'bg-gradient-to-r from-amber-600 to-amber-500',
    headerText: 'text-slate-950',
    badgeBg: 'bg-amber-100 border-amber-300',
    badgeText: 'text-amber-950',
    dotBg: 'bg-amber-500',
    connectorBorder: 'border-amber-300'
  },
  emerald: {
    cardBorder: 'border-emerald-300',
    headerBg: 'bg-gradient-to-r from-emerald-700 to-emerald-600',
    headerText: 'text-white',
    badgeBg: 'bg-emerald-100 border-emerald-300',
    badgeText: 'text-emerald-900',
    dotBg: 'bg-emerald-600',
    connectorBorder: 'border-emerald-300'
  },
  rose: {
    cardBorder: 'border-rose-300',
    headerBg: 'bg-gradient-to-r from-rose-700 to-rose-600',
    headerText: 'text-white',
    badgeBg: 'bg-rose-100 border-rose-300',
    badgeText: 'text-rose-900',
    dotBg: 'bg-rose-600',
    connectorBorder: 'border-rose-300'
  },
  violet: {
    cardBorder: 'border-violet-300',
    headerBg: 'bg-gradient-to-r from-violet-700 to-violet-600',
    headerText: 'text-white',
    badgeBg: 'bg-violet-100 border-violet-300',
    badgeText: 'text-violet-900',
    dotBg: 'bg-violet-600',
    connectorBorder: 'border-violet-300'
  }
};

export const LessonMindMapView: React.FC<LessonMindMapViewProps> = ({
  lessonId,
  lessonNum,
  mindMap
}) => {
  const [selectedBranchIdx, setSelectedBranchIdx] = useState<number | 'all'>('all');
  const [memoryTestMode, setMemoryTestMode] = useState(false);
  const [revealedNodes, setRevealedNodes] = useState<Record<string, boolean>>({});
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    setSelectedBranchIdx('all');
    setRevealedNodes({});
  }, [lessonId]);

  const toggleNodeReveal = (nodeKey: string) => {
    setRevealedNodes(prev => ({ ...prev, [nodeKey]: !prev[nodeKey] }));
  };

  const allBranches = Array.isArray(mindMap?.branches) ? mindMap.branches : [];
  const deadlinesList = Array.isArray(mindMap?.deadlinesAndNumbers) ? mindMap.deadlinesAndNumbers : [];
  const trapsList = Array.isArray(mindMap?.goldenTraps) ? mindMap.goldenTraps : [];

  const visibleBranches =
    selectedBranchIdx === 'all'
      ? allBranches
      : allBranches.filter((_, idx) => idx === selectedBranchIdx);

  return (
    <div
      id="lesson-mindmap-section"
      className="rounded-2xl border-2 border-teal-600/30 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 p-4 sm:p-5 shadow-sm space-y-5 scroll-mt-24"
    >
      {/* Top Bar: Title + Interactive Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-teal-700 text-white text-lg shadow-sm">
            🧠
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-800 bg-teal-100 px-2 py-0.5 rounded-md border border-teal-200">
                Mapa Mental &amp; Resumo Gráfico &bull; Aula #{String(lessonNum).padStart(2, '0')}
              </span>
              <span className="text-[11px] font-semibold text-slate-500 hidden sm:inline">
                Síntese Visual de Prazos, Conceitos-Chave e Armadilhas IBGP
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
              {mindMap.centralTitle}
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 no-print">
          <button
            type="button"
            onClick={() => {
              setMemoryTestMode(prev => !prev);
              setRevealedNodes({});
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-extrabold border transition ${
              memoryTestMode
                ? 'bg-amber-400 text-slate-950 border-amber-500 shadow-sm'
                : 'bg-white hover:bg-amber-50 text-slate-800 border-slate-300'
            }`}
            title="Oculta as explicações de cada nó do Mapa Mental para você testar sua recordação visual clicando nos cartões!"
          >
            {memoryTestMode ? '🎯 Teste de Memória Visual: ATIVO' : '🎯 Testar Memória no Mapa'}
          </button>

          <button
            type="button"
            onClick={() => setIsExpanded(prev => !prev)}
            className="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300"
          >
            {isExpanded ? '➖ Recolher Mapa' : '➕ Expandir Mapa'}
          </button>
        </div>
      </div>

      {isExpanded && (
        <>
          {/* Central Node Hub + Golden Mnemonic */}
          <div className="relative rounded-2xl bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white p-4 sm:p-5 shadow-md border border-teal-500/40">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-teal-300">
                  <span>🎯 Nó Central da Aula</span>
                  <span>&bull;</span>
                  <span>{allBranches.length} Ramos Visuais</span>
                  <span>&bull;</span>
                  <span>{deadlinesList.length} Indicadores/Prazos</span>
                </div>
                <div className="text-base sm:text-lg font-extrabold text-white">
                  {mindMap.centralTitle}
                </div>
                <p className="text-xs text-slate-300 font-medium">{mindMap.centralSubtitle}</p>
              </div>

              {/* Flagship Mnemonic Pill */}
              <div className="md:max-w-md bg-amber-400/15 border border-amber-400/50 rounded-xl p-3 space-y-1">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 flex items-center gap-1">
                  <span>🔑 Mnemônico &amp; Regra de Ouro para Memorização Instantânea</span>
                </div>
                <p className="text-xs font-bold text-amber-100 leading-snug">
                  {mindMap.mnemonic}
                </p>
              </div>
            </div>
          </div>

          {/* Graphic Summary of Deadlines, Quorums, Numbers & Formulas */}
          {deadlinesList.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <span>⏱️ Painel Gráfico de Prazos, Números, Fórmulas e Quóruns Críticos</span>
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  Memorize estes números antes da prova
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2.5">
                {deadlinesList.map((card, cIdx) => {
                  const numKey = `num_${lessonId}_${cIdx}`;
                  const hiddenInTest = memoryTestMode && !revealedNodes[numKey];

                  return (
                    <div
                      key={cIdx}
                      onClick={() => memoryTestMode && toggleNodeReveal(numKey)}
                      className={`rounded-xl p-3 border bg-white shadow-sm flex flex-col justify-between transition ${
                        memoryTestMode ? 'cursor-pointer hover:border-amber-400' : 'border-slate-200'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                            {card.ref}
                          </span>
                          <span className="text-xs">📌</span>
                        </div>
                        {hiddenInTest ? (
                          <div className="my-1 py-1.5 px-2 rounded-lg bg-amber-100 border border-dashed border-amber-500 text-amber-950 text-xs font-extrabold text-center">
                            🔒 Clique p/ revelar o valor
                          </div>
                        ) : (
                          <div className="text-sm sm:text-base font-extrabold text-teal-800 tracking-tight my-0.5">
                            {card.value}
                          </div>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-600 font-medium leading-snug mt-1">
                        {card.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Branch Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1 no-print">
            <span className="text-[11px] font-bold text-slate-500 mr-1">Filtrar Ramo Visual:</span>
            <button
              type="button"
              onClick={() => setSelectedBranchIdx('all')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                selectedBranchIdx === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
              }`}
            >
              🕸️ Todos os Ramos ({allBranches.length})
            </button>
            {allBranches.map((br, bIdx) => (
              <button
                key={bIdx}
                type="button"
                onClick={() => setSelectedBranchIdx(bIdx)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                  selectedBranchIdx === bIdx
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
                }`}
              >
                {br.icon} {(br.title || '').split('(')[0].trim()}
              </button>
            ))}
          </div>

          {/* Visual Mind Map Branches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {visibleBranches.map((branch, bIdx) => {
              const style = COLOR_STYLES[branch.color] || COLOR_STYLES.teal;
              const branchNodes = Array.isArray(branch.nodes) ? branch.nodes : [];

              return (
                <div
                  key={bIdx}
                  className={`rounded-2xl border-2 ${style.cardBorder} bg-white shadow-sm overflow-hidden flex flex-col`}
                >
                  {/* Branch Header */}
                  <div className={`${style.headerBg} ${style.headerText} px-4 py-2.5 flex items-center justify-between gap-2`}>
                    <div className="flex items-center gap-2 font-extrabold text-xs sm:text-sm">
                      <span className="text-base">{branch.icon}</span>
                      <span>{branch.title}</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-black/20 text-white shrink-0">
                      {branchNodes.length} nós
                    </span>
                  </div>

                  {/* Branch Nodes Tree */}
                  <div className="p-4 space-y-3 flex-1">
                    {branchNodes.map((node, nIdx) => {
                      const nodeKey = `br_${lessonId}_${bIdx}_${nIdx}`;
                      const isHidden = memoryTestMode && !revealedNodes[nodeKey];

                      return (
                        <div
                          key={nIdx}
                          onClick={() => memoryTestMode && toggleNodeReveal(nodeKey)}
                          className={`relative pl-4 border-l-2 ${style.connectorBorder} space-y-1 ${
                            memoryTestMode ? 'cursor-pointer group' : ''
                          }`}
                        >
                          {/* Connector Dot */}
                          <span
                            className={`absolute -left-[5px] top-1.5 w-2 h-2 rounded-full ${style.dotBg}`}
                          />

                          <div className="flex flex-wrap items-center justify-between gap-1.5">
                            <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                              {node.label}
                            </span>
                            {node.badge && (
                              <span
                                className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold border ${style.badgeBg} ${style.badgeText}`}
                              >
                                {node.badge}
                              </span>
                            )}
                          </div>

                          {isHidden ? (
                            <div className="p-2 rounded-lg bg-amber-50 border border-dashed border-amber-400 text-amber-900 text-xs font-bold group-hover:bg-amber-100 transition">
                              🧠 Clique para revelar a síntese deste nó...
                            </div>
                          ) : (
                            <p className="text-xs text-slate-700 leading-relaxed">
                              {node.detail}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual Trap Comparison: Wrong (IBGP Trap) vs. Right (Exam Truth) */}
          {trapsList.length > 0 && (
            <div className="space-y-2 pt-1">
              <div className="text-xs font-extrabold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                <span>🛡️ Raio-X Visual Anti-Pegadinha (O que a Banca IBGP Troca na Prova)</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {trapsList.map((trap, tIdx) => (
                  <div
                    key={tIdx}
                    className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-3"
                  >
                    <div className="bg-rose-50/80 border border-rose-200 rounded-lg p-2.5 space-y-1">
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-rose-800">
                        ❌ Armadilha Falsa na Prova
                      </div>
                      <p className="text-xs text-rose-950 font-medium leading-snug">
                        &ldquo;{trap.wrong}&rdquo;
                      </p>
                    </div>
                    <div className="bg-emerald-50/80 border border-emerald-200 rounded-lg p-2.5 space-y-1">
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800">
                        ✅ Como Gravar o Correto
                      </div>
                      <p className="text-xs text-emerald-950 font-bold leading-snug">
                        {trap.right}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
