const DEFAULT_WHATSAPP_NUMBER = "919473595944";

export function buildWhatsAppUrl(message: string): string {
  const configuredNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const number = (configuredNumber || DEFAULT_WHATSAPP_NUMBER).replace(/\D/g, "");
  const safeNumber = number || DEFAULT_WHATSAPP_NUMBER;

  return `https://wa.me/${safeNumber}?text=${encodeURIComponent(message)}`;
}
