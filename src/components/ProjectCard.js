import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, CheckCircle, ArrowUpRight, Fuel } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-[#FF6600]/50 transition-all duration-500 shadow-sm hover:shadow-2xl">
      
      {/* 1. TOP IMAGE SECTION */}
      <div className="relative h-72 w-full overflow-hidden">
        


        {/* Action Icon */}
        <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
          <div className="bg-[#FF6600] p-2 rounded-full shadow-lg">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </div>

        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width:768px) 100vw, 400px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* 2. CONTENT SECTION */}
      <div className="p-6">
        
        {/* Fuel Icon + Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#FF6600]/10 p-2 rounded-lg">
            <Fuel className="w-5 h-5 text-[#FF6600]" />
          </div>
          <h3 className="text-2xl font-black leading-tight tracking-tight uppercase text-[#003399]">
            {project.title}
          </h3>
        </div>

        {/* Location & Year */}
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-[#FF6600]" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-tight">
              {project.location}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-[#FF6600]" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-tight">
              {project.completed}
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-500 line-clamp-2 mb-6 font-medium leading-relaxed">
          {project.short ||
            "Comprehensive fuel station development including canopy structural work and underground tank installation."}
        </p>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-slate-50 text-[#003399] border border-slate-100"
            >
              <CheckCircle className="h-3 w-3 text-[#FF6600]" />
              {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/projects/${project.slug}`}
          className="relative inline-flex items-center justify-center w-full py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-[#003399] rounded-lg group/btn hover:bg-[#002b80] active:scale-[0.98]"
        >
          <span className="relative z-10 text-xs uppercase tracking-[0.2em]">
            View Case Study
          </span>
          <div className="absolute inset-0 w-full h-full bg-[#FF6600] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out opacity-10"></div>
        </Link>
      </div>

      {/* Accent Line */}
      <div className="h-1.5 w-full bg-[#003399] flex">
        <div className="w-1/4 h-full bg-[#FF6600]"></div>
      </div>
    </div>
  );
}