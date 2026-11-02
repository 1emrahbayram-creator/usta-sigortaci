import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { FaqJsonLd, FaqList } from "@/components/faq";
import { pageImage } from "@/lib/images";
import { site } from "@/lib/site";
import { products, popularProducts } from "@/lib/products";
import { insurers } from "@/lib/insurers";
import { posts } from "@/lib/blog";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    q: "Usta Sigorta nasıl çalışır?",
    a: "İhtiyacınızı telefon, WhatsApp veya formla bize iletirsiniz. Danışmanlarımız 25'ten fazla anlaşmalı sigorta şirketinden teklif alır, teminatları karşılaştırıp size en uygun seçenekleri sunar. Kararınızın ardından poliçeniz aynı gün düzenlenir.",
  },
  {
    q: "Danışmanlık ve teklif alma ücretli mi?",
    a: "Hayır. Teklif alma, karşılaştırma ve danışmanlık tamamen ücretsizdir. Sigorta şirketinin belirlediği primin dışında bize hiçbir ücret ödemezsiniz.",
  },
  {
    q: "Poliçemi nasıl alırım, ödemeyi nasıl yaparım?",
    a: "Poliçeniz anlaşmalı sigorta şirketi tarafından resmi olarak düzenlenir ve Sigorta Bilgi Merkezi'ne kaydedilir. Primi şirketin güvenli ödeme bağlantısı veya banka kanalıyla ödersiniz; belgeniz e-posta ve WhatsApp ile iletilir.",
  },
  {
    q: "Hasar durumunda bana kim yardımcı olur?",
    a: "Biz. Hasar hattımızı aradığınızda ihbarınızı alır, dosyanızı sigorta şirketi nezdinde açar ve ekspertizden tazminat ödemesine kadar süreci sizin adınıza takip ederiz.",
  },
  {
    q: "Poliçemin yenileme tarihini kim takip eder?",
    a: "Biz takip ederiz. Poliçelerinizin bitiş tarihlerini kayıt altında tutar, süresi yaklaşmadan sizi arar ve güncel tekliflerle yenilemeyi tamamlarız; teminatsız kalmazsınız.",
  },
  {
    q: "Hangi sigorta şirketleriyle çalışıyorsunuz?",
    a: "Anadolu Sigorta, Allianz, AXA, Aksigorta, Sompo, HDI, MAPFRE, Zurich ve Türkiye Sigorta dahil 25'ten fazla lider şirketin yetkili acentesiyiz.",
  },
];

const steps = [
  {
    icon: "phoneCall",
    title: "Bize Ulaşın",
    desc: "Telefon, WhatsApp veya formla ihtiyacınızı iletin; 1 iş günü içinde dönüş yapalım.",
  },
  {
    icon: "compare",
    title: "İhtiyaç Analizi ve Karşılaştırma",
    desc: "25+ şirketten teklif alır, fiyat ve teminatları tarafsızca yan yana koyarız.",
  },
  {
    icon: "shieldCheck",
    title: "Poliçeniz Hazır",
    desc: "Seçiminizin ardından poliçeniz aynı gün düzenlenir; yenileme ve hasarda yanınızdayız.",
  },
];

const valueProps = [
  {
    icon: "compare",
    title: "Tarafsız Danışmanlık",
    desc: "Tek şirkete bağlı değiliz; 25+ şirket arasından size gerçekten uyan teminatı öneririz.",
  },
  {
    icon: "user",
    title: "Tek Muhatap",
    desc: "Tekliften poliçeye, yenilemeden hasara kadar hep aynı danışmanla görüşürsünüz.",
  },
  {
    icon: "bell",
    title: "Hasarda 7/24 Takip",
    desc: "Hasar sürecinizi sizin adınıza yönetir, dosyanızı sonuna kadar takip ederiz.",
  },
  {
    icon: "calendar",
    title: "Yenileme Takibi",
    desc: "Poliçe bitiş tarihlerinizi biz takip eder, süresi dolmadan sizi ararız.",
  },
];

const testimonials = [
  {
    name: "Murat K.",
    city: "Ataşehir",
    product: "Kasko",
    text: "Yenileme döneminde beş şirketten teklif alıp karşılaştırdılar; eski fiyatımın %30 altında kasko yaptırdım. Tek telefonla hallettim.",
  },
  {
    name: "Elif D.",
    city: "Kadıköy",
    product: "Tamamlayıcı Sağlık",
    text: "Hangi hastanelerin ağda olduğunu poliçe öncesinde tek tek anlattılar. Sorularıma WhatsApp'tan dakikalar içinde yanıt geldi.",
  },
  {
    name: "Serkan A.",
    city: "Ümraniye",
    product: "Trafik Sigortası",
    text: "Kaza sonrası aradım, tutanaktan servise kadar tüm süreci onlar yürüttü. İyi ki bir acentem var dedirtti.",
  },
];

export default function HomePage() {
  return (
    <>
      <FaqJsonLd items={homeFaqs} />

      {/* ================= HERO ================= */}
      <section className="hero-bg relative overflow-hidden">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-12 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="rise rise-1 section-kicker">
              <Icon name="mapPin" className="h-3.5 w-3.5" />
              Ataşehir · {site.stats.partners} anlaşmalı sigorta şirketi
            </p>
            <h1 className="rise rise-2 text-4xl leading-[1.1] font-bold text-navy-950 sm:text-5xl lg:text-[3.4rem]">
              Sigortada{" "}
              <span className="relative whitespace-nowrap text-brand-600">
                ustasına
                <svg
                  viewBox="0 0 200 12"
                  className="absolute -bottom-1 left-0 w-full text-accent-400"
                  aria-hidden="true"
                >
                  <path d="M2 9c50-7 146-7 196 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>{" "}
              danışın.
            </h1>
            <p className="rise rise-3 mt-5 max-w-lg text-lg leading-7 text-navy-900/70">
              Kasko&apos;dan DASK&apos;a 14 sigorta branşında {site.stats.partners} şirket arasından
              size en uygun poliçeyi buluyor; yenilemeden hasara kadar yanınızda duruyoruz.
            </p>

            <div className="rise rise-4 mt-8 flex flex-wrap gap-3">
              <Link href="/iletisim" className="btn-accent btn-lg">
                Bize Ulaşın
                <Icon name="arrowRight" className="h-5 w-5" />
              </Link>
              <a href={site.phoneHref} className="btn-outline btn-lg">
                <Icon name="phoneCall" className="h-5 w-5" />
                {site.phone}
              </a>
            </div>

            <div className="rise rise-5 mt-8 flex flex-wrap items-center gap-6 text-sm text-navy-900/70">
              <span className="flex items-center gap-2">
                <Icon name="user" className="h-5 w-5 text-brand-600" />
                <strong className="text-navy-950">{site.stats.customers}</strong> mutlu müşteri
              </span>
              <span className="flex items-center gap-2">
                <Icon name="shieldCheck" className="h-5 w-5 text-brand-600" />
                <strong className="text-navy-950">{site.stats.experience} yıl</strong> deneyim
              </span>
              <span className="flex items-center gap-2">
                <Icon name="bell" className="h-5 w-5 text-brand-600" />
                <strong className="text-navy-950">7/24</strong> hasar desteği
              </span>
            </div>
          </div>

          {/* Branş seçimi */}
          <div className="rise rise-3">
            <div className="card p-6 shadow-lift sm:p-8">
              <h2 className="mb-1 text-lg font-bold text-navy-950">Hangi sigorta için danışmak istiyorsunuz?</h2>
              <p className="mb-5 text-sm text-navy-900/60">Branşı seçin, detayları inceleyin; danışmanımız sizi arasın.</p>
              <div className="grid grid-cols-3 gap-3">
                {popularProducts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/sigorta/${p.slug}`}
                    className="group flex flex-col items-center gap-2 rounded-2xl border border-navy-900/8 bg-white p-4 text-center transition-all hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-card"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      <Icon name={p.icon} className="h-6 w-6" />
                    </span>
                    <span className="text-xs leading-tight font-semibold text-navy-950">{p.shortName}</span>
                  </Link>
                ))}
                <Link
                  href="/sigortalar"
                  className="group flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-brand-300 bg-brand-50/50 p-4 text-center transition-all hover:-translate-y-0.5 hover:border-brand-600"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl text-brand-600">
                    <Icon name="arrowRight" className="h-6 w-6" />
                  </span>
                  <span className="text-xs leading-tight font-semibold text-brand-700">
                    Tümü ({products.length})
                  </span>
                </Link>
              </div>
              <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-navy-900/50">
                <Icon name="lock" className="h-3.5 w-3.5" />
                Ücretsiz ihtiyaç analizi · yükümlülük yok
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NASIL ÇALIŞIR ================= */}
      <section className="container-x py-16 lg:py-20" aria-labelledby="nasil-calisir">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
          <Image
            src={pageImage("anasayfa").src}
            alt={pageImage("anasayfa").alt}
            width={800}
            height={600}
            unoptimized
            sizes="(max-width: 1024px) 100vw, 500px"
            className="w-full rounded-3xl border border-navy-900/8 shadow-[var(--shadow-card)]"
          />
          <div>
            <p className="section-kicker">Nasıl çalışıyoruz?</p>
            <h2 id="nasil-calisir" className="section-title">
              3 adımda usta işi sigorta
            </h2>
            <ol className="mt-8 space-y-5">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-bold text-navy-950">
                      <span className="mr-2 text-brand-600">{i + 1}.</span>
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-navy-900/60">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ================= ÜRÜNLER ================= */}
      <section className="bg-cloud-50 py-16 lg:py-20" aria-labelledby="urunler">
        <div className="container-x">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-kicker">Hizmetlerimiz</p>
              <h2 id="urunler" className="section-title">
                Tüm sigorta branşları tek adreste
              </h2>
            </div>
            <Link href="/sigortalar" className="btn-outline btn-md">
              Tümünü Gör
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARTNER ŞİRKETLER ================= */}
      <section className="overflow-hidden py-16" aria-labelledby="partnerler">
        <div className="container-x mb-8 text-center">
          <p className="section-kicker">İş Ortaklarımız</p>
          <h2 id="partnerler" className="section-title">
            Türkiye&apos;nin lider sigorta şirketlerinin yetkili acentesiyiz
          </h2>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
          <div className="flex w-max animate-marquee gap-4">
            {[...insurers, ...insurers].map((ins, i) => (
              <div
                key={`${ins.id}-${i}`}
                className="card flex w-52 items-center gap-3 px-5 py-4"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
                  style={{ backgroundColor: ins.color }}
                >
                  {ins.short}
                </span>
                <div>
                  <p className="text-sm font-bold text-navy-950">{ins.name}</p>
                  <p className="text-xs text-navy-900/50">{ins.founded}&apos;den beri</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container-x mt-8 text-center">
          <Link href="/sigorta-sirketleri" className="text-sm font-bold text-brand-700 hover:underline">
            Tüm anlaşmalı şirketleri inceleyin →
          </Link>
        </div>
      </section>

      {/* ================= NEDEN BİZ ================= */}
      <section className="bg-navy-950 py-16 text-white lg:py-20" aria-labelledby="neden-biz">
        <div className="container-x">
          <div className="mb-10 text-center">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-brand-300 uppercase">
              Neden Usta Sigorta?
            </p>
            <h2 id="neden-biz" className="text-2xl font-bold sm:text-3xl lg:text-4xl">
              Sigortayı sizin için kolaylaştırıyoruz
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v) => (
              <div key={v.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/20 text-brand-300">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 text-center sm:grid-cols-4">
            {[
              [site.stats.customers, "Mutlu müşteri"],
              [site.stats.partners, "Anlaşmalı şirket"],
              [`${site.stats.products} branş`, "Sigorta ürünü"],
              [`${site.stats.experience} yıl`, "Sektör deneyimi"],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="font-display text-3xl font-bold text-brand-300">{num}</p>
                <p className="mt-1 text-sm text-white/50">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KURUCU ================= */}
      <section className="container-x py-16 lg:py-20" aria-labelledby="kurucu">
        <div className="card grid gap-8 p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:p-10">
          <span className="flex h-24 w-24 items-center justify-center rounded-3xl bg-navy-900 font-display text-3xl font-bold text-white">
            {site.founder.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
          <div>
            <p className="section-kicker">Sizinle Görüşecek Kişi</p>
            <h2 id="kurucu" className="text-2xl font-bold text-navy-950">
              {site.founder.name} — {site.founder.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-navy-900/70">
              &quot;Sigorta, satıldığı gün değil hasar günü anlaşılır. Bu yüzden her müşterimizle
              tekliften yenilemeye, hasardan tazminata kadar bizzat ilgileniyoruz. Aracı yok,
              çağrı merkezi sırası yok; doğrudan ulaşırsınız.&quot;
            </p>
          </div>
          <div className="flex flex-col gap-2 lg:w-52">
            <a href={site.founder.phoneHref} className="btn-primary btn-md">
              <Icon name="phoneCall" className="h-4 w-4" />
              {site.founder.phone}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn-md"
            >
              <Icon name="whatsapp" className="h-4 w-4 text-emerald-500" />
              WhatsApp
            </a>
            <Link href="/hakkimizda" className="text-center text-sm font-semibold text-brand-700 hover:underline">
              Hakkımızda →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= MÜŞTERİ YORUMLARI ================= */}
      <section className="bg-cloud-50 py-16 lg:py-20" aria-labelledby="yorumlar">
        <div className="container-x">
          <div className="mb-10 text-center">
            <p className="section-kicker">Müşterilerimiz Anlatıyor</p>
            <h2 id="yorumlar" className="section-title">
              Müşterilerimiz neden bizi tercih ediyor?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="card flex flex-col p-6">
                <div className="mb-3 flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="flex-1 text-sm leading-6 text-navy-900/75">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-navy-900/8 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                    {t.name[0]}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy-950">{t.name}</p>
                    <p className="text-xs text-navy-900/50">
                      {t.city} — {t.product}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BLOG ================= */}
      <section className="container-x py-16 lg:py-20" aria-labelledby="blog-basligi">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-kicker">Sigorta Rehberi</p>
            <h2 id="blog-basligi" className="section-title">
              Bilinçli sigortalı olun
            </h2>
          </div>
          <Link href="/blog" className="btn-outline btn-md">
            Tüm Yazılar
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <article key={post.slug} className="card group relative flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift">
              <span className="badge mb-4 w-fit bg-brand-50 text-brand-700">{post.category}</span>
              <h3 className="text-base leading-6 font-bold text-navy-950">
                <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-navy-900/60">{post.excerpt}</p>
              <p className="mt-4 flex items-center gap-2 text-xs text-navy-900/50">
                <Icon name="calendar" className="h-3.5 w-3.5" />
                {formatDate(post.date)} · {post.readMinutes} dk okuma
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= SSS ================= */}
      <section className="bg-cloud-50 py-16 lg:py-20" aria-labelledby="sss-basligi">
        <div className="container-x mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="section-kicker">Merak Edilenler</p>
            <h2 id="sss-basligi" className="section-title">
              Sık sorulan sorular
            </h2>
          </div>
          <FaqList items={homeFaqs} />
          <p className="mt-6 text-center text-sm text-navy-900/60">
            Başka sorunuz mu var?{" "}
            <Link href="/sss" className="font-bold text-brand-700 hover:underline">
              Tüm soruları görüntüleyin
            </Link>
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="container-x py-16 lg:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-12 text-center text-white sm:px-12">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, white 1.5px, transparent 1.5px), radial-gradient(circle at 80% 20%, white 1.5px, transparent 1.5px)",
              backgroundSize: "40px 40px",
            }}
            aria-hidden="true"
          />
          <h2 className="relative text-2xl font-bold sm:text-3xl">
            Sigortanızı ustasına bırakın
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-white/80">
            Bize ulaşın; ihtiyaç analizinizi yapalım, {site.stats.partners} şirketten teklif alıp
            en uygununu birlikte seçelim. Danışmanlık ücretsiz.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/iletisim" className="btn-accent btn-lg">
              Bize Ulaşın
              <Icon name="arrowRight" className="h-5 w-5" />
            </Link>
            <a href={site.phoneHref} className="btn btn-lg bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20">
              <Icon name="phoneCall" className="h-5 w-5" />
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
