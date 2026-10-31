import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqJsonLd, FaqList } from "@/components/faq";
import { site } from "@/lib/site";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular",
  description:
    "Sigorta acentesiyle çalışmak, teklif ve danışmanlık süreci, poliçe düzenleme, ödeme, iptal ve hasar hakkında sık sorulan sorular ve yanıtları.",
  alternates: { canonical: "/sss" },
};

const generalFaqs = [
  {
    q: "Usta Sigorta ile çalışmak güvenli mi?",
    a: "Evet. Usta Sigorta Aracılık Hizmetleri, anlaşmalı sigorta şirketlerinin yetkili acentesidir. Poliçeleriniz doğrudan ilgili sigorta şirketi tarafından düzenlenir ve Sigorta Bilgi Merkezi'ne kaydedilir; biz sizin adınıza en uygun teklifi bulur, süreci yönetiriz.",
  },
  {
    q: "Danışmanlık ve teklif hizmeti neden ücretsiz?",
    a: "Gelirimizi sigorta şirketlerinden aldığımız acentelik komisyonundan elde ederiz. Bu komisyon prime eklenmez; şirketin kendi kanalından alacağınız fiyatla aynı, çoğu zaman kampanyalar sayesinde daha uygun prim ödersiniz.",
  },
  {
    q: "Teklif almak için ne yapmalıyım?",
    a: "Telefon veya WhatsApp'tan bize ulaşın ya da sitedeki bilgi talep formunu doldurun. Danışmanımız 1 iş günü içinde sizi arar, ihtiyacınızı dinler ve 25'ten fazla şirketten aldığı teklifleri karşılaştırmalı olarak sunar.",
  },
  {
    q: "Ödemeyi nasıl yapıyorum?",
    a: "Prim, poliçeyi düzenleyen sigorta şirketinin güvenli ödeme bağlantısı üzerinden kredi kartıyla (tek çekim veya taksitli) ya da banka havalesiyle ödenir. Kart bilgileriniz bizimle paylaşılmaz.",
  },
  {
    q: "Poliçem ne zaman başlar, belgemi nasıl alırım?",
    a: "Ödeme onaylandığı anda poliçeniz düzenlenir; PDF belgenizi e-posta ve WhatsApp ile iletiriz. Dilerseniz ofisimizden basılı nüsha da alabilirsiniz.",
  },
  {
    q: "Poliçemi nasıl iptal edebilirim?",
    a: "Bizi aramanız yeterli; iptal talebinizi sigorta şirketine iletir ve kullanılmayan döneme ait prim iadesini takip ederiz. Seyahat sigortalarında vize reddi durumunda koşulsuz iade yapılır.",
  },
  {
    q: "Mevcut poliçem başka acenteden; size geçebilir miyim?",
    a: "Evet. Yenileme döneminde bize ulaşmanız yeterli; hasarsızlık indiriminiz ve basamak bilginiz Sigorta Bilgi Merkezi kayıtlarıyla korunur, kaybınız olmaz.",
  },
  {
    q: "Hasar anında ne yapmalıyım?",
    a: "Hasar hattımızı arayın veya Hasar Anında sayfamızdaki adımları izleyin. Dosyanızın açılışından tazminat ödemesine kadar tüm süreci sizin adınıza takip ederiz.",
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
          Aradığınız yanıtı bulamazsanız {site.phone} numaralı hattımızdan veya{" "}
          <Link href="/iletisim" className="font-semibold text-brand-700 hover:underline">
            iletişim sayfamızdan
          </Link>{" "}
          bize ulaşabilirsiniz.
        </p>

        <h2 className="mb-4 text-lg font-bold text-navy-950">Genel</h2>
        <FaqList items={generalFaqs} />

        <h2 className="mt-12 mb-4 text-lg font-bold text-navy-950">Ürünler Hakkında</h2>
        <FaqList items={productFaqs} />
      </div>
    </div>
  );
}
