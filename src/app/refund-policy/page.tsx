import { LegalPage } from "@/components/legal/legal-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("refundPolicy");

export default function RefundPolicyRoute() {
  return <LegalPage kind="refund" />;
}
