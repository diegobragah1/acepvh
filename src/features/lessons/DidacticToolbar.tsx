import React from 'react';

interface DidacticToolbarProps {
  currentStudyMode: 'ALL' | 'MAPA' | 'A' | 'B' | 'C';
  onChangeStudyMode: (mode: 'ALL' | 'MAPA' | 'A' | 'B' | 'C') => void;
  hasMindMap: boolean;
  lessonSearchTerm: string;
  onChangeSearch: (value: string) => void;
  blockTypeFilter: 'ALL' | 'THEORY' | 'QUIZ' | 'FLASHCARDS';
  onChangeBlockTypeFilter: (value: 'ALL' | 'THEORY' | 'QUIZ' | 'FLASHCARDS') => void;
  clozeMode: boolean;
  onToggleClozeMode: () => void;
  revealedClozeCount: number;
  onResetRevealedCloze: () => void;
  onExpandAll: () => void;
  onCollapseAll: () => void;
  showVFTrainer: boolean;
  onToggleVFTrainer: () => void;
  vfCount: number;
}

export const DidacticToolbar: React.FC<DidacticToolbarProps> = ({
  currentStudyMode,
  onChangeStudyMode,
  hasMindMap,
  lessonSearchTerm,
  onChangeSearch,
  blockTypeFilter,
  onChangeBlockTypeFilter,
  clozeMode,
  onToggleClozeMode,
  revealedClozeCount,
  onResetRevealedCloze,
  onExpandAll,
  onCollapseAll,
  showVFTrainer,
  onToggleVFTrainer,
  vfCount,
}) => {
  return (
    <div className="space-y-3 no-print">
      {/* Global Study Mode Selector */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-200">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-extrabold text-slate-600 mr-1">Modo de Exibição:</span>
          {(
            [
              { id: 'ALL', label: '📚 Completo (Mapa + A + B + C)' },
              ...(hasMindMap ? [{ id: 'MAPA', label: '🧠 Mapa Mental Visual' }] : []),
              { id: 'A', label: '📖 Modo A (Texto Base)' },
              { id: 'B', label: '⚡ Modo B (Resumo & Tabelas)' },
              { id: 'C', label: '✍️ Modo C (Questões & Flashcards)' },
            ] as const
          ).map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => onChangeStudyMode(m.id as 'ALL' | 'MAPA' | 'A' | 'B' | 'C')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                currentStudyMode === m.id
                  ? m.id === 'MAPA'
                    ? 'bg-indigo-700 text-white shadow-sm'
                    : 'bg-teal-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onExpandAll}
            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
          >
            Expandir Blocos
          </button>
          <button
            type="button"
            onClick={onCollapseAll}
            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
          >
            Recolher Blocos
          </button>
        </div>
      </div>

      {/* Active Study Lab Toolbar */}
      <div className="p-3 rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white flex flex-col gap-2.5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider">
              Laboratório de Estudo Ativo
            </span>
            <span className="text-xs text-slate-200 font-semibold">
              Ferramentas interativas para memorização de leis, prazos e conceitos
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={onToggleClozeMode}
              className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition flex items-center gap-1.5 cursor-pointer ${
                clozeMode
                  ? 'bg-amber-400 text-slate-950 shadow-sm ring-2 ring-amber-200'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
              }`}
            >
              <span>{clozeMode ? '🔓 Ocultação Ativa' : '🔒 Ocultar Prazos/Leis (Cloze)'}</span>
            </button>
            {clozeMode && revealedClozeCount > 0 && (
              <button
                type="button"
                onClick={onResetRevealedCloze}
                className="px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-white/15 hover:bg-white/25 text-amber-200 cursor-pointer"
              >
                Ocultar Todos ({revealedClozeCount})
              </button>
            )}
            <button
              type="button"
              onClick={onToggleVFTrainer}
              className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition flex items-center gap-1.5 cursor-pointer ${
                showVFTrainer
                  ? 'bg-emerald-400 text-slate-950 shadow-sm ring-2 ring-emerald-200'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
              }`}
            >
              <span>⚡ Treino Rápido V/F ({vfCount})</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 pt-2 border-t border-white/10">
          <div className="relative flex-1">
            <input
              type="text"
              value={lessonSearchTerm}
              onChange={(e) => onChangeSearch(e.target.value)}
              placeholder="🔍 Localizar e grifar palavra/artigo dentro desta aula..."
              className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-300 text-xs focus:outline-none focus:bg-white/15 focus:border-amber-300"
            />
            {lessonSearchTerm && (
              <button
                type="button"
                onClick={() => onChangeSearch('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] px-1.5 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white font-bold cursor-pointer"
              >
                Limpar
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1">
            <span className="text-[10px] font-bold text-slate-300 mr-1">Filtrar Blocos:</span>
            {(
              [
                { id: 'ALL', label: 'Todos' },
                { id: 'THEORY', label: 'Teoria (A+B)' },
                { id: 'QUIZ', label: 'Com Questões' },
                { id: 'FLASHCARDS', label: 'Com Flashcards' },
              ] as const
            ).map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => onChangeBlockTypeFilter(f.id)}
                className={`px-2 py-1 rounded text-[10px] font-bold transition cursor-pointer ${
                  blockTypeFilter === f.id
                    ? 'bg-teal-400 text-slate-950'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
