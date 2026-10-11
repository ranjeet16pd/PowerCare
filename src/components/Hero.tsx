import {
  BadgeIndianRupee,
  MapPinned,
  Wrench,
} from "lucide-react";

import { ContactActions } from "@/components/ContactActions";
import { businessConfig } from "@/config/business";
import { motionSafeClass } from "@/lib/motion";

const highlights = [
  {
    icon: Wrench,
    title: "Panel & generator support",
    text: "One team to coordinate electrical panel and backup power issues.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Clear repair estimates",
    text: "Visit charges and repair scope discussed before work begins.",
  },
  {
    icon: MapPinned,
    title: "Local service coordination",
    text: `Serving ${businessConfig.serviceArea} and nearby areas.`,
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-navy-100 bg-gradient-to-b from-white to-navy-50/60"
    >
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-amber-brand/10 blur-3xl" />
      <div className="section-pad container-narrow">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className={motionSafeClass("animate-fade-up")}>
            <p className="mb-3 inline-flex items-center rounded-full border border-navy-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-700">
              {businessConfig.serviceArea}
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-navy-950 sm:text-5xl">
              Electrical Panel &amp; Generator Service, Without the Hassle.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Book inspection, repair and maintenance for your factory, society
              or commercial building. Share your issue and get a clear visit
              charge before confirming.
            </p>
            <div className="mt-8">
              <ContactActions showConfigHint />
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-navy-100 bg-navy-900 shadow-xl">
              <img
                src={businessConfig.heroImage.src}
                alt={businessConfig.heroImage.alt}
                className="aspect-[4/3] h-full w-full object-cover"
                width={800}
                height={600}
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent p-4 sm:p-5">
                <p className="text-sm text-white/90">
                  Professional panel &amp; generator service for commercial
                  facilities
                </p>
              </div>
            </div>
            {businessConfig.heroImage.credit && (
              <p className="mt-2 text-xs text-muted-foreground">
                {businessConfig.heroImage.credit}
              </p>
            )}
          </div>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <item.icon
                className="mb-3 h-6 w-6 text-amber-brandDark"
                aria-hidden
              />
              <h3 className="font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
