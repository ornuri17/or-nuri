'use client';

import { motion, useSpring } from 'framer-motion';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();
  const scaleX = useSpring(progress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-accent-secondary)] to-sky-400 origin-left z-50"
      style={{ scaleX }}
    />
  );
}
