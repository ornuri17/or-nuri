/**
 * Site Constants
 * Centralized content and configuration
 */

export const SITE_CONFIG = {
  name: 'Or Nuri',
  title: 'Or Nuri | Senior Tech Lead & Entrepreneur',
  description: 'Senior Tech Lead at monday.com leading products used by millions. Ex-Founder (acquired), advisor to startups, MSc in Machine Learning.',
  url: 'https://or-nuri.ai',
  email: 'ornuri17@gmail.com',
  linkedin: 'https://www.linkedin.com/in/or-nuri/',
};

export const HERO_CONTENT = {
  headline: 'Building Products That Scale, Teams That Thrive',
  subheadline: 'Senior Tech Lead @ monday.com | Ex-Founder (Acquired) | Startup Advisor',
  cta: {
    primary: "Let's Connect",
    secondary: 'View Experience',
  },
};

export const ABOUT_CONTENT = {
  title: 'About',
  paragraphs: [
    "I'm a Senior Tech Lead at monday.com, where I lead WorkForms—a product used by millions of users worldwide. My passion lies in building scalable products and empowering teams to achieve extraordinary results.",
    "Previously, I co-founded adjusti.co, an AI-powered advertising optimization platform that was acquired by Teikametrics in 2020. I hold an MSc in Machine Learning & Data Science and am an alumnus of the prestigious Zell Entrepreneurship Program at Reichman University.",
    "Today, I serve on advisory boards and help startups navigate the challenges of product development, technical architecture, and team building. My approach centers on clarity, empathy, and continuous learning.",
  ],
  highlights: [
    'Leading products used by millions at monday.com',
    'Successfully exited startup founder (adjusti.co → Teikametrics)',
    'MSc in Machine Learning & Data Science',
    'Zell Entrepreneurship Program alumnus',
    'Advisory board member and startup advisor',
  ],
};

export const EXPERIENCE_TIMELINE = [
  {
    id: 'monday',
    year: '2021 - Present',
    title: 'Senior Tech Lead',
    company: 'monday.com',
    logo: '/logos/monday.jpeg',
    description: 'Leading WorkForms product development, serving millions of users worldwide. Drove the product from inception to scale, while building and mentoring high-performing engineering teams.',
    achievements: [
      'Promoted to Senior Tech Lead in 2024',
      'Scaled WorkForms to millions of users globally',
      'Built and led cross-functional engineering teams',
      'Established technical best practices and architecture standards',
    ],
  },
  {
    id: 'teikametrics',
    year: '2020 - 2021',
    title: 'Head of Engineering',
    company: 'Teikametrics',
    logo: '/logos/teikametrics.jpeg',
    description: 'Led engineering post-acquisition, integrating adjusti.co platform and team.',
    achievements: [
      'Successfully integrated acquired company',
      'Led engineering team of 15+',
      'Scaled AI platform infrastructure',
    ],
  },
  {
    id: 'adjusti',
    year: '2019 - 2020',
    title: 'Co-Founder & CTO',
    company: 'adjusti.co',
    logo: '/logos/adjusti.jpeg',
    description: 'Co-founded AI-powered advertising optimization platform. Built product from 0 to 1 and achieved successful acquisition.',
    achievements: [
      'Built AI platform for advertising optimization',
      'Acquired by Teikametrics in 2020',
      'Raised seed funding',
    ],
  },
  {
    id: 'zell',
    year: '2017 - 2018',
    title: 'Zell Entrepreneurship Program',
    company: 'Reichman University',
    logo: '/logos/reichman.jpeg',
    description: 'Elite entrepreneurship program combining academic excellence with real-world startup experience.',
    achievements: [
      'Selected from hundreds of applicants',
      'Developed entrepreneurial skills',
      'Founded adjusti.co during program',
    ],
  },
  {
    id: 'icast',
    year: '2016 - 2017',
    title: 'R&D Manager',
    company: 'iCast',
    logo: '/logos/icast.svg',
    description: 'Led R&D team developing innovative broadcasting solutions.',
    achievements: [
      'Managed R&D team',
      'Led product development initiatives',
      'Implemented agile practices',
    ],
  },
  {
    id: 'idf',
    year: '2010 - 2013',
    title: 'Full Stack Developer',
    company: 'IDF ICT',
    description: 'Military service in elite technology unit, developing mission-critical systems.',
    achievements: [
      'Developed secure military systems',
      'Full stack development experience',
      'Team collaboration in high-pressure environment',
    ],
  },
];

export const LEADERSHIP_PILLARS = [
  {
    id: 'clarity',
    title: 'Clarity',
    description: 'Transparent communication and clear goals drive alignment. I believe in making the complex simple and ensuring everyone understands the "why" behind our work.',
    icon: '🎯',
  },
  {
    id: 'empathy',
    title: 'Empathy',
    description: 'Great teams are built on understanding and trust. I invest in people, recognize their strengths, and create environments where everyone can thrive.',
    icon: '❤️',
  },
  {
    id: 'learning',
    title: 'Continuous Learning',
    description: 'Technology evolves rapidly, and so must we. I foster a culture of curiosity, experimentation, and growth—for myself and my teams.',
    icon: '🚀',
  },
];

export const EXPERTISE_AREAS = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'MSc in Machine Learning & Data Science. Built AI-powered platforms and integrated ML into production systems.',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'AI Product Strategy'],
  },
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    description: '10+ years building scalable web applications. Expert in modern frameworks and cloud infrastructure.',
    skills: ['TypeScript', 'React', 'Node.js', 'Python', 'Next.js', 'AWS', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'product',
    title: 'Product Leadership',
    description: 'Led products from 0 to 1 and scaled to millions of users. Strategic thinking with hands-on execution.',
    skills: ['Product Strategy', '0-to-1 Development', 'User Experience', 'Data-Driven Decisions', 'Roadmap Planning'],
  },
  {
    id: 'management',
    title: 'Engineering Management',
    description: 'Built and led high-performing teams. Focus on mentorship, culture, and sustainable growth.',
    skills: ['Team Building', 'Mentorship', 'Agile/Scrum', 'Hiring', 'Performance Management', 'Technical Strategy'],
  },
];

export const SUCCESS_STORIES = [
  {
    id: 'acquisition',
    title: 'Acquired Startup Founder',
    metric: '100%',
    description: 'Co-founded adjusti.co during the Zell Entrepreneurship Program. Built AI-powered advertising platform and achieved successful acquisition by Teikametrics in 2020.',
    impact: 'From idea to exit in under 2 years',
  },
  {
    id: 'workforms',
    title: 'Scaling WorkForms',
    metric: 'Millions',
    description: 'Led WorkForms from inception to a product serving millions of users globally. Drove technical architecture, team building, and product strategy.',
    impact: 'Scaled from 0 to millions of users',
  },
  {
    id: 'advisory',
    title: 'Advisory Impact',
    metric: 'Multiple',
    description: 'Serving on advisory boards and helping early-stage startups with product strategy, technical decisions, and go-to-market planning.',
    impact: 'Supporting the next generation of founders',
  },
];

export const ADVISORY_CONTENT = {
  title: 'Advisory Work',
  description: "I'm passionate about helping startups navigate the challenging journey from idea to product-market fit. I serve on advisory boards and work closely with founders on:",
  roles: [
    {
      company: 'Record',
      description: 'Advisory Board Member - AI-powered customer support platform',
      focus: ['Product Strategy', 'Technical Architecture', 'Go-to-Market'],
    },
  ],
  focusAreas: [
    'Product Strategy & Roadmap',
    'Technical Architecture',
    'Team Building & Hiring',
    'Engineering Culture',
    'Go-to-Market Strategy',
    'Fundraising & Pitch Deck Review',
  ],
};

export const CONTACT_CONTENT = {
  title: "Let's Build Something Great Together",
  description: "Whether you're looking for advisory support, exploring leadership opportunities, or just want to connect—I'd love to hear from you.",
  cta: {
    primary: 'Schedule a Call',
    secondary: 'Download CV',
  },
};

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Advisory', href: '#advisory' },
  { label: 'Contact', href: '#contact' },
];
