"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Loader2,
  Clock,
  CheckCircle2,
  XCircle,
  MinusCircle,
  AlertTriangle,
  RotateCcw,
  Share2,
} from "lucide-react";
import {
  placementQuestions,
  levelDescriptions,
  hubLevelConfig,
  hubLevelOrder,
  BLANK_ANSWER,
  isQuestionAnswered,
  isBlankAnswer,
} from "@/data/placementQuestions";
import type { TestResult } from "@/lib/levelCalculator";
import {
  countRealAnswers,
  hasMinimumAnswers,
} from "@/lib/levelCalculator";
import { transition } from "@/lib/motion";
import Button from "@/components/ui/Button";
import { contactInfo } from "@/data/contact";
import SpeakingBookingCard from "@/components/test/SpeakingBookingCard";

const TEST_DURATION_SECONDS = 30 * 60;

const inputClass =
  "w-full px-5 py-4 rounded-3xl border-0 bg-white/90 text-base shadow-[inset_0_1px_2px_rgba(14,34,64,0.04),0_2px_12px_rgba(14,34,64,0.04)] transition-all duration-200 focus:ring-4 focus:ring-gold-500/20 focus:outline-none placeholder:text-slate-light";

const optionSpring = { type: "spring" as const, stiffness: 400, damping: 28 };

type Step = "info" | "test" | "result";

type DetailFilter = "all" | "correct" | "wrong" | "blank";

interface UserInfo {
  name: string;
  email: string;
  phone: string;
}

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function renderPassage(passage: string) {
  return passage.split("\n").map((line, index) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const speaker = line.slice(0, colonIndex);
      const text = line.slice(colonIndex + 1).trim();
      return (
        <p key={index} className="text-base md:text-lg leading-relaxed">
          <span className="font-semibold text-navy-900">{speaker}:</span>{" "}
          <span className="text-navy-700">{text}</span>
        </p>
      );
    }
    return (
      <p
        key={index}
        className="text-base md:text-lg text-navy-700 leading-relaxed"
      >
        {line}
      </p>
    );
  });
}

export default function PlacementTest() {
  const [step, setStep] = useState<Step>("info");
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    email: "",
    phone: "",
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(TEST_DURATION_SECONDS);
  const [showConfirm, setShowConfirm] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  const [shareMsg, setShareMsg] = useState("");
  const autoSubmittedRef = useRef(false);
  const submittingRef = useRef(false);

  const question = placementQuestions[currentQuestion];
  const hubInfo = hubLevelConfig[question.hubLevel];
  const progress = ((currentQuestion + 1) / placementQuestions.length) * 100;
  const realAnswerCount = countRealAnswers(answers);
  const markedCount = placementQuestions.filter((q) =>
    isQuestionAnswered(answers, q.id)
  ).length;

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInfo.name || !userInfo.email || !userInfo.phone) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }
    setError("");
    setTimeLeft(TEST_DURATION_SECONDS);
    setStep("test");
  };

  const selectAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [question.id]: answer }));
  };

  const selectBlank = () => {
    setAnswers((prev) => ({ ...prev, [question.id]: BLANK_ANSWER }));
  };

  const doSubmit = async () => {
    if (submittingRef.current) return;
    submittingRef.current = true;
    setShowConfirm(false);
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/seviye-tespit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userInfo, answers }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Bir hata oluştu");
      }

      setResult(data.result);
      setStep("result");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Bir hata oluştu");
    } finally {
      setLoading(false);
      submittingRef.current = false;
    }
  };

  const submitTest = (force = false) => {
    if (!hasMinimumAnswers(answers)) {
      setError("Sınavı bitirmek için en az 1 soru cevaplamanız yeterlidir.");
      return;
    }

    const remaining = placementQuestions.length - markedCount;
    if (remaining > 0 && !force) {
      setShowConfirm(true);
      return;
    }

    void doSubmit();
  };

  const restartTest = () => {
    setAnswers({});
    setResult(null);
    setError("");
    setShareMsg("");
    setTimeUp(false);
    autoSubmittedRef.current = false;
    submittingRef.current = false;
    setCurrentQuestion(0);
    setTimeLeft(TEST_DURATION_SECONDS);
    setStep("test");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const shareResult = async () => {
    if (!result) return;
    const pageUrl =
      typeof window !== "undefined"
        ? window.location.href
        : "https://zreducation.org/seviye-tespit";
    const text = `Zreducation Seviye Tespit sonucum: ${result.level} — ${result.correctAnswers}/${result.totalQuestions} doğru (%${result.percentage})`;
    if (
      typeof navigator !== "undefined" &&
      "share" in navigator &&
      navigator.share
    ) {
      try {
        await navigator.share({
          title: "Zreducation Seviye Tespit Sonucum",
          text,
          url: pageUrl,
        });
        return;
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
      }
    }
    try {
      await navigator.clipboard.writeText(`${text} ${pageUrl}`);
      setShareMsg("Sonucun panoya kopyalandı — yapıştırıp paylaşabilirsin.");
    } catch {
      setShareMsg(
        "Paylaşım desteklenmiyor; ekran görüntüsü alıp paylaşabilirsin."
      );
    }
    window.setTimeout(() => setShareMsg(""), 5000);
  };

  const shareLinkedIn = () => {
    const url = encodeURIComponent(
      typeof window !== "undefined"
        ? window.location.href
        : "https://zreducation.org/seviye-tespit"
    );
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    if (step !== "test") return;

    if (timeLeft <= 0) {
      if (!autoSubmittedRef.current) {
        autoSubmittedRef.current = true;
        setTimeUp(true);
        void doSubmit();
      }
      return;
    }

    const timer = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, step]);

  /* Adım değişince (test başlarken ve sonuç gelirken) sayfayı en üste al */
  useEffect(() => {
    if (step === "test" || step === "result") {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    }
  }, [step]);

  const timerLow = timeLeft <= 5 * 60 && timeLeft > 0;

  const renderStep = () => {
    if (step === "info") {
      return (
        <div className="max-w-lg mx-auto px-1 sm:px-0">
          <div className="soft-card p-6 sm:p-8 md:p-10">
            <span className="badge-pill bg-gold-100 text-gold-700 mb-4">
              Başvuru Formu
            </span>
            <h2 className="font-heading-normal text-2xl sm:text-3xl font-bold text-navy-900 mb-2">
              Sınava Başlamadan Önce
            </h2>
            <p className="text-slate text-base md:text-lg mb-8 leading-relaxed">
              Bilgilerinizi girin ve 70 soruluk Language Hub seviye tespit
              sınavına başlayın. Sınavınız için{" "}
              <span className="font-semibold text-navy-900">30 dakika</span>{" "}
              süreniz var; süre dolunca sınav otomatik teslim edilir.
            </p>

            <form onSubmit={handleInfoSubmit} className="space-y-5">
              <div>
                <label className="label-caps text-slate block mb-2">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  value={userInfo.name}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, name: e.target.value })
                  }
                  className={inputClass}
                  placeholder="Adınız ve soyadınız"
                />
              </div>
              <div>
                <label className="label-caps text-slate block mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  value={userInfo.email}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                  className={inputClass}
                  placeholder="ornek@email.com"
                />
              </div>
              <div>
                <label className="label-caps text-slate block mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  value={userInfo.phone}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, phone: e.target.value })
                  }
                  className={inputClass}
                  placeholder="05XX XXX XX XX"
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm bg-red-50/80 rounded-3xl px-5 py-3">
                  {error}
                </p>
              )}

              <Button type="submit" className="w-full" size="lg">
                Sınava Başla
              </Button>
            </form>

            <p className="text-sm sm:text-base text-slate-light mt-6 pt-4 leading-relaxed">
              70 soruluk Language Hub testi. Tüm soruları çözmeniz gerekmez;
              istediğiniz zaman &quot;Sınavı Bitir&quot; ile erken
              tamamlayabilirsiniz. Seviye, barem kurallarına göre belirlenir
              (ör. ilk 20 soruda 15 doğru → A1).
            </p>
          </div>
        </div>
      );
    }

    if (step === "test") {
      return (
        <div className="max-w-3xl mx-auto">
          <div className="soft-card mb-4 sm:mb-6 p-4 sm:p-5 md:p-6">
            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-between sm:items-center mb-4">
              <span className="badge-pill bg-gradient-to-r from-navy-700 to-navy-900 text-white shadow-sm w-fit">
                Soru {currentQuestion + 1} / {placementQuestions.length}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-base font-bold tabular-nums w-fit ${
                  timerLow
                    ? "bg-red-50 text-red-600 border border-red-200 animate-pulse"
                    : "bg-surface text-navy-800"
                }`}
              >
                <Clock className="w-5 h-5" />
                {formatTime(timeLeft)}
                {timeUp && " · Süre Doldu"}
              </span>
              <span className="text-sm sm:text-base text-slate">
                <span className="font-semibold text-navy-900">
                  {realAnswerCount}
                </span>{" "}
                cevap
                {markedCount > realAnswerCount ? (
                  <>
                    {" "}
                    ·{" "}
                    <span className="text-slate-light">
                      {markedCount - realAnswerCount} boş
                    </span>
                  </>
                ) : null}
              </span>
            </div>
            <div className="progress-track h-2.5">
              <motion.div
                className="progress-fill h-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, y: 10, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.99 }}
              transition={transition.fast}
              className="soft-card p-5 sm:p-6 md:p-10"
            >
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="badge-pill bg-gradient-to-r from-gold-600 to-gold-500 text-white shadow-sm">
                  {hubInfo.label}
                </span>
                <span className="text-xs sm:text-sm text-slate-light bg-surface px-3 py-1.5 rounded-full">
                  {hubInfo.labelTr} · {hubInfo.cefr} · Soru {hubInfo.itemRange}
                </span>
              </div>

              <div className="soft-panel space-y-2 mb-8 p-5 md:p-6">
                {renderPassage(question.passage)}
              </div>

              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const isSelected = answers[question.id] === option.key;
                  return (
                    <motion.button
                      key={option.key}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, ...optionSpring }}
                      whileHover={{ scale: isSelected ? 1 : 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => selectAnswer(option.key)}
                      className={`w-full flex items-center gap-4 p-4 sm:p-5 rounded-3xl text-left transition-all duration-300 min-h-[72px] ${
                        isSelected
                          ? "bg-gradient-to-r from-gold-100/90 to-gold-50 shadow-[0_6px_24px_rgba(201,168,58,0.18)]"
                          : "bg-white/80 hover:bg-white shadow-[0_2px_12px_rgba(14,34,64,0.05)] hover:shadow-[0_6px_20px_rgba(14,34,64,0.08)]"
                      }`}
                    >
                      <span
                        className={`w-12 h-12 flex items-center justify-center text-base font-bold shrink-0 rounded-2xl transition-all duration-300 ${
                          isSelected
                            ? "bg-gradient-to-br from-gold-600 to-gold-500 text-white shadow-md"
                            : "bg-surface text-slate"
                        }`}
                      >
                        {option.key}
                      </span>
                      <span
                        className={`text-base md:text-lg leading-relaxed ${
                          isSelected
                            ? "text-navy-900 font-medium"
                            : "text-navy-700"
                        }`}
                      >
                        {option.text}
                      </span>
                    </motion.button>
                  );
                })}
                <motion.button
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: question.options.length * 0.04,
                    ...optionSpring,
                  }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={selectBlank}
                  className={`w-full flex items-center gap-4 p-4 sm:p-5 rounded-3xl text-left transition-all duration-300 min-h-[72px] ${
                    isBlankAnswer(answers[question.id])
                      ? "bg-slate-100/80 shadow-[0_4px_16px_rgba(14,34,64,0.06)]"
                      : "bg-white/80 hover:bg-white shadow-[0_2px_12px_rgba(14,34,64,0.05)] hover:shadow-[0_6px_20px_rgba(14,34,64,0.08)]"
                  }`}
                >
                  <span
                    className={`w-12 h-12 flex items-center justify-center text-base font-bold shrink-0 rounded-2xl ${
                      isBlankAnswer(answers[question.id])
                        ? "bg-slate-500 text-white"
                        : "bg-surface text-slate"
                    }`}
                  >
                    —
                  </span>
                  <span
                    className={`text-base md:text-lg ${
                      isBlankAnswer(answers[question.id])
                        ? "text-navy-900 font-medium"
                        : "text-slate"
                    }`}
                  >
                    Boş bırak
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          {error && (
            <p className="text-red-600 text-sm mt-4 bg-red-50/80 rounded-3xl px-5 py-3">
              {error}
            </p>
          )}

          <div className="sticky bottom-2 z-30 mt-6" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
            <div className="flex flex-col gap-3 p-3 sm:p-4 rounded-3xl bg-white/95 backdrop-blur-md border border-border/60 shadow-[0_8px_32px_rgba(14,34,64,0.12)] sm:flex-row sm:justify-between">
              <Button
                variant="secondary"
                onClick={() => setCurrentQuestion((c) => Math.max(0, c - 1))}
                disabled={currentQuestion === 0}
                className="w-full sm:w-auto min-h-[52px] text-base"
              >
                <ChevronLeft className="w-5 h-5" />
                Önceki
              </Button>

              <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                <Button
                  variant="outline"
                  onClick={() => submitTest(false)}
                  disabled={loading}
                  className="w-full sm:w-auto min-h-[52px] text-base"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Gönderiliyor
                    </>
                  ) : (
                    "Sınavı Bitir"
                  )}
                </Button>

                {currentQuestion < placementQuestions.length - 1 ? (
                  <Button
                    onClick={() =>
                      setCurrentQuestion((c) =>
                        Math.min(placementQuestions.length - 1, c + 1)
                      )
                    }
                    className="w-full sm:w-auto min-h-[52px] text-base"
                  >
                    Sonraki
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                ) : (
                  <Button
                    onClick={() => submitTest(false)}
                    disabled={loading}
                    className="w-full sm:w-auto min-h-[52px] text-base"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Gönderiliyor
                      </>
                    ) : (
                      "Sonuçları Gör"
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="soft-card mt-4 p-5 sm:p-6 rounded-3xl">
            <p className="label-caps text-slate-light mb-3">Soru Haritası</p>
            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
              {placementQuestions.map((q, i) => {
                const answered = isQuestionAnswered(answers, q.id);
                const blank = isBlankAnswer(answers[q.id]);

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestion(i)}
                    aria-label={`Soru ${i + 1}`}
                    className={`w-11 h-11 text-sm font-semibold rounded-full transition-all duration-200 ${
                      i === currentQuestion
                        ? "bg-gradient-to-br from-gold-600 to-gold-500 text-white shadow-md scale-110"
                        : answered && blank
                          ? "bg-slate-300 text-white hover:bg-slate-400"
                          : answered
                            ? "bg-navy-800 text-white hover:bg-navy-700"
                            : "bg-surface text-slate hover:bg-gold-100 hover:text-gold-700"
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence>
            {showConfirm && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[70] bg-navy-950/60 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={() => setShowConfirm(false)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 12 }}
                  transition={transition.fast}
                  onClick={(e) => e.stopPropagation()}
                  className="soft-card w-full max-w-md p-6 sm:p-8 text-center"
                >
                  <span className="w-14 h-14 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-7 h-7" />
                  </span>
                  <h3 className="font-heading-normal text-lg font-bold text-navy-900 mb-2">
                    Sınavı bitirmek istiyor musunuz?
                  </h3>
                  <p className="text-slate text-sm leading-relaxed mb-6">
                    {realAnswerCount} soru cevapladınız,{" "}
                    {placementQuestions.length - markedCount} soru henüz
                    işaretlenmedi. Yine de sınavı bitirmek istiyor musunuz?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setShowConfirm(false)}
                    >
                      Devam Et
                    </Button>
                    <Button
                      className="flex-1"
                      onClick={() => submitTest(true)}
                      disabled={loading}
                    >
                      {loading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        "Sınavı Bitir"
                      )}
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    if (step === "result" && result) {
      const levelInfo = levelDescriptions[result.level];

      return (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition.default}
          className="max-w-3xl mx-auto space-y-4"
        >
          <div className="soft-card overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y divide-border sm:divide-y-0 sm:divide-x">
              <div className="p-6 sm:p-8 text-center">
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, ...optionSpring }}
                  className="font-heading-normal text-4xl sm:text-5xl font-extrabold text-emerald-600 tabular-nums"
                >
                  %{result.percentage}
                </motion.div>
                <div className="label-caps text-slate-light mt-2">
                  Başarı Oranı
                </div>
              </div>
              <div className="p-6 sm:p-8 text-center">
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.18, ...optionSpring }}
                  className="font-heading-normal text-4xl sm:text-5xl font-extrabold tabular-nums"
                >
                  <span className="text-blue-700">
                    {result.correctAnswers}
                  </span>
                  <span className="text-slate-light text-2xl sm:text-3xl font-bold">
                    /{result.totalQuestions}
                  </span>
                </motion.div>
                <div className="label-caps text-slate-light mt-2">
                  Doğru Cevap
                </div>
              </div>
              <div className="p-6 sm:p-8 text-center">
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.26, ...optionSpring }}
                  className="font-heading-normal text-3xl sm:text-4xl font-extrabold text-navy-950 leading-tight"
                >
                  {result.level} {levelInfo.title}
                </motion.div>
                <div className="label-caps text-slate-light mt-2">
                  Yetkinlik Düzeyi
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={restartTest}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-semibold text-base px-6 min-h-[52px] flex-1 shadow-[0_8px_24px_rgba(5,150,105,0.3)] transition"
            >
              <RotateCcw className="w-5 h-5" />
              Tekrar Dene
            </button>
            <button
              onClick={shareResult}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-border hover:border-navy-900 text-navy-900 font-semibold text-base px-6 min-h-[52px] flex-1 shadow-sm transition"
            >
              <Share2 className="w-5 h-5" />
              Başarını Paylaş
            </button>
            <button
              onClick={shareLinkedIn}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-border hover:border-[#0A66C2] text-[#0A66C2] font-semibold text-base px-6 min-h-[52px] flex-1 shadow-sm transition"
            >
              <LinkedInIcon className="w-5 h-5" />
              LinkedIn
            </button>
          </div>

          {shareMsg && (
            <p className="text-sm sm:text-base text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-2xl px-4 py-2.5">
              {shareMsg}
            </p>
          )}

          <div className="soft-card p-5 sm:p-6 md:p-10">
            <ResultReview answers={answers} />

            <div className="mb-8">
              <h3 className="label-caps text-gold-600 mb-4">Barem Sonuçları</h3>
              <div className="space-y-2">
                {result.bandProgress.map((band) => (
                  <div
                    key={band.level}
                    className={`flex flex-wrap items-center justify-between gap-2 rounded-2xl px-4 py-3 text-sm ${
                      band.passed
                        ? "bg-emerald-50 border border-emerald-200"
                        : "bg-surface border border-border"
                    }`}
                  >
                    <span className="font-semibold text-navy-900">
                      {band.level} · {band.label}
                    </span>
                    <span
                      className={`tabular-nums ${band.passed ? "text-emerald-700" : "text-slate"}`}
                    >
                      {band.correct}/{band.total} (min. {band.required})
                      {band.passed ? " ✓" : ""}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="label-caps text-gold-600 mb-4">Bölüm Dağılımı</h3>
              <div className="space-y-3">
                {hubLevelOrder.map((level, i) => {
                  const data = result.breakdown[level];
                  const bandPercent =
                    data.total > 0
                      ? Math.round((data.correct / data.total) * 100)
                      : 0;
                  return (
                    <motion.div
                      key={level}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, ...optionSpring }}
                      className="flex items-center gap-3 text-sm rounded-3xl bg-surface/60 p-4 shadow-sm"
                    >
                      <span className="w-28 md:w-32 shrink-0 font-medium text-navy-900 text-xs sm:text-sm">
                        {data.label}
                      </span>
                      <div className="flex-1 progress-track h-2">
                        <motion.div
                          className="progress-fill h-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${bandPercent}%` }}
                          transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
                        />
                      </div>
                      <span className="w-14 text-right text-slate tabular-nums text-xs font-medium">
                        {data.correct}/{data.total}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-gold-50/80 to-white p-6 mb-8 shadow-sm">
              <h3 className="label-caps text-gold-600 mb-2">Program Önerisi</h3>
              <p className="text-sm text-slate leading-relaxed">
                {levelInfo.recommendation}
              </p>
            </div>

            <SpeakingBookingCard userInfo={userInfo} cefrLevel={result.level} />

            <div className="mt-6 rounded-3xl bg-surface/60 p-6 md:p-8">
              <h3 className="font-heading-normal text-sm font-bold text-navy-900 mb-3">
                Merkezimizi de Ziyaret Edebilirsiniz
              </h3>
              <p className="text-slate text-sm leading-relaxed mb-5">
                Sayın {userInfo.name}, isterseniz sonuçlarınızı yüz yüze
                değerlendirmek için Denizli merkezimize de bekleriz.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate mb-5">
                <div className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3 shadow-sm">
                  <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
                  {contactInfo.address.line2}
                </div>
                <div className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3 shadow-sm">
                  <Phone className="w-4 h-4 text-gold-600 shrink-0" />
                  {contactInfo.phone.display}
                </div>
                <div className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3 shadow-sm">
                  <Mail className="w-4 h-4 text-gold-600 shrink-0" />
                  {contactInfo.email.display}
                </div>
                <div className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3 shadow-sm">
                  <Calendar className="w-4 h-4 text-gold-600 shrink-0" />
                  {contactInfo.hours.office}
                </div>
              </div>
              <Button href="/iletisim" size="lg">
                Randevu Al
              </Button>
            </div>
          </div>
        </motion.div>
      );
    }

    return null;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {renderStep()}
      </motion.div>
    </AnimatePresence>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function questionStem(passage: string): string {
  const lines = passage
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  const withBlank = lines.find((l) => l.includes("___"));
  const raw = withBlank ?? lines[0] ?? passage;
  const colonIndex = raw.indexOf(":");
  const text =
    colonIndex > 0 && colonIndex < 24
      ? raw.slice(colonIndex + 1).trim()
      : raw;
  return text.length > 90 ? `${text.slice(0, 90).trimEnd()}…` : text;
}

function ResultReview({ answers }: { answers: Record<number, string> }) {
  const items = placementQuestions.map((q) => {
    const userAnswer = answers[q.id];
    const blank = userAnswer === undefined || isBlankAnswer(userAnswer);
    const correct = !blank && userAnswer === q.correctAnswer;
    return { q, userAnswer, blank, correct };
  });

  const counts = {
    all: items.length,
    correct: items.filter((i) => i.correct).length,
    wrong: items.filter((i) => !i.blank && !i.correct).length,
    blank: items.filter((i) => i.blank).length,
  };

  const [filter, setFilter] = useState<DetailFilter>("all");
  const [openId, setOpenId] = useState<number | null>(
    () => items.find((i) => !i.correct)?.q.id ?? null
  );

  const visibleItems = items.filter((i) => {
    if (filter === "correct") return i.correct;
    if (filter === "wrong") return !i.blank && !i.correct;
    if (filter === "blank") return i.blank;
    return true;
  });

  const filters: { key: DetailFilter; label: string }[] = [
    { key: "all", label: "Tümü" },
    { key: "wrong", label: "Yanlışlar" },
    { key: "correct", label: "Doğrular" },
    { key: "blank", label: "Atlananlar" },
  ];

  const dotColor = (item: { blank: boolean; correct: boolean }) =>
    item.blank
      ? "bg-slate-300"
      : item.correct
        ? "bg-emerald-500"
        : "bg-red-500";

  return (
    <div className="mb-8">
      <div className="rounded-3xl border border-border bg-white p-5 sm:p-7 mb-4 shadow-sm">
        <div className="flex items-start gap-3 sm:gap-4">
          <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7" />
          </span>
          <div className="min-w-0">
            <h3 className="font-heading-normal text-lg sm:text-xl font-bold text-navy-950">
              Cevaplarını incele
            </h3>
            <p className="text-sm sm:text-base text-slate-light leading-relaxed">
              Her soruyu açarak doğru ve yanlışlarını gör
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm sm:text-base text-navy-800 mt-4">
          <span className="inline-flex items-center gap-1.5">
            <i className="w-2.5 h-2.5 rounded-full bg-red-500 not-italic" />
            {counts.wrong} yanlış
          </span>
          <span className="inline-flex items-center gap-1.5">
            <i className="w-2.5 h-2.5 rounded-full bg-emerald-500 not-italic" />
            {counts.correct} doğru
          </span>
          <span className="inline-flex items-center gap-1.5">
            <i className="w-2.5 h-2.5 rounded-full bg-slate-300 not-italic" />
            {counts.blank} atlandı
          </span>
        </div>

        <div className="rounded-2xl border border-border bg-surface/70 px-4 py-3.5 mt-4">
          <div className="flex flex-wrap gap-[5px]">
            {items.map((i) => (
              <span
                key={i.q.id}
                title={`Soru ${i.q.id}`}
                className={`w-2.5 h-2.5 rounded-full ${dotColor(i)}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 mb-3 -mx-1 px-1">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`inline-flex items-center gap-1.5 shrink-0 rounded-full px-4 py-2.5 min-h-[48px] text-sm sm:text-base font-semibold transition-colors ${
              filter === f.key
                ? "bg-navy-950 text-white shadow-sm"
                : "bg-white text-slate border border-border hover:border-navy-900 hover:text-navy-900"
            }`}
          >
            {f.label}
            <span
              className={`rounded-full px-1.5 py-0.5 text-xs font-bold tabular-nums ${
                filter === f.key
                  ? "bg-white/20 text-white"
                  : "bg-surface text-slate"
              }`}
            >
              {counts[f.key]}
            </span>
          </button>
        ))}
      </div>

      <p className="text-sm sm:text-base text-slate-light mb-3">
        Detayları görmek için bir soruya dokun.
      </p>

      <div className="space-y-2.5">
        {visibleItems.length === 0 ? (
          <p className="text-sm sm:text-base text-slate-light bg-surface rounded-2xl px-5 py-4">
            Bu filtreye uygun soru bulunamadı.
          </p>
        ) : (
          visibleItems.map(({ q, userAnswer, blank, correct }) => {
            const open = openId === q.id;
            const accent = blank
              ? "border-l-slate-300"
              : correct
                ? "border-l-emerald-500"
                : "border-l-red-500";
            const badge = blank
              ? "bg-slate-200 text-slate-600"
              : correct
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700";
            const badgeText = blank
              ? "ATLANDI"
              : correct
                ? "DOĞRU"
                : "YANLIŞ";
            return (
              <div
                key={q.id}
                className={`bg-white rounded-2xl border border-border border-l-4 ${accent} shadow-sm overflow-hidden`}
              >
                <button
                  onClick={() => setOpenId(open ? null : q.id)}
                  aria-expanded={open}
                  className="w-full flex items-center gap-2.5 sm:gap-3 p-4 sm:p-5 text-left min-h-[68px]"
                >
                  <span className="w-8 h-8 rounded-lg bg-surface text-navy-900 text-sm font-bold flex items-center justify-center shrink-0 tabular-nums">
                    {q.id}
                  </span>
                  {blank ? (
                    <MinusCircle className="w-5 h-5 text-slate-400 shrink-0" />
                  ) : correct ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                  )}
                  <span className="flex-1 min-w-0 text-base sm:text-base font-medium text-navy-900 leading-snug">
                    {questionStem(q.passage)}
                  </span>
                  <span
                    className={`shrink-0 text-sm sm:text-xs font-extrabold tracking-wide px-2.5 py-1 rounded-full ${badge}`}
                  >
                    {badgeText}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-light shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 border-t border-border/70">
                        <div className="py-3 space-y-1">
                          {q.passage.split("\n").map((line, li) => (
                            <p
                              key={li}
                              className="text-sm sm:text-base text-slate leading-relaxed"
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                        <div className="space-y-1.5">
                          {q.options.map((o) => {
                            const isCorrect = o.key === q.correctAnswer;
                            const isUser = o.key === userAnswer && !blank;
                            return (
                              <div
                                key={o.key}
                                className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 text-sm sm:text-base ${
                                  isCorrect
                                    ? "bg-emerald-50 border-emerald-300"
                                    : isUser
                                      ? "bg-red-50 border-red-300"
                                      : "bg-surface/60 border-border"
                                }`}
                              >
                                <span
                                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                                    isCorrect
                                      ? "bg-emerald-500 text-white"
                                      : isUser
                                        ? "bg-red-500 text-white"
                                        : "bg-white text-slate border border-border"
                                  }`}
                                >
                                  {o.key}
                                </span>
                                <span
                                  className={`flex-1 leading-snug ${
                                    isCorrect
                                      ? "text-emerald-900 font-medium"
                                      : isUser
                                        ? "text-red-700"
                                        : "text-slate"
                                  }`}
                                >
                                  {o.text}
                                </span>
                                {isCorrect && (
                                  <span className="shrink-0 text-xs sm:text-sm font-extrabold tracking-wide bg-emerald-500 text-white px-2 py-0.5 rounded-full">
                                    {isUser ? "CEVABIN · DOĞRU" : "DOĞRU CEVAP"}
                                  </span>
                                )}
                                {isUser && !isCorrect && (
                                  <span className="shrink-0 text-xs sm:text-sm font-extrabold tracking-wide bg-red-500 text-white px-2 py-0.5 rounded-full">
                                    SENİN CEVABIN
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        {blank && (
                          <p className="text-sm sm:text-base text-slate-light mt-3">
                            Bu soruyu boş bıraktın. Doğru cevap:{" "}
                            <span className="font-semibold text-navy-900">
                              {q.correctAnswer}
                            </span>
                          </p>
                        )}
                        <p className="text-sm sm:text-xs uppercase tracking-wide text-slate-light mt-3">
                          {hubLevelConfig[q.hubLevel].labelTr} · {q.cefrLevel}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}