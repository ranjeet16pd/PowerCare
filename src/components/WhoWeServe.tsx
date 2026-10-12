import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const segments = [
  {
    label: "Factories",
    src: "/images/segment-factory.jpg",
    alt: "Industrial factory floor",
  },
  {
    label: "Housing societies",
    src: "/images/segment-society.jpg",
    alt: "Residential apartment buildings",
  },
  {
    label: "Hotels",
    src: "/images/segment-hotel.jpg",
    alt: "Hotel building at dusk",
  },
  {
    label: "Schools",
    src: "/images/segment-school.jpg",
    alt: "School campus building",
  },
  {
    label: "Offices",
    src: "/images/segment-office.jpg",
    alt: "Open-plan office workspace",
  },
  {
    label: "Commercial buildings",
    src: "/images/segment-commercial.jpg",
    alt: "Modern commercial building exterior",
  },
  {
    label: "Hospitals",
    src: "/images/segment-hospital.jpg",
    alt: "Hospital building exterior",
  },
];

export function WhoWeServe() {
  return (
    <section className="section-pad bg-white">
      <div className="container-narrow">
        <SectionHeading
          align="center"
          eyebrow="Customers"
          title="Who we serve"
          description="We support facilities that depend on reliable panels and backup power — factories, societies, hotels, schools, offices, commercial buildings and hospitals."
          className="mx-auto text-center"
        />
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {segments.map((item, index) => (
            <li key={item.label}>
            <Reveal delay={index * 70}>
            <div
              className="listing-card group relative overflow-hidden rounded-2xl border border-navy-100 shadow-sm hover:shadow-xl"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="media-zoom aspect-[4/5] w-full object-cover"
                width={320}
                height={400}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-3 text-center text-sm font-semibold text-white">
                {item.label}
              </span>
            </div>
            </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
