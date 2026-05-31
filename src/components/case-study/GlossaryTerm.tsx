"use client";

import { cn } from "@/lib/utils";
import { useId, useState } from "react";

interface GlossaryTermProps {
  term: string;
  definition: string;
  children: React.ReactNode;
  wide?: boolean;
}

export function GlossaryTerm({ term, definition, children, wide }: GlossaryTermProps) {
  const [open, setOpen] = useState(false);
  const tooltipId = useId();

  return (
    <span
      className="group relative inline"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <button
        type="button"
        className="glossary-term-trigger"
        aria-describedby={open ? tooltipId : undefined}
        onClick={() => setOpen((prev) => !prev)}
      >
        {children}
      </button>
      <span
        id={tooltipId}
        role="tooltip"
        aria-hidden={!open}
        className={cn(
          "glossary-term-tooltip",
          wide && "glossary-term-tooltip--wide",
          open && "glossary-term-tooltip--visible"
        )}
      >
        <span className="glossary-term-tooltip-label">{term}</span>
        {definition}
      </span>
    </span>
  );
}
