import { NextRequest, NextResponse } from "next/server";
import { sendRegistrationNotification } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, city, program, format, message } = body;

    if (!name || !email || !phone || !city) {
      return NextResponse.json(
        { error: "Ad, e-posta, telefon ve şehir bilgisi zorunludur" },
        { status: 400 }
      );
    }

    try {
      await sendRegistrationNotification({
        name,
        email,
        phone,
        city,
        program: program || "Belirtilmedi",
        format: format || "Belirtilmedi",
        message,
      });
    } catch (emailError) {
      console.error("Kayıt e-postası gönderim hatası:", emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Kayıt formu işleme hatası:", error);
    return NextResponse.json(
      { error: "Kayıt talebi işlenirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
