import { buildMeta } from "../../lib/seo";
import LeadSection from "../../components/AppointmentForm";
import {
  ShieldCheck,
  Target,
  Clock,
  Building2,
  MapPin,
  Award,
  Cpu,
  CheckCircle,
} from "lucide-react";

export async function generateMetadata() {
  const meta = buildMeta({
    title: "About Saiganesh Constructions | Ganesh Golla",
    description:
      "Learn about Sai Ganesh Constructions and its proprietor Ganesh Golla, a trusted petrol pump construction expert with 15+ years of experience and 20+ completed projects.",
    path: "/about",
  });

  return { title: meta.title, description: meta.description };
}

export default function About() {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="pt-10 text-center">
        <div className="max-w-4xl mx-auto px-6">
<h1 className="text-4xl md:text-5xl leading-tight mb-6">
  <span className="text-[#FF6600] font-[var(--font-playfair)] font-bold italic">
    About
  </span>{" "}
  <span className="text-[#003399] font-semibold">
    Sai Ganesh Constructions
  </span>
</h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Delivering high-quality petrol pump infrastructure across India
            with precision, safety, and innovation for over 15 years.
          </p>
        </div>
      </section>

      {/* ================= PROPRIETOR + WHO WE ARE ================= */}
      <section className="py-14 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

          {/* ===== LEFT : PROPRIETOR ===== */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-[#FF6600]">About</span>{" "}
              <span className="text-[#003399]">Our Proprietor</span>
            </h2>

            <h3 className="text-2xl font-semibold text-[#003399] mb-4">
              Mr. Ganesh Golla
            </h3>

            <p className="text-slate-600 leading-relaxed mb-6">
              <strong>Ganesh Golla</strong> is the visionary proprietor of
              <strong> Sai Ganesh Constructions</strong>. With over
              <strong> 15 years of hands-on experience</strong> in petrol pump
              construction, he has successfully led and delivered complex
              infrastructure projects across India.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              His expertise spans engineering execution, regulatory compliance,
              site planning, and end-to-end project management — ensuring
              every fuel station meets the highest safety and quality standards.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Under his leadership, the company has completed
              <strong> 20+ successful projects</strong>, building a strong
              reputation for precision, reliability, and long-term client trust.
            </p>
          </div>

          {/* ===== RIGHT : WHO WE ARE ===== */}
          <div>
            <h2 className="text-3xl font-bold text-[#003399] mb-6">
              Who We Are
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              <strong>Sai Ganesh Constructions</strong> is a specialized
              petrol pump construction company with over
              <strong> 15 years of industry experience</strong>.
              We focus exclusively on fuel station development,
              delivering safe, efficient, and modern infrastructure.
            </p>

            <p className="text-slate-600 leading-relaxed">
              With more than <strong>20+ successfully completed projects</strong>,
              we have built a strong reputation for quality execution,
              compliance with PESO standards, and on-time delivery.
            </p>
          </div>

        </div>
      </section>

      {/* ================= HIGHLIGHTS ROW ================= */}
      <section className="bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

          {/* ===== LEFT : LEADERSHIP HIGHLIGHTS ===== */}
          <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-6">
              Leadership Highlights
            </h3>

            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <Award className="w-4 h-4 text-[#FF6600]" />
                15+ Years Industry Experience
              </li>
              <li className="flex items-center gap-3">
                <Building2 className="w-4 h-4 text-[#FF6600]" />
                Specialized in Petrol Pump Infrastructure
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-[#FF6600]" />
                Strong Focus on Safety & Compliance
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-[#FF6600]" />
                20+ Successfully Delivered Projects
              </li>
            </ul>
          </div>

          {/* ===== RIGHT : COMPANY HIGHLIGHTS ===== */}
          <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-6">
              Company Highlights
            </h3>

            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#FF6600]" />
                Based in India
              </li>
              <li className="flex items-center gap-3">
                <Building2 className="w-4 h-4 text-[#FF6600]" />
                Specialized in Petrol Pump Construction
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#FF6600]" />
                15+ Years of Experience
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-[#FF6600]" />
                20+ Projects Successfully Completed
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div className="bg-white p-10 rounded-xl border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-8 h-8 text-[#003399]" />
              <h3 className="text-2xl font-bold text-[#003399]">
                Our Mission
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed">
              To deliver safe, efficient, and future-ready petrol pump
              infrastructure by combining engineering excellence,
              strict quality control, and industry compliance.
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <Award className="w-8 h-8 text-[#003399]" />
              <h3 className="text-2xl font-bold text-[#003399]">
                Our Vision
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed">
              To become one of India’s most trusted petrol pump construction
              companies, recognized for reliability, innovation,
              and long-term client partnerships.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              <span className="text-[#FF6600]">Our</span>{" "}
              <span className="text-[#003399]">Core Values</span>
            </h2>
            <div className="h-1 w-20 bg-[#FF6600] mx-auto mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              icon={<Award className="w-6 h-6" />}
              title="Precision"
              description="Every project executed with meticulous attention to engineering accuracy."
            />
            <ValueCard
              icon={<ShieldCheck className="w-6 h-6" />}
              title="Safety First"
              description="Strict adherence to PESO regulations and safety standards."
            />
            <ValueCard
              icon={<Cpu className="w-6 h-6" />}
              title="Innovation"
              description="Using modern construction techniques and sustainable practices."
            />
            <ValueCard
              icon={<Award className="w-6 h-6" />}
              title="Quality"
              description="Commitment to superior materials and long-lasting infrastructure."
            />
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#003399] mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <ShieldCheck className="w-10 h-10 text-[#FF6600] mx-auto mb-4" />
              <h3 className="font-bold mb-3">Safety & Compliance</h3>
              <p className="text-slate-600 text-sm">
                Full compliance with PESO and fire safety standards.
              </p>
            </div>

            <div>
              <Cpu className="w-10 h-10 text-[#FF6600] mx-auto mb-4" />
              <h3 className="font-bold mb-3">Modern Engineering</h3>
              <p className="text-slate-600 text-sm">
                Advanced planning, structural design, and execution.
              </p>
            </div>

            <div>
              <Clock className="w-10 h-10 text-[#FF6600] mx-auto mb-4" />
              <h3 className="font-bold mb-3">On-Time Delivery</h3>
              <p className="text-slate-600 text-sm">
                Efficient project management ensuring timely completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LeadSection />
    </div>
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

      <p className="text-slate-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}