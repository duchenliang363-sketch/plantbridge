import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import { getAvailablePlants } from "@/lib/inventory";
import { breadcrumbSchema } from "@/lib/schema";
import { isEmailConfigured, isWhatsAppConfigured, site } from "@/lib/site";
import { plantInquiryMessage, whatsappHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PlantBridge about actual used concrete batching plants available from China. Ask for price, inspection video and shipping information.",
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: "Contact | PlantBridge",
    description:
      "Contact PlantBridge about actual used concrete batching plants available from China. Ask for price, inspection video and shipping information.",
    url: "/contact/",
  },
  twitter: {
    card: "summary",
    title: "Contact | PlantBridge",
    description:
      "Contact PlantBridge about actual used concrete batching plants available from China. Ask for price, inspection video and shipping information.",
  },
};

export default function ContactPage() {
  const plant = getAvailablePlants()[0];
  const wa = plant ? whatsappHref(plantInquiryMessage(plant)) : null;

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ])}
      />
      <h1 className="text-3xl font-semibold sm:text-4xl">Contact {site.name}</h1>
      <dl className="mt-8 space-y-4 text-sm sm:text-base">
        <div>
          <dt className="text-steel-500">Company</dt>
          <dd className="font-medium">{site.name}</dd>
        </div>
        <div id="whatsapp">
          <dt className="text-steel-500">WhatsApp</dt>
          <dd className="font-medium">
            {isWhatsAppConfigured() && wa ? (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                Message {site.name} on WhatsApp
              </a>
            ) : (
              "Not published yet. This is a configuration item and will be shown when the number is provided."
            )}
          </dd>
        </div>
        <div>
          <dt className="text-steel-500">Email</dt>
          <dd className="font-medium">
            {isEmailConfigured() ? (
              <a href={`mailto:${site.email}`} className="text-accent underline">
                {site.email}
              </a>
            ) : (
              "Not published yet."
            )}
          </dd>
        </div>
        <div>
          <dt className="text-steel-500">Website</dt>
          <dd className="font-medium">{site.domain}</dd>
        </div>
      </dl>

      <h2 className="mt-12 text-2xl font-semibold">Inquiry</h2>
      <p className="mt-3 text-sm leading-6 text-steel-700">
        Use this form to ask about the listed HZS120 or other used batching plant
        questions.
      </p>
      <div className="mt-6">
        <InquiryForm
          defaultMachine={plant ? `${plant.id} / ${plant.model}` : ""}
          whatsappMessage={plant ? plantInquiryMessage(plant) : ""}
          whatsappLabel="Ask About This HZS120 on WhatsApp"
        />
      </div>
    </main>
  );
}
