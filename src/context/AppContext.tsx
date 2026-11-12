import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  AppData,
  ExamAttemptRecord,
  FlashcardSrsEntry,
  LastStudyPointer,
  SrsRating,
  TopicStatus,
} from '../types';
import { getStatusMeta } from '../utils/status';
import { normalizeAppData } from '../utils/normalizeData';
import {
  LESSON_ANSWERS_KEY,
  COMPLETED_SUBTOPICS_KEY,
  SRS_STORAGE_KEY,
  FAVORITE_LESSONS_KEY,
  FAVORITE_QUESTIONS_KEY,
  LESSON_NOTES_KEY,
  EXAM_HISTORY_KEY,
  LAST_STUDY_KEY,
  getSubtopicId,
  parseProgress,
  validAnswers,
  validStatuses,
  validCompleted,
  validFlashcardSrs,
  validNotesRecord,
  validExamHistory,
  validLastStudy,
} from '../utils/progress';
import { scheduleFlashcardReview } from '../utils/srs';
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

export interface SimuladoQuickIntent {
  subMode?: 'QUESTOES' | 'PROVA_OFICIAL' | 'SIMULADO_CUSTOM' | 'FLASHCARDS';
  statusFilter?: 'ALL' | 'WRONG' | 'CORRECT' | 'UNANSWERED' | 'FAVORITES';
  lessonId?: string;
  cat?: string;
  srsFilter?: 'ALL' | 'DUE' | 'HARD' | 'NEW' | 'KNOWN';
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
  flashcardSrs: Record<string, FlashcardSrsEntry>;
  rateFlashcard: (srsKey: string, rating: SrsRating) => void;
  resetFlashcardSrs: () => void;
  favoriteLessons: string[];
  toggleFavoriteLesson: (lessonId: string) => void;
  favoriteQuestions: string[];
  toggleFavoriteQuestion: (qKey: string) => void;
  lessonNotes: Record<string, string>;
  setLessonNote: (lessonId: string, note: string) => void;
  examHistory: ExamAttemptRecord[];
  recordExamAttempt: (attempt: ExamAttemptRecord) => void;
  clearExamHistory: () => void;
  lastStudy: LastStudyPointer | null;
  markLastStudy: (lessonId: string, blockIdx?: number) => void;
  lessonJumpTarget: { lessonId: string; blockIdx: number; timestamp: number } | null;
  openLessonBlock: (
    lessonId: string,
    blockIdx?: number,
    mode?: 'ALL' | 'VISUAL' | 'MAPA' | 'A' | 'B' | 'C'
  ) => void;
  simuladoQuickIntent: SimuladoQuickIntent | null;
  openSimuladoWithIntent: (intent: Omit<SimuladoQuickIntent, 'timestamp'>) => void;
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
    if (
      (key === STORAGE_KEY_COMPLETED ||
        key === COMPLETED_SUBTOPICS_KEY ||
        key === FAVORITE_LESSONS_KEY ||
        key === FAVORITE_QUESTIONS_KEY) &&
      !validCompleted(parsed)
    ) {
      return fallback;
    }
    if ((key === STORAGE_KEY_ANSWERS || key === LESSON_ANSWERS_KEY) && !validAnswers(parsed)) return fallback;
    if (key === SRS_STORAGE_KEY && !validFlashcardSrs(parsed)) return fallback;
    if (key === LESSON_NOTES_KEY && !validNotesRecord(parsed)) return fallback;
    if (key === EXAM_HISTORY_KEY && !validExamHistory(parsed)) return fallback;
    if (key === LAST_STUDY_KEY && !validLastStudy(parsed)) return fallback;
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

  const [lastStudy, setLastStudy] = useState<LastStudyPointer | null>(() => {
    try {
      const raw = window.localStorage.getItem(LAST_STUDY_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return validLastStudy(parsed) ? parsed : null;
    } catch {
      return null;
    }
  });

  const [currentTab, setCurrentTabState] = useState<string>('tab-apostila');
  const [currentLessonId, setCurrentLessonIdState] = useState<string>(() => lastStudy?.lessonId || 'esp_1');
  const [currentStudyMode, setCurrentStudyMode] = useState<'ALL' | 'VISUAL' | 'MAPA' | 'A' | 'B' | 'C'>('ALL');
  const [globalSearchTarget, setGlobalSearchTarget] = useState<GlobalSearchNavigationTarget | null>(null);
  const [simuladoQuickIntent, setSimuladoQuickIntent] = useState<SimuladoQuickIntent | null>(null);
  const [lessonJumpTarget, setLessonJumpTarget] = useState<{
    lessonId: string;
    blockIdx: number;
    timestamp: number;
  } | null>(null);

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

  const [flashcardSrs, setFlashcardSrs] = useState<Record<string, FlashcardSrsEntry>>(() =>
    loadStorage<Record<string, FlashcardSrsEntry>>(SRS_STORAGE_KEY, {})
  );
  const [favoriteLessons, setFavoriteLessons] = useState<string[]>(() =>
    loadStorage<string[]>(FAVORITE_LESSONS_KEY, [])
  );
  const [favoriteQuestions, setFavoriteQuestions] = useState<string[]>(() =>
    loadStorage<string[]>(FAVORITE_QUESTIONS_KEY, [])
  );
  const [lessonNotes, setLessonNotes] = useState<Record<string, string>>(() =>
    loadStorage<Record<string, string>>(LESSON_NOTES_KEY, {})
  );
  const [examHistory, setExamHistory] = useState<ExamAttemptRecord[]>(() =>
    loadStorage<ExamAttemptRecord[]>(EXAM_HISTORY_KEY, [])
  );

  const markLastStudy = useCallback((lessonId: string, blockIdx?: number) => {
    if (!lessonId) return;
    const pointer: LastStudyPointer = {
      lessonId,
      ...(blockIdx !== undefined && blockIdx >= 0 ? { blockIdx } : {}),
      updatedAt: Date.now(),
    };
    setLastStudy(pointer);
    saveStorage(LAST_STUDY_KEY, pointer);
  }, []);

  const setCurrentLessonId = useCallback(
    (id: string) => {
      setCurrentLessonIdState(id);
      markLastStudy(id);
    },
    [markLastStudy]
  );

  const openLessonBlock = useCallback(
    (
      lessonId: string,
      blockIdx?: number,
      mode?: 'ALL' | 'VISUAL' | 'MAPA' | 'A' | 'B' | 'C'
    ) => {
      setCurrentLessonIdState(lessonId);
      markLastStudy(lessonId, blockIdx);
      if (mode) {
        setCurrentStudyMode(mode);
      } else if (
        blockIdx !== undefined &&
        (currentStudyMode === 'MAPA' || currentStudyMode === 'VISUAL' || currentStudyMode === 'C')
      ) {
        setCurrentStudyMode('ALL');
      }
      if (blockIdx !== undefined && blockIdx >= 0) {
        setLessonJumpTarget({ lessonId, blockIdx, timestamp: Date.now() });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setCurrentTabState('tab-apostila');
    },
    [markLastStudy, currentStudyMode]
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
      setCurrentLessonIdState(item.lessonId);
      markLastStudy(item.lessonId, item.blockIdx);
      if (currentStudyMode === 'MAPA' || currentStudyMode === 'VISUAL' || currentStudyMode === 'C') {
        setCurrentStudyMode('ALL');
      }
      setCurrentTabState('tab-apostila');
      showToast(`Abrindo ${item.title} (${item.subtitle})`);
    } else if (item.type === 'ficha') {
      setCurrentTabState('tab-endemias');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast(`Abrindo ${item.title}`);
    } else if (item.type === 'questao') {
      setCurrentTabState('tab-simulado');
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
    markLastStudy(lessonId, blockIdx);
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

  const rateFlashcard = useCallback((srsKey: string, rating: SrsRating) => {
    setFlashcardSrs((prev) => {
      const nextEntry = scheduleFlashcardReview(prev[srsKey], rating);
      const updated = { ...prev, [srsKey]: nextEntry };
      saveStorage(SRS_STORAGE_KEY, updated);
      return updated;
    });
    if (rating === 'hard') {
      showToast('🔁 Cartão marcado como Difícil (voltará logo na revisão).');
    } else if (rating === 'good') {
      showToast('👍 Cartão revisado! Agendado para os próximos dias.');
    } else {
      showToast('🌟 Cartão marcado como Conhecido! Intervalo ampliado.');
    }
  }, []);

  const resetFlashcardSrs = useCallback(() => {
    setFlashcardSrs({});
    saveStorage(SRS_STORAGE_KEY, {});
    showToast('Progresso de revisão espaçada dos flashcards reiniciado.');
  }, []);

  const toggleFavoriteLesson = useCallback((lessonId: string) => {
    setFavoriteLessons((prev) => {
      const exists = prev.includes(lessonId);
      const updated = exists ? prev.filter((id) => id !== lessonId) : [...prev, lessonId];
      saveStorage(FAVORITE_LESSONS_KEY, updated);
      showToast(exists ? '☆ Aula removida dos favoritos.' : '★ Aula salva nos favoritos!');
      return updated;
    });
  }, []);

  const toggleFavoriteQuestion = useCallback((qKey: string) => {
    setFavoriteQuestions((prev) => {
      const exists = prev.includes(qKey);
      const updated = exists ? prev.filter((id) => id !== qKey) : [...prev, qKey];
      saveStorage(FAVORITE_QUESTIONS_KEY, updated);
      showToast(exists ? '☆ Questão removida dos favoritos.' : '★ Questão salva nos favoritos!');
      return updated;
    });
  }, []);

  const setLessonNote = useCallback((lessonId: string, note: string) => {
    setLessonNotes((prev) => {
      const updated = { ...prev };
      if (!note.trim()) {
        delete updated[lessonId];
      } else {
        updated[lessonId] = note;
      }
      saveStorage(LESSON_NOTES_KEY, updated);
      return updated;
    });
  }, []);

  const recordExamAttempt = useCallback((attempt: ExamAttemptRecord) => {
    setExamHistory((prev) => {
      const updated = [attempt, ...prev].slice(0, 30);
      saveStorage(EXAM_HISTORY_KEY, updated);
      return updated;
    });
    showToast(`📊 Resultado salvo no histórico: ${attempt.correct}/${attempt.totalQuestions} (${attempt.pct}%)`);
  }, []);

  const clearExamHistory = useCallback(() => {
    setExamHistory([]);
    saveStorage(EXAM_HISTORY_KEY, []);
    showToast('Histórico de simulados limpo.');
  }, []);

  const openSimuladoWithIntent = useCallback((intent: Omit<SimuladoQuickIntent, 'timestamp'>) => {
    setSimuladoQuickIntent({ ...intent, timestamp: Date.now() });
    setCurrentTabState('tab-simulado');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const exportProgress = () => {
    const payload = {
      platform: "ACE_SEMUSA_PVH_2026",
      exportedAt: new Date().toISOString(),
      topicStatus,
      completedLessons,
      completedSubtopics,
      simAnswers,
      lessonAnswers,
      flashcardSrs,
      favoriteLessons,
      favoriteQuestions,
      lessonNotes,
      examHistory,
      lastStudy,
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
    showToast("Backup JSON completo do seu progresso exportado com sucesso!");
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
      if (parsed.flashcardSrs !== undefined) {
        setFlashcardSrs(parsed.flashcardSrs);
        saveStorage(SRS_STORAGE_KEY, parsed.flashcardSrs);
      }
      if (parsed.favoriteLessons !== undefined) {
        setFavoriteLessons(parsed.favoriteLessons);
        saveStorage(FAVORITE_LESSONS_KEY, parsed.favoriteLessons);
      }
      if (parsed.favoriteQuestions !== undefined) {
        setFavoriteQuestions(parsed.favoriteQuestions);
        saveStorage(FAVORITE_QUESTIONS_KEY, parsed.favoriteQuestions);
      }
      if (parsed.lessonNotes !== undefined) {
        setLessonNotes(parsed.lessonNotes);
        saveStorage(LESSON_NOTES_KEY, parsed.lessonNotes);
      }
      if (parsed.examHistory !== undefined) {
        setExamHistory(parsed.examHistory);
        saveStorage(EXAM_HISTORY_KEY, parsed.examHistory);
      }
      if (parsed.lastStudy !== undefined) {
        setLastStudy(parsed.lastStudy);
        saveStorage(LAST_STUDY_KEY, parsed.lastStudy);
        setCurrentLessonIdState(parsed.lastStudy.lessonId);
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
        flashcardSrs,
        rateFlashcard,
        resetFlashcardSrs,
        favoriteLessons,
        toggleFavoriteLesson,
        favoriteQuestions,
        toggleFavoriteQuestion,
        lessonNotes,
        setLessonNote,
        examHistory,
        recordExamAttempt,
        clearExamHistory,
        lastStudy,
        markLastStudy,
        lessonJumpTarget,
        openLessonBlock,
        simuladoQuickIntent,
        openSimuladoWithIntent,
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
