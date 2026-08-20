import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import { usePortfolioContent } from "@/contexts/LanguageContext";

import type { Experience, HomeCareerEntry } from "@/contents/types";

interface CareerListProps {
  entries: HomeCareerEntry[];
  experiences: Experience[];
  roleLabel: string;
  periodLabel: string;
  prominent: boolean;
}

const CareerList = ({
  entries,
  experiences,
  roleLabel,
  periodLabel,
  prominent,
}: CareerListProps) => {
  return (
    <div className="border-border-strong border-t">
      {entries.map((entry, index) => {
        const experience = experiences.find(
          (item) => item.id === entry.experienceId,
        );

        if (!experience) {
          return null;
        }

        const primaryRole = experience.roles[0];

        return (
          <article
            key={entry.experienceId}
            className={[
              "layout-grid border-border gap-y-6 border-b",
              prominent ? "py-9 sm:py-12" : "py-7 sm:py-9",
            ].join(" ")}
          >
            <div className="col-span-4 md:col-span-3 lg:col-span-3">
              <p className="metadata text-signal">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3
                className={[
                  "mt-4 font-semibold tracking-[-0.035em]",
                  prominent
                    ? "text-2xl leading-tight sm:text-3xl"
                    : "text-xl leading-tight sm:text-2xl",
                ].join(" ")}
              >
                {experience.organization}
              </h3>

              {experience.organizationNote ? (
                <p className="metadata mt-3 max-w-xs">
                  {experience.organizationNote}
                </p>
              ) : null}
            </div>

            <div className="col-span-4 md:col-span-5 lg:col-span-5 lg:col-start-5">
              <p
                className={[
                  "leading-relaxed",
                  prominent
                    ? "text-foreground text-base sm:text-lg"
                    : "text-foreground-muted text-sm sm:text-base",
                ].join(" ")}
              >
                {entry.summary}
              </p>
            </div>

            <dl className="col-span-4 grid grid-cols-2 gap-5 md:col-start-4 lg:col-span-3 lg:col-start-10">
              <div>
                <dt className="eyebrow">{roleLabel}</dt>
                <dd className="mt-3 text-sm leading-relaxed font-medium">
                  {primaryRole?.title}
                </dd>
              </div>

              <div>
                <dt className="eyebrow">{periodLabel}</dt>
                <dd className="metadata mt-3">{primaryRole?.period}</dd>
              </div>
            </dl>
          </article>
        );
      })}
    </div>
  );
};

const HomeCareer = () => {
  const { profileContent, siteContent } = usePortfolioContent();

  return (
    <section
      aria-labelledby="career-heading"
      className="section-rule section-space"
    >
      <div className="layout-shell">
        <header className="layout-grid gap-y-7">
          <p className="eyebrow text-signal col-span-4 md:col-span-2">
            {siteContent.home.careerEyebrow}
          </p>

          <div className="col-span-4 md:col-span-6 lg:col-span-8 lg:col-start-5">
            <h2 id="career-heading" className="section-title">
              {siteContent.home.careerTitle}
            </h2>

            <p className="lead-text mt-7">
              {siteContent.home.careerIntroduction}
            </p>
          </div>
        </header>

        <div className="mt-16 lg:mt-24">
          <div className="layout-grid">
            <h3 className="eyebrow text-foreground col-span-4 mb-6 md:col-span-8 lg:col-span-3">
              {siteContent.home.softwareExperienceLabel}
            </h3>

            <div className="col-span-4 md:col-span-8 lg:col-span-9 lg:col-start-4">
              <CareerList
                entries={siteContent.home.softwareExperience}
                experiences={profileContent.experiences}
                roleLabel={siteContent.home.careerRoleLabel}
                periodLabel={siteContent.home.careerPeriodLabel}
                prominent
              />
            </div>
          </div>

          <div className="layout-grid mt-16 lg:mt-24">
            <h3 className="eyebrow text-foreground col-span-4 mb-6 md:col-span-8 lg:col-span-3">
              {siteContent.home.earlierExperienceLabel}
            </h3>

            <div className="col-span-4 md:col-span-8 lg:col-span-9 lg:col-start-4">
              <CareerList
                entries={siteContent.home.earlierExperience}
                experiences={profileContent.experiences}
                roleLabel={siteContent.home.careerRoleLabel}
                periodLabel={siteContent.home.careerPeriodLabel}
                prominent={false}
              />
            </div>
          </div>
        </div>

        <div className="layout-grid mt-14 lg:mt-20">
          <div className="border-signal col-span-4 border-l-2 pl-5 md:col-span-6 md:col-start-3 lg:col-span-6 lg:col-start-5">
            <p className="eyebrow">{siteContent.home.personalNoteLabel}</p>
            <p className="text-foreground-muted mt-4 text-lg leading-relaxed">
              {siteContent.home.personalNote}
            </p>

            <Link to="/profile" className="text-link mt-6">
              {siteContent.home.profileLinkLabel}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCareer;
