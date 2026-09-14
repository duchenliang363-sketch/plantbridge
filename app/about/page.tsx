import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About",
  description:
    "PlantBridge focuses on used concrete batching plants available from China. See the actual equipment and communicate directly before buying.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    title: "About | PlantBridge",
    description:
      "PlantBridge focuses on used concrete batching plants available from China. See the actual equipment and communicate directly before buying.",
    url: "/about/",
  },
  twitter: {
    card: "summary",
    title: "About | PlantBridge",
    description:
      "PlantBridge focuses on used concrete batching plants available from China. See the actual equipment and communicate directly before buying.",
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
          PlantBridge focuses on used concrete batching plants available from
          China.
        </p>
        <p>
          Our goal is simple: help buyers see the actual equipment, understand
          what is included, review available condition information, and
          communicate directly before making a purchasing decision.
        </p>
        <p>
          We believe used equipment should be sold with clear information about
          the actual machine.
        </p>
      </div>
    </main>
  );
}
