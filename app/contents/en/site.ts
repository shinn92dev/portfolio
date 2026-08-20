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
    siteUrl: "https://anthonydev.me",
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
    portraitStatus: "",
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
    careerEyebrow: "Career in context",
    careerTitle: "From technical sales to product engineering.",
    careerIntroduction:
      "I began my career in semiconductor technical sales, translating client requirements into practical decisions with engineers across Korea and Japan. That same work—understanding constraints, aligning stakeholders, and improving how things operate—led me to software. Today, I apply it by taking products from requirements and architecture through implementation and delivery.",
    softwareExperienceLabel: "Software & product experience",
    earlierExperienceLabel: "Earlier experience",
    careerPeriodLabel: "Period",
    careerRoleLabel: "Role",
    softwareExperience: [
      {
        experienceId: "gyu-kaku-portal",
        summary:
          "Turned firsthand restaurant operations into a paid internal product, owning the work from initial proposal through pilot adoption.",
      },
      {
        experienceId: "kana-fighter",
        summary:
          "Translated an owner’s learning concept, content, and visual direction into a complete React Native application.",
      },
      {
        experienceId: "skyline-zipline",
        summary:
          "Led client communication and a three-person BCIT practicum team while contributing to equipment onboarding, inspection workflows, and data migration.",
      },
    ],
    earlierExperience: [
      {
        experienceId: "hitachi-chemical",
        summary:
          "Learned to interpret technical requirements, coordinate Japanese engineers and client teams, negotiate constraints, and remain accountable for commercial outcomes.",
      },
      {
        experienceId: "gyu-kaku-service",
        summary:
          "Built practical knowledge of staffing, scheduling, training, and fast-paced English-language restaurant operations in Vancouver.",
      },
    ],
    personalNoteLabel: "Beyond the work",
    personalNote:
      "I work across Korean, Japanese, and English, and recharge by spending time on Vancouver’s trails and over a good coffee or tea.",
    contactEyebrow: "Contact",
    contactTitle: "Let’s build something useful.",
    contactDescription:
      "I’m interested in full-time and contract opportunities where product thinking, clear communication, and hands-on engineering matter.",
    contactLinksLabel: "Contact and professional links",
    contactLocationLabel: "Based in",
    emailLabel: "Email Anthony",
  },
  work: {
    pageEyebrow: "Project index",
    pageTitle: "Work",
    pageDescription:
      "Selected case studies and additional projects spanning full-stack products, mobile applications, optimization, and client work.",
    selectedTitle: "Selected case studies",
    selectedDescription:
      "Two independently delivered products that demonstrate product planning, full-stack engineering, mobile development, and technical decision-making.",
    additionalTitle: "Additional work",
    additionalDescription:
      "Earlier and supporting projects retained as a concise record of continued development work.",
    projectCountLabel: "Projects",
    productTypeLabel: "Product type",
    roleLabel: "Role",
    periodLabel: "Period",
    statusLabel: "Status",
    evidenceLabel: "Selected evidence",
    decisionLabel: "Technical direction",
    technologyLabel: "Selected technology",
    projectLinksLabel: "Project links",
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
    sectionIndexLabel: "Case study sections",
    projectDetailsLabel: "Project details",
    roleLabel: "Role",
    teamLabel: "Team",
    periodLabel: "Period",
    statusLabel: "Status",
    outcomesLabel: "Measured outcomes",
    unavailableLinkLabel: "Not publicly available",
    nextProjectLabel: "Next case study",
    decisionProblemLabel: "Problem",
    decisionOptionsLabel: "Options considered",
    decisionLabel: "Decision",
    decisionRationaleLabel: "Why",
    tradeoffsLabel: "Trade-offs",
  },
} satisfies SiteContent;
