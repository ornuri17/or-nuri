'use client';

import { motion } from 'framer-motion';
import { LEADERSHIP_PILLARS } from '@/app/lib/constants';
import { fadeInUp, staggerContainer, defaultViewport } from '@/app/lib/animations';
import Card from '@/app/components/ui/Card';

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="py-16 sm:py-20 md:py-32 bg-[var(--color-bg-primary)]"
    >
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
              Leadership Philosophy
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Three principles that guide my approach to building products and leading teams
            </p>
          </motion.div>

          {/* Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            {LEADERSHIP_PILLARS.map((pillar) => (
              <motion.div key={pillar.id} variants={fadeInUp}>
                <Card className="h-full">
                  <div className="text-center space-y-4">
                    {/* Icon */}
                    <div className="text-5xl">{pillar.icon}</div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {pillar.description}
                    </p>
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
