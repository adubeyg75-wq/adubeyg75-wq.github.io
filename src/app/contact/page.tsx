import { ContactPage } from "@/components/contact/contact-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("contact");

export default function ContactRoute() {
  return <ContactPage />;
}
