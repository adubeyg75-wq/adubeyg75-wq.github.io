import {
  aboutPage,
  book,
  bookPage,
  business,
  credentials,
  seo,
  services,
} from "@/content/site";
import { getRouteUrl } from "@/lib/seo";

type JsonLdSchema = Record<string, unknown>;

export function professionalServiceSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: business.firm.en,
    description: seo.defaultDescription,
    url: getRouteUrl(seo.paths.home),
    email: business.email,
    telephone: [business.phones.primary, business.phones.secondary],
    address: {
      "@type": "PostalAddress",
      ...business.addressParts,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        opens: seo.structured.businessOpens,
        closes: seo.structured.businessCloses,
      },
    ],
    foundingDate: seo.structured.foundingDate,
    sameAs: seo.structured.sameAs,
  };
}

export function personSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: business.name.en,
    description: aboutPage.bio.en,
    url: getRouteUrl(seo.paths.about),
    worksFor: {
      "@type": "Organization",
      name: business.firm.en,
      url: getRouteUrl(seo.paths.home),
    },
    sameAs: seo.structured.sameAs,
    hasCredential: credentials.map((credential) => ({
      "@type": "EducationalOccupationalCredential",
      name: credential.en,
    })),
    knowsAbout: services.map((service) => service.title.en),
  };
}

export function bookSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title.en,
    description: bookPage.whoFor.en,
    url: getRouteUrl(seo.paths.book),
    author: {
      "@type": "Person",
      name: business.name.en,
    },
    bookFormat: book.bookFormat,
    datePublished: book.dateIso,
    offers: {
      "@type": "Offer",
      price: book.priceAmount,
      priceCurrency: book.priceCurrency,
      url: book.amazonUrl,
    },
  };
}

export function serializeJsonLd(schema: JsonLdSchema): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
