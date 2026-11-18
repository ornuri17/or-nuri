import Link from 'next/link';
import Effects from '@/app/components/Effects';
import { homeJsonLd } from '@/app/metadata';
import { SITE_CONFIG, MEDIA_COVERAGE, FAQ_CONTENT } from '@/app/lib/constants';
import {
  CTA_LABEL,
  NAV,
  LOGOS,
  IMPACT,
  PIPELINE,
  PIPELINE_LOG,
  CAREER,
  PRINCIPLES,
  ADVISORY_FOCUS,
} from '@/app/lib/content';

// Every section renders in place in the static HTML, readable by crawlers and AI agents
// that don't execute JS. <Effects /> only adds motion on top.

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

function Arrow() {
  return (
    <svg className="icon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SectionHead({ id, kicker, title, children }: { id: string; kicker?: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="section-head" data-reveal>
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {children ? <p className="section-lede">{children}</p> : null}
    </div>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Effects />

      {/* ── Nav ─────────────────────────────────────────────── */}
      <header className="nav-wrap">
        <nav className="nav" aria-label="Main">
          <a href="#top" className="nav__brand">
            <span className="nav__mark" aria-hidden="true">
              ON
            </span>
            Or Nuri
          </a>
          <ul className="nav__links">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--dark btn--sm">
            {CTA_LABEL}
          </a>
        </nav>
      </header>

      <main id="main">
        {/* ── Hero ──────────────────────────────────────────── */}
        <section id="top" className="hero" data-hero aria-labelledby="hero-title">
          <div className="hero__aura" aria-hidden="true">
            <span className="aura aura--1" />
            <span className="aura aura--2" />
            <span className="aura aura--3" />
          </div>
          <div className="hero__grid-bg" aria-hidden="true" />

          <div className="container hero__inner">
            <div className="hero__copy">
              <p className="status">
                <span className="status__dot" aria-hidden="true" />
                Leading AI initiatives at monday.com
              </p>
              <h1 id="hero-title" className="hero__title">
                I build AI agents that ship real work <span className="hero__soft">to production.</span>
              </h1>
              <p className="hero__sub">
                AI &amp; Tech Leader at monday.com. Founder with an exit. Advisor to startups bringing AI
                into their products.
              </p>
              <div className="hero__ctas">
                <a href="#contact" className="btn btn--dark">
                  {CTA_LABEL}
                  <Arrow />
                </a>
                <a href="#agents" className="btn btn--glass">
                  See the agents
                </a>
              </div>
            </div>

            <div className="hero__stage">
              <div className="stage__layer stage__layer--back" aria-hidden="true">
                <span className="stage__ring" />
              </div>
              <figure className="portrait-card stage__layer stage__layer--mid">
                <picture>
                  <source srcSet="/images/or-nuri-professional.webp" type="image/webp" />
                  <img
                    src="/images/or-nuri-professional.jpg"
                    alt="Or Nuri, smiling, arms crossed, in a white t-shirt"
                    width={533}
                    height={800}
                    fetchPriority="high"
                    decoding="async"
                  />
                </picture>
                <figcaption className="portrait-card__caption">
                  <span className="portrait-card__name">Or Nuri</span>
                  <span className="portrait-card__role">AI &amp; Tech Leader</span>
                </figcaption>
              </figure>
              <div className="stage__layer stage__layer--front" aria-hidden="true">
                <div className="float float--a">
                  <span className="float__value">99.9%</span>
                  <span className="float__label">availability, from 89%</span>
                </div>
                <div className="float float--b">
                  <span className="float__icon">
                    <svg viewBox="0 0 16 16" width="14" height="14">
                      <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="float__label">
                    <strong>Exit</strong> adjusti.co → Teikametrics
                  </span>
                </div>
                <div className="float float--c">
                  <span className="float__value">10M+</span>
                  <span className="float__label">requests a day</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Logo strip ─────────────────────────────────── */}
          <div className="container">
            <div className="logos" data-reveal>
              <p className="logos__label">Built and led at</p>
              <ul className="logos__list">
                {LOGOS.map((l) => (
                  <li key={l.name}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={l.src} alt="" width={24} height={24} loading="lazy" decoding="async" />
                    {l.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Impact ────────────────────────────────────────── */}
        <section id="impact" className="section" aria-labelledby="impact-title">
          <div className="container">
            <SectionHead id="impact-title" title="Numbers I'd sign my name to.">
              Reliability, speed and scale from products I tech led, and the company I founded.
            </SectionHead>

            <div className="bento">
              {IMPACT.map((c, i) => (
                <article key={c.id} className={`card spot bento__card bento__card--${c.size}`} data-reveal style={{ '--d': `${i * 60}ms` } as React.CSSProperties}>
                  <p className="metric">
                    <span
                      className="metric__value"
                      data-count={c.count.to}
                      data-decimals={c.count.decimals}
                      data-suffix={c.count.suffix}
                    >
                      {c.value}
                    </span>
                    <span className="metric__label">{c.label}</span>
                  </p>
                  <p className="card__body">{c.body}</p>
                  {'bars' in c ? (
                    <div className="bars" role="img" aria-label="Availability: 89% before, 99.9% after">
                      {c.bars.map((b) => (
                        <div key={b.label} className="bars__row">
                          <span className="bars__label">{b.label}</span>
                          <span className="bars__track">
                            <span className="bars__fill" style={{ '--w': `${((b.value - 80) / 20) * 100}%` } as React.CSSProperties} />
                          </span>
                          <span className="bars__value">{b.text}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Agents showcase ───────────────────────────────── */}
        <section id="agents" className="section section--tint" aria-labelledby="agents-title">
          <div className="container agents">
            <div className="agents__copy">
              <SectionHead id="agents-title" kicker="Now" title="Agents that find the bug, fix it, and ship it." />
              <div className="agents__text" data-reveal>
                <p>
                  Accessibility work always came after a feature shipped, through manual audits by outside
                  vendors. At monday.com I lead a project where one team of autonomous AI agents finds the
                  accessibility issues on every new feature, and a second team carries each fix all the way to
                  production.
                </p>
                <p>
                  They plug in anywhere, from a pull request to a live environment, and work like another
                  team member with a well-defined role.
                </p>
                <a className="link-arrow" href="https://www.youtube.com/watch?v=XYWJDX9qggQ" {...ext}>
                  Hear how on Startup for Startup, ep. 359
                  <Arrow />
                </a>
              </div>
            </div>

            <figure className="pipeline card" data-pipeline data-steps={PIPELINE.length} data-step={PIPELINE.length} data-reveal>
              <div className="pipeline__bar">
                <span className="pipeline__dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="pipeline__title">a11y-agents · run</span>
                <span className="pipeline__badge">Illustration</span>
              </div>
              <ol className="pipeline__steps">
                {PIPELINE.map((s, i) => (
                  <li key={s.id} className="pipeline__step" style={{ '--i': i } as React.CSSProperties}>
                    <span className="pipeline__node" aria-hidden="true">
                      <svg viewBox="0 0 16 16" width="12" height="12">
                        <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="pipeline__text">
                      <span className="pipeline__name">{s.title}</span>
                      <span className="pipeline__detail">{s.detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <ul className="pipeline__log" aria-hidden="true">
                {PIPELINE_LOG.map((l, i) => (
                  <li key={l} data-log={i} data-state="done">
                    {l}
                  </li>
                ))}
              </ul>
              <figcaption className="sr-only">
                Illustration of the workflow: a feature lands, scanner agents find accessibility issues, fixer
                agents write the fix, it passes review and tests, and ships to production.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── Career ────────────────────────────────────────── */}
        <section id="career" className="section" aria-labelledby="career-title">
          <div className="container career-grid">
            <div className="career-grid__head">
              <SectionHead id="career-title" title="Every stage, from zero to millions.">
                Founding, growing, scaling, and running at the size where millions depend on it.
              </SectionHead>
              <dl className="edu" data-reveal>
                <div>
                  <dt>MSc</dt>
                  <dd>Machine Learning &amp; Data Science</dd>
                </div>
                <div>
                  <dt>BSc</dt>
                  <dd>Computer Science</dd>
                </div>
                <div>
                  <dt>Reichman University</dt>
                  <dd>Zell Entrepreneurship alumnus</dd>
                </div>
              </dl>
            </div>

            <ol className="timeline card">
              {CAREER.map((job, i) => (
                <li key={job.id} className="timeline__row" data-reveal style={{ '--d': `${i * 50}ms` } as React.CSSProperties}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="timeline__logo" src={job.logo} alt="" width={40} height={40} loading="lazy" decoding="async" />
                  <div className="timeline__main">
                    <p className="timeline__top">
                      <span className="timeline__role">{job.role}</span>
                      <span className="timeline__years">{job.years}</span>
                    </p>
                    <p className="timeline__company">{job.company}</p>
                    <p className="timeline__body">{job.body}</p>
                    <span className="chip">{job.chip}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Beyond: advisory, leadership, press ───────────── */}
        <section id="press" className="section section--tint" aria-labelledby="beyond-title">
          <div className="container">
            <SectionHead id="beyond-title" title="Advising, leading, on the record." />

            <div className="beyond">
              <article className="card spot beyond__advisory" data-reveal>
                <h3 className="card__title">Startup advisor</h3>
                <p className="card__body">
                  I work with founders from seed to Series B who want AI in the product, not just in the deck. I sit
                  on the advisory board of{' '}
                  <span className="inline-logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logos/record.jpeg" alt="" width={18} height={18} loading="lazy" decoding="async" />
                    Record
                  </span>
                  , an AI-powered customer support platform.
                </p>
                <ul className="chips" aria-label="Advisory focus areas">
                  {ADVISORY_FOCUS.map((f) => (
                    <li key={f} className="chip">
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="principles">
                  <h3 className="principles__title">How I lead</h3>
                  <ul>
                    {PRINCIPLES.map((p) => (
                      <li key={p.title}>
                        <strong>{p.title}.</strong> {p.body}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              <article className="card beyond__press" data-reveal style={{ '--d': '80ms' } as React.CSSProperties}>
                <h3 className="card__title">Press &amp; podcasts</h3>
                <ul className="press">
                  {MEDIA_COVERAGE.items.map((item) => (
                    <li key={item.id} className="press__item">
                      <p className="press__date">{item.date}</p>
                      <p className="press__title">{item.title}</p>
                      <p className="press__links">
                        {item.links.map((l, i) => (
                          <span key={l.url}>
                            {i > 0 ? <span aria-hidden="true"> · </span> : null}
                            <a href={l.url} {...ext}>
                              {l.outlet}
                              <span className="sr-only"> (opens in a new tab)</span>
                            </a>
                          </span>
                        ))}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="faq" data-reveal>
              <h3 className="faq__title">FAQ</h3>
              {FAQ_CONTENT.items.map((q) => (
                <details key={q.question} className="faq__item">
                  <summary>{q.question}</summary>
                  <p>{q.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ───────────────────────────────────────── */}
        <section id="contact" className="section contact" aria-labelledby="contact-title">
          <div className="container">
            <div className="contact__card" data-reveal>
              <div className="contact__aura" aria-hidden="true" />
              <h2 id="contact-title" className="contact__title">
                {CTA_LABEL}.
              </h2>
              <p className="contact__text">
                Advisory, speaking, a role, or a good conversation about agents. Pick whatever is easiest.
              </p>
              <div className="contact__actions">
                <a href={SITE_CONFIG.calendar} className="btn btn--dark" {...ext}>
                  Book 30 minutes
                  <Arrow />
                </a>
                <a href={`mailto:${SITE_CONFIG.email}`} className="btn btn--glass">
                  Email me
                </a>
                <a href={SITE_CONFIG.linkedin} className="btn btn--glass" {...ext}>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <p>© {year} Or Nuri</p>
          <p className="footer__links">
            <a href={SITE_CONFIG.github} {...ext}>
              GitHub
            </a>
            <a href={SITE_CONFIG.crunchbase} {...ext}>
              Crunchbase
            </a>
            <Link href="/for-bots/">For AI agents</Link>
          </p>
        </div>
      </footer>
    </>
  );
}
