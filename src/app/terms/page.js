import siteConfig from "../../data/siteConfig";
import Link from "next/link";
import {
  FileText,
  Shield,
  AlertCircle,
  ClipboardCheck,
  Scale,
  Mail,
  Phone,
  ChevronRight,
  Building,
  Gavel,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: `Terms & Conditions | ${siteConfig.companyName}`,
  description: `Legal terms governing the use of the ${siteConfig.companyName} website and engagement of petrol pump construction and infrastructure services.`,
  alternates: {
    canonical: `${siteConfig.siteUrl}/terms`,
  },
};

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
    <div className="min-h-screen bg-white">
      {/* ================= HERO: CONTRACTUAL HEADER ================= */}
      <header className="bg-slate-50 pt-20 pb-16 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[var(--color-primary)] font-bold text-sm uppercase tracking-widest mb-4">
                <Scale className="w-5 h-5" /> Regulatory Framework
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-none">
                Terms of <span className="text-slate-400">Service.</span>
              </h1>
              <p className="mt-6 text-lg text-slate-500 leading-relaxed">
                This document defines the professional relationship between <strong>{siteConfig.companyName}</strong> and our clients/visitors. By using this platform, you acknowledge and agree to these standards.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hidden md:block">
               <p className="text-[10px] font-black uppercase text-slate-400 mb-2">Effective Date</p>
               <p className="text-sm font-bold text-slate-900">January 01, 2026</p>
               <div className="mt-4 flex items-center gap-2 text-green-600 text-xs font-bold uppercase">
                  <CheckCircle2 className="w-4 h-4" /> Active Compliance
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* LEFT: PROGRESS NAVIGATION */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28">
              <div className="bg-slate-900 rounded-3xl p-8 text-white">
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
                
                <div className="mt-8 pt-8 border-t border-white/10">
                   <p className="text-xs text-slate-500 mb-4">Need a physical copy? Contact us at:</p>
                   <Link href={`mailto:${siteConfig.email}`} className="text-sm font-bold text-slate-200 hover:text-[var(--color-primary)] block transition">
                      {siteConfig.email}
                   </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT: LEGAL ARTICLES */}
          <div className="lg:w-2/3">
            <div className="space-y-12">
              
              <div className="p-6 bg-orange-50 rounded-2xl border-l-4 border-[var(--color-primary)] flex gap-4">
                <AlertCircle className="w-6 h-6 text-[var(--color-primary)] shrink-0" />
                <p className="text-sm text-orange-900 leading-relaxed font-medium">
                  <strong>Binding Agreement:</strong> Please note that these terms apply to all digital interactions and preliminary enquiries. Specific project-related terms will be governed by signed physical contracts.
                </p>
              </div>

              {sections.map((section, idx) => (
                <section key={section.id} id={section.id} className="scroll-mt-32 group">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-black text-slate-100 group-hover:text-[var(--color-primary)] transition-colors duration-500">
                      0{idx + 1}
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight m-0">
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="pl-12 border-l border-slate-100 ml-4 md:ml-6">
                    <div className="prose prose-slate max-w-none text-slate-600">
                      {section.id === "website-use" && (
                        <p>This website serves as a technical portfolio and enquiry portal. Content is for informational purposes and does not establish a consultant-client relationship until a formal engagement is signed.</p>
                      )}
                      {section.id === "enquiries" && (
                        <p>All quote requests submitted through our portal are subject to feasibility studies. {siteConfig.companyName} reserves the right to decline project enquiries based on site location, regulatory restrictions, or technical limitations.</p>
                      )}
                      {section.id === "scope" && (
                        <p>Our turnkey services include civil works, underground storage tank (UST) installation, canopy construction, and electrical cabling. Modification to scope post-agreement may result in price adjustments.</p>
                      )}
                      {section.id === "estimates" && (
                        <p>Indicative timelines for petrol pump completion (typically 6-12 months) are subject to external factors including OMCs (Oil Marketing Companies) approvals, PESO licensing, and weather conditions.</p>
                      )}
                      {section.id === "liability" && (
                        <p>{siteConfig.companyName} is not responsible for losses resulting from delays in government approvals or inaccuracies in documentation provided by the client.</p>
                      )}
                      {section.id === "governing-law" && (
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                          <p className="mb-0">These terms are governed by the <strong>Laws of India</strong>. Disputes are subject to the exclusive jurisdiction of the courts in Karnataka, India.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              ))}

              <footer className="pt-12 mt-12 border-t border-slate-100">
                <div className="flex flex-col md:flex-row justify-between gap-6 items-center">
                   <p className="text-xs font-mono text-slate-400">REF: SC-TERMS-2026-EN</p>
                   <div className="flex gap-4">
                      <Link href="/privacy" className="text-xs font-bold text-slate-400 hover:text-[var(--color-primary)]">Privacy Policy</Link>
                      <Link href="/disclaimer" className="text-xs font-bold text-slate-400 hover:text-[var(--color-primary)]">Disclaimer</Link>
                   </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}