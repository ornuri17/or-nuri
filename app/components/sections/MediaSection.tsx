'use client';

import { motion } from 'framer-motion';
import { MEDIA_COVERAGE } from '@/app/lib/constants';
import { fadeInUp, staggerContainer, defaultViewport } from '@/app/lib/animations';

export default function MediaSection() {
  return (
    <section
      id="media"
      className="py-16 sm:py-20 md:py-32 bg-[var(--color-bg-secondary)]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          {/* Title & Description */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]">
              {MEDIA_COVERAGE.title}
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              {MEDIA_COVERAGE.description}
            </p>
          </motion.div>

          {/* Media Items */}
          <div className="space-y-12">
            {MEDIA_COVERAGE.items.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 md:p-10 border border-[var(--color-border)] hover:shadow-lg transition-shadow"
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-base text-[var(--color-text-secondary)]">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-[var(--color-text-muted)] whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--color-border)]">
                    {item.links.map((link) => {
                      // Extract domain from URL for favicon
                      const domain = new URL(link.url).hostname;
                      return (
                        <a
                          key={link.outlet}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-[var(--color-bg-tertiary)] to-white hover:from-[var(--color-accent-secondary)] hover:to-[var(--color-accent-secondary-hover)] text-[var(--color-text-primary)] hover:text-white rounded-xl transition-all shadow-sm hover:shadow-md text-sm font-semibold border border-[var(--color-border)] hover:border-transparent"
                        >
                          <img
                            src={`https://www.google.com/s2/favicons?domain=${domain}&sz=32`}
                            alt={`${link.outlet} favicon`}
                            className="w-5 h-5"
                          />
                          <span>{link.outlet}</span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
