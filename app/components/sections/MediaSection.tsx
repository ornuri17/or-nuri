'use client';

import { motion } from 'framer-motion';
import { MEDIA_COVERAGE } from '@/app/lib/constants';
import { fadeInUp, staggerContainer } from '@/app/lib/animations';
import SectionHeading from '@/app/components/ui/SectionHeading';
import Icon from '@/app/components/ui/Icon';

export default function MediaSection() {
  return (
    <section
      id="media"
      className="py-20 sm:py-24 md:py-32 bg-[var(--color-bg-secondary)] border-y border-[var(--color-divider)]"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12 md:space-y-16"
        >
          <SectionHeading title={MEDIA_COVERAGE.title} description={MEDIA_COVERAGE.description} />

          {/* Media Items */}
          <div className="space-y-5 lg:space-y-6">
            {MEDIA_COVERAGE.items.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[var(--color-border)] shadow-[var(--shadow-soft)] transition-[box-shadow,border-color] duration-300 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-lift)]"
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-3 md:gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] leading-snug text-[var(--color-text-primary)] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[15px] sm:text-base leading-relaxed text-[var(--color-text-secondary)]">
                        {item.description}
                      </p>
                    </div>
                    <span className="self-start inline-flex items-center h-7 px-3 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[13px] font-medium tabular-nums text-[var(--color-text-secondary)] whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2.5 pt-6 border-t border-[var(--color-divider)]">
                    {item.links.map((link) => {
                      // Extract domain from URL for favicon
                      const domain = new URL(link.url).hostname;
                      return (
                        <a
                          key={link.outlet}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2.5 h-10 pl-2 pr-3.5 rounded-full bg-white border border-[var(--color-border)] text-sm font-semibold text-[var(--color-text-primary)] shadow-[var(--shadow-soft)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-px hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-lift)]"
                        >
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-bg-secondary)] ring-1 ring-[var(--color-border)] overflow-hidden">
                            <img
                              src={`https://www.google.com/s2/favicons?domain=${domain}&sz=32`}
                              alt={`${link.outlet} favicon`}
                              className="w-4 h-4"
                            />
                          </span>
                          <span>{link.outlet}</span>
                          <Icon
                            name="arrowUpRight"
                            strokeWidth={2}
                            className="w-3.5 h-3.5 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-secondary)] transition-colors"
                          />
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
