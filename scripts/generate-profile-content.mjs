#!/usr/bin/env node
/**
 * Generates the machine-readable profile outputs from the single source of
 * truth in app/lib/constants.ts:
 *
 *   - public/llms.txt                            (from LLMS_TXT)
 *   - netlify/edge-lib/profile-markdown.ts (from PROFILE_MARKDOWN)
 *
 * Runs automatically before every build via the "prebuild" script.
 *
 * Usage:
 *   node scripts/generate-profile-content.mjs          # write the outputs
 *   node scripts/generate-profile-content.mjs --check  # fail if outputs are stale
 */
import { createRequire } from 'node:module';
import { mkdtempSync, readFileSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const ts = require('typescript');

const CONSTANTS_PATH = 'app/lib/constants.ts';

function loadConstants() {
  const source = readFileSync(CONSTANTS_PATH, 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  });
  const dir = mkdtempSync(join(tmpdir(), 'or-nuri-constants-'));
  const modulePath = join(dir, 'constants.cjs');
  writeFileSync(modulePath, outputText);
  const mod = require(modulePath);
  rmSync(dir, { recursive: true, force: true });
  return mod;
}

/** Escape a string so it can be embedded in a TypeScript template literal. */
function toTsTemplateLiteral(value) {
  return (
    '`' +
    value
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\$\{/g, '\\${') +
    '`'
  );
}

const GENERATED_TS_HEADER = `// GENERATED FILE - do not edit directly.
// Source of truth: PROFILE_MARKDOWN in app/lib/constants.ts
// Regenerate with: yarn generate (runs automatically before every build)

`;

function main() {
  const checkOnly = process.argv.includes('--check');
  const { LLMS_TXT, PROFILE_MARKDOWN } = loadConstants();

  if (typeof LLMS_TXT !== 'string' || typeof PROFILE_MARKDOWN !== 'string') {
    console.error('LLMS_TXT and PROFILE_MARKDOWN must be exported strings from app/lib/constants.ts');
    process.exit(1);
  }

  const outputs = [
    { path: 'public/llms.txt', content: LLMS_TXT },
    {
      path: 'netlify/edge-lib/profile-markdown.ts',
      content:
        GENERATED_TS_HEADER +
        'export const PROFILE_MARKDOWN = ' +
        toTsTemplateLiteral(PROFILE_MARKDOWN) +
        ';\n',
    },
  ];

  let stale = false;
  for (const output of outputs) {
    if (checkOnly) {
      const current = existsSync(output.path) ? readFileSync(output.path, 'utf8') : null;
      if (current !== output.content) {
        console.error(`STALE: ${output.path} is out of sync with app/lib/constants.ts. Run: yarn generate`);
        stale = true;
      } else {
        console.log(`OK: ${output.path} is in sync`);
      }
    } else {
      writeFileSync(output.path, output.content);
      console.log(`Wrote ${output.path}`);
    }
  }

  if (stale) {
    process.exit(1);
  }
}

main();
