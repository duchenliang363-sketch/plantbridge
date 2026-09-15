import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import {
  getEquipmentByCategory,
  getEquipmentBySlug,
} from "@/lib/catalog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getEquipmentByCategory("mixer").map((item) => ({
    slug: item.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getEquipmentBySlug(slug);
  if (!item) return { title: "Machine not found" };

  return {
    title: { absolute: item.seoTitle },
    description: item.seoDescription,
    alternates: { canonical: `${item.path}/` },
    openGraph: {
      title: item.seoTitle,
      description: item.seoDescription,
      url: `${item.path}/`,
      ...(item.photos[0]
        ? { images: [{ url: item.photos[0].src, alt: item.photos[0].alt }] }
        : {}),
    },
    twitter: {
      card: item.photos[0] ? "summary_large_image" : "summary",
      title: item.seoTitle,
      description: item.seoDescription,
    },
  };
}

export default async function MixerPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getEquipmentBySlug(slug);
  if (!item || item.category !== "mixer") notFound();
  return <ProductDetail item={item} />;
}
