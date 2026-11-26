import { ProjectFinancePage } from "@/components/project-finance/project-finance-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("projectFinance");

export default function ProjectFinanceRoute() {
  return <ProjectFinancePage />;
}
