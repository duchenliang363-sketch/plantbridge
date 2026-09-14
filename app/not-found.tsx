import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-4 text-steel-700">
        This page is not part of the PlantBridge V0.1 site.
      </p>
      <Link href="/" className="mt-6 inline-block text-sm font-medium underline">
        Back to available plants
      </Link>
    </main>
  );
}
