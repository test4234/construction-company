import { Star, Quote } from "lucide-react";
import Image from "next/image";
import testimonials from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1 w-10 bg-[#FF6600]"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#003399]">
              Client Testimonials
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase leading-tight">
            Built on <span className="text-[#003399]">Trust</span><br />
            Proven by <span className="text-[#FF6600]">Results</span>
          </h2>
        </div>

        {/* TESTIMONIALS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500"
            >
              {/* Rating */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#FF6600] fill-[#FF6600]"
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-slate-200" />
              </div>

              {/* Review */}
              <blockquote className="mb-6">
                <p className="text-slate-600 text-lg leading-relaxed italic">
                  "{item.review}"
                </p>
              </blockquote>

              {/* Rectangle Project Image */}
{item.image && (
  <div className="w-full mb-6">
    <Image
      src={item.image}
      alt={`${item.name} project`}
      width={1200}
      height={800}
      className="w-full h-auto rounded-2xl"
    />
  </div>
)}

              {/* Client Info */}
              <div className="border-t pt-4">
                <h4 className="font-bold text-[#003399] text-lg">
                  {item.name}
                </h4>
                <p className="text-sm text-[#FF6600] font-semibold uppercase tracking-wide">
                  {item.designation}
                </p>
                {item.location && (
                  <p className="text-xs text-slate-500 mt-1">
                    {item.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}