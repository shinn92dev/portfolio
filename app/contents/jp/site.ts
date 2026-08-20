import type { SiteContent } from "../types";

export const siteContent = {
  identity: {
    displayName: "Anthony Shin",
    fullName: "Anthony Seunghwan Shin",
    role: "フルスタックデベロッパー",
    positioning:
      "現場の制約を、明確で信頼できるプロダクトへ変えるフルスタックデベロッパーです。",
    location: "カナダ・ブリティッシュコロンビア州バンクーバー",
    availability:
      "フルタイムおよび契約の機会を検討しており、フルタイムを優先しています。",
  },
  metadata: {
    siteUrl: "https://anthonydev.me",
    defaultTitle: "Anthony Shin — フルスタックデベロッパー",
    titleTemplate: "%s — Anthony Shin",
    description:
      "バンクーバーを拠点に活動する、プロダクト志向のフルスタックデベロッパー Anthony Shin のポートフォリオです。",
  },
  shell: {
    skipToContentLabel: "メインコンテンツへ移動",
    mainNavigationLabel: "メインナビゲーション",
    openMenuLabel: "メニューを開く",
    closeMenuLabel: "メニューを閉じる",
    themeToggleLabel: "カラーテーマを切り替える",
    lightThemeLabel: "ライトテーマに切り替える",
    darkThemeLabel: "ダークテーマに切り替える",
    languageLabel: "言語",
    comingSoonLabel: "準備中",
    footerNavigationLabel: "フッターナビゲーション",
    socialLinksLabel: "ソーシャルリンク",
    copyright: "Anthony Shin. All rights reserved.",
  },
  contact: { email: "anthony.seunghwan.shin@gmail.com" },
  navigation: [
    { label: "ホーム", href: "/" },
    { label: "プロジェクト", href: "/work" },
    { label: "プロフィール", href: "/profile" },
    { label: "お問い合わせ", href: "/#contact" },
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
  resume: { label: "履歴書", href: "/Resume_Anthony-Shin_250718.pdf" },
  home: {
    heroEyebrow: "プロダクト志向のフルスタックデベロッパー",
    locationLabel: "拠点",
    availabilityLabel: "現在",
    portraitAlt:
      "バンクーバーを拠点に活動するフルスタックデベロッパー、Anthony Shin。",
    portraitStatus: "",
    primaryActionsLabel: "主なアクション",
    secondaryLinksLabel: "プロフェッショナルリンク",
    selectedWorkEyebrow: "主なプロジェクト",
    selectedWorkTitle: "現場の制約から生まれたプロダクト。",
    selectedWorkDescription:
      "レストラン運営プラットフォームとゲーム型日本語学習アプリを通じ、プロダクト企画、フルスタック開発、モバイル開発、確実なデリバリーを紹介します。",
    selectedWorkProductLabel: "プロダクト",
    selectedWorkUserLabel: "主なユーザー",
    selectedWorkResponsibilityLabel: "担当範囲",
    selectedWorkDecisionLabel: "主な判断",
    selectedWorkOutcomeLabel: "実績",
    selectedWorkStatusLabel: "ステータス",
    selectedWorkTechnologyLabel: "主な技術",
    capabilityEyebrow: "コアスキル",
    capabilityTitle: "曖昧な要件から、動くソフトウェアへ。",
    capabilityEvidenceLabel: "主なプロジェクトでの実績",
    capabilities: [
      {
        title: "プロダクトエンジニアリング",
        description:
          "不完全な要件と現場の文脈を、焦点の定まったプロダクトフローへ整理します。",
        evidence: [
          "レストラン運営の実体験をもとに Gyu-Kaku Portal を提案し、スコープを定義しました。",
          "Kana Fighter のコンセプト、コンテンツ、ビジュアルデザインを完成したモバイルプロダクトへ落とし込みました。",
        ],
        projectSlugs: ["gyu-kaku-portal", "kana-fighter"],
      },
      {
        title: "フルスタックシステム",
        description:
          "UI、API、データモデル、認可、最適化、デプロイを一つのシステムとして設計します。",
        evidence: [
          "React、FastAPI、PostgreSQL、OR-Tools、Docker、VPS を横断して Gyu-Kaku Portal を構築しました。",
          "Kana Fighter を進捗保存、音声、アニメーションを備えたローカルファーストの React Native アプリとして設計しました。",
        ],
        projectSlugs: ["gyu-kaku-portal", "kana-fighter"],
      },
      {
        title: "テクニカルリーダーシップ",
        description:
          "判断とトレードオフを明確に共有し、デリバリーまで責任を持ちます。",
        evidence: [
          "Gyu-Kaku Portal では、ステークホルダーへのヒアリングからパイロット研修まで単独で担当しました。",
          "Kana Fighter の技術設計、実装、テスト、ビルド検証をリードしました。",
        ],
        projectSlugs: ["gyu-kaku-portal", "kana-fighter"],
      },
    ],
    profileLinkLabel: "プロフィールを見る",
    workLinkLabel: "主なプロジェクトを見る",
    careerEyebrow: "キャリアの背景",
    careerTitle: "技術営業からプロダクトエンジニアリングへ。",
    careerIntroduction:
      "半導体材料の技術営業としてキャリアを始め、韓国と日本のエンジニアの間で顧客要件を実行可能な判断へ変えてきました。制約を理解し、関係者を調整し、業務を改善するその経験がソフトウェア開発へつながりました。現在は、要件整理とアーキテクチャから実装、デリバリーまで一貫して担当しています。",
    softwareExperienceLabel: "ソフトウェア・プロダクト経験",
    earlierExperienceLabel: "これまでの経験",
    careerPeriodLabel: "期間",
    careerRoleLabel: "役割",
    softwareExperience: [
      {
        experienceId: "gyu-kaku-portal",
        summary:
          "レストラン現場で見つけた課題を別契約の有償社内プロダクトへ発展させ、提案からパイロット導入まで担当しました。",
      },
      {
        experienceId: "kana-fighter",
        summary:
          "オーナーの学習コンセプト、コンテンツ、ビジュアル方針を完成した React Native アプリへ落とし込みました。",
      },
      {
        experienceId: "skyline-zipline",
        summary:
          "BCIT Practicum で3名チームと顧客対応をリードし、機材登録、検査フロー、データ移行に貢献しました。",
      },
    ],
    earlierExperience: [
      {
        experienceId: "hitachi-chemical",
        summary:
          "技術要件を読み解き、日本のエンジニアと顧客チームを調整し、制約を交渉しながら事業成果まで責任を持つ姿勢を学びました。",
      },
      {
        experienceId: "gyu-kaku-service",
        summary:
          "バンクーバーのスピード感ある英語環境で、人員配置、シフト、研修、店舗運営を実地で学びました。",
      },
    ],
    personalNoteLabel: "仕事以外では",
    personalNote:
      "韓国語、日本語、英語を使って仕事をし、バンクーバーのトレイルや美味しいコーヒーとお茶でリフレッシュしています。",
    contactEyebrow: "お問い合わせ",
    contactTitle: "役に立つものを、一緒につくりましょう。",
    contactDescription:
      "プロダクト思考、明確なコミュニケーション、自ら手を動かす開発力が求められるフルタイムおよび契約の機会に関心があります。",
    contactLinksLabel: "連絡先とプロフェッショナルリンク",
    contactLocationLabel: "拠点",
    emailLabel: "Anthony にメールする",
  },
  work: {
    pageEyebrow: "プロジェクト一覧",
    pageTitle: "プロジェクト",
    pageDescription:
      "フルスタックプロダクト、モバイルアプリ、最適化、クライアントワークにわたるケーススタディとその他のプロジェクトです。",
    selectedTitle: "主なケーススタディ",
    selectedDescription:
      "プロダクト企画、フルスタック開発、モバイル開発、技術的な意思決定を示す、独立してデリバリーした二つのプロダクトです。",
    additionalTitle: "その他のプロジェクト",
    additionalDescription:
      "継続的な開発経験を簡潔に示すために掲載している、初期および補足的なプロジェクトです。",
    projectCountLabel: "プロジェクト",
    productTypeLabel: "プロダクト種別",
    roleLabel: "役割",
    periodLabel: "期間",
    statusLabel: "ステータス",
    evidenceLabel: "主な実績",
    decisionLabel: "技術方針",
    technologyLabel: "主な技術",
    projectLinksLabel: "プロジェクトリンク",
    viewCaseStudyLabel: "ケーススタディを見る",
    viewDemoLabel: "デモを開く",
    privateRepositoryLabel: "非公開リポジトリ",
  },
  caseStudy: {
    overviewTitle: "概要",
    contextTitle: "背景",
    usersTitle: "ユーザー",
    responsibilitiesTitle: "担当範囲",
    constraintsTitle: "制約",
    featuresTitle: "実装機能",
    decisionsTitle: "技術的な判断",
    outcomesTitle: "成果",
    reflectionTitle: "振り返り",
    technologyTitle: "技術",
    linksTitle: "プロジェクトリンク",
    backLabel: "プロジェクト一覧へ戻る",
    sectionIndexLabel: "ケーススタディ目次",
    projectDetailsLabel: "プロジェクト情報",
    roleLabel: "役割",
    teamLabel: "チーム",
    periodLabel: "期間",
    statusLabel: "ステータス",
    outcomesLabel: "測定結果",
    unavailableLinkLabel: "非公開",
    nextProjectLabel: "次のケーススタディ",
    decisionProblemLabel: "課題",
    decisionOptionsLabel: "検討した選択肢",
    decisionLabel: "決定",
    decisionRationaleLabel: "理由",
    tradeoffsLabel: "トレードオフ",
  },
} satisfies SiteContent;
