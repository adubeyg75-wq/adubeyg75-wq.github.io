import type { HTMLAttributes, ReactNode } from "react";

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Container({ children, className = "", ...rest }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  );
}
