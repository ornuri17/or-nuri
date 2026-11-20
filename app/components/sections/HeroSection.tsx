"use client";

import Image from "next/image";
import { m as motion } from "framer-motion";
import { HERO_CONTENT } from "@/app/lib/constants";
import { fadeInUp } from "@/app/lib/animations";
import Button from "@/app/components/ui/Button";
import { scrollToElement } from "@/app/lib/utils";

export default function HeroSection() {
  const roles = HERO_CONTENT.subheadline.split("|").map((role) => role.trim());

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
              {/* Soft glow behind the portrait */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 sm:-inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(37,99,235,0.28),rgba(96,165,250,0.12)_55%,transparent)] blur-2xl"
              />
              <div className="relative aspect-[4/5] rounded-[1.75rem] lg:rounded-[2rem] overflow-hidden bg-slate-200 ring-1 ring-black/5 shadow-[0_2px_4px_rgba(15,23,42,0.06),0_24px_48px_-16px_rgba(15,26,51,0.35)]">
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
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
