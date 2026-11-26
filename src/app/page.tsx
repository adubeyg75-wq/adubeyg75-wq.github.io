import { HomePage } from "@/components/home/home-page";
import { createPageMetadata } from "@/lib/seo";
import { professionalServiceSchema, serializeJsonLd } from "@/lib/structured-data";

export const metadata = createPageMetadata("home");

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(professionalServiceSchema()),
        }}
      />
      <HomePage />
    </>
  );
}
