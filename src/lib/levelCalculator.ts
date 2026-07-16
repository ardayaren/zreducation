import type { CEFRLevel, HubLevel } from "@/data/placementQuestions";
import {
  hubLevelConfig,
  hubLevelOrder,
  placementQuestions,
} from "@/data/placementQuestions";

export interface WrongAnswer {
  questionId: number;
  userAnswer: string;
  correctAnswer: string;
}

export interface TestResult {
  level: CEFRLevel;
  hubLevel: HubLevel;
  hubLabel: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  percentage: number;
  breakdown: Record<
    HubLevel,
    { correct: number; total: number; label: string; labelTr: string }
  >;
  wrongAnswers: WrongAnswer[];
}

export function calculateLevel(
  answers: Record<number, string>
): TestResult {
  let correctAnswers = 0;
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
    if (userAnswer === q.correctAnswer) {
      correctAnswers++;
      breakdown[q.hubLevel].correct++;
    } else if (userAnswer) {
      wrongAnswers.push({
        questionId: q.id,
        userAnswer,
        correctAnswer: q.correctAnswer,
      });
    }
  });

  const totalQuestions = placementQuestions.length;
  const incorrectAnswers = totalQuestions - correctAnswers;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const { level, hubLevel } = determineLevel(correctAnswers);

  return {
    level,
    hubLevel,
    hubLabel: hubLevelConfig[hubLevel].label,
    score: correctAnswers,
    totalQuestions,
    correctAnswers,
    incorrectAnswers,
    percentage,
    breakdown,
    wrongAnswers,
  };
}

function determineLevel(correct: number): {
  level: CEFRLevel;
  hubLevel: HubLevel;
} {
  if (correct >= 60) {
    return { level: "C2", hubLevel: "advanced" };
  }
  if (correct >= 49) {
    return { level: "C1", hubLevel: "upper-intermediate" };
  }
  if (correct >= 35) {
    return { level: "B2", hubLevel: "intermediate" };
  }
  if (correct >= 18) {
    return { level: "B1", hubLevel: "pre-intermediate" };
  }
  if (correct >= 7) {
    return { level: "A2", hubLevel: "elementary" };
  }
  return { level: "A1", hubLevel: "beginner" };
}
