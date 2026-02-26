// src/app/projects/[slug]/page.js

import { supabase } from "@/lib/supabase";
import siteConfig from "@/data/siteConfig";
import Image from "next/image";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { cache } from "react";
import Script from "next/script";

/* =====================================================
   🔥 Revalidate every 60 seconds (ISR)
===================================================== */
export const revalidate = 60;

/* =====================================================
   🔥 Cached Fetch
===================================================== */
const getProject = cache(async (slug) => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) return null;
  return data;
});

/* =====================================================
   🔥 Static Params
===================================================== */
export async function generateStaticParams() {
  const { data, error } = await supabase
    .from("projects")
    .select("slug");

  if (error || !data) return [];

  return data.map((project) => ({
    slug: project.slug,
  }));
}

/* =====================================================
   🔥 Metadata
===================================================== */
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = await getProject(slug);
  if (!project) return {};

  const url = `${siteConfig.siteUrl}/projects/${project.slug}`;
  const imageUrl = project.image
    ? new URL(project.image, siteConfig.siteUrl).toString()
    : siteConfig.seo.ogImage;

  return {
    title: project.title,
    description: project.short || siteConfig.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: project.title,
      description: project.short || siteConfig.seo.ogDescription,
      url,
      siteName: siteConfig.companyName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.short || siteConfig.seo.ogDescription,
      images: [imageUrl],
    },
  };
}

/* =====================================================
   🔥 Page Component
===================================================== */
export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = await getProject(slug);
  if (!project) notFound();

  const features =
    Array.isArray(project.features)
      ? project.features
      : project.features
      ? JSON.parse(project.features)
      : [];

  const gallery =
    Array.isArray(project.gallery)
      ? project.gallery
      : project.gallery
      ? JSON.parse(project.gallery)
      : [];

  const imageUrl = project.image
    ? new URL(project.image, siteConfig.siteUrl).toString()
    : null;

  return (
    <>
      {/* ===== Structured Data ===== */}
      <Script
        id="project-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ConstructionProject",
            name: project.title,
            description: project.description,
            image: imageUrl,
            areaServed: project.location,
            dateCreated: project.completed,
            provider: {
              "@type": "Organization",
              name: siteConfig.companyName,
              url: siteConfig.siteUrl,
            },
          }),
        }}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div className="mb-12 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              {project.title}
            </h1>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">

              <div className="flex items-center gap-3 bg-blue-50 text-[#FF6600] px-5 py-3 rounded-full shadow-sm border border-blue-100">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">{project.location}</span>
              </div>

              <div className="flex items-center gap-3 bg-blue-50 text-[#003399] px-5 py-3 rounded-full shadow-sm border border-blue-100">
                <Calendar className="h-5 w-5" />
                <span className="font-medium">
                  Completed: {project.completed}
                </span>
              </div>

            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-14">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-2 space-y-14">

              {imageUrl && (
                <div className="relative w-full h-[300px] md:h-[520px] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src={imageUrl}
                    alt={`${project.title} - ${siteConfig.companyName}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Overview */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-5">
                  Project Overview
                </h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {project.description}
                </p>
              </div>

              {/* 🔥 NEW GALLERY SECTION */}
              {gallery.length > 0 && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-8">
                    Project Gallery
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {gallery.map((img, index) => (
                      <div
                        key={index}
                        className="relative h-[250px] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
                      >
                        <Image
                          src={img}
                          alt={`${project.title} Gallery ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              {features.length > 0 && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-8">
                    Key Features
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-100 text-blue-600 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition">
                            <CheckCircle2 className="h-5 w-5" />
                          </div>
                          <p className="font-semibold text-gray-800 text-base">
                            {feature}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="bg-gray-50 p-8 rounded-3xl h-fit shadow-lg space-y-6 border border-gray-100">

              <h3 className="text-xl font-semibold border-b pb-4">
                Project Details
              </h3>

              <div className="space-y-6 text-sm md:text-base text-gray-600">

                <div>
                  <p className="font-semibold text-gray-900 mb-1">Client</p>
                  <p>{project.client}</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 mb-1">Project Area</p>
                  <p>{project.area}</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 mb-1">Category</p>
                  <p>{project.category}</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Scope of Work
                  </p>
                  <p>{project.scope}</p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}