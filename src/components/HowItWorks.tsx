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
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Process"
              title="How it works"
              description="A straightforward path from enquiry to completed repair — with approval at each important step."
              className="mb-6 lg:mb-0"
            />
            <div className="mt-6 hidden overflow-hidden rounded-2xl border border-navy-100 shadow-sm lg:block">
              <img
                src="/images/service-amc.jpg"
                alt="On-site discussion before a service visit"
                className="aspect-[4/3] w-full object-cover"
                width={720}
                height={540}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <ol className="grid gap-4">
            {steps.map((item) => (
              <li
                key={item.step}
                className="relative flex gap-4 rounded-xl border border-navy-100 bg-white p-5 shadow-sm"
              >
                <span
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-800 text-sm font-bold text-amber-brand"
                  aria-hidden
                >
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
