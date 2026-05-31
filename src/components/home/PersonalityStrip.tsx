"use client";

import { personalityItems } from "@/data/about";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { motion, useReducedMotion } from "framer-motion";

export function PersonalityStrip() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section size="sm">
      <Container>
        <FadeIn>
          <Label>Beyond work</Label>
          <p className="mt-3 mb-8 max-w-md text-sm text-[var(--text-secondary)]">
            The human side, curated and not performative.
          </p>
        </FadeIn>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible scrollbar-hide">
          {personalityItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="shrink-0 rounded-md border border-[color-mix(in_srgb,var(--text)_8%,transparent)] bg-[var(--bg-secondary)] px-5 py-4 min-w-[140px] sm:min-w-0 shadow-[0_1px_2px_rgba(17,17,17,0.04)]"
            >
              <p className="font-display text-sm text-[var(--text)]">{item.label}</p>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
