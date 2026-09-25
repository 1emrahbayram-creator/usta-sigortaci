import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Usta Sigortacı; 12 yıllık deneyimi, 25+ sigorta şirketi iş ortaklığı ve 1,2 milyon mutlu müşterisiyle Türkiye'nin usta işi sigorta platformudur.",
  alternates: { canonical: "/hakkimizda" },
};

const values = [
  {
    icon: "compare",
    title: "Şeffaflık",
    desc: "Tüm teklifleri komisyon farkı gözetmeksizin, fiyat ve teminat detaylarıyla açıkça listeleriz.",
  },
  {
    icon: "user",
    title: "Müşteri Odaklılık",
    desc: "Poliçe satmakla bitmez; yenileme hatırlatmasından hasar takibine hep yanınızdayız.",
  },
  {
    icon: "lightning",
    title: "Teknoloji",
    desc: "Sigorta şirketleriyle gerçek zamanlı entegrasyonlarımız sayesinde teklifler saniyeler içinde ekranınızda.",
  },
  {
    icon: "shieldCheck",
    title: "Güven",
    desc: "SEDDK lisanslı brokerlik, SEGEM sertifikalı danışmanlar ve SSL şifreli altyapı.",
  },
];

export default function AboutPage() {
  return (
    <div className="container-x py-10">
      <Breadcrumbs items={[{ name: "Hakkımızda" }]} />

      <div className="mt-6 grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-navy-950 sm:text-4xl">
            Sigortayı herkes için <span className="text-brand-600">anlaşılır</span> kılıyoruz
          </h1>
          <div className="prose-tr mt-6">
            <p>
              Usta Sigortacı, 2014 yılında tek bir soruyla yola çıktı: &quot;Sigorta almak neden
              bu kadar karmaşık?&quot; Bugün 25&apos;ten fazla sigorta şirketiyle kurduğumuz
              gerçek zamanlı entegrasyonlar sayesinde 1,2 milyondan fazla kişinin en uygun
              poliçeye saniyeler içinde ulaşmasını sağlıyoruz.
            </p>
            <p>
              Amacımız yalnızca en ucuz fiyatı göstermek değil; teminatları anlaşılır kılmak,
              ihtiyacınıza gerçekten uyan ürünü bulmanıza yardım etmek ve hasar gününde
              telefonun ucunda olmak.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            [site.stats.customers, "Mutlu müşteri"],
            [`${site.stats.partners}`, "Anlaşmalı şirket"],
            [`${site.stats.products}`, "Sigorta ürünü"],
            [`${site.stats.experience} yıl`, "Deneyim"],
          ].map(([num, label]) => (
            <div key={label} className="card p-6 text-center">
              <p className="font-display text-3xl font-bold text-brand-600">{num}</p>
              <p className="mt-1 text-sm text-navy-900/60">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-16" aria-labelledby="degerler">
        <h2 id="degerler" className="section-title mb-8">
          Değerlerimiz
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="card p-6">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={v.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-bold text-navy-950">{v.title}</h3>
              <p className="mt-2 text-sm leading-6 text-navy-900/60">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="card mt-16 flex flex-col items-center gap-4 bg-navy-950 p-8 text-center text-white sm:flex-row sm:text-left">
        <Icon name="headset" className="h-10 w-10 shrink-0 text-brand-300" />
        <div className="flex-1">
          <p className="text-lg font-bold">Bizimle çalışmak ister misiniz?</p>
          <p className="text-sm text-white/60">
            Sorularınız, iş birliği teklifleriniz veya kariyer fırsatları için bize ulaşın.
          </p>
        </div>
        <Link href="/iletisim" className="btn-accent btn-md whitespace-nowrap">
          İletişime Geç
        </Link>
      </div>
    </div>
  );
}
