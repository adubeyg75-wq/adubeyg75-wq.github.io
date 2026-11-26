import { LegalPage } from "@/components/legal/legal-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("terms");

export default function TermsRoute() {
  return <LegalPage kind="terms" />;
}
