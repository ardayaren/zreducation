import nodemailer from "nodemailer";
import { Resend } from "resend";
import type { TestResult } from "@/lib/levelCalculator";
import {
  levelDescriptions,
  isBlankAnswer,
  placementQuestions,
} from "@/data/placementQuestions";

interface UserInfo {
  name: string;
  email: string;
  phone: string;
}

/* Varsayılan gönderen / alıcı — her girişte seviye tespit sonucu ve kişisel
 * bilgiler zreducationn@gmail.com adresine düşer. */
const DEFAULT_SENDER = "yzararszsoy@gmail.com";
const DEFAULT_ADMIN = "zreducationn@gmail.com";

/* Resend önceliklidir; anahtar yoksa SMTP (nodemailer) fallback çalışır. */
let resendClient: Resend | null = null;

function getResend(): Resend | null {
  if (!resendClient && process.env.RESEND_API_KEY) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

function getFromAddress() {
  if (process.env.RESEND_FROM) return process.env.RESEND_FROM;
  const sender = process.env.SMTP_USER || DEFAULT_SENDER;
  return `"Zreducation" <${sender}>`;
}

function getAdminEmail() {
  return process.env.ADMIN_EMAIL || DEFAULT_ADMIN;
}

async function sendMail(opts: {
  to: string;
  subject: string;
  text: string;
  html: string;
}): Promise<"resend" | "smtp" | null> {
  const resend = getResend();

  if (resend) {
    try {
      const { error } = await resend.emails.send({
        from: getFromAddress(),
        to: opts.to,
        subject: opts.subject,
        text: opts.text,
        html: opts.html,
      });
      if (error) throw new Error(error.message);
      console.log(`[email] Resend ile gönderildi -> ${opts.to}`);
      return "resend";
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn(
        `[email] Resend hatası, SMTP'ye geçiliyor (${opts.to}): ${msg}`
      );
    }
  }

  if (!process.env.SMTP_PASS) {
    console.warn(
      `[email] SMTP_PASS tanımlı değil — e-posta gönderilmedi (alıcı: ${opts.to}).`
    );
    return null;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || DEFAULT_SENDER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: getFromAddress(),
      to: opts.to,
      subject: opts.subject,
      text: opts.text,
      html: opts.html,
    });
    console.log(`[email] SMTP ile gönderildi -> ${opts.to}`);
    return "smtp";
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new Error(`SMTP gönderim hatası: ${msg}`);
  }
}

interface RegistrationLead {
  name: string;
  email: string;
  phone: string;
  city: string;
  program: string;
  format: string;
  targetLevel?: string;
  startPreference?: string;
  message?: string;
}

export async function sendRegistrationNotification(
  lead: RegistrationLead
): Promise<"resend" | "smtp" | null> {
  const adminEmail = getAdminEmail();
  if (!adminEmail) {
    console.warn("Admin email not configured. Skipping email send.");
    return null;
  }

  return sendMail({
    to: adminEmail,
    subject: `Yeni Kayıt Talebi — ${lead.name} (${lead.city})`,
    text: `
YENİ KAYIT TALEBİ
=================

Ad Soyad: ${lead.name}
Telefon: ${lead.phone}
E-posta: ${lead.email}
Şehir: ${lead.city}
İlgilendiği Program: ${lead.program}
Eğitim Şekli: ${lead.format}
Hedef Seviye: ${lead.targetLevel || "Belirtilmedi"}
Başlangıç Tercihi: ${lead.startPreference || "Belirtilmedi"}
Ek Not: ${lead.message || "—"}

---
Bu e-posta Zreducation web sitesi kayıt formundan otomatik gönderilmiştir.
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0b1d3a; padding: 24px; text-align: center;">
          <h1 style="color: #d4af37; margin: 0;">Zreducation</h1>
          <p style="color: #fff; margin: 8px 0 0;">Yeni Kayıt Talebi</p>
        </div>
        <div style="padding: 24px; background: #f7f8fa;">
          <p><strong>Ad Soyad:</strong> ${lead.name}</p>
          <p><strong>Telefon:</strong> ${lead.phone}</p>
          <p><strong>E-posta:</strong> ${lead.email}</p>
          <p><strong>Şehir:</strong> ${lead.city}</p>
          <p><strong>İlgilendiği Program:</strong> ${lead.program}</p>
          <p><strong>Eğitim Şekli:</strong> ${lead.format}</p>
          <p><strong>Hedef Seviye:</strong> ${lead.targetLevel || "Belirtilmedi"}</p>
          <p><strong>Başlangıç Tercihi:</strong> ${lead.startPreference || "Belirtilmedi"}</p>
          <p><strong>Ek Not:</strong> ${lead.message || "—"}</p>
        </div>
      </div>
    `,
  });
}

interface SpeakingBookingLead {
  name: string;
  email: string;
  phone: string;
  city: string;
  cefrLevel?: string;
  platform: string;
  preferredDay: string;
  preferredTime: string;
  note?: string;
}

export async function sendSpeakingBookingNotification(
  lead: SpeakingBookingLead
): Promise<"resend" | "smtp" | null> {
  const adminEmail = getAdminEmail();
  if (!adminEmail) {
    console.warn("Admin email not configured. Skipping email send.");
    return null;
  }

  return sendMail({
    to: adminEmail,
    subject: `Speaking Sınavı Randevu Talebi — ${lead.name}`,
    text: `
SPEAKING SINAVI RANDEVU TALEBİ
===============================

Ad Soyad: ${lead.name}
Telefon: ${lead.phone}
E-posta: ${lead.email}
Şehir: ${lead.city}
Yazılı Sınav Seviyesi: ${lead.cefrLevel || "Belirtilmedi"}
Platform Tercihi: ${lead.platform}
Tercih Edilen Gün: ${lead.preferredDay}
Tercih Edilen Saat: ${lead.preferredTime}
Not: ${lead.note || "—"}

---
Bu e-posta Zreducation web sitesi speaking randevu formundan otomatik gönderilmiştir.
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0b1d3a; padding: 24px; text-align: center;">
          <h1 style="color: #d4af37; margin: 0;">Zreducation</h1>
          <p style="color: #fff; margin: 8px 0 0;">Speaking Sınavı Randevu Talebi</p>
        </div>
        <div style="padding: 24px; background: #f7f8fa;">
          <p><strong>Ad Soyad:</strong> ${lead.name}</p>
          <p><strong>Telefon:</strong> ${lead.phone}</p>
          <p><strong>E-posta:</strong> ${lead.email}</p>
          <p><strong>Şehir:</strong> ${lead.city}</p>
          <p><strong>Yazılı Sınav Seviyesi:</strong> ${lead.cefrLevel || "Belirtilmedi"}</p>
          <p><strong>Platform Tercihi:</strong> ${lead.platform}</p>
          <p><strong>Tercih Edilen Gün:</strong> ${lead.preferredDay}</p>
          <p><strong>Tercih Edilen Saat:</strong> ${lead.preferredTime}</p>
          <p><strong>Not:</strong> ${lead.note || "—"}</p>
        </div>
      </div>
    `,
  });
}

export async function sendAdminNotification(
  user: UserInfo,
  result: TestResult,
  answers: Record<number, string>
): Promise<"resend" | "smtp" | null> {
  const adminEmail = getAdminEmail();

  if (!adminEmail) {
    console.warn("Admin email not configured. Skipping email send.");
    return null;
  }

  const breakdownText = Object.values(result.breakdown)
    .map((data) => `${data.label}: ${data.correct}/${data.total} doğru`)
    .join("\n");

  const bandProgressText = result.bandProgress
    .map(
      (band) =>
        `${band.level} (${band.label}): ${band.correct}/${band.total} — min. ${band.required}${band.passed ? " ✓" : ""}`
    )
    .join("\n");

  const levelInfo = levelDescriptions[result.level];

  /* Soru soru cevap detayı — girişte alınan tüm bilgilerle birlikte */
  const questionRows = placementQuestions
    .map((q) => {
      const userAnswer = answers[q.id];
      const blank = userAnswer === undefined || isBlankAnswer(userAnswer);
      const correct = !blank && userAnswer === q.correctAnswer;
      const status = blank
        ? '<span style="color:#94a3b8;font-weight:700;">BOŞ</span>'
        : correct
          ? '<span style="color:#10b981;font-weight:700;">DOĞRU ✓</span>'
          : '<span style="color:#ef4444;font-weight:700;">YANLIŞ ✗</span>';
      const userTxt = blank ? "—" : userAnswer;
      return `<tr style="border-bottom:1px solid #eef1f6;">
        <td style="padding:8px 10px;color:#0b1d3a;font-weight:600;">${q.id}</td>
        <td style="padding:8px 10px;color:#0b1d3a;">${userTxt}</td>
        <td style="padding:8px 10px;color:#0b1d3a;font-weight:600;">${q.correctAnswer}</td>
        <td style="padding:8px 10px;">${status}</td>
      </tr>`;
    })
    .join("");

  const wrongSummary =
    result.wrongAnswers.length > 0 || result.blankAnswers > 0
      ? [
          ...result.wrongAnswers.map(
            (w) =>
              `Soru ${w.questionId}: Verilen ${w.userAnswer}, Doğru ${w.correctAnswer}`
          ),
          ...(result.blankAnswers > 0
            ? [`Boş bırakılan soru sayısı: ${result.blankAnswers}`]
            : []),
        ].join("\n")
      : "Tüm cevaplar doğru.";

  return sendMail({
    to: adminEmail,
    subject: `Yeni Seviye Tespit Sınavı - ${user.name} (${result.level} / ${result.hubLabel})`,
    text: `
YENİ SEVİYE TESPİT SINAVI SONUCU
================================

Öğrenci Bilgileri:
- Ad Soyad: ${user.name}
- E-posta: ${user.email}
- Telefon: ${user.phone}

Sınav Sonucu:
- CEFR Seviyesi: ${result.level} - ${levelInfo.title}
- Language Hub Seviyesi: ${result.hubLabel}
- Doğru: ${result.correctAnswers}/${result.totalQuestions}
- Yanlış: ${result.incorrectAnswers}/${result.totalQuestions}
- Boş: ${result.blankAnswers}/${result.totalQuestions}
- Başarı Oranı: %${result.percentage}

Bölüm Dağılımı:
${breakdownText}

Band Geçiş Durumu:
${bandProgressText}

Yanlış Cevaplar:
${wrongSummary}

---
Bu e-posta Zreducation web sitesi seviye tespit sınavından otomatik gönderilmiştir.
    `,
    html: `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width: 640px; margin: 0 auto; background: #f4f6f9; border: 1px solid #e3e8ef; border-radius: 12px; overflow: hidden;">
        <div style="background: #0b1d3a; padding: 28px 32px; text-align: center;">
          <h1 style="color: #d4af37; margin: 0; font-size: 28px; letter-spacing: 2px;">ZREDUCATION</h1>
          <p style="color: #ffffff; margin: 8px 0 0; font-size: 15px;">Seviye Tespit Sınavı Sonucu</p>
        </div>

        <div style="padding: 28px 32px; background: #ffffff;">
          <h2 style="color: #0b1d3a; font-size: 18px; margin: 0 0 12px;">Öğrenci Bilgileri</h2>
          <table style="width:100%; border-collapse:collapse; font-size:14px;">
            <tr>
              <td style="padding:6px 0; color:#64748b; width:120px;">Ad Soyad</td>
              <td style="padding:6px 0; color:#0b1d3a; font-weight:600;">${user.name}</td>
            </tr>
            <tr>
              <td style="padding:6px 0; color:#64748b;">E-posta</td>
              <td style="padding:6px 0; color:#0b1d3a; font-weight:600;">${user.email}</td>
            </tr>
            <tr>
              <td style="padding:6px 0; color:#64748b;">Telefon</td>
              <td style="padding:6px 0; color:#0b1d3a; font-weight:600;">${user.phone}</td>
            </tr>
          </table>
        </div>

        <div style="padding: 24px 32px; background: #0b1d3a; text-align: center;">
          <div style="display:inline-block; background:#d4af37; color:#0b1d3a; font-size:32px; font-weight:bold; padding:14px 28px; border-radius:10px;">
            ${result.level}
          </div>
          <p style="color:#d4af37; margin:10px 0 0; font-size:16px; font-weight:600;">${result.hubLabel} — ${levelInfo.title}</p>
          <p style="color:#94a3b8; margin:6px 0 0; font-size:14px;">${levelInfo.description}</p>
        </div>

        <div style="padding: 24px 32px; background: #ffffff;">
          <table style="width:100%; border-collapse:collapse; text-align:center; font-size:14px;">
            <tr>
              <td style="background:#ecfdf5; border-radius:8px; padding:14px 8px;">
                <div style="font-size:24px; font-weight:bold; color:#10b981;">${result.correctAnswers}</div>
                <div style="color:#64748b; font-size:12px;">DOĞRU</div>
              </td>
              <td style="width:10px;"></td>
              <td style="background:#fef2f2; border-radius:8px; padding:14px 8px;">
                <div style="font-size:24px; font-weight:bold; color:#ef4444;">${result.incorrectAnswers}</div>
                <div style="color:#64748b; font-size:12px;">YANLIŞ</div>
              </td>
              <td style="width:10px;"></td>
              <td style="background:#f8fafc; border-radius:8px; padding:14px 8px;">
                <div style="font-size:24px; font-weight:bold; color:#94a3b8;">${result.blankAnswers}</div>
                <div style="color:#64748b; font-size:12px;">BOŞ</div>
              </td>
              <td style="width:10px;"></td>
              <td style="background:#fefce8; border-radius:8px; padding:14px 8px;">
                <div style="font-size:24px; font-weight:bold; color:#d4af37;">%${result.percentage}</div>
                <div style="color:#64748b; font-size:12px;">BAŞARI</div>
              </td>
            </tr>
          </table>
        </div>

        <div style="padding: 24px 32px; background: #ffffff; border-top: 1px solid #eef1f6;">
          <h3 style="color: #0b1d3a; font-size: 16px; margin: 0 0 10px;">Band Geçiş Durumu</h3>
          <table style="width:100%; border-collapse:collapse; font-size:13px;">
            ${result.bandProgress
              .map(
                (b) => `<tr style="border-bottom:1px solid #eef1f6;">
                  <td style="padding:8px 6px; color:#0b1d3a; font-weight:600;">${b.level}</td>
                  <td style="padding:8px 6px; color:#64748b;">${b.correct}/${b.total} (min. ${b.required})</td>
                  <td style="padding:8px 6px; text-align:right;">${b.passed ? '<span style="color:#10b981;font-weight:700;">✓ GEÇTİ</span>' : '<span style="color:#ef4444;font-weight:700;">KALDI</span>'}</td>
                </tr>`
              )
              .join("")}
          </table>
          <p style="color:#64748b; font-size:13px; margin:10px 0 0; white-space:pre-line;">${bandProgressText}</p>
        </div>

        <div style="padding: 24px 32px; background: #ffffff; border-top: 1px solid #eef1f6;">
          <h3 style="color: #0b1d3a; font-size: 16px; margin: 0 0 10px;">Program Önerisi</h3>
          <p style="color: #334155; font-size: 14px; line-height: 1.6; margin: 0;">${levelInfo.recommendation}</p>
        </div>

        <div style="padding: 24px 32px; background: #ffffff; border-top: 1px solid #eef1f6;">
          <h3 style="color: #0b1d3a; font-size: 16px; margin: 0 0 10px;">Soru Bazlı Cevap Detayı (${result.totalQuestions} soru)</h3>
          <table style="width:100%; border-collapse:collapse; font-size:13px;">
            <thead>
              <tr style="background:#f8fafc;">
                <th style="padding:8px 10px; text-align:left; color:#64748b;">Soru</th>
                <th style="padding:8px 10px; text-align:left; color:#64748b;">Cevabı</th>
                <th style="padding:8px 10px; text-align:left; color:#64748b;">Doğru</th>
                <th style="padding:8px 10px; text-align:left; color:#64748b;">Durum</th>
              </tr>
            </thead>
            <tbody>${questionRows}</tbody>
          </table>
        </div>

        <div style="padding: 20px 32px; background: #0b1d3a; text-align: center;">
          <p style="color:#94a3b8; font-size:12px; margin:0;">
            Bu e-posta Zreducation web sitesi seviye tespit sınavından otomatik gönderilmiştir.
            <br />Zreducation — Konuşma Odaklı İngilizce Eğitimi | Denizli
          </p>
        </div>
      </div>
    `,
  });
}
