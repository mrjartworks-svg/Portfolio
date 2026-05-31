"use client";

import { playgroundItems, playgroundMeta } from "@/data/playground";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { PlaygroundItem } from "@/types";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const aspectClasses = {
  square: "aspect-square",
  tall: "aspect-[3/4]",
  wide: "aspect-[16/10]",
};

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M10.5 3.5H5.25v1.75h3.08L3.5 9.17l1.24 1.24 4.83-4.83v3.08H10.5V3.5Z"
        fill="currentColor"
      />
      <path
        d="M11.667 11.667H2.333V2.333h3.5V.583H2.333c-.966 0-1.75.784-1.75 1.75v9.334c0 .966.784 1.75 1.75 1.75h9.334c.966 0 1.75-.784 1.75-1.75V8.167h-1.75v3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PlaygroundTile({
  item,
  onOpen,
}: {
  item: PlaygroundItem;
  onOpen: () => void;
}) {
  const aspect = item.aspect ?? "square";
  const cover = item.gallery?.[0];

  return (
    <button
      type="button"
      onClick={onOpen}
      className="playground-tile group mb-3 w-full break-inside-avoid overflow-hidden rounded-md border border-[color-mix(in_srgb,var(--text)_8%,transparent)] bg-[var(--bg-secondary)] text-left shadow-[0_1px_3px_rgba(17,17,17,0.04)] transition-[border-color,transform,box-shadow] duration-300 hover:border-[color-mix(in_srgb,var(--text)_12%,transparent)] hover:shadow-[0_4px_16px_rgba(17,17,17,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
    >
      <div className={cn("relative overflow-hidden", aspectClasses[aspect])}>
        {cover?.src ? (
          <div
            className="absolute inset-0 origin-center"
            style={
              cover.coverScale
                ? { transform: `scale(${cover.coverScale})` }
                : undefined
            }
          >
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              unoptimized
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
              style={{ objectPosition: cover.objectPosition ?? "center" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[var(--bg-secondary)] p-6 transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:group-hover:scale-100">
            <span className="text-[0.625rem] uppercase tracking-[0.12em] text-[var(--accent-muted)]">
              {item.category}
            </span>
            <span className="text-center font-display text-sm text-[var(--text-muted)]">
              {item.title}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg)]/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="border-t border-[var(--border)] px-4 py-3">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-display text-sm text-[var(--text)]">{item.title}</span>
          <span className="shrink-0 text-[0.6875rem] tabular-nums text-[var(--text-muted)]">
            {item.year}
          </span>
        </div>
        <span className="mt-1 block text-[0.6875rem] uppercase tracking-[0.08em] text-[var(--accent-muted)]">
          {item.category}
        </span>
      </div>
    </button>
  );
}

function PlaygroundModal({
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  item: PlaygroundItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const gallery = item.gallery ?? [{ alt: item.title }];
  const current = gallery[imageIndex] ?? gallery[0];

  useEffect(() => {
    setImageIndex(0);
    closeRef.current?.focus();
  }, [item.slug]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "ArrowLeft") {
        if (gallery.length > 1) {
          setImageIndex((i) => (i - 1 + gallery.length) % gallery.length);
        } else if (hasPrev) {
          onPrev();
        }
        return;
      }
      if (event.key === "ArrowRight") {
        if (gallery.length > 1) {
          setImageIndex((i) => (i + 1) % gallery.length);
        } else if (hasNext) {
          onNext();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [gallery.length, hasNext, hasPrev, onClose, onNext, onPrev]);

  return (
    <div
      className="playground-modal fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="playground-modal-title"
    >
      <button
        type="button"
        className="playground-modal-backdrop absolute inset-0 bg-[var(--bg)]/80 backdrop-blur-md"
        aria-label="Close gallery"
        onClick={onClose}
      />

      <div className="playground-modal-panel relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-lg border border-[color-mix(in_srgb,var(--text)_10%,transparent)] bg-[var(--bg)] shadow-2xl sm:rounded-lg">
        <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <p className="text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--accent-muted)]">
              {item.category} · {item.year}
            </p>
            <h2
              id="playground-modal-title"
              className="mt-1 truncate font-display text-xl text-[var(--text)]"
            >
              {item.title}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="playground-modal-close shrink-0 rounded-md border border-[color-mix(in_srgb,var(--text)_8%,transparent)] px-3 py-1.5 text-xs text-[var(--text-secondary)] transition-colors hover:border-[color-mix(in_srgb,var(--text)_12%,transparent)] hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            Close
          </button>
        </div>

        <div className="overflow-y-auto">
          <div className="relative aspect-[16/10] bg-[var(--bg-secondary)] sm:aspect-[16/9]">
            {current?.src ? (
              <Image
                src={current.src}
                alt={current.alt}
                fill
                unoptimized
                className="object-contain"
                sizes="896px"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8">
                <span className="text-[0.6875rem] uppercase tracking-[0.12em] text-[var(--accent-muted)]">
                  Archive
                </span>
                <span className="max-w-sm text-center font-display text-lg text-[var(--text-muted)]">
                  {current?.alt ?? item.title}
                </span>
              </div>
            )}

            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setImageIndex((i) => (i - 1 + gallery.length) % gallery.length)
                  }
                  className="playground-modal-nav absolute left-3 top-1/2 -translate-y-1/2 rounded-md border border-[color-mix(in_srgb,var(--text)_8%,transparent)] bg-[var(--bg)]/90 px-2.5 py-2 text-xs text-[var(--text-secondary)] backdrop-blur-sm transition-colors hover:text-[var(--text)]"
                  aria-label="Previous image"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => setImageIndex((i) => (i + 1) % gallery.length)}
                  className="playground-modal-nav absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-[color-mix(in_srgb,var(--text)_8%,transparent)] bg-[var(--bg)]/90 px-2.5 py-2 text-xs text-[var(--text-secondary)] backdrop-blur-sm transition-colors hover:text-[var(--text)]"
                  aria-label="Next image"
                >
                  Next
                </button>
                <p className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-md bg-[var(--bg)]/90 px-2 py-0.5 text-[0.6875rem] tabular-nums text-[var(--text-muted)] backdrop-blur-sm">
                  {imageIndex + 1} / {gallery.length}
                </p>
              </>
            )}
          </div>

          <div className="space-y-5 px-5 py-6 sm:px-8">
            <p className="max-w-prose text-sm leading-[1.85] text-[var(--text-secondary)]">
              {item.description}
            </p>

            {item.links && item.links.length > 0 && (
              <ul className="flex flex-wrap gap-3">
                {item.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--accent)] link-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {gallery.length > 1 && (
              <div className="playground-modal-thumbs grid grid-cols-4 gap-2 sm:grid-cols-6">
                {gallery.map((image, index) => (
                  <button
                    key={`${image.alt}-${index}`}
                    type="button"
                    onClick={() => setImageIndex(index)}
                    className={cn(
                      "relative aspect-square overflow-hidden rounded-md border bg-[var(--bg-secondary)] transition-colors",
                      index === imageIndex
                        ? "border-[var(--text-secondary)]"
                        : "border-[var(--border)] hover:border-[var(--ui-border-strong)]"
                    )}
                    aria-label={`View image ${index + 1}`}
                    aria-current={index === imageIndex}
                  >
                    {image.src ? (
                      <Image
                        src={image.src}
                        alt=""
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="80px"
                      />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center p-1 text-[0.5rem] text-[var(--text-muted)]">
                        {index + 1}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlaygroundGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex !== null ? playgroundItems[activeIndex] : null;

  const close = useCallback(() => setActiveIndex(null), []);
  const goPrev = useCallback(() => {
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + playgroundItems.length) % playgroundItems.length
    );
  }, []);
  const goNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % playgroundItems.length));
  }, []);

  return (
    <>
      <Section className="pt-28 pb-section-sm">
        <Container>
          <FadeIn>
            <Label>Playground</Label>
            <h1 className="mt-4 max-w-3xl font-display text-display-lg text-[var(--text)]">
              {playgroundMeta.headline}
            </h1>
            <Button
              href={playgroundMeta.behanceUrl}
              external
              variant="secondary"
              className="mt-6 gap-2"
            >
              View on Behance
              <ExternalLinkIcon />
            </Button>
          </FadeIn>
        </Container>
      </Section>

      <Section size="sm" className="pt-0 pb-section">
        <Container>
          <FadeIn>
            <div className="playground-masonry columns-1 gap-3 sm:columns-2 lg:columns-3">
              {playgroundItems.map((item, index) => (
                <PlaygroundTile
                  key={item.slug}
                  item={item}
                  onOpen={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {activeItem && activeIndex !== null && (
        <PlaygroundModal
          item={activeItem}
          onClose={close}
          onPrev={goPrev}
          onNext={goNext}
          hasPrev={playgroundItems.length > 1}
          hasNext={playgroundItems.length > 1}
        />
      )}
    </>
  );
}
