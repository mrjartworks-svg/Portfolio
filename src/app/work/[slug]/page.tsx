import { CalloutQuote } from "@/components/case-study/CalloutQuote";
import { CaseStudyMetaBand } from "@/components/case-study/CaseStudyMetaBand";
import { CaseStudySummaryPanels } from "@/components/case-study/CaseStudySummaryPanels";
import { CaseStudyNav } from "@/components/case-study/CaseStudyNav";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { ComparisonBlock } from "@/components/case-study/ComparisonBlock";
import { DecisionList } from "@/components/case-study/DecisionList";
import { RichCaseStudyContent } from "@/components/case-study/RichCaseStudyContent";
import { FlowDiagram } from "@/components/case-study/FlowDiagram";
import { MetricsGrid } from "@/components/case-study/MetricsGrid";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { CaseStudyImage } from "@/components/case-study/CaseStudyImage";
import { CaseStudyImageCarousel } from "@/components/case-study/CaseStudyImageCarousel";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";
import {
  getCaseStudyContent,
  getCaseStudyNavSections,
  getRichCaseStudy,
  isRichCaseStudy,
} from "@/data/case-studies";
import { getProjectBySlug, projects } from "@/data/projects";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

function MetaSeparator() {
  return (
    <span className="case-study-meta-sep" aria-hidden>
      ·
    </span>
  );
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const content = getCaseStudyContent(slug);
  const rich = isRichCaseStudy(slug);
  const richStudy = getRichCaseStudy(slug);
  const navSections = getCaseStudyNavSections(slug);

  if (!project || !content) notFound();

  return (
    <>
      <Section className="grain pb-section-sm pt-28">
        <Container size="wide">
          <FadeIn>
            <Link
              href="/work"
              className="link-underline text-sm font-normal text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
            >
              ← All work
            </Link>

            {rich ? (
              <>
                <h1 className="case-study-hero-title mt-10">{project.title}</h1>
                <CaseStudySummaryPanels
                  impact={richStudy?.impact}
                  tldr={richStudy?.tldr}
                />
              </>
            ) : (
              <>
                <p className="case-study-meta mt-8">
                  <span>{project.role}</span>
                  <MetaSeparator />
                  <span>{project.year}</span>
                </p>
                <h1 className="mt-5 max-w-3xl font-display text-display-lg text-[var(--text)]">
                  {project.title}
                </h1>
                <p className="prose-editorial-lg mt-5 max-w-prose">{project.description}</p>
              </>
            )}
          </FadeIn>

          <FadeIn className="mt-10 w-full space-y-8">
            {rich && richStudy?.heroVisualAboveCarousel ? (
              <CaseStudyImageCarousel
                className="my-0"
                variant="hero"
                priority
                showControls={false}
                frames={richStudy.heroVisualAboveCarousel.frames}
                caption={richStudy.heroVisualAboveCarousel.caption}
                intervalMs={richStudy.heroVisualAboveCarousel.intervalMs}
              />
            ) : rich && richStudy?.heroVisualAbove ? (
              <CaseStudyImage
                {...richStudy.heroVisualAbove}
                priority
                variant="hero"
                className="my-0"
              />
            ) : null}
            {!rich ? (
              <VisualPlaceholder
                aspectRatio="wide"
                label="Hero visual"
                className="w-full"
              />
            ) : null}
          </FadeIn>

          {rich && richStudy && (
            <>
              <FadeIn className="mt-12">
                <CaseStudyMetaBand
                  team={richStudy.team}
                  duration={richStudy.duration}
                  product={richStudy.product}
                />
              </FadeIn>
            </>
          )}
        </Container>
      </Section>

      <Section size="sm" className="pt-0">
        <Container size="wide">
          <div className="case-study-layout">
            <div className="case-study-rail">
              <CaseStudyNav sections={navSections} />
            </div>
            <article className="case-study-content-wide min-w-0">
              {rich && richStudy ? (
                <RichCaseStudyContent study={richStudy} />
              ) : (
                <>
                  <CaseStudySection id="overview" title="Overview">
                    <p className="prose-editorial">{content.overview}</p>
                  </CaseStudySection>

                  <CaseStudySection id="problem" title="Problem">
                    <p className="prose-editorial">{content.problem}</p>
                  </CaseStudySection>

                  <CaseStudySection id="constraints" title="Constraints">
                    <ul className="max-w-prose space-y-3 text-sm font-normal leading-[1.85] text-[var(--text-secondary)]">
                      {content.constraints.map((c) => (
                        <li key={c} className="flex gap-3">
                          <span className="shrink-0 text-meta tabular-nums">·</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </CaseStudySection>

                  <CaseStudySection id="research" title="Research">
                    <p className="prose-editorial">{content.research}</p>
                    <VisualPlaceholder
                      aspectRatio="wide"
                      label="Research synthesis"
                      className="mt-8 w-full"
                    />
                  </CaseStudySection>

                  <CaseStudySection id="process" title="Process">
                    <p className="prose-editorial">{content.process}</p>
                    <VisualPlaceholder
                      aspectRatio="tall"
                      label="Process artifacts"
                      className="mt-8 w-full max-w-md"
                    />
                  </CaseStudySection>

                  <CaseStudySection id="decisions" title="Design Decisions">
                    <DecisionList decisions={content.decisions} />
                  </CaseStudySection>

                  <CaseStudySection id="workflows" title="Workflows">
                    <p className="prose-editorial">{content.workflows}</p>
                    <FlowDiagram caption="End-to-end workflow" />
                    <ComparisonBlock />
                  </CaseStudySection>

                  <CaseStudySection id="solution" title="Final Solution">
                    <p className="prose-editorial">{content.solution}</p>
                    <VisualPlaceholder
                      aspectRatio="wide"
                      label="Final interface"
                      className="mt-8 w-full"
                    />
                    {content.metrics && <MetricsGrid metrics={content.metrics} />}
                    {content.quote && (
                      <CalloutQuote
                        text={content.quote.text}
                        attribution={content.quote.attribution}
                      />
                    )}
                  </CaseStudySection>

                  <CaseStudySection id="reflection" title="Reflection" bordered={false}>
                    <p className="prose-editorial">{content.reflection}</p>
                  </CaseStudySection>

                  <FadeIn className="mt-16 border-t border-[var(--border)] pt-8">
                    <Button href="/work" variant="secondary">
                      ← Back to work
                    </Button>
                  </FadeIn>
                </>
              )}
            </article>
          </div>
        </Container>
      </Section>
    </>
  );
}
