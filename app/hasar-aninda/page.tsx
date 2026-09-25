import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqJsonLd } from "@/components/faq";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hasar Anında Ne Yapmalı? | 7/24 Hasar Destek",
  description:
    "Trafik kazası, araç hasarı, konut hasarı ve sağlık acillerinde adım adım yapılması gerekenler. 7/24 hasar destek hattı ve acil numaralar.",
  alternates: { canonical: "/hasar-aninda" },
};

const emergency = [
  { no: "112", label: "Acil Çağrı Merkezi" },
  { no: "155", label: "Polis İmdat" },
  { no: "110", label: "İtfaiye" },
  { no: "125", label: "Alo DASK" },
];

const guides = [
  {
    icon: "car",
    title: "Trafik Kazasında",
    steps: [
      "Aracınızı güvenli bir yere çekin, dörtlü ikaz lambalarını yakın.",
      "Yaralanma varsa 112'yi arayın; araçları kesinlikle hareket ettirmeyin.",
      "Yaralanma yoksa karşı tarafla Kaza Tespit Tutanağı doldurun.",
      "Araçların plakalarını, hasar bölgelerini ve kaza yerini fotoğraflayın.",
      "Hasar hattımızı arayın; dosyanızı açalım ve çekici yönlendirelim.",
    ],
  },
  {
    icon: "home",
    title: "Konut Hasarında",
    steps: [
      "Can güvenliğinizi sağlayın; gerekiyorsa 110 / 112'yi arayın.",
      "Su baskınında ana vanayı, yangında doğalgaz vanasını kapatın.",
      "Hasar gören alanları ve eşyaları fotoğraflayın, hiçbir şeyi atmayın.",
      "5 iş günü içinde hasar ihbarınızı yapın; ekspertiz randevusu planlayalım.",
    ],
  },
  {
    icon: "heartPulse",
    title: "Sağlık Acilinde",
    steps: [
      "Acil durumda en yakın hastanenin acil servisine başvurun.",
      "Poliçe kartınızı veya TC kimlik numaranızı hastane kabulünde belirtin.",
      "Anlaşmalı hastanelerde provizyon otomatik alınır; fark ödemezsiniz.",
      "Anlaşmasız kurum makbuzlarını saklayın; geri ödeme talebinde kullanılır.",
    ],
  },
  {
    icon: "plane",
    title: "Seyahatte",
    steps: [
      "7/24 asistans hattını arayın; size en yakın anlaşmalı kurumu bulalım.",
      "Bagaj kaybında havayolundan PIR (kayıp raporu) belgesi alın.",
      "Tüm makbuz ve raporları saklayın; dönüşte tazminat dosyanıza eklenir.",
    ],
  },
];

const faqs = [
  {
    q: "Hasar ihbarını ne kadar sürede yapmalıyım?",
    a: "Genel kural olarak hasarı öğrendiğiniz tarihten itibaren 5 iş günü içinde ihbar etmeniz gerekir. Hırsızlık hasarlarında bu süre 24 saattir ve polise başvuru zorunludur.",
  },
  {
    q: "Kaza tespit tutanağını ne zaman kendimiz doldurabiliriz?",
    a: "Yalnızca maddi hasarlı kazalarda, tüm sürücüler ehliyetli ve ayıksa, araçlarda kamu malı hasarı yoksa taraflar kendi aralarında tutanak doldurabilir. Diğer tüm durumlarda 155 aranmalıdır.",
  },
  {
    q: "Hasar dosyam ne kadar sürede sonuçlanır?",
    a: "Eksiksiz evrakla açılan araç hasarı dosyaları genellikle 5-10 iş gününde sonuçlanır. Usta Sigortacı müşterisiyseniz dosyanızın her aşamasını sizin adınıza takip eder, SMS ile bilgilendiririz.",
  },
];

export default function ClaimsPage() {
  return (
    <>
      <FaqJsonLd items={faqs} />

      <section className="bg-navy-950 text-white">
        <div className="container-x py-12">
          <Breadcrumbs items={[{ name: "Hasar Anında" }]} />
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-brand-300 uppercase">
                <Icon name="bell" className="h-3.5 w-3.5" />
                7/24 Hasar Destek
              </p>
              <h1 className="text-3xl font-bold sm:text-4xl">
                Hasar anında panik yok, <span className="text-accent-400">usta</span> var.
              </h1>
              <p className="mt-4 max-w-xl text-white/70">
                Kaza, yangın, su baskını veya sağlık acili... Hangi hasarla karşılaşırsanız
                karşılaşın, tek telefonla süreci devralıyoruz: dosya açılışı, ekspertiz takibi ve
                tazminat ödemesine kadar.
              </p>
              <a href={site.phoneHref} className="btn-accent btn-lg mt-8">
                <Icon name="phoneCall" className="h-5 w-5" />
                {site.phone} — Hasar Hattı
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {emergency.map((e) => (
                <a
                  key={e.no}
                  href={`tel:${e.no}`}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition-colors hover:bg-white/10"
                >
                  <p className="font-display text-3xl font-bold text-accent-400">{e.no}</p>
                  <p className="mt-1 text-xs text-white/60">{e.label}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16" aria-labelledby="rehberler">
        <h2 id="rehberler" className="section-title mb-10 text-center">
          Adım adım hasar rehberi
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {guides.map((g) => (
            <article key={g.title} className="card p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={g.icon} className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold text-navy-950">{g.title}</h3>
              </div>
              <ol className="space-y-3">
                {g.steps.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-6 text-navy-900/75">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cloud-50 py-16" aria-labelledby="hasar-sss">
        <div className="container-x mx-auto max-w-3xl">
          <h2 id="hasar-sss" className="section-title mb-8 text-center">
            Hasar süreçleri hakkında
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="card group overflow-hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-navy-950 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="shrink-0 rounded-full bg-cloud-100 p-1.5 text-brand-600 transition-transform group-open:rotate-180">
                    <Icon name="chevronDown" className="h-4 w-4" />
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-6 text-navy-900/75">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
