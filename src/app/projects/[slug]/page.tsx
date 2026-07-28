import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/sections/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Gear } from "@/components/Gear";
import { ProjectGallery } from "@/components/ProjectGallery";
import { FeaturedImageSlideshow } from "@/components/FeaturedImageSlideshow";

import type { Metadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rotaractbharuch.vercel.app";
  const mainImage = project.images?.[0] ? `${siteUrl}${project.images[0]}` : `${siteUrl}/logo.png`;

  return {
    title: project.title,
    description: project.summary.replace(/\n+/g, " ").slice(0, 160),
    openGraph: {
      title: `${project.title} · Rotaract Club of Bharuch`,
      description: project.summary.replace(/\n+/g, " ").slice(0, 160),
      url: `${siteUrl}/projects/${project.slug}`,
      siteName: "Rotaract Club of Bharuch",
      images: [
        {
          url: mainImage,
          alt: project.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} · Rotaract Club of Bharuch`,
      description: project.summary.replace(/\n+/g, " ").slice(0, 160),
      images: [mainImage],
    },
    alternates: {
      canonical: `${siteUrl}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const hasImage =
    project.images &&
    project.images.length > 0 &&
    project.images[0] &&
    project.images[0].trim() !== "" &&
    !project.images[0].includes("{{");

  // Get other projects to recommend
  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 bg-paper">
        {/* Navigation bar / Back link */}
        <div className="shell py-6">
          <Link
            href="/#projects"
            className="mono-label inline-flex items-center gap-2 text-ink/65 hover:text-azure transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
        </div>

        {/* Project detail container */}
        <div className="shell pb-24">
          <div className="grid md:grid-cols-[1.1fr_1.3fr] border border-neutral bg-white shadow-sm overflow-hidden">
            
            {/* Left: Main Featured Image / Blueprint */}
            <div className="relative min-h-[320px] md:min-h-[460px] bg-royal-050 border-b md:border-b-0 md:border-r border-neutral">
              {hasImage ? (
                <FeaturedImageSlideshow images={project.images} alt={project.title} />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="blueprint absolute inset-0 opacity-70" aria-hidden />
                  <span className="absolute left-6 top-6 h-6 w-6 border-l border-t border-royal/30" aria-hidden />
                  <span className="absolute right-6 top-6 h-6 w-6 border-r border-t border-royal/30" aria-hidden />
                  <span className="absolute bottom-6 left-6 h-6 w-6 border-b border-l border-royal/30" aria-hidden />
                  <span className="absolute bottom-6 right-6 h-6 w-6 border-b border-r border-royal/30" aria-hidden />
                  
                  <div
                    className="w-24 h-24 text-royal/10 mb-4 animate-pulse"
                    style={{ ["--gear-bg" as string]: "transparent" }}
                  >
                    <Gear className="w-full h-full" spinClass="gear-spin" teeth={20} />
                  </div>
                  
                  <span className="mono-label text-royal/60 text-xs tracking-widest">
                    {project.avenue} · FEATURED IMAGE
                  </span>
                </div>
              )}
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-16 bg-paper">
              <div>
                <div className="flex items-center gap-3">
                  <span className="mono-label text-azure text-xs tracking-wider">{project.avenue}</span>
                  <span className="h-1.5 w-1.5 rotate-45 bg-neutral" aria-hidden />
                  <span className="mono-label text-ink/50 text-xs tracking-wider">{project.date}</span>
                </div>

                <h1 className="display mt-6 text-[clamp(2.2rem,5vw,3.2rem)] leading-[0.95] text-ink">
                  {project.title}
                </h1>

                <p className="mt-8 text-base leading-relaxed text-ink/80">
                  {project.summary}
                </p>
              </div>

              {project.impact && (
                <div className="mt-12 border-t border-neutral pt-8">
                  <span className="mono-label text-ink/45 text-xs">Impact Achieved</span>
                  <div className="mt-3.5 inline-flex items-center gap-2.5 rounded-[2px] bg-royal-050 px-5 py-3 text-royal font-semibold w-fit">
                    <span className="h-2 w-2 rotate-45 bg-gold" aria-hidden />
                    <span className="display text-xl leading-none">{project.impact}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Project Gallery section below details card */}
          {project.images && project.images.length > 0 && (
            <div className="mt-16 border-t border-neutral pt-16">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rotate-45 bg-gold" aria-hidden />
                <span className="mono-label text-royal">Event Gallery</span>
              </div>
              <h2 className="display mt-4 text-3xl text-ink">
                Event Highlights ({project.images.length} photos)
              </h2>
              
              {/* Horizontal scrollable track of photos */}
              <div className="mt-8">
                <ProjectGallery images={project.images} avenue={project.avenue} />
              </div>
            </div>
          )}

          {/* Project video */}
          {project.video && (
            <div className={project.images && project.images.length > 0 ? "mt-16" : "mt-16 border-t border-neutral pt-16"}>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rotate-45 bg-gold" aria-hidden />
                <span className="mono-label text-royal">Event Video</span>
              </div>
              <h2 className="display mt-4 text-3xl text-ink">Watch the highlights</h2>

              <div className="mt-8 border border-neutral bg-ink shadow-sm">
                <video
                  src={project.video}
                  controls
                  playsInline
                  className="w-full max-h-[70vh]"
                />
              </div>
            </div>
          )}

          {/* Recommendations / Other Projects */}
          {otherProjects.length > 0 && (
            <div className="mt-24 border-t border-neutral pt-16">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rotate-45 bg-gold" aria-hidden />
                <span className="mono-label text-royal">Explore more</span>
              </div>
              <h2 className="display mt-4 text-3xl text-ink">Other initiatives.</h2>
              
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {otherProjects.map((op) => (
                  <Link
                    href={`/projects/${op.slug}`}
                    key={op.title}
                    className="group border border-neutral bg-white p-6 hover:border-azure/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="mono-label text-azure">{op.avenue}</span>
                        <span className="mono-label text-ink/45">{op.date}</span>
                      </div>
                      <h3 className="display mt-4 text-xl text-ink group-hover:text-royal transition-colors">
                        {op.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/70 line-clamp-2">
                        {op.summary}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-royal font-semibold text-sm">
                      <span className="mono-label">View project</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
