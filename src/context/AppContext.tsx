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
  currentStudyMode: 'ALL' | 'A' | 'B' | 'C';
  setCurrentStudyMode: (mode: 'ALL' | 'A' | 'B' | 'C') => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  isSitesModalOpen: boolean;
  setSitesModalOpen: (open: boolean) => void;
  exportProgress: () => void;
  importProgress: (file: File) => Promise<void>;
  getTopicStatus: (topicId: string) => TopicStatus;
  toggleCompleteCurrentLesson: () => void;
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

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [appData, setAppData] = useState<AppData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [currentTab, setCurrentTabState] = useState<string>('tab-apostila');
  const [currentLessonId, setCurrentLessonId] = useState<string>('esp_1');
  const [currentStudyMode, setCurrentStudyMode] = useState<'ALL' | 'A' | 'B' | 'C'>('ALL');

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

  // Fetch app_data.json on mount
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        // Try fetch first
        const resp = await fetch('./data/app_data.json', { cache: 'no-cache' });
        if (resp.ok) {
          const data: AppData = await resp.json();
          normalizeData(data);
          setAppData(data);
          setLoading(false);
          return;
        }
      } catch (e) {
        console.warn("fetch ./data/app_data.json failed, falling back to local fallback if present", e);
      }

      // Check window.LOCAL_APP_DATA fallback
      if (typeof window !== 'undefined' && (window as any).LOCAL_APP_DATA) {
        const data = (window as any).LOCAL_APP_DATA;
        normalizeData(data);
        setAppData(data);
        setLoading(false);
        return;
      }

      // Try absolute path /data/app_data.json
      try {
        const resp = await fetch('/data/app_data.json', { cache: 'no-cache' });
        if (resp.ok) {
          const data: AppData = await resp.json();
          normalizeData(data);
          setAppData(data);
          setLoading(false);
          return;
        }
      } catch (e) {}

      setError("Não foi possível carregar os dados de data/app_data.json.");
      setLoading(false);
    }

    loadData();
  }, []);

  function normalizeData(data: AppData) {
    if (Array.isArray(data.lessons)) {
      data.lessons.forEach(l => {
        if (l.sources && Array.isArray((l.sources as any).value)) {
          l.sources = (l.sources as any).value;
        } else if (!Array.isArray(l.sources)) {
          l.sources = [];
        }
      });
    }
  }

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
        toggleCompleteCurrentLesson
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
