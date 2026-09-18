import type { Metadata } from "next";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import ContactForm from "@/components/contact/ContactForm";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/ui/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "İletişim",
  description:
    "Zreducation ile iletişime geçin. Randevu alın, sorularınızı iletin.",
  path: "/iletisim",
});

export default function IletisimPage() {
  return (
    <PageLayout>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": `${siteConfig.url}/#contact`,
          name: "İletişim — Zreducation",
          url: `${siteConfig.url}/iletisim`,
          mainEntity: { "@id": `${siteConfig.url}/#organization` },
        }}
      />
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
