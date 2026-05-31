import { EditorialText } from "@/components/case-study/EditorialText";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";
import type { CaseStudyGlossaryItem } from "@/types";
import type { ReactNode } from "react";

interface CaseStudySectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  framing?: string;
  framingGlossary?: CaseStudyGlossaryItem[];
  framingInlineGlossary?: boolean;
}

export function CaseStudySection({
  id,
  title,
  children,
  className,
  bordered = true,
  framing,
  framingGlossary,
  framingInlineGlossary,
}: CaseStudySectionProps) {
  return (
    <FadeIn
      as="section"
      className={cn(
        bordered && "case-study-section",
        !bordered && "scroll-mt-28",
        className
      )}
    >
      <div id={id}>
        <h2 className="mb-8 font-display text-[1.625rem] font-medium tracking-tight text-[var(--text)]">
          {title}
        </h2>
        {framing && (
          <p className="case-study-framing">
            {framingGlossary && framingInlineGlossary ? (
              <EditorialText
                text={framing}
                glossary={framingGlossary}
                inlineGlossary={framingInlineGlossary}
              />
            ) : (
              framing
            )}
          </p>
        )}
        {children}
      </div>
    </FadeIn>
  );
}
