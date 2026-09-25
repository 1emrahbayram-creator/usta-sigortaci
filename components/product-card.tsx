import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatTL } from "@/lib/format";
import { Icon } from "./icons";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card group relative flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      {product.popular && (
        <span className="badge absolute top-4 right-4 bg-accent-50 text-accent-600">Popüler</span>
      )}
      <span className="mb-4 flex h-13 w-13 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <Icon name={product.icon} className="h-7 w-7" />
      </span>
      <h3 className="text-lg font-bold text-navy-950">
        <Link href={`/sigorta/${product.slug}`} className="after:absolute after:inset-0">
          {product.name}
        </Link>
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-6 text-navy-900/60">{product.tagline}</p>
      <div className="mt-4 flex items-center justify-between border-t border-navy-900/8 pt-4">
        <p className="text-xs text-navy-900/50">
          <span className="block">Yıllık</span>
          <strong className="text-base text-navy-950">{formatTL(product.priceFrom)}</strong>
          <span>&apos;den başlayan</span>
        </p>
        <span className="btn-primary btn-sm pointer-events-none relative z-10 opacity-90 group-hover:opacity-100">
          Teklif Al
        </span>
      </div>
    </article>
  );
}
