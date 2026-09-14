import { isWhatsAppConfigured, whatsappDigits } from "@/lib/site";
import type { Plant } from "@/lib/inventory";

export function whatsappHref(message: string): string | null {
  if (!isWhatsAppConfigured()) return null;
  return `https://wa.me/${whatsappDigits()}?text=${encodeURIComponent(message)}`;
}

export function defaultInquiryMessage(): string {
  return `Hello PlantBridge,
I'm interested in used concrete batching plants available from China.
My country:
Destination port:
Please send available machine details.`;
}

export function plantInquiryMessage(plant: Plant): string {
  return plant.whatsappInterestMessage;
}
