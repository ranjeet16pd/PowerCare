import type { CustomerType, ServiceId } from "@shared/types";

const PLACEHOLDER_PATTERN = /^\[.*\]$/;

export function isPlaceholderValue(value: string): boolean {
  const trimmed = value.trim();
  return !trimmed || PLACEHOLDER_PATTERN.test(trimmed);
}

export function digitsOnlyPhone(value: string): string {
  return value.replace(/\D/g, "");
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  serviceArea: string;
  phoneDisplay: string;
  phoneTel: string;
  whatsappDisplay: string;
  whatsappNumber: string;
  businessHours: string;
  email?: string;
  heroImage: {
    src: string;
    alt: string;
    credit?: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

export const businessConfig: BusinessConfig = {
  name: "PowerCare Services",
  tagline: "Electrical panel & generator service coordination",
  serviceArea: "[CITY / SERVICE AREA]",
  phoneDisplay: "[PHONE NUMBER]",
  phoneTel: "[PHONE NUMBER]",
  whatsappDisplay: "[PHONE NUMBER]",
  whatsappNumber: "[PHONE NUMBER]",
  businessHours: "Mon–Sat, 9:00 AM – 6:00 PM (IST)",
  heroImage: {
    src: "/images/hero-electrical-panel.svg",
    alt: "Technician inspecting an industrial electrical control panel",
    credit:
      "Replace with your licensed photo at public/images/hero-electrical-panel.svg (or .jpg) and update src in business.ts",
  },
  meta: {
    title: "PowerCare Services | Electrical Panel & Generator Service",
    description:
      "Book electrical panel and generator inspection, repair and maintenance for factories, societies and commercial buildings. Clear visit charges before you confirm.",
  },
};

export function isPhoneConfigured(): boolean {
  return !isPlaceholderValue(businessConfig.phoneTel);
}

export function isWhatsAppConfigured(): boolean {
  const digits = digitsOnlyPhone(businessConfig.whatsappNumber);
  return digits.length >= 10 && !isPlaceholderValue(businessConfig.whatsappNumber);
}

export function getTelLink(): string | null {
  if (!isPhoneConfigured()) return null;
  const digits = digitsOnlyPhone(businessConfig.phoneTel);
  if (digits.length < 10) return null;
  return `tel:+${digits.startsWith("91") ? digits : `91${digits}`}`;
}

export function getWhatsAppWaMeLink(message?: string): string | null {
  if (!isWhatsAppConfigured()) return null;
  let digits = digitsOnlyPhone(businessConfig.whatsappNumber);
  if (digits.length === 10) {
    digits = `91${digits}`;
  }
  const base = `https://wa.me/${digits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const customerTypeOptions: { value: CustomerType; label: string }[] = [
  { value: "factory", label: "Factory / Industrial" },
  { value: "housing_society", label: "Housing society" },
  { value: "hotel", label: "Hotel" },
  { value: "school", label: "School / Institution" },
  { value: "office", label: "Office" },
  { value: "commercial", label: "Commercial building" },
  { value: "other", label: "Other" },
];

export interface ServiceDefinition {
  id: ServiceId;
  title: string;
  shortDescription: string;
  icon: "panel" | "generator" | "switch" | "shield" | "upgrade" | "calendar";
}

export const services: ServiceDefinition[] = [
  {
    id: "panel_inspection_repair",
    title: "Electrical Panel Inspection & Repair",
    shortDescription:
      "Fault finding, breaker issues, wiring checks and safe restoration of panel operations.",
    icon: "panel",
  },
  {
    id: "generator_inspection_maintenance",
    title: "Generator Inspection & Maintenance",
    shortDescription:
      "Startup checks, load testing support, fluid levels and routine generator care.",
    icon: "generator",
  },
  {
    id: "amf_ats_troubleshooting",
    title: "AMF / ATS Panel & Changeover Troubleshooting",
    shortDescription:
      "Auto/manual changeover faults, AMF logic issues and power transfer problems.",
    icon: "switch",
  },
  {
    id: "preventive_maintenance",
    title: "Preventive Maintenance",
    shortDescription:
      "Scheduled visits to reduce breakdown risk for panels and backup power systems.",
    icon: "shield",
  },
  {
    id: "panel_upgrades",
    title: "Panel Upgrades & Component Replacement",
    shortDescription:
      "MCB/MCCB, contactors, meters and control components — quoted before replacement.",
    icon: "upgrade",
  },
  {
    id: "annual_maintenance",
    title: "Annual Maintenance Enquiries",
    shortDescription:
      "Discuss yearly visit plans for societies, hotels and facilities with multiple assets.",
    icon: "calendar",
  },
];

export function getServiceById(id: ServiceId): ServiceDefinition | undefined {
  return services.find((s) => s.id === id);
}

export function getCustomerTypeLabel(value: CustomerType): string {
  return (
    customerTypeOptions.find((o) => o.value === value)?.label ?? value
  );
}
