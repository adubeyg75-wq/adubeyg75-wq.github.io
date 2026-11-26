"use client";

import { disclaimer } from "@/content/site";
import { useLanguage } from "@/lib/language";

export type DisclaimerProps = {
  className?: string;
  tone?: "onLight" | "onDark";
};

export function Disclaimer({
  className = "",
  tone = "onLight",
}: DisclaimerProps) {
  const { t } = useLanguage();
  const toneClasses =
    tone === "onDark"
      ? "border-accent-light bg-white/10 text-white"
      : "border-accent bg-white text-text";

  return (
    <aside
      className={`border-l-4 p-4 text-base leading-6 ${toneClasses} ${className}`.trim()}
    >
      {t(disclaimer.footer)}
    </aside>
  );
}
