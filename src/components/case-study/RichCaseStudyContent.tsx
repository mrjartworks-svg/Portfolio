import { CalloutQuote } from "@/components/case-study/CalloutQuote";
import { CaseStudyImage } from "@/components/case-study/CaseStudyImage";
import { CaseStudyGlossaryCollapsible } from "@/components/case-study/CaseStudyGlossaryCollapsible";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { DecisionList } from "@/components/case-study/DecisionList";
import { EditorialText } from "@/components/case-study/EditorialText";
import { EditorialVisualBreak } from "@/components/case-study/EditorialVisualBreak";
import { CaseStudyVisualCollapsible } from "@/components/case-study/CaseStudyVisualCollapsible";
import { CaseStudyImageCarousel } from "@/components/case-study/CaseStudyImageCarousel";
import { PullQuote } from "@/components/case-study/PullQuote";
import { WorkflowComparison } from "@/components/case-study/WorkflowComparison";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import type { CaseStudyVisual, RichCaseStudy, WorkflowMoment } from "@/types";

function Visual({ visual }: { visual: CaseStudyVisual }) {
  return (
    <CaseStudyImage
      src={visual.src}
      alt={visual.alt}
      caption={visual.caption}
      width={visual.width}
      height={visual.height}
      layout={visual.layout}
      captionCenter={visual.captionCenter}
    />
  );
}

function Prose({
  text,
  study,
  className = "prose-editorial mt-7 first:mt-0",
}: {
  text: string;
  study: RichCaseStudy;
  className?: string;
}) {
  return (
    <p className={className}>
      <EditorialText
        text={text}
        glossary={study.glossary}
        inlineGlossary={study.editorial?.inlineGlossary}
      />
    </p>
  );
}

function SectionPullQuotes({
  study,
  sectionId,
}: {
  study: RichCaseStudy;
  sectionId: string;
}) {
  const quotes = study.pullQuotes?.filter((quote) => quote.afterSection === sectionId) ?? [];
  if (quotes.length === 0) return null;

  return (
    <>
      {quotes.map((quote) => (
        <PullQuote
          key={quote.text}
          text={quote.text}
          glossary={study.glossary}
          inlineGlossary={study.editorial?.inlineGlossary}
        />
      ))}
    </>
  );
}

interface RichCaseStudyContentProps {
  study: RichCaseStudy;
}

function WorkflowMoments({
  study,
  moments,
  inlineGlossary,
}: {
  study: RichCaseStudy;
  moments: WorkflowMoment[];
  inlineGlossary?: boolean;
}) {
  return (
    <div className="mt-14">
      {moments.map((moment) => (
        <div key={moment.title ?? moment.body.slice(0, 40)} className="case-study-moment">
          {moment.title && (
            <h3 className="font-display text-lg font-medium text-[var(--text)]">{moment.title}</h3>
          )}
          <Prose
            text={moment.body}
            study={study}
            className={`prose-editorial ${moment.title ? "mt-4" : ""}`}
          />
          {moment.visualCarousel && (
            <CaseStudyImageCarousel
              className="my-10"
              frames={moment.visualCarousel.frames}
              caption={moment.visualCarousel.caption}
              intervalMs={moment.visualCarousel.intervalMs}
            />
          )}
          {moment.visual && <Visual visual={moment.visual} />}
          {moment.pullQuote && (
            <PullQuote
              text={moment.pullQuote}
              glossary={study.glossary}
              inlineGlossary={inlineGlossary}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export function RichCaseStudyContent({ study }: RichCaseStudyContentProps) {
  const workflowCompare = study.informationArchitecture.workflowComparison;
  const showLegend = study.sections.some((section) => section.id === "legend");
  const inlineGlossary = study.editorial?.inlineGlossary;

  return (
    <>
      {showLegend && (
        <CaseStudySection id="legend" title="Legend">
          <CaseStudyGlossaryCollapsible items={study.glossary} />
        </CaseStudySection>
      )}

      <CaseStudySection
        id="introduction"
        title="Introduction"
        framing={study.context.framing}
        framingGlossary={study.glossary}
        framingInlineGlossary={inlineGlossary}
      >
        <p className="case-study-intro-tagline mb-7 max-w-prose">
          <EditorialText
            text={study.tagline}
            glossary={study.glossary}
            inlineGlossary={inlineGlossary}
          />
        </p>
        {study.context.paragraphs.map((paragraph) => (
          <Prose key={paragraph.slice(0, 40)} text={paragraph} study={study} />
        ))}
        <SectionPullQuotes study={study} sectionId="introduction" />
        {study.heroPrototypeCarousel && (
          <CaseStudyImageCarousel
            className="mt-12"
            variant="hero"
            showControls={false}
            frames={study.heroPrototypeCarousel.frames}
            caption={study.heroPrototypeCarousel.caption}
            intervalMs={study.heroPrototypeCarousel.intervalMs}
          />
        )}
        {study.heroVisual &&
          (study.heroVisualAbove || study.heroVisualAboveCarousel) && (
          <div className="case-study-hero-gallery mt-12 space-y-8">
            <CaseStudyImage {...study.heroVisual} variant="hero" className="my-0" />
            {study.heroVisualBelow && (
              <CaseStudyImage {...study.heroVisualBelow} variant="hero" className="my-0" />
            )}
            {study.heroGalleryCarousel && (
              <CaseStudyImageCarousel
                className="my-0"
                frames={study.heroGalleryCarousel.frames}
                caption={study.heroGalleryCarousel.caption}
                intervalMs={study.heroGalleryCarousel.intervalMs}
              />
            )}
            {study.heroVisualAfterGallery && (
              <CaseStudyImage {...study.heroVisualAfterGallery} variant="hero" className="my-0" />
            )}
          </div>
        )}
      </CaseStudySection>

      <CaseStudySection
        id="complexity"
        title="Complexity & constraints"
        framing={study.complexity.framing}
      >
        <Prose text={study.complexity.intro} study={study} className="prose-editorial" />
        <ul className="mt-10 max-w-prose space-y-4">
          {study.complexity.items.map((item) => (
            <li
              key={item.slice(0, 48)}
              className="flex gap-3 text-sm font-normal leading-[1.85] tracking-[0.012em] text-[var(--text-secondary)]"
            >
              <span className="shrink-0 text-meta tabular-nums">·</span>
              <span>
                <EditorialText
                  text={item}
                  glossary={study.glossary}
                  inlineGlossary={inlineGlossary}
                />
              </span>
            </li>
          ))}
        </ul>
        {study.complexity.outro && (
          <Prose text={study.complexity.outro} study={study} className="prose-editorial mt-10" />
        )}
        {study.complexity.visual &&
          (study.complexity.visual.collapsible ? (
            <CaseStudyVisualCollapsible
              visual={{ ...study.complexity.visual, layout: study.complexity.visual.layout ?? "full-bleed" }}
              label={study.complexity.visual.collapseLabel}
            />
          ) : (
            <EditorialVisualBreak
              visual={{ ...study.complexity.visual, layout: study.complexity.visual.layout ?? "full-bleed" }}
            />
          ))}
        <SectionPullQuotes study={study} sectionId="complexity" />
      </CaseStudySection>

      <CaseStudySection
        id="information-architecture"
        title="Information architecture"
        framing={study.informationArchitecture.framing}
      >
        <div className="case-study-ia-body">
        {study.informationArchitecture.paragraphs.map((paragraph, index) => (
          <div key={paragraph.slice(0, 40)} className={index > 0 ? "mt-7" : undefined}>
            <Prose text={paragraph} study={study} className="prose-editorial mt-0" />
            {index === 1 && study.informationArchitecture.flowSteps.length > 0 && (
              <ol className="case-study-phase-steps mt-5 grid max-w-prose list-none gap-x-8 gap-y-3 sm:grid-cols-2 sm:items-start">
                {study.informationArchitecture.flowSteps.map((step, stepIndex) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-sm font-normal leading-relaxed text-[var(--text-secondary)]"
                  >
                    <span className="w-6 shrink-0 tabular-nums text-meta leading-relaxed">
                      {String(stepIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">{step}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
        </div>
        {workflowCompare && (
          <div className="mt-10 [&_.case-study-workflow-compare]:my-0">
            <WorkflowComparison
              beforeLabel={workflowCompare.beforeLabel}
              afterLabel={workflowCompare.afterLabel}
              beforeSteps={workflowCompare.beforeSteps}
              afterSteps={workflowCompare.afterSteps}
              impact={workflowCompare.impact}
              emphasize={workflowCompare.emphasize}
            />
          </div>
        )}
        <SectionPullQuotes study={study} sectionId="information-architecture" />
        {study.informationArchitecture.visualCarousel ? (
          <CaseStudyImageCarousel
            className="mt-10"
            frames={study.informationArchitecture.visualCarousel.frames}
            caption={study.informationArchitecture.visualCarousel.caption}
            intervalMs={study.informationArchitecture.visualCarousel.intervalMs}
          />
        ) : study.informationArchitecture.visuals.length > 1 ? (
          <div className="case-study-image-split">
            {study.informationArchitecture.visuals.map((visual) => (
              <Visual key={visual.src} visual={{ ...visual, layout: visual.layout ?? "crop" }} />
            ))}
          </div>
        ) : (
          study.informationArchitecture.visuals.map((visual) => (
            <Visual key={visual.src} visual={visual} />
          ))
        )}
      </CaseStudySection>

      {study.workflowMapping && (
        <CaseStudySection
          id="workflow-mapping"
          title={study.workflowMapping.title}
          framing={study.workflowMapping.framing}
        >
          {(study.workflowMapping.paragraphs ??
            (study.workflowMapping.intro ? [study.workflowMapping.intro] : [])
          ).map((paragraph, index) => (
            <Prose
              key={paragraph.slice(0, 48)}
              text={paragraph}
              study={study}
              className={index === 0 ? "prose-editorial" : "prose-editorial mt-7"}
            />
          ))}
          <WorkflowMoments
            study={study}
            moments={study.workflowMapping.moments}
            inlineGlossary={inlineGlossary}
          />
        </CaseStudySection>
      )}

      {study.workflowReview && (
        <CaseStudySection
          id="workflow-review"
          title={study.workflowReview.title}
          framing={study.workflowReview.framing}
        >
          {(study.workflowReview.paragraphs ??
            (study.workflowReview.intro ? [study.workflowReview.intro] : [])
          ).map((paragraph, index) => (
            <Prose
              key={paragraph.slice(0, 48)}
              text={paragraph}
              study={study}
              className={index === 0 ? "prose-editorial" : "prose-editorial mt-7"}
            />
          ))}
          <WorkflowMoments
            study={study}
            moments={study.workflowReview.moments}
            inlineGlossary={inlineGlossary}
          />
          <SectionPullQuotes study={study} sectionId="workflow-review" />
        </CaseStudySection>
      )}

      {study.workflowSections?.map((section) => (
        <CaseStudySection
          key={section.id}
          id={section.id}
          title={section.title}
          framing={section.framing}
        >
          {(section.paragraphs ??
            (section.intro ? [section.intro] : [])
          ).map((paragraph, index) => (
            <Prose
              key={paragraph.slice(0, 48)}
              text={paragraph}
              study={study}
              className={index === 0 ? "prose-editorial" : "prose-editorial mt-7"}
            />
          ))}
          <WorkflowMoments
            study={study}
            moments={section.moments}
            inlineGlossary={inlineGlossary}
          />
          <SectionPullQuotes study={study} sectionId={section.id} />
        </CaseStudySection>
      ))}

      {study.workflowDeepDive &&
        !study.workflowMapping &&
        !study.workflowReview &&
        !study.workflowSections?.length && (
        <CaseStudySection
          id="workflow-deep-dive"
          title={study.workflowDeepDive.title}
          framing={study.workflowDeepDive.framing}
        >
          <Prose text={study.workflowDeepDive.intro} study={study} className="prose-editorial" />
          <WorkflowMoments
            study={study}
            moments={study.workflowDeepDive.moments}
            inlineGlossary={inlineGlossary}
          />
          <SectionPullQuotes study={study} sectionId="workflow-deep-dive" />
        </CaseStudySection>
      )}

      <CaseStudySection
        id="design-decisions"
        title="Key design decisions"
        framing={study.designDecisionsFraming}
      >
        <DecisionList
          decisions={study.designDecisions.map(({ title, description }) => ({
            title,
            description,
          }))}
          glossary={study.glossary}
          inlineGlossary={inlineGlossary}
        />
        <SectionPullQuotes study={study} sectionId="design-decisions" />
      </CaseStudySection>

      {study.pushDeployment && (
        <CaseStudySection id="push-deployment" title={study.pushDeployment.title}>
          {(study.pushDeployment.paragraphs ?? []).map((paragraph, index) => (
            <Prose
              key={paragraph.slice(0, 48)}
              text={paragraph}
              study={study}
              className={index === 0 ? "prose-editorial" : "prose-editorial mt-7"}
            />
          ))}
          <CaseStudyImageCarousel
            className="mt-10"
            frames={study.pushDeployment.visualCarousel.frames}
            caption={study.pushDeployment.visualCarousel.caption}
            intervalMs={study.pushDeployment.visualCarousel.intervalMs}
          />
        </CaseStudySection>
      )}

      <CaseStudySection
        id="systems-thinking"
        title="Systems thinking"
        framing={study.systemsThinking.framing}
      >
        {study.systemsThinking.paragraphs.map((paragraph) => (
          <Prose key={paragraph.slice(0, 40)} text={paragraph} study={study} />
        ))}
        <ul className="mt-12 space-y-10">
          {study.systemsThinking.patterns.map((pattern) => (
            <li key={pattern.title}>
              <h3 className="font-display text-lg font-medium text-[var(--text)]">
                {pattern.title}
              </h3>
              <p className="mt-3 prose-editorial">
                <EditorialText
                  text={pattern.description}
                  glossary={study.glossary}
                  inlineGlossary={inlineGlossary}
                />
              </p>
            </li>
          ))}
        </ul>
        {study.systemsThinking.visuals?.map((visual, index) => (
          <Visual
            key={visual.src}
            visual={{
              ...visual,
              layout: visual.layout ?? (index === 0 ? "inset" : "full-bleed"),
            }}
          />
        ))}
      </CaseStudySection>

      <CaseStudySection id="reflection" title="Final reflection" bordered={false} framing={study.reflection.framing}>
        {study.reflection.paragraphs.map((paragraph) => (
          <Prose key={paragraph.slice(0, 40)} text={paragraph} study={study} />
        ))}
        {study.reflection.quote && (
          <CalloutQuote
            text={study.reflection.quote.text}
            attribution={study.reflection.quote.attribution}
          />
        )}
      </CaseStudySection>

      <FadeIn className="mt-20 border-t border-[var(--border)] pt-10">
        <Button href="/work" variant="secondary">
          ← Back to work
        </Button>
      </FadeIn>
    </>
  );
}
