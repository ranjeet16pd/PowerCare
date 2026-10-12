import { Gift } from "lucide-react";

import { Button } from "@/components/ui/button";

export function OfferBar() {
  return (
    <div className="relative overflow-hidden bg-amber-brand text-navy-950">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 motion-safe:animate-shimmer"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
        }}
        aria-hidden
      />
      <div className="container-narrow relative flex flex-col items-center justify-center gap-2 px-4 py-2.5 text-center sm:flex-row sm:gap-4 sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-sm font-bold sm:text-base">
          <Gift
            className="h-5 w-5 motion-safe:animate-bounce-soft"
            aria-hidden
          />
          <span>
            Inspection visit is{" "}
            <span className="free-word bg-navy-950 text-amber-brand">Free</span>
            <span className="hidden sm:inline">
              {" "}
              · Repair starts only after you approve
            </span>
          </span>
        </p>
        <Button
          variant="default"
          size="sm"
          className="motion-safe:animate-pulse-glow"
          asChild
        >
          <a href="#booking">Book free visit</a>
        </Button>
      </div>
    </div>
  );
}
