'use client';

import { motion } from 'framer-motion';
import { SUCCESS_STORIES } from '@/app/lib/constants';
import { fadeInUp, staggerContainer } from '@/app/lib/animations';
import Card from '@/app/components/ui/Card';
import SectionHeading from '@/app/components/ui/SectionHeading';
import Icon, { IconTile } from '@/app/components/ui/Icon';

export default function SuccessStories() {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-[var(--color-bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12 md:space-y-16"
        >
          <SectionHeading
            title="Success Stories"
            description="Key achievements that define my journey"
          />

          {/* Stories */}
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
            {SUCCESS_STORIES.map((story) => (
              <motion.div key={story.id} variants={fadeInUp}>
                <Card className="h-full overflow-hidden">
                  {/* Soft corner glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-24 -right-24 w-56 h-56 rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.10),transparent)]"
                  />
                  <div className="relative flex flex-col h-full">
                    <div className="space-y-4 flex-grow">
                      {/* Metric & Icon */}
                      <div className="flex items-start justify-between gap-3">
                        <div
                          className={`${story.metricClassName ?? 'text-3xl sm:text-4xl'} text-gradient font-bold tracking-[-0.035em] leading-[1.1] pb-1`}
                        >
                          {story.metric}
                        </div>
                        <IconTile id={story.id} fallback={story.icon} />
                      </div>

                      {/* Title */}
                      <h3 className="text-[19px] sm:text-xl font-semibold tracking-[-0.02em] leading-snug text-[var(--color-text-primary)]">
                        {story.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[15px] sm:text-base leading-relaxed text-[var(--color-text-secondary)]">
                        {story.description}
                      </p>

                      {story.link && (
                        <a
                          href={story.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block text-sm font-semibold leading-relaxed text-[var(--color-accent-secondary)] hover:text-[var(--color-accent-secondary-hover)] transition-colors"
                        >
                          <span className="underline decoration-[var(--color-accent-secondary)]/30 underline-offset-4 group-hover:decoration-current transition-colors">
                            {story.link.label}
                          </span>
                          <Icon
                            name="arrowUpRight"
                            strokeWidth={2}
                            className="inline-block align-[-2px] ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </a>
                      )}
                    </div>

                    {/* Impact - Always at bottom */}
                    <div className="mt-6 pt-5 border-t border-[var(--color-divider)] flex items-start gap-3">
                      <span className="mt-[2px] flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-accent-primary)] text-white">
                        <Icon name="check" strokeWidth={2.75} className="w-3 h-3" />
                      </span>
                      <p className="text-sm font-semibold leading-relaxed text-[var(--color-text-primary)]">
                        {story.impact}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
