import { ClipboardCheck, Gift, PhoneCall } from "lucide-react";

import { FreeBadge } from "@/components/FreeBadge";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { businessConfig, type OfferDefinition } from "@/config/business";
import { cn } from "@/lib/utils";

const iconMap = {
  free: Gift,
  estimate: ClipboardCheck,
  contact: PhoneCall,
};

function OfferIcon({ offer, featured }: { offer: OfferDefinition; featured: boolean }) {
  const Icon = iconMap[offer.icon];
  return (
    <span
      className={cn(
        "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full",
        featured
          ? "bg-amber-brand text-navy-950 motion-safe:animate-pulse-glow"
          : "bg-navy-700 text-amber-brand",
      )}
      aria-hidden
    >
      <Icon className={cn("h-6 w-6", featured && "motion-safe:animate-bounce-soft")} />
    </span>
  );
}

export function Offers() {
  return (
    <section id="offers" className="section-pad bg-navy-900 text-white">
      <div className="container-narrow">
        <div className="mb-6 flex justify-center">
          <FreeBadge size="lg" />
        </div>
        <SectionHeading
          align="center"
          eyebrow="Current offer"
          title="Book a free inspection visit"
          description="Come on site at no visit charge. You only pay for approved repair work and spare parts."
          className="mx-auto mb-10 text-center [&_h2]:text-white [&_p]:text-navy-100"
        />
        <ul className="grid gap-5 md:grid-cols-3">
          {businessConfig.offers.map((offer, index) => {
            const featured = offer.id === "free_visit";
            return (
              <li key={offer.id}>
                <Reveal delay={index * 90}>
                  <div
                    className={cn(
                      "listing-card rounded-2xl border p-6 shadow-sm hover:shadow-xl",
                      featured
                        ? "border-amber-brand bg-navy-800 ring-2 ring-amber-brand/60 motion-safe:animate-pulse-glow"
                        : "border-navy-700 bg-navy-800/60",
                    )}
                  >
                    <OfferIcon offer={offer} featured={featured} />
                    <h3 className="font-display text-xl font-semibold text-white">
                      {offer.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-100">
                      {offer.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
        <div className="mt-8 text-center">
          <Button
            variant="amber"
            size="lg"
            className="motion-safe:animate-pulse-glow"
            asChild
          >
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
