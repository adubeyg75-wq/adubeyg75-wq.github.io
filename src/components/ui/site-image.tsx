import Image from "next/image";

export type SiteImageName =
  | "arora-portrait"
  | "book-cover"
  | "arora-teaching"
  | "arora-speaking";

export type SiteImageProps = {
  name: SiteImageName;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  eager?: boolean;
};

export function SiteImage({
  name,
  alt,
  width,
  height,
  className = "",
  imageClassName = "",
  eager = false,
}: SiteImageProps) {
  return (
    <picture className={`block ${className}`.trim()}>
      <source srcSet={`/images/${name}.webp`} type="image/webp" />
      <Image
        src={`/images/${name}.jpg`}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        className={`block h-auto w-full ${imageClassName}`.trim()}
        style={{ maxWidth: width }}
      />
    </picture>
  );
}
