'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCE_TIMELINE } from '@/app/lib/constants';
import { timelineItem, staggerContainer } from '@/app/lib/animations';
import SectionHeading from '@/app/components/ui/SectionHeading';
import Icon from '@/app/components/ui/Icon';

function ExperienceCard({ item }: { item: typeof EXPERIENCE_TIMELINE[number] }) {
  const [expanded, setExpanded] = useState(false);
  const hasAchievements = item.achievements && item.achievements.length > 0;
  const listId = `achievements-${item.id}`;

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-7 border border-[var(--color-border)] shadow-[var(--shadow-soft)] transition-[box-shadow,border-color] duration-300 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-lift)]">
      {/* Header with Logo */}
      <div className="flex items-start gap-4">
        {'logo' in item && item.logo && (
          <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-white ring-1 ring-[var(--color-border)] flex items-center justify-center">
            <img
              src={item.logo}
              alt={`${item.company} logo`}
              className={item.logo.endsWith('.svg') ? 'w-full h-full object-contain p-1.5' : 'w-full h-full object-cover'}
              loading="lazy"
              width="48"
              height="48"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="md:hidden text-[13px] font-medium text-[var(--color-accent-secondary)] tabular-nums mb-1">
            {item.year}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold tracking-[-0.015em] leading-snug text-[var(--color-text-primary)]">
            {item.title}
          </h3>
          <div className="mt-0.5 text-[15px] font-medium text-[var(--color-text-secondary)]">
            {item.company}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[var(--color-text-secondary)]">
        {item.description}
      </p>

      {/* Achievements */}
      {hasAchievements && (
        <>
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                id={listId}
                key="achievements"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <ul className="mt-5 pt-5 border-t border-[var(--color-divider)] space-y-3">
                  {item.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="flex items-start gap-3 text-[15px] leading-relaxed text-[var(--color-text-secondary)]"
                    >
                      <span className="mt-[3px] flex-shrink-0 flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent-secondary)]">
                        <Icon name="check" strokeWidth={2.5} className="w-3 h-3" />
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls={listId}
            className="group mt-5 inline-flex items-center gap-1.5 h-9 -ml-1 px-1 rounded-lg text-sm font-semibold text-[var(--color-accent-secondary)] hover:text-[var(--color-accent-secondary-hover)] transition-colors"
          >
            {expanded ? 'Show less' : 'Show more'}
            <Icon
              name="chevronDown"
              strokeWidth={2.25}
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
        </>
      )}
    </div>
  );
}

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-24 md:py-32 bg-[var(--color-bg-secondary)] border-y border-[var(--color-divider)]"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <SectionHeading title="Experience" className="mb-12 md:mb-16" />

          {/* Timeline */}
          {/* The vertical line is the list's ::before */}
          <ol className="relative space-y-6 md:space-y-8 before:content-[''] before:absolute before:left-[7px] md:before:left-[167.5px] before:top-8 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-[var(--color-accent-secondary)]/50 before:via-[var(--color-border-strong)] before:to-transparent">
              {EXPERIENCE_TIMELINE.map((item, index) => (
                <motion.li
                  key={item.id}
                  variants={timelineItem}
                  className="relative grid grid-cols-[16px_1fr] md:grid-cols-[136px_64px_1fr] items-start gap-x-4 md:gap-x-0"
                >
                  {/* Year, desktop only (mobile shows it inside the card) */}
                  <div className="hidden md:block pt-7 pr-6 text-right text-sm font-medium tabular-nums text-[var(--color-text-muted)]">
                    {item.year}
                  </div>

                  {/* Dot */}
                  <div className="relative flex justify-start md:justify-center pt-7 md:pt-[30px]">
                    <span
                      aria-hidden="true"
                      className={`relative z-10 block w-[15px] h-[15px] rounded-full border-[3px] border-[var(--color-bg-secondary)] ${
                        index === 0
                          ? 'bg-[var(--color-accent-secondary)] shadow-[0_0_0_4px_rgba(37,99,235,0.15)]'
                          : 'bg-[var(--color-border-strong)]'
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <ExperienceCard item={item} />
                  </div>
                </motion.li>
              ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
