import type { ProfileContent } from "../types";

export const profileContent: ProfileContent = {
  pageTitle: "Profile",
  pageDescription:
    "Anthony Shin’s background, software and product experience, earlier career, capabilities, and education.",
  introductionTitle: "Building products through technical and human context.",
  introduction: [
    "I am a product-minded full-stack developer based in Vancouver. I enjoy turning operational problems, incomplete requirements, and real-world constraints into software that people can depend on.",
    "Before moving into software development, I worked in technical sales for semiconductor materials. That experience taught me how to uncover client needs, communicate across technical and business teams, and make decisions without losing sight of delivery.",
    "I began programming while looking for better ways to handle repetitive work during the pandemic. What started as practical automation grew into a broader interest in building products, leading me to study computer science and computer systems in Canada.",
    "Today, I bring together hands-on engineering, product planning, multilingual communication, and experience working across Korean, Japanese, and Canadian contexts.",
  ],
  valuesTitle: "How I work",
  values: [
    {
      title: "Product context first",
      description:
        "I start by understanding who uses the product, how their work currently happens, and which constraints cannot be ignored.",
    },
    {
      title: "Reliable delivery",
      description:
        "I value maintainable implementation, clear scope, and software that remains understandable after the first release.",
    },
    {
      title: "Technical communication",
      description:
        "I translate between users, stakeholders, and technical systems so decisions remain grounded and actionable.",
    },
  ],
  languagesTitle: "Languages",
  languages: [
    {
      language: "Korean",
      proficiency: "Native",
    },
    {
      language: "Japanese",
      proficiency: "Full professional proficiency",
    },
    {
      language: "English",
      proficiency: "Advanced professional proficiency",
    },
  ],
  capabilitiesTitle: "Core capabilities",
  capabilities: [
    {
      title: "Product engineering",
      items: [
        "Requirements discovery",
        "Product planning",
        "UI implementation",
        "Full-stack development",
        "Technical documentation",
      ],
    },
    {
      title: "Primary technology",
      items: [
        "TypeScript",
        "React",
        "React Router",
        "Next.js",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
      ],
    },
    {
      title: "Delivery and infrastructure",
      items: [
        "Docker",
        "Linux VPS",
        "Nginx",
        "Database migrations",
        "Authentication and authorization",
        "Production deployment",
      ],
    },
    {
      title: "Additional experience",
      items: [
        "React Native",
        "Expo",
        "Firebase",
        "MySQL",
        "Google OR-Tools",
        "Tailwind CSS",
      ],
    },
  ],
  softwareExperienceTitle: "Software & product experience",
  earlierExperienceTitle: "Earlier experience",
  educationTitle: "Education",
  experiences: [
    {
      id: "gyu-kaku-portal",
      organization: "Gyu-Kaku Vancouver",
      organizationNote:
        "A separate paid software contract alongside my restaurant role.",
      location: "Vancouver, BC, Canada",
      category: "software-product",
      relatedProjectSlugs: ["gyu-kaku-portal"],
      roles: [
        {
          title: "Contract Full-stack Developer",
          period: "May 2026 – July 2026",
          summary:
            "Proposed, designed, and built an internal restaurant operations platform for the Vancouver location.",
          highlights: [
            "Led product planning, requirements gathering, UX design, frontend and backend development, database design, deployment, testing, documentation, and staff training as the sole developer.",
            "Built staff availability, time-off, employee management, schedule editing, publication, and operational administration workflows.",
            "Implemented a Google OR-Tools scheduling engine that generates an initial FOH and BOH schedule draft in under ten seconds.",
            "Supported a pilot with approximately 15 users before the planned broader rollout.",
          ],
        },
      ],
    },
    {
      id: "kana-fighter",
      organization: "Kana Fighter",
      organizationNote: "Contract project for Dylan Wood.",
      location: "Vancouver, BC, Canada",
      category: "software-product",
      relatedProjectSlugs: ["kana-fighter"],
      roles: [
        {
          title: "Contract React Native Developer & Technical Lead",
          period: "August 2025 – August 2026",
          summary:
            "Built a gamified Japanese learning application from the owner’s product concept, visual designs, learning content, and character assets.",
          highlights: [
            "Owned technical planning, application architecture, React Native implementation, local data persistence, animation, audio, testing, and build preparation.",
            "Implemented guided lessons, drills, story-driven quests, unlock progression, scoring, and pronunciation audio.",
            "Optimized PNG-based character animation by preparing and preloading assets for reliable performance on lower-end devices.",
            "Prepared and validated iOS TestFlight and Android builds; App Store deployment remained under the owner’s account.",
          ],
        },
      ],
    },
    {
      id: "skyline-zipline",
      organization: "Skyline Zipline",
      organizationNote: "BCIT Industry Practicum Project.",
      location: "Whistler, BC, Canada",
      category: "software-product",
      roles: [
        {
          title: "Team Lead & Full-stack Developer",
          period: "January 2025 – April 2025",
          summary:
            "Worked in a three-person student team on an equipment inspection system for an industry client.",
          highlights: [
            "Led client meetings, requirement discussions, task coordination, and communication between the student team and stakeholders.",
            "Focused on equipment onboarding and inspection workflows using Next.js.",
            "Evaluated Firestore usage and cost constraints as inspection records accumulated across hundreds of pieces of equipment.",
            "Proposed and implemented a migration from Firestore data storage to a relational MySQL model.",
          ],
        },
      ],
    },
    {
      id: "gyu-kaku-service",
      organization: "Gyu-Kaku Vancouver",
      location: "Vancouver, BC, Canada",
      category: "earlier",
      roles: [
        {
          title: "Server",
          period: "August 2023 – Present",
          summary:
            "Work in a fast-paced English-speaking restaurant environment with direct knowledge of staffing, scheduling, and shift operations.",
          highlights: [
            "Support shift leadership, staff training, onboarding, scheduling assistance, and manager operations.",
            "Coordinate with guests, kitchen staff, supervisors, and managers during high-volume service.",
            "Used firsthand operational knowledge to identify and propose the Gyu-Kaku Portal project.",
          ],
        },
      ],
    },
    {
      id: "hitachi-chemical",
      organization: "Hitachi Chemical",
      organizationNote:
        "The former Hitachi Chemical business is now part of Resonac.",
      location: "South Korea",
      category: "earlier",
      roles: [
        {
          title: "Senior Technical Sales Representative",
          period: "February 2021 – December 2022",
          highlights: [
            "Managed semiconductor material accounts, client requirements, proposals, pricing, negotiation, forecasting, and new business development.",
            "Coordinated technical and commercial communication among clients, Japanese factory engineers, and internal teams.",
            "Led and mediated meetings between Japanese engineers and major client engineering teams.",
          ],
        },
        {
          title: "Technical Sales Representative",
          period: "February 2019 – January 2021",
          highlights: [
            "Supported release film, die attach film, and non-conductive film products used in semiconductor manufacturing.",
            "Helped turn a declining product category into the team’s highest-revenue back-end semiconductor material category.",
            "Contributed to approximately 1,000% growth in average product sales after securing adoption in a flagship product.",
            "Built client trust by grounding negotiations in technical evidence and clearly distinguishing feasible requirements from impractical requests.",
          ],
        },
      ],
    },
    {
      id: "korea-army",
      organization: "Republic of Korea Army",
      location: "Seoul, South Korea",
      category: "earlier",
      roles: [
        {
          title: "Technical Support",
          period: "January 2014 – December 2016",
          highlights: [
            "Installed and supported desktops, laptops, printers, and routers.",
            "Configured internal and external network access and managed dynamic and static IP assignments.",
            "Provided day-to-day technical support for users and equipment.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      id: "bcit",
      institution: "British Columbia Institute of Technology (BCIT)",
      credential: "Diploma in Computer Systems Technology",
      period: "2023 – 2025",
      location: "Vancouver, BC, Canada",
    },
    {
      id: "knou",
      institution: "Korean National Open University",
      credential: "Bachelor of Computer Science",
      period: "2021 – 2022",
      location: "Seoul, South Korea",
    },
    {
      id: "kwangwoon",
      institution: "Kwangwoon University",
      credential: "Bachelor of International Studies",
      period: "2010 – 2019",
      location: "Seoul, South Korea",
    },
  ],
};
