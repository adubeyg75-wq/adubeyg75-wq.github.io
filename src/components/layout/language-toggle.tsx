"use client";

import { ctas, hindiEnabled } from "@/content/site";
import { useLanguage } from "@/lib/language";

export type LanguageToggleProps = {
  tone?: "onLight" | "onDark";
};

export function LanguageToggle({ tone = "onLight" }: LanguageToggleProps) {
  const { language, setLanguage, t } = useLanguage();

  if (!hindiEnabled) {
    return null;
  }

  const containerClasses =
    tone === "onDark"
      ? "border-white/20 bg-white/10"
      : "border-navy/15 bg-white shadow-xs";
  const inactiveText = tone === "onDark" ? "text-white" : "text-navy";
  const ringClasses =
    tone === "onDark"
      ? "focus-visible:ring-accent-light focus-visible:ring-offset-navy"
      : "focus-visible:ring-accent focus-visible:ring-offset-white";

  function buttonClasses(active: boolean): string {
    return `min-h-11 min-w-11 rounded-full px-3 text-base font-semibold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 ${ringClasses} ${
      active ? "bg-accent text-white" : inactiveText
    }`;
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border p-1 ${containerClasses}`.trim()}
      role="group"
      aria-label={t(ctas.languageSwitcher)}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={buttonClasses(language === "en")}
      >
        {t(ctas.languageEnglish)}
      </button>
      <span
        aria-hidden="true"
        className={`px-1 text-base ${tone === "onDark" ? "text-white/70" : "text-navy/60"}`}
      >
        |
      </span>
      <button
        type="button"
        onClick={() => setLanguage("hi")}
        aria-pressed={language === "hi"}
        className={buttonClasses(language === "hi")}
      >
        {t(ctas.languageHindi)}
      </button>
    </div>
  );
}
