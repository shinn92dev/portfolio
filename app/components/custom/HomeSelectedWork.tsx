import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

import { selectedProjects, siteContent } from "@/contents/en";

const formatProjectNumber = (index: number) => {
  return String(index + 1).padStart(2, "0");
};

const HomeSelectedWork = () => {
  return (
    <section
      aria-labelledby="selected-work-heading"
      className="section-rule section-space"
    >
      <div className="layout-shell">
        <header className="layout-grid gap-y-6">
          <p className="eyebrow text-signal col-span-4 md:col-span-2">
            {siteContent.home.selectedWorkEyebrow}
          </p>

          <div className="col-span-4 md:col-span-6 lg:col-span-8 lg:col-start-5">
            <h2 id="selected-work-heading" className="section-title">
              {siteContent.home.selectedWorkTitle}
            </h2>
            <p className="lead-text mt-6">
              {siteContent.home.selectedWorkDescription}
            </p>
          </div>
        </header>

        <div className="mt-16 grid gap-24 lg:mt-24 lg:gap-32">
          {selectedProjects.map((project, index) => {
            const caseStudy = project.caseStudy;

            if (!caseStudy) {
              return null;
            }

            const primaryMetric = project.metrics[0];
            const supportingMetric = project.metrics[1] ?? project.metrics[0];
            const isReversed = index % 2 === 1;

            return (
              <article
                key={project.slug}
                className="group border-border-strong border-t pt-5"
              >
                <div className="mb-8 flex items-start justify-between gap-6">
                  <p className="metadata text-signal">
                    {formatProjectNumber(index)}
                  </p>
                  <p className="metadata max-w-xs text-right">
                    {project.eyebrow}
                  </p>
                </div>

                <div className="layout-grid gap-y-10">
                  <div
                    className={[
                      "col-span-4 md:col-span-8 lg:col-span-7",
                      isReversed
                        ? "lg:col-start-6 lg:row-start-1"
                        : "lg:col-start-1",
                    ].join(" ")}
                  >
                    <Link
                      to={`/work/${project.slug}`}
                      viewTransition
                      className="block no-underline"
                    >
                      <div
                        className={[
                          "duration-medium ease-emphasized relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-sm border p-6 transition-[background-color,border-color,transform] group-hover:-translate-y-1 sm:min-h-[28rem] sm:p-9",
                          isReversed
                            ? "border-signal/30 bg-signal-soft"
                            : "border-foreground bg-foreground text-foreground-inverse",
                        ].join(" ")}
                      >
                        <div className="flex items-start justify-between gap-5">
                          <p
                            className={[
                              "eyebrow",
                              isReversed
                                ? "text-signal"
                                : "text-foreground-inverse/65",
                            ].join(" ")}
                          >
                            {siteContent.home.selectedWorkOutcomeLabel}
                          </p>

                          <ArrowUpRight
                            aria-hidden="true"
                            className={[
                              "duration-medium ease-emphasized size-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1",
                              isReversed
                                ? "text-signal"
                                : "text-foreground-inverse",
                            ].join(" ")}
                          />
                        </div>

                        {primaryMetric ? (
                          <div>
                            <p
                              className={[
                                "text-[clamp(3.5rem,9vw,8rem)] leading-none font-semibold tracking-[-0.065em]",
                                isReversed
                                  ? "text-foreground"
                                  : "text-foreground-inverse",
                              ].join(" ")}
                            >
                              {primaryMetric.value}
                            </p>
                            <p
                              className={[
                                "mt-4 max-w-md text-lg font-medium",
                                isReversed
                                  ? "text-foreground"
                                  : "text-foreground-inverse",
                              ].join(" ")}
                            >
                              {primaryMetric.label}
                            </p>
                            {primaryMetric.detail ? (
                              <p
                                className={[
                                  "mt-3 max-w-lg text-sm leading-relaxed",
                                  isReversed
                                    ? "text-foreground-muted"
                                    : "text-foreground-inverse/65",
                                ].join(" ")}
                              >
                                {primaryMetric.detail}
                              </p>
                            ) : null}
                          </div>
                        ) : (
                          <p
                            className={[
                              "max-w-xl text-3xl leading-tight font-medium",
                              isReversed
                                ? "text-foreground"
                                : "text-foreground-inverse",
                            ].join(" ")}
                          >
                            {project.summary}
                          </p>
                        )}

                        {supportingMetric &&
                        supportingMetric !== primaryMetric ? (
                          <div
                            className={[
                              "mt-10 flex items-end justify-between gap-5 border-t pt-5",
                              isReversed
                                ? "border-signal/30"
                                : "border-foreground-inverse/25",
                            ].join(" ")}
                          >
                            <p
                              className={[
                                "text-sm",
                                isReversed
                                  ? "text-foreground-muted"
                                  : "text-foreground-inverse/65",
                              ].join(" ")}
                            >
                              {supportingMetric.label}
                            </p>
                            <p
                              className={[
                                "text-right font-mono text-xl font-medium",
                                isReversed
                                  ? "text-foreground"
                                  : "text-foreground-inverse",
                              ].join(" ")}
                            >
                              {supportingMetric.value}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </Link>
                  </div>

                  <div
                    className={[
                      "col-span-4 md:col-span-8 lg:col-span-5",
                      isReversed
                        ? "lg:col-start-1 lg:row-start-1"
                        : "lg:col-start-8",
                    ].join(" ")}
                  >
                    <p className="eyebrow">
                      {siteContent.home.selectedWorkProductLabel}
                    </p>

                    <h3 className="mt-4 text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.055em]">
                      <Link
                        to={`/work/${project.slug}`}
                        viewTransition
                        className="decoration-signal no-underline decoration-2 underline-offset-8 hover:underline"
                      >
                        {project.title}
                      </Link>
                    </h3>

                    <p className="body-copy mt-7">{project.summary}</p>

                    <dl className="border-border mt-9 grid gap-6 border-t pt-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      <div>
                        <dt className="eyebrow">
                          {siteContent.home.selectedWorkUserLabel}
                        </dt>
                        <dd className="text-foreground-muted mt-3 text-sm leading-relaxed">
                          {caseStudy.users[0]}
                        </dd>
                      </div>

                      <div>
                        <dt className="eyebrow">
                          {siteContent.home.selectedWorkResponsibilityLabel}
                        </dt>
                        <dd className="mt-3 text-sm leading-relaxed font-medium">
                          {project.role}
                        </dd>
                      </div>

                      <div>
                        <dt className="eyebrow">
                          {siteContent.home.selectedWorkDecisionLabel}
                        </dt>
                        <dd className="text-foreground-muted mt-3 text-sm leading-relaxed">
                          {caseStudy.decisions[0]?.decision}
                        </dd>
                      </div>

                      <div>
                        <dt className="eyebrow">
                          {siteContent.home.selectedWorkStatusLabel}
                        </dt>
                        <dd className="text-foreground-muted mt-3 text-sm leading-relaxed">
                          {project.status}
                        </dd>
                      </div>
                    </dl>

                    <div className="border-border mt-8 border-t pt-5">
                      <p className="eyebrow">
                        {siteContent.home.selectedWorkTechnologyLabel}
                      </p>
                      <ul
                        className="mt-4 flex flex-wrap gap-x-4 gap-y-2"
                        aria-label={
                          siteContent.home.selectedWorkTechnologyLabel
                        }
                      >
                        {project.technologies.slice(0, 6).map((technology) => (
                          <li
                            key={technology}
                            className="technical-text text-foreground-muted"
                          >
                            {technology}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={`/work/${project.slug}`}
                      viewTransition
                      className="text-link mt-9"
                    >
                      {siteContent.work.viewCaseStudyLabel}
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeSelectedWork;
