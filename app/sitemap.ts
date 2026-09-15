import type { MetadataRoute } from "next";
import { categories, getAllEquipment } from "@/lib/catalog";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-15");

  const staticRoutes = [
    { path: "/", priority: 1 },
    { path: "/equipment/", priority: 0.95 },
    ...categories.map((category) => ({ path: category.href, priority: 0.9 })),
    { path: "/about/", priority: 0.5 },
    { path: "/contact/", priority: 0.8 },
  ];

  const itemRoutes = getAllEquipment().map((item) => ({
    path: `${item.path}/`,
    priority: 0.9,
  }));

  return [...staticRoutes, ...itemRoutes].map((route) => ({
    url: `${site.url}${route.path === "/" ? "/" : route.path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route.priority,
  }));
}
