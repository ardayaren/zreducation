export interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  caption: string;
  href?: string;
}

/**
 * Instagram görsellerini/videolarını güncellemek için:
 * - Görselleri `public/images/gallery/` klasörüne ekleyin (örn. gallery-1.jpg, reel-1.mp4)
 * - Aşağıdaki `src` alanlarını yeni dosya adlarıyla güncelleyin
 * - Video için `type: "video"` ve `src` olarak .mp4 dosya yolu kullanın
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    type: "image",
    src: "/images/english-classroom.jpg",
    caption: "Konuşma kulübü — haftalık canlı pratik",
  },
  {
    id: "gallery-2",
    type: "image",
    src: "/images/group-class.jpg",
    caption: "Grup dersi (maks 8–10 kişi)",
  },
  {
    id: "gallery-3",
    type: "image",
    src: "/images/online-learning.jpg",
    caption: "Online canlı ders — Zoom & Teams",
  },
  {
    id: "gallery-4",
    type: "image",
    src: "/images/campus-classroom.jpg",
    caption: "Denizli Kınıklı merkez kampüs",
  },
  {
    id: "gallery-5",
    type: "image",
    src: "/images/exam-prep.jpg",
    caption: "IELTS / TOEFL deneme sınavı günü",
  },
  {
    id: "gallery-6",
    type: "image",
    src: "/images/harvard.jpg",
    caption: "İtalya & Almanya danışmanlık görüşmesi",
  },
  {
    id: "gallery-7",
    type: "image",
    src: "/images/english-classroom.jpg",
    caption: "Sertifika töreni",
  },
  {
    id: "gallery-8",
    type: "image",
    src: "/images/group-class.jpg",
    caption: "Öğrenci buluşması & sosyal etkinlik",
  },
];
