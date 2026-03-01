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
    "I'm an AI & Tech Leader at monday.com, where I tech lead the Collaborative Work Management group of ~20 developers, an AI-first organization that embeds AI directly into products to actually do the work for monday.com customers and improve collaboration between teams and agents. I specialize in building AI-powered products that scale.",
    "Previously, I co-founded adjusti.co, an ecommerce market intelligence platform that provided insights to help customers make better data-driven decisions. We created comprehensive robust datasets for AI algorithms, achieving best results for AI-based bidders and other optimization systems. adjusti.co was acquired by Teikametrics in 2020.",
    "I hold an MSc in Machine Learning & Data Science and a BSc in Computer Science from Reichman University, and I'm an alumnus of the prestigious Zell Entrepreneurship Program, where I built and launched adjusti.co.",
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
    description: 'Tech leading the Collaborative Work Management group of ~20 developers, an AI-first organization that embeds AI directly into products to do work for customers and improve collaboration between teams and agents. Serving millions of users worldwide while driving AI integration across the platform.',
    achievements: [
      'Promoted to Senior Tech Lead in 2024',
      'Tech lead AI-first Collaborative Work Management group of ~20 developers',
      'Leading the adoption of AI in my directorate',
      'Leading the on-call schedule and training for on-call engineers across monday\'s international R&D',
      'Tech lead WorkForms product (forms by monday.com), scaling from tens of thousands to tens of millions of requests daily',
      'Tech lead WorkDocs product (docs by monday.com), scaling from hundreds of blocks to tens of thousands of blocks',
      'Led project to make WorkForms submission experience 100% accessible and mobile friendly',
      'Integrated SLOs in WorkForms: improved availability from 89% to 99.9%, and p99 latency SLO from 84% to 99.9%',
      'Integrated SLOs in WorkDocs: reduced p99 loading latency from 7.5 seconds to 3.5 seconds',
      'Led full refactor of forms experience, rebuilding UI and server-side architecture, deleting 10K+ lines of code from monday\'s platform monolith',
      'Provide knowledge sharing sessions on AI, SLOs, Testing, Observability, and more',
    ],
  },
  {
    id: 'teikametrics',
    year: '2020 - 2021',
    title: 'Head of Engineering',
    company: 'Teikametrics',
    logo: '/logos/teikametrics.jpeg',
    description: 'Led engineering post-acquisition, integrating adjusti.co market intelligence platform and team. Created robust system monitoring user behaviors and marketing performance on Amazon, providing unique market data that dramatically improved Teikametrics AI Bidder.',
    achievements: [
      'Successfully integrated acquired ecommerce market intelligence platform',
      'Led team of 8 engineers across TLV, Bangalore, and Boston',
      'Created robust system monitoring user behaviors and marketing performance on Amazon',
      'Created new revenue stream for Teikametrics',
      'Dramatically improved Teikametrics AI Bidder by providing unique market data',
    ],
  },
  {
    id: 'adjusti',
    year: '2019 - 2020',
    title: 'Co-Founder & CTO',
    company: 'adjusti.co',
    logo: '/logos/adjusti.jpeg',
    description: 'Co-founded with Alon Maltzov (CEO) an ecommerce market intelligence platform providing insights to help customers make better data-driven decisions. Created comprehensive robust datasets for AI algorithms, enabling best results for AI-based bidders. Built product from 0 to 1 and achieved successful acquisition.',
    achievements: [
      'Co-founded with Alon Maltzov (CEO), 100% bootstrap with no external funding',
      'Provided market intelligence on leading eCommerce platforms: Amazon (US, Canada, Germany, and more) & Walmart',
      'Developed robust and scalable system monitoring the market 24/7 at zip code level granularity',
      'Spread the fog around market share of voice, competitors marketing strategies, position & pricing',
      'Served over 2,000 brands across the globe',
      'Trusted by top marketing agencies in Europe, USA & Canada',
      'Created robust datasets powering AI algorithms for optimal decision making',
      'Acquired by Teikametrics in 2020',
    ],
  },
  {
    id: 'zell',
    year: '2017 - 2018',
    title: 'Zell Entrepreneurship Program',
    company: 'Reichman University',
    logo: '/logos/reichman.jpeg',
    description: 'One of Israel\'s most prestigious and selective entrepreneurship programs at Reichman University. An intensive one-year program combining academic excellence with real-world startup development, mentorship from top entrepreneurs and VCs, and access to Israel\'s thriving tech ecosystem.',
    achievements: [
      'Selected from highly competitive pool (acceptance rate <5%)',
      'Intensive one-year curriculum: business strategy, fundraising, product development, and go-to-market',
      'Direct mentorship from successful entrepreneurs, VCs, and industry leaders',
      'Access to exclusive network of alumni founders and Israel\'s tech ecosystem',
      'Built and launched adjusti.co from 0 to 1 during the program',
      'Acquired hands-on experience in fundraising, team building, and scaling startups',
    ],
  },
  {
    id: 'icast',
    year: '2016 - 2017',
    title: 'R&D Manager',
    company: 'iCast Audio Books (Acquired by Storytel)',
    logo: '/logos/icast.svg',
    description: 'Led technology infrastructure and product strategy for audio books platform. Made strategic technology decisions aligned with short and long-term venture objectives, managing a team of 4 developers.',
    achievements: [
      'Led overarching technology infrastructure decisions for the platform',
      'Reduced latency by 50% through protocol modernization (XML to JSON)',
      'Scaled concurrent listeners from tens to hundreds',
      'Initiated full technology stack modernization (C# to Node.js/React, Windows to Linux)',
      'Managed team of 4 developers and collaborated with 3rd party integrations',
      'Company acquired by Storytel',
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
    description: 'MSc in Machine Learning & Data Science. Building AI-first products with AI agents that autonomously complete work. Created ecommerce market intelligence platforms powering AI-based bidders and optimization systems.',
    skills: ['AI Agents', 'Machine Learning', 'Market Intelligence', 'AI Product Strategy', 'MLOps', 'Predictive Analytics', 'Data Science'],
  },
  {
    id: 'product',
    title: 'Technical Leadership',
    description: 'Tech leading ~20 developers in AI-first organization. Leading AI adoption across directorate. Unique experience across all company stages: 0 to 1 (founding), 1 to 100 (early growth), 100 to 1K (scaling), and 1K to 1M+ (massive scale). Expert in technology infrastructure decisions and technical strategy.',
    skills: ['Tech Leadership', 'AI Adoption', '0-to-1 Development', '1-to-100 Growth', '100-to-1K Scaling', '1K-to-1M+ Scale', 'Technical Strategy'],
  },
  {
    id: 'fullstack',
    title: 'Scalability & Performance',
    description: 'Scaled products from tens of thousands to tens of millions of daily requests. Built 24/7 monitoring systems at zip code granularity. Reduced latency 50% through protocol modernization. Led full stack modernization (C# to Node.js/React, Windows to Linux).',
    skills: ['High Scalability', 'Performance Optimization', 'Real-time Monitoring', 'Protocol Design', 'Stack Modernization', 'Cloud Infrastructure'],
  },
  {
    id: 'management',
    title: 'SRE & Engineering Excellence',
    description: 'Integrated SLOs improving availability from 89% to 99.9% and p99 latency from 84% to 99.9%. Led full refactors deleting 10K+ lines of code. Leading on-call training across international R&D. Knowledge sharing on AI, SLOs, Testing, Observability.',
    skills: ['SLOs/SLIs', 'Observability', 'On-call Leadership', 'Code Quality', 'Testing', 'Refactoring', 'Knowledge Sharing'],
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

export const MEDIA_COVERAGE = {
  title: 'Press & Media',
  description: 'Featured coverage of key milestones and achievements',
  items: [
    {
      id: 'acquisition',
      title: 'adjusti.co Acquisition by Teikametrics',
      description: 'Coverage of adjusti.co acquisition, bringing ecommerce market intelligence to Teikametrics platform',
      date: 'October 2020',
      links: [
        {
          outlet: 'Calcalist',
          url: 'https://www.calcalist.co.il/local/articles/0,7340,L-3859593,00.html',
          logo: 'calcalist',
        },
        {
          outlet: 'BusinessWire',
          url: 'https://www.businesswire.com/news/home/20201014005161/en/Teikametrics-Acquires-Adjusti.co-to-Provide-Market-Intelligence-for-Amazon-and-Walmart',
          logo: 'businesswire',
        },
        {
          outlet: 'CTech',
          url: 'https://www.calcalistech.com/ctech/articles/0,7340,L-3859710,00.html',
          logo: 'ctech',
        },
      ],
    },
    {
      id: 'loreal',
      title: 'L\'Oréal Brandstorm International Competition',
      description: 'Represented Israel at L\'Oréal Brandstorm international competition after winning Israeli competition during BSc studies',
      date: '2016',
      links: [
        {
          outlet: 'Ynet',
          url: 'https://www.ynet.co.il/articles/0,7340,L-4831519,00.html',
          logo: 'ynet',
        },
      ],
    },
  ],
};

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
  { label: 'Media', href: '#media' },
  { label: 'Advisory', href: '#advisory' },
  { label: 'Contact', href: '#contact' },
];
