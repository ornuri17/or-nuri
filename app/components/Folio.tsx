'use client';

import { useEffect, useRef, useState } from 'react';
import { CHAPTERS } from '@/app/lib/content';

/**
 * The folio: the page's only persistent chrome. A running head in the margin that
 * names the chapter you are in, and opens the contents. Wide screens get it as a
 * vertical margin column; narrower screens get a small chip at the bottom edge.
 *
 * Also runs the page's one other script: revealing [data-reveal] blocks as they
 * enter the viewport.
 */
export default function Folio() {
  const [current, setCurrent] = useState<number>(-1);
  const [ground, setGround] = useState<string>('paper');
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    // Track the current chapter: the last one whose top has passed 45% of the viewport.
    const sections = CHAPTERS.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    const grounds = Array.from(document.querySelectorAll<HTMLElement>('[data-ground]'));
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.45;
      let idx = -1;
      sections.forEach((s, i) => {
        if (s.getBoundingClientRect().top <= line) idx = i;
      });
      setCurrent(idx);
      // The ground under the bottom-left corner decides the folio's ink.
      const probe = window.innerHeight - 40;
      let g = 'paper';
      grounds.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= probe && r.bottom >= probe) g = el.dataset.ground || 'paper';
      });
      setGround(g);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    // Reveal blocks once, as they enter.
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            reveal.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => reveal.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
      reveal.disconnect();
    };
  }, []);

  const chapter = current >= 0 ? CHAPTERS[current] : null;
  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <>
      <aside className="folio" data-ground={ground} data-active={chapter ? 'true' : 'false'} aria-label="Running head">
        <a href="#top" className="folio__name">
          Or Nuri
        </a>
        <div className="folio__foot">
          <p className="folio__chapter" aria-live="off">
            <span className="folio__num">{chapter?.num ?? ''}</span>
            <span className="folio__title">{chapter?.title ?? ''}</span>
          </p>
          <button type="button" className="folio__contents" onClick={open} aria-haspopup="dialog">
            Contents
          </button>
        </div>
      </aside>

      <dialog
        ref={dialogRef}
        className="contents"
        aria-labelledby="contents-title"
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        <div className="contents__inner">
          <div className="contents__head">
            <p id="contents-title" className="contents__title">
              Contents
            </p>
            <button type="button" className="contents__close" onClick={close}>
              Close
            </button>
          </div>
          <ol className="toc toc--dialog">
            {CHAPTERS.map((c, i) => (
              <li key={c.id} aria-current={i === current ? 'true' : undefined}>
                <a href={`#${c.id}`} onClick={close}>
                  <span className="toc__num">{c.num}</span>
                  <span className="toc__title">{c.title}</span>
                  <span className="toc__dek">{c.dek}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </dialog>
    </>
  );
}
