'use client';

import { useEffect, useState } from 'react';
import { clamp } from '../lib/utils';

/**
 * Track scroll progress from 0 to 1
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = scrollHeight > 0 ? clamp(scrolled / scrollHeight, 0, 1) : 0;
      setProgress(progress);
    };

    // Initial calculation
    updateProgress();

    // Update on scroll
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return progress;
}
