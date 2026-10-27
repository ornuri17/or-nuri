"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "@/app/lib/constants";
import { fadeInUp } from "@/app/lib/animations";
import Button from "@/app/components/ui/Button";
import Icon from "@/app/components/ui/Icon";
import { scrollToElement } from "@/app/lib/utils";

export default function HeroSection() {
  const roles = HERO_CONTENT.subheadline.split("|").map((role) => role.trim());

  return (
    <section
      id="hero"
      className="hero-backdrop relative isolate overflow-hidden -mt-16 pt-16 sm:min-h-[100svh] flex flex-col"
    >
      {/* Faint grid, fading out from the center */}
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />

      <div className="flex-1 flex items-center max-w-6xl mx-auto px-6 sm:px-8 pt-10 pb-16 sm:py-16 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center w-full">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="space-y-5 sm:space-y-6"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.045em] leading-[1.02] text-[var(--color-text-primary)]">
                {HERO_CONTENT.headline}
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
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 }}
              className="mt-8 sm:mt-10 grid grid-cols-2 sm:flex gap-3 justify-center lg:justify-start"
            >
              <Button variant="primary" size="lg" onClick={() => scrollToElement("contact")}>
                {HERO_CONTENT.cta.primary}
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToElement("experience")}>
                {HERO_CONTENT.cta.secondary}
              </Button>
            </motion.div>
          </div>

          {/* Right side - Portrait */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative mx-auto w-52 sm:w-60 lg:w-full lg:max-w-[22rem]">
              {/* Soft glow behind the portrait */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 sm:-inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(37,99,235,0.28),rgba(96,165,250,0.12)_55%,transparent)] blur-2xl"
              />
              <div className="relative aspect-[4/5] rounded-[1.75rem] lg:rounded-[2rem] overflow-hidden bg-slate-200 ring-1 ring-black/5 shadow-[0_2px_4px_rgba(15,23,42,0.06),0_24px_48px_-16px_rgba(15,26,51,0.35)]">
                <Image
                  src="/images/or-nuri-professional.jpg"
                  alt="Or Nuri - Tech Leader & AI Expert"
                  fill
                  className="object-cover object-[center_18%]"
                  priority
                  sizes="(max-width: 640px) 13rem, (max-width: 1024px) 15rem, 22rem"
                />
                {/* Subtle inner edge for a finished look */}
                <div aria-hidden="true" className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very short viewports */}
      <motion.div
        className="scroll-indicator hidden sm:flex justify-center pb-6 md:pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <button
          onClick={() => scrollToElement("about")}
          className="group flex flex-col items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
          aria-label="Scroll to content"
        >
          <span className="text-xs font-medium tracking-wide">Scroll to explore</span>
          <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[var(--color-border)] bg-white/70 shadow-[var(--shadow-soft)] group-hover:border-[var(--color-border-strong)] transition-colors scroll-cue">
            <Icon name="arrowDown" className="w-4 h-4" />
          </span>
        </button>
      </motion.div>
    </section>
  );
}
