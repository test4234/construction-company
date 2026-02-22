import siteConfig from "../../data/siteConfig";
import { AlertTriangle, Scale, FileText, Info } from "lucide-react";

export const metadata = {
  title: `Disclaimer | ${siteConfig.companyName}`,
  description:
    "Disclaimer outlining limitations related to project information, services, and website content.",
};

export default function Disclaimer() {
  const sections = [
    { id: "general", title: "General Information" },
    { id: "services", title: "Service Disclaimer" },
    { id: "costs", title: "Project & Costs" },
    { id: "regulatory", title: "Regulatory Compliance" },
    { id: "images", title: "Visual Representations" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ================= HEADER: BLUEPRINT STYLE ================= */}
      <header className="bg-slate-900 pt-24 pb-20 relative overflow-hidden">
        {/* Architectural Grid Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(#2d3748 1px, transparent 1px), linear-gradient(90deg, #2d3748 1px, transparent 1px)`, size: '40px 40px', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center mb-6 rotate-3 shadow-xl">
              <Scale className="w-8 h-8 text-white -rotate-3" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Legal <span className="text-[var(--color-primary)]">Disclaimer</span>
            </h1>
            <p className="mt-6 max-w-2xl text-slate-400 text-lg md:text-xl">
              Please read these terms carefully. They outline the scope of our professional liabilities and the nature of information provided by {siteConfig.companyName}.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* ================= LEFT: NAVIGATION (STICKY) ================= */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 space-y-4">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Quick Navigation
                </h3>
                <nav className="space-y-2">
                  {sections.map((s) => (
                    <a key={s.id} href={`#${s.id}`} className="block text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors">
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
                <div className="flex items-center gap-2 text-orange-700 font-bold text-sm mb-2">
                  <AlertTriangle className="w-4 h-4" /> Notice
                </div>
                <p className="text-xs text-orange-600 leading-relaxed">
                  The content on this site does not constitute a formal offer or contract unless explicitly signed.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= RIGHT: CONTENT AREA ================= */}
          <article className="lg:w-3/4">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-8 md:p-12 prose prose-slate max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed">
                
                <section id="general" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4 text-[var(--color-primary)]">
                    <Info className="w-6 h-6" />
                    <h2 className="m-0 text-2xl uppercase tracking-tight">1. General Information</h2>
                  </div>
                  <p>
                    This website is provided for general informational purposes only. While <strong>{siteConfig.companyName}</strong> strives to ensure that all information is accurate and up to date, no guarantees are made regarding the completeness, reliability, or accuracy of the materials found herein.
                  </p>
                </section>

                <hr className="my-10 border-slate-100" />

                <section id="services" className="scroll-mt-28">
                  <h2 className="text-2xl uppercase tracking-tight">2. Service Information Disclaimer</h2>
                  <p>
                    Information related to petrol pump construction, infrastructure development, and maintenance is intended for general awareness. 
                    <strong> Note:</strong> Final project scope, costs, and regulatory timelines are subject to site conditions, PESO approvals, and individual contractual agreements.
                  </p>
                </section>

                <section id="costs" className="scroll-mt-28">
                  <h2 className="text-2xl uppercase tracking-tight">3. Project & Cost Estimates</h2>
                  <p>
                    Any cost estimates or project timelines mentioned on this website are indicative only. Final quotations will be provided exclusively through official channels after thorough site evaluation and technical assessment.
                  </p>
                </section>

                <section id="regulatory" className="scroll-mt-28">
                  <h2 className="text-2xl uppercase tracking-tight">4. Regulatory Compliance</h2>
                  <p>
                    All projects undertaken are subject to applicable local, state, and national regulations. {siteConfig.companyName} acts as a contractor; the client remains responsible for providing necessary land documentation and primary ownership approvals.
                  </p>
                </section>

                <section id="images" className="scroll-mt-28">
                  <h2 className="text-2xl uppercase tracking-tight">5. Images & Representations</h2>
                  <p>
                    Images used on this website may include representative project visuals or 3D renders for design purposes. Actual project execution may vary based on client choice, regional requirements, and site conditions.
                  </p>
                </section>

                <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="text-[10px] font-mono font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded">
                    REF-ID: {siteConfig.companyName.substring(0, 3).toUpperCase()}-LEGAL-2026
                  </div>
                  <div className="text-sm text-slate-500 italic">
                    Effective as of January 01, 2026
                  </div>
                </div>

              </div>
            </div>
          </article>

        </div>
      </main>
    </div>
  );
}