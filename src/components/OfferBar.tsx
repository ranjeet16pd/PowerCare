import { Gift } from "lucide-react";

import { Button } from "@/components/ui/button";

export function OfferBar() {
  return (
    <div className="bg-navy-900 text-white">
      <div className="container-narrow flex flex-col items-center justify-center gap-2 px-4 py-2.5 text-center sm:flex-row sm:gap-4 sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-sm font-semibold">
          <Gift className="h-4 w-4 text-amber-brand" aria-hidden />
          <span>
            Inspection visit is <span className="text-amber-brand">free</span>
            <span className="hidden sm:inline">
              {" "}
              · Repair starts only after you approve the estimate
            </span>
          </span>
        </p>
        <Button variant="amber" size="sm" asChild>
          <a href="#booking">Book free visit</a>
        </Button>
      </div>
    </div>
  );
}
