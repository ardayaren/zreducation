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
} from "@/data/placementQuestions";
import type { TestResult } from "@/lib/levelCalculator";
import { transition } from "@/lib/motion";
import Button from "@/components/ui/Button";

const inputClass =
  "w-full px-4 py-2.5 border border-border bg-white text-sm focus:border-gold-600 focus:outline-none";

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
  const answeredCount = Object.keys(answers).length;

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

  const submitTest = async () => {
    if (answeredCount < placementQuestions.length) {
      setError("Lütfen tüm soruları cevaplayın.");
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
          <div className="bg-white border border-border p-8 md:p-10">
            <span className="label-caps text-gold-600 block mb-3">
              Başvuru Formu
            </span>
            <h2 className="font-heading-normal text-xl font-bold text-navy-900 mb-2">
              Sınava Başlamadan Önce
            </h2>
            <p className="text-slate text-sm mb-8">
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

              {error && <p className="text-red-600 text-xs">{error}</p>}

              <Button type="submit" className="w-full" size="lg">
                Sınava Başla
              </Button>
            </form>

            <p className="text-xs text-slate-light mt-6 border-t border-border pt-4">
              Sınav yaklaşık 30 dakika sürer. Tüm soruların cevaplanması
              gerekmektedir. Her soru için A, B, C veya D seçeneğini işaretleyin.
            </p>
          </div>
        </div>
      );
    }

    if (step === "test") {
      return (
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 border border-border bg-white p-4">
            <div className="flex justify-between label-caps text-slate mb-3">
              <span>
                Soru {currentQuestion + 1} / {placementQuestions.length}
              </span>
              <span>{answeredCount} cevaplandı</span>
            </div>
            <div className="h-1 bg-surface-2">
              <motion.div
                className="h-full bg-gold-600"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={transition.fast}
              className="bg-white border border-border p-8 md:p-10"
            >
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="label-caps text-gold-600">
                  {hubInfo.label}
                </span>
                <span className="text-xs text-slate-light">
                  ({hubInfo.labelTr} · {hubInfo.cefr} · Soru {hubInfo.itemRange})
                </span>
              </div>

              <div className="space-y-2 mb-8 p-4 bg-surface border border-border">
                {renderPassage(question.passage)}
              </div>

              <div className="space-y-2">
                {question.options.map((option) => {
                  const isSelected = answers[question.id] === option.key;
                  return (
                    <button
                      key={option.key}
                      onClick={() => selectAnswer(option.key)}
                      className={`w-full flex items-center gap-4 p-4 border text-left transition-colors ${
                        isSelected
                          ? "border-gold-600 bg-gold-100/40"
                          : "border-border hover:border-gold-600/50 bg-white"
                      }`}
                    >
                      <span
                        className={`w-8 h-8 flex items-center justify-center text-xs font-bold shrink-0 border ${
                          isSelected
                            ? "bg-gold-600 text-white border-gold-600"
                            : "bg-surface text-slate border-border"
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
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {error && <p className="text-red-600 text-xs mt-4">{error}</p>}

          <div className="flex justify-between mt-6">
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
                disabled={!answers[question.id]}
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

          <div className="flex flex-wrap gap-1 mt-6 border-t border-border pt-6 max-h-32 overflow-y-auto">
            {placementQuestions.map((q, i) => (
              <button
                key={q.id}
                onClick={() => setCurrentQuestion(i)}
                className={`w-6 h-6 text-[9px] font-medium border transition-colors ${
                  i === currentQuestion
                    ? "bg-gold-600 text-white border-gold-600"
                    : answers[q.id]
                      ? "bg-navy-900 text-white border-navy-900"
                      : "bg-white text-slate border-border hover:border-gold-600"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (step === "result" && result) {
      const levelInfo = levelDescriptions[result.level];

      return (
        <div className="max-w-3xl mx-auto border border-border bg-white">
          <div className="surface-navy border-b-4 border-gold-600 p-8 md:p-10">
            <span className="label-caps text-gold-400 block mb-4">
              Sınav Sonucu
            </span>
            <div className="flex items-end gap-6 flex-wrap">
              <span className="font-heading-normal text-5xl font-bold text-gold-400 tabular-nums">
                {result.level}
              </span>
              <div>
                <h2 className="font-heading-normal text-xl font-bold text-white">
                  {levelInfo.title}
                </h2>
                <p className="text-gold-400 text-sm mt-1">
                  Language Hub: {result.hubLabel}
                </p>
                <p className="text-white/60 text-sm mt-2 max-w-md">
                  {levelInfo.description}
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 border border-border divide-x divide-y sm:divide-y-0 divide-border mb-8">
              {[
                { label: "Doğru", value: result.correctAnswers },
                { label: "Yanlış", value: result.incorrectAnswers },
                { label: "Toplam", value: result.totalQuestions },
                { label: "Oran", value: `%${result.percentage}` },
              ].map((item) => (
                <div key={item.label} className="p-4 text-center">
                  <div className="font-heading-normal text-xl font-bold text-navy-900 tabular-nums">
                    {item.value}
                  </div>
                  <div className="label-caps text-slate-light mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="label-caps text-gold-600 mb-4">Bölüm Dağılımı</h3>
              <div className="space-y-2">
                {hubLevelOrder.map((level) => {
                  const data = result.breakdown[level];
                  const bandPercent =
                    data.total > 0
                      ? Math.round((data.correct / data.total) * 100)
                      : 0;
                  return (
                    <div
                      key={level}
                      className="flex items-center gap-3 text-sm border border-border p-3"
                    >
                      <span className="w-36 shrink-0 font-medium text-navy-900">
                        {data.label}
                      </span>
                      <div className="flex-1 h-1.5 bg-surface-2">
                        <div
                          className="h-full bg-gold-600"
                          style={{ width: `${bandPercent}%` }}
                        />
                      </div>
                      <span className="w-16 text-right text-slate tabular-nums">
                        {data.correct}/{data.total}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-l-2 border-gold-600 pl-4 mb-8">
              <h3 className="label-caps text-gold-600 mb-2">Program Önerisi</h3>
              <p className="text-sm text-slate leading-relaxed">
                {levelInfo.recommendation}
              </p>
            </div>

            <div className="surface-navy p-8 border-l-4 border-gold-600">
              <h3 className="font-heading-normal text-base font-bold text-white mb-3">
                Kuruma Davet
              </h3>
              <p className="text-white/65 text-sm leading-relaxed mb-6">
                Sayın {userInfo.name}, sınavınızı tamamladınız. Size özel eğitim
                programını paylaşmak ve tanışmak için sizi merkezimize davet
                ediyoruz. Danışmanlarımız en kısa sürede sizinle iletişime
                geçecektir.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 text-sm text-white/60 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                  Levent, Beşiktaş / İstanbul
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                  +90 (212) 123 45 67
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                  info@zreducation.com
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold-500 shrink-0" />
                  Pzt–Cmt 09:00–19:00
                </div>
              </div>

              <Button href="/iletisim" size="lg">
                Randevu Al
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={transition.default}
      >
        {renderStep()}
      </motion.div>
    </AnimatePresence>
  );
}
