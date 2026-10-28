'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ADVISORY_CONTENT } from '@/app/lib/constants';
import { fadeInUp, staggerContainer } from '@/app/lib/animations';
import Card from '@/app/components/ui/Card';
import Badge from '@/app/components/ui/Badge';
import Button from '@/app/components/ui/Button';
import SectionHeading from '@/app/components/ui/SectionHeading';
import Icon from '@/app/components/ui/Icon';
import { scrollToElement } from '@/app/lib/utils';

export default function AdvisorySection() {
  return (
    <section
      id="advisory"
      className="py-20 sm:py-24 md:py-32 bg-[var(--color-bg-primary)]"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-5 lg:space-y-6"
        >
          <SectionHeading
            title={ADVISORY_CONTENT.title}
            description={ADVISORY_CONTENT.description}
            className="mb-7 md:mb-10"
          />

          {/* Current Roles */}
          {ADVISORY_CONTENT.roles.map((role, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card>
                <div className="space-y-5">
                  {/* Company Name & Logo */}
                  <div className="flex items-center gap-4">
                    {role.logo && (
                      <div className="relative w-14 h-14 flex-shrink-0 rounded-2xl overflow-hidden bg-white ring-1 ring-[var(--color-border)] shadow-[var(--shadow-soft)]">
                        <Image
                          src={role.logo}
                          alt={`${role.company} logo`}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
                      {role.company}
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-[var(--color-text-secondary)]">
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
            <Card hover={false} className="bg-gradient-to-b from-white to-[var(--color-bg-secondary)]">
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
                  How I Can Help
                </h3>
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {ADVISORY_CONTENT.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-3 text-[15px] sm:text-base leading-relaxed text-[var(--color-text-secondary)]"
                    >
                      <span className="mt-[3px] flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent-secondary)] ring-1 ring-inset ring-blue-100">
                        <Icon name="check" strokeWidth={2.5} className="w-3 h-3" />
                      </span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="pt-6 text-center">
            <Button variant="primary" size="lg" onClick={() => scrollToElement('contact')}>
              Let&apos;s Discuss Your Startup
              <Icon name="arrowRight" strokeWidth={2} className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
