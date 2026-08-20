import { ArrowUpRight, Mail } from "lucide-react";

import { usePortfolioContent } from "@/contexts/LanguageContext";

const HomeContact = () => {
  const { siteContent } = usePortfolioContent();
  const emailHref = `mailto:${siteContent.contact.email}`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-surface-inverse text-foreground-inverse scroll-mt-24"
    >
      <div className="layout-shell section-space">
        <div className="layout-grid gap-y-12">
          <header className="col-span-4 md:col-span-7 lg:col-span-8">
            <p className="eyebrow text-signal">
              {siteContent.home.contactEyebrow}
            </p>

            <h2
              id="contact-heading"
              className="text-foreground-inverse mt-5 max-w-[12ch] text-[clamp(3rem,7vw,7.5rem)] leading-[0.92] font-semibold tracking-[-0.06em]"
            >
              {siteContent.home.contactTitle}
            </h2>

            <p className="text-foreground-inverse/65 mt-7 max-w-2xl text-lg leading-relaxed sm:text-xl">
              {siteContent.home.contactDescription}
            </p>
          </header>

          <div className="col-span-4 self-end md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-9">
            <p className="eyebrow text-foreground-inverse/55">
              {siteContent.home.contactLinksLabel}
            </p>

            <a
              href={emailHref}
              className="group border-foreground-inverse/25 text-foreground-inverse hover:border-signal hover:text-signal mt-5 flex min-h-20 items-center justify-between gap-5 border-y py-5 text-lg font-medium no-underline transition-colors"
            >
              <span className="flex min-w-0 items-center gap-4">
                <Mail aria-hidden="true" className="size-5 shrink-0" />
                <span className="min-w-0 text-sm break-all sm:text-lg">
                  {siteContent.contact.email}
                </span>
              </span>

              <ArrowUpRight
                aria-hidden="true"
                className="duration-medium ease-emphasized size-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
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
                    className="border-foreground-inverse/20 border-b"
                  >
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="group text-foreground-inverse hover:text-signal flex min-h-14 items-center justify-between gap-4 py-3 text-sm font-medium no-underline transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="duration-medium ease-emphasized size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                      {link.external ? (
                        <span className="sr-only"> opens in a new tab</span>
                      ) : null}
                    </a>
                  </li>
                ))}

                <li className="border-foreground-inverse/20 border-b">
                  <a
                    href={siteContent.resume.href}
                    className="group text-foreground-inverse hover:text-signal flex min-h-14 items-center justify-between gap-4 py-3 text-sm font-medium no-underline transition-colors"
                  >
                    {siteContent.resume.label}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="duration-medium ease-emphasized size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </li>
              </ul>
            </nav>

            <dl className="border-foreground-inverse/20 mt-8 border-t pt-5">
              <div className="flex items-start justify-between gap-5">
                <dt className="eyebrow text-foreground-inverse/55">
                  {siteContent.home.contactLocationLabel}
                </dt>
                <dd className="metadata text-foreground-inverse text-right">
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
