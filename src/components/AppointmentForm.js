"use client";

import { useState } from "react";
import {
  User,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Clock,
} from "lucide-react";

import siteConfig from "../data/siteConfig";

export default function ProjectInquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    if (!name || !phone || !projectType) {
      setError("All required fields must be filled.");
      setIsSubmitting(false);
      return;
    }

    const whatsappText = `
🏗️ Project Inquiry - ${siteConfig.companyName}

Name: ${name}
Phone: ${phone}
Project Type: ${projectType}
Details: ${message || "Not Provided"}
    `;

    const whatsappLink = `https://wa.me/${siteConfig.whatsapp.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(whatsappText)}`;

    window.open(whatsappLink, "_blank");

    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 400);
  };

  if (submitted) {
    return (
      <div className="py-20 text-center">
        <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-6" />
        <h3 className="text-3xl font-bold mb-3">Inquiry Sent Successfully</h3>
        <p className="text-slate-600 mb-6">
          Please complete the WhatsApp message to connect with our team.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 bg-[#003399] text-white rounded-xl"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900">
            Start Your <span className="text-[#003399]">Next Project</span> With Confidence
          </h2>

          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            Whether it's a fuel station, infrastructure upgrade, or large-scale
            construction, our team ensures precision, compliance, and on-time
            delivery.
          </p>

          <div className="mt-10 space-y-6">
            <Feature icon={<ShieldCheck />} title="Safety First Execution" />
            <Feature icon={<Clock />} title="On-Time Delivery" />
            <Feature icon={<Building2 />} title="Industry-Compliant Standards" />
          </div>
        </div>

        {/* RIGHT FORM CARD */}
        <div className="bg-white shadow-2xl rounded-3xl p-10 border border-slate-100">
          <h3 className="text-2xl font-bold mb-6">
            Request a Project Quote
          </h3>

          {error && (
            <div className="mb-6 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <InputField
              icon={<User />}
              placeholder="Your Name"
              value={name}
              onChange={setName}
            />

            <InputField
              icon={<Phone />}
              placeholder="WhatsApp Number"
              value={phone}
              onChange={setPhone}
            />

            <SelectField
              icon={<Building2 />}
              value={projectType}
              onChange={setProjectType}
            />

            <div className="relative">
              <MessageSquare className="absolute top-4 left-4 w-4 h-4 text-slate-400" />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Project Details (Optional)"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#003399]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl font-bold bg-[#003399] text-white flex items-center justify-center gap-2 hover:bg-[#002b80] transition"
            >
              {isSubmitting ? "Sending..." : "Send via WhatsApp"}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function InputField({ icon, placeholder, value, onChange }) {
  return (
    <div className="relative">
      <span className="absolute top-4 left-4 text-slate-400">{icon}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#003399]"
        required
      />
    </div>
  );
}

function SelectField({ icon, value, onChange }) {
  return (
    <div className="relative">
      <span className="absolute top-4 left-4 text-slate-400">{icon}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#003399]"
        required
      >
        <option value="">Select Project Type</option>
        <option>Petrol Pump Construction</option>
        <option>Infrastructure Development</option>
        <option>Maintenance & Upgrades</option>
      </select>
    </div>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-[#003399]/10 flex items-center justify-center text-[#003399]">
        {icon}
      </div>
      <span className="font-semibold text-slate-700">{title}</span>
    </div>
  );
}