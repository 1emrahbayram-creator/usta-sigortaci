export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readMinutes: number;
  metaDescription: string;
  keywords: string[];
  sections: { h?: string; p: string[] }[];
};

export const posts: BlogPost[] = [
  {
    slug: "kasko-fiyatlari-neye-gore-belirlenir",
    title: "Kasko Fiyatları Neye Göre Belirlenir? 2026 Rehberi",
    excerpt:
      "Aynı araç için şirketler arasında %40'a varan fiyat farkı olabiliyor. Kasko priminizi belirleyen 7 faktörü ve tasarruf etmenin yollarını anlattık.",
    category: "Araç Sigortaları",
    date: "2026-06-18",
    readMinutes: 6,
    metaDescription:
      "Kasko fiyatları neye göre belirlenir? Araç yaşı, hasarsızlık indirimi, il ve teminatların prime etkisini ve tasarruf yollarını öğrenin.",
    keywords: ["kasko fiyatları", "kasko hesaplama", "hasarsızlık indirimi"],
    sections: [
      {
        p: [
          "Kasko primi, sigorta şirketlerinin risk değerlendirme modellerine göre hesaplanır ve aynı araç için şirketten şirkete ciddi farklar oluşabilir. Bu yazıda priminizi belirleyen ana faktörleri ve daha uygun fiyat almanın yollarını bulacaksınız.",
        ],
      },
      {
        h: "1. Aracın Marka, Model ve Yaşı",
        p: [
          "Aracınızın piyasa değeri yükseldikçe kasko bedeli, dolayısıyla prim artar. Yedek parça maliyeti yüksek ve çalınma oranı fazla olan modellerde primler belirgin şekilde yükselir. 10 yaş üzeri araçlarda bazı şirketler teminat kısıtlamasına gidebilir.",
        ],
      },
      {
        h: "2. Hasarsızlık İndirim Kademesi",
        p: [
          "Hasarsız geçen her poliçe yılı bir üst indirim kademesine geçmenizi sağlar. 4. kademede indirim oranı %60'a ulaşır. Hasarsızlık indirimi şirket değiştirseniz bile Sigorta Bilgi Merkezi kayıtlarıyla korunur; bu yüzden yenileme döneminde farklı şirketlerden teklif almaktan çekinmeyin.",
        ],
      },
      {
        h: "3. Sürücü Profili ve İl",
        p: [
          "Sürücünün yaşı, ehliyet yaşı ve hasar geçmişi fiyatı doğrudan etkiler. Trafik yoğunluğu ve hasar frekansı yüksek büyükşehirlerde primler, küçük illere göre daha yüksektir.",
        ],
      },
      {
        h: "Tasarruf İçin Öneriler",
        p: [
          "Teminatları ihtiyacınıza göre sadeleştirin; kullanmayacağınız ek teminatlar primi şişirir. Servis ağı tercihinizi gözden geçirin: anlaşmalı servis seçeneği, yetkili servise göre %15-25 daha uygundur. Ve en önemlisi: her yenileme döneminde en az 5-6 şirketten teklif karşılaştırın. Usta Sigortacı'da bu karşılaştırma 2 dakika sürer.",
        ],
      },
    ],
  },
  {
    slug: "trafik-sigortasi-basamak-sistemi",
    title: "Trafik Sigortasında Basamak Sistemi Nasıl Çalışır?",
    excerpt:
      "0'dan 8'e uzanan basamak sistemi priminizi doğrudan etkiliyor. Basamağınızı nasıl yükseltirsiniz, hasar basamağınızı ne kadar düşürür?",
    category: "Araç Sigortaları",
    date: "2026-05-30",
    readMinutes: 5,
    metaDescription:
      "Trafik sigortası basamak sistemi rehberi: basamak nasıl yükselir, hasar kaç basamak düşürür, basamak sorgulama nasıl yapılır?",
    keywords: ["trafik sigortası basamak", "basamak sorgulama", "trafik sigortası indirimi"],
    sections: [
      {
        p: [
          "Zorunlu trafik sigortasında prim, sürücünün geçmiş hasar performansına göre belirlenen basamak sistemine dayanır. Sisteme yeni giren sürücüler 4. basamaktan başlar.",
        ],
      },
      {
        h: "Basamak Nasıl Yükselir, Nasıl Düşer?",
        p: [
          "Poliçe dönemini hasarsız tamamlayan sürücü bir basamak yükselir ve daha yüksek indirim kazanır. Kusurlu bir hasar ise basamağı bir ila iki kademe düşürür. 7. ve 8. basamaktaki sürücüler en yüksek indirimli primi öder; 0-2 basamaktakiler ise sürşarjlı (zamlı) prim öder.",
          "Basamak bilgisi araca değil sürücüye bağlıdır ve şirket değişikliğinde kaybolmaz. e-Devlet veya Sigorta Bilgi Merkezi üzerinden mevcut basamağınızı sorgulayabilirsiniz.",
        ],
      },
      {
        h: "Küçük Hasarları Sigortadan Karşılatmalı mı?",
        p: [
          "Düşük tutarlı hasarlarda tazminat almak, sonraki yıllarda ödeyeceğiniz prim artışından daha pahalıya gelebilir. Hasar tutarı, basamak kaybının 2-3 yıllık prim etkisinden düşükse cepten karşılamak çoğu zaman daha ekonomiktir.",
        ],
      },
    ],
  },
  {
    slug: "dask-hakkinda-merak-edilenler",
    title: "DASK Hakkında Merak Edilen 10 Soru",
    excerpt:
      "DASK neyi karşılar, neyi karşılamaz? Kiracı mı ev sahibi mi yaptırır? Zorunlu Deprem Sigortası hakkında en çok sorulan soruları yanıtladık.",
    category: "Konut Sigortaları",
    date: "2026-05-12",
    readMinutes: 7,
    metaDescription:
      "DASK neyi kapsar, primi nasıl hesaplanır, kiracı mı ev sahibi mi yaptırır? Zorunlu Deprem Sigortası hakkında 10 kritik soru ve yanıtı.",
    keywords: ["DASK", "zorunlu deprem sigortası", "DASK kapsamı", "DASK sorgulama"],
    sections: [
      {
        p: [
          "Türkiye'nin deprem gerçeği, konut sahiplerinin en temel güvencesi olan DASK'ı gündemden düşürmüyor. En çok merak edilen soruları derledik.",
        ],
      },
      {
        h: "DASK neyi karşılar?",
        p: [
          "Deprem ile deprem kaynaklı yangın, infilak, tsunami ve yer kaymasının binada yarattığı maddi hasarları, her yıl güncellenen azami teminat tutarına kadar karşılar. Temeller, taşıyıcı sistem, duvarlar, çatı ve ortak alanlar kapsamdadır.",
        ],
      },
      {
        h: "DASK neyi karşılamaz?",
        p: [
          "Eşyalar, iş durması, kira kaybı, manevi tazminat talepleri ve deprem dışındaki riskler (hırsızlık, su baskını vb.) DASK kapsamı dışındadır. Bu riskler için konut sigortası gerekir. DASK limitini aşan bina değeri de konut poliçesindeki deprem ek teminatıyla güvenceye alınır.",
        ],
      },
      {
        h: "Kiracı mı, ev sahibi mi yaptırır?",
        p: [
          "DASK yaptırma yükümlülüğü mal sahibine aittir. Ancak elektrik-su aboneliği açtıracak kiracılar, poliçenin güncel olduğunu kontrol etmelidir; abonelik işlemlerinde poliçe numarası istenir.",
        ],
      },
    ],
  },
  {
    slug: "tamamlayici-saglik-sigortasi-rehberi",
    title: "Tamamlayıcı Sağlık Sigortası Alırken Nelere Dikkat Etmeli?",
    excerpt:
      "TSS poliçeleri arasındaki farklar sandığınızdan büyük. Hastane ağı, ayakta tedavi limiti ve bekleme süreleri konusunda bilmeniz gerekenler.",
    category: "Sağlık Sigortaları",
    date: "2026-04-22",
    readMinutes: 6,
    metaDescription:
      "Tamamlayıcı sağlık sigortası alırken dikkat edilmesi gerekenler: hastane ağı, ayakta tedavi limiti, bekleme süreleri ve yenileme garantisi.",
    keywords: ["tamamlayıcı sağlık sigortası", "TSS rehberi", "TSS hastane ağı"],
    sections: [
      {
        p: [
          "Tamamlayıcı sağlık sigortası, uygun primiyle özel hastane konforu sunan en popüler sağlık ürünü. Ancak poliçeler arasında önemli farklar var; seçim yaparken şu başlıkları mutlaka inceleyin.",
        ],
      },
      {
        h: "Hastane Ağını Kontrol Edin",
        p: [
          "Her şirketin anlaşmalı hastane listesi farklıdır. Yaşadığınız ile ve tercih ettiğiniz hastanelere göre ağı kontrol etmeden poliçe almayın. Bazı ekonomik planlar 'dar ağ' ile çalışır ve popüler hastaneleri kapsamayabilir.",
        ],
      },
      {
        h: "Ayakta Tedavi Adedi ve Bekleme Süreleri",
        p: [
          "Poliçelerde yıllık ayakta tedavi hakkı genellikle 4-10 muayene ile sınırlıdır. Sık doktora gidiyorsanız yüksek adetli planları tercih edin. Ayrıca bazı işlemler için 3-12 ay arası bekleme süreleri uygulanır; doğum teminatında bu süre daha uzundur.",
        ],
      },
      {
        h: "Yenileme Garantisi Şartları",
        p: [
          "Ömür boyu yenileme garantisi, ileri yaşlarda sigortasız kalmamanın anahtarıdır. Garantiyi hangi şartlarla (kaç yıl kesintisiz, hangi hasar/prim oranıyla) verdiği şirketten şirkete değişir; teklif karşılaştırırken bu maddeyi özellikle inceleyin.",
        ],
      },
    ],
  },
  {
    slug: "seyahat-sigortasi-vize-basvurusu",
    title: "Schengen Vizesi İçin Seyahat Sigortası: Eksiksiz Başvuru Rehberi",
    excerpt:
      "Vize başvurunuzun reddedilmemesi için sigorta poliçenizin taşıması gereken şartlar, teminat limitleri ve sık yapılan hatalar.",
    category: "Seyahat",
    date: "2026-03-15",
    readMinutes: 5,
    metaDescription:
      "Schengen vizesi için seyahat sağlık sigortası şartları: 30.000 € teminat, tüm seyahat süresi kapsamı ve konsolosluk kabul kriterleri.",
    keywords: ["schengen vizesi sigorta", "vize için seyahat sigortası", "seyahat sağlık sigortası"],
    sections: [
      {
        p: [
          "Schengen vize başvurularında seyahat sağlık sigortası zorunlu belgeler arasındadır ve şartlara uymayan poliçeler ret sebebi olabilir. İşte konsoloslukların aradığı kriterler.",
        ],
      },
      {
        h: "Zorunlu Şartlar",
        p: [
          "Poliçe en az 30.000 € tıbbi teminat içermeli, seyahatin tamamını ve tüm Schengen bölgesini kapsamalı, acil tıbbi müdahale ve ülkeye geri dönüş (repatriasyon) masraflarını karşılamalıdır.",
        ],
      },
      {
        h: "Sık Yapılan Hatalar",
        p: [
          "Poliçe tarihlerinin uçak biletinden kısa olması en yaygın ret sebebidir; giriş-çıkış tarihlerinizi tam kapsayacak şekilde düzenletin. Vize reddi durumunda poliçenizi ücretsiz iptal ettirebileceğinizi unutmayın — bu hakkı sunan platformlardan satın almak avantajdır.",
        ],
      },
    ],
  },
  {
    slug: "hasar-aninda-yapilmasi-gerekenler",
    title: "Kaza ve Hasar Anında Yapılması Gerekenler: Adım Adım Rehber",
    excerpt:
      "Kaza anında panik yerine doğru adımlar: tutanak nasıl tutulur, hangi durumda polis çağrılır, hasar dosyası nasıl açılır?",
    category: "Rehber",
    date: "2026-02-08",
    readMinutes: 8,
    metaDescription:
      "Trafik kazası ve hasar anında yapılması gerekenler: kaza tespit tutanağı, fotoğraflama, hasar bildirimi ve tazminat süreci rehberi.",
    keywords: ["kaza tespit tutanağı", "hasar bildirimi", "kaza anında yapılacaklar"],
    sections: [
      {
        p: [
          "Kaza veya hasar anında atacağınız doğru adımlar, tazminat sürecinizin hızını ve sonucunu doğrudan etkiler. Bu rehberi telefonunuza kaydedin.",
        ],
      },
      {
        h: "Maddi Hasarlı Kazalarda",
        p: [
          "Araçları güvenli bir noktaya çekin ve dörtlüleri yakın. Karşı tarafla birlikte Kaza Tespit Tutanağı doldurun; tüm araçların plakalarını, ruhsatlarını, ehliyetleri ve kaza yerini farklı açılardan fotoğraflayın. Alkol şüphesi, sürücü belgesizliği, kamu malı hasarı veya yaralanma varsa mutlaka 155'i arayın.",
        ],
      },
      {
        h: "Hasar Dosyası Açma",
        p: [
          "Tutanak ve fotoğraflarla birlikte sigorta şirketinize veya bize ulaşın; hasar ihbarınızı 5 iş günü içinde yapmanız gerekir. Usta Sigortacı müşterisiyseniz 7/24 hasar hattımız süreci sizin adınıza takip eder, aracınızı anlaşmalı servise yönlendirir.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
