"use client";

import { CaseStudyExpandableSection } from "@/components/case-study/CaseStudyExpandableSection";

interface CaseStudySummaryPanelsProps {
  impact?: string[];
  tldr?: string[];
}

export function CaseStudySummaryPanels({ impact, tldr }: CaseStudySummaryPanelsProps) {
  const hasImpact = impact != null && impact.length > 0;
  const hasTldr = tldr != null && tldr.length > 0;

  if (!hasImpact && !hasTldr) return null;

  return (
    <div
      className={
        hasImpact && hasTldr
          ? "case-study-summary-grid"
          : "case-study-summary-grid case-study-summary-grid--single"
      }
    >
      {hasImpact && (
        <CaseStudyExpandableSection
          label="Impact"
          dismissLabel="Hide impact"
          items={impact}
        />
      )}
      {hasTldr && (
        <CaseStudyExpandableSection
          label="TL;DR"
          dismissLabel="Hide overview"
          items={tldr}
        />
      )}
    </div>
  );
}
