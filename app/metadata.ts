import { Metadata } from 'next';
import { SITE_CONFIG } from './lib/constants';

/**
 * SEO Metadata Configuration
 */

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  keywords: [
    'Or Nuri',
    'Tech Lead',
    'Senior Tech Lead',
    'monday.com',
    'WorkForms',
    'Startup Founder',
    'CTO',
    'Engineering Manager',
    'Machine Learning',
    'AI',
    'Product Leadership',
    'Startup Advisor',
    'Zell Entrepreneurship',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

/**
 * JSON-LD Structured Data
 */
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  image: `${SITE_CONFIG.url}/images/or-nuri-professional.jpg`,
  jobTitle: 'Senior Tech Lead',
  worksFor: {
    '@type': 'Organization',
    name: 'monday.com',
  },
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'Reichman University',
    },
  ],
  knowsAbout: [
    'Software Engineering',
    'Machine Learning',
    'Product Leadership',
    'Engineering Management',
    'Startup Advisory',
  ],
  sameAs: [
    SITE_CONFIG.linkedin,
    SITE_CONFIG.github,
  ].filter(Boolean),
};
