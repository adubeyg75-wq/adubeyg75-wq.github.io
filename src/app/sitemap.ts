import type { MetadataRoute } from "next";
import { seo } from "@/content/site";
import { getPublishedCourses } from "@/lib/content";
import { getRouteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    seo.paths.home,
    seo.paths.about,
    seo.paths.book,
    seo.paths.contact,
    seo.paths.courses,
    seo.paths.projectFinance,
    seo.paths.services,
    seo.paths.privacy,
    seo.paths.terms,
    seo.paths.refundPolicy,
  ];

  const coursePaths = getPublishedCourses().map(
    (course) => `/courses/${course.slug}/`,
  );

  return [...staticPaths, ...coursePaths].map((path) => ({
    url: getRouteUrl(path),
  }));
}
