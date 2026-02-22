// src/app/page.js

import Hero from "../components/Hero";
import GallerySlider from "../components/GallerySlider";
import ServicesSection from "../sections/ServicesSection";
import LeadSection from "../components/AppointmentForm";
import Terminologies from "../components/Terminologies";
import TrustStats from "@/components/TrustStats";
import ProjectsSection from "../sections/ProjectsSection";
import AboutUsSection from "../components/AboutUsSection"

import siteConfig from "../data/siteConfig";
import Script from "next/script";

/* -----------------------------------------
   PAGE METADATA (SEO + WHATSAPP SAFE)
------------------------------------------ */
export async function generateMetadata() {
  return {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.description,

    openGraph: {
      title: siteConfig.seo.ogTitle,
      description: siteConfig.seo.ogDescription,
      url: siteConfig.siteUrl,
      siteName: siteConfig.companyName,
      type: "website",
      images: [
        {
          url: siteConfig.seo.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.companyName,
        },
      ],
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
      {/* Hero */}
      <Hero />

        {/* Trust Stats */}
        <TrustStats />
        {/* About Us */}
        <AboutUsSection />
      {/* Services */}
      <ServicesSection />
{/* Projects */}
<ProjectsSection />

      {/* Gallery */}
      <GallerySlider />

      {/* Terminologies */}
<Terminologies />

      {/* Lead / CTA */}
      <LeadSection />

      {/* ================================
          STRUCTURED DATA (SEO BOOST)
      ================================= */}
      <Script
        id="home-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                name: siteConfig.companyName,
                url: siteConfig.siteUrl,
                description: siteConfig.description,
              },
              {
                "@type": "ConstructionCompany",
                name: siteConfig.companyName,
                url: siteConfig.siteUrl,
                telephone: siteConfig.phone,
                areaServed: "India",
              },
              {
                "@type": "Service",
                name: "Petrol Pump Construction",
                provider: {
                  "@type": "ConstructionCompany",
                  name: siteConfig.companyName,
                },
                areaServed: "India",
              },
            ],
          }),
        }}
      />
    </>
  );
}