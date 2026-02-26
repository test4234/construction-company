import siteConfig from "../../data/siteConfig";
import { buildMeta } from "../../lib/seo";
import Link from "next/link";
import Script from "next/script";
import {
  FileText,
  Shield,
  AlertCircle,
  ClipboardCheck,
  Scale,
  ChevronRight,
  Building,
  Gavel,
  CheckCircle2,
} from "lucide-react";

/* =====================================================
   🔥 SEO METADATA (Optimized)
===================================================== */
export async function generateMetadata() {
  return buildMeta({
    title: "Terms & Conditions",
    description: `Legal terms governing the use of the ${siteConfig.companyName} website and engagement of petrol pump construction and infrastructure services across India.`,
    path: "/terms",
  });
}

export default function Terms() {
  const sections = [
    { id: "website-use", title: "Website Use", icon: <FileText className="w-4 h-4" /> },
    { id: "enquiries", title: "Project Enquiries", icon: <ClipboardCheck className="w-4 h-4" /> },
    { id: "scope", title: "Scope of Services", icon: <Building className="w-4 h-4" /> },
    { id: "estimates", title: "Estimates & Timelines", icon: <Scale className="w-4 h-4" /> },
    { id: "liability", title: "Limitations of Liability", icon: <Shield className="w-4 h-4" /> },
    { id: "governing-law", title: "Governing Law", icon: <Gavel className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* ================= STRUCTURED DATA ================= */}
      <Script
        id="terms-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms and Conditions",
            url: `${siteConfig.siteUrl}/terms`,
            publisher: {
              "@type": "Organization",
              name: siteConfig.companyName,
              url: siteConfig.siteUrl,
            },
          }),
        }}
      />

      <div className="min-h-screen bg-white">

        {/* ================= HERO ================= */}
        <header className="bg-slate-50 pt-20 pb-16 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[var(--color-primary)] font-bold text-sm uppercase tracking-widest mb-4">
                <Scale className="w-5 h-5" /> Regulatory Framework
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-none">
                Terms of <span className="text-slate-400">Service.</span>
              </h1>

              <p className="mt-6 text-lg text-slate-500 leading-relaxed">
                These terms define the professional relationship between{" "}
                <strong>{siteConfig.companyName}</strong> and our clients.
                By using this platform, you acknowledge and agree to these standards.
              </p>

              <p className="mt-4 text-sm text-slate-400">
                Proprietor: <strong>Mr. Ganesh Golla</strong>
              </p>
            </div>
          </div>
        </header>

        {/* ================= MAIN CONTENT ================= */}
        <main className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* LEFT NAV */}
            <aside className="lg:w-1/3">
              <div className="sticky top-28 bg-slate-900 rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Article Index</h3>

                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="group flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-white/10 transition-all text-slate-400 hover:text-white"
                    >
                      <span className="text-[var(--color-primary)]">{s.icon}</span>
                      <span className="text-sm font-medium">{s.title}</span>
                      <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition" />
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* RIGHT CONTENT */}
            <div className="lg:w-2/3 space-y-12">

              <div className="p-6 bg-orange-50 rounded-2xl border-l-4 border-[var(--color-primary)] flex gap-4">
                <AlertCircle className="w-6 h-6 text-[var(--color-primary)] shrink-0" />
                <p className="text-sm text-orange-900 leading-relaxed font-medium">
                  <strong>Binding Agreement:</strong> These terms apply to all
                  digital interactions and preliminary enquiries. Project-specific
                  terms are governed by signed contracts.
                </p>
              </div>

              {sections.map((section, idx) => (
                <section key={section.id} id={section.id} className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-black text-slate-100">
                      0{idx + 1}
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">
                      {section.title}
                    </h2>
                  </div>

                  <div className="pl-12 border-l border-slate-100">
                    <p className="text-slate-600 leading-relaxed">
                      {section.id === "website-use" &&
                        "This website serves as a technical portfolio and enquiry portal. Content does not establish a consultant-client relationship until formal engagement."}

                      {section.id === "enquiries" &&
                        `${siteConfig.companyName} reserves the right to decline project enquiries based on feasibility, regulatory conditions, or technical limitations.`}

                      {section.id === "scope" &&
                        "Turnkey services include civil works, UST installation, canopy construction, and electrical systems. Scope modifications may affect pricing."}

                      {section.id === "estimates" &&
                        "Indicative timelines (6–12 months) depend on OMC approvals, PESO licensing, and external regulatory factors."}

                      {section.id === "liability" &&
                        `${siteConfig.companyName} is not liable for delays caused by government approvals or client documentation inaccuracies.`}

                      {section.id === "governing-law" &&
                        "These terms are governed by the Laws of India. Jurisdiction lies with courts in Karnataka, India."}
                    </p>
                  </div>
                </section>
              ))}

              <footer className="pt-12 mt-12 border-t border-slate-100 flex justify-between text-xs text-slate-400">
                <span>REF: SC-TERMS-2026-EN</span>
                <div className="flex gap-4">
                  <Link href="/privacy">Privacy Policy</Link>
                  <Link href="/disclaimer">Disclaimer</Link>
                </div>
              </footer>

            </div>
          </div>
        </main>
      </div>
    </>
  );
}