"use client";

import { CaseStudyGlossary } from "@/components/case-study/CaseStudyGlossary";
import { cn } from "@/lib/utils";
import type { CaseStudyGlossaryItem } from "@/types";
import { useId, useState } from "react";

interface CaseStudyGlossaryCollapsibleProps {
  items: CaseStudyGlossaryItem[];
}

export function CaseStudyGlossaryCollapsible({ items }: CaseStudyGlossaryCollapsibleProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={cn("case-study-glossary-collapsible", open && "case-study-glossary-collapsible--open")}>
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
        {open ? "Hide terms" : "View terms"}
      </button>

      <div
        id={panelId}
        className={cn("case-study-glossary-panel", open && "case-study-glossary-panel--open")}
        aria-hidden={!open}
      >
        <div className="case-study-glossary-panel-inner">
          <CaseStudyGlossary items={items} />
        </div>
      </div>
    </div>
  );
}
