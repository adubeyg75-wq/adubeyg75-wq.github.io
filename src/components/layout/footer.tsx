"use client";

import Link from "next/link";
import {
  business,
  footer,
  legalNav,
  nav,
  services,
  socials,
} from "@/content/site";
import { resolveOptionalUrl } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { Container } from "@/components/ui/container";
import { Disclaimer } from "@/components/ui/disclaimer";

const linkClasses =
  "inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-base text-white/85 transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)] motion-reduce:transition-none hover:text-accent-light focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-navy";

export function Footer() {
  const { t } = useLanguage();
  const copyright = t(footer.copyright).replace(
    "{year}",
    String(new Date().getFullYear()),
  );

  return (
    <footer className="border-t border-white/10 bg-navy shadow-xs">
      <Container className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="min-w-0">
          <p className="font-heading text-xl font-bold text-white">
            {t(business.firm)}
          </p>
          <p className="mt-3 text-base leading-7 text-white/80">
            {t(footer.about)}
          </p>
        </div>

        <div className="min-w-0">
          <h2 className="text-base font-bold text-white">{t(footer.quickLinks)}</h2>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClasses}>
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <h2 className="text-base font-bold text-white">{t(footer.services)}</h2>
          <ul className="mt-3 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className={linkClasses}
                >
                  {t(service.title)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <h2 className="text-base font-bold text-white">{t(footer.legal)}</h2>
          <ul className="mt-3 space-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClasses}>
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <h2 className="text-base font-bold text-white">{t(footer.contact)}</h2>
          <p className="mt-3 text-base font-semibold text-white">
            {t(footer.phone)}
          </p>
          <a href={`tel:${business.phones.primaryDial}`} className={linkClasses}>
            {business.phones.primary}
          </a>
          <a href={`tel:${business.phones.secondaryDial}`} className={linkClasses}>
            {business.phones.secondary}
          </a>
          <p className="mt-3 text-base font-semibold text-white">{t(footer.email)}</p>
          <a href={`mailto:${business.email}`} className={`${linkClasses} break-all`}>
            {business.email}
          </a>
        </div>
      </Container>

      <Container className="pb-12">
        <h2 className="text-base font-bold text-white">{t(footer.social)}</h2>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          {socials.map((social) => {
            const href = resolveOptionalUrl(social.url);
            if (!href) return null;

            return (
              <a
                key={social.name.en}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses}
              >
                {t(social.name)}
              </a>
            );
          })}
        </div>

        <Disclaimer tone="onDark" className="mt-8" />
        <p className="mt-4 text-base text-white/70">{copyright}</p>
      </Container>
    </footer>
  );
}
