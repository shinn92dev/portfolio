import type { ReactNode } from "react";

interface CaseStudySectionProps {
  id: string;
  index: number;
  title: string;
  children: ReactNode;
  wide?: boolean;
}

export const CaseStudySection = ({
  id,
  index,
  title,
  children,
  wide = false,
}: CaseStudySectionProps) => {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="border-t border-border py-14 sm:py-18 lg:py-24"
    >
      <div className="layout-grid gap-y-8">
        <header className="col-span-4 md:col-span-2 lg:col-span-3">
          <p className="metadata text-signal">
            {String(index).padStart(2, "0")}
          </p>
          <h2
            id={`${id}-heading`}
            className="subsection-title mt-4 max-w-[12ch]"
          >
            {title}
          </h2>
        </header>

        <div
          className={
            wide
              ? "col-span-4 md:col-span-6 lg:col-span-9"
              : "col-span-4 md:col-span-6 lg:col-span-7"
          }
        >
          {children}
        </div>
      </div>
    </section>
  );
};

interface CaseStudyFigureProps {
  children: ReactNode;
  caption: string;
  label?: string;
}

export const CaseStudyFigure = ({
  children,
  caption,
  label,
}: CaseStudyFigureProps) => {
  return (
    <figure>
      <div className="image-frame">{children}</div>

      <figcaption className="mt-4 grid gap-2 border-t border-border pt-4 sm:grid-cols-[auto_1fr] sm:gap-6">
        {label ? <span className="eyebrow text-signal">{label}</span> : null}
        <span className="max-w-3xl text-sm leading-relaxed text-foreground-muted">
          {caption}
        </span>
      </figcaption>
    </figure>
  );
};

interface CaseStudyComparisonProps {
  beforeLabel: string;
  afterLabel: string;
  before: ReactNode;
  after: ReactNode;
  caption?: string;
}

export const CaseStudyComparison = ({
  beforeLabel,
  afterLabel,
  before,
  after,
  caption,
}: CaseStudyComparisonProps) => {
  return (
    <figure>
      <div className="grid gap-px overflow-hidden rounded-sm border border-image-border bg-image-border md:grid-cols-2">
        <div className="bg-image">
          <p className="eyebrow border-b border-image-border px-5 py-4">
            {beforeLabel}
          </p>
          <div>{before}</div>
        </div>

        <div className="bg-image">
          <p className="eyebrow border-b border-image-border px-5 py-4 text-signal">
            {afterLabel}
          </p>
          <div>{after}</div>
        </div>
      </div>

      {caption ? (
        <figcaption className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
};

export interface ProductFlowStep {
  title: string;
  description: string;
}

interface CaseStudyProductFlowProps {
  ariaLabel: string;
  steps: ProductFlowStep[];
}

export const CaseStudyProductFlow = ({
  ariaLabel,
  steps,
}: CaseStudyProductFlowProps) => {
  return (
    <ol
      aria-label={ariaLabel}
      className="grid border-t border-border-strong md:grid-cols-2 lg:grid-cols-3"
    >
      {steps.map((step, index) => (
        <li
          key={`${index}-${step.title}`}
          className="border-b border-border py-6 md:px-6 md:first:pl-0 lg:border-r lg:last:border-r-0"
        >
          <p className="metadata text-signal">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
};

export interface ArchitectureLayer {
  label: string;
  technologies: string[];
  description: string;
}

interface CaseStudyArchitectureProps {
  ariaLabel: string;
  layers: ArchitectureLayer[];
}

export const CaseStudyArchitecture = ({
  ariaLabel,
  layers,
}: CaseStudyArchitectureProps) => {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className="border-y border-border-strong"
    >
      {layers.map((layer, index) => (
        <div
          key={layer.label}
          className="grid gap-4 border-b border-border py-6 last:border-b-0 md:grid-cols-[1fr_2fr]"
        >
          <div>
            <p className="metadata text-signal">
              Layer {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-lg font-semibold">{layer.label}</h3>
          </div>

          <div>
            <p className="body-copy">{layer.description}</p>
            <ul
              className="mt-4 flex flex-wrap gap-x-5 gap-y-2"
              aria-label={`${layer.label} technologies`}
            >
              {layer.technologies.map((technology) => (
                <li
                  key={technology}
                  className="technical-text text-foreground-muted"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
