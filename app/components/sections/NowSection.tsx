'use client';

import { motion } from 'framer-motion';
import { NOW_CONTENT } from '@/app/lib/constants';
import { fadeInUp } from '@/app/lib/animations';
import Card from '@/app/components/ui/Card';

export default function NowSection() {
  return (
    <section
      id="now"
      aria-labelledby="now-title"
      className="pt-16 sm:pt-20 md:pt-24 bg-[var(--color-bg-primary)]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Card hover={false}>
            <h2
              id="now-title"
              className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent-secondary)]"
            >
              <span aria-hidden="true" className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-[var(--color-accent-secondary)] opacity-60 motion-safe:animate-ping" />
                <span className="relative w-2 h-2 rounded-full bg-[var(--color-accent-secondary)]" />
              </span>
              {NOW_CONTENT.title}
            </h2>

            <ul className="mt-5 space-y-3.5">
              {NOW_CONTENT.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] sm:text-base leading-relaxed text-[var(--color-text-secondary)]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.6em] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-border-strong)]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 pt-5 border-t border-[var(--color-divider)] text-[13px] text-[var(--color-text-muted)]">
              Last updated: {NOW_CONTENT.updated}
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
