"use client";

import { book, bookPage, imageCopy } from "@/content/site";
import { resolveOptionalUrl } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Disclaimer } from "@/components/ui/disclaimer";
import { Section } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";

export function BookPage() {
  const { t } = useLanguage();
  const amazonUrl = resolveOptionalUrl(book.amazonUrl);

  return (
    <main id="book-top">
      <Section id="hero" className="bg-white pb-12 pt-8 sm:pb-16 sm:pt-12">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink sm:text-base">
              {t(bookPage.heroEyebrow)}
            </p>
            <h1
              id="hero-heading"
              className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl"
            >
              {t(bookPage.heroTitle)}
            </h1>
          </div>
        </Container>
      </Section>

      <Section id="details" className="bg-surface">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
            <SiteImage
              name="book-cover"
              alt={t(imageCopy.bookCover.alt)}
              width={280}
              height={444}
              className="mx-auto w-full max-w-[280px]"
              imageClassName="rounded-xl shadow-xl"
            />

            <Card className="h-full">
              <h2 className="text-2xl font-bold leading-tight text-navy sm:text-3xl">
                {t(bookPage.detailsLabel)}
              </h2>
              <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="rounded-lg border border-navy/10 bg-white p-4">
                  <dt className="text-sm font-semibold uppercase tracking-wide text-ink">
                    {t(bookPage.formatLabel)}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-navy">
                    {t(book.format)}
                  </dd>
                </div>
                <div className="rounded-lg border border-navy/10 bg-white p-4">
                  <dt className="text-sm font-semibold uppercase tracking-wide text-ink">
                    {t(bookPage.editionLabel)}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-navy">
                    {t(book.edition)}
                  </dd>
                </div>
                <div className="rounded-lg border border-navy/10 bg-white p-4">
                  <dt className="text-sm font-semibold uppercase tracking-wide text-ink">
                    {t(bookPage.publishedLabel)}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-navy">
                    {t(book.date)}
                  </dd>
                </div>
                <div className="rounded-lg border border-navy/10 bg-white p-4">
                  <dt className="text-sm font-semibold uppercase tracking-wide text-ink">
                    {t(bookPage.priceLabel)}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-navy">
                    {t(book.price)}
                  </dd>
                </div>
              </dl>
              {amazonUrl ? (
                <Button
                  href={amazonUrl}
                  variant="primary"
                  size="lg"
                  className="mt-7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(bookPage.buyLabel)}
                </Button>
              ) : null}
            </Card>
          </div>
        </Container>
      </Section>

      <Section id="audience" className="bg-white">
        <Container className="grid gap-6 md:grid-cols-2">
          <Card className="h-full">
            <h2 className="text-2xl font-bold text-navy">
              {t(bookPage.whoForTitle)}
            </h2>
            <p className="mt-3 text-base leading-7 text-text">
              {t(bookPage.whoFor)}
            </p>
          </Card>
          <Card className="h-full">
            <h2 className="text-2xl font-bold text-navy">
              {t(bookPage.topicsTitle)}
            </h2>
            <p className="mt-3 text-base leading-7 text-text">
              {t(bookPage.topicsTodo)}
            </p>
          </Card>
        </Container>
      </Section>

      <Section id="disclaimer" className="bg-surface">
        <Container>
          <Disclaimer className="max-w-3xl" />
        </Container>
      </Section>
    </main>
  );
}
