import { Link } from "react-router";

import {
  additionalProjects,
  selectedProjects,
  siteContent,
} from "@/contents/en";

import type { Project } from "@/contents/types";
import type { Route } from "./+types/work";

export const meta = ({}: Route.MetaArgs) => {
  return [
    {
      title: `Work — ${siteContent.identity.displayName}`,
    },
    {
      name: "description",
      content: siteContent.work.pageDescription,
    },
  ];
};

interface ProjectListProps {
  projects: Project[];
  detailed: boolean;
}

const ProjectList = ({ projects, detailed }: ProjectListProps) => {
  return (
    <div className="mt-8 grid gap-10">
      {projects.map((project) => (
        <article key={project.slug}>
          <p>{project.eyebrow}</p>

          <h3 className="mt-2 text-3xl font-bold">
            {detailed ? (
              <Link to={`/work/${project.slug}`} viewTransition>
                {project.title}
              </Link>
            ) : (
              project.title
            )}
          </h3>

          <p className="mt-4 max-w-3xl">{project.summary}</p>

          <dl className="mt-5 grid gap-3 sm:grid-cols-3">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Period</dt>
              <dd>{project.period}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
          </dl>

          <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>

          {detailed ? (
            <Link
              className="mt-5 inline-block"
              to={`/work/${project.slug}`}
              viewTransition
            >
              {siteContent.work.viewCaseStudyLabel}
            </Link>
          ) : (
            <ul className="mt-5 flex flex-wrap gap-4">
              {project.links
                .filter((link) => link.availability === "available")
                .map((link) => (
                  <li key={`${project.slug}-${link.label}`}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
};

const Work = () => {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <header>
        <h1 className="text-5xl font-bold">{siteContent.work.pageTitle}</h1>
        <p className="mt-5 max-w-3xl">{siteContent.work.pageDescription}</p>
      </header>

      <section aria-labelledby="selected-work-heading" className="py-16">
        <h2 id="selected-work-heading" className="text-4xl font-bold">
          {siteContent.work.selectedTitle}
        </h2>
        <ProjectList projects={selectedProjects} detailed />
      </section>

      <section aria-labelledby="additional-work-heading" className="py-16">
        <h2 id="additional-work-heading" className="text-4xl font-bold">
          {siteContent.work.additionalTitle}
        </h2>
        <ProjectList projects={additionalProjects} detailed={false} />
      </section>
    </div>
  );
};

export default Work;
