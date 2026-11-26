"use client";

import { notFoundPage } from "@/content/site";
import { useLanguage } from "@/lib/language";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <main id="not-found-top">
      <Section
        id="hero"
        className="bg-white pb-16 pt-10 sm:pb-24 sm:pt-16"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1
              id="hero-heading"
              className="text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl"
            >
              {t(notFoundPage.title)}
            </h1>
            <p className="mt-4 text-base leading-7 text-text">
              {t(notFoundPage.body)}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/" variant="primary" size="lg">
                {t(notFoundPage.homeLabel)}
              </Button>
              <Button href="/project-finance" variant="outline" size="lg">
                {t(notFoundPage.projectFinanceLabel)}
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                {t(notFoundPage.contactLabel)}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
