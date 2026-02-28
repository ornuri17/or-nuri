# or-nuri.ai

Modern, minimalist personal website for Or Nuri - Senior Tech Lead at monday.com, entrepreneur, and startup advisor.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Deployment:** Netlify

## 📦 Project Structure

```
or-nuri.ai/
├── app/
│   ├── components/
│   │   ├── layout/          # Layout components (Navbar, Footer, ScrollProgress)
│   │   ├── sections/        # Page sections (Hero, About, Experience, etc.)
│   │   └── ui/              # Reusable UI components (Button, Card, Badge, etc.)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities, animations, constants
│   ├── globals.css          # Global styles & design system
│   ├── layout.tsx           # Root layout with SEO
│   ├── metadata.ts          # SEO configuration
│   └── page.tsx             # Main landing page
├── public/                  # Static assets
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

All website content is centralized in `app/lib/constants.ts`. To update content:

1. Edit the constants file
2. Save and rebuild
3. Deploy

Key content sections:
- `SITE_CONFIG` - Site metadata and contact info
- `HERO_CONTENT` - Hero section content
- `ABOUT_CONTENT` - About section
- `EXPERIENCE_TIMELINE` - Career timeline
- `LEADERSHIP_PILLARS` - Leadership philosophy
- `EXPERTISE_AREAS` - Technical expertise
- `SUCCESS_STORIES` - Achievements
- `ADVISORY_CONTENT` - Advisory work

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
   - Add custom domain: `or-nuri.ai`
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

- ✅ Modern, minimalist design
- ✅ Fully responsive (mobile-first)
- ✅ Smooth scroll animations (Framer Motion)
- ✅ Interactive experience timeline
- ✅ SEO optimized with structured data
- ✅ Accessibility focused (WCAG AA)
- ✅ Fast static site generation
- ✅ Zero runtime JavaScript for content
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
npm install
```

3. Rebuild:
```bash
npm run build
```

### Font Loading Issues

If Inter font doesn't load, check:
- Internet connection (loads from Google Fonts)
- Browser console for errors
- Consider self-hosting fonts for better performance

## 📄 License

© 2024 Or Nuri. All rights reserved.

## 🤝 Support

For questions or issues, contact:
- Email: [your-email]
- LinkedIn: [your-linkedin]

---

Built with ❤️ using Next.js and Tailwind CSS
