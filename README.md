# or-nuri.com

Modern, minimalist personal website for Or Nuri - Senior Tech Lead at monday.com, entrepreneur, and startup advisor.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Deployment:** Netlify (static hosting + edge functions)

## 📦 Project Structure

```
or-nuri/
├── app/
│   ├── components/
│   │   ├── layout/          # Layout components (Navbar, Footer, ScrollProgress)
│   │   ├── sections/        # Page sections (Hero, About, Experience, etc.)
│   │   └── ui/              # Reusable UI components (Button, Card, Badge, etc.)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities, animations, constants (content lives here)
│   ├── globals.css          # Global styles & design system
│   ├── layout.tsx           # Root layout with SEO
│   ├── metadata.ts          # SEO configuration
│   └── page.tsx             # Main landing page
├── public/                  # Static assets, incl. llms.txt (generated) and .well-known/
├── scripts/                 # Build-time generators
├── tests/                   # Smoke tests (run against the built site in out/)
├── netlify/
│   └── edge-functions/      # Netlify edge functions (markdown content negotiation)
├── netlify.toml             # Netlify configuration
└── next.config.ts           # Next.js configuration
```

## 🎨 Design System

### Colors
- **Backgrounds:** White (#FFFFFF), Light Gray (#F8FAFC)
- **Text:** Deep Navy (#0F172A), Gray shades
- **Accent:** Navy (#0F172A), Blue (#3B82F6)

### Typography
- **Font:** Inter (Google Fonts)
- **Weights:** 400, 500, 600, 700, 900

## 🛠️ Development

### Prerequisites
- Node.js 22 (see `.nvmrc`)
- Yarn (v1)

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd or-nuri
```

2. Install dependencies:
```bash
yarn install
```

3. Run the development server:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Copy `.env.example` to `.env.local` for local development.

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics measurement ID. When set, the gtag snippet is injected at build time; when unset, the site builds without analytics. Set it in Netlify (Site configuration > Environment variables) for production.

### Available Scripts

- `yarn dev` - Start the development server
- `yarn build` - Build for production (static export to `out/`); regenerates profile content first via `prebuild`
- `yarn start` - Serve the static export locally
- `yarn lint` - Run ESLint
- `yarn typecheck` - Type-check the app
- `yarn typecheck:edge` - Type-check the Netlify edge functions (separate tsconfig)
- `yarn generate` - Regenerate `public/llms.txt` and the edge function's profile markdown from `app/lib/constants.ts`
- `yarn generate:check` - Fail if the generated files are out of sync (runs in CI)
- `yarn test` - Run smoke tests against the built site in `out/` (run `yarn build` first)

## 📝 Content Management

All website content is centralized in `app/lib/constants.ts`. To update content:

1. Edit the constants file
2. Run `yarn generate` (also runs automatically before every build)
3. Commit both the constants and the regenerated files

Key content sections:
- `SITE_CONFIG` - Site metadata and contact info
- `HERO_CONTENT` - Hero section content
- `ABOUT_CONTENT` - About section
- `EXPERIENCE_TIMELINE` - Career timeline
- `LEADERSHIP_PILLARS` - Leadership philosophy
- `EXPERTISE_AREAS` - Technical expertise
- `SUCCESS_STORIES` - Achievements
- `ADVISORY_CONTENT` - Advisory work
- `LLMS_TXT` - The text published as `/llms.txt`
- `PROFILE_MARKDOWN` - The markdown bio served by the edge function

## 🤖 AI & Agent Discoverability

The site ships machine-readable profile files for search engines and AI agents:

- **`/llms.txt` and `/llms-full.txt`** - AI-readable profile summaries, following the llms.txt convention. `llms.txt` is generated from `app/lib/constants.ts` at build time; edit `LLMS_TXT` there, not the file in `public/`.
- **`/for-bots/`** - A structured, machine-readable profile page for AI agents.
- **Markdown content negotiation** - A Netlify edge function (`netlify/edge-functions/markdown-agent.ts`) answers requests to `/` that send `Accept: text/markdown` with a markdown bio instead of HTML. Its profile text is generated from `PROFILE_MARKDOWN` in `app/lib/constants.ts`.
- **`.well-known/` files** - `public/.well-known/` contains agent-facing metadata: `agent-card.json`, `agent-skills/`, `mcp/server-card.json`, `api-catalog`, and the `jwks.json` / OAuth discovery documents referenced by `public/auth.md`.
- **JSON-LD** - Structured data embedded in every page (see `app/metadata.ts`).
- **`/sitemap.xml` and `/robots.txt`** - Standard crawler entry points.

## ✅ CI & Tests

GitHub Actions (`.github/workflows/ci.yml`) runs on every pull request:

1. `yarn install --frozen-lockfile`
2. ESLint
3. TypeScript checks for the app and the edge functions
4. Generated-content sync check (`generate:check`)
5. Production build
6. Smoke tests (`tests/`) against the built site: build output exists, homepage H1, valid JSON-LD, `llms.txt`/`sitemap.xml` present, key agent files published, and no broken internal links.

## 🔁 Pull Requests & Previews

1. Create a branch and open a pull request against `main`.
2. CI runs automatically on the PR (see above).
3. Netlify builds a deploy preview for every PR - use it to review changes on a live URL before merging.
4. Merging to `main` triggers the production deploy.

Dependabot (`.github/dependabot.yml`) opens weekly PRs for npm and GitHub Actions updates.

## 📸 Adding Images

### Professional Headshot
Place your professional headshot at:
```
/public/images/or-nuri-professional.jpg
```
Recommended size: 800x800px, optimized for web

### Open Graph Image
For social media previews:
```
/public/images/og-image.png
```
Required size: 1200x630px

### Company Logos
Add company logos to:
```
/public/logos/
```

## 🚀 Deployment

The site deploys to Netlify:

- **Build command:** `yarn build` (runs the profile-content generator first)
- **Publish directory:** `out`
- **Node version:** 22 (set in `netlify.toml` and `.nvmrc`)
- **Custom domain:** `or-nuri.com` (production; `www` redirects to apex)
- Push to `main` to trigger a production deploy; pull requests get deploy previews automatically.

### Manual Deployment

```bash
# Build the site
yarn build

# The static site will be in the /out directory
# Upload contents to any static hosting provider
```

## 🎯 Features

- ✅ Modern, minimalist design
- ✅ Fully responsive (mobile-first)
- ✅ Smooth scroll animations (Framer Motion)
- ✅ Interactive experience timeline
- ✅ SEO optimized with structured data
- ✅ AI-agent discoverability (llms.txt, /for-bots, markdown content negotiation)
- ✅ Accessibility focused (WCAG AA)
- ✅ Fast static site generation
- ✅ Optimized images and fonts

## 🔧 Customization

### Changing Colors

Edit the design tokens in `app/globals.css`:

```css
@theme {
  --color-bg-primary: #FFFFFF;
  --color-accent-primary: #0F172A;
  /* ... more colors */
}
```

### Adding Sections

1. Create a new component in `app/components/sections/`
2. Import and add to `app/page.tsx`
3. Update navigation in `app/lib/constants.ts` (NAV_ITEMS)

### Modifying Animations

Edit animation variants in `app/lib/animations.ts`

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

1. Delete `node_modules` and `.next`:
```bash
rm -rf node_modules .next out
```

2. Reinstall dependencies:
```bash
yarn install
```

3. Rebuild:
```bash
yarn build
```

### Font Loading Issues

If Inter font doesn't load, check:
- Internet connection (loads from Google Fonts)
- Browser console for errors
- Consider self-hosting fonts for better performance

## 📄 License

MIT - see [LICENSE](LICENSE).

## 🤝 Support

For questions or issues, contact:
- Email: ornuri17@gmail.com
- LinkedIn: [linkedin.com/in/or-nuri](https://www.linkedin.com/in/or-nuri/)

---

Built with ❤️ using Next.js and Tailwind CSS
