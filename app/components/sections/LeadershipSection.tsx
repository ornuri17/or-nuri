'use client';

import { motion } from 'framer-motion';
import { LEADERSHIP_PILLARS } from '@/app/lib/constants';
import { fadeInUp, staggerContainer } from '@/app/lib/animations';
import Card from '@/app/components/ui/Card';
import SectionHeading from '@/app/components/ui/SectionHeading';
import { IconTile } from '@/app/components/ui/Icon';

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="py-20 sm:py-24 md:py-32 bg-[var(--color-bg-primary)]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12 md:space-y-16"
        >
          <SectionHeading
            title="Leadership Philosophy"
            description="Three principles that guide my approach to building products and leading teams"
          />

          {/* Pillars */}
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {LEADERSHIP_PILLARS.map((pillar) => (
              <motion.div key={pillar.id} variants={fadeInUp}>
                <Card className="h-full">
                  <div className="space-y-4">
                    <IconTile id={pillar.id} fallback={pillar.icon} />
                    <h3 className="pt-1 text-xl font-semibold tracking-[-0.015em] text-[var(--color-text-primary)]">
                      {pillar.title}
                    </h3>
                    <p className="text-[15px] sm:text-base leading-relaxed text-[var(--color-text-secondary)]">
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
