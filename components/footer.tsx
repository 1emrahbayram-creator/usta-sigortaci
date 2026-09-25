import Link from "next/link";
import { Icon } from "./icons";
import { site } from "@/lib/site";
import { products } from "@/lib/products";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
              <Icon name="shieldCheck" className="h-5.5 w-5.5" strokeWidth={2} />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              usta<span className="text-brand-400">sigortacı</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
            {site.tagline}. {site.stats.partners} sigorta şirketinden anında teklif
            karşılaştırın, poliçenizi online satın alın, hasar anında yanınızda olalım.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/70">
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-white">
              <Icon name="phoneCall" className="h-4 w-4 text-brand-400" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
              <Icon name="mail" className="h-4 w-4 text-brand-400" /> {site.email}
            </a>
            <p className="flex items-start gap-2">
              <Icon name="mapPin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" /> {site.address}
            </p>
          </div>
        </div>

        <nav aria-label="Araç ve konut sigortaları">
          <p className="mb-4 text-sm font-bold tracking-wide text-white/40 uppercase">Sigortalar</p>
          <ul className="space-y-2.5 text-sm text-white/70">
            {products.slice(0, 7).map((p) => (
              <li key={p.slug}>
                <Link href={`/sigorta/${p.slug}`} className="hover:text-white">{p.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Diğer sigortalar">
          <p className="mb-4 text-sm font-bold tracking-wide text-white/40 uppercase">&nbsp;</p>
          <ul className="space-y-2.5 text-sm text-white/70">
            {products.slice(7).map((p) => (
              <li key={p.slug}>
                <Link href={`/sigorta/${p.slug}`} className="hover:text-white">{p.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Kurumsal">
          <p className="mb-4 text-sm font-bold tracking-wide text-white/40 uppercase">Kurumsal</p>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li><Link href="/hakkimizda" className="hover:text-white">Hakkımızda</Link></li>
            <li><Link href="/sigorta-sirketleri" className="hover:text-white">Sigorta Şirketleri</Link></li>
            <li><Link href="/hasar-aninda" className="hover:text-white">Hasar Anında</Link></li>
            <li><Link href="/sigorta-sozlugu" className="hover:text-white">Sigorta Sözlüğü</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/sss" className="hover:text-white">Sık Sorulan Sorular</Link></li>
            <li><Link href="/iletisim" className="hover:text-white">İletişim</Link></li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>© 2026 {site.name}. Tüm hakları saklıdır.</p>
          <p className="max-w-xl text-center sm:text-right">
            Usta Sigortacı bir sigorta brokerlik platformudur. Poliçeler, anlaşmalı sigorta
            şirketleri tarafından düzenlenir. Bu site demo amaçlı hazırlanmıştır.
          </p>
        </div>
      </div>
    </footer>
  );
}
