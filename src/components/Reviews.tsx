import { MessageSquareQuote } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { reviews } from "@/data/reviews";

export function Reviews() {
  return (
    <section id="reviews" className="section-pad bg-navy-50/50">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Testimonials"
          title="Customer reviews"
          description="The cards below use sample text to show how real reviews can appear once you add customer-approved feedback."
        />
        <ul className="grid gap-5 md:grid-cols-3">
          {reviews.map((review, index) => (
            <li key={review.id}>
              <Reveal delay={index * 80}>
              <Card className="listing-card h-full rounded-2xl border-dashed border-amber-200/80 bg-white hover:shadow-xl">
                <CardContent className="flex h-full flex-col p-6">
                  <p
                    className="mb-3 inline-flex w-fit rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-900 ring-1 ring-amber-200"
                    role="note"
                  >
                    Sample review · For demonstration only
                  </p>
                  <MessageSquareQuote
                    className="mb-3 h-6 w-6 text-navy-300"
                    aria-hidden
                  />
                  <blockquote className="flex-1 text-base leading-relaxed text-navy-800">
                    “{review.quote}”
                  </blockquote>
                  <p className="mt-4 text-sm font-medium text-muted-foreground">
                    {review.label}
                  </p>
                </CardContent>
              </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
