// src/app/page.js

import Hero from "../components/Hero";
import GallerySlider from "../components/GallerySlider";
import ServicesSection from "../sections/ServicesSection";
import LeadSection from "../components/AppointmentForm";
import Terminologies from "../components/Terminologies";
import TrustStats from "@/components/TrustStats";
import ProjectsSection from "../sections/ProjectsSection";
import AboutUsSection from "../components/AboutUsSection";

import siteConfig from "../data/siteConfig";
import Script from "next/script";

/* -----------------------------------------
   PAGE METADATA (HOMEPAGE – FINAL SEO VERSION)
------------------------------------------ */
export async function generateMetadata() {
  const fullTitle =
    "Petrol Pump Construction Company in India – 15+ Years Experience | Sai Ganesh Constructions";

  return {
    title: fullTitle,
    description: siteConfig.description,

    openGraph: {
      title: fullTitle,
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
      title: fullTitle,
      description: siteConfig.seo.ogDescription,
      images: [siteConfig.seo.ogImage],
    },

    alternates: {
      canonical: siteConfig.siteUrl,
    },
  };
}

/* -----------------------------------------
   HOME PAGE
------------------------------------------ */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <AboutUsSection />
      <ServicesSection />
      <ProjectsSection />
      <GallerySlider />
      <Terminologies />
      <LeadSection />

      {/* ================================
          STRUCTURED DATA (ENHANCED)
      ================================= */}
      <Script
        id="home-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": siteConfig.siteUrl,
                url: siteConfig.siteUrl,
                name:
                  "Petrol Pump Construction Company in India – 25+ Years Experience",
                description: siteConfig.description,
                inLanguage: "en-IN",
              },
              {
                "@type": "ConstructionCompany",
                "@id": `${siteConfig.siteUrl}#organization`,
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
              },
              {
                "@type": "Service",
                name: "Petrol Pump Construction",
                description:
                  "Turnkey petrol pump and fuel station construction including underground storage tank installation, canopy construction, electrical systems, and regulatory compliance.",
                provider: {
                  "@id": `${siteConfig.siteUrl}#organization`,
                },
                areaServed: {
                  "@type": "Country",
                  name: "India",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}