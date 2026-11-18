import type { Metadata, Viewport } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import "./globals.css";
import { metadata as siteMetadata, jsonLd } from "./metadata";
import WebMCPProvider from "./components/WebMCPProvider";

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F3F2EE",
};

// Self-hosted at build time by next/font: no request to Google at runtime,
// no layout shift (size-adjusted fallbacks), only the subsets we use.
// Newsreader (SIL Open Font License), Latin subset, regular weight with the optical-size
// axis kept, so display sizes get display-cut letterforms at a fraction of the full family's size.
const serif = localFont({
  src: [
    { path: "./fonts/newsreader-roman.woff2", style: "normal", weight: "400" },
    { path: "./fonts/newsreader-italic.woff2", style: "italic", weight: "400" },
  ],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Iowan Old Style", "Georgia", "serif"],
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        {/* Marks the document as scripted before first paint, so reveal styles never hide content for no-JS readers or crawlers. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />

        {/* AI agent discovery hint */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="AI-readable profile" />
        <meta name="ai-agent-profile" content="https://or-nuri.com/for-bots" />
        <link rel="me" href="https://www.linkedin.com/in/or-nuri/" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <WebMCPProvider />
        {children}

        {/* Google Analytics, loaded once the browser is idle so it never competes with first paint or input. */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-V8T8W9TY6N" strategy="lazyOnload" />
        <Script id="ga" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-V8T8W9TY6N');`}
        </Script>
      </body>
    </html>
  );
}
