import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default function ProjectsSection({ limit = 3 }) {
  const featuredProjects = projects.slice(0, limit);

  return (
    <section className="py-10 bg-muted/30">
      <div className="container mx-auto px-4">

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

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