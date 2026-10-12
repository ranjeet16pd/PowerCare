import { ClipboardCheck, Gift, PhoneCall } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { businessConfig, type OfferDefinition } from "@/config/business";

const iconMap = {
  free: Gift,
  estimate: ClipboardCheck,
  contact: PhoneCall,
};

function OfferIcon({ offer }: { offer: OfferDefinition }) {
  const Icon = iconMap[offer.icon];
  return (
    <span
      className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-brand text-navy-950"
      aria-hidden
    >
      <Icon className="h-6 w-6" />
    </span>
  );
}

export function Offers() {
  return (
    <section id="offers" className="section-pad bg-navy-900 text-white">
      <div className="container-narrow">
        <SectionHeading
          align="center"
          eyebrow="Current offer"
          title="Book a free inspection visit"
          description="Come on site at no visit charge. You only pay for approved repair work and spare parts."
          className="mx-auto mb-10 text-center [&_h2]:text-white [&_p]:text-navy-100"
        />
        <ul className="grid gap-5 md:grid-cols-3">
          {businessConfig.offers.map((offer) => (
            <li
              key={offer.id}
              className="rounded-2xl border border-navy-700 bg-navy-800/60 p-6 shadow-sm"
            >
              <OfferIcon offer={offer} />
              <h3 className="font-display text-xl font-semibold text-white">
                {offer.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-100">
                {offer.description}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Button variant="amber" size="lg" asChild>
            <a href="#booking">Book a free inspection</a>
          </Button>
          <p className="mt-3 text-xs text-navy-300">
            Sending an enquiry does not confirm a visit. Availability is
            confirmed on WhatsApp or phone.
          </p>
        </div>
      </div>
    </section>
  );
}
