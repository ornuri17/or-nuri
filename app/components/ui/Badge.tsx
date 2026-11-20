'use client';

import { cn } from '@/app/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  const variantStyles = {
    default: 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border-[var(--color-border)]',
    primary: 'bg-[var(--color-accent-primary)] text-white border-transparent',
    secondary: 'bg-[var(--color-accent-soft)] text-[var(--color-accent-secondary-hover)] border-blue-100',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center h-7 px-3 rounded-full text-[13px] font-medium border transition-colors duration-200',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
