import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { getFeaturedProjects } from "@/data/projects";
import Link from "next/link";

export function FeaturedWork() {
  const featured = getFeaturedProjects();

  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="featured-work-header mb-14 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-6">
            <h2 className="font-display text-display-md font-semibold tracking-[-0.02em] text-[var(--text)]">
              Featured projects
            </h2>
            <Link
              href="/work"
              className="text-sm text-[var(--text-secondary)]/80 transition-colors duration-300 hover:text-[var(--text)] link-underline sm:ml-auto"
            >
              View all work
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-16 lg:gap-24">
          {featured.map((project, i) => (
            <div key={project.slug} className="w-full">
              <FeaturedProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
