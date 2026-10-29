export type TopicStatus = 'not_started' | 'studying' | 'completed' | 'review' | 'mastered';

export interface StatusMeta {
  id: TopicStatus;
  label: string;
  icon: string;
  badgeClass: string;
  activeClass: string;
  pillClass: string;
}

export interface Cargo {
  code: string;
  local: string;
  ac: number;
  pcd: number;
  pn: number;
  pi: number;
  imediata?: number;
  im?: number;
  cr: number;
  total?: number;
  tot?: number;
}

export interface Source {
  num: number;
  folder: string;
  title?: string;
  name?: string;
  url: string;
  note?: string;
  tokens?: number;
  size?: string;
  lesson?: string;
  status?: string;
  revoked?: boolean;
}

export interface Question {
  q: string;
  options: string[];
  ans: number;
  comment: string;
}

export interface Flashcard {
  f?: string;
  front?: string;
  b?: string;
  back?: string;
  lessonTitle?: string;
}

export interface LessonBlock {
  title: string;
  modoA_markdown?: string;
  modoB_markdown?: string;
  modoA?: string;
  modoB?: string;
  questions?: Question[];
  flashcards?: Flashcard[];
}

export interface MindMapNode {
  label: string;
  detail: string;
  badge?: string;
}

export interface MindMapBranch {
  title: string;
  icon: string;
  color: 'teal' | 'indigo' | 'amber' | 'emerald' | 'rose' | 'violet';
  nodes: MindMapNode[];
}

export interface MindMapNumberCard {
  value: string;
  label: string;
  ref: string;
}

export interface MindMapTrap {
  wrong: string;
  right: string;
}

export interface LessonMindMap {
  centralTitle: string;
  centralSubtitle: string;
  mnemonic: string;
  deadlinesAndNumbers: MindMapNumberCard[];
  branches: MindMapBranch[];
  goldenTraps: MindMapTrap[];
}

export interface Lesson {
  id: string;
  num: number;
  slug?: string;
  subjectFolder?: string;
  mdPath?: string;
  mdLegacyPath?: string;
  cat: string;
  catName: string;
  weight: string;
  title: string;
  editalRef: string;
  auditBadge: string;
  sources: number[] | { value: number[] };
  questionsCount?: number;
  flashcardsCount?: number;
  mindMap?: LessonMindMap;
  blocks: LessonBlock[];
}

export interface Endemic {
  doenca: string;
  agente: string;
  vetor: string;
  hospedeiros: string;
  transmissao: string;
  clinica: string;
  diagnostico: string;
  controle: string;
}

export interface ScheduleWeek {
  week: string;
  focus: string;
  meta: string;
  lessons: string[];
}

export interface AuditRow {
  disc: string;
  item: string;
  source: string;
  pages: string;
  before: string;
  missing: string;
  action: string;
}

export interface AppData {
  cargos: Cargo[];
  sources: Source[];
  lessons: Lesson[];
  endemics: Endemic[];
  schedule: ScheduleWeek[];
  auditMatrix: AuditRow[];
}
