// src/app/gallery/page.js

import siteConfig from "../../data/siteConfig";
import Image from "next/image";
import { Camera, Building } from "lucide-react";

import galleryImages from "../../data/galleryImages";

export const metadata = {
  title: `Project Gallery | ${siteConfig.companyName}`,
  description: `Explore completed petrol pump construction and fuel infrastructure projects by ${siteConfig.companyName}.`,
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-secondary">

      {/* ================= HEADER ================= */}
      <header className="relative py-14 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-border mb-6">
            <Camera className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-text-muted">
              Project Showcase
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary mb-5">
            Our Completed <span className="text-accent">Projects</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Explore petrol pump construction and fuel infrastructure projects
            successfully delivered by{" "}
            <span className="font-semibold text-text-primary">
              {siteConfig.companyName}
            </span>
            .
          </p>
        </div>
      </header>

      {/* ================= GALLERY GRID ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img, index) => (
              <article
                key={index}
                className="
                  group bg-white rounded-2xl overflow-hidden
                  border border-border hover:shadow-xl
                  transition-all duration-300
                "
              >
                {/* Image */}
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width:768px) 100vw,
                           (max-width:1024px) 50vw,
                           33vw"
                  />
                </div>

                {/* Caption */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {img.title}
                  </h3>

                  <p className="text-text-muted leading-relaxed">
                    {img.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-white border border-border rounded-3xl p-10 shadow-lg">
            
            {/* Left */}
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-secondary border border-border flex items-center justify-center">
                <Building className="w-10 h-10 text-accent" />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-text-primary mb-2">
                  Ready to Start Your Petrol Pump Project?
                </h2>
                <p className="text-text-muted max-w-xl leading-relaxed">
                  Partner with {siteConfig.companyName} for turnkey petrol pump
                  construction and world-class fuel infrastructure solutions.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition"
              >
                Request a Quote
              </a>

              <a
                href={siteConfig.mapLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl border border-border bg-secondary font-semibold hover:bg-white transition"
              >
                View Office Location
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}