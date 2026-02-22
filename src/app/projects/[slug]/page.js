import projects from "@/data/projects";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="py-20 text-center">Project Not Found</div>;
  }

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-6">
          {project.title}
        </h1>

        <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex gap-6 mb-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {project.location}
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Completed: {project.completed}
          </div>
        </div>

        <p className="text-lg text-muted-foreground">
          {project.short}
        </p>

      </div>
    </section>
  );
}