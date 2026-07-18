import type { CEFRLevel, HubLevel } from "@/data/placementQuestions";
import {
  BLANK_ANSWER,
  hubLevelConfig,
  hubLevelOrder,
  isBlankAnswer,
  placementQuestions,
} from "@/data/placementQuestions";
import {
  bandRules,
  determineLevelFromBands,
  getBandProgress,
} from "@/data/bandScoring";

export interface WrongAnswer {
  questionId: number;
  userAnswer: string;
  correctAnswer: string;
}

export interface BandProgress {
  level: CEFRLevel;
  hubLevel: HubLevel;
  correct: number;
  total: number;
  required: number;
  passed: boolean;
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
  breakdown: Record<
    HubLevel,
    { correct: number; total: number; label: string; labelTr: string }
  >;
  bandProgress: BandProgress[];
  wrongAnswers: WrongAnswer[];
}

const answerKeyMap = new Map(
  placementQuestions.map((q) => [q.id, q.correctAnswer])
);

export function calculateLevel(
  answers: Record<number, string>
): TestResult {
  let correctAnswers = 0;
  let blankAnswers = 0;
  let answeredCount = 0;
  const wrongAnswers: WrongAnswer[] = [];

  const breakdown = hubLevelOrder.reduce(
    (acc, level) => {
      acc[level] = {
        correct: 0,
        total: 0,
        label: hubLevelConfig[level].label,
        labelTr: hubLevelConfig[level].labelTr,
      };
      return acc;
    },
    {} as TestResult["breakdown"]
  );

  placementQuestions.forEach((q) => {
    breakdown[q.hubLevel].total++;

    const userAnswer = answers[q.id];

    if (!userAnswer || isBlankAnswer(userAnswer)) {
      if (userAnswer === BLANK_ANSWER) blankAnswers++;
      return;
    }

    answeredCount++;

    if (userAnswer === q.correctAnswer) {
      correctAnswers++;
      breakdown[q.hubLevel].correct++;
    } else {
      wrongAnswers.push({
        questionId: q.id,
        userAnswer,
        correctAnswer: q.correctAnswer,
      });
    }
  });

  const totalQuestions = placementQuestions.length;
  const incorrectAnswers = answeredCount - correctAnswers;
  const percentage =
    answeredCount > 0
      ? Math.round((correctAnswers / answeredCount) * 100)
      : 0;

  const { level, hubLevel } = determineLevelFromBands(answers, answerKeyMap);

  const bandProgress: BandProgress[] = bandRules.map((rule) => {
    const progress = getBandProgress(answers, answerKeyMap, rule);
    return {
      level: rule.level,
      hubLevel: rule.hubLevel,
      ...progress,
    };
  });

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
    breakdown,
    bandProgress,
    wrongAnswers,
  };
}

export function hasMinimumAnswers(answers: Record<number, string>): boolean {
  const answered = Object.values(answers).filter(
    (a) => a !== undefined && a !== BLANK_ANSWER && a !== ""
  ).length;
  return answered >= 6;
}
