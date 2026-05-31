import {
  CaseStudyImage,
  type CaseStudyVisual,
} from "@/components/case-study/CaseStudyImage";

interface EditorialVisualBreakProps {
  visual: CaseStudyVisual;
}

export function EditorialVisualBreak({ visual }: EditorialVisualBreakProps) {
  return (
    <div className="case-study-visual-break" aria-hidden={!visual.caption}>
      <CaseStudyImage {...visual} layout={visual.layout ?? "full-bleed"} className="my-0" />
    </div>
  );
}
