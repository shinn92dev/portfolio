import { ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router";
import { createSeoMeta } from "@/lib/seo";
import {
  profileContent as englishProfileContent,
  siteContent as englishSiteContent,
} from "@/contents/en";
import { usePortfolioContent } from "@/contexts/LanguageContext";

import type { Experience } from "@/contents/types";
import type { Route } from "./+types/profile";

export const meta = ({}: Route.MetaArgs) => {
  return createSeoMeta({
    title: `${englishProfileContent.pageTitle} — ${englishSiteContent.identity.displayName}`,
    description: englishProfileContent.pageDescription,
    path: "/profile",
  });
};

interface ExperienceListProps {
  experiences: Experience[];
  density: "primary" | "compact";
}

const ExperienceList = ({ experiences, density }: ExperienceListProps) => {
  const { siteContent } = usePortfolioContent();
  const isPrimary = density === "primary";

  return (
    <div className="border-border-strong border-t">
      {experiences.map((experience, experienceIndex) => (
        <article
          key={experience.id}
          className={
            isPrimary
              ? "layout-grid border-border gap-y-8 border-b py-10 sm:py-14 lg:py-18"
              : "layout-grid border-border gap-y-7 border-b py-8 sm:py-10"
          }
        >
          <header className="col-span-4 md:col-span-3 lg:col-span-4">
            <p className="metadata text-signal">
              {String(experienceIndex + 1).padStart(2, "0")}
            </p>

            <h3
              className={
                isPrimary
                  ? "subsection-title mt-4"
                  : "mt-4 text-xl leading-tight font-semibold"
              }
            >
              {experience.organization}
            </h3>

            {experience.organizationNote ? (
              <p className="text-foreground-muted mt-3 max-w-sm text-sm leading-relaxed">
                {experience.organizationNote}
              </p>
            ) : null}

            <p className="metadata mt-4">{experience.location}</p>

            {experience.relatedProjectSlugs?.length ? (
              <nav
                className="mt-5"
                aria-label={`${experience.organization} related work`}
              >
                <ul className="grid gap-2">
                  {experience.relatedProjectSlugs.map((slug) => (
                    <li key={slug}>
                      <Link
                        to={`/work/${slug}`}
                        viewTransition
                        className="text-link text-sm"
                      >
                        {siteContent.work.viewCaseStudyLabel}
                        <ArrowUpRight aria-hidden="true" className="size-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}
          </header>

          <div className="col-span-4 md:col-span-5 lg:col-span-7 lg:col-start-6">
            <div className="grid gap-10">
              {experience.roles.map((role, roleIndex) => (
                <section
                  key={`${experience.id}-${role.title}-${role.period}`}
                  className={
                    roleIndex > 0 ? "border-border border-t pt-8" : undefined
                  }
                >
                  <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-8">
                    <h4
                      className={
                        isPrimary
                          ? "text-xl font-semibold sm:text-2xl"
                          : "text-lg font-semibold"
                      }
                    >
                      {role.title}
                    </h4>

                    <p className="metadata sm:text-right">{role.period}</p>
                  </div>

                  {role.summary ? (
                    <p className="body-copy mt-5">{role.summary}</p>
                  ) : null}

                  <ul className="mt-6 grid gap-4">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-foreground-muted grid grid-cols-[0.75rem_1fr] gap-4 text-sm leading-relaxed sm:text-base"
                      >
                        <span
                          aria-hidden="true"
                          className="bg-signal mt-[0.65em] size-1.5"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

const Profile = () => {
  const { profileContent, siteContent } = usePortfolioContent();
  const softwareExperience = profileContent.experiences.filter(
    (experience) => experience.category === "software-product",
  );

  const earlierExperience = profileContent.experiences.filter(
    (experience) => experience.category === "earlier",
  );

  return (
    <div>
      <header className="layout-shell pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-28">
        <div className="layout-grid gap-y-10">
          <div className="col-span-4 md:col-span-2 lg:col-span-3">
            <p className="eyebrow text-signal">
              {siteContent.identity.fullName}
            </p>
            <p className="metadata mt-4">{siteContent.identity.location}</p>
          </div>

          <div className="col-span-4 md:col-span-6 lg:col-span-8 lg:col-start-5">
            <h1 className="page-title">{profileContent.pageTitle}</h1>

            <p className="lead-text mt-7">{profileContent.pageDescription}</p>

            <a
              href={siteContent.resume.href}
              download
              className="text-link mt-8"
            >
              {siteContent.resume.label}
              <Download aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </header>

      <section
        aria-labelledby="introduction-heading"
        className="section-rule section-space"
      >
        <div className="layout-shell">
          <div className="layout-grid gap-y-10">
            <header className="col-span-4 md:col-span-3 lg:col-span-4">
              <p className="eyebrow text-signal">Background</p>
              <h2 id="introduction-heading" className="section-title mt-5">
                {profileContent.introductionTitle}
              </h2>
            </header>

            <div className="col-span-4 md:col-span-5 lg:col-span-7 lg:col-start-6">
              <div className="grid gap-7">
                {profileContent.introduction.map((paragraph, index) => (
                  <div
                    key={paragraph}
                    className="border-border grid grid-cols-[2rem_1fr] gap-4 border-t pt-5"
                  >
                    <p className="metadata text-signal">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="body-copy">{paragraph}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="values-heading"
        className="section-rule section-space"
      >
        <div className="layout-shell">
          <div className="layout-grid gap-y-10">
            <header className="col-span-4 md:col-span-3 lg:col-span-4">
              <p className="eyebrow text-signal">Principles</p>
              <h2 id="values-heading" className="section-title mt-5">
                {profileContent.valuesTitle}
              </h2>
            </header>

            <div className="col-span-4 md:col-span-5 lg:col-span-7 lg:col-start-6">
              <ol className="border-border-strong border-t">
                {profileContent.values.map((value, index) => (
                  <li
                    key={value.title}
                    className="border-border grid gap-4 border-b py-7 sm:grid-cols-[3rem_1fr]"
                  >
                    <p className="metadata text-signal">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <div>
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                      <p className="body-copy mt-3">{value.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="software-experience-heading"
        className="section-rule section-space"
      >
        <div className="layout-shell">
          <header className="layout-grid gap-y-6 pb-10 sm:pb-14">
            <div className="col-span-4 md:col-span-3 lg:col-span-4">
              <p className="eyebrow text-signal">Selected chronology</p>
            </div>

            <div className="col-span-4 md:col-span-5 lg:col-span-7 lg:col-start-6">
              <h2 id="software-experience-heading" className="section-title">
                {profileContent.softwareExperienceTitle}
              </h2>

              <p className="body-copy mt-6">
                Product delivery across independent full-stack development,
                contracted mobile work, and an industry practicum.
              </p>
            </div>
          </header>

          <ExperienceList experiences={softwareExperience} density="primary" />
        </div>
      </section>

      <section
        aria-labelledby="earlier-experience-heading"
        className="section-rule section-space"
      >
        <div className="layout-shell">
          <header className="layout-grid gap-y-6 pb-10 sm:pb-14">
            <div className="col-span-4 md:col-span-3 lg:col-span-4">
              <p className="eyebrow text-signal">Professional foundation</p>
            </div>

            <div className="col-span-4 md:col-span-5 lg:col-span-7 lg:col-start-6">
              <h2 id="earlier-experience-heading" className="section-title">
                {profileContent.earlierExperienceTitle}
              </h2>

              <p className="body-copy mt-6">
                Earlier roles that shaped how I understand operational context,
                translate technical requirements, and work across teams and
                cultures.
              </p>
            </div>
          </header>

          <ExperienceList experiences={earlierExperience} density="compact" />
        </div>
      </section>

      <section
        aria-labelledby="capabilities-heading"
        className="section-rule section-space"
      >
        <div className="layout-shell">
          <div className="layout-grid gap-y-12">
            <header className="col-span-4 md:col-span-3 lg:col-span-4">
              <p className="eyebrow text-signal">Working range</p>
              <h2 id="capabilities-heading" className="section-title mt-5">
                {profileContent.capabilitiesTitle}
              </h2>
            </header>

            <div className="col-span-4 md:col-span-5 lg:col-span-7 lg:col-start-6">
              <div className="border-border-strong grid border-t sm:grid-cols-2">
                {profileContent.capabilities.map((group) => (
                  <section
                    key={group.title}
                    className="border-border border-b py-6 sm:odd:pr-6 sm:even:border-l sm:even:pl-6"
                  >
                    <h3 className="text-lg font-semibold">{group.title}</h3>

                    <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="technical-text text-foreground-muted"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="languages-heading" className="section-rule">
        <div className="layout-shell py-12 sm:py-16">
          <div className="layout-grid gap-y-8">
            <h2
              id="languages-heading"
              className="eyebrow text-signal col-span-4 md:col-span-2 lg:col-span-3"
            >
              {profileContent.languagesTitle}
            </h2>

            <dl className="col-span-4 grid gap-6 sm:grid-cols-3 md:col-span-6 lg:col-span-8 lg:col-start-5">
              {profileContent.languages.map((language) => (
                <div
                  key={language.language}
                  className="border-border border-t pt-4"
                >
                  <dt className="font-semibold">{language.language}</dt>
                  <dd className="metadata mt-2">{language.proficiency}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="education-heading"
        className="section-rule section-space"
      >
        <div className="layout-shell">
          <div className="layout-grid gap-y-12">
            <header className="col-span-4 md:col-span-3 lg:col-span-4">
              <p className="eyebrow text-signal">Academic background</p>
              <h2 id="education-heading" className="section-title mt-5">
                {profileContent.educationTitle}
              </h2>
            </header>

            <div className="col-span-4 md:col-span-5 lg:col-span-7 lg:col-start-6">
              <div className="border-border-strong border-t">
                {profileContent.education.map((education) => (
                  <article
                    key={education.id}
                    className="border-border grid gap-4 border-b py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-8"
                  >
                    <div>
                      <h3 className="text-lg font-semibold">
                        {education.institution}
                      </h3>
                      <p className="text-foreground-muted mt-2 text-sm leading-relaxed">
                        {education.credential}
                      </p>

                      {education.note ? (
                        <p className="text-foreground-subtle mt-3 text-sm leading-relaxed">
                          {education.note}
                        </p>
                      ) : null}
                    </div>

                    <div className="sm:text-right">
                      <p className="metadata">{education.period}</p>
                      <p className="metadata mt-1">{education.location}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-border-strong bg-surface-strong border-y">
        <div className="layout-shell py-12 sm:py-16">
          <div className="layout-grid items-end gap-y-8">
            <div className="col-span-4 md:col-span-5 lg:col-span-7">
              <p className="eyebrow text-signal">Resume</p>
              <p className="subsection-title mt-4">
                A concise version of my experience and technical background.
              </p>
            </div>

            <div className="col-span-4 md:col-span-3 md:text-right lg:col-span-4 lg:col-start-9">
              <a href={siteContent.resume.href} download className="text-link">
                {siteContent.resume.label}
                <Download aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
