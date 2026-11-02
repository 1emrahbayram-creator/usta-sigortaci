import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Icon } from "@/components/icons";
import { pageImage } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Usta Sigorta Aracılık Hizmetleri; Ataşehir merkezli, 25'ten fazla sigorta şirketinin yetkili acentesi. Tarafsız danışmanlık, tek muhatap, hasarda 7/24 takip.",
  alternates: { canonical: "/hakkimizda" },
};

const values = [
  {
    icon: "compare",
    title: "Şeffaflık",
    desc: "Aldığımız tüm teklifleri komisyon farkı gözetmeksizin, fiyat ve teminat detaylarıyla açıkça sunarız.",
  },
  {
    icon: "user",
    title: "Müşteri Odaklılık",
    desc: "Poliçe düzenlemekle bitmez; yenileme hatırlatmasından hasar takibine hep yanınızdayız.",
  },
  {
    icon: "lightning",
    title: "Hız",
    desc: "Teklifleriniz 1 iş günü içinde elinizde; onayınızın ardından poliçeniz aynı gün düzenlenir.",
  },
  {
    icon: "shieldCheck",
    title: "Güven",
    desc: "Anlaşmalı şirketlerin yetkili acentesi, SEGEM sertifikalı danışman ve KVKK uyumlu veri yönetimi.",
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
              {site.legalName}, Ataşehir merkezli bir sigorta acentesidir. Tek bir soruyla yola
              çıktık: &quot;Sigorta almak neden bu kadar karmaşık?&quot; Bugün 25&apos;ten fazla
              sigorta şirketinin yetkili acentesi olarak, müşterilerimizin ihtiyacına gerçekten
              uyan poliçeyi bulmalarına yardım ediyoruz.
            </p>
            <p>
              Amacımız yalnızca en ucuz fiyatı göstermek değil; teminatları anlaşılır kılmak,
              doğru ürünü birlikte seçmek ve hasar gününde telefonun ucunda olmak. Bireysel
              müşterilerimizin yanı sıra KOBİ&apos;lere işyeri, sorumluluk ve grup sağlık
              sigortalarında da danışmanlık veriyoruz.
            </p>
          </div>
        </div>
        <Image
          src={pageImage("hakkimizda").src}
          alt={pageImage("hakkimizda").alt}
          width={800}
          height={600}
          priority
          unoptimized
          sizes="(max-width: 1024px) 100vw, 520px"
          className="w-full rounded-3xl border border-navy-900/8 shadow-[var(--shadow-card)]"
        />
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            [site.stats.customers, "Mutlu müşteri"],
            [`${site.stats.partners}`, "Anlaşmalı şirket"],
            [`${site.stats.products}`, "Sigorta branşı"],
            [`${site.stats.experience} yıl`, "Deneyim"],
          ].map(([num, label]) => (
            <div key={label} className="card p-6 text-center">
              <p className="font-display text-3xl font-bold text-brand-600">{num}</p>
              <p className="mt-1 text-sm text-navy-900/60">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-16" aria-labelledby="kurucu">
        <div className="card grid gap-8 p-8 lg:grid-cols-[auto_1fr] lg:items-center">
          <span className="flex h-24 w-24 items-center justify-center rounded-3xl bg-navy-900 font-display text-3xl font-bold text-white">
            {site.founder.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
          <div>
            <h2 id="kurucu" className="text-2xl font-bold text-navy-950">
              {site.founder.name}
            </h2>
            <p className="text-sm font-semibold text-brand-700">{site.founder.title}</p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-navy-900/70">
              Sigorta sektöründe {site.stats.experience} yılı aşan deneyimiyle bireysel ve kurumsal
              müşterilere kasko, trafik, sağlık, konut ve işyeri branşlarında danışmanlık veriyor.
              Her müşterisiyle tekliften hasara kadar bizzat ilgilenmeyi acenteliğin esası sayıyor.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a href={site.founder.phoneHref} className="flex items-center gap-1.5 font-semibold text-navy-900 hover:text-brand-700">
                <Icon name="phoneCall" className="h-4 w-4 text-brand-600" /> {site.founder.phone}
              </a>
              <a href={`mailto:${site.founder.email}`} className="flex items-center gap-1.5 font-semibold text-navy-900 hover:text-brand-700">
                <Icon name="mail" className="h-4 w-4 text-brand-600" /> {site.founder.email}
              </a>
            </div>
          </div>
        </div>
      </section>

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
          <p className="text-lg font-bold">Sigortanız için görüşelim</p>
          <p className="text-sm text-white/60">
            İhtiyaç analizi ve teklif karşılaştırması ücretsizdir. Ofisimize bekleriz ya da sizi arayalım.
          </p>
        </div>
        <Link href="/iletisim" className="btn-accent btn-md whitespace-nowrap">
          İletişime Geç
        </Link>
      </div>
    </div>
  );
}
