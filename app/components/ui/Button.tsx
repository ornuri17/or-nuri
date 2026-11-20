"use client";

import { cn } from "@/app/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

/**
 * One button system: pill shape, three heights (36 / 44 / 48 px), soft depth.
 * Hover and press motion is CSS, so prefers-reduced-motion switches it off.
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-[-0.01em] transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out hover:-translate-y-px active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--color-accent-secondary)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0";

  const variantStyles = {
    primary:
      "bg-[var(--color-accent-primary)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_1px_2px_rgba(15,23,42,0.2),0_8px_20px_-8px_rgba(15,26,51,0.45)] hover:bg-[var(--color-accent-primary-hover)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_1px_2px_rgba(15,23,42,0.2),0_12px_28px_-10px_rgba(15,26,51,0.55)]",
    secondary:
      "bg-[var(--color-accent-secondary)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_20px_-8px_rgba(37,99,235,0.55)] hover:bg-[var(--color-accent-secondary-hover)]",
    outline:
      "bg-white/80 text-[var(--color-text-primary)] border border-[var(--color-border)] shadow-[var(--shadow-soft)] backdrop-blur hover:border-[var(--color-border-strong)] hover:bg-white hover:shadow-[var(--shadow-lift)]",
  };

  const sizeStyles = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-[15px]",
    lg: "h-12 px-6 text-[15px] sm:px-7 sm:text-base",
  };

  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
