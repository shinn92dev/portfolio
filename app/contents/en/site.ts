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
    selectedWorkEyebrow: "Selected work",
    selectedWorkTitle: "Products shaped by real operational constraints.",
    selectedWorkDescription:
      "A restaurant operations platform and a game-based Japanese learning app demonstrate product planning, full-stack engineering, mobile development, and dependable delivery.",
    capabilityEyebrow: "Core capabilities",
    capabilityTitle: "From ambiguous requirements to working software.",
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
