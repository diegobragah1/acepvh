import React, { useState } from 'react';
import type { Lesson, TopicStatus } from '../../types';
import { getStatusMeta } from '../../utils/status';
import { STATUS_OPTIONS } from '../progress/StatusSelector';

const CATEGORIES = [
  { id: 'ALL', label: 'Todas' },
  { id: 'esp', label: 'Específicos (10)' },
  { id: 'leg', label: 'Legislação (7)' },
  { id: 'por', label: 'Português (18)' },
  { id: 'rlm', label: 'R. Lógico (8)' },
  { id: 'atu', label: 'Gerais (6)' },
];

interface LessonSidebarProps {
  lessons: Lesson[];
  filteredLessons: Lesson[];
  activeLessonId: string;
  onSelectLesson: (id: string) => void;
  searchTerm: string;
  onChangeSearch: (value: string) => void;
  catFilter: string;
  onChangeCatFilter: (cat: string) => void;
  statusFilter: string;
  onChangeStatusFilter: (status: string) => void;
  getTopicStatus: (id: string) => TopicStatus;
  favoriteLessons?: string[];
  onlyFavorites?: boolean;
  onToggleOnlyFavorites?: () => void;
}

export const LessonSidebar: React.FC<LessonSidebarProps> = ({
  lessons,
  filteredLessons,
  activeLessonId,
  onSelectLesson,
  searchTerm,
  onChangeSearch,
  catFilter,
  onChangeCatFilter,
  statusFilter,
  onChangeStatusFilter,
  getTopicStatus,
  favoriteLessons = [],
  onlyFavorites = false,
  onToggleOnlyFavorites,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeLesson = lessons.find((l) => l.id === activeLessonId);

  return (
    <aside className="lg:col-span-3 no-print">
      <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm space-y-2.5 lg:sticky lg:top-14">
        {/* Header + Mobile Toggle */}
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
              📚 Sumário ({filteredLessons.length}/{lessons.length} Aulas)
            </h3>
            {activeLesson && (
              <p className="text-[11px] text-slate-500 truncate lg:hidden mt-0.5">
                Atual: Aula {String(activeLesson.num).padStart(2, '0')} &middot; {activeLesson.title}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fechar lista de aulas' : 'Trocar aula (abrir lista)'}
            className="lg:hidden px-2.5 py-1 rounded-lg bg-teal-700 text-white text-[11px] font-bold shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            {mobileOpen ? 'Fechar Lista ▲' : 'Trocar Aula ▼'}
          </button>
        </div>

        {/* Collapsible body on mobile, always visible on desktop (lg:block) */}
        <div className={`${mobileOpen ? 'block' : 'hidden'} lg:block space-y-2.5`}>
          <input
            id="lesson-sidebar-search-input"
            type="search"
            value={searchTerm}
            onChange={(e) => onChangeSearch(e.target.value)}
            placeholder="Buscar aula, lei, endemia..."
            aria-label="Buscar aula, lei ou endemia"
            className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap gap-1">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => onChangeCatFilter(c.id)}
                className={`px-2 py-1 rounded-md text-[11px] font-bold transition cursor-pointer ${
                  catFilter === c.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex flex-wrap gap-1 pt-1 border-t border-slate-100">
            <button
              type="button"
              onClick={() => onChangeStatusFilter('ALL')}
              className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition cursor-pointer ${
                statusFilter === 'ALL'
                  ? 'bg-teal-700 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Todos Status
            </button>
            {STATUS_OPTIONS.map((stKey) => {
              const meta = getStatusMeta(stKey);
              return (
                <button
                  key={stKey}
                  type="button"
                  onClick={() => onChangeStatusFilter(stKey)}
                  className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition cursor-pointer ${
                    statusFilter === stKey
                      ? meta.activeClass
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {meta.icon} {meta.label}
                </button>
              );
            })}
            {onToggleOnlyFavorites && (
              <button
                type="button"
                onClick={onToggleOnlyFavorites}
                className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition cursor-pointer ${
                  onlyFavorites
                    ? 'bg-amber-500 text-white'
                    : 'bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100'
                }`}
              >
                ★ Favoritas ({favoriteLessons.length})
              </button>
            )}
          </div>

          {/* Lesson List */}
          <div
            id="lessonsSidebarList"
            className="max-h-[48vh] lg:max-h-[62vh] overflow-y-auto space-y-1 pr-1"
          >
            {filteredLessons.map((lesson) => {
              const isSelected = lesson.id === activeLessonId;
              const isFav = favoriteLessons.includes(lesson.id);
              const st = getTopicStatus(lesson.id);
              const meta = getStatusMeta(st);

              return (
                <button
                  key={lesson.id}
                  type="button"
                  onClick={() => {
                    onSelectLesson(lesson.id);
                    setMobileOpen(false);
                  }}
                  className={`w-full text-left p-2 rounded-lg border transition flex flex-col gap-0.5 cursor-pointer ${
                    isSelected
                      ? 'bg-teal-900 text-white border-teal-950 shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 text-[10px]">
                    <span className={isSelected ? 'text-teal-200 font-bold' : 'text-slate-500 font-bold'}>
                      {isFav ? <span className="text-amber-400 mr-1">★</span> : null}
                      Aula {String(lesson.num).padStart(2, '0')} &middot; {lesson.cat.toUpperCase()}
                    </span>
                    <span className={isSelected ? 'text-amber-300 font-semibold' : 'text-slate-500 font-semibold'}>
                      {meta.icon} {meta.label}
                    </span>
                  </div>
                  <span className="text-xs font-bold leading-snug line-clamp-2">
                    {lesson.title}
                  </span>
                </button>
              );
            })}

            {filteredLessons.length === 0 && (
              <p className="text-xs text-slate-500 text-center py-4">
                Nenhuma aula encontrada com os filtros atuais.
              </p>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};
