"use client";

import {
  aboutBeyondWork,
  aboutInterestCards,
  aiTools,
  currentObsessions,
  deskObjects,
  designSoftware,
} from "@/data/about";
import type { ObjectListItem, ObjectToolItem } from "@/types";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import type { AboutInterestCard } from "@/types";
import Image from "next/image";
import { useCallback, useId, useState } from "react";

function GalleryGrid({ slots }: { slots: NonNullable<AboutInterestCard["gallery"]> }) {
  return (
    <div className="about-gallery-grid mt-8 grid gap-3 sm:grid-cols-3">
      {slots.map((slot) => {
        const imageBlock = (
          <div className="relative aspect-[4/3] bg-[var(--bg-secondary)]">
            {slot.src ? (
              <Image
                src={slot.src}
                alt={slot.alt ?? slot.title ?? slot.label}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 240px"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <span className="text-center text-[0.6875rem] leading-relaxed text-[var(--text-muted)]">
                  {slot.title ?? slot.label}
                </span>
              </div>
            )}
          </div>
        );

        return (
          <figure
            key={`${slot.title ?? ""}-${slot.label}`}
            className="about-gallery-slot overflow-hidden rounded-md border border-[color-mix(in_srgb,var(--text)_8%,transparent)] bg-[var(--bg)]"
          >
            {slot.href ? (
              <a
                href={slot.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-opacity duration-200 hover:opacity-90"
              >
                {imageBlock}
              </a>
            ) : (
              imageBlock
            )}
            <figcaption className="border-t border-[color-mix(in_srgb,var(--text)_6%,transparent)] px-3 py-2 text-[0.6875rem] leading-relaxed text-[var(--text-secondary)]">
              {slot.title ? (
                <>
                  {slot.href ? (
                    <a
                      href={slot.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text)] underline decoration-[color-mix(in_srgb,var(--text)_25%,transparent)] underline-offset-2 transition-colors hover:decoration-[var(--text)]"
                    >
                      {slot.title}
                    </a>
                  ) : (
                    <span className="text-[var(--text)]">{slot.title}</span>
                  )}
                  <span className="mt-0.5 block">{slot.label}</span>
                </>
              ) : (
                slot.label
              )}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}

function ObsessionsDashboard() {
  return (
    <dl className="obsessions-dashboard mt-2 grid gap-0 divide-y divide-[color-mix(in_srgb,var(--text)_6%,transparent)] overflow-hidden rounded-md border border-[color-mix(in_srgb,var(--text)_8%,transparent)] bg-[var(--bg)]">
      {currentObsessions.map((field) => (
        <div
          key={field.label}
          className="grid gap-1 px-4 py-3.5 sm:grid-cols-[minmax(9rem,11rem)_1fr] sm:gap-6 sm:py-4"
        >
          <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--accent-muted)]">
            {field.label}
          </dt>
          <dd className="text-sm leading-relaxed text-[var(--text)]">{field.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ToolsSubsection({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: ObjectToolItem[];
}) {
  return (
    <section>
      <h3 className="font-display text-base text-[var(--text)] sm:text-lg">{title}</h3>
      {subtitle && (
        <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)]">{subtitle}</p>
      )}
      <ToolsGrid items={items} className="mt-4" />
    </section>
  );
}

function ObjectsList({ items }: { items: ObjectListItem[] }) {
  return (
    <dl className="objects-list mt-4 divide-y divide-[color-mix(in_srgb,var(--text)_6%,transparent)] overflow-hidden rounded-md border border-[color-mix(in_srgb,var(--text)_8%,transparent)] bg-[var(--bg)]">
      {items.map((item) => (
        <div key={item.id} className="px-4 py-4 sm:px-5 sm:py-4">
          <dt className="font-display text-sm text-[var(--text)]">{item.name}</dt>
          <dd className="mt-1.5 text-sm leading-relaxed text-[var(--text-secondary)]">
            {item.note}
          </dd>
          {item.details && item.details.length > 0 && (
            <dd className="mt-2">
              <ul className="space-y-0.5 text-[0.8125rem] leading-relaxed text-[var(--text-muted)]">
                {item.details.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </dd>
          )}
        </div>
      ))}
    </dl>
  );
}

function ObjectsAndToolsPanel() {
  return (
    <div className="space-y-10">
      <ToolsSubsection
        title="Design software"
        subtitle="Where most of the work gets made."
        items={designSoftware}
      />
      <ToolsSubsection
        title="AI tools"
        subtitle="What I reach for when exploring, building, or thinking faster."
        items={aiTools}
      />
      <section>
        <h3 className="font-display text-base text-[var(--text)] sm:text-lg">Objects</h3>
        <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)]">
          The things on my desk and in my life.
        </p>
        <ObjectsList items={deskObjects} />
      </section>
    </div>
  );
}

function ToolsGrid({
  items,
  className,
}: {
  items: ObjectToolItem[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "tools-grid grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {items.map((item) => (
        <article
          key={item.id}
          className="overflow-hidden rounded-md border border-[color-mix(in_srgb,var(--text)_8%,transparent)] bg-[var(--bg)] shadow-[0_1px_2px_rgba(17,17,17,0.04)]"
        >
          <div className="relative aspect-square bg-[var(--bg-secondary)]">
            {item.src && item.logo ? (
              <div
                className="absolute inset-0 flex items-center justify-center p-6 sm:p-7"
                role="img"
                aria-label={item.alt ?? `${item.name} logo`}
              >
                <div
                  className="tool-logo-mark h-10 w-10 max-h-[42%] max-w-[42%] shrink-0 sm:h-11 sm:w-11"
                  style={{
                    maskImage: `url(${item.src})`,
                    WebkitMaskImage: `url(${item.src})`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />
              </div>
            ) : item.src ? (
              <Image
                src={item.src}
                alt={item.alt ?? item.name}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 250px"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <span className="text-center font-display text-sm font-medium tracking-tight text-[var(--text)]">
                  {item.name}
                </span>
              </div>
            )}
          </div>
          <div className="border-t border-[color-mix(in_srgb,var(--text)_6%,transparent)] px-3 py-3">
            <h3 className="font-display text-sm text-[var(--text)]">{item.name}</h3>
            <p className="mt-1 text-[0.8125rem] leading-relaxed text-[var(--text-secondary)]">
              {item.note}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

function InterestCard({
  card,
  isOpen,
  onToggle,
}: {
  card: AboutInterestCard;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();

  return (
    <div
      className={cn(
        "about-interest-card overflow-hidden rounded-lg border border-[color-mix(in_srgb,var(--text)_8%,transparent)] bg-[var(--bg)] shadow-[0_1px_3px_rgba(17,17,17,0.05)] transition-[border-color,box-shadow] duration-300",
        isOpen &&
          "about-interest-card--open border-[color-mix(in_srgb,var(--text)_12%,transparent)] shadow-[0_4px_20px_rgba(17,17,17,0.06)]"
      )}
    >
      <button
        type="button"
        className="about-interest-trigger flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="min-w-0">
          <span className="font-display text-lg text-[var(--text)] sm:text-xl">
            {card.title}
          </span>
          {!isOpen && (
            <span className="mt-1.5 block text-sm leading-relaxed text-[var(--text-secondary)]">
              {card.preview}
            </span>
          )}
        </span>
        <span
          className={cn(
            "about-interest-chevron mt-1 shrink-0 text-[var(--text-muted)] transition-transform duration-300",
            isOpen && "rotate-45 text-[var(--text)]"
          )}
          aria-hidden
        >
          +
        </span>
      </button>

      <div
        id={panelId}
        className={cn("about-interest-panel", isOpen && "about-interest-panel--open")}
        aria-hidden={!isOpen}
      >
        <div className="about-interest-panel-inner">
          <div className="border-t border-[color-mix(in_srgb,var(--text)_6%,transparent)] px-5 pb-6 pt-5 sm:px-6 sm:pb-8">
            {card.variant === "obsessions" ? (
              <ObsessionsDashboard />
            ) : card.variant === "objects" ? (
              <ObjectsAndToolsPanel />
            ) : (
              <>
                <div className="max-w-prose space-y-4 text-sm leading-[1.85] text-[var(--text-secondary)]">
                  {card.expanded.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
                {card.gallery && card.gallery.length > 0 && (
                  <GalleryGrid slots={card.gallery} />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutBeyondWorkSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = useCallback((id: string) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  return (
    <Section size="sm" className="bg-[var(--bg-secondary)]">
      <Container>
        <FadeIn>
          <Label>{aboutBeyondWork.headline}</Label>
          <p className="mt-3 mb-10 max-w-lg text-sm leading-relaxed text-[var(--text-secondary)]">
            {aboutBeyondWork.subheading}
          </p>
        </FadeIn>
        <div className="space-y-4">
          {aboutInterestCards.map((card, i) => (
            <FadeIn key={card.id} delay={i * 0.03}>
              <InterestCard
                card={card}
                isOpen={openId === card.id}
                onToggle={() => handleToggle(card.id)}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
