import {
  businessConfig,
  getCustomerTypeLabel,
  getServiceById,
  isServiceAreaConfigured,
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

  const problem = enquiry.problemDescription?.trim() ?? "";
  if (problem) {
    lines.push("", "*Problem:*", problem);
  }

  lines.push(
    "",
    "_Sent via website enquiry form. Inspection visit is free. Availability to be confirmed._",
  );

  return lines.join("\n");
}

export function formatQuickServiceMessage(serviceTitle: string): string {
  const lines = [
    `Hello ${businessConfig.name},`,
    "",
    `I would like to book: *${serviceTitle}*`,
  ];
  if (isServiceAreaConfigured()) {
    lines.push("", `Location: ${businessConfig.serviceArea}`);
  }
  lines.push("", "Please share availability for a free inspection visit.");
  return lines.join("\n");
}

export function formatGeneralBookingMessage(): string {
  return [
    `Hello ${businessConfig.name},`,
    "",
    "I would like to book an electrical panel / generator service visit.",
    "",
    "Please share availability for a free inspection visit.",
  ].join("\n");
}
