import { profileContent, siteContent } from "@/contents/en";

import type { Experience } from "@/contents/types";
import type { Route } from "./+types/profile";

export const meta = ({}: Route.MetaArgs) => {
  return [
    {
      title: `${profileContent.pageTitle} — ${siteContent.identity.displayName}`,
    },
    {
      name: "description",
      content: profileContent.pageDescription,
    },
  ];
};

interface ExperienceListProps {
  experiences: Experience[];
}

const ExperienceList = ({ experiences }: ExperienceListProps) => {
  return (
    <div className="mt-8 grid gap-12">
      {experiences.map((experience) => (
        <article key={experience.id}>
          <h3 className="text-2xl font-bold">{experience.organization}</h3>

          {experience.organizationNote ? (
            <p className="mt-2">{experience.organizationNote}</p>
          ) : null}

          <p className="mt-2">{experience.location}</p>

          <div className="mt-6 grid gap-8">
            {experience.roles.map((role) => (
              <section key={`${experience.id}-${role.title}-${role.period}`}>
                <h4 className="text-xl font-bold">{role.title}</h4>
                <p className="mt-1">{role.period}</p>

                {role.summary ? (
                  <p className="mt-4 max-w-3xl">{role.summary}</p>
                ) : null}

                <ul className="mt-4 grid gap-3">
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

const Profile = () => {
  const softwareExperience = profileContent.experiences.filter(
    (experience) => experience.category === "software-product",
  );
  const earlierExperience = profileContent.experiences.filter(
    (experience) => experience.category === "earlier",
  );

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <header>
        <p>{siteContent.identity.fullName}</p>
        <h1 className="mt-3 text-5xl font-bold">{profileContent.pageTitle}</h1>
        <p className="mt-5 max-w-3xl">{profileContent.pageDescription}</p>
      </header>

      <section aria-labelledby="introduction-heading" className="py-16">
        <h2 id="introduction-heading" className="text-4xl font-bold">
          {profileContent.introductionTitle}
        </h2>

        <div className="mt-8 grid gap-5">
          {profileContent.introduction.map((paragraph) => (
            <p key={paragraph} className="max-w-3xl">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section aria-labelledby="values-heading" className="py-16">
        <h2 id="values-heading" className="text-4xl font-bold">
          {profileContent.valuesTitle}
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {profileContent.values.map((value) => (
            <article key={value.title}>
              <h3 className="text-xl font-bold">{value.title}</h3>
              <p className="mt-3">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="languages-heading" className="py-16">
        <h2 id="languages-heading" className="text-4xl font-bold">
          {profileContent.languagesTitle}
        </h2>

        <dl className="mt-8 grid gap-5 sm:grid-cols-3">
          {profileContent.languages.map((language) => (
            <div key={language.language}>
              <dt>{language.language}</dt>
              <dd className="mt-1">{language.proficiency}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="capabilities-heading" className="py-16">
        <h2 id="capabilities-heading" className="text-4xl font-bold">
          {profileContent.capabilitiesTitle}
        </h2>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {profileContent.capabilities.map((group) => (
            <section key={group.title}>
              <h3 className="text-xl font-bold">{group.title}</h3>
              <ul className="mt-4 grid gap-2">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section aria-labelledby="software-experience-heading" className="py-16">
        <h2 id="software-experience-heading" className="text-4xl font-bold">
          {profileContent.softwareExperienceTitle}
        </h2>
        <ExperienceList experiences={softwareExperience} />
      </section>

      <section aria-labelledby="earlier-experience-heading" className="py-16">
        <h2 id="earlier-experience-heading" className="text-4xl font-bold">
          {profileContent.earlierExperienceTitle}
        </h2>
        <ExperienceList experiences={earlierExperience} />
      </section>

      <section aria-labelledby="education-heading" className="py-16">
        <h2 id="education-heading" className="text-4xl font-bold">
          {profileContent.educationTitle}
        </h2>

        <div className="mt-8 grid gap-8">
          {profileContent.education.map((education) => (
            <article key={education.id}>
              <h3 className="text-xl font-bold">{education.institution}</h3>
              <p className="mt-2">{education.credential}</p>
              <p className="mt-1">
                {education.period} · {education.location}
              </p>
              {education.note ? <p className="mt-3">{education.note}</p> : null}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Profile;
