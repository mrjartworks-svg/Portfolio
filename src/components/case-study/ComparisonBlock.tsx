import { FadeIn } from "@/components/ui/FadeIn";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";

interface ComparisonBlockProps {
  beforeLabel?: string;
  afterLabel?: string;
}

export function ComparisonBlock({
  beforeLabel = "Before",
  afterLabel = "After",
}: ComparisonBlockProps) {
  return (
    <FadeIn>
      <div className="grid gap-4 sm:grid-cols-2 my-10">
        <div>
          <p className="mb-2 text-xs uppercase tracking-wider text-[var(--text-secondary)]">
            {beforeLabel}
          </p>
          <VisualPlaceholder aspectRatio="wide" />
        </div>
        <div>
          <p className="mb-2 text-xs uppercase tracking-wider text-[var(--text-secondary)]">
            {afterLabel}
          </p>
          <VisualPlaceholder aspectRatio="wide" />
        </div>
      </div>
    </FadeIn>
  );
}
