import type { Metadata } from "next";
import Link from "next/link";
import EquipmentCard from "@/components/EquipmentCard";
import TrustStrip from "@/components/TrustStrip";
import { categories, getAllEquipment } from "@/lib/catalog";
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
  const items = getAllEquipment();
  const wa = whatsappHref(defaultInquiryMessage());

  return (
    <main>
      <section className="border-b border-steel-200 bg-steel-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
            {site.name}
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-3xl font-semibold leading-tight sm:text-5xl">
            Used Concrete Equipment from China
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            Real equipment. Real photos. Inspection available before shipment.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/equipment/"
              className="inline-flex h-12 items-center justify-center bg-accent px-5 text-sm font-medium text-white hover:bg-accent-hover"
            >
              View Equipment
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
        <h2 className="text-2xl font-semibold sm:text-3xl">Available Equipment</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-steel-700 sm:text-base">
          Concrete batching plants, stabilized soil mixing plants and concrete
          mixers. Only confirmed machines are listed.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="border border-steel-200 bg-white p-5 hover:border-ink"
            >
              <h3 className="text-lg font-semibold">{category.title}</h3>
              <p className="mt-2 text-sm leading-6 text-steel-700">
                {category.intro}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {items.map((item) => (
            <EquipmentCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
