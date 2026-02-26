"use client";

import { useState } from "react";
import siteConfig from "../data/siteConfig";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
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

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-700 mb-2">
          Inquiry Sent Successfully
        </h3>
        <p className="text-slate-600 text-sm">
          Please complete the WhatsApp message to connect with our team.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-50 p-10 rounded-2xl border border-slate-100 space-y-5"
    >
      <h3 className="text-2xl font-bold text-[#003399] mb-4">
        Request a Consultation
      </h3>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm"
        required
      />

      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="WhatsApp Number"
        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm"
        required
      />

      <select
        value={projectType}
        onChange={(e) => setProjectType(e.target.value)}
        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm"
        required
      >
        <option value="">Select Project Type</option>
        <option>Petrol Pump Construction</option>
        <option>Fuel Station Renovation</option>
        <option>Infrastructure Development</option>
      </select>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Project Details (Optional)"
        rows="4"
        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm"
      />

      <button
        type="submit"
        className="w-full py-3 rounded-lg text-white font-semibold flex items-center justify-center gap-2"
        style={{ backgroundColor: "#003399" }}
      >
        Send via WhatsApp
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}