// src/lib/seo.js

import siteConfig from "../data/siteConfig";

/* =====================================================
   BUILD META (Reusable Metadata Generator)
===================================================== */
export function buildMeta({
  title,
  description,
  keywords = [],
  path = "/",
  image,
}) {
const fullTitle = title || siteConfig.seo.defaultTitle;

  const url = new URL(path, siteConfig.siteUrl).toString();

const ogImage = image
  ? new URL(image, siteConfig.siteUrl).toString()
  : new URL(siteConfig.seo.ogImage, siteConfig.siteUrl).toString();

  return {
    title: fullTitle,
    description: description || siteConfig.description,

    keywords: Array.from(
      new Set([...(keywords || []), ...siteConfig.seo.keywords])
    ).join(", "),

    openGraph: {
      title: fullTitle,
      description: description || siteConfig.seo.ogDescription,
      url,
      siteName: siteConfig.companyName,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.companyName,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description || siteConfig.seo.ogDescription,
      images: [ogImage],
    },

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/* =====================================================
   ORGANIZATION / CONSTRUCTION COMPANY SCHEMA
===================================================== */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ConstructionCompany",
    name: siteConfig.companyName,
    url: siteConfig.siteUrl,
    logo: new URL(siteConfig.logo, siteConfig.siteUrl).toString(),
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.defaultCity,
      addressRegion: siteConfig.state || "",
      addressCountry: "IN",
    },
    areaServed: "India",
    sameAs: siteConfig.socials || [],
  };
}

/* =====================================================
   WEBSITE SCHEMA
===================================================== */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.companyName,
    url: siteConfig.siteUrl,
  };
}

/* =====================================================
   SERVICE SCHEMA (Dynamic Per Service Page)
===================================================== */
export function serviceSchema(service) {
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.short || service.content,
    provider: {
      "@type": "ConstructionCompany",
      name: siteConfig.companyName,
      url: siteConfig.siteUrl,
    },
    areaServed: "India",
  };
}

/* =====================================================
   BREADCRUMB SCHEMA
===================================================== */
export function breadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.siteUrl).toString(),
    })),
  };
}