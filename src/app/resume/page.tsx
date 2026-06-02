import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume · Mradul Jain, Senior Product Designer.",
};

export default function ResumePage() {
  return (
    <Section className="pt-28 pb-section">
      <Container size="narrow">
        <FadeIn>
          <Label>Resume</Label>
          <h1 className="mt-4 font-display text-display-md text-[var(--text)]">
            Mradul Jain
          </h1>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
            Senior Product Designer specializing in enterprise systems, AI-assisted
            workflows, and technically complex product experiences. Currently at
            Cisco.
          </p>
          <div className="mt-8">
            <Button href="/resume/mradul-jain-resume.pdf" external>
              Download PDF
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
