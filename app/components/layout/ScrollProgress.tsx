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
      className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-accent-secondary)] origin-left z-50"
      style={{ scaleX }}
    />
  );
}
