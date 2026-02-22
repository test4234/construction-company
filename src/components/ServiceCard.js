import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Drill, HardHat, Settings2, Fuel } from "lucide-react";

export default function ServiceCard({ service }) {
  // Map icons based on service type
const Icon =
  service.iconType === "maintenance"
    ? Settings2
    : service.iconType === "construction"
    ? Drill
    : Fuel; // default icon now petrol bunk

  return (
    <article className="group flex flex-col h-full bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#FF6600] transition-all duration-500 shadow-md hover:shadow-xl">
      
      {/* ================= VISUAL HEADER ================= */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-900">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-110 transition-all duration-700"
          sizes="(max-width:768px) 100vw, 400px"
        />

        {/* Floating Icon */}
        <div className="absolute bottom-4 right-4 z-20 bg-white p-3 rounded-lg shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
          <Icon className="w-6 h-6 text-[#003399]" />
        </div>
      </div>

      {/* ================= CONTENT BODY ================= */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-[#003399] leading-tight mb-2 group-hover:text-[#FF6600] transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-slate-500 line-clamp-2 mb-6 font-medium">
          {service.description || service.short}
        </p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {service.highlights?.slice(0, 4).map((spec, i) => (
            <div key={i} className="flex items-center gap-2 border-l-2 border-slate-100 pl-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
              <span className="text-[11px] font-bold text-slate-700 uppercase tracking-tight">
                {spec}
              </span>
            </div>
          ))}
        </div>

        {/* ================= ACTION FOOTER ================= */}
        <div className="mt-auto pt-4 border-t border-slate-50">
          <Link
            href={`/services/${service.slug}`}
            className="group/btn flex items-center justify-between w-full"
          >
            <span className="text-sm font-black text-[#003399] group-hover/btn:translate-x-1 transition-transform uppercase">
              View Service Details
            </span>

            <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center group-hover/btn:bg-[#003399] transition-all duration-300">
              <ArrowRight className="w-5 h-5 text-[#003399] group-hover/btn:text-white" />
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom Branding Bar */}
      <div className="h-1.5 w-full flex">
        <div className="h-full w-1/3 bg-[#003399]" />
        <div className="h-full w-2/3 bg-[#FF6600]" />
      </div>
    </article>
  );
}