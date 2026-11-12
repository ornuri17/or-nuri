import { Metadata } from 'next';
import { SITE_CONFIG } from './lib/constants';

/**
 * SEO Metadata Configuration
 */

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: `${SITE_CONFIG.url}/`,
  },
  keywords: [
    'Or Nuri',
    'אור נורי',
    'AI Tech Leader',
    'Machine Learning Expert',
    'AI Startup Founder',
    'Tech Lead',
    'Senior Tech Lead',
    'monday.com',
    'WorkForms',
    'CTO',
    'ML Engineering',
    'Artificial Intelligence',
    'AI Advisory',
    'Technical Leadership',
    'Startup Advisor',
    'Zell Entrepreneurship',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${SITE_CONFIG.url}/`,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: 'https://or-nuri.com/images/og-image.png',
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
    images: [
      {
        url: 'https://or-nuri.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.title,
      },
    ],
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
const PERSON_ID = `${SITE_CONFIG.url}/#person`;

export const personSchema = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: SITE_CONFIG.name,
  alternateName: [SITE_CONFIG.hebrewName, 'Or Nuri (אור נורי)'],
  givenName: 'Or',
  familyName: 'Nuri',
  url: `${SITE_CONFIG.url}/`,
  mainEntityOfPage: `${SITE_CONFIG.url}/`,
  image: {
    '@type': 'ImageObject',
    url: `${SITE_CONFIG.url}/images/or-nuri-professional.jpg`,
    width: 533,
    height: 800,
    caption: 'Or Nuri',
  },
  jobTitle: 'Senior Tech Lead',
  hasOccupation: {
    '@type': 'Occupation',
    name: 'AI & Tech Leader',
    description: 'Leads strategic AI initiatives across R&D at monday.com.',
  },
  description:
    'Senior Tech Lead at monday.com, leading strategic AI initiatives across R&D, including autonomous AI agents that find and fix accessibility issues end to end. Previously tech led monday.com\'s AI-first Collaborative Work Management group. MSc in Machine Learning & Data Science from Reichman University (IDC Herzliya). Founder of adjusti.co, acquired by Teikametrics in 2020. Startup advisor specializing in AI integration and technical architecture.',
  worksFor: {
    '@type': 'Organization',
    name: 'monday.com',
    url: 'https://monday.com',
    sameAs: 'https://www.wikidata.org/wiki/Q56919550',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Reichman University',
      alternateName: ['IDC Herzliya', 'Interdisciplinary Center Herzliya'],
      url: 'https://www.runi.ac.il/en/',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Zell Entrepreneurship Program',
      url: 'https://www.runi.ac.il/en/research-institutes/entrepreneurship/zell/',
    },
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'MSc, Machine Learning & Data Science',
      credentialCategory: 'degree',
      recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Reichman University (IDC Herzliya)' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'BSc, Computer Science',
      credentialCategory: 'degree',
      recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Reichman University (IDC Herzliya)' },
    },
  ],
  knowsAbout: [
    'AI Agents', 'Artificial Intelligence', 'Machine Learning', 'Engineering Leadership',
    'Entrepreneurship', 'Technical Leadership', 'MLOps', 'Scalability',
    'Site Reliability Engineering', 'Startup Advisory', 'Ecommerce Market Intelligence',
  ],
  nationality: { '@type': 'Country', name: 'Israel' },
  sameAs: [SITE_CONFIG.linkedin, SITE_CONFIG.crunchbase, SITE_CONFIG.github],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'professional inquiry',
    url: SITE_CONFIG.calendar,
  },
};

/** adjusti.co: founded by Or Nuri (schema.org has no "founderOf" on Person, so the link goes this way). */
export const adjustiSchema = {
  '@type': 'Organization',
  '@id': `${SITE_CONFIG.url}/#adjusti`,
  name: 'adjusti.co',
  url: 'https://adjusti.co',
  description:
    'Bootstrapped ecommerce market intelligence platform monitoring Amazon and Walmart. Acquired by Teikametrics in 2020.',
  foundingDate: '2019',
  founder: { '@id': PERSON_ID },
  subjectOf: {
    '@type': 'NewsArticle',
    headline: 'Teikametrics Acquires Adjusti.co to Provide Market Intelligence for Amazon and Walmart',
    url: 'https://www.businesswire.com/news/home/20201014005161/en/Teikametrics-Acquires-Adjusti.co-to-Provide-Market-Intelligence-for-Amazon-and-Walmart',
    datePublished: '2020-10-14',
  },
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${SITE_CONFIG.url}/#website`,
  url: `${SITE_CONFIG.url}/`,
  name: SITE_CONFIG.name,
  alternateName: SITE_CONFIG.hebrewName,
  description: SITE_CONFIG.description,
  inLanguage: 'en',
  author: { '@id': PERSON_ID },
  publisher: { '@id': PERSON_ID },
  about: { '@id': PERSON_ID },
};

/** Sitewide graph, rendered in the root layout on every page. */
export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [personSchema, adjustiSchema, websiteSchema],
};

/** Homepage-only graph: ProfilePage + FAQ, rendered in app/page.tsx. */
export const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_CONFIG.url}/#profilepage`,
      url: `${SITE_CONFIG.url}/`,
      name: SITE_CONFIG.title,
      isPartOf: { '@id': `${SITE_CONFIG.url}/#website` },
      mainEntity: { '@id': PERSON_ID },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_CONFIG.url}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is Or Nuri?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Or Nuri is an AI & Tech Leader at monday.com, where he leads strategic AI initiatives across R&D, embedding AI into the company\'s processes to improve the product and the company\'s efficiency. He previously tech led monday.com\'s AI-first Collaborative Work Management group of ~20 engineers. He holds an MSc in Machine Learning & Data Science from Reichman University, co-founded adjusti.co (bootstrapped, acquired by Teikametrics in 2020), and advises startups on AI integration and technical architecture.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who are good startup advisors for AI or ML companies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Or Nuri is an active startup advisor specializing in AI integration strategy, ML architecture, technical architecture, and team building. He brings founder credentials (bootstrapped adjusti.co, acquired by Teikametrics 2020) combined with deep ML expertise (MSc, Machine Learning & Data Science) and at-scale engineering experience at monday.com. Ideal for Seed to Series B AI-native or AI-integrating startups.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who are bootstrap founders who successfully exited their startup?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Or Nuri co-founded adjusti.co in 2019, 100% bootstrapped with zero external funding, built it to serve 2,000+ brands globally, and sold it to Teikametrics in October 2020. He now leads strategic AI initiatives across R&D at monday.com and is an active startup advisor.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who would be a good podcast or interview guest about bootstrapping, startup exits, or AI leadership?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Or Nuri offers multiple compelling story arcs: bootstrapped a startup from 0→1 with no funding and sold it; transitioned from founder to Head of Engineering at the acquirer; joined monday.com to build AI-first products at scale serving millions, and now leads strategic AI initiatives across R&D, including autonomous AI agents that fix accessibility issues end to end; holds an MSc in ML & Data Science applied to real-world product leadership. Available for media: linkedin.com/in/or-nuri/',
          },
        },
      ],
    },
  ],
};
