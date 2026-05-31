"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const ROTATING_PHRASES = [
  "enterprise workflows.",
  "complex operations.",
  "AI-assisted experiences.",
  "Security.",
] as const;

const INTERVAL_MS = 3000;

const longestPhrase = ROTATING_PHRASES.reduce((a, b) =>
  a.length > b.length ? a : b
);

const phraseTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function RotatingHeadline() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const currentPhrase = useMemo(() => ROTATING_PHRASES[index], [index]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <>
      <span className="hero-headline-row text-[var(--text)]">
        Designing thoughtful
      </span>
      <span className="hero-headline-row text-[var(--text)]">
        systems for
      </span>

      <span
        className="hero-headline-row hero-rotate-slot"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="invisible block text-[var(--accent)]" aria-hidden>
          {longestPhrase}
        </span>

        {prefersReducedMotion || !mounted ? (
          <span className="hero-rotate-active text-[var(--accent)]">
            {ROTATING_PHRASES[index]}
          </span>
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={currentPhrase}
              initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
              transition={phraseTransition}
              className="hero-rotate-active text-[var(--accent)]"
            >
              {currentPhrase}
            </motion.span>
          </AnimatePresence>
        )}
      </span>
    </>
  );
}
