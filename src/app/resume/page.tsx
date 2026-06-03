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
            Senior Product Designer specializing in enterprise systems, AI-assisted
            workflows, and technically complex product experiences. Currently at
            Cisco.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start">
            <div>
              <Button href={resumeDownloads.ats.href} external>
                {resumeDownloads.ats.label}
              </Button>
              <p className="mt-2 max-w-xs text-xs text-[var(--text-secondary)]">
                {resumeDownloads.ats.description}
              </p>
            </div>
            <div>
              <Button href={resumeDownloads.visual.href} external variant="secondary">
                {resumeDownloads.visual.label}
              </Button>
              <p className="mt-2 max-w-xs text-xs text-[var(--text-secondary)]">
                {resumeDownloads.visual.description}
              </p>
            </div>
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
