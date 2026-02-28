"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "@/app/lib/constants";
import { fadeInUp, fadeInDown } from "@/app/lib/animations";
import Button from "@/app/components/ui/Button";
import { scrollToElement } from "@/app/lib/utils";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-[100vh] flex items-center justify-center bg-gradient-to-br from-[var(--color-bg-primary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 sm:space-y-10 text-center lg:text-left">
            <motion.div
              variants={fadeInDown}
              initial="hidden"
              animate="visible"
              className="space-y-3 sm:space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[var(--color-text-primary)] leading-tight">
                {HERO_CONTENT.headline}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--color-text-secondary)] font-medium lg:whitespace-nowrap">
                {HERO_CONTENT.subheadline}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToElement("contact")}
              >
                {HERO_CONTENT.cta.primary}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToElement("experience")}
              >
                {HERO_CONTENT.cta.secondary}
              </Button>
            </motion.div>
          </div>

          {/* Right side - Image/Visual */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              {/* Gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] rounded-full opacity-20 blur-3xl" />
              {/* Profile image */}
              <div className="relative w-full h-full rounded-full border-4 border-[var(--color-border)] overflow-hidden shadow-2xl">
                <Image
                  src="/images/or-nuri-professional.jpg"
                  alt="Or Nuri - Tech Leader & AI Expert"
                  fill
                  className="object-cover object-[center_15%]"
                  priority
                  sizes="(max-width: 640px) 20rem, (max-width: 768px) 24rem, 28rem"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <motion.button
          onClick={() => scrollToElement("about")}
          className="flex flex-col items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Scroll to content"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
}
