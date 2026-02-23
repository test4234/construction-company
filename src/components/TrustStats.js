import { Building2, Users, Award, HardHat, Fuel } from "lucide-react";

export default function TrustStats({
  stats = [
    {
      value: "20+",
      label: "Projects Completed",
      icon: <Building2 className="w-5 h-5" />,
      sub: "Across Pan India",
    },
    {
      value: "250+",
      label: "Completed Maintenances",
      icon: <Users className="w-5 h-5" />,
      sub: "Tier 1 Retailers",
    },
    {
      value: "15+",
      label: "Years Experience",
      icon: <Award className="w-5 h-5" />,
      sub: "Industry Leaders",
    },
  ],
}) {
  return (
    <section className="md:py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* ✅ Always 3 Columns */}
        <div className="grid grid-cols-3 divide-x divide-slate-100">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative px-2 md:px-12 py-6 text-center transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-slate-50 text-[#003399] rounded-xl group-hover:bg-[#003399] group-hover:text-white transition-all duration-500 shadow-sm">
                  {stat.icon}
                </div>
              </div>

              {/* Value */}
              <div className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
                {stat.value}
              </div>

              {/* Label */}
              <h4 className="text-[10px] md:text-xs font-black uppercase tracking-wider text-[#003399] mt-2">
                {stat.label}
              </h4>

              {/* Subtext (hide on small screens for clean look) */}
              <p className="hidden md:block text-[11px] font-bold text-slate-400 uppercase tracking-tight mt-1">
                {stat.sub}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-100 overflow-hidden">
                <div className="w-full h-full bg-[#FF6600] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}