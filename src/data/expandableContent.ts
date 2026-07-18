import type { ExpandableDetail } from "@/components/ui/ExpandablePanel";

export interface AccordionSection {
  heading: string;
  items: ExpandableDetail[];
}

export const serviceAccordionSections: Record<string, AccordionSection[]> = {
  "yurt-disi": [
    {
      heading: "Hizmet Kapsamı",
      items: [
        {
          title: "Üniversite & Bölüm Danışmanlığı",
          summary: "QS sıralaması ve kariyer hedefinize göre kişisel üniversite listesi.",
          content:
            "Akademik geçmişiniz, GPA/not ortalamanız ve kariyer planınız analiz edilerek 8–12 üniversitelik bir shortlist hazırlanır. Her seçenek için kabul şartları, burs imkânı ve mezuniyet sonrası istihdam verileri paylaşılır.",
          bullets: [
            "QS ve Times Higher Education sıralamalarına göre filtreleme",
            "Bölüm–kariyer uyumu analizi (mühendislik, işletme, sağlık vb.)",
            "Alternatif plan B ve plan C üniversite önerileri",
          ],
          related: "İngilizce Eğitimi — IELTS/TOEFL hazırlık programları ile başvuru şartlarını karşılama",
        },
        {
          title: "Başvuru Dosyası Hazırlığı",
          summary: "Essay, SOP, CV ve referans mektupları üniversite formatına uygun hazırlanır.",
          content:
            "Her üniversitenin farklı essay prompt'u ve kelime limiti vardır. Native speaker danışmanlarımız metinlerinizi hem dil hem içerik açısından kontrol eder. Ortalama 3 revizyon turu uygulanır.",
          bullets: [
            "Personal Statement / Statement of Purpose yazım desteği",
            "CV ve LinkedIn profili düzenleme",
            "2–3 akademik referans mektubu koordinasyonu",
          ],
          related: "Sınav Hazırlık — IELTS Writing modülü essay yapısına doğrudan katkı sağlar",
        },
        {
          title: "Vize & Evrak Yönetimi",
          summary: "Finansal belgeler, sigorta ve mülakat provası dahil tam vize dosyası.",
          content:
            "Ülkeye göre değişen vize gereksinimleri (Schengen tip D, blocked account vb.) takip edilir. Banka dökümü, sponsor mektubu ve sağlık sigortası belgeleri kontrol listesine göre hazırlanır.",
          bullets: [
            "Vize randevu planlaması ve belge kontrol listesi",
            "Mülakat simülasyonu (Almanya ve İtalya konsolosluk görüşmeleri)",
            "Red durumunda itiraz ve yeniden başvuru danışmanlığı",
          ],
          related: "Yüz Yüze Eğitim — Vize mülakatı için Speaking pratiği Denizli merkezde",
        },
        {
          title: "Yerleşim & Konaklama",
          summary: "Yurt, homestay veya paylaşımlı daire; havaalanı karşılama dahil.",
          content:
            "Üniversite yurtları, özel öğrenci yurtları ve aile yanı konaklama seçenekleri karşılaştırılır. Bütçe, ulaşım ve güvenlik kriterlerine göre en uygun seçenek önerilir.",
          bullets: [
            "Kampüs içi ve dışı konaklama karşılaştırması",
            "Havaalanı karşılama ve ilk hafta oryantasyon",
            "Banka hesabı, SIM kart ve ulaşım kartı kurulum desteği",
          ],
          related: "Online Eğitim — Yurt dışına gitmeden önce dil hazırlığı online alınabilir",
        },
      ],
    },
    {
      heading: "Kimler İçin Uygun?",
      items: [
        {
          title: "Lisans Adayları",
          summary: "Lise mezunu veya üniversite transfer öğrencileri.",
          content:
            "Foundation, pathway veya doğrudan lisans programları için başvuru desteği sunulur. Lise not ortalaması, AP/IB/A-Level sonuçları ve dil yeterliliği değerlendirilir.",
          bullets: [
            "12. sınıf öğrencileri için erken başvuru planlaması",
            "Transfer öğrencileri için kredi denklik süreci",
            "Pathway ve foundation programları rehberliği",
          ],
          related: "Seviye Tespit Sınavı — Dil yeterliliğinizi ücretsiz ölçün",
        },
        {
          title: "Yüksek Lisans & MBA Adayları",
          summary: "Kariyer değişikliği veya uzmanlaşma hedefleyen mezunlar.",
          content:
            "GRE/GMAT gereksinimleri, iş deneyimi ve akademik referanslar birlikte değerlendirilir. MBA programları için ek mülakat ve grup çalışması hazırlığı sunulur.",
          related: "İş İngilizcesi programı — Profesyonel CV ve mülakat hazırlığı",
        },
      ],
    },
  ],
  ingilizce: [
    {
      heading: "Program İçeriği",
      items: [
        {
          title: "CEFR Uyumlu Müfredat",
          summary: "A1–C2 tüm seviyelerde ölçülebilir kazanımlara dayalı dersler.",
          content:
            "Macmillan Language Hub kitapları ve dijital platformu temel alınır. Her ünite sonunda dört beceri değerlendirmesi yapılır; geçme notu %70'tir.",
          bullets: [
            "Seviye başına 48–96 saat ders planı",
            "Dijital workbook ve interaktif alıştırmalar",
            "Her 4 haftada bir ara sınav ve geri bildirim",
          ],
          related: "Seviye Tespit Sınavı — 70 soruluk Language Hub placement testi",
        },
        {
          title: "Dört Beceri Dengesi",
          summary: "Konuşma, dinleme, okuma ve yazma eşit ağırlıkta geliştirilir.",
          content:
            "Türkiye'deki geleneksel gramer odaklı eğitimin aksine, sınıfta %60 konuşma ve dinleme aktivitesi hedeflenir. Yazma ödevleri dijital platformdan takip edilir.",
          bullets: [
            "Pair work ve grup tartışmaları her derste",
            "Haftalık writing assignment ve eğitmen düzeltmesi",
            "Dinleme materyalleri: podcast, TED Talk, haber kaynakları",
          ],
          related: "Grup Dersleri — Konuşma pratiği için ideal format",
        },
        {
          title: "Sınav Hazırlık Modülleri",
          summary: "IELTS, TOEFL ve YDS için entegre veya ayrı hazırlık.",
          content:
            "Ana İngilizce programına ek modül olarak veya bağımsız yoğunlaştırılmış program olarak alınabilir. Deneme sınavları gerçek format ve süre koşullarında uygulanır.",
          related: "Sınav Hazırlık & Sertifika sayfası — Band 6.5 ortalama hedef",
        },
        {
          title: "Kişisel Öğrenme Planı",
          summary: "Zayıf alanlarınıza göre ek materyal ve birebir destek.",
          content:
            "Placement test ve ara sınav sonuçlarına göre her öğrenciye özel 'gelişim alanı' raporu çıkarılır. Grammar, vocabulary veya pronunciation için ek kaynaklar atanır.",
          related: "Online Eğitim — Birebir destek seansları online da alınabilir",
        },
      ],
    },
  ],
  online: [
    {
      heading: "Online Program Detayları",
      items: [
        {
          title: "Canlı İnteraktif Dersler",
          summary: "Zoom/Teams ile breakout room, quiz ve dijital tahta.",
          content:
            "Fiziksel sınıftaki pair work ve grup aktiviteleri online ortama uyarlanmıştır. Eğitmen her öğrenciyi ismiyle çağırarak aktif katılım sağlar.",
          bullets: [
            "Maksimum 6 kişilik online sınıflar",
            "Breakout room tartışmaları ve rol oyunları",
            "Anlık quiz ve kelime oyunları (Kahoot, Quizlet)",
          ],
          related: "Grup Dersleri — Yüz yüze alternatif; aynı müfredat",
        },
        {
          title: "Kayıt Arşivi & Platform",
          summary: "7/24 ders kaydı ve dijital ödev takip paneli.",
          content:
            "Her canlı ders otomatik kaydedilir ve 6 ay boyunca erişilebilir. Öğrenci panelinden ödev teslimi, not görüntüleme ve seviye testi yapılabilir.",
          bullets: [
            "Ders kayıtları seviye ve üniteye göre etiketlenir",
            "Ödev teslim hatırlatıcıları e-posta ve SMS ile",
            "Haftalık ilerleme grafiği ve eğitmen yorumu",
          ],
          related: "İngilizce Eğitimi — Language Hub dijital materyalleri dahil",
        },
        {
          title: "Esnek Program & Birebir",
          summary: "Sabah, öğle, akşam seansları; birebir veya 4 kişilik grup.",
          content:
            "Yoğun çalışanlar için 19:30–21:00 akşam grupları; yurt dışındaki öğrenciler için Avrupa saatine uygun seanslar mevcuttur. Birebir dersler tamamen kişisel takvime göre planlanır.",
          related: "Yüz Yüze Eğitim — Hibrit: online + haftada 1 kampüs ziyareti",
        },
      ],
    },
  ],
  grup: [
    {
      heading: "Grup Dersi Detayları",
      items: [
        {
          title: "Küçük Sınıf & Seviye Eşleştirmesi",
          summary: "Max 8 kişi; homojen seviye grupları.",
          content:
            "Placement test ve 10 dakikalık sözlü değerlendirme sonrası gruplar oluşturulur. Farklı seviyeden öğrenci aynı sınıfa alınmaz; bu sayede ders temposu verimli kalır.",
          related: "Seviye Tespit Sınavı — Doğru gruba yerleşmek için ilk adım",
        },
        {
          title: "Konuşma Kulübü & Projeler",
          summary: "Haftalık ücretsiz kulüp ve grup sunum projeleri.",
          content:
            "Ders dışında her Çarşamba 18:00'de konuşma kulübü düzenlenir. Ayda bir grup sunum projesi (poster, debate, mini-play) yapılır.",
          bullets: [
            "Native speaker eşliğinde debate oturumları",
            "Film gecesi ve kitap kulübü etkinlikleri",
            "Grup projelerinde peer feedback sistemi",
          ],
          related: "Yüz Yüze Eğitim — Kulüp oturumları Denizli merkezde",
        },
        {
          title: "Ekonomik Avantaj",
          summary: "Birebir'e kıyasla %35 tasarruf; aynı müfredat kalitesi.",
          content:
            "Grup derslerinde kişi başı saat ücreti birebir dersin yaklaşık üçte ikisidir. Kurumsal firmalar için 4–8 kişilik özel grup paketleri de sunulur.",
          related: "Online Eğitim — 4 kişilik online grup benzer fiyat avantajı",
        },
      ],
    },
  ],
  "yuz-yuze": [
    {
      heading: "Kampüs & Sınıf Detayları",
      items: [
        {
          title: "Denizli Kınıklı Merkez Kampüs",
          summary: "Denizli Merkez — ulaşımı kolay eğitim merkezi.",
          content:
            "Kınıklı, 6017. Sk. No:11 adresindeki merkezimiz 8 derslik, kütüphane, konuşma lounge ve danışmanlık ofislerinden oluşur. Pzt–Cmt 09:00–19:00 açıktır.",
          bullets: [
            "Denizli merkeze kolay ulaşım",
            "Ücretsiz çay–kahve ve çalışma alanı",
            "Engelli erişimine uygun tasarım",
          ],
          related: "Grup Dersleri — Tüm grup dersleri bu kampüste",
        },
        {
          title: "Akıllı Sınıf Teknolojisi",
          summary: "İnteraktif tahta, multimedya lab ve dijital ödev sistemi.",
          content:
            "Her sınıfta 75 inç interaktif tahta, kablosuz mikrofon ve öğrenci tablet entegrasyonu bulunur. Multimedya laboratuvarında podcast kaydı ve video çekimi yapılabilir.",
          related: "Online Eğitim — Kayıt arşivi kampüs derslerinden de beslenir",
        },
        {
          title: "Sertifika & Kurumsal Eğitim",
          summary: "CEFR bitirme sertifikası ve şirket içi eğitim paketleri.",
          content:
            "Seviye tamamlama sınavında %70 ve üzeri başarı gösteren öğrencilere CEFR uyumlu bitirme sertifikası verilir. Kurumsal firmalar için özel müfredat ve raporlama sunulur.",
          related: "Sınav Hazırlık — Kurumsal IELTS/TOEFL paketleri",
        },
      ],
    },
  ],
  sertifika: [
    {
      heading: "Sınav Hazırlık Detayları",
      items: [
        {
          title: "IELTS Academic & General",
          summary: "8–12 hafta; haftalık mock exam ve Writing koçluğu.",
          content:
            "Listening, Reading, Writing ve Speaking için ayrı strateji modülleri. Her hafta Cuma günü tam süre deneme sınavı uygulanır; sonuçlar band bazında raporlanır.",
          bullets: [
            "Writing Task 1 ve Task 2 birebir düzeltme",
            "Speaking mock interview (kayıtlı geri bildirim)",
            "Son 3 yıl ortalama band skoru: 6.5",
          ],
          related: "Yurt Dışı Eğitim — IELTS 6.5+ çoğu üniversite için yeterli",
        },
        {
          title: "TOEFL iBT",
          summary: "Integrated task stratejileri ve ETS format denemeleri.",
          content:
            "Reading passage analizi, Listening note-taking teknikleri ve Speaking independent/integrated görevler ayrı çalışılır. Hedef: 90–100+ puan.",
          related: "Yurt Dışı Eğitim — İtalya ve Almanya başvuruları için TOEFL",
        },
        {
          title: "YDS & İş İngilizcesi",
          summary: "Kamu personeli ve profesyoneller için özel modüller.",
          content:
            "YDS için kelime listeleri, cloze test teknikleri ve çeviri stratejileri. İş İngilizcesi modülünde toplantı, sunum, e-posta ve müzakere kalıpları öğretilir.",
          related: "Online Eğitim — Yoğun çalışanlar için akşam YDS grupları",
        },
      ],
    },
  ],
};

export const onlineProgramDetails: ExpandableDetail[] = [
  {
    title: "Canlı İnteraktif Dersler",
    summary: "Zoom ve Teams ile yüz yüze kalitesinde online ders.",
    content:
      "Eğitmenlerimiz online derslerde de aktif katılımı zorunlu kılar. Her öğrenci derste en az 2 kez söz alır; sessiz kalma yoktur.",
    bullets: [
      "Breakout room tartışmaları (3–4 kişilik alt gruplar)",
      "Dijital tahta ve ekran paylaşımı",
      "Anlık quiz ile anlama kontrolü",
    ],
    related: "Grup Dersleri — Aynı müfredat, yüz yüze format",
  },
  {
    title: "Kayıt Arşivi",
    summary: "Kaçırdığınız dersleri 7/24 tekrar izleyin.",
    content:
      "Tüm canlı dersler kaydedilir ve öğrenci paneline 24 saat içinde yüklenir. Kayıtlar 6 ay boyunca erişilebilir kalır.",
    related: "İngilizce Eğitimi — Language Hub dijital alıştırmaları da panelde",
  },
  {
    title: "Dijital Öğrenme Platformu",
    summary: "Ödev, test ve ilerleme takibi tek panelde.",
    content:
      "Öğrenci panelinde haftalık ödevler, kelime listeleri, seviye testleri ve eğitmen geri bildirimleri görüntülenir. Ebeveyn ve kurumsal müşteriler için rapor paylaşımı mümkündür.",
    related: "Seviye Tespit Sınavı — Online placement test panelden yapılır",
  },
  {
    title: "Birebir & Küçük Grup Online",
    summary: "4 kişilik grup veya birebir; esnek saatler.",
    content:
      "Yoğun iş temposundaki profesyoneller ve yurt dışındaki öğrenciler için idealdir. Ders saatleri öğrenci ve eğitmen takvimine göre belirlenir.",
    related: "Yüz Yüze Eğitim — Hibrit paket: online + ayda 2 kampüs dersi",
  },
  {
    title: "Esnek Ders Saatleri",
    summary: "Sabah, öğle ve akşam seansları; hafta sonu yoğun program.",
    content:
      "Hafta içi 09:00, 13:00 ve 19:30 seansları; Cumartesi 10:00 yoğunlaştırılmış program. Ramazan ve yaz döneminde özel saatler açılır.",
    related: "Grup Dersleri — Akşam grubuna geçiş mümkün",
  },
  {
    title: "Online Seviye Takibi",
    summary: "Her 4 haftada dijital test ve yazılı rapor.",
    content:
      "Language Hub dijital testleri ve eğitmen gözlemi birleştirilerek ilerleme raporu hazırlanır. Hedef seviyeye göre ek materyal önerilir.",
    related: "Seviye Tespit Sınavı — 70 soruluk ücretsiz başlangıç testi",
  },
];

export const yuzYuzeProgramDetails: ExpandableDetail[] = [
  {
    title: "Denizli Kınıklı Merkez Kampüs",
    summary: "Denizli Merkez — tam donanımlı eğitim alanı.",
    content:
      "Denizli Kınıklı'daki kampüsümüz 8 derslik, kütüphane, konuşma lounge ve danışmanlık ofislerinden oluşur. Öğrenciler ders aralarında ücretsiz çalışma alanını kullanabilir.",
    bullets: [
      "Kınıklı merkeze kolay ulaşım",
      "Pzt–Cmt 09:00–19:00 açık",
      "Ücretsiz Wi-Fi ve çay–kahve ikramı",
    ],
    related: "Grup Dersleri — Tüm grup dersleri bu kampüste yapılır",
  },
  {
    title: "Akıllı Sınıflar",
    summary: "İnteraktif tahta, kablosuz sunum ve multimedya lab.",
    content:
      "75 inç dokunmatik tahta, öğrenci mikrofon sistemi ve tablet entegrasyonu ile modern ders ortamı. Podcast ve video projeleri için ayrı lab mevcuttur.",
    related: "Online Eğitim — Kampüs dersleri kayıt arşivine eklenir",
  },
  {
    title: "Küçük Sınıflar",
    summary: "Maksimum 8 kişi; her öğrenci aktif konuşur.",
    content:
      "Sınıf mevcudu 8'i geçmez. Eğitmen her derste tüm öğrencileri ismiyle çağırır ve bireysel geri bildirim verir.",
    related: "Grup Dersleri — Aynı mevut politikası geçerli",
  },
  {
    title: "Konuşma Kulübü & Atölyeler",
    summary: "Haftalık debate, film gecesi ve sunum atölyeleri.",
    content:
      "Her Çarşamba 18:00 konuşma kulübü; ayda bir film gecesi ve debate turnuvası. Native speaker davetlilerle Q&A oturumları düzenlenir.",
    related: "İngilizce Eğitimi — Kulüp tüm seviye öğrencilerine açık",
  },
  {
    title: "Kütüphane & Çalışma Alanı",
    summary: "CEFR seviyesine göre kitap önerileri ve sessiz çalışma odası.",
    content:
      "200+ İngilizce kitap, dergi ve sınav hazırlık materyali. Sessiz çalışma odası ve grup çalışma alanları ayrılmıştır.",
    related: "Sınav Hazırlık — IELTS/TOEFL kaynak kitapları kütüphanede",
  },
  {
    title: "Sertifika Töreni",
    summary: "CEFR uyumlu bitirme sertifikası ve mezuniyet etkinliği.",
    content:
      "Seviye tamamlama sınavında başarılı olan öğrencilere yılda 2 kez düzenlenen törende sertifika verilir. LinkedIn'e eklenebilir dijital sertifika da sunulur.",
    related: "İngilizce Eğitimi — Sertifika CEFR standartlarına uygun",
  },
];

export const grupProgramDetails: ExpandableDetail[] = [
  {
    title: "Seviye Bazlı Gruplandırma",
    summary: "Placement test + sözlü değerlendirme ile homojen sınıflar.",
    content:
      "Language Hub placement testi ve 10 dakikalık sözlü görüşme sonrası gruplar belirlenir. Aynı seviyedeki öğrenciler bir arada eğitim alır.",
    related: "Seviye Tespit Sınavı — Ücretsiz online placement test",
  },
  {
    title: "Haftalık Program",
    summary: "3 veya 4 gün; sabah ve akşam grup seçenekleri.",
    content:
      "Standart program haftada 3 gün × 2 saat = 6 saat. Yoğun program 4 gün × 2 saat = 8 saat. Sabah 10:00 ve akşam 19:00 grupları mevcuttur.",
    related: "Online Eğitim — Aynı program online da sunulur",
  },
  {
    title: "Konuşma Odaklı Aktiviteler",
    summary: "Rol oyunu, tartışma ve simülasyon her derste.",
    content:
      "Derslerin %60'ı konuşma ve dinleme aktivitelerinden oluşur. Havaalanı, restoran, iş görüşmesi gibi senaryolar canlandırılır.",
    related: "Yüz Yüze Eğitim — Konuşma kulübü dersleri destekler",
  },
  {
    title: "Grup Projeleri",
    summary: "Aylık sunum, poster ve mini-debate projeleri.",
    content:
      "Her ay bir grup projesi tamamlanır: poster sunumu, debate veya kısa video projesi. Peer feedback ile öğrenciler birbirini değerlendirir.",
    related: "İngilizce Eğitimi — Proje notu seviye geçişine dahil",
  },
  {
    title: "Ekonomik Avantaj",
    summary: "Birebir'e kıyasla %35 tasarruf.",
    content:
      "Grup dersi saat ücreti birebir dersin yaklaşık %65'idir. 3 ay ve üzeri kayıtlarda ek %10 indirim uygulanır.",
    related: "Online Eğitim — 4 kişilik online grup benzer fiyat",
  },
  {
    title: "Sosyal Öğrenme Ortamı",
    summary: "Benzer hedefli öğrencilerle motivasyon ve ağ kurma.",
    content:
      "Grup derslerinde oluşan arkadaşlıklar konuşma kulübü ve sosyal etkinliklere taşınır. Mezun ağımıza otomatik dahil olursunuz.",
    related: "Yurt Dışı Eğitim — Grup arkadaşlarıyla yurt dışı başvurusu",
  },
];

export const yurtDisiCountryDetails: ExpandableDetail[] = [
  {
    title: "🇮🇹 İtalya",
    summary: "Politecnico Milano, Bologna, Sapienza — İngilizce master programları",
    content:
      "İtalya'da devlet üniversitelerinde düşük öğrenim ücreti ve zengin burs imkânları bulunur. Uni-Italia ve universitaly.it üzerinden pre-enrolment süreci yönetilir.",
    bullets: [
      "Dichiarazione di Valore / CIMEA denklik",
      "Burs: DSU, Invest Your Talent in Italy",
      "İngilizce ve İtalyanca program seçenekleri",
      "Konaklama: DSU yurtları ve özel yurt",
    ],
    related: "Online Eğitim — İtalya başvurusu öncesi B2 hazırlık",
  },
  {
    title: "🇩🇪 Almanya",
    summary: "TU Munich, LMU, Heidelberg — Düşük öğrenim ücreti",
    content:
      "Almanya devlet üniversitelerinde dönemlik harç 150–350 € civarındadır. Uni-Assist başvurusu, blocked account ve vize süreci danışmanlarımız tarafından yönetilir.",
    bullets: [
      "Uni-Assist ve doğrudan başvuru koordinasyonu",
      "Blocked account (Sperrkonto) açılış desteği",
      "TestAS ve APS (gerekli durumlarda)",
      "Studienkolleg ve pathway programları",
    ],
    related: "Yüz Yüze Eğitim — Denizli merkezde Almanca/İngilizce hazırlık",
  },
];

export const yurtDisiProgramDetails: ExpandableDetail[] = [
  {
    title: "Lisans Programları (Undergraduate)",
    summary: "3–4 yıllık lisans; foundation veya doğrudan başvuru.",
    content:
      "Lise mezunları ve transfer öğrencileri için lisans başvurusu desteği. GPA, dil skoru ve ek sınav gereksinimleri ülkeye göre değerlendirilir.",
    related: "Seviye Tespit Sınavı — Dil yeterliliğinizi ölçün",
  },
  {
    title: "Yüksek Lisans (Master's)",
    summary: "1–2 yıllık master; GRE/GMAT ve iş deneyimi değerlendirmesi.",
    content:
      "Akademik ve profesyonel geçmişinize göre program eşleştirmesi yapılır. MBA, MSc ve MA programları için ayrı essay stratejileri uygulanır.",
    related: "İş İngilizcesi — Profesyonel CV ve mülakat hazırlığı",
  },
  {
    title: "Doktora Programları (PhD)",
    summary: "Araştırma önerisi, supervisor eşleştirmesi ve fon başvurusu.",
    content:
      "PhD başvurularında research proposal ve akademik yayın geçmişi kritiktir. Supervisor ile ön görüşme koordinasyonu sağlanır.",
    related: "İngilizce Eğitimi — C1/C2 akademik yazım modülleri",
  },
  {
    title: "Dil Okulu & Pathway",
    summary: "Üniversite öncesi dil hazırlığı ve pathway programları.",
    content:
      "Dil yeterliliği yetersiz öğrenciler için 12–24 haftalık dil okulu veya pathway yılları organize edilir. Başarılı tamamlama sonrası doğrudan lisans geçişi sağlanır.",
    related: "Grup Dersleri — Yoğun İngilizce hazırlık programı",
  },
  {
    title: "Yaz Okulu Programları",
    summary: "4–8 haftalık yaz dönemi dil ve kültür programları.",
    content:
      "Lise ve üniversite öğrencileri için İtalya ve Almanya'da yaz okulu seçenekleri. Konaklama ve sosyal aktivite paketleri dahildir.",
    related: "Yüz Yüze Eğitim — Yaz öncesi hazırlık dersleri",
  },
  {
    title: "Staj & Erasmus+",
    summary: "Yaz dönemi staj ve Erasmus+ programları.",
    content:
      "İtalya ve Almanya'da sektörel staj yerleştirmeleri ve Erasmus+ staj programları. CV ve mülakat hazırlığı dahil tam destek sunulur.",
    related: "İş İngilizcesi — Staj mülakatı hazırlığı",
  },
];

export const yurtDisiProcessDetails: ExpandableDetail[] = [
  {
    title: "1. Danışmanlık & Planlama",
    summary: "Ücretsiz ilk görüşme; kişisel ülke–üniversite shortlist'i.",
    content:
      "Akademik geçmiş, bütçe ve kariyer hedefleriniz analiz edilir. 8–12 üniversitelik shortlist ve zaman çizelgesi hazırlanır.",
    bullets: [
      "GPA ve sınav skoru değerlendirmesi",
      "Burs ve finansal planlama",
      "Alternatif ülke ve program önerileri",
    ],
    related: "İletişim — Ücretsiz randevu alın",
  },
  {
    title: "2. Başvuru Hazırlığı",
    summary: "Essay, CV, referans ve portfolyo hazırlığı.",
    content:
      "Her belge üniversite formatına uyarlanır ve native danışman kontrolünden geçer. Ortalama 3 revizyon turu uygulanır.",
    related: "İngilizce Eğitimi — Akademik yazım modülleri",
  },
  {
    title: "3. Kabul & Kayıt",
    summary: "Online başvuru takibi ve kabul mektubu sonrası kayıt.",
    content:
      "Uni-Assist, Uni-Italia ve universitaly.it platformlarında başvuru takibi yapılır. Ek belge talepleri ve burs başvuruları koordine edilir.",
    related: "Yurt Dışı Eğitim — Partner üniversite ağı",
  },
  {
    title: "4. Vize Süreci",
    summary: "Finansal belgeler, sigorta ve mülakat provası.",
    content:
      "Ülkeye özel vize dosyası hazırlanır. Banka dökümü, sponsor mektubu ve sağlık sigortası kontrol listesine göre düzenlenir.",
    bullets: [
      "Vize randevu planlaması",
      "Mülakat simülasyonu (Almanya ve İtalya konsolosluk görüşmeleri)",
      "Red durumunda itiraz danışmanlığı",
    ],
    related: "Yüz Yüze Eğitim — Vize mülakatı Speaking pratiği",
  },
  {
    title: "5. Yerleşim Desteği",
    summary: "Konaklama, havaalanı karşılama ve ilk hafta oryantasyon.",
    content:
      "Yurt, homestay veya paylaşımlı daire seçenekleri karşılaştırılır. Varış günü havaalanı karşılama ve SIM kart, banka hesabı kurulum desteği sunulur.",
    related: "Online Eğitim — Gitmeden önce dil hazırlığı",
  },
  {
    title: "6. Sürekli Destek",
    summary: "Varış sonrası WhatsApp hattı ve aylık check-in.",
    content:
      "Yurt dışına vardıktan sonra da yanınızdayız. Akademik sorunlar, konaklama değişikliği ve mezuniyet sonrası kariyer danışmanlığı sunulur.",
    related: "Hakkımızda — Uzman danışman kadromuz",
  },
];

export const ingilizceLevelDetails: ExpandableDetail[] = [
  {
    title: "A1 — Başlangıç",
    summary: "Tanışma, sayılar, günlük rutinler — 48 saatlik program.",
    content:
      "Sıfırdan başlayanlar için temel kelime ve kalıp cümleler öğretilir. Program sonunda basit soru–cevap ve tanışma diyalogları kurabilirsiniz.",
    bullets: [
      "Alfabe, sayılar, renkler ve günler",
      "Present Simple ile günlük rutin anlatımı",
      "Temel dinleme: yavaş tempolu diyaloglar",
    ],
    related: "Seviye Tespit Sınavı — Doğru seviyeyi belirleyin",
  },
  {
    title: "A2 — Temel",
    summary: "Alışveriş, yol tarifi, geçmiş zaman — 48 saatlik program.",
    content:
      "Günlük yaşamda bağımsız iletişim hedeflenir. Past Simple ve temel gelecek zaman kalıpları çalışılır.",
    bullets: [
      "Seyahat ve restoran senaryoları",
      "Kısa e-posta ve mesaj yazımı",
      "Basit okuma parçaları ve anlama",
    ],
    related: "Grup Dersleri — Konuşma pratiği için ideal",
  },
  {
    title: "B1 — Orta Alt",
    summary: "İş görüşmeleri, deneyim anlatımı — 72 saatlik program.",
    content:
      "Orta düzey metinleri anlama ve yazma becerisi kazandırılır. Present Perfect ve koşul cümleleri derinleştirilir.",
    bullets: [
      "İş görüşmesi rol oyunları",
      "Görüş bildirme ve tartışma kalıpları",
      "Orta düzey okuma ve paragraf yazımı",
    ],
    related: "Yurt Dışı Eğitim — B1+ üniversite hazırlık atlama",
  },
  {
    title: "B2 — Orta Üst",
    summary: "Akademik sunum, tartışma — IELTS 6.0+ hedefi.",
    content:
      "Üniversite hazırlık atlama ve IELTS 6.0+ hedefleyenler için tasarlandı. Karmaşık metin analizi ve argüman geliştirme çalışılır.",
    bullets: [
      "Akademik sunum ve poster hazırlığı",
      "Passive voice ve report yazımı",
      "IELTS Reading ve Writing giriş modülleri",
    ],
    related: "Sınav Hazırlık — IELTS hazırlık programı",
  },
  {
    title: "C1 — İleri",
    summary: "Akademik makale, profesyonel rapor — IELTS 7.0+ hedefi.",
    content:
      "Yüksek lisans başvuruları ve profesyonel kariyer için ileri düzey program. Nüanslı ifade ve akademik yazım odaklıdır.",
    bullets: [
      "Essay ve research summary yazımı",
      "Debate ve panel tartışmaları",
      "İleri dinleme: TED Talk, podcast analizi",
    ],
    related: "Yurt Dışı Eğitim — Master başvuruları için C1 hedef",
  },
  {
    title: "C2 — Uzman",
    summary: "Anadile yakın akıcılık — akademik yayın dili.",
    content:
      "Doktora, hakemli dergi ve üst düzey iş İngilizcesi için en üst seviye program. Edebi metin analizi ve stilistik nüanslar çalışılır.",
    related: "Sınav Hazırlık — IELTS 8.0+ ve Cambridge CPE",
  },
];

export const ingilizceExamDetails: ExpandableDetail[] = [
  {
    title: "IELTS Hazırlık",
    summary: "8–12 hafta — Academic & General; hedef Band 6.5–7.5",
    content:
      "Listening, Reading, Writing ve Speaking için ayrı strateji modülleri. Her hafta Cuma günü tam süre deneme sınavı uygulanır.",
    bullets: [
      "Writing Task 1 ve Task 2 birebir düzeltme",
      "Speaking mock interview (kayıtlı geri bildirim)",
      "Son 3 yıl ortalama band skoru: 6.5",
    ],
    related: "Yurt Dışı Eğitim — IELTS 6.5+ çoğu üniversite için yeterli",
  },
  {
    title: "TOEFL iBT Hazırlık",
    summary: "8–12 hafta — Integrated task stratejileri; hedef 90–100+",
    content:
      "Reading passage analizi, Listening note-taking ve Speaking independent/integrated görevler ayrı çalışılır.",
    bullets: [
      "ETS formatında deneme sınavları",
      "Integrated writing ve speaking pratiği",
      "Zaman yönetimi atölyeleri",
    ],
    related: "Yurt Dışı Eğitim — İtalya ve Almanya başvuruları",
  },
  {
    title: "YDS Hazırlık",
    summary: "10–14 hafta — Kamu personeline özel; hedef 80+",
    content:
      "Kelime listeleri, cloze test stratejileri ve çeviri teknikleri. Haftalık deneme ve bölüm bazlı analiz raporu sunulur.",
    related: "Online Eğitim — Yoğun çalışanlar için akşam YDS grupları",
  },
  {
    title: "İş İngilizcesi",
    summary: "6–8 hafta — Toplantı, sunum, e-posta ve müzakere",
    content:
      "Sektöre özel modüller: finans, IT, sağlık. Gerçek iş senaryoları ve rol oyunlarıyla profesyonel iletişim geliştirilir.",
    bullets: [
      "Toplantı yönetimi ve sunum teknikleri",
      "Profesyonel e-posta ve rapor yazımı",
      "Müzakere ve networking kalıpları",
    ],
    related: "Yüz Yüze Eğitim — Kurumsal şirket içi eğitim paketleri",
  },
];

export const ingilizceMethodDetails: ExpandableDetail[] = [
  {
    title: "İletişim Odaklı Öğretim (CLT)",
    summary: "Öğrenci merkezli; ezber yerine kullanım odaklı dersler.",
    content:
      "Communicative Language Teaching yaklaşımıyla öğrenciler derste aktif konuşur. Gramer kuralları bağlam içinde, iletişim ihtiyacı doğduğunda öğretilir.",
    related: "Grup Dersleri — CLT'nin en verimli uygulandığı format",
  },
  {
    title: "Gerçek Hayat Senaryoları",
    summary: "Havaalanı, iş görüşmesi, üniversite sunumu canlandırmaları.",
    content:
      "Derslerde gerçek durumlar simüle edilir: check-in, iş mülakatı, akademik poster sunumu. Öğrenciler rol kartlarıyla farklı perspektiflerden pratik yapar.",
    related: "Yurt Dışı Eğitim — Üniversite mülakatı hazırlığı",
  },
  {
    title: "Multimedya Materyaller",
    summary: "Podcast, video, interaktif quiz ve dijital okuma metinleri.",
    content:
      "Language Hub dijital platformu ve harici kaynaklar (BBC Learning English, TED-Ed) derslere entegre edilir. Dört beceri multimedya ile desteklenir.",
    related: "Online Eğitim — Dijital materyallere 7/24 erişim",
  },
  {
    title: "Konuşma Kulüpleri",
    summary: "Haftalık ücretsiz kulüp; native speaker eşliğinde debate.",
    content:
      "Her Çarşamba 18:00'de konuşma kulübü düzenlenir. Tüm seviye öğrencilerine açıktır; ders dışı pratik fırsatı sunar.",
    related: "Yüz Yüze Eğitim — Kulüp oturumları Denizli merkezde",
  },
  {
    title: "Kişisel Öğrenme Planı",
    summary: "Placement test sonuçlarına göre zayıf alanlara özel materyal.",
    content:
      "Her öğrenciye 'gelişim alanı' raporu çıkarılır. Grammar, vocabulary veya pronunciation için ek kaynaklar ve birebir destek seansları planlanır.",
    related: "Seviye Tespit Sınavı — 70 soruluk Language Hub testi",
  },
  {
    title: "İlerleme Raporları",
    summary: "Her 4 haftada yazılı gelişim raporu ve ebeveyn paylaşımı.",
    content:
      "Dört beceri bazında puanlama ve eğitmen yorumu içeren rapor hazırlanır. Kurumsal müşteriler için toplu raporlama da sunulur.",
    related: "Online Eğitim — Dijital panelden rapor görüntüleme",
  },
];

export const hakkimizdaValueDetails: ExpandableDetail[] = [
  {
    title: "Misyonumuz",
    summary: "Her öğrencinin potansiyelini uluslararası standartlarda ortaya çıkarmak.",
    content:
      "Yurt dışı eğitim hayallerini gerçekleştirmek ve İngilizce yeterliliğini CEFR standartlarında sağlamak temel misyonumuzdur. Her öğrenciye kişisel yol haritası sunuyoruz.",
    bullets: [
      "Ücretsiz ilk danışmanlık ve seviye tespit",
      "Şeffaf süreç ve gerçekçi beklenti yönetimi",
      "Mezuniyet sonrası kariyer desteği",
    ],
    related: "Hizmetlerimiz — Tüm eğitim ve danışmanlık portföyü",
  },
  {
    title: "Vizyonumuz",
    summary: "Türkiye'nin en güvenilir eğitim danışmanlık kurumu olmak.",
    content:
      "Global eğitim standartlarını yerel erişilebilirlikle buluşturarak, her öğrencinin dünya standartlarında eğitime ulaşmasını sağlamayı hedefliyoruz.",
    related: "Yurt Dışı Eğitim — İtalya & Almanya partner ağı",
  },
  {
    title: "Değerlerimiz",
    summary: "Şeffaflık, güvenilirlik, öğrenci odaklılık ve sürekli gelişim.",
    content:
      "Uluslararası kalite standartlarına bağlılık temel değerimizdir. Sözleşme şartları, ücretler ve süreç adımları baştan netleştirilir; gizli maliyet yoktur.",
    bullets: [
      "Öğrenci memnuniyet oranı: %94",
      "CEFR ve Language Hub müfredat uyumu",
      "Sürekli eğitmen gelişim programları",
    ],
    related: "İngilizce Eğitimi — CEFR uyumlu programlar",
  },
];

export const hakkimizdaTeamDetails: ExpandableDetail[] = [
  {
    title: "Dr. Ayşe Yıldız — Kurucu & Genel Müdür",
    summary: "Eğitim Yönetimi — 15+ yıl sektör deneyimi",
    content:
      "Pamukkale Üniversitesi Eğitim Bilimleri doktorası. 2009'da Zreducation'ı Denizli'de kurdu; kurumsal strateji ve kalite standartlarından sorumlu.",
    related: "Hakkımızda — 2009'dan bu yana eğitim yolculuğu",
  },
  {
    title: "James Mitchell — Akademik Direktör",
    summary: "İngilizce Eğitimi — DELTA ve CELTA sertifikalı",
    content:
      "Cambridge DELTA ve CELTA sahibi native eğitmen. Müfredat geliştirme, eğitmen eğitimi ve kalite denetiminden sorumlu.",
    related: "İngilizce Eğitimi — Language Hub müfredat yönetimi",
  },
  {
    title: "Mehmet Arslan — Yurt Dışı Eğitim Müdürü",
    summary: "Üniversite Danışmanlığı — İtalya & Almanya uzmanı",
    content:
      "500+ başarılı yerleştirme. Uni-Assist, Uni-Italia ve universitaly.it süreçlerinde uzman. Burs ve finansal planlama danışmanlığı sunar.",
    related: "Yurt Dışı Eğitim — Ücretsiz danışmanlık randevusu",
  },
  {
    title: "Sarah Johnson — IELTS Koordinatörü",
    summary: "Sınav Hazırlık — IELTS examiner geçmişi",
    content:
      "Eski IELTS examiner; Writing ve Speaking koçluğunda uzman. Son 3 yılda öğrencilerinin ortalama band skoru 6.5.",
    related: "Sınav Hazırlık — IELTS programı",
  },
  {
    title: "Elif Korkmaz — Online Eğitim Sorumlusu",
    summary: "Dijital Öğrenme — LMS ve platform yönetimi",
    content:
      "Online ders platformu, kayıt arşivi ve öğrenci paneli yönetiminden sorumlu. Zoom/Teams entegrasyonu ve teknik destek sağlar.",
    related: "Online Eğitim — Canlı dersler ve dijital platform",
  },
  {
    title: "Can Demirtaş — Öğrenci İşleri Müdürü",
    summary: "Öğrenci Destek — Kayıt, devam ve sertifika süreçleri",
    content:
      "Kayıt, devam takibi, sertifika töreni ve öğrenci şikâyet/geri bildirim süreçlerini yönetir. WhatsApp destek hattı koordinatörü.",
    related: "İletişim — Öğrenci destek hattı",
  },
];
