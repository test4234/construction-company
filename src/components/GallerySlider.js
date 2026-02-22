"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import galleryImages from "../data/galleryImages";

export default function GallerySlider() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isHovered]);

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">

        {/* SECTION TITLE */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-[#003399] uppercase mb-4">
            Our Work Gallery
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Explore a showcase of our completed fuel station and infrastructure
            projects, built with precision, quality, and long-term durability.
          </p>
        </div>

        {/* SLIDER */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative aspect-video md:aspect-[21/9] w-full rounded-xl md:rounded-[2rem] overflow-hidden bg-slate-100 shadow-xl border border-slate-100">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={galleryImages[current].src}
                  alt="Gallery Image"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Desktop Arrows */}
            <div className="hidden md:flex absolute inset-y-0 left-0 items-center">
              <button
                onClick={prevSlide}
                className="ml-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur border border-slate-200 hover:border-[#003399] transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>

            <div className="hidden md:flex absolute inset-y-0 right-0 items-center">
              <button
                onClick={nextSlide}
                className="mr-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur border border-slate-200 hover:border-[#003399] transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Tap Zones */}
            <div className="absolute inset-y-0 left-0 w-16 md:hidden" onClick={prevSlide} />
            <div className="absolute inset-y-0 right-0 w-16 md:hidden" onClick={nextSlide} />

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-black/10">
              <motion.div
                key={current}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                className="h-full bg-[#FF6600]"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}