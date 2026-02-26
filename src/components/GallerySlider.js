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
  const [direction, setDirection] = useState(0);

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
          if (Array.isArray(galleryArray)) allImages.push(...galleryArray);
        } catch (err) {
          console.error("Invalid gallery JSON:", err);
        }
      });
      setImages(allImages);
    }
    fetchGalleryImages();
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (images.length ? (prev + 1) % images.length : 0));
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (images.length ? (prev - 1 + images.length) % images.length : 0));
  }, [images.length]);

  useEffect(() => {
    if (isHovered || images.length === 0) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isHovered, images.length]);

  if (images.length === 0) return null;

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: { duration: 0.2 },
    }),
  };

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        
        {/* HEADER: Stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
          <div className="space-y-2 md:space-y-4">
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 leading-tight uppercase">
              Our <span className="text-[#003399]">Gallery</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-lg max-w-md border-l-2 border-[#003399] pl-3">
              Showcasing excellence in infrastructure and fueling solutions.
            </p>
          </div>

          {/* CONTROLS: Hidden on tiny screens, flex on medium+ */}
          <div className="hidden md:flex items-center gap-3">
            <button onClick={prevSlide} className="p-4 rounded-full border border-slate-200 hover:bg-slate-50 text-[#003399] transition-all shadow-sm">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="p-4 rounded-full border border-slate-200 hover:bg-slate-50 text-[#003399] transition-all shadow-sm">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* MAIN SLIDER CONTAINER */}
        <div 
          className="relative w-full aspect-[4/5] md:aspect-[21/9] rounded-2xl md:rounded-[40px] overflow-hidden shadow-2xl bg-slate-100"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={images[current]}
                alt={`Project ${current + 1}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 1440px"
                priority
              />
              {/* Vignette Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            </motion.div>
          </AnimatePresence>

          {/* MOBILE NAVIGATION OVERLAYS */}
          <div className="absolute inset-0 flex md:hidden items-center justify-between px-2 z-20 pointer-events-none">
            <button onClick={prevSlide} className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white pointer-events-auto active:scale-95">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white pointer-events-auto active:scale-95">
              <ChevronRight size={24} />
            </button>
          </div>

          {/* INDICATORS & COUNTER */}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-center">
            <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
               <span className="text-white text-xs font-mono font-bold tracking-widest">
                {current + 1} / {images.length}
               </span>
            </div>

            <div className="flex gap-1.5">
              {images.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === current ? "w-8 bg-white" : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* SWIPE HINT (Mobile Only) */}
        <p className="md:hidden text-center text-slate-400 text-[10px] mt-4 uppercase tracking-widest">
          Slide to explore
        </p>
      </div>
    </section>
  );
}