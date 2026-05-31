import { FeaturedProjectVisual } from "@/components/projects/FeaturedProjectVisual";
import { ProjectThumbnail } from "@/components/projects/ProjectThumbnail";
import { ProjectScale } from "@/components/projects/ProjectScale";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Project } from "@/types";
import Link from "next/link";

const visualVariants = {
  "firewall-migration-tool": "workflow",
  "ai-assisted-enterprise-workflows": "nodes",
  "adobe-perspective-tool": "spatial",
} as const;

interface FeaturedProjectCardProps {
  project: Project;
  index?: number;
}

export function FeaturedProjectCard({
  project,
  index = 0,
}: FeaturedProjectCardProps) {
  const variant =
    visualVariants[project.slug as keyof typeof visualVariants] ?? "workflow";
  const scaleLevel = project.scale ?? 2;
  const readTime = project.readTimeMinutes ?? 20;
  const href = project.externalUrl ?? `/work/${project.slug}`;
  const isExternal = Boolean(project.externalUrl);
  const hoverHint =
    project.hoverLabel ?? `${readTime} min read`;

  const cardClassName =
    "block rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] lg:grid lg:grid-cols-[minmax(0,1.65fr)_minmax(300px,420px)] lg:items-start lg:gap-10 xl:gap-14";

  const cardInner = (
    <>
          <div className="featured-project-visual min-w-0 overflow-hidden rounded-md ring-1 ring-transparent transition-[transform,box-shadow,ring-color] duration-500 ease-out group-hover:ring-[var(--text)]/[0.08] group-hover:shadow-[0_20px_48px_-28px_rgba(17,17,17,0.28)]">
            {project.thumbnail ? (
              <ProjectThumbnail
                src={project.thumbnail}
                alt={`${project.title} thumbnail`}
                aspectRatio="wide"
                priority={index === 0}
                interactive
              />
            ) : (
              <FeaturedProjectVisual
                variant={variant}
                className="transition-transform duration-[550ms] ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            )}
          </div>

          <div className="mt-6 w-full min-w-0 lg:mt-0">
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
              <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-[var(--text)] transition-colors duration-300 ease-out group-hover:text-[var(--accent)] sm:text-[1.75rem]">
                {project.title}
              </h3>
              <span className="text-meta text-sm tabular-nums">{project.year}</span>
            </div>

            <div className="relative mt-4 min-h-[3.25rem]">
              <p className="text-meta text-base leading-[1.65] transition-opacity duration-300 ease-out group-hover:opacity-0 motion-reduce:group-hover:opacity-100">
                {project.summary}
              </p>
              <p
                className="pointer-events-none absolute inset-0 flex items-start text-base font-medium leading-[1.65] text-[var(--accent)] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 motion-reduce:static motion-reduce:opacity-100 motion-reduce:mt-2 motion-reduce:font-normal motion-reduce:text-meta"
                aria-hidden
              >
                {hoverHint}
              </p>
            </div>

            <ProjectScale level={scaleLevel as 1 | 2 | 3} className="mt-6" />
          </div>
    </>
  );

  return (
    <FadeIn delay={index * 0.06}>
      <article className="group">
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClassName}
          >
            {cardInner}
          </a>
        ) : (
          <Link href={href} className={cardClassName}>
            {cardInner}
          </Link>
        )}
      </article>
    </FadeIn>
  );
}
