'use client';

import { motion } from 'framer-motion';
import { EXPERTISE_AREAS } from '@/app/lib/constants';
import { fadeInUp, staggerContainer } from '@/app/lib/animations';
import Card from '@/app/components/ui/Card';
import Badge from '@/app/components/ui/Badge';
import SectionHeading from '@/app/components/ui/SectionHeading';
import { IconTile } from '@/app/components/ui/Icon';

export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="py-20 sm:py-24 md:py-32 bg-[var(--color-bg-secondary)] border-y border-[var(--color-divider)]"
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
            title="Technical Expertise"
            description="A decade of experience across the full technology stack"
          />

          {/* Expertise Areas */}
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {EXPERTISE_AREAS.map((area) => (
              <motion.div key={area.id} variants={fadeInUp}>
                <Card className="h-full">
                  <div className="flex flex-col h-full gap-4">
                    <div className="flex items-center gap-4">
                      <IconTile id={area.id} fallback={area.icon} />
                      <h3 className="text-xl font-semibold tracking-[-0.015em] text-[var(--color-text-primary)]">
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-[15px] sm:text-base leading-relaxed text-[var(--color-text-secondary)]">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                      {area.skills.map((skill) => (
                        <Badge key={skill} variant="default">
                          {skill}
                        </Badge>
                      ))}
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
