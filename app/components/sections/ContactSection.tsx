'use client';

import { motion } from 'framer-motion';
import { CONTACT_CONTENT, SITE_CONFIG } from '@/app/lib/constants';
import { fadeInUp, staggerContainer, defaultViewport } from '@/app/lib/animations';
import Button from '@/app/components/ui/Button';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-br from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center space-y-12"
        >
          {/* Title & Description */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]">
              {CONTACT_CONTENT.title}
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              {CONTACT_CONTENT.description}
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          >
            {/* Email */}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="group flex flex-col items-center gap-4 p-6 bg-white rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent-secondary)] hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-[var(--color-bg-tertiary)] rounded-full flex items-center justify-center group-hover:bg-[var(--color-accent-secondary)] transition-colors">
                <svg
                  className="w-8 h-8 text-[var(--color-text-primary)] group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-[var(--color-text-primary)] mb-1">
                  Email
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">
                  {SITE_CONFIG.email}
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-6 bg-white rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent-secondary)] hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-[var(--color-bg-tertiary)] rounded-full flex items-center justify-center group-hover:bg-[var(--color-accent-secondary)] transition-colors">
                <svg
                  className="w-8 h-8 text-[var(--color-text-primary)] group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-[var(--color-text-primary)] mb-1">
                  LinkedIn
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">
                  Connect with me
                </div>
              </div>
            </a>

            {/* GitHub */}
            {SITE_CONFIG.github && (
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 p-6 bg-white rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent-secondary)] hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-[var(--color-bg-tertiary)] rounded-full flex items-center justify-center group-hover:bg-[var(--color-accent-secondary)] transition-colors">
                  <svg
                    className="w-8 h-8 text-[var(--color-text-primary)] group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-text-primary)] mb-1">
                    GitHub
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    View my code
                  </div>
                </div>
              </a>
            )}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Button
              variant="primary"
              size="lg"
              href={SITE_CONFIG.linkedin}
            >
              {CONTACT_CONTENT.cta.primary}
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/resume/or-nuri-cv.pdf"
            >
              {CONTACT_CONTENT.cta.secondary}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
