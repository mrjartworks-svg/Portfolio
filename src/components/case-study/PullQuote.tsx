import { EditorialText } from "@/components/case-study/EditorialText";
import type { CaseStudyGlossaryItem } from "@/types";

interface PullQuoteProps {
  text: string;
  glossary?: CaseStudyGlossaryItem[];
  inlineGlossary?: boolean;
}

export function PullQuote({ text, glossary, inlineGlossary }: PullQuoteProps) {
  return (
    <blockquote className="case-study-pull-quote" aria-label="Pull quote">
      <p>
        &ldquo;
        {glossary && inlineGlossary ? (
          <EditorialText text={text} glossary={glossary} inlineGlossary />
        ) : (
          text
        )}
        &rdquo;
      </p>
    </blockquote>
  );
}
