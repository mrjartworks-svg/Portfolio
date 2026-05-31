import { writingPosts } from "@/data/writing";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays and notes on enterprise UX, AI workflows, systems thinking, and product design.",
};

export default function WritingPage() {
  return (
    <>
      <Section className="pt-28 pb-section-sm">
        <Container>
          <FadeIn>
            <Label>Writing</Label>
            <h1 className="mt-4 font-display text-display-lg text-[var(--text)] max-w-3xl">
              Essays, notes, and process writing.
            </h1>
            <p className="mt-6 max-w-xl text-[var(--text-secondary)] leading-relaxed">
              Thoughts on designing for complexity. Coming soon.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section size="sm" className="pt-0">
        <Container size="narrow">
          <ul className="divide-y divide-[var(--border)]">
            {writingPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.05} as="li">
                <article className="py-8 group">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="font-display text-xl text-[var(--text)]">
                      {post.title}
                    </h2>
                    <span className="shrink-0 text-xs text-[var(--accent-muted)]">
                      {post.date}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {post.excerpt}
                  </p>
                  {post.comingSoon && (
                    <span className="mt-3 inline-block text-xs uppercase tracking-wider text-[var(--accent)]">
                      Coming soon
                    </span>
                  )}
                </article>
              </FadeIn>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
