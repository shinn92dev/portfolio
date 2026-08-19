export type LocaleCode = "en" | "ko" | "ja";

export type ProjectTier = "selected" | "additional";

export type ProjectSlug =
  | "gyu-kaku-portal"
  | "kana-fighter"
  | "rate-van-rent"
  | "portfolio";

export type ProjectEditorialStatus = "verified" | "draft";

export type ProjectLinkKind = "case-study" | "demo" | "repository" | "video";

export type ExperienceCategory = "software-product" | "earlier";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  external: boolean;
}

export interface LanguageOption {
  code: LocaleCode;
  label: string;
  enabled: boolean;
  message?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  kind: ProjectLinkKind;
  external: boolean;
  availability: "available" | "coming-soon" | "private";
}

export interface ProjectMetric {
  value: string;
  label: string;
  detail?: string;
  attribution?: string;
}

export interface ProjectDecision {
  title: string;
  problem: string;
  options: string[];
  decision: string;
  rationale: string;
  tradeoffs: string[];
}

export interface ProjectCaseStudy {
  context: string[];
  users: string[];
  responsibilities: string[];
  constraints: string[];
  features: string[];
  decisions: ProjectDecision[];
  outcomes: string[];
  reflection: string[];
}

export interface Project {
  slug: ProjectSlug;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  period: string;
  status: string;
  role: string;
  team: string;
  tier: ProjectTier;
  editorialStatus: ProjectEditorialStatus;
  technologies: string[];
  metrics: ProjectMetric[];
  links: ProjectLink[];
  caseStudy?: ProjectCaseStudy;
}

export interface ExperienceRole {
  title: string;
  period: string;
  summary?: string;
  highlights: string[];
}

export interface Experience {
  id: string;
  organization: string;
  organizationNote?: string;
  location: string;
  category: ExperienceCategory;
  roles: ExperienceRole[];
  relatedProjectSlugs?: ProjectSlug[];
}

export interface Education {
  id: string;
  institution: string;
  credential: string;
  period: string;
  location: string;
  note?: string;
}

export interface CapabilityGroup {
  title: string;
  items: string[];
}

export interface HomeCapability {
  title: string;
  description: string;
  evidence: string[];
  projectSlugs: ProjectSlug[];
}

export interface HomeCareerEntry {
  experienceId: string;
  summary: string;
}

export interface ProfileContent {
  pageTitle: string;
  pageDescription: string;
  introductionTitle: string;
  introduction: string[];
  valuesTitle: string;
  values: Array<{
    title: string;
    description: string;
  }>;
  languagesTitle: string;
  languages: Array<{
    language: string;
    proficiency: string;
  }>;
  capabilitiesTitle: string;
  capabilities: CapabilityGroup[];
  softwareExperienceTitle: string;
  earlierExperienceTitle: string;
  educationTitle: string;
  experiences: Experience[];
  education: Education[];
}

export interface SiteContent {
  identity: {
    displayName: string;
    fullName: string;
    role: string;
    positioning: string;
    location: string;
    availability: string;
  };
  metadata: {
    defaultTitle: string;
    titleTemplate: string;
    description: string;
  };
  shell: {
    skipToContentLabel: string;
    mainNavigationLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    themeToggleLabel: string;
    lightThemeLabel: string;
    darkThemeLabel: string;
    languageLabel: string;
    comingSoonLabel: string;
    footerNavigationLabel: string;
    socialLinksLabel: string;
    copyright: string;
  };
  contact: {
    email: string;
  };
  navigation: NavigationItem[];
  languages: LanguageOption[];
  socialLinks: SocialLink[];
  resume: {
    label: string;
    href: string;
  };
  home: {
    heroEyebrow: string;
    locationLabel: string;
    availabilityLabel: string;
    portraitAlt: string;
    portraitStatus: string;
    primaryActionsLabel: string;
    secondaryLinksLabel: string;
    selectedWorkEyebrow: string;
    selectedWorkTitle: string;
    selectedWorkDescription: string;
    selectedWorkProductLabel: string;
    selectedWorkUserLabel: string;
    selectedWorkResponsibilityLabel: string;
    selectedWorkDecisionLabel: string;
    selectedWorkOutcomeLabel: string;
    selectedWorkStatusLabel: string;
    selectedWorkTechnologyLabel: string;
    capabilityEyebrow: string;
    capabilityTitle: string;
    capabilityEvidenceLabel: string;
    capabilities: HomeCapability[];
    profileLinkLabel: string;
    workLinkLabel: string;
    careerEyebrow: string;
    careerTitle: string;
    careerIntroduction: string;
    softwareExperienceLabel: string;
    earlierExperienceLabel: string;
    careerPeriodLabel: string;
    careerRoleLabel: string;
    softwareExperience: HomeCareerEntry[];
    earlierExperience: HomeCareerEntry[];
    personalNoteLabel: string;
    personalNote: string;
    contactEyebrow: string;
    contactTitle: string;
    contactDescription: string;
    contactLinksLabel: string;
    contactLocationLabel: string;
    emailLabel: string;
  };
  work: {
    pageTitle: string;
    pageDescription: string;
    selectedTitle: string;
    additionalTitle: string;
    viewCaseStudyLabel: string;
    viewDemoLabel: string;
    privateRepositoryLabel: string;
  };
  caseStudy: {
    overviewTitle: string;
    contextTitle: string;
    usersTitle: string;
    responsibilitiesTitle: string;
    constraintsTitle: string;
    featuresTitle: string;
    decisionsTitle: string;
    outcomesTitle: string;
    reflectionTitle: string;
    technologyTitle: string;
    linksTitle: string;
    backLabel: string;
    decisionProblemLabel: string;
    decisionOptionsLabel: string;
    decisionLabel: string;
    decisionRationaleLabel: string;
    tradeoffsLabel: string;
  };
}
