"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, SITE_CONFIG, HERO_CONTENT } from "@/app/lib/constants";
import { cn, scrollToElement } from "@/app/lib/utils";
import { useIsMobile } from "@/app/hooks/useMediaQuery";
import Button from "@/app/components/ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    setIsMobileMenuOpen(false);
    // Small delay to let menu close before scrolling
    setTimeout(() => {
      scrollToElement(id);
    }, 100);
  };

  const solid = isScrolled || isMobileMenuOpen;

  return (
    <>
      <motion.nav
        aria-label="Main"
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-[background-color,border-color,box-shadow] duration-300 border-b",
          solid
            ? "bg-white/75 backdrop-blur-xl backdrop-saturate-150 border-[var(--color-border)]/80 shadow-[0_1px_0_rgba(15,23,42,0.02),0_8px_24px_-16px_rgba(15,23,42,0.18)]"
            : "bg-transparent border-transparent",
        )}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-6xl mx-auto w-full px-6 sm:px-8">
          {/* Desktop: 3-column grid layout */}
          <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] items-center h-16 w-full">
            {/* Left: Logo */}
            <div className="flex justify-start">
              <button
                onClick={() => scrollToElement("hero")}
                className="text-[17px] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)] hover:text-[var(--color-accent-secondary)] transition-colors"
              >
                {SITE_CONFIG.name}
              </button>
            </div>

            {/* Center: Navigation */}
            <div className="flex items-center justify-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="h-9 px-2.5 lg:px-3.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] rounded-full hover:bg-[var(--color-bg-tertiary)]/70 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right: primary action (keeps the grid balanced below lg) */}
            <div className="lg:hidden" />
            <div className="hidden lg:flex justify-end">
              <Button variant="primary" size="sm" onClick={() => scrollToElement("contact")}>
                {HERO_CONTENT.cta.primary}
              </Button>
            </div>
          </div>

          {/* Mobile: Simple flex layout */}
          <div className="flex md:hidden items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToElement("hero")}
              className="text-[17px] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]"
            >
              {SITE_CONFIG.name}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="-mr-2 w-11 h-11 flex items-center justify-center rounded-full hover:bg-[var(--color-bg-tertiary)] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-5 h-5 text-[var(--color-text-primary)]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && isMobile && (
            <motion.div
              className="md:hidden overflow-hidden border-t border-[var(--color-border)]/80"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="px-4 py-3">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center w-full h-12 px-4 text-left text-base font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] rounded-xl transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-16" />
    </>
  );
}
