import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "gyu-kaku-portal",
    title: "Gyu-Kaku Portal",
    shortTitle: "Gyu-Kaku Portal",
    eyebrow: "Restaurant operations · Paid contract",
    summary:
      "An internal operations platform for Gyu-Kaku Vancouver that replaces fragmented spreadsheet workflows with structured staff administration and constraint-based schedule generation.",
    period: "May 2026 – July 2026",
    status: "Pilot in active use · Broader rollout planned for September 2026",
    role: "Solo Full-stack Developer",
    team: "1 developer · 5 operational stakeholders",
    tier: "selected",
    editorialStatus: "verified",
    technologies: [
      "React",
      "React Router",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Google OR-Tools",
      "Docker",
      "Nginx",
    ],
    metrics: [
      {
        value: "< 10 sec",
        label: "Initial schedule draft",
        detail: "Generates the initial combined FOH and BOH schedule draft.",
      },
      {
        value: "6–10 hrs → ≤ 1 hr",
        label: "Weekly scheduling workload",
        detail:
          "Includes approximately 20–30 minutes of manager review and manual adjustment after generation.",
        attribution: "Reported by the Gyu-Kaku Vancouver management team.",
      },
      {
        value: "90%+",
        label: "Reduction in availability-related human error",
        attribution: "Reported by the Gyu-Kaku Vancouver management team.",
      },
    ],
    links: [
      {
        label: "Open pilot demo",
        href: "https://gyukaku-vc.anthonydev.me",
        kind: "demo",
        external: true,
        availability: "available",
      },
      {
        label: "Private repository",
        href: "",
        kind: "repository",
        external: false,
        availability: "private",
      },
    ],
    caseStudy: {
      context: [
        "Staff availability was collected in Google Sheets and manually copied into scheduling templates.",
        "Formatting shifts, misplaced rows, similar employee names, and separately communicated time restrictions could produce incorrect availability records.",
        "Managers created separate FOH and BOH drafts manually, then spent additional time reviewing and revising the result.",
        "Staff records, time-off requests, availability, and schedules were distributed across separate files and communication channels.",
      ],
      users: [
        "Gyu-Kaku Vancouver staff submitting availability and time-off requests.",
        "Managers and supervisors reviewing requests, maintaining staff records, and preparing schedules.",
        "The pilot currently includes approximately 15 users, with about 30 expected during the initial rollout and capacity for future growth.",
      ],
      responsibilities: [
        "Product proposal and scope definition",
        "Stakeholder interviews and requirements gathering",
        "Information architecture and UI/UX design",
        "Frontend and backend development",
        "Database and authorization design",
        "Constraint-based scheduling engine",
        "Infrastructure and deployment",
        "Pilot testing and maintenance",
        "Documentation and staff training",
      ],
      constraints: [
        "Availability and time-specific working restrictions must be respected.",
        "A staff member cannot be assigned to overlapping shifts.",
        "Assignments must match the employee’s role and eligible work area.",
        "Required staffing coverage must be represented for each scheduling period.",
        "Manager edits must remain possible after automatic generation.",
        "The system must support both staff-facing and manager-facing workflows.",
        "The product applies only to the authorized Gyu-Kaku Vancouver operation.",
      ],
      features: [
        "Staff and manager authentication",
        "Role-based authorization",
        "Staff profile and employment record management",
        "Availability submission with time-level restrictions",
        "Time-off request and approval workflow",
        "Weekly FOH and BOH schedule management",
        "Google OR-Tools schedule generation",
        "Manual schedule editing and reassignment",
        "Scheduling conflict validation",
        "Schedule publication and staff access",
        "Operational administration and activity records",
        "Responsive interfaces for staff and managers",
      ],
      decisions: [
        {
          title: "Model scheduling as a constraint optimization problem",
          problem:
            "A sequence of manual rules could create a schedule, but overlapping availability, role coverage, and fairness requirements quickly made the logic difficult to reason about and maintain.",
          options: [
            "Continue with a manual scheduling workflow",
            "Implement a custom greedy scheduling algorithm",
            "Model the problem with a constraint solver",
          ],
          decision:
            "Use Google OR-Tools CP-SAT to generate an initial schedule that satisfies required constraints.",
          rationale:
            "The solver provides an explicit way to represent assignments and operational rules while leaving managers in control of final adjustments.",
          tradeoffs: [
            "Constraint definitions require careful validation against actual restaurant operations.",
            "An infeasible model needs understandable feedback and a manual recovery path.",
            "Optimization quality depends on the accuracy of submitted availability and staffing requirements.",
          ],
        },
        {
          title: "Keep automatic output editable",
          problem:
            "Restaurant schedules are affected by context that may not be fully represented in an optimization model.",
          options: [
            "Publish the generated schedule immediately",
            "Treat generated schedules as manager-reviewed drafts",
          ],
          decision:
            "Return an editable draft that managers can inspect and adjust before publication.",
          rationale:
            "This preserves operational judgment while eliminating most of the repetitive assignment work.",
          tradeoffs: [
            "The workflow is not entirely automatic.",
            "Manual edits still require conflict checks and clear publication state.",
          ],
        },
        {
          title: "Use one operational source of truth",
          problem:
            "Separate spreadsheets and messages caused staff information, availability, and scheduling data to drift out of sync.",
          options: [
            "Improve the existing spreadsheet templates",
            "Create separate tools for staff and managers",
            "Store connected workflows in one application and relational database",
          ],
          decision:
            "Use PostgreSQL as the shared data source for staff, requests, availability, and schedules.",
          rationale:
            "Relational data and explicit workflow states reduce copying and make changes visible across connected operations.",
          tradeoffs: [
            "The application requires authentication, deployment, backups, and ongoing operational ownership.",
            "Data structure changes require managed database migrations.",
          ],
        },
      ],
      outcomes: [
        "The full requested feature set is implemented and in pilot use.",
        "The initial combined FOH and BOH schedule draft is generated in under ten seconds.",
        "Manager scheduling work decreased from approximately six to ten hours per week to no more than one hour, including review and adjustments.",
        "Availability-related human error decreased by more than 90%, according to management.",
        "The broader Gyu-Kaku Vancouver rollout is planned for September 2026.",
      ],
      reflection: [
        "The strongest result came from combining firsthand operational knowledge with direct stakeholder feedback rather than treating scheduling as an isolated technical problem.",
        "Future work can improve infeasibility explanations and make the effect of individual scheduling constraints easier for managers to inspect.",
      ],
    },
  },
  {
    slug: "kana-fighter",
    title: "Kana Fighter",
    shortTitle: "Kana Fighter",
    eyebrow: "Mobile learning game · Paid contract",
    summary:
      "A game-based mobile application that helps first-time Japanese learners practice Hiragana and Katakana through guided lessons, drills, pronunciation audio, battles, and sequential progression.",
    period: "August 2025 – August 2026",
    status: "TestFlight beta · Preparing for App Store release",
    role: "Contract React Native Developer & Technical Lead",
    team: "1 developer · 1 owner and content creator",
    tier: "selected",
    editorialStatus: "verified",
    technologies: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "NativeWind",
      "AsyncStorage",
      "React Native Reanimated",
      "React Native Gesture Handler",
      "Expo Audio",
    ],
    metrics: [
      {
        value: "10",
        label: "TestFlight testers",
        detail:
          "Testing included Japanese learners, developers, and people connected to the owner.",
      },
      {
        value: "iOS + Android",
        label: "Validated build targets",
        detail:
          "The Android build was validated locally but was not distributed through Google Play testing.",
      },
      {
        value: "Offline",
        label: "Local-first progress",
        detail: "Learning state and progression are stored on the device.",
      },
    ],
    links: [
      {
        label: "Private repository",
        href: "",
        kind: "repository",
        external: false,
        availability: "private",
      },
      {
        label: "Demo video coming soon",
        href: "",
        kind: "video",
        external: false,
        availability: "coming-soon",
      },
    ],
    caseStudy: {
      context: [
        "Memorizing Hiragana and Katakana can feel repetitive to first-time Japanese learners.",
        "The owner designed a quest-based learning concept, visual direction, learning content, and character assets to make early practice more approachable.",
        "Development included several pauses while new visual assets were being produced.",
        "The application needed to combine lessons, drills, audio, progression state, and animated encounters without depending on a backend service.",
      ],
      users: [
        "People beginning Japanese study with no prior Kana knowledge.",
        "English-language interface users learning Hiragana and Katakana.",
        "TestFlight participants evaluating usability, progression, and device behavior.",
      ],
      responsibilities: [
        "Technical planning",
        "Application architecture",
        "React Native and Expo development",
        "Navigation and state flow",
        "Local persistence design",
        "Animation and gesture implementation",
        "Audio integration",
        "Asset processing and optimization",
        "Testing and build validation",
      ],
      constraints: [
        "Product concept, content, Figma design, and original character assets were owned by Dylan Wood.",
        "Progress needed to persist locally without authentication or a backend.",
        "PNG-based character animation needed to remain responsive on lower-end devices.",
        "Learning state had to be initialized safely before dependent screens rendered.",
        "iOS deployment was performed through the owner’s account.",
        "Android builds were validated but not distributed through Google Play testing.",
      ],
      features: [
        "Guided onboarding",
        "Hiragana and Katakana lessons",
        "Pronunciation audio",
        "Timed and score-based drills",
        "Quest-based progression",
        "Story-driven battle sequences",
        "Sequential lesson and quest unlocks",
        "Correct and incorrect answer feedback",
        "Character animation",
        "Best-score tracking",
        "Local progress persistence",
        "Swipe interactions on Kana detail screens",
        "Offline use after required assets are available",
      ],
      decisions: [
        {
          title: "Use local-first persistence",
          problem:
            "The initial product did not require accounts, cross-device synchronization, or server-managed learning content.",
          options: [
            "Build a remote backend and user account system",
            "Use an embedded database",
            "Persist focused learning state with AsyncStorage",
          ],
          decision:
            "Store progress, unlock state, and scores locally with AsyncStorage.",
          rationale:
            "This matched the product scope, supported offline use, and avoided adding account and infrastructure complexity before it was needed.",
          tradeoffs: [
            "Progress does not synchronize between devices.",
            "Deleting application data removes local progress.",
            "State migrations must be handled carefully as the stored model evolves.",
          ],
        },
        {
          title: "Preload frame-based animation assets",
          problem:
            "Loading PNG frames only when an animation began could cause visible delays, especially on lower-end devices.",
          options: [
            "Load frames on demand",
            "Replace the supplied artwork with another animation format",
            "Prepare and preload the supplied PNG sequences",
          ],
          decision:
            "Process the supplied assets into consistent frame sequences and preload them before animation playback.",
          rationale:
            "This preserved the owner’s artwork while making battle and feedback animation more dependable.",
          tradeoffs: [
            "Frame sequences increase packaged asset size.",
            "Asset preparation and naming need a consistent pipeline.",
            "Memory usage must be considered when multiple sequences are available.",
          ],
        },
        {
          title: "Gate rendering on persisted-state initialization",
          problem:
            "Early test builds could render progression screens before AsyncStorage state had been created or loaded.",
          options: [
            "Allow screens to render with temporary defaults",
            "Initialize and hydrate application state before dependent UI renders",
          ],
          decision:
            "Introduce an explicit initialization state and delay dependent navigation until hydration completes.",
          rationale:
            "This prevents incorrect locked or unlocked state and removes timing-dependent startup errors.",
          tradeoffs: [
            "Startup requires a deliberate loading state.",
            "Initialization failures need a recoverable fallback.",
          ],
        },
      ],
      outcomes: [
        "The planned product scope has been implemented.",
        "The application completed a month-long TestFlight test with approximately ten testers.",
        "A startup race involving initial status creation and AsyncStorage hydration was identified and resolved during testing.",
        "Both iOS and Android builds were validated.",
        "The owner is responsible for final App Store deployment and release timing.",
      ],
      reflection: [
        "The project strengthened my ability to translate an externally defined visual and product concept into a maintainable mobile architecture.",
        "A future version could explore handwriting recognition and scoring, but that feature is outside the completed contract scope.",
      ],
    },
  },
  {
    slug: "rate-van-rent",
    title: "Rate Van Rent",
    shortTitle: "Rate Van Rent",
    eyebrow: "Early school project",
    summary:
      "A three-person school project for rating Vancouver rental experiences, retained as a compact record of an early collaborative web application.",
    period: "One academic term",
    status: "Completed",
    role: "Developer",
    team: "3 student developers",
    tier: "additional",
    editorialStatus: "verified",
    technologies: ["JavaScript", "Web application development"],
    metrics: [],
    links: [
      {
        label: "Repository",
        href: "https://github.com/shinn92dev/Rate-Van-Rent",
        kind: "repository",
        external: true,
        availability: "available",
      },
    ],
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    shortTitle: "Portfolio",
    eyebrow: "Personal project",
    summary:
      "The portfolio itself, designed and built as a structured presentation of product work, technical decisions, and professional experience.",
    period: "Ongoing",
    status: "In development",
    role: "Designer & Developer",
    team: "Independent project",
    tier: "additional",
    editorialStatus: "verified",
    technologies: [
      "React Router",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
    ],
    metrics: [],
    links: [
      {
        label: "Repository",
        href: "https://github.com/shinn92dev/portfolio",
        kind: "repository",
        external: true,
        availability: "available",
      },
    ],
  },
];

export const selectedProjects = projects.filter(
  (project) => project.tier === "selected",
);

export const additionalProjects = projects.filter(
  (project) => project.tier === "additional",
);

export function getProjectBySlug(slug: string | undefined) {
  if (!slug) {
    return undefined;
  }

  return projects.find((project) => project.slug === slug);
}
