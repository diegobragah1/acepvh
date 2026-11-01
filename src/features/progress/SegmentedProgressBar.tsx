import React from 'react';
import type { TopicStatus } from '../../types';
import { getStatusMeta } from '../../utils/status';

interface SegmentedProgressBarProps {
  statusCounts: Record<TopicStatus, number>;
  total: number;
  heightClass?: string;
  showLegend?: boolean;
}

const BAR_COLORS: Record<TopicStatus, string> = {
  mastered: 'bg-purple-600',
  completed: 'bg-emerald-500',
  review: 'bg-amber-500',
  studying: 'bg-sky-500',
  not_started: 'bg-slate-200',
};

const ORDERED_STATUSES: TopicStatus[] = ['mastered', 'completed', 'review', 'studying'];

export const SegmentedProgressBar: React.FC<SegmentedProgressBarProps> = ({
  statusCounts,
  total,
  heightClass = 'h-2.5',
  showLegend = false,
}) => {
  const safeTotal = Math.max(1, total);

  return (
    <div>
      <div className={`w-full ${heightClass} bg-slate-200 rounded-full overflow-hidden flex`}>
        {ORDERED_STATUSES.map((st) => {
          const count = statusCounts[st] || 0;
          if (count <= 0) return null;
          const meta = getStatusMeta(st);
          return (
            <div
              key={st}
              className={`${BAR_COLORS[st]} h-full transition-all duration-500`}
              style={{ width: `${(count / safeTotal) * 100}%` }}
              title={`${meta.label}: ${count}`}
            />
          );
        })}
      </div>

      {showLegend && (
        <div className="flex flex-wrap items-center gap-1.5 mt-2 text-[10px] font-bold">
          {(['not_started', 'studying', 'completed', 'review', 'mastered'] as TopicStatus[]).map((st) => {
            const meta = getStatusMeta(st);
            return (
              <span
                key={st}
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border ${meta.badgeClass}`}
              >
                <span>{meta.icon}</span>
                <span>
                  {meta.label}: <strong>{statusCounts[st] || 0}</strong>
                </span>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};
