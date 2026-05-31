"use client";

import type { CaseStudySection } from "@/types";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface CaseStudyNavProps {
  sections: CaseStudySection[];
}

export function CaseStudyNav({ sections }: CaseStudyNavProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return (
    <nav className="w-full" aria-label="Case study sections">
      <p className="mb-4 text-xs uppercase tracking-wider text-meta">
        Contents
      </p>
      <ul className="space-y-1.5">
        {sections.map(({ id, title }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                "block py-0.5 text-[0.8125rem] leading-snug transition-colors duration-200",
                activeId === id
                  ? "text-[var(--text)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text)]"
              )}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
