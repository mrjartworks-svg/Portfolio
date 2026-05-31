"use client";

import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";
import { hoverLift } from "@/lib/motion";
import type { Project } from "@/types";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  index?: number;
  featured?: boolean;
}

export function ProjectCard({ project, index = 0, featured }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      variants={hoverLift}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      className="group"
    >
      <Link
        href={`/work/${project.slug}`}
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
      >
        <div className="overflow-hidden rounded-md">
          <VisualPlaceholder
            aspectRatio={featured ? "wide" : "video"}
            label={project.category}
            className="transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </div>
        <div className="mt-5 space-y-2">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-xl tracking-tight text-[var(--text)] transition-colors group-hover:text-[var(--accent)] sm:text-2xl">
              {project.title}
            </h3>
            <span className="shrink-0 text-xs text-[var(--text-secondary)]">
              {project.year}
            </span>
          </div>
          <p className="text-xs uppercase tracking-wider text-[var(--accent)]">
            {project.category}
          </p>
          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
            {project.summary}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
