"use client";

import { MotionConfig } from "framer-motion";

/**
 * Framer Motion animations follow the visitor's OS setting:
 * with prefers-reduced-motion on, transforms are skipped and only opacity fades remain.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
