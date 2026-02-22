import siteConfig from "../../data/siteConfig";
import Link from "next/link";
import { ShieldCheck, EyeOff, Lock, Database, ArrowRight, UserCheck } from "lucide-react";

export const metadata = {
  title: `Privacy Policy | ${siteConfig.companyName}`,
  description: `Privacy policy explaining how ${siteConfig.companyName} handles client enquiries, project information, and website interactions.`,
  alternates: {
    canonical: `${siteConfig.siteUrl}/privacy`,
  },
};

export default function Privacy() {
  const highlights = [
    { icon: <EyeOff className="w-5 h-5" />, text: "No public data sharing" },
    { icon: <Database className="w-5 h-5" />, text: "No 3rd-party data sales" },
    { icon: <Lock className="w-5 h-5" />, text: "Secure enquiry handling" },
    { icon: <UserCheck className="w-5 h-5" />, text: "Explicit consent usage" },
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* ================= HEADER: MINIMALIST & BOLD ================= */}
      <header className="pt-24 pb-16 bg-slate-50 border-b border-slate-100 relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldCheck className="w-4 h-4" /> Data Security Verified
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-none mb-8">
            Privacy <span className="text-slate-300 italic">Promise.</span>
          </h1>

          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            At {siteConfig.companyName}, your project details are treated with the same precision as our engineering. Here is how we handle your information.
          </p>

          {/* Quick Summary Bar */}
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

      {/* ================= CONTENT: THE "SAFE FONT" LAYOUT ================= */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Policy Text */}
          <div className="lg:w-2/3">
            <div className="prose prose-slate max-w-none prose-h2:text-3xl prose-h2:font-black prose-h2:text-slate-900 prose-p:text-slate-600 prose-p:text-lg prose-li:text-slate-600 prose-strong:text-slate-900">
              
              <p className="lead border-b border-slate-100 pb-8 mb-12">
                <strong>{siteConfig.companyName}</strong> respects your privacy. This policy covers how we collect, use, and protect your personal and business information during our collaboration.
              </p>

              <section className="mb-16">
                <h2>Information We Collect</h2>
                <p>
                  We only collect information that you voluntarily provide through our project enquiry forms, WhatsApp, or direct email. This typically includes:
                </p>
                <ul>
                  <li>Name and Corporate Identity</li>
                  <li>Contact Details (Phone, Email)</li>
                  <li>Project Location & Site Specifications</li>
                </ul>
              </section>

              <section className="mb-16">
                <h2>How Your Information Is Used</h2>
                <p>
                  We use your data exclusively for business operations related to your request. We do not engage in cold-calling or unrelated email marketing.
                </p>
                <div className="bg-slate-900 text-white p-8 rounded-2xl my-8">
                  <h4 className="text-white mt-0 mb-4">The "No-Sell" Guarantee</h4>
                  <p className="text-slate-400 text-sm mb-0 italic">
                    "Under no circumstances does {siteConfig.companyName} sell, lease, or trade client information to 3rd-party marketing agencies."
                  </p>
                </div>
              </section>

              <section className="mb-16">
                <h2>Data Security</h2>
                <p>
                  We implement encrypted communication channels and internal access controls to ensure your project blueprints and personal data remain confidential. While no system is 100% secure, we follow industry best practices for data protection.
                </p>
              </section>

              <section className="mb-16">
                <h2>Your Rights & Consent</h2>
                <p>
                  By using this website, you consent to this policy. You have the right to request the deletion of your enquiry data from our records at any time.
                </p>
              </section>
            </div>
          </div>

          {/* Sidebar: Direct Contact Card */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28">
              <div className="bg-[var(--color-primary)] text-white p-8 rounded-3xl shadow-xl shadow-orange-200/50">
                <h3 className="text-xl font-bold mb-4">Privacy Questions?</h3>
                <p className="text-white/80 text-sm mb-8 leading-relaxed">
                  If you have concerns about how your project data is being handled, contact our compliance officer directly.
                </p>
                <Link 
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition"
                >
                  Contact Admin <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-8 p-6 border border-slate-100 rounded-2xl text-center">
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 mb-2">
                    Official Policy Ref
                 </p>
                 <p className="text-xs font-mono text-slate-400 uppercase">
                    SC-PRIV-2026-V1
                 </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ================= FOOTER TIMESTAMP ================= */}
      <footer className="bg-slate-50 py-12 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <p className="text-sm text-slate-400 font-medium tracking-tight">
            © 2026 {siteConfig.companyName}. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 font-bold">
            Last Reviewed: January 2026
          </p>
        </div>
      </footer>
    </div>
  );
}