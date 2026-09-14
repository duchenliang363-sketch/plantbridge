import Link from "next/link";
import {
  displayField,
  type Plant,
} from "@/lib/inventory";
import { plantInquiryMessage, whatsappHref } from "@/lib/whatsapp";

export default function PlantCard({ plant }: { plant: Plant }) {
  const wa = whatsappHref(plantInquiryMessage(plant));

  return (
    <article className="border border-steel-200 bg-white">
      {plant.photos[0] ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={plant.photos[0].src}
          alt={plant.photos[0].alt}
          className="aspect-[16/10] w-full object-cover"
        />
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center bg-steel-100 px-6 text-center">
          <p className="max-w-sm text-sm leading-6 text-steel-700">
            Actual machine photos are being prepared.
          </p>
        </div>
      )}
      <div className="space-y-4 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            {plant.availability}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-ink">
            Used {plant.model} Concrete Batching Plant
          </h3>
          <p className="mt-1 text-sm text-steel-600">Equipment ID: {plant.id}</p>
        </div>
        <dl className="grid grid-cols-2 gap-3 text-sm">
          <Spec label="Model" value={plant.model} />
          <Spec label="Rated Capacity" value={plant.ratedCapacity} />
          <Spec label="Condition" value={plant.condition} />
          <Spec label="Location" value={displayField(plant.location)} />
          <Spec label="Availability" value={plant.availability} />
        </dl>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Link
            href={`${plant.path}/`}
            className="inline-flex h-11 items-center justify-center bg-ink px-4 text-sm font-medium text-white hover:bg-steel-800"
          >
            View Machine Details
          </Link>
          {wa ? (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center border border-steel-300 px-4 text-sm font-medium hover:border-steel-500"
            >
              WhatsApp
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-steel-500">{label}</dt>
      <dd className="font-medium text-ink">{value}</dd>
    </div>
  );
}
