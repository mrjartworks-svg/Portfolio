export interface Project {
  slug: string;
  title: string;
  category: string;
  role: string;
  year: string;
  tags: string[];
  summary: string;
  description: string;
  /** Path under /public for list and featured card thumbnails */
  thumbnail?: string;
  /** External case study (e.g. Behance); overrides /work/[slug] link */
  externalUrl?: string;
  /** Hover label on cards (e.g. "Opens in Behance") */
  hoverLabel?: string;
  featured?: boolean;
  scale?: 1 | 2 | 3;
  readTimeMinutes?: number;
}

export interface CaseStudySection {
  id: string;
  title: string;
}

export interface CaseStudyHighlight {
  id: string;
  title: string;
  intro?: string;
  body: string;
  visualLabel?: string;
  bullets?: string[];
}

export interface CaseStudyGlossaryItem {
  term: string;
  definition: string;
  wideTooltip?: boolean;
}

export interface CaseStudyVisual {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  layout?: "default" | "full-bleed" | "crop" | "inset" | "narrow";
  collapsible?: boolean;
  collapseLabel?: string;
  captionCenter?: boolean;
  bordered?: boolean;
}

export interface WorkflowMoment {
  title?: string;
  body: string;
  visual?: CaseStudyVisual;
  visualCarousel?: {
    frames: CaseStudyVisual[];
    caption?: string;
    intervalMs?: number;
  };
  pullQuote?: string;
}

export interface CaseStudyPullQuote {
  text: string;
  afterSection: string;
}

export interface RichCaseStudy {
  tagline: string;
  duration: string;
  product: string;
  meta: string[];
  team: { role: string; name?: string }[];
  glossary: CaseStudyGlossaryItem[];
  editorial?: {
    inlineGlossary?: boolean;
  };
  pullQuotes?: CaseStudyPullQuote[];
  heroVisual?: CaseStudyVisual;
  heroVisualAbove?: CaseStudyVisual;
  heroVisualAboveCarousel?: {
    frames: CaseStudyVisual[];
    caption?: string;
    intervalMs?: number;
  };
  heroPrototypeCarousel?: {
    frames: CaseStudyVisual[];
    caption?: string;
    intervalMs?: number;
  };
  heroVisualBelow?: CaseStudyVisual;
  heroVisualAfterGallery?: CaseStudyVisual;
  heroGalleryCarousel?: {
    frames: CaseStudyVisual[];
    caption?: string;
    intervalMs?: number;
  };
  context: { framing?: string; paragraphs: string[] };
  complexity: {
    framing?: string;
    intro: string;
    items: string[];
    outro?: string;
    visual?: CaseStudyVisual;
  };
  informationArchitecture: {
    framing?: string;
    paragraphs: string[];
    flowSteps: string[];
    workflowComparison?: {
      beforeLabel: string;
      afterLabel: string;
      beforeSteps: string[];
      afterSteps: string[];
      impact?: string;
      emphasize?: boolean;
    };
    visuals: CaseStudyVisual[];
    visualCarousel?: {
      frames: CaseStudyVisual[];
      caption?: string;
      intervalMs?: number;
    };
  };
  workflowDeepDive?: {
    framing?: string;
    title: string;
    intro: string;
    moments: WorkflowMoment[];
  };
  workflowMapping?: {
    title: string;
    framing?: string;
    intro?: string;
    paragraphs?: string[];
    moments: WorkflowMoment[];
  };
  workflowReview?: {
    title: string;
    framing?: string;
    intro?: string;
    paragraphs?: string[];
    moments: WorkflowMoment[];
  };
  workflowSections?: {
    id: string;
    title: string;
    framing?: string;
    intro?: string;
    paragraphs?: string[];
    moments: WorkflowMoment[];
  }[];
  designDecisions: { title: string; description: string }[];
  designDecisionsFraming?: string;
  systemsThinking: {
    framing?: string;
    paragraphs: string[];
    patterns: { title: string; description: string }[];
    visuals?: CaseStudyVisual[];
  };
  pushDeployment?: {
    title: string;
    paragraphs?: string[];
    visualCarousel: {
      frames: CaseStudyVisual[];
      caption?: string;
      intervalMs?: number;
    };
  };
  reflection: {
    framing?: string;
    paragraphs: string[];
    metrics?: { label: string; value: string }[];
    quote?: { text: string; attribution: string };
  };
  sections: CaseStudySection[];
  tldr?: string[];
  /** Qualitative outcome signals for recruiters (directional, not metric claims). */
  impact?: string[];
}

export interface InterestItem {
  title: string;
  description: string;
}

export interface AboutGallerySlot {
  label: string;
  title?: string;
  src?: string;
  alt?: string;
  href?: string;
}

export interface AboutInterestCard {
  id: string;
  title: string;
  preview: string;
  expanded: string[];
  gallery?: AboutGallerySlot[];
  variant?: "default" | "obsessions" | "objects";
}

export interface CurrentObsessionField {
  label: string;
  value: string;
}

export interface ObjectToolItem {
  id: string;
  name: string;
  note: string;
  src?: string;
  alt?: string;
  /** Monochrome logo mark; uses contain fit instead of cover */
  logo?: boolean;
}

export interface ObjectListItem {
  id: string;
  name: string;
  note: string;
  details?: string[];
}

export interface PlaygroundGalleryImage {
  src?: string;
  alt: string;
  caption?: string;
  /** Tile cover crop tuning */
  objectPosition?: string;
  coverScale?: number;
}

export interface PlaygroundItem {
  slug: string;
  title: string;
  category: PlaygroundCategory;
  year: string;
  description: string;
  /** Masonry tile aspect hint */
  aspect?: "square" | "tall" | "wide";
  gallery?: PlaygroundGalleryImage[];
  links?: { label: string; href: string }[];
}

export type PlaygroundCategory =
  | "Tattoos"
  | "Illustrations"
  | "Animation"
  | "Branding"
  | "Experimental UX"
  | "Bike Build"
  | "Industrial Design"
  | "Internship Project - Adobe"
  | "Digital Asset Design"
  | "Mobile game concept"
  | "Photography";

export interface PersonalityItem {
  label: string;
  description: string;
}

export type WritingBlock =
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string };

export interface WritingPost {
  slug: string;
  title: string;
  date: string;
  dateTime: string;
  excerpt: string;
  readTimeMinutes?: number;
  comingSoon?: boolean;
}

export interface WritingArticle extends WritingPost {
  blocks: WritingBlock[];
}
