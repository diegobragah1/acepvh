import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppData, TopicStatus } from '../types';
import { getStatusMeta } from '../utils/status';
import { normalizeAppData } from '../utils/normalizeData';
import {
  LESSON_ANSWERS_KEY,
  COMPLETED_SUBTOPICS_KEY,
  getSubtopicId,
  parseProgress,
  validAnswers,
  validStatuses,
  validCompleted,
} from '../utils/progress';
import type { GlobalSearchResultItem } from '../utils/globalSearch';

const STORAGE_KEY_COMPLETED = "ace_semusa_2026_completed_lessons_v3";
const STORAGE_KEY_TOPIC_STATUS = "ace_semusa_2026_topic_status_v1";
const STORAGE_KEY_ANSWERS = "ace_semusa_2026_sim_answers_v3";

export interface GlobalSearchNavigationTarget {
  type: 'aula' | 'ficha' | 'questao';
  query: string;
  lessonId?: string;
  blockIdx?: number;
  diseaseName?: string;
  questionId?: string;
  timestamp: number;
}

interface AppContextType {
  appData: AppData | null;
  loading: boolean;
  error: string | null;
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  currentLessonId: string;
  setCurrentLessonId: (id: string) => void;
  topicStatus: Record<string, TopicStatus>;
  updateTopicStatus: (topicId: string, newStatus: TopicStatus) => void;
  completedLessons: string[];
  completedSubtopics: string[];
  isSubtopicCompleted: (lessonId: string, blockIdx: number) => boolean;
  toggleSubtopicComplete: (lessonId: string, blockIdx: number) => void;
  simAnswers: Record<string, number>;
  setSimAnswer: (qid: string, oidx: number) => void;
  resetSimAnswers: () => void;
  lessonAnswers: Record<string, number>;
  setLessonAnswers: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  currentStudyMode: 'ALL' | 'VISUAL' | 'MAPA' | 'A' | 'B' | 'C';
  setCurrentStudyMode: (mode: 'ALL' | 'VISUAL' | 'MAPA' | 'A' | 'B' | 'C') => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  isSitesModalOpen: boolean;
  setSitesModalOpen: (open: boolean) => void;
  exportProgress: () => void;
  importProgress: (file: File) => Promise<void>;
  getTopicStatus: (topicId: string) => TopicStatus;
  toggleCompleteCurrentLesson: () => void;
  reloadData: () => void;
  globalSearchTarget: GlobalSearchNavigationTarget | null;
  navigateToSearchResult: (item: GlobalSearchResultItem) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

function loadStorage<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    if (parsed === null || parsed === undefined) return fallback;
    if (Array.isArray(fallback) && !Array.isArray(parsed)) return fallback;
    if (
      !Array.isArray(fallback) &&
      typeof fallback === 'object' &&
      (typeof parsed !== 'object' || Array.isArray(parsed))
    ) {
      return fallback;
    }
    if (key === STORAGE_KEY_TOPIC_STATUS && !validStatuses(parsed)) return fallback;
    if ((key === STORAGE_KEY_COMPLETED || key === COMPLETED_SUBTOPICS_KEY) && !validCompleted(parsed)) return fallback;
    if ((key === STORAGE_KEY_ANSWERS || key === LESSON_ANSWERS_KEY) && !validAnswers(parsed)) return fallback;
    return parsed as T;
  } catch (err) {
    return fallback;
  }
}

function saveStorage<T>(key: string, val: T): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(val));
  } catch (err) {}
}

function normalizeData(data: AppData): AppData {
  return normalizeAppData(data);
}

function loadScriptFallback(src: string): Promise<AppData | null> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(null);
      return;
    }
    const existing = (window as any).APP_DATA || (window as any).LOCAL_APP_DATA;
    if (existing && Array.isArray(existing.lessons)) {
      resolve(existing as AppData);
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => {
      const loaded = (window as any).APP_DATA || (window as any).LOCAL_APP_DATA;
      resolve(loaded && Array.isArray(loaded.lessons) ? (loaded as AppData) : null);
    };
    script.onerror = () => resolve(null);
    document.head.appendChild(script);
  });
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [appData, setAppData] = useState<AppData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [currentTab, setCurrentTabState] = useState<string>('tab-apostila');
  const [currentLessonId, setCurrentLessonId] = useState<string>('esp_1');
  const [currentStudyMode, setCurrentStudyMode] = useState<'ALL' | 'VISUAL' | 'MAPA' | 'A' | 'B' | 'C'>('ALL');
  const [globalSearchTarget, setGlobalSearchTarget] = useState<GlobalSearchNavigationTarget | null>(null);

  const [completedLessons, setCompletedLessons] = useState<string[]>(() =>
    loadStorage<string[]>(STORAGE_KEY_COMPLETED, [])
  );
  const [completedSubtopics, setCompletedSubtopics] = useState<string[]>(() =>
    loadStorage<string[]>(COMPLETED_SUBTOPICS_KEY, [])
  );
  const [topicStatus, setTopicStatus] = useState<Record<string, TopicStatus>>(() =>
    loadStorage<Record<string, TopicStatus>>(STORAGE_KEY_TOPIC_STATUS, {})
  );
  const [simAnswers, setSimAnswers] = useState<Record<string, number>>(() =>
    loadStorage<Record<string, number>>(STORAGE_KEY_ANSWERS, {})
  );

  const [lessonAnswers, setLessonAnswers] = useState<Record<string, number>>(() => loadStorage(LESSON_ANSWERS_KEY, {}));
  useEffect(() => { saveStorage(LESSON_ANSWERS_KEY, lessonAnswers); }, [lessonAnswers]);

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSitesModalOpen, setSitesModalOpen] = useState<boolean>(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3800);
  };

  const setCurrentTab = (tab: string) => {
    setCurrentTabState(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSearchResult = (item: GlobalSearchResultItem) => {
    const target: GlobalSearchNavigationTarget = {
      type: item.type,
      query: item.matchedTerm,
      lessonId: item.lessonId,
      blockIdx: item.blockIdx,
      diseaseName: item.diseaseName,
      questionId: item.questionId,
      timestamp: Date.now(),
    };
    setGlobalSearchTarget(target);

    if (item.type === 'aula' && item.lessonId) {
      setCurrentLessonId(item.lessonId);
      if (currentStudyMode === 'MAPA' || currentStudyMode === 'VISUAL' || currentStudyMode === 'C') {
        setCurrentStudyMode('ALL');
      }
      setCurrentTabState('tab-apostila');
      showToast(`Abrindo ${item.title} (${item.subtitle})`);
    } else if (item.type === 'ficha') {
      setCurrentTabState('tab-endemias');
      showToast(`Abrindo ${item.title}`);
    } else if (item.type === 'questao') {
      setCurrentTabState('tab-simulado');
      showToast(`Filtrando questão na aba Revisão (${item.badge})`);
    }
  };

  const loadData = async () => {
    setLoading(true);
    setError(null);

    // 1. Check if global APP_DATA or LOCAL_APP_DATA is already present in window
    if (typeof window !== 'undefined') {
      const preloaded = (window as any).APP_DATA || (window as any).LOCAL_APP_DATA;
      if (preloaded && Array.isArray(preloaded.lessons) && preloaded.lessons.length > 0) {
        setAppData(normalizeData(preloaded));
        setLoading(false);
        return;
      }
    }

    // 2. Try fetching JSON from relative and base paths (works on GitHub Pages /acepvh/ and root /)
    const baseUrl = (import.meta as any).env?.BASE_URL || './';
    const candidateUrls = Array.from(
      new Set([
        './data/app_data.json',
        'data/app_data.json',
        `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}data/app_data.json`,
        '/data/app_data.json',
      ])
    );

    for (const url of candidateUrls) {
      try {
        const resp = await fetch(url, { cache: 'no-cache' });
        if (resp.ok) {
          const contentType = resp.headers.get('content-type') || '';
          if (!contentType.includes('text/html')) {
            const data: AppData = await resp.json();
            if (data && Array.isArray(data.lessons)) {
              setAppData(normalizeData(data));
              setLoading(false);
              return;
            }
          }
        }
      } catch (e) {
        // Continue to next candidate URL
      }
    }

    // 3. Fallback: dynamically inject ./data/app_data.js (works even when JSON fetch is blocked)
    const scriptCandidates = ['./data/app_data.js', 'data/app_data.js', '/data/app_data.js'];
    for (const scriptUrl of scriptCandidates) {
      const fallbackData = await loadScriptFallback(scriptUrl);
      if (fallbackData) {
        setAppData(normalizeData(fallbackData));
        setLoading(false);
        return;
      }
    }

    setError('Não foi possível carregar a base de dados (data/app_data.json). Verifique sua conexão e tente novamente.');
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const getTopicStatus = (topicId: string): TopicStatus => {
    if (topicStatus && topicStatus[topicId]) {
      return topicStatus[topicId];
    }
    if (completedLessons && completedLessons.includes(topicId)) {
      return 'completed';
    }
    return 'not_started';
  };

  const isSubtopicCompleted = (lessonId: string, blockIdx: number): boolean => {
    const st = getTopicStatus(lessonId);
    if (st === 'completed' || st === 'mastered') {
      return true;
    }
    return completedSubtopics.includes(getSubtopicId(lessonId, blockIdx));
  };

  const updateTopicStatus = (topicId: string, newStatus: TopicStatus) => {
    if (!topicId || !newStatus) return;

    setTopicStatus(prev => {
      const updated = { ...prev, [topicId]: newStatus };
      saveStorage(STORAGE_KEY_TOPIC_STATUS, updated);
      return updated;
    });

    setCompletedLessons(prev => {
      let updated: string[];
      if (newStatus === 'completed' || newStatus === 'mastered') {
        updated = prev.includes(topicId) ? prev : [...prev, topicId];
      } else {
        updated = prev.filter(id => id !== topicId);
      }
      saveStorage(STORAGE_KEY_COMPLETED, updated);
      return updated;
    });

    const targetLesson = appData?.lessons?.find(l => l.id === topicId);
    const blockCount = targetLesson?.blocks?.length || 0;
    if (blockCount > 0) {
      const lessonSubtopicIds = Array.from({ length: blockCount }, (_, idx) =>
        getSubtopicId(topicId, idx)
      );
      if (newStatus === 'completed' || newStatus === 'mastered') {
        setCompletedSubtopics(prev => {
          const next = Array.from(new Set([...prev, ...lessonSubtopicIds]));
          saveStorage(COMPLETED_SUBTOPICS_KEY, next);
          return next;
        });
      } else if (newStatus === 'not_started') {
        const prefix = `${topicId}_b`;
        setCompletedSubtopics(prev => {
          const next = prev.filter(id => !id.startsWith(prefix));
          saveStorage(COMPLETED_SUBTOPICS_KEY, next);
          return next;
        });
      }
    }

    const meta = getStatusMeta(newStatus);
    showToast(`${meta.icon} Status atualizado: ${meta.label}!`);
  };

  const toggleSubtopicComplete = (lessonId: string, blockIdx: number) => {
    if (!lessonId || blockIdx < 0) return;
    const subId = getSubtopicId(lessonId, blockIdx);
    const targetLesson = appData?.lessons?.find(l => l.id === lessonId);
    const blockCount = targetLesson?.blocks?.length || 0;
    const currentLessonStatus = getTopicStatus(lessonId);
    const isLessonDone = currentLessonStatus === 'completed' || currentLessonStatus === 'mastered';
    const currentlyCompleted = isLessonDone || completedSubtopics.includes(subId);

    if (currentlyCompleted) {
      // Unmarking a subtopic
      setCompletedSubtopics(prev => {
        const base = new Set(prev);
        if (isLessonDone && blockCount > 0) {
          for (let i = 0; i < blockCount; i++) {
            base.add(getSubtopicId(lessonId, i));
          }
        }
        base.delete(subId);
        const next = Array.from(base);
        saveStorage(COMPLETED_SUBTOPICS_KEY, next);
        return next;
      });

      if (isLessonDone) {
        setTopicStatus(prev => {
          const updated = { ...prev, [lessonId]: 'studying' as TopicStatus };
          saveStorage(STORAGE_KEY_TOPIC_STATUS, updated);
          return updated;
        });
        setCompletedLessons(prev => {
          const updated = prev.filter(id => id !== lessonId);
          saveStorage(STORAGE_KEY_COMPLETED, updated);
          return updated;
        });
      }
      showToast(`⬜ Tópico ${blockIdx + 1} desmarcado.`);
    } else {
      // Marking a subtopic as completed
      const nextSet = new Set(completedSubtopics);
      nextSet.add(subId);
      const nextArray = Array.from(nextSet);
      setCompletedSubtopics(nextArray);
      saveStorage(COMPLETED_SUBTOPICS_KEY, nextArray);

      const allBlocksDone =
        blockCount > 0 &&
        Array.from({ length: blockCount }, (_, i) => nextSet.has(getSubtopicId(lessonId, i))).every(Boolean);

      if (allBlocksDone && !isLessonDone) {
        setTopicStatus(prev => {
          const updated = { ...prev, [lessonId]: 'completed' as TopicStatus };
          saveStorage(STORAGE_KEY_TOPIC_STATUS, updated);
          return updated;
        });
        setCompletedLessons(prev => {
          const updated = prev.includes(lessonId) ? prev : [...prev, lessonId];
          saveStorage(STORAGE_KEY_COMPLETED, updated);
          return updated;
        });
        showToast(`🎉 Todos os ${blockCount} tópicos concluídos! Aula marcada como Estudada!`);
      } else {
        if (currentLessonStatus === 'not_started') {
          setTopicStatus(prev => {
            const updated = { ...prev, [lessonId]: 'studying' as TopicStatus };
            saveStorage(STORAGE_KEY_TOPIC_STATUS, updated);
            return updated;
          });
        }
        showToast(`✅ Tópico ${blockIdx + 1} marcado como concluído!`);
      }
    }
  };

  const toggleCompleteCurrentLesson = () => {
    const current = getTopicStatus(currentLessonId);
    if (current === 'completed' || current === 'mastered') {
      updateTopicStatus(currentLessonId, 'not_started');
    } else {
      updateTopicStatus(currentLessonId, 'completed');
    }
  };

  const setSimAnswer = (qid: string, oidx: number) => {
    setSimAnswers(prev => {
      const updated = { ...prev, [qid]: oidx };
      saveStorage(STORAGE_KEY_ANSWERS, updated);
      return updated;
    });
  };

  const resetSimAnswers = () => {
    setSimAnswers({});
    saveStorage(STORAGE_KEY_ANSWERS, {});
    showToast("Respostas do simulado reiniciadas com sucesso!");
  };

  const exportProgress = () => {
    const payload = {
      platform: "ACE_SEMUSA_PVH_2026",
      exportedAt: new Date().toISOString(),
      topicStatus,
      completedLessons,
      completedSubtopics,
      simAnswers,
      lessonAnswers
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "progresso_ace_semusa_2026.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("Backup JSON do seu progresso exportado com sucesso!");
  };

  const importProgress = async (file: File) => {
    try {
      const text = await file.text();
      const parsed = parseProgress(JSON.parse(text));

      if (parsed.topicStatus && typeof parsed.topicStatus === 'object') {
        setTopicStatus(parsed.topicStatus);
        saveStorage(STORAGE_KEY_TOPIC_STATUS, parsed.topicStatus);
      }
      if (Array.isArray(parsed.completedLessons)) {
        setCompletedLessons(parsed.completedLessons);
        saveStorage(STORAGE_KEY_COMPLETED, parsed.completedLessons);
      }
      if (Array.isArray(parsed.completedSubtopics)) {
        setCompletedSubtopics(parsed.completedSubtopics);
        saveStorage(COMPLETED_SUBTOPICS_KEY, parsed.completedSubtopics);
      }
      if (parsed.simAnswers && typeof parsed.simAnswers === 'object') {
        setSimAnswers(parsed.simAnswers);
        saveStorage(STORAGE_KEY_ANSWERS, parsed.simAnswers);
      }
      if (parsed.lessonAnswers !== undefined) {
        setLessonAnswers(parsed.lessonAnswers);
        saveStorage(LESSON_ANSWERS_KEY, parsed.lessonAnswers);
      }
      showToast("Progresso importado neste navegador com sucesso!");
    } catch (err) {
      showToast("Erro ao ler o arquivo JSON de progresso.");
    }
  };

  return (
    <AppContext.Provider
      value={{
        appData,
        loading,
        error,
        currentTab,
        setCurrentTab,
        currentLessonId,
        setCurrentLessonId,
        topicStatus,
        updateTopicStatus,
        completedLessons,
        completedSubtopics,
        isSubtopicCompleted,
        toggleSubtopicComplete,
        simAnswers,
        setSimAnswer,
        resetSimAnswers,
        lessonAnswers,
        setLessonAnswers,
        currentStudyMode,
        setCurrentStudyMode,
        toastMessage,
        showToast,
        isSitesModalOpen,
        setSitesModalOpen,
        exportProgress,
        importProgress,
        getTopicStatus,
        toggleCompleteCurrentLesson,
        reloadData: loadData,
        globalSearchTarget,
        navigateToSearchResult,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
