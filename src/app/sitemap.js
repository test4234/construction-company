// src/app/sitemap.js

import siteConfig from "../data/siteConfig";
import services from "../data/services";

export default async function sitemap() {
  const base =
    typeof siteConfig.siteUrl === "string"
      ? siteConfig.siteUrl.replace(/\/$/, "")
      : "";

  if (!base) return [];

  const now = new Date().toISOString();

  const urls = [];

  /* ===============================
     STATIC CORE PAGES
  =============================== */
  const staticPages = [
    { path: "", priority: 1.0 },
    { path: "about", priority: 0.9 },
    { path: "services", priority: 0.9 },
    { path: "gallery", priority: 0.8 },
    { path: "contact", priority: 0.9 },
    { path: "privacy", priority: 0.5 },
    { path: "terms", priority: 0.5 },
    { path: "disclaimer", priority: 0.4 },
  ];

  staticPages.forEach(({ path, priority }) => {
    urls.push({
      url: path ? `${base}/${path}` : base,
      lastModified: now,
      changeFrequency: "monthly",
      priority,
    });
  });

  /* ===============================
     DYNAMIC SERVICE PAGES
  =============================== */
  services.forEach((service) => {
    if (!service?.slug) return;

    urls.push({
      url: `${base}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  return urls;
}