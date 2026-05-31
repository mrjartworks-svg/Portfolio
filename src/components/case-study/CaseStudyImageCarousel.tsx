"use client";

import { cn } from "@/lib/utils";
import type { CaseStudyVisual } from "@/types";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/** Shared timing for every case-study carousel (1s per frame, continuous loop). */
export const CASE_STUDY_CAROUSEL_INTERVAL_MS = 1000;

interface CaseStudyImageCarouselProps {
  frames: CaseStudyVisual[];
  caption?: string;
  intervalMs?: number;
  className?: string;
  priority?: boolean;
  variant?: "default" | "hero";
  /** When false, auto-advances with no dots or counter. Timing is never paused on hover. */
  showControls?: boolean;
}

export function CaseStudyImageCarousel({
  frames,
  caption,
  intervalMs = CASE_STUDY_CAROUSEL_INTERVAL_MS,
  className,
  priority = false,
  variant = "default",
  showControls = true,
}: CaseStudyImageCarouselProps) {
  const count = frames.length;
  const frameSrcs = frames.map((frame) => frame.src).join("|");
  const [index, setIndex] = useState(0);
  const [framesReady, setFramesReady] = useState(count <= 1);

  useEffect(() => {
    if (count <= 1) {
      setFramesReady(true);
      return;
    }

    let cancelled = false;

    void Promise.all(
      frames.map(
        (frame) =>
          new Promise<void>((resolve) => {
            const img = new window.Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = frame.src;
          })
      )
    ).then(() => {
      if (!cancelled) setFramesReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, [count, frameSrcs]);

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (count <= 1 || !framesReady) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [count, intervalMs, framesReady]);

  if (count === 0) return null;

  const width = frames[0]?.width ?? 1728;
  const height = frames[0]?.height ?? 861;
  const isHero = variant === "hero";

  return (
    <figure className={cn("case-study-image-carousel my-10", className)}>
      <div className="relative overflow-hidden rounded-md bg-[var(--bg-secondary)]">
        <div
          className="relative w-full"
          style={{ aspectRatio: `${width} / ${height}` }}
        >
          {frames.map((frame, frameIndex) => (
            <Image
              key={frame.src}
              src={frame.src}
              alt={frameIndex === index ? frame.alt : ""}
              fill
              sizes="(max-width: 1280px) 100vw, 1120px"
              className={cn(
                "absolute inset-0 object-contain object-left-top [transition:none]",
                frameIndex === index ? "z-10 visible" : "z-0 invisible"
              )}
              priority={priority || frameIndex < 3}
              loading="eager"
              unoptimized
              aria-hidden={frameIndex !== index}
            />
          ))}

          {showControls && count > 1 && (
            <>
              <div
                className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5"
                role="tablist"
                aria-label="Carousel slides"
              >
                {frames.map((item, dotIndex) => (
                  <button
                    key={item.src}
                    type="button"
                    role="tab"
                    aria-selected={dotIndex === index}
                    aria-label={`Slide ${dotIndex + 1} of ${count}`}
                    onClick={() => goTo(dotIndex)}
                    className={cn(
                      "h-2 w-2 rounded-full transition-colors",
                      dotIndex === index
                        ? "bg-[var(--text-secondary)]"
                        : "bg-[color-mix(in_srgb,var(--text-muted)_45%,transparent)] hover:bg-[var(--text-muted)]"
                    )}
                  />
                ))}
              </div>
              {isHero && (
                <p
                  className="absolute right-3 top-3 z-30 rounded-full border border-[var(--ui-border)] bg-[var(--ui-surface)] px-2.5 py-1 text-[0.6875rem] font-medium tabular-nums text-meta shadow-sm"
                  aria-live="polite"
                >
                  {index + 1} / {count}
                </p>
              )}
            </>
          )}
        </div>
      </div>

      {caption && (
        <figcaption className="mx-auto mt-3 max-w-prose text-center text-xs font-normal leading-relaxed text-meta">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
