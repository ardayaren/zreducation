import { NextRequest, NextResponse } from "next/server";
import { calculateLevel, hasMinimumAnswers } from "@/lib/levelCalculator";
import { sendAdminNotification } from "@/lib/email";

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
        { error: "Sınavı bitirmek için en az 6 soru cevaplanmalıdır" },
        { status: 400 }
      );
    }

    const result = calculateLevel(answers);

    try {
      await sendAdminNotification(userInfo, result, answers);
    } catch (emailError) {
      console.error("Email gönderim hatası:", emailError);
    }

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Sınav işleme hatası:", error);
    return NextResponse.json(
      { error: "Sınav sonucu işlenirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
