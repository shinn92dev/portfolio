import {
  CaseStudyArchitecture,
  CaseStudyComparison,
  CaseStudyProductFlow,
} from "./CaseStudyPrimitives";

import type { ProjectCaseStudyVisual } from "@/contents/types";

interface CaseStudyVisualsProps {
  visuals: ProjectCaseStudyVisual[];
}

interface ComparisonListProps {
  items: string[];
  accent?: boolean;
}

const ComparisonList = ({ items, accent = false }: ComparisonListProps) => {
  return (
    <ol className="grid">
      {items.map((item, index) => (
        <li
          key={item}
          className="border-image-border grid grid-cols-[2rem_1fr] gap-3 border-b px-5 py-5 last:border-b-0"
        >
          <span
            className={
              accent
                ? "metadata text-signal"
                : "metadata text-foreground-subtle"
            }
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ol>
  );
};

export const CaseStudyVisuals = ({ visuals }: CaseStudyVisualsProps) => {
  return (
    <div className="mt-14 grid gap-16 sm:mt-18 lg:mt-24 lg:gap-24">
      {visuals.map((visual, index) => (
        <section
          key={`${visual.kind}-${visual.title}`}
          aria-labelledby={`case-study-visual-${index}`}
        >
          <header className="mb-7 grid gap-3 md:grid-cols-[3rem_1fr]">
            <p className="metadata text-signal">
              V{String(index + 1).padStart(2, "0")}
            </p>

            <div>
              <h3
                id={`case-study-visual-${index}`}
                className="text-xl leading-tight font-semibold tracking-[-0.025em] sm:text-2xl"
              >
                {visual.title}
              </h3>

              {visual.description ? (
                <p className="text-foreground-muted mt-3 max-w-2xl text-sm leading-relaxed">
                  {visual.description}
                </p>
              ) : null}
            </div>
          </header>

          {visual.kind === "flow" ? (
            <CaseStudyProductFlow
              ariaLabel={visual.ariaLabel}
              steps={visual.steps}
            />
          ) : null}

          {visual.kind === "architecture" ? (
            <CaseStudyArchitecture
              ariaLabel={visual.ariaLabel}
              layers={visual.layers}
            />
          ) : null}

          {visual.kind === "comparison" ? (
            <CaseStudyComparison
              beforeLabel={visual.beforeLabel}
              afterLabel={visual.afterLabel}
              before={<ComparisonList items={visual.before} />}
              after={<ComparisonList items={visual.after} accent />}
              caption={visual.caption}
            />
          ) : null}
        </section>
      ))}
    </div>
  );
};
