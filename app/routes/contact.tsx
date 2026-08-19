import { redirect } from "react-router";

import type { Route } from "./+types/contact";

export const loader = ({}: Route.LoaderArgs) => {
  return redirect("/#contact", 301);
};

const LegacyContactRedirect = () => {
  return null;
};

export default LegacyContactRedirect;
