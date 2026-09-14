import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PlantCard from "@/components/PlantCard";
import { getAvailablePlants } from "@/lib/inventory";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Used Concrete Batching Plants",
  description:
    "Browse currently available used concrete batching plants from China. Each listing represents actual equipment or confirmed available inventory.",
  alternates: {
    canonical: "/used-concrete-batching-plants/",
  },
  openGraph: {
    title: "Used Concrete Batching Plants | PlantBridge",
    description:
      "Browse currently available used concrete batching plants from China. Each listing represents actual equipment or confirmed available inventory.",
    url: "/used-concrete-batching-plants/",
  },
  twitter: {
    card: "summary",
    title: "Used Concrete Batching Plants | PlantBridge",
    description:
      "Browse currently available used concrete batching plants from China. Each listing represents actual equipment or confirmed available inventory.",
  },
};

export default function InventoryPage() {
  const plants = getAvailablePlants();

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
        Browse currently available used concrete batching plants from China. Each
        listing represents actual equipment or confirmed available inventory.
        Machine details, additional photos and inspection information can be
        requested before purchase.
      </p>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </main>
  );
}
