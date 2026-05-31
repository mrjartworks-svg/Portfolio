import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";
import type { CaseStudyHighlight } from "@/types";

interface HighlightBlockProps {
  highlight: CaseStudyHighlight;
}

export function HighlightBlock({ highlight }: HighlightBlockProps) {
  return (
    <CaseStudySection id={highlight.id} title={highlight.title}>
      {highlight.intro && (
        <p className="prose-editorial text-[var(--text)]">{highlight.intro}</p>
      )}
      <p className={`prose-editorial ${highlight.intro ? "mt-6" : ""}`}>
        {highlight.body}
      </p>
      {highlight.bullets && highlight.bullets.length > 0 && (
        <ul className="mt-6 space-y-2">
          {highlight.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-3 text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]"
            >
              <span className="text-meta shrink-0 tabular-nums">·</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      {highlight.visualLabel && (
        <VisualPlaceholder
          aspectRatio="wide"
          label={highlight.visualLabel}
          className="mt-8 w-full"
        />
      )}
    </CaseStudySection>
  );
}
