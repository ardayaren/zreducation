"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ClipboardList,
  Download,
  GraduationCap,
  LogOut,
  Phone,
  Search,
  Trash2,
  Users,
  Video,
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import type { Submission, SubmissionType } from "@/lib/submissions";

type Tab = "all" | SubmissionType;

const TABS: { key: Tab; label: string }[] = [
  { key: "all", label: "Tümü" },
  { key: "exam", label: "Sınav Sonuçları" },
  { key: "registration", label: "Kayıt / İletişim" },
  { key: "speaking", label: "Speaking Randevu" },
];

const TYPE_BADGE: Record<SubmissionType, string> = {
  exam: "bg-gold-100 text-gold-700",
  registration: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  speaking: "bg-navy-900 text-white",
};

const TYPE_LABEL: Record<SubmissionType, string> = {
  exam: "Sınav",
  registration: "Kayıt",
  speaking: "Speaking",
};

function fmtDate(iso: string): string {
  try {
    return new Date(iso).toLocaleString("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

/** Detay görünümü: sınav sonucunu ve tüm ham veriyi öne çıkarır. */
function DetailView({ item }: { item: Submission }) {
  const data = item.data as Record<string, unknown>;
  const result = data.result as Record<string, unknown> | undefined;
  const userInfo = data.userInfo as Record<string, unknown> | undefined;
  const answers = data.answers as Record<string, unknown> | undefined;
  const emailStatus = data.emailStatus as Record<string, unknown> | undefined;
  const wrongAnswers = result?.wrongAnswers as
    | { questionId: number; userAnswer: string; correctAnswer: string }[]
    | undefined;
  const groups = result?.groups as
    | { level: string; label: string; correct: number; total: number; percent: number }[]
    | undefined;

  const kv = (k: string, v: unknown) =>
    v === undefined || v === null || v === "" ? null : (
      <div key={k} className="flex gap-2 min-w-0">
        <dt className="shrink-0 font-semibold text-navy-900 capitalize">{k}:</dt>
        <dd className="text-slate break-words min-w-0">
          {typeof v === "object" ? JSON.stringify(v) : String(v)}
        </dd>
      </div>
    );

  return (
    <div className="space-y-5">
      {item.type === "exam" && (
        <>
          <div>
            <p className="label-caps text-gold-600 mb-2">Sınav Sonucu</p>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
              {kv("Seviye", result?.level)}
              {kv("Program", result?.hubLabel)}
              {kv("Grup Ortalaması", result ? `%${String(result.averagePercentage)}` : undefined)}
              {kv("Başarı", result ? `%${String(result.percentage)}` : undefined)}
              {kv("Doğru", result ? `${String(result.correctAnswers)}/${String(result.totalQuestions)}` : undefined)}
              {kv("Yanlış", result?.incorrectAnswers)}
              {kv("Boş", result?.blankAnswers)}
              {kv("Cevaplanan soru", result?.answeredCount)}
            </div>
          </div>

          {groups && (
            <div>
              <p className="label-caps text-gold-600 mb-2">Grup Analizi</p>
              <div className="flex flex-wrap gap-2">
                {groups.map((g) => (
                  <span
                    key={g.level}
                    className="rounded-xl bg-surface border border-border px-3 py-1.5 text-xs text-slate"
                  >
                    <b className="text-navy-900">{g.level}</b> · {g.label} ·{" "}
                    %{g.percent} ({g.correct}/{g.total})
                  </span>
                ))}
              </div>
            </div>
          )}

          {wrongAnswers && wrongAnswers.length > 0 && (
            <div>
              <p className="label-caps text-gold-600 mb-2">
                Yanlış Cevaplar ({wrongAnswers.length})
              </p>
              <div className="space-y-1.5 text-sm">
                {wrongAnswers.map((w) => (
                  <div key={w.questionId} className="rounded-xl bg-surface px-3 py-2">
                    <b className="text-navy-900">Soru {w.questionId}</b>
                    <span className="text-red-600"> yanıt: {w.userAnswer}</span>
                    <span className="text-emerald-600"> · doğru: {w.correctAnswer}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {userInfo && (
            <div>
              <p className="label-caps text-gold-600 mb-2">Kişisel Bilgiler</p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
                {kv("Ad", userInfo.name)}
                {kv("E-posta", userInfo.email)}
                {kv("Telefon", userInfo.phone)}
              </div>
            </div>
          )}

          {answers && (
            <div>
              <p className="label-caps text-gold-600 mb-2">
                Cevaplar ({Object.keys(answers).length} soru)
              </p>
              <p className="text-xs text-slate-light break-all">
                {JSON.stringify(answers)}
              </p>
            </div>
          )}
        </>
      )}

      {item.type !== "exam" && (
        <div>
          <p className="label-caps text-gold-600 mb-2">Form Bilgileri</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
            {Object.entries(data)
              .filter(([k]) => !["name", "email", "phone", "emailStatus"].includes(k))
              .map(([k, v]) => kv(k, v))}
          </div>
        </div>
      )}

      {emailStatus && (
        <div>
          <p className="label-caps text-gold-600 mb-2">E-posta Gönderimi</p>
          <p className="text-sm text-slate">
            {emailStatus.ok
              ? `Gönderildi${emailStatus.provider ? ` (${String(emailStatus.provider)})` : ""}`
              : `Hata: ${String(emailStatus.error ?? "bilinmiyor")}`}
          </p>
        </div>
      )}

      <div>
        <p className="label-caps text-gold-600 mb-2">Ham Veri (JSON)</p>
        <pre className="rounded-2xl bg-surface p-4 text-xs text-slate overflow-x-auto whitespace-pre-wrap break-words">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("all");
  const [q, setQ] = useState("");
  const [items, setItems] = useState<Submission[]>([]);
  const [counts, setCounts] = useState({ all: 0, exam: 0, registration: 0, speaking: 0 });
  const [stats, setStats] = useState({ today: 0, week: 0 });
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);

  const load = useCallback(async (t: Tab, query: string) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (t !== "all") params.set("type", t);
      if (query.trim()) params.set("q", query.trim());
      const res = await fetch(`/api/admin/submissions?${params.toString()}`);
      if (res.status === 401) {
        router.replace("/admin/login");
        return;
      }
      const data = await res.json();
      setItems(data.items || []);
      if (data.counts) setCounts(data.counts);
      if (data.stats) setStats(data.stats);
    } catch {
      /* ağ hatasında eski liste korunur */
    } finally {
      setLoading(false);
    }
  }, [router]);

  function exportCsv() {
    if (!items.length) return;
    const header = ["Tarih", "Tür", "Ad", "E-posta", "Telefon", "Özet"];
    const rows = items.map((s) => [
      fmtDate(s.createdAt),
      TYPE_LABEL[s.type],
      s.name,
      s.email,
      s.phone,
      s.summary,
    ]);
    const csv = [header, ...rows]
      .map((r) =>
        r.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")
      )
      .join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `zreducation-basvurular-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  useEffect(() => {
    const t = setTimeout(() => load(tab, q), q ? 300 : 0);
    return () => clearTimeout(t);
  }, [tab, q, load]);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" }).catch(() => {});
    router.replace("/admin/login");
    router.refresh();
  }

  async function remove(id: string, name: string) {
    if (!window.confirm(`${name} kaydını silmek istiyor musunuz?`)) return;
    const res = await fetch(`/api/admin/submissions?id=${encodeURIComponent(id)}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setItems((prev) => prev.filter((s) => s.id !== id));
      load(tab, q);
    }
  }

  const tabIcon = (key: Tab) =>
    key === "exam" ? <GraduationCap className="w-4 h-4" /> :
    key === "registration" ? <Users className="w-4 h-4" /> :
    key === "speaking" ? <Video className="w-4 h-4" /> :
    <ClipboardList className="w-4 h-4" />;

  return (
    <main className="min-h-screen">
      {/* üst bar */}
      <header className="surface-navy text-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-3">
          <Logo size={40} />
          <div className="mr-auto">
            <p className="font-heading-normal font-bold leading-none">Zreducation Admin</p>
            <p className="text-sm text-white/60 mt-1 tracking-widest uppercase">
              Başvurular & Sınav Sonuçları
            </p>
          </div>
          <button
            onClick={logout}
            className="inline-flex items-center gap-2 text-xs font-semibold border border-white/25 rounded-full px-4 py-2 hover:bg-white hover:text-navy-900 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" /> Çıkış
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        {/* özet istatistikler */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
          {[
            { label: "Bugün", value: stats.today },
            { label: "Son 7 Gün", value: stats.week },
            { label: "Toplam Başvuru", value: counts.all },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white shadow-sm p-4 flex items-center justify-between"
            >
              <span className="label-caps text-slate-light">{s.label}</span>
              <span className="font-heading-normal text-2xl font-bold text-navy-900 tabular-nums">
                {s.value}
              </span>
            </div>
          ))}
        </div>

        {/* sekmeler */}
        <div className="flex flex-wrap gap-2 mb-4">
          {TABS.map((t) => {
            const n = t.key === "all" ? counts.all : counts[t.key as SubmissionType];
            const on = tab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => { setTab(t.key); setExpanded(null); }}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  on ? "bg-navy-900 text-white" : "bg-white text-slate hover:text-navy-900 shadow-sm"
                }`}
              >
                {tabIcon(t.key)}
                {t.label}
                <span className={`text-xs tabular-nums rounded-full px-2 py-0.5 ${on ? "bg-white/20" : "bg-surface-2"}`}>
                  {n}
                </span>
              </button>
            );
          })}
        </div>

        {/* arama + dışa aktar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-light absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Ad, e-posta, telefon veya özet ile ara…"
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white text-sm shadow-sm focus:ring-4 focus:ring-gold-500/20 focus:outline-none"
            />
          </div>
          <button
            onClick={exportCsv}
            disabled={!items.length}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-navy-900 text-white text-sm font-semibold px-5 py-3 hover:bg-navy-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Download className="w-4 h-4" />
            CSV İndir
          </button>
        </div>

        {/* liste */}
        {loading && items.length === 0 ? (
          <p className="text-sm text-slate-light py-10 text-center">Yükleniyor…</p>
        ) : items.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-sm p-10 text-center">
            <ClipboardList className="w-8 h-8 text-slate-light mx-auto mb-3" />
            <p className="font-semibold text-navy-900">Kayıt bulunamadı</p>
            <p className="text-sm text-slate-light mt-1">
              Henüz başvuru yok veya arama sonucu boş.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((s) => {
              const open = expanded === s.id;
              return (
                <article key={s.id} className="bg-white rounded-3xl shadow-sm overflow-hidden">
                  <div className="p-4 sm:p-5 flex flex-wrap items-center gap-3">
                    <span className={`badge-pill text-xs ${TYPE_BADGE[s.type]}`}>
                      {TYPE_LABEL[s.type]}
                    </span>
                    <div className="min-w-0 mr-auto">
                      <p className="font-bold text-navy-900 truncate">{s.name}</p>
                      <p className="text-xs text-slate-light tabular-nums">{fmtDate(s.createdAt)}</p>
                    </div>
                    <p className="text-sm text-slate w-full sm:w-auto">{s.summary}</p>
                    <div className="flex items-center gap-2 ml-auto">
                      <a
                        href={`tel:${s.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1.5"
                      >
                        <Phone className="w-3.5 h-3.5" /> {s.phone}
                      </a>
                      <button
                        onClick={() => setExpanded(open ? null : s.id)}
                        className="text-xs font-semibold text-gold-700 bg-gold-50 border border-gold-200 rounded-full px-3 py-1.5"
                      >
                        {open ? "Kapat" : "Detay"}
                      </button>
                      <button
                        onClick={() => remove(s.id, s.name)}
                        aria-label="Kaydı sil"
                        className="p-1.5 text-slate-light hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  {open && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-border mt-1">
                      <p className="text-xs text-slate-light break-all py-2">{s.email}</p>
                      <DetailView item={s} />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
