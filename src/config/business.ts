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
  technicianImage: {
    src: string;
    alt: string;
  };
  meta: {
    title: string;
    description: string;
  };
  /** Public origin used for canonical, Open Graph, sitemap, and schema. */
  siteUrl: string;
  /** Path or absolute URL of the social share image. */
  ogImage: string;
  /** Paste the token from Google Search Console if you verify via HTML tag. */
  googleSiteVerification?: string;
  offers: OfferDefinition[];
}

export interface OfferDefinition {
  id: string;
  title: string;
  description: string;
  icon: "free" | "estimate" | "contact";
}

export const businessConfig: BusinessConfig = {
  name: "PowerCare Services",
  tagline: "Electrical panel & generator service coordination",
  serviceArea: "",
  phoneDisplay: "+91 99101 03171",
  phoneTel: "9910103171",
  whatsappDisplay: "+91 93152 30568",
  whatsappNumber: "9315230568",
  businessHours: "Mon–Sat, 9:00 AM – 6:00 PM (IST)",
  heroImage: {
    src: "/images/hero-electrical-panel.jpg",
    alt: "Industrial electrical control panel with meters, switches and lockout tags",
  },
  technicianImage: {
    src: "/images/electrician-at-work.jpg",
    alt: "Technician working on an electrical enclosure",
  },
  meta: {
    title: "Electrical Panel & Generator Service | PowerCare",
    description:
      "Free inspection visit for electrical panel, AMF/ATS and generator repair. Estimate first — repair starts only after you approve. Call or WhatsApp PowerCare Services.",
  },
  siteUrl: "https://powercare-services.powercare-prod.workers.dev",
  ogImage: "/images/hero-electrical-panel.jpg",
  offers: [
    {
      id: "free_visit",
      title: "Inspection visit is free",
      description:
        "No charge for the on-site inspection. Spare parts and repair work are quoted after we see the equipment.",
      icon: "free",
    },
    {
      id: "approve_estimate",
      title: "Pay for repair only after you approve",
      description:
        "We share a clear estimate first. Repair and parts start only after you say yes.",
      icon: "estimate",
    },
    {
      id: "one_contact",
      title: "One contact for panel and generator",
      description:
        "Share the issue once. We coordinate electrical panel, AMF/ATS and generator work together.",
      icon: "contact",
    },
  ],
};

export function isServiceAreaConfigured(): boolean {
  return !isPlaceholderValue(businessConfig.serviceArea);
}

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
  { value: "hospital", label: "Hospital" },
  { value: "office", label: "Office" },
  { value: "commercial", label: "Commercial building" },
  { value: "other", label: "Other" },
];

export interface ServiceDefinition {
  id: ServiceId;
  title: string;
  shortDescription: string;
  icon: "panel" | "generator" | "switch" | "shield" | "upgrade" | "calendar";
  image: {
    src: string;
    alt: string;
  };
}

export const services: ServiceDefinition[] = [
  {
    id: "panel_inspection_repair",
    title: "Electrical Panel Inspection & Repair",
    shortDescription:
      "Fault finding, breaker issues, wiring checks and safe restoration of panel operations.",
    icon: "panel",
    image: {
      src: "/images/service-panel-repair.jpg",
      alt: "Close-up of an electrical panel with circuit breakers being inspected",
    },
  },
  {
    id: "generator_inspection_maintenance",
    title: "Generator Inspection & Maintenance",
    shortDescription:
      "Startup checks, load testing support, fluid levels and routine generator care.",
    icon: "generator",
    image: {
      src: "/images/service-generator.jpg",
      alt: "Industrial diesel generator in a plant room",
    },
  },
  {
    id: "amf_ats_troubleshooting",
    title: "AMF / ATS Panel & Changeover Troubleshooting",
    shortDescription:
      "Auto/manual changeover faults, AMF logic issues and power transfer problems.",
    icon: "switch",
    image: {
      src: "/images/service-amf.jpg",
      alt: "Outdoor electrical control cabinet with contactors and display modules",
    },
  },
  {
    id: "preventive_maintenance",
    title: "Preventive Maintenance",
    shortDescription:
      "Scheduled visits to reduce breakdown risk for panels and backup power systems.",
    icon: "shield",
    image: {
      src: "/images/electrician-at-work.jpg",
      alt: "Technician inspecting wall-mounted electrical equipment",
    },
  },
  {
    id: "panel_upgrades",
    title: "Panel Upgrades & Component Replacement",
    shortDescription:
      "MCB/MCCB, contactors, meters and control components — quoted before replacement.",
    icon: "upgrade",
    image: {
      src: "/images/hero-electrical-panel.jpg",
      alt: "Industrial panel meters, selector switches and control components",
    },
  },
  {
    id: "annual_maintenance",
    title: "Annual Maintenance Enquiries",
    shortDescription:
      "Discuss yearly visit plans for societies, hotels and facilities with multiple assets.",
    icon: "calendar",
    image: {
      src: "/images/service-amc.jpg",
      alt: "Facility team reviewing a service plan on site",
    },
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

export function absoluteUrl(path = "/"): string {
  const origin = businessConfig.siteUrl.replace(/\/$/, "");
  if (/^https?:\/\//i.test(path)) return path;
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${normalised}`;
}

export function getE164Phone(raw: string): string {
  const digits = digitsOnlyPhone(raw);
  if (digits.startsWith("91") && digits.length === 12) return `+${digits}`;
  return `+91${digits}`;
}
