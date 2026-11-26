import type { Metadata } from "next";
import { seo, type SeoRouteContent } from "@/content/site";

export type SeoRouteKey = keyof typeof seo.routes;

type MetadataOverride = Partial<SeoRouteContent> & {
  path?: string;
};

function normalizedSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  return (configured || seo.fallbackSiteUrl).replace(/\/+$/, "");
}

export function getSiteUrl(): string {
  return normalizedSiteUrl();
}

export function getAbsoluteUrl(path: string): string {
  return new URL(
    path.replace(/^\/+/, ""),
    `${normalizedSiteUrl()}/`,
  ).toString();
}

export function getRouteUrl(path: string): string {
  const normalizedPath =
    path === "/" ? "" : path.replace(/^\/+/, "").replace(/\/+$/, "");

  return getAbsoluteUrl(`${normalizedPath}/`);
}

export function createPageMetadata(
  route: SeoRouteKey,
  override: MetadataOverride = {},
): Metadata {
  const routeContent = seo.routes[route];
  const title = override.title ?? routeContent.title;
  const description = override.description ?? routeContent.description;
  const canonical = getRouteUrl(override.path ?? seo.paths[route]);
  const imageUrl = getAbsoluteUrl(seo.ogImage.url);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: seo.ogType,
      siteName: seo.siteName,
      title,
      description,
      url: canonical,
      images: [
        {
          url: imageUrl,
          width: seo.ogImage.width,
          height: seo.ogImage.height,
          alt: seo.ogImage.alt,
          type: seo.ogImage.type,
        },
      ],
    },
    twitter: {
      card: seo.twitterCard,
      title,
      description,
      images: [imageUrl],
    },
  };
}
