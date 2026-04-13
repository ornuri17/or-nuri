'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_TIMELINE } from '@/app/lib/constants';
import { fadeInUp, timelineItem, staggerContainer, defaultViewport } from '@/app/lib/animations';

function ExperienceCard({ item }: { item: typeof EXPERIENCE_TIMELINE[number] }) {
  const [expanded, setExpanded] = useState(false);
  const hasAchievements = item.achievements && item.achievements.length > 0;

  return (
    <motion.div
      className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow"
      whileHover={{ scale: 1.02 }}
    >
      {/* Header with Logo */}
      <div className="flex items-start gap-4 mb-4">
        {'logo' in item && item.logo && (
          <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg border border-[var(--color-border)] p-2 flex items-center justify-center">
            <img
              src={item.logo}
              alt={`${item.company} logo`}
              className="w-full h-full object-contain"
              loading="lazy"
              width="48"
              height="48"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-[var(--color-accent-secondary)] mb-2">
            {item.year}
          </div>
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">
            {item.title}
          </h3>
          <div className="text-base font-medium text-[var(--color-text-secondary)]">
            {item.company}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-[var(--color-text-secondary)] mb-4">
        {item.description}
      </p>

      {/* Achievements */}
      {hasAchievements && (
        <>
          {expanded && (
            <ul className="space-y-2 mb-4">
              {item.achievements.map((achievement, achIndex) => (
                <li
                  key={achIndex}
                  className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                >
                  <span className="text-[var(--color-accent-secondary)] mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          )}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent-secondary)] bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-full px-3 py-1 cursor-pointer transition-colors"
          >
            {expanded ? 'Show less' : 'Show more'}
            <svg
              className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </>
      )}
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 md:py-32 bg-[var(--color-bg-secondary)]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] text-center mb-16"
          >
            Experience
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-border)]" />

            {/* Timeline items */}
            <div className="space-y-12">
              {EXPERIENCE_TIMELINE.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={timelineItem}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--color-accent-secondary)] rounded-full border-4 border-[var(--color-bg-secondary)] z-10" />

                  {/* Content */}
                  <div
                    className={`flex-1 ml-14 md:ml-0 ${
                      index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <ExperienceCard item={item} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
