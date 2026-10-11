import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    step: "1",
    title: "Share your location and equipment issue",
    text: "Tell us what equipment is affected and what symptoms you are seeing.",
  },
  {
    step: "2",
    title: "We discuss the problem and confirm visit charges",
    text: "Scope and visit charges are communicated before you confirm a visit.",
  },
  {
    step: "3",
    title: "A suitable technician visits and inspects",
    text: "On-site inspection to identify faults and required repairs.",
  },
  {
    step: "4",
    title: "Repair begins after you approve the estimate",
    text: "No repair work starts until you approve the quoted estimate.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-navy-50/50">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Process"
          title="How it works"
          description="A straightforward path from enquiry to completed repair — with approval at each important step."
        />
        <ol className="grid gap-5 md:grid-cols-2">
          {steps.map((item) => (
            <li
              key={item.step}
              className="relative rounded-xl border border-navy-100 bg-white p-6 shadow-sm"
            >
              <span
                className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy-800 text-sm font-bold text-amber-brand"
                aria-hidden
              >
                {item.step}
              </span>
              <h3 className="font-display text-lg font-semibold text-navy-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
