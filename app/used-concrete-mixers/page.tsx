import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import EquipmentCard from "@/components/EquipmentCard";
import {
  getEquipmentByCategory,
  mixerSizeLayout,
} from "@/lib/catalog";
import { breadcrumbSchema } from "@/lib/schema";
import { defaultInquiryMessage, whatsappHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Used Concrete Mixers",
  description:
    "Used twin-shaft concrete mixers from China. Size classes 2000, 3000, 4000 and 4500. Only confirmed machines are listed.",
  alternates: { canonical: "/used-concrete-mixers/" },
  openGraph: {
    title: "Used Concrete Mixers | PlantBridge",
    description:
      "Used twin-shaft concrete mixers from China. Size classes 2000, 3000, 4000 and 4500. Only confirmed machines are listed.",
    url: "/used-concrete-mixers/",
  },
};

export default function MixersPage() {
  const items = getEquipmentByCategory("mixer");
  const wa = whatsappHref(defaultInquiryMessage());

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Used Concrete Mixers", path: "/used-concrete-mixers/" },
        ])}
      />
      <h1 className="text-3xl font-semibold sm:text-4xl">Used Concrete Mixers</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-steel-700">
        Size classes currently followed: 2000, 3000, 4000 and 4500. Only
        confirmed machines are offered for sale.
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-4">
        {mixerSizeLayout.map((size) => {
          const listed = items.filter((item) => item.mixerSize === size);
          const hasListing = listed.length > 0;
          return (
            <div key={size} className="border border-steel-200 bg-white p-4">
              <p className="text-sm text-steel-500">Size class</p>
              <p className="mt-1 text-xl font-semibold">{size}</p>
              {hasListing ? (
                <Link
                  href="#mixer-listings"
                  className="mt-3 inline-block text-sm text-accent underline"
                >
                  {listed.length} available
                </Link>
              ) : (
                <p className="mt-3 text-sm text-steel-600">
                  {wa ? (
                    <a href={wa} target="_blank" rel="noopener noreferrer" className="underline">
                      Ask current availability
                    </a>
                  ) : (
                    "Ask current availability"
                  )}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <div id="mixer-listings" className="mt-10 grid gap-6 lg:grid-cols-2">
        {items.map((item) => (
          <EquipmentCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
