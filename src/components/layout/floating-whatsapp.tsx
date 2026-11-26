"use client";

import { MessageCircle } from "lucide-react";
import { ctas, messages } from "@/content/site";
import { useLanguage } from "@/lib/language";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const { t } = useLanguage();
  const href = buildWhatsAppUrl(t(messages.whatsappProjectLoan));

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t(ctas.floatingWhatsApp)}
      className="whatsapp-button fixed bottom-20 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy md:bottom-6 md:right-6"
    >
      <span
        aria-hidden="true"
        className="whatsapp-pulse pointer-events-none absolute inset-0 rounded-full border-2 border-white/60"
      />
      <MessageCircle aria-hidden="true" className="relative h-7 w-7 text-white" />
    </a>
  );
}
