import { TopicStatus, StatusMeta } from '../types';

export function getStatusMeta(status: TopicStatus): StatusMeta {
  switch (status) {
    case 'studying':
      return {
        id: 'studying',
        label: 'Estudando',
        icon: '📘',
        badgeClass: 'bg-sky-100 text-sky-800 border-sky-300',
        activeClass: 'bg-sky-600 text-white shadow-sm',
        pillClass: 'bg-sky-500 text-white'
      };
    case 'completed':
      return {
        id: 'completed',
        label: 'Estudado',
        icon: '✅',
        badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        activeClass: 'bg-emerald-600 text-white shadow-sm',
        pillClass: 'bg-emerald-600 text-white'
      };
    case 'review':
      return {
        id: 'review',
        label: 'Revisar',
        icon: '🔄',
        badgeClass: 'bg-amber-100 text-amber-800 border-amber-300',
        activeClass: 'bg-amber-500 text-white shadow-sm',
        pillClass: 'bg-amber-500 text-white'
      };
    case 'mastered':
      return {
        id: 'mastered',
        label: 'Dominado',
        icon: '🏆',
        badgeClass: 'bg-purple-100 text-purple-800 border-purple-300',
        activeClass: 'bg-purple-600 text-white shadow-sm',
        pillClass: 'bg-purple-600 text-white'
      };
    case 'not_started':
    default:
      return {
        id: 'not_started',
        label: 'Não iniciado',
        icon: '⚪',
        badgeClass: 'bg-slate-100 text-slate-700 border-slate-300',
        activeClass: 'bg-slate-700 text-white shadow-sm',
        pillClass: 'bg-slate-300 text-slate-700'
      };
  }
}

export function getCatBadgeClass(cat: string): string {
  switch (cat) {
    case 'esp': return 'bg-teal-100 text-teal-800';
    case 'leg': return 'bg-amber-100 text-amber-900';
    case 'por': return 'bg-blue-100 text-blue-900';
    case 'rlm': return 'bg-indigo-100 text-indigo-900';
    case 'atu': return 'bg-emerald-100 text-emerald-900';
    default: return 'bg-slate-100 text-slate-800';
  }
}
