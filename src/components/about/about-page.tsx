"use client";

import {
  aboutPage,
  associations,
  book,
  business,
  credentials,
  imageCopy,
} from "@/content/site";
import { useLanguage } from "@/lib/language";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Disclaimer } from "@/components/ui/disclaimer";
import { Section } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";

export function AboutPage() {
  const { t } = useLanguage();
  const content = aboutPage;

  return (
    <main id="about-top">
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
          </div>
        </Container>
      </Section>

      <Section id="profile" className="bg-surface">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
            <div className="flex justify-center lg:justify-start">
              <SiteImage
                name="arora-portrait"
                alt={t(imageCopy.portrait.alt)}
                width={280}
                height={237}
                className="w-full max-w-[17.5rem]"
                imageClassName="rounded-2xl object-cover shadow-lg"
              />
            </div>
            <div>
              <p className="text-base leading-7 text-text">{t(content.bio)}</p>
              <p className="mt-6 rounded-xl border border-accent bg-white p-5 text-lg font-semibold leading-8 text-navy shadow-sm">
                {t(content.valuesLine)}
              </p>
              <Button href="/contact" variant="primary" size="lg" className="mt-6">
                {t(content.cta)}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="background" className="bg-white">
        <Container className="grid gap-8 lg:grid-cols-3">
          <Card className="h-full">
            <p className="text-base font-semibold text-navy">
              {t(content.udyamLabel)}
            </p>
            <p className="mt-2 text-lg font-bold text-navy">{business.udyam}</p>
            <p className="mt-4 text-base leading-7 text-text">
              {t(business.established)}
            </p>
          </Card>

          <Card className="h-full">
            <h2 className="text-xl font-bold text-navy">
              {t(content.associationsLabel)}
            </h2>
            <ul className="mt-4 grid gap-3">
              {associations.map((association) => (
                <li
                  key={association.name.en}
                  className="flex gap-3 text-base leading-7 text-text"
                >
                  <span aria-hidden="true" className="text-accent">
                    &bull;
                  </span>
                  <span>{t(association.name)}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="h-full">
            <h2 className="text-xl font-bold text-navy">
              {t(content.credentialsLabel)}
            </h2>
            <ul className="mt-4 grid gap-3">
              {credentials.map((credential) => (
                <li
                  key={credential.en}
                  className="flex gap-3 text-base leading-7 text-text"
                >
                  <span aria-hidden="true" className="text-accent">
                    &bull;
                  </span>
                  <span>{t(credential)}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </Section>

      <Section id="author" className="bg-surface">
        <Container>
          <Card className="grid gap-8 lg:grid-cols-[240px_1fr] lg:items-center">
            <SiteImage
              name="book-cover"
              alt={t(imageCopy.bookCover.alt)}
              width={240}
              height={381}
              className="mx-auto w-full max-w-[15rem]"
              imageClassName="rounded-lg shadow-xl"
            />
            <div>
              <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">
                {t(book.title)}
              </h2>
              <p className="mt-4 text-base leading-7 text-text">
                {t(book.format)} &middot; {t(book.edition)} &middot;{" "}
                {t(book.date)} &middot; {t(book.price)}
              </p>
              <Button
                href="/book"
                variant="outline"
                size="lg"
                className="mt-6"
              >
                {t(book.title)}
              </Button>
            </div>
          </Card>
        </Container>
      </Section>

      <Section id="in-the-field" className="bg-white">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <SiteImage
              name="arora-speaking"
              alt={t(imageCopy.speaking.alt)}
              width={326}
              height={280}
              className="mx-auto w-full max-w-[326px]"
              imageClassName="rounded-2xl shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">
                {t(content.fieldTitle)}
              </h2>
              <p className="mt-4 text-base leading-7 text-text">
                {t(imageCopy.speaking.caption)}
              </p>
            </div>
          </div>
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
