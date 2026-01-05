// scripts/check-pdf.js
// Script de vérification automatique du PDF de rapport de stage

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Chemins à vérifier
const projectRoot = join(__dirname, '..');
const publicPdfPath = join(projectRoot, 'public', 'docs', 'rapport_stage.pdf');
const distPdfPath = join(projectRoot, 'dist', 'docs', 'rapport_stage.pdf');

console.log('🔍 Vérification du PDF de rapport de stage...\n');

// Vérification du PDF dans public/
console.log('1️⃣ Vérification dans public/docs/');
if (existsSync(publicPdfPath)) {
  console.log('   ✅ Trouvé : public/docs/rapport_stage.pdf');
} else {
  console.error('   ❌ ERREUR : public/docs/rapport_stage.pdf n\'existe pas !');
  console.error('   Action requise : Placez le PDF dans public/docs/rapport_stage.pdf');
  process.exit(1);
}

// Vérification du PDF dans dist/ (après build)
console.log('\n2️⃣ Vérification dans dist/docs/ (build)');
if (existsSync(distPdfPath)) {
  console.log('   ✅ Trouvé : dist/docs/rapport_stage.pdf');
} else {
  console.log('   ⚠️  Non trouvé : dist/docs/rapport_stage.pdf');
  console.log('   Note : Exécutez "npm run build" pour générer le dossier dist');
}

// Vérification de l'URL en développement (optionnel, nécessite un serveur actif)
console.log('\n3️⃣ Test de l\'URL en développement');
console.log('   Pour tester manuellement :');
console.log('   - Lancez : npm run dev');
console.log('   - Ouvrez : http://localhost:5173/docs/rapport_stage.pdf');
console.log('   - Vérifiez : Le PDF doit s\'afficher sans erreur 404');

console.log('\n✅ Vérifications terminées avec succès !');
console.log('📌 Chemins utilisés dans le code :');
console.log('   - En dev : ${import.meta.env.BASE_URL}docs/rapport_stage.pdf');
console.log('   - Résolu : /docs/rapport_stage.pdf (sans base path)');
console.log('   - Avec base path : /<base>/docs/rapport_stage.pdf');

process.exit(0);
