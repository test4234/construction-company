// src/app/layout.js

import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import siteConfig from "../data/siteConfig";
import { Poppins, Playfair_Display } from "next/font/google";
import Script from "next/script";

/* -----------------------------------------
   GLOBAL METADATA (PRODUCTION READY SEO)
------------------------------------------ */
export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),

  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s | ${siteConfig.companyName}`,
  },

  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,

 robots: {
  index: false,
  follow: false,
  nocache: true,
  googleBot: {
    index: false,
    follow: false,
  },
},

  openGraph: {
    title: siteConfig.seo.ogTitle,
    description: siteConfig.seo.ogDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.companyName,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.companyName,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.ogTitle,
    description: siteConfig.seo.ogDescription,
    images: [siteConfig.seo.ogImage],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  alternates: {
    canonical: siteConfig.siteUrl,
  },

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  themeColor: "#ffffff",
};

/* -----------------------------------------
   VIEWPORT
------------------------------------------ */
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

/* -----------------------------------------
   FONT SETUP
------------------------------------------ */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

/* -----------------------------------------
   ROOT LAYOUT
------------------------------------------ */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${playfair.variable} font-[var(--font-poppins)] bg-secondary antialiased`}
      >
        {/* Accessibility Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg z-50"
        >
          Skip to content
        </a>

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main
          id="main-content"
          className="relative min-h-screen bg-secondary"
        >
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Floating Button */}
        <WhatsAppButton />

        {/* ✅ Organization Schema (SEO Optimized) */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ConstructionCompany",
              name: siteConfig.companyName,
              url: siteConfig.siteUrl,
              logo: `${siteConfig.siteUrl}${siteConfig.logo}`,
              telephone: siteConfig.phone,
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address,
                addressLocality: siteConfig.defaultCity,
                addressRegion: siteConfig.state,
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              sameAs: siteConfig.socials,
            }),
          }}
        />
      </body>
    </html>
  );
}