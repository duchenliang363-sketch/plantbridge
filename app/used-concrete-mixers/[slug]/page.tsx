import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import {
  getEquipmentByCategory,
  getEquipmentBySlug,
} from "@/lib/catalog";
import { equipmentSocial } from "@/lib/seo";

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
    ...equipmentSocial(item),
  };
}

export default async function MixerPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getEquipmentBySlug(slug);
  if (!item || item.category !== "mixer") notFound();
  return <ProductDetail item={item} />;
}
