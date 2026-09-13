"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ClipboardList,
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

/** Detay görünümü: sınav sonucunu öne çıkarır, gerisini satır satır dizer. */
function DetailView({ item }: { item: Submission }) {
  const data = item.data as Record<string, unknown>;
  const result = data.result as Record<string, unknown> | undefined;

  const rows: [string, string][] = [];
  const push = (k: string, v: unknown) => {
    if (v === undefined || v === null || v === "") return;
    rows.push([k, typeof v === "object" ? JSON.stringify(v) : String(v)]);
  };

  if (item.type === "exam" && result) {
    push("Seviye", result.level);
    push("Skor", `${String(result.percentage)}% (${String(result.correctAnswers)}/${String(result.totalQuestions)} doğru)`);
    const info = data.userInfo as Record<string, unknown> | undefined;
    if (info) {
      push("Ad", info.name);
      push("E-posta", info.email);
      push("Telefon", info.phone);
    }
    const answers = data.answers as Record<string, unknown> | undefined;
    if (answers) push("Cevaplanan soru", Object.keys(answers).length);
  } else {
    Object.entries(data).forEach(([k, v]) => {
      if (["name", "email", "phone"].includes(k)) return;
      push(k, v);
    });
  }

  if (!rows.length) return <p className="text-sm text-slate-light">Ek detay yok.</p>;
  return (
    <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
      {rows.map(([k, v]) => (
        <div key={k} className="flex gap-2 min-w-0">
          <dt className="shrink-0 font-semibold text-navy-900 capitalize">{k}:</dt>
          <dd className="text-slate break-words min-w-0">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function AdminPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("all");
  const [q, setQ] = useState("");
  const [items, setItems] = useState<Submission[]>([]);
  const [counts, setCounts] = useState({ all: 0, exam: 0, registration: 0, speaking: 0 });
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
    } catch {
      /* ağ hatasında eski liste korunur */
    } finally {
      setLoading(false);
    }
  }, [router]);

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
            <p className="text-[11px] text-white/60 mt-1 tracking-widest uppercase">
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

        {/* arama */}
        <div className="relative mb-4">
          <Search className="w-4 h-4 text-slate-light absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ad, e-posta, telefon veya özet ile ara…"
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white text-sm shadow-sm focus:ring-4 focus:ring-gold-500/20 focus:outline-none"
          />
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
                    <span className={`badge-pill text-[10px] ${TYPE_BADGE[s.type]}`}>
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
