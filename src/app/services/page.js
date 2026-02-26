// src/app/services/page.js

import services from "../../data/services";
import { buildMeta } from "../../lib/seo";
import ServiceCard from "../../components/ServiceCard";
import siteConfig from "../../data/siteConfig";
import Link from "next/link";
import { Building2, Briefcase } from "lucide-react";

/* =====================================================
   SEO METADATA (FIXED + COMPLETE)
===================================================== */
export async function generateMetadata() {
  return buildMeta({
    title: "Petrol Pump Construction Services",
    description: `Explore turnkey petrol pump construction, underground tank installation, canopy development, and complete fuel station infrastructure services by ${siteConfig.companyName}.`,
    path: "/services",
  });
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
           HERO SECTION
      ===================================================== */}
      <section className="pt-28 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
            <Building2 className="w-4 h-4 text-[#FF6600]" />
            <span className="text-sm font-semibold text-slate-600">
              Fuel Infrastructure Experts
            </span>
          </div>

          {/* SEO-Optimized H1 */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="text-[#003399]">
              Petrol Pump Construction
            </span>{" "}
            <span className="text-[#FF6600]">
              Services
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.companyName} provides complete petrol pump construction
            and fuel station infrastructure solutions including site development,
            underground storage tank installation, canopy construction, electrical
            works, fire safety systems, and regulatory compliance management.
          </p>

        </div>
      </section>

      {/* =====================================================
           SERVICES GRID
      ===================================================== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.slug}
                className="transition-transform duration-300 hover:-translate-y-2"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
           CTA SECTION
      ===================================================== */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-6">
            <Briefcase className="w-4 h-4 text-[#FF6600]" />
            <span className="text-sm font-semibold text-slate-600">
              Start Your Project
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#003399] mb-6">
            Planning a Petrol Pump Project?
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            Get expert consultation, detailed project estimation, and complete
            turnkey construction services tailored to your site requirements.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:opacity-90"
            style={{
              background: "linear-gradient(90deg,#003399,#FF6600)",
            }}
          >
            Request a Quote
          </Link>

        </div>
      </section>

    </div>
  );
}