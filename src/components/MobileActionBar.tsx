import { MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  getTelLink,
  getWhatsAppWaMeLink,
  isPhoneConfigured,
  isWhatsAppConfigured,
} from "@/config/business";
import { formatGeneralBookingMessage } from "@/lib/whatsapp";

export function MobileActionBar() {
  const tel = getTelLink();
  const wa = getWhatsAppWaMeLink(formatGeneralBookingMessage());

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-navy-200 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(12,22,38,0.12)] backdrop-blur-md lg:hidden"
      role="region"
      aria-label="Quick contact"
    >
      <div className="mx-auto flex max-w-lg gap-2">
        {isPhoneConfigured() && tel ? (
          <Button variant="default" className="flex-1" size="lg" asChild>
            <a href={tel}>
              <Phone aria-hidden />
              Call Now
            </a>
          </Button>
        ) : (
          <Button variant="default" className="flex-1" size="lg" disabled>
            <Phone aria-hidden />
            Call Now
          </Button>
        )}
        {isWhatsAppConfigured() && wa ? (
          <Button variant="whatsapp" className="flex-1" size="lg" asChild>
            <a href={wa} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden />
              Book on WhatsApp
            </a>
          </Button>
        ) : (
          <Button variant="whatsapp" className="flex-1" size="lg" disabled>
            <MessageCircle aria-hidden />
            Book on WhatsApp
          </Button>
        )}
      </div>
    </div>
  );
}
