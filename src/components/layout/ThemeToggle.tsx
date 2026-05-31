"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="3.25" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M9 1.5v2M9 14.5v2M1.5 9h2M14.5 9h2M3.4 3.4l1.42 1.42M13.18 13.18l1.42 1.42M3.4 14.6l1.42-1.42M13.18 4.82l1.42-1.42"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M7.25 2.8a6.25 6.25 0 1 0 7.95 9.45A5.75 5.75 0 0 1 7.25 2.8Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-md opacity-0"
        aria-label="Toggle theme"
        tabIndex={-1}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group flex h-9 w-9 items-center justify-center rounded-md text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.span
        key={isDark ? "dark" : "light"}
        initial={prefersReducedMotion ? false : { opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.25 }}
        className="flex items-center justify-center"
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </motion.span>
    </button>
  );
}
