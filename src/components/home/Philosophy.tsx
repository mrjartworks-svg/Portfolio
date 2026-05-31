import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

export function Philosophy() {
  return (
    <Section size="sm" className="bg-[var(--bg-secondary)]">
      <Container size="narrow">
        <FadeIn>
          <blockquote className="font-display text-display-md text-balance text-[var(--text)] leading-snug">
            I&apos;m interested in systems that operate under complexity: enterprise
            workflows, AI-assisted interactions, operational tooling, and interfaces
            where clarity directly impacts decision-making.
          </blockquote>
        </FadeIn>
      </Container>
    </Section>
  );
}
