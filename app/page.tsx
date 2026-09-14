import type { Metadata } from "next";
import Link from "next/link";
import PlantCard from "@/components/PlantCard";
import TrustStrip from "@/components/TrustStrip";
import { getAvailablePlants } from "@/lib/inventory";
import { site } from "@/lib/site";
import { defaultInquiryMessage, whatsappHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: {
    absolute: site.defaultTitle,
  },
  description: site.defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.defaultTitle,
    description: site.defaultDescription,
    url: "/",
  },
  twitter: {
    card: "summary",
    title: site.defaultTitle,
    description: site.defaultDescription,
  },
};

export default function HomePage() {
  const plants = getAvailablePlants();
  const wa = whatsappHref(defaultInquiryMessage());

  return (
    <main>
      <section className="border-b border-steel-200 bg-steel-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
            {site.name}
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-3xl font-semibold leading-tight sm:text-5xl">
            Used Concrete Batching Plants for Sale
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            Actual used batching plants available from China. See real equipment,
            review machine details and contact us directly for price, inspection
            information and shipping options.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/used-concrete-batching-plants/"
              className="inline-flex h-12 items-center justify-center bg-accent px-5 text-sm font-medium text-white hover:bg-accent-hover"
            >
              View Available Plants
            </Link>
            {wa ? (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center border border-white/40 px-5 text-sm font-medium hover:border-white"
              >
                Contact on WhatsApp
              </a>
            ) : (
              <Link
                href="/contact/#whatsapp"
                className="inline-flex h-12 items-center justify-center border border-white/40 px-5 text-sm font-medium hover:border-white"
              >
                Contact on WhatsApp
              </Link>
            )}
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Available Used Batching Plants
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-steel-700 sm:text-base">
          V0.1 currently lists one actual machine. Additional plants will be
          added only when they are real, available inventory.
        </p>
        <div className="mt-8 max-w-xl">
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </section>
    </main>
  );
}
