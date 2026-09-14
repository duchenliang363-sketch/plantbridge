import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-steel-200 bg-steel-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            {site.name}
          </p>
          <p className="mt-2 max-w-md text-sm leading-6 text-steel-700">
            Actual used concrete batching plants available from China. Machine
            details are listed only when they are known.
          </p>
          <p className="mt-3 text-sm text-steel-600">{site.domain}</p>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          <Link href="/used-concrete-batching-plants/" className="hover:underline">
            Available Plants
          </Link>
          <Link href="/about/" className="hover:underline">
            About
          </Link>
          <Link href="/contact/" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
