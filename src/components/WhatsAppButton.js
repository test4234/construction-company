"use client";

import { MessageCircle } from "lucide-react";
import siteConfig from "@/data/siteConfig";

export default function WhatsAppButton() {
  // Sanitize number
  const whatsappNumber = (siteConfig?.whatsapp || "").replace(/\D/g, "");

  if (!whatsappNumber) return null;

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        w-16 h-16 rounded-full
        bg-green-500 hover:bg-green-600
        text-white flex items-center justify-center
        shadow-2xl transition-transform duration-300
        hover:scale-110
      "
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}