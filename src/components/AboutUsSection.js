import { Target, Eye, ShieldCheck, Cpu, Award } from "lucide-react";

export default function AboutUsSection() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            <span className="text-[#FF6600]">About</span>{" "}
            <span className="text-[#003399]">
              SaiGanesh Constructions
            </span>
          </h1>

          <div className="h-1 w-24 bg-[#FF6600] mx-auto mb-8" />

          <p className="text-lg text-slate-700 leading-relaxed">
            Established with a vision to revolutionize petrol pump construction,
            <strong> Saiganesh Constructions</strong> has grown into a trusted name
            in the industry. With over <strong>15 years of experience</strong>, we
            specialize in designing and building state-of-the-art fuel stations
            that meet international standards.
          </p>
        </div>

        {/* ================= MISSION & VISION ================= */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">

          {/* Mission */}
          <div className="border border-slate-200 rounded-xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#003399] text-white flex items-center justify-center rounded-lg">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#003399]">
                Our Mission
              </h3>
            </div>

            <p className="text-slate-700 leading-relaxed">
              To deliver world-class petrol pump infrastructure that combines
              safety, efficiency, and sustainability. We strive to exceed client
              expectations through innovative solutions and unwavering
              commitment to quality.
            </p>
          </div>

          {/* Vision */}
          <div className="border border-slate-200 rounded-xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#003399] text-white flex items-center justify-center rounded-lg">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#003399]">
                Our Vision
              </h3>
            </div>

            <p className="text-slate-700 leading-relaxed">
              To be the leading petrol pump construction company recognized for
              excellence, innovation, and reliability. We envision a future where
              every fuel station we build sets new benchmarks in the industry.
            </p>
          </div>

        </div>

        {/* ================= CORE VALUES ================= */}
        <div>
          <div className="text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-bold text-[#003399]">
              Our Core Values
            </h3>
            <div className="h-1 w-20 bg-[#FF6600] mx-auto mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Precision */}
            <ValueCard
              icon={<Award className="w-6 h-6" />}
              title="Precision"
              description="Every project executed with meticulous attention to detail and accuracy."
            />

            {/* Safety */}
            <ValueCard
              icon={<ShieldCheck className="w-6 h-6" />}
              title="Safety First"
              description="Uncompromising commitment to safety standards and regulations."
            />

            {/* Innovation */}
            <ValueCard
              icon={<Cpu className="w-6 h-6" />}
              title="Innovation"
              description="Leveraging cutting-edge technology and modern construction methods."
            />

            {/* Quality */}
            <ValueCard
              icon={<Award className="w-6 h-6" />}
              title="Quality"
              description="Delivering excellence through superior materials and craftsmanship."
            />

          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= VALUE CARD ================= */

function ValueCard({ icon, title, description }) {
  return (
    <div className="border border-slate-200 rounded-xl p-8 text-center hover:shadow-md transition">
      <div className="w-14 h-14 bg-[#FF6600] text-white mx-auto flex items-center justify-center rounded-lg mb-6">
        {icon}
      </div>

      <h4 className="text-xl font-bold text-[#003399] mb-4">
        {title}
      </h4>

      <p className="text-slate-700 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}