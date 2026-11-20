'use client';

import { cn } from '@/app/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

/**
 * Surface used across sections: white, hairline border, soft shadow,
 * a gentle lift on hover (CSS only, so reduced motion turns it off).
 */
export default function Card({
  children,
  className,
  hover = true,
  padding = 'md',
}: CardProps) {
  const paddingStyles = {
    sm: 'p-5',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-10',
  };

  return (
    <div
      className={cn(
        'relative bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-soft)] transition-[box-shadow,border-color,transform] duration-300 ease-out',
        paddingStyles[padding],
        hover && 'hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-lift)]',
        className
      )}
    >
      {children}
    </div>
  );
}
