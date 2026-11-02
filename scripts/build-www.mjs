// Copies the web app (served from the repo root on GitHub Pages) into www/ for the native iOS build.
import { cpSync, mkdirSync, rmSync } from 'node:fs';
rmSync('www', { recursive: true, force: true });
mkdirSync('www');
for (const f of ['index.html', 'manifest.webmanifest', 'icons']) cpSync(f, `www/${f}`, { recursive: true });
console.log('www/ ready');
