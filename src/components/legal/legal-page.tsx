"use client";

import {
  business,
  privacyPolicy,
  refundPolicy,
  terms,
} from "@/content/site";
import { useLanguage } from "@/lib/language";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export type LegalPageProps = {
  kind: "privacy" | "terms" | "refund";
};

function fillTemplate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");
}

export function LegalPage({ kind }: LegalPageProps) {
  const { t } = useLanguage();
  const content =
    kind === "privacy" ? privacyPolicy : kind === "terms" ? terms : refundPolicy;

  return (
    <main id={`${kind}-top`}>
      <Section id="hero" className="bg-white pb-12 pt-8 sm:pb-16 sm:pt-12">
        <Container>
          <div className="max-w-3xl">
            <p className="text-base font-semibold text-accent">
              {t(content.reviewLine)}
            </p>
            <h1
              id="hero-heading"
              className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl"
            >
              {t(content.title)}
            </h1>
          </div>
        </Container>
      </Section>

      {kind === "privacy" ? (
        <Section id="policy" className="bg-surface">
          <Container className="grid gap-6">
            <Card>
              <p className="text-base leading-7 text-text">
                {t(privacyPolicy.intro)}
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-navy">
                {t(privacyPolicy.fieldsTitle)}
              </h2>
              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                <div>
                  <h3 className="text-lg font-bold text-navy">
                    {t(privacyPolicy.projectFinanceTitle)}
                  </h3>
                  <ul className="mt-3 grid gap-2">
                    {privacyPolicy.projectFinanceFields.map((field, index) => (
                      <li
                        key={`project-finance-${index}`}
                        className="flex gap-3 text-base leading-7 text-text"
                      >
                        <span aria-hidden="true" className="text-accent">
                          &bull;
                        </span>
                        <span>{t(field)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy">
                    {t(privacyPolicy.waitlistTitle)}
                  </h3>
                  <ul className="mt-3 grid gap-2">
                    {privacyPolicy.waitlistFields.map((field, index) => (
                      <li
                        key={`waitlist-${index}`}
                        className="flex gap-3 text-base leading-7 text-text"
                      >
                        <span aria-hidden="true" className="text-accent">
                          &bull;
                        </span>
                        <span>{t(field)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy">
                    {t(privacyPolicy.contactTitle)}
                  </h3>
                  <ul className="mt-3 grid gap-2">
                    {privacyPolicy.contactFields.map((field, index) => (
                      <li
                        key={`contact-${index}`}
                        className="flex gap-3 text-base leading-7 text-text"
                      >
                        <span aria-hidden="true" className="text-accent">
                          &bull;
                        </span>
                        <span>{t(field)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-6 rounded-lg border border-accent bg-surface p-4 text-base leading-7 text-text">
                {t(privacyPolicy.antiSpam)}
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-navy">
                {t(privacyPolicy.purposeTitle)}
              </h2>
              <p className="mt-3 text-base leading-7 text-text">
                {fillTemplate(t(privacyPolicy.purposeBody), {
                  hours: t(business.hours),
                })}
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-navy">
                {t(privacyPolicy.notSoldTitle)}
              </h2>
              <p className="mt-3 text-base leading-7 text-text">
                {t(privacyPolicy.notSoldBody)}
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-navy">
                {t(privacyPolicy.deletionTitle)}
              </h2>
              <p className="mt-3 text-base leading-7 text-text">
                {fillTemplate(t(privacyPolicy.deletionBody), {
                  email: business.email,
                })}
              </p>
            </Card>
          </Container>
        </Section>
      ) : null}

      {kind === "terms" ? (
        <Section id="terms" className="bg-surface">
          <Container className="grid gap-6">
            <Card>
              <p className="text-base leading-7 text-text">{t(terms.intro)}</p>
            </Card>
            <Card>
              <h2 className="text-2xl font-bold text-navy">
                {t(terms.guidanceTitle)}
              </h2>
              <p className="mt-3 text-base leading-7 text-text">
                {t(terms.guidanceBody)}
              </p>
            </Card>
            <Card>
              <h2 className="text-2xl font-bold text-navy">
                {t(terms.noGuaranteeTitle)}
              </h2>
              <p className="mt-3 text-base leading-7 text-text">
                {t(terms.noGuaranteeBody)}
              </p>
            </Card>
            <Card>
              <h2 className="text-2xl font-bold text-navy">
                {t(terms.courseAccessTitle)}
              </h2>
              <p className="mt-3 text-base leading-7 text-text">
                {t(terms.courseAccessTodo)}
              </p>
            </Card>
          </Container>
        </Section>
      ) : null}

      {kind === "refund" ? (
        <Section id="refund" className="bg-surface">
          <Container>
            <Card className="max-w-3xl">
              <p className="text-base leading-7 text-text">
                {t(refundPolicy.detailsTodo)}
              </p>
            </Card>
          </Container>
        </Section>
      ) : null}

      <Section id="back" className="bg-white">
        <Container>
          <Button href="/" variant="outline" size="lg">
            {t(content.backHome)}
          </Button>
        </Container>
      </Section>
    </main>
  );
}
