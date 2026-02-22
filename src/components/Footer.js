"use client";

import Link from "next/link";
import Image from "next/image";
import siteConfig from "../data/siteConfig";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0f19] text-white pt-20 pb-10">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* =====================================================
            TOP SECTION
        ===================================================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">

          {/* Company Info */}
          <div>
            <Image
              src={siteConfig.logo}
              alt={siteConfig.companyName}
              width={180}
              height={60}
              className="mb-6"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Specialized petrol pump construction company delivering
              compliant, safe and modern fuel infrastructure solutions
              across India.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-[#FF6600] mb-6 uppercase tracking-wider">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-slate-300">

              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-[#FF6600] mt-1" />
                <span>{siteConfig.address}</span>
              </div>

              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-[#FF6600]" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-[#FF6600]" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[#FF6600] mb-6 uppercase tracking-wider">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* GST & Compliance */}
          <div>
            <h4 className="text-sm font-bold text-[#FF6600] mb-6 uppercase tracking-wider">
              Business Registration
            </h4>

            <div className="space-y-5">

              {/* AP GST */}
              <div className="bg-[#111827] p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#003399]" />
                  <span className="text-xs font-semibold text-slate-400 uppercase">
                    Andhra Pradesh GST
                  </span>
                </div>
                <p className="text-sm font-bold text-white tracking-wide">
                  37ARWPG5082H1Z9
                </p>
              </div>

              {/* Karnataka GST */}
              <div className="bg-[#111827] p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#003399]" />
                  <span className="text-xs font-semibold text-slate-400 uppercase">
                    Karnataka GST
                  </span>
                </div>
                <p className="text-sm font-bold text-white tracking-wide">
                  29ARWPG5082H1Z6
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* =====================================================
            BOTTOM SECTION
        ===================================================== */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">

          <p>
            © {year} {siteConfig.companyName}. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
            <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}