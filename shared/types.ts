export type CustomerType =
  | "factory"
  | "housing_society"
  | "hotel"
  | "school"
  | "office"
  | "commercial"
  | "other";

export type ServiceId =
  | "panel_inspection_repair"
  | "generator_inspection_maintenance"
  | "amf_ats_troubleshooting"
  | "preventive_maintenance"
  | "panel_upgrades"
  | "annual_maintenance";

export interface ServiceEnquiry {
  name: string;
  mobile: string;
  customerType: CustomerType;
  serviceId: ServiceId;
  location: string;
  equipmentBrand?: string;
  problemDescription: string;
}

export interface DemoReview {
  id: string;
  label: string;
  quote: string;
  isDemo: true;
}
