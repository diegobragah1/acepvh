import React from 'react';

interface LessonNotesDrawerProps {
  lessonId: string;
  lessonNum: number;
  noteValue: string;
  onChangeNote: (lessonId: string, note: string) => void;
}

export const LessonNotesDrawer: React.FC<LessonNotesDrawerProps> = ({
  lessonId,
  lessonNum,
  noteValue,
  onChangeNote,
}) => {
  return (
    <div className="bg-sky-50/70 border border-sky-200 rounded-xl p-3 space-y-2 no-print">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <label
          htmlFor={`lesson-note-${lessonId}`}
          className="text-xs font-extrabold text-sky-950"
        >
          📝 Caderno de Anotações Pessoais — Aula {String(lessonNum).padStart(2, '0')}
        </label>
        <div className="flex items-center gap-2 text-[11px]">
          <span className="text-sky-700 font-semibold">
            Salvo automaticamente neste dispositivo
          </span>
          {noteValue && (
            <button
              type="button"
              onClick={() => onChangeNote(lessonId, '')}
              className="text-rose-700 hover:underline font-bold cursor-pointer"
            >
              Limpar nota
            </button>
          )}
        </div>
      </div>
      <textarea
        id={`lesson-note-${lessonId}`}
        value={noteValue}
        onChange={(e) => onChangeNote(lessonId, e.target.value)}
        rows={3}
        placeholder="Escreva aqui seus macetes, artigos-chave, datas, prazos ou dúvidas para revisar antes da prova..."
        className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-sky-300 bg-white text-slate-800 focus:outline-none focus:border-teal-600 resize-y"
      />
    </div>
  );
};
