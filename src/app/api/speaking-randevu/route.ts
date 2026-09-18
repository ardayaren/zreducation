import { NextRequest, NextResponse } from "next/server";
import { sendSpeakingBookingNotification } from "@/lib/email";
import { saveSubmission } from "@/lib/submissions";
import { cleanText, isValidEmail, isValidPhone } from "@/lib/validation";
import { clientKey, isRateLimited, RATE } from "@/lib/rateLimit";

export async function POST(request: NextRequest) {
  try {
    if (isRateLimited(`form:${clientKey(request)}`, RATE.forms.limit, RATE.forms.windowMs)) {
      return NextResponse.json(
        { error: "Çok fazla istek aldık. Lütfen bir dakika sonra tekrar deneyin." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const name = cleanText(body?.name, 120);
    const email = cleanText(body?.email, 120);
    const phone = cleanText(body?.phone, 24);
    const city = cleanText(body?.city, 80);
    const cefrLevel = cleanText(body?.cefrLevel, 20);
    const platform = cleanText(body?.platform, 40) || "Zoom";
    const preferredDay = cleanText(body?.preferredDay, 20);
    const preferredTime = cleanText(body?.preferredTime, 20);
    const note = cleanText(body?.note, 1000);

    if (!name || !email || !phone || !preferredDay || !preferredTime) {
      return NextResponse.json(
        { error: "Ad, e-posta, telefon ve randevu tercihi zorunludur" },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Geçerli bir e-posta adresi girin" }, { status: 400 });
    }
    if (!isValidPhone(phone)) {
      return NextResponse.json({ error: "Geçerli bir telefon numarası girin" }, { status: 400 });
    }

    try {
      await sendSpeakingBookingNotification({
        name,
        email,
        phone,
        city: city || "Belirtilmedi",
        cefrLevel,
        platform,
        preferredDay,
        preferredTime,
        note,
      });
    } catch (emailError) {
      console.error("Randevu e-postası gönderim hatası:", emailError);
    }

    /* Admin paneli için kalıcı kayıt */
    await saveSubmission({
      type: "speaking",
      name,
      email,
      phone,
      summary: `${preferredDay} ${preferredTime} · ${platform}${cefrLevel ? ` · ${cefrLevel}` : ""}`,
      data: { name, email, phone, city, cefrLevel, platform, preferredDay, preferredTime, note },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Speaking randevu işleme hatası:", error);
    return NextResponse.json(
      { error: "Randevu talebi işlenirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
