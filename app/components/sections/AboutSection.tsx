'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ABOUT_CONTENT } from '@/app/lib/constants';
import { fadeInUp, staggerContainer, defaultViewport } from '@/app/lib/animations';

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-32 bg-[var(--color-bg-primary)]"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] text-center"
          >
            {ABOUT_CONTENT.title}
          </motion.h2>

          {/* Paragraphs */}
          <div className="space-y-8 text-center">
            <AnimatePresence initial={false}>
              {!expanded && (
                <motion.p
                  key="summary"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden text-lg md:text-xl text-[var(--color-text-secondary)] leading-loose"
                >
                  {ABOUT_CONTENT.summary}
                </motion.p>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="paragraphs"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden space-y-8"
                >
                  {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-loose"
                    >
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div variants={fadeInUp} className="flex justify-center">
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent-secondary)] bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-full px-3 py-1 cursor-pointer transition-colors"
              >
                {expanded ? 'Summarize' : 'Elaborate'}
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </motion.div>
          </div>

          {/* Company Logos */}
          <motion.div
            variants={fadeInUp}
            className="pt-8"
          >
            <p className="text-sm font-medium text-[var(--color-text-muted)] text-center mb-6 uppercase tracking-wide">
              Organizations I've worked with
            </p>
            <div className="grid grid-cols-3 md:flex md:flex-wrap gap-x-4 gap-y-12 md:gap-x-10 md:gap-y-10 max-w-4xl mx-auto mt-6 place-items-center md:justify-center md:items-center">
              {[
                { src: '/logos/monday.jpeg', alt: 'monday.com', width: 70, height: 24, mdWidth: 100, mdHeight: 32 },
                { src: '/logos/teikametrics.jpeg', alt: 'Teikametrics', width: 70, height: 24, mdWidth: 100, mdHeight: 32 },
                { src: '/logos/adjusti.jpeg', alt: 'adjusti.co', width: 60, height: 24, mdWidth: 90, mdHeight: 32 },
                { src: '/logos/record.jpeg', alt: 'Record', width: 60, height: 24, mdWidth: 90, mdHeight: 32 },
                { src: '/logos/reichman.jpeg', alt: 'Reichman University', width: 60, height: 24, mdWidth: 90, mdHeight: 32 },
                { src: '/logos/icast.svg', alt: 'iCast', width: 55, height: 24, mdWidth: 85, mdHeight: 32 },
              ].map((logo, index) => (
                <div
                  key={logo.alt}
                  className="relative opacity-80 hover:opacity-100 md:hover:scale-110 transition-all duration-300 h-10 md:h-12 flex items-center justify-center w-full md:w-auto"
                  style={{ minHeight: '40px' }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain max-h-full md:hidden"
                  />
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.mdWidth}
                    height={logo.mdHeight}
                    className="object-contain max-h-full hidden md:block"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
