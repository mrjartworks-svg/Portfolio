"use client";

import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
}

export function FadeIn({
  children,
  className,
  delay = 0,
  as = "div",
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  if (prefersReducedMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      initial={false}
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        ...fadeUp,
        visible: {
          ...fadeUp.visible,
          transition: {
            ...(fadeUp.visible as { transition: object }).transition,
            delay,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
