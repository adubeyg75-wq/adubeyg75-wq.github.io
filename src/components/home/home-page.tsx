"use client";

import Link from "next/link";
import {
  book,
  business,
  credentials,
  faqs,
  home,
  imageCopy,
  messages,
  services,
  testimonials,
} from "@/content/site";
import { getPublishedCourses } from "@/lib/content";
import { getGoogleReviewHref } from "@/lib/google-review";
import { useLanguage } from "@/lib/language";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { GoogleRating } from "@/components/google-rating";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Disclaimer } from "@/components/ui/disclaimer";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";
import { SectionHeading } from "@/components/ui/section-heading";

const CONSULTATION_HREF = "/project-finance#enquiry";
const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white";

export function HomePage() {
  const { t } = useLanguage();
  const publishedCourses = getPublishedCourses().slice(0, 3);
  const reviewHref = getGoogleReviewHref();
  const whatsappHref = buildWhatsAppUrl(t(messages.whatsappProjectLoan));

  return (
    <main id="home-top">
      <Section id="hero" className="bg-white pb-12 pt-8 sm:pb-16 sm:pt-12">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-ink sm:text-base">
                {t(home.heroEyebrow)}
              </p>
              <h1
                id="hero-heading"
                className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl"
              >
                {t(home.heroTitle)}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-text">
                {t(home.heroSubline)}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={CONSULTATION_HREF} variant="primary" size="lg">
                  {t(home.heroPrimaryCta)}
                </Button>
                <Button href="/courses" variant="outline" size="lg">
                  {t(home.heroSecondaryCta)}
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <SiteImage
                name="arora-portrait"
                alt={t(imageCopy.portrait.alt)}
                width={288}
                height={244}
                className="w-full max-w-[18rem]"
                imageClassName="rounded-2xl object-cover shadow-lg"
                eager
              />
            </div>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-navy/10 pt-6 text-base text-ink">
            <li className="sm:border-r sm:border-navy/15 sm:pr-6">
              {t(business.established)}
            </li>
            <li className="sm:border-r sm:border-navy/15 sm:pr-6">
              {t(home.trustUdyam)}
            </li>
            <li className="sm:border-r sm:border-navy/15 sm:pr-6">
              <GoogleRating />
            </li>
            <li className="sm:last:pr-0">
              {t(home.trustAuthorPrefix)} &ldquo;{t(book.title)}&rdquo;
            </li>
          </ul>
        </Container>
      </Section>

      <Section id="who" className="bg-surface">
        <Container>
          <Reveal>
            <SectionHeading title={home.whoTitle} subtitle={home.whoSubtitle} />
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {home.whoCards.map((card, index) => (
              <Reveal key={card.title.en} delay={index * 90}>
                <Card className="h-full">
                  <p className="text-lg font-bold text-navy">{t(card.title)}</p>
                  <p className="mt-2 text-base leading-7 text-text">
                    {t(card.description)}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="how-it-works" className="bg-white">
        <Container>
          <Reveal>
            <SectionHeading title={home.howTitle} subtitle={home.howSubtitle} />
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {home.howSteps.map((step, index) => (
              <Reveal key={step.title.en} delay={index * 90}>
                <Card className="h-full">
                  <Badge>{String(index + 1).padStart(2, "0")}</Badge>
                  <p className="mt-4 text-lg font-bold text-navy">{t(step.title)}</p>
                  <p className="mt-2 text-base leading-7 text-text">
                    {t(step.description)}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="services" className="bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              title={home.servicesTitle}
              subtitle={home.servicesSubtitle}
            />
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 90}>
                <Link
                  href={`/services#${service.slug}`}
                  className={`block h-full rounded-xl ${FOCUS_RING}`}
                >
                  <Card className="h-full">
                    <p className="text-lg font-bold text-navy">
                      {t(service.title)}
                    </p>
                    <p className="mt-2 text-base leading-7 text-text">
                      {t(service.shortDescription)}
                    </p>
                    <p className="mt-4 text-base font-semibold text-accent">
                      {t(home.serviceLinkLabel)}
                    </p>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="courses" className="bg-white">
        <Container>
          <Reveal>
            <SectionHeading
              title={home.coursesTitle}
              subtitle={home.coursesSubtitle}
            />
          </Reveal>
          {publishedCourses.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {publishedCourses.map((course, index) => (
                <Reveal key={course.slug} delay={index * 90}>
                  <Link
                    href="/courses"
                    className={`block h-full rounded-xl ${FOCUS_RING}`}
                  >
                    <Card className="h-full">
                      <p className="text-lg font-bold text-navy">
                        {t(course.title)}
                      </p>
                      <p className="mt-2 text-base leading-7 text-text">
                        {t(course.subtitle)}
                      </p>
                      <p className="mt-4 text-base font-semibold text-accent">
                        {t(home.courseLinkLabel)}
                      </p>
                    </Card>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <p className="mt-8 text-base leading-7 text-text">
                {t(home.coursesEmpty)}{" "}
                <Button href="/courses" variant="link">
                  {t(home.coursesPageLabel)}
                </Button>
              </p>
            </Reveal>
          )}
        </Container>
      </Section>

      <Section id="about" className="bg-surface">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <SectionHeading title={home.aboutTitle} />
              <p className="mt-4 text-base leading-7 text-text">{t(home.aboutBio)}</p>
              <Button href="/about" variant="outline" className="mt-6">
                {t(home.aboutLink)}
              </Button>
            </Reveal>
            <Reveal delay={90}>
              <div className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-navy">
                  {t(home.aboutCredentialsLabel)}
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
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section id="book" className="bg-white">
        <Container>
          <Reveal>
            <div className="grid items-center gap-8 rounded-2xl border border-navy/10 bg-surface p-6 shadow-md sm:p-8 lg:grid-cols-[240px_1fr]">
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
                  {t(home.bookLine)}
                </p>
                <Button
                  href={book.amazonUrl}
                  variant="primary"
                  target="_blank"
                  rel="noopener"
                  className="mt-6"
                >
                  {t(home.bookBuyLabel)}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section id="reviews" className="bg-surface">
        <Container>
          <Reveal>
            <SectionHeading title={home.reviewsTitle} />
            <p className="mt-4 text-base leading-7 text-text">
              <span className="font-semibold text-navy">
                {t(home.reviewsRatingLabel)}:{" "}
              </span>
              {reviewHref ? (
                <a
                  href={reviewHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-semibold text-accent underline underline-offset-4 ${FOCUS_RING}`}
                >
                  {t(business.googleRatingLabel)}
                </a>
              ) : (
                <span>{t(business.googleRatingLabel)}</span>
              )}
            </p>
          </Reveal>
          {testimonials.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Reveal key={testimonial.name.en} delay={index * 90}>
                  <Card className="h-full">
                    <p className="text-base leading-7 text-text">
                      &ldquo;{t(testimonial.quote)}&rdquo;
                    </p>
                    <p className="mt-4 font-bold text-navy">
                      {t(testimonial.name)}
                    </p>
                    <p className="text-base text-ink">{t(testimonial.role)}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          ) : null}
        </Container>
      </Section>

      <Section id="faq" className="bg-white">
        <Container>
          <Reveal>
            <SectionHeading title={home.faqTitle} subtitle={home.faqSubtitle} />
          </Reveal>
          <Reveal delay={90}>
            <div className="mt-8">
              <Accordion
                items={faqs.map((faq) => ({
                  id: `home-faq-${faq.question.en.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                  question: faq.question,
                  answer: faq.answer,
                }))}
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section id="final-cta" className="bg-navy">
        <Container>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-light sm:text-base">
              {t(home.finalEyebrow)}
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              {t(home.finalTitle)}
            </h2>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                href={CONSULTATION_HREF}
                variant="primary"
                size="lg"
                tone="onDark"
              >
                {t(home.finalConsultationCta)}
              </Button>
              <Button
                href={whatsappHref}
                variant="outline"
                size="lg"
                tone="onDark"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(home.finalWhatsappCta)}
              </Button>
            </div>
            <Disclaimer tone="onDark" className="mt-8 max-w-3xl" />
          </Reveal>
        </Container>
      </Section>
    </main>
  );
}
