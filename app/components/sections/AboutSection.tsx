'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ABOUT_CONTENT } from '@/app/lib/constants';
import { fadeInUp, staggerContainer } from '@/app/lib/animations';
import SectionHeading from '@/app/components/ui/SectionHeading';
import Icon from '@/app/components/ui/Icon';

const ORGANIZATIONS = [
  { src: '/logos/monday.jpeg', alt: 'monday.com' },
  { src: '/logos/teikametrics.jpeg', alt: 'Teikametrics' },
  { src: '/logos/adjusti.jpeg', alt: 'adjusti.co' },
  { src: '/logos/record.jpeg', alt: 'Record' },
  { src: '/logos/reichman.jpeg', alt: 'Reichman University' },
  { src: '/logos/icast.svg', alt: 'iCast', contain: true },
];

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="py-20 sm:py-24 md:py-32 bg-[var(--color-bg-primary)]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12 md:space-y-16"
        >
          <SectionHeading title={ABOUT_CONTENT.title} />

          {/* Paragraphs: left-aligned in a comfortable reading measure */}
          <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
            <AnimatePresence initial={false} mode="wait">
              {!expanded ? (
                <motion.div
                  key="summary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-[17px] sm:text-lg md:text-xl leading-[1.75] md:leading-[1.7] text-[var(--color-text-secondary)]">
                    {ABOUT_CONTENT.summary}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="paragraphs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-[17px] sm:text-lg md:text-xl leading-[1.75] md:leading-[1.7] text-[var(--color-text-secondary)]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              className="group mt-6 inline-flex items-center gap-2 h-10 pl-4 pr-3 rounded-full border border-[var(--color-border)] bg-white text-sm font-semibold text-[var(--color-text-primary)] shadow-[var(--shadow-soft)] hover:border-[var(--color-border-strong)] transition-colors"
            >
              {expanded ? 'Summarize' : 'Elaborate'}
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent-secondary)] transition-colors">
                <Icon
                  name="chevronDown"
                  strokeWidth={2.25}
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                />
              </span>
            </button>
          </motion.div>

          {/* Company Logos */}
          <motion.div variants={fadeInUp} className="pt-4">
            <div className="flex items-center gap-4 mb-8">
              <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--color-border)]" />
              <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-[0.14em] text-center">
                Organizations I&apos;ve worked with
              </p>
              <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--color-border)]" />
            </div>
            <ul className="grid grid-cols-3 sm:grid-cols-6 gap-x-4 gap-y-7 sm:gap-6 max-w-3xl mx-auto">
              {ORGANIZATIONS.map((logo) => (
                <li key={logo.alt} className="group flex flex-col items-center gap-3 text-center">
                  <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden bg-white ring-1 ring-[var(--color-border)] shadow-[0_1px_2px_rgba(15,23,42,0.05),0_6px_16px_-8px_rgba(15,26,51,0.18)] transition-[transform,box-shadow] duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[var(--shadow-lift)]">
                    <Image
                      src={logo.src}
                      alt=""
                      fill
                      sizes="64px"
                      className={logo.contain ? 'object-contain p-2' : 'object-cover'}
                    />
                  </div>
                  <span className="text-xs sm:text-[13px] font-medium leading-snug text-[var(--color-text-secondary)]">
                    {logo.alt}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
