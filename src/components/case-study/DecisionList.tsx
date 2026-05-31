import { EditorialText } from "@/components/case-study/EditorialText";
import { FadeIn } from "@/components/ui/FadeIn";
import type { CaseStudyGlossaryItem } from "@/types";

interface Decision {
  title: string;
  description: string;
}

interface DecisionListProps {
  decisions: Decision[];
  glossary?: CaseStudyGlossaryItem[];
  inlineGlossary?: boolean;
}

export function DecisionList({ decisions, glossary, inlineGlossary }: DecisionListProps) {
  return (
    <ul className="space-y-8 my-6">
      {decisions.map((decision, i) => (
        <FadeIn key={decision.title} delay={i * 0.05} as="li">
          <h3 className="font-display text-lg font-medium text-[var(--text)]">
            {decision.title}
          </h3>
          <p className="mt-2 prose-editorial">
            <EditorialText
              text={decision.description}
              glossary={glossary}
              inlineGlossary={inlineGlossary}
            />
          </p>
        </FadeIn>
      ))}
    </ul>
  );
}
