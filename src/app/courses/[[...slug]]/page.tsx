import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseDetailPage } from "@/components/courses/course-detail-page";
import { CoursesPage } from "@/components/courses/courses-page";
import { getCoursesForDisplay } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

type CourseRouteParams = {
  slug?: string[];
};

export function generateStaticParams() {
  return [
    { slug: [] },
    ...getCoursesForDisplay().map((course) => ({ slug: [course.slug] })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<CourseRouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return createPageMetadata("courses");
  }

  const course = getCoursesForDisplay().find((item) => item.slug === slug[0]);

  if (!course || slug.length !== 1) {
    return createPageMetadata("notFound");
  }

  return createPageMetadata("courses", {
    title: course.title.en,
    description: course.subtitle.en,
    path: `/courses/${course.slug}/`,
  });
}

export default async function CoursesRoute({
  params,
}: {
  params: Promise<CourseRouteParams>;
}) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return <CoursesPage />;
  }

  if (slug.length !== 1) notFound();

  const course = getCoursesForDisplay().find((item) => item.slug === slug[0]);

  if (!course) notFound();

  return <CourseDetailPage course={course} />;
}
