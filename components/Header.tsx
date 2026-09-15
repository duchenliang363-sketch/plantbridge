"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { defaultInquiryMessage, whatsappHref } from "@/lib/whatsapp";

const nav = [
  { href: "/equipment/", label: "Equipment" },
  { href: "/used-concrete-batching-plants/", label: "Batching Plants" },
  { href: "/used-stabilized-soil-mixing-plants/", label: "Soil Plants" },
  { href: "/used-concrete-mixers/", label: "Mixers" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const wa = whatsappHref(defaultInquiryMessage());

  return (
    <header className="border-b border-steel-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="min-w-0">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            {site.name}
          </span>
          <span className="mt-0.5 hidden text-sm text-steel-700 sm:block">
            {site.positioning}
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium text-steel-800 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
          {wa ? (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-accent px-3 py-2 text-white hover:bg-accent-hover"
            >
              WhatsApp
            </a>
          ) : (
            <Link
              href="/contact/#whatsapp"
              className="rounded-sm border border-steel-300 px-3 py-2 text-steel-800 hover:border-steel-500"
            >
              WhatsApp
            </Link>
          )}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 items-center rounded-sm border border-steel-300 px-3 text-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="space-y-1 border-t border-steel-200 px-4 py-3 lg:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {wa ? (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-sm font-medium text-accent"
            >
              Contact on WhatsApp
            </a>
          ) : (
            <Link
              href="/contact/#whatsapp"
              className="block py-2 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              WhatsApp
            </Link>
          )}
        </nav>
      ) : null}
    </header>
  );
}
