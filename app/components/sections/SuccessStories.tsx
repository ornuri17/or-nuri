'use client';

import { useRef, useState } from 'react';
import { m as motion, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import { SUCCESS_STORIES } from '@/app/lib/constants';
import { fadeInUp } from '@/app/lib/animations';
import Card from '@/app/components/ui/Card';
import Icon, { IconTile } from '@/app/components/ui/Icon';
import AgentsPipeline from './AgentsPipeline';

type Story = (typeof SUCCESS_STORIES)[number];

function StoryCard({ story, active }: { story: Story; active: boolean }) {
  return (
    <Card className="h-full overflow-hidden">
      {/* Soft corner glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-56 h-56 rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.10),transparent)]"
      />
      <div className="relative flex flex-col h-full">
        <div className="space-y-4 flex-grow">
          {/* Metric & Icon */}
          <div className="flex items-start justify-between gap-3">
            <div
              className={`${story.metricClassName ?? 'text-3xl sm:text-4xl'} text-gradient font-bold tracking-[-0.035em] leading-[1.1] pb-1`}
            >
              {story.metric}
            </div>
            <IconTile id={story.id} fallback={story.icon} />
          </div>

          {/* Title */}
          {/* Keep short joining words with the word after them, so a line never ends on "to" or "&" */}
          <h3 className="text-[19px] sm:text-xl font-semibold tracking-[-0.02em] leading-snug text-[var(--color-text-primary)]">
            {story.title.replace(/(^|\s)(to|of|&)\s/g, '$1$2\u00a0')}
          </h3>

          {/* Description */}
          <p className="text-[15px] sm:text-base leading-relaxed text-[var(--color-text-secondary)]">
            {story.description}
          </p>

          {story.id === 'a11y-agents' && <AgentsPipeline active={active} />}

          {story.link && (
            <a
              href={story.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block text-sm font-semibold leading-relaxed text-[var(--color-accent-secondary)] hover:text-[var(--color-accent-secondary-hover)] transition-colors"
            >
              {(() => {
                // Keep the last two words and the arrow together so the arrow never wraps alone
                const words = story.link.label.split(' ');
                const last = words.splice(-2).join('\u00a0');
                return (
                  <span className="underline decoration-[var(--color-accent-secondary)]/30 underline-offset-4 group-hover:decoration-current transition-colors">
                    {words.join(' ')}{' '}
                    <span className="whitespace-nowrap">
                      {last}
                      <Icon
                        name="arrowUpRight"
                        strokeWidth={2}
                        className="inline-block align-[-2px] ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </span>
                );
              })()}
            </a>
          )}
        </div>

        {/* Impact - Always at bottom */}
        <div className="mt-6 pt-5 border-t border-[var(--color-divider)] flex items-start gap-3">
          <span className="mt-[2px] flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-accent-primary)] text-white">
            <Icon name="check" strokeWidth={2.75} className="w-3 h-3" />
          </span>
          <p className="text-sm font-semibold leading-relaxed text-balance text-[var(--color-text-primary)]">
            {story.impact}
          </p>
        </div>
      </div>
    </Card>
  );
}

/**
 * Desktop (and motion allowed): the section holds still while the stories take turns,
 * driven by scroll, with a clickable index on the left. Phones and reduced motion get
 * the plain card list. One set of markup serves both; CSS decides the layout.
 */
export default function SuccessStories() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const n = SUCCESS_STORIES.length;
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] });

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    setActive(Math.min(n - 1, Math.max(0, Math.floor(p * n * 0.999))));
  });

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const travel = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + (travel * (i + 0.5)) / n, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <section className="bg-[var(--color-bg-primary)]" aria-labelledby="stories-title">
      <div ref={trackRef} className="stories-track">
        <div className="stories-sticky py-20 sm:py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 w-full stories-layout">
            {/* Heading and index */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="stories-head text-center"
            >
              <span aria-hidden="true" className="stories-bar block w-8 h-[3px] mx-auto rounded-full bg-[var(--color-accent-secondary)]" />
              <h2
                id="stories-title"
                className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.1] text-[var(--color-text-primary)]"
              >
                Success Stories
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[var(--color-text-secondary)]">Key achievements that define my journey</p>

              <ol className="stories-index mt-10 space-y-1" aria-label="Stories">
                {SUCCESS_STORIES.map((story, i) => (
                  <li key={story.id}>
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      aria-current={i === active ? 'true' : undefined}
                      className={`group w-full text-left flex items-center gap-4 rounded-xl px-4 py-3 transition-colors ${
                        i === active ? 'bg-[var(--color-bg-secondary)]' : 'hover:bg-[var(--color-bg-secondary)]/60'
                      }`}
                    >
                      <span
                        className={`text-xs font-semibold tabular-nums transition-colors ${
                          i === active ? 'text-[var(--color-accent-secondary)]' : 'text-[var(--color-text-muted)]'
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span
                          className={`block text-[15px] font-semibold tracking-[-0.01em] transition-colors ${
                            i === active ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)]'
                          }`}
                        >
                          {story.title}
                        </span>
                        <span className="mt-2 block h-[2px] rounded-full bg-[var(--color-border)] overflow-hidden">
                          <span
                            className="block h-full bg-[var(--color-accent-secondary)] origin-left transition-transform duration-500"
                            style={{ transform: `scaleX(${i < active ? 1 : i === active ? 0.5 : 0})` }}
                          />
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* Stories */}
            <div className="stories-stage">
              {SUCCESS_STORIES.map((story, i) => (
                <motion.div
                  key={story.id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="stories-item"
                  data-state={i === active ? 'active' : i < active ? 'past' : 'next'}
                >
                  <StoryCard story={story} active={i === active} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
