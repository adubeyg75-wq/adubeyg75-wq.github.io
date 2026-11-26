import { business } from "@/content/site";
import { resolveOptionalUrl } from "@/lib/content";

export function getGoogleReviewHref(): string | null {
  return resolveOptionalUrl(business.googleReviewUrl);
}
