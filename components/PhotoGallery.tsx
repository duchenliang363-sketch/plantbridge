"use client";

import { useState } from "react";
import type { PlantPhoto } from "@/lib/inventory";

export default function PhotoGallery({ photos }: { photos: PlantPhoto[] }) {
  const [active, setActive] = useState<number | null>(null);

  if (photos.length === 0) {
    return (
      <div className="flex min-h-56 items-center justify-center border border-dashed border-steel-300 bg-steel-50 px-6 py-10 text-center">
        <p className="max-w-lg text-sm leading-6 text-steel-700">
          Actual machine photos are being prepared.
        </p>
      </div>
    );
  }

  const current = active !== null ? photos[active] : null;

  return (
    <>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <li key={photo.src}>
            <button
              type="button"
              className="block w-full overflow-hidden border border-steel-200 bg-steel-100"
              onClick={() => setActive(index)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading={index < 2 ? "eager" : "lazy"}
                className="aspect-[4/3] w-full object-cover"
              />
            </button>
          </li>
        ))}
      </ul>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-4"
          onClick={() => setActive(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[90vh] max-w-full object-contain"
          />
        </div>
      ) : null}
    </>
  );
}
