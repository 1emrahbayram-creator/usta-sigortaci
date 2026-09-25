import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqJsonLd, FaqList } from "@/components/faq";
import { site } from "@/lib/site";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular",
  description:
    "Sigorta teklifi alma, online poliçe satın alma, ödeme, iptal ve hasar süreçleri hakkında sık sorulan sorular ve yanıtları.",
  alternates: { canonical: "/sss" },
};

const generalFaqs = [
  {
    q: "Usta Sigortacı'dan poliçe almak güvenli mi?",
    a: "Evet. Poliçeleriniz doğrudan anlaşmalı sigorta şirketleri tarafından düzenlenir ve Sigorta Bilgi Merkezi'ne kaydedilir. Biz brokerlik hizmeti sunar, sizin adınıza en uygun teklifi buluruz.",
  },
  {
    q: "Teklif ve karşılaştırma hizmeti neden ücretsiz?",
    a: "Gelirimizi sigorta şirketlerinden aldığımız komisyonlardan elde ederiz. Bu komisyon fiyata yansıtılmaz; şirketin kendi kanalından alacağınız fiyatla aynı, çoğu zaman kampanyalar sayesinde daha uygun fiyat alırsınız.",
  },
  {
    q: "Poliçemi nasıl iptal edebilirim?",
    a: "Çağrı merkezimizi arayarak veya hesabınızdan talep oluşturarak iptal başlatabilirsiniz. Kullanılmayan döneme ait prim, ürün şartlarına göre iade edilir. Seyahat sigortalarında vize reddi durumunda koşulsuz iade yapılır.",
  },
  {
    q: "Ödemeyi hangi yöntemlerle yapabilirim?",
    a: "Tüm banka ve kredi kartlarıyla tek çekim veya taksitli ödeme yapabilirsiniz. Ödemeler 3D Secure doğrulamalı ve 256-bit SSL şifrelidir; kart bilgileriniz sistemimizde saklanmaz.",
  },
  {
    q: "Poliçem ne zaman başlar, belgemi nasıl alırım?",
    a: "Ödemeniz onaylandığı anda poliçeniz kesilir ve PDF olarak e-postanıza gönderilir. Hesabım sayfanızdan da tüm poliçelerinize erişebilirsiniz.",
  },
  {
    q: "Hasar anında ne yapmalıyım?",
    a: "7/24 hasar hattımızı arayın veya Hasar Anında sayfamızdaki adımları izleyin. Hasar dosyanızın açılışından tazminat ödemesine kadar tüm süreci sizin için takip ederiz.",
  },
];

export default function FaqPage() {
  const productFaqs = products.slice(0, 6).flatMap((p) => p.faqs.slice(0, 2));
  const allFaqs = [...generalFaqs, ...productFaqs];

  return (
    <div className="container-x py-10">
      <FaqJsonLd items={allFaqs} />
      <Breadcrumbs items={[{ name: "Sık Sorulan Sorular" }]} />

      <div className="mx-auto mt-6 max-w-3xl">
        <h1 className="text-3xl font-bold text-navy-950 sm:text-4xl">Sık Sorulan Sorular</h1>
        <p className="mt-3 mb-10 text-navy-900/60">
          Aradığınız yanıtı bulamazsanız {site.phone} numaralı hattımızdan bize ulaşabilirsiniz.
        </p>

        <h2 className="mb-4 text-lg font-bold text-navy-950">Genel</h2>
        <FaqList items={generalFaqs} />

        <h2 className="mt-12 mb-4 text-lg font-bold text-navy-950">Ürünler Hakkında</h2>
        <FaqList items={productFaqs} />
      </div>
    </div>
  );
}
