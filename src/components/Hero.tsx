import {
  BadgeIndianRupee,
  MapPinned,
  Wrench,
} from "lucide-react";

import { ContactActions } from "@/components/ContactActions";
import { businessConfig, isServiceAreaConfigured } from "@/config/business";
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
    text: isServiceAreaConfigured()
      ? `Serving ${businessConfig.serviceArea} and nearby areas.`
      : "Share your PIN code — we confirm coverage before scheduling a visit.",
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-navy-100 bg-navy-50/40"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.08),_transparent_55%)] lg:block" />
      <div className="section-pad container-narrow">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className={motionSafeClass("animate-fade-up")}>
            {isServiceAreaConfigured() && (
              <p className="mb-3 inline-flex items-center rounded-full border border-navy-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-700">
                {businessConfig.serviceArea}
              </p>
            )}
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-navy-950 sm:text-5xl">
              Electrical Panel &amp; Generator Service, Without the Hassle.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Book inspection, repair and maintenance for your factory, society,
              hospital or commercial building. Share your issue and get a clear
              visit charge before confirming.
            </p>
            <div className="mt-8">
              <ContactActions showConfigHint />
            </div>
          </div>

          <div className="relative sm:pb-8">
            <div className="absolute -left-3 top-8 hidden h-[72%] w-3 rounded-full bg-amber-brand sm:block" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-navy-800/20 bg-navy-900 shadow-2xl">
              <img
                src={businessConfig.heroImage.src}
                alt={businessConfig.heroImage.alt}
                className="aspect-[4/5] h-full w-full object-cover sm:aspect-[4/3]"
                width={800}
                height={600}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/85 via-navy-950/35 to-transparent p-4 sm:p-5">
                <p className="text-sm font-medium text-white">
                  Industrial panel inspection for factories and commercial sites
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-2 hidden w-[46%] overflow-hidden rounded-xl border-4 border-white shadow-xl sm:block">
              <img
                src={businessConfig.technicianImage.src}
                alt={businessConfig.technicianImage.alt}
                className="aspect-[4/3] w-full object-cover"
                width={400}
                height={300}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <ul className="mt-16 grid gap-4 sm:grid-cols-3">
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
