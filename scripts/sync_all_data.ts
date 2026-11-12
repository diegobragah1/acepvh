import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { normalizeAppData } from '../src/utils/normalizeData';

const ROOT = process.cwd();
const APP_JSON_PATH = path.join(ROOT, 'data', 'app_data.json');
const PUBLIC_APP_JSON_PATH = path.join(ROOT, 'public', 'data', 'app_data.json');
const APP_JS_PATH = path.join(ROOT, 'data', 'app_data.js');
const PUBLIC_APP_JS_PATH = path.join(ROOT, 'public', 'data', 'app_data.js');
const AULAS_49_DIR = path.join(ROOT, 'content', 'aulas-49');

interface RawBlock {
  title?: string;
  modoA?: string;
  modoA_markdown?: string;
  modoB?: string;
  modoB_markdown?: string;
  questions?: Array<{
    stem?: string;
    options?: string[];
    answer?: number;
    explanation?: string;
    source?: string;
    difficulty?: string;
    revision?: string;
  }>;
  flashcards?: Array<{
    front?: string;
    back?: string;
  }>;
}

interface RawLesson {
  id: string;
  num?: number;
  slug?: string;
  subjectFolder?: string;
  mdPath?: string;
  mdLegacyPath?: string;
  cat?: string;
  catName?: string;
  weight?: string;
  title?: string;
  editalRef?: string;
  auditBadge?: string;
  sources?: string[];
  questionsCount?: number;
  flashcardsCount?: number;
  mindMap?: unknown;
  blocks?: RawBlock[];
}

function escapeYaml(value: unknown): string {
  return JSON.stringify(String(value ?? ''));
}

function htmlToPlainMarkdown(raw: string): string {
  return String(raw || '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<\/(li|tr|h[1-6]|div)>/gi, '\n')
    .replace(/<li[^>]*>/gi, '- ')
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function buildLessonMarkdown(lesson: RawLesson): string {
  const lines: string[] = [
    '---',
    `id: ${escapeYaml(lesson.id)}`,
    `num: ${lesson.num ?? 0}`,
    `cat: ${escapeYaml(lesson.cat || '')}`,
    `catName: ${escapeYaml(lesson.catName || '')}`,
    `title: ${escapeYaml(lesson.title || '')}`,
    `editalRef: ${escapeYaml(lesson.editalRef || '')}`,
    `questionsCount: ${lesson.questionsCount ?? 0}`,
    `flashcardsCount: ${lesson.flashcardsCount ?? 0}`,
    '---',
    '',
    `# ${lesson.title || lesson.id}`,
    '',
    `**Disciplina:** ${lesson.catName || lesson.cat || ''}  `,
    `**Edital:** ${lesson.editalRef || 'Conteúdo programático oficial'}`,
    '',
  ];

  if (Array.isArray(lesson.sources) && lesson.sources.length > 0) {
    lines.push('## Fontes de Referência', '');
    for (const src of lesson.sources) {
      lines.push(`- ${src}`);
    }
    lines.push('');
  }

  for (const [bIdx, block] of (lesson.blocks || []).entries()) {
    lines.push(`## Bloco ${bIdx + 1}: ${block.title || `Bloco ${bIdx + 1}`}`, '');
    const theoryMd = (block.modoA_markdown || '').trim() || htmlToPlainMarkdown(block.modoA || '');
    const summaryMd = (block.modoB_markdown || '').trim() || htmlToPlainMarkdown(block.modoB || '');

    if (theoryMd) {
      lines.push('### Teoria Base', '', theoryMd, '');
    }
    if (summaryMd) {
      lines.push('### Resumo Estratégico', '', summaryMd, '');
    }

    const questions = block.questions || [];
    if (questions.length > 0) {
      lines.push(`### Questões (${questions.length})`, '');
      questions.forEach((q, qIdx) => {
        const diff = q.difficulty ? ` [${q.difficulty}]` : '';
        lines.push(`${qIdx + 1}. **${String(q.stem || '').replace(/\n+/g, ' ')}**${diff}`);
        (q.options || []).forEach((opt, oIdx) => {
          const letter = ['A', 'B', 'C', 'D'][oIdx] || String(oIdx + 1);
          lines.push(`   - ${letter}) ${String(opt || '').replace(/\n+/g, ' ')}`);
        });
        const ansLetter = ['A', 'B', 'C', 'D'][Number(q.answer ?? 0)] || 'A';
        lines.push(`   - **Gabarito:** ${ansLetter}`);
        if (q.explanation) {
          lines.push(`   - **Comentário:** ${String(q.explanation).replace(/\n+/g, ' ')}`);
        }
        lines.push('');
      });
    }

    const flashcards = block.flashcards || [];
    if (flashcards.length > 0) {
      lines.push(`### Flashcards (${flashcards.length})`, '');
      flashcards.forEach((fc, fIdx) => {
        lines.push(`- **Card ${fIdx + 1}:** ${String(fc.front || '').replace(/\n+/g, ' ')} -> ${String(fc.back || '').replace(/\n+/g, ' ')}`);
      });
      lines.push('');
    }
  }

  return `${lines.join('\n').trim()}\n`;
}

function runTsxScript(relativeScript: string): void {
  execFileSync(process.execPath, ['--import', 'tsx', path.join(ROOT, relativeScript)], {
    stdio: 'inherit',
  });
}

function writeAppCopies(appData: Record<string, unknown>): void {
  const formattedJson = `${JSON.stringify(appData, null, 2)}\n`;
  const compactJs = `window.APP_DATA = ${JSON.stringify(appData)};\n`;

  fs.mkdirSync(path.dirname(PUBLIC_APP_JSON_PATH), { recursive: true });
  fs.writeFileSync(APP_JSON_PATH, formattedJson, 'utf8');
  fs.writeFileSync(PUBLIC_APP_JSON_PATH, formattedJson, 'utf8');
  fs.writeFileSync(APP_JS_PATH, compactJs, 'utf8');
  fs.writeFileSync(PUBLIC_APP_JS_PATH, compactJs, 'utf8');
}

function syncDatasetClasses(lessons: RawLesson[]): void {
  const classes = new Set<string>();
  for (const lesson of lessons) {
    for (const block of lesson.blocks || []) {
      for (const mode of ['modoA', 'modoB'] as const) {
        for (const m of (block[mode] || '').matchAll(/class="([^"]+)"/g)) {
          for (const cls of m[1].split(/\s+/)) {
            if (cls.trim()) classes.add(cls.trim());
          }
        }
      }
    }
  }
  const sorted = Array.from(classes).sort().join(' ');
  const targetPath = path.join(ROOT, 'src', 'data', 'datasetClasses.ts');
  const content = `// Auto-generated list of Tailwind CSS classes used in data/app_data.json lesson HTML\nexport const DATASET_TAILWIND_CLASSES = "${sorted}";\n`;
  fs.writeFileSync(targetPath, content, 'utf8');
}

function main(): void {
  const raw = JSON.parse(fs.readFileSync(APP_JSON_PATH, 'utf8')) as {
    lessons: RawLesson[];
    [key: string]: unknown;
  };

  fs.mkdirSync(AULAS_49_DIR, { recursive: true });

  raw.lessons.forEach((lesson, index) => {
    lesson.num = index + 1;
    const blocks = Array.isArray(lesson.blocks) ? lesson.blocks : [];
    lesson.questionsCount = blocks.reduce((acc, b) => acc + (b.questions?.length || 0), 0);
    lesson.flashcardsCount = blocks.reduce((acc, b) => acc + (b.flashcards?.length || 0), 0);

    const existingMdOk =
      Boolean(lesson.mdPath) &&
      fs.existsSync(path.resolve(ROOT, String(lesson.mdPath).replace(/^\.\//, '')));
    if (!existingMdOk) {
      lesson.mdPath = `./content/aulas-49/${lesson.id}.md`;
    }

    if (
      lesson.mdLegacyPath &&
      !fs.existsSync(path.resolve(ROOT, String(lesson.mdLegacyPath).replace(/^\.\//, '')))
    ) {
      delete lesson.mdLegacyPath;
    }

    const mdFilePath = path.join(AULAS_49_DIR, `${lesson.id}.md`);
    fs.writeFileSync(mdFilePath, buildLessonMarkdown(lesson), 'utf8');
  });

  writeAppCopies(raw);

  // Split lessons and regenerate data/aulas.json, data/materias.json, data/manifest.json, public/data/*
  runTsxScript('scripts/refactor_and_split_data.ts');

  // Re-attach updated aulasIndex & materias back into app_data copies
  const aulasJson = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'aulas.json'), 'utf8'));
  const materiasJson = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'materias.json'), 'utf8'));
  raw.aulasIndex = aulasJson;
  raw.materias = materiasJson;
  writeAppCopies(raw);

  // Validate normalized output does not crash
  const normalized = normalizeAppData(raw);
  if (!normalized || normalized.lessons.length !== 49) {
    throw new Error(`Falha na normalização após sincronização: esperadas 49 aulas, obtidas ${normalized?.lessons.length ?? 0}`);
  }

  // Export deepening Markdown catalog if script exists
  if (fs.existsSync(path.join(ROOT, 'scripts', 'export_deepening.ts'))) {
    runTsxScript('scripts/export_deepening.ts');
  }

  syncDatasetClasses(raw.lessons);

  console.log(`Sincronização completa concluída: ${raw.lessons.length} aulas numeradas de 1 a 49, 49 arquivos em content/aulas-49/, public/data e app_data.js atualizados.`);
}

main();
