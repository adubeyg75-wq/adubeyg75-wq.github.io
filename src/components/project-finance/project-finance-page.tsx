"use client";

import {
  associations,
  book,
  credentials,
  faqs,
  home,
  projectFinance,
  schemes,
} from "@/content/site";
import { useLanguage } from "@/lib/language";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Disclaimer } from "@/components/ui/disclaimer";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { QualifyingEnquiryForm } from "./qualifying-enquiry-form";

export function ProjectFinancePage() {
  const { t } = useLanguage();
  const content = projectFinance;
  const relevantQuestions = new Set(
    content.relevantFaqQuestions.map((question) => question.en),
  );
  const relevantFaqs = faqs.filter((faq) => relevantQuestions.has(faq.question.en));

  return (
    <main id="project-finance-top">
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
              {t(content.heroSubline)}
            </p>
            <div className="mt-6">
              <Button href="#enquiry" variant="primary" size="lg">
                {t(content.heroPrimaryCta)}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="problem-solution" className="bg-surface">
        <Container>
          <Reveal>
            <SectionHeading title={content.problemTitle} />
          </Reveal>
          <Reveal delay={90}>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <Card className="h-full">
                <h3 className="text-lg font-bold text-navy">
                  {t(content.problemTitle)}
                </h3>
                <p className="mt-2 text-base leading-7 text-text">
                  {t(content.problemBody)}
                </p>
              </Card>
              <Card className="h-full">
                <h3 className="text-lg font-bold text-navy">
                  {t(content.solutionTitle)}
                </h3>
                <p className="mt-2 text-base leading-7 text-text">
                  {t(content.solutionBody)}
                </p>
              </Card>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section id="dpr" className="bg-white">
        <Container>
          <Reveal>
            <SectionHeading title={content.dprTitle} />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {content.dprItems.map((item) => (
                <li
                  key={item.en}
                  className="flex gap-3 rounded-lg border border-navy/10 bg-surface p-4 text-base leading-7 text-text"
                >
                  <span aria-hidden="true" className="text-accent">
                    &bull;
                  </span>
                  <span>{t(item)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section id="schemes" className="bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              title={content.schemesTitle}
              subtitle={content.schemesSubtitle}
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {schemes.map((scheme) => (
                <Card key={scheme.name.en} className="h-full">
                  <p className="text-lg font-bold text-navy">{t(scheme.name)}</p>
                  <p className="mt-2 text-base leading-7 text-text">
                    {t(scheme.line)}
                  </p>
                </Card>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section id="process" className="bg-white">
        <Container>
          <Reveal>
            <SectionHeading
              title={content.processTitle}
              subtitle={content.processSubtitle}
            />
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {home.howSteps.map((step, index) => (
              <Reveal key={step.title.en} delay={index * 90}>
                <Card className="h-full">
                  <Badge>{String(index + 1).padStart(2, "0")}</Badge>
                  <p className="mt-4 text-lg font-bold text-navy">
                    {t(step.title)}
                  </p>
                  <p className="mt-2 text-base leading-7 text-text">
                    {t(step.description)}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="documents" className="bg-surface">
        <Container>
          <Reveal>
            <SectionHeading title={content.documentsTitle} />
            <p className="mt-6 rounded-xl border border-navy/10 bg-white p-6 text-base leading-7 text-ink shadow-sm">
              {t(content.documentsTodo)}
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section id="why-arora" className="bg-white">
        <Container>
          <Reveal>
            <SectionHeading title={content.whyTitle} subtitle={home.aboutBio} />
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full">
                <h3 className="text-lg font-bold text-navy">
                  {t(content.whyAssociationsLabel)}
                </h3>
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
            </Reveal>
            <Reveal delay={90}>
              <Card className="h-full">
                <h3 className="text-lg font-bold text-navy">
                  {t(content.whyCredentialsLabel)}
                </h3>
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
                <p className="mt-4 text-base font-semibold text-navy">
                  {t(home.trustAuthorPrefix)} &ldquo;{t(book.title)}&rdquo;
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section id="faq" className="bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              title={content.faqTitle}
              subtitle={content.faqSubtitle}
            />
          </Reveal>
          <Reveal delay={90}>
            <div className="mt-8">
              <Accordion
                items={relevantFaqs.map((faq) => ({
                  id: `project-finance-faq-${faq.question.en
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")}`,
                  question: faq.question,
                  answer: faq.answer,
                }))}
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section id="enquiry" className="bg-white">
        <Container>
          <QualifyingEnquiryForm />
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
