import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Icon } from "@/components/icons";
import { insurers } from "@/lib/insurers";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Anlaşmalı Sigorta Şirketleri",
  description:
    "Usta Sigortacı'ın çalıştığı anlaşmalı sigorta şirketleri: Anadolu Sigorta, Allianz, AXA, Aksigorta, Sompo ve daha fazlası. Tümünden tek ekranda teklif alın.",
  alternates: { canonical: "/sigorta-sirketleri" },
};

export default function InsurersPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Anlaşmalı Sigorta Şirketleri",
    itemListElement: insurers.map((ins, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "Organization", name: ins.name },
    })),
  };

  return (
    <div className="container-x py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Breadcrumbs items={[{ name: "Sigorta Şirketleri" }]} />

      <div className="mt-6 mb-12 max-w-2xl">
        <h1 className="text-3xl font-bold text-navy-950 sm:text-4xl">
          Anlaşmalı Sigorta Şirketleri
        </h1>
        <p className="mt-3 text-navy-900/60">
          Türkiye&apos;nin önde gelen {insurers.length}+ sigorta şirketiyle çalışıyoruz. Tek form
          doldurun, hepsinden aynı anda teklif alın.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {insurers.map((ins) => (
          <article key={ins.id} className="card flex flex-col p-6 transition-all hover:shadow-lift">
            <div className="mb-4 flex items-center gap-3">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold text-white"
                style={{ backgroundColor: ins.color }}
              >
                {ins.short}
              </span>
              <div>
                <h2 className="font-bold text-navy-950">{ins.name}</h2>
                <p className="flex items-center gap-1 text-xs text-navy-900/50">
                  <Icon name="star" className="h-3.5 w-3.5 text-amber-400" />
                  {ins.rating.toFixed(1)} müşteri puanı · {ins.founded}&apos;den beri
                </p>
              </div>
            </div>
            <p className="flex-1 text-sm leading-6 text-navy-900/60">{ins.desc}</p>
            <Link href="/sigortalar" className="btn-outline btn-sm mt-5 w-fit">
              Teklif Al
            </Link>
          </article>
        ))}
      </div>

      <div className="card mt-12 flex flex-col items-center gap-4 bg-navy-900 p-8 text-center text-white sm:flex-row sm:text-left">
        <Icon name="compare" className="h-10 w-10 shrink-0" />
        <div className="flex-1">
          <p className="text-lg font-bold">Hangisi size uygun bilemiyor musunuz?</p>
          <p className="text-sm text-white/70">
            Tek form doldurun; tüm şirketlerin tekliflerini fiyat ve teminat bazında karşılaştırın.
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/sigortalar" className="btn-accent btn-md whitespace-nowrap">
            Teklif Al
          </Link>
          <a href={site.phoneHref} className="btn btn-md bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20">
            Bizi Arayın
          </a>
        </div>
      </div>
    </div>
  );
}
