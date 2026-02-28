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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="space-y-12"
        >
          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] text-center"
          >
            {ABOUT_CONTENT.title}
          </motion.h2>

          {/* Paragraphs */}
          <div className="space-y-6">
            {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={fadeInUp}
                className="text-lg text-[var(--color-text-secondary)] leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Highlights */}
          <motion.div
            variants={fadeInUp}
            className="bg-[var(--color-bg-tertiary)] rounded-2xl p-8 border border-[var(--color-border)]"
          >
            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-6">
              Highlights
            </h3>
            <ul className="space-y-4">
              {ABOUT_CONTENT.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[var(--color-text-secondary)]"
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
