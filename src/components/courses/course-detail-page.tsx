"use client";

import {
  courseDetail,
  credentials,
  faqs,
  home,
  type Course,
} from "@/content/site";
import { resolveOptionalUrl } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { track } from "@/lib/track";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Disclaimer } from "@/components/ui/disclaimer";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

function fillTemplate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");
}

export function CourseDetailPage({ course }: { course: Course }) {
  const { t } = useLanguage();
  const content = courseDetail;
  const paymentUrl = resolveOptionalUrl(course.paymentUrl);
  const whatsappHref = buildWhatsAppUrl(
    fillTemplate(t(content.enquiryMessage), { course: t(course.title) }),
  );
  const relevantQuestions = new Set(
    content.relevantFaqQuestions.map((question) => question.en),
  );
  const relevantFaqs = faqs.filter((faq) => relevantQuestions.has(faq.question.en));

  function enrolAction(className = "") {
    if (paymentUrl) {
      return (
        <Button
          href={paymentUrl}
          variant="primary"
          size="lg"
          target="_blank"
          rel="noopener"
          className={className}
          onClick={() => track("course_enrol_click", { slug: course.slug })}
        >
          {t(content.enrol)}
        </Button>
      );
    }

    return (
      <Button
        href={whatsappHref}
        variant="primary"
        size="lg"
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {t(content.enquire)}
      </Button>
    );
  }

  function refundLink() {
    return (
      <Button href="/refund-policy" variant="link" className="mt-2 text-sm">
        {t(content.refundPolicyLink)}
      </Button>
    );
  }

  const facts = [
    { label: content.factLabels.format, value: course.format },
    { label: content.factLabels.duration, value: course.duration },
    { label: content.factLabels.language, value: course.language },
    { label: content.factLabels.certificate, value: course.certificate },
    { label: content.factLabels.nextBatch, value: course.nextBatch },
  ];

  return (
    <main id="course-detail-top" className="pb-28 lg:pb-0">
      <Section id="hero" className="bg-white pb-10 pt-8 sm:pb-14 sm:pt-12">
        <Container>
          <Button href="/courses" variant="link" className="text-sm">
            {t(content.backToCourses)}
          </Button>
          <h1
            id="hero-heading"
            className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl"
          >
            {t(course.title)}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-text">
            {t(course.subtitle)}
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-x-5 gap-y-5 border-y border-navy/10 py-6 sm:grid-cols-3 lg:grid-cols-5">
            {facts.map((fact) => (
              <div key={fact.label.en}>
                <dt className="text-sm font-semibold uppercase tracking-wide text-ink">
                  {t(fact.label)}
                </dt>
                <dd className="mt-1 text-base leading-6 text-navy">
                  {t(fact.value)}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section id="course-body" className="bg-white pt-0">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-12">
            <div className="min-w-0 space-y-14">
              <div id="who-for">
                <Reveal>
                  <SectionHeading title={content.whoForTitle} />
                  <p className="mt-4 text-base leading-7 text-text">
                    {t(course.whoFor)}
                  </p>
                </Reveal>
              </div>

              <div id="outcomes">
                <Reveal>
                  <SectionHeading title={content.outcomesTitle} />
                  <ul className="mt-6 grid gap-3">
                    {course.outcomes.map((outcome, index) => (
                      <li
                        key={`${outcome.en}-${index}`}
                        className="flex gap-3 rounded-lg border border-navy/10 bg-surface p-4 text-base leading-7 text-text"
                      >
                        <span aria-hidden="true" className="text-accent">
                          &bull;
                        </span>
                        <span>{t(outcome)}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <div id="modules">
                <Reveal>
                  <SectionHeading title={content.modulesTitle} />
                  <div className="mt-6">
                    <Accordion
                      items={course.modules.map((module, index) => ({
                        id: `course-module-${index}`,
                        question: module,
                        answer: content.moduleDetails,
                      }))}
                    />
                  </div>
                </Reveal>
              </div>

              <div id="trainer">
                <Reveal>
                  <SectionHeading title={content.trainerTitle} />
                  <p className="mt-4 text-base leading-7 text-text">
                    {t(home.aboutBio)}
                  </p>
                  <ul className="mt-5 grid gap-3">
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
                </Reveal>
              </div>

              <div id="faq">
                <Reveal>
                  <SectionHeading
                    title={content.faqTitle}
                    subtitle={content.faqSubtitle}
                  />
                  <div className="mt-6">
                    <Accordion
                      items={relevantFaqs.map((faq) => ({
                        id: `course-faq-${faq.question.en
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")}`,
                        question: faq.question,
                        answer: faq.answer,
                      }))}
                    />
                  </div>
                </Reveal>
              </div>
            </div>

            <aside
              className="hidden lg:mr-16 lg:block"
              aria-label={t(content.enrol)}
            >
              <Card className="sticky top-24 border-accent p-6">
                <p className="text-base font-semibold text-navy">
                  {t(content.factLabels.price)}
                </p>
                <p className="mt-1 text-2xl font-bold text-navy">
                  {t(course.price)}
                </p>
                <div className="mt-5">{enrolAction("w-full")}</div>
                {refundLink()}
              </Card>
            </aside>
          </div>
        </Container>
      </Section>

      <Section id="disclaimer" className="bg-surface">
        <Container>
          <Disclaimer className="max-w-3xl" />
        </Container>
      </Section>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-navy/15 bg-white p-2 shadow-lg lg:hidden">
        <div className="flex items-center justify-between gap-3 pr-20">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink">
              {t(content.factLabels.price)}
            </p>
            <p className="truncate text-base font-bold text-navy">
              {t(course.price)}
            </p>
          </div>
          {enrolAction("w-auto whitespace-nowrap px-4")}
        </div>
        {refundLink()}
      </div>
    </main>
  );
}
