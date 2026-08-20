import type { SiteContent } from "../types";

export const siteContent = {
  identity: {
    displayName: "Anthony Shin",
    fullName: "Anthony Seunghwan Shin",
    role: "풀스택 개발자",
    positioning:
      "현실의 제약을 명확하고 신뢰할 수 있는 제품으로 바꾸는 풀스택 개발자입니다.",
    location: "캐나다 브리티시컬럼비아주 밴쿠버",
    availability:
      "정규직과 계약직 기회를 모두 검토하고 있으며, 정규직을 우선으로 찾고 있습니다.",
  },
  metadata: {
    siteUrl: "https://anthonydev.me",
    defaultTitle: "Anthony Shin — 풀스택 개발자",
    titleTemplate: "%s — Anthony Shin",
    description:
      "밴쿠버에서 활동하는 제품 중심 풀스택 개발자 Anthony Shin의 포트폴리오입니다.",
  },
  shell: {
    skipToContentLabel: "본문으로 건너뛰기",
    mainNavigationLabel: "주요 메뉴",
    openMenuLabel: "메뉴 열기",
    closeMenuLabel: "메뉴 닫기",
    themeToggleLabel: "색상 테마 전환",
    lightThemeLabel: "라이트 테마로 전환",
    darkThemeLabel: "다크 테마로 전환",
    languageLabel: "언어",
    comingSoonLabel: "준비 중",
    footerNavigationLabel: "푸터 메뉴",
    socialLinksLabel: "소셜 링크",
    copyright: "Anthony Shin. All rights reserved.",
  },
  contact: { email: "anthony.seunghwan.shin@gmail.com" },
  navigation: [
    { label: "홈", href: "/" },
    { label: "프로젝트", href: "/work" },
    { label: "프로필", href: "/profile" },
    { label: "연락처", href: "/#contact" },
  ],
  languages: [
    { code: "en", label: "EN", enabled: true },
    { code: "ko", label: "KR", enabled: true },
    { code: "ja", label: "JP", enabled: true },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/shinn92dev", external: true },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anthony-shin/",
      external: true,
    },
  ],
  resume: { label: "이력서", href: "/Resume_Anthony-Shin_250718.pdf" },
  home: {
    heroEyebrow: "제품 중심 풀스택 개발자",
    locationLabel: "활동 지역",
    availabilityLabel: "현재",
    portraitAlt: "밴쿠버에서 활동하는 풀스택 개발자 Anthony Shin의 사진.",
    portraitStatus: "",
    primaryActionsLabel: "주요 작업",
    secondaryLinksLabel: "프로페셔널 링크",
    selectedWorkEyebrow: "주요 프로젝트",
    selectedWorkTitle: "현실의 운영 제약 속에서 만든 제품.",
    selectedWorkDescription:
      "레스토랑 운영 플랫폼과 게임형 일본어 학습 앱을 통해 제품 기획, 풀스택 엔지니어링, 모바일 개발과 안정적인 실행 역량을 보여줍니다.",
    selectedWorkProductLabel: "제품",
    selectedWorkUserLabel: "주요 사용자",
    selectedWorkResponsibilityLabel: "담당 범위",
    selectedWorkDecisionLabel: "핵심 결정",
    selectedWorkOutcomeLabel: "근거",
    selectedWorkStatusLabel: "상태",
    selectedWorkTechnologyLabel: "주요 기술",
    capabilityEyebrow: "핵심 역량",
    capabilityTitle: "모호한 요구사항을 실제 동작하는 소프트웨어로.",
    capabilityEvidenceLabel: "주요 프로젝트의 근거",
    capabilities: [
      {
        title: "제품 엔지니어링",
        description:
          "불완전한 요구사항과 운영 맥락을 구체적인 제품 흐름으로 정리합니다.",
        evidence: [
          "레스토랑 현장 경험을 바탕으로 Gyu-Kaku Portal을 직접 제안하고 범위를 정의했습니다.",
          "Kana Fighter의 외부 기획, 콘텐츠와 비주얼 디자인을 완성된 모바일 제품으로 구현했습니다.",
        ],
        projectSlugs: ["gyu-kaku-portal", "kana-fighter"],
      },
      {
        title: "풀스택 시스템",
        description:
          "인터페이스, API, 데이터 모델, 권한, 최적화와 배포를 하나의 시스템으로 설계합니다.",
        evidence: [
          "React, FastAPI, PostgreSQL, OR-Tools, Docker와 VPS 인프라 전반에서 Gyu-Kaku Portal을 구축했습니다.",
          "Kana Fighter를 진행 상태 저장, 오디오와 애니메이션을 갖춘 로컬 우선 React Native 앱으로 설계했습니다.",
        ],
        projectSlugs: ["gyu-kaku-portal", "kana-fighter"],
      },
      {
        title: "기술 리더십",
        description:
          "결정을 명확히 설명하고 트레이드오프를 공유하며 결과물의 완성까지 책임집니다.",
        evidence: [
          "Gyu-Kaku Portal의 이해관계자 조사부터 파일럿 교육까지 단독 개발자로 수행했습니다.",
          "Kana Fighter의 기술 구조, 구현, 테스트와 빌드 검증을 주도했습니다.",
        ],
        projectSlugs: ["gyu-kaku-portal", "kana-fighter"],
      },
    ],
    profileLinkLabel: "프로필 보기",
    workLinkLabel: "주요 프로젝트 보기",
    careerEyebrow: "경력의 맥락",
    careerTitle: "기술영업에서 제품 엔지니어링으로.",
    careerIntroduction:
      "반도체 소재 기술영업으로 커리어를 시작해 한국과 일본의 엔지니어 사이에서 고객 요구를 실행 가능한 결정으로 바꾸는 일을 했습니다. 제약을 이해하고 이해관계자를 조율하며 운영을 개선하던 경험은 자연스럽게 소프트웨어로 이어졌습니다. 지금은 요구사항과 아키텍처부터 구현과 전달까지 제품 전 과정을 담당합니다.",
    softwareExperienceLabel: "소프트웨어 및 제품 경험",
    earlierExperienceLabel: "이전 경력",
    careerPeriodLabel: "기간",
    careerRoleLabel: "역할",
    softwareExperience: [
      {
        experienceId: "gyu-kaku-portal",
        summary:
          "레스토랑 현장에서 발견한 문제를 별도 유급 내부 제품으로 발전시키고, 최초 제안부터 파일럿 도입까지 전 과정을 맡았습니다.",
      },
      {
        experienceId: "kana-fighter",
        summary:
          "오너의 학습 컨셉, 콘텐츠와 비주얼 방향을 완성된 React Native 앱으로 구현했습니다.",
      },
      {
        experienceId: "skyline-zipline",
        summary:
          "BCIT Practicum에서 3인 팀과 고객 커뮤니케이션을 이끌며 장비 등록, 검사 흐름과 데이터 이전에 기여했습니다.",
      },
    ],
    earlierExperience: [
      {
        experienceId: "hitachi-chemical",
        summary:
          "기술 요구사항을 해석하고 일본 엔지니어와 고객 팀을 조율하며 제약을 협상하고 사업 성과까지 책임지는 법을 배웠습니다.",
      },
      {
        experienceId: "gyu-kaku-service",
        summary:
          "밴쿠버의 빠른 영어권 레스토랑 환경에서 인력, 스케줄, 교육과 교대 운영을 직접 경험했습니다.",
      },
    ],
    personalNoteLabel: "일 밖에서는",
    personalNote:
      "한국어, 일본어, 영어로 일하며, 밴쿠버의 트레일을 걷거나 좋은 커피와 차를 즐기며 재충전합니다.",
    contactEyebrow: "연락처",
    contactTitle: "쓸모 있는 제품을 함께 만들어요.",
    contactDescription:
      "제품에 대한 사고, 명확한 커뮤니케이션과 직접 구현하는 역량이 중요한 정규직 및 계약직 기회에 관심이 있습니다.",
    contactLinksLabel: "연락처 및 프로페셔널 링크",
    contactLocationLabel: "활동 지역",
    emailLabel: "Anthony에게 이메일 보내기",
  },
  work: {
    pageEyebrow: "프로젝트 목록",
    pageTitle: "프로젝트",
    pageDescription:
      "풀스택 제품, 모바일 앱, 최적화와 고객 프로젝트를 아우르는 주요 케이스 스터디와 추가 프로젝트입니다.",
    selectedTitle: "주요 케이스 스터디",
    selectedDescription:
      "제품 기획, 풀스택 엔지니어링, 모바일 개발과 기술적 의사결정을 보여주는 두 개의 독립적인 제품입니다.",
    additionalTitle: "추가 프로젝트",
    additionalDescription:
      "꾸준한 개발 경험을 간결하게 보여주기 위해 남겨 둔 초기 및 보조 프로젝트입니다.",
    projectCountLabel: "프로젝트",
    productTypeLabel: "제품 유형",
    roleLabel: "역할",
    periodLabel: "기간",
    statusLabel: "상태",
    evidenceLabel: "주요 근거",
    decisionLabel: "기술 방향",
    technologyLabel: "주요 기술",
    projectLinksLabel: "프로젝트 링크",
    viewCaseStudyLabel: "케이스 스터디 보기",
    viewDemoLabel: "데모 열기",
    privateRepositoryLabel: "비공개 저장소",
  },
  caseStudy: {
    overviewTitle: "개요",
    contextTitle: "배경",
    usersTitle: "사용자",
    responsibilitiesTitle: "담당 범위",
    constraintsTitle: "제약사항",
    featuresTitle: "구현 기능",
    decisionsTitle: "기술적 결정",
    outcomesTitle: "결과",
    reflectionTitle: "회고",
    technologyTitle: "기술",
    linksTitle: "프로젝트 링크",
    backLabel: "프로젝트로 돌아가기",
    sectionIndexLabel: "케이스 스터디 목차",
    projectDetailsLabel: "프로젝트 정보",
    roleLabel: "역할",
    teamLabel: "팀",
    periodLabel: "기간",
    statusLabel: "상태",
    outcomesLabel: "측정 결과",
    unavailableLinkLabel: "공개되지 않음",
    nextProjectLabel: "다음 케이스 스터디",
    decisionProblemLabel: "문제",
    decisionOptionsLabel: "검토한 선택지",
    decisionLabel: "결정",
    decisionRationaleLabel: "선택 이유",
    tradeoffsLabel: "트레이드오프",
  },
} satisfies SiteContent;
