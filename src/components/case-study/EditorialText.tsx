import type { CaseStudyGlossaryItem } from "@/types";
import type { ReactNode } from "react";
import { GlossaryTerm } from "@/components/case-study/GlossaryTerm";

interface EditorialTextProps {
  text: string;
  glossary?: CaseStudyGlossaryItem[];
  inlineGlossary?: boolean;
  className?: string;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function annotateWithGlossary(text: string, glossary: CaseStudyGlossaryItem[]): ReactNode[] {
  const terms = [...glossary].sort((a, b) => b.term.length - a.term.length);
  const pattern = terms.map(({ term }) => escapeRegExp(term)).join("|");
  if (!pattern) return [text];

  const regex = new RegExp(`(?<![A-Za-z0-9])(${pattern})(?![A-Za-z0-9])`, "gi");
  const lookup = new Map(
    glossary.map(({ term, definition, wideTooltip }) => [
      term.toLowerCase(),
      { term, definition, wideTooltip },
    ])
  );

  const parts = text.split(regex);
  return parts.map((part, index) => {
    const match = lookup.get(part.toLowerCase());
    if (!match) return part;

    return (
      <GlossaryTerm
        key={`${match.term}-${index}`}
        term={match.term}
        definition={match.definition}
        wide={match.wideTooltip}
      >
        {part}
      </GlossaryTerm>
    );
  });
}

export function EditorialText({
  text,
  glossary = [],
  inlineGlossary = false,
  className,
}: EditorialTextProps) {
  if (!inlineGlossary || glossary.length === 0) {
    return <span className={className}>{text}</span>;
  }

  return <span className={className}>{annotateWithGlossary(text, glossary)}</span>;
}
