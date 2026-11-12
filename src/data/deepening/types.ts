import type { QuestionDifficulty } from '../../types';

export interface DeepeningReference { title: string; url: string; section: string }
export interface DeepeningEntry {
  id: string;
  title: string;
  theory: string;
  summary: string;
  questions: {
    q: string;
    options: string[];
    ans: number;
    comment: string;
    difficulty?: QuestionDifficulty;
    questionType?: string;
    revision?: string;
  }[];
  flashcards: [string, string][];
  references: DeepeningReference[];
}
