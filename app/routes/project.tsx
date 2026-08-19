import { redirect } from "react-router";

import type { Route } from "./+types/project";

export const loader = ({}: Route.LoaderArgs) => {
  return redirect("/work", 301);
};

const LegacyProjectRedirect = () => {
  return null;
};

export default LegacyProjectRedirect;
