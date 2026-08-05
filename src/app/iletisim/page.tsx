import type { Metadata } from "next";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import ContactForm from "@/components/contact/ContactForm";
import { contactInfo } from "@/data/contact";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Zreducation ile iletişime geçin. Randevu alın, sorularınızı iletin.",
};

export default function IletisimPage() {
  return (
    <PageLayout>
      <PageHero title="İletişim" subtitle="Bize Ulaşın">
        <p>
          Sorularınız, randevu talepleriniz veya danışmanlık istekleriniz için
          bizimle iletişime geçin. Kurucumuz {contactInfo.founder.name} ve
          ekibi, WhatsApp destek hattımızdan 7/24 sorularınızı yanıtlamaya
          hazır.
        </p>
      </PageHero>
      <ContactForm />
    </PageLayout>
  );
}
