import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

import {
  additionalProjects,
  selectedProjects,
  siteContent,
} from "@/contents/en";
import { createSeoMeta } from "@/lib/seo";

import type { Project } from "@/contents/types";
import type { Route } from "./+types/work";

export const meta = ({}: Route.MetaArgs) => {
  return createSeoMeta({
    title: `Work — ${siteContent.identity.displayName}`,
    description: siteContent.work.pageDescription,
    path: "/work",
  });
};

interface SelectedProjectProps {
  project: Project;
  index: number;
}

const SelectedProject = ({ project, index }: SelectedProjectProps) => {
  const caseStudy = project.caseStudy;
  const visibleMetrics = project.metrics.slice(0, 2);
  const primaryDecision = caseStudy?.decisions[0];

  return (
    <article className="group border-border-strong border-t py-10 sm:py-14 lg:py-20">
      <div className="layout-grid gap-y-10">
        <div className="col-span-4 md:col-span-2 lg:col-span-2">
          <p className="metadata text-signal">
            {String(index + 1).padStart(2, "0")}
          </p>
          <p className="eyebrow mt-4">{project.eyebrow}</p>
        </div>

        <div className="col-span-4 md:col-span-6 lg:col-span-6">
          <h3 className="text-[clamp(2.75rem,6vw,6.75rem)] leading-[0.92] font-semibold tracking-[-0.06em]">
            <Link
              to={`/work/${project.slug}`}
              viewTransition
              className="decoration-signal no-underline decoration-2 underline-offset-[0.12em] hover:underline"
            >
              {project.title}
            </Link>
          </h3>

          <p className="body-copy mt-7">{project.summary}</p>

          {primaryDecision ? (
            <div className="border-signal mt-9 border-l-2 pl-5">
              <p className="eyebrow">{siteContent.work.decisionLabel}</p>
              <p className="text-foreground-muted mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">
                {primaryDecision.decision}
              </p>
            </div>
          ) : null}
        </div>

        <div className="col-span-4 md:col-span-8 lg:col-span-4">
          <div className="border-border bg-surface rounded-sm border p-6 sm:p-8">
            <p className="eyebrow">{siteContent.work.evidenceLabel}</p>

            <dl className="mt-6 grid gap-7">
              {visibleMetrics.map((metric) => (
                <div
                  key={`${metric.value}-${metric.label}`}
                  className="border-border border-t pt-5 first:border-0 first:pt-0"
                >
                  <dd className="text-[clamp(2.25rem,4vw,4.5rem)] leading-none font-semibold tracking-[-0.05em]">
                    {metric.value}
                  </dd>
                  <dt className="mt-3 text-sm font-medium">{metric.label}</dt>
                  {metric.detail ? (
                    <p className="text-foreground-muted mt-2 text-sm leading-relaxed">
                      {metric.detail}
                    </p>
                  ) : null}
                </div>
              ))}
            </dl>
          </div>
        </div>

        <dl className="border-border col-span-4 grid gap-6 border-t pt-6 sm:grid-cols-3 md:col-span-8 lg:col-span-10 lg:col-start-3">
          <div>
            <dt className="eyebrow">{siteContent.work.roleLabel}</dt>
            <dd className="mt-3 text-sm leading-relaxed font-medium">
              {project.role}
            </dd>
          </div>

          <div>
            <dt className="eyebrow">{siteContent.work.periodLabel}</dt>
            <dd className="metadata mt-3">{project.period}</dd>
          </div>

          <div>
            <dt className="eyebrow">{siteContent.work.statusLabel}</dt>
            <dd className="text-foreground-muted mt-3 text-sm leading-relaxed">
              {project.status}
            </dd>
          </div>
        </dl>

        <div className="col-span-4 md:col-span-8 lg:col-span-10 lg:col-start-3">
          <div className="border-border flex flex-col gap-7 border-t pt-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">{siteContent.work.technologyLabel}</p>
              <ul
                className="mt-4 flex flex-wrap gap-x-5 gap-y-2"
                aria-label={siteContent.work.technologyLabel}
              >
                {project.technologies.slice(0, 7).map((technology) => (
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
              className="text-link shrink-0"
            >
              {siteContent.work.viewCaseStudyLabel}
              <ArrowUpRight
                aria-hidden="true"
                className="duration-medium ease-emphasized size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

interface AdditionalProjectProps {
  project: Project;
  index: number;
}

const AdditionalProject = ({ project, index }: AdditionalProjectProps) => {
  const publicLinks = project.links.filter(
    (link) => link.availability === "available" && link.href,
  );

  return (
    <article className="layout-grid border-border gap-y-6 border-b py-8 sm:py-10">
      <div className="col-span-4 md:col-span-1 lg:col-span-1">
        <p className="metadata text-signal">
          {String(index + 1).padStart(2, "0")}
        </p>
      </div>

      <div className="col-span-4 md:col-span-3 lg:col-span-3">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3 className="subsection-title mt-3">{project.title}</h3>
      </div>

      <div className="col-span-4 md:col-span-4 lg:col-span-4">
        <p className="text-foreground-muted text-sm leading-relaxed sm:text-base">
          {project.summary}
        </p>
      </div>

      <dl className="col-span-4 grid grid-cols-2 gap-5 md:col-start-5 lg:col-span-3 lg:col-start-10">
        <div>
          <dt className="eyebrow">{siteContent.work.periodLabel}</dt>
          <dd className="metadata mt-3">{project.period}</dd>
        </div>

        <div>
          <dt className="eyebrow">{siteContent.work.roleLabel}</dt>
          <dd className="mt-3 text-sm leading-relaxed font-medium">
            {project.role}
          </dd>
        </div>
      </dl>

      {publicLinks.length > 0 ? (
        <nav
          className="col-span-4 md:col-start-5 lg:col-span-3 lg:col-start-10"
          aria-label={`${project.title} ${siteContent.work.projectLinksLabel}`}
        >
          <ul className="grid gap-2">
            {publicLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="text-link text-sm"
                >
                  {link.label}
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </article>
  );
};

const Work = () => {
  return (
    <div>
      <header className="layout-shell pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-28">
        <div className="layout-grid gap-y-8">
          <div className="col-span-4 md:col-span-2">
            <p className="eyebrow text-signal">
              {siteContent.work.pageEyebrow}
            </p>
            <p className="metadata mt-4">
              {selectedProjects.length + additionalProjects.length}{" "}
              {siteContent.work.projectCountLabel}
            </p>
          </div>

          <div className="col-span-4 md:col-span-6 lg:col-span-8 lg:col-start-5">
            <h1 className="page-title">{siteContent.work.pageTitle}</h1>
            <p className="lead-text mt-7">{siteContent.work.pageDescription}</p>
          </div>
        </div>
      </header>

      <section aria-labelledby="selected-work-heading" className="section-rule">
        <div className="layout-shell">
          <header className="layout-grid gap-y-6 py-12 sm:py-16">
            <div className="col-span-4 md:col-span-6 md:col-start-3 lg:col-span-8 lg:col-start-5">
              <h2 id="selected-work-heading" className="section-title">
                {siteContent.work.selectedTitle}
              </h2>
              <p className="lead-text mt-6">
                {siteContent.work.selectedDescription}
              </p>
            </div>
          </header>

          {selectedProjects.map((project, index) => (
            <SelectedProject
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="additional-work-heading"
        className="section-rule section-space"
      >
        <div className="layout-shell">
          <header className="layout-grid gap-y-6">
            <h2
              id="additional-work-heading"
              className="section-title col-span-4 md:col-span-5 lg:col-span-6"
            >
              {siteContent.work.additionalTitle}
            </h2>

            <p className="body-copy col-span-4 md:col-span-3 lg:col-span-4 lg:col-start-9">
              {siteContent.work.additionalDescription}
            </p>
          </header>

          <div className="border-border-strong mt-12 border-t lg:mt-16">
            {additionalProjects.map((project, index) => (
              <AdditionalProject
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="layout-shell pb-16 sm:pb-24">
        <Link to="/" className="text-link">
          Home
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </div>
  );
};

export default Work;
