import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { businessConfig } from "@/config/business";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faqs", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "border-b bg-white/90 backdrop-blur-md transition-[box-shadow,background-color,border-color] duration-500",
        scrolled
          ? "border-navy-100 shadow-[0_8px_24px_-12px_rgba(12,22,38,0.18)]"
          : "border-transparent shadow-none",
      )}
    >
      <div className="container-narrow flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex min-w-0 items-center gap-2 text-navy-900"
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-800 text-amber-brand motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:rotate-12 motion-safe:group-hover:scale-110"
            aria-hidden
          >
            <Zap className="h-5 w-5" />
          </span>
          <span className="truncate font-display text-lg font-bold leading-tight">
            {businessConfig.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative rounded-md px-3 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900 after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-amber-brand after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="amber"
            size="default"
            className="hidden motion-safe:animate-pulse-glow sm:inline-flex"
            asChild
          >
            <a href="#booking">Book free visit</a>
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-navy-100 text-navy-800 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-navy-100 bg-white px-4 py-4 motion-safe:animate-fade-up lg:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-md px-3 py-3 text-base font-medium text-navy-800 hover:bg-navy-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button variant="amber" className="w-full" asChild>
                <a href="#booking" onClick={() => setOpen(false)}>
                  Book free visit
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
