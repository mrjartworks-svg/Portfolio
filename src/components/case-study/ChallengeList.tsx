interface ChallengeListProps {
  challenges: string[];
}

export function ChallengeList({ challenges }: ChallengeListProps) {
  return (
    <ul className="max-w-prose space-y-4">
      {challenges.map((challenge) => (
        <li
          key={challenge}
          className="flex gap-3 text-[1.0625rem] leading-[1.75] text-[var(--text-secondary)]"
        >
          <span className="shrink-0 text-meta tabular-nums" aria-hidden>
            ·
          </span>
          <span>{challenge}</span>
        </li>
      ))}
    </ul>
  );
}
