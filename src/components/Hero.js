"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] lg:min-h-screen flex items-center overflow-hidden">

      {/* ===== BACKGROUND IMAGE ===== */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ik.imagekit.io/oj4o1nw9x/India%20oil.jpg"
          alt="Modern Petrol Station"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Industrial Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(35,23,15,0.92) 0%, rgba(35,23,15,0.75) 45%, rgba(35,23,15,0.3) 75%, transparent 100%)",
          }}
        />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-2xl space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border"
            style={{
              backgroundColor: "rgba(255,106,0,0.08)",
              borderColor: "rgba(255,106,0,0.2)",
              color: "var(--color-primary)"
            }}
          >
            <span className="h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: "var(--color-primary)" }}
            ></span>
            <span className="text-xs font-bold uppercase tracking-widest">
              Leading Petrol Pump Constrution Specialists
            </span>
          </div>

          {/* Main Heading */}
         <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] text-white tracking-tight">
  Building the{" "}
  <span style={{ color: "var(--color-primary)" }}>
    Future
  </span>{" "}
  of Fuel Infrastructure
</h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            High-end industrial expertise in petrol station construction and
            turnkey energy solutions. Precision engineering for the next
            generation of fueling hubs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/services"
              className="px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl"
              style={{
                background: "var(--gradient-primary)",
                color: "var(--text-on-primary)",
              }}
            >
              Our Services
            </Link>

            <Link
              href="/projects"
              className="px-8 py-4 rounded-xl font-bold text-lg border transition-all"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.3)",
                color: "#ffffff",
                backdropFilter: "blur(6px)"
              }}
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>


    </section>
  );
}