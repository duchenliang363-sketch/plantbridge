export const site = {
  name: "PlantBridge",
  domain: "www.usedbatchingplant.com",
  url: "https://www.usedbatchingplant.com",
  positioning: "Used Concrete Equipment from China",
  defaultTitle: "Used Concrete Equipment from China | PlantBridge",
  defaultDescription:
    "Used concrete batching plants, stabilized soil mixing plants and concrete mixers from China. Real equipment. Real photos. Inspection available before shipment.",
  /**
   * Public inbox and FormSubmit destination. Founder-confirmed 2026-09-17.
   */
  email: "duchenliang363@gmail.com",
  /**
   * WhatsApp in international digits only. Founder-confirmed 2026-09-17:
   * +86 186 3207 8365
   */
  whatsappNumber: "8618632078365",
} as const;

export function isEmailConfigured(): boolean {
  return site.email.trim().length > 0;
}

export function isWhatsAppConfigured(): boolean {
  return site.whatsappNumber.replace(/\D/g, "").length > 0;
}

export function whatsappDigits(): string {
  return site.whatsappNumber.replace(/\D/g, "");
}
