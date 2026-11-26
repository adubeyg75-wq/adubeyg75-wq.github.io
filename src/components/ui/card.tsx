import type { HTMLAttributes, ReactNode } from "react";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className = "", ...rest }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-navy/10 bg-white p-6 shadow-sm transition-[translate,box-shadow,background-color,color] duration-[var(--duration-fast)] ease-[var(--ease-out)] motion-reduce:transition-none motion-reduce:translate-none motion-reduce:hover:translate-none motion-reduce:active:translate-none hover:-translate-y-1 hover:shadow-lg ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  );
}
