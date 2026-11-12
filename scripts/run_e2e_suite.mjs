#!/usr/bin/env node
/**
 * scripts/run_e2e_suite.mjs
 * Master E2E Test Suite Runner for ACE SEMUSA Porto Velho 2026.
 * Executes Tier 1..4 tests, outputs an executive coverage table, and enforces strict exit codes.
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { performance } from 'node:perf_hooks';

// Ensure WebSocket is available for CDP tests
if (typeof WebSocket === 'undefined') {
  const res = spawnSync(
    process.execPath,
    ['--experimental-websocket', ...process.argv.slice(1)],
    { stdio: 'inherit' }
  );
  process.exit(res.status ?? 1);
}

const ROOT = process.cwd();
const args = process.argv.slice(2);

// Tier configuration
const TIERS = [
  {
    id: 'T1',
    name: 'Feature Coverage (Category-Partition)',
    file: 'tests/e2e/tier1_feature_coverage.test.ts',
    desc: '49 aulas, 5 matérias, 14 endemias, 126 fontes (R1-R5)',
  },
  {
    id: 'T2',
    name: 'Boundary & Corner Cases (BVA)',
    file: 'tests/e2e/tier2_boundary_corner.test.ts',
    desc: '4 alternativas A-D, IDs estáveis, SHA-256, KaTeX, URLs',
  },
  {
    id: 'T3',
    name: 'Cross-Feature Combinations (Pairwise)',
    file: 'tests/e2e/tier3_cross_feature.test.ts',
    desc: 'withDeepening, pipeline sync:data, datasetClasses, SRS',
  },
  {
    id: 'T4',
    name: 'Real-World Scenarios (Workload Simulation)',
    file: 'tests/e2e/tier4_real_world_scenarios.test.ts',
    desc: 'Simulado Anexo III (50q peso 2) + Chrome CDP Desktop/Mobile',
  },
];

// CLI Filter flags: e.g. --tier 1 or --tier 1,2 or --skip-browser
let activeTiers = [...TIERS];
const tierArg = args.find((a) => a.startsWith('--tier=') || a === '-t');
if (tierArg) {
  const val = tierArg.startsWith('--tier=') ? tierArg.split('=')[1] : args[args.indexOf(tierArg) + 1];
  const requested = val.split(',').map((t) => `T${t.trim().replace(/^T/i, '')}`);
  activeTiers = TIERS.filter((t) => requested.includes(t.id));
}

console.log('='.repeat(80));
console.log('ACE SEMUSA PORTO VELHO 2026 — MASTER E2E TEST SUITE RUNNER');
console.log('='.repeat(80));
console.log(`Node.js: ${process.version} | CWD: ${ROOT}`);
console.log(`Executing ${activeTiers.length} of ${TIERS.length} Tiers\n`);

const results = [];
let overallSuccess = true;
const suiteStartTime = performance.now();

for (const tier of activeTiers) {
  const filePath = path.join(ROOT, tier.file);
  console.log(`>>> Running [${tier.id}] ${tier.name}...`);

  if (!fs.existsSync(filePath)) {
    console.error(`[ERROR] Test file not found: ${tier.file}`);
    results.push({
      tier: tier.id,
      name: tier.name,
      status: 'FAIL',
      duration: 0,
      tests: 0,
      pass: 0,
      fail: 1,
      error: 'File missing',
    });
    overallSuccess = false;
    continue;
  }

  const startTime = performance.now();
  const child = spawnSync(
    process.execPath,
    [
      '--experimental-websocket',
      '--import',
      'tsx',
      '--test',
      '--test-reporter=spec',
      tier.file,
    ],
    {
      cwd: ROOT,
      stdio: 'pipe',
      encoding: 'utf8',
    }
  );
  const duration = (performance.now() - startTime) / 1000;

  const stdout = child.stdout || '';
  const stderr = child.stderr || '';

  // Parse test summary from spec reporter output
  let tests = 0;
  let pass = 0;
  let fail = 0;

  const testsMatch = stdout.match(/tests\s+(\d+)/);
  const passMatch = stdout.match(/pass\s+(\d+)/);
  const failMatch = stdout.match(/fail\s+(\d+)/);

  if (testsMatch) tests = parseInt(testsMatch[1], 10);
  if (passMatch) pass = parseInt(passMatch[1], 10);
  if (failMatch) fail = parseInt(failMatch[1], 10);

  const passed = child.status === 0 && fail === 0;
  if (!passed) overallSuccess = false;

  results.push({
    tier: tier.id,
    name: tier.name,
    status: passed ? 'PASS' : 'FAIL',
    duration: duration.toFixed(2),
    tests: tests || (passed ? 1 : 0),
    pass: pass || (passed ? 1 : 0),
    fail: fail || (passed ? 0 : 1),
    stdout,
    stderr,
  });

  // Stream output with prefix
  console.log(stdout.trim());
  if (stderr.trim()) console.error(stderr.trim());
  console.log(`--- [${tier.id}] Finished in ${duration.toFixed(2)}s: ${passed ? 'OK' : 'FAILED'} ---\n`);
}

const totalDuration = ((performance.now() - suiteStartTime) / 1000).toFixed(2);

// Print Executive Summary Table
console.log('='.repeat(80));
console.log('E2E TEST SUITE EXECUTIVE SUMMARY');
console.log('='.repeat(80));
console.log(
  'Tier  Name                                      Tests  Pass  Fail  Time (s)  Status'
);
console.log('-'.repeat(80));

let sumTests = 0;
let sumPass = 0;
let sumFail = 0;

for (const r of results) {
  sumTests += r.tests;
  sumPass += r.pass;
  sumFail += r.fail;
  const padName = r.name.padEnd(40, ' ').slice(0, 40);
  const padTests = String(r.tests).padStart(5, ' ');
  const padPass = String(r.pass).padStart(5, ' ');
  const padFail = String(r.fail).padStart(5, ' ');
  const padTime = `${r.duration}s`.padStart(9, ' ');
  const statusStr = r.status === 'PASS' ? ' PASS ' : '*FAIL*';
  console.log(`${r.tier}    ${padName} ${padTests} ${padPass} ${padFail} ${padTime}   ${statusStr}`);
}

console.log('-'.repeat(80));
const totalPad = 'TOTAL'.padEnd(40, ' ');
console.log(
  `ALL   ${totalPad} ${String(sumTests).padStart(5, ' ')} ${String(sumPass).padStart(5, ' ')} ${String(sumFail).padStart(5, ' ')} ${`${totalDuration}s`.padStart(9, ' ')}   ${overallSuccess ? ' PASS ' : '*FAIL*'}`
);
console.log('='.repeat(80));

if (overallSuccess) {
  console.log(`\n[SUCCESS] All E2E test tiers passed with exit code 0!`);
  process.exit(0);
} else {
  console.error(`\n[FAILURE] One or more E2E test tiers failed. Exit code 1.`);
  process.exit(1);
}
