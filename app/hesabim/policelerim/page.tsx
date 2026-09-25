import Link from "next/link";
import { Icon } from "@/components/icons";
import { getSessionUser } from "@/lib/auth";
import { getPoliciesByUser } from "@/lib/db";
import { formatDate, formatTL } from "@/lib/format";
import { getInsurer } from "@/lib/insurers";
import { getProduct } from "@/lib/products";

export const dynamic = "force-dynamic";

export default async function MyPoliciesPage() {
  const user = (await getSessionUser())!;
  const policies = getPoliciesByUser(user.id);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-navy-950">Poliçelerim</h1>

      {policies.length === 0 ? (
        <div className="card p-10 text-center">
          <Icon name="shieldCheck" className="mx-auto mb-4 h-12 w-12 text-navy-900/20" />
          <p className="font-bold text-navy-950">Henüz poliçeniz bulunmuyor</p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-navy-900/60">
            Satın aldığınız tüm poliçeler burada listelenir; bitiş tarihleri yaklaştığında sizi
            uyarırız.
          </p>
          <Link href="/sigortalar" className="btn-primary btn-md mt-6">
            İlk Poliçenizi Alın
          </Link>
        </div>
      ) : (
        <ul className="space-y-4">
          {policies.map((p) => {
            const product = getProduct(p.productSlug);
            const insurer = getInsurer(p.insurerId);
            const days = Math.ceil((new Date(p.endDate).getTime() - Date.now()) / 86400000);
            const expiring = days > 0 && days <= 45;
            return (
              <li key={p.id} className="card p-5">
                <div className="flex flex-wrap items-center gap-4">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
                    style={{ backgroundColor: insurer?.color }}
                  >
                    {insurer?.short}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-navy-950">{product?.name}</p>
                    <p className="text-xs text-navy-900/60">
                      {insurer?.name} · Poliçe No: <strong>{p.no}</strong>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-navy-950">{formatTL(p.price)}</p>
                    <p className="text-xs text-navy-900/50">yıllık prim</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-navy-900/8 pt-4">
                  <p className="flex items-center gap-2 text-xs text-navy-900/60">
                    <Icon name="calendar" className="h-4 w-4 text-brand-600" />
                    {formatDate(p.startDate)} — {formatDate(p.endDate)}
                    {expiring && (
                      <span className="badge bg-accent-50 text-accent-600">
                        <Icon name="bell" className="h-3 w-3" />
                        {days} gün kaldı
                      </span>
                    )}
                    {days <= 0 && (
                      <span className="badge bg-red-50 text-red-600">Süresi doldu</span>
                    )}
                  </p>
                  <div className="flex gap-2">
                    {(expiring || days <= 0) && (
                      <Link href={`/teklif/${p.productSlug}`} className="btn-accent btn-sm">
                        Yenile
                      </Link>
                    )}
                    <Link href="/hasar-aninda" className="btn-outline btn-sm">
                      Hasar Bildir
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
