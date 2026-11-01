import React from 'react';
import type { TopicStatus } from '../../types';
import { getStatusMeta } from '../../utils/status';

export const STATUS_OPTIONS: TopicStatus[] = [
  'not_started',
  'studying',
  'completed',
  'review',
  'mastered',
];

interface StatusSelectorProps {
  currentStatus: TopicStatus;
  onChange: (status: TopicStatus) => void;
  size?: 'sm' | 'md';
  labelPrefix?: string;
}

export const StatusSelector: React.FC<StatusSelectorProps> = ({
  currentStatus,
  onChange,
  size = 'md',
  labelPrefix,
}) => {
  const paddingClass = size === 'sm' ? 'px-2 py-1 text-[10px]' : 'px-2.5 py-1.5 text-[11px]';

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {labelPrefix && (
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mr-1">
          {labelPrefix}
        </span>
      )}
      {STATUS_OPTIONS.map((stKey) => {
        const meta = getStatusMeta(stKey);
        const isCurrent = currentStatus === stKey;
        return (
          <button
            key={stKey}
            type="button"
            onClick={() => onChange(stKey)}
            className={`inline-flex items-center gap-1 ${paddingClass} rounded-lg font-bold border transition-all cursor-pointer ${
              isCurrent
                ? `${meta.activeClass} border-transparent ring-2 ring-offset-1 ring-slate-300`
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
            title={`Marcar status como: ${meta.label}`}
          >
            <span>{meta.icon}</span>
            <span>{meta.label}</span>
          </button>
        );
      })}
    </div>
  );
};
