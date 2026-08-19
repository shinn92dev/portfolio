import type { SiteContent } from "../types";

export const siteContent = {
  identity: {
    displayName: "Anthony Shin",
    fullName: "Anthony Seunghwan Shin",
    role: "Full-stack Developer",
    positioning:
      "Full-stack developer turning real-world constraints into clear, dependable products.",
    location: "Vancouver, BC, Canada",
    availability:
      "Open to full-time and contract opportunities, with a preference for full-time roles.",
  },
  metadata: {
    defaultTitle: "Anthony Shin — Full-stack Developer",
    titleTemplate: "%s — Anthony Shin",
    description:
      "Portfolio of Anthony Shin, a product-minded full-stack developer based in Vancouver.",
  },
  shell: {
    skipToContentLabel: "Skip to main content",
    mainNavigationLabel: "Main navigation",
    openMenuLabel: "Open navigation menu",
    closeMenuLabel: "Close navigation menu",
    themeToggleLabel: "Toggle color theme",
    lightThemeLabel: "Switch to light theme",
    darkThemeLabel: "Switch to dark theme",
    languageLabel: "Language",
    comingSoonLabel: "Coming soon",
    footerNavigationLabel: "Footer navigation",
    socialLinksLabel: "Social links",
    copyright: "Anthony Shin. All rights reserved.",
  },
  contact: {
    email: "anthony.seunghwan.shin@gmail.com",
  },
  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Work",
      href: "/work",
    },
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Contact",
      href: "/#contact",
    },
  ],
  languages: [
    {
      code: "en",
      label: "EN",
      enabled: true,
    },
    {
      code: "ko",
      label: "KR",
      enabled: false,
      message: "Korean content is coming soon.",
    },
    {
      code: "ja",
      label: "JP",
      enabled: false,
      message: "Japanese content is coming soon.",
    },
  ],
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/shinn92dev",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anthony-shin/",
      external: true,
    },
  ],
  resume: {
    label: "Resume",
    href: "/Resume_Anthony-Shin_250718.pdf",
  },
  home: {
    heroEyebrow: "Product-minded full-stack developer",
    locationLabel: "Based in",
    availabilityLabel: "Currently",
    portraitAlt: "Anthony Shin, a full-stack developer based in Vancouver.",
    portraitStatus: "Temporary development portrait",
    primaryActionsLabel: "Primary actions",
    secondaryLinksLabel: "Professional links",
    selectedWorkEyebrow: "Selected work",
    selectedWorkTitle: "Products shaped by real operational constraints.",
    selectedWorkDescription:
      "A restaurant operations platform and a game-based Japanese learning app demonstrate product planning, full-stack engineering, mobile development, and dependable delivery.",
    selectedWorkProductLabel: "Product",
    selectedWorkUserLabel: "Primary users",
    selectedWorkResponsibilityLabel: "Responsibility",
    selectedWorkDecisionLabel: "Key decision",
    selectedWorkOutcomeLabel: "Evidence",
    selectedWorkStatusLabel: "Status",
    selectedWorkTechnologyLabel: "Selected technology",
    capabilityEyebrow: "Core capabilities",
    capabilityTitle: "From ambiguous requirements to working software.",
    capabilityEvidenceLabel: "Evidence from selected work",
    capabilities: [
      {
        title: "Product Engineering",
        description:
          "Turning incomplete requirements and operational context into focused product workflows.",
        evidence: [
          "Proposed and scoped Gyu-Kaku Portal from firsthand restaurant operations.",
          "Translated Kana Fighter’s externally defined concept, content, and visual design into a complete mobile product.",
        ],
        projectSlugs: ["gyu-kaku-portal", "kana-fighter"],
      },
      {
        title: "Full-stack Systems",
        description:
          "Designing connected interfaces, APIs, data models, authorization, optimization, and deployment.",
        evidence: [
          "Built Gyu-Kaku Portal across React, FastAPI, PostgreSQL, OR-Tools, Docker, and VPS infrastructure.",
          "Designed Kana Fighter as a local-first React Native application with persistent progression, audio, and animation.",
        ],
        projectSlugs: ["gyu-kaku-portal", "kana-fighter"],
      },
      {
        title: "Technical Leadership",
        description:
          "Clarifying decisions, communicating trade-offs, and remaining accountable for delivery.",
        evidence: [
          "Owned Gyu-Kaku Portal from stakeholder discovery through pilot training as the sole developer.",
          "Led Kana Fighter’s technical architecture, implementation, testing, and build validation.",
        ],
        projectSlugs: ["gyu-kaku-portal", "kana-fighter"],
      },
    ],
    profileLinkLabel: "Read my profile",
    workLinkLabel: "View selected work",
    contactEyebrow: "Contact",
    contactTitle: "Let’s build something useful.",
    contactDescription:
      "I’m interested in full-time and contract opportunities where product thinking, clear communication, and hands-on engineering matter.",
    emailLabel: "Email Anthony",
  },
  work: {
    pageTitle: "Work",
    pageDescription:
      "Selected case studies and additional projects spanning full-stack products, mobile applications, optimization, and client work.",
    selectedTitle: "Selected work",
    additionalTitle: "Additional work",
    viewCaseStudyLabel: "View case study",
    viewDemoLabel: "Open demo",
    privateRepositoryLabel: "Private repository",
  },
  caseStudy: {
    overviewTitle: "Overview",
    contextTitle: "Context",
    usersTitle: "Users",
    responsibilitiesTitle: "My responsibilities",
    constraintsTitle: "Constraints",
    featuresTitle: "Implemented features",
    decisionsTitle: "Technical decisions",
    outcomesTitle: "Outcome",
    reflectionTitle: "Reflection",
    technologyTitle: "Technology",
    linksTitle: "Project links",
    backLabel: "Back to work",
    decisionProblemLabel: "Problem",
    decisionOptionsLabel: "Options considered",
    decisionLabel: "Decision",
    decisionRationaleLabel: "Why",
    tradeoffsLabel: "Trade-offs",
  },
} satisfies SiteContent;
