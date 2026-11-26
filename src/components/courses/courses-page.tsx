"use client";

import {
  book,
  coursesPage,
  home,
  imageCopy,
} from "@/content/site";
import { getCoursesForDisplay } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Disclaimer } from "@/components/ui/disclaimer";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { CourseWaitlistForm } from "./course-waitlist-form";

export function CoursesPage() {
  const { t } = useLanguage();
  const content = coursesPage;
  const displayCourses = getCoursesForDisplay();

  return (
    <main id="courses-top">
      <Section id="hero" className="bg-white pb-12 pt-8 sm:pb-16 sm:pt-12">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_320px] lg:gap-12">
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
            <SiteImage
              name="arora-teaching"
              alt={t(imageCopy.teaching.alt)}
              width={320}
              height={239}
              className="mx-auto w-full max-w-[20rem]"
              imageClassName="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </Container>
      </Section>

      <Section id="course-list" className="bg-surface">
        <Container>
          <Reveal>
            <SectionHeading title={content.coursesTitle} />
          </Reveal>
          {displayCourses.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {displayCourses.map((course, index) => (
                <Reveal key={course.slug} delay={index * 90}>
                  <Card className="flex h-full flex-col">
                    <p className="text-xl font-bold leading-snug text-navy">
                      {t(course.title)}
                    </p>
                    <p className="mt-2 text-base leading-7 text-text">
                      {t(course.subtitle)}
                    </p>
                    <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-navy/10 pt-5 text-base">
                      <div>
                        <dt className="font-semibold text-navy">
                          {t(content.factLabels.format)}
                        </dt>
                        <dd className="text-text">{t(course.format)}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-navy">
                          {t(content.factLabels.duration)}
                        </dt>
                        <dd className="text-text">{t(course.duration)}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-navy">
                          {t(content.factLabels.language)}
                        </dt>
                        <dd className="text-text">{t(course.language)}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-navy">
                          {t(content.factLabels.price)}
                        </dt>
                        <dd className="text-text">{t(course.price)}</dd>
                      </div>
                    </dl>
                    <div className="mt-6">
                      <Button
                        href={`/courses/${course.slug}`}
                        variant="outline"
                        size="lg"
                      >
                        {t(content.viewCourse)}
                      </Button>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="mt-8">
                <CourseWaitlistForm />
              </div>
            </Reveal>
          )}
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

      <Section id="disclaimer" className="bg-surface">
        <Container>
          <Disclaimer className="max-w-3xl" />
        </Container>
      </Section>
    </main>
  );
}
