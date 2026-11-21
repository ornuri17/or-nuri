"use client";

import { useEffect } from "react";
import Image from "next/image";
import { m as motion, useMotionValue, useScroll, useSpring, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { HERO_CONTENT } from "@/app/lib/constants";
import { fadeInUp } from "@/app/lib/animations";
import Button from "@/app/components/ui/Button";
import { scrollToElement } from "@/app/lib/utils";

// Floating proof cards in front of the portrait. Real facts only.
const FLOATS = [
  { title: "AI agents in production", detail: "Accessibility, end to end" },
  { title: "Acquired, 2020", detail: "adjusti.co → Teikametrics" },
] as const;

/** One depth plane: moves `pointer` px with the pointer and `scroll` px per px scrolled. */
function useLayer(
  px: MotionValue<number>,
  py: MotionValue<number>,
  scrollY: MotionValue<number>,
  pointer: number,
  scroll: number,
  off: boolean,
) {
  const x = useTransform(px, (v) => (off ? 0 : v * pointer));
  const y = useTransform([py, scrollY], ([p, s]: number[]) => (off ? 0 : p * pointer + Math.min(s, 900) * scroll));
  return { x, y };
}

export default function HeroSection() {
  const roles = HERO_CONTENT.subheadline.split("|").map((role) => role.trim());
  const reduced = useReducedMotion();

  // Depth: each plane (ring, portrait, cards) moves at its own rate with scroll and pointer.
  const { scrollY } = useScroll();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spx = useSpring(px, { stiffness: 80, damping: 20 });
  const spy = useSpring(py, { stiffness: 80, damping: 20 });

  useEffect(() => {
    if (reduced || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      px.set((e.clientX / window.innerWidth) * 2 - 1);
      py.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced, px, py]);

  const off = !!reduced;
  const back = useLayer(spx, spy, scrollY, -10, 0.12, off);
  const mid = useLayer(spx, spy, scrollY, 6, -0.04, off);
  const front = useLayer(spx, spy, scrollY, 18, -0.18, off);

  return (
    <section
      id="hero"
      className="hero-backdrop hero-fullscreen relative isolate overflow-hidden -mt-16 pt-16 flex flex-col"
    >
      {/* Faint grid, fading out from the center */}
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />

      <div className="flex-1 flex items-center max-w-6xl mx-auto px-6 sm:px-8 py-[clamp(1rem,3svh,2.5rem)] sm:py-16 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-[clamp(1.5rem,4.5svh,3rem)] sm:gap-10 lg:gap-16 items-center w-full">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <div className="space-y-5 sm:space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.045em] leading-[1.02] text-[var(--color-text-primary)]">
                {HERO_CONTENT.headline}
                <span
                  lang="he"
                  dir="rtl"
                  className="block mt-2 text-2xl sm:text-3xl lg:text-[2rem] font-medium tracking-normal leading-tight text-[var(--color-text-secondary)]"
                >
                  {HERO_CONTENT.hebrewHeadline}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-[1.75rem] font-medium tracking-[-0.02em] leading-[1.35] text-[var(--color-text-primary)]/85 max-w-xl mx-auto lg:mx-0">
                {HERO_CONTENT.tagline}
              </p>
              <p className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-sm sm:text-base font-medium text-[var(--color-text-secondary)]">
                {roles.map((role, index) => (
                  <span key={role} className="inline-flex items-center gap-3">
                    {index > 0 && (
                      <span aria-hidden="true" className="w-1 h-1 rounded-full bg-[var(--color-text-muted)]/60" />
                    )}
                    {role}
                  </span>
                ))}
              </p>
            </div>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 }}
              className="mt-[clamp(1.5rem,4svh,2.5rem)] sm:mt-10 grid grid-cols-2 sm:flex gap-3 justify-center lg:justify-start"
            >
              <Button variant="primary" size="lg" onClick={() => scrollToElement("contact")}>
                {HERO_CONTENT.cta.primary}
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToElement("experience")}>
                {HERO_CONTENT.cta.secondary}
              </Button>
            </motion.div>

            {/* Key numbers: real proof above the fold */}
            <motion.dl
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mt-[clamp(1.75rem,4.5svh,3rem)] grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] text-left shadow-[var(--shadow-soft)]"
            >
              {HERO_CONTENT.stats.map((stat) => (
                <div key={stat.label} className="bg-white/85 backdrop-blur px-4 py-3.5 sm:py-4">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="m-0">
                    <span className="block text-2xl sm:text-[1.65rem] font-bold tracking-[-0.04em] leading-none tabular-nums text-[var(--color-text-primary)]">
                      {stat.value}
                    </span>
                    <span aria-hidden="true" className="mt-1.5 block text-xs sm:text-[0.8rem] leading-snug text-[var(--color-text-secondary)]">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right side - Portrait */}
          <div className="relative order-first lg:order-last">
            <div className="relative mx-auto w-[clamp(10rem,calc(45svh-9rem),15rem)] sm:w-60 lg:w-full lg:max-w-[22rem]">
              {/* Back plane: soft glow and an orbit ring */}
              <motion.div aria-hidden="true" style={back} className="absolute inset-0 -z-10">
                <div className="absolute -inset-6 sm:-inset-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(37,99,235,0.28),rgba(96,165,250,0.12)_55%,transparent)] blur-2xl" />
                <div className="hero-orbit absolute -inset-[14%] rounded-full border border-[rgba(37,99,235,0.14)]" />
              </motion.div>
              {/* Mid plane: the portrait */}
              <motion.div style={mid} className="relative aspect-[4/5] rounded-[1.75rem] lg:rounded-[2rem] overflow-hidden bg-slate-200 ring-1 ring-black/5 shadow-[0_2px_4px_rgba(15,23,42,0.06),0_24px_48px_-16px_rgba(15,26,51,0.35)]">
                <Image
                  src="/images/or-nuri-professional.webp"
                  alt="Or Nuri - Tech Leader & AI Expert"
                  fill
                  className="object-cover object-[center_18%]"
                  priority
                  sizes="(max-width: 1024px) 15rem, 22rem"
                />
                {/* Subtle inner edge for a finished look */}
                <div aria-hidden="true" className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/20" />
              </motion.div>
              {/* Front plane: floating proof cards */}
              <motion.div style={front} className="pointer-events-none absolute inset-0">
                {FLOATS.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.35 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`hero-float absolute flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/85 px-3 py-2 sm:px-3.5 sm:py-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.06),0_14px_32px_-12px_rgba(15,26,51,0.3)] backdrop-blur-md ${
                      i === 0 ? "top-[9%] -left-[22%] sm:-left-[26%] lg:-left-[30%]" : "bottom-[11%] -right-[20%] sm:-right-[24%] lg:-right-[18%]"
                    }`}
                    style={{ animationDelay: `${i * -3}s` }}
                  >
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[var(--color-accent-secondary)] text-white">
                      <svg viewBox="0 0 16 16" className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true">
                        <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-left leading-tight whitespace-nowrap">
                      <span className="block text-[11px] sm:text-[13px] font-semibold text-[var(--color-text-primary)]">{f.title}</span>
                      <span className="block text-[10px] sm:text-xs text-[var(--color-text-secondary)]">{f.detail}</span>
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
