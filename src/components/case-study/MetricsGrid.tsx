import { FadeIn } from "@/components/ui/FadeIn";

interface Metric {
  label: string;
  value: string;
}

interface MetricsGridProps {
  metrics: Metric[];
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <FadeIn>
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3 my-10">
        {metrics.map(({ label, value }) => (
          <div
            key={label}
            className="rounded-md border border-[color-mix(in_srgb,var(--text)_8%,transparent)] bg-[var(--bg-secondary)] p-6 shadow-[0_1px_3px_rgba(17,17,17,0.04)]"
          >
            <dt className="text-xs uppercase tracking-wider text-[var(--accent)]">
              {label}
            </dt>
            <dd className="mt-2 font-display text-3xl tracking-tight text-[var(--text)]">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </FadeIn>
  );
}
