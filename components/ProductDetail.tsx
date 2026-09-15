import Link from "next/link";
import type { ReactNode } from "react";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import PhotoGallery from "@/components/PhotoGallery";
import {
  displayField,
  displayInclusion,
  type Equipment,
} from "@/lib/catalog";
import { breadcrumbSchema, productSchema } from "@/lib/schema";
import {
  equipmentInquiryMessage,
  inspectionMessage,
  priceMessage,
  videoMessage,
  whatsappHref,
} from "@/lib/whatsapp";

export default function ProductDetail({ item }: { item: Equipment }) {
  const wa = whatsappHref(equipmentInquiryMessage(item));
  const waPrice = whatsappHref(priceMessage(item));
  const waVideo = whatsappHref(videoMessage(item));
  const waInspect = whatsappHref(inspectionMessage(item));

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: item.categoryLabel, path: item.categoryPath },
          { name: item.cardTitle, path: `${item.path}/` },
        ])}
      />
      <JsonLd data={productSchema(item)} />

      <section className="border-b border-steel-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2">
          {item.photos[0] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.photos[0].src}
              alt={item.photos[0].alt}
              className="h-full min-h-64 w-full border border-steel-200 object-cover"
            />
          ) : (
            <div className="flex min-h-64 items-center justify-center border border-dashed border-steel-300 bg-steel-50 px-6 text-center">
              <p className="max-w-md text-sm leading-6 text-steel-700">
                Actual machine photos are being prepared. Ask on WhatsApp for
                current photos of this equipment.
              </p>
            </div>
          )}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Equipment ID: {item.id}
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              {item.title}
            </h1>
            <p className="mt-4 border border-steel-200 bg-steel-50 px-3 py-2 text-sm font-medium text-ink">
              Actual equipment shown in photos.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              {item.quickSpecs.map((spec) => (
                <Spec
                  key={spec.label}
                  label={spec.label}
                  value={displayField(spec.value)}
                />
              ))}
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {waPrice ? (
                <a
                  href={waPrice}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center bg-ink px-4 text-sm font-medium text-white hover:bg-steel-800"
                >
                  Ask for Price
                </a>
              ) : (
                <a
                  href="#inquiry"
                  className="inline-flex h-11 items-center justify-center bg-ink px-4 text-sm font-medium text-white hover:bg-steel-800"
                >
                  Ask for Price
                </a>
              )}
              {waVideo ? (
                <a
                  href={waVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center border border-steel-300 px-4 text-sm font-medium hover:border-steel-500"
                >
                  Request Video
                </a>
              ) : (
                <a
                  href="#inquiry"
                  className="inline-flex h-11 items-center justify-center border border-steel-300 px-4 text-sm font-medium"
                >
                  Request Video
                </a>
              )}
              {waInspect ? (
                <a
                  href={waInspect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center border border-steel-300 px-4 text-sm font-medium hover:border-steel-500"
                >
                  Request Inspection
                </a>
              ) : (
                <a
                  href="#inquiry"
                  className="inline-flex h-11 items-center justify-center border border-steel-300 px-4 text-sm font-medium"
                >
                  Request Inspection
                </a>
              )}
              {wa ? (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center bg-accent px-4 text-sm font-medium text-white hover:bg-accent-hover"
                >
                  WhatsApp
                </a>
              ) : (
                <Link
                  href="/contact/#whatsapp"
                  className="inline-flex h-11 items-center justify-center border border-steel-300 px-4 text-sm font-medium"
                >
                  WhatsApp
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-12 sm:px-6">
        <Section title="Equipment Overview">
          <dl className="grid gap-4 sm:grid-cols-2">
            {item.overview.map((spec) => (
              <Spec
                key={spec.label}
                label={spec.label}
                value={displayField(spec.value)}
              />
            ))}
          </dl>
        </Section>

        <Section title="Current Condition">
          <dl className="space-y-4">
            {item.machineCondition.map((spec) => (
              <Spec
                key={spec.label}
                label={spec.label}
                value={displayField(spec.value)}
              />
            ))}
          </dl>
        </Section>

        <Section
          title="Detailed Photos"
          intro="Photos on this page show the actual equipment offered for sale, not catalog or factory renders."
        >
          <PhotoGallery photos={item.photos} />
        </Section>

        <Section title="What Is Included">
          <ul className="divide-y divide-steel-200 border border-steel-200 bg-white">
            {item.included.map((row) => (
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

        <Section title="Inspection / Video">
          <p className="max-w-3xl text-base leading-7 text-steel-700">
            Used equipment should be evaluated from the actual machine.
            Additional photos and inspection video can be provided before
            shipment.
          </p>
        </Section>

        <Section title="Shipping & Loading">
          <p className="max-w-3xl text-base leading-7 text-steel-700">
            Tell us your country and destination port. Loading and shipping
            support from China can be discussed for this equipment.
          </p>
        </Section>

        <section id="inquiry">
          <h2 className="text-2xl font-semibold">Request a Quote</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-steel-700">
            Ask for price, video or inspection. The form includes this product
            name and model so we know which machine you are asking about.
          </p>
          <div className="mt-6 max-w-xl">
            <InquiryForm
              defaultProductName={item.productName}
              defaultModel={item.model}
              whatsappMessage={equipmentInquiryMessage(item)}
              whatsappLabel="WhatsApp this machine"
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
