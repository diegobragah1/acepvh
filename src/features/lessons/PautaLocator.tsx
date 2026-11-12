import React, { useEffect, useState } from 'react';
import {
  PAUTA_ESPECIFICA_ITEMS,
  PAUTA_LEGISLACAO_ITEMS,
  PAUTA_PORTUGUES_ITEMS,
  PAUTA_RLM_ITEMS,
  PAUTA_GERAIS_ITEMS,
  PautaEspecificaItem,
} from '../../data/pautaEspecificaMap';

type DisciplineKey = 'esp' | 'leg' | 'por' | 'rlm' | 'atu';

const DISCIPLINE_GROUPS: Array<{
  key: DisciplineKey;
  label: string;
  badgePrefix: string;
  items: PautaEspecificaItem[];
}> = [
  { key: 'esp', label: 'Específicos (10)', badgePrefix: 'Específicos', items: PAUTA_ESPECIFICA_ITEMS },
  { key: 'leg', label: 'Legislação (7)', badgePrefix: 'Legislação', items: PAUTA_LEGISLACAO_ITEMS },
  { key: 'por', label: 'Português (18)', badgePrefix: 'Português', items: PAUTA_PORTUGUES_ITEMS },
  { key: 'rlm', label: 'R. Lógico (8)', badgePrefix: 'R. Lógico', items: PAUTA_RLM_ITEMS },
  { key: 'atu', label: 'Gerais (6)', badgePrefix: 'Gerais', items: PAUTA_GERAIS_ITEMS },
];

export const ESPECIFICO_PAUTA_ITEMS = PAUTA_ESPECIFICA_ITEMS.map((item) => ({
  num: item.num,
  title: item.shortLabel,
  desc: item.description,
  lessonId: item.lessonId,
  blockIdx: item.blockIndex,
  badge: `Aula ${String(item.num).padStart(2, '0')} (${item.lessonId})`,
}));

interface PautaLocatorProps {
  activeLessonId: string;
  onJumpToLessonBlock: (lessonId: string, blockIndex: number) => void;
}

function getDisciplineFromLessonId(lessonId: string): DisciplineKey {
  const prefix = lessonId.split('_')[0];
  if (prefix === 'leg' || prefix === 'por' || prefix === 'rlm' || prefix === 'atu') {
    return prefix;
  }
  return 'esp';
}

export const PautaLocator: React.FC<PautaLocatorProps> = ({
  activeLessonId,
  onJumpToLessonBlock,
}) => {
  const [showPautaPanel, setShowPautaPanel] = useState(false);
  const [selectedDisc, setSelectedDisc] = useState<DisciplineKey>(() =>
    getDisciplineFromLessonId(activeLessonId)
  );

  useEffect(() => {
    setSelectedDisc(getDisciplineFromLessonId(activeLessonId));
  }, [activeLessonId]);

  const currentGroup =
    DISCIPLINE_GROUPS.find((g) => g.key === selectedDisc) || DISCIPLINE_GROUPS[0];

  return (
    <div className="bg-slate-900 text-white rounded-xl border border-slate-800 px-3 py-2 shadow-sm no-print">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-[11px] font-bold text-amber-300 shrink-0">
            Edital Verticalizado (49 Aulas)
          </span>
          <span className="text-slate-500 hidden sm:inline">&middot;</span>
          <span className="text-xs text-slate-300 truncate hidden sm:inline">
            Específicos (10) &middot; Legislação (7) &middot; Português (18) &middot; R. Lógico (8) &middot; Gerais (6)
          </span>
        </div>
        <button
          type="button"
          onClick={() => setShowPautaPanel((v) => !v)}
          aria-expanded={showPautaPanel}
          className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-teal-200 transition cursor-pointer shrink-0"
        >
          {showPautaPanel ? 'Ocultar Atalhos ▲' : 'Atalhos do Edital ▼'}
        </button>
      </div>

      {showPautaPanel && (
        <div className="mt-2.5 pt-2.5 border-t border-slate-800 space-y-2.5">
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Disciplinas do Edital">
            {DISCIPLINE_GROUPS.map((group) => {
              const active = group.key === selectedDisc;
              return (
                <button
                  key={group.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedDisc(group.key)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                    active
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white'
                  }`}
                >
                  {group.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 max-h-[340px] overflow-y-auto pr-1">
            {currentGroup.items.map((item) => {
              const isActiveItem = activeLessonId === item.lessonId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onJumpToLessonBlock(item.lessonId, item.blockIndex);
                    setShowPautaPanel(false);
                  }}
                  className={`text-left p-2 rounded-lg border transition flex flex-col justify-between gap-1 cursor-pointer ${
                    isActiveItem
                      ? 'bg-teal-700/40 border-amber-400'
                      : 'bg-white/5 hover:bg-white/10 border-white/10'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="text-[10px] font-semibold text-teal-300">
                        {currentGroup.badgePrefix} {String(item.num).padStart(2, '0')} ({item.lessonId})
                      </span>
                      <span className="text-[10px] font-bold text-amber-300">Abrir ➔</span>
                    </div>
                    <p className="text-xs font-bold text-white leading-snug">{item.shortLabel}</p>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-tight line-clamp-2">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
