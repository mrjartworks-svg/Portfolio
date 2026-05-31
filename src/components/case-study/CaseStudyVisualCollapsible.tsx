"use client";

import { CaseStudyImage } from "@/components/case-study/CaseStudyImage";
import { cn } from "@/lib/utils";
import type { CaseStudyVisual } from "@/types";
import { useId, useState } from "react";

interface CaseStudyVisualCollapsibleProps {
  visual: CaseStudyVisual;
  label?: string;
}

export function CaseStudyVisualCollapsible({
  visual,
  label = "Old design",
}: CaseStudyVisualCollapsibleProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div
      className={cn(
        "case-study-visual-collapsible case-study-glossary-collapsible mt-10",
        open && "case-study-glossary-collapsible--open"
      )}
    >
      <button
        type="button"
        className={cn(
          "case-study-glossary-toggle",
          open && "case-study-glossary-toggle--active"
        )}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? `Hide ${label.toLowerCase()}` : label}
      </button>

      <div
        id={panelId}
        className={cn("case-study-glossary-panel", open && "case-study-glossary-panel--open")}
        aria-hidden={!open}
      >
        <div className="case-study-glossary-panel-inner">
          <CaseStudyImage
            {...visual}
            layout={visual.layout ?? "full-bleed"}
            className="my-0"
          />
        </div>
      </div>
    </div>
  );
}
