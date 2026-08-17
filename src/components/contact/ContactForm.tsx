"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { contactInfo } from "@/data/contact";
import { fadeUp, staggerContainer, transition } from "@/lib/motion";

const inputClass =
  "w-full px-5 py-3 rounded-2xl border-0 bg-surface text-sm shadow-[inset_0_1px_2px_rgba(14,34,64,0.04)] focus:ring-4 focus:ring-gold-500/15 focus:outline-none";

const programOptions = [
  { value: "3-ayda-90-ders", label: "3 Ayda 90 Ders Yoğun Program" },
  { value: "online-ingilizce", label: "Online İngilizce (Birebir / Grup)" },
  { value: "yuz-yuze-ingilizce", label: "Yüz Yüze İngilizce (Denizli — Birebir / Grup)" },
  { value: "sinav-hazirlik", label: "Sınav Hazırlık (IELTS/TOEFL/YDS)" },
  { value: "ogrenci-paneli", label: "Öğrenci Paneli & Ders Kayıtları" },
  { value: "yurt-disi", label: "Yurt Dışı Eğitim Danışmanlığı" },
  { value: "diger", label: "Diğer" },
];

function readPaketParam(): string {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);
  const paket = params.get("paket");
  if (!paket) return "";
  const match = programOptions.find(
    (o) => o.value === paket || o.value.startsWith(paket.split("-")[0])
  );
  return match ? match.value : "";
}

const initialForm = {
  name: "",
  email: "",
  phone: "",
  city: "",
  program: "",
  format: "",
  targetLevel: "",
  startPreference: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paket = params.get("paket");
    const sehir = params.get("sehir");
    // URL query parametreleri yalnızca istemci tarafında mevcuttur; başlangıç
    // state'inin tek seferlik okunması bilinçli bir seçimdir.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setForm((prev) => ({
      ...prev,
      program: paket ? readPaketParam() : prev.program,
      city: sehir || prev.city,
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.city) {
      setError("Ad soyad, telefon, e-posta ve şehir bilgisi zorunludur.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/kayit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Bir hata oluştu");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Kayıt gönderilirken bir hata oluştu"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection variant="slideLeft">
            <SectionTitle
              subtitle="İletişim"
              title="Merkez Ofis"
              align="left"
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-5"
            >
              {[
                {
                  icon: MapPin,
                  title: "Adres",
                  content: `${contactInfo.address.line1}\n${contactInfo.address.line2}`,
                  href: contactInfo.maps.openUrl,
                },
                {
                  icon: Phone,
                  title: "Telefon & WhatsApp",
                  content: contactInfo.phone.display,
                  href: contactInfo.whatsapp.href,
                },
                {
                  icon: Mail,
                  title: "E-posta",
                  content: contactInfo.email.display,
                  href: contactInfo.email.href,
                },
                {
                  icon: Clock,
                  title: "Çalışma Saatleri",
                  content: `${contactInfo.hours.office}\n${contactInfo.hours.support}`,
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  transition={transition.fast}
                  className="flex items-start gap-4 border-b border-border pb-5 last:border-0"
                >
                  <item.icon className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="label-caps text-navy-900 mb-1">
                      {item.title}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.title === "Adres" ? "_blank" : undefined}
                        rel={
                          item.title === "Adres"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm text-slate hover:text-navy-900 transition-colors whitespace-pre-line"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-sm text-slate whitespace-pre-line">
                        {item.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 rounded-3xl overflow-hidden border border-border shadow-sm">
              <iframe
                title="Zreducation Denizli Ofis Konumu"
                src={contactInfo.maps.embedUrl}
                className="w-full h-56 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </AnimatedSection>

          <AnimatedSection variant="slideRight" delay={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={transition.default}
              className="soft-card p-8 md:p-10"
            >
              <span className="badge-pill bg-gold-100 text-gold-700 mb-4">
                Ücretsiz Kayıt Formu
              </span>
              <h3 className="font-heading-normal text-lg font-bold text-navy-900 mb-2">
                Kayıt Başvurusu
              </h3>
              <p className="text-sm text-slate mb-6 leading-relaxed">
                Kayıt formunu doldurun; danışmanlarımız size en uygun programı
                önererek 7/24 WhatsApp veya arama ile sizinle iletişime
                geçsin. Denizli&apos;de yaşıyorsanız yüz yüze görüşme için de
                sizi kampüsümüze davet ederiz.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={transition.fast}
                  className="py-12 rounded-3xl bg-surface/80 text-center shadow-inner"
                >
                  <Send className="w-6 h-6 text-gold-600 mx-auto mb-3" />
                  <h4 className="font-heading-normal text-sm font-bold text-navy-900 mb-2">
                    Kayıt Talebiniz Alındı
                  </h4>
                  <p className="text-sm text-slate">
                    En kısa sürede sizinle iletişime geçeceğiz. Hemen konuşmak
                    isterseniz sağ alttaki WhatsApp butonunu kullanabilirsiniz.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label-caps text-slate block mb-2">
                        Ad Soyad
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="label-caps text-slate block mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label-caps text-slate block mb-2">
                        E-posta
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="label-caps text-slate block mb-2">
                        Yaşadığınız Şehir
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Örn. Denizli"
                        value={form.city}
                        onChange={(e) =>
                          setForm({ ...form, city: e.target.value })
                        }
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label-caps text-slate block mb-2">
                        İlgilendiğiniz Program
                      </label>
                      <select
                        value={form.program}
                        onChange={(e) =>
                          setForm({ ...form, program: e.target.value })
                        }
                        className={inputClass}
                      >
                        <option value="">Seçiniz</option>
                        {programOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label-caps text-slate block mb-2">
                        Eğitim Şekli
                      </label>
                      <select
                        value={form.format}
                        onChange={(e) =>
                          setForm({ ...form, format: e.target.value })
                        }
                        className={inputClass}
                      >
                        <option value="">Seçiniz</option>
                        <option value="birebir">Birebir Ders</option>
                        <option value="grup">Grup Dersi (Maks 8–10 Kişi)</option>
                        <option value="fark-etmez">Fark Etmez</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label-caps text-slate block mb-2">
                        Hedef Seviyeniz
                      </label>
                      <select
                        value={form.targetLevel}
                        onChange={(e) =>
                          setForm({ ...form, targetLevel: e.target.value })
                        }
                        className={inputClass}
                      >
                        <option value="">Seçiniz</option>
                        <option value="akici-konusma">Akıcı Konuşma (3 ayda 90 ders)</option>
                        <option value="a1">A1 — Başlangıç</option>
                        <option value="a2">A2 — Temel</option>
                        <option value="b1">B1 — Orta Alt</option>
                        <option value="b2">B2 — Orta Üst</option>
                        <option value="c1">C1 — İleri</option>
                        <option value="c2">C2 — Uzman</option>
                      </select>
                    </div>
                    <div>
                      <label className="label-caps text-slate block mb-2">
                        Ders Başlangıç Tercihi
                      </label>
                      <select
                        value={form.startPreference}
                        onChange={(e) =>
                          setForm({ ...form, startPreference: e.target.value })
                        }
                        className={inputClass}
                      >
                        <option value="">Seçiniz</option>
                        <option value="hemen">Hemen Başlamak İstiyorum</option>
                        <option value="1-ay">1 Ay İçinde</option>
                        <option value="daha-sonra">Daha Sonra</option>
                        <option value="bilgi-aliyorum">Önce Bilgi Almak İstiyorum</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="label-caps text-slate block mb-2">
                      Eklemek İstedikleriniz (opsiyonel)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Örn. Haftada kaç gün derse katılabilirsiniz, özel bir hedefiniz, daha önce İngilizce eğitimi aldınız mı?"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {error && (
                    <p className="text-red-600 text-xs bg-red-50/80 rounded-3xl px-5 py-3">
                      {error}
                    </p>
                  )}

                  <Button type="submit" className="w-full" size="lg" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Gönderiliyor
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Kayıt Ol
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
