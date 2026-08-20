import availabilityStartTime from "@/assets/gyukaku_portal/availability-start-time.webp";
import generatedDraft from "@/assets/gyukaku_portal/generated-draft.webp";
import heroDashboard from "@/assets/gyukaku_portal/hero-dashboard.webp";
import performanceHistory from "@/assets/gyukaku_portal/performance-history.webp";
import scheduleDiagnostics from "@/assets/gyukaku_portal/schedule-diagnostics.webp";

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
    heroMedia: {
      kind: "image",
      src: heroDashboard,
      alt: "Gyu-Kaku Portal manager dashboard showing staff, availability, vacation, performance-level, and scheduling operations.",
      label: "Operations overview",
      caption:
        "The manager dashboard brings staff administration, availability, vacation, performance levels, and schedule automation into one operational workspace.",
      orientation: "landscape",
    },
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
        "Staff records, availability, vacation requests, schedules, and performance information were distributed across spreadsheets, email, and direct messages.",
        "Managers manually copied and reconciled those sources while preparing separate FOH and BOH schedules.",
        "Formatting shifts, misplaced rows, similar employee names, and separately communicated time restrictions could produce incorrect availability records.",
        "Vacation requests were submitted by email and tracked separately, while blackout periods had to be announced and checked manually.",
        "Staff had limited visibility into request status, time-specific availability, and changes to their role-based performance levels.",
      ],
      users: [
        "Gyu-Kaku Vancouver staff submitting availability and time-off requests, viewing published schedules, and following their role-based performance history.",
        "Managers and supervisors reviewing requests, maintaining staff records, configuring operational requirements, and preparing schedules.",
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
        "Availability, approved vacation, roles, and time-specific working restrictions must be respected.",
        "A staff member cannot be assigned to overlapping shifts or receive an unauthorized double shift.",
        "Operational labels such as Closing must remain visible to staff while the solver uses estimated end times for conflict and workload calculations.",
        "Coverage, weekly-hour balance, fairness, and individual preferences should be optimized without bypassing eligibility rules.",
        "Managers must be able to adjust generation settings and edit the resulting draft before publication.",
        "A generated result must not overwrite a newer manual draft.",
        "Published schedules must preserve what staff saw at each publication point.",
        "The product and all public claims apply only to the authorized Gyu-Kaku Vancouver operation.",
      ],
      features: [
        "Staff and manager authentication",
        "Role-based authorization",
        "Staff profile and employment record management",
        "Availability submission with 15-minute start-time restrictions",
        "Missing-availability tracking and manager review",
        "Vacation requests, approval history, and blackout periods",
        "Automatic exclusion of approved vacations from scheduling",
        "Weekly FOH and BOH schedule management",
        "Google OR-Tools CP-SAT draft generation",
        "Configurable staffing targets and optional operational shifts",
        "Manual schedule editing and reassignment",
        "Scheduling conflict validation and override review",
        "Staffing-shortage and solver diagnostics",
        "Version-protected draft persistence",
        "Schedule publication and immutable published snapshots",
        "Staff-facing published schedule",
        "Role-based performance ratings, history, and visual trends",
        "Responsive staff and manager interfaces",
      ],
      media: [
        {
          kind: "image",
          src: availabilityStartTime,
          alt: "Weekly availability form with separate Lunch and Dinner selections and time-specific availability controls.",
          label: "Structured staff input",
          caption:
            "Staff can submit Lunch and Dinner availability with specific start times, removing the need to communicate exceptions through separate messages.",
          orientation: "landscape",
        },
        {
          kind: "image",
          src: generatedDraft,
          alt: "Generated FOH schedule draft displaying staff availability, assigned shifts, unavailable periods, and vacation states across the week.",
          label: "Editable schedule draft",
          caption:
            "The generated draft combines availability and assigned shifts in one weekly view. Managers can review the result before saving or publishing it.",
          orientation: "landscape",
        },
        {
          kind: "image",
          src: scheduleDiagnostics,
          alt: "Schedule-generation result showing assignment count, unfilled targets, generation time, optimization score, and staffing shortages.",
          label: "Actionable diagnostics",
          caption:
            "A valid partial result is preserved while unfilled staffing targets are reported by date, service, and role. Managers can see where operational review is required instead of receiving only a generic solver failure.",
          orientation: "landscape",
        },
        {
          kind: "image",
          src: performanceHistory,
          alt: "Staff performance-level screen showing role-specific metrics, evaluation notes, and a historical level chart.",
          label: "Visible performance history",
          caption:
            "Staff can review the metrics, notes, and historical changes behind their role-based performance level rather than seeing only the latest result.",
          orientation: "landscape",
        },
      ],
      visuals: [
        {
          kind: "comparison",
          title: "From fragmented coordination to shared operational data",
          description:
            "The portal brings staff inputs, manager decisions, and published schedules into one traceable workflow.",
          beforeLabel: "Before",
          afterLabel: "With the portal",
          before: [
            "Staff submit availability through shared spreadsheets.",
            "Time-specific restrictions are sent separately by message.",
            "Vacation requests and blackout periods are tracked through email and announcements.",
            "Managers manually reconcile the information before building FOH and BOH schedules.",
          ],
          after: [
            "Staff submit structured availability and start-time restrictions.",
            "Vacation requests, approvals, and blackout periods share one source of truth.",
            "Validated operational data becomes input for schedule generation.",
            "Managers review and edit the draft before publishing a preserved staff-facing schedule.",
          ],
          caption:
            "The product reduces manual transcription without removing manager review or operational judgment.",
        },
        {
          kind: "architecture",
          title: "How a schedule becomes an editable draft",
          description:
            "The solver is one part of a broader workflow that validates inputs, protects newer work, and reports incomplete coverage.",
          ariaLabel:
            "Architecture showing operational inputs passing through candidate filtering, OR-Tools, validation, editable draft storage, and publication.",
          layers: [
            {
              label: "Operational inputs",
              technologies: [
                "Staff records",
                "Roles",
                "Availability",
                "Approved vacation",
                "Daily settings",
                "Policy version",
              ],
              description:
                "Manager settings and staff-submitted operational data define the scheduling problem for a specific week.",
            },
            {
              label: "Candidate filtering",
              technologies: [
                "Role eligibility",
                "Availability windows",
                "Vacation exclusion",
                "Overlap checks",
              ],
              description:
                "Invalid candidates are removed before optimization so the solver cannot fill coverage by breaking non-negotiable rules.",
            },
            {
              label: "Optimization",
              technologies: [
                "Google OR-Tools",
                "CP-SAT",
                "Hard constraints",
                "Weighted objectives",
              ],
              description:
                "CP-SAT searches for the strongest valid draft while balancing coverage, hours, fairness, and operational preferences.",
            },
            {
              label: "Validation and diagnostics",
              technologies: [
                "Shortage reporting",
                "Conflict validation",
                "Version checks",
              ],
              description:
                "The backend preserves valid assignments, reports coverage shortages, and prevents an older generation result from replacing newer manager edits.",
            },
            {
              label: "Manager-controlled output",
              technologies: [
                "Editable draft",
                "Manual reassignment",
                "Published snapshot",
              ],
              description:
                "Managers retain final control, review diagnostics, adjust assignments, and publish an immutable staff-facing schedule.",
            },
          ],
        },
        {
          kind: "comparison",
          title: "Hard rules and weighted objectives",
          description:
            "The model distinguishes assignments that must never occur from operational goals that should be balanced.",
          beforeLabel: "Hard constraints",
          afterLabel: "Soft objectives",
          before: [
            "Respect submitted availability and start-time restrictions.",
            "Exclude approved vacation dates.",
            "Assign only staff eligible for the required role.",
            "Prevent overlapping or unauthorized double shifts.",
            "Respect individual hard-hour limits.",
          ],
          after: [
            "Improve coverage across each role and service.",
            "Balance weekly hours and assignment fairness.",
            "Account for role and service preferences.",
            "Support busier days and optional operational coverage.",
            "Return the strongest valid partial draft when full coverage is impossible.",
          ],
          caption:
            "A valid partial schedule with explicit shortages is safer than a complete-looking schedule that assigns unavailable or ineligible staff.",
        },
      ],
      decisions: [
        {
          title: "Use a proven constraint solver",
          problem:
            "Scheduling required availability, vacation, role eligibility, overlapping shifts, weekly hours, coverage, and staff preferences to be evaluated together.",
          options: [
            "Keep schedule creation entirely manual",
            "Add automated draft generation with an established constraint solver",
          ],
          decision:
            "Use Google OR-Tools CP-SAT to generate an initial schedule draft.",
          rationale:
            "Rather than building and validating a custom optimization engine, I used a mature, freely available solver and focused on accurately modeling the restaurant’s operational rules.",
          tradeoffs: [
            "The quality of the output depends on accurate operational data and carefully modeled constraints.",
            "Constraint and objective changes require representative schedule scenarios and regression testing.",
            "Solver output still requires clear diagnostics and manager review.",
          ],
        },
        {
          title: "Separate hard constraints from operational objectives",
          problem:
            "Treating every staffing preference as mandatory could make an entire week infeasible, while treating eligibility rules as preferences could create invalid assignments.",
          options: [
            "Require every staffing and preference rule to be satisfied",
            "Use penalties for all rules and allow any rule to be violated",
            "Separate non-negotiable eligibility rules from weighted operational objectives",
          ],
          decision:
            "Model availability, vacation, role eligibility, overlap, and individual hard-hour limits as hard constraints, while treating coverage, fairness, weekly-hour balance, and preferences as weighted objectives.",
          rationale:
            "The solver can produce the best valid partial draft when full coverage is impossible without assigning someone to a shift they cannot work.",
          tradeoffs: [
            "A successful generation does not necessarily mean that every position is filled.",
            "Managers must review shortage diagnostics before publishing.",
            "Soft-rule weights can produce valid but operationally unsatisfying results if they are configured poorly.",
          ],
        },
        {
          title: "Keep automatic output editable",
          problem:
            "Restaurant schedules are affected by situational judgment that may not be fully represented in an optimization model.",
          options: [
            "Publish the generated schedule automatically",
            "Return multiple schedules for managers to compare",
            "Insert one generated result into the existing editable draft workflow",
          ],
          decision:
            "Return an editable draft that passes the same validation as manually created assignments.",
          rationale:
            "Managers retain final control while the solver removes most of the repetitive assignment work.",
          tradeoffs: [
            "The workflow is not completely automatic.",
            "Manual edits still require conflict validation and explicit publication state.",
            "The product must clearly distinguish generated assignments, saved drafts, and published schedules.",
          ],
        },
        {
          title: "Report partial coverage instead of discarding valid work",
          problem:
            "Real staffing shortages can make full coverage impossible even when many valid assignments are available.",
          options: [
            "Fail the complete generation when one position cannot be filled",
            "Relax employee eligibility rules",
            "Save the valid portion and report the uncovered requirements",
          ],
          decision:
            "Generate the best valid partial draft and return diagnostics describing the affected date, service, role, target, assigned count, and shortage.",
          rationale:
            "Managers can continue from useful work without the system assigning unavailable or ineligible staff.",
          tradeoffs: [
            "Managers must understand that a generated draft may still be incomplete.",
            "The interface must distinguish staffing shortages from invalid policies and solver failures.",
            "Candidate exclusion explanations can be improved further.",
          ],
        },
        {
          title: "Separate displayed tasks from solver time estimates",
          problem:
            "Restaurant schedules use operational labels such as Closing, Break Cover, Helper, and Prep, but overlap and weekly workload calculations require a concrete time range.",
          options: [
            "Replace every operational label with a fixed displayed end time",
            "Exclude task-based shifts from overlap and workload calculations",
            "Preserve the displayed task while using a solver-only estimated end time",
          ],
          decision:
            "Store the operational label for the schedule and use role- and day-specific estimated end times only inside solver calculations.",
          rationale:
            "The schedule remains familiar to staff while the optimization model can detect conflicts, evaluate double shifts, and estimate weekly workload.",
          tradeoffs: [
            "Estimated times must not be presented as confirmed working hours.",
            "Role- and day-specific estimates require policy maintenance.",
            "Workload calculations remain estimates for task-based shifts.",
          ],
        },
        {
          title: "Protect manual work with optimistic concurrency",
          problem:
            "A manager can edit an existing draft while schedule generation is running, allowing a late solver result to overwrite newer manual work.",
          options: [
            "Always replace the current draft with the generated result",
            "Prevent all editing while generation runs",
            "Validate the draft version again before saving the result",
          ],
          decision:
            "Send the expected draft lock version with generation and reject the result if the draft changes before persistence.",
          rationale:
            "Managers can continue working without risking silent data loss from a stale generation result.",
          tradeoffs: [
            "A rejected result may need to be generated again.",
            "The client must present version conflicts clearly.",
            "Draft mutations must consistently participate in version checks.",
          ],
        },
        {
          title: "Connect operational workflows through one data source",
          problem:
            "Separate spreadsheets, email, and messages caused staff information, availability, vacation, schedules, and performance history to drift out of sync.",
          options: [
            "Improve the existing spreadsheet templates",
            "Create separate tools for each workflow",
            "Connect the workflows through one application and relational database",
          ],
          decision:
            "Use PostgreSQL as the shared data source for staff, requests, availability, schedules, publication history, and role-based performance records.",
          rationale:
            "Approved information can affect downstream workflows directly without being copied and checked again.",
          tradeoffs: [
            "The application requires authentication, migrations, backups, deployment, and ongoing operational ownership.",
            "Changes to connected workflows can affect several domains and require broader validation.",
            "The private operational system requires careful demo-data and disclosure controls.",
          ],
        },
      ],
      outcomes: [
        "The complete agreed feature scope was implemented before the pilot and is currently in active use.",
        "The initial combined FOH and BOH schedule draft is generated in under ten seconds.",
        "Manager scheduling work decreased from approximately six to ten hours per week to no more than one hour, including review and adjustment.",
        "Availability-related human error decreased by approximately 90%, according to the Gyu-Kaku Vancouver management team.",
        "Staff can submit time-specific availability without sending a separate message to a manager.",
        "Vacation requests, blackout periods, approval status, and scheduling eligibility now share one workflow.",
        "Staff feedback indicated that role-based performance changes and their contributing metrics became easier to follow through the visual history.",
        "No major new workflow problem has been identified during the pilot so far.",
        "The broader Gyu-Kaku Vancouver rollout is planned for September 2026.",
      ],
      reflection: [
        "The most important lesson was that optimization quality depends more on domain modeling than on the solver itself. I chose OR-Tools instead of building a custom scheduling algorithm so I could focus on translating real restaurant operations into reliable constraints, validation, and manager workflows.",
        "Building the manual draft and publication lifecycle before automation proved valuable. The solver does not control the operation; it creates an editable starting point that managers can review and adjust.",
        "I am particularly satisfied that the product serves both sides of the workplace. Managers gain a faster scheduling workflow, while staff can submit precise availability, manage vacation requests, view published schedules, and follow changes in their role-based performance levels.",
        "If I rebuilt the scheduling architecture, I would persist each generation attempt with its policy version, daily inputs, solver status, objective breakdown, diagnostics, execution time, and resulting draft version.",
        "I would also strengthen manager-facing explainability so the system could show not only where staffing is short, but why individual candidates were excluded.",
        "The current synchronous execution remains appropriate because generation completes in under ten seconds. I would introduce background jobs only if scheduling volume or model complexity made synchronous requests unreliable.",
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
        "Memorizing Hiragana and Katakana can feel repetitive and disconnected from meaningful progress for first-time Japanese learners.",
        "Dylan Wood defined the learning concept, pedagogy, Figma design, character artwork, and original visual and audio assets.",
        "I was responsible for translating that creative direction into a complete React Native application and maintainable technical architecture.",
        "The application needed to connect lessons, pronunciation, drills, typed-answer battles, stories, animation, audio, and sequential progression without depending on a backend service.",
        "Development included pauses while new visual assets were produced, making a sustainable asset-production boundary especially important.",
      ],
      users: [
        "People beginning Japanese study with no prior Kana knowledge.",
        "Learners using an English-language interface to study Hiragana and Katakana.",
        "TestFlight participants evaluating learning flow, readability, progression, and device behavior.",
      ],
      responsibilities: [
        "Technical planning and application architecture",
        "React Native, Expo, and TypeScript development",
        "Screen implementation from the owner’s Figma designs",
        "Navigation and learning-flow orchestration",
        "Local persistence architecture",
        "Drill and Quest game logic",
        "Progression and unlock state",
        "Animation, gesture, and audio integration",
        "Python-based asset processing and optimization",
        "Responsive interface implementation",
        "EAS and native build configuration",
        "iOS and Android build validation",
        "Manual testing and TestFlight issue resolution",
      ],
      constraints: [
        "The product concept, pedagogy, learning content, Figma design, and original visual and audio assets were owned by Dylan Wood.",
        "Progress needed to persist locally without authentication, a backend, or a network connection.",
        "Learning, story, battle, and unlock states had to remain consistent across navigation and application restarts.",
        "Frame-based character animation needed to remain responsive on the iPhone SE and older iPhone models.",
        "Animation, audio, health changes, answer input, and result navigation needed to occur in a controlled sequence.",
        "Raw player and opponent frames required consistent composition, dimensions, layering, naming, and optimization before integration.",
        "The interface needed to remain readable across different screen sizes, safe areas, and keyboard states.",
        "iOS deployment was performed through the owner’s account.",
        "Android builds were validated but were not distributed through Google Play testing.",
      ],
      features: [
        "Guided intro story and contextual tutorial",
        "Hiragana and Katakana learning maps",
        "Fifteen progression rows for each Kana mode",
        "Basic Kana, Dakuten, and Handakuten content",
        "Kana detail screens with Romaji and pronunciation audio",
        "Swipe navigation between Kana details",
        "Kana-to-Romaji multiple-choice drills",
        "Randomized Drill questions and answer order",
        "Correct and incorrect Drill feedback",
        "Row-level high-score persistence",
        "Typed-answer Quest battles",
        "Accepted Romaji answer normalization",
        "Player and enemy health systems",
        "Character attack and damage animation",
        "Background music and effect audio",
        "Input locking during battle feedback",
        "Intro, pre-battle, and post-battle stories",
        "Sequential row and mode unlocks",
        "Victory, defeat, and retry flows",
        "Hiragana completion and Katakana unlock",
        "Shareable completion certificate",
        "Background and effect-sound settings",
        "Local progress reset",
        "Google Form feedback and email bug reporting",
        "Offline learning after bundled assets are available",
      ],
      visuals: [
        {
          kind: "flow",
          title: "A learning loop built around visible progress",
          description:
            "Each activity prepares the learner for the next step instead of presenting disconnected exercises.",
          ariaLabel:
            "Kana Fighter learning loop from learning and listening through drills, battles, feedback, and progression.",
          steps: [
            {
              title: "Learn",
              description:
                "Explore a Kana row with its characters, Romaji readings, and structured lesson content.",
            },
            {
              title: "Listen",
              description:
                "Use pronunciation audio to connect each visual character with its sound.",
            },
            {
              title: "Drill",
              description:
                "Practice recognition through randomized multiple-choice questions and immediate feedback.",
            },
            {
              title: "Battle",
              description:
                "Recall the answer by typing Romaji during a character-based Quest encounter.",
            },
            {
              title: "Receive feedback",
              description:
                "See the answer, animation, audio response, score, and health change as one controlled sequence.",
            },
            {
              title: "Unlock",
              description:
                "Complete the row, preserve progress locally, and open the next stage of the learning path.",
            },
          ],
        },
        {
          kind: "architecture",
          title: "From original artwork to application-ready animation",
          description:
            "A Python and Pillow pipeline removed repetitive composition work while keeping creative ownership with the owner.",
          ariaLabel:
            "Asset production architecture from owner-created character frames through Python processing and Expo preloading to in-app animation.",
          layers: [
            {
              label: "Original artwork",
              technologies: [
                "Owner-created frames",
                "Player actions",
                "Opponent actions",
                "Transparent PNG",
              ],
              description:
                "Dylan Wood creates the characters and original action frames while retaining control of the visual direction.",
            },
            {
              label: "Automated preparation",
              technologies: [
                "Python",
                "Pillow",
                "Frame validation",
                "Layer composition",
              ],
              description:
                "The processing tool validates naming and dimensions, aligns player and opponent frames, applies layering rules, and creates consistent combined sequences.",
            },
            {
              label: "Output optimization",
              technologies: [
                "Cropping",
                "Resizing",
                "Contact sheets",
                "Predictable filenames",
              ],
              description:
                "Processed assets receive consistent bounds and naming so they can be reviewed and mapped into the application without repeated manual adjustment.",
            },
            {
              label: "Runtime preparation",
              technologies: [
                "Static asset maps",
                "Expo Asset",
                "Row-specific preload",
              ],
              description:
                "The application collects and preloads only the animation frames required for the current Kana row before interaction begins.",
            },
            {
              label: "Battle playback",
              technologies: [
                "React Native Reanimated",
                "Audio feedback",
                "Completion callbacks",
              ],
              description:
                "Preloaded frames, audio, health changes, and navigation advance through an explicit battle sequence.",
            },
          ],
        },
        {
          kind: "comparison",
          title: "Choosing a smaller UI foundation",
          description:
            "A broad component library added styling layers that were not helping this highly customized game interface.",
          beforeLabel: "Initial approach",
          afterLabel: "Revised approach",
          before: [
            "Gluestack components supplied a broad generated UI layer.",
            "NativeWind utilities did not always override Gluestack styles as expected.",
            "Visual issues required tracing styles across multiple systems.",
            "The dependency and generated-component footprint exceeded the needs of the application.",
          ],
          after: [
            "React Native primitives provide the base behavior.",
            "NativeWind handles the primary styling layer.",
            "Focused shared components cover genuinely repeated interactions.",
            "The approved Figma design remains unchanged while design-related debugging becomes more direct.",
          ],
          caption:
            "After I explained the trade-offs, the owner agreed to the change. Development speed remained stable, while styling problems became faster to identify and resolve.",
        },
      ],
      decisions: [
        {
          title: "Use a local-first progression architecture",
          problem:
            "The initial product needed persistent learning progress but did not require accounts, social features, cross-device synchronization, or server-managed content.",
          options: [
            "Build a backend and user account system",
            "Use an embedded relational database",
            "Persist the focused learning state with AsyncStorage",
          ],
          decision:
            "Store intro state, Kana progression, unlock state, sound options, and Drill high scores locally with AsyncStorage.",
          rationale:
            "This reduced onboarding friction, supported offline use, and avoided adding account and infrastructure complexity that the product did not yet need.",
          tradeoffs: [
            "Progress does not synchronize between devices.",
            "Deleting application data removes local progress.",
            "Stored data changes require explicit initialization, normalization, and migration behavior.",
            "Future account support would require a deliberate migration path.",
          ],
        },
        {
          title: "Separate curriculum data from screen logic",
          problem:
            "Kana characters, pronunciation, Drill choices, Quest vocabulary, accepted Romaji answers, stories, audio, and animation mappings formed a connected content system that would be difficult to maintain inside screen components.",
          options: [
            "Embed learning content directly in each screen",
            "Introduce a remote content-management backend",
            "Keep the curriculum in typed static data and generated JSON",
          ],
          decision:
            "Store curriculum and asset relationships outside screen logic and generate the Quest answer map from source vocabulary with a TypeScript script.",
          rationale:
            "The approach kept the product data-driven without introducing a backend or requiring dynamic asset imports that would conflict with the React Native bundle.",
          tradeoffs: [
            "Changing a Kana row key can affect several related maps.",
            "Content relationships require cross-file consistency checks.",
            "The owner cannot edit released learning content through an external CMS.",
            "Generated JSON must remain synchronized with its source script.",
          ],
        },
        {
          title: "Preload row-specific animation assets",
          problem:
            "Loading frame-based character assets only when an animation began could cause visible interruptions, particularly on smaller and older devices.",
          options: [
            "Load frames only when each animation starts",
            "Replace the supplied artwork with a different animation format",
            "Preload the frame assets required for the current Kana row",
          ],
          decision:
            "Collect and preload the sprite sources required for the active row before enabling the Quest.",
          rationale:
            "This preserved the owner’s supplied artwork while making battles and feedback more dependable on devices including the iPhone SE and older iPhone models.",
          tradeoffs: [
            "Frame sequences increase the packaged asset size.",
            "Preloading introduces a deliberate transition before interaction.",
            "Memory use must be considered when preparing each row’s asset set.",
            "An individual asset failure still requires a graceful fallback.",
          ],
        },
        {
          title: "Sequence battle feedback before advancing state",
          problem:
            "Answer submission affected game state, audio, animation, health, input, and navigation. Repeated input or premature navigation could cause those systems to become visually inconsistent.",
          options: [
            "Apply every state change immediately after submission",
            "Use fixed delays for all state transitions",
            "Lock input and advance through animation-completion callbacks",
          ],
          decision:
            "Treat each answer as a controlled sequence: lock input, play sound and animation, apply damage, wait for the animation cycle, and then advance or navigate.",
          rationale:
            "The visible battle feedback remains synchronized with the underlying game state, and repeated taps cannot create conflicting submissions.",
          tradeoffs: [
            "Animation components and game state require an explicit completion contract.",
            "Interrupted animations need safe fallback behavior.",
            "Timing and audio lifecycle behavior require device testing.",
          ],
        },
        {
          title: "Automate animation asset preparation",
          problem:
            "The owner initially planned to deliver fully composited player and opponent frames, but manually combining every character and action would have created a significant repetitive workload.",
          options: [
            "Have the owner manually produce every combined frame",
            "Compose and adjust each frame manually during application development",
            "Separate original artwork from an automated processing pipeline",
          ],
          decision:
            "Keep original artwork production with the owner and automate frame validation, composition, alignment, layering, cropping, resizing, and previews with Python and Pillow.",
          rationale:
            "The division preserved the owner’s creative control while removing mechanical asset work and producing a predictable structure for application integration.",
          tradeoffs: [
            "The processing scripts and their naming conventions became part of the production workflow.",
            "Input sequences must follow consistent frame names and folder structures.",
            "Pipeline changes need to remain synchronized with the application’s static asset maps.",
          ],
        },
        {
          title: "Replace Gluestack with focused native components",
          problem:
            "Gluestack component styles sometimes prevented NativeWind classes from producing the expected result, making visual problems difficult to trace across multiple styling layers.",
          options: [
            "Continue overriding Gluestack components",
            "Add another wrapper layer around Gluestack",
            "Replace the used components with React Native primitives and focused custom components",
          ],
          decision:
            "After discussing the trade-offs with the owner, preserve the approved visual design while replacing Gluestack with React Native primitives, NativeWind, and purpose-built shared components.",
          rationale:
            "The application used a relatively small set of highly customized game interactions and did not benefit enough from a broad generated UI system to justify its styling and maintenance cost.",
          tradeoffs: [
            "The project became responsible for maintaining its own shared component behavior.",
            "Accessibility and interaction states must be handled deliberately.",
            "Future general-purpose UI requirements may justify adopting selected external primitives.",
          ],
        },
        {
          title: "Initialize persisted progression before dependent UI",
          problem:
            "Early TestFlight builds could read progression state before the initial AsyncStorage records were ready, producing incorrect locked or unlocked UI during startup.",
          options: [
            "Render temporary default progression immediately",
            "Block the entire application behind one global hydration screen",
            "Centralize initialization and delay only progression-dependent UI until its stored state is ready",
          ],
          decision:
            "Centralize game-data initialization, normalize stored Kana status against the current schema, and delay progression-dependent Home controls until the relevant state has loaded.",
          rationale:
            "This prevents incorrect unlock states and provides recovery behavior for missing or malformed Kana progress without adding a global state-management dependency.",
          tradeoffs: [
            "Some screens require an explicit loading or hidden state.",
            "Intro, options, and Drill data do not yet have the same normalization depth as Kana progression.",
            "Local initialization behavior still requires testing with both new and existing application data.",
          ],
        },
      ],
      outcomes: [
        "The planned contract scope has been implemented.",
        "The application completed approximately one month of TestFlight testing with around ten participants.",
        "Both iOS and Android builds were validated.",
        "A first-launch issue involving initial progress creation and AsyncStorage loading was identified and addressed.",
        "TestFlight feedback about margins, text size, and readability led to responsive typography and spacing improvements.",
        "The interface was reviewed on the iPhone SE and older iPhone models.",
        "Replacing Gluestack did not reduce development speed and shortened design-related debugging.",
        "The Gluestack cleanup removed approximately thirty unused UI dependencies and thousands of lines of generated component code.",
        "The Python/Pillow pipeline reduced repetitive animation-composition work while preserving the owner’s original artwork.",
        "The owner is preparing the App Store deployment.",
        "Android distribution testing through Google Play remains pending.",
      ],
      reflection: [
        "Kana Fighter taught me that technical leadership in a small client project is often about defining the right production boundary. The owner had a clear creative direction, while I was responsible for explaining which implementation choices would make that direction sustainable.",
        "I initially assumed that using a comprehensive UI library would accelerate development. In practice, Gluestack’s styles sometimes conflicted with NativeWind and made design issues harder to trace. After discussing the trade-offs with the owner, I replaced it with React Native primitives and a small set of custom components. Development speed remained stable, while design-related debugging became faster.",
        "The animation workflow led to a similar lesson. Asking the owner to manually produce every combined frame would have created an asset bottleneck. By separating original artwork from automated composition, I preserved the visual direction while reducing repetitive work through a Python and Pillow pipeline.",
        "I am most satisfied with how a typed answer becomes a complete battle interaction. Input locking, audio, character animation, damage, progression, and navigation work as one sequence, helping the product feel like a game rather than a quiz with decorative graphics.",
        "TestFlight reinforced that a design is not complete when it matches one screen. Feedback about margins, typography, and readability required testing and adjusting the application across smaller and older devices.",
        "If I revisited the application, I would add versioned migration and validation for every persisted data group, introduce automated tests around the complete story, battle, and unlock flow, and add reduced-motion support.",
        "I would retain the local-first architecture and smaller custom component system for the current product scope, while defining a clear migration boundary if cross-device progress became a real requirement.",
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
