import { FadeIn } from "@/components/ui/FadeIn";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";

interface FlowDiagramProps {
  caption?: string;
}

export function FlowDiagram({ caption = "Workflow diagram" }: FlowDiagramProps) {
  return (
    <FadeIn>
      <figure className="my-10">
        <VisualPlaceholder aspectRatio="wide" label={caption} />
        {caption && (
          <figcaption className="mt-3 text-center text-xs text-[var(--text-secondary)]">
            {caption}
          </figcaption>
        )}
      </figure>
    </FadeIn>
  );
}
