export default function TrustStrip() {
  const items = [
    {
      title: "Actual equipment",
      body: "Machines listed are based on actual available equipment.",
    },
    {
      title: "Real photos",
      body: "See photos of the actual machine, not generic product renders.",
    },
    {
      title: "Condition details",
      body: "Known machine condition can be shared before purchase.",
    },
    {
      title: "Inspection support",
      body: "Additional photos and video can be provided for serious buyers.",
    },
  ];

  return (
    <section className="border-y border-steel-200 bg-white">
      <h2 className="sr-only">How listings are presented</h2>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-steel-700">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
