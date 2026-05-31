import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section className="pt-32 min-h-[60vh] flex items-center">
      <Container size="narrow" className="text-center">
        <p className="text-xs uppercase tracking-wider text-[var(--accent)]">404</p>
        <h1 className="mt-4 font-display text-display-md text-[var(--text)]">
          Page not found
        </h1>
        <p className="mt-4 text-[var(--text-secondary)]">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="mt-8">
          <Button href="/">Return home</Button>
        </div>
      </Container>
    </Section>
  );
}
