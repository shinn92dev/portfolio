import { projects as englishProjects } from "../en/projects";

import type { Project } from "../types";

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

export const projects: Project[] = [
  {
    ...gyuKaku,
    eyebrow: "레스토랑 운영 · 유급 계약",
    summary:
      "분산된 스프레드시트 업무를 구조화된 직원 관리와 제약 기반 스케줄 생성으로 통합한 Gyu-Kaku Vancouver 내부 운영 플랫폼입니다.",
    period: "2026년 5월 – 2026년 7월",
    status: "파일럿 운영 중 · 2026년 9월 확대 도입 예정",
    role: "단독 풀스택 개발자",
    team: "개발자 1명 · 운영 이해관계자 5명",
    metrics: [
      {
        value: "10초 이내",
        label: "첫 스케줄 초안",
        detail: "FOH와 BOH를 합친 첫 스케줄 초안을 생성합니다.",
      },
      {
        value: "6–10시간 → 1시간 이하",
        label: "주간 스케줄 업무",
        detail: "생성 후 약 20–30분의 검토와 수동 조정을 포함합니다.",
        attribution: "Gyu-Kaku Vancouver 매니지먼트 팀 제공.",
      },
      {
        value: "90%+",
        label: "근무 가능 시간 관련 휴먼 에러 감소",
        attribution: "Gyu-Kaku Vancouver 매니지먼트 팀 제공.",
      },
    ],
    heroMedia: gyuKaku.heroMedia
      ? {
          ...gyuKaku.heroMedia,
          alt: "직원, 근무 가능 시간, 휴가, 퍼포먼스 레벨과 스케줄 운영을 보여주는 Gyu-Kaku Portal 매니저 대시보드.",
          label: "운영 개요",
          caption:
            "직원 관리, 근무 가능 시간, 휴가, 퍼포먼스 레벨과 스케줄 자동화를 하나의 운영 공간에서 관리합니다.",
        }
      : undefined,
    links: gyuKaku.links.map((link) => ({
      ...link,
      label: link.kind === "demo" ? "파일럿 데모 열기" : "비공개 저장소",
    })),
    caseStudy: {
      context: [
        "직원 정보, 근무 가능 시간, 휴가 신청, 스케줄과 퍼포먼스 정보가 스프레드시트, 이메일과 개인 메시지에 흩어져 있었습니다.",
        "매니저는 서로 다른 정보를 직접 복사하고 대조하며 FOH와 BOH 스케줄을 따로 작성했습니다.",
        "포맷 깨짐, 행 밀림, 비슷한 직원 이름과 별도로 전달된 시간 제한 때문에 잘못된 근무 가능 정보가 반영되기도 했습니다.",
        "휴가는 이메일로 신청하고 별도로 관리했으며, 블랙아웃 기간도 공지와 수동 확인에 의존했습니다.",
        "직원은 신청 상태, 세부 시작 가능 시간과 역할별 퍼포먼스 레벨의 변경을 확인하기 어려웠습니다.",
      ],
      users: [
        "근무 가능 시간과 휴가를 신청하고, 공개된 스케줄과 역할별 퍼포먼스 이력을 확인하는 Gyu-Kaku Vancouver 직원.",
        "신청을 검토하고 직원 정보와 운영 요구사항을 관리하며 스케줄을 작성하는 매니저와 슈퍼바이저.",
        "현재 파일럿 사용자는 약 15명이며, 초기 확대 도입 시 약 30명, 이후 최대 100명 수준을 예상합니다.",
      ],
      responsibilities: [
        "제품 제안 및 범위 정의",
        "이해관계자 인터뷰와 요구사항 조사",
        "정보 구조 및 UI/UX 설계",
        "프론트엔드와 백엔드 개발",
        "데이터베이스 및 권한 설계",
        "제약 기반 스케줄링 엔진",
        "인프라 및 배포",
        "파일럿 테스트와 유지보수",
        "문서화 및 직원 교육",
      ],
      constraints: [
        "근무 가능 시간, 승인된 휴가, 역할과 세부 시간 제한을 반드시 지켜야 합니다.",
        "한 직원에게 겹치는 교대나 허용되지 않은 더블 시프트를 배정할 수 없습니다.",
        "Closing 같은 운영 표기는 직원에게 그대로 보이되, solver는 충돌과 업무량 계산에 추정 종료 시간을 사용해야 합니다.",
        "자격 규칙을 위반하지 않으면서 커버리지, 주간 시간, 공정성과 개인 선호를 최적화해야 합니다.",
        "매니저는 생성 설정을 조정하고 공개 전에 초안을 직접 수정할 수 있어야 합니다.",
        "늦게 도착한 생성 결과가 더 최근의 수동 초안을 덮어써서는 안 됩니다.",
        "공개된 스케줄은 각 공개 시점에 직원이 본 상태를 보존해야 합니다.",
        "제품과 공개된 모든 성과는 허가받은 Gyu-Kaku Vancouver 운영에만 해당합니다.",
      ],
      features: [
        "직원 및 매니저 인증",
        "역할 기반 권한 관리",
        "직원 프로필 및 고용 정보 관리",
        "15분 단위 시작 시간 제한을 포함한 근무 가능 시간 제출",
        "미제출 근무 가능 시간 추적과 매니저 검토",
        "휴가 신청, 승인 이력과 블랙아웃 기간",
        "승인된 휴가의 스케줄 자동 제외",
        "주간 FOH 및 BOH 스케줄 관리",
        "Google OR-Tools CP-SAT 초안 생성",
        "인원 목표와 선택적 운영 교대 설정",
        "수동 스케줄 수정 및 재배정",
        "스케줄 충돌 검증과 override 검토",
        "인원 부족 및 solver 진단",
        "버전 보호된 초안 저장",
        "스케줄 공개 및 변경 불가능한 공개 snapshot",
        "직원용 공개 스케줄",
        "역할별 퍼포먼스 평가, 이력과 변화 그래프",
        "직원 및 매니저용 반응형 UI",
      ],
      media: gyuKaku.caseStudy.media?.map((media, index) => ({
        ...media,
        alt:
          [
            "Lunch와 Dinner, 세부 시작 가능 시간을 입력하는 주간 근무 가능 시간 폼.",
            "직원별 근무 가능 여부와 배정된 교대를 보여주는 FOH 스케줄 초안.",
            "배정 수, 미충족 목표, 생성 시간과 인원 부족 진단을 보여주는 생성 결과.",
            "역할별 지표, 평가 메모와 레벨 변화 그래프를 보여주는 퍼포먼스 이력 화면.",
          ][index] ?? media.alt,
        label:
          [
            "구조화된 직원 입력",
            "수정 가능한 스케줄 초안",
            "실행 가능한 진단",
            "확인 가능한 퍼포먼스 이력",
          ][index] ?? media.label,
        caption:
          [
            "직원이 Lunch와 Dinner별 세부 시작 시간을 입력할 수 있어 예외 사항을 별도 메시지로 보낼 필요가 없습니다.",
            "근무 가능 여부와 배정을 한 화면에서 검토하고 저장 또는 공개 전에 수정할 수 있습니다.",
            "유효한 부분 결과는 유지하면서 날짜, 서비스와 역할별 부족 인원을 알려 매니저가 필요한 조치를 확인할 수 있습니다.",
            "직원은 최신 결과만이 아니라 레벨에 반영된 지표, 메모와 변경 이력을 직접 확인할 수 있습니다.",
          ][index] ?? media.caption,
      })),
      visuals: [
        {
          kind: "comparison",
          title: "분산된 조율에서 하나의 운영 데이터로",
          description:
            "직원 입력, 매니저 결정과 공개 스케줄을 추적 가능한 하나의 흐름으로 연결합니다.",
          beforeLabel: "도입 전",
          afterLabel: "Portal 도입 후",
          before: [
            "공유 스프레드시트로 근무 가능 시간을 제출",
            "세부 시간 제한은 별도 메시지로 전달",
            "휴가와 블랙아웃은 이메일과 공지로 관리",
            "매니저가 직접 대조해 FOH와 BOH 스케줄 작성",
          ],
          after: [
            "구조화된 근무 가능 시간과 시작 제한 제출",
            "휴가, 승인과 블랙아웃을 하나의 데이터로 관리",
            "검증된 운영 데이터를 스케줄 생성 입력으로 사용",
            "매니저가 초안을 검토·수정한 뒤 보존된 스케줄 공개",
          ],
          caption:
            "매니저의 판단을 없애지 않으면서 반복적인 복사와 대조를 줄였습니다.",
        },
        {
          kind: "architecture",
          title: "운영 데이터가 수정 가능한 초안이 되기까지",
          description:
            "Solver는 입력 검증, 버전 보호와 부족 인원 보고를 포함한 더 큰 workflow의 일부입니다.",
          ariaLabel:
            "운영 입력, 후보 필터링, OR-Tools, 검증, 초안 저장과 공개로 이어지는 스케줄 구조.",
          layers: [
            {
              label: "운영 입력",
              technologies: [
                "직원",
                "역할",
                "근무 가능 시간",
                "승인 휴가",
                "일별 설정",
                "정책 버전",
              ],
              description:
                "매니저 설정과 직원 제출 데이터가 특정 주의 스케줄링 문제를 정의합니다.",
            },
            {
              label: "후보 필터링",
              technologies: [
                "역할 자격",
                "가능 시간",
                "휴가 제외",
                "중복 검사",
              ],
              description:
                "필수 규칙을 깨고 인원을 채울 수 없도록 최적화 전에 유효하지 않은 후보를 제외합니다.",
            },
            {
              label: "최적화",
              technologies: [
                "Google OR-Tools",
                "CP-SAT",
                "Hard constraints",
                "Weighted objectives",
              ],
              description:
                "커버리지, 시간, 공정성과 운영 선호를 균형 있게 고려해 가장 좋은 유효 초안을 찾습니다.",
            },
            {
              label: "검증 및 진단",
              technologies: ["부족 보고", "충돌 검증", "버전 검사"],
              description:
                "유효한 배정을 보존하고 부족 인원을 보고하며 오래된 결과가 최신 수정을 덮어쓰지 않게 합니다.",
            },
            {
              label: "매니저 제어 결과",
              technologies: [
                "수정 가능한 초안",
                "수동 재배정",
                "공개 snapshot",
              ],
              description:
                "매니저가 진단을 검토하고 배정을 조정한 뒤 직원용 스케줄을 공개합니다.",
            },
          ],
        },
        {
          kind: "comparison",
          title: "필수 규칙과 가중 목표",
          description:
            "절대 발생해서는 안 되는 배정과 균형을 찾아야 하는 운영 목표를 구분합니다.",
          beforeLabel: "Hard constraints",
          afterLabel: "Soft objectives",
          before: [
            "근무 가능 시간 준수",
            "승인 휴가 제외",
            "자격 있는 역할만 배정",
            "겹치는 교대 방지",
            "개인별 최대 시간 준수",
          ],
          after: [
            "역할·서비스별 커버리지 개선",
            "주간 시간과 공정성 균형",
            "역할·서비스 선호 반영",
            "바쁜 날과 선택적 업무 지원",
            "완전 배정이 불가능하면 최선의 부분 초안 반환",
          ],
          caption:
            "불가능한 직원을 배정한 완성형 스케줄보다 부족 인원을 명시한 유효한 부분 스케줄이 안전합니다.",
        },
      ],
      decisions: [
        {
          title: "검증된 제약 solver 사용",
          problem:
            "근무 가능 시간, 휴가, 역할, 중복, 시간, 커버리지와 선호를 함께 판단해야 했습니다.",
          options: ["전부 수동으로 작성", "검증된 solver로 초안 자동 생성"],
          decision: "Google OR-Tools CP-SAT로 첫 스케줄 초안을 생성했습니다.",
          rationale:
            "자체 최적화 엔진보다 성숙한 무료 solver를 사용하고 실제 운영 규칙의 정확한 모델링에 집중했습니다.",
          tradeoffs: [
            "정확한 운영 데이터와 제약 모델이 필요합니다.",
            "규칙 변경에는 대표 시나리오 회귀 테스트가 필요합니다.",
            "명확한 진단과 매니저 검토가 여전히 필요합니다.",
          ],
        },
        {
          title: "Hard constraints와 운영 목표 분리",
          problem:
            "모든 선호를 필수로 만들면 해가 없고, 자격 규칙을 선호로 만들면 잘못된 배정이 생길 수 있습니다.",
          options: [
            "모든 규칙을 필수 처리",
            "모든 규칙을 penalty 처리",
            "필수 자격과 가중 목표 분리",
          ],
          decision:
            "가능 시간, 휴가, 자격, 중복과 최대 시간은 hard constraint로, 커버리지와 공정성은 weighted objective로 모델링했습니다.",
          rationale:
            "전체 커버리지가 불가능해도 유효한 최선의 부분 초안을 만들 수 있습니다.",
          tradeoffs: [
            "성공 결과도 일부 자리가 비어 있을 수 있습니다.",
            "공개 전 부족 진단 검토가 필요합니다.",
            "가중치가 나쁘면 운영상 만족스럽지 않은 결과가 나올 수 있습니다.",
          ],
        },
        {
          title: "자동 생성 결과를 수정 가능하게 유지",
          problem:
            "현장의 상황 판단을 최적화 모델이 모두 표현할 수는 없습니다.",
          options: [
            "자동 공개",
            "복수 안 비교",
            "기존 초안 흐름에 하나의 결과 삽입",
          ],
          decision:
            "수동 배정과 같은 검증을 통과하는 수정 가능한 초안을 반환했습니다.",
          rationale: "반복 배정은 줄이되 최종 통제는 매니저에게 남깁니다.",
          tradeoffs: [
            "완전 자동화는 아닙니다.",
            "수동 수정도 충돌 검증이 필요합니다.",
            "생성·저장·공개 상태를 명확히 구분해야 합니다.",
          ],
        },
        {
          title: "유효 결과를 버리지 않고 부분 커버리지 보고",
          problem:
            "실제 인력 부족으로 전체 커버리지가 불가능해도 많은 유효 배정은 만들 수 있습니다.",
          options: [
            "한 자리라도 비면 전체 실패",
            "자격 규칙 완화",
            "유효 부분 저장과 부족 보고",
          ],
          decision:
            "최선의 유효 부분 초안과 날짜·서비스·역할별 부족 진단을 반환했습니다.",
          rationale:
            "불가능한 직원을 배정하지 않고도 매니저가 유효한 결과에서 이어서 작업할 수 있습니다.",
          tradeoffs: [
            "초안이 불완전할 수 있음을 알려야 합니다.",
            "부족, 정책 오류와 solver 실패를 구분해야 합니다.",
            "후보 제외 설명은 더 개선할 수 있습니다.",
          ],
        },
        {
          title: "표시 업무와 solver 시간 추정 분리",
          problem:
            "Closing 같은 운영 표기는 유지해야 하지만 충돌 계산에는 실제 시간 범위가 필요합니다.",
          options: [
            "모든 표기를 고정 종료 시간으로 변경",
            "업무형 교대를 계산에서 제외",
            "표시는 유지하고 내부 추정 시간 사용",
          ],
          decision:
            "운영 표기는 보존하고 solver 안에서만 역할·요일별 추정 종료 시간을 사용했습니다.",
          rationale:
            "직원에게 익숙한 표시를 유지하면서 충돌과 주간 업무량을 계산합니다.",
          tradeoffs: [
            "추정 시간을 확정 근무시간처럼 보이면 안 됩니다.",
            "정책 유지보수가 필요합니다.",
            "업무형 교대의 시간은 추정치입니다.",
          ],
        },
        {
          title: "낙관적 동시성으로 수동 작업 보호",
          problem:
            "생성 중 매니저가 초안을 수정하면 늦은 결과가 최신 작업을 덮어쓸 수 있습니다.",
          options: [
            "항상 생성 결과로 교체",
            "생성 중 편집 금지",
            "저장 직전 초안 버전 재검증",
          ],
          decision:
            "예상 lock version을 함께 보내고 저장 전에 초안이 바뀌면 결과를 거부합니다.",
          rationale:
            "매니저가 계속 작업하면서도 오래된 결과로 인한 조용한 데이터 손실을 막습니다.",
          tradeoffs: [
            "거부된 결과는 다시 생성해야 할 수 있습니다.",
            "버전 충돌을 명확히 표시해야 합니다.",
            "모든 초안 변경이 버전 검사에 참여해야 합니다.",
          ],
        },
        {
          title: "하나의 데이터 소스로 운영 workflow 연결",
          problem:
            "분리된 문서와 메시지 때문에 직원, 휴가, 스케줄과 퍼포먼스 이력이 서로 어긋났습니다.",
          options: [
            "기존 스프레드시트 개선",
            "업무별 별도 도구",
            "한 앱과 관계형 DB로 연결",
          ],
          decision:
            "PostgreSQL을 직원, 신청, 근무 가능 시간, 스케줄, 공개 이력과 퍼포먼스의 공통 데이터 소스로 사용했습니다.",
          rationale:
            "승인된 정보가 다시 복사되지 않고 다음 workflow에 직접 반영됩니다.",
          tradeoffs: [
            "인증, migration, backup과 운영 책임이 필요합니다.",
            "연결된 변경은 여러 영역을 함께 검증해야 합니다.",
            "비공개 시스템은 demo data와 공개 범위를 조심해야 합니다.",
          ],
        },
      ],
      outcomes: [
        "합의한 전체 기능 범위를 파일럿 전에 구현했으며 현재 실제 사용 중입니다.",
        "FOH와 BOH를 합친 첫 스케줄 초안을 10초 이내에 생성합니다.",
        "주당 약 6–10시간이던 스케줄 업무가 검토와 수정을 포함해 최대 1시간으로 줄었습니다.",
        "근무 가능 시간 관련 휴먼 에러가 약 90% 감소했습니다.",
        "직원은 별도 연락 없이 세부 시작 가능 시간을 제출할 수 있습니다.",
        "휴가, 블랙아웃, 승인 상태와 스케줄 자격이 하나의 workflow로 연결되었습니다.",
        "직원 피드백에서 역할별 퍼포먼스 변경과 지표를 그래프로 더 쉽게 확인할 수 있다는 평가를 받았습니다.",
        "현재까지 파일럿에서 중대한 신규 workflow 문제는 발견되지 않았습니다.",
        "2026년 9월 Gyu-Kaku Vancouver 확대 도입을 계획하고 있습니다.",
      ],
      reflection: [
        "최적화 품질은 solver보다 도메인 모델링에 더 크게 좌우된다는 점을 배웠습니다. 자체 알고리즘 대신 OR-Tools를 선택해 실제 운영을 신뢰할 수 있는 제약과 workflow로 옮기는 데 집중했습니다.",
        "자동화 전에 수동 초안과 공개 lifecycle을 먼저 만든 것이 유효했습니다. Solver는 운영을 통제하지 않고 매니저가 검토·수정할 출발점을 만듭니다.",
        "매니저의 스케줄 업무를 줄이는 동시에 직원도 정확한 근무 가능 시간, 휴가, 공개 스케줄과 퍼포먼스 변화를 확인할 수 있다는 점이 특히 만족스럽습니다.",
        "다시 만든다면 정책 버전, 입력, 상태, objective breakdown, 진단, 실행 시간과 결과 버전을 포함해 모든 생성 시도를 저장하겠습니다.",
        "또한 부족 위치뿐 아니라 각 후보가 제외된 이유까지 매니저가 이해할 수 있도록 설명 가능성을 강화하겠습니다.",
        "현재는 10초 이내 동기 실행이 적절합니다. 규모나 모델 복잡도가 커져 신뢰성이 떨어질 때만 background job을 도입하겠습니다.",
      ],
    },
  },
  {
    ...kanaFighter,
    eyebrow: "모바일 학습 게임 · 유급 계약",
    summary:
      "처음 일본어를 배우는 사용자가 레슨, 드릴, 발음, 배틀과 단계별 진행을 통해 히라가나와 가타카나를 익히는 게임형 모바일 앱입니다.",
    period: "2025년 8월 – 2026년 8월",
    status: "TestFlight 베타 · App Store 출시 준비 중",
    role: "계약 React Native 개발자 및 기술 리드",
    team: "개발자 1명 · 오너 겸 콘텐츠 제작자 1명",
    metrics: [
      {
        value: "10명",
        label: "TestFlight 테스터",
        detail: "일본어 학습자, 개발자와 오너의 지인이 테스트에 참여했습니다.",
      },
      {
        value: "iOS + Android",
        label: "검증한 빌드 대상",
        detail:
          "Android 빌드는 로컬에서 확인했으며 Google Play 테스트 배포는 진행하지 않았습니다.",
      },
      {
        value: "Offline",
        label: "로컬 우선 진행 상태",
        detail: "학습 상태와 진행도는 기기에 저장됩니다.",
      },
    ],
    heroMedia: kanaFighter.heroMedia
      ? {
          ...kanaFighter.heroMedia,
          alt: "캐릭터, 체력, 가나 문제와 로마자 입력창이 보이는 Kana Fighter Quest 배틀.",
          label: "직접 입력하는 Quest",
          caption:
            "가나 회상, 입력 잠금, 애니메이션, 오디오, 체력 변화와 진행을 하나의 배틀 흐름으로 연결합니다.",
        }
      : undefined,
    links: kanaFighter.links.map((link) => ({
      ...link,
      label: link.kind === "repository" ? "비공개 저장소" : "데모 영상 준비 중",
    })),
    caseStudy: {
      context: [
        "처음 일본어를 배우는 사람에게 히라가나와 가타카나 암기는 반복적이고 진척을 느끼기 어렵습니다.",
        "Dylan Wood가 학습 컨셉, 교육 방식, Figma 디자인, 캐릭터와 원본 비주얼·오디오 에셋을 담당했습니다.",
        "저는 그 방향을 완성된 React Native 앱과 유지보수 가능한 기술 구조로 구현했습니다.",
        "백엔드 없이 레슨, 발음, 드릴, 직접 입력 배틀, 스토리, 애니메이션, 오디오와 단계별 진행을 연결해야 했습니다.",
        "새 에셋 제작 기간에는 개발 공백이 있어 지속 가능한 에셋 제작 경계를 정하는 일이 중요했습니다.",
      ],
      users: [
        "가나 지식 없이 일본어 학습을 시작하는 사람.",
        "영어 UI로 히라가나와 가타카나를 배우는 사용자.",
        "학습 흐름, 가독성, 진행과 기기 동작을 검증한 TestFlight 참여자.",
      ],
      responsibilities: [
        "기술 기획 및 앱 아키텍처",
        "React Native, Expo 및 TypeScript 개발",
        "오너의 Figma 디자인 화면 구현",
        "내비게이션 및 학습 흐름",
        "로컬 저장 구조",
        "Drill 및 Quest 게임 로직",
        "진행 및 잠금 해제 상태",
        "애니메이션, gesture 및 오디오 통합",
        "Python 기반 에셋 처리와 최적화",
        "반응형 UI",
        "EAS 및 native build 설정",
        "iOS 및 Android 빌드 검증",
        "수동 테스트 및 TestFlight 이슈 해결",
      ],
      constraints: [
        "제품 컨셉, 교육 방식, 콘텐츠, Figma와 원본 에셋은 Dylan Wood가 소유합니다.",
        "인증, 백엔드나 네트워크 없이 진행 상태가 로컬에 유지되어야 합니다.",
        "화면 이동과 재실행 이후에도 학습·스토리·배틀·잠금 상태가 일관되어야 합니다.",
        "프레임 애니메이션이 iPhone SE와 구형 iPhone에서도 원활해야 합니다.",
        "애니메이션, 오디오, 체력, 입력과 결과 이동이 통제된 순서로 진행되어야 합니다.",
        "원본 프레임은 결합, 크기, layer, 이름과 최적화가 일관되어야 합니다.",
        "다양한 화면, safe area와 키보드 상태에서도 읽을 수 있어야 합니다.",
        "iOS 배포는 오너 계정에서 진행했습니다.",
        "Android 빌드는 검증했지만 Google Play 테스트는 하지 않았습니다.",
      ],
      features: [
        "가이드형 도입 스토리와 튜토리얼",
        "히라가나·가타카나 학습 지도",
        "각 모드 15개 진행 row",
        "기본 가나, 탁음과 반탁음",
        "로마자와 발음이 포함된 상세 화면",
        "상세 화면 swipe",
        "가나-로마자 객관식 Drill",
        "무작위 문제와 선택지",
        "정답·오답 feedback",
        "row별 최고 점수 저장",
        "직접 입력 Quest 배틀",
        "로마자 답안 정규화",
        "플레이어·적 체력",
        "공격·피격 애니메이션",
        "배경음과 효과음",
        "feedback 중 입력 잠금",
        "도입·배틀 전후 스토리",
        "순차 row 및 mode 잠금 해제",
        "승리·패배·재시도",
        "히라가나 완료와 가타카나 해제",
        "공유 가능한 수료증",
        "배경음·효과음 설정",
        "로컬 진행 초기화",
        "Google Form feedback과 이메일 오류 신고",
        "번들 에셋 로드 후 오프라인 학습",
      ],
      media: kanaFighter.caseStudy.media?.map((media, index) => ({
        ...media,
        alt:
          index === 0
            ? "완료, 진행 중, 잠금 상태와 Fight·Drill 버튼이 보이는 Kana Fighter 히라가나 지도."
            : "직접 입력 Quest 배틀과 진행 feedback을 보여주는 Kana Fighter 플레이 영상.",
        label: index === 0 ? "진행 지도" : "플레이 흐름",
        caption:
          index === 0
            ? "완료·활성·잠금 상태로 다음 학습 목표를 명확히 보여줍니다."
            : "답 입력, 배틀 feedback, 애니메이션, 체력 변화와 진행이 하나의 통제된 순서로 동작합니다.",
      })),
      visuals: [
        {
          kind: "flow",
          title: "진행이 보이는 학습 loop",
          description:
            "서로 단절된 문제가 아니라 각 활동이 다음 단계의 학습을 준비합니다.",
          ariaLabel:
            "학습, 듣기, Drill, Battle, feedback과 unlock으로 이어지는 Kana Fighter 학습 loop.",
          steps: [
            {
              title: "학습",
              description: "가나 row의 문자, 로마자와 레슨을 확인합니다.",
            },
            {
              title: "듣기",
              description: "발음으로 문자와 소리를 연결합니다.",
            },
            {
              title: "Drill",
              description:
                "무작위 객관식과 즉각적인 feedback으로 인식을 연습합니다.",
            },
            {
              title: "Battle",
              description: "Quest에서 로마자를 직접 입력해 회상합니다.",
            },
            {
              title: "Feedback",
              description:
                "답, 애니메이션, 오디오, 점수와 체력 변화를 확인합니다.",
            },
            {
              title: "Unlock",
              description: "row를 완료하고 로컬에 저장해 다음 단계를 엽니다.",
            },
          ],
        },
        {
          kind: "architecture",
          title: "원본 artwork에서 앱 애니메이션까지",
          description:
            "Python과 Pillow pipeline으로 창작 영역은 유지하고 반복 결합 작업을 줄였습니다.",
          ariaLabel:
            "오너 프레임, Python 처리, Expo preload와 앱 애니메이션으로 이어지는 에셋 제작 구조.",
          layers: [
            {
              label: "원본 artwork",
              technologies: [
                "오너 제작 frame",
                "Player action",
                "Opponent action",
                "Transparent PNG",
              ],
              description:
                "Dylan Wood가 캐릭터와 원본 action frame을 제작합니다.",
            },
            {
              label: "자동 가공",
              technologies: [
                "Python",
                "Pillow",
                "Frame validation",
                "Layer composition",
              ],
              description:
                "이름과 크기를 검증하고 양쪽 프레임을 정렬·결합합니다.",
            },
            {
              label: "출력 최적화",
              technologies: [
                "Crop",
                "Resize",
                "Contact sheet",
                "일관된 파일명",
              ],
              description:
                "검토와 앱 mapping에 적합한 크기와 이름으로 출력합니다.",
            },
            {
              label: "Runtime 준비",
              technologies: ["Static asset map", "Expo Asset", "Row preload"],
              description:
                "현재 row에 필요한 프레임만 상호작용 전에 불러옵니다.",
            },
            {
              label: "Battle 재생",
              technologies: [
                "React Native Reanimated",
                "Audio feedback",
                "Completion callback",
              ],
              description:
                "프레임, 오디오, 체력과 화면 이동을 명시적인 순서로 실행합니다.",
            },
          ],
        },
        {
          kind: "comparison",
          title: "더 작은 UI 기반 선택",
          description:
            "광범위한 UI library가 맞춤형 게임 UI에 불필요한 스타일 layer를 더했습니다.",
          beforeLabel: "초기 방식",
          afterLabel: "변경 방식",
          before: [
            "Gluestack의 광범위한 생성 UI",
            "NativeWind override가 적용되지 않는 사례",
            "여러 시스템을 추적해야 하는 스타일 디버깅",
            "필요 이상으로 큰 dependency와 생성 코드",
          ],
          after: [
            "React Native primitive 기반",
            "NativeWind를 주 스타일 layer로 사용",
            "반복되는 상호작용만 작은 공통 component로 분리",
            "Figma 디자인을 유지하면서 직접적인 디버깅",
          ],
          caption:
            "장단점을 설명한 뒤 오너와 변경에 합의했습니다. 개발 속도는 유지되고 디자인 디버깅 시간은 줄었습니다.",
        },
      ],
      decisions: [
        {
          title: "로컬 우선 진행 구조",
          problem:
            "진행 저장은 필요했지만 계정, 소셜, 기기 동기화와 서버 콘텐츠는 필요하지 않았습니다.",
          options: ["백엔드와 계정", "내장 관계형 DB", "AsyncStorage"],
          decision:
            "도입 상태, 가나 진행, 잠금, 음향 설정과 최고 점수를 AsyncStorage에 저장했습니다.",
          rationale:
            "온보딩 마찰과 불필요한 인프라를 줄이고 오프라인 사용을 지원했습니다.",
          tradeoffs: [
            "기기 간 동기화가 없습니다.",
            "앱 데이터 삭제 시 진행도 사라집니다.",
            "스키마 변경에는 초기화와 migration이 필요합니다.",
            "향후 계정에는 명확한 이전 경계가 필요합니다.",
          ],
        },
        {
          title: "커리큘럼과 화면 로직 분리",
          problem:
            "문자, 발음, 선택지, 어휘, 답안, 스토리와 에셋 관계를 화면 안에서 관리하기 어려웠습니다.",
          options: [
            "화면에 직접 작성",
            "원격 CMS",
            "typed static data와 생성 JSON",
          ],
          decision:
            "콘텐츠와 에셋 관계를 화면 밖에 두고 TypeScript script로 Quest 답안 map을 생성했습니다.",
          rationale:
            "백엔드 없이 data-driven 구조를 유지하고 React Native static asset 제약을 지켰습니다.",
          tradeoffs: [
            "row key 변경이 여러 map에 영향을 줍니다.",
            "파일 간 일관성 검사가 필요합니다.",
            "오너가 외부 CMS로 수정할 수 없습니다.",
            "생성 JSON을 source와 동기화해야 합니다.",
          ],
        },
        {
          title: "row별 애니메이션 에셋 preload",
          problem: "재생 시점 로드는 구형 기기에서 끊김을 만들 수 있었습니다.",
          options: [
            "재생할 때 로드",
            "다른 애니메이션 형식",
            "현재 row 프레임 preload",
          ],
          decision:
            "Quest 활성화 전에 현재 row의 sprite를 모아 미리 불러왔습니다.",
          rationale:
            "원본 artwork를 유지하면서 iPhone SE와 구형 모델에서도 안정적인 배틀을 만들었습니다.",
          tradeoffs: [
            "앱 용량이 늘어납니다.",
            "상호작용 전 전환 시간이 필요합니다.",
            "메모리 사용을 고려해야 합니다.",
            "개별 실패 fallback이 필요합니다.",
          ],
        },
        {
          title: "상태 변경 전 배틀 feedback 순서화",
          problem:
            "답 제출이 상태, 오디오, 애니메이션, 체력, 입력과 이동을 동시에 바꿨습니다.",
          options: [
            "모든 상태 즉시 변경",
            "고정 delay",
            "입력 잠금과 완료 callback",
          ],
          decision:
            "입력 잠금, 음향·애니메이션, damage, 완료 대기, 다음 이동 순서로 처리했습니다.",
          rationale:
            "보이는 feedback과 실제 상태를 맞추고 중복 입력을 막았습니다.",
          tradeoffs: [
            "애니메이션과 게임 상태 사이 계약이 필요합니다.",
            "중단 시 fallback이 필요합니다.",
            "기기별 timing 테스트가 필요합니다.",
          ],
        },
        {
          title: "애니메이션 에셋 준비 자동화",
          problem:
            "오너가 모든 캐릭터 조합을 수동 제작하면 큰 반복 작업이 발생했습니다.",
          options: [
            "오너가 전부 결합",
            "개발 중 수동 결합",
            "원본과 자동 pipeline 분리",
          ],
          decision:
            "오너는 원본 제작을 맡고 Python과 Pillow로 검증, 결합, 정렬, layer, crop, resize와 preview를 자동화했습니다.",
          rationale: "창작 통제권을 유지하면서 기계적인 작업을 줄였습니다.",
          tradeoffs: [
            "script와 naming이 제작 workflow 일부가 됩니다.",
            "입력 구조를 지켜야 합니다.",
            "pipeline과 앱 asset map을 동기화해야 합니다.",
          ],
        },
        {
          title: "Gluestack을 작은 native component로 교체",
          problem:
            "Gluestack 스타일이 NativeWind 적용을 막아 디자인 문제의 원인을 찾기 어려웠습니다.",
          options: [
            "계속 override",
            "wrapper 추가",
            "primitive와 작은 custom component",
          ],
          decision:
            "오너와 장단점을 논의한 뒤 디자인은 유지하고 React Native primitive, NativeWind와 공통 component로 교체했습니다.",
          rationale:
            "고도로 맞춤화된 작은 게임 UI에는 광범위한 생성 UI 시스템의 이점이 크지 않았습니다.",
          tradeoffs: [
            "공통 동작을 직접 유지해야 합니다.",
            "접근성을 의도적으로 구현해야 합니다.",
            "향후 범용 UI에는 선택적 primitive 도입을 검토할 수 있습니다.",
          ],
        },
        {
          title: "의존 UI 전에 저장 상태 초기화",
          problem:
            "초기 TestFlight에서 AsyncStorage 생성 전 UI가 진행 상태를 읽어 잘못된 잠금 상태를 보였습니다.",
          options: [
            "임시 기본값 즉시 표시",
            "전체 앱 hydration 화면",
            "초기화 중앙화와 의존 UI만 지연",
          ],
          decision:
            "초기화를 중앙화하고 현재 schema로 상태를 정규화한 뒤 관련 Home UI를 표시했습니다.",
          rationale:
            "추가 전역 상태 library 없이 잘못된 잠금과 손상 데이터에 대응합니다.",
          tradeoffs: [
            "일부 화면에 loading 상태가 필요합니다.",
            "모든 데이터 그룹의 정규화 수준은 같지 않습니다.",
            "신규·기존 데이터 모두 테스트해야 합니다.",
          ],
        },
      ],
      outcomes: [
        "계약에서 계획한 전체 범위를 구현했습니다.",
        "약 10명이 한 달가량 TestFlight 테스트에 참여했습니다.",
        "iOS와 Android 빌드를 모두 검증했습니다.",
        "첫 실행 시 진행 데이터 생성과 로딩 순서 문제를 발견하고 해결했습니다.",
        "마진, 글자 크기와 가독성 feedback을 반응형 typography와 spacing에 반영했습니다.",
        "iPhone SE와 구형 모델에서 UI를 검토했습니다.",
        "Gluestack 제거 후 개발 속도는 유지되고 디자인 디버깅은 빨라졌습니다.",
        "약 30개의 미사용 UI dependency와 수천 줄의 생성 코드를 제거했습니다.",
        "Python/Pillow pipeline으로 원본 artwork를 유지하면서 반복 결합 작업을 줄였습니다.",
        "오너가 App Store 배포를 준비하고 있습니다.",
        "Google Play의 Android 배포 테스트는 남아 있습니다.",
      ],
      reflection: [
        "소규모 고객 프로젝트의 기술 리더십은 지속 가능한 제작 경계를 정하는 일이라는 점을 배웠습니다.",
        "처음에는 종합 UI library가 빠를 것이라 생각했지만 Gluestack과 NativeWind의 충돌이 디버깅을 어렵게 했습니다. 오너에게 장단점을 설명하고 작은 component 구조로 바꾼 뒤 개발 속도는 유지되고 스타일 문제 해결은 빨라졌습니다.",
        "모든 결합 프레임을 오너에게 요구하는 대신 원본 제작과 자동 합성을 분리해 시각 방향을 지키면서 병목을 줄였습니다.",
        "직접 입력이 입력 잠금, 오디오, 캐릭터 애니메이션, damage, 진행과 이동으로 이어져 단순 퀴즈가 아닌 게임처럼 동작하는 부분이 가장 만족스럽습니다.",
        "TestFlight를 통해 한 화면과 같은 디자인만으로는 충분하지 않으며 작은 구형 기기까지 typography와 spacing을 검증해야 함을 확인했습니다.",
        "다시 만든다면 모든 저장 데이터에 versioned migration과 validation을 적용하고 전체 story·battle·unlock 흐름의 자동 테스트와 reduced-motion을 추가하겠습니다.",
        "현재 범위에서는 로컬 우선 구조와 작은 custom component를 유지하되 기기 간 동기화가 필요해질 때의 migration 경계를 정의하겠습니다.",
      ],
    },
  },
  {
    ...rateVanRent,
    eyebrow: "초기 학교 프로젝트",
    summary:
      "밴쿠버 임대 경험을 평가하는 3인 학교 프로젝트로, 초기 협업 웹 앱 경험을 간결하게 보여줍니다.",
    period: "한 학기",
    status: "완료",
    role: "개발자",
    team: "학생 개발자 3명",
    technologies: ["JavaScript", "웹 애플리케이션 개발"],
    links: rateVanRent.links.map((link) => ({ ...link, label: "저장소" })),
  },
  {
    ...portfolio,
    eyebrow: "개인 프로젝트",
    summary:
      "제품 작업, 기술적 결정과 경력을 구조적으로 보여주기 위해 직접 설계하고 개발한 포트폴리오입니다.",
    period: "진행 중",
    status: "개발 중",
    role: "디자이너 및 개발자",
    team: "개인 프로젝트",
    links: portfolio.links.map((link) => ({ ...link, label: "저장소" })),
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
