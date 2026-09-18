import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import EquipmentCard from "@/components/EquipmentCard";
import { getEquipmentByCategory } from "@/lib/catalog";
import { breadcrumbSchema } from "@/lib/schema";
import { categorySocial } from "@/lib/seo";

const listingDescription =
  "Browse currently available used concrete batching plants from China. Each listing is actual equipment.";

export const metadata: Metadata = {
  title: "Used Concrete Batching Plants",
  description: listingDescription,
  alternates: { canonical: "/used-concrete-batching-plants/" },
  ...categorySocial(
    "batching-plant",
    "Used Concrete Batching Plants | PlantBridge",
    listingDescription,
    "/used-concrete-batching-plants/",
  ),
};

export default function BatchingPlantsPage() {
  const items = getEquipmentByCategory("batching-plant");

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "Used Concrete Batching Plants",
            path: "/used-concrete-batching-plants/",
          },
        ])}
      />
      <h1 className="text-3xl font-semibold sm:text-4xl">
        Used Concrete Batching Plants
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-steel-700">
        Actual used concrete batching plants from China. Unknown details are not
        invented.
      </p>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {items.map((item) => (
          <EquipmentCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
