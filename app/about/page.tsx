import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About",
  description:
    "PlantBridge screens, inspects, trades and helps export used concrete equipment from China. We are not an equipment manufacturer.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About | PlantBridge",
    description:
      "PlantBridge screens, inspects, trades and helps export used concrete equipment from China. We are not an equipment manufacturer.",
    url: "/about/",
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />
      <h1 className="text-3xl font-semibold sm:text-4xl">About {site.name}</h1>
      <div className="mt-6 space-y-4 text-base leading-7 text-steel-700">
        <p>
          PlantBridge is not an equipment manufacturer and is not a large factory
          brand.
        </p>
        <p>
          We screen, inspect, trade and help export used concrete equipment from
          China: batching plants, stabilized soil mixing plants and concrete
          mixers.
        </p>
        <p>
          Listings use actual machines and actual photos. Unknown years, hours,
          prices and extra specifications are not invented.
        </p>
      </div>
    </main>
  );
}
