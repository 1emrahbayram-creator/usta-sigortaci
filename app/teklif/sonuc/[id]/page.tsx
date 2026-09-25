import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { OfferList } from "@/components/offer-list";
import { Icon } from "@/components/icons";
import { getQuote } from "@/lib/db";
import { getProduct } from "@/lib/products";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Teklif Sonuçları",
  robots: { index: false, follow: false },
};

type Props = { params: Promise<{ id: string }> };

export default async function QuoteResultPage({ params }: Props) {
  const { id } = await params;
  const quote = getQuote(id);
  if (!quote) notFound();

  const product = getProduct(quote.productSlug);

  return (
    <div className="bg-cloud-50 min-h-screen">
      <div className="container-x py-10">
        <div className="mb-8">
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-emerald-600">
            <Icon name="shieldCheck" className="h-5 w-5" />
            Teklifleriniz hazır!
          </p>
          <h1 className="text-2xl font-bold text-navy-950 sm:text-3xl">
            {product?.name ?? "Sigorta"} Teklifleriniz
          </h1>
          <div className="mt-3 flex flex-wrap gap-2">
            {Object.entries(quote.details)
              .slice(0, 4)
              .map(([k, v]) =>
                v ? (
                  <span key={k} className="badge bg-white text-navy-900/70 ring-1 ring-navy-900/10">
                    {v}
                  </span>
                ) : null
              )}
          </div>
        </div>

        <OfferList quoteId={quote.id} offers={quote.offers} />

        <div className="card mt-10 flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:text-left">
          <Icon name="headset" className="h-10 w-10 shrink-0 text-brand-600" />
          <div className="flex-1">
            <p className="font-bold text-navy-950">Karar vermekte zorlanıyor musunuz?</p>
            <p className="text-sm text-navy-900/60">
              Uzman danışmanlarımız teminatları birlikte incelemek için bir telefon uzağınızda.
            </p>
          </div>
          <a href={site.phoneHref} className="btn-primary btn-md whitespace-nowrap">
            {site.phone}
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-navy-900/50">
          Fiyatlar sigorta şirketlerinden anlık alınmıştır ve poliçeleşme anına kadar değişebilir.{" "}
          <Link href="/sss" className="font-semibold text-brand-700 hover:underline">
            Detaylı bilgi
          </Link>
        </p>
      </div>
    </div>
  );
}
