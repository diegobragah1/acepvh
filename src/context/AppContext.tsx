import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppData, TopicStatus } from '../types';
import { getStatusMeta } from '../utils/status';

const STORAGE_KEY_COMPLETED = "ace_semusa_2026_completed_lessons_v3";
const STORAGE_KEY_TOPIC_STATUS = "ace_semusa_2026_topic_status_v1";
const STORAGE_KEY_ANSWERS = "ace_semusa_2026_sim_answers_v3";

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
  simAnswers: Record<string, number>;
  setSimAnswer: (qid: string, oidx: number) => void;
  resetSimAnswers: () => void;
  currentStudyMode: 'ALL' | 'MAPA' | 'A' | 'B' | 'C';
  setCurrentStudyMode: (mode: 'ALL' | 'MAPA' | 'A' | 'B' | 'C') => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  isSitesModalOpen: boolean;
  setSitesModalOpen: (open: boolean) => void;
  exportProgress: () => void;
  importProgress: (file: File) => Promise<void>;
  getTopicStatus: (topicId: string) => TopicStatus;
  toggleCompleteCurrentLesson: () => void;
  reloadData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

function loadStorage<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
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
  if (Array.isArray(data.lessons)) {
    data.lessons.forEach(l => {
      if (l.sources && Array.isArray((l.sources as any).value)) {
        l.sources = (l.sources as any).value;
      } else if (!Array.isArray(l.sources)) {
        l.sources = [];
      }
    });
  }
  return data;
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
  const [currentStudyMode, setCurrentStudyMode] = useState<'ALL' | 'MAPA' | 'A' | 'B' | 'C'>('ALL');

  const [completedLessons, setCompletedLessons] = useState<string[]>(() =>
    loadStorage<string[]>(STORAGE_KEY_COMPLETED, [])
  );
  const [topicStatus, setTopicStatus] = useState<Record<string, TopicStatus>>(() =>
    loadStorage<Record<string, TopicStatus>>(STORAGE_KEY_TOPIC_STATUS, {})
  );
  const [simAnswers, setSimAnswers] = useState<Record<string, number>>(() =>
    loadStorage<Record<string, number>>(STORAGE_KEY_ANSWERS, {})
  );

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

    const meta = getStatusMeta(newStatus);
    showToast(`${meta.icon} Status atualizado: ${meta.label}!`);
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
      simAnswers
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
      const parsed = JSON.parse(text);

      if (parsed.topicStatus && typeof parsed.topicStatus === 'object') {
        setTopicStatus(parsed.topicStatus);
        saveStorage(STORAGE_KEY_TOPIC_STATUS, parsed.topicStatus);
      }
      if (Array.isArray(parsed.completedLessons)) {
        setCompletedLessons(parsed.completedLessons);
        saveStorage(STORAGE_KEY_COMPLETED, parsed.completedLessons);
      }
      if (parsed.simAnswers && typeof parsed.simAnswers === 'object') {
        setSimAnswers(parsed.simAnswers);
        saveStorage(STORAGE_KEY_ANSWERS, parsed.simAnswers);
      }
      showToast("Progresso importado e sincronizado com sucesso!");
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
        simAnswers,
        setSimAnswer,
        resetSimAnswers,
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
        reloadData: loadData
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
