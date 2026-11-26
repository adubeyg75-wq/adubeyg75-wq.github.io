"use client";

import { ChevronDown } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import type { LocalizedText } from "@/content/site";
import { useLanguage } from "@/lib/language";

export type AccordionItem = {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
};

export type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const { t } = useLanguage();
  const [openIds, setOpenIds] = useState<string[]>([]);
  const triggers = useRef<Array<HTMLButtonElement | null>>([]);

  function toggle(id: string) {
    setOpenIds((current) =>
      current.includes(id)
        ? current.filter((openId) => openId !== id)
        : [...current, id],
    );
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const keys = ["ArrowDown", "ArrowUp", "Home", "End"];
    if (!keys.includes(event.key)) return;

    event.preventDefault();
    const lastIndex = items.length - 1;
    let nextIndex = index;

    if (event.key === "ArrowDown") nextIndex = index === lastIndex ? 0 : index + 1;
    if (event.key === "ArrowUp") nextIndex = index === 0 ? lastIndex : index - 1;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = lastIndex;

    triggers.current[nextIndex]?.focus();
  }

  return (
    <div className="divide-y divide-navy/10 rounded-xl border border-navy/10 bg-white shadow-sm">
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        const triggerId = `${item.id}-trigger`;
        const panelId = `${item.id}-panel`;

        return (
          <div key={item.id}>
            <h3>
              <button
                ref={(element) => {
                  triggers.current[index] = element;
                }}
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className="flex min-h-11 w-full items-center justify-between gap-4 rounded-lg px-5 py-4 text-left text-base font-semibold text-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <span>{t(item.question)}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={`h-5 w-5 shrink-0 text-accent transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out)] motion-reduce:transition-none motion-reduce:rotate-none ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows] duration-[var(--duration-normal)] ease-[var(--ease-out)] motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-base leading-7 text-text">
                  {t(item.answer)}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
