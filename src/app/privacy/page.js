import siteConfig from "../../data/siteConfig";
import { buildMeta } from "../../lib/seo";
import Link from "next/link";
import Script from "next/script";
import {
  ShieldCheck,
  EyeOff,
  Lock,
  Database,
  ArrowRight,
  UserCheck,
} from "lucide-react";

/* =====================================================
   🔥 SEO METADATA (Optimized)
===================================================== */
export async function generateMetadata() {
  return buildMeta({
    title: "Privacy Policy",
    description: `Privacy policy explaining how ${siteConfig.companyName} handles client enquiries, petrol pump project information, and website interactions across India.`,
    path: "/privacy",
  });
}

export default function Privacy() {
  const highlights = [
    { icon: <EyeOff className="w-5 h-5" />, text: "No public data sharing" },
    { icon: <Database className="w-5 h-5" />, text: "No 3rd-party data sales" },
    { icon: <Lock className="w-5 h-5" />, text: "Secure enquiry handling" },
    { icon: <UserCheck className="w-5 h-5" />, text: "Explicit consent usage" },
  ];

  return (
    <>
      {/* ================= STRUCTURED DATA ================= */}
      <Script
        id="privacy-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            url: `${siteConfig.siteUrl}/privacy`,
            publisher: {
              "@type": "Organization",
              name: siteConfig.companyName,
              url: siteConfig.siteUrl,
            },
          }),
        }}
      />

      <div className="bg-white min-h-screen">

        {/* ================= HEADER ================= */}
        <header className="pt-24 pb-16 bg-slate-50 border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck className="w-4 h-4" /> Data Security Verified
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-none mb-8">
              Privacy <span className="text-slate-300 italic">Promise.</span>
            </h1>

            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              At <strong>{siteConfig.companyName}</strong>, your project details are
              treated with the same precision as our engineering.
            </p>

            <p className="mt-4 text-sm text-slate-400">
              Proprietor: <strong>Mr. Ganesh Golla</strong>
            </p>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-600">
                  <div className="shrink-0 text-green-500">{h.icon}</div>
                  <span className="text-sm font-semibold">{h.text}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ================= CONTENT ================= */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row gap-16">

            <div className="lg:w-2/3">
              <div className="prose prose-slate max-w-none">

                <p className="lead border-b border-slate-100 pb-8 mb-12">
                  <strong>{siteConfig.companyName}</strong> respects your privacy.
                  This policy covers how we collect, use, and protect your
                  personal and business information.
                </p>

                <h2>Information We Collect</h2>
                <ul>
                  <li>Name and Corporate Identity</li>
                  <li>Contact Details (Phone, Email)</li>
                  <li>Project Location & Site Specifications</li>
                </ul>

                <h2>How Your Information Is Used</h2>
                <p>
                  Your data is used strictly for responding to enquiries,
                  preparing project feasibility reports, and managing
                  petrol pump construction discussions.
                </p>

                <h2>Data Security</h2>
                <p>
                  We implement encrypted communication and restricted access
                  protocols to safeguard confidential information.
                </p>

                <h2>Your Rights & Consent</h2>
                <p>
                  You may request deletion of your enquiry data at any time
                  by contacting us at{" "}
                  <strong>{siteConfig.email}</strong>.
                </p>

              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3">
              <div className="sticky top-28 bg-[var(--color-primary)] text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold mb-4">
                  Privacy Questions?
                </h3>
                <p className="text-white/80 text-sm mb-8 leading-relaxed">
                  Contact our compliance administrator for clarifications.
                </p>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition"
                >
                  Contact Admin <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </aside>

          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-50 py-12 border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
            <p className="text-sm text-slate-400 font-medium">
              © 2026 {siteConfig.companyName}. All rights reserved.
            </p>
            <p className="text-sm text-slate-500 font-bold">
              Last Reviewed: January 2026
            </p>
          </div>
        </footer>

      </div>
    </>
  );
}