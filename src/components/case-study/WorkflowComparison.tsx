import { cn } from "@/lib/utils";

interface WorkflowComparisonProps {
  beforeLabel: string;
  afterLabel: string;
  beforeSteps: string[];
  afterSteps: string[];
  impact?: string;
  emphasize?: boolean;
}

export function WorkflowComparison({
  beforeLabel,
  afterLabel,
  beforeSteps,
  afterSteps,
  impact,
  emphasize = false,
}: WorkflowComparisonProps) {
  return (
    <div
      className={cn(
        "case-study-workflow-compare",
        emphasize && "case-study-workflow-compare--transform"
      )}
    >
      <div className="case-study-workflow-col case-study-workflow-col--before">
        <div className="case-study-workflow-col-head">
          <p className="case-study-workflow-label">{beforeLabel}</p>
          <span className="case-study-workflow-count">{beforeSteps.length} steps</span>
        </div>
        <ol className="mt-5 space-y-2.5">
          {beforeSteps.map((step, index) => (
            <li key={step} className="case-study-workflow-step">
              <span className="case-study-workflow-num">{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {emphasize && (
        <div className="case-study-workflow-arrow" aria-hidden>
          <span className="case-study-workflow-arrow-line" />
          <span className="case-study-workflow-arrow-label">Simplified</span>
        </div>
      )}

      <div className="case-study-workflow-col case-study-workflow-col--highlight">
        <div className="case-study-workflow-col-head">
          <p className="case-study-workflow-label">{afterLabel}</p>
          <span className="case-study-workflow-count case-study-workflow-count--highlight">
            {afterSteps.length} phases
          </span>
        </div>
        <ol className="mt-5 space-y-3">
          {afterSteps.map((step, index) => (
            <li key={step} className="case-study-workflow-step case-study-workflow-step--highlight">
              <span className="case-study-workflow-num">{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {impact && <p className="case-study-workflow-impact">{impact}</p>}
    </div>
  );
}
