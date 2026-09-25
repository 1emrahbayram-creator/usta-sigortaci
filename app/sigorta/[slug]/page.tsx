import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqJsonLd, FaqList } from "@/components/faq";
import { Icon } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { formatTL } from "@/lib/format";
import { getProduct, products } from "@/lib/products";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: { absolute: product.metaTitle },
    description: product.metaDescription,
    keywords: product.keywords,
    alternates: { canonical: `/sigorta/${product.slug}` },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: `${site.url}/sigorta/${product.slug}`,
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: product.name,
    serviceType: product.name,
    description: product.metaDescription,
    areaServed: { "@type": "Country", name: "Türkiye" },
    provider: { "@type": "InsuranceAgency", name: site.name, url: site.url },
    offers: {
      "@type": "Offer",
      price: product.priceFrom,
      priceCurrency: "TRY",
      description: "Başlangıç fiyatı — kişisel bilgilere göre değişir",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <FaqJsonLd items={product.faqs} />

      {/* Hero */}
      <section className="hero-bg">
        <div className="container-x py-10">
          <Breadcrumbs
            items={[{ name: "Sigortalar", href: "/sigortalar" }, { name: product.shortName }]}
          />
          <div className="mt-8 grid items-center gap-10 pb-6 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-600 text-white shadow-lift">
                <Icon name={product.icon} className="h-9 w-9" />
              </span>
              <h1 className="text-3xl leading-tight font-bold text-navy-950 sm:text-4xl lg:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-7 text-navy-900/70">{product.heroDesc}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href={`/teklif/${product.slug}`} className="btn-accent btn-lg">
                  Hemen Teklif Al
                  <Icon name="arrowRight" className="h-5 w-5" />
                </Link>
                <a href={site.phoneHref} className="btn-outline btn-lg">
                  <Icon name="phoneCall" className="h-5 w-5" />
                  Uzmana Danış
                </a>
              </div>
              <p className="mt-5 text-sm text-navy-900/60">
                Yıllık <strong className="text-navy-950">{formatTL(product.priceFrom)}</strong>
                &apos;den başlayan fiyatlarla · 2 dakikada sonuç
              </p>
            </div>

            <div className="card p-6 sm:p-8">
              <h2 className="mb-4 flex items-center gap-2 text-base font-bold text-navy-950">
                <Icon name="shieldCheck" className="h-5 w-5 text-brand-600" />
                Neler Teminat Altında?
              </h2>
              <ul className="grid gap-3">
                {product.coverages.slice(0, 6).map((c) => (
                  <li key={c.title} className="flex items-start gap-3">
                    <Icon
                      name="check"
                      className="mt-0.5 h-4.5 w-4.5 shrink-0 rounded-full bg-emerald-100 p-0.5 text-emerald-600"
                      strokeWidth={2.5}
                    />
                    <div>
                      <p className="text-sm font-semibold text-navy-950">{c.title}</p>
                      <p className="text-xs text-navy-900/60">{c.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tüm teminatlar */}
      {product.coverages.length > 6 && (
        <section className="container-x py-14" aria-labelledby="teminatlar">
          <h2 id="teminatlar" className="section-title mb-8">
            Tüm Teminatlar
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.coverages.map((c) => (
              <div key={c.title} className="card p-5">
                <Icon name="shieldCheck" className="mb-3 h-6 w-6 text-brand-600" />
                <h3 className="text-sm font-bold text-navy-950">{c.title}</h3>
                <p className="mt-1 text-xs leading-5 text-navy-900/60">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SEO içerik */}
      <section className="bg-cloud-50 py-14">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_360px]">
          <article className="prose-tr max-w-3xl">
            {product.sections.map((s) => (
              <div key={s.h}>
                <h2>{s.h}</h2>
                {s.p.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            ))}
          </article>

          <aside className="space-y-5 lg:sticky lg:top-32 lg:self-start">
            <div className="card bg-navy-950 p-6 text-white">
              <h3 className="text-lg font-bold">2 dakikada teklifiniz hazır</h3>
              <p className="mt-2 text-sm text-white/60">
                {site.stats.partners} şirketin {product.shortName.toLowerCase()} tekliflerini
                ücretsiz karşılaştırın.
              </p>
              <Link href={`/teklif/${product.slug}`} className="btn-accent btn-md mt-5 w-full">
                Teklif Al
              </Link>
            </div>
            <div className="card p-6">
              <h3 className="flex items-center gap-2 text-sm font-bold text-navy-950">
                <Icon name="headset" className="h-5 w-5 text-brand-600" />
                Sorularınız mı var?
              </h3>
              <p className="mt-2 text-xs text-navy-900/60">
                SEGEM sertifikalı danışmanlarımız hafta içi 08:30 - 20:00 arasında yanınızda.
              </p>
              <a href={site.phoneHref} className="btn-outline btn-sm mt-4 w-full">
                {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* SSS */}
      <section className="container-x py-14" aria-labelledby="urun-sss">
        <div className="mx-auto max-w-3xl">
          <h2 id="urun-sss" className="section-title mb-8 text-center">
            {product.shortName} Hakkında Sık Sorulanlar
          </h2>
          <FaqList items={product.faqs} />
        </div>
      </section>

      {/* İlgili ürünler */}
      {related.length > 0 && (
        <section className="container-x pb-16" aria-labelledby="ilgili">
          <h2 id="ilgili" className="section-title mb-8">
            Bunlar da ilginizi çekebilir
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
