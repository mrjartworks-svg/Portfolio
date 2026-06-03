"use client";

import { cn } from "@/lib/utils";
import { useId, useState } from "react";

interface CaseStudyExpandableSectionProps {
  label: string;
  dismissLabel: string;
  items: string[];
}

export function CaseStudyExpandableSection({
  label,
  dismissLabel,
  items,
}: CaseStudyExpandableSectionProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={cn("case-study-tldr-wrap", open && "case-study-tldr-wrap--open")}>
      <div className={cn("case-study-tldr", open && "case-study-tldr--open")}>
        <button
          type="button"
          className={open ? "case-study-tldr-dismiss" : "case-study-tldr-toggle"}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? dismissLabel : label}
        </button>

        <div
          id={panelId}
          className={cn("case-study-tldr-panel", open && "case-study-tldr-panel--open")}
          aria-hidden={!open}
        >
          <div className="case-study-tldr-panel-inner">
            <ul className="case-study-tldr-list">
              {items.map((item) => (
                <li key={item.slice(0, 48)} className="case-study-tldr-item">
                  <span className="case-study-tldr-bullet" aria-hidden>
                    ·
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
