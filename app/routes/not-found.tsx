import { Link } from "react-router";

import { siteContent } from "@/contents/en";

import type { Route } from "./+types/not-found";

export const loader = ({}: Route.LoaderArgs) => {
  throw new Response("Page not found.", {
    status: 404,
    statusText: "Page Not Found",
  });
};

export const meta = ({}: Route.MetaArgs) => {
  return [
    {
      title: `Page not found — ${siteContent.identity.displayName}`,
    },
    {
      name: "description",
      content: "The requested page could not be found.",
    },
    {
      name: "robots",
      content: "noindex, nofollow",
    },
  ];
};

const NotFound = () => {
  return (
    <section className="layout-shell section-space">
      <p className="eyebrow text-signal">404</p>
      <h1 className="page-title mt-4">Page not found</h1>
      <p className="lead-text mt-6">
        The page you requested could not be found.
      </p>
      <Link to="/" className="text-link mt-8">
        Return home
      </Link>
    </section>
  );
};

export default NotFound;
