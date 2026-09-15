import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import EquipmentCard from "@/components/EquipmentCard";
import { categories, getAllEquipment } from "@/lib/catalog";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Used Concrete Equipment",
  description:
    "Browse actual used concrete batching plants, stabilized soil mixing plants and concrete mixers from China.",
  alternates: { canonical: "/equipment/" },
  openGraph: {
    title: "Used Concrete Equipment | PlantBridge",
    description:
      "Browse actual used concrete batching plants, stabilized soil mixing plants and concrete mixers from China.",
    url: "/equipment/",
  },
};

export default function EquipmentPage() {
  const items = getAllEquipment();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Equipment", path: "/equipment/" },
        ])}
      />
      <h1 className="text-3xl font-semibold sm:text-4xl">
        Used Concrete Equipment
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-steel-700">
        Actual machines from China. Photos on each listing show the equipment
        offered for sale.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <a
            key={category.href}
            href={category.href}
            className="border border-steel-300 px-3 py-2 text-sm hover:border-ink"
          >
            {category.title}
          </a>
        ))}
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {items.map((item) => (
          <EquipmentCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
