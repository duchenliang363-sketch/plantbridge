import type { MetadataRoute } from "next";
import { getAvailablePlants } from "@/lib/inventory";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-13");

  const staticRoutes = [
    { path: "/", priority: 1 },
    { path: "/used-concrete-batching-plants/", priority: 0.9 },
    { path: "/about/", priority: 0.5 },
    { path: "/contact/", priority: 0.8 },
  ];

  const plantRoutes = getAvailablePlants().map((plant) => ({
    path: `${plant.path}/`,
    priority: 0.9,
  }));

  return [...staticRoutes, ...plantRoutes].map((route) => ({
    url: `${site.url}${route.path === "/" ? "/" : route.path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
