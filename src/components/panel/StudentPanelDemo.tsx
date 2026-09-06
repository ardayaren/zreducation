"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpenCheck,
  CalendarCheck,
  ClipboardList,
  LineChart,
  StickyNote,
  PlayCircle,
  CheckCircle2,
  XCircle,
  Clock,
  FileText,
} from "lucide-react";
import { transition } from "@/lib/motion";
import Button from "@/components/ui/Button";

type TabKey = "genel" | "dersler" | "devamsizlik" | "odevler" | "rapor" | "notlar";

const tabs: { key: TabKey; label: string; icon: typeof LayoutDashboard }[] = [
  { key: "genel", label: "Genel Bakış", icon: LayoutDashboard },
  { key: "dersler", label: "Ders Kayıtları", icon: BookOpenCheck },
  { key: "devamsizlik", label: "Devamsızlık", icon: CalendarCheck },
  { key: "odevler", label: "Ödevler", icon: ClipboardList },
  { key: "rapor", label: "İlerleme Raporu", icon: LineChart },
  { key: "notlar", label: "Eğitmen Notları", icon: StickyNote },
];

const lessons = [
  {
    id: 12,
    date: "4 Eylül Cuma",
    topic: "Speaking Odaklı — Role-play: Restoranda sipariş",
    status: "Katıldı",
    recorded: true,
  },
  {
    id: 11,
    date: "2 Eylül Çarşamba",
    topic: "Present Perfect — Deneyim anlatımı",
    status: "Katıldı",
    recorded: true,
  },
  {
    id: 10,
    date: "31 Ağustos Pazartesi",
    topic: "Listening — Seyahat diyalogları",
    status: "Katıldı",
    recorded: true,
  },
  {
    id: 9,
    date: "28 Ağustos Cuma",
    topic: "Writing — Kısa e-posta yazımı",
    status: "Kaçırıldı",
    recorded: true,
  },
  {
    id: 8,
    date: "26 Ağustos Çarşamba",
    topic: "Vocabulary — İş görüşmesi kalıpları",
    status: "Katıldı",
    recorded: true,
  },
  {
    id: 7,
    date: "24 Ağustos Pazartesi",
    topic: "Grammar — Past Simple pratiği",
    status: "Katıldı",
    recorded: true,
  },
];

const attendance = [
  { date: "24 Ağu", present: true },
  { date: "26 Ağu", present: true },
  { date: "28 Ağu", present: false },
  { date: "31 Ağu", present: true },
  { date: "2 Eyl", present: true },
  { date: "4 Eyl", present: true },
  { date: "7 Eyl", present: true },
  { date: "9 Eyl", present: true },
  { date: "11 Eyl", present: false },
  { date: "14 Eyl", present: true },
  { date: "16 Eyl", present: true },
  { date: "18 Eyl", present: true },
];

const homework = [
  {
    title: "Present Perfect alıştırma çalışma kağıdı",
    due: "Teslim: 6 Eylül",
    status: "Teslim Edildi",
    done: true,
  },
  {
    title: "10 kelime cümle içinde kullanım",
    due: "Teslim: 8 Eylül",
    status: "Bekliyor",
    done: false,
  },
  {
    title: "Kısa e-posta yazımı (30-40 kelime)",
    due: "Teslim: 10 Eylül",
    status: "Gecikti",
    done: false,
  },
  {
    title: "Seyahat diyaloğu dinleme özeti",
    due: "Teslim: 12 Eylül",
    status: "Bekliyor",
    done: false,
  },
];

const skills = [
  { label: "Speaking", score: 72, trend: "+8" },
  { label: "Listening", score: 68, trend: "+5" },
  { label: "Reading", score: 75, trend: "+4" },
  { label: "Writing", score: 61, trend: "+9" },
];

const instructorNotes = [
  {
    lesson: "12. Ders · 4 Eylül",
    text: "Defne role-play etkinliğinde çok aktifti; present perfect kullanımında belirgin gelişim var. 'gürültülü' ve 'yol tarif etmek' kelimeleri üzerinde ev pratiği önerilir.",
  },
  {
    lesson: "11. Ders · 2 Eylül",
    text: "Deneyim anlatımında akıcılık arttı. 'Have you ever...?' soru kalıplarında hâlâ küçük tereddütler var; 2 örnek daha yazılı çalışma verildi.",
  },
  {
    lesson: "8. Ders · 26 Ağustos",
    text: "Kelime hazinesi genişliyor; iş görüşmesi kalıplarında sözcük vurguları iyi. Devamsızlık yok, katılım düzenli.",
  },
];

export default function StudentPanelDemo() {
  const [activeTab, setActiveTab] = useState<TabKey>("genel");

  return (
    <div className="soft-card overflow-hidden">
      <div className="surface-navy p-6 md:p-8 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative flex flex-col md:flex-row md:items-center gap-5 justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 text-navy-950 flex items-center justify-center font-heading-normal font-bold text-xl md:text-2xl shrink-0">
              DY
            </div>
            <div>
              <p className="label-caps text-gold-300 mb-1">Örnek Panel Görünümü</p>
              <h3 className="font-heading-normal text-lg md:text-xl font-bold text-white">
                Defne Yılmaz
              </h3>
              <p className="text-white/60 text-sm">
                B1 · 3 Ayda 90 Ders Yoğun Program (Online)
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            <span className="badge-pill bg-emerald-500/15 text-emerald-300">
              Kalan: 38 ders
            </span>
            <span className="badge-pill bg-white/10 text-white">
              Bitiş: 12 Kasım
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto p-4 md:p-6 border-b border-border bg-surface/50">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`inline-flex items-center gap-1.5 shrink-0 rounded-full px-4 py-2.5 text-xs md:text-sm font-semibold transition-colors ${
              activeTab === tab.key
                ? "bg-navy-900 text-white shadow-sm"
                : "bg-white text-slate hover:text-navy-900 border border-border/70"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-5 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={transition.fast}
          >
            {activeTab === "genel" && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { label: "Tamamlanan Ders", value: "52 / 90" },
                    { label: "Katılım Oranı", value: "%92" },
                    { label: "Teslim Edilen Ödev", value: "14 / 16" },
                    { label: "Ortalama Skor", value: "%69" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-3xl bg-surface p-5 text-center">
                      <div className="font-heading-normal text-xl md:text-2xl font-bold text-navy-900 tabular-nums">
                        {s.value}
                      </div>
                      <div className="label-caps text-slate-light mt-1 text-[10px]">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="label-caps text-gold-600 mb-3">Genel İlerleme</h4>
                  <div className="progress-track h-3">
                    <motion.div
                      className="progress-fill h-full"
                      initial={{ width: 0 }}
                      animate={{ width: "58%" }}
                      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-slate mt-2">
                    <span>Program başlangıcı</span>
                    <span className="font-semibold text-navy-900">%58 tamamlandı</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="rounded-3xl border border-border bg-white p-5">
                    <h5 className="text-sm font-bold text-navy-900 mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold-600" />
                      Sonraki Ders
                    </h5>
                    <p className="text-sm text-slate leading-relaxed">
                      13. Ders · 7 Eylül Pazartesi 19:30
                      <br />
                      <span className="text-navy-700 font-medium">
                        Speaking — İş görüşmesi mülakatı provası
                      </span>
                    </p>
                  </div>
                  <div className="rounded-3xl border border-border bg-white p-5">
                    <h5 className="text-sm font-bold text-navy-900 mb-3 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gold-600" />
                      Son Rapor
                    </h5>
                    <p className="text-sm text-slate leading-relaxed">
                      4 haftalık rapor hazırlandı (31 Ağustos).
                      <br />
                      <span className="text-emerald-700 font-medium">
                        En güçlü alan: Speaking (+8 puan)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "dersler" && (
              <div className="space-y-2.5">
                {lessons.map((l) => (
                  <div
                    key={l.id}
                    className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl border border-border bg-white p-4"
                  >
                    <span className="w-11 h-11 shrink-0 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center text-sm font-bold">
                      {l.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-navy-900">
                        {l.topic}
                      </p>
                      <p className="text-xs text-slate-light">{l.date}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {l.recorded && (
                        <span className="inline-flex items-center gap-1 text-xs text-navy-700 bg-surface rounded-full px-2.5 py-1">
                          <PlayCircle className="w-3.5 h-3.5 text-gold-600" />
                          Kayıt var
                        </span>
                      )}
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                          l.status === "Katıldı"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-red-50 text-red-600 border border-red-200"
                        }`}
                      >
                        {l.status === "Katıldı" ? (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        ) : (
                          <XCircle className="w-3.5 h-3.5" />
                        )}
                        {l.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "devamsizlik" && (
              <div>
                <p className="text-sm text-slate mb-4">
                  Son 6 haftada <span className="font-semibold text-navy-900">%92</span>{" "}
                  katılım — 2 ders kaçırıldı. Düzenli katılım sayesinde grup
                  içinde aktif söz alma sıklığınız yüksek.
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                  {attendance.map((a) => (
                    <div
                      key={a.date}
                      className={`rounded-2xl border p-4 text-center ${
                        a.present
                          ? "bg-emerald-50 border-emerald-200"
                          : "bg-red-50 border-red-200"
                      }`}
                    >
                      <span className="block text-xs font-semibold text-navy-900 mb-2">
                        {a.date}
                      </span>
                      {a.present ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "odevler" && (
              <div className="space-y-2.5">
                {homework.map((h) => (
                  <div
                    key={h.title}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 rounded-2xl border border-border bg-white p-4"
                  >
                    <span
                      className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${
                        h.done
                          ? "bg-emerald-500 text-white"
                          : h.status === "Gecikti"
                            ? "bg-red-500 text-white"
                            : "bg-slate-300 text-white"
                      }`}
                    >
                      {h.done ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <Clock className="w-4 h-4" />
                      )}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-navy-900">{h.title}</p>
                      <p className="text-xs text-slate-light">{h.due}</p>
                    </div>
                    <span
                      className={`shrink-0 text-xs font-semibold rounded-full px-3 py-1 ${
                        h.done
                          ? "bg-emerald-50 text-emerald-700"
                          : h.status === "Gecikti"
                            ? "bg-red-50 text-red-600"
                            : "bg-gold-100 text-gold-700"
                      }`}
                    >
                      {h.status}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "rapor" && (
              <div>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-5">
                  <h4 className="label-caps text-gold-600">31 Ağustos — 4 Haftalık Rapor</h4>
                  <span className="badge-pill bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Önceki rapora göre +%6
                  </span>
                </div>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.label} className="rounded-2xl bg-surface p-4">
                      <div className="flex justify-between items-center mb-2 text-sm">
                        <span className="font-semibold text-navy-900">
                          {skill.label}
                        </span>
                        <span className="text-slate">
                          <span className="font-bold text-navy-900 tabular-nums">
                            %{skill.score}
                          </span>{" "}
                          <span className="text-emerald-600 text-xs font-semibold">
                            {skill.trend}
                          </span>
                        </span>
                      </div>
                      <div className="progress-track h-2.5">
                        <motion.div
                          className="progress-fill h-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.score}%` }}
                          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl border border-border bg-white p-5">
                  <h5 className="text-sm font-bold text-navy-900 mb-2">Rapor Özeti</h5>
                  <p className="text-sm text-slate leading-relaxed">
                    Konuşma akıcılığı belirgin şekilde arttı; dinlemede seyahat
                    diyaloglarına aşinalık kazanıldı. Writing&apos;de e-posta yapısı
                    öğrenildi, geciken ödevin tamamlanması önerilir. Bir sonraki
                    hedef: Present Perfect&apos;i sözlü cümlelerde otomatik kullanmak.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "notlar" && (
              <div className="space-y-3">
                {instructorNotes.map((n) => (
                  <div key={n.lesson} className="rounded-2xl border border-border bg-white p-5">
                    <span className="text-[10px] uppercase tracking-wide text-gold-600 font-semibold block mb-2">
                      {n.lesson}
                    </span>
                    <p className="text-sm text-slate leading-relaxed">&quot;{n.text}&quot;</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-5 md:p-8 bg-surface/60 border-t border-border">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-slate leading-relaxed max-w-2xl">
            Bu ekran bir <span className="font-semibold text-navy-900">örnek panel
            görünümüdür</span>. Kayıt olduğunuzda kişisel bağlantınız WhatsApp
            üzerinden paylaşılır ve ders kayıtlarınız, raporlarınız tek adresten
            takip edilebilir.
          </p>
          <Button href="/iletisim" size="sm">
            Kayıt Ol
          </Button>
        </div>
      </div>
    </div>
  );
}