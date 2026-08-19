import HomeCapabilities from "@/components/custom/HomeCapabilities";
import HomeHero from "@/components/custom/HomeHero";
import HomeSelectedWork from "@/components/custom/HomeSelectedWork";
import { siteContent } from "@/contents/en";

import type { Route } from "./+types/home";

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
  return (
    <div>
      <HomeHero />
      <HomeSelectedWork />
      <HomeCapabilities />
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
