import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

import temporaryPortrait from "@/assets/anthony2.webp";
import { siteContent } from "@/contents/en";

const HomeHero = () => {
  const emailHref = `mailto:${siteContent.contact.email}`;

  return (
    <section
      className="layout-shell overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:min-h-[calc(100svh-5rem)] lg:pt-16 lg:pb-24"
      aria-labelledby="home-heading"
    >
      <div className="layout-grid gap-y-10 lg:items-start">
        <header className="hero-reveal col-span-4 md:col-span-8 lg:col-span-7">
          <p className="eyebrow text-signal">{siteContent.home.heroEyebrow}</p>

          <h1 id="home-heading" className="display-text mt-5">
            {siteContent.identity.displayName}
          </h1>

          <p className="text-foreground mt-7 max-w-[18ch] text-[clamp(1.75rem,3.25vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.045em]">
            {siteContent.identity.positioning}
          </p>
        </header>

        <dl className="hero-reveal hero-delay-1 border-border col-span-4 grid grid-cols-2 gap-5 border-t pt-5 md:col-span-5 lg:col-span-7 lg:grid-cols-2">
          <div>
            <dt className="eyebrow">{siteContent.home.locationLabel}</dt>
            <dd className="mt-2 text-sm leading-relaxed font-medium sm:text-base">
              {siteContent.identity.location}
            </dd>
          </div>

          <div>
            <dt className="eyebrow">{siteContent.home.availabilityLabel}</dt>
            <dd className="text-foreground-muted mt-2 text-sm leading-relaxed sm:text-base">
              {siteContent.identity.availability}
            </dd>
          </div>
        </dl>

        <figure className="hero-reveal hero-delay-2 col-span-4 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-9 lg:row-span-3 lg:row-start-1">
          <div className="image-frame aspect-[4/5]">
            <img
              src={temporaryPortrait}
              alt={siteContent.home.portraitAlt}
              width={1026}
              height={1473}
              fetchPriority="high"
              className="duration-slow ease-emphasized h-full w-full object-cover object-[center_22%] grayscale-[0.12] transition-[filter,transform] hover:scale-[1.015] hover:grayscale-0"
            />
          </div>
          <figcaption className="metadata mt-3 flex items-center justify-between gap-4">
            <span>{siteContent.identity.location}</span>
            <span>{siteContent.home.portraitStatus}</span>
          </figcaption>
        </figure>

        <div className="hero-reveal hero-delay-3 col-span-4 md:col-span-8 lg:col-span-7">
          <div
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            aria-label={siteContent.home.primaryActionsLabel}
          >
            <Link
              to="/work"
              viewTransition
              className="interactive-shift bg-foreground text-foreground-inverse hover:bg-signal hover:text-signal-foreground inline-flex min-h-12 items-center justify-between gap-6 rounded-sm px-5 py-3 font-semibold no-underline sm:min-w-52"
            >
              {siteContent.home.workLinkLabel}
              <ArrowDownRight aria-hidden="true" className="size-4" />
            </Link>

            <a
              href={emailHref}
              className="interactive-shift border-border-strong hover:border-signal hover:text-signal inline-flex min-h-12 items-center justify-between gap-6 rounded-sm border px-5 py-3 font-semibold no-underline sm:min-w-52"
            >
              {siteContent.home.emailLabel}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>

          <nav
            className="mt-7 flex flex-wrap gap-x-6 gap-y-3"
            aria-label={siteContent.home.secondaryLinksLabel}
          >
            {siteContent.socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="text-link text-sm"
              >
                {link.label}
                {link.external ? (
                  <>
                    <ArrowUpRight aria-hidden="true" className="size-3.5" />
                    <span className="sr-only"> opens in a new tab</span>
                  </>
                ) : null}
              </a>
            ))}

            <a href={siteContent.resume.href} className="text-link text-sm">
              {siteContent.resume.label}
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
