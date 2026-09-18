import type { CEFRLevel, HubLevel } from "@/data/placementQuestions";
import {
  BLANK_ANSWER,
  hubLevelConfig,
  isBlankAnswer,
  placementQuestions,
} from "@/data/placementQuestions";

export interface WrongAnswer {
  questionId: number;
  userAnswer: string;
  correctAnswer: string;
}

export interface LevelGroup {
  level: CEFRLevel;
  correct: number;
  total: number;
  /** Grup içi başarı yüzdesi (100 üzerinden) */
  percent: number;
  label: string;
}

export interface TestResult {
  level: CEFRLevel;
  hubLevel: HubLevel;
  hubLabel: string;
  score: number;
  totalQuestions: number;
  answeredCount: number;
  correctAnswers: number;
  incorrectAnswers: number;
  blankAnswers: number;
  percentage: number;
  /** Tüm grupların yüzdelik ortalaması */
  averagePercentage: number;
  /** A1 → C2 grup bazlı analiz */
  groups: LevelGroup[];
  wrongAnswers: WrongAnswer[];
}

const CEFR_ORDER: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

const levelToHub: Record<CEFRLevel, HubLevel> = {
  A1: "beginner",
  A2: "elementary",
  B1: "pre-intermediate",
  B2: "intermediate",
  C1: "upper-intermediate",
  C2: "advanced",
};

const levelShortLabel: Record<CEFRLevel, string> = {
  A1: "Başlangıç",
  A2: "Temel",
  B1: "Orta Alt",
  B2: "Orta",
  C1: "Orta Üst",
  C2: "İleri",
};

/** Ortalama yüzde → final seviye eşik haritası */
export const AVERAGE_THRESHOLDS: { level: CEFRLevel; min: number }[] = [
  { level: "C2", min: 90 },
  { level: "C1", min: 80 },
  { level: "B2", min: 65 },
  { level: "B1", min: 50 },
  { level: "A2", min: 35 },
  { level: "A1", min: 0 },
];

export function determineLevelFromAverage(avg: number): CEFRLevel {
  for (const t of AVERAGE_THRESHOLDS) {
    if (avg >= t.min) return t.level;
  }
  return "A1";
}

export function cefrGroupRanges(): Record<CEFRLevel, { from: number; to: number }> {
  const ranges = {} as Record<CEFRLevel, { from: number; to: number }>;
  CEFR_ORDER.forEach((level) => {
    const ids = placementQuestions
      .filter((q) => q.cefrLevel === level)
      .map((q) => q.id);
    ranges[level] = {
      from: Math.min(...ids),
      to: Math.max(...ids),
    };
  });
  return ranges;
}

export function calculateLevel(
  answers: Record<number, string>
): TestResult {
  let correctAnswers = 0;
  let blankAnswers = 0;
  let answeredCount = 0;
  const wrongAnswers: WrongAnswer[] = [];

  const groups: LevelGroup[] = CEFR_ORDER.map((level) => {
    const questions = placementQuestions.filter((q) => q.cefrLevel === level);
    let correct = 0;
    questions.forEach((q) => {
      const userAnswer = answers[q.id];
      if (!userAnswer || isBlankAnswer(userAnswer)) {
        if (userAnswer === BLANK_ANSWER) blankAnswers++;
        return;
      }
      answeredCount++;
      if (userAnswer === q.correctAnswer) {
        correct++;
        correctAnswers++;
      } else {
        wrongAnswers.push({
          questionId: q.id,
          userAnswer,
          correctAnswer: q.correctAnswer,
        });
      }
    });
    const total = questions.length;
    return {
      level,
      correct,
      total,
      percent: total > 0 ? Math.round((correct / total) * 100) : 0,
      label: levelShortLabel[level],
    };
  });

  const totalQuestions = placementQuestions.length;
  const incorrectAnswers = answeredCount - correctAnswers;
  const percentage =
    answeredCount > 0
      ? Math.round((correctAnswers / answeredCount) * 100)
      : 0;

  const averagePercentage = Math.round(
    groups.reduce((sum, g) => sum + g.percent, 0) / groups.length
  );
  const level = determineLevelFromAverage(averagePercentage);
  const hubLevel = levelToHub[level];

  return {
    level,
    hubLevel,
    hubLabel: hubLevelConfig[hubLevel].label,
    score: correctAnswers,
    totalQuestions,
    answeredCount,
    correctAnswers,
    incorrectAnswers,
    blankAnswers,
    percentage,
    averagePercentage,
    groups,
    wrongAnswers,
  };
}

export function countRealAnswers(answers: Record<number, string>): number {
  return Object.values(answers).filter(
    (a) => a !== undefined && !isBlankAnswer(a)
  ).length;
}

export function hasMinimumAnswers(answers: Record<number, string>): boolean {
  return countRealAnswers(answers) >= 1;
}