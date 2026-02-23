"use client";

import siteConfig from "../../data/siteConfig";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !projectType) return;

    const text = `
🏗️ Project Inquiry - ${siteConfig.companyName}

Name: ${name}
Phone: ${phone}
Project Type: ${projectType}
Details: ${message || "Not Provided"}
    `;

    const link = `https://wa.me/${siteConfig.whatsapp.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(text)}`;

    window.open(link, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-20 text-center bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl leading-tight mb-6">
            <span className="text-[#FF6600] font-[var(--font-playfair)] font-bold">
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
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* ================= LEFT SIDE - CONTACT INFO ================= */}
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

          {/* ================= RIGHT SIDE - FORM ================= */}
          <div>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-700 mb-2">
                  Inquiry Sent Successfully
                </h3>
                <p className="text-slate-600 text-sm">
                  Please complete the WhatsApp message to connect with our team.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-sm space-y-5"
              >
                <h3 className="text-2xl font-bold text-[#003399] mb-4">
                  Request a Consultation
                </h3>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#FF6600] outline-none"
                  required
                />

                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="WhatsApp Number"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#FF6600] outline-none"
                  required
                />

                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#FF6600] outline-none"
                  required
                >
                  <option value="">Select Project Type</option>
                  <option>Petrol Pump Construction</option>
                  <option>Fuel Station Renovation</option>
                  <option>Infrastructure Development</option>
                  <option>Consultation & Planning</option>
                </select>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Project Details (Optional)"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#FF6600] outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90"
                  style={{ background: "linear-gradient(90deg,#003399,#FF6600)" }}
                >
                  Send via WhatsApp
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

          </div>

        </div>
      </section>
    </div>
  );
}

/* ================= INFO CARD ================= */

function InfoCard({ icon, title, content }) {
  return (
    <div className="flex gap-4 bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition">
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