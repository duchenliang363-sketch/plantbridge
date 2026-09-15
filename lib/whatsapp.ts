import { isWhatsAppConfigured, whatsappDigits } from "@/lib/site";
import type { Equipment } from "@/lib/catalog";

export function whatsappHref(message: string): string | null {
  if (!isWhatsAppConfigured()) return null;
  return `https://wa.me/${whatsappDigits()}?text=${encodeURIComponent(message)}`;
}

export function defaultInquiryMessage(): string {
  return `Hello PlantBridge,
I'm interested in used concrete equipment from China.
My country:
Please send available machine details.`;
}

export function equipmentInquiryMessage(item: Equipment): string {
  return item.whatsappInterestMessage;
}

export function priceMessage(item: Equipment): string {
  return `Hello PlantBridge,
Please send the price for:
Product: ${item.productName}
Model: ${item.model}
Equipment ID: ${item.id}
My name:
My country:
`;
}

export function videoMessage(item: Equipment): string {
  return `Hello PlantBridge,
Please send an inspection video for:
Product: ${item.productName}
Model: ${item.model}
Equipment ID: ${item.id}
My name:
My country:
`;
}

export function inspectionMessage(item: Equipment): string {
  return `Hello PlantBridge,
I would like to request inspection for:
Product: ${item.productName}
Model: ${item.model}
Equipment ID: ${item.id}
My name:
My country:
`;
}
