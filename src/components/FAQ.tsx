import { SectionHeading } from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { businessConfig } from "@/config/business";

const faqs = [
  {
    id: "areas",
    question: "Which areas do you serve?",
    answer: `We coordinate service across ${businessConfig.serviceArea} and nearby locations. Share your PIN code in the enquiry form so we can confirm coverage and visit charges.`,
  },
  {
    id: "visit-charge",
    question: "What is the visit charge?",
    answer:
      "Visit charges depend on location, equipment type and scope. We discuss the issue first and communicate visit charges before you confirm a booking.",
  },
  {
    id: "spare-parts",
    question: "Are spare parts included?",
    answer:
      "Spare parts and major component replacements are quoted separately after inspection. You approve the estimate before parts are procured or fitted.",
  },
  {
    id: "panel-generator",
    question: "Can you inspect both the generator and panel?",
    answer:
      "Yes. We can coordinate inspection for electrical panels, AMF/ATS changeover and generator systems — especially useful when faults may involve both sides.",
  },
  {
    id: "annual",
    question: "Do you offer annual maintenance?",
    answer:
      "Yes. Select “Annual Maintenance Enquiries” or mention AMC in your message. We will outline visit frequency, scope and charges based on your facility.",
  },
  {
    id: "confirmation",
    question: "Is the visit confirmed immediately?",
    answer:
      "No. Sending a WhatsApp enquiry does not confirm a visit. We confirm availability, visit charges and scope with you before scheduling the technician.",
  },
];

export function FAQ() {
  return (
    <section id="faqs" className="section-pad bg-navy-50/50">
      <div className="container-narrow max-w-3xl">
        <SectionHeading
          align="center"
          eyebrow="FAQs"
          title="Common questions"
          description="Transparent answers about coverage, charges and how booking works."
          className="mx-auto text-center"
        />
        <Accordion type="single" collapsible className="rounded-xl border border-navy-100 bg-white px-4 sm:px-6">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
