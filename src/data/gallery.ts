export interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  caption: string;
  href?: string;
}

/**
 * Instagram görsellerini/videolarını güncellemek için:
 * - Görselleri `public/images/gallery/` klasörüne ekleyin (örn. ig-tips-1.jpg)
 * - Reels videolarını `public/images/gallery/reels/` klasörüne ekleyin (örn. reel-1.mp4)
 * - Aşağıdaki `src` alanlarını yeni dosya adlarıyla güncelleyin
 * - Video için `type: "video"` ve `src` olarak .mp4 dosya yolu kullanın
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "reel-1",
    type: "video",
    src: "/images/gallery/reels/reel-speaking-club.mp4",
    caption: "Konuşma kulübü — sınıfta susan öğrenci bırakmıyoruz",
  },
  {
    id: "tip-1",
    type: "image",
    src: "/images/gallery/ig-tips-1-didnt-catch.jpg",
    caption: "Günlük konuşma: “I didn’t catch you” — tekrar istemenin doğal yolu",
  },
  {
    id: "gallery-1",
    type: "image",
    src: "/images/english-classroom.jpg",
    caption: "Konuşma odaklı ders — her ders yarı yarıya speaking",
  },
  {
    id: "tip-2",
    type: "image",
    src: "/images/gallery/ig-tips-2-could-you-repeat.jpg",
    caption: "Kibarca tekrar isteme: “Could you say that again?”",
  },
  {
    id: "reel-2",
    type: "video",
    src: "/images/gallery/reels/reel-online-ders.mp4",
    caption: "Canlı online dersler ve 7/24 kayıt arşivi",
  },
  {
    id: "gallery-2",
    type: "image",
    src: "/images/group-class.jpg",
    caption: "Grup dersi (maks 8–10 kişi) — herkes her derste konuşur",
  },
  {
    id: "tip-3",
    type: "image",
    src: "/images/gallery/ig-tips-3-90gun.jpg",
    caption: "90 günde 0’dan akıcı konuşmaya — 3 ayda 90 ders",
  },
  {
    id: "gallery-3",
    type: "image",
    src: "/images/online-learning.jpg",
    caption: "Online canlı ders — Zoom & Teams",
  },
  {
    id: "reel-3",
    type: "video",
    src: "/images/gallery/reels/reel-basari.mp4",
    caption: "Öğrenci başarıları — konuşma odaklı ilerleme",
  },
  {
    id: "tip-4",
    type: "image",
    src: "/images/gallery/ig-tips-4-seviye.jpg",
    caption: "Seviyeni konuşarak öğren — iki aşamalı tespit",
  },
  {
    id: "gallery-4",
    type: "image",
    src: "/images/campus-classroom.jpg",
    caption: "Denizli Kınıklı merkez kampüs",
  },
  {
    id: "tip-5",
    type: "image",
    src: "/images/gallery/ig-tips-5-yoursay.jpg",
    caption: "Günlük konuşma: “It’s your call.”",
  },
  {
    id: "tip-6",
    type: "image",
    src: "/images/gallery/ig-tips-6-wouldyoumind.jpg",
    caption: "Kibar rica: “Would you mind…?”",
  },
  {
    id: "gallery-5",
    type: "image",
    src: "/images/exam-prep.jpg",
    caption: "IELTS / TOEFL deneme sınavı günü",
  },
];
