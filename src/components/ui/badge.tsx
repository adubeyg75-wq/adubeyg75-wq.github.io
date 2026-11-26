import type { HTMLAttributes, ReactNode } from "react";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Badge({ children, className = "", ...rest }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-navy/10 bg-surface px-3 py-1 text-base font-medium text-ink ${className}`.trim()}
      {...rest}
    >
      {children}
    </span>
  );
}
