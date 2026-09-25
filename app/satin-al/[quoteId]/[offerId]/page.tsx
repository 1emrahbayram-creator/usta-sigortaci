import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { CheckoutForm } from "@/components/checkout-form";
import { Icon } from "@/components/icons";
import { getSessionUser } from "@/lib/auth";
import { getQuote } from "@/lib/db";
import { formatTL } from "@/lib/format";
import { getInsurer } from "@/lib/insurers";
import { getProduct } from "@/lib/products";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Güvenli Ödeme",
  robots: { index: false, follow: false },
};

type Props = { params: Promise<{ quoteId: string; offerId: string }> };

export default async function CheckoutPage({ params }: Props) {
  const { quoteId, offerId } = await params;

  const user = await getSessionUser();
  if (!user) {
    redirect(`/giris?next=/satin-al/${quoteId}/${offerId}`);
  }

  const quote = getQuote(quoteId);
  const offer = quote?.offers.find((o) => o.id === offerId);
  if (!quote || !offer) notFound();

  const product = getProduct(quote.productSlug);
  const insurer = getInsurer(offer.insurerId);

  return (
    <div className="bg-cloud-50 min-h-screen">
      <div className="container-x py-10">
        <h1 className="mb-8 flex items-center gap-3 text-2xl font-bold text-navy-950 sm:text-3xl">
          <Icon name="lock" className="h-7 w-7 text-brand-600" />
          Güvenli Ödeme
        </h1>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <CheckoutForm quoteId={quote.id} offerId={offer.id} price={offer.price} />

          <aside className="space-y-5 lg:order-first lg:sticky lg:top-32 lg:self-start">
            <div className="card p-6">
              <h2 className="mb-4 text-sm font-bold tracking-wide text-navy-900/50 uppercase">
                Sipariş Özeti
              </h2>
              <div className="flex items-center gap-3 border-b border-navy-900/8 pb-4">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold text-white"
                  style={{ backgroundColor: insurer?.color }}
                >
                  {insurer?.short}
                </span>
                <div>
                  <p className="font-bold text-navy-950">{insurer?.name}</p>
                  <p className="text-xs text-navy-900/60">{product?.name}</p>
                </div>
              </div>
              <ul className="space-y-2 border-b border-navy-900/8 py-4">
                {offer.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-navy-900/70">
                    <Icon name="check" className="h-3.5 w-3.5 text-emerald-500" strokeWidth={2.5} />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4">
                <span className="text-sm text-navy-900/60">Toplam</span>
                <div className="text-right">
                  <p className="text-2xl font-bold text-navy-950">{formatTL(offer.price)}</p>
                  <p className="text-xs text-navy-900/50">veya 12 x {formatTL(offer.monthly)}</p>
                </div>
              </div>
            </div>

            <div className="card flex items-center gap-3 p-4 text-xs text-navy-900/60">
              <Icon name="user" className="h-5 w-5 shrink-0 text-brand-600" />
              <p>
                <strong className="text-navy-950">{user.name}</strong> hesabıyla satın alıyorsunuz.
                Poliçeniz hesabınıza tanımlanacak.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
