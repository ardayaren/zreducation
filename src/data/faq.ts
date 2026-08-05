export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    category: "Genel",
    items: [
      {
        question: "Zreducation nerede eğitim veriyor?",
        answer:
          "Merkezimiz Denizli Kınıklı'dadır. Yüz yüze dersler bu merkezde verilir; online derslere Türkiye'nin ve dünyanın her yerinden Zoom/Teams ile katılabilirsiniz.",
      },
      {
        question: "Size nasıl ulaşabilirim?",
        answer:
          "WhatsApp destek hattımız 7/24 açıktır — istediğiniz an yazabilirsiniz. Telefon ve ofis ziyaretleri için çalışma saatlerimiz Pazartesi–Cumartesi 09:00–19:00'dır.",
      },
      {
        question: "Seviye tespit sınavı ücretli mi?",
        answer:
          "Hayır, 70 soruluk Language Hub seviye tespit sınavımız tamamen ücretsizdir. Tüm soruları çözmeniz de gerekmez; istediğiniz an sınavı bitirebilirsiniz.",
      },
    ],
  },
  {
    category: "Eğitim Programları",
    items: [
      {
        question: "Neden konuşma odaklı bir yaklaşımınız var?",
        answer:
          "Türkiye'deki geleneksel gramer odaklı eğitimin aksine, hedefimiz öğrencilerin gerçek hayatta akıcı konuşabilmesidir. Derslerin en az yarısı konuşma pratiğine ayrılır; dinleme, okuma ve yazma becerileri bu öncelikle birlikte dengeli işlenir.",
      },
      {
        question: "'3 ayda 90 derste akıcı konuşma' ne anlama geliyor?",
        answer:
          "Yoğunlaştırılmış programımızda, düzenli katılımla yaklaşık 3 ay içinde 90 ders tamamlanır. Bu süreçte konuşma odaklı müfredatla temel seviyeden akıcı konuşmaya doğru somut ilerleme sağlanır. Kesin süre, başlangıç seviyenize ve devam sıklığınıza göre değişebilir.",
      },
      {
        question: "Birebir ders mi grup dersi mi seçmeliyim?",
        answer:
          "Hızlı ve kişiye özel ilerleme istiyorsanız birebir ders idealdir. Sosyal öğrenmeyi ve daha ekonomik bir seçeneği tercih ediyorsanız maksimum 8–10 kişilik grup dersleri uygundur. Danışmanlarımız seviye tespit sonrası size en uygun formatı önerir.",
      },
      {
        question: "Grup derslerinde sınıf mevcudu kaç kişi?",
        answer:
          "Tüm grup derslerimizde (online ve yüz yüze) sınıf mevcudu maksimum 8–10 kişidir. Bu sayede her öğrenci derste aktif olarak konuşma fırsatı bulur.",
      },
      {
        question: "Hangi sınavlara hazırlık desteği veriyorsunuz?",
        answer:
          "IELTS, TOEFL, YDS ve Cambridge sınavlarına yönelik yoğunlaştırılmış hazırlık programlarımız mevcuttur. Haftalık deneme sınavları ve birebir Writing/Speaking koçluğu programa dahildir.",
      },
    ],
  },
  {
    category: "Seviye Tespit Sınavı",
    items: [
      {
        question: "Sınav kaç sorudan oluşuyor, tamamını çözmem gerekiyor mu?",
        answer:
          "Sınavımız 70 sorudan oluşur ancak tamamını çözmeniz gerekmez. En az 1 soruyu cevapladıktan sonra 'Sınavı Bitir' diyerek sonucunuzu görebilirsiniz; barem kurallarına göre seviyeniz belirlenir.",
      },
      {
        question: "Seviye tespit sınavından sonra ne oluyor?",
        answer:
          "Yazılı sınav sonrası size özel CEFR seviyeniz ve program önerisi gösterilir. Ardından 15 dakikalık kısa bir speaking (konuşma) görüşmesi için Zoom veya Teams üzerinden randevu alarak sınavın ikinci ayağını tamamlayabilirsiniz.",
      },
      {
        question: "Speaking sınavı neden gerekli?",
        answer:
          "Yazılı test dil bilginizi ölçer, speaking görüşmesi ise konuşma akıcılığınızı ve pratik seviyenizi netleştirir. Böylece size en uygun grup veya birebir programı önerebiliyoruz.",
      },
    ],
  },
  {
    category: "Kayıt & Ödeme",
    items: [
      {
        question: "Nasıl kayıt olabilirim?",
        answer:
          "İletişim sayfamızdaki Kayıt Formu'nu doldurabilir veya doğrudan WhatsApp'tan yazabilirsiniz. Danışmanlarımız sizi arayarak süreci başlatır.",
      },
      {
        question: "Denizli dışında yaşıyorum, yüz yüze eğitime katılabilir miyim?",
        answer:
          "Yüz yüze dersler Denizli Kınıklı merkezimizde verilir. Farklı bir şehirde yaşıyorsanız online eğitim programlarımızla aynı kalitede derslere katılabilirsiniz. Kayıt formunda şehir bilginizi paylaşırsanız, Denizli'ye geldiğinizde yüz yüze görüşme fırsatını da değerlendirebiliriz.",
      },
      {
        question: "Kayıttan sonra ödeme nasıl yapılıyor?",
        answer:
          "Kayıt formunu doldurduğunuzda danışmanlarımız sizinle iletişime geçip ödeme seçeneklerini (banka havalesi, kapıda/ofiste ödeme vb.) ve güncel kampanya fiyatlarını paylaşır.",
      },
    ],
  },
  {
    category: "Yurt Dışı Danışmanlığı",
    items: [
      {
        question: "Hangi ülkelere danışmanlık veriyorsunuz?",
        answer:
          "Yalnızca İtalya ve Almanya'ya odaklanıyoruz. Bu sayede her iki ülkenin başvuru, vize ve yerleşim süreçlerinde uzmanlaşmış bir danışmanlık sunabiliyoruz.",
      },
      {
        question: "Yurt dışına gitmeden önce İngilizce seviyemi yükseltmem gerekiyor mu?",
        answer:
          "Hedef üniversiteye göre değişir; genellikle IELTS/TOEFL veya benzeri bir dil yeterliliği istenir. Önce eğitim planınızı ve dil seviyenizi netleştiriyor, ihtiyaç halinde İngilizce/Almanca hazırlık sürecini planlıyoruz.",
      },
    ],
  },
];
