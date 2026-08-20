import * as enContent from "./en";
import * as jpContent from "./jp";
import * as krContent from "./kr";

import type { ProfileContent, Project, SiteContent } from "./types";

export const supportedLocales = ["en", "ko", "ja"] as const;

export type Locale = (typeof supportedLocales)[number];

export interface PortfolioContent {
  siteContent: SiteContent;
  profileContent: ProfileContent;
  projects: Project[];
  selectedProjects: Project[];
  additionalProjects: Project[];
  getProjectBySlug: (slug: string | undefined) => Project | undefined;
}

export const portfolioContent: Record<Locale, PortfolioContent> = {
  en: enContent,
  ko: krContent,
  ja: jpContent,
};

export const isSupportedLocale = (value: unknown): value is Locale => {
  return (
    typeof value === "string" && supportedLocales.includes(value as Locale)
  );
};
