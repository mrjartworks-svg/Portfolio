interface TeamMember {
  role: string;
  name?: string;
}

interface CaseStudyMetaBandProps {
  team: TeamMember[];
  duration: string;
  product: string;
}

export function CaseStudyMetaBand({
  team,
  duration,
  product,
}: CaseStudyMetaBandProps) {
  return (
    <div className="case-study-meta-band">
      <div className="case-study-meta-col">
        <p className="case-study-meta-label">Team</p>
        <ul className="mt-3 space-y-2">
          {team.map((member) => (
            <li
              key={`${member.role}-${member.name ?? "team"}`}
              className="case-study-meta-value"
            >
              {member.name && (
                <>
                  <span className="text-[var(--text)]">{member.name}</span>
                  <span className="text-meta"> · </span>
                </>
              )}
              {member.role}
            </li>
          ))}
        </ul>
      </div>
      <div className="case-study-meta-col">
        <p className="case-study-meta-label">Duration</p>
        <p className="case-study-meta-value mt-3">{duration}</p>
      </div>
      <div className="case-study-meta-col">
        <p className="case-study-meta-label">Product</p>
        <p className="case-study-meta-value mt-3">{product}</p>
      </div>
    </div>
  );
}
