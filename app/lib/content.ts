/**
 * Homepage content. Every figure comes from the original site copy (constants.ts); nothing is invented.
 */

export const CTA_LABEL = "Let's talk";

export const NAV = [
  { label: 'Impact', href: '#impact' },
  { label: 'Agents', href: '#agents' },
  { label: 'Career', href: '#career' },
  { label: 'Press', href: '#press' },
] as const;

export const LOGOS = [
  { name: 'monday.com', src: '/logos/monday.jpeg' },
  { name: 'Teikametrics', src: '/logos/teikametrics.jpeg' },
  { name: 'adjusti.co', src: '/logos/adjusti.jpeg' },
  { name: 'Reichman University', src: '/logos/reichman.jpeg' },
  { name: 'iCast', src: '/logos/icast.svg' },
  { name: 'Record', src: '/logos/record.jpeg' },
] as const;

/** Impact grid. `count` drives the count-up; the static text is what renders without JS. */
export const IMPACT = [
  {
    id: 'availability',
    size: 'hero',
    value: '99.9%',
    count: { to: 99.9, decimals: 1, suffix: '%' },
    label: 'WorkForms availability',
    body: 'Up from 89% after I integrated SLOs end to end. The p99 latency SLO went from 84% to 99.9% in the same program.',
    bars: [
      { label: 'Before', value: 89, text: '89%' },
      { label: 'After', value: 99.9, text: '99.9%' },
    ],
  },
  {
    id: 'requests',
    size: 'wide',
    value: '10M+',
    count: { to: 10, decimals: 0, suffix: 'M+' },
    label: 'requests a day',
    body: 'WorkForms, scaled from tens of thousands of daily requests while I tech led it.',
  },
  {
    id: 'latency',
    size: 'small',
    value: '3.5s',
    count: { to: 3.5, decimals: 1, suffix: 's' },
    label: 'WorkDocs p99 load',
    body: 'Down from 7.5s.',
  },
  {
    id: 'brands',
    size: 'small',
    value: '2,000+',
    count: { to: 2000, decimals: 0, suffix: '+' },
    label: 'brands served',
    body: 'adjusti.co, bootstrapped to acquisition.',
  },
  {
    id: 'lines',
    size: 'wide',
    value: '10K+',
    count: { to: 10, decimals: 0, suffix: 'K+' },
    label: 'lines deleted from the monolith',
    body: 'A full refactor of the forms experience, UI and server rebuilt from scratch.',
  },
  {
    id: 'wcag',
    size: 'wide',
    value: '99%',
    count: { to: 99, decimals: 0, suffix: '%' },
    label: 'WCAG accessible',
    body: 'The WorkForms submission experience, made accessible and mobile friendly.',
  },
] as const;

export const PIPELINE = [
  { id: 'merge', title: 'Feature lands', detail: 'A pull request or a live environment' },
  { id: 'scan', title: 'Scanner agents', detail: 'Find accessibility issues' },
  { id: 'fix', title: 'Fixer agents', detail: 'Write and open the fix' },
  { id: 'check', title: 'Review & tests', detail: 'Same bar as any engineer' },
  { id: 'ship', title: 'Production', detail: 'Shipped, end to end' },
] as const;

export const PIPELINE_LOG = [
  'New feature merged, agents notified',
  'Scanner: 3 issues found (contrast, focus, labels)',
  'Fixer: a fix opened for each issue',
  'Checks: tests and review passed',
  'Deployed to production',
] as const;

export const CAREER = [
  {
    id: 'monday',
    years: '2021 – now',
    role: 'AI & Tech Leader',
    company: 'monday.com',
    logo: '/logos/monday.jpeg',
    body: 'Leads strategic AI initiatives across R&D. Previously tech led the AI-first Collaborative Work Management group (~20 developers) and the WorkForms and WorkDocs products.',
    chip: 'Senior Tech Lead since 2024',
  },
  {
    id: 'teikametrics',
    years: '2020 – 21',
    role: 'Head of Engineering',
    company: 'Teikametrics',
    logo: '/logos/teikametrics.jpeg',
    body: "Led engineering after the acquisition, integrated adjusti.co's platform and fed unique market data into the AI bidder.",
    chip: '8 engineers, 3 cities',
  },
  {
    id: 'adjusti',
    years: '2019 – 20',
    role: 'Co-founder & CTO',
    company: 'adjusti.co',
    logo: '/logos/adjusti.jpeg',
    body: 'Bootstrapped ecommerce market intelligence for Amazon and Walmart, at zip-code granularity, 24/7. Acquired by Teikametrics.',
    chip: 'Acquired, 2020',
  },
  {
    id: 'zell',
    years: '2017 – 18',
    role: 'Zell Entrepreneurship Program',
    company: 'Reichman University',
    logo: '/logos/reichman.jpeg',
    body: "One of Israel's most selective entrepreneurship programs, where adjusti.co went from idea to launch.",
    chip: '<5% acceptance',
  },
  {
    id: 'icast',
    years: '2016 – 17',
    role: 'R&D Manager',
    company: 'iCast Audio Books',
    logo: '/logos/icast.svg',
    body: 'Owned the platform infrastructure and a team of four. Moved the stack to Node.js and React on Linux. Acquired by Storytel.',
    chip: '50% lower latency',
  },
] as const;

export const PRINCIPLES = [
  { title: 'Trust & transparency', body: 'Open, honest, egoless teams.' },
  { title: 'Ownership & execution', body: 'Action over perfection, results over excuses.' },
  { title: 'Empowerment & impact', body: 'Remove blockers, keep the customer at the centre.' },
] as const;

export const ADVISORY_FOCUS = [
  'AI strategy',
  'ML architecture',
  'AI product',
  'Technical architecture',
  'Team building',
  'Fundraising decks',
] as const;
