import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Icon } from "@/components/icons";
import { QuoteForm } from "@/components/quote-form";
import { getProduct, products } from "@/lib/products";
import { getQuoteForm } from "@/lib/quote-forms";
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
    title: `${product.name} Teklifi Al — 2 Dakikada Fiyat Karşılaştır`,
    description: `${product.name} için ${site.stats.partners} sigorta şirketinden anında teklif alın. Ücretsiz karşılaştırın, online satın alın.`,
    alternates: { canonical: `/teklif/${product.slug}` },
  };
}

const trust = [
  { icon: "lightning", text: "2 dakikada gerçek zamanlı teklifler" },
  { icon: "compare", text: "25+ şirketi tarafsız karşılaştırma" },
  { icon: "lock", text: "SSL ile şifrelenen kişisel veriler" },
  { icon: "headset", text: "Uzman danışman desteği" },
];

export default async function QuotePage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const steps = getQuoteForm(product.slug);

  return (
    <div className="hero-bg min-h-screen">
      <div className="container-x py-10">
        <Breadcrumbs
          items={[
            { name: "Sigortalar", href: "/sigortalar" },
            { name: product.shortName, href: `/sigorta/${product.slug}` },
            { name: "Teklif Al" },
          ]}
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px]">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-brand-600 text-white">
                <Icon name={product.icon} className="h-7 w-7" />
              </span>
              <div>
                <h1 className="text-2xl font-bold text-navy-950 sm:text-3xl">
                  {product.name} Teklifi
                </h1>
                <p className="text-sm text-navy-900/60">{product.tagline}</p>
              </div>
            </div>

            <QuoteForm productSlug={product.slug} steps={steps} />
          </div>

          <aside className="space-y-5 lg:sticky lg:top-32 lg:self-start">
            <div className="card p-6">
              <h2 className="mb-4 text-sm font-bold text-navy-950">Neden Usta Sigortacı?</h2>
              <ul className="space-y-3">
                {trust.map((t) => (
                  <li key={t.text} className="flex items-center gap-3 text-sm text-navy-900/70">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <Icon name={t.icon} className="h-4.5 w-4.5" />
                    </span>
                    {t.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 text-center">
              <Icon name="headset" className="mx-auto mb-2 h-8 w-8 text-brand-600" />
              <p className="text-sm font-semibold text-navy-950">Yardıma mı ihtiyacınız var?</p>
              <p className="mt-1 text-xs text-navy-900/60">{site.workingHours}</p>
              <a href={site.phoneHref} className="btn-primary btn-sm mt-4 w-full">
                {site.phone}
              </a>
            </div>

            <p className="text-center text-xs text-navy-900/50">
              Ürün detaylarını incelemek için{" "}
              <Link href={`/sigorta/${product.slug}`} className="font-semibold text-brand-700 hover:underline">
                {product.name}
              </Link>{" "}
              sayfasına göz atın.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
