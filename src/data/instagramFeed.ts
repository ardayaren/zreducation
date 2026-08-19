export interface InstagramFeedPost {
  id: string;
  postUrl: string;
  caption: string;
}

/**
 * Instagram paylaşımlarınızı (foto & reel) siteye eklemek için:
 * - Tarayıcıda Instagram'a girin, göndermek istediğiniz fotoğrafı/reel'i açın
 * - Adres çubuğundaki linki kopyalayıp aşağıdaki `postUrl` alanına yapıştırın
 * - Kopyaladığınız link `https://www.instagram.com/p/...` veya
 *   `https://www.instagram.com/reel/...` şeklinde olmalıdır
 *
 * Sayfa yüklendiğinde bu linkler oEmbed ile çözümlenir ve küçük resim
 * (thumbnail) otomatik olarak galeriye aktarılır. Kartlara tıklayınca
 * Instagram'daki orijinal paylaşıma gidilir.
 */
export const instagramFeedPosts: InstagramFeedPost[] = [
  // ÖRNEK — kendi paylaşım linklerinizle değiştirin:
  // {
  //   id: "ig-1",
  //   postUrl: "https://www.instagram.com/p/<KISA-KOD>/",
  //   caption: "Konuşma kulübü etkinliğimiz",
  // },
];

export const instagramProfileUrl = "https://www.instagram.com/zreducationn";
