import { products } from "./products";
import { posts } from "./blog";

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const W = 800;
const H = 600;

/** Ürün illüstrasyonları — alt metinleri hem erişilebilirlik hem SEO için betimleyici. */
const productAlt: Record<string, string> = {
  kasko: "Kasko sigortası görseli: koruma kalkanı rozetiyle güvence altına alınmış otomobil",
  "trafik-sigortasi": "Zorunlu trafik sigortası görseli: yolda ilerleyen iki araç ve trafik lambası",
  "tamamlayici-saglik-sigortasi":
    "Tamamlayıcı sağlık sigortası görseli: SGK'dan özel hastaneye uzanan köprü",
  "ozel-saglik-sigortasi": "Özel sağlık sigortası görseli: nabız çizgisi geçen kalp ve stetoskop",
  dask: "DASK zorunlu deprem sigortası görseli: koruma kalkanıyla çevrelenmiş apartman binası",
  "konut-sigortasi": "Konut sigortası görseli: koruma kalkanı altındaki müstakil ev",
  "seyahat-saglik-sigortasi": "Seyahat sağlık sigortası görseli: uçak, dünya küresi ve seyahat bavulu",
  "hayat-sigortasi": "Hayat sigortası görseli: koruma kalkanı altında üç kişilik aile",
  "ferdi-kaza-sigortasi": "Ferdi kaza sigortası görseli: kalkan ve yara bandıyla korunan kişi",
  "evcil-hayvan-sigortasi": "Evcil hayvan sigortası görseli: köpek, kedi ve pati izi",
  "cep-telefonu-sigortasi": "Cep telefonu sigortası görseli: koruma halkasıyla çevrili akıllı telefon",
  "isyeri-sigortasi": "İşyeri sigortası görseli: tenteli dükkan cephesi ve koruma yayı",
  "imm-sigortasi":
    "İhtiyari mali mesuliyet (İMM) sigortası görseli: çift kalkan halkasıyla korunan araç",
  "yabanci-saglik-sigortasi":
    "Yabancı sağlık sigortası görseli: pasaport, dünya küresi ve sağlık işareti",
};

const postAlt: Record<string, string> = {
  "kasko-fiyatlari-neye-gore-belirlenir":
    "Kasko fiyatlarının düşüşünü gösteren sütun grafiği ve otomobil",
  "trafik-sigortasi-basamak-sistemi":
    "Trafik sigortası basamak sistemini anlatan yükselen basamaklar ve koruma rozeti",
  "dask-hakkinda-merak-edilenler":
    "DASK hakkında sık sorulan sorular: kalkanla korunan bina ve konuşma balonları",
  "tamamlayici-saglik-sigortasi-rehberi":
    "Tamamlayıcı sağlık sigortası rehberi: hastane binası ve onay işaretli kontrol listesi",
  "seyahat-sigortasi-vize-basvurusu":
    "Schengen vize başvurusu için pasaport, vize damgası ve uçak",
  "hasar-aninda-yapilmasi-gerekenler":
    "Kaza anında yapılacaklar: temas hâlindeki iki araç ve kaza tespit tutanağı",
};

export type PageImageKey =
  | "anasayfa"
  | "hakkimizda"
  | "hasar-aninda"
  | "sigorta-sirketleri"
  | "sigortalar"
  | "sss"
  | "sigorta-sozlugu";

const pageAlt: Record<PageImageKey, string> = {
  anasayfa: "Usta Sigorta danışmanı ile müşterisi arasında güvence kalkanı",
  hakkimizda: "Usta Sigorta ofisinde müşterilerine danışmanlık veren ekip",
  "hasar-aninda": "7/24 hasar destek hattı: kulaklıklı danışman, iletişim dalgaları ve saat",
  "sigorta-sirketleri":
    "Anlaşmalı sigorta şirketlerini merkezdeki güvence kalkanına bağlayan şema",
  sigortalar: "Araç, sağlık, konut ve seyahat sigortası branşlarını gösteren kartlar",
  sss: "Sık sorulan sorular: konuşma balonları ve onay işareti",
  "sigorta-sozlugu": "Sigorta sözlüğü: açık kitap ve terimleri inceleyen büyüteç",
};

export function productImage(slug: string): SiteImage {
  const name = products.find((p) => p.slug === slug)?.name ?? "Sigorta";
  return {
    src: `/illus/urun/${slug}.svg`,
    alt: productAlt[slug] ?? `${name} görseli`,
    width: W,
    height: H,
  };
}

export function postImage(slug: string): SiteImage {
  const title = posts.find((p) => p.slug === slug)?.title ?? "Sigorta rehberi";
  return {
    src: `/illus/blog/${slug}.svg`,
    alt: postAlt[slug] ?? `${title} yazısının kapak görseli`,
    width: W,
    height: H,
  };
}

export function pageImage(key: PageImageKey): SiteImage {
  return { src: `/illus/sayfa/${key}.svg`, alt: pageAlt[key], width: W, height: H };
}

/** Sitemap ve JSON-LD için mutlak URL. */
export function absolute(src: string, base: string): string {
  return `${base}${src}`;
}

/** Google görsel araması için sitemap'e verilecek tüm görseller. */
export function allImagePaths(): string[] {
  return [
    ...products.map((p) => `/illus/urun/${p.slug}.svg`),
    ...posts.map((p) => `/illus/blog/${p.slug}.svg`),
    ...(Object.keys(pageAlt) as PageImageKey[]).map((k) => `/illus/sayfa/${k}.svg`),
  ];
}
