import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import type { AppData, Lesson } from '../src/types';
import { normalizeLesson } from '../src/utils/normalizeData';
import { withDeepening } from '../src/data/deepening';

const ROOT = process.cwd();
const APP_DATA_PATH = path.join(ROOT, 'data/app_data.json');
const PUBLIC_APP_DATA_PATH = path.join(ROOT, 'public/data/app_data.json');
const AULAS_JSON_PATH = path.join(ROOT, 'data/aulas.json');
const MATERIAS_JSON_PATH = path.join(ROOT, 'data/materias.json');
const DATA_LESSONS_DIR = path.join(ROOT, 'data/lessons');
const PUBLIC_LESSONS_DIR = path.join(ROOT, 'public/data/lessons');
const DATA_MANIFEST_PATH = path.join(ROOT, 'data/manifest.json');
const PUBLIC_MANIFEST_PATH = path.join(ROOT, 'public/data/manifest.json');
const SCRIPTS_DIR = path.join(ROOT, 'scripts');

function sha256(input: string): string {
  return crypto.createHash('sha256').update(input, 'utf8').digest('hex');
}

export interface LessonIntegrityRecord {
  id: string;
  num: number;
  cat: string;
  title: string;
  blocksCount: number;
  enrichedBlocksCount: number;
  questionsCount: number;
  enrichedQuestionsCount: number;
  flashcardsCount: number;
  hasMindMap: boolean;
  contentHash: string;
}

function countLessonQuestions(lesson: Lesson): number {
  return (lesson.blocks || []).reduce((acc, b) => acc + (b.questions?.length || 0), 0);
}

function countLessonFlashcards(lesson: Lesson): number {
  return (lesson.blocks || []).reduce((acc, b) => acc + (b.flashcards?.length || 0), 0);
}

function computeLessonIntegrity(rawLesson: Lesson, index: number): LessonIntegrityRecord {
  const normalizedBase = normalizeLesson(rawLesson, index);
  const enriched = withDeepening(normalizedBase);
  const canonical = JSON.stringify({
    id: rawLesson.id,
    num: rawLesson.num,
    cat: rawLesson.cat,
    catName: rawLesson.catName,
    weight: rawLesson.weight,
    title: rawLesson.title,
    editalRef: rawLesson.editalRef,
    blocks: rawLesson.blocks,
    mindMap: rawLesson.mindMap,
  });
  return {
    id: normalizedBase.id,
    num: normalizedBase.num,
    cat: normalizedBase.cat,
    title: normalizedBase.title,
    blocksCount: normalizedBase.blocks.length,
    enrichedBlocksCount: enriched.blocks.length,
    questionsCount: countLessonQuestions(normalizedBase),
    enrichedQuestionsCount: countLessonQuestions(enriched),
    flashcardsCount: countLessonFlashcards(enriched),
    hasMindMap: Boolean(enriched.mindMap),
    contentHash: sha256(canonical),
  };
}

function main() {
  console.log('=== 1. LEITURA E SNAPSHOT CRIPTOGRÁFICO DE INTEGRIDADE (49 AULAS) ===');
  const rawJson = fs.readFileSync(APP_DATA_PATH, 'utf8');
  const appData: AppData = JSON.parse(rawJson);

  const baselineRecords = appData.lessons.map((l, i) => computeLessonIntegrity(l, i));
  const totalBlocks = baselineRecords.reduce((acc, r) => acc + r.blocksCount, 0);
  const totalEnrichedBlocks = baselineRecords.reduce((acc, r) => acc + r.enrichedBlocksCount, 0);
  const totalQuestions = baselineRecords.reduce((acc, r) => acc + r.questionsCount, 0);
  const totalEnrichedQuestions = baselineRecords.reduce((acc, r) => acc + r.enrichedQuestionsCount, 0);
  const totalFlashcards = baselineRecords.reduce((acc, r) => acc + r.flashcardsCount, 0);

  console.log(`Aulas verificadas: ${baselineRecords.length}`);
  console.log(
    `Blocos: ${totalBlocks} base (${totalEnrichedBlocks} c/ aprofundamento) | Questões: ${totalQuestions} base (${totalEnrichedQuestions} c/ aprofundamento) | Flashcards: ${totalFlashcards}`
  );
  console.log(`Endemias: ${appData.endemics.length} | Fontes: ${appData.sources.length}`);

  // 2. Clean up provably obsolete files in scripts/
  console.log('\n=== 2. LIMPEZA SEGURA DE ARQUIVOS OBSOLETOS E REDUNDANTES ===');
  const scriptFiles = fs.readdirSync(SCRIPTS_DIR);
  let removedCount = 0;
  let removedBytes = 0;

  for (const file of scriptFiles) {
    const fullPath = path.join(SCRIPTS_DIR, file);
    const stat = fs.statSync(fullPath);
    if (!stat.isFile()) continue;

    if (
      (file.startsWith('backup_before_recategorize_') && file.endsWith('.json')) ||
      (file.startsWith('recategorize_') && file.endsWith('.mjs')) ||
      file === 'update_6_syllabus_blocks.mjs' ||
      file.endsWith('.ps1') ||
      file === 'test_chrome.bat'
    ) {
      fs.unlinkSync(fullPath);
      removedCount++;
      removedBytes += stat.size;
    }
  }
  console.log(
    `Arquivos obsoletos removidos nesta execução: ${removedCount} (${(removedBytes / (1024 * 1024)).toFixed(2)} MB)`
  );

  // 3. Modularize 49 lessons into data/lessons/<id>.json and public/data/lessons/<id>.json
  console.log('\n=== 3. MODULARIZAÇÃO DOS DADOS POR AULA (data/lessons/<id>.json) ===');
  fs.mkdirSync(DATA_LESSONS_DIR, { recursive: true });
  fs.mkdirSync(PUBLIC_LESSONS_DIR, { recursive: true });

  for (const lesson of appData.lessons) {
    const lessonJson = JSON.stringify(lesson, null, 2);
    fs.writeFileSync(path.join(DATA_LESSONS_DIR, `${lesson.id}.json`), lessonJson, 'utf8');
    fs.writeFileSync(path.join(PUBLIC_LESSONS_DIR, `${lesson.id}.json`), lessonJson, 'utf8');
  }
  console.log(`49 arquivos JSON modulares gerados em data/lessons/ e public/data/lessons/.`);

  // 4. Generate lightweight index in data/aulas.json and data/manifest.json
  console.log('\n=== 4. ATUALIZAÇÃO DE data/aulas.json, data/materias.json E data/manifest.json ===');
  const lessonIndex = appData.lessons.map((lesson, idx) => {
    const rec = baselineRecords[idx];
    return {
      id: lesson.id,
      num: lesson.num,
      cat: lesson.cat,
      catName: lesson.catName,
      weight: lesson.weight,
      title: lesson.title,
      editalRef: lesson.editalRef,
      blocksCount: rec.blocksCount,
      enrichedBlocksCount: rec.enrichedBlocksCount,
      questionsCount: rec.questionsCount,
      enrichedQuestionsCount: rec.enrichedQuestionsCount,
      flashcardsCount: rec.flashcardsCount,
      hasMindMap: rec.hasMindMap,
      contentHash: rec.contentHash,
    };
  });

  fs.writeFileSync(AULAS_JSON_PATH, JSON.stringify(lessonIndex, null, 2), 'utf8');
  const aulasNewSize = fs.statSync(AULAS_JSON_PATH).size;
  console.log(`data/aulas.json atualizado (${(aulasNewSize / 1024).toFixed(1)} KB — índice leve das 49 aulas).`);

  // Update data/materias.json with accurate 49-lesson counts
  const catMeta: Record<string, { id: string; codigo: string; nome: string; peso: string; cor: string }> = {
    esp: { id: 'esp', codigo: 'ESP', nome: 'Conhecimentos Específicos (ACE)', peso: 'Peso 2,0 (30 pts)', cor: '#0d9488' },
    leg: { id: 'leg', codigo: 'LEG', nome: 'Legislação Municipal, SUS e Constitucional', peso: 'Peso 2,0 (20 pts)', cor: '#d97706' },
    por: { id: 'por', codigo: 'POR', nome: 'Língua Portuguesa', peso: 'Peso 2,0 (20 pts)', cor: '#4f46e5' },
    rlm: { id: 'rlm', codigo: 'RLM', nome: 'Raciocínio Lógico-Matemático', peso: 'Peso 2,0 (20 pts)', cor: '#7c3aed' },
    atu: { id: 'atu', codigo: 'ATU', nome: 'Conhecimentos Gerais, História e Geografia de RO', peso: 'Peso 2,0 (10 pts)', cor: '#059669' },
  };

  const materiasUpdated = ['esp', 'leg', 'por', 'rlm', 'atu'].map((cat) => {
    const catRecs = baselineRecords.filter((r) => r.cat === cat);
    return {
      ...catMeta[cat],
      totalAulas: catRecs.length,
      totalBlocosBase: catRecs.reduce((acc, r) => acc + r.blocksCount, 0),
      totalBlocosComAprofundamento: catRecs.reduce((acc, r) => acc + r.enrichedBlocksCount, 0),
      totalQuestoesBase: catRecs.reduce((acc, r) => acc + r.questionsCount, 0),
      totalQuestoesComAprofundamento: catRecs.reduce((acc, r) => acc + r.enrichedQuestionsCount, 0),
      totalFlashcards: catRecs.reduce((acc, r) => acc + r.flashcardsCount, 0),
      aulasIds: catRecs.map((r) => r.id),
    };
  });

  fs.writeFileSync(MATERIAS_JSON_PATH, JSON.stringify(materiasUpdated, null, 2), 'utf8');
  console.log('data/materias.json atualizado com a distribuição exata das 49 aulas.');

  // Generate data/manifest.json and public/data/manifest.json
  const manifest = {
    cargos: appData.cargos,
    materias: materiasUpdated,
    lessonsIndex: lessonIndex,
    totals: {
      lessons: baselineRecords.length,
      blocksBase: totalBlocks,
      blocksWithDeepening: totalEnrichedBlocks,
      questionsBase: totalQuestions,
      questionsWithDeepening: totalEnrichedQuestions,
      flashcards: totalFlashcards,
      sources: appData.sources.length,
      endemics: appData.endemics.length,
    },
  };
  const manifestJson = JSON.stringify(manifest, null, 2);
  fs.writeFileSync(DATA_MANIFEST_PATH, manifestJson, 'utf8');
  fs.writeFileSync(PUBLIC_MANIFEST_PATH, manifestJson, 'utf8');

  // 5. Verify 100% integrity of modular lessons vs canonical app_data.json
  console.log('\n=== 5. VERIFICAÇÃO PÓS-MODULARIZAÇÃO DE INTEGRIDADE (SHA-256) ===');
  const postAppData: AppData = JSON.parse(fs.readFileSync(APP_DATA_PATH, 'utf8'));
  const postPublicAppData: AppData = JSON.parse(fs.readFileSync(PUBLIC_APP_DATA_PATH, 'utf8'));

  if (postAppData.lessons.length !== 49 || postPublicAppData.lessons.length !== 49) {
    throw new Error('Contagem de aulas divergente após refatoração!');
  }

  for (let i = 0; i < baselineRecords.length; i++) {
    const base = baselineRecords[i];
    const postMain = computeLessonIntegrity(postAppData.lessons[i], i);
    const modularLesson: Lesson = JSON.parse(
      fs.readFileSync(path.join(DATA_LESSONS_DIR, `${base.id}.json`), 'utf8')
    );
    const postModular = computeLessonIntegrity(modularLesson, i);

    if (base.contentHash !== postMain.contentHash || base.contentHash !== postModular.contentHash) {
      throw new Error(`Divergência de hash SHA-256 na aula ${base.id}!`);
    }
  }

  console.log('SUCESSO: 49/49 aulas verificadas com hash SHA-256 100% idêntico nos arquivos canônicos e modulares!');
}

main();
