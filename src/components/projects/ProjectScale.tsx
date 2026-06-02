"use client";

import { cn } from "@/lib/utils";
import { useId, useState } from "react";

interface ProjectScaleProps {
  level: 1 | 2 | 3;
  className?: string;
}

const SCALE_LABELS: Record<1 | 2 | 3, string> = {
  1: "Fragment",
  2: "Structure",
  3: "Monolith",
};

const SCALE_TOOLTIPS: Record<1 | 2 | 3, string> = {
  1: "Single feature or surface. Lowest coordination.",
  2: "Several workflows, one shared system. Moderate coordination.",
  3: "Full operational lifecycle. Highest coordination.",
};

function StrataMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 5"
      width="12"
      height="5"
      className={cn("h-[5px] w-3 shrink-0", className)}
      aria-hidden
    >
      <path
        d="M1 4V1.25"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M1 4H11"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ProjectScale({ level, className }: ProjectScaleProps) {
  const label = SCALE_LABELS[level];
  const tooltip = SCALE_TOOLTIPS[level];
  const [open, setOpen] = useState(false);
  const tooltipId = useId();

  return (
    <p
      className={cn(
        "text-meta flex items-center gap-2.5 text-sm tracking-[0.01em]",
        className
      )}
    >
      <span
        className="relative inline-flex"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        <button
          type="button"
          className="cursor-help text-left transition-colors hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          aria-describedby={open ? tooltipId : undefined}
          onClick={() => setOpen((prev) => !prev)}
        >
          {label}
        </button>
        <span
          id={tooltipId}
          role="tooltip"
          aria-hidden={!open}
          className={cn(
            "glossary-term-tooltip",
            open && "glossary-term-tooltip--visible"
          )}
        >
          <span className="glossary-term-tooltip-label">Effort</span>
          {tooltip}
        </span>
      </span>
      <span
        className="inline-flex items-center gap-[6px] text-meta opacity-[0.62]"
        aria-hidden
      >
        {Array.from({ length: level }, (_, i) => (
          <StrataMark key={i} />
        ))}
      </span>
    </p>
  );
}
