import Link from 'next/link';
import Folio from '@/app/components/Folio';
import FixStage from '@/app/components/FixStage';
import { homeJsonLd } from '@/app/metadata';
import { SITE_CONFIG, MEDIA_COVERAGE, FAQ_CONTENT } from '@/app/lib/constants';
import { CHAPTERS, CAREER, RECEIPTS, PRINCIPLES, ADVISORY_FOCUS, CTA_LABEL } from '@/app/lib/content';

// Every chapter is rendered in place in the static HTML, readable by crawlers
// and AI agents that don't execute JS. Scripts only enhance.

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

function ChapterTitle({ num, children, id }: { num: string; children: React.ReactNode; id: string }) {
  return (
    <h2 id={id} className="chapter-title">
      <span className="chapter-num">{num}</span>
      {children}
    </h2>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />
      <a href="#short-version" className="skip-link">
        Skip to content
      </a>
      <Folio />

      <main id="main" className="page">
        {/* ── Title page ─────────────────────────────────────────── */}
        <header id="top" className="title-page ground-paper" data-ground="paper">
          <div className="wrap title-page__grid">
            <h1 className="title">
              <span className="title__line">Or</span>
              <span className="title__line title__line--indent">Nuri</span>
            </h1>
            <div className="title-page__copy">
              <p className="deck">
                I build AI agents that do real work, <em>and ship it to production.</em>
              </p>
              <p className="standfirst">
                AI &amp; Tech Leader at monday.com. Co-founder of adjusti.co, acquired by Teikametrics.
                Advisor to startups. <a href="#lets-talk">{CTA_LABEL}</a>
              </p>
            </div>
            <nav className="title-page__toc" aria-labelledby="toc-title">
              <p id="toc-title" className="toc__label">
                In this profile
              </p>
              <ol className="toc">
                {CHAPTERS.map((c) => (
                  <li key={c.id}>
                    <a href={`#${c.id}`}>
                      <span className="toc__num">{c.num}</span>
                      <span className="toc__title">{c.title}</span>
                      <span className="toc__dek">{c.dek}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </header>

        {/* ── I. The short version ──────────────────────────────── */}
        <section id="short-version" className="chapter ground-paper" data-ground="paper" aria-labelledby="short-version-title">
          <div className="wrap spread">
            <figure className="portrait" data-reveal>
              <picture>
                <source srcSet="/images/or-nuri-professional.webp" type="image/webp" />
                <img
                  src="/images/or-nuri-professional.jpg"
                  alt="Or Nuri, smiling, arms crossed, in a white t-shirt"
                  width={533}
                  height={800}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption>
                Or Nuri <span lang="he" dir="rtl">אור נורי</span>
              </figcaption>
            </figure>

            <div className="spread__title">
              <ChapterTitle num="I" id="short-version-title">
                The short version
              </ChapterTitle>
            </div>
            <div className="spread__text">
              <p className="lede" data-reveal>
                I lead strategic AI initiatives across R&amp;D at monday.com. Before that, I co-founded a
                company with no outside money, grew it to 2,000+ brands, and sold it.
              </p>
              <div className="prose" data-reveal>
                <p>
                  At monday.com my work is broad, high-impact projects that embed AI into how the company
                  builds and runs, to improve the product and the company&apos;s efficiency. One of them:
                  teams of autonomous AI agents that find accessibility issues in our product and carry
                  each fix all the way to production.
                </p>
                <p>
                  Before that I tech led the Collaborative Work Management group, about 20 developers in an
                  AI-first organization that puts AI directly into the product to do the work for customers.
                  Earlier, I co-founded adjusti.co, an ecommerce market intelligence platform acquired by
                  Teikametrics in 2020.
                </p>
                <p>
                  Today I also sit on advisory boards, helping startups bring AI into their products, make
                  architecture calls, and build strong engineering teams. My approach centres on clarity,
                  empathy and continuous learning.
                </p>
              </div>
              <dl className="credentials" data-reveal>
                <div>
                  <dt>MSc</dt>
                  <dd>Machine Learning &amp; Data Science, Reichman University</dd>
                </div>
                <div>
                  <dt>BSc</dt>
                  <dd>Computer Science, Reichman University</dd>
                </div>
                <div>
                  <dt>Alumnus</dt>
                  <dd>Zell Entrepreneurship Program</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ── II. Zero to millions ──────────────────────────────── */}
        <section id="scale" className="chapter ground-stock" data-ground="stock" aria-labelledby="scale-title">
          <div className="wrap">
            <div className="chapter-head">
              <ChapterTitle num="II" id="scale-title">
                Zero to millions
              </ChapterTitle>
              <p className="chapter-dek">
                Every stage of a company, in order: building from zero, growing, scaling, and running at
                the size where millions of people depend on it.
              </p>
            </div>

            <ol className="career">
              {CAREER.map((job) => (
                <li key={job.id} className="career__row" data-reveal>
                  <p className="career__years">{job.years}</p>
                  <p className="career__figure">
                    <span className="career__num">{job.figure}</span>
                    <span className="career__label">{job.figureLabel}</span>
                  </p>
                  <div className="career__text">
                    <h3 className="career__role">
                      {job.role}
                      <span className="career__company">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={job.logo} alt="" width={20} height={20} loading="lazy" decoding="async" />
                        <span className="career__company-name">
                          {job.company}
                          {'note' in job && job.note ? <span className="career__note">, {job.note}</span> : null}
                        </span>
                      </span>
                    </h3>
                    <p>{job.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Interleaf: authored silence before the peak ───────── */}
        <div className="interleaf ground-paper" data-ground="paper">
          <p className="wrap interleaf__line" data-reveal>
            Then the agents started doing the work.
          </p>
        </div>

        {/* ── III. The page fixes itself (peak) ─────────────────── */}
        <FixStage />

        {/* ── IV. Receipts ──────────────────────────────────────── */}
        <section id="receipts" className="chapter ground-paper" data-ground="paper" aria-labelledby="receipts-title">
          <div className="wrap">
            <div className="chapter-head">
              <ChapterTitle num="IV" id="receipts-title">
                Receipts
              </ChapterTitle>
              <p className="chapter-dek">
                Reliability and speed are features. These are the before and after numbers from products
                I tech led.
              </p>
            </div>
            <table className="ledger" data-reveal>
              <caption className="sr-only">Before and after results</caption>
              <thead>
                <tr>
                  <th scope="col">What</th>
                  <th scope="col">Before</th>
                  <th scope="col">After</th>
                  <th scope="col">How</th>
                </tr>
              </thead>
              <tbody>
                {RECEIPTS.map((r) => (
                  <tr key={r.what}>
                    <th scope="row">{r.what}</th>
                    <td className="ledger__before">{r.before || <span aria-label="not measured">·</span>}</td>
                    <td className="ledger__after">{r.after}</td>
                    <td className="ledger__how">{r.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── V. How I work ─────────────────────────────────────── */}
        <section id="how-i-work" className="chapter ground-stock" data-ground="stock" aria-labelledby="how-title">
          <div className="wrap">
            <div className="chapter-head">
              <ChapterTitle num="V" id="how-title">
                How I work
              </ChapterTitle>
            </div>
            <div className="principles">
              {PRINCIPLES.map((p) => (
                <figure key={p.title} className="principle" data-reveal>
                  <blockquote>
                    <p>{p.quote}</p>
                  </blockquote>
                  <figcaption>
                    <strong>{p.title}.</strong> {p.body}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="advisory" data-reveal>
              <h3 className="advisory__title">Advising startups</h3>
              <div className="prose">
                <p>
                  I work with founders from seed to Series B who want AI to be part of the product, not a
                  slide in the deck. I sit on the advisory board of{' '}
                  <span className="inline-logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logos/record.jpeg" alt="" width={18} height={18} loading="lazy" decoding="async" />
                    Record
                  </span>
                  , an AI-powered customer support platform, where the work is AI product strategy, ML
                  architecture and go-to-market.
                </p>
                <p>
                  Founders usually bring me in for {ADVISORY_FOCUS.slice(0, -1).join(', ')}, and{' '}
                  {ADVISORY_FOCUS[ADVISORY_FOCUS.length - 1]}. Having built at every stage, from zero to one
                  and from thousands to millions, I can usually tell which problem is the real one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── VI. On the record ─────────────────────────────────── */}
        <section id="on-the-record" className="chapter ground-paper" data-ground="paper" aria-labelledby="record-title">
          <div className="wrap">
            <div className="chapter-head">
              <ChapterTitle num="VI" id="record-title">
                On the record
              </ChapterTitle>
            </div>
            <ol className="press">
              {MEDIA_COVERAGE.items.map((item) => (
                <li key={item.id} className="press__row" data-reveal>
                  <p className="press__date">{item.date}</p>
                  <div className="press__text">
                    <h3 className="press__title">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <ul className="press__links" aria-label={`Coverage of ${item.title}`}>
                    {item.links.map((l) => (
                      <li key={l.url}>
                        <a href={l.url} {...ext}>
                          {l.outlet}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <div className="faq">
              <h3 className="faq__title">Questions people ask</h3>
              {FAQ_CONTENT.items.map((q) => (
                <details key={q.question} className="faq__item">
                  <summary>{q.question}</summary>
                  <p>{q.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Colophon: the close ───────────────────────────────── */}
        <footer id="lets-talk" className="colophon ground-stock" data-ground="stock" aria-labelledby="talk-title">
          <div className="wrap colophon__grid">
            <h2 id="talk-title" className="colophon__title">
              {CTA_LABEL}.
            </h2>
            <p className="colophon__line">
              Advisory, speaking, a role, or just a good conversation about agents. The quickest way is to{' '}
              <a href={SITE_CONFIG.calendar} {...ext}>
                book 30 minutes in my calendar
              </a>
              . You can also write to <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>, or find me
              on{' '}
              <a href={SITE_CONFIG.linkedin} {...ext}>
                LinkedIn
              </a>
              .
            </p>
            <div className="colophon__meta">
              <p>
                Elsewhere:{' '}
                <a href={SITE_CONFIG.github} {...ext}>
                  GitHub
                </a>
                ,{' '}
                <a href={SITE_CONFIG.crunchbase} {...ext}>
                  Crunchbase
                </a>
                , and a <Link href="/for-bots/">profile for AI agents</Link>.
              </p>
              <p>
                Set in Newsreader and Geist. Built with Next.js and no animation library. The form in
                chapter III is the only thing on this page that was ever broken.
              </p>
              <p>© {year} Or Nuri</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
