"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function ResumeViewer() {
  return (
    <FadeIn>
      <div className="overflow-hidden rounded-md border border-[color-mix(in_srgb,var(--text)_8%,transparent)] shadow-[0_1px_3px_rgba(17,17,17,0.04)]">
        <iframe
          src="/resume/mradul-jain-resume.pdf"
          title="Mradul Jain Resume"
          className="aspect-[8.5/11] w-full min-h-[70vh] bg-[var(--bg)]"
        />
        <p className="sr-only">
          If the PDF does not load, use the download button above or add your file
          to public/resume/mradul-jain-resume.pdf
        </p>
      </div>
    </FadeIn>
  );
}
