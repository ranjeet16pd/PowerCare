import type { DemoReview } from "@shared/types";

/**
 * Sample reviews for layout demonstration only.
 * Replace with genuine customer-approved reviews (set isDemo: false and add fields as needed).
 */
export const reviews: DemoReview[] = [
  {
    id: "demo-1",
    label: "Sample factory customer",
    quote:
      "The technician explained the panel issue clearly and shared the estimate before starting the repair.",
    isDemo: true,
  },
  {
    id: "demo-2",
    label: "Sample housing society customer",
    quote:
      "Booking was straightforward, and we received useful updates about the service visit.",
    isDemo: true,
  },
  {
    id: "demo-3",
    label: "Sample commercial building customer",
    quote:
      "The inspection helped us understand what needed immediate repair and what could wait.",
    isDemo: true,
  },
];
