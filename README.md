# or-nuri.com

Modern, minimalist personal website for Or Nuri - Senior Tech Lead at monday.com, entrepreneur, and startup advisor.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Hand-written CSS with design tokens (`app/globals.css`), no CSS framework
- **Motion:** CSS animations plus one small client component (`Effects.tsx`). No animation library.
- **Font:** Geist, self-hosted at build time via `next/font`
- **Deployment:** Netlify

## 📦 Project Structure

```
app/
├── components/
│   ├── Effects.tsx        # Reveals, count-ups, hero depth, card spotlight, agent pipeline loop
│   └── WebMCPProvider.tsx # WebMCP tool registration for AI agents
├── lib/
│   ├── constants.ts       # Site config, press, FAQ (also feeds metadata + JSON-LD)
│   └── content.ts         # Nav, logos, impact numbers, pipeline, career, advisory
├── globals.css            # The whole design system and layout
├── layout.tsx             # Fonts, analytics, discovery hints
├── page.tsx               # The homepage sections
└── not-found.tsx          # 404
scrollcraft/               # Design brief and build record (not deployed)
```

## 🎨 Design

Light premium minimal: a soft light canvas, white cards with layered depth, one cobalt accent, Geist throughout.

- **Hero:** headline and CTAs beside a layered stage (orbit ring, portrait card, floating proof chips) that moves with the pointer and the scroll.
- **Impact:** a grid of real numbers that count up on first view.
- **Agents:** an animated pipeline (feature lands → scanner agents → fixer agents → review → production), labelled as an illustration.
- **Career, advisory, press, FAQ, contact:** compact cards; the FAQ is collapsed.

Without JS, or with reduced motion, every element shows its final state.

- **Canvas** `#F6F7F9`, **ink** `#0B0D12`, **secondary** `#5B6170`, **accent** `#2B55F0`

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

- `app/lib/content.ts`: nav, logo strip, impact numbers, pipeline steps, career, principles, advisory focus.
- `app/lib/constants.ts`: `SITE_CONFIG` (contact links), `MEDIA_COVERAGE`, `FAQ_CONTENT`, plus the long-form text used by metadata and JSON-LD.

Section prose (hero, agents, advisory) is written directly in `app/page.tsx`. Use real numbers only.

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

- ✅ Layered hero with pointer and scroll depth
- ✅ Animated agents pipeline and count-up impact numbers
- ✅ Fully responsive, short page (about 7 screens on desktop)
- ✅ Reduced-motion and no-JS versions that keep all content
- ✅ SEO and AI discoverability: JSON-LD, FAQ, llms.txt, WebMCP, /for-bots
- ✅ Lighthouse: Performance 100 desktop and 86–94 mobile; Accessibility, Best Practices and SEO 100

## 🔧 Customization

Edit the tokens at the top of `app/globals.css` (`--bg`, `--ink`, `--accent`, ...). Content lives in `app/lib/content.ts` and `app/lib/constants.ts`.

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
