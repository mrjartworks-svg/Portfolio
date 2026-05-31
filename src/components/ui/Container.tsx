import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main";
  size?: "default" | "narrow" | "wide";
}

const sizeClasses = {
  default: "max-w-6xl",
  narrow: "max-w-3xl",
  wide: "max-w-7xl",
};

export function Container({
  children,
  className,
  as: Component = "div",
  size = "default",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  );
}
