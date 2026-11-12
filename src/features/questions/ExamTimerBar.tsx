import React from 'react';

export function formatDurationSeconds(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(safe / 3600);
  const mins = Math.floor((safe % 3600) / 60);
  const secs = safe % 60;
  return [hours, mins, secs].map((v) => String(v).padStart(2, '0')).join(':');
}

interface ExamTimerBarProps {
  limitSeconds: number | null;
  elapsedSeconds: number;
  running: boolean;
  submitted?: boolean;
  onToggleRunning: () => void;
  onReset: () => void;
  label?: string;
}

export const ExamTimerBar: React.FC<ExamTimerBarProps> = ({
  limitSeconds,
  elapsedSeconds,
  running,
  submitted = false,
  onToggleRunning,
  onReset,
  label = 'Cronômetro de Prova',
}) => {
  const hasLimit = limitSeconds !== null && limitSeconds > 0;
  const remaining = hasLimit ? Math.max(0, limitSeconds - elapsedSeconds) : elapsedSeconds;
  const isExpired = hasLimit && remaining <= 0;
  const isWarning = hasLimit && !isExpired && remaining <= 900;
  const progressPct = hasLimit
    ? Math.min(100, Math.round((elapsedSeconds / limitSeconds) * 100))
    : 0;

  return (
    <div
      className={`rounded-xl border px-3.5 py-2.5 flex flex-wrap items-center justify-between gap-2.5 text-xs transition ${
        isExpired
          ? 'bg-rose-950/70 border-rose-400 text-rose-100'
          : isWarning
            ? 'bg-amber-950/60 border-amber-400 text-amber-100'
            : 'bg-white/10 border-white/15 text-white'
      }`}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <span className="text-base" aria-hidden="true">
          {isExpired ? '⏰' : running ? '⏱️' : '⏸️'}
        </span>
        <div>
          <span className="block text-[10px] uppercase tracking-wider text-slate-300 font-bold">
            {label} {hasLimit ? `(Limite ${formatDurationSeconds(limitSeconds)})` : '(Livre)'}
          </span>
          <div className="flex items-baseline gap-2">
            <span className="mono text-sm sm:text-base font-black tracking-tight">
              {isExpired
                ? 'Tempo Esgotado!'
                : hasLimit
                  ? `Restam ${formatDurationSeconds(remaining)}`
                  : formatDurationSeconds(elapsedSeconds)}
            </span>
            {hasLimit && (
              <span className="text-[10px] text-slate-300 mono">
                (Decorrido: {formatDurationSeconds(elapsedSeconds)})
              </span>
            )}
          </div>
        </div>
      </div>

      {hasLimit && (
        <div className="w-full sm:w-32 bg-white/15 h-1.5 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all ${
              isExpired ? 'bg-rose-400' : isWarning ? 'bg-amber-400' : 'bg-emerald-400'
            }`}
            style={{ width: `${progressPct}%` }}
          />
        </div>
      )}

      <div className="flex items-center gap-1.5 shrink-0">
        {!submitted && (
          <button
            type="button"
            onClick={onToggleRunning}
            className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition cursor-pointer ${
              running
                ? 'bg-amber-400 hover:bg-amber-500 text-slate-950'
                : 'bg-emerald-500 hover:bg-emerald-600 text-slate-950'
            }`}
          >
            {running ? '⏸ Pausar' : '▶ Iniciar'}
          </button>
        )}
        <button
          type="button"
          onClick={onReset}
          className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 font-bold text-[11px] transition cursor-pointer"
        >
          ↺ Zerar Tempo
        </button>
      </div>
    </div>
  );
};
