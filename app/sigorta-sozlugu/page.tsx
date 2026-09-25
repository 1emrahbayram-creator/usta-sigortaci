import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sigorta Sözlüğü | Sigorta Terimleri ve Anlamları",
  description:
    "Poliçe, prim, muafiyet, hasarsızlık indirimi, İMM, ekspertiz... Sigorta dünyasının tüm terimlerini sade Türkçeyle açıkladık.",
  alternates: { canonical: "/sigorta-sozlugu" },
};

const terms: { term: string; def: string }[] = [
  { term: "Poliçe", def: "Sigorta sözleşmesinin yazılı belgesi. Teminatları, primleri, başlangıç-bitiş tarihlerini ve özel şartları içerir." },
  { term: "Prim", def: "Sigorta güvencesi karşılığında sigortalının ödediği ücret. Yıllık veya taksitli ödenebilir." },
  { term: "Teminat", def: "Sigorta şirketinin poliçe kapsamında karşılamayı taahhüt ettiği risk ve azami tutar." },
  { term: "Muafiyet", def: "Hasarın sigortalı üzerinde kalan kısmı. Örneğin %2 muafiyetli poliçede hasarın ilk %2'si ödenmez." },
  { term: "Hasarsızlık İndirimi", def: "Poliçe dönemini hasarsız geçiren sigortalıya sonraki yenilemede uygulanan kademeli prim indirimi." },
  { term: "Basamak Sistemi", def: "Trafik sigortasında sürücünün hasar geçmişine göre 0-8 arası belirlenen ve primi doğrudan etkileyen kademe sistemi." },
  { term: "İMM", def: "İhtiyari Mali Mesuliyet: Trafik sigortası limitlerini aşan karşı taraf zararlarını karşılayan ek sorumluluk sigortası." },
  { term: "Ekspertiz", def: "Hasarın nedenini ve tutarını belirlemek için sigorta eksperi tarafından yapılan inceleme." },
  { term: "Rücu", def: "Sigorta şirketinin ödediği tazminatı, kusurlu üçüncü kişiden geri talep etmesi." },
  { term: "Zeyilname", def: "Poliçede sonradan yapılan değişiklikleri (adres, plaka, teminat) belgeleyen ek sözleşme." },
  { term: "Sovtaj", def: "Hasarlı aracın veya malın hurda/kurtarılan değeri. Tam hasarda tazminattan düşülebilir." },
  { term: "Mutabakatlı Değer", def: "Poliçe başlangıcında sigortalı ile şirketin üzerinde anlaştığı, hasar anında tartışmasız esas alınan kıymet." },
  { term: "Yenileme Garantisi", def: "Sağlık sigortalarında şirketin, şartları sağlayan sigortalının poliçesini ömür boyu yenileme taahhüdü." },
  { term: "Bekleme Süresi", def: "Sağlık poliçelerinde bazı teminatların kullanılabilmesi için geçmesi gereken süre (ör. doğum için 12 ay)." },
  { term: "Asistans", def: "Poliçeye bağlı yol yardım, çilingir, ambulans gibi 7/24 destek hizmetleri." },
  { term: "Fesih", def: "Poliçenin süresinden önce sonlandırılması. Kalan döneme ait prim, şartlara göre iade edilir." },
  { term: "Dain-i Mürtehin", def: "Poliçedeki tazminat alacağının rehinli alacaklısı; genellikle kredi veren banka lehine eklenir." },
  { term: "Eksik Sigorta", def: "Sigorta bedelinin gerçek değerin altında beyan edilmesi; hasar ödemesinin oransal azalmasına yol açar." },
];

export default function GlossaryPage() {
  const glossaryJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Sigorta Sözlüğü",
    url: `${site.url}/sigorta-sozlugu`,
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.def,
    })),
  };

  return (
    <div className="container-x py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossaryJsonLd) }}
      />
      <Breadcrumbs items={[{ name: "Sigorta Sözlüğü" }]} />

      <div className="mt-6 mb-12 max-w-2xl">
        <h1 className="text-3xl font-bold text-navy-950 sm:text-4xl">Sigorta Sözlüğü</h1>
        <p className="mt-3 text-navy-900/60">
          Poliçenizi okurken takıldığınız tüm terimler, sade Türkçeyle. Bilinçli sigortalının el
          kitabı.
        </p>
      </div>

      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {terms.map((t) => (
          <div key={t.term} className="card p-5">
            <dt className="font-display font-bold text-brand-700">{t.term}</dt>
            <dd className="mt-1.5 text-sm leading-6 text-navy-900/70">{t.def}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
