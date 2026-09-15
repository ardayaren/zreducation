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

/** Band geçiş kuralları — sabit soru aralığı bazlı seviye belirleme.
 *
 * En üst (en yüksek) bandı geçen kişi, alttaki soruları boş bıraksa bile
 * o seviyeyi alır. Ör: 49–62 arasını tamamlayan biri (13 doğru) alt
 * soruları yapamasa da C1 çıkar. */
export const bandRules: BandRule[] = [
  {
    level: "A2",
    hubLevel: "elementary",
    from: 1,
    to: 21,
    required: 15,
    label: "1–21 arası 15 doğru → A2",
  },
  {
    level: "B1",
    hubLevel: "pre-intermediate",
    from: 22,
    to: 34,
    required: 10,
    label: "22–34 arası 10 doğru → B1",
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
    required: 13,
    label: "49–62 arası 13 doğru → C1",
  },
  {
    level: "C2",
    hubLevel: "advanced",
    from: 63,
    to: 70,
    required: 8,
    label: "63–70 arası 8 doğru → C2",
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
