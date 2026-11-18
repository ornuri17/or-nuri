import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/app/lib/constants';
import { CHAPTERS } from '@/app/lib/content';

export const metadata: Metadata = {
  title: `Page not found | ${SITE_CONFIG.name}`,
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

/** Served by Netlify for any URL that doesn't exist (out/404.html). */
export default function NotFound() {
  return (
    <main className="title-page ground-paper">
      <div className="wrap title-page__grid">
        <h1 className="title">
          <span className="title__line">Not</span>
          <span className="title__line title__line--indent">here.</span>
        </h1>
        <div className="title-page__copy">
          <p className="deck">This page doesn&apos;t exist, or it moved.</p>
          <p className="standfirst">
            Start from <Link href="/">the profile</Link>, or jump to a chapter.
          </p>
        </div>
        <nav className="title-page__toc" aria-label="Chapters">
          <ol className="toc">
            {CHAPTERS.map((c) => (
              <li key={c.id}>
                <a href={`/#${c.id}`}>
                  <span className="toc__num">{c.num}</span>
                  <span className="toc__title">{c.title}</span>
                  <span className="toc__dek">{c.dek}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </main>
  );
}
