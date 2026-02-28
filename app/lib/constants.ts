/**
 * Site Constants
 * Centralized content and configuration
 */

export const SITE_CONFIG = {
  name: 'Or Nuri',
  title: 'Or Nuri | AI & Tech Leader, Entrepreneur',
  description: 'AI & Tech Leader at monday.com. MSc in Machine Learning & Data Science. Ex-Founder (acquired). Building AI-powered products that scale to millions.',
  url: 'https://or-nuri.ai',
  email: 'ornuri17@gmail.com',
  linkedin: 'https://www.linkedin.com/in/or-nuri/',
  calendar: 'https://calendar.app.google/2bPceXnVdMSiXDa86',
};

export const HERO_CONTENT = {
  headline: 'Building Products That Scale, Teams That Thrive',
  subheadline: 'AI & Tech Leader | Founder | Startup Advisor',
  cta: {
    primary: "Let's Connect",
    secondary: 'View Experience',
  },
};

export const ABOUT_CONTENT = {
  title: 'About',
  paragraphs: [
    "I'm an AI & Tech Leader at monday.com, where I lead the Collaborative Work Management group, an AI-first organization that embeds AI directly into products to actually do the work for monday.com customers and improve collaboration between teams and agents. With an MSc in Machine Learning & Data Science, I specialize in building AI-powered products that scale and empowering teams to achieve extraordinary results.",
    "Previously, I co-founded adjusti.co, an ecommerce market intelligence platform that provided insights to help customers make better data-driven decisions. We created comprehensive robust datasets for AI algorithms, achieving best results for AI-based bidders and other optimization systems. adjusti.co was acquired by Teikametrics in 2020. I'm an alumnus of the prestigious Zell Entrepreneurship Program at Reichman University.",
    "Today, I serve on advisory boards and help startups integrate AI into their products, navigate technical architecture challenges, and build high-performing engineering teams. My approach centers on clarity, empathy, and continuous learning.",
  ],
  highlights: [
    'AI & Tech Leader at monday.com, serving millions of users',
    'MSc in Machine Learning & Data Science (Reichman University)',
    'Founded and exited AI-powered startup (adjusti.co → Teikametrics)',
    'Zell Entrepreneurship Program alumnus',
    'Advisory board member helping startups integrate AI',
  ],
};

export const EXPERIENCE_TIMELINE = [
  {
    id: 'monday',
    year: '2021 - Present',
    title: 'Senior Tech Lead',
    company: 'monday.com',
    logo: '/logos/monday.jpeg',
    description: 'Leading the Collaborative Work Management group, an AI-first organization that embeds AI directly into products to do work for customers and improve collaboration between teams and agents. Serving millions of users worldwide while driving AI integration across the platform.',
    achievements: [
      'Promoted to Senior Tech Lead in 2024',
      'Lead AI-first Collaborative Work Management group',
      'Embed AI agents that autonomously complete work for customers',
      'Scaled products to millions of users with AI-enhanced collaboration',
      'Built and led cross-functional engineering teams',
      'Established technical best practices and AI/ML architecture standards',
    ],
  },
  {
    id: 'teikametrics',
    year: '2020 - 2021',
    title: 'Head of Engineering',
    company: 'Teikametrics',
    logo: '/logos/teikametrics.jpeg',
    description: 'Led engineering post-acquisition, integrating adjusti.co market intelligence platform and team. Scaled machine learning infrastructure for ecommerce data analysis and AI-based optimization.',
    achievements: [
      'Successfully integrated acquired AI startup',
      'Led engineering team of 15+ building ML systems',
      'Scaled AI platform infrastructure to handle millions of predictions daily',
      'Enhanced ML models for advertising optimization',
    ],
  },
  {
    id: 'adjusti',
    year: '2019 - 2020',
    title: 'Co-Founder & CTO',
    company: 'adjusti.co',
    logo: '/logos/adjusti.jpeg',
    description: 'Co-founded ecommerce market intelligence platform providing insights to help customers make better data-driven decisions. Created comprehensive robust datasets for AI algorithms, enabling best results for AI-based bidders. Built product from 0 to 1 and achieved successful acquisition.',
    achievements: [
      'Built end-to-end market intelligence platform with AI-powered insights',
      'Created robust datasets powering AI algorithms for optimal decision making',
      'Developed infrastructure supporting AI-based bidders and optimization systems',
      'Acquired by Teikametrics in 2020',
      'Raised seed funding from top investors',
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
    description: 'Transparent communication and clear goals drive alignment. I believe in making complex AI concepts simple and ensuring everyone understands the "why" behind our technical decisions.',
    icon: '🎯',
  },
  {
    id: 'empathy',
    title: 'Empathy',
    description: 'Great teams are built on understanding and trust. I invest in people, recognize their strengths, and create environments where engineers and data scientists can thrive together.',
    icon: '❤️',
  },
  {
    id: 'learning',
    title: 'Innovation & Learning',
    description: 'AI and technology evolve rapidly. I foster a culture of curiosity, experimentation with new ML techniques, and continuous growth, staying at the forefront of AI innovation.',
    icon: '🚀',
  },
];

export const EXPERTISE_AREAS = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'MSc in Machine Learning & Data Science. Specialized in building production AI systems, ML models, and AI-powered products that scale to millions of users.',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Predictive Analytics', 'MLOps', 'AI Product Strategy', 'TensorFlow', 'PyTorch'],
  },
  {
    id: 'product',
    title: 'Technical Leadership',
    description: 'Led AI-powered products from 0 to 1 and scaled to millions of users. Expert in technical strategy, ML integration, and building scalable architectures.',
    skills: ['Technical Strategy', '0-to-1 Development', 'ML Integration', 'System Design', 'Architecture', 'Engineering Excellence'],
  },
  {
    id: 'fullstack',
    title: 'Full Stack & AI Infrastructure',
    description: '10+ years building scalable systems. Expert in ML infrastructure, cloud platforms, and modern frameworks for AI applications.',
    skills: ['Python', 'TypeScript', 'React', 'Node.js', 'AWS', 'ML Infrastructure', 'Vector Databases', 'API Design'],
  },
  {
    id: 'management',
    title: 'Engineering Leadership',
    description: 'Built and led high-performing teams working on AI/ML products. Focus on technical excellence, mentorship, and innovation culture.',
    skills: ['Team Building', 'Technical Mentorship', 'AI Strategy', 'Agile/Scrum', 'Hiring', 'ML Team Leadership'],
  },
];

export const SUCCESS_STORIES = [
  {
    id: 'ai-startup',
    title: 'Built & Exited AI Startup',
    metric: '100%',
    description: 'Co-founded adjusti.co, an ecommerce market intelligence platform that provided insights for better data-driven decisions. Created comprehensive datasets for AI algorithms powering AI-based bidders and achieved acquisition by Teikametrics in 2020.',
    impact: 'From idea to AI exit in under 2 years',
  },
  {
    id: 'ai-scale',
    title: 'Scaled AI-Powered Product',
    metric: 'Millions',
    description: 'Led WorkForms with integrated ML capabilities from inception to millions of users globally. Implemented intelligent analytics, form optimization, and AI-driven insights.',
    impact: 'AI features serving millions of users daily',
  },
  {
    id: 'ai-advisory',
    title: 'AI Advisory & Mentorship',
    metric: 'Multiple',
    description: 'Advising startups on AI integration, ML architecture, and building AI-powered products. Helping founders navigate technical decisions and AI product strategy.',
    impact: 'Empowering the next generation of AI startups',
  },
];

export const ADVISORY_CONTENT = {
  title: 'Advisory Work',
  description: "I'm passionate about helping startups integrate AI and navigate the journey from idea to product-market fit. I serve on advisory boards and work closely with founders on:",
  roles: [
    {
      company: 'Record',
      description: 'Advisory Board Member - AI-powered customer support platform',
      focus: ['AI Product Strategy', 'ML Architecture', 'Go-to-Market'],
    },
  ],
  focusAreas: [
    'AI Integration & Strategy',
    'ML Architecture & MLOps',
    'AI Product Development',
    'Technical Architecture',
    'Team Building & Hiring',
    'Fundraising & Pitch Deck Review',
  ],
};

export const CONTACT_CONTENT = {
  title: "Let's Build Something Great Together",
  description: "Whether you're looking for advisory support, exploring leadership opportunities, or just want to connect, I'd love to hear from you.",
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
