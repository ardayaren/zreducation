import { NextRequest, NextResponse } from "next/server";
import { sendSpeakingBookingNotification } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      city,
      cefrLevel,
      platform,
      preferredDay,
      preferredTime,
      note,
    } = body;

    if (!name || !email || !phone || !preferredDay || !preferredTime) {
      return NextResponse.json(
        { error: "Ad, e-posta, telefon ve randevu tercihi zorunludur" },
        { status: 400 }
      );
    }

    try {
      await sendSpeakingBookingNotification({
        name,
        email,
        phone,
        city: city || "Belirtilmedi",
        cefrLevel,
        platform: platform || "Zoom",
        preferredDay,
        preferredTime,
        note,
      });
    } catch (emailError) {
      console.error("Randevu e-postası gönderim hatası:", emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Speaking randevu işleme hatası:", error);
    return NextResponse.json(
      { error: "Randevu talebi işlenirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
