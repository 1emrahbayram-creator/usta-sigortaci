import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { productImage } from "@/lib/images";
import { Icon } from "./icons";

export function ProductCard({ product }: { product: Product }) {
  const img = productImage(product.slug);
  return (
    <article className="card group relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative border-b border-navy-900/8 bg-cloud-50">
        <Image
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {product.popular && (
          <span className="badge absolute top-3 right-3 bg-white text-brand-700 shadow-card">
            Popüler
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-navy-950">
          <Link href={`/sigorta/${product.slug}`} className="after:absolute after:inset-0">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-6 text-navy-900/60">{product.tagline}</p>
        <p className="mt-4 flex items-center gap-1.5 border-t border-navy-900/8 pt-4 text-sm font-semibold text-brand-700">
          Detaylı bilgi
          <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </p>
      </div>
    </article>
  );
}
