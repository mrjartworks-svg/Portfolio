import { ProjectListItem } from "@/components/projects/ProjectListItem";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product design work: enterprise systems, AI workflows, and complex operational tooling.",
};

export default function WorkPage() {
  return (
    <>
      <Section className="pt-28 pb-section-sm">
        <Container>
          <FadeIn>
            <Label>Work</Label>
            <h1 className="mt-4 font-display text-display-lg text-[var(--text)] max-w-3xl">
              Work
            </h1>
            <p className="mt-6 max-w-xl text-[var(--text-secondary)] leading-relaxed">
              A curated archive of enterprise product work, focused on systems
              thinking, operational complexity, and the decisions behind the
              interface.
            </p>
          </FadeIn>
        </Container>
      </Section>
      <Section size="sm" className="pt-0">
        <Container>
          {projects.map((project, i) => (
            <ProjectListItem key={project.slug} project={project} index={i} />
          ))}
        </Container>
      </Section>
    </>
  );
}
