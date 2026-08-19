import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import Footer from "@/components/custom/Footer";
import SiteHeader from "@/components/custom/SiteHeader";
import { siteContent } from "@/contents/en";

import type { Route } from "./+types/root";
import "./app.css";

const themeInitializationScript = `
(() => {
  try {
    const storedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : prefersDark
          ? "dark"
          : "light";

    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export const loader = ({ request }: Route.LoaderArgs) => {
  return {
    origin: new URL(request.url).origin,
  };
};

export const links: Route.LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,400..700&display=swap",
  },
  {
    rel: "icon",
    href: "/favicon.ico",
    sizes: "any",
  },
];

export const meta = ({ data, location }: Route.MetaArgs) => {
  const origin = data?.origin;
  const canonicalUrl = origin
    ? new URL(location.pathname, origin).toString()
    : location.pathname;

  return [
    {
      title: siteContent.metadata.defaultTitle,
    },
    {
      name: "description",
      content: siteContent.metadata.description,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:site_name",
      content: siteContent.identity.displayName,
    },
    {
      property: "og:title",
      content: siteContent.metadata.defaultTitle,
    },
    {
      property: "og:description",
      content: siteContent.metadata.description,
    },
    {
      property: "og:url",
      content: canonicalUrl,
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: canonicalUrl,
    },
  ];
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitializationScript,
          }}
        />
        <Meta />
        <Links />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          {siteContent.shell.skipToContentLabel}
        </a>

        <div className="flex min-h-screen flex-col">
          <SiteHeader />

          <main id="main-content" className="min-w-0 flex-1">
            {children}
          </main>

          <Footer />
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

const App = () => {
  return <Outlet />;
};

export default App;

export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => {
  let message = "Something went wrong";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "Page not found" : "Request error";
    details =
      error.status === 404
        ? "The page you requested could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <section className="layout-shell section-space">
      <p className="eyebrow">
        {isRouteErrorResponse(error) ? error.status : "Error"}
      </p>
      <h1 className="page-title mt-4">{message}</h1>
      <p className="lead-text mt-6">{details}</p>

      <a href="/" className="text-link mt-8">
        Return home
      </a>

      {stack ? (
        <pre className="mt-10 overflow-x-auto border-t border-border pt-6 text-sm">
          <code>{stack}</code>
        </pre>
      ) : null}
    </section>
  );
};