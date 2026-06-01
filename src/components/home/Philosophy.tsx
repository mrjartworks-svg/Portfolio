import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

export function Philosophy() {
  return (
    <Section size="sm" className="bg-[var(--bg-secondary)]">
      <Container size="narrow">
        <FadeIn>
          <blockquote className="font-display text-display-md text-balance text-[var(--text)] leading-snug">
            Work is only one part of the story. These are the interests, obsessions,
            and rabbit holes that continue to shape how I think, design, and make
            decisions.
          </blockquote>
        </FadeIn>
      </Container>
    </Section>
  );
}
