// src/app/robots.js

// import siteConfig from "../data/siteConfig";

// export default function robots() {
//   const base =
//     typeof siteConfig.siteUrl === "string"
//       ? siteConfig.siteUrl.replace(/\/$/, "")
//       : "";

//   return {
//     rules: [
//       {
//         userAgent: "*",

//         allow: "/",

//         disallow: [
//           "/api/",
//           "/admin/",
//           "/_next/",
//           "/preview/",
//           "/draft/",
//         ],
//       },
//     ],

//     sitemap: base ? `${base}/sitemap.xml` : undefined,

//     host: base || undefined,
//   };
// }




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