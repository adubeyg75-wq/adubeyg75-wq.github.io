import { courses, type Course } from "@/content/site";

export function isTodoValue(value: string): boolean {
  return value.trim().startsWith("[[TODO:");
}

export function resolveOptionalUrl(value: string): string | null {
  const trimmed = value.trim();

  if (trimmed === "" || isTodoValue(trimmed)) {
    return null;
  }

  return trimmed;
}

export function getPublishedCourses(): Course[] {
  return courses.filter(
    (course) =>
      course.published === true &&
      !isTodoValue(course.slug) &&
      !isTodoValue(course.title.en) &&
      !isTodoValue(course.price.en) &&
      !isTodoValue(course.paymentUrl),
  );
}

function courseTextValues(course: Course): string[] {
  const localized = [
    course.title,
    course.subtitle,
    course.whoFor,
    ...course.outcomes,
    ...course.modules,
    course.format,
    course.duration,
    course.language,
    course.price,
    course.certificate,
    course.nextBatch,
  ];

  return [
    course.slug,
    course.paymentUrl,
    ...localized.flatMap((text) => [text.en, text.hi]),
  ];
}

function hasOnlyTodoGaps(course: Course): boolean {
  const values = courseTextValues(course);

  return (
    values.some((value) => isTodoValue(value)) &&
    values.every((value) => value.trim() !== "")
  );
}

export function getCoursesForDisplay(): Course[] {
  const published = getPublishedCourses();

  if (process.env.NEXT_PUBLIC_PREVIEW_TODO_COURSES !== "true") {
    return published;
  }

  const publishedSlugs = new Set(published.map((course) => course.slug));
  const preview = courses.filter(
    (course) => !publishedSlugs.has(course.slug) && hasOnlyTodoGaps(course),
  );

  return [...published, ...preview];
}
