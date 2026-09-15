export const site = {
  name: "PlantBridge",
  domain: "www.usedbatchingplant.com",
  url: "https://www.usedbatchingplant.com",
  positioning: "Used Concrete Equipment from China",
  defaultTitle: "Used Concrete Equipment from China | PlantBridge",
  defaultDescription:
    "Used concrete batching plants, stabilized soil mixing plants and concrete mixers from China. Real equipment. Real photos. Inspection available before shipment.",
  /**
   * Fill with a published address only. Leave empty until 老杜 confirms.
   * Example: "sales@usedbatchingplant.com"
   */
  email: "duchenliang363@gmail.com",
  /**
   * WhatsApp number in international digits only, no plus sign or spaces.
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
