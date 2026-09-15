export default function TrustStrip() {
  const items = [
    {
      title: "Real Equipment",
      body: "Listings are actual used machines. PlantBridge is not a manufacturer and does not present itself as a factory.",
    },
    {
      title: "Inspection Support",
      body: "Additional photos and inspection video can be provided before shipment.",
    },
    {
      title: "Loading & Shipping Support",
      body: "Loading and shipping from China can be discussed after you confirm the machine.",
    },
    {
      title: "Direct Contact",
      body: "Ask on WhatsApp or email. We help screen, check, trade and export used concrete equipment.",
    },
  ];

  return (
    <section className="border-y border-steel-200 bg-white">
      <h2 className="sr-only">How PlantBridge works</h2>
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
