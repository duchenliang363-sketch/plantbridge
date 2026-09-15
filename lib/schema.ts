import { site } from "@/lib/site";
import type { Equipment } from "@/lib/catalog";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description:
      "PlantBridge selects, inspects, trades and helps export used concrete equipment from China. PlantBridge is not an equipment manufacturer.",
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

export function productSchema(item: Equipment) {
  const brand = item.quickSpecs.find((spec) => spec.label === "Brand")?.value;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.productName,
    sku: item.id,
    description: item.seoDescription,
    url: `${site.url}${item.path}/`,
    ...(brand && brand !== "on_request" ? { brand } : {}),
    model: item.model,
    itemCondition: "https://schema.org/UsedCondition",
    category: item.categoryLabel,
    ...(item.photos.length > 0
      ? { image: item.photos.map((photo) => `${site.url}${photo.src}`) }
      : {}),
  };
}
