"use client";

import { imageCopy, services, servicesPage } from "@/content/site";
import { isTodoValue } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Disclaimer } from "@/components/ui/disclaimer";
import { Section } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";

function fillTemplate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");
}

export function ServicesPage() {
  const { t } = useLanguage();
  const content = servicesPage;

  return (
    <main id="services-top">
      <Section id="hero" className="bg-white pb-12 pt-8 sm:pb-16 sm:pt-12">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink sm:text-base">
              {t(content.heroEyebrow)}
            </p>
            <h1
              id="hero-heading"
              className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl"
            >
              {t(content.heroTitle)}
            </h1>
            <p className="mt-4 text-base leading-7 text-text">
              {t(content.heroSubtitle)}
            </p>
          </div>
        </Container>
      </Section>

      <Section id="service-list" className="bg-surface">
        <Container className="grid gap-8">
          {services.map((service) => {
            const whatsappHref = buildWhatsAppUrl(
              fillTemplate(t(content.whatsappMessage), {
                service: t(service.title),
              }),
            );
            const price = isTodoValue(service.price.en)
              ? t(content.priceFallback)
              : t(service.price);

            return (
              <article
                key={service.slug}
                id={service.slug}
                aria-labelledby={`${service.slug}-heading`}
                className="scroll-mt-24"
              >
                <Card className="h-full">
                  <h2
                    id={`${service.slug}-heading`}
                    className="text-2xl font-bold leading-tight text-navy sm:text-3xl"
                  >
                    {t(service.title)}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-text">
                    {t(service.shortDescription)}
                  </p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {service.bullets.map((bullet, index) => (
                      <li
                        key={`${bullet.en}-${index}`}
                        className="flex gap-3 rounded-lg border border-navy/10 bg-white p-4 text-base leading-7 text-text"
                      >
                        <span aria-hidden="true" className="text-accent">
                          &bull;
                        </span>
                        <span>{t(bullet)}</span>
                      </li>
                    ))}
                  </ul>
                  {service.slug === "entrepreneurship-training" ? (
                    <figure className="mt-6 w-full max-w-[280px]">
                      <SiteImage
                        name="arora-teaching"
                        alt={t(imageCopy.teaching.alt)}
                        width={280}
                        height={209}
                        className="w-full max-w-[280px]"
                        imageClassName="rounded-2xl object-cover shadow-lg"
                      />
                      <figcaption className="mt-2 text-sm leading-6 text-ink">
                        {t(imageCopy.teaching.caption)}
                      </figcaption>
                    </figure>
                  ) : null}
                  <p className="mt-6 text-base text-navy">
                    <span className="font-semibold">{t(content.priceLabel)}:</span>{" "}
                    {price}
                  </p>
                  <div className="mt-6 flex flex-col gap-3 pr-20 sm:flex-row sm:pr-0">
                    <Button
                      href="/project-finance#enquiry"
                      variant="primary"
                      size="lg"
                    >
                      {t(content.enquireCta)}
                    </Button>
                    <Button
                      href={whatsappHref}
                      variant="outline"
                      size="lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t(content.whatsappCta)}
                    </Button>
                  </div>
                </Card>
              </article>
            );
          })}
        </Container>
      </Section>

      <Section id="disclaimer" className="bg-white">
        <Container>
          <Disclaimer className="max-w-3xl" />
        </Container>
      </Section>
    </main>
  );
}
