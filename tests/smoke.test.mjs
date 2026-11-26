import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(ROOT, 'out');

function outFile(...segments) {
  return join(OUT_DIR, ...segments);
}

function requireBuild() {
  if (!existsSync(OUT_DIR)) {
    assert.fail('out/ not found. Run `npm run build` before `npm test`.');
  }
}

function listHtmlFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...listHtmlFiles(full));
    } else if (entry.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

/** Resolve an internal URL path (trailing-slash style) to a file in out/. */
function resolvesInOut(urlPath) {
  const clean = decodeURIComponent(urlPath.split(/[?#]/)[0]);
  if (clean.endsWith('/')) {
    return existsSync(join(OUT_DIR, clean, 'index.html'));
  }
  if (existsSync(join(OUT_DIR, clean))) {
    return true;
  }
  return existsSync(join(OUT_DIR, clean, 'index.html'));
}

test('build output exists', () => {
  requireBuild();
  assert.ok(existsSync(outFile('index.html')), 'out/index.html is missing');
});

test('homepage has a single H1', () => {
  requireBuild();
  const html = readFileSync(outFile('index.html'), 'utf8');
  const h1s = html.match(/<h1[\s>]/g) ?? [];
  assert.equal(h1s.length, 1, `expected exactly one <h1>, found ${h1s.length}`);
});

test('homepage contains valid JSON-LD structured data', () => {
  requireBuild();
  const html = readFileSync(outFile('index.html'), 'utf8');
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(match, 'no JSON-LD script tag found on the homepage');
  const data = JSON.parse(match[1]);
  assert.ok(data['@context'], 'JSON-LD is missing @context');
});

test('llms.txt and sitemap exist in the build output', () => {
  requireBuild();
  for (const file of ['llms.txt', 'llms-full.txt', 'sitemap.xml']) {
    assert.ok(existsSync(outFile(file)), `out/${file} is missing`);
    assert.ok(statSync(outFile(file)).size > 0, `out/${file} is empty`);
  }
});

test('key agent-facing files are published', () => {
  requireBuild();
  for (const file of [
    'robots.txt',
    'auth.md',
    outFile('.well-known', 'agent-card.json'),
    outFile('.well-known', 'jwks.json'),
    outFile('for-bots', 'index.html'),
    '404.html',
  ]) {
    const path = file.startsWith(OUT_DIR) ? file : outFile(file);
    assert.ok(existsSync(path), `${path} is missing from the build output`);
  }
});

test('no broken internal links in built pages', () => {
  requireBuild();
  const htmlFiles = listHtmlFiles(OUT_DIR);
  assert.ok(htmlFiles.length > 0, 'no HTML files found in out/');

  const broken = [];
  const linkPattern = /(?:href|src)="(\/[^"#]*)"/g;
  for (const file of htmlFiles) {
    const html = readFileSync(file, 'utf8');
    for (const match of html.matchAll(linkPattern)) {
      const urlPath = match[1];
      if (urlPath.startsWith('//')) continue; // protocol-relative external URL
      if (!resolvesInOut(urlPath)) {
        broken.push(`${file.replace(OUT_DIR, 'out')}: ${urlPath}`);
      }
    }
  }
  assert.deepEqual(broken, [], `broken internal links found:\n${broken.join('\n')}`);
});
