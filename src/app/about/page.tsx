import { AboutPage } from "@/components/about/about-page";
import { createPageMetadata } from "@/lib/seo";
import { personSchema, serializeJsonLd } from "@/lib/structured-data";

export const metadata = createPageMetadata("about");

export default function AboutRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(personSchema()) }}
      />
      <AboutPage />
    </>
  );
}
