import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProjectThumbnailProps {
  src?: string;
  alt: string;
  aspectRatio?: "video" | "square" | "wide" | "tall";
  label?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  /** Subtle border + zoom on parent `group` hover (work / featured cards) */
  interactive?: boolean;
}

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[16/10]",
  tall: "aspect-[3/4]",
};

const frameClasses =
  "relative overflow-hidden rounded-md border border-[color-mix(in_srgb,var(--text)_8%,transparent)] bg-[var(--bg-secondary)] shadow-[0_1px_3px_rgba(17,17,17,0.04)]";

const interactiveClasses =
  "transition-transform duration-[550ms] ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100";

export function ProjectThumbnail({
  src,
  alt,
  aspectRatio = "wide",
  label,
  className,
  imageClassName,
  priority = false,
  interactive = false,
}: ProjectThumbnailProps) {
  const frame = cn(
    frameClasses,
    aspectClasses[aspectRatio],
    interactive && interactiveClasses,
    className
  );

  if (!src) {
    return (
      <VisualPlaceholder
        aspectRatio={aspectRatio}
        label={label}
        className={cn(frameClasses, aspectClasses[aspectRatio], interactive && interactiveClasses, className)}
      />
    );
  }

  return (
    <div className={frame}>
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 420px"
        className={cn("relative z-0 object-cover object-center", imageClassName)}
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[var(--bg-secondary)]/25 via-transparent to-transparent"
        aria-hidden
      />
    </div>
  );
}
