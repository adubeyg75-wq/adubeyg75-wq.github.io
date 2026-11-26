import { LegalPage } from "@/components/legal/legal-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("privacy");

export default function PrivacyRoute() {
  return <LegalPage kind="privacy" />;
}
