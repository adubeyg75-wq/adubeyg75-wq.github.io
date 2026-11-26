import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "outline" | "link";
type Size = "md" | "lg";
type Tone = "onLight" | "onDark";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  tone?: Tone;
  className?: string;
  children: ReactNode;
};

export type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonLinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

const baseClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg text-base font-semibold shadow-sm transition-[translate,box-shadow,background-color,color] duration-[var(--duration-fast)] ease-[var(--ease-out)] motion-reduce:transition-none motion-reduce:translate-none motion-reduce:hover:translate-none motion-reduce:active:translate-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 hover:-translate-y-px hover:shadow-md active:translate-y-0 active:shadow-sm disabled:cursor-not-allowed disabled:opacity-60";

const variantClasses: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  secondary: "bg-navy text-white hover:bg-ink",
  outline: "border border-navy bg-white text-navy hover:bg-surface",
  link: "px-0 text-accent underline underline-offset-4 hover:text-accent-hover shadow-none hover:shadow-none active:shadow-none",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2",
  lg: "min-h-12 px-6 py-3 text-lg",
};

const toneClasses: Record<Tone, string> = {
  onLight: "focus-visible:ring-accent focus-visible:ring-offset-white",
  onDark: "focus-visible:ring-accent-light focus-visible:ring-offset-navy",
};

function classesFor(
  variant: Variant,
  size: Size,
  tone: Tone,
  className: string,
): string {
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${toneClasses[tone]} ${className}`
    .trim();
}

export function Button(props: ButtonProps | ButtonLinkProps) {
  if (props.href !== undefined) {
    const {
      href,
      variant = "primary",
      size = "md",
      tone = "onLight",
      className = "",
      children,
      ...rest
    } = props;
    const classNameValue = classesFor(variant, size, tone, className);

    if (href.startsWith("#") || /^(?:https?:|mailto:|tel:)/.test(href)) {
      return (
        <a href={href} className={classNameValue} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classNameValue} {...rest}>
        {children}
      </Link>
    );
  }

  const {
    variant = "primary",
    size = "md",
    tone = "onLight",
    className = "",
    children,
    ...rest
  } = props;

  return (
    <button className={classesFor(variant, size, tone, className)} {...rest}>
      {children}
    </button>
  );
}
