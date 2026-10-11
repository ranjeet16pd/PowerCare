import { CheckCircle2 } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { businessConfig } from "@/config/business";

const points = [
  "Led by an experienced electrical panel and generator technician.",
  "One contact for coordinating panel and generator issues.",
  "Visit charges communicated before booking.",
  "Repair estimate approved before work begins.",
  "Clear updates during service.",
];

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-navy-900 text-white">
      <div className="container-narrow">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-navy-700 shadow-xl">
            <img
              src={businessConfig.technicianImage.src}
              alt={businessConfig.technicianImage.alt}
              className="aspect-[4/3] w-full object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Why PowerCare"
              title="Practical service, clear communication"
              description="We focus on safe repairs, honest estimates and keeping facility teams informed — without inflated claims."
              className="mb-8 [&_h2]:text-white [&_p]:text-navy-100"
            />
            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point} className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-brand"
                    aria-hidden
                  />
                  <span className="text-base leading-relaxed text-navy-50">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
