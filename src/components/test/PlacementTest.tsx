"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Loader2,
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
import { transition } from "@/lib/motion";
import Button from "@/components/ui/Button";

const inputClass =
  "w-full px-5 py-3.5 rounded-3xl border-0 bg-white/90 text-sm shadow-[inset_0_1px_2px_rgba(14,34,64,0.04),0_2px_12px_rgba(14,34,64,0.04)] transition-all duration-200 focus:ring-4 focus:ring-gold-500/20 focus:outline-none placeholder:text-slate-light";

const optionSpring = { type: "spring" as const, stiffness: 400, damping: 28 };

type Step = "info" | "test" | "result";

interface UserInfo {
  name: string;
  email: string;
  phone: string;
}

function renderPassage(passage: string) {
  return passage.split("\n").map((line, index) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const speaker = line.slice(0, colonIndex);
      const text = line.slice(colonIndex + 1).trim();
      return (
        <p key={index} className="text-sm md:text-base leading-relaxed">
          <span className="font-semibold text-navy-900">{speaker}:</span>{" "}
          <span className="text-navy-700">{text}</span>
        </p>
      );
    }
    return (
      <p key={index} className="text-sm md:text-base text-navy-700 leading-relaxed">
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

  const question = placementQuestions[currentQuestion];
  const hubInfo = hubLevelConfig[question.hubLevel];
  const progress = ((currentQuestion + 1) / placementQuestions.length) * 100;
  const answeredCount = placementQuestions.filter((q) =>
    isQuestionAnswered(answers, q.id)
  ).length;

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInfo.name || !userInfo.email || !userInfo.phone) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }
    setError("");
    setStep("test");
  };

  const selectAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [question.id]: answer }));
  };

  const selectBlank = () => {
    setAnswers((prev) => ({ ...prev, [question.id]: BLANK_ANSWER }));
  };

  const submitTest = async () => {
    const unanswered = placementQuestions.filter(
      (q) => !isQuestionAnswered(answers, q.id)
    );

    if (unanswered.length > 0) {
      setError(
        `Lütfen tüm soruları işaretleyin. (${unanswered.length} soru kaldı)`
      );
      return;
    }

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
    }
  };

  const renderStep = () => {
    if (step === "info") {
      return (
        <div className="max-w-lg mx-auto">
          <div className="soft-card p-8 md:p-10">
            <span className="badge-pill bg-gold-100 text-gold-700 mb-4">
              Başvuru Formu
            </span>
            <h2 className="font-heading-normal text-2xl font-bold text-navy-900 mb-2">
              Sınava Başlamadan Önce
            </h2>
            <p className="text-slate text-sm mb-8 leading-relaxed">
              Bilgilerinizi girin ve 70 soruluk Language Hub seviye tespit
              sınavına başlayın.
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
                <p className="text-red-600 text-xs bg-red-50/80 rounded-3xl px-5 py-3">
                  {error}
                </p>
              )}

              <Button type="submit" className="w-full" size="lg">
                Sınava Başla
              </Button>
            </form>

            <p className="text-xs text-slate-light mt-6 pt-4 leading-relaxed">
              Sınav yaklaşık 30 dakika sürer. Her soru için A, B, C, D
              seçeneklerinden birini veya &quot;Boş bırak&quot; seçeneğini
              işaretlemeniz gerekmektedir.
            </p>
          </div>
        </div>
      );
    }

    if (step === "test") {
      return (
        <div className="max-w-3xl mx-auto">
          <div className="soft-card mb-6 p-5 md:p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="badge-pill bg-gradient-to-r from-navy-700 to-navy-900 text-white shadow-sm">
                Soru {currentQuestion + 1} / {placementQuestions.length}
              </span>
              <span className="text-sm text-slate">
                <span className="font-semibold text-navy-900">{answeredCount}</span>{" "}
                cevaplandı
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
              className="soft-card p-8 md:p-10"
            >
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="badge-pill bg-gradient-to-r from-gold-600 to-gold-500 text-white shadow-sm">
                  {hubInfo.label}
                </span>
                <span className="text-xs text-slate-light bg-surface px-3 py-1 rounded-full">
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
                      className={`w-full flex items-center gap-4 p-4 rounded-3xl text-left transition-all duration-300 ${
                        isSelected
                          ? "bg-gradient-to-r from-gold-100/90 to-gold-50 shadow-[0_6px_24px_rgba(201,168,58,0.18)]"
                          : "bg-white/80 hover:bg-white shadow-[0_2px_12px_rgba(14,34,64,0.05)] hover:shadow-[0_6px_20px_rgba(14,34,64,0.08)]"
                      }`}
                    >
                      <span
                        className={`w-11 h-11 flex items-center justify-center text-sm font-bold shrink-0 rounded-2xl transition-all duration-300 ${
                          isSelected
                            ? "bg-gradient-to-br from-gold-600 to-gold-500 text-white shadow-md"
                            : "bg-surface text-slate"
                        }`}
                      >
                        {option.key}
                      </span>
                      <span
                        className={`text-sm ${
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
                  transition={{ delay: question.options.length * 0.04, ...optionSpring }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={selectBlank}
                  className={`w-full flex items-center gap-4 p-4 rounded-3xl text-left transition-all duration-300 ${
                    isBlankAnswer(answers[question.id])
                      ? "bg-slate-100/80 shadow-[0_4px_16px_rgba(14,34,64,0.06)]"
                      : "bg-white/80 hover:bg-white shadow-[0_2px_12px_rgba(14,34,64,0.05)] hover:shadow-[0_6px_20px_rgba(14,34,64,0.08)]"
                  }`}
                >
                  <span
                    className={`w-11 h-11 flex items-center justify-center text-sm font-bold shrink-0 rounded-2xl ${
                      isBlankAnswer(answers[question.id])
                        ? "bg-slate-500 text-white"
                        : "bg-surface text-slate"
                    }`}
                  >
                    —
                  </span>
                  <span
                    className={`text-sm ${
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
            <p className="text-red-600 text-xs mt-4 bg-red-50/80 rounded-3xl px-5 py-3">
              {error}
            </p>
          )}

          <div className="flex justify-between mt-6 gap-3">
            <Button
              variant="secondary"
              onClick={() => setCurrentQuestion((c) => Math.max(0, c - 1))}
              disabled={currentQuestion === 0}
            >
              <ChevronLeft className="w-4 h-4" />
              Önceki
            </Button>

            {currentQuestion < placementQuestions.length - 1 ? (
              <Button
                onClick={() =>
                  setCurrentQuestion((c) =>
                    Math.min(placementQuestions.length - 1, c + 1)
                  )
                }
                disabled={!isQuestionAnswered(answers, question.id)}
              >
                Sonraki
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button onClick={submitTest} disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Gönderiliyor
                  </>
                ) : (
                  "Sınavı Tamamla"
                )}
              </Button>
            )}
          </div>

          <div className="soft-card mt-6 p-5 rounded-3xl">
            <p className="label-caps text-slate-light mb-3">Soru Haritası</p>
            <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto">
            {placementQuestions.map((q, i) => {
              const answered = isQuestionAnswered(answers, q.id);
              const blank = isBlankAnswer(answers[q.id]);

              return (
              <button
                key={q.id}
                onClick={() => setCurrentQuestion(i)}
                className={`w-7 h-7 text-[9px] font-semibold rounded-full transition-all duration-200 ${
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
          className="max-w-3xl mx-auto soft-card overflow-hidden"
        >
          <div className="surface-navy navy-panel p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl" />
            <span className="badge-pill bg-white/10 text-gold-300 mb-4 relative">
              Sınav Sonucu
            </span>
            <div className="flex items-end gap-6 flex-wrap relative">
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15, ...optionSpring }}
                className="font-heading-normal text-5xl md:text-6xl font-bold text-gold-400 tabular-nums"
              >
                {result.level}
              </motion.span>
              <div>
                <h2 className="font-heading-normal text-xl md:text-2xl font-bold text-white">
                  {levelInfo.title}
                </h2>
                <p className="text-gold-400 text-sm mt-1">
                  Language Hub: {result.hubLabel}
                </p>
                <p className="text-white/60 text-sm mt-2 max-w-md leading-relaxed">
                  {levelInfo.description}
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
              {[
                { label: "Doğru", value: result.correctAnswers, color: "from-emerald-500/10 to-emerald-500/5 text-emerald-700" },
                { label: "Yanlış", value: result.incorrectAnswers, color: "from-red-500/10 to-red-500/5 text-red-600" },
                { label: "Boş", value: result.blankAnswers, color: "from-slate-500/10 to-slate-500/5 text-slate-600" },
                { label: "Toplam", value: result.totalQuestions, color: "from-navy-500/10 to-navy-500/5 text-navy-800" },
                { label: "Oran", value: `%${result.percentage}`, color: "from-gold-500/15 to-gold-500/5 text-gold-700" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, ...optionSpring }}
                  className={`rounded-3xl bg-gradient-to-br ${item.color} p-5 text-center shadow-sm`}
                >
                  <div className="font-heading-normal text-xl font-bold tabular-nums">
                    {item.value}
                  </div>
                  <div className="label-caps opacity-70 mt-1 text-[10px]">
                    {item.label}
                  </div>
                </motion.div>
              ))}
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
                      <span className="w-32 shrink-0 font-medium text-navy-900 text-xs sm:text-sm">
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

            <div className="surface-navy navy-panel p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gold-500/10 rounded-full blur-2xl" />
              <h3 className="font-heading-normal text-base font-bold text-white mb-3 relative">
                Kuruma Davet
              </h3>
              <p className="text-white/65 text-sm leading-relaxed mb-6 relative">
                Sayın {userInfo.name}, sınavınızı tamamladınız. Size özel eğitim
                programını paylaşmak ve tanışmak için sizi merkezimize davet
                ediyoruz. Danışmanlarımız en kısa sürede sizinle iletişime
                geçecektir.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 text-sm text-white/60 mb-6 relative">
                <div className="flex items-center gap-2 bg-white/8 rounded-2xl px-4 py-3">
                  <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                  Levent, Beşiktaş / İstanbul
                </div>
                <div className="flex items-center gap-2 bg-white/8 rounded-2xl px-4 py-3">
                  <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                  +90 (212) 123 45 67
                </div>
                <div className="flex items-center gap-2 bg-white/8 rounded-2xl px-4 py-3">
                  <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                  info@zreducation.com
                </div>
                <div className="flex items-center gap-2 bg-white/8 rounded-2xl px-4 py-3">
                  <Calendar className="w-4 h-4 text-gold-500 shrink-0" />
                  Pzt–Cmt 09:00–19:00
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
