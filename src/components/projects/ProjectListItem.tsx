"use client";

import { ProjectThumbnail } from "@/components/projects/ProjectThumbnail";
import type { Project } from "@/types";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

interface ProjectListItemProps {
  project: Project;
  index?: number;
}

export function ProjectListItem({ project, index = 0 }: ProjectListItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const href = project.externalUrl ?? `/work/${project.slug}`;
  const isExternal = Boolean(project.externalUrl);
  const hoverHint = project.hoverLabel;

  const linkClassName =
    "grid gap-8 lg:grid-cols-12 lg:gap-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]";

  const content = (
    <>
      <div className="min-w-0 overflow-hidden rounded-md lg:col-span-5">
        <ProjectThumbnail
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          aspectRatio="wide"
          label={project.thumbnail ? undefined : project.category}
          interactive
        />
      </div>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, delay: index * 0.06 }}
        className="flex flex-col justify-center lg:col-span-7"
      >
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-[var(--text-secondary)]">
          <span>{project.role}</span>
          <span aria-hidden>·</span>
          <span>{project.year}</span>
        </div>
        <h2 className="font-display text-display-md text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
          {project.title}
        </h2>
        <div
          className={
            hoverHint
              ? "relative mt-4 min-h-[3.25rem] max-w-xl"
              : "mt-4 max-w-xl"
          }
        >
          <p
            className={
              hoverHint
                ? "text-[var(--text-secondary)] leading-relaxed transition-opacity duration-300 ease-out group-hover:opacity-0 motion-reduce:group-hover:opacity-100"
                : "text-[var(--text-secondary)] leading-relaxed"
            }
          >
            {project.description}
          </p>
          {hoverHint && (
            <p
              className="pointer-events-none absolute inset-0 flex items-start font-medium leading-relaxed text-[var(--accent)] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 motion-reduce:static motion-reduce:opacity-100 motion-reduce:mt-2 motion-reduce:font-normal motion-reduce:text-[var(--text-secondary)]"
              aria-hidden
            >
              {hoverHint}
            </p>
          )}
        </div>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Project tags">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-[color-mix(in_srgb,var(--text)_8%,transparent)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );

  return (
    <article className="group border-b border-[var(--border)] py-12 first:pt-0 last:border-b-0">
      {isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {content}
        </a>
      ) : (
        <Link href={href} className={linkClassName}>
          {content}
        </Link>
      )}
    </article>
  );
}
