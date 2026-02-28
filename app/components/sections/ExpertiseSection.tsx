'use client';

import { motion } from 'framer-motion';
import { EXPERTISE_AREAS } from '@/app/lib/constants';
import { fadeInUp, staggerContainer, defaultViewport } from '@/app/lib/animations';
import Card from '@/app/components/ui/Card';
import Badge from '@/app/components/ui/Badge';

export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="py-20 md:py-32 bg-[var(--color-bg-secondary)]"
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
              Technical Expertise
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              A decade of experience across the full technology stack
            </p>
          </motion.div>

          {/* Expertise Areas */}
          <div className="grid md:grid-cols-2 gap-8">
            {EXPERTISE_AREAS.map((area) => (
              <motion.div key={area.id} variants={fadeInUp}>
                <Card className="h-full">
                  <div className="space-y-4">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                      {area.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {area.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 pt-4">
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
