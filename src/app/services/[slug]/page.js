// src/app/services/[slug]/page.js

import services from "../../../data/services";
import { buildMeta } from "../../../lib/seo";
import siteConfig from "../../../data/siteConfig";
import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";

/* -----------------------------------------
   STATIC PARAMS
------------------------------------------ */
export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

/* -----------------------------------------
   METADATA
------------------------------------------ */
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const meta = buildMeta({
    title: service.seo?.title || service.title,
    description: service.seo?.description || service.short,
    path: `/services/${service.slug}`,
  });

  return {
    title: meta.title,
    description: meta.description,
  };
}

/* -----------------------------------------
   PAGE
------------------------------------------ */
export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Service Not Found
      </div>
    );
  }

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-[#003399] text-white py-24 border-b-8 border-[#FF6600]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-sm uppercase tracking-widest text-orange-300 font-bold">
            Petrol Pump Infrastructure Service
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 leading-tight">
            {service.title}
          </h1>

          {service.short && (
            <p className="mt-6 text-lg text-white/90 max-w-3xl">
              {service.short}
            </p>
          )}
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-16">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            <h2 className="text-3xl font-bold text-[#003399] mb-6">
              Service Overview
            </h2>

            <div className="h-1 w-20 bg-[#FF6600] mb-8" />

            <p className="text-slate-700 leading-relaxed text-lg mb-14">
              {service.content}
            </p>

            {/* FEATURES */}
            {service.highlights?.length > 0 && (
              <>
                <h2 className="text-3xl font-bold text-[#003399] mb-6">
                  Key Capabilities
                </h2>

                <div className="h-1 w-20 bg-[#FF6600] mb-10" />

                <div className="grid sm:grid-cols-2 gap-6">
                  {service.highlights.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 border-l-4 border-[#FF6600] pl-4 py-2"
                    >
                      <CheckCircle className="w-5 h-5 text-[#003399] mt-1" />
                      <p className="text-slate-700">{point}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="border border-slate-200 rounded-xl p-10 bg-slate-50 h-fit">

            <h3 className="text-xl font-bold text-[#003399] mb-4">
              Start Your Project
            </h3>

            <div className="h-1 w-16 bg-[#FF6600] mb-6" />

            <p className="text-slate-600 text-sm mb-8">
              {siteConfig.companyName} delivers complete turnkey petrol pump
              construction solutions including underground tank installation,
              canopy fabrication, and regulatory compliance.
            </p>

            <div className="space-y-4">
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-4 bg-[#003399] text-white font-semibold rounded-lg hover:bg-[#002b80] transition"
              >
                Request a Quote
              </Link>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-2 px-6 py-4 border border-[#003399] text-[#003399] font-semibold rounded-lg hover:bg-[#003399] hover:text-white transition"
              >
                <Phone className="w-4 h-4" />
                Call {siteConfig.phone}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= STRONG BOTTOM CTA ================= */}
      <section className="bg-[#003399] text-white py-20 border-t-8 border-[#FF6600]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
            Building Reliable Fuel Infrastructure Across India
          </h2>

          <p className="text-white/80 mb-10 max-w-3xl mx-auto">
            With over 25 years of experience, we specialize in high-performance,
            PESO-compliant petrol pump construction and turnkey fuel station
            development.
          </p>

          <Link
            href="/contact"
            className="px-10 py-4 bg-[#FF6600] text-white font-bold rounded-lg hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}