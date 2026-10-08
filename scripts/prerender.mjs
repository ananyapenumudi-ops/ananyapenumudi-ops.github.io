// Injects the server-rendered app into dist/index.html, then removes the temporary SSR bundle.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href);
const file = path.join(root, 'dist/index.html');
const html = readFileSync(file, 'utf8');
if (!html.includes('<div id="root"></div>')) throw new Error('root placeholder not found in dist/index.html');
writeFileSync(file, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`));
rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log('prerendered dist/index.html');
