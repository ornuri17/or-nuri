'use client';

import { motion } from 'framer-motion';
import { ABOUT_CONTENT } from '@/app/lib/constants';
import { fadeInUp, staggerContainer, defaultViewport } from '@/app/lib/animations';

export default function AboutSection() {
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
          viewport={defaultViewport}
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
            {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={fadeInUp}
                className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-loose"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Highlights */}
          <motion.div
            variants={fadeInUp}
            className="bg-[var(--color-bg-tertiary)] rounded-2xl p-10 md:p-12 border border-[var(--color-border)]"
          >
            <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-8 text-center">
              Highlights
            </h3>
            <ul className="space-y-6 max-w-3xl mx-auto">
              {ABOUT_CONTENT.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-[var(--color-text-secondary)] text-lg"
                >
                  <svg
                    className="w-6 h-6 text-[var(--color-accent-secondary)] flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
