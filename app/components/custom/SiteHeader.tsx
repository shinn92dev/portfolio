import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";

import { siteContent } from "@/contents/en";

import LanguageControl from "./LanguageControl";
import ThemeToggle from "./ThemeToggle";

const isNavigationItemActive = (href: string, pathname: string) => {
  if (href === "/") {
    return pathname === "/";
  }

  if (href === "/work") {
    return pathname === "/work" || pathname.startsWith("/work/");
  }

  if (href === "/profile") {
    return pathname === "/profile";
  }

  return false;
};

const SiteHeader = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    let animationFrame = 0;

    const updateHeaderState = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        setIsCompact(window.scrollY > 32);
      });
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateHeaderState);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-[background-color,padding,border-color] duration-medium ease-emphasized",
        isCompact
          ? "border-border bg-background/95 py-3 backdrop-blur-md"
          : "border-transparent bg-background py-5",
      ].join(" ")}
    >
      <div className="layout-shell flex items-center justify-between gap-5">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3 no-underline"
          aria-label={`${siteContent.identity.displayName}, home`}
        >
          <span
            aria-hidden="true"
            className="flex size-9 shrink-0 items-center justify-center bg-foreground font-mono text-xs font-medium text-foreground-inverse"
          >
            AS
          </span>

          <span className="hidden min-w-0 sm:block">
            <span className="block truncate text-sm font-semibold leading-tight">
              {siteContent.identity.displayName}
            </span>
            <span className="metadata mt-0.5 block truncate">
              {siteContent.identity.role}
            </span>
          </span>
        </Link>

        <nav
          className="hidden lg:block"
          aria-label={siteContent.shell.mainNavigationLabel}
        >
          <ul className="flex items-center gap-7">
            {siteContent.navigation.map((item) => {
              const isActive = isNavigationItemActive(
                item.href,
                location.pathname,
              );

              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={[
                      "relative py-2 text-sm font-medium no-underline transition-colors duration-fast ease-standard",
                      isActive
                        ? "text-signal"
                        : "text-foreground-muted hover:text-foreground",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                    {isActive ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-px bg-signal"
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden xl:block">
            <LanguageControl compact />
          </div>

          <ThemeToggle />

          <button
            ref={menuButtonRef}
            type="button"
            className="interactive-shift inline-flex size-10 items-center justify-center rounded-sm border border-border text-foreground hover:border-signal hover:text-signal lg:hidden"
            aria-label={
              isMenuOpen
                ? siteContent.shell.closeMenuLabel
                : siteContent.shell.openMenuLabel
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={[
          "grid transition-[grid-template-rows,visibility] duration-medium ease-emphasized lg:hidden",
          isMenuOpen ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div className="layout-shell border-t border-border pb-6 pt-5">
            <nav aria-label={siteContent.shell.mainNavigationLabel}>
              <ul className="grid">
                {siteContent.navigation.map((item) => {
                  const isActive = isNavigationItemActive(
                    item.href,
                    location.pathname,
                  );

                  return (
                    <li key={item.href} className="border-b border-border">
                      <Link
                        to={item.href}
                        className={[
                          "flex min-h-14 items-center justify-between py-3 text-lg font-medium no-underline",
                          isActive ? "text-signal" : "text-foreground",
                        ].join(" ")}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                        <span
                          aria-hidden="true"
                          className="font-mono text-xs text-foreground-subtle"
                        >
                          ↗
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-6">
              <LanguageControl />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
