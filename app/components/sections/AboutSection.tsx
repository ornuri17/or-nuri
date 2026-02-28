'use client';

import Image from 'next/image';
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

          {/* Company Logos */}
          <motion.div
            variants={fadeInUp}
            className="py-8"
          >
            <p className="text-sm font-medium text-[var(--color-text-muted)] text-center mb-8 uppercase tracking-wide">
              Organizations I've worked with
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center max-w-3xl mx-auto">
              {[
                { src: '/logos/monday.jpeg', alt: 'monday.com', width: 100, height: 30 },
                { src: '/logos/teikametrics.jpeg', alt: 'Teikametrics', width: 100, height: 30 },
                { src: '/logos/adjusti.jpeg', alt: 'adjusti.co', width: 90, height: 30 },
                { src: '/logos/record.jpeg', alt: 'Record', width: 90, height: 30 },
                { src: '/logos/reichman.jpeg', alt: 'Reichman University', width: 90, height: 30 },
                { src: '/logos/icast.svg', alt: 'iCast', width: 80, height: 30 },
              ].map((logo, index) => (
                <motion.div
                  key={logo.alt}
                  variants={fadeInUp}
                  className="relative grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

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
