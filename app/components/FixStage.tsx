'use client';

import { useEffect, useRef } from 'react';

/**
 * Chapter III, "The page fixes itself".
 *
 * A small demo form ships with three real accessibility defects. As the visitor
 * scrolls through a sticky stage, the margin finds each one (a red-pencil mark is
 * drawn around it), measures it, fixes it, and finally stamps the change shipped.
 *
 * Every number shown is measured in the visitor's browser from the specimen's own
 * computed styles and box sizes, in both states. The server-rendered HTML is the
 * finished, fixed state with pre-measured values, so readers without JS, with
 * reduced motion, and crawlers all get the complete story.
 */

type IssueKey = 'contrast' | 'target' | 'focus';
const ISSUES: IssueKey[] = ['contrast', 'target', 'focus'];

// Scroll progress (0..1 across the sticky track) at which each issue is found and fixed.
const FOUND = [0.1, 0.33, 0.56];
const FIXED = [0.22, 0.45, 0.68];
const SHIP = 0.8;

function luminance(rgb: string) {
  const m = rgb.match(/[\d.]+/g);
  if (!m) return 1;
  const [r, g, b] = m.slice(0, 3).map((v) => {
    const c = Number(v) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: string, b: string) {
  const x = luminance(a);
  const y = luminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}

const fmtRatio = (n: number) => `${n.toFixed(2)}:1`;

export default function FixStage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const form = section.querySelector<HTMLElement>('[data-fix-form]')!;
    const figure = section.querySelector<HTMLElement>('[data-fix-figure]')!;
    const track = section.querySelector<HTMLElement>('[data-fix-track]')!;
    const targets: Record<IssueKey, HTMLElement> = {
      contrast: form.querySelector('[data-issue="contrast"]')!,
      target: form.querySelector('[data-issue="target"]')!,
      focus: form.querySelector('[data-issue="focus"]')!,
    };
    const notes = ISSUES.map((k) => section.querySelector<HTMLElement>(`[data-note="${k}"]`)!);
    const marks = ISSUES.map((k) => section.querySelector<SVGEllipseElement>(`[data-mark="${k}"]`)!);
    const svg = section.querySelector<SVGSVGElement>('[data-fix-marks]')!;

    // 1. Measure both states, synchronously, with transitions off so we read final values.
    form.classList.add('no-anim');
    const formBg = getComputedStyle(form).backgroundColor;
    const measure = () => {
      const hint = getComputedStyle(targets.contrast).color;
      const box = targets.target.getBoundingClientRect();
      const fs = getComputedStyle(targets.focus);
      const ring = fs.outlineStyle !== 'none' && parseFloat(fs.outlineWidth) > 0;
      return {
        contrast: fmtRatio(contrast(hint, formBg)),
        target: `${Math.round(box.width)} × ${Math.round(box.height)} px`,
        focus: ring ? `${fmtRatio(contrast(fs.outlineColor, formBg))} ring` : 'No indicator',
      };
    };
    form.classList.add('show-focus');
    const good = measure();
    ISSUES.forEach((k) => form.classList.add(`bad-${k}`));
    const bad = measure();
    ISSUES.forEach((k) => form.classList.remove(`bad-${k}`));
    form.classList.remove('show-focus');
    void form.offsetWidth;
    form.classList.remove('no-anim');

    ISSUES.forEach((k, i) => {
      const before = notes[i].querySelector('[data-before]');
      const after = notes[i].querySelector('[data-after]');
      if (before) before.textContent = bad[k];
      if (after) after.textContent = good[k];
    });

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduced.matches) return; // the static, fixed state is the reduced-motion experience

    // 2. Enhance: the section becomes a sticky stage driven by scroll progress,
    //    but only if the stage fits one screen. Otherwise the static version reads better.
    const inner = section.querySelector<HTMLElement>('.fix__inner')!;
    section.classList.add('is-live');
    // Narrow screens keep a folio chip at the bottom edge, so reserve its height.
    const reserve = window.innerWidth < 1180 ? 76 : 24;
    const fits = () => inner.offsetHeight <= window.innerHeight - reserve;
    if (!fits()) {
      section.classList.remove('is-live');
      return;
    }

    const placeMarks = () => {
      const f = figure.getBoundingClientRect();
      svg.setAttribute('viewBox', `0 0 ${f.width} ${f.height}`);
      ISSUES.forEach((k, i) => {
        const r = targets[k].getBoundingClientRect();
        const padX = k === 'target' ? 10 : 14;
        const padY = k === 'target' ? 10 : 9;
        marks[i].setAttribute('cx', String(r.left - f.left + r.width / 2));
        marks[i].setAttribute('cy', String(r.top - f.top + r.height / 2));
        marks[i].setAttribute('rx', String(r.width / 2 + padX));
        marks[i].setAttribute('ry', String(r.height / 2 + padY));
        const num = marks[i].nextElementSibling;
        if (num) {
          num.setAttribute('x', String(r.left - f.left - padX - 4));
          num.setAttribute('y', String(r.top - f.top - padY + 2));
        }
      });
    };

    let lastKey = '';
    const render = (p: number) => {
      const states = ISSUES.map((_, i) => (p >= FIXED[i] ? 'fixed' : p >= FOUND[i] ? 'found' : 'waiting'));
      const shipped = p >= SHIP;
      const key = states.join() + shipped;
      if (key === lastKey) return;
      lastKey = key;
      ISSUES.forEach((k, i) => {
        form.classList.toggle(`bad-${k}`, states[i] !== 'fixed');
        notes[i].dataset.state = states[i];
        marks[i].parentElement!.dataset.state = states[i];
        const status = notes[i].querySelector('[data-status]');
        if (status) status.textContent = states[i] === 'fixed' ? 'Fixed' : states[i] === 'found' ? 'Found' : 'Queued';
      });
      // Simulated keyboard focus sits on the button from the moment issue 3 is found.
      form.classList.toggle('show-focus', states[2] !== 'waiting');
      section.dataset.shipped = String(shipped);
      section.dataset.verifyState = key;
      requestAnimationFrame(placeMarks);
    };

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = track.getBoundingClientRect();
        const travel = r.height - window.innerHeight;
        const p = travel > 0 ? Math.min(1, Math.max(0, -r.top / travel)) : 1;
        render(p);
      });
    };

    const onResize = () => {
      placeMarks();
      onScroll();
    };

    let listening = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !listening) {
          window.addEventListener('scroll', onScroll, { passive: true });
          listening = true;
          onScroll();
        } else if (!entry.isIntersecting && listening) {
          window.removeEventListener('scroll', onScroll);
          listening = false;
          onScroll();
        }
      },
      { rootMargin: '50% 0px' },
    );
    io.observe(track);
    window.addEventListener('resize', onResize);
    onScroll();
    placeMarks();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
      section.classList.remove('is-live');
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="agents"
      className="chapter ground-ink fix"
      data-chapter="agents"
      data-ground="ink"
      data-shipped="true"
      aria-labelledby="agents-title"
    >
      <div className="fix__track" data-fix-track>
        <div className="fix__stage">
          <div className="wrap fix__inner">
            <header className="fix__head">
              <h2 id="agents-title" className="chapter-title">
                <span className="chapter-num">III</span>
                The page fixes itself
              </h2>
              <p className="fix__intro">
                This form shipped with three accessibility bugs, on purpose. Scroll, and watch each
                one get found, measured and fixed. Every number is measured live, in your browser.
              </p>
            </header>

            <div className="fix__grid">
              <figure className="fix__figure" data-fix-figure>
                <div className="fix__form" data-fix-form aria-hidden="true" inert>
                  <div className="fix__form-top">
                    <p className="fix__form-title">Register for the meetup</p>
                    <span className="fix__close" data-issue="target">
                      <svg viewBox="0 0 16 16" width="10" height="10" aria-hidden="true">
                        <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                  <p className="fix__label">Work email</p>
                  <p className="fix__input">name@company.com</p>
                  <p className="fix__hint" data-issue="contrast">We&apos;ll only use it to send your ticket.</p>
                  <div className="fix__submit-row">
                    <span className="fix__submit" data-issue="focus">Reserve a seat</span>
                    <span className="fix__key">Tab</span>
                  </div>
                </div>
                <svg className="fix__marks" data-fix-marks aria-hidden="true">
                  {ISSUES.map((k, i) => (
                    <g key={k} className="fix__mark" data-state="fixed">
                      <ellipse data-mark={k} pathLength={1} />
                      <text className="fix__mark-num">{i + 1}</text>
                    </g>
                  ))}
                </svg>
                <figcaption className="sr-only">
                  A demonstration registration form with three accessibility defects: faint hint
                  text, a close button too small to tap, and a submit button with no visible
                  keyboard focus. All three are fixed below.
                </figcaption>
              </figure>

              <ol className="fix__notes">
                <li className="note" data-note="contrast" data-state="fixed">
                  <span className="note__num" aria-hidden="true">1</span>
                  <div className="note__body">
                    <h3 className="note__title">Hint text too faint to read</h3>
                    <p className="note__measure">
                      <span className="note__before" data-before>1.96:1</span>
                      <span className="note__arrow" aria-label="to"> → </span>
                      <span className="note__after" data-after>6.05:1</span>
                    </p>
                    <p className="note__rule">Contrast. WCAG 1.4.3 asks for 4.5:1.</p>
                  </div>
                  <span className="note__status" data-status>Fixed</span>
                </li>
                <li className="note" data-note="target" data-state="fixed">
                  <span className="note__num" aria-hidden="true">2</span>
                  <div className="note__body">
                    <h3 className="note__title">Close button too small to tap</h3>
                    <p className="note__measure">
                      <span className="note__before" data-before>18 × 18 px</span>
                      <span className="note__arrow" aria-label="to"> → </span>
                      <span className="note__after" data-after>44 × 44 px</span>
                    </p>
                    <p className="note__rule">Target size. WCAG 2.5.8 asks for 24 × 24 at least.</p>
                  </div>
                  <span className="note__status" data-status>Fixed</span>
                </li>
                <li className="note" data-note="focus" data-state="fixed">
                  <span className="note__num" aria-hidden="true">3</span>
                  <div className="note__body">
                    <h3 className="note__title">Keyboard focus is invisible</h3>
                    <p className="note__measure">
                      <span className="note__before" data-before>No indicator</span>
                      <span className="note__arrow" aria-label="to"> → </span>
                      <span className="note__after" data-after>5.98:1 ring</span>
                    </p>
                    <p className="note__rule">Focus visible. WCAG 2.4.7, with 3:1 for the ring.</p>
                  </div>
                  <span className="note__status" data-status>Fixed</span>
                </li>
              </ol>
            </div>

            <p className="fix__ship">
              <span className="fix__stamp">Shipped</span>
              <span className="ship-short">
                That loop is my day job at monday.com: one team of agents finds issues like these, another
                ships the fixes.{' '}
                <a href="https://www.youtube.com/watch?v=XYWJDX9qggQ" target="_blank" rel="noopener noreferrer">
                  Hear how (ep. 359)
                </a>
                . A staged re-enactment.
              </span>
              <span className="ship-long">
                That loop is my day job. At monday.com I lead a project where one team of AI agents
                finds accessibility issues on every new feature, and a second team carries each fix
                all the way to production.{' '}
                <a href="https://www.youtube.com/watch?v=XYWJDX9qggQ" target="_blank" rel="noopener noreferrer">
                  Hear how on Startup for Startup, ep. 359
                </a>
                . This page is a staged re-enactment, not the production system.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
