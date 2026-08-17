export interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  caption: string;
  href?: string;
}

/**
 * Instagram görsellerini/videolarını güncellemek için:
 * - Görselleri `public/images/gallery/` klasörüne ekleyin (örn. gallery-1.jpg)
 * - Reels videolarını `public/images/gallery/reels/` klasörüne ekleyin (örn. reel-1.mp4)
 * - Aşağıdaki `src` alanlarını yeni dosya adlarıyla güncelleyin
 * - Video için `type: "video"` ve `src` olarak .mp4 dosya yolu kullanın
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "reel-1",
    type: "video",
    src: "/images/gallery/reels/reel-speaking-club.mp4",
    caption: "Haftalık konuşma kulübü — sınıfta susan öğrenci bırakmıyoruz",
  },
  {
    id: "gallery-1",
    type: "image",
    src: "/images/english-classroom.jpg",
    caption: "Konuşma odaklı ders — her ders yarı yarıya speaking",
  },
  {
    id: "gallery-2",
    type: "image",
    src: "/images/group-class.jpg",
    caption: "Grup dersi (maks 8–10 kişi) — herkes her derste konuşur",
  },
  {
    id: "gallery-3",
    type: "image",
    src: "/images/online-learning.jpg",
    caption: "Online canlı ders — Zoom & Teams",
  },
  {
    id: "reel-2",
    type: "video",
    src: "/images/gallery/reels/reel-online-ders.mp4",
    caption: "Canlı online dersler ve 7/24 kayıt arşivi",
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
    id: "reel-3",
    type: "video",
    src: "/images/gallery/reels/reel-basari.mp4",
    caption: "3 ayda 90 derste sıfırdan akıcı konuşmaya — öğrenci başarıları",
  },
  {
    id: "gallery-6",
    type: "image",
    src: "/images/gallery/instagram-post-1.jpg",
    caption: "Instagram paylaşımımız — konuşma kulübü etkinliği",
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
  {
    id: "gallery-9",
    type: "image",
    src: "/images/harvard.jpg",
    caption: "Speaking sınavı ve danışmanlık görüşmeleri",
  },
];
