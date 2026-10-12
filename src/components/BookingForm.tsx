import { MessageCircle } from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  businessConfig,
  customerTypeOptions,
  getWhatsAppWaMeLink,
  isWhatsAppConfigured,
  services,
} from "@/config/business";
import { formatEnquiryWhatsAppMessage } from "@/lib/whatsapp";
import type { CustomerType, ServiceId, ServiceEnquiry } from "@shared/types";
import {
  hasEnquiryErrors,
  validateServiceEnquiry,
  type EnquiryFieldErrors,
} from "@shared/validation";

interface BookingFormProps {
  selectedServiceId?: ServiceId;
}

export function BookingForm({ selectedServiceId }: BookingFormProps) {
  const [form, setForm] = useState<Partial<ServiceEnquiry>>({
    name: "",
    mobile: "",
    location: "",
    equipmentBrand: "",
    problemDescription: "",
    customerType: undefined,
    serviceId: selectedServiceId,
  });
  const [errors, setErrors] = useState<EnquiryFieldErrors>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  useEffect(() => {
    if (selectedServiceId) {
      setForm((prev) => ({ ...prev, serviceId: selectedServiceId }));
    }
  }, [selectedServiceId]);

  const waConfigured = isWhatsAppConfigured();

  function updateField<K extends keyof ServiceEnquiry>(
    key: K,
    value: ServiceEnquiry[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (submitAttempted) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key as keyof EnquiryFieldErrors];
        return next;
      });
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitAttempted(true);
    const nextErrors = validateServiceEnquiry(form);
    setErrors(nextErrors);
    if (hasEnquiryErrors(nextErrors)) return;

    const enquiry = form as ServiceEnquiry;
    const message = formatEnquiryWhatsAppMessage(enquiry);
    const url = getWhatsAppWaMeLink(message);
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="booking" className="section-pad bg-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Enquiry"
          title="Book a service visit"
          description="Fill in your details and send the enquiry on WhatsApp. Inspection visit is free. Sending this form does not confirm a visit — we confirm availability first."
        />

        {!waConfigured && (
          <div
            className="mb-6 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950"
            role="alert"
          >
            WhatsApp is not configured yet. Set your business WhatsApp number
            in <code className="text-xs">src/config/business.ts</code> (replace{" "}
            <code className="text-xs">[PHONE NUMBER]</code>) to enable enquiry
            submission.
          </div>
        )}

        <Reveal>
        <form
          onSubmit={handleSubmit}
          className="grid gap-6 rounded-2xl border border-navy-100 bg-navy-50/30 p-6 shadow-sm motion-safe:transition-shadow motion-safe:duration-500 motion-safe:hover:shadow-lg sm:p-8 lg:grid-cols-2"
          noValidate
        >
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                autoComplete="name"
                value={form.name ?? ""}
                onChange={(e) => updateField("name", e.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="mobile">Mobile number *</Label>
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="10-digit mobile"
                value={form.mobile ?? ""}
                onChange={(e) => updateField("mobile", e.target.value)}
                aria-invalid={Boolean(errors.mobile)}
                aria-describedby={errors.mobile ? "mobile-error" : undefined}
              />
              {errors.mobile && (
                <p id="mobile-error" className="mt-1 text-sm text-destructive">
                  {errors.mobile}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="customerType">Customer type *</Label>
              <Select
                value={form.customerType ?? ""}
                onValueChange={(v) =>
                  updateField("customerType", v as CustomerType)
                }
              >
                <SelectTrigger
                  id="customerType"
                  aria-invalid={Boolean(errors.customerType)}
                >
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {customerTypeOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.customerType && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.customerType}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="serviceId">Service required *</Label>
              <Select
                value={form.serviceId ?? ""}
                onValueChange={(v) => updateField("serviceId", v as ServiceId)}
              >
                <SelectTrigger
                  id="serviceId"
                  aria-invalid={Boolean(errors.serviceId)}
                >
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.serviceId && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.serviceId}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="location">Location / PIN code *</Label>
              <Input
                id="location"
                name="location"
                autoComplete="postal-code"
                value={form.location ?? ""}
                onChange={(e) => updateField("location", e.target.value)}
                aria-invalid={Boolean(errors.location)}
              />
              {errors.location && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.location}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="equipmentBrand">
                Equipment brand <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input
                id="equipmentBrand"
                name="equipmentBrand"
                value={form.equipmentBrand ?? ""}
                onChange={(e) => updateField("equipmentBrand", e.target.value)}
                placeholder="e.g. Cummins, Kirloskar, Schneider"
              />
              <p className="mt-1 text-xs text-muted-foreground">
                Brand names are for identification only and do not imply
                authorised dealership.
              </p>
            </div>

            <div>
              <Label htmlFor="problemDescription">
                Description of the problem{" "}
                <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Textarea
                id="problemDescription"
                name="problemDescription"
                value={form.problemDescription ?? ""}
                onChange={(e) =>
                  updateField("problemDescription", e.target.value)
                }
                placeholder="What issue are you facing? When did it start?"
              />
            </div>

            <p className="text-xs leading-relaxed text-muted-foreground">
              Your details will be used to respond to this service enquiry.
            </p>

            <Button
              type="submit"
              variant="whatsapp"
              size="lg"
              className="w-full"
              disabled={!waConfigured}
            >
              <MessageCircle aria-hidden />
              Send Enquiry on WhatsApp
            </Button>
          </div>
        </form>
        </Reveal>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Enquiries are handled by {businessConfig.name}. Visit confirmation,
          charges and scope are agreed before scheduling.
        </p>
      </div>
    </section>
  );
}
