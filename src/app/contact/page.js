// src/app/contact/page.js

import siteConfig from "../../data/siteConfig";
import ContactForm from "../../components/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  User,
} from "lucide-react";
import Script from "next/script";

/* =========================================
   SEO METADATA (Server Component)
========================================= */
export async function generateMetadata() {
  return {
    title: "Contact Us – Petrol Pump Construction Experts",
    description:
      "Contact Sai Ganesh Constructions for petrol pump construction, fuel station development, and infrastructure projects across India. Speak directly with our expert team today.",
    alternates: {
      canonical: `${siteConfig.siteUrl}/contact`,
    },
  };
}

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">

      {/* ================= HERO ================= */}
      <section className="pt-28 text-center bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl leading-tight mb-6">
            <span className="text-[#FF6600] font-bold">
              Contact
            </span>{" "}
            <span className="text-[#003399] font-semibold">
              Sai Ganesh Constructions
            </span>
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Let’s discuss your next petrol pump or infrastructure project.
            Our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <InfoCard
              icon={<MapPin className="w-5 h-5" />}
              title="Office Address"
              content={siteConfig.address}
            />

            <InfoCard
              icon={<Phone className="w-5 h-5" />}
              title="Phone"
              content={
                <a href={`tel:${siteConfig.phone}`} className="hover:underline">
                  {siteConfig.phone}
                </a>
              }
            />

            <InfoCard
              icon={<Mail className="w-5 h-5" />}
              title="Email"
              content={
                <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                  {siteConfig.email}
                </a>
              }
            />

            <InfoCard
              icon={<Clock className="w-5 h-5" />}
              title="Working Hours"
              content="Monday – Saturday : 9:00 AM – 6:00 PM"
            />

            <InfoCard
              icon={<Globe className="w-5 h-5" />}
              title="Service Area"
              content="Serving projects across India"
            />

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            <ProprietorCard />

            <ContactForm />

          </div>

        </div>
      </section>

      {/* ================= CONTACT PAGE SCHEMA ================= */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Sai Ganesh Constructions",
            url: `${siteConfig.siteUrl}/contact`,
          }),
        }}
      />
    </div>
  );
}

/* ================= PROPRIETOR CARD ================= */

function ProprietorCard() {
  return (
    <div className="relative bg-white border border-slate-200 rounded-xl shadow-sm p-6 flex items-center gap-4">
      <div className="absolute left-0 top-0 h-full w-1 bg-[#FF6600] rounded-l-xl"></div>

      <div className="bg-slate-100 p-3 rounded-lg">
        <User className="w-6 h-6 text-[#003399]" />
      </div>

      <div>
        <p className="text-xs uppercase tracking-wider text-slate-500">
          Our Proprietor
        </p>
        <h3 className="text-lg font-semibold text-[#003399]">
          Mr. Ganesh Golla
        </h3>
      </div>
    </div>
  );
}

/* ================= INFO CARD ================= */

function InfoCard({ icon, title, content }) {
  return (
    <div className="flex gap-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
      <div className="w-10 h-10 bg-[#FF6600] text-white flex items-center justify-center rounded-lg">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-[#003399] mb-1">
          {title}
        </h4>
        <p className="text-slate-600 text-sm leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
}