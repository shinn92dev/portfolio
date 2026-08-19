import { redirect } from "react-router";

import type { Route } from "./+types/about";

export const loader = ({}: Route.LoaderArgs) => {
  return redirect("/profile", 301);
};

const LegacyAboutRedirect = () => {
  return null;
};

export default LegacyAboutRedirect;
