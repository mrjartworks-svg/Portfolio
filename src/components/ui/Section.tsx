import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  size?: "default" | "sm";
}

export function Section({ children, className, id, size = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        size === "default" ? "py-section" : "py-section-sm",
        className
      )}
    >
      {children}
    </section>
  );
}
