import type { CEFRLevel, HubLevel } from "@/data/placementQuestions";
import { hubLevelConfig } from "@/data/placementQuestions";

export interface BandRule {
  level: CEFRLevel;
  hubLevel: HubLevel;
  from: number;
  to: number;
  required: number;
  label: string;
}

/** Band geçiş kuralları — Language Hub placement mantığı */
export const bandRules: BandRule[] = [
  {
    level: "A1",
    hubLevel: "beginner",
    from: 1,
    to: 20,
    required: 15,
    label: "İlk 20 soruda 15 doğru → A1",
  },
  {
    level: "A2",
    hubLevel: "elementary",
    from: 7,
    to: 20,
    required: 12,
    label: "7–20 arası 12 doğru → A2",
  },
  {
    level: "B1",
    hubLevel: "pre-intermediate",
    from: 21,
    to: 34,
    required: 12,
    label: "21–34 arası 12 doğru → B1",
  },
  {
    level: "B2",
    hubLevel: "intermediate",
    from: 35,
    to: 48,
    required: 12,
    label: "35–48 arası 12 doğru → B2",
  },
  {
    level: "C1",
    hubLevel: "upper-intermediate",
    from: 49,
    to: 62,
    required: 12,
    label: "49–62 arası 12 doğru → C1",
  },
  {
    level: "C2",
    hubLevel: "advanced",
    from: 63,
    to: 70,
    required: 6,
    label: "63–70 arası 6 doğru → C2",
  },
];

export function countCorrectInRange(
  answers: Record<number, string>,
  questionMap: Map<number, string>,
  from: number,
  to: number
): { correct: number; total: number } {
  let correct = 0;
  let total = 0;
  for (let id = from; id <= to; id++) {
    total++;
    const expected = questionMap.get(id);
    const given = answers[id];
    if (expected && given && given !== "" && given === expected) {
      correct++;
    }
  }
  return { correct, total };
}

export function determineLevelFromBands(
  answers: Record<number, string>,
  questionMap: Map<number, string>
): { level: CEFRLevel; hubLevel: HubLevel; passedRule: BandRule | null } {
  let passedRule: BandRule | null = null;

  for (const rule of bandRules) {
    const { correct } = countCorrectInRange(
      answers,
      questionMap,
      rule.from,
      rule.to
    );
    if (correct >= rule.required) {
      passedRule = rule;
    }
  }

  if (passedRule) {
    return {
      level: passedRule.level,
      hubLevel: passedRule.hubLevel,
      passedRule,
    };
  }

  return {
    level: "A1",
    hubLevel: "beginner",
    passedRule: null,
  };
}

export function getBandProgress(
  answers: Record<number, string>,
  questionMap: Map<number, string>,
  rule: BandRule
) {
  const { correct, total } = countCorrectInRange(
    answers,
    questionMap,
    rule.from,
    rule.to
  );
  return {
    correct,
    total,
    required: rule.required,
    passed: correct >= rule.required,
    label: hubLevelConfig[rule.hubLevel].labelTr,
  };
}
