"use client";

import { motion } from "framer-motion";
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
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ";

  const variantStyles = {
    primary:
      "border-2 border-transparent bg-[var(--color-accent-primary)] text-white hover:bg-[var(--color-accent-primary-hover)] focus:ring-[var(--color-accent-primary)]",
    secondary:
      "border-2 border-transparent bg-[var(--color-accent-secondary)] text-white hover:bg-[var(--color-accent-secondary-hover)] focus:ring-[var(--color-accent-secondary)]",
    outline:
      "border-2 border-[var(--color-accent-primary)] bg-transparent text-[var(--color-accent-primary)] hover:bg-[var(--color-accent-primary-hover)] hover:text-white hover:border-[var(--color-accent-primary-hover)] focus:ring-[var(--color-accent-primary)]",
  };

  const sizeStyles = {
    sm: "px-6 py-2 text-sm min-h-[40px]",
    md: "px-8 py-3 text-base min-h-[44px]",
    lg: "px-10 py-4 text-lg min-h-[52px]",
  };

  const Component = href ? motion.a : motion.button;

  const props = href
    ? {
        href,
        target: href.startsWith("http") ? "_blank" : undefined,
        rel: href.startsWith("http") ? "noopener noreferrer" : undefined,
      }
    : { onClick, type: "button" as const, disabled };

  return (
    <Component
      {...props}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      {children}
    </Component>
  );
}
