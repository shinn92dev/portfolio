import { Link, useLoaderData } from "react-router";

import { getProjectBySlug, siteContent } from "@/contents/en";

import type { Route } from "./+types/work-detail";

export const loader = ({ params }: Route.LoaderArgs) => {
  const project = getProjectBySlug(params.slug);
  const caseStudy = project?.caseStudy;

  if (!project || project.tier !== "selected" || !caseStudy) {
    throw new Response("Project not found.", {
      status: 404,
      statusText: "Project Not Found",
    });
  }

  return {
    project,
    caseStudy,
  };
};

export const meta = ({ data }: Route.MetaArgs) => {
  if (!data) {
    return [
      {
        title: `Project not found — ${siteContent.identity.displayName}`,
      },
    ];
  }

  return [
    {
      title: `${data.project.title} — ${siteContent.identity.displayName}`,
    },
    {
      name: "description",
      content: data.project.summary,
    },
  ];
};

const WorkDetail = () => {
  const { project, caseStudy } = useLoaderData<typeof loader>();
  return (
    <article className="px-4 py-16 sm:px-6 lg:px-8">
      <Link to="/work" viewTransition>
        ← {siteContent.caseStudy.backLabel}
      </Link>
      <header className="py-12">
        <p>{project.eyebrow}</p>
        <h1 className="mt-3 text-5xl font-bold">{project.title}</h1>
        <p className="mt-6 max-w-3xl text-xl">{project.summary}</p>

        <dl className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>{project.team}</dd>
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
      </header>

      {project.metrics.length > 0 ? (
        <section aria-label="Project outcomes" className="py-10">
          <dl className="grid gap-8 md:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={`${metric.value}-${metric.label}`}>
                <dt>{metric.label}</dt>
                <dd className="mt-2 text-3xl font-bold">{metric.value}</dd>
                {metric.detail ? <p className="mt-3">{metric.detail}</p> : null}
                {metric.attribution ? (
                  <p className="mt-2">{metric.attribution}</p>
                ) : null}
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      <section aria-labelledby="context-heading" className="py-12">
        <h2 id="context-heading" className="text-3xl font-bold">
          {siteContent.caseStudy.contextTitle}
        </h2>
        <div className="mt-6 grid gap-4">
          {caseStudy.context.map((paragraph) => (
            <p key={paragraph} className="max-w-3xl">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section aria-labelledby="users-heading" className="py-12">
        <h2 id="users-heading" className="text-3xl font-bold">
          {siteContent.caseStudy.usersTitle}
        </h2>
        <ul className="mt-6 grid gap-3">
          {caseStudy.users.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="responsibilities-heading" className="py-12">
        <h2 id="responsibilities-heading" className="text-3xl font-bold">
          {siteContent.caseStudy.responsibilitiesTitle}
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {caseStudy.responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="constraints-heading" className="py-12">
        <h2 id="constraints-heading" className="text-3xl font-bold">
          {siteContent.caseStudy.constraintsTitle}
        </h2>
        <ul className="mt-6 grid gap-3">
          {caseStudy.constraints.map((constraint) => (
            <li key={constraint}>{constraint}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="features-heading" className="py-12">
        <h2 id="features-heading" className="text-3xl font-bold">
          {siteContent.caseStudy.featuresTitle}
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {caseStudy.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="decisions-heading" className="py-12">
        <h2 id="decisions-heading" className="text-3xl font-bold">
          {siteContent.caseStudy.decisionsTitle}
        </h2>

        <div className="mt-8 grid gap-12">
          {caseStudy.decisions.map((decision) => (
            <article key={decision.title}>
              <h3 className="text-2xl font-bold">{decision.title}</h3>

              <div className="mt-5">
                <h4 className="font-bold">
                  {siteContent.caseStudy.decisionProblemLabel}
                </h4>
                <p className="mt-2 max-w-3xl">{decision.problem}</p>
              </div>

              <div className="mt-5">
                <h4 className="font-bold">
                  {siteContent.caseStudy.decisionOptionsLabel}
                </h4>
                <ul className="mt-2 grid gap-2">
                  {decision.options.map((option) => (
                    <li key={option}>{option}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <h4 className="font-bold">
                  {siteContent.caseStudy.decisionLabel}
                </h4>
                <p className="mt-2 max-w-3xl">{decision.decision}</p>
              </div>

              <div className="mt-5">
                <h4 className="font-bold">
                  {siteContent.caseStudy.decisionRationaleLabel}
                </h4>
                <p className="mt-2 max-w-3xl">{decision.rationale}</p>
              </div>

              <div className="mt-5">
                <h4 className="font-bold">
                  {siteContent.caseStudy.tradeoffsLabel}
                </h4>
                <ul className="mt-2 grid gap-2">
                  {decision.tradeoffs.map((tradeoff) => (
                    <li key={tradeoff}>{tradeoff}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="outcomes-heading" className="py-12">
        <h2 id="outcomes-heading" className="text-3xl font-bold">
          {siteContent.caseStudy.outcomesTitle}
        </h2>
        <ul className="mt-6 grid gap-3">
          {caseStudy.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="reflection-heading" className="py-12">
        <h2 id="reflection-heading" className="text-3xl font-bold">
          {siteContent.caseStudy.reflectionTitle}
        </h2>
        <div className="mt-6 grid gap-4">
          {caseStudy.reflection.map((paragraph) => (
            <p key={paragraph} className="max-w-3xl">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section aria-labelledby="technology-heading" className="py-12">
        <h2 id="technology-heading" className="text-3xl font-bold">
          {siteContent.caseStudy.technologyTitle}
        </h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="links-heading" className="py-12">
        <h2 id="links-heading" className="text-3xl font-bold">
          {siteContent.caseStudy.linksTitle}
        </h2>
        <ul className="mt-6 grid gap-3">
          {project.links.map((link) => (
            <li key={link.label}>
              {link.availability === "available" ? (
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ) : (
                <span>{link.label}</span>
              )}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default WorkDetail;
