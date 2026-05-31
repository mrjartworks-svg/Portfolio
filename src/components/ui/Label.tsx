interface LabelProps {
  children: string;
}

export function Label({ children }: LabelProps) {
  return (
    <span className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--accent)]">
      {children}
    </span>
  );
}
