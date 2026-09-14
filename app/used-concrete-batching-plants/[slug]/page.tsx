import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import PhotoGallery from "@/components/PhotoGallery";
import {
  displayCondition,
  displayField,
  displayInclusion,
  getAvailablePlants,
  getPlantBySlug,
} from "@/lib/inventory";
import { breadcrumbSchema, productSchema } from "@/lib/schema";
import { plantInquiryMessage, whatsappHref } from "@/lib/whatsapp";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAvailablePlants().map((plant) => ({ slug: plant.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);
  if (!plant) {
    return { title: "Machine not found" };
  }

  return {
    title: {
      absolute: plant.seoTitle,
    },
    description: plant.seoDescription,
    alternates: {
      canonical: `${plant.path}/`,
    },
    openGraph: {
      title: plant.seoTitle,
      description: plant.seoDescription,
      url: `${plant.path}/`,
      ...(plant.photos[0]
        ? { images: [{ url: plant.photos[0].src, alt: plant.photos[0].alt }] }
        : {}),
    },
    twitter: {
      card: plant.photos[0] ? "summary_large_image" : "summary",
      title: plant.seoTitle,
      description: plant.seoDescription,
    },
  };
}

export default async function PlantPage({ params }: PageProps) {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);
  if (!plant) notFound();

  const wa = whatsappHref(plantInquiryMessage(plant));
  const machineLabel = `${plant.id} / ${plant.model}`;

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "Used Concrete Batching Plants",
            path: "/used-concrete-batching-plants/",
          },
          { name: `Used ${plant.model}`, path: `${plant.path}/` },
        ])}
      />
      <JsonLd data={productSchema(plant)} />

      <section className="border-b border-steel-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2">
          {plant.photos[0] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={plant.photos[0].src}
              alt={plant.photos[0].alt}
              className="h-full min-h-64 w-full border border-steel-200 object-cover"
            />
          ) : (
            <div className="flex min-h-64 items-center justify-center border border-dashed border-steel-300 bg-steel-50 px-6 text-center">
              <p className="max-w-md text-sm leading-6 text-steel-700">
                Actual machine photos are being prepared.
              </p>
            </div>
          )}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Equipment ID: {plant.id}
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              {plant.title}
            </h1>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <Spec label="Model" value={plant.model} />
              <Spec label="Rated Capacity" value={plant.ratedCapacity} />
              <Spec label="Condition" value={plant.condition} />
              <Spec label="Location" value={plant.location} />
              <Spec label="Availability" value={plant.availability} />
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#inquiry"
                className="inline-flex h-11 items-center justify-center bg-ink px-4 text-sm font-medium text-white hover:bg-steel-800"
              >
                Ask for Price
              </a>
              {wa ? (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center bg-accent px-4 text-sm font-medium text-white hover:bg-accent-hover"
                >
                  WhatsApp Us
                </a>
              ) : (
                <a
                  href="/contact/#whatsapp"
                  className="inline-flex h-11 items-center justify-center border border-steel-300 px-4 text-sm font-medium"
                >
                  WhatsApp Us
                </a>
              )}
              <a
                href="#inquiry"
                className="inline-flex h-11 items-center justify-center border border-steel-300 px-4 text-sm font-medium hover:border-steel-500"
              >
                Request Inspection Video
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-12 sm:px-6">
        <Section title="Machine Overview">
          <dl className="grid gap-4 sm:grid-cols-2">
            <Spec label="Model" value={displayField(plant.overview.model)} />
            <Spec
              label="Rated Capacity"
              value={displayField(plant.overview.ratedCapacity)}
            />
            <Spec label="Year" value={displayField(plant.overview.year)} />
            <Spec
              label="Mixer Brand"
              value={displayField(plant.overview.mixerBrand)}
            />
            <Spec
              label="Mixer Model"
              value={displayField(plant.overview.mixerModel)}
            />
            <Spec
              label="Aggregate Bins"
              value={displayField(plant.overview.aggregateBins)}
            />
            <Spec
              label="Control System"
              value={displayField(plant.overview.controlSystem)}
            />
            <Spec
              label="Cement Silos"
              value={displayField(plant.overview.cementSilos)}
            />
            <Spec
              label="Screw Conveyors"
              value={displayField(plant.overview.screwConveyors)}
            />
            <Spec
              label="Operating Status"
              value={displayField(plant.overview.operatingStatus)}
            />
            <Spec label="Location" value={plant.overview.location} />
            <Spec label="Condition" value={plant.overview.condition} />
          </dl>
        </Section>

        <Section
          title="Actual Machine Photos"
          intro="Photos in this section show the actual machine offered for sale."
        >
          <PhotoGallery photos={plant.photos} />
        </Section>

        <Section title="Machine Condition">
          <dl className="space-y-4">
            <Spec
              label="Current operating status"
              value={displayCondition(plant.machineCondition.currentOperatingStatus)}
            />
            <Spec
              label="Known condition"
              value={displayCondition(plant.machineCondition.knownCondition)}
            />
            <Spec
              label="Known issues"
              value={displayCondition(plant.machineCondition.knownIssues)}
            />
            <Spec
              label="Recommended maintenance"
              value={displayCondition(plant.machineCondition.recommendedMaintenance)}
            />
            <Spec
              label="Inspection status"
              value={displayCondition(plant.machineCondition.inspectionStatus)}
            />
          </dl>
        </Section>

        <Section title="What's Included">
          <ul className="divide-y divide-steel-200 border border-steel-200 bg-white">
            {plant.included.map((row) => (
              <li
                key={row.item}
                className="flex items-start justify-between gap-4 px-4 py-3 text-sm"
              >
                <span>
                  {row.item}
                  {row.note ? (
                    <span className="mt-1 block text-steel-600">{row.note}</span>
                  ) : null}
                </span>
                <span className="shrink-0 text-steel-600">
                  {displayInclusion(row.status)}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Inspect the Actual Machine Before You Buy">
          <p className="max-w-3xl text-base leading-7 text-steel-700">
            Used equipment should be evaluated based on the actual machine, not
            only specifications. Additional equipment photos, component details
            and inspection video can be provided to serious buyers before
            purchase.
          </p>
          <a
            href="#inquiry"
            className="mt-5 inline-flex h-11 items-center justify-center bg-ink px-4 text-sm font-medium text-white hover:bg-steel-800"
          >
            Request Inspection Photos & Video
          </a>
        </Section>

        <Section title="Shipping from China">
          <p className="max-w-3xl text-base leading-7 text-steel-700">
            Tell us your destination country or port and we can discuss available
            dismantling, loading and shipping arrangements for this machine.
          </p>
        </Section>

        <section id="inquiry">
          <h2 className="text-2xl font-semibold">Inquiry</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-steel-700">
            Ask for price, inspection information and shipping options for this
            HZS120. No account is created and nothing is stored on a server.
          </p>
          <div className="mt-6 max-w-xl">
            <InquiryForm
              defaultMachine={machineLabel}
              whatsappMessage={plantInquiryMessage(plant)}
              whatsappLabel={`Ask About This ${plant.model} on WhatsApp`}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function Section({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">{title}</h2>
      {intro ? (
        <p className="mt-3 max-w-3xl text-sm leading-6 text-steel-700">{intro}</p>
      ) : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm text-steel-500">{label}</dt>
      <dd className="mt-1 text-sm font-medium text-ink">{value}</dd>
    </div>
  );
}