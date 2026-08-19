import { Link } from "react-router";

import { profileContent, selectedProjects, siteContent } from "@/contents/en";

import type { Route } from "./+types/home";
import HomeHero from "@/components/custom/HomeHero";

export const meta = ({}: Route.MetaArgs) => {
  return [
    {
      title: siteContent.metadata.defaultTitle,
    },
    {
      name: "description",
      content: siteContent.metadata.description,
    },
  ];
};

const Home = () => {
  const primaryCapabilities = profileContent.capabilities.slice(0, 3);

  return (
    <div>
      <HomeHero />
      <section
        aria-labelledby="selected-work-heading"
        className="layout-shell py-16"
      >
        <p>{siteContent.home.selectedWorkEyebrow}</p>
        <h2 id="selected-work-heading" className="mt-3 text-4xl font-bold">
          {siteContent.home.selectedWorkTitle}
        </h2>
        <p className="mt-4 max-w-3xl">
          {siteContent.home.selectedWorkDescription}
        </p>
        <div className="mt-10 grid gap-10">
          {selectedProjects.map((project) => (
            <article key={project.slug}>
              <p>{project.eyebrow}</p>
              <h3 className="mt-2 text-3xl font-bold">
                <Link to={`/work/${project.slug}`} viewTransition>
                  {project.title}
                </Link>
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

              <Link
                className="mt-5 inline-block"
                to={`/work/${project.slug}`}
                viewTransition
              >
                {siteContent.work.viewCaseStudyLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section
        aria-labelledby="capabilities-heading"
        className="layout-shell py-16"
      >
        <p>{siteContent.home.capabilityEyebrow}</p>
        <h2 id="capabilities-heading" className="mt-3 text-4xl font-bold">
          {siteContent.home.capabilityTitle}
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {primaryCapabilities.map((group) => (
            <section key={group.title}>
              <h3 className="text-xl font-bold">{group.title}</h3>
              <ul className="mt-4">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <Link className="mt-8 inline-block" to="/profile">
          {siteContent.home.profileLinkLabel}
        </Link>
      </section>
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="layout-shell py-16"
      >
        <p>{siteContent.home.contactEyebrow}</p>
        <h2 id="contact-heading" className="mt-3 text-4xl font-bold">
          {siteContent.home.contactTitle}
        </h2>
        <p className="mt-4 max-w-2xl">{siteContent.home.contactDescription}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={`mailto:${siteContent.contact.email}`}>
            {siteContent.home.emailLabel}
          </a>
          {siteContent.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}

          <a href={siteContent.resume.href}>{siteContent.resume.label}</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
