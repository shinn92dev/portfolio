import type { ProfileContent } from "../types";

export const profileContent: ProfileContent = {
  pageTitle: "プロフィール",
  pageDescription:
    "Anthony Shin の経歴、ソフトウェア・プロダクト経験、これまでのキャリア、スキル、学歴を紹介します。",
  introductionTitle: "技術と人、その両方の文脈からプロダクトをつくる。",
  introduction: [
    "バンクーバーを拠点に活動する、プロダクト志向のフルスタックデベロッパーです。業務上の課題、不完全な要件、現場の制約を、人が安心して使えるソフトウェアへ変えることを得意としています。",
    "開発へ転向する前は、半導体材料の技術営業に携わっていました。顧客の本当のニーズを見つけ、技術チームとビジネスチームの間で意思疎通を図り、実現性と納期を見失わずに判断する姿勢を学びました。",
    "パンデミック中、繰り返し作業を改善する方法を探す中でプログラミングを始めました。実務的な自動化から始まった関心はプロダクト開発全体へ広がり、カナダで Computer Science と Computer Systems を学びました。",
    "現在は、ハンズオンの開発力、プロダクト企画、多言語コミュニケーション、韓国・日本・カナダにまたがる経験を組み合わせて仕事をしています。",
  ],
  valuesTitle: "仕事の進め方",
  values: [
    {
      title: "まずプロダクトの文脈から",
      description:
        "誰が使うのか、現在の業務はどう進んでいるのか、無視できない制約は何かを最初に理解します。",
    },
    {
      title: "信頼できるデリバリー",
      description:
        "保守しやすい実装、明確なスコープ、初回リリース後も理解できるソフトウェアを大切にしています。",
    },
    {
      title: "技術コミュニケーション",
      description:
        "ユーザー、ステークホルダー、技術システムの間をつなぎ、判断を現実に即した実行可能なものにします。",
    },
  ],
  languagesTitle: "言語",
  languages: [
    { language: "韓国語", proficiency: "ネイティブ" },
    { language: "日本語", proficiency: "ビジネス上級" },
    { language: "英語", proficiency: "ビジネス上級" },
  ],
  capabilitiesTitle: "コアスキル",
  capabilities: [
    {
      title: "プロダクトエンジニアリング",
      items: [
        "要件の発見・整理",
        "プロダクト企画",
        "UI 実装",
        "フルスタック開発",
        "技術ドキュメント",
      ],
    },
    {
      title: "主要技術",
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
      title: "デリバリー・インフラ",
      items: [
        "Docker",
        "Linux VPS",
        "Nginx",
        "データベースマイグレーション",
        "認証・認可",
        "本番デプロイ",
      ],
    },
    {
      title: "その他の経験",
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
  softwareExperienceTitle: "ソフトウェア・プロダクト経験",
  earlierExperienceTitle: "これまでの経験",
  educationTitle: "学歴",
  experiences: [
    {
      id: "gyu-kaku-portal",
      organization: "Gyu-Kaku Vancouver",
      organizationNote: "レストラン業務とは別に締結した有償ソフトウェア契約。",
      location: "カナダ・ブリティッシュコロンビア州バンクーバー",
      category: "software-product",
      relatedProjectSlugs: ["gyu-kaku-portal"],
      roles: [
        {
          title: "契約フルスタックデベロッパー",
          period: "2026年5月 – 2026年7月",
          summary:
            "バンクーバー店舗向けの社内レストラン運営プラットフォームを提案し、設計・開発しました。",
          highlights: [
            "単独開発者として、企画、要件ヒアリング、UX 設計、フロントエンド・バックエンド開発、DB 設計、デプロイ、テスト、文書化、スタッフ研修を担当しました。",
            "勤務可能時間、休暇申請、従業員管理、シフト編集・公開、運営管理の各フローを構築しました。",
            "FOH と BOH の初回シフト案を10秒以内に生成する Google OR-Tools ベースのスケジューリングエンジンを実装しました。",
            "約15名が参加するパイロット運用を支援し、その後の展開拡大に備えました。",
          ],
        },
      ],
    },
    {
      id: "kana-fighter",
      organization: "Kana Fighter",
      organizationNote: "Dylan Wood との契約プロジェクト。",
      location: "カナダ・ブリティッシュコロンビア州バンクーバー",
      category: "software-product",
      relatedProjectSlugs: ["kana-fighter"],
      roles: [
        {
          title: "契約 React Native デベロッパー兼テクニカルリード",
          period: "2025年8月 – 2026年8月",
          summary:
            "オーナーのプロダクトコンセプト、ビジュアルデザイン、学習コンテンツ、キャラクター素材をもとに、ゲーム型日本語学習アプリを開発しました。",
          highlights: [
            "技術企画、アプリ設計、React Native 実装、ローカル永続化、アニメーション、音声、テスト、ビルド準備を担当しました。",
            "ガイド付きレッスン、ドリル、ストーリー型クエスト、アンロック進行、スコア、発音音声を実装しました。",
            "PNG キャラクター素材を加工・プリロードし、低スペック端末でも安定して動作するよう最適化しました。",
            "iOS TestFlight と Android ビルドを準備・検証し、App Store へのデプロイはオーナーのアカウントで行われました。",
          ],
        },
      ],
    },
    {
      id: "skyline-zipline",
      organization: "Skyline Zipline",
      organizationNote: "BCIT Industry Practicum プロジェクト。",
      location: "カナダ・ブリティッシュコロンビア州ウィスラー",
      category: "software-product",
      roles: [
        {
          title: "チームリード兼フルスタックデベロッパー",
          period: "2025年1月 – 2025年4月",
          summary:
            "3名の学生チームで、企業クライアント向け機材検査システムに取り組みました。",
          highlights: [
            "顧客会議、要件協議、タスク調整、学生チームとステークホルダー間の連絡をリードしました。",
            "Next.js を用いた機材登録と検査フローの実装を主に担当しました。",
            "数百点の機材に検査記録が蓄積される中、Firestore の利用量とコスト制約を評価しました。",
            "Firestore からリレーショナルな MySQL モデルへの移行を提案し、実装しました。",
          ],
        },
      ],
    },
    {
      id: "gyu-kaku-service",
      organization: "Gyu-Kaku Vancouver",
      location: "カナダ・ブリティッシュコロンビア州バンクーバー",
      category: "earlier",
      roles: [
        {
          title: "サーバー",
          period: "2023年8月 – 現在",
          summary:
            "スピード感のある英語環境のレストランで働き、人員、シフト、店舗運営を現場で学んでいます。",
          highlights: [
            "シフトリード、スタッフ研修、オンボーディング、シフト作成補助、マネージャー業務を支援しています。",
            "繁忙時にゲスト、キッチンスタッフ、スーパーバイザー、マネージャー間の連携を図ります。",
            "現場で得た運営知識をもとに Gyu-Kaku Portal を企画・提案しました。",
          ],
        },
      ],
    },
    {
      id: "hitachi-chemical",
      organization: "Hitachi Chemical",
      organizationNote: "旧 Hitachi Chemical 事業は現在 Resonac の一部です。",
      location: "韓国",
      category: "earlier",
      roles: [
        {
          title: "シニア技術営業担当",
          period: "2021年2月 – 2022年12月",
          highlights: [
            "半導体材料の顧客、要件、提案、価格、交渉、需要予測、新規事業開発を担当しました。",
            "顧客、日本工場のエンジニア、社内チーム間の技術・ビジネスコミュニケーションを調整しました。",
            "日本のエンジニアと主要顧客の技術チームによる会議を進行・仲介しました。",
          ],
        },
        {
          title: "技術営業担当",
          period: "2019年2月 – 2021年1月",
          highlights: [
            "半導体製造に使用される離型フィルム、DAF、NCF 製品を担当しました。",
            "売上が低下していた製品群を、チーム内で後工程半導体材料の売上トップカテゴリーへ成長させることに貢献しました。",
            "フラッグシップ製品への採用を獲得し、平均売上を約1,000%成長させることに貢献しました。",
            "技術的根拠に基づいて交渉し、実現可能な要件と困難な要求を明確に区別することで顧客の信頼を築きました。",
          ],
        },
      ],
    },
    {
      id: "korea-army",
      organization: "Republic of Korea Army",
      location: "韓国・ソウル",
      category: "earlier",
      roles: [
        {
          title: "テクニカルサポート",
          period: "2014年1月 – 2016年12月",
          highlights: [
            "デスクトップ、ノートPC、プリンター、ルーターの設置とサポートを行いました。",
            "社内外ネットワークアクセスを設定し、動的・固定 IP の割り当てを管理しました。",
            "ユーザーと機器の日常的な技術サポートを担当しました。",
          ],
        },
      ],
    },
  ],
  education: [
    {
      id: "bcit",
      institution: "British Columbia Institute of Technology (BCIT)",
      credential: "Computer Systems Technology ディプロマ",
      period: "2023 – 2025",
      location: "カナダ・ブリティッシュコロンビア州バンクーバー",
    },
    {
      id: "knou",
      institution: "韓国放送通信大学校",
      credential: "コンピュータ科学学士",
      period: "2021 – 2022",
      location: "韓国・ソウル",
    },
    {
      id: "kwangwoon",
      institution: "光云(クァウン)大学校",
      credential: "国際学学士",
      period: "2010 – 2019",
      location: "韓国・ソウル",
    },
  ],
};
