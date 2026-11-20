"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

/**
 * Framer Motion, loaded lean: components use the lightweight `m` element with only the
 * DOM animation features (no layout/drag), which keeps most of the library out of the bundle.
 * Animations follow the visitor's OS setting: with prefers-reduced-motion on, transforms are
 * skipped and only opacity fades remain.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
