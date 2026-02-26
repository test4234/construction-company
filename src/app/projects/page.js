import { supabase } from "@/lib/supabase";
import ProjectCard from "@/components/ProjectCard";
import { Building2 } from "lucide-react";
import { buildMeta } from "@/lib/seo";
import siteConfig from "@/data/siteConfig";
import Script from "next/script";

/* =====================================================
   🔥 Revalidate every 60 seconds (ISR)
===================================================== */
export const revalidate = 60;

/* =====================================================
   SEO METADATA
===================================================== */
export async function generateMetadata() {
  return buildMeta({
    title: "Petrol Pump Construction Projects",
    description:
      "Explore completed petrol pump construction projects by Sai Ganesh Constructions across India. View our portfolio of turnkey fuel station developments.",
    path: "/projects",
  });
}

export default async function ProjectsPage() {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch projects:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load projects.</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="pt-28 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <Building2 className="w-4 h-4 text-[#FF6600]" />
            <span className="text-sm font-semibold text-slate-600">
              Our Work Portfolio
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-[#003399]">Our</span>{" "}
            <span className="text-[#FF6600]">Projects</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our successfully completed petrol pump construction
            projects. Each project reflects our commitment to
            precision, safety standards, and modern infrastructure excellence.
          </p>

        </div>
      </section>

      {/* ================= PROJECTS GRID ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">

          {projects?.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">
                No projects available at the moment.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project) => (
                <div
                  key={project.slug}
                  className="transition-transform duration-300 hover:-translate-y-2"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#003399] mb-6">
            Planning Your Next Petrol Pump Project?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-10">
            Let our experienced team deliver safe, compliant, and
            high-quality fuel station infrastructure tailored to your needs.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:opacity-90"
            style={{
              background: "linear-gradient(90deg,#003399,#FF6600)",
            }}
          >
            Start Your Project
          </a>

        </div>
      </section>

      {/* ================= PROJECT LIST SCHEMA ================= */}
      {projects?.length > 0 && (
        <Script
          id="projects-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Petrol Pump Construction Projects",
              itemListElement: projects.map((project, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: project.title,
                url: `${siteConfig.siteUrl}/projects/${project.slug}`,
              })),
            }),
          }}
        />
      )}

    </div>
  );
}