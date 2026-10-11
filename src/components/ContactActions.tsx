import { MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  getTelLink,
  getWhatsAppWaMeLink,
  isPhoneConfigured,
  isWhatsAppConfigured,
} from "@/config/business";
import { formatGeneralBookingMessage } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface ContactActionsProps {
  className?: string;
  size?: "default" | "lg" | "xl";
  layout?: "row" | "stack";
  showConfigHint?: boolean;
}

export function ContactActions({
  className,
  size = "lg",
  layout = "row",
  showConfigHint = false,
}: ContactActionsProps) {
  const tel = getTelLink();
  const wa = getWhatsAppWaMeLink(formatGeneralBookingMessage());
  const phoneOk = isPhoneConfigured() && tel;
  const waOk = isWhatsAppConfigured() && wa;

  return (
    <div className={cn("space-y-3", className)}>
      <div
        className={cn(
          "flex gap-3",
          layout === "stack" ? "flex-col" : "flex-col sm:flex-row",
        )}
      >
        {waOk ? (
          <Button variant="whatsapp" size={size} className="flex-1" asChild>
            <a href={wa} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden />
              Book on WhatsApp
            </a>
          </Button>
        ) : (
          <Button variant="whatsapp" size={size} className="flex-1" disabled>
            <MessageCircle aria-hidden />
            Book on WhatsApp
          </Button>
        )}
        {phoneOk ? (
          <Button variant="outline" size={size} className="flex-1" asChild>
            <a href={tel}>
              <Phone aria-hidden />
              Call for Service
            </a>
          </Button>
        ) : (
          <Button variant="outline" size={size} className="flex-1" disabled>
            <Phone aria-hidden />
            Call for Service
          </Button>
        )}
      </div>
      {showConfigHint && (!phoneOk || !waOk) && (
        <p className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-950">
          Configure your phone and WhatsApp number in{" "}
          <code className="text-xs">src/config/business.ts</code> to enable
          call and WhatsApp buttons.
        </p>
      )}
    </div>
  );
}

export function WhatsAppLinkButton({
  message,
  children,
  className,
  size = "default",
}: {
  message: string;
  children: ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg";
}) {
  const href = getWhatsAppWaMeLink(message);
  if (!href) {
    return (
      <Button variant="whatsapp" size={size} className={className} disabled>
        {children}
      </Button>
    );
  }
  return (
    <Button variant="whatsapp" size={size} className={className} asChild>
      <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    </Button>
  );
}
