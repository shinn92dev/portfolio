import { projects as englishProjects } from "../en/projects";

import type { Project, ProjectDecision } from "../types";

const gyuKaku = englishProjects[0];
const kanaFighter = englishProjects[1];
const rateVanRent = englishProjects[2];
const portfolio = englishProjects[3];

if (
  !gyuKaku?.caseStudy ||
  !kanaFighter?.caseStudy ||
  !rateVanRent ||
  !portfolio
) {
  throw new Error("English project content is incomplete.");
}

const gyuKakuDecisions: ProjectDecision[] = [
  {
    title: "実績のある制約ソルバーを採用",
    problem:
      "勤務可能時間、休暇、役割、重複、労働時間、カバレッジ、希望を同時に評価する必要がありました。",
    options: [
      "すべて手作業で作成する",
      "実績のあるソルバーで初期案を自動生成する",
    ],
    decision: "Google OR-Tools CP-SAT で最初のシフト案を生成しました。",
    rationale:
      "独自の最適化エンジンを一から検証する代わりに、成熟した無償ソルバーを使い、現場ルールの正確なモデル化に集中しました。",
    tradeoffs: [
      "正確な運営データと制約モデルが必要です。",
      "ルール変更には代表シナリオによる回帰テストが必要です。",
      "明確な診断とマネージャーの確認は引き続き必要です。",
    ],
  },
  {
    title: "必須制約と運営目標を分離",
    problem:
      "すべての希望を必須にすると解がなくなり、資格ルールを希望扱いにすると無効な割り当てが生まれます。",
    options: [
      "すべてを必須にする",
      "すべてをペナルティにする",
      "資格ルールと重み付き目標を分ける",
    ],
    decision:
      "勤務可能時間、休暇、役割資格、重複、上限時間を hard constraint、カバレッジ、公平性、時間配分、希望を weighted objective としました。",
    rationale:
      "完全なカバレッジが不可能でも、無効な割り当てをせずに最善の部分案を作れます。",
    tradeoffs: [
      "生成成功でも空きポジションが残る場合があります。",
      "公開前に不足診断の確認が必要です。",
      "重み付けが不適切だと現場に合わない結果になり得ます。",
    ],
  },
  {
    title: "自動生成結果を編集可能にする",
    problem:
      "レストランのシフトにはモデルですべて表現できない現場判断があります。",
    options: [
      "自動で公開する",
      "複数案を返す",
      "既存の編集可能な下書きに一案を入れる",
    ],
    decision: "手動割り当てと同じ検証を通る編集可能な下書きを返しました。",
    rationale: "反復作業を減らしながら、最終判断をマネージャーに残します。",
    tradeoffs: [
      "完全自動ではありません。",
      "手動編集にも衝突検証が必要です。",
      "生成、保存、公開の状態を明確に区別する必要があります。",
    ],
  },
  {
    title: "有効な結果を捨てず、不足を報告",
    problem:
      "実際の人員不足で全ポジションを埋められなくても、多くの有効な割り当ては作成できます。",
    options: [
      "一枠でも不足すれば全体を失敗にする",
      "資格ルールを緩和する",
      "有効部分を保存して不足を報告する",
    ],
    decision:
      "最善の有効な部分案と、日付・サービス・役割・目標・割当数・不足数の診断を返しました。",
    rationale:
      "勤務不可や資格のないスタッフを割り当てず、有効な結果から作業を続けられます。",
    tradeoffs: [
      "下書きが不完全な場合があると伝える必要があります。",
      "人員不足、方針不備、ソルバー失敗を区別する必要があります。",
      "候補除外理由の説明はさらに改善できます。",
    ],
  },
  {
    title: "表示タスクとソルバー用推定時間を分離",
    problem:
      "Closing などの運営表記は残す必要がありますが、重複と負荷計算には具体的な時間が必要です。",
    options: [
      "固定終了時刻に置き換える",
      "タスク型シフトを計算から除外する",
      "表示を保ち内部だけ推定時刻を使う",
    ],
    decision:
      "運営ラベルは保持し、ソルバー内だけで役割・曜日別の推定終了時刻を使いました。",
    rationale:
      "スタッフに馴染みのある表記を保ちながら、衝突と週次負荷を計算できます。",
    tradeoffs: [
      "推定値を確定時間として見せてはいけません。",
      "役割・曜日別ポリシーの保守が必要です。",
      "タスク型シフトの負荷は推定値です。",
    ],
  },
  {
    title: "楽観的同時実行制御で手作業を保護",
    problem:
      "生成中にマネージャーが編集すると、遅れて返った結果が新しい変更を上書きする恐れがあります。",
    options: [
      "常に生成結果で置換する",
      "生成中の編集を禁止する",
      "保存直前に下書きバージョンを再確認する",
    ],
    decision:
      "期待する lock version を送信し、保存前に下書きが変わっていれば結果を拒否します。",
    rationale:
      "作業を止めずに、古い生成結果による気づきにくいデータ損失を防ぎます。",
    tradeoffs: [
      "拒否された結果は再生成が必要な場合があります。",
      "競合を明確に表示する必要があります。",
      "すべての変更をバージョン管理に含める必要があります。",
    ],
  },
  {
    title: "一つのデータソースで運営フローを接続",
    problem:
      "別々のシート、メール、メッセージにより、スタッフ、勤務可能時間、休暇、シフト、評価履歴が同期しませんでした。",
    options: [
      "既存シートを改善する",
      "業務ごとに別ツールを作る",
      "一つのアプリとリレーショナルDBでつなぐ",
    ],
    decision:
      "PostgreSQL をスタッフ、申請、勤務可能時間、シフト、公開履歴、役割別評価の共通データソースにしました。",
    rationale: "承認済み情報を再転記せず、後続の業務へ直接反映できます。",
    tradeoffs: [
      "認証、マイグレーション、バックアップ、運用責任が必要です。",
      "接続された変更は複数領域の検証が必要です。",
      "非公開運営システムにはデモデータと公開範囲の管理が必要です。",
    ],
  },
];

const kanaDecisions: ProjectDecision[] = [
  {
    title: "ローカルファーストの進行設計",
    problem:
      "進捗保存は必要でしたが、アカウント、ソーシャル機能、端末間同期、サーバー管理コンテンツは不要でした。",
    options: ["バックエンドとアカウント", "組み込みDB", "AsyncStorage"],
    decision:
      "導入状態、かな進捗、アンロック、音声設定、最高点を AsyncStorage に保存しました。",
    rationale:
      "オンボーディングの摩擦と不要なインフラを減らし、オフライン利用を実現しました。",
    tradeoffs: [
      "端末間同期はできません。",
      "アプリデータ削除で進捗も失われます。",
      "データ変更には初期化・正規化・移行が必要です。",
      "将来のアカウント対応には明確な移行設計が必要です。",
    ],
  },
  {
    title: "カリキュラムと画面ロジックを分離",
    problem:
      "かな、発音、選択肢、Quest 語彙、解答、物語、音声、アニメーションの関係を画面内で保守するのは困難でした。",
    options: [
      "画面に直接埋め込む",
      "リモートCMSを導入する",
      "型付き静的データと生成JSONを使う",
    ],
    decision:
      "教材と素材の関係を画面外で管理し、TypeScript スクリプトで Quest 解答マップを生成しました。",
    rationale:
      "バックエンドを増やさずデータ駆動にし、React Native の静的素材制約にも対応しました。",
    tradeoffs: [
      "row key の変更が複数マップに影響します。",
      "ファイル間の整合性確認が必要です。",
      "オーナーは外部CMSから編集できません。",
      "生成JSONをソースと同期する必要があります。",
    ],
  },
  {
    title: "row 単位でアニメーション素材をプリロード",
    problem:
      "再生時に初めて読み込むと、小型・旧型端末で途切れる可能性がありました。",
    options: [
      "再生開始時にロードする",
      "別形式へ置き換える",
      "現在の row に必要なフレームを先読みする",
    ],
    decision:
      "Quest を有効にする前に、現在の row に必要な sprite を収集してプリロードしました。",
    rationale:
      "オーナーの素材を保ちながら、iPhone SE や旧型モデルでも安定したバトルにしました。",
    tradeoffs: [
      "アプリ容量が増えます。",
      "操作前に読み込み遷移が必要です。",
      "メモリ使用量への配慮が必要です。",
      "個別素材失敗時の fallback が必要です。",
    ],
  },
  {
    title: "状態遷移前にバトルフィードバックを順序化",
    problem:
      "回答送信が状態、音声、アニメーション、体力、入力、画面遷移を同時に変化させました。",
    options: [
      "すべて即時変更する",
      "固定 delay を使う",
      "入力ロックと完了 callback を使う",
    ],
    decision:
      "入力ロック、音声・アニメーション、ダメージ、完了待機、次の問題または遷移の順で処理しました。",
    rationale:
      "画面上のフィードバックと内部状態を同期し、連続入力による競合を防ぎます。",
    tradeoffs: [
      "アニメーションとゲーム状態に明確な完了契約が必要です。",
      "中断時の fallback が必要です。",
      "端末ごとの timing と音声テストが必要です。",
    ],
  },
  {
    title: "アニメーション素材準備を自動化",
    problem:
      "オーナーがすべてのキャラクター組み合わせを手作業で作ると、大きな反復負担になります。",
    options: [
      "オーナーが全フレームを合成する",
      "開発中に手動合成する",
      "原画と自動処理を分離する",
    ],
    decision:
      "原画はオーナーが制作し、Python と Pillow で検証、合成、整列、レイヤー、crop、resize、preview を自動化しました。",
    rationale:
      "クリエイティブの主導権を維持しながら機械的な作業を減らしました。",
    tradeoffs: [
      "スクリプトと命名規則が制作工程の一部になります。",
      "入力の名前とフォルダ構造を守る必要があります。",
      "pipeline とアプリの asset map を同期する必要があります。",
    ],
  },
  {
    title: "Gluestack を小さな native component へ置換",
    problem:
      "Gluestack のスタイルが NativeWind の適用を妨げ、デザイン不具合の原因を追いにくくしていました。",
    options: [
      "override を続ける",
      "wrapper を追加する",
      "primitive と目的別 component に置き換える",
    ],
    decision:
      "オーナーに長所と短所を説明したうえで、承認済みデザインを保ち、React Native primitive、NativeWind、小さな共通 component に置き換えました。",
    rationale:
      "高度にカスタムされた小規模ゲームUIでは、広範な生成UIシステムの利点がコストを上回りませんでした。",
    tradeoffs: [
      "共通動作を自分たちで保守します。",
      "アクセシビリティを意図的に実装する必要があります。",
      "将来の汎用UIには選択的な primitive 導入を検討できます。",
    ],
  },
  {
    title: "依存UIより先に保存データを初期化",
    problem:
      "初期 TestFlight では AsyncStorage の作成前に進捗を読み、誤ったロック状態を表示することがありました。",
    options: [
      "一時的な既定値を表示する",
      "アプリ全体を hydration 画面で止める",
      "初期化を集約し依存UIだけ待たせる",
    ],
    decision:
      "ゲームデータ初期化を集約し、現在の schema に正規化した後で進捗依存UIを表示しました。",
    rationale:
      "追加のグローバル状態ライブラリなしで誤表示と不正データに対応できます。",
    tradeoffs: [
      "一部画面に loading 状態が必要です。",
      "すべての保存グループが同じ正規化レベルではありません。",
      "新規・既存データの両方で検証が必要です。",
    ],
  },
];

export const projects: Project[] = [
  {
    ...gyuKaku,
    eyebrow: "レストラン運営 · 有償契約",
    summary:
      "分散したスプレッドシート業務を、構造化されたスタッフ管理と制約ベースのシフト生成へ統合した Gyu-Kaku Vancouver 社内運営プラットフォームです。",
    period: "2026年5月 – 2026年7月",
    status: "パイロット運用中 · 2026年9月に展開拡大予定",
    role: "単独フルスタックデベロッパー",
    team: "開発者1名 · 運営ステークホルダー5名",
    metrics: [
      {
        value: "10秒未満",
        label: "初回シフト案",
        detail: "FOH と BOH を合わせた初回案を生成します。",
      },
      {
        value: "6–10時間 → 1時間以内",
        label: "週次シフト作成業務",
        detail: "生成後20〜30分ほどの確認と手動調整を含みます。",
        attribution: "Gyu-Kaku Vancouver マネジメントチーム提供。",
      },
      {
        value: "90%+",
        label: "勤務可能時間に関する人的ミスの削減",
        attribution: "Gyu-Kaku Vancouver マネジメントチーム提供。",
      },
    ],
    heroMedia: gyuKaku.heroMedia
      ? {
          ...gyuKaku.heroMedia,
          alt: "スタッフ、勤務可能時間、休暇、評価レベル、シフト運営を示す Gyu-Kaku Portal の管理画面。",
          label: "運営概要",
          caption:
            "スタッフ管理、勤務可能時間、休暇、評価レベル、シフト自動化を一つのワークスペースにまとめています。",
        }
      : undefined,
    links: gyuKaku.links.map((link) => ({
      ...link,
      label: link.kind === "demo" ? "パイロットデモを開く" : "非公開リポジトリ",
    })),
    caseStudy: {
      context: [
        "スタッフ情報、勤務可能時間、休暇申請、シフト、評価情報がスプレッドシート、メール、個別メッセージに分散していました。",
        "マネージャーは各情報を手作業で転記・照合し、FOH と BOH のシフトを別々に作成していました。",
        "書式崩れ、行ずれ、似た名前、別途伝えられた時間制限により、誤った勤務可能情報が反映されることがありました。",
        "休暇はメールで申請・別管理され、blackout 期間も告知と手動確認に依存していました。",
        "スタッフは申請状況、細かな開始可能時間、役割別評価レベルの変化を把握しにくい状態でした。",
      ],
      users: [
        "勤務可能時間と休暇を申請し、公開シフトと役割別評価履歴を確認する Gyu-Kaku Vancouver のスタッフ。",
        "申請、スタッフ情報、運営要件を管理し、シフトを作成するマネージャーとスーパーバイザー。",
        "現在のパイロットは約15名、初期展開は約30名、その後は最大100名程度を想定しています。",
      ],
      responsibilities: [
        "プロダクト提案とスコープ定義",
        "ステークホルダーへのヒアリングと要件整理",
        "情報設計と UI/UX",
        "フロントエンド・バックエンド開発",
        "DB・認可設計",
        "制約ベースのスケジューリングエンジン",
        "インフラ・デプロイ",
        "パイロットテスト・保守",
        "文書化・スタッフ研修",
      ],
      constraints: [
        "勤務可能時間、承認済み休暇、役割、時間制限を必ず守ること。",
        "重複シフトや許可されていないダブルシフトを割り当てないこと。",
        "Closing などの表示は残し、内部計算には推定終了時刻を使うこと。",
        "資格を破らずカバレッジ、時間、公平性、希望を最適化すること。",
        "公開前にマネージャーが設定と下書きを調整できること。",
        "古い生成結果が新しい手動編集を上書きしないこと。",
        "公開時点ごとのシフトを保存すること。",
        "公開内容は許可された Gyu-Kaku Vancouver の運営にのみ適用すること。",
      ],
      features: [
        "スタッフ・マネージャー認証",
        "役割ベースの認可",
        "スタッフ・雇用情報管理",
        "15分単位の開始制限を含む勤務可能時間",
        "未提出状況の確認",
        "休暇、承認履歴、blackout",
        "承認休暇の自動除外",
        "FOH・BOH 週次シフト",
        "Google OR-Tools CP-SAT",
        "人員目標と任意タスク設定",
        "手動編集・再割当",
        "衝突検証",
        "不足・solver 診断",
        "バージョン保護された下書き",
        "公開 snapshot",
        "スタッフ向けシフト",
        "役割別評価・履歴・グラフ",
        "レスポンシブUI",
      ],
      media: gyuKaku.caseStudy.media?.map((media, index) => ({
        ...media,
        alt:
          [
            "Lunch・Dinner と開始可能時刻を入力する週次フォーム。",
            "勤務可能状況と割当を示す FOH シフト案。",
            "割当数、未充足目標、生成時間、不足診断を示す結果画面。",
            "役割別指標、メモ、レベル推移を示す評価履歴画面。",
          ][index] ?? media.alt,
        label:
          [
            "構造化されたスタッフ入力",
            "編集可能なシフト案",
            "対応につながる診断",
            "確認できる評価履歴",
          ][index] ?? media.label,
        caption:
          [
            "Lunch・Dinner ごとの開始可能時刻を直接提出でき、例外を別メッセージで伝える必要がありません。",
            "勤務可能状況と割当を一画面で確認し、保存・公開前に修正できます。",
            "有効な部分案を保ち、日付・サービス・役割別の不足を示します。",
            "最新値だけでなく、評価指標、メモ、変更履歴を確認できます。",
          ][index] ?? media.caption,
      })),
      visuals: [
        {
          kind: "comparison",
          title: "分散した調整から共有運営データへ",
          description:
            "スタッフ入力、マネージャー判断、公開シフトを一つの追跡可能な流れにします。",
          beforeLabel: "導入前",
          afterLabel: "Portal 導入後",
          before: [
            "共有シートで提出",
            "時間制限は別メッセージ",
            "休暇と blackout はメール・告知",
            "マネージャーが手作業で照合",
          ],
          after: [
            "構造化された勤務可能時間",
            "休暇・承認・blackout を一元管理",
            "検証済みデータを生成入力に利用",
            "下書きを確認・修正して公開",
          ],
          caption: "現場判断を残しながら、転記と照合を減らしました。",
        },
        {
          kind: "architecture",
          title: "運営データから編集可能な下書きまで",
          description:
            "ソルバーは入力検証、バージョン保護、不足報告を含む一連の流れの一部です。",
          ariaLabel:
            "運営入力、候補絞り込み、OR-Tools、検証、下書き、公開の構造。",
          layers: [
            {
              label: "運営入力",
              technologies: [
                "スタッフ",
                "役割",
                "勤務可能時間",
                "承認休暇",
                "日別設定",
                "ポリシー",
              ],
              description: "対象週のスケジューリング問題を定義します。",
            },
            {
              label: "候補絞り込み",
              technologies: ["役割資格", "時間帯", "休暇除外", "重複確認"],
              description: "必須ルールに違反する候補を最適化前に除外します。",
            },
            {
              label: "最適化",
              technologies: [
                "Google OR-Tools",
                "CP-SAT",
                "Hard constraints",
                "Weighted objectives",
              ],
              description:
                "カバレッジ、時間、公平性、希望を考慮して最良の有効案を探します。",
            },
            {
              label: "検証・診断",
              technologies: ["不足報告", "衝突検証", "バージョン確認"],
              description: "有効な割当を保ち、不足と競合を報告します。",
            },
            {
              label: "マネージャー管理",
              technologies: ["編集可能な下書き", "手動再割当", "公開 snapshot"],
              description: "最終確認と調整後にスタッフ向けシフトを公開します。",
            },
          ],
        },
        {
          kind: "comparison",
          title: "必須ルールと重み付き目標",
          description:
            "絶対に守る割当条件と、バランスを取る運営目標を分けます。",
          beforeLabel: "Hard constraints",
          afterLabel: "Soft objectives",
          before: [
            "勤務可能時間",
            "承認休暇の除外",
            "役割資格",
            "重複防止",
            "上限時間",
          ],
          after: [
            "カバレッジ",
            "時間と公平性",
            "役割・サービス希望",
            "繁忙日対応",
            "最良の部分案",
          ],
          caption: "無効な完全案より、不足を明示した有効な部分案を優先します。",
        },
      ],
      decisions: gyuKakuDecisions,
      outcomes: [
        "合意した全機能をパイロット前に実装し、現在利用されています。",
        "FOH・BOH の初回案を10秒未満で生成します。",
        "週6〜10時間の作業が、確認・調整込みで1時間以内になりました。",
        "勤務可能時間に関する人的ミスが約90%減少しました。",
        "別連絡なしで細かな開始可能時刻を提出できます。",
        "休暇、blackout、承認、割当可否が一つのフローにつながりました。",
        "評価レベルの変化と指標が見やすくなったというスタッフ評価を得ました。",
        "現時点で重大な新規問題は確認されていません。",
        "2026年9月に Gyu-Kaku Vancouver での展開拡大を予定しています。",
      ],
      reflection: [
        "最適化の品質はソルバーそのものよりドメインモデルに左右されます。独自アルゴリズムではなく OR-Tools を選び、現場ルールの翻訳に集中しました。",
        "自動化より先に手動下書きと公開 lifecycle を作ったことで、ソルバーを現場判断の代替ではなく編集可能な出発点にできました。",
        "マネージャーの時間短縮だけでなく、スタッフも勤務可能時間、休暇、公開シフト、評価変化を確認できる点に満足しています。",
        "作り直すなら、ポリシー、入力、solver 状態、objective、診断、実行時間、結果版を生成履歴として保存します。",
        "不足だけでなく各候補の除外理由も説明できるようにします。",
        "現在は10秒未満の同期処理が適切で、規模や複雑度が増した場合のみ background job を検討します。",
      ],
    },
  },
  {
    ...kanaFighter,
    eyebrow: "モバイル学習ゲーム · 有償契約",
    summary:
      "日本語初学者が、レッスン、ドリル、発音、バトル、段階的な進行を通じてひらがなとカタカナを学ぶゲーム型モバイルアプリです。",
    period: "2025年8月 – 2026年8月",
    status: "TestFlight ベータ · App Store リリース準備中",
    role: "契約 React Native デベロッパー兼テクニカルリード",
    team: "開発者1名 · オーナー兼コンテンツ制作者1名",
    metrics: [
      {
        value: "10名",
        label: "TestFlight テスター",
        detail: "日本語学習者、開発者、オーナーの知人が参加しました。",
      },
      {
        value: "iOS + Android",
        label: "検証済みビルド",
        detail:
          "Android はローカルビルドまで確認し、Google Play テスト配信は行っていません。",
      },
      {
        value: "Offline",
        label: "ローカルファーストの進捗",
        detail: "学習状態と進捗は端末に保存されます。",
      },
    ],
    heroMedia: kanaFighter.heroMedia
      ? {
          ...kanaFighter.heroMedia,
          alt: "キャラクター、体力、かな問題、ローマ字入力欄を表示する Kana Fighter の Quest バトル。",
          label: "入力式 Quest",
          caption:
            "かなの想起、入力ロック、アニメーション、音声、体力変化、進行を一つのバトル体験にまとめています。",
        }
      : undefined,
    links: kanaFighter.links.map((link) => ({
      ...link,
      label: link.kind === "repository" ? "非公開リポジトリ" : "デモ動画準備中",
    })),
    caseStudy: {
      context: [
        "初学者にとって、ひらがなとカタカナの暗記は反復的で進歩を感じにくい作業です。",
        "Dylan Wood が学習コンセプト、教授法、Figma、キャラクター、原本の画像・音声素材を担当しました。",
        "私はその方向性を完成した React Native アプリと保守可能な技術設計へ落とし込みました。",
        "バックエンドなしでレッスン、発音、ドリル、入力式バトル、物語、アニメーション、音声、進行を接続する必要がありました。",
        "素材制作による開発休止期間もあり、持続可能な制作分担が重要でした。",
      ],
      users: [
        "かなの知識がない日本語初学者。",
        "英語UIでひらがなとカタカナを学ぶユーザー。",
        "学習フロー、読みやすさ、進行、端末動作を検証する TestFlight 参加者。",
      ],
      responsibilities: [
        "技術企画・アプリ設計",
        "React Native、Expo、TypeScript 開発",
        "Figma からの画面実装",
        "ナビゲーション・学習フロー",
        "ローカル永続化",
        "Drill・Quest ロジック",
        "進行・アンロック状態",
        "アニメーション・gesture・音声",
        "Python 素材処理",
        "レスポンシブUI",
        "EAS・native build",
        "iOS・Android 検証",
        "手動テスト・TestFlight 問題対応",
      ],
      constraints: [
        "コンセプト、教授法、コンテンツ、Figma、原本素材は Dylan Wood が所有します。",
        "認証、バックエンド、ネットワークなしで進捗を保存する必要があります。",
        "再起動後も学習、物語、バトル、アンロック状態を一貫させる必要があります。",
        "iPhone SE や旧型モデルでもフレームアニメーションが安定する必要があります。",
        "音声、体力、入力、結果遷移を制御された順序で実行する必要があります。",
        "原本フレームの合成、サイズ、layer、命名、最適化を統一する必要があります。",
        "画面サイズ、safe area、キーボード状態を問わず読みやすくする必要があります。",
        "iOS デプロイはオーナーのアカウントで行いました。",
        "Android ビルドは検証しましたが Google Play テストは未実施です。",
      ],
      features: [
        "ガイド付き導入ストーリー",
        "ひらがな・カタカナマップ",
        "各モード15 row",
        "基本かな・濁音・半濁音",
        "ローマ字と発音の詳細画面",
        "swipe 移動",
        "かな→ローマ字 Drill",
        "問題と選択肢のランダム化",
        "正誤 feedback",
        "row別最高点",
        "入力式 Quest",
        "ローマ字正規化",
        "プレイヤー・敵の体力",
        "攻撃・被撃アニメーション",
        "BGM・効果音",
        "feedback 中の入力ロック",
        "バトル前後の物語",
        "row・mode の順次アンロック",
        "勝利・敗北・再試行",
        "ひらがな完了とカタカナ解放",
        "共有できる修了証",
        "音声設定",
        "進捗リセット",
        "Google Form・メール feedback",
        "オフライン学習",
      ],
      media: kanaFighter.caseStudy.media?.map((media, index) => ({
        ...media,
        alt:
          index === 0
            ? "完了、進行中、ロック状態と Fight・Drill を表示するひらがなマップ。"
            : "入力式 Quest と進行フィードバックを示す Kana Fighter 動画。",
        label: index === 0 ? "進行マップ" : "ゲームプレイ",
        caption:
          index === 0
            ? "完了・現在・ロック状態により次の学習目標が分かります。"
            : "入力、バトルフィードバック、アニメーション、体力、進行が一つの順序で動作します。",
      })),
      visuals: [
        {
          kind: "flow",
          title: "進捗が見える学習ループ",
          description: "各活動が分断されず、次の学習段階を準備します。",
          ariaLabel:
            "学ぶ、聞く、Drill、Battle、feedback、unlock の学習ループ。",
          steps: [
            {
              title: "学ぶ",
              description: "かな row、ローマ字、レッスンを確認します。",
            },
            { title: "聞く", description: "発音で文字と音を結びます。" },
            {
              title: "Drill",
              description:
                "ランダムな選択問題と即時 feedback で認識を練習します。",
            },
            {
              title: "Battle",
              description: "Quest でローマ字を入力して想起します。",
            },
            {
              title: "Feedback",
              description:
                "解答、アニメーション、音声、スコア、体力変化を確認します。",
            },
            {
              title: "Unlock",
              description: "row を完了し、次の段階を開放します。",
            },
          ],
        },
        {
          kind: "architecture",
          title: "原画からアプリ内アニメーションまで",
          description:
            "Python と Pillow で創作の主導権を保ちながら反復合成を減らしました。",
          ariaLabel:
            "オーナー制作フレーム、Python 処理、Expo preload、アプリ再生の素材構造。",
          layers: [
            {
              label: "原画",
              technologies: [
                "Owner frame",
                "Player action",
                "Opponent action",
                "Transparent PNG",
              ],
              description:
                "Dylan Wood がキャラクターと原本フレームを制作します。",
            },
            {
              label: "自動処理",
              technologies: ["Python", "Pillow", "Validation", "Composition"],
              description: "命名とサイズを検証し、整列・合成します。",
            },
            {
              label: "出力最適化",
              technologies: ["Crop", "Resize", "Contact sheet", "Naming"],
              description: "確認とアプリ mapping に適した形で出力します。",
            },
            {
              label: "Runtime 準備",
              technologies: ["Static map", "Expo Asset", "Row preload"],
              description: "現在の row に必要な素材だけを事前に読み込みます。",
            },
            {
              label: "Battle 再生",
              technologies: ["Reanimated", "Audio", "Callback"],
              description:
                "フレーム、音声、体力、遷移を明示的な順序で進めます。",
            },
          ],
        },
        {
          kind: "comparison",
          title: "より小さなUI基盤を選ぶ",
          description:
            "広範なUIライブラリがカスタムゲームUIに不要なスタイル層を加えていました。",
          beforeLabel: "初期構成",
          afterLabel: "変更後",
          before: [
            "Gluestack の生成UI",
            "NativeWind override の不一致",
            "複数層を追うデバッグ",
            "過剰な依存と生成コード",
          ],
          after: [
            "React Native primitive",
            "NativeWind を主スタイルに",
            "必要な共通 component のみ",
            "Figma を保った直接的なデバッグ",
          ],
          caption:
            "長所と短所を説明し、オーナーと合意して変更しました。開発速度を保ちつつデザインデバッグを短縮しました。",
        },
      ],
      decisions: kanaDecisions,
      outcomes: [
        "契約で計画した範囲を実装しました。",
        "約10名が約1か月 TestFlight に参加しました。",
        "iOS・Android ビルドを検証しました。",
        "初回起動時の進捗作成と AsyncStorage 読み込み順の問題を解決しました。",
        "余白、文字サイズ、可読性の意見を responsive typography と spacing に反映しました。",
        "iPhone SE と旧型モデルで確認しました。",
        "Gluestack 削除後も速度は維持され、デザインデバッグが短くなりました。",
        "約30の未使用依存と数千行の生成コードを削除しました。",
        "Python/Pillow で原画を保ちながら反復合成を減らしました。",
        "オーナーが App Store デプロイを準備しています。",
        "Google Play での Android 配信テストは未実施です。",
      ],
      reflection: [
        "小規模クライアント案件での技術リーダーシップは、持続可能な制作分担を定義することだと学びました。",
        "総合UIライブラリが速いと思っていましたが、Gluestack と NativeWind の競合がデバッグを難しくしました。オーナーに説明し小さな component 構成へ移行した結果、開発速度を保ちながら修正が速くなりました。",
        "全合成フレームをオーナーへ依頼せず、原画と自動合成を分けることでビジュアル方針を守りながらボトルネックを減らしました。",
        "入力がロック、音声、アニメーション、ダメージ、進行、遷移につながり、単なるクイズではなくゲームとして動く点に最も満足しています。",
        "TestFlight から、一つの画面に合うだけでは不十分で、小型・旧型端末でも文字と余白を検証すべきだと学びました。",
        "作り直すなら、全保存データの versioned migration、主要フローの自動テスト、reduced-motion を追加します。",
        "現状ではローカルファーストと小さな component 構成を保ち、端末間同期が必要になった時の移行境界を定義します。",
      ],
    },
  },
  {
    ...rateVanRent,
    eyebrow: "初期の学校プロジェクト",
    summary:
      "バンクーバーの賃貸体験を評価する3名の学校プロジェクトで、初期の共同Web開発経験として掲載しています。",
    period: "1学期",
    status: "完了",
    role: "デベロッパー",
    team: "学生デベロッパー3名",
    technologies: ["JavaScript", "Webアプリケーション開発"],
    links: rateVanRent.links.map((link) => ({ ...link, label: "リポジトリ" })),
  },
  {
    ...portfolio,
    eyebrow: "個人プロジェクト",
    summary:
      "プロダクト、技術判断、職務経験を構造的に紹介するために設計・開発したポートフォリオです。",
    period: "継続中",
    status: "開発中",
    role: "デザイナー兼デベロッパー",
    team: "個人プロジェクト",
    links: portfolio.links.map((link) => ({ ...link, label: "リポジトリ" })),
  },
];

export const selectedProjects = projects.filter(
  (project) => project.tier === "selected",
);
export const additionalProjects = projects.filter(
  (project) => project.tier === "additional",
);

export function getProjectBySlug(slug: string | undefined) {
  return slug ? projects.find((project) => project.slug === slug) : undefined;
}
