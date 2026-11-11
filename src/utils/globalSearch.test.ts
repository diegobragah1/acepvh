import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { normalizeAppData } from './normalizeData';
import { searchGlobalContent, stripHtmlToText, buildContextualSnippet } from './globalSearch';

describe('globalSearch engine across lessons, fichas, and questions', () => {
  const raw = JSON.parse(fs.readFileSync('data/app_data.json', 'utf8'));
  const appData = normalizeAppData(raw);

  it('strips HTML tags and builds contextual snippets accurately', () => {
    const plain = stripHtmlToText('<p>Art. 3º São símbolos do <strong>Município</strong> a Bandeira, o Hino e o Brasão.</p>');
    assert.equal(plain, 'Art. 3º São símbolos do Município a Bandeira, o Hino e o Brasão.');
    const snippet = buildContextualSnippet(plain, 'brasao', 40);
    assert.ok(snippet.toLowerCase().includes('brasão'));
  });

  it('finds keyword matches across Aulas, Fichas de Endemias, and Questões (accent-insensitive)', () => {
    const res = searchGlobalContent(appData, 'Aedes aegypti', 'ALL');
    assert.ok(res.counts.total > 0, 'Should find matches for Aedes aegypti');
    assert.ok(res.counts.aulas > 0, 'Should find matches in Aulas');
    assert.ok(res.counts.fichas > 0, 'Should find matches in Fichas de Endemias');
    assert.ok(res.counts.questoes > 0, 'Should find matches in Questões');

    const onlyFichas = searchGlobalContent(appData, 'Trypanosoma cruzi', 'FICHAS');
    assert.ok(onlyFichas.results.length > 0);
    assert.ok(onlyFichas.results.every((r) => r.type === 'ficha'));
    assert.ok(onlyFichas.results.some((r) => /Chagas/i.test(r.title)));

    const lomSearch = searchGlobalContent(appData, 'boto', 'AULAS');
    assert.ok(lomSearch.results.some((r) => r.lessonId === 'leg_1'));
  });
});
