import { site } from "@/lib/site";
import type { Plant } from "@/lib/inventory";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description:
      "PlantBridge lists actual used concrete batching plants available from China.",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.defaultDescription,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function productSchema(plant: Plant) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Used ${plant.model} Concrete Batching Plant`,
    sku: plant.id,
    description: plant.seoDescription,
    url: `${site.url}${plant.path}/`,
    itemCondition: "https://schema.org/UsedCondition",
    category: "Used concrete batching plant",
    ...(plant.photos.length > 0
      ? { image: plant.photos.map((photo) => `${site.url}${photo.src}`) }
      : {}),
  };
}
