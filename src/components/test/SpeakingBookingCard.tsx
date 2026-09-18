"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Video, Send, Loader2, CheckCircle2, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { transition } from "@/lib/motion";
import { contactInfo } from "@/data/contact";

const inputClass =
  "w-full px-4 py-3 rounded-2xl border-0 bg-white/10 text-white text-sm placeholder:text-white/40 focus:ring-2 focus:ring-gold-400/50 focus:outline-none";

interface UserInfo {
  name: string;
  email: string;
  phone: string;
}

interface SpeakingBookingCardProps {
  userInfo: UserInfo;
  cefrLevel: string;
}

export default function SpeakingBookingCard({
  userInfo,
  cefrLevel,
}: SpeakingBookingCardProps) {
  const [city, setCity] = useState("");
  const [platform, setPlatform] = useState("Zoom");
  const [preferredDay, setPreferredDay] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [booked, setBooked] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!preferredDay || !preferredTime) {
      setError("Lütfen tercih ettiğiniz gün ve saati belirtin.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/speaking-randevu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...userInfo,
          city,
          cefrLevel,
          platform,
          preferredDay,
          preferredTime,
          note,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Bir hata oluştu");
      }

      setBooked(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="surface-navy navy-panel p-8 md:p-10 relative overflow-hidden">
      <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gold-500/10 rounded-full blur-2xl" />

      <div className="flex flex-wrap items-center gap-2 mb-4 relative">
        <span className="badge-pill bg-emerald-500/15 text-emerald-300">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Aşama 1 — Yazılı Sınav Tamamlandı
        </span>
        <span className="badge-pill bg-gold-500/15 text-gold-300">
          Aşama 2 — Speaking Sınavı Randevusu
        </span>
      </div>

      <h3 className="font-heading-normal text-lg md:text-xl font-bold text-white mb-2 relative">
        Konuşma Sınavınız İçin Randevu Alın
      </h3>
      <p className="text-white/65 text-sm leading-relaxed mb-6 relative max-w-2xl">
        Seviyenizin netleşmesi için Zoom veya Microsoft Teams üzerinden 15
        dakikalık kısa bir speaking (konuşma) görüşmesi yapıyoruz. Size uygun
        gün ve saati seçin, danışmanlarımız görüşme linkini WhatsApp veya
        e-posta ile iletsin.
      </p>

      {booked ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition.fast}
          className="bg-white/8 rounded-3xl p-6 text-center relative"
        >
          <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto mb-3" />
          <h4 className="font-heading-normal text-sm font-bold text-white mb-2">
            Randevu Talebiniz Alındı
          </h4>
          <p className="text-white/60 text-sm">
            Ekibimiz en kısa sürede sizinle iletişime geçip görüşme linkini
            paylaşacak. Acil sorularınız için WhatsApp hattımız 7/24 açık.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 relative">
          <div className="grid sm:grid-cols-3 gap-3">
            <div>
              <label className="text-xs uppercase tracking-wide text-white/50 block mb-2">
                Şehir
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Örn. Denizli"
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wide text-white/50 block mb-2">
                Tercih Edilen Gün
              </label>
              <input
                type="date"
                value={preferredDay}
                onChange={(e) => setPreferredDay(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wide text-white/50 block mb-2">
                Tercih Edilen Saat
              </label>
              <input
                type="time"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-wide text-white/50 block mb-2">
              Platform Tercihi
            </label>
            <div className="flex gap-2">
              {["Zoom", "Microsoft Teams", "Fark Etmez"].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setPlatform(opt)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-medium transition-colors ${
                    platform === opt
                      ? "bg-gold-500 text-navy-950"
                      : "bg-white/8 text-white/60 hover:bg-white/15"
                  }`}
                >
                  <Video className="w-3.5 h-3.5" />
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-wide text-white/50 block mb-2">
              Not (opsiyonel)
            </label>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Alternatif saat aralıkları vb."
              className={inputClass}
            />
          </div>

          {error && (
            <p className="text-red-300 text-xs bg-red-500/10 rounded-2xl px-4 py-3">
              {error}
            </p>
          )}

          <div className="flex flex-wrap gap-3 pt-2">
            <Button type="submit" size="lg" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Gönderiliyor
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Randevu Talebi Gönder
                </>
              )}
            </Button>
            <a
              href={contactInfo.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1fb857] text-white font-semibold text-sm px-8 py-4 shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" fill="white" fillOpacity={0.15} />
              WhatsApp&apos;tan Hızlıca Yazın
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
