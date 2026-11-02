import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { FaqJsonLd, FaqList } from "@/components/faq";
import { Icon } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { productImage } from "@/lib/images";
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

  const img = productImage(product.slug);
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: product.name,
    serviceType: product.name,
    description: product.metaDescription,
    image: [`${site.url}/sigorta/${product.slug}/opengraph-image`, `${site.url}${img.src}`],
    areaServed: { "@type": "City", name: "İstanbul" },
    provider: {
      "@type": "InsuranceAgency",
      name: site.legalName,
      url: site.url,
      telephone: site.phone,
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
                <a href="#bilgi-formu" className="btn-accent btn-lg">
                  Bilgi ve Teklif İsteyin
                  <Icon name="arrowRight" className="h-5 w-5" />
                </a>
                <a href={site.phoneHref} className="btn-outline btn-lg">
                  <Icon name="phoneCall" className="h-5 w-5" />
                  {site.phone}
                </a>
              </div>
              <p className="mt-5 text-sm text-navy-900/60">
                Ücretsiz ihtiyaç analizi · {site.stats.partners} şirketten karşılaştırma · aynı gün poliçe
              </p>
            </div>

            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              priority
              unoptimized
              sizes="(max-width: 1024px) 100vw, 520px"
              className="w-full rounded-3xl border border-navy-900/8 shadow-[var(--shadow-card)]"
            />
          </div>
        </div>
      </section>

      {/* Teminatlar */}
      {product.coverages.length > 0 && (
        <section className="container-x py-14" aria-labelledby="teminatlar">
          <h2 id="teminatlar" className="section-title mb-2">
            Neler Teminat Altında?
          </h2>
          <p className="mb-8 max-w-2xl text-navy-900/60">
            {product.shortName} poliçenizde yer alabilecek teminatlar. Hangilerinin size gerekli
            olduğunu danışmanımızla birlikte belirleyelim.
          </p>
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

      {/* SEO içerik + bilgi formu */}
      <section className="bg-cloud-50 py-14">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_380px]">
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

          <aside id="bilgi-formu" className="space-y-5 scroll-mt-28 lg:sticky lg:top-32 lg:self-start">
            <ContactForm defaultTopic={product.slug} compact />
            <div className="card p-6">
              <h3 className="flex items-center gap-2 text-sm font-bold text-navy-950">
                <Icon name="headset" className="h-5 w-5 text-brand-600" />
                Hemen görüşmek ister misiniz?
              </h3>
              <p className="mt-2 text-xs text-navy-900/60">
                {site.founder.name}, {site.workingHours.toLowerCase()} arasında doğrudan ulaşabileceğiniz danışmanınız.
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
