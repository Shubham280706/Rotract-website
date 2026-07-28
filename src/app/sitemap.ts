import { MetadataRoute } from "next";
import { projects } from "@/content/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rotaractbharuch.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  // Base routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Dynamic project routes
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...routes, ...projectRoutes];
}
