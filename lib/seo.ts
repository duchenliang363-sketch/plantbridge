import type { Metadata } from "next";
import {
  getAllEquipment,
  getEquipmentByCategory,
  type Equipment,
  type EquipmentCategory,
} from "@/lib/catalog";
import { site } from "@/lib/site";

function fallbackShareImage() {
  const photo = getAllEquipment().find((item) => item.photos[0])?.photos[0];
  return {
    url: photo?.src ?? "/plants/pb-hzs120-001/01-mixer.jpg",
    alt: photo?.alt ?? "Used concrete equipment from China",
  };
}

export function socialMeta({
  title,
  description,
  url,
  image,
}: {
  title: string;
  description: string;
  url: string;
  image?: { url: string; alt: string };
}): Pick<Metadata, "openGraph" | "twitter"> {
  const shareImage = image ?? fallbackShareImage();
  return {
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.name,
      title,
      description,
      url,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage.url],
    },
  };
}

export function equipmentSocial(item: Equipment) {
  return socialMeta({
    title: item.seoTitle,
    description: item.seoDescription,
    url: `${item.path}/`,
    image: item.photos[0]
      ? { url: item.photos[0].src, alt: item.photos[0].alt }
      : undefined,
  });
}

export function categorySocial(
  category: EquipmentCategory,
  title: string,
  description: string,
  url: string,
) {
  const photo = getEquipmentByCategory(category).find((item) => item.photos[0])
    ?.photos[0];
  return socialMeta({
    title,
    description,
    url,
    image: photo ? { url: photo.src, alt: photo.alt } : undefined,
  });
}
