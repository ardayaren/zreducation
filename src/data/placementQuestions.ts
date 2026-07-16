import questionsData from "./languageHubQuestions.json";

export type HubLevel =
  | "beginner"
  | "elementary"
  | "pre-intermediate"
  | "intermediate"
  | "upper-intermediate"
  | "advanced";

export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export const BLANK_ANSWER = "";

export function isQuestionAnswered(
  answers: Record<number, string>,
  id: number
): boolean {
  return id in answers;
}

export function isBlankAnswer(answer: string | undefined): boolean {
  return answer === BLANK_ANSWER;
}

export interface PlacementQuestion {
  id: number;
  passage: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  hubLevel: HubLevel;
  cefrLevel: CEFRLevel;
}

export const hubLevelConfig: Record<
  HubLevel,
  { label: string; labelTr: string; cefr: CEFRLevel; itemRange: string }
> = {
  beginner: {
    label: "Beginner",
    labelTr: "Başlangıç",
    cefr: "A1",
    itemRange: "1–6",
  },
  elementary: {
    label: "Elementary",
    labelTr: "Temel",
    cefr: "A2",
    itemRange: "7–20",
  },
  "pre-intermediate": {
    label: "Pre-Intermediate",
    labelTr: "Orta Alt",
    cefr: "B1",
    itemRange: "21–34",
  },
  intermediate: {
    label: "Intermediate",
    labelTr: "Orta",
    cefr: "B2",
    itemRange: "35–48",
  },
  "upper-intermediate": {
    label: "Upper Intermediate",
    labelTr: "Orta Üst",
    cefr: "C1",
    itemRange: "49–62",
  },
  advanced: {
    label: "Advanced",
    labelTr: "İleri",
    cefr: "C2",
    itemRange: "63–70",
  },
};

export const hubLevelOrder: HubLevel[] = [
  "beginner",
  "elementary",
  "pre-intermediate",
  "intermediate",
  "upper-intermediate",
  "advanced",
];

const hubToCefr = Object.fromEntries(
  hubLevelOrder.map((level) => [level, hubLevelConfig[level].cefr])
) as Record<HubLevel, CEFRLevel>;

export const placementQuestions: PlacementQuestion[] = questionsData.map(
  (q) => ({
    ...q,
    hubLevel: q.hubLevel as HubLevel,
    cefrLevel: hubToCefr[q.hubLevel as HubLevel],
  })
);

export const levelDescriptions: Record<
  CEFRLevel,
  { title: string; hubLabel: string; description: string; recommendation: string }
> = {
  A1: {
    title: "Başlangıç Seviyesi",
    hubLabel: "Beginner",
    description:
      "Temel kelimeleri ve basit cümleleri anlayabilir, kendinizi tanıtabilirsiniz.",
    recommendation:
      "Beginner (A1) programımızla sağlam bir temel oluşturmanızı öneriyoruz.",
  },
  A2: {
    title: "Temel Seviye",
    hubLabel: "Elementary",
    description:
      "Günlük konularda basit iletişim kurabilir, kısa metinleri anlayabilirsiniz.",
    recommendation:
      "Elementary (A2) programımızla dil becerilerinizi geliştirebilirsiniz.",
  },
  B1: {
    title: "Orta Alt Seviye",
    hubLabel: "Pre-Intermediate",
    description:
      "Seyahat ve iş konularında iletişim kurabilir, deneyimlerinizi anlatabilirsiniz.",
    recommendation:
      "Pre-Intermediate (B1) programımız ve konuşma kulüplerimiz size uygun olacaktır.",
  },
  B2: {
    title: "Orta Seviye",
    hubLabel: "Intermediate",
    description:
      "Akıcı ve spontan iletişim kurabilir, karmaşık metinleri anlayabilirsiniz.",
    recommendation:
      "Intermediate (B2) programlarımız ve IELTS/TOEFL hazırlık kurslarımızı değerlendirebilirsiniz.",
  },
  C1: {
    title: "Orta Üst Seviye",
    hubLabel: "Upper Intermediate",
    description:
      "Akademik ve profesyonel metinleri anlayabilir, akıcı ve yapılandırılmış ifadeler kullanabilirsiniz.",
    recommendation:
      "Upper Intermediate (C1) ve sınav hazırlık programlarımız sizin için idealdir.",
  },
  C2: {
    title: "İleri Seviye",
    hubLabel: "Advanced",
    description:
      "Anadil seviyesine yakın yeterlilik. Her türlü metni anlayabilir ve kendinizi ifade edebilirsiniz.",
    recommendation:
      "Advanced (C2) atölyelerimiz ve akademik yazım programlarımızı inceleyebilirsiniz.",
  },
};
