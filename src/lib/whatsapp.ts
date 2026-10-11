import {
  businessConfig,
  getCustomerTypeLabel,
  getServiceById,
} from "@/config/business";
import type { ServiceEnquiry } from "@shared/types";
import { normalizeIndianMobile } from "@shared/validation";

export function formatEnquiryWhatsAppMessage(
  enquiry: ServiceEnquiry,
): string {
  const service = getServiceById(enquiry.serviceId);
  const lines = [
    `*Service enquiry — ${businessConfig.name}*`,
    "",
    `*Name:* ${enquiry.name.trim()}`,
    `*Mobile:* +91 ${normalizeIndianMobile(enquiry.mobile)}`,
    `*Customer type:* ${getCustomerTypeLabel(enquiry.customerType)}`,
    `*Service:* ${service?.title ?? enquiry.serviceId}`,
    `*Location / PIN:* ${enquiry.location.trim()}`,
  ];

  if (enquiry.equipmentBrand?.trim()) {
    lines.push(`*Equipment brand:* ${enquiry.equipmentBrand.trim()}`);
  }

  lines.push(
    "",
    `*Problem:*`,
    enquiry.problemDescription.trim(),
    "",
    "_Sent via website enquiry form. Visit and charges to be confirmed._",
  );

  return lines.join("\n");
}

export function formatQuickServiceMessage(serviceTitle: string): string {
  return [
    `Hello ${businessConfig.name},`,
    "",
    `I would like to book: *${serviceTitle}*`,
    "",
    `Location: ${businessConfig.serviceArea}`,
    "",
    "Please share visit charges and availability.",
  ].join("\n");
}

export function formatGeneralBookingMessage(): string {
  return [
    `Hello ${businessConfig.name},`,
    "",
    "I would like to book an electrical panel / generator service visit.",
    "",
    "Please share visit charges and next available slot.",
  ].join("\n");
}
