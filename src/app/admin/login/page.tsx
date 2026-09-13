"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /* Zaten girişliyse panele geç */
  useEffect(() => {
    fetch("/api/admin/login")
      .then((r) => {
        if (r.ok) router.replace("/admin");
      })
      .catch(() => {});
  }, [router]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Giriş başarısız");
        return;
      }
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Bağlantı hatası, tekrar deneyin");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 surface-navy">
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <Logo size={44} />
          <div>
            <p className="font-heading-normal font-bold text-navy-900 leading-none">
              Zreducation
            </p>
            <p className="label-caps text-slate-light mt-1">Admin Paneli</p>
          </div>
        </div>

        <label className="label-caps text-slate block mb-2" htmlFor="admin-pass">
          Admin Şifresi
        </label>
        <div className="relative">
          <Lock className="w-4 h-4 text-slate-light absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            id="admin-pass"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-surface text-sm focus:ring-4 focus:ring-gold-500/20 focus:outline-none"
          />
        </div>

        {error && (
          <p className="mt-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading || !password}
          className="mt-5 w-full rounded-2xl bg-navy-900 text-white text-sm font-semibold py-3 hover:bg-navy-800 transition-colors disabled:opacity-50"
        >
          {loading ? "Giriş yapılıyor…" : "Giriş Yap"}
        </button>
      </form>
    </main>
  );
}
