import type { CEFRLevel, HubLevel } from "@/data/placementQuestions";
import { hubLevelConfig } from "@/data/placementQuestions";

export interface BandRule {
  level: CEFRLevel;
  hubLevel: HubLevel;
  from: number;
  to: number;
  required: number;
  /** Eşiğin altında kalınca verilecek seviye ("aşağısı") */
  below: CEFRLevel;
  label: string;
}

/** Band geçiş kuralları — sabit soru aralığı bazlı seviye belirleme.
 *
 * En üst (en yüksek) band, alttaki soruları boş bıraksa bile sonucu belirler.
 * Ör: 49–62 arasını tamamlayan biri (13 doğru) alt soruları yapamasa da C1
 * çıkar. Bir bandda doğru cevap verilmiş ama eşik tutturulamamışsa "aşağısı"
 * (bir alt seviye) uygulanır: 63–70'te 8'den az doğru → C1. */
export const bandRules: BandRule[] = [
  {
    level: "A2",
    hubLevel: "elementary",
    from: 1,
    to: 21,
    required: 15,
    below: "A1",
    label: "1–21 arası 15 doğru → A2",
  },
  {
    level: "B1",
    hubLevel: "pre-intermediate",
    from: 22,
    to: 34,
    required: 10,
    below: "A2",
    label: "22–34 arası 10 doğru → B1",
  },
  {
    level: "B2",
    hubLevel: "intermediate",
    from: 35,
    to: 48,
    required: 12,
    below: "B1",
    label: "35–48 arası 12 doğru → B2",
  },
  {
    level: "C1",
    hubLevel: "upper-intermediate",
    from: 49,
    to: 62,
    required: 13,
    below: "B2",
    label: "49–62 arası 13 doğru → C1",
  },
  {
    level: "C2",
    hubLevel: "advanced",
    from: 63,
    to: 70,
    required: 8,
    below: "C1",
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

const levelToHub: Record<CEFRLevel, HubLevel> = {
  A1: "beginner",
  A2: "elementary",
  B1: "pre-intermediate",
  B2: "intermediate",
  C1: "upper-intermediate",
  C2: "advanced",
};

export function determineLevelFromBands(
  answers: Record<number, string>,
  questionMap: Map<number, string>
): { level: CEFRLevel; hubLevel: HubLevel; passedRule: BandRule | null } {
  /* En yüksek banddan aşağıya in: doğru cevap verilmiş ilk band sonucu belirler.
   * - Eşik tutuyorsa band seviyesi
   * - Eşik tutmuyorsa "aşağısı" (bir alt seviye)
   * Hiçbir bandda doğru yoksa A1. */
  for (let i = bandRules.length - 1; i >= 0; i--) {
    const rule = bandRules[i];
    const { correct } = countCorrectInRange(
      answers,
      questionMap,
      rule.from,
      rule.to
    );

    if (correct > 0) {
      if (correct >= rule.required) {
        return {
          level: rule.level,
          hubLevel: rule.hubLevel,
          passedRule: rule,
        };
      }
      const level: CEFRLevel = rule.below;
      return {
        level,
        hubLevel: levelToHub[level],
        passedRule: null,
      };
    }
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
