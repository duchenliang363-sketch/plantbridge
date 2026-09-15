import Link from "next/link";
import { displayField, type Equipment } from "@/lib/catalog";
import { equipmentInquiryMessage, whatsappHref } from "@/lib/whatsapp";

export default function EquipmentCard({ item }: { item: Equipment }) {
  const wa = whatsappHref(equipmentInquiryMessage(item));

  return (
    <article className="border border-steel-200 bg-white">
      {item.photos[0] ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.photos[0].src}
          alt={item.photos[0].alt}
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
            {item.availability}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-ink">{item.cardTitle}</h3>
          <p className="mt-1 text-sm text-steel-600">Equipment ID: {item.id}</p>
        </div>
        <p className="text-xs font-medium text-steel-600">
          Actual equipment shown in photos.
        </p>
        <dl className="grid grid-cols-2 gap-3 text-sm">
          {item.quickSpecs.slice(0, 6).map((spec) => (
            <div key={spec.label}>
              <dt className="text-steel-500">{spec.label}</dt>
              <dd className="font-medium text-ink">{displayField(spec.value)}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Link
            href={`${item.path}/`}
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
