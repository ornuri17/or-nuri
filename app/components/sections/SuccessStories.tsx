'use client';

import { motion } from 'framer-motion';
import { SUCCESS_STORIES } from '@/app/lib/constants';
import { fadeInUp, staggerContainer, defaultViewport } from '@/app/lib/animations';
import Card from '@/app/components/ui/Card';

export default function SuccessStories() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-[var(--color-bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="space-y-12"
        >
          {/* Title */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]">
              Success Stories
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Key achievements that define my journey
            </p>
          </motion.div>

          {/* Stories */}
          <div className="grid md:grid-cols-3 gap-8">
            {SUCCESS_STORIES.map((story) => (
              <motion.div key={story.id} variants={fadeInUp}>
                <Card className="h-full">
                  <div className="space-y-4">
                    {/* Metric */}
                    <div className="text-5xl font-black text-[var(--color-accent-secondary)]">
                      {story.metric}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                      {story.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {story.description}
                    </p>

                    {/* Impact */}
                    <div className="pt-4 border-t border-[var(--color-border)]">
                      <p className="text-sm font-semibold text-[var(--color-accent-primary)]">
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
