export interface PlacementQuestion {
  id: number;
  question: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  difficulty: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
}

export const placementQuestions: PlacementQuestion[] = [
  {
    id: 1,
    question: "Hello, my name ___ Sarah.",
    options: [
      { key: "A", text: "am" },
      { key: "B", text: "is" },
      { key: "C", text: "are" },
      { key: "D", text: "be" },
    ],
    correctAnswer: "B",
    difficulty: "A1",
  },
  {
    id: 2,
    question: "I ___ from Turkey.",
    options: [
      { key: "A", text: "is" },
      { key: "B", text: "are" },
      { key: "C", text: "am" },
      { key: "D", text: "be" },
    ],
    correctAnswer: "C",
    difficulty: "A1",
  },
  {
    id: 3,
    question: "She ___ two brothers.",
    options: [
      { key: "A", text: "have" },
      { key: "B", text: "has" },
      { key: "C", text: "having" },
      { key: "D", text: "haves" },
    ],
    correctAnswer: "B",
    difficulty: "A1",
  },
  {
    id: 4,
    question: "Where ___ you live?",
    options: [
      { key: "A", text: "does" },
      { key: "B", text: "do" },
      { key: "C", text: "is" },
      { key: "D", text: "are" },
    ],
    correctAnswer: "B",
    difficulty: "A1",
  },
  {
    id: 5,
    question: "This is ___ book.",
    options: [
      { key: "A", text: "a" },
      { key: "B", text: "an" },
      { key: "C", text: "the" },
      { key: "D", text: "some" },
    ],
    correctAnswer: "A",
    difficulty: "A1",
  },
  {
    id: 6,
    question: "I usually ___ breakfast at 8 o'clock.",
    options: [
      { key: "A", text: "eat" },
      { key: "B", text: "eats" },
      { key: "C", text: "eating" },
      { key: "D", text: "ate" },
    ],
    correctAnswer: "A",
    difficulty: "A2",
  },
  {
    id: 7,
    question: "She ___ to the cinema yesterday.",
    options: [
      { key: "A", text: "go" },
      { key: "B", text: "goes" },
      { key: "C", text: "went" },
      { key: "D", text: "going" },
    ],
    correctAnswer: "C",
    difficulty: "A2",
  },
  {
    id: 8,
    question: "There aren't ___ students in the classroom.",
    options: [
      { key: "A", text: "some" },
      { key: "B", text: "any" },
      { key: "C", text: "much" },
      { key: "D", text: "a" },
    ],
    correctAnswer: "B",
    difficulty: "A2",
  },
  {
    id: 9,
    question: "How ___ does this shirt cost?",
    options: [
      { key: "A", text: "many" },
      { key: "B", text: "long" },
      { key: "C", text: "much" },
      { key: "D", text: "often" },
    ],
    correctAnswer: "C",
    difficulty: "A2",
  },
  {
    id: 10,
    question: "I ___ never been to London.",
    options: [
      { key: "A", text: "has" },
      { key: "B", text: "have" },
      { key: "C", text: "had" },
      { key: "D", text: "am" },
    ],
    correctAnswer: "B",
    difficulty: "A2",
  },
  {
    id: 11,
    question: "If it rains tomorrow, we ___ stay at home.",
    options: [
      { key: "A", text: "will" },
      { key: "B", text: "would" },
      { key: "C", text: "are" },
      { key: "D", text: "have" },
    ],
    correctAnswer: "A",
    difficulty: "B1",
  },
  {
    id: 12,
    question: "She told me that she ___ the exam.",
    options: [
      { key: "A", text: "passes" },
      { key: "B", text: "passed" },
      { key: "C", text: "has passed" },
      { key: "D", text: "had passed" },
    ],
    correctAnswer: "D",
    difficulty: "B1",
  },
  {
    id: 13,
    question: "The book ___ by millions of people.",
    options: [
      { key: "A", text: "reads" },
      { key: "B", text: "is read" },
      { key: "C", text: "was reading" },
      { key: "D", text: "has read" },
    ],
    correctAnswer: "B",
    difficulty: "B1",
  },
  {
    id: 14,
    question: "I'm looking forward ___ you next week.",
    options: [
      { key: "A", text: "see" },
      { key: "B", text: "to see" },
      { key: "C", text: "seeing" },
      { key: "D", text: "to seeing" },
    ],
    correctAnswer: "D",
    difficulty: "B1",
  },
  {
    id: 15,
    question: "You ___ smoke in hospitals.",
    options: [
      { key: "A", text: "mustn't" },
      { key: "B", text: "don't have to" },
      { key: "C", text: "needn't" },
      { key: "D", text: "wouldn't" },
    ],
    correctAnswer: "A",
    difficulty: "B1",
  },
  {
    id: 16,
    question: "Despite ___ hard, he didn't pass the exam.",
    options: [
      { key: "A", text: "study" },
      { key: "B", text: "studied" },
      { key: "C", text: "studying" },
      { key: "D", text: "to study" },
    ],
    correctAnswer: "C",
    difficulty: "B2",
  },
  {
    id: 17,
    question: "The meeting has been ___ until next Monday.",
    options: [
      { key: "A", text: "put off" },
      { key: "B", text: "put on" },
      { key: "C", text: "put up" },
      { key: "D", text: "put down" },
    ],
    correctAnswer: "A",
    difficulty: "B2",
  },
  {
    id: 18,
    question: "Not only ___ late, but he also forgot his notes.",
    options: [
      { key: "A", text: "he was" },
      { key: "B", text: "was he" },
      { key: "C", text: "he is" },
      { key: "D", text: "is he" },
    ],
    correctAnswer: "B",
    difficulty: "B2",
  },
  {
    id: 19,
    question: "I'd rather you ___ tell anyone about this.",
    options: [
      { key: "A", text: "don't" },
      { key: "B", text: "didn't" },
      { key: "C", text: "won't" },
      { key: "D", text: "wouldn't" },
    ],
    correctAnswer: "B",
    difficulty: "B2",
  },
  {
    id: 20,
    question: "The project, ___ was completed last year, won an award.",
    options: [
      { key: "A", text: "that" },
      { key: "B", text: "which" },
      { key: "C", text: "who" },
      { key: "D", text: "whose" },
    ],
    correctAnswer: "B",
    difficulty: "B2",
  },
  {
    id: 21,
    question: "Had I known about the traffic, I ___ earlier.",
    options: [
      { key: "A", text: "would leave" },
      { key: "B", text: "would have left" },
      { key: "C", text: "will leave" },
      { key: "D", text: "had left" },
    ],
    correctAnswer: "B",
    difficulty: "C1",
  },
  {
    id: 22,
    question: "The proposal was met with ___ skepticism.",
    options: [
      { key: "A", text: "considerable" },
      { key: "B", text: "considerably" },
      { key: "C", text: "considering" },
      { key: "D", text: "considerate" },
    ],
    correctAnswer: "A",
    difficulty: "C1",
  },
  {
    id: 23,
    question: "She is widely regarded ___ one of the best researchers.",
    options: [
      { key: "A", text: "as" },
      { key: "B", text: "like" },
      { key: "C", text: "for" },
      { key: "D", text: "to" },
    ],
    correctAnswer: "A",
    difficulty: "C1",
  },
  {
    id: 24,
    question: "Little ___ that the decision would change everything.",
    options: [
      { key: "A", text: "they knew" },
      { key: "B", text: "did they know" },
      { key: "C", text: "they know" },
      { key: "D", text: "do they know" },
    ],
    correctAnswer: "B",
    difficulty: "C1",
  },
  {
    id: 25,
    question: "The findings are consistent ___ previous studies.",
    options: [
      { key: "A", text: "to" },
      { key: "B", text: "with" },
      { key: "C", text: "for" },
      { key: "D", text: "of" },
    ],
    correctAnswer: "B",
    difficulty: "C1",
  },
  {
    id: 26,
    question: "The committee's decision was ___ unanimous.",
    options: [
      { key: "A", text: "virtually" },
      { key: "B", text: "virtual" },
      { key: "C", text: "virtue" },
      { key: "D", text: "virtuous" },
    ],
    correctAnswer: "A",
    difficulty: "C2",
  },
  {
    id: 27,
    question: "His argument, though compelling, was ___ flawed.",
    options: [
      { key: "A", text: "fundamentally" },
      { key: "B", text: "fundamental" },
      { key: "C", text: "fundament" },
      { key: "D", text: "fundamentals" },
    ],
    correctAnswer: "A",
    difficulty: "C2",
  },
  {
    id: 28,
    question: "The treaty was ratified ___ considerable opposition.",
    options: [
      { key: "A", text: "despite" },
      { key: "B", text: "although" },
      { key: "C", text: "however" },
      { key: "D", text: "nevertheless" },
    ],
    correctAnswer: "A",
    difficulty: "C2",
  },
  {
    id: 29,
    question: "She spoke with an air of ___ confidence.",
    options: [
      { key: "A", text: "quiet" },
      { key: "B", text: "quietly" },
      { key: "C", text: "quietness" },
      { key: "D", text: "quieted" },
    ],
    correctAnswer: "A",
    difficulty: "C2",
  },
  {
    id: 30,
    question: "The implications of the policy are far-___.",
    options: [
      { key: "A", text: "reaching" },
      { key: "B", text: "reached" },
      { key: "C", text: "reach" },
      { key: "D", text: "reaches" },
    ],
    correctAnswer: "A",
    difficulty: "C2",
  },
];

export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export const levelDescriptions: Record<
  CEFRLevel,
  { title: string; description: string; recommendation: string }
> = {
  A1: {
    title: "Başlangıç Seviyesi",
    description:
      "Temel kelimeleri ve basit cümleleri anlayabilir, kendinizi tanıtabilirsiniz.",
    recommendation:
      "Temel İngilizce programımızla sağlam bir temel oluşturmanızı öneriyoruz.",
  },
  A2: {
    title: "Temel Seviye",
    description:
      "Günlük konularda basit iletişim kurabilir, kısa metinleri anlayabilirsiniz.",
    recommendation:
      "Temel-orta seviye programımızla dil becerilerinizi geliştirebilirsiniz.",
  },
  B1: {
    title: "Orta Alt Seviye",
    description:
      "Seyahat ve iş konularında iletişim kurabilir, deneyimlerinizi anlatabilirsiniz.",
    recommendation:
      "Orta seviye programımız ve konuşma kulüplerimiz size uygun olacaktır.",
  },
  B2: {
    title: "Orta Üst Seviye",
    description:
      "Akıcı ve spontan iletişim kurabilir, karmaşık metinleri anlayabilirsiniz.",
    recommendation:
      "İleri düzey programlarımız ve IELTS/TOEFL hazırlık kurslarımızı değerlendirebilirsiniz.",
  },
  C1: {
    title: "İleri Seviye",
    description:
      "Akademik ve profesyonel metinleri anlayabilir, akıcı ve yapılandırılmış ifadeler kullanabilirsiniz.",
    recommendation:
      "Profesyonel İngilizce ve sınav hazırlık programlarımız sizin için idealdir.",
  },
  C2: {
    title: "Uzman Seviye",
    description:
      "Anadil seviyesine yakın yeterlilik. Her türlü metni anlayabilir ve kendinizi ifade edebilirsiniz.",
    recommendation:
      "Uzman düzey atölyelerimiz ve akademik yazım programlarımızı inceleyebilirsiniz.",
  },
};
