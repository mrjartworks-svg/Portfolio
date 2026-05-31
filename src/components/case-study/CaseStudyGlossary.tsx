import type { CaseStudyGlossaryItem } from "@/types";

interface CaseStudyGlossaryProps {
  items: CaseStudyGlossaryItem[];
}

export function CaseStudyGlossary({ items }: CaseStudyGlossaryProps) {
  return (
    <dl className="case-study-glossary">
      {items.map(({ term, definition }) => (
        <div key={term} className="case-study-glossary-item">
          <dt className="case-study-glossary-term">{term}</dt>
          <dd className="case-study-glossary-def">{definition}</dd>
        </div>
      ))}
    </dl>
  );
}
