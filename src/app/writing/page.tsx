import { writingPosts } from "@/data/writing";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Threads on design, technology, and everything that leaks into them.",
};

export default function WritingPage() {
  return (
    <>
      <Section className="pt-28 pb-section-sm">
        <Container>
          <FadeIn>
            <Label>Writing</Label>
            <h1 className="mt-4 font-display text-display-lg text-[var(--text)] max-w-3xl">
              Mostly questions. Occasionally answers.
            </h1>
            <p className="mt-6 max-w-xl text-[var(--text-secondary)] leading-relaxed">
              Notes from design, technology, and everything that leaks into them.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section size="sm" className="pt-0">
        <Container size="narrow">
          <ul className="divide-y divide-[var(--border)]">
            {writingPosts.map((post, i) => {
              const metaLabel =
                post.readTimeMinutes != null
                  ? `${post.date} · ${post.readTimeMinutes} min read`
                  : post.date;
              const inner = (
                <>
                  <div className="flex items-baseline justify-between gap-4">
                    <h2
                      className={cn(
                        "font-display text-xl text-[var(--text)]",
                        !post.comingSoon &&
                          "transition-colors group-hover:text-[var(--accent)]"
                      )}
                    >
                      {post.title}
                    </h2>
                    <span className="shrink-0 text-xs text-[var(--accent-muted)]">
                      {metaLabel}
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
                </>
              );

              return (
                <FadeIn key={post.slug} delay={i * 0.05} as="li">
                  <article className="py-8 group">
                    {post.comingSoon ? (
                      inner
                    ) : (
                      <Link
                        href={`/writing/${post.slug}`}
                        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                      >
                        {inner}
                      </Link>
                    )}
                  </article>
                </FadeIn>
              );
            })}
          </ul>
        </Container>
      </Section>
    </>
  );
}
