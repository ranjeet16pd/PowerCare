import { useEffect } from "react";

import {
  absoluteUrl,
  businessConfig,
  getE164Phone,
  getTelLink,
  isPhoneConfigured,
  isWhatsAppConfigured,
  services,
} from "@/config/business";
import { faqs } from "@/data/faqs";

const JSON_LD_ID = "powercare-jsonld";

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  for (const [key, value] of Object.entries(attrs)) {
    el.setAttribute(key, value);
  }
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function buildJsonLd() {
  const url = absoluteUrl("/");
  const image = absoluteUrl(businessConfig.ogImage);
  const telephone = isPhoneConfigured()
    ? getE164Phone(businessConfig.phoneTel)
    : undefined;
  const whatsapp = isWhatsAppConfigured()
    ? getE164Phone(businessConfig.whatsappNumber)
    : undefined;

  const contactPoints = [
    telephone
      ? {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone,
          availableLanguage: ["en"],
        }
      : null,
    whatsapp
      ? {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: whatsapp,
          contactOption: "WhatsApp",
          availableLanguage: ["en"],
        }
      : null,
  ].filter(Boolean);

  const business = {
    "@type": ["LocalBusiness", "Electrician"],
    "@id": `${url}#business`,
    name: businessConfig.name,
    description: businessConfig.meta.description,
    url,
    image,
    telephone,
    priceRange: "₹₹",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    contactPoint: contactPoints,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electrical panel and generator services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription,
        },
      })),
    },
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${url}#website`,
    name: businessConfig.name,
    url,
    publisher: { "@id": `${url}#business` },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [website, business, faqPage],
  };
}

export function Seo() {
  useEffect(() => {
    const url = absoluteUrl("/");
    const image = absoluteUrl(businessConfig.ogImage);
    const { title, description } = businessConfig.meta;

    document.title = title;
    document.documentElement.lang = "en-IN";

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow, max-image-preview:large",
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[property="og:locale"]', {
      property: "og:locale",
      content: "en_IN",
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: businessConfig.name,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: url,
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: image,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: image,
    });

    if (businessConfig.googleSiteVerification) {
      upsertMeta('meta[name="google-site-verification"]', {
        name: "google-site-verification",
        content: businessConfig.googleSiteVerification,
      });
    }

    upsertLink("canonical", url);

    const tel = getTelLink();
    if (tel) {
      upsertLink("me", tel);
    }

    let script = document.getElementById(JSON_LD_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = JSON_LD_ID;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(buildJsonLd());
  }, []);

  return null;
}
