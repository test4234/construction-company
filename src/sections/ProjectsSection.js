import { supabase } from "@/lib/supabase";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

/* =====================================================
   🔥 Revalidate every 60 seconds (ISR)
===================================================== */
export const revalidate = 60;

export default async function ProjectsSection({ limit = 3 }) {

  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Failed to fetch projects:", error);
    return null; // silently fail in homepage section
  }

  return (
    <section className="py-10 bg-muted/30">
      <div className="container p-5">

        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            <span className="text-[#FF6600]">Projects</span>{" "}
            <span className="text-[#003399]">
              Completed
            </span>
          </h1>

          <p className="text-lg text-muted-foreground">
            Explore some of our successfully completed petrol pump
            construction projects across India.
          </p>
        </div>

        {/* ================= PROJECT GRID ================= */}
        {projects?.length === 0 ? (
          <div className="text-center py-10 text-muted-foreground">
            No projects available yet.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}

        {/* ================= CTA ================= */}
        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="
              inline-flex items-center
              px-8 py-4
              rounded-xl
              bg-construction-primary
              text-black
              font-semibold
              hover:opacity-90
              transition
            "
          >
            View All Projects →
          </Link>
        </div>

      </div>
    </section>
  );
}