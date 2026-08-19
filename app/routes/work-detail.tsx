import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link, useLoaderData } from "react-router";

import { CaseStudySection } from "@/components/custom/case-study/CaseStudyPrimitives";
import { getProjectBySlug, selectedProjects, siteContent } from "@/contents/en";

import type { Route } from "./+types/work-detail";

const CASE_STUDY_SECTIONS = [
  {
    id: "context",
    label: siteContent.caseStudy.contextTitle,
  },
  {
    id: "users",
    label: siteContent.caseStudy.usersTitle,
  },
  {
    id: "responsibilities",
    label: siteContent.caseStudy.responsibilitiesTitle,
  },
  {
    id: "constraints",
    label: siteContent.caseStudy.constraintsTitle,
  },
  {
    id: "features",
    label: siteContent.caseStudy.featuresTitle,
  },
  {
    id: "decisions",
    label: siteContent.caseStudy.decisionsTitle,
  },
  {
    id: "outcomes",
    label: siteContent.caseStudy.outcomesTitle,
  },
  {
    id: "reflection",
    label: siteContent.caseStudy.reflectionTitle,
  },
  {
    id: "technology",
    label: siteContent.caseStudy.technologyTitle,
  },
  {
    id: "links",
    label: siteContent.caseStudy.linksTitle,
  },
] as const;

export const loader = ({ params }: Route.LoaderArgs) => {
  const project = getProjectBySlug(params.slug);

  if (
    !project ||
    project.tier !== "selected" ||
    project.caseStudy === undefined
  ) {
    throw new Response("Project not found.", {
      status: 404,
      statusText: "Project Not Found",
    });
  }

  const currentProjectIndex = selectedProjects.findIndex(
    (selectedProject) => selectedProject.slug === project.slug,
  );

  const nextProject =
    selectedProjects[(currentProjectIndex + 1) % selectedProjects.length];

  return {
    project,
    caseStudy: project.caseStudy,
    nextProject,
  };
};

export const meta = ({ data }: Route.MetaArgs) => {
  if (!data) {
    return [
      {
        title: `Project not found — ${siteContent.identity.displayName}`,
      },
      {
        name: "robots",
        content: "noindex",
      },
    ];
  }

  const title = `${data.project.title} — ${siteContent.identity.displayName}`;

  return [
    {
      title,
    },
    {
      name: "description",
      content: data.project.summary,
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: data.project.summary,
    },
    {
      property: "og:type",
      content: "article",
    },
  ];
};

const WorkDetail = () => {
  const { project, caseStudy, nextProject } = useLoaderData<typeof loader>();

  const publicLinks = project.links.filter(
    (link) => link.availability === "available" && link.href,
  );

  const unavailableLinks = project.links.filter(
    (link) => link.availability !== "available" || !link.href,
  );

  return (
    <article>
      <header className="layout-shell pb-14 pt-12 sm:pb-18 sm:pt-16 lg:pb-24 lg:pt-20">
        <Link to="/work" viewTransition className="text-link text-sm">
          <ArrowLeft aria-hidden="true" className="size-4" />
          {siteContent.caseStudy.backLabel}
        </Link>

        <div className="layout-grid mt-14 gap-y-10 sm:mt-18 lg:mt-24">
          <div className="col-span-4 md:col-span-2 lg:col-span-3">
            <p className="eyebrow text-signal">{project.eyebrow}</p>
          </div>

          <div className="col-span-4 md:col-span-6 lg:col-span-8 lg:col-start-5">
            <h1 className="page-title">{project.title}</h1>
            <p className="lead-text mt-7">{project.summary}</p>
          </div>
        </div>

        <dl
          aria-label={siteContent.caseStudy.projectDetailsLabel}
          className="mt-14 grid gap-x-8 gap-y-7 border-y border-border-strong py-7 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
        >
          <div>
            <dt className="eyebrow">{siteContent.caseStudy.roleLabel}</dt>
            <dd className="mt-3 text-sm font-medium leading-relaxed">
              {project.role}
            </dd>
          </div>

          <div>
            <dt className="eyebrow">{siteContent.caseStudy.teamLabel}</dt>
            <dd className="mt-3 text-sm leading-relaxed text-foreground-muted">
              {project.team}
            </dd>
          </div>

          <div>
            <dt className="eyebrow">{siteContent.caseStudy.periodLabel}</dt>
            <dd className="metadata mt-3">{project.period}</dd>
          </div>

          <div>
            <dt className="eyebrow">{siteContent.caseStudy.statusLabel}</dt>
            <dd className="mt-3 text-sm leading-relaxed text-foreground-muted">
              {project.status}
            </dd>
          </div>
        </dl>
      </header>

      {project.metrics.length > 0 ? (
        <section
          aria-labelledby="project-outcomes-heading"
          className="bg-surface-strong"
        >
          <div className="layout-shell py-12 sm:py-16 lg:py-20">
            <p id="project-outcomes-heading" className="eyebrow text-signal">
              {siteContent.caseStudy.outcomesLabel}
            </p>

            <dl className="mt-8 grid gap-8 md:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  key={`${metric.value}-${metric.label}`}
                  className="border-t border-border-strong pt-5"
                >
                  <dd className="text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-none tracking-[-0.055em]">
                    {metric.value}
                  </dd>
                  <dt className="mt-4 text-sm font-semibold">{metric.label}</dt>

                  {metric.detail ? (
                    <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                      {metric.detail}
                    </p>
                  ) : null}

                  {metric.attribution ? (
                    <p className="metadata mt-4">{metric.attribution}</p>
                  ) : null}
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      <div className="layout-shell">
        <div className="lg:grid lg:grid-cols-12 lg:gap-[var(--grid-gap)]">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav
              aria-label={siteContent.caseStudy.sectionIndexLabel}
              className="sticky top-28 py-20"
            >
              <p className="eyebrow">
                {siteContent.caseStudy.sectionIndexLabel}
              </p>

              <ol className="mt-6 grid gap-3">
                {CASE_STUDY_SECTIONS.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group grid grid-cols-[2rem_1fr] gap-2 text-sm no-underline"
                    >
                      <span className="metadata transition-colors duration-fast group-hover:text-signal">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-foreground-muted transition-colors duration-fast group-hover:text-foreground">
                        {section.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="lg:col-span-9">
            <CaseStudySection
              id="context"
              index={1}
              title={siteContent.caseStudy.contextTitle}
            >
              <div className="reading-column grid gap-5">
                {caseStudy.context.map((paragraph) => (
                  <p key={paragraph} className="body-copy">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CaseStudySection>

            <CaseStudySection
              id="users"
              index={2}
              title={siteContent.caseStudy.usersTitle}
            >
              <ul className="reading-column grid border-t border-border">
                {caseStudy.users.map((user) => (
                  <li
                    key={user}
                    className="grid grid-cols-[0.75rem_1fr] gap-4 border-b border-border py-4 text-foreground-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.7em] size-1.5 bg-signal"
                    />
                    <span>{user}</span>
                  </li>
                ))}
              </ul>
            </CaseStudySection>

            <CaseStudySection
              id="responsibilities"
              index={3}
              title={siteContent.caseStudy.responsibilitiesTitle}
              wide
            >
              <ol className="grid border-t border-border md:grid-cols-2">
                {caseStudy.responsibilities.map((responsibility, index) => (
                  <li
                    key={responsibility}
                    className="grid grid-cols-[2rem_1fr] gap-3 border-b border-border py-4 md:odd:pr-6 md:even:border-l
                      md:even:pl-6"
                  >
                    <span className="metadata text-signal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed">
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ol>
            </CaseStudySection>

            <CaseStudySection
              id="constraints"
              index={4}
              title={siteContent.caseStudy.constraintsTitle}
            >
              <ul className="reading-column grid gap-5">
                {caseStudy.constraints.map((constraint) => (
                  <li
                    key={constraint}
                    className="border-l-2 border-signal pl-5 text-foreground-muted"
                  >
                    {constraint}
                  </li>
                ))}
              </ul>
            </CaseStudySection>

            <CaseStudySection
              id="features"
              index={5}
              title={siteContent.caseStudy.featuresTitle}
              wide
            >
              <ul className="grid gap-x-8 border-t border-border sm:grid-cols-2">
                {caseStudy.features.map((feature) => (
                  <li
                    key={feature}
                    className="border-b border-border py-4 text-sm leading-relaxed"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </CaseStudySection>

            <CaseStudySection
              id="decisions"
              index={6}
              title={siteContent.caseStudy.decisionsTitle}
              wide
            >
              <div className="grid gap-14 lg:gap-18">
                {caseStudy.decisions.map((decision, index) => (
                  <article
                    key={decision.title}
                    className="border-t border-border-strong pt-6"
                  >
                    <header className="grid gap-4 md:grid-cols-[3rem_1fr]">
                      <p className="metadata text-signal">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="subsection-title">{decision.title}</h3>
                    </header>

                    <dl className="mt-8 grid gap-7 md:ml-[4rem] md:grid-cols-2 md:gap-x-10">
                      <div className="md:col-span-2">
                        <dt className="eyebrow">
                          {siteContent.caseStudy.decisionProblemLabel}
                        </dt>
                        <dd className="body-copy mt-3">{decision.problem}</dd>
                      </div>

                      <div>
                        <dt className="eyebrow">
                          {siteContent.caseStudy.decisionOptionsLabel}
                        </dt>
                        <dd>
                          <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-foreground-muted">
                            {decision.options.map((option) => (
                              <li key={option}>— {option}</li>
                            ))}
                          </ul>
                        </dd>
                      </div>

                      <div>
                        <dt className="eyebrow text-signal">
                          {siteContent.caseStudy.decisionLabel}
                        </dt>
                        <dd className="mt-3 font-medium leading-relaxed">
                          {decision.decision}
                        </dd>
                      </div>

                      <div>
                        <dt className="eyebrow">
                          {siteContent.caseStudy.decisionRationaleLabel}
                        </dt>
                        <dd className="mt-3 text-sm leading-relaxed text-foreground-muted">
                          {decision.rationale}
                        </dd>
                      </div>

                      <div>
                        <dt className="eyebrow">
                          {siteContent.caseStudy.tradeoffsLabel}
                        </dt>
                        <dd>
                          <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-foreground-muted">
                            {decision.tradeoffs.map((tradeoff) => (
                              <li key={tradeoff}>— {tradeoff}</li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
            </CaseStudySection>

            <CaseStudySection
              id="outcomes"
              index={7}
              title={siteContent.caseStudy.outcomesTitle}
            >
              <ol className="reading-column grid border-t border-border">
                {caseStudy.outcomes.map((outcome, index) => (
                  <li
                    key={outcome}
                    className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-border py-5"
                  >
                    <span className="metadata text-signal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-foreground-muted">{outcome}</span>
                  </li>
                ))}
              </ol>
            </CaseStudySection>

            <CaseStudySection
              id="reflection"
              index={8}
              title={siteContent.caseStudy.reflectionTitle}
            >
              <div className="reading-column grid gap-5">
                {caseStudy.reflection.map((paragraph) => (
                  <p key={paragraph} className="body-copy">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CaseStudySection>

            <CaseStudySection
              id="technology"
              index={9}
              title={siteContent.caseStudy.technologyTitle}
            >
              <ul
                className="flex flex-wrap gap-x-6 gap-y-3"
                aria-label={siteContent.caseStudy.technologyTitle}
              >
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="technical-text border-b border-border pb-1 text-foreground-muted"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </CaseStudySection>

            <CaseStudySection
              id="links"
              index={10}
              title={siteContent.caseStudy.linksTitle}
            >
              <div className="reading-column">
                {publicLinks.length > 0 ? (
                  <ul className="grid gap-4">
                    {publicLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noreferrer" : undefined}
                          className="text-link"
                        >
                          {link.label}
                          {link.external ? (
                            <ArrowUpRight
                              aria-hidden="true"
                              className="size-4"
                            />
                          ) : null}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {unavailableLinks.length > 0 ? (
                  <ul className="mt-6 grid gap-3">
                    {unavailableLinks.map((link) => (
                      <li
                        key={link.label}
                        className="text-sm text-foreground-subtle"
                      >
                        {link.label}
                        <span className="metadata ml-2">
                          — {siteContent.caseStudy.unavailableLinkLabel}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </CaseStudySection>
          </div>
        </div>
      </div>

      <nav
        aria-label={siteContent.caseStudy.nextProjectLabel}
        className="border-t border-border-strong"
      >
        <Link
          to={`/work/${nextProject.slug}`}
          viewTransition
          className="group block no-underline"
        >
          <div className="layout-shell py-14 sm:py-18 lg:py-24">
            <p className="eyebrow text-signal">
              {siteContent.caseStudy.nextProjectLabel}
            </p>

            <div className="mt-5 flex items-end justify-between gap-8">
              <div>
                <p className="text-[clamp(2.5rem,6vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.055em]">
                  {nextProject.title}
                </p>
                <p className="body-copy mt-5">{nextProject.summary}</p>
              </div>

              <ArrowRight
                aria-hidden="true"
                className="hidden size-10 shrink-0 transition-transform duration-medium ease-emphasized group-hover:translate-x-2 sm:block"
              />
            </div>
          </div>
        </Link>
      </nav>
    </article>
  );
};

export default WorkDetail;
