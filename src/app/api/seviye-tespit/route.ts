import { NextRequest, NextResponse } from "next/server";
import { calculateLevel, hasMinimumAnswers } from "@/lib/levelCalculator";
import { sendAdminNotification } from "@/lib/email";
import { saveSubmission } from "@/lib/submissions";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userInfo, answers } = body;

    if (!userInfo?.name || !userInfo?.email || !userInfo?.phone) {
      return NextResponse.json(
        { error: "Kullanıcı bilgileri eksik" },
        { status: 400 }
      );
    }

    if (!answers || !hasMinimumAnswers(answers)) {
      return NextResponse.json(
        { error: "Sınavı bitirmek için en az 1 soru cevaplanmalıdır" },
        { status: 400 }
      );
    }

    const result = calculateLevel(answers);

    try {
      await sendAdminNotification(userInfo, result, answers);
    } catch (emailError) {
      console.error("Email gönderim hatası:", emailError);
    }

    /* Admin paneli için kalıcı kayıt (e-posta başarısız olsa da tutulur) */
    await saveSubmission({
      type: "exam",
      name: String(userInfo.name ?? ""),
      email: String(userInfo.email ?? ""),
      phone: String(userInfo.phone ?? ""),
      summary: `${result.level} · %${result.percentage} (${result.correctAnswers}/${result.totalQuestions} doğru)`,
      data: { userInfo, result, answers },
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Sınav işleme hatası:", error);
    return NextResponse.json(
      { error: "Sınav sonucu işlenirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
