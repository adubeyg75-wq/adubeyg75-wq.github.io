"use client";

import { business } from "@/content/site";
import { getGoogleReviewHref } from "@/lib/google-review";
import { useLanguage } from "@/lib/language";

export function GoogleRating() {
  const { t } = useLanguage();
  const label = t(business.googleRatingLabel);
  const href = getGoogleReviewHref();

  if (!href) {
    return <span>{label}</span>;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}
