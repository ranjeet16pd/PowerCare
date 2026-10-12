import { MessageCircle, Phone } from "lucide-react";

import {
  businessConfig,
  getTelLink,
  getWhatsAppWaMeLink,
  isPhoneConfigured,
  isServiceAreaConfigured,
  isWhatsAppConfigured,
} from "@/config/business";
import { formatGeneralBookingMessage } from "@/lib/whatsapp";

export function Footer() {
  const tel = getTelLink();
  const wa = getWhatsAppWaMeLink(formatGeneralBookingMessage());
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-navy-800 bg-navy-950 text-navy-100">
      <div className="section-pad container-narrow pb-28 lg:pb-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="font-display text-xl font-bold text-white">
              {businessConfig.name}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-200">
              {businessConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-brand">
              Hours
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {isServiceAreaConfigured() && (
                <li>
                  <span className="text-navy-300">Area:</span>{" "}
                  {businessConfig.serviceArea}
                </li>
              )}
              <li>
                <span className="text-navy-300">Hours:</span>{" "}
                {businessConfig.businessHours}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-brand">
              Contact
            </h3>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-brand" aria-hidden />
                {isPhoneConfigured() && tel ? (
                  <a href={tel} className="hover:text-white">
                    {businessConfig.phoneDisplay}
                  </a>
                ) : (
                  <span>{businessConfig.phoneDisplay}</span>
                )}
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle
                  className="h-4 w-4 text-[#25D366]"
                  aria-hidden
                />
                {isWhatsAppConfigured() && wa ? (
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    WhatsApp: {businessConfig.whatsappDisplay}
                  </a>
                ) : (
                  <span>WhatsApp: {businessConfig.whatsappDisplay}</span>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 space-y-3 border-t border-navy-800 pt-6 text-xs leading-relaxed text-navy-400">
          <p>
            <strong className="text-navy-200">Privacy:</strong> Information you
            share via phone, WhatsApp or the enquiry form is used only to respond
            to your service request and coordinate visits. We do not sell your
            contact details.
          </p>
          <p>
            Equipment brand names mentioned on this site are for customer
            reference only and do not imply authorised dealership, partnership or
            certification by those manufacturers.
          </p>
          <p>
            Site photos are licensed stock from Unsplash and Pexels. Replace
            files in <code className="text-navy-300">public/images/</code> with
            your own site photos anytime.
          </p>
          <p>© {year} {businessConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
