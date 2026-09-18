import { NextRequest, NextResponse } from "next/server";
import { sendRegistrationNotification } from "@/lib/email";
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
    const program = cleanText(body?.program, 120) || "Belirtilmedi";
    const format = cleanText(body?.format, 120) || "Belirtilmedi";
    const targetLevel = cleanText(body?.targetLevel, 40) || "Belirtilmedi";
    const startPreference = cleanText(body?.startPreference, 120) || "Belirtilmedi";
    const message = cleanText(body?.message, 2000);

    if (!name || !email || !phone || !city) {
      return NextResponse.json(
        { error: "Ad, e-posta, telefon ve şehir bilgisi zorunludur" },
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
      await sendRegistrationNotification({
        name,
        email,
        phone,
        city,
        program,
        format,
        targetLevel,
        startPreference,
        message,
      });
    } catch (emailError) {
      console.error("Kayıt e-postası gönderim hatası:", emailError);
    }

    /* Admin paneli için kalıcı kayıt */
    await saveSubmission({
      type: "registration",
      name,
      email,
      phone,
      summary: `${program} · ${format} · ${city}`,
      data: { name, email, phone, city, program, format, targetLevel, startPreference, message },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Kayıt formu işleme hatası:", error);
    return NextResponse.json(
      { error: "Kayıt talebi işlenirken bir hata oluştu" },
      { status: 500 }
    );
  }
}