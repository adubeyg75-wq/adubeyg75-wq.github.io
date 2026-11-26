import { BookPage } from "@/components/book/book-page";
import { createPageMetadata } from "@/lib/seo";
import { bookSchema, serializeJsonLd } from "@/lib/structured-data";

export const metadata = createPageMetadata("book");

export default function BookRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(bookSchema()) }}
      />
      <BookPage />
    </>
  );
}
