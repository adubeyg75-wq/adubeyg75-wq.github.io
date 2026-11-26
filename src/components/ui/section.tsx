import type { HTMLAttributes, ReactNode } from "react";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  id: string;
  children: ReactNode;
};

export function Section({ id, children, className = "", ...rest }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-20 ${className}`.trim()}
      {...rest}
    >
      {children}
    </section>
  );
}
