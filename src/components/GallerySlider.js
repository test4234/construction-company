"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function GallerySlider() {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  /* ==============================
     Fetch Gallery Images
  ============================== */
  useEffect(() => {
    async function fetchGalleryImages() {
      const { data, error } = await supabase
        .from("projects")
        .select("gallery");

      if (error) {
        console.error("Failed to fetch gallery:", error);
        return;
      }

      let allImages = [];

      data?.forEach((project) => {
        if (!project.gallery) return;

        try {
          const galleryArray = Array.isArray(project.gallery)
            ? project.gallery
            : JSON.parse(project.gallery);

          if (Array.isArray(galleryArray)) {
            allImages.push(...galleryArray);
          }
        } catch (err) {
          console.error("Invalid gallery JSON:", err);
        }
      });

      setImages(allImages);
    }

    fetchGalleryImages();
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) =>
      images.length ? (prev + 1) % images.length : 0
    );
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) =>
      images.length ? (prev - 1 + images.length) % images.length : 0
    );
  }, [images.length]);

  useEffect(() => {
    if (isHovered || images.length === 0) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isHovered, images.length]);

  if (images.length === 0) return null;

  return (
    <section className="py-10 md:py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-10">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-[#003399] uppercase mb-4">
            Our Work Gallery
          </h2>
          <p className="text-slate-500 max-w-3xl mx-auto text-base md:text-lg">
            Explore our completed infrastructure and fuel station projects.
          </p>
        </div>

        {/* SLIDER */}
        <div
          className="relative w-full h-[60vh] md:h-[75vh] rounded-3xl overflow-hidden shadow-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={images[current]}
                alt={`Project ${current + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
                priority={current === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur hover:bg-white transition"
          >
            <ChevronLeft className="w-6 h-6 text-[#003399]" />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur hover:bg-white transition"
          >
            <ChevronRight className="w-6 h-6 text-[#003399]" />
          </button>

          {/* Overlay Gradient (Professional Look) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}