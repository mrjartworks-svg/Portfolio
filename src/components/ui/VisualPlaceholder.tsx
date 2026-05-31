import { cn } from "@/lib/utils";

interface VisualPlaceholderProps {
  className?: string;
  aspectRatio?: "video" | "square" | "wide" | "tall";
  label?: string;
}

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[16/10]",
  tall: "aspect-[3/4]",
};

export function VisualPlaceholder({
  className,
  aspectRatio = "wide",
  label,
}: VisualPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-[var(--bg-secondary)]",
        aspectClasses[aspectRatio],
        className
      )}
      aria-hidden={!label}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-px w-1/3 bg-[var(--border)]" />
        <div className="absolute h-1/3 w-px bg-[var(--border)]" />
      </div>
      {label && (
        <span className="absolute bottom-4 left-4 text-xs text-[var(--text-secondary)]">
          {label}
        </span>
      )}
    </div>
  );
}
