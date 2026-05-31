import { cn } from "@/lib/utils";

type VisualVariant = "workflow" | "nodes" | "spatial";

interface FeaturedProjectVisualProps {
  variant: VisualVariant;
  className?: string;
}

export function FeaturedProjectVisual({
  variant,
  className,
}: FeaturedProjectVisualProps) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden rounded-md bg-[var(--bg-secondary)]",
        className
      )}
      aria-hidden
    >
      <div className="absolute inset-0 opacity-[0.35] transition-opacity duration-500 group-hover:opacity-[0.45]">
        {variant === "workflow" && <WorkflowPattern />}
        {variant === "nodes" && <NodesPattern />}
        {variant === "spatial" && <SpatialPattern />}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)]/40 via-transparent to-transparent" />
    </div>
  );
}

function WorkflowPattern() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 800 500"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect x="80" y="180" width="120" height="64" rx="2" stroke="currentColor" strokeOpacity="0.2" className="text-[var(--text)]" />
      <rect x="340" y="140" width="120" height="64" rx="2" stroke="currentColor" strokeOpacity="0.25" className="text-[var(--text)]" />
      <rect x="340" y="280" width="120" height="64" rx="2" stroke="currentColor" strokeOpacity="0.2" className="text-[var(--text)]" />
      <rect x="600" y="210" width="120" height="64" rx="2" stroke="currentColor" strokeOpacity="0.3" className="text-[var(--text)]" />
      <path d="M200 212h120M460 172v40M460 280v-40M580 242h20" stroke="currentColor" strokeOpacity="0.15" className="text-[var(--text)]" />
      <path d="M460 212h80" stroke="currentColor" strokeOpacity="0.2" strokeDasharray="4 6" className="text-[var(--text)]" />
    </svg>
  );
}

function NodesPattern() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 800 500"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <circle cx="200" cy="250" r="6" fill="currentColor" fillOpacity="0.2" className="text-[var(--text)]" />
      <circle cx="400" cy="180" r="6" fill="currentColor" fillOpacity="0.25" className="text-[var(--text)]" />
      <circle cx="400" cy="320" r="6" fill="currentColor" fillOpacity="0.2" className="text-[var(--text)]" />
      <circle cx="600" cy="250" r="6" fill="currentColor" fillOpacity="0.3" className="text-[var(--text)]" />
      <path d="M206 250h188M400 186v128M406 250h188" stroke="currentColor" strokeOpacity="0.12" className="text-[var(--text)]" />
      <rect x="120" y="80" width="560" height="340" rx="2" stroke="currentColor" strokeOpacity="0.06" className="text-[var(--text)]" />
    </svg>
  );
}

function SpatialPattern() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 800 500"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <path d="M100 400L400 120L700 400" stroke="currentColor" strokeOpacity="0.15" className="text-[var(--text)]" />
      <path d="M160 400L400 160L640 400" stroke="currentColor" strokeOpacity="0.1" className="text-[var(--text)]" />
      <path d="M220 400L400 200L580 400" stroke="currentColor" strokeOpacity="0.08" className="text-[var(--text)]" />
      <line x1="400" y1="120" x2="400" y2="400" stroke="currentColor" strokeOpacity="0.12" className="text-[var(--text)]" />
      <line x1="100" y1="400" x2="700" y2="400" stroke="currentColor" strokeOpacity="0.1" className="text-[var(--text)]" />
    </svg>
  );
}
