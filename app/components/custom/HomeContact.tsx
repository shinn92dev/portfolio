import { ArrowUpRight, Mail } from "lucide-react";

import { siteContent } from "@/contents/en";

const HomeContact = () => {
  const emailHref = `mailto:${siteContent.contact.email}`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-surface-inverse text-foreground-inverse"
    >
      <div className="layout-shell section-space">
        <div className="layout-grid gap-y-12">
          <header className="col-span-4 md:col-span-7 lg:col-span-8">
            <p className="eyebrow text-signal">
              {siteContent.home.contactEyebrow}
            </p>

            <h2
              id="contact-heading"
              className="mt-5 max-w-[12ch] text-[clamp(3rem,7vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-foreground-inverse"
            >
              {siteContent.home.contactTitle}
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground-inverse/65 sm:text-xl">
              {siteContent.home.contactDescription}
            </p>
          </header>

          <div className="col-span-4 self-end md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-9">
            <p className="eyebrow text-foreground-inverse/55">
              {siteContent.home.contactLinksLabel}
            </p>

            <a
              href={emailHref}
              className="group mt-5 flex min-h-20 items-center justify-between gap-5 border-y border-foreground-inverse/25 py-5 text-lg font-medium text-foreground-inverse no-underline transition-colors hover:border-signal hover:text-signal"
            >
              <span className="flex min-w-0 items-center gap-4">
                <Mail aria-hidden="true" className="size-5 shrink-0" />
                <span className="truncate">{siteContent.contact.email}</span>
              </span>

              <ArrowUpRight
                aria-hidden="true"
                className="size-5 shrink-0 transition-transform duration-medium ease-emphasized group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <nav
              className="mt-6"
              aria-label={siteContent.home.contactLinksLabel}
            >
              <ul className="grid">
                {siteContent.socialLinks.map((link) => (
                  <li
                    key={link.href}
                    className="border-b border-foreground-inverse/20"
                  >
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="group flex min-h-14 items-center justify-between gap-4 py-3 text-sm font-medium text-foreground-inverse no-underline transition-colors hover:text-signal"
                    >
                      {link.label}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 transition-transform duration-medium ease-emphasized group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                      {link.external ? (
                        <span className="sr-only"> opens in a new tab</span>
                      ) : null}
                    </a>
                  </li>
                ))}

                <li className="border-b border-foreground-inverse/20">
                  <a
                    href={siteContent.resume.href}
                    className="group flex min-h-14 items-center justify-between gap-4 py-3 text-sm font-medium text-foreground-inverse no-underline transition-colors hover:text-signal"
                  >
                    {siteContent.resume.label}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-medium ease-emphasized group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </li>
              </ul>
            </nav>

            <dl className="mt-8 border-t border-foreground-inverse/20 pt-5">
              <div className="flex items-start justify-between gap-5">
                <dt className="eyebrow text-foreground-inverse/55">
                  {siteContent.home.contactLocationLabel}
                </dt>
                <dd className="metadata text-right text-foreground-inverse">
                  {siteContent.identity.location}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
