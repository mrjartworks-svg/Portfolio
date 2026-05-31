"use client";

import { navItems } from "@/data/navigation";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden
          />
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.4,
              ease,
            }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-[var(--bg)] px-6 py-8 shadow-2xl lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mb-12 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-md text-[var(--text)] transition-colors hover:bg-[var(--bg-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path
                    d="M5 5l10 10M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: prefersReducedMotion ? 0 : 0.05 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "block py-3 text-2xl font-display tracking-tight transition-colors",
                      pathname === item.href || pathname.startsWith(item.href + "/")
                        ? "text-[var(--text)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text)]"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
