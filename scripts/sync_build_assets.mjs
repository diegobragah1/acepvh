import fs from 'node:fs';
import path from 'node:path';

const distAssetsDir = path.resolve('dist/assets');
const distIndexHtml = path.resolve('dist/index.html');
const targets = [path.resolve('assets'), path.resolve('public/assets')];

if (!fs.existsSync(distAssetsDir)) {
  console.error('Diretório dist/assets não encontrado. Execute vite build antes.');
  process.exit(1);
}

const filesToCopy = fs
  .readdirSync(distAssetsDir, { withFileTypes: true })
  .filter((entry) => entry.isFile() && !entry.name.endsWith('.map'))
  .map((entry) => entry.name);

for (const targetDir of targets) {
  fs.mkdirSync(targetDir, { recursive: true });
  for (const file of filesToCopy) {
    fs.copyFileSync(
      path.join(distAssetsDir, file),
      path.join(targetDir, file)
    );
  }
}

console.log(
  `Sincronizados ${filesToCopy.length} artefatos de build (${filesToCopy.join(', ')}) em assets/ e public/assets/.`
);

// Fallback 404 para GitHub Pages (SPA)
if (fs.existsSync(distIndexHtml)) {
  const fallbackTargets = [
    path.resolve('dist/404.html'),
    path.resolve('public/404.html'),
    path.resolve('404.html'),
  ];

  for (const targetFile of fallbackTargets) {
    const parentDir = path.dirname(targetFile);
    if (!fs.existsSync(parentDir)) {
      fs.mkdirSync(parentDir, { recursive: true });
    }
    fs.copyFileSync(distIndexHtml, targetFile);
  }
  console.log('Sincronizado dist/index.html para dist/404.html, public/404.html e 404.html.');
} else {
  console.warn('Aviso: dist/index.html não encontrado para sincronizar 404.html.');
}

// Garantir preservação de .nojekyll no dist
const publicNoJekyll = path.resolve('public/.nojekyll');
const distNoJekyll = path.resolve('dist/.nojekyll');
if (!fs.existsSync(distNoJekyll)) {
  if (fs.existsSync(publicNoJekyll)) {
    fs.copyFileSync(publicNoJekyll, distNoJekyll);
  } else {
    fs.writeFileSync(distNoJekyll, '');
  }
  console.log('Garantido dist/.nojekyll.');
}
