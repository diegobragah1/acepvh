import React from 'react';
import type { Lesson, TopicStatus } from '../../types';
import { getStatusMeta, getCatBadgeClass } from '../../utils/status';
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
}) => {
  return (
    <aside className="lg:col-span-3 space-y-3 no-print">
      <div className="bg-white rounded-2xl border border-slate-200 p-3.5 shadow-sm space-y-3 sticky top-36">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
            📚 Sumário ({filteredLessons.length}/{lessons.length} Aulas)
          </h3>
        </div>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onChangeSearch(e.target.value)}
          placeholder="Buscar aula, lei, endemia..."
          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-teal-600 bg-slate-50"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap gap-1">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => onChangeCatFilter(c.id)}
              className={`px-2 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
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
            className={`px-2 py-1 rounded-lg text-[10px] font-bold transition cursor-pointer ${
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
                className={`px-2 py-1 rounded-lg text-[10px] font-bold transition cursor-pointer ${
                  statusFilter === stKey
                    ? meta.activeClass
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {meta.icon} {meta.label}
              </button>
            );
          })}
        </div>

        {/* Lesson List */}
        <div className="max-h-[58vh] overflow-y-auto space-y-1.5 pr-1">
          {filteredLessons.map((lesson) => {
            const isSelected = lesson.id === activeLessonId;
            const st = getTopicStatus(lesson.id);
            const meta = getStatusMeta(st);

            return (
              <button
                key={lesson.id}
                type="button"
                onClick={() => onSelectLesson(lesson.id)}
                className={`w-full text-left p-2.5 rounded-xl border transition flex flex-col gap-1 cursor-pointer ${
                  isSelected
                    ? 'bg-teal-900 text-white border-teal-950 shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200/80'
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <span
                    className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded uppercase ${
                      isSelected ? 'bg-teal-700 text-teal-100' : getCatBadgeClass(lesson.cat)
                    }`}
                  >
                    Aula {String(lesson.num).padStart(2, '0')} &bull; {lesson.cat.toUpperCase()}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                      isSelected
                        ? 'bg-white/15 text-white border-white/20'
                        : meta.badgeClass
                    }`}
                  >
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
            <p className="text-xs text-slate-500 text-center py-6">
              Nenhuma aula encontrada com os filtros atuais.
            </p>
          )}
        </div>
      </div>
    </aside>
  );
};
