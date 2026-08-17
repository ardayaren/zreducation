import type { Metadata } from "next";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import ContactForm from "@/components/contact/ContactForm";

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
          Kayıt formuyla başvurunuzu bırakın; danışmanlarımız size en uygun
          programı önererek 7/24 WhatsApp veya arama ile dönsün.
          Denizli&apos;deyseniz sizi yüz yüze görüşme için kampüsümüze bekleriz.
        </p>
      </PageHero>
      <ContactForm />
    </PageLayout>
  );
}
