import { NextRequest, NextResponse } from "next/server";
import { calculateLevel, hasMinimumAnswers } from "@/lib/levelCalculator";
import { sendAdminNotification } from "@/lib/email";
import { saveSubmission } from "@/lib/submissions";
import { cleanText, isValidEmail, isValidPhone } from "@/lib/validation";
import { clientKey, isRateLimited, RATE } from "@/lib/rateLimit";

export async function POST(request: NextRequest) {
  try {
    if (isRateLimited(`exam:${clientKey(request)}`, RATE.exam.limit, RATE.exam.windowMs)) {
      return NextResponse.json(
        { error: "Çok fazla istek aldık. Lütfen bir dakika sonra tekrar deneyin." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const rawInfo = body?.userInfo ?? {};
    const userInfo = {
      name: cleanText(rawInfo.name, 120),
      email: cleanText(rawInfo.email, 120),
      phone: cleanText(rawInfo.phone, 24),
    };
    const answers: Record<number, string> =
      body?.answers && typeof body.answers === "object" ? body.answers : {};

    if (!userInfo.name || !userInfo.email || !userInfo.phone) {
      return NextResponse.json(
        { error: "Kullanıcı bilgileri eksik" },
        { status: 400 }
      );
    }
    if (!isValidEmail(userInfo.email)) {
      return NextResponse.json({ error: "Geçerli bir e-posta adresi girin" }, { status: 400 });
    }
    if (!isValidPhone(userInfo.phone)) {
      return NextResponse.json({ error: "Geçerli bir telefon numarası girin" }, { status: 400 });
    }
    if (!answers || !hasMinimumAnswers(answers)) {
      return NextResponse.json(
        { error: "Sınavı bitirmek için en az 1 soru cevaplanmalıdır" },
        { status: 400 }
      );
    }

    const result = calculateLevel(answers);

    let emailStatus: { ok: boolean; provider?: string | null; error?: string } = {
      ok: false,
      error: "gönderim yapılmadı",
    };

    try {
      const provider = await sendAdminNotification(userInfo, result, answers);
      emailStatus = { ok: true, provider };
    } catch (emailError) {
      emailStatus = {
        ok: false,
        error:
          emailError instanceof Error ? emailError.message : String(emailError),
      };
      console.error("Email gönderim hatası:", emailError);
    }

    /* Admin paneli için kalıcı kayıt (e-posta başarısız olsa da tutulur) */
    await saveSubmission({
      type: "exam",
      name: String(userInfo.name ?? ""),
      email: String(userInfo.email ?? ""),
      phone: String(userInfo.phone ?? ""),
      summary: `${result.level} · %${result.percentage} (${result.correctAnswers}/${result.totalQuestions} doğru)`,
      data: { userInfo, result, answers, emailStatus },
    });

    return NextResponse.json({ success: true, result, emailStatus });
  } catch (error) {
    console.error("Sınav işleme hatası:", error);
    return NextResponse.json(
      { error: "Sınav sonucu işlenirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
