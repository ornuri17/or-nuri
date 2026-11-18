import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/app/lib/constants';

export const metadata: Metadata = {
  title: `Page not found | ${SITE_CONFIG.name}`,
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

/** Served by Netlify for any URL that doesn't exist (out/404.html). */
export default function NotFound() {
  return (
    <main className="notfound">
      <div>
        <h1>Nothing here.</h1>
        <p>This page doesn&apos;t exist, or it moved.</p>
        <Link href="/" className="btn btn--dark">
          Back to the homepage
        </Link>
      </div>
    </main>
  );
}
