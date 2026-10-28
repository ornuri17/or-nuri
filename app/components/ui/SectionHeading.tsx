'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/app/lib/animations';
import { cn } from '@/app/lib/utils';

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

/** Shared section title: small accent bar, tight display type, calm subtitle. */
export default function SectionHeading({ title, description, className }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn('flex flex-col items-center text-center gap-4 sm:gap-5', className)}
    >
      <span aria-hidden="true" className="section-kicker" />
      <h2 className="text-[2rem] leading-[1.15] sm:text-4xl md:text-5xl md:leading-[1.08] font-semibold tracking-[-0.03em] text-[var(--color-text-primary)]">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[var(--color-text-secondary)] max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
