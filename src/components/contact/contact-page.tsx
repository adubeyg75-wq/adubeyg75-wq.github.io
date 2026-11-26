"use client";

import {
  business,
  contactPage,
  ctas,
  socials,
} from "@/content/site";
import { resolveOptionalUrl } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ContactForm } from "@/components/contact/contact-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Disclaimer } from "@/components/ui/disclaimer";
import { Section } from "@/components/ui/section";

const socialLinkClasses =
  "inline-flex min-h-11 items-center rounded-md text-base font-semibold text-navy underline decoration-accent underline-offset-4 hover:text-accent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white";

export function ContactPage() {
  const { t } = useLanguage();
  const whatsappHref = buildWhatsAppUrl(
    t(contactPage.form.summaryLabels.intro),
  );

  return (
    <main id="contact-top">
      <Section id="hero" className="bg-white pb-12 pt-8 sm:pb-16 sm:pt-12">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink sm:text-base">
              {t(contactPage.heroEyebrow)}
            </p>
            <h1
              id="hero-heading"
              className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl"
            >
              {t(contactPage.heroTitle)}
            </h1>
            <p className="mt-4 text-base leading-7 text-text">
              {t(contactPage.heroSubtitle).replace(
                "{hours}",
                t(business.hours),
              )}
            </p>
          </div>
        </Container>
      </Section>

      <Section id="details" className="bg-surface">
        <Container>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            {t(contactPage.detailsTitle)}
          </h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Card className="h-full">
              <dl className="grid gap-5">
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-ink">
                    {t(contactPage.addressLabel)}
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-text">
                    <address className="not-italic">{t(business.address)}</address>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-ink">
                    {t(contactPage.phonesLabel)}
                  </dt>
                  <dd className="mt-2 flex flex-col gap-2 text-base font-semibold text-navy">
                    <a
                      href={`tel:${business.phones.primaryDial}`}
                      className={socialLinkClasses}
                    >
                      {business.phones.primary}
                    </a>
                    <a
                      href={`tel:${business.phones.secondaryDial}`}
                      className={socialLinkClasses}
                    >
                      {business.phones.secondary}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-ink">
                    {t(contactPage.emailLabel)}
                  </dt>
                  <dd className="mt-1 text-base text-navy">
                    <a
                      href={`mailto:${business.email}`}
                      className={`${socialLinkClasses} break-all`}
                    >
                      {business.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-ink">
                    {t(contactPage.hoursLabel)}
                  </dt>
                  <dd className="mt-1 text-base font-semibold text-navy">
                    {t(business.hours)}
                  </dd>
                </div>
              </dl>
              <Button
                href={whatsappHref}
                variant="primary"
                size="lg"
                className="mt-7"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(contactPage.whatsappLabel)}: {t(ctas.whatsapp)}
              </Button>
            </Card>

            <div className="h-full min-h-80 overflow-hidden rounded-xl border border-navy/10 bg-white shadow-sm">
              <iframe
                src={contactPage.mapUrl}
                title={t(contactPage.mapTitle)}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-80 w-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section id="message" className="bg-white">
        <Container>
          <ContactForm />
        </Container>
      </Section>

      <Section id="profiles" className="bg-surface">
        <Container>
          <h2 className="text-2xl font-bold text-navy">
            {t(contactPage.socialTitle)}
          </h2>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((social) => {
              const href = resolveOptionalUrl(social.url);
              if (!href) return null;

              return (
                <a
                  key={social.name.en}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialLinkClasses}
                >
                  {t(social.name)}
                </a>
              );
            })}
          </div>
          <Disclaimer className="mt-8 max-w-3xl" />
        </Container>
      </Section>
    </main>
  );
}
