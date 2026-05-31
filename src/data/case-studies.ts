import type { CaseStudySection, RichCaseStudy } from "@/types";
import { aiAssistantCaseStudy } from "@/data/case-studies/ai-assistant";
import { firewallMigrationCaseStudy } from "@/data/case-studies/firewall-migration-tool";

export const caseStudySections: CaseStudySection[] = [
  { id: "overview", title: "Overview" },
  { id: "problem", title: "Problem" },
  { id: "constraints", title: "Constraints" },
  { id: "research", title: "Research" },
  { id: "process", title: "Process" },
  { id: "decisions", title: "Design Decisions" },
  { id: "workflows", title: "Workflows" },
  { id: "solution", title: "Final Solution" },
  { id: "reflection", title: "Reflection" },
];

export interface CaseStudyContent {
  overview: string;
  problem: string;
  constraints: string[];
  research: string;
  process: string;
  decisions: { title: string; description: string }[];
  workflows: string;
  solution: string;
  reflection: string;
  metrics?: { label: string; value: string }[];
  quote?: { text: string; attribution: string };
}

export const caseStudyContent: Record<string, CaseStudyContent> = {
  "firewall-migration-tool": {
    overview:
      "Network teams at Cisco manage firewall migrations across complex, multi-vendor environments. The existing process relied on spreadsheets, tribal knowledge, and fragmented tooling, creating risk at every handoff.",
    problem:
      "Migration projects fail not because teams lack expertise, but because information is scattered, validation is manual, and there's no single source of truth for migration state. Operators need confidence before they execute changes that affect production traffic.",
    constraints: [
      "Must integrate with existing Cisco security product ecosystem",
      "Operators have varying technical depth; design for both specialists and generalists",
      "Changes require audit trails for compliance",
      "Performance with datasets spanning thousands of rules",
      "Cannot disrupt active migration workflows during rollout",
    ],
    research:
      "Conducted contextual inquiry with 12 network operators across three regions. Mapped the migration lifecycle from discovery through validation to execution. Key insight: operators don't need more data; they need structured confidence at decision points.",
    process:
      "Started with workflow mapping across the full migration lifecycle. Prototyped three navigation models before converging on a step-based flow with persistent context panel. Iterated on validation UX through five rounds of moderated testing.",
    decisions: [
      {
        title: "Progressive disclosure over dashboard density",
        description:
          "Rather than surfacing all migration data upfront, we structured the interface around decision checkpoints. Each screen answers one question before advancing.",
      },
      {
        title: "Validation as a first-class workflow",
        description:
          "Built dedicated validation states with clear pass/fail semantics, rather than burying checks in background processes. Operators need to see what was checked and why.",
      },
      {
        title: "Persistent migration context",
        description:
          "A collapsible side panel maintains migration metadata, timeline, and team assignments across all steps, reducing context-switching.",
      },
    ],
    workflows:
      "The core workflow follows five stages: Discover, Plan, Validate, Execute, and Verify. Each stage has entry criteria and exit gates. Cross-stage dependencies are visualized through a lightweight dependency graph.",
    solution:
      "Shipped a migration workbench that consolidates planning, validation, and execution into a single operational surface. Reduced average migration planning time and increased pre-execution validation coverage.",
    reflection:
      "The biggest lesson was that enterprise tools succeed when they respect existing mental models. We didn't invent a new process; we made the existing one visible, auditable, and harder to get wrong.",
    metrics: [
      { label: "Planning time reduction", value: "~40%" },
      { label: "Pre-execution validation", value: "3× increase" },
      { label: "Operator confidence score", value: "4.2 / 5" },
    ],
    quote: {
      text: "For the first time, I can see the full migration story in one place before we touch production.",
      attribution: "Senior Network Engineer",
    },
  },
  "ai-assisted-enterprise-workflows": {
    overview:
      "Enterprise teams are adopting AI-assisted tooling, but most implementations optimize for automation over operator trust. This project explored how to design AI interactions that enhance, rather than replace, human judgment in operational contexts.",
    problem:
      "AI features in enterprise products often create more anxiety than efficiency. Operators don't trust black-box recommendations, can't audit AI decisions, and lose situational awareness when automation takes over opaque processes.",
    constraints: [
      "AI responses must be explainable and cite sources",
      "Operators must always be able to override or reject suggestions",
      "Latency budgets for real-time operational contexts",
      "Compliance requirements for AI-assisted decisions",
      "Must work within existing Cisco design system",
    ],
    research:
      "Studied trust patterns in AI-assisted tools across healthcare, finance, and operations domains. Interviewed 8 enterprise operators about their mental models for AI assistance. Synthesized a framework for calibrated automation.",
    process:
      "Developed interaction patterns for three trust levels: Suggest, Assist, and Automate. Each level has distinct UI treatment, confirmation requirements, and audit behavior. Validated through scenario-based prototyping.",
    decisions: [
      {
        title: "Confidence indicators, not just outputs",
        description:
          "Every AI suggestion includes a confidence signal and reasoning summary. Operators decide how much to trust, not the system.",
      },
      {
        title: "Human-in-the-loop by default",
        description:
          "Automation requires explicit opt-in per workflow. The default interaction mode is suggestion with one-click acceptance.",
      },
      {
        title: "Audit trail as interface element",
        description:
          "Decision history is surfaced inline, not buried in logs. Operators can trace any AI-influenced action back to its inputs.",
      },
    ],
    workflows:
      "Designed a reusable pattern library: Query, Context Assembly, Suggestion, Review, Action, and Audit. Each step has defined UI components and state transitions that product teams can compose.",
    solution:
      "Delivered an AI interaction pattern library adopted across three product teams, with documented trust levels, component specs, and usage guidelines for enterprise contexts.",
    reflection:
      "Trust in enterprise AI isn't about making the AI better; it's about making the human's relationship to AI legible. Transparency beats accuracy in early adoption.",
    metrics: [
      { label: "Suggestion acceptance rate", value: "68%" },
      { label: "Override rate (healthy signal)", value: "22%" },
      { label: "Time to first action", value: "-35%" },
    ],
  },
  "adobe-perspective-tool": {
    overview:
      "The Perspective Tool enables precise spatial transformations in creative workflows. The challenge was making mathematically complex operations feel direct and visually predictable for designers.",
    problem:
      "Perspective manipulation tools historically trade precision for usability. Designers either get intuitive but imprecise controls, or powerful but opaque numeric inputs. The goal was both.",
    constraints: [
      "Must align with Adobe's established interaction patterns",
      "Real-time performance on large canvases",
      "Support for both mouse and stylus input",
      "Accessibility requirements for keyboard navigation",
    ],
    research:
      "Analyzed competitive tools and conducted usability studies with 6 professional illustrators and 4 UI designers. Identified key friction points in grid manipulation and vanishing point control.",
    process:
      "Explored direct manipulation models vs. numeric input hybrids. Built interactive prototypes testing grid behavior, snap feedback, and transform preview. Converged on a dual-mode interface.",
    decisions: [
      {
        title: "Visual grid as primary control surface",
        description:
          "The perspective grid is both the control and the feedback. Manipulations happen directly on the artifact being transformed.",
      },
      {
        title: "Numeric precision on demand",
        description:
          "Advanced users access numeric inputs through contextual panels without breaking the direct manipulation flow.",
      },
      {
        title: "Continuous preview, never modal",
        description:
          "All transformations preview in real-time on the canvas. No apply/cancel dialogs that break creative flow.",
      },
    ],
    workflows:
      "Core flow: Select, Activate Grid, Manipulate Vanishing Points, Fine-tune, and Commit. Secondary flow supports numeric entry for exact angles and distances.",
    solution:
      "Shipped an interaction model that reduced task completion time for common perspective operations while maintaining precision for advanced use cases.",
    reflection:
      "Creative tools teach you that the best interface is the one that disappears. Every control we added had to earn its place by reducing cognitive distance between intent and result.",
  },
};

export function getCaseStudyContent(slug: string): CaseStudyContent | undefined {
  return caseStudyContent[slug];
}

const richCaseStudies: Record<string, RichCaseStudy> = {
  "firewall-migration-tool": firewallMigrationCaseStudy,
  "ai-assisted-enterprise-workflows": aiAssistantCaseStudy,
};

export function getRichCaseStudy(slug: string): RichCaseStudy | undefined {
  return richCaseStudies[slug];
}

export function getCaseStudyNavSections(slug: string): CaseStudySection[] {
  const rich = getRichCaseStudy(slug);
  if (rich) return rich.sections;
  return caseStudySections;
}

export function isRichCaseStudy(slug: string): boolean {
  return slug in richCaseStudies;
}
