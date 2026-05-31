import { cn } from "@/lib/utils";

interface ProjectScaleProps {
  level: 1 | 2 | 3;
  className?: string;
}

const SCALE_LABELS: Record<1 | 2 | 3, string> = {
  1: "Fragment",
  2: "Structure",
  3: "Monolith",
};

function StrataMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 5"
      width="12"
      height="5"
      className={cn("h-[5px] w-3 shrink-0", className)}
      aria-hidden
    >
      <path
        d="M1 4V1.25"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M1 4H11"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ProjectScale({ level, className }: ProjectScaleProps) {
  const label = SCALE_LABELS[level];

  return (
    <p
      className={cn(
        "text-meta flex items-center gap-2.5 text-sm tracking-[0.01em]",
        className
      )}
      aria-label={`${label}, systems scale`}
    >
      <span>{label}</span>
      <span
        className="inline-flex items-center gap-[6px] text-meta opacity-[0.62]"
        aria-hidden
      >
        {Array.from({ length: level }, (_, i) => (
          <StrataMark key={i} />
        ))}
      </span>
    </p>
  );
}
