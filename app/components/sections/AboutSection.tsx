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
