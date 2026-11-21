'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

/**
 * A small, looping illustration of the accessibility-agents workflow:
 * scanner agents find an issue, fixer agents write the fix, checks pass, it ships.
 * It only runs while on screen; with reduced motion it shows the finished run.
 */
const STEPS = [
  { label: 'Scan', log: 'Scanner agent checks the new feature' },
  { label: 'Find', log: 'Found: button text at 2.9:1 contrast, needs 4.5:1' },
  { label: 'Fix', log: 'Fixer agent opens a pull request with the fix' },
  { label: 'Verify', log: 'Tests and review pass' },
  { label: 'Ship', log: 'Deployed to production' },
] as const;

export default function AgentsPipeline({ active = true }: { active?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.6 });
  const reduced = useReducedMotion();
  const [step, setStep] = useState(STEPS.length - 1);

  useEffect(() => {
    if (reduced || !inView || !active) return;
    // Restart from the first step, then advance. Two extra beats rest on "Ship" before looping.
    let s = 0;
    const start = window.setTimeout(() => setStep(0), 0);
    const id = window.setInterval(() => {
      s = (s + 1) % (STEPS.length + 2);
      setStep(Math.min(s, STEPS.length - 1));
    }, 1100);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(id);
    };
  }, [inView, reduced, active]);

  const done = step === STEPS.length - 1;

  return (
    <div
      ref={ref}
      className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-4"
      role="img"
      aria-label="Illustration of the workflow: scanner agents find an accessibility issue, fixer agents write the fix, tests and review pass, and it ships to production."
    >
      <div className="flex items-center justify-between gap-3 text-xs font-medium text-[var(--color-text-secondary)]">
        <span className="inline-flex items-center gap-2">
          <span className="relative flex w-2 h-2">
            {!reduced && !done && (
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
            )}
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
          </span>
          Agent run
        </span>
        <span className="rounded-full border border-[var(--color-border)] bg-white px-2 py-0.5">Illustration</span>
      </div>

      {/* Steps */}
      <ol className="relative mt-4 grid grid-cols-5">
        <span aria-hidden="true" className="absolute left-[10%] right-[10%] top-[13px] h-[2px] bg-[var(--color-border)]" />
        <span
          aria-hidden="true"
          className="absolute left-[10%] top-[13px] h-[2px] bg-[var(--color-accent-secondary)] origin-left transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ width: '80%', transform: `scaleX(${step / (STEPS.length - 1)})` }}
        />
        {STEPS.map((s, i) => {
          const state = i < step || done ? 'done' : i === step ? 'active' : 'idle';
          return (
            <li key={s.label} className="relative flex flex-col items-center gap-1.5">
              <span
                className={`relative z-10 flex items-center justify-center w-7 h-7 rounded-full border-2 transition-all duration-500 ${
                  state === 'done'
                    ? 'bg-[var(--color-accent-secondary)] border-[var(--color-accent-secondary)] text-white'
                    : state === 'active'
                      ? 'bg-white border-[var(--color-accent-secondary)] text-[var(--color-accent-secondary)] shadow-[0_0_0_5px_rgba(37,99,235,0.15)]'
                      : 'bg-white border-[var(--color-border-strong)] text-transparent'
                }`}
              >
                <svg viewBox="0 0 16 16" className="w-3 h-3" aria-hidden="true">
                  <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span
                className={`text-[11px] sm:text-xs font-semibold transition-colors ${
                  state === 'idle' ? 'text-[var(--color-text-muted)]' : 'text-[var(--color-text-primary)]'
                }`}
              >
                {s.label}
              </span>
            </li>
          );
        })}
      </ol>

      {/* Log line for the current step */}
      <p key={step} className="mt-3 min-h-[1.25rem] text-[13px] font-medium text-[var(--color-text-primary)] animate-[log-in_400ms_cubic-bezier(0.22,1,0.36,1)]">
        <span className="text-[var(--color-accent-secondary)]">›</span> {STEPS[step].log}
      </p>
    </div>
  );
}
