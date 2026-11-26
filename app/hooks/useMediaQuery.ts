'use client';

import { useSyncExternalStore } from 'react';

/**
 * Hook to detect media query matches
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mediaQuery = window.matchMedia(query);
      const handler = () => onStoreChange();

      // Modern browsers, with a fallback for older Safari
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
      } else {
        mediaQuery.addListener(handler);
        return () => mediaQuery.removeListener(handler);
      }
    },
    () => window.matchMedia(query).matches,
    // Server render: no window, default to no match
    () => false
  );
}

// Common breakpoints
export const BREAKPOINTS = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
};

// Convenience hooks
export const useIsMobile = () => useMediaQuery('(max-width: 767px)');
export const useIsTablet = () => useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
export const useIsDesktop = () => useMediaQuery(BREAKPOINTS.lg);
