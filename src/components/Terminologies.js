import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mr. Suresh Patel",
    designation: "MD, Sunrise Builders",
    review:
      "Their team delivered our petrol pump project ahead of schedule with exceptional quality standards and complete safety compliance.",
    rating: 5,
    initials: "SP",
  },
  {
    name: "Ms. Anjali Rao",
    designation: "VP Sales, Oceanic Constructions",
    review:
      "Highly professional execution, transparent reporting, and excellent coordination throughout the construction phase.",
    rating: 5,
    initials: "AR",
  },
  {
    name: "Mr. Rajiv Mehta",
    designation: "Infrastructure Investor",
    review:
      "Outstanding design and project management. The completed fuel station exceeded our expectations in performance and aesthetics.",
    rating: 5,
    initials: "RM",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
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
            <p className="mt-6 text-slate-600 text-base leading-relaxed">
              Our projects are more than structures — they are long-term investments 
              built with precision, compliance, and performance in mind. 
              Here’s what our partners say about working with us.
            </p>
          </div>
          <div className="hidden md:block">
            <Quote className="w-16 h-16 text-slate-200" />
          </div>
        </div>

        {/* ================= TESTIMONIAL GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#FF6600] scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              {/* Rating & Quote */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#FF6600] fill-[#FF6600]"
                    />
                  ))}
                </div>
                <Quote className="w-10 h-10 text-slate-100 group-hover:text-[#003399]/10 transition-colors" />
              </div>

              {/* Review */}
              <blockquote className="mb-10">
                <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
                  "{item.review}"
                </p>
              </blockquote>

              {/* Divider */}
              <div className="w-full h-px bg-slate-50 mb-8" />

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-black text-xl group-hover:bg-[#003399] transition-colors shadow-lg">
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-black text-[#003399] uppercase tracking-tight text-base leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[11px] font-bold text-[#FF6600] uppercase tracking-widest mt-1">
                    {item.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}