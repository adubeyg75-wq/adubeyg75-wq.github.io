import { NotFoundPage } from "@/components/not-found/not-found-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = {
  ...createPageMetadata("notFound"),
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundPage />;
}
