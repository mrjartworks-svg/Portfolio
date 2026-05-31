"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroAtmosphere() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="hero-atmosphere" aria-hidden>
      <motion.div
        className="hero-orb hero-orb-a"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 18, -12, 0],
                y: [0, -14, 10, 0],
              }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 24, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        className="hero-orb hero-orb-b"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, -22, 14, 0],
                y: [0, 12, -18, 0],
              }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 28, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        className="hero-orb hero-orb-c"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 12, -10, 0],
                y: [0, 20, -14, 0],
              }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 32, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <div className="hero-atmosphere-vignette" />
    </div>
  );
}
