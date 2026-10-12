import type { ServiceEnquiry } from "./types";

const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;

export function normalizeIndianMobile(input: string): string {
  const digits = input.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) {
    return digits.slice(2);
  }
  if (digits.length === 11 && digits.startsWith("0")) {
    return digits.slice(1);
  }
  return digits;
}

export function isValidIndianMobile(input: string): boolean {
  return INDIAN_MOBILE_REGEX.test(normalizeIndianMobile(input));
}

export interface EnquiryFieldErrors {
  name?: string;
  mobile?: string;
  customerType?: string;
  serviceId?: string;
  location?: string;
}

export function validateServiceEnquiry(
  enquiry: Partial<ServiceEnquiry>,
): EnquiryFieldErrors {
  const errors: EnquiryFieldErrors = {};

  const name = enquiry.name?.trim() ?? "";
  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length < 2) {
    errors.name = "Name should be at least 2 characters.";
  }

  const mobile = enquiry.mobile ?? "";
  if (!mobile.trim()) {
    errors.mobile = "Mobile number is required.";
  } else if (!isValidIndianMobile(mobile)) {
    errors.mobile = "Enter a valid 10-digit Indian mobile number.";
  }

  if (!enquiry.customerType) {
    errors.customerType = "Please select customer type.";
  }

  if (!enquiry.serviceId) {
    errors.serviceId = "Please select a service.";
  }

  const location = enquiry.location?.trim() ?? "";
  if (!location) {
    errors.location = "Location or PIN code is required.";
  }

  return errors;
}

export function hasEnquiryErrors(errors: EnquiryFieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
