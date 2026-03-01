'use client';

import { motion } from 'framer-motion';
import { ADVISORY_CONTENT } from '@/app/lib/constants';
import { fadeInUp, staggerContainer, defaultViewport } from '@/app/lib/animations';
import Card from '@/app/components/ui/Card';
import Badge from '@/app/components/ui/Badge';
import Button from '@/app/components/ui/Button';
import { scrollToElement } from '@/app/lib/utils';

export default function AdvisorySection() {
  return (
    <section
      id="advisory"
      className="py-16 sm:py-20 md:py-32 bg-[var(--color-bg-secondary)]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="space-y-12"
        >
          {/* Title & Description */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]">
              {ADVISORY_CONTENT.title}
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              {ADVISORY_CONTENT.description}
            </p>
          </motion.div>

          {/* Current Roles */}
          {ADVISORY_CONTENT.roles.map((role, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                    {role.company}
                  </h3>
                  <p className="text-lg text-[var(--color-text-secondary)]">
                    {role.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {role.focus.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

          {/* Focus Areas */}
          <motion.div variants={fadeInUp}>
            <Card>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                  How I Can Help
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {ADVISORY_CONTENT.focusAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                    >
                      <svg
                        className="w-6 h-6 text-[var(--color-accent-secondary)] flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToElement('contact')}
            >
              Let's Discuss Your Startup
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
