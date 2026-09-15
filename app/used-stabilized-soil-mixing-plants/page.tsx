import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import EquipmentCard from "@/components/EquipmentCard";
import { getEquipmentByCategory } from "@/lib/catalog";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Used Stabilized Soil Mixing Plants",
  description:
    "Used stabilized soil mixing plants for sale from China. Actual Beifang Lutong and XCMG equipment.",
  alternates: { canonical: "/used-stabilized-soil-mixing-plants/" },
  openGraph: {
    title: "Used Stabilized Soil Mixing Plants | PlantBridge",
    description:
      "Used stabilized soil mixing plants for sale from China. Actual Beifang Lutong and XCMG equipment.",
    url: "/used-stabilized-soil-mixing-plants/",
  },
};

export default function SoilPlantsPage() {
  const items = getEquipmentByCategory("soil-plant");

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "Used Stabilized Soil Mixing Plants",
            path: "/used-stabilized-soil-mixing-plants/",
          },
        ])}
      />
      <h1 className="text-3xl font-semibold sm:text-4xl">
        Used Stabilized Soil Mixing Plants
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-steel-700">
        Confirmed used plants only. Unknown parameters are available on request.
      </p>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {items.map((item) => (
          <EquipmentCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
