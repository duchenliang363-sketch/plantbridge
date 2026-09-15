import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { isEmailConfigured, isWhatsAppConfigured, site } from "@/lib/site";
import { defaultInquiryMessage, whatsappHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PlantBridge about used concrete equipment from China. Ask for price, inspection video and shipping information.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact | PlantBridge",
    description:
      "Contact PlantBridge about used concrete equipment from China. Ask for price, inspection video and shipping information.",
    url: "/contact/",
  },
};

export default function ContactPage() {
  const wa = whatsappHref(defaultInquiryMessage());

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
              "Not published yet."
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
        Include product name and model so we know which machine you are asking
        about.
      </p>
      <div className="mt-6">
        <InquiryForm
          defaultProductName="Used concrete equipment from China"
          defaultModel="To be confirmed"
          whatsappMessage={defaultInquiryMessage()}
          whatsappLabel="Contact on WhatsApp"
        />
      </div>
    </main>
  );
}
