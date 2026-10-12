import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

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
        <Reveal>
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
        </Reveal>
      </div>
    </section>
  );
}
