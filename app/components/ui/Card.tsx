'use client';

import { motion } from 'framer-motion';
import { cn } from '@/app/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  className,
  hover = true,
  padding = 'md',
}: CardProps) {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <motion.div
      className={cn(
        'bg-[var(--color-bg-tertiary)] rounded-2xl border border-[var(--color-border)] transition-all duration-300',
        paddingStyles[padding],
        hover && 'hover:shadow-lg hover:border-[var(--color-accent-secondary)]',
        className
      )}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
