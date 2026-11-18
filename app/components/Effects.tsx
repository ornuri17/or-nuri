'use client';

import { useEffect } from 'react';

/**
 * All page motion in one small client component, driven by data attributes on
 * server-rendered markup. Without JS, every element simply shows its final state.
 *
 * - [data-reveal]       fades and lifts in once, as it enters the viewport
 * - [data-count]        counts up to its real value on first view
 * - [data-hero]         publishes pointer (--px, --py) and scroll (--sy) for layered depth
 * - .spot               publishes the pointer position (--mx, --my) for a soft spotlight
 * - [data-pipeline]     steps through the agent pipeline while it is on screen
 */
export default function Effects() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const cleanups: Array<() => void> = [];

    // ── Reveal ────────────────────────────────────────────────
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-in');
          reveal.unobserve(e.target);
        });
      },
      { rootMargin: '0px 0px -6% 0px' },
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => reveal.observe(el));
    cleanups.push(() => reveal.disconnect());

    // ── Count-up ──────────────────────────────────────────────
    if (!reduced) {
      const fmt = (n: number, decimals: number) =>
        n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
      const counters = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
      const run = (el: HTMLElement) => {
        const to = Number(el.dataset.count);
        const decimals = Number(el.dataset.decimals || 0);
        const suffix = el.dataset.suffix || '';
        const final = el.textContent;
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const k = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - k, 4);
          el.textContent = k < 1 ? fmt(to * eased, decimals) + suffix : final;
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };
      const countIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            countIO.unobserve(e.target);
            run(e.target as HTMLElement);
          });
        },
        { threshold: 0.6 },
      );
      counters.forEach((el) => {
        // Only animate numbers that start below the fold; anything already visible stays put.
        if (el.getBoundingClientRect().top > window.innerHeight) countIO.observe(el);
      });
      cleanups.push(() => countIO.disconnect());
    }

    // ── Hero depth: pointer and scroll ────────────────────────
    const hero = document.querySelector<HTMLElement>('[data-hero]');
    if (hero && !reduced) {
      let raf = 0;
      let px = 0;
      let py = 0;
      const apply = () => {
        raf = 0;
        hero.style.setProperty('--px', px.toFixed(3));
        hero.style.setProperty('--py', py.toFixed(3));
        const sy = Math.min(1, Math.max(0, window.scrollY / window.innerHeight));
        hero.style.setProperty('--sy', sy.toFixed(3));
      };
      const schedule = () => {
        if (!raf) raf = requestAnimationFrame(apply);
      };
      const onMove = (e: PointerEvent) => {
        px = (e.clientX / window.innerWidth) * 2 - 1;
        py = (e.clientY / window.innerHeight) * 2 - 1;
        schedule();
      };
      if (finePointer) window.addEventListener('pointermove', onMove, { passive: true });
      window.addEventListener('scroll', schedule, { passive: true });
      apply();
      cleanups.push(() => {
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('scroll', schedule);
        cancelAnimationFrame(raf);
      });
    }

    // ── Card spotlight ────────────────────────────────────────
    if (finePointer && !reduced) {
      const onMove = (e: PointerEvent) => {
        const card = (e.target as HTMLElement).closest<HTMLElement>('.spot');
        if (!card) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      };
      document.addEventListener('pointermove', onMove, { passive: true });
      cleanups.push(() => document.removeEventListener('pointermove', onMove));
    }

    // ── Agent pipeline ────────────────────────────────────────
    const pipeline = document.querySelector<HTMLElement>('[data-pipeline]');
    if (pipeline && !reduced) {
      const steps = Number(pipeline.dataset.steps || 5);
      let step = 0;
      let timer = 0;
      const set = (s: number) => {
        pipeline.dataset.step = String(s);
        pipeline.querySelectorAll<HTMLElement>('[data-log]').forEach((li) => {
          const i = Number(li.dataset.log);
          li.dataset.state = i < s ? 'done' : i === s ? 'active' : 'idle';
        });
      };
      const tick = () => {
        step = (step + 1) % (steps + 2); // two beats of rest on "shipped" before looping
        set(Math.min(step, steps));
      };
      const io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting && !timer) {
          step = 0;
          set(0);
          timer = window.setInterval(tick, 1500);
        } else if (!e.isIntersecting && timer) {
          clearInterval(timer);
          timer = 0;
        }
      });
      io.observe(pipeline);
      cleanups.push(() => {
        io.disconnect();
        clearInterval(timer);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
