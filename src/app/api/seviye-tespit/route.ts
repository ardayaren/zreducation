import { NextRequest, NextResponse } from "next/server";
import { calculateLevel } from "@/lib/levelCalculator";
import { sendAdminNotification } from "@/lib/email";
import { placementQuestions } from "@/data/placementQuestions";

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

    const allQuestionsMarked = placementQuestions.every(
      (q) => q.id in answers
    );

    if (!answers || !allQuestionsMarked) {
      return NextResponse.json(
        { error: "Her soru için bir seçenek veya boş bırak işaretlenmelidir" },
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
