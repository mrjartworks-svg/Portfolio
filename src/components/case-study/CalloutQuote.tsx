import { FadeIn } from "@/components/ui/FadeIn";

interface CalloutQuoteProps {
  text: string;
  attribution: string;
}

export function CalloutQuote({ text, attribution }: CalloutQuoteProps) {
  return (
    <FadeIn>
      <blockquote className="border-l-2 border-[var(--accent)] pl-6 my-10">
        <p className="font-display text-xl leading-relaxed text-[var(--text)] italic">
          &ldquo;{text}&rdquo;
        </p>
        <footer className="mt-4 text-sm text-[var(--text-secondary)]">
          {attribution}
        </footer>
      </blockquote>
    </FadeIn>
  );
}
