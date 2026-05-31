import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "hero-primary" | "hero-secondary" | "hero-tertiary";
  className?: string;
  external?: boolean;
}

const variants = {
  primary:
    "border border-transparent bg-[var(--text)] text-[var(--bg)] hover:opacity-[0.86]",
  secondary:
    "border border-[var(--border)] bg-transparent text-[var(--text)] hover:border-[var(--text-secondary)]/25 hover:bg-[var(--bg-secondary)]/50",
  ghost:
    "border border-transparent bg-transparent text-[var(--text-secondary)] hover:text-[var(--text)]",
  "hero-primary": "btn-hero btn-hero-primary",
  "hero-secondary": "btn-hero btn-hero-secondary",
  "hero-tertiary": "btn-hero btn-hero-tertiary",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const isHero =
    variant === "hero-primary" ||
    variant === "hero-secondary" ||
    variant === "hero-tertiary";

  const classes = cn(
    isHero
      ? variants[variant]
      : cn(
          "inline-flex items-center justify-center rounded-md px-4 py-2 text-[0.8125rem] font-medium tracking-[0.01em] transition-[opacity,background-color,border-color,color] duration-300 min-h-[40px]",
          variants[variant]
        ),
    className
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
