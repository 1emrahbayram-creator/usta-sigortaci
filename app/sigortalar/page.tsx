import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductCard } from "@/components/product-card";
import { categoryLabels, getProductsByCategory, type ProductCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "Tüm Sigorta Ürünleri | 14 Türde Anında Teklif",
  description:
    "Kasko, trafik, DASK, sağlık, konut, seyahat ve daha fazlası. 14 sigorta türünde 25+ şirketten anında teklif alın, fiyatları karşılaştırın.",
  alternates: { canonical: "/sigortalar" },
};

const categories: ProductCategory[] = ["arac", "saglik", "konut", "yasam"];

export default function SigortalarPage() {
  return (
    <div className="container-x py-10">
      <Breadcrumbs items={[{ name: "Sigortalar" }]} />
      <div className="mt-6 mb-12 max-w-2xl">
        <h1 className="text-3xl font-bold text-navy-950 sm:text-4xl">Tüm Sigorta Ürünleri</h1>
        <p className="mt-3 text-navy-900/60">
          İhtiyacınız hangisiyse seçin; 25&apos;ten fazla sigorta şirketinin tekliflerini
          saniyeler içinde karşılaştırın.
        </p>
      </div>

      <div className="space-y-14">
        {categories.map((cat) => (
          <section key={cat} aria-labelledby={`cat-${cat}`}>
            <h2 id={`cat-${cat}`} className="mb-6 text-xl font-bold text-navy-950 sm:text-2xl">
              {categoryLabels[cat]}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {getProductsByCategory(cat).map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
