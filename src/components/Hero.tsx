import {
  BadgeIndianRupee,
  MapPinned,
  Wrench,
} from "lucide-react";

import { ContactActions } from "@/components/ContactActions";
import { FreeBadge } from "@/components/FreeBadge";
import { Reveal } from "@/components/Reveal";
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
    title: "Free inspection visit",
    text: "No visit charge for inspection. Repair and parts are quoted after we see the equipment.",
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
      <div
        className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-amber-brand/25 blur-3xl motion-safe:animate-float"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-navy-400/20 blur-3xl motion-safe:animate-float [animation-delay:1.4s]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.08),_transparent_55%)] lg:block" />
      <div className="section-pad container-narrow">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className={`mb-4 ${motionSafeClass("animate-fade-up")}`}>
              <FreeBadge size="lg" />
            </div>
            {isServiceAreaConfigured() && (
              <p className="mb-3 ml-2 inline-flex items-center rounded-full border border-navy-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-700 motion-safe:animate-fade-up motion-safe:[animation-delay:80ms]">
                {businessConfig.serviceArea}
              </p>
            )}
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-navy-950 motion-safe:animate-fade-up motion-safe:[animation-delay:120ms] sm:text-5xl">
              Electrical Panel &amp; Generator Service, Without the Hassle.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground motion-safe:animate-fade-up motion-safe:[animation-delay:220ms]">
              Book inspection, repair and maintenance for your factory, society,
              hospital or commercial building. Inspection visit is{" "}
              <span className="free-word">Free</span> —
              repair starts only after you approve the estimate.
            </p>
            <div className="mt-8 motion-safe:animate-fade-up motion-safe:[animation-delay:340ms]">
              <ContactActions showConfigHint />
            </div>
          </div>

          <div className="relative motion-safe:animate-slide-in sm:pb-8">
            <div className="absolute -left-3 top-8 hidden h-[72%] w-3 rounded-full bg-amber-brand sm:block" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-navy-800/20 bg-navy-900 shadow-2xl">
              <img
                src={businessConfig.heroImage.src}
                alt={businessConfig.heroImage.alt}
                className="aspect-[4/5] h-full w-full object-cover motion-safe:animate-kenburns sm:aspect-[4/3]"
                width={800}
                height={600}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute left-3 top-3">
                <FreeBadge size="sm" className="bg-amber-brand text-navy-950" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/85 via-navy-950/35 to-transparent p-4 sm:p-5">
                <p className="text-sm font-medium text-white">
                  Industrial panel inspection for factories and commercial sites
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-2 hidden w-[46%] overflow-hidden rounded-xl border-4 border-white shadow-xl motion-safe:animate-fade-up motion-safe:[animation-delay:420ms] sm:block">
              <img
                src={businessConfig.technicianImage.src}
                alt={businessConfig.technicianImage.alt}
                className="aspect-[4/3] w-full object-cover motion-safe:animate-kenburns"
                width={400}
                height={300}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <ul className="mt-16 grid gap-4 sm:grid-cols-3">
          {highlights.map((item, index) => {
            const featured = item.title === "Free inspection visit";
            return (
              <li key={item.title}>
                <Reveal delay={index * 110} variant="scale">
                  <div
                    className={
                      featured
                        ? "listing-card rounded-2xl border-2 border-amber-brand bg-amber-50 p-5 shadow-md motion-safe:animate-pulse-glow"
                        : "listing-card rounded-2xl border border-navy-100 bg-white p-5"
                    }
                  >
                    <item.icon
                      className={
                        featured
                          ? "mb-3 h-6 w-6 text-amber-brandDark motion-safe:animate-bounce-soft"
                          : "mb-3 h-6 w-6 text-amber-brandDark"
                      }
                      aria-hidden
                    />
                    <h3 className="font-semibold text-navy-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
