"use client";

import type { LocalizedText } from "@/content/site";
import { useLanguage } from "@/lib/language";

export type SectionHeadingProps = {
  eyebrow?: LocalizedText;
  title: LocalizedText;
  subtitle?: LocalizedText;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
}: SectionHeadingProps) {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-2 text-base font-semibold uppercase tracking-widest text-ink">
          {t(eyebrow)}
        </p>
      ) : null}
      <h2 id={id} className="text-3xl font-bold leading-tight text-navy sm:text-4xl">
        {t(title)}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-7 text-text">{t(subtitle)}</p>
      ) : null}
    </div>
  );
}
