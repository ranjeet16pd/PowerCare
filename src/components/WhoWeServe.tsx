import {
  Building2,
  Factory,
  GraduationCap,
  Hotel,
  Home,
  Briefcase,
} from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";

const segments = [
  { icon: Factory, label: "Factories" },
  { icon: Home, label: "Housing societies" },
  { icon: Hotel, label: "Hotels" },
  { icon: GraduationCap, label: "Schools" },
  { icon: Briefcase, label: "Offices" },
  { icon: Building2, label: "Commercial buildings" },
];

export function WhoWeServe() {
  return (
    <section className="section-pad bg-white">
      <div className="container-narrow">
        <SectionHeading
          align="center"
          eyebrow="Customers"
          title="Who we serve"
          description="We support facilities that depend on reliable panels and backup power — from industrial plants to residential complexes."
          className="mx-auto text-center"
        />
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {segments.map((item) => (
            <li
              key={item.label}
              className="flex flex-col items-center rounded-xl border border-navy-100 bg-navy-50/40 px-3 py-5 text-center"
            >
              <item.icon
                className="mb-2 h-7 w-7 text-navy-700"
                aria-hidden
              />
              <span className="text-sm font-semibold text-navy-900">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
