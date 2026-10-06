import type { MetadataRoute } from "next";
import { portfolio_gridList } from "@/app/data/data";
import { absoluteUrl } from "@/app/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/resume"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...portfolio_gridList.map((project) => ({
      url: absoluteUrl(`/portfolio/${project.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
