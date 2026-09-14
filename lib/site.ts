export const site = {
  name: "PlantBridge",
  domain: "usedbatchingplant.com",
  url: "https://usedbatchingplant.com",
  positioning: "Used Concrete Batching Plants from China",
  defaultTitle: "Used Concrete Batching Plants for Sale | PlantBridge",
  defaultDescription:
    "Browse actual used concrete batching plants available from China. See real machine photos, condition details and equipment information. Contact PlantBridge for price, inspection video and shipping details.",
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
