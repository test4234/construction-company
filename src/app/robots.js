// src/app/robots.js

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/"], // 🚫 Block entire site
      },
    ],
  };
}