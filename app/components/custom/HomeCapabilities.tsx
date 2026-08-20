import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import { usePortfolioContent } from "@/contexts/LanguageContext";

const HomeCapabilities = () => {
  const { projects, siteContent } = usePortfolioContent();

  return (
    <section
      aria-labelledby="capabilities-heading"
      className="section-rule section-space"
    >
      <div className="layout-shell">
        <header className="layout-grid gap-y-6">
          <p className="eyebrow text-signal col-span-4 md:col-span-2">
            {siteContent.home.capabilityEyebrow}
          </p>

          <h2
            id="capabilities-heading"
            className="section-title col-span-4 md:col-span-6 lg:col-span-8 lg:col-start-5"
          >
            {siteContent.home.capabilityTitle}
          </h2>
        </header>

        <div className="border-border-strong mt-14 border-t lg:mt-20">
          {siteContent.home.capabilities.map((capability, index) => {
            const relatedProjects = capability.projectSlugs
              .map((slug) => projects.find((project) => project.slug === slug))
              .filter((project) => project !== undefined);

            return (
              <article
                key={capability.title}
                className="layout-grid border-border gap-y-7 border-b py-8 sm:py-10"
              >
                <div className="col-span-4 md:col-span-3 lg:col-span-4">
                  <p className="metadata text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="subsection-title mt-4">{capability.title}</h3>
                </div>

                <div className="col-span-4 md:col-span-5 lg:col-span-4">
                  <p className="body-copy">{capability.description}</p>

                  <div className="mt-6">
                    <p className="eyebrow">
                      {siteContent.home.capabilityEvidenceLabel}
                    </p>
                    <ul className="mt-4 grid gap-3">
                      {capability.evidence.map((evidence) => (
                        <li
                          key={evidence}
                          className="text-foreground-muted flex gap-3 text-sm leading-relaxed"
                        >
                          <span
                            aria-hidden="true"
                            className="bg-signal mt-[0.65em] size-1.5 shrink-0"
                          />
                          <span>{evidence}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <nav
                  className="col-span-4 md:col-start-4 lg:col-span-3 lg:col-start-10"
                  aria-label={`${capability.title} projects`}
                >
                  <ul className="grid gap-3">
                    {relatedProjects.map((project) => (
                      <li key={project.slug}>
                        <Link
                          to={`/work/${project.slug}`}
                          viewTransition
                          className="group/link border-border hover:border-signal hover:text-signal flex items-center justify-between gap-4 border-b py-3 text-sm font-medium no-underline transition-colors"
                        >
                          {project.shortTitle}
                          <ArrowRight
                            aria-hidden="true"
                            className="duration-medium ease-emphasized size-4 transition-transform group-hover/link:translate-x-1"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-end">
          <Link to="/profile" className="text-link">
            {siteContent.home.profileLinkLabel}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCapabilities;
