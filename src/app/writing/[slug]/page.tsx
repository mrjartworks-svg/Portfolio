import { WritingArticleBody } from "@/components/writing/WritingArticleBody";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { getWritingArticle, getAllWritingArticles } from "@/data/writing-articles";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllWritingArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getWritingArticle(slug);
  if (!article) return { title: "Writing" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function WritingArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getWritingArticle(slug);
  if (!article) notFound();

  const readLabel = article.readTimeMinutes
    ? `${article.readTimeMinutes} min read`
    : undefined;

  return (
    <>
      <Section className="pt-28 pb-section-sm">
        <Container size="narrow">
          <FadeIn>
            <Link
              href="/writing"
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              ← Writing
            </Link>
            <h1 className="mt-8 font-display text-display-lg text-[var(--text)] max-w-3xl">
              {article.title}
            </h1>
            <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--text-secondary)]">
              <time dateTime={article.dateTime}>{article.date}</time>
              {readLabel && (
                <>
                  <span aria-hidden>·</span>
                  <span>{readLabel}</span>
                </>
              )}
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section size="sm" className="pt-0 pb-section">
        <Container size="narrow">
          <FadeIn delay={0.05}>
            <WritingArticleBody blocks={article.blocks} />
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
