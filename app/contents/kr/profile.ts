import type { ProfileContent } from "../types";

export const profileContent: ProfileContent = {
  pageTitle: "프로필",
  pageDescription:
    "Anthony Shin의 배경, 소프트웨어 및 제품 경험, 이전 경력, 역량과 학력입니다.",
  introductionTitle: "기술과 사람의 맥락을 이해하며 제품을 만듭니다.",
  introduction: [
    "밴쿠버에서 활동하는 제품 중심 풀스택 개발자입니다. 운영상의 문제, 불완전한 요구사항과 현실의 제약을 사람들이 믿고 사용할 수 있는 소프트웨어로 만드는 일을 좋아합니다.",
    "개발자로 전향하기 전에는 반도체 소재 기술영업을 담당했습니다. 고객의 실제 요구를 찾아내고 기술팀과 비즈니스팀 사이에서 소통하며, 실행 가능성과 납기를 놓치지 않는 의사결정 방식을 배웠습니다.",
    "팬데믹 기간에 반복 업무를 더 효율적으로 처리할 방법을 찾으며 프로그래밍을 시작했습니다. 실용적인 자동화로 출발한 관심은 제품을 만드는 일 전반으로 확장되었고, 캐나다에서 Computer Science와 Computer Systems를 공부하게 되었습니다.",
    "지금은 직접 구현하는 엔지니어링, 제품 기획, 다국어 커뮤니케이션과 한국·일본·캐나다의 업무 경험을 함께 활용하고 있습니다.",
  ],
  valuesTitle: "일하는 방식",
  values: [
    {
      title: "제품의 맥락부터",
      description:
        "누가 제품을 사용하는지, 현재 업무가 어떻게 이루어지는지, 반드시 지켜야 할 제약이 무엇인지부터 파악합니다.",
    },
    {
      title: "신뢰할 수 있는 전달",
      description:
        "유지보수 가능한 구현, 명확한 범위와 첫 출시 이후에도 이해할 수 있는 소프트웨어를 중요하게 생각합니다.",
    },
    {
      title: "기술 커뮤니케이션",
      description:
        "사용자, 이해관계자와 기술 시스템 사이를 연결해 결정이 현실에 근거하고 실행 가능하도록 만듭니다.",
    },
  ],
  languagesTitle: "언어",
  languages: [
    { language: "한국어", proficiency: "원어민" },
    { language: "일본어", proficiency: "비즈니스 상급" },
    { language: "영어", proficiency: "비즈니스 상급" },
  ],
  capabilitiesTitle: "핵심 역량",
  capabilities: [
    {
      title: "제품 엔지니어링",
      items: [
        "요구사항 발굴",
        "제품 기획",
        "UI 구현",
        "풀스택 개발",
        "기술 문서 작성",
      ],
    },
    {
      title: "주요 기술",
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
      title: "배포 및 인프라",
      items: [
        "Docker",
        "Linux VPS",
        "Nginx",
        "데이터베이스 마이그레이션",
        "인증 및 권한 관리",
        "프로덕션 배포",
      ],
    },
    {
      title: "추가 경험",
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
  softwareExperienceTitle: "소프트웨어 및 제품 경험",
  earlierExperienceTitle: "이전 경력",
  educationTitle: "학력",
  experiences: [
    {
      id: "gyu-kaku-portal",
      organization: "Gyu-Kaku Vancouver",
      organizationNote: "레스토랑 근무와 별도로 체결한 유급 소프트웨어 계약.",
      location: "캐나다 브리티시컬럼비아주 밴쿠버",
      category: "software-product",
      relatedProjectSlugs: ["gyu-kaku-portal"],
      roles: [
        {
          title: "계약 풀스택 개발자",
          period: "2026년 5월 – 2026년 7월",
          summary:
            "밴쿠버 지점을 위한 내부 레스토랑 운영 플랫폼을 제안하고 설계·개발했습니다.",
          highlights: [
            "단독 개발자로서 제품 기획, 요구사항 조사, UX 설계, 프론트엔드와 백엔드 개발, 데이터베이스 설계, 배포, 테스트, 문서화와 직원 교육을 수행했습니다.",
            "직원 근무 가능 시간, 휴가 신청, 직원 관리, 스케줄 수정·공개와 운영 관리 흐름을 구축했습니다.",
            "FOH와 BOH의 첫 스케줄 초안을 10초 이내에 생성하는 Google OR-Tools 기반 스케줄링 엔진을 구현했습니다.",
            "약 15명의 사용자가 참여한 파일럿을 지원했으며 이후 확대 도입을 준비했습니다.",
          ],
        },
      ],
    },
    {
      id: "kana-fighter",
      organization: "Kana Fighter",
      organizationNote: "Dylan Wood를 위한 계약 프로젝트.",
      location: "캐나다 브리티시컬럼비아주 밴쿠버",
      category: "software-product",
      relatedProjectSlugs: ["kana-fighter"],
      roles: [
        {
          title: "계약 React Native 개발자 및 기술 리드",
          period: "2025년 8월 – 2026년 8월",
          summary:
            "오너의 제품 컨셉, 비주얼 디자인, 학습 콘텐츠와 캐릭터 에셋을 기반으로 게임형 일본어 학습 앱을 개발했습니다.",
          highlights: [
            "기술 기획, 앱 아키텍처, React Native 구현, 로컬 데이터 저장, 애니메이션, 오디오, 테스트와 빌드 준비를 담당했습니다.",
            "가이드형 레슨, 드릴, 스토리 기반 퀘스트, 잠금 해제 진행 구조, 점수와 발음 오디오를 구현했습니다.",
            "PNG 기반 캐릭터 에셋을 가공하고 미리 로드해 저사양 기기에서도 안정적으로 동작하도록 최적화했습니다.",
            "iOS TestFlight와 Android 빌드를 준비하고 검증했으며 App Store 배포는 오너 계정에서 진행되었습니다.",
          ],
        },
      ],
    },
    {
      id: "skyline-zipline",
      organization: "Skyline Zipline",
      organizationNote: "BCIT Industry Practicum 프로젝트.",
      location: "캐나다 브리티시컬럼비아주 휘슬러",
      category: "software-product",
      roles: [
        {
          title: "팀 리드 및 풀스택 개발자",
          period: "2025년 1월 – 2025년 4월",
          summary:
            "3인 학생 팀으로 기업 고객의 장비 검사 시스템을 개발했습니다.",
          highlights: [
            "고객 미팅, 요구사항 논의, 업무 조율과 학생 팀·이해관계자 간 커뮤니케이션을 이끌었습니다.",
            "Next.js를 사용한 장비 등록과 검사 흐름 구현에 집중했습니다.",
            "수백 개 장비에 검사 기록이 누적되는 상황에서 Firestore 사용량과 비용 제약을 분석했습니다.",
            "Firestore 데이터 저장 구조를 관계형 MySQL 모델로 이전하는 방안을 제안하고 구현했습니다.",
          ],
        },
      ],
    },
    {
      id: "gyu-kaku-service",
      organization: "Gyu-Kaku Vancouver",
      location: "캐나다 브리티시컬럼비아주 밴쿠버",
      category: "earlier",
      roles: [
        {
          title: "서버",
          period: "2023년 8월 – 현재",
          summary:
            "빠른 영어권 레스토랑 환경에서 근무하며 인력, 스케줄과 교대 운영을 직접 경험하고 있습니다.",
          highlights: [
            "교대 리드, 직원 교육, 온보딩, 스케줄 보조와 매니저 운영을 지원합니다.",
            "혼잡한 서비스 중 고객, 주방 직원, 슈퍼바이저와 매니저 사이를 조율합니다.",
            "현장 운영 경험을 바탕으로 Gyu-Kaku Portal 프로젝트를 발견하고 제안했습니다.",
          ],
        },
      ],
    },
    {
      id: "hitachi-chemical",
      organization: "Hitachi Chemical",
      organizationNote: "구 Hitachi Chemical 사업은 현재 Resonac의 일부입니다.",
      location: "대한민국",
      category: "earlier",
      roles: [
        {
          title: "선임 기술영업 담당자",
          period: "2021년 2월 – 2022년 12월",
          highlights: [
            "반도체 소재 고객, 고객 요구사항, 제안, 가격, 협상, 수요 예측과 신규 사업 개발을 담당했습니다.",
            "고객, 일본 공장 엔지니어와 사내 팀 사이의 기술·사업 커뮤니케이션을 조율했습니다.",
            "일본 엔지니어와 주요 고객사 엔지니어 간 회의를 주재하고 중재했습니다.",
          ],
        },
        {
          title: "기술영업 담당자",
          period: "2019년 2월 – 2021년 1월",
          highlights: [
            "반도체 제조에 사용되는 이형 필름, DAF와 NCF 제품을 담당했습니다.",
            "매출이 감소하던 제품군을 팀 내 후공정 반도체 소재 최고 매출 제품군으로 성장시키는 데 기여했습니다.",
            "플래그십 제품 적용을 성사시켜 평균 제품 매출을 약 1,000% 성장시키는 데 기여했습니다.",
            "기술적 근거를 바탕으로 협상하고 실현 가능한 요구와 불가능한 요구를 명확히 구분해 고객 신뢰를 구축했습니다.",
          ],
        },
      ],
    },
    {
      id: "korea-army",
      organization: "Republic of Korea Army",
      location: "대한민국 서울",
      category: "earlier",
      roles: [
        {
          title: "기술 지원",
          period: "2014년 1월 – 2016년 12월",
          highlights: [
            "데스크톱, 노트북, 프린터와 라우터를 설치하고 지원했습니다.",
            "내·외부 네트워크 접근을 설정하고 동적·고정 IP 할당을 관리했습니다.",
            "사용자와 장비의 일상적인 기술 지원을 담당했습니다.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      id: "bcit",
      institution: "British Columbia Institute of Technology (BCIT)",
      credential: "Computer Systems Technology 디플로마",
      period: "2023 – 2025",
      location: "캐나다 브리티시컬럼비아주 밴쿠버",
    },
    {
      id: "knou",
      institution: "한국방송통신대학교",
      credential: "컴퓨터과학 학사",
      period: "2021 – 2022",
      location: "대한민국 서울",
    },
    {
      id: "kwangwoon",
      institution: "광운대학교",
      credential: "국제학 학사",
      period: "2010 – 2019",
      location: "대한민국 서울",
    },
  ],
};
