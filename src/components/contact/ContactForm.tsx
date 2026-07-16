"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer, transition } from "@/lib/motion";

const inputClass =
  "w-full px-5 py-3 rounded-2xl border-0 bg-surface text-sm shadow-[inset_0_1px_2px_rgba(14,34,64,0.04)] focus:ring-4 focus:ring-gold-500/15 focus:outline-none";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
                  content: "Levent Mah. Eğitim Cad. No:42\nBeşiktaş / İstanbul",
                },
                {
                  icon: Phone,
                  title: "Telefon",
                  content: "+90 (212) 123 45 67",
                  href: "tel:+902121234567",
                },
                {
                  icon: Mail,
                  title: "E-posta",
                  content: "info@zreducation.com",
                  href: "mailto:info@zreducation.com",
                },
                {
                  icon: Clock,
                  title: "Çalışma Saatleri",
                  content: "Pazartesi – Cumartesi: 09:00 – 19:00\nPazar: Kapalı",
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
          </AnimatedSection>

          <AnimatedSection variant="slideRight" delay={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={transition.default}
              className="soft-card p-8 md:p-10"
            >
              <h3 className="font-heading-normal text-base font-bold text-navy-900 mb-6">
                Mesaj Formu
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={transition.fast}
                  className="py-12 rounded-3xl bg-surface/80 text-center shadow-inner"
                >
                  <Send className="w-6 h-6 text-gold-600 mx-auto mb-3" />
                  <h4 className="font-heading-normal text-sm font-bold text-navy-900 mb-2">
                    Mesajınız Alındı
                  </h4>
                  <p className="text-sm text-slate">
                    En kısa sürede sizinle iletişime geçeceğiz.
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
                      Konu
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      className={inputClass}
                    >
                      <option value="">Seçiniz</option>
                      <option value="yurt-disi">Yurt Dışı Eğitim</option>
                      <option value="ingilizce">İngilizce Eğitimi</option>
                      <option value="online">Online Eğitim</option>
                      <option value="sinav">Sınav Hazırlık</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                  <div>
                    <label className="label-caps text-slate block mb-2">
                      Mesaj
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-4 h-4" />
                    Gönder
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
