/**
 * Utility Functions
 */

/**
 * Combine class names conditionally
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format date for display
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Scroll to element with smooth behavior
 */
export function scrollToElement(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    // Use scrollIntoView for better mobile compatibility
    try {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } catch (e) {
      // Fallback for browsers that don't support smooth scroll
      element.scrollIntoView(true);
    }
  }
}

/**
 * Check if reduced motion is preferred
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Clamp a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
