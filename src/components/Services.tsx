import {
  Calendar,
  Cog,
  Gauge,
  RefreshCw,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppLinkButton } from "@/components/ContactActions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services, type ServiceDefinition } from "@/config/business";
import { formatQuickServiceMessage } from "@/lib/whatsapp";

const iconMap = {
  panel: Gauge,
  generator: Zap,
  switch: RefreshCw,
  shield: ShieldCheck,
  upgrade: Cog,
  calendar: Calendar,
};

function ServiceIcon({ service }: { service: ServiceDefinition }) {
  const Icon = iconMap[service.icon];
  return (
    <span
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/95 text-navy-800"
      aria-hidden
    >
      <Icon className="h-5 w-5" />
    </span>
  );
}

interface ServicesProps {
  onBookService?: (serviceId: string) => void;
}

export function Services({ onBookService }: ServicesProps) {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Services"
          title="Panel, generator & maintenance support"
          description="Choose a service to start your enquiry. Inspection visit is free. Repair work is quoted after inspection."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.id}>
              <Card className="group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image.src}
                    alt={service.image.alt}
                    className="aspect-[16/10] w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
                    width={640}
                    height={400}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute left-3 top-3 rounded-lg shadow-sm">
                    <ServiceIcon service={service} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto flex flex-col gap-2 pt-0">
                  <WhatsAppLinkButton
                    message={formatQuickServiceMessage(service.title)}
                    className="w-full"
                    size="default"
                  >
                    Book this service
                  </WhatsAppLinkButton>
                  <button
                    type="button"
                    className="text-sm font-medium text-navy-700 underline-offset-4 hover:underline"
                    onClick={() => {
                      onBookService?.(service.id);
                      document
                        .getElementById("booking")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Or use enquiry form
                  </button>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
