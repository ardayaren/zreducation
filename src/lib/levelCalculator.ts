import type { CEFRLevel } from "@/data/placementQuestions";
import { placementQuestions } from "@/data/placementQuestions";

const levelOrder: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

const difficultyWeights: Record<CEFRLevel, number> = {
  A1: 1,
  A2: 2,
  B1: 3,
  B2: 4,
  C1: 5,
  C2: 6,
};

export interface TestResult {
  level: CEFRLevel;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;
  breakdown: Record<CEFRLevel, { correct: number; total: number }>;
}

export function calculateLevel(
  answers: Record<number, string>
): TestResult {
  let correctAnswers = 0;
  const breakdown = levelOrder.reduce(
    (acc, level) => {
      acc[level] = { correct: 0, total: 0 };
      return acc;
    },
    {} as Record<CEFRLevel, { correct: number; total: number }>
  );

  let weightedScore = 0;

  placementQuestions.forEach((q) => {
    breakdown[q.difficulty].total++;

    const userAnswer = answers[q.id];
    if (userAnswer === q.correctAnswer) {
      correctAnswers++;
      breakdown[q.difficulty].correct++;
      weightedScore += difficultyWeights[q.difficulty];
    }
  });

  const percentage = Math.round(
    (correctAnswers / placementQuestions.length) * 100
  );

  const level = determineLevel(correctAnswers, percentage, breakdown);

  return {
    level,
    score: weightedScore,
    totalQuestions: placementQuestions.length,
    correctAnswers,
    percentage,
    breakdown,
  };
}

function determineLevel(
  correct: number,
  percentage: number,
  breakdown: Record<CEFRLevel, { correct: number; total: number }>
): CEFRLevel {
  if (percentage >= 90 && breakdown.C2.correct >= 3) return "C2";
  if (percentage >= 80 && breakdown.C1.correct >= 3) return "C1";
  if (percentage >= 65 && breakdown.B2.correct >= 3) return "B2";
  if (percentage >= 50 && breakdown.B1.correct >= 3) return "B1";
  if (percentage >= 35 && breakdown.A2.correct >= 3) return "A2";
  return "A1";
}
