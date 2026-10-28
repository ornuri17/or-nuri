'use client';

import { motion } from 'framer-motion';
import { CONTACT_CONTENT, SITE_CONFIG } from '@/app/lib/constants';
import { fadeInUp, staggerContainer } from '@/app/lib/animations';
import Icon from '@/app/components/ui/Icon';

const LINKEDIN_PATH =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z';

function ContactCard({
  href,
  external,
  icon,
  label,
  detail,
}: {
  href: string;
  external?: boolean;
  icon: React.ReactNode;
  label: string;
  detail: string;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group relative flex items-center md:flex-col md:items-start gap-4 p-5 md:p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-left transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07] hover:border-white/20 focus-visible:outline-white"
    >
      <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white text-[var(--color-accent-primary)] shadow-[0_8px_24px_-8px_rgba(96,165,250,0.5)]">
        {icon}
      </span>
      <span className="flex-1 min-w-0">
        <span className="block font-semibold text-white">{label}</span>
        <span className="block mt-0.5 text-sm text-slate-300 truncate">{detail}</span>
      </span>
      <Icon
        name="arrowUpRight"
        strokeWidth={2}
        className="md:absolute md:top-6 md:right-6 w-4 h-4 text-slate-400 transition-[color,transform] duration-200 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden py-20 sm:py-24 md:py-32 bg-[var(--color-accent-primary)] text-white"
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(48rem_24rem_at_50%_0%,rgba(59,130,246,0.35),transparent_70%)]"
      />
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12 md:space-y-14"
        >
          {/* Title & Description */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center text-center gap-4 sm:gap-5">
            <span aria-hidden="true" className="section-kicker" />
            <h2 className="text-[2rem] leading-[1.15] sm:text-4xl md:text-5xl md:leading-[1.08] font-semibold tracking-[-0.03em] text-white max-w-3xl">
              {CONTACT_CONTENT.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-300 max-w-2xl">
              {CONTACT_CONTENT.description}
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-3 md:gap-5">
            <ContactCard
              href={`mailto:${SITE_CONFIG.email}`}
              icon={<Icon name="mail" className="w-5 h-5" />}
              label="Email"
              detail={SITE_CONFIG.email}
            />
            <ContactCard
              href={SITE_CONFIG.linkedin}
              external
              icon={
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={LINKEDIN_PATH} />
                </svg>
              }
              label="LinkedIn"
              detail="Connect with me"
            />
            <ContactCard
              href={SITE_CONFIG.calendar}
              external
              icon={<Icon name="video" className="w-5 h-5" />}
              label="Let's meet"
              detail="Schedule a call"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
