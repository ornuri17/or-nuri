# or-nuri.com

Modern, minimalist personal website for Or Nuri - Senior Tech Lead at monday.com, entrepreneur, and startup advisor.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Hand-written CSS with design tokens (`app/globals.css`), no CSS framework
- **Motion:** CSS transitions, one CSS scroll-driven animation, and two small client components. No animation library.
- **Fonts:** Newsreader (self-hosted, Latin, optical-size axis) and Geist (via `next/font`)
- **Deployment:** Netlify

## 📦 Project Structure

```
app/
├── components/
│   ├── Folio.tsx          # Running head: current chapter, Contents dialog, scroll reveals
│   ├── FixStage.tsx       # Chapter III: the self-repairing form (signature interaction)
│   └── WebMCPProvider.tsx # WebMCP tool registration for AI agents
├── fonts/                 # Self-hosted Newsreader woff2 files
├── lib/
│   ├── constants.ts       # Site config, press, FAQ (also feeds metadata + JSON-LD)
│   └── content.ts         # Chapter list, career, receipts, principles
├── globals.css            # The whole design system and layout
├── layout.tsx             # Fonts, analytics, discovery hints
├── page.tsx               # The chapters
└── not-found.tsx          # 404
scrollcraft/               # Design brief and build record (not deployed)
```

## 🎨 Design

The homepage is a chaptered editorial profile: a title page with a real table of contents,
then seven chapters on alternating paper grounds, with one dark chapter as the peak.
A folio in the left margin (a bottom chip on phones) names the current chapter and opens the contents.

Chapter III is the signature: a small demo form with three real accessibility defects. Scrolling
through it, each defect is circled, measured live in the browser (contrast ratio, target size,
focus ring) and fixed, then stamped shipped. It re-enacts the accessibility agents project at monday.com.
With reduced motion, no JS, or a screen too short for the sticky stage, it renders as the finished state.

- **Grounds:** paper `#F3F2EE`, stock `#E8E6DF`, ink `#121417`
- **Ink:** `#16181B`, secondary `#575C64`
- **Accent:** vermilion `#B5361C` on paper, `#FF7F61` on ink (one hue, two lightnesses)
- **Type:** Newsreader for display and prose, Geist for labels and figures

The brief, feeling curve and verification notes are in `scrollcraft/builds/or-nuri/BRIEF.md`.

## 🛠️ Development

### Prerequisites
- Node.js 20+
- npm or pnpm

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd or-nuri.ai
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export to `/out`)
- `npm run start` - Start production server (not needed for static export)
- `npm run lint` - Run ESLint

## 📝 Content Management

Homepage copy lives in two files:

- `app/lib/content.ts`: chapter list (titles feed the contents and the folio), career rows, receipts ledger, principles, advisory focus.
- `app/lib/constants.ts`: `SITE_CONFIG` (contact links), `MEDIA_COVERAGE`, `FAQ_CONTENT`, plus the long-form text used by metadata and JSON-LD.

Prose in chapters I and V is written directly in `app/page.tsx`. Use real numbers only.

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

### CV/Resume
Place your CV at:
```
/public/resume/or-nuri-cv.pdf
```

### Company Logos
Add company logos to:
```
/public/logos/
```

## 🚀 Deployment

### Netlify Deployment

1. **Connect Repository:**
   - Log in to Netlify
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Configure Build:**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 20

3. **Custom Domain:**
   - Add custom domain: `or-nuri.com` (production; `www` redirects to apex)
   - Configure DNS settings
   - Enable HTTPS (automatic via Let's Encrypt)

4. **Deploy:**
   - Push to main branch to trigger automatic deployment

### Manual Deployment

```bash
# Build the site
npm run build

# The static site will be in the /out directory
# Upload contents to any static hosting provider
```

## ✅ Pre-Deployment Checklist

- [ ] Update all content in `app/lib/constants.ts`
- [ ] Add professional headshot (`/public/images/or-nuri-professional.jpg`)
- [ ] Add Open Graph image (`/public/images/og-image.png`)
- [ ] Add CV/Resume PDF (`/public/resume/or-nuri-cv.pdf`)
- [ ] Update email in `SITE_CONFIG`
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test all navigation links
- [ ] Test contact links (email, LinkedIn, GitHub)
- [ ] Run `npm run build` successfully
- [ ] Test accessibility (WCAG AA)
- [ ] Verify SEO metadata

## 📊 Performance Goals

- Lighthouse Performance: >95
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.5s
- Total Bundle Size: <200KB gzipped

## 🎯 Features

- ✅ Chaptered editorial layout with a margin folio and Contents dialog
- ✅ Signature scroll interaction with live, in-browser accessibility measurements
- ✅ Fully responsive, with a phone-specific layout for every chapter
- ✅ Reduced-motion and no-JS versions that keep all content
- ✅ SEO and AI discoverability: JSON-LD, FAQ, llms.txt, WebMCP, /for-bots
- ✅ Lighthouse (mobile): Performance 90, Accessibility, Best Practices and SEO 100

## 🔧 Customization

Edit the tokens at the top of `app/globals.css` (`--paper`, `--stock`, `--ink`, `--accent`, ...).
The dark chapter redefines them under `.ground-ink`.

To add a chapter: add it to `CHAPTERS` in `app/lib/content.ts`, then render a
`<section id="..." className="chapter ground-paper" data-ground="paper">` with that id in `app/page.tsx`.

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

1. Delete `node_modules` and `.next`:
```bash
rm -rf node_modules .next out
```

2. Reinstall dependencies:
```bash
npm install
```

3. Rebuild:
```bash
npm run build
```

## 📄 License

© 2024 Or Nuri. All rights reserved.

## 🤝 Support

For questions or issues, contact:
- Email: [your-email]
- LinkedIn: [your-linkedin]

---

Built with Next.js
