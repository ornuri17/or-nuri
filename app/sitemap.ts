import { MetadataRoute } from 'next';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { SITE_CONFIG } from './lib/constants';

export const dynamic = 'force-static';

const APP_DIR = path.join(process.cwd(), 'app');

/** Per-route overrides; any page not listed here gets the defaults. */
const ROUTE_OPTIONS: Record<string, Partial<MetadataRoute.Sitemap[number]>> = {
  '/': { changeFrequency: 'monthly', priority: 1 },
  '/for-bots/': { changeFrequency: 'monthly', priority: 0.9 },
};

/**
 * Walk app/ and return the URL path of every public page.tsx.
 * Skips private folders (_x), dynamic segments ([x]) and API routes; drops route groups ((x)).
 */
function findPages(dir: string, segments: string[] = []): { route: string; file: string }[] {
  const pages: { route: string; file: string }[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const name = entry.name;
      if (name.startsWith('_') || name.startsWith('[') || name.startsWith('@') || name === 'api') continue;
      const isGroup = name.startsWith('(') && name.endsWith(')');
      pages.push(...findPages(full, isGroup ? segments : [...segments, name]));
    } else if (/^page\.(tsx|ts|jsx|js|mdx)$/.test(entry.name)) {
      // trailingSlash: true in next.config.ts, so every URL ends with "/"
      pages.push({ route: segments.length ? `/${segments.join('/')}/` : '/', file: full });
    }
  }
  return pages;
}

/** Last commit date of the page's folder, falling back to build time. */
function lastModified(file: string): Date {
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${path.dirname(file)}"`, {
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim();
    if (iso) return new Date(iso);
  } catch {
    // git not available (e.g. tarball deploy)
  }
  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  return findPages(APP_DIR)
    .sort((a, b) => a.route.localeCompare(b.route))
    .map(({ route, file }) => ({
      url: `${SITE_CONFIG.url}${route}`,
      lastModified: lastModified(file),
      changeFrequency: 'monthly',
      priority: 0.7,
      ...ROUTE_OPTIONS[route],
    }));
}
