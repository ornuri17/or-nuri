import type { Metadata } from 'next';
import Link from 'next/link';
import { HERO_CONTENT, NAV_ITEMS, SITE_CONFIG } from '@/app/lib/constants';
import Button from '@/app/components/ui/Button';
import Footer from '@/app/components/layout/Footer';

export const metadata: Metadata = {
  title: `Page not found | ${SITE_CONFIG.name}`,
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

/**
 * Served by Netlify for any URL that doesn't exist (out/404.html).
 * The main Navbar scrolls within the homepage, so this page uses plain links back to it.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <header className="border-b border-[var(--color-border)]/80 bg-white/75 backdrop-blur-xl">
        <nav aria-label="Main" className="max-w-6xl mx-auto w-full px-6 sm:px-8 h-16 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-[17px] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)] hover:text-[var(--color-accent-secondary)] transition-colors whitespace-nowrap"
          >
            {SITE_CONFIG.name}
          </Link>
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={`/${item.href}`}
                  className="inline-flex items-center h-9 px-2.5 lg:px-3.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] rounded-full hover:bg-[var(--color-bg-tertiary)]/70 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main
        id="main"
        className="hero-backdrop relative isolate overflow-hidden flex-1 flex items-center"
      >
        <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
        <div className="max-w-6xl mx-auto w-full px-6 sm:px-8 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-accent-secondary)]">
            404
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.045em] leading-[1.05] text-[var(--color-text-primary)]">
            This page doesn&apos;t exist
          </h1>
          <p className="mt-5 text-lg sm:text-xl leading-relaxed text-[var(--color-text-secondary)] max-w-xl mx-auto">
            The link may be old or mistyped. Everything about {SITE_CONFIG.name} is on the homepage.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:flex gap-3 justify-center max-w-sm sm:max-w-none mx-auto">
            <Button variant="primary" size="lg" href="/">
              Back to home
            </Button>
            <Button variant="outline" size="lg" href="/#contact">
              {HERO_CONTENT.cta.primary}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
