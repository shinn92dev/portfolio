import { Link } from "react-router";

import { siteContent } from "@/contents/en";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-rule mt-auto">
      <div className="layout-shell py-10 sm:py-14">
        <div className="layout-grid gap-y-10">
          <div className="col-span-4 md:col-span-4 lg:col-span-5">
            <Link to="/" className="subsection-title no-underline">
              {siteContent.identity.displayName}
            </Link>
            <p className="body-copy mt-4 max-w-md">
              {siteContent.identity.positioning}
            </p>
          </div>

          <nav
            className="col-span-2 md:col-span-2 lg:col-start-8"
            aria-label={siteContent.shell.footerNavigationLabel}
          >
            <p className="eyebrow mb-4">
              {siteContent.shell.footerNavigationLabel}
            </p>
            <ul className="grid gap-2">
              {siteContent.navigation.map((item) => (
                <li key={item.href}>
                  <Link className="text-link" to={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 md:col-span-2 lg:col-start-11">
            <p className="eyebrow mb-4">{siteContent.shell.socialLinksLabel}</p>
            <ul className="grid gap-2">
              {siteContent.socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="text-link"
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                  >
                    {link.label}
                    {link.external ? (
                      <span className="sr-only"> opens in a new tab</span>
                    ) : null}
                  </a>
                </li>
              ))}
              <li>
                <a
                  className="text-link"
                  href={`mailto:${siteContent.contact.email}`}
                >
                  Email
                </a>
              </li>
              <li>
                <a className="text-link" href={siteContent.resume.href}>
                  {siteContent.resume.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="metadata">
            © {currentYear} {siteContent.shell.copyright}
          </p>
          <p className="metadata">{siteContent.identity.location}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
