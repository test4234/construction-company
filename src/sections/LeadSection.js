import LeadForm from "../components/AppointmentForm";
import siteConfig from "../data/siteConfig";
import { MapPin, Clock, Shield, Phone } from "lucide-react";

/**
 * ✅ Lead Section (Updated for Saiganesh Constructions)
 * - Project Inquiry Section
 * - Clean responsive layout
 * - Production-ready UI
 */

export default function LeadSection() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Request a{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Project Quote
              </span>
            </h2>

            <p className="mt-5 text-lg text-text-muted max-w-xl">
              Planning to build a petrol pump or upgrade your fuel station?
              Share your project requirements and our team will get back to you
              with a detailed consultation and quotation.
            </p>

            {/* Info Cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: <Shield className="w-5 h-5" />,
                  title: "Safety First",
                  text: "Strict compliance with safety & regulatory standards",
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  title: "Timely Execution",
                  text: "On-time project delivery with expert supervision",
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  title: "Pan India Service",
                  text: "Highway & city fuel station projects across India",
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  title: "Direct Consultation",
                  text: "Speak directly with our project planning team",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border p-5 flex gap-3"
                  style={{
                    backgroundColor: "var(--bg-section)",
                    borderColor: "var(--border-default)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "var(--color-primary-soft)",
                      color: "var(--color-primary)",
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-xs mt-1 text-text-muted">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <LeadForm hideHeader />
          </div>

        </div>
      </div>
    </section>
  );
}