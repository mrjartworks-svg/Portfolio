import { ContactLinks } from "@/components/layout/ContactLinks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { resumeDownloads } from "@/data/resume";
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
            Designing enterprise systems, AI experiences, and operational tooling at
            Cisco.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={resumeDownloads.ats.href} external>
              {resumeDownloads.ats.label}
            </Button>
            <Button href={resumeDownloads.visual.href} external variant="secondary">
              {resumeDownloads.visual.label}
            </Button>
          </div>
          <div className="mt-12 border-t border-[var(--border)] pt-10">
            <Label>Contact info</Label>
            <ContactLinks className="mt-4" hideResume />
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
