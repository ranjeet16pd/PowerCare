import { Gift } from "lucide-react";

import { cn } from "@/lib/utils";

export function FreeBadge({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 font-extrabold uppercase tracking-wide text-navy-950 shadow-sm motion-safe:animate-pulse-glow",
        size === "sm" && "px-2.5 py-1 text-[11px]",
        size === "md" && "px-3.5 py-1.5 text-xs",
        size === "lg" && "px-4 py-2 text-sm",
        className,
      )}
    >
      <Gift
        className={cn(
          "text-amber-brandDark motion-safe:animate-bounce-soft",
          size === "lg" ? "h-5 w-5" : "h-4 w-4",
        )}
        aria-hidden
      />
      Inspection visit is{" "}
      <span className="free-word text-amber-brand">Free</span>
    </span>
  );
}
