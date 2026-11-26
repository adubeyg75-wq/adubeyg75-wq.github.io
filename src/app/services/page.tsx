import { ServicesPage } from "@/components/services/services-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("services");

export default function ServicesRoute() {
  return <ServicesPage />;
}
