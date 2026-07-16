import nodemailer from "nodemailer";
import type { TestResult } from "@/lib/levelCalculator";
import { levelDescriptions } from "@/data/placementQuestions";

interface UserInfo {
  name: string;
  email: string;
  phone: string;
}

export async function sendAdminNotification(
  user: UserInfo,
  result: TestResult,
  answers: Record<number, string>
): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;

  if (!adminEmail || !process.env.SMTP_USER) {
    console.warn("Email credentials not configured. Skipping email send.");
    return;
  }

  const answerDetails = Object.entries(answers)
    .map(([id, answer]) => `Soru ${id}: ${answer}`)
    .join("\n");

  const breakdownText = Object.entries(result.breakdown)
    .map(
      ([level, data]) =>
        `${level}: ${data.correct}/${data.total} doğru`
    )
    .join("\n");

  await transporter.sendMail({
    from: `"Zreducation Sınav Sistemi" <${process.env.SMTP_USER}>`,
    to: adminEmail,
    subject: `Yeni Seviye Tespit Sınavı - ${user.name} (${result.level})`,
    text: `
YENİ SEVİYE TESPİT SINAVI SONUCU
================================

Öğrenci Bilgileri:
- Ad Soyad: ${user.name}
- E-posta: ${user.email}
- Telefon: ${user.phone}

Sınav Sonucu:
- Seviye: ${result.level} - ${levelDescriptions[result.level].title}
- Doğru Cevap: ${result.correctAnswers}/${result.totalQuestions}
- Başarı Oranı: %${result.percentage}

Seviye Dağılımı:
${breakdownText}

Cevaplar:
${answerDetails}

---
Bu e-posta Zreducation web sitesi seviye tespit sınavından otomatik gönderilmiştir.
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0b1d3a; padding: 24px; text-align: center;">
          <h1 style="color: #d4af37; margin: 0;">Zreducation</h1>
          <p style="color: #fff; margin: 8px 0 0;">Seviye Tespit Sınavı Sonucu</p>
        </div>
        <div style="padding: 24px; background: #f7f8fa;">
          <h2 style="color: #0b1d3a;">Öğrenci Bilgileri</h2>
          <p><strong>Ad Soyad:</strong> ${user.name}</p>
          <p><strong>E-posta:</strong> ${user.email}</p>
          <p><strong>Telefon:</strong> ${user.phone}</p>
          
          <h2 style="color: #0b1d3a; margin-top: 24px;">Sınav Sonucu</h2>
          <div style="background: #0b1d3a; color: #d4af37; padding: 16px; border-radius: 8px; text-align: center; font-size: 24px; font-weight: bold;">
            ${result.level} - ${levelDescriptions[result.level].title}
          </div>
          <p style="margin-top: 16px;"><strong>Doğru:</strong> ${result.correctAnswers}/${result.totalQuestions} (%${result.percentage})</p>
          
          <h3 style="color: #0b1d3a;">Seviye Dağılımı</h3>
          <pre style="background: #fff; padding: 12px; border-radius: 4px;">${breakdownText}</pre>
        </div>
      </div>
    `,
  });
}
