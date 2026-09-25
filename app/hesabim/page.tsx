import Link from "next/link";
import { Icon } from "@/components/icons";
import { getSessionUser } from "@/lib/auth";
import { getPoliciesByUser, getQuotesByUser } from "@/lib/db";
import { formatDate } from "@/lib/format";
import { getProduct } from "@/lib/products";

export const dynamic = "force-dynamic";

export default async function AccountOverviewPage() {
  const user = (await getSessionUser())!;
  const quotes = getQuotesByUser(user.id);
  const policies = getPoliciesByUser(user.id);

  const upcoming = policies
    .filter((p) => {
      const days = Math.ceil((new Date(p.endDate).getTime() - Date.now()) / 86400000);
      return days > 0 && days <= 45;
    })
    .sort((a, b) => a.endDate.localeCompare(b.endDate));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-950">
          Hoş geldiniz, {user.name.split(" ")[0]} 👋
        </h1>
        <p className="mt-1 text-sm text-navy-900/60">
          Teklifleriniz, poliçeleriniz ve yenileme tarihleriniz tek ekranda.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Link href="/hesabim/tekliflerim" className="card group p-5 transition-all hover:shadow-lift">
          <Icon name="document" className="mb-3 h-7 w-7 text-brand-600" />
          <p className="font-display text-3xl font-bold text-navy-950">{quotes.length}</p>
          <p className="text-sm text-navy-900/60">Alınan teklif</p>
        </Link>
        <Link href="/hesabim/policelerim" className="card group p-5 transition-all hover:shadow-lift">
          <Icon name="shieldCheck" className="mb-3 h-7 w-7 text-emerald-600" />
          <p className="font-display text-3xl font-bold text-navy-950">{policies.length}</p>
          <p className="text-sm text-navy-900/60">Aktif poliçe</p>
        </Link>
        <div className="card p-5">
          <Icon name="bell" className="mb-3 h-7 w-7 text-accent-500" />
          <p className="font-display text-3xl font-bold text-navy-950">{upcoming.length}</p>
          <p className="text-sm text-navy-900/60">Yaklaşan yenileme</p>
        </div>
      </div>

      {upcoming.length > 0 && (
        <section className="card p-6" aria-labelledby="yenilemeler">
          <h2 id="yenilemeler" className="mb-4 flex items-center gap-2 font-bold text-navy-950">
            <Icon name="bell" className="h-5 w-5 text-accent-500" />
            Yaklaşan Yenilemeler
          </h2>
          <ul className="space-y-3">
            {upcoming.map((p) => {
              const product = getProduct(p.productSlug);
              const days = Math.ceil((new Date(p.endDate).getTime() - Date.now()) / 86400000);
              return (
                <li
                  key={p.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-accent-50 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-bold text-navy-950">{product?.name}</p>
                    <p className="text-xs text-navy-900/60">
                      Bitiş: {formatDate(p.endDate)} — <strong className="text-accent-600">{days} gün kaldı</strong>
                    </p>
                  </div>
                  <Link href={`/teklif/${p.productSlug}`} className="btn-accent btn-sm">
                    Şimdi Yenile
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <section className="card p-6" aria-labelledby="hizli">
        <h2 id="hizli" className="mb-4 font-bold text-navy-950">
          Yeni teklif alın
        </h2>
        <div className="flex flex-wrap gap-2">
          {["kasko", "trafik-sigortasi", "dask", "tamamlayici-saglik-sigortasi", "seyahat-saglik-sigortasi"].map(
            (slug) => {
              const p = getProduct(slug);
              if (!p) return null;
              return (
                <Link
                  key={slug}
                  href={`/teklif/${slug}`}
                  className="badge bg-brand-50 text-brand-700 transition-colors hover:bg-brand-600 hover:text-white"
                >
                  <Icon name={p.icon} className="h-3.5 w-3.5" />
                  {p.shortName}
                </Link>
              );
            }
          )}
        </div>
      </section>
    </div>
  );
}
