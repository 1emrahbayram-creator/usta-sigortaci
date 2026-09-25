import Link from "next/link";
import { Icon } from "@/components/icons";
import { getSessionUser } from "@/lib/auth";
import { getQuotesByUser } from "@/lib/db";
import { formatDate, formatTL } from "@/lib/format";
import { getProduct } from "@/lib/products";

export const dynamic = "force-dynamic";

export default async function MyQuotesPage() {
  const user = (await getSessionUser())!;
  const quotes = getQuotesByUser(user.id);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-navy-950">Tekliflerim</h1>

      {quotes.length === 0 ? (
        <div className="card p-10 text-center">
          <Icon name="document" className="mx-auto mb-4 h-12 w-12 text-navy-900/20" />
          <p className="font-bold text-navy-950">Henüz kayıtlı teklifiniz yok</p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-navy-900/60">
            Giriş yaptıktan sonra aldığınız tüm teklifler burada saklanır; dilediğiniz zaman geri
            dönüp karşılaştırmaya devam edebilirsiniz.
          </p>
          <Link href="/sigortalar" className="btn-primary btn-md mt-6">
            Teklif Al
          </Link>
        </div>
      ) : (
        <ul className="space-y-4">
          {quotes.map((q) => {
            const product = getProduct(q.productSlug);
            const cheapest = Math.min(...q.offers.map((o) => o.price));
            return (
              <li key={q.id} className="card flex flex-wrap items-center gap-4 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={product?.icon ?? "shield"} className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-navy-950">{product?.name}</p>
                  <p className="text-xs text-navy-900/60">
                    {formatDate(q.createdAt)} · {q.offers.length} teklif · en uygun{" "}
                    <strong className="text-emerald-600">{formatTL(cheapest)}</strong>
                  </p>
                </div>
                <Link href={`/teklif/sonuc/${q.id}`} className="btn-outline btn-sm">
                  Teklifleri Gör
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
