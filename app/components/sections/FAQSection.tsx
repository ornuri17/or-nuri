'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_CONTENT } from '@/app/lib/constants';
import { fadeInUp, staggerContainer } from '@/app/lib/animations';
import SectionHeading from '@/app/components/ui/SectionHeading';
import Icon from '@/app/components/ui/Icon';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-20 sm:py-24 md:py-32 bg-[var(--color-bg-secondary)] border-t border-[var(--color-divider)]"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12 md:space-y-14"
        >
          <SectionHeading title={FAQ_CONTENT.title} />

          <motion.div
            variants={fadeInUp}
            className="rounded-2xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-soft)] divide-y divide-[var(--color-divider)] overflow-hidden"
          >
            {FAQ_CONTENT.items.map((item, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;
              return (
                <div key={index} className={isOpen ? 'bg-[var(--color-bg-secondary)]/60' : undefined}>
                  <h3 className="[text-wrap:pretty]">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="group w-full flex items-start justify-between gap-5 px-5 sm:px-7 py-5 sm:py-6 text-left transition-colors hover:bg-[var(--color-bg-secondary)] focus-visible:outline-offset-[-3px]"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                    >
                      <span className="text-[15px] sm:text-[17px] font-semibold tracking-[-0.01em] leading-snug text-[var(--color-text-primary)]">
                        {item.question}
                      </span>
                      <span
                        className={`mt-px flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full border transition-[transform,background-color,border-color,color] duration-300 ${
                          isOpen
                            ? 'rotate-45 bg-[var(--color-accent-primary)] border-[var(--color-accent-primary)] text-white'
                            : 'bg-white border-[var(--color-border)] text-[var(--color-text-secondary)] group-hover:border-[var(--color-border-strong)]'
                        }`}
                      >
                        <Icon name="plus" strokeWidth={2.25} className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={answerId}
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 sm:px-7 pb-6 pr-14 sm:pr-16 text-[15px] sm:text-base leading-relaxed text-[var(--color-text-secondary)]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
