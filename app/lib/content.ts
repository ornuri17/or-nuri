/**
 * Editorial content for the homepage.
 * Every figure here comes from the original site copy (constants.ts); nothing is invented.
 */

export const CHAPTERS = [
  { id: 'short-version', num: 'I', title: 'The short version', dek: 'Who I am, in a minute' },
  { id: 'scale', num: 'II', title: 'Zero to millions', dek: 'A career in orders of magnitude' },
  { id: 'agents', num: 'III', title: 'The page fixes itself', dek: 'What my agents do, staged live', ground: 'ink' },
  { id: 'receipts', num: 'IV', title: 'Receipts', dek: 'Before and after, in numbers' },
  { id: 'how-i-work', num: 'V', title: 'How I work', dek: 'Leadership and advisory' },
  { id: 'on-the-record', num: 'VI', title: 'On the record', dek: 'Press, podcasts, questions' },
  { id: 'lets-talk', num: 'Coda', title: "Let's talk", dek: 'Advisory, speaking, conversations' },
] as const;

export type ChapterId = (typeof CHAPTERS)[number]['id'];

export const CTA_LABEL = "Let's talk";

export const CAREER = [
  {
    id: 'icast',
    years: '2016–17',
    figure: '100s',
    figureLabel: 'concurrent listeners, up from tens',
    role: 'R&D Manager',
    company: 'iCast Audio Books',
    note: 'acquired by Storytel',
    logo: '/logos/icast.svg',
    body: 'Owned the technology infrastructure for an audiobook platform and a team of four. Cut latency by 50% by moving the protocol from XML to JSON, and started the move from C# on Windows to Node.js and React on Linux.',
  },
  {
    id: 'zell',
    years: '2017–18',
    figure: '<5%',
    figureLabel: 'acceptance rate',
    role: 'Zell Entrepreneurship Program',
    company: 'Reichman University',
    logo: '/logos/reichman.jpeg',
    body: "A year inside one of Israel's most selective entrepreneurship programs: strategy, fundraising, product and go-to-market, mentored by founders and VCs. It is where adjusti.co went from idea to launch.",
  },
  {
    id: 'adjusti',
    years: '2019–20',
    figure: '2,000+',
    figureLabel: 'brands served',
    role: 'Co-founder & CTO',
    company: 'adjusti.co',
    note: 'acquired by Teikametrics',
    logo: '/logos/adjusti.jpeg',
    body: 'Co-founded with Alon Maltzov, 100% bootstrapped. We watched Amazon and Walmart around the clock at zip-code granularity, so brands could see share of voice, competitor strategy, position and price. Trusted by agencies across Europe, the US and Canada, and acquired in 2020.',
  },
  {
    id: 'teikametrics',
    years: '2020–21',
    figure: '3',
    figureLabel: 'cities, one team of 8 engineers',
    role: 'Head of Engineering',
    company: 'Teikametrics',
    logo: '/logos/teikametrics.jpeg',
    body: "Led engineering after the acquisition across Tel Aviv, Bangalore and Boston. Integrated adjusti.co's platform, opened a new revenue stream, and fed unique market data into Teikametrics' AI bidder.",
  },
  {
    id: 'monday',
    years: '2021–now',
    figure: '10M+',
    figureLabel: 'requests a day, up from tens of thousands',
    role: 'AI & Tech Leader',
    company: 'monday.com',
    logo: '/logos/monday.jpeg',
    body: "Leads strategic AI initiatives across R&D, embedding AI into how the company builds and runs. Previously tech led the AI-first Collaborative Work Management group (~20 developers) and the WorkForms and WorkDocs products. Promoted to Senior Tech Lead in 2024, and runs on-call training across monday's international R&D.",
  },
] as const;

export const RECEIPTS = [
  { what: 'WorkForms availability', before: '89%', after: '99.9%', how: 'SLOs integrated end to end' },
  { what: 'WorkForms p99 latency SLO', before: '84%', after: '99.9%', how: 'Same program, latency side' },
  { what: 'WorkDocs p99 load time', before: '7.5s', after: '3.5s', how: 'SLO-driven performance work' },
  { what: 'WorkForms traffic', before: '10K+', after: '10M+', how: 'Requests a day, scaled while tech leading the product' },
  { what: 'WorkDocs document size', before: '100s', after: '10,000s', how: 'Blocks per document' },
  { what: 'Forms code in the monolith', before: '10K+ lines', after: '0', how: 'Full refactor of UI and server' },
  { what: 'WorkForms submission accessibility', before: '', after: '99%', how: 'WCAG accessible, and mobile friendly' },
  { what: 'iCast latency', before: '100%', after: '50%', how: 'Protocol moved from XML to JSON' },
] as const;

export const PRINCIPLES = [
  {
    title: 'Trust and transparency',
    quote: 'Teams work best when people can say the honest thing without ego getting in the way.',
    body: 'Open communication, egoless rooms, and growing together through transparent dialogue.',
  },
  {
    title: 'Ownership and execution',
    quote: 'Learn with your hands. Action over perfection, results over excuses.',
    body: 'Full ownership, a can-do approach, and complete responsibility for outcomes.',
  },
  {
    title: 'Empowerment and impact',
    quote: 'Lead without authority: remove blockers, then let the team decide.',
    body: 'Enablement over control, with the customer at the centre of what we build.',
  },
] as const;

export const ADVISORY_FOCUS = [
  'AI integration and strategy',
  'ML architecture and MLOps',
  'AI product development',
  'technical architecture',
  'team building and hiring',
  'fundraising and pitch deck review',
];
