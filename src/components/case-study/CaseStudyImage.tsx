import { cn } from "@/lib/utils";
import Image from "next/image";
import type { CaseStudyVisual } from "@/types";

export type { CaseStudyVisual };

interface CaseStudyImageProps extends CaseStudyVisual {
  className?: string;
  priority?: boolean;
  variant?: "default" | "hero";
}

const layoutClasses: Record<NonNullable<CaseStudyVisual["layout"]>, string> = {
  default: "",
  "full-bleed": "case-study-image--full-bleed",
  crop: "case-study-image--crop",
  inset: "case-study-image--inset",
  narrow: "case-study-image--narrow",
};

export function CaseStudyImage({
  src,
  alt,
  caption,
  width = 1728,
  height = 1117,
  className,
  priority,
  variant = "default",
  layout = "default",
  bordered = false,
  captionCenter = false,
}: CaseStudyImageProps) {
  const isHero = variant === "hero";
  const isCrop = layout === "crop";

  return (
    <figure
      className={cn(
        isHero ? "my-0" : "my-10",
        layoutClasses[layout],
        className
      )}
    >
      <div
        className={cn(
          "overflow-hidden bg-[var(--bg-secondary)]",
          bordered && "rounded-md",
          layout !== "full-bleed" && "rounded-md",
          isCrop && "case-study-image-crop-frame"
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={
            isHero
              ? "(max-width: 1280px) 100vw, 1120px"
              : layout === "full-bleed"
                ? "(max-width: 1280px) 100vw, 1200px"
                : "(max-width: 768px) 100vw, 960px"
          }
          className={cn("h-auto w-full", isCrop && "case-study-image-crop")}
        />
      </div>
      {caption && (
        <figcaption
          className={cn(
            "mt-3 max-w-prose text-xs font-normal leading-relaxed text-meta",
            (isHero || captionCenter) && "mx-auto text-center",
            layout === "full-bleed" && "mx-auto max-w-2xl text-center"
          )}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
